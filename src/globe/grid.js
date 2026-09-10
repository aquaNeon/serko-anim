import * as THREE from "three";
import { latLngToVec3 } from "./camera.js";
function createGrid({
  color = 1315866,
  opacity = 0.13,
  latStep = 10,
  lngStep = 10,
  latLimit = 80,
  segments = 128
} = {}) {
  const pts = [];
  const v = new THREE.Vector3();
  const push = (lat, lng) => {
    latLngToVec3(lat, lng, 1.0005, v);
    pts.push(v.x, v.y, v.z);
  };
  for (let lat = -latLimit; lat <= latLimit; lat += latStep) {
    for (let i = 0; i < segments; i++) {
      push(lat, -180 + i / segments * 360);
      push(lat, -180 + (i + 1) / segments * 360);
    }
  }
  for (let lng = -180; lng < 180; lng += lngStep) {
    for (let i = 0; i < segments; i++) {
      push(-90 + i / segments * 180, lng);
      push(-90 + (i + 1) / segments * 180, lng);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(pts), 3)
  );
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
      uCamDir: { value: new THREE.Vector3(0, 0, 1) },
      uFadeStart: { value: 0.1 }
    },
    vertexShader: (

      `
      uniform vec3 uCamDir;
      varying float vFacing;
      void main() {
        vFacing = dot(normalize(position), uCamDir);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `
    ),
    fragmentShader: (

      `
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uFadeStart;
      varying float vFacing;
      void main() {
        if (vFacing <= 0.0) discard;
        float a = uOpacity * smoothstep(0.0, uFadeStart, vFacing);
        gl_FragColor = vec4(uColor, a);
      }
    `
    )
  });
  const lines = new THREE.LineSegments(geometry, material);
  lines.frustumCulled = false;
  lines.renderOrder = 1;
  return lines;
}
export {
  createGrid
};
