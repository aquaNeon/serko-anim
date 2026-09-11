import * as THREE from "three";
import { GlobeCamera, angularDistance, midpoint } from "./camera.js";
import { createDots } from "./dots.js";
import { createGrid } from "./grid.js";
import { createRim } from "./rim.js";
import { Route } from "./route.js";
const MAX_DPR = 2;
const REF_RADIUS_PX = 500;
const SIZE_SCALE_RANGE = [0.7, 1.6];
class Stage {
  constructor(rootEl, layout) {
    this.root = rootEl;
    if (!rootEl.style.pointerEvents) rootEl.style.pointerEvents = "none";
    this.layout = layout;
    this.anchor = document.querySelector("[data-globe-anchor]") || rootEl;
    this.canvas = document.createElement("canvas");
    this.canvas.className = "globe-canvas";
    Object.assign(this.canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      display: "block",
      pointerEvents: "none"
    });
    rootEl.appendChild(this.canvas);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,

      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setClearColor(0, 0);
    this.scene = new THREE.Scene();
    this.globeCam = new GlobeCamera();
    this.globeCam.lookAtLatLng(layout.cameraLat, layout.cameraLng);
    this.gridOpts = {};
    this.dotOpts = {};
    this.rimOpts = {};
    this.grid = createGrid(this.gridOpts);
    this.dots = createDots(this.dotOpts);
    this.rim = createRim(this.rimOpts);
    this.scene.add(this.grid, this.dots, this.rim);
    this.routes = [];
    this._needsResize = true;
    this._size = { w: 0, h: 0, dpr: 0 };
    this._onFrame = [];
    this._ro = new ResizeObserver(() => {
      this._needsResize = true;
    });
    this._ro.observe(this.root);
    this._onWindowResize = () => {
      this._needsResize = true;
    };
    window.addEventListener("resize", this._onWindowResize);
    window.addEventListener("scroll", this._onWindowResize, { passive: true });
    this._raf = null;
    this._lastTime = 0;
    this.deltaSeconds = 0;
  }

  onFrame(fn) {
    this._onFrame.push(fn);
    return () => {
      const i = this._onFrame.indexOf(fn);
      if (i >= 0) this._onFrame.splice(i, 1);
    };
  }

  project(lat, lng, surfaceOffset = 0) {
    return this.globeCam.project(lat, lng, surfaceOffset);
  }
  _applyLayout() {
    const rect = this.root.getBoundingClientRect();
    const anchorRect = this.anchor.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    if (w !== this._size.w || h !== this._size.h || dpr !== this._size.dpr) {
      this.renderer.setPixelRatio(dpr);
      this.renderer.setSize(w, h, false);
      this._size = { w, h, dpr };
      this.dots.material.uniforms.uPixelRatio.value = dpr;
    }
    const anchorTop = anchorRect.top - rect.top;
    const centerX = anchorRect.left - rect.left + anchorRect.width / 2;
    let radiusPx;
    let centerY;

    if (this.layout.fitRoute > 0 && this.route) {
      const { from, to } = this.route;
      const theta = angularDistance(from.lat, from.lng, to.lat, to.lng);
      const span = Math.max(1, w * this.layout.fitRoute);
      radiusPx = span / (2 * Math.max(1e-6, Math.sin(theta / 2)));

      const mid = midpoint(from.lat, from.lng, to.lat, to.lng);
      this.globeCam.lookAtLatLng(mid.lat, mid.lng);

      this.globeCam.layout(w, h, { x: centerX, y: 0 }, radiusPx);
      const a = this.globeCam.project(from.lat, from.lng);
      const b = this.globeCam.project(to.lat, to.lng);
      const routeMidY = (a.y + b.y) / 2;
      const band = anchorRect.height || h;
      centerY = anchorTop + band * this.layout.routeY - routeMidY;
    } else {
      radiusPx = anchorRect.width * this.layout.radiusScale;
      if (this.layout.radiusMaxVh > 0) {
        const vh = window.innerHeight || rect.height || 1;
        radiusPx = Math.min(radiusPx, vh * this.layout.radiusMaxVh);
      }
      centerY = anchorTop + radiusPx * this.layout.centerYFactor;
      if (this.layout.apexClearance !== null) {
        centerY = Math.max(centerY, anchorTop + this.layout.apexClearance + radiusPx);
      }
    }

    const centerPx = { x: centerX, y: centerY };
    this.globeCam.layout(w, h, centerPx, radiusPx);
    const [lo, hi] = SIZE_SCALE_RANGE;
    this.dots.material.uniforms.uSizeScale.value = Math.min(
      hi,
      Math.max(lo, radiusPx / REF_RADIUS_PX)
    );
    this._syncCamDir();
    this._needsResize = false;
  }
  _syncCamDir() {
    const camDir = this.globeCam.camDir;
    this.dots.material.uniforms.uCamDir.value.copy(camDir);
    this.grid.material.uniforms.uCamDir.value.copy(camDir);
    this.rim.userData.faceCamera(camDir);
    for (const r of this.routes) {
      r.syncCamera(camDir, this._size.w || 1, this._size.h || 1);
    }
  }

  addRoute(from, to, opts) {
    const route = new Route(from, to, opts);
    this.route = { from, to };
    this.routes.push(route);
    this.scene.add(route.group);
    this._needsResize = true;
    return route;
  }

  _replace(key, factory, opts) {
    const old = this[key];
    this.scene.remove(old);
    old.geometry.dispose();
    old.material.dispose();
    this[key] = factory(opts);
    this.scene.add(this[key]);
    this._syncCamDir();
    if (key === "dots") {
      this.dots.material.uniforms.uPixelRatio.value = this._size.dpr || 1;
      this._needsResize = true;
    }
    return this[key];
  }
  setGrid(opts) {
    Object.assign(this.gridOpts, opts);
    return this._replace("grid", createGrid, this.gridOpts);
  }
  setDots(opts) {
    Object.assign(this.dotOpts, opts);
    return this._replace("dots", createDots, this.dotOpts);
  }
  start() {
    if (this._raf !== null) return;
    const tick = (t) => {
      this._raf = requestAnimationFrame(tick);
      this.deltaSeconds = this._lastTime ? Math.min((t - this._lastTime) / 1000, 0.1) : 0;
      this._lastTime = t;
      if (this._needsResize) this._applyLayout();
      for (const fn of this._onFrame) fn(t, this);
      this.renderer.render(this.scene, this.globeCam.camera);
    };
    this._raf = requestAnimationFrame(tick);
  }
  stop() {
    if (this._raf !== null) cancelAnimationFrame(this._raf);
    this._raf = null;
    this._lastTime = 0;
    this.deltaSeconds = 0;
  }
  dispose() {
    this.stop();
    this._ro.disconnect();
    window.removeEventListener("resize", this._onWindowResize);
    window.removeEventListener("scroll", this._onWindowResize);
    this.renderer.dispose();
    this.canvas.remove();
  }
}
export {
  Stage
};
