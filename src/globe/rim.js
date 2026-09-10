import * as THREE from "three";
function createRim({
  color = 1315866,
  opacity = 0.28,
  segments = 512
} = {}) {
  const pts = new Float32Array(segments * 3);
  for (let i = 0; i < segments; i++) {
    const a = i / segments * Math.PI * 2;
    pts[i * 3] = Math.cos(a);
    pts[i * 3 + 1] = Math.sin(a);
    pts[i * 3 + 2] = 0;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(pts, 3));
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false
  });
  const ring = new THREE.LineLoop(geometry, material);
  ring.frustumCulled = false;
  ring.renderOrder = 3;
  const FORWARD = new THREE.Vector3(0, 0, 1);
  ring.userData.faceCamera = (camDir) => {
    ring.quaternion.setFromUnitVectors(FORWARD, camDir);
  };
  return ring;
}
export {
  createRim
};
