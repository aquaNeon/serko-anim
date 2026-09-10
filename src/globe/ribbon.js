import * as THREE from 'three'

export function createRibbonGeometry(points) {
  const n = points.length
  const position = new Float32Array(n * 2 * 3)
  const prev = new Float32Array(n * 2 * 3)
  const next = new Float32Array(n * 2 * 3)
  const side = new Float32Array(n * 2)
  const along = new Float32Array(n * 2)

  for (let i = 0; i < n; i++) {
    const p = points[i]
    const pv = points[Math.max(i - 1, 0)]
    const nx = points[Math.min(i + 1, n - 1)]
    const t = n === 1 ? 0 : i / (n - 1)

    for (let s = 0; s < 2; s++) {
      const v = (i * 2 + s) * 3
      position[v] = p.x; position[v + 1] = p.y; position[v + 2] = p.z
      prev[v] = pv.x; prev[v + 1] = pv.y; prev[v + 2] = pv.z
      next[v] = nx.x; next[v + 1] = nx.y; next[v + 2] = nx.z
      side[i * 2 + s] = s === 0 ? -1 : 1
      along[i * 2 + s] = t
    }
  }

  const index = new Uint32Array((n - 1) * 6)
  for (let i = 0; i < n - 1; i++) {
    const a = i * 2
    const o = i * 6
    index[o] = a
    index[o + 1] = a + 1
    index[o + 2] = a + 2
    index[o + 3] = a + 2
    index[o + 4] = a + 1
    index[o + 5] = a + 3
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(position, 3))
  geometry.setAttribute('aPrev', new THREE.BufferAttribute(prev, 3))
  geometry.setAttribute('aNext', new THREE.BufferAttribute(next, 3))
  geometry.setAttribute('aSide', new THREE.BufferAttribute(side, 1))
  geometry.setAttribute('aAlong', new THREE.BufferAttribute(along, 1))
  geometry.setIndex(new THREE.BufferAttribute(index, 1))
  return geometry
}

const VERTEX =  `
  attribute vec3 aPrev;
  attribute vec3 aNext;
  attribute float aSide;
  attribute float aAlong;

  uniform vec2 uResolution;
  uniform float uWidth;
  uniform float uMode;
  uniform float uHeadT;
  uniform float uTailLength;

  varying float vAlong;
  varying float vSide;
  varying float vLocal;
  varying vec3 vWorld;

  vec2 toScreen(vec4 clip) {
    return (clip.xy / clip.w) * uResolution * 0.5;
  }

  float dropWidth(float local) {
    if (local < 0.0 || local > 1.0) return 0.0;
    if (local < 0.8) return sqrt(local / 0.8);
    float k = (local - 0.8) / 0.2;
    return sqrt(max(0.0, 1.0 - k * k));
  }

  void main() {
    vAlong = aAlong;
    vSide = aSide;
    vWorld = position;

    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 clipPrev = projectionMatrix * modelViewMatrix * vec4(aPrev, 1.0);
    vec4 clipNext = projectionMatrix * modelViewMatrix * vec4(aNext, 1.0);

    vec2 sCur = toScreen(clip);
    vec2 sPrev = toScreen(clipPrev);
    vec2 sNext = toScreen(clipNext);

    vec2 dir;
    if (distance(sNext, sCur) < 1e-6) dir = normalize(sCur - sPrev);
    else if (distance(sPrev, sCur) < 1e-6) dir = normalize(sNext - sCur);
    else dir = normalize(normalize(sCur - sPrev) + normalize(sNext - sCur));

    vec2 nrm = vec2(-dir.y, dir.x);

    float width = uWidth;
    vLocal = 0.0;
    if (uMode > 0.5) {
      vLocal = (aAlong - (uHeadT - uTailLength)) / uTailLength;
      width = uWidth * dropWidth(vLocal);
    }

    clip.xy += nrm * aSide * (width * 0.5) * (2.0 / uResolution) * clip.w;
    gl_Position = clip;
  }
`

const FRAGMENT =  `
  uniform vec3 uBaseColor;
  uniform vec3 uSatColor;
  uniform float uBaseOpacity;
  uniform float uSatOpacity;
  uniform float uOpacity;
  uniform float uDrawProgress;
  uniform float uHeadT;
  uniform float uSatFeather;
  uniform float uMode;
  uniform vec3 uCamDir;

  varying float vAlong;
  varying float vSide;
  varying float vLocal;
  varying vec3 vWorld;

  void main() {
    float alongAxis = dot(vWorld, uCamDir);
    float perp = length(vWorld - alongAxis * uCamDir);
    if (alongAxis < 0.0 && perp < 1.0) discard;

    if (vAlong > uDrawProgress) discard;

    if (uMode > 0.5) {
      if (vLocal < 0.0 || vLocal > 1.0) discard;
      if (uHeadT <= 0.0 || uHeadT >= 1.0) discard;
      float shade = mix(0.55, 1.0, vLocal);
      gl_FragColor = vec4(
        mix(uBaseColor, uSatColor, shade),
        mix(uBaseOpacity, uSatOpacity, shade) * uOpacity
      );
      return;
    }

    float ramp = vAlong;
    gl_FragColor = vec4(
      mix(uBaseColor, uSatColor, ramp),
      mix(uBaseOpacity, uSatOpacity, ramp) * uOpacity
    );
  }
`

export function createRibbonMaterial({
  baseColor = 0x666666,
  satColor = 0x000000,
  baseOpacity = 0,
  satOpacity = 1,
  width = 2,
  opacity = 1,
  mode = 0,
  tailLength = 0.035,
  satFeather = 0.02,
} = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
    uniforms: {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uWidth: { value: width },
      uOpacity: { value: opacity },
      uBaseColor: { value: new THREE.Color(baseColor) },
      uSatColor: { value: new THREE.Color(satColor) },
      uBaseOpacity: { value: baseOpacity },
      uSatOpacity: { value: satOpacity },
      uDrawProgress: { value: 0 },
      uHeadT: { value: 0 },
      uTailLength: { value: tailLength },
      uSatFeather: { value: satFeather },
      uMode: { value: mode },
      uCamDir: { value: new THREE.Vector3(0, 0, 1) },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
  })
}
