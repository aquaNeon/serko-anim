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
    this.box = document.createElement("div");
    this.box.className = "globe-box";
    Object.assign(this.box.style, {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      pointerEvents: "none"
    });
    if (layout.feather > 0) {
      const mask = `linear-gradient(to bottom, #000 calc(100% - ${layout.feather}px), transparent 100%)`;
      this.box.style.maskImage = mask;
      this.box.style.webkitMaskImage = mask;
    }
    if (layout.fadeIn > 0) {
      this.box.style.opacity = "0";
      this.box.style.transition = `opacity ${layout.fadeIn}s ease-out`;
    }
    rootEl.appendChild(this.box);

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
    this.box.appendChild(this.canvas);
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
    this._aim = null;
    this._pointer = { x: 0, y: 0 };
    this._drift = { x: 0, y: 0 };
    this._onPointerMove = (e) => {
      if (e.pointerType === "touch") return;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      this._pointer.x = Math.max(-1, Math.min(1, (e.clientX / w) * 2 - 1));
      this._pointer.y = Math.max(-1, Math.min(1, (e.clientY / h) * 2 - 1));
    };
    this._onPointerLeave = () => {
      this._pointer.x = 0;
      this._pointer.y = 0;
    };
    const reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this._driftEnabled = !reduced && (layout.drift > 0 || layout.driftLat > 0);
    if (this._driftEnabled) {
      window.addEventListener("pointermove", this._onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", this._onPointerLeave);
    }
  }

  _applyDrift() {
    const dt = this.deltaSeconds;
    const k = 1 - Math.exp(-this.layout.driftEase * dt);
    const d = this._drift;
    d.x += (this._pointer.x - d.x) * k;
    d.y += (this._pointer.y - d.y) * k;
    const base = this._aim || { lat: this.layout.cameraLat, lng: this.layout.cameraLng };
    const sign = this.layout.driftDirection;
    const lat = Math.max(-89, Math.min(89, base.lat + sign * d.y * this.layout.driftLat));
    const lng = base.lng - sign * d.x * this.layout.drift;
    const cam = this.globeCam;
    if (Math.abs(cam.lat - lat) < 1e-4 && Math.abs(cam.lng - lng) < 1e-4) return;
    cam.lookAtLatLng(lat, lng);
    this._syncCamDir();
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
  _bleedHost(targetWidth) {
    let outermost = null;
    let node = this.root.parentElement;
    while (node && node !== document.body) {
      const cs = getComputedStyle(node);
      const clips = cs.overflowX !== "visible" || cs.overflowY !== "visible";
      if (clips && node.getBoundingClientRect().width < targetWidth - 1) {
        outermost = node;
      }
      node = node.parentElement;
    }
    if (!outermost || !outermost.parentElement) return this.root;
    return outermost.parentElement;
  }

  _applyLayout() {
    const rootRect = this.root.getBoundingClientRect();
    const anchorRect = this.anchor.getBoundingClientRect();
    const bleed = this.layout.fullBleed;
    const vw = document.documentElement.clientWidth || rootRect.width;
    this.mobile = vw < this.layout.mobileBelow;
    const turn = this.mobile ? this.layout.mobileTurn : 0;

    let host = this.root;
    if (bleed) {
      host = this._bleedHost(vw);
      if (host !== this.box.parentElement) {
        if (host !== this.root && getComputedStyle(host).position === "static") {
          host.style.position = "relative";
        }
        host.appendChild(this.box);
      }
    }

    const hostRect = host.getBoundingClientRect();
    const boxWidth = bleed ? vw : rootRect.width;
    const boxLeft = bleed ? -hostRect.left : 0;
    this.box.style.left = `${boxLeft}px`;
    this.box.style.top = `${bleed ? rootRect.top - hostRect.top : 0}px`;
    this.box.style.width = `${boxWidth}px`;
    this.box.style.height = `${rootRect.height}px`;

    const bleedLeft = bleed ? rootRect.left : 0;
    const rect = { left: 0, top: rootRect.top,
                   width: boxWidth, height: rootRect.height };
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    if (w !== this._size.w || h !== this._size.h || dpr !== this._size.dpr) {
      this.renderer.setPixelRatio(dpr);
      this.renderer.setSize(w, h, false);
      this._size = { w, h, dpr };
      this.dots.material.uniforms.uPixelRatio.value = dpr;
    }
    const anchorTop = anchorRect.top - rootRect.top;
    const centerX = bleed
      ? anchorRect.left + anchorRect.width / 2
      : anchorRect.left - rootRect.left + anchorRect.width / 2;
    let radiusPx;
    let centerY;

    if (this.layout.fitRoute > 0 && this.route) {
      const { from, to } = this.route;
      const aim = this.layout.aimAtRoute
        ? midpoint(from.lat, from.lng, to.lat, to.lng)
        : { lat: this.layout.cameraLat, lng: this.layout.cameraLng };
      const lat = Math.max(-89, Math.min(89, aim.lat + this.layout.tilt));
      this._aim = { lat, lng: aim.lng + this.layout.spin - turn };
      this.globeCam.lookAtLatLng(this._aim.lat, this._aim.lng);

      this.globeCam.layout(w, h, { x: centerX, y: 0 }, 1);
      const ua = this.globeCam.project(from.lat, from.lng);
      const ub = this.globeCam.project(to.lat, to.lng);
      const perUnit = Math.hypot(ub.x - ua.x, ub.y - ua.y);

      const ref = this.layout.refWidth || w;
      const span = Math.max(1, ref * this.layout.fitRoute);
      const scale = Math.min(
        this.layout.scaleMax,
        Math.max(this.layout.scaleMin, w / ref)
      );
      radiusPx = (span / Math.max(1e-6, perUnit)) * scale;

      const unitMidY = (ua.y + ub.y) / 2;
      if (this.layout.apexClearance !== null) {
        centerY = anchorTop + this.layout.apexClearance + radiusPx;
      } else {
        const band = anchorRect.height || h;
        centerY = anchorTop + band * this.layout.routeY - unitMidY * radiusPx;
      }
    } else {
      this._aim = { lat: this.layout.cameraLat, lng: this.layout.cameraLng - turn };
      this.globeCam.lookAtLatLng(this._aim.lat, this._aim.lng);
      if (this.layout.hasRefWidth) {
        const ref = this.layout.refWidth;
        const scale = Math.min(
          this.layout.scaleMax,
          Math.max(this.layout.scaleMin, vw / ref)
        );
        radiusPx = ref * this.layout.radiusScale * scale;
      } else {
        if (!this._warnedNoFit) {
          this._warnedNoFit = true;
          console.warn(
            "[globe] the globe is sized from its container, so it shrinks " +
            'with the screen. Add data-ref-width="1440" to #globe-root to ' +
            "hold its size and crop instead."
          );
        }
        radiusPx = anchorRect.width * this.layout.radiusScale;
      }
      if (this.layout.radiusMaxVh > 0) {
        const vh = window.innerHeight || rect.height || 1;
        radiusPx = Math.min(radiusPx, vh * this.layout.radiusMaxVh);
      }
      centerY = anchorTop + radiusPx * this.layout.centerYFactor;
      if (this.layout.apexClearance !== null) {
        centerY = Math.max(centerY, anchorTop + this.layout.apexClearance + radiusPx);
      }
    }

    if (vw < this.layout.mobileBelow && this.layout.mobileScale !== 1) {
      const shrink = this.layout.mobileScale;
      const apexBefore = centerY - radiusPx;
      radiusPx *= shrink;
      centerY = apexBefore + radiusPx;
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
      if (this._driftEnabled) this._applyDrift();
      for (const fn of this._onFrame) fn(t, this);
      this.renderer.render(this.scene, this.globeCam.camera);
      if (!this._revealed) {
        this._revealed = true;
        requestAnimationFrame(() => {
          this.box.style.opacity = "1";
        });
      }
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
    window.removeEventListener("pointermove", this._onPointerMove);
    document.documentElement.removeEventListener("pointerleave", this._onPointerLeave);
    this.renderer.dispose();
    this.canvas.remove();
  }
}
export {
  Stage
};
