import * as THREE from 'three'
import { latLngToVec3 } from './camera.js'
import { createRibbonGeometry, createRibbonMaterial } from './ribbon.js'

function slerp(a, b, t, out = new THREE.Vector3()) {
  const d = Math.min(1, Math.max(-1, a.dot(b)))
  const omega = Math.acos(d)
  if (omega < 1e-6) return out.copy(a)
  const so = Math.sin(omega)
  const ka = Math.sin((1 - t) * omega) / so
  const kb = Math.sin(t * omega) / so
  return out.set(
    a.x * ka + b.x * kb,
    a.y * ka + b.y * kb,
    a.z * ka + b.z * kb
  )
}

export function greatCirclePoints(from, to, { segments = 192, lift = 0.055 } = {}) {
  const a = latLngToVec3(from.lat, from.lng, 1)
  const b = latLngToVec3(to.lat, to.lng, 1)
  const pts = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const p = slerp(a, b, t)
    p.multiplyScalar(1 + lift * Math.sin(Math.PI * t))
    pts.push(p)
  }
  return pts
}

export class Route {
  constructor(from, to, {
    segments = 192,
    lift = 0.055,
    width = 2,
    dropWidth = 7,
    baseColor = 0x666666,
    satColor = 0x000000,
    baseOpacity = 0,
    satOpacity = 1,
    dropBaseColor = 0x444444,
    tailLength = 0.035,
  } = {}) {
    this.from = from
    this.to = to
    this.tailLength = tailLength

    const points = greatCirclePoints(from, to, { segments, lift })
    this.geometry = createRibbonGeometry(points)

    this.arcMaterial = createRibbonMaterial({
      baseColor, satColor, baseOpacity, satOpacity, width, mode: 0, tailLength,
    })
    this.dropMaterial = createRibbonMaterial({
      baseColor: dropBaseColor, satColor,
      baseOpacity: 0.75, satOpacity: 1,
      width: dropWidth, mode: 1, tailLength,
    })

    this.arc = new THREE.Mesh(this.geometry, this.arcMaterial)
    this.drop = new THREE.Mesh(this.geometry, this.dropMaterial)
    this.arc.frustumCulled = false
    this.drop.frustumCulled = false
    this.arc.renderOrder = 10
    this.drop.renderOrder = 11

    this.group = new THREE.Group()
    this.group.add(this.arc, this.drop)

    this.setProgress(0)
    this.setHead(0)
  }

  setProgress(p) {
    const v = Math.min(1, Math.max(0, p))
    this.arcMaterial.uniforms.uDrawProgress.value = v
    this.dropMaterial.uniforms.uDrawProgress.value = v
    return this
  }

  setHead(t) {
    const v = Math.min(1, Math.max(0, t))
    this.arcMaterial.uniforms.uHeadT.value = v
    this.dropMaterial.uniforms.uHeadT.value = v
    return this
  }

  setOpacity(o) {
    this.arcMaterial.uniforms.uOpacity.value = o
    this.dropMaterial.uniforms.uOpacity.value = o
    return this
  }

  syncCamera(camDir, width, height) {
    for (const m of [this.arcMaterial, this.dropMaterial]) {
      m.uniforms.uCamDir.value.copy(camDir)
      m.uniforms.uResolution.value.set(width, height)
    }
    return this
  }

  dispose() {
    this.geometry.dispose()
    this.arcMaterial.dispose()
    this.dropMaterial.dispose()
  }
}
