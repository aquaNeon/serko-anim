import * as THREE from "three";
const DEG = Math.PI / 180;
function latLngToVec3(lat, lng, radius = 1, out = new THREE.Vector3()) {
  const phi = (90 - lat) * DEG;
  const theta = (lng + 180) * DEG;
  return out.set(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}
function angularDistance(aLat, aLng, bLat, bLng) {
  const d =
    Math.sin(aLat * DEG) * Math.sin(bLat * DEG) +
    Math.cos(aLat * DEG) * Math.cos(bLat * DEG) * Math.cos((aLng - bLng) * DEG);
  return Math.acos(Math.min(1, Math.max(-1, d)));
}
function midpoint(aLat, aLng, bLat, bLng) {
  const dLng = (bLng - aLng) * DEG;
  const aLatR = aLat * DEG;
  const bLatR = bLat * DEG;
  const bx = Math.cos(bLatR) * Math.cos(dLng);
  const by = Math.cos(bLatR) * Math.sin(dLng);
  const lat = Math.atan2(
    Math.sin(aLatR) + Math.sin(bLatR),
    Math.sqrt((Math.cos(aLatR) + bx) * (Math.cos(aLatR) + bx) + by * by)
  );
  const lng = aLng * DEG + Math.atan2(by, Math.cos(aLatR) + bx);
  return { lat: lat / DEG, lng: lng / DEG };
}
class GlobeCamera {
  constructor() {
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
    this.viewport = { width: 1, height: 1 };
    this.centerPx = { x: 0, y: 0 };
    this.radiusPx = 1;
    this.lat = 0;
    this.lng = 0;
    this._v = new THREE.Vector3();
    this._normal = new THREE.Vector3();
    this._camDir = new THREE.Vector3(0, 0, 1);
  }

  get camDir() {
    return this._camDir;
  }

  lookAtLatLng(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    latLngToVec3(lat, lng, 10, this.camera.position);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateMatrixWorld(true);
    this.camera.updateProjectionMatrix();
    this._camDir.copy(this.camera.position).normalize();
  }

  layout(width, height, centerPx, radiusPx) {
    this.viewport.width = width;
    this.viewport.height = height;
    this.centerPx = centerPx;
    this.radiusPx = radiusPx;
    const w = 1 / radiusPx;
    const cam = this.camera;
    cam.left = -centerPx.x * w;
    cam.right = (width - centerPx.x) * w;
    cam.top = centerPx.y * w;
    cam.bottom = -(height - centerPx.y) * w;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld(true);
  }

  project(lat, lng, surfaceOffset = 0) {
    const v = latLngToVec3(lat, lng, 1 + surfaceOffset, this._v);
    this._normal.copy(v).normalize();
    const depth = this._normal.dot(this._camDir);
    v.project(this.camera);
    return {
      x: (v.x * 0.5 + 0.5) * this.viewport.width,
      y: (-v.y * 0.5 + 0.5) * this.viewport.height,
      depth,
      visible: depth > 0
    };
  }
}
export {
  GlobeCamera,
  angularDistance,
  midpoint,
  latLngToVec3
};
