import * as THREE from "three";
import { latLngToVec3 } from "./camera.js";
import { DEFAULT_LATTICE, forEachLatticePoint } from "./lattice.js";
import { isLand } from "../data/landmask.js";
function createDots({
  lattice = DEFAULT_LATTICE,
  landColor = 1315866,
  oceanColor = 12763852,
  landSize = 2,
  oceanSize = 1.15,
  landOpacity = 0.92,
  oceanOpacity = 0.75
} = {}) {
  const lats = [];
  const lngs = [];
  forEachLatticePoint(lattice, (lat, lng) => {
    lats.push(lat);
    lngs.push(lng);
  });
  const count = lats.length;
  const positions = new Float32Array(count * 3);
  const land = new Float32Array(count);
  const v = new THREE.Vector3();
  let landCount = 0;
  for (let i = 0; i < count; i++) {
    latLngToVec3(lats[i], lngs[i], 1, v);
    positions[i * 3] = v.x;
    positions[i * 3 + 1] = v.y;
    positions[i * 3 + 2] = v.z;
    const onLand = isLand(lats[i], lngs[i]) ? 1 : 0;
    land[i] = onLand;
    landCount += onLand;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aLand", new THREE.BufferAttribute(land, 1));
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uLandColor: { value: new THREE.Color(landColor) },
      uOceanColor: { value: new THREE.Color(oceanColor) },
      uLandSize: { value: landSize },
      uOceanSize: { value: oceanSize },
      uLandOpacity: { value: landOpacity },
      uOceanOpacity: { value: oceanOpacity },
      uPixelRatio: { value: 1 },

      uSizeScale: { value: 1 },
      uCamDir: { value: new THREE.Vector3(0, 0, 1) },
      uFadeStart: { value: 0.06 }
    },
    vertexShader: (

      `
      attribute float aLand;
      uniform float uLandSize;
      uniform float uOceanSize;
      uniform float uPixelRatio;
      uniform float uSizeScale;
      uniform vec3 uCamDir;
      varying float vFacing;
      varying float vLand;

      void main() {
        vLand = aLand;
        vFacing = dot(normalize(position), uCamDir);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = mix(uOceanSize, uLandSize, aLand) * uSizeScale * uPixelRatio;
      }
    `
    ),
    fragmentShader: (

      `
      uniform vec3 uLandColor;
      uniform vec3 uOceanColor;
      uniform float uLandOpacity;
      uniform float uOceanOpacity;
      uniform float uFadeStart;
      varying float vFacing;
      varying float vLand;

      void main() {
        if (vFacing <= 0.0) discard;

        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = 1.0 - smoothstep(0.32, 0.5, d);
        if (alpha <= 0.0) discard;

        alpha *= smoothstep(0.0, uFadeStart, vFacing);
        gl_FragColor = vec4(
          mix(uOceanColor, uLandColor, vLand),
          alpha * mix(uOceanOpacity, uLandOpacity, vLand)
        );
      }
    `
    )
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  points.renderOrder = 2;
  points.userData.stats = { count, landCount };
  return points;
}
export {
  createDots
};
