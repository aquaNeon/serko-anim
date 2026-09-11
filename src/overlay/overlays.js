import { Typewriter } from './typewriter.js'
const DEFAULT_DUR = 0.6

function nums(el, attr, fallback) {
  const raw = el.getAttribute(attr)
  if (raw === null || raw.trim() === '') return fallback
  const parts = raw
    .split(',')
    .map((v) => Number.parseFloat(v.trim()))
    .filter((v) => Number.isFinite(v))
  return parts.length ? parts : fallback
}

function num(el, attr, fallback) {
  const raw = el.getAttribute(attr)
  if (raw === null || raw.trim() === '') return fallback
  const n = Number.parseFloat(raw)
  return Number.isFinite(n) ? n : fallback
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
const easeOutBack = (t) => {
  const c = 1.70158
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
}

function parse(el) {
  const anchored = el.hasAttribute('data-globe-pin')
  const anim = (el.getAttribute('data-anim') || 'fade').toLowerCase()
  const item = {
    el,
    anchored,
    anim,
    lat: num(el, 'data-lat', 0),
    lng: num(el, 'data-lng', 0),
    offsetX: num(el, 'data-offset-x', 0),
    offsetY: num(el, 'data-offset-y', 0),
    ins: nums(el, 'data-in', [0]),
    outs: el.hasAttribute('data-out') ? nums(el, 'data-out', []) : [],
    collapse: (el.getAttribute('data-collapse') || 'true').toLowerCase() !== 'false',
    dur: num(el, 'data-dur', DEFAULT_DUR),
    typeSpeed: num(el, 'data-type-speed', 26),
    typer: null,
    strokes: null,
    exitWidth: null,
    baseMinWidth: '',
    baseMaxWidth: '',
    typedCount: -1,
    hiddenByDisplay: false,
    revealDisplay: '',
  }

  if (anim === 'type') {
    const rect = el.getBoundingClientRect()
    if (rect.height) el.style.minHeight = `${Math.ceil(rect.height)}px`

    const byWord = (el.getAttribute('data-type-by') || 'word').toLowerCase() !== 'char'
    item.typer = new Typewriter(el, {
      skipSelector: el.getAttribute('data-type-skip') || null,
      byWord,
    })
    if (!el.hasAttribute('data-type-speed')) item.typeSpeed = byWord ? 4.5 : 26
  }

  if (anim === 'draw') {
    const target = el.getAttribute('data-draw-target') || 'path'
    item.strokes = Array.from(el.querySelectorAll(target))
      .filter((p) => typeof p.getTotalLength === 'function')
      .map((p) => {
        let length = 0
        try { length = p.getTotalLength() } catch { length = 0 }
        if (!length) return null
        p.style.strokeDasharray = String(length)
        p.style.strokeDashoffset = String(length)
        return { path: p, length }
      })
      .filter(Boolean)
  }

  const computed = typeof getComputedStyle === 'function' ? getComputedStyle(el) : null
  if (computed && computed.display === 'none') {
    item.hiddenByDisplay = true
    item.revealDisplay = el.getAttribute('data-display') || 'block'
  }

  el.style.willChange = 'transform, opacity'
  if (anchored) {
    el.style.position = 'absolute'
    el.style.top = '0'
    el.style.left = '0'
    el.style.margin = '0'
  }
  return item
}

function reparentAnchored(items, stageRoot) {
  let layer = stageRoot.querySelector('.globe-overlay-layer')
  for (const item of items) {
    if (!item.anchored) continue
    if (item.el.getAttribute('data-reparent') !== 'true') continue
    if (stageRoot.contains(item.el)) continue
    if (!layer) {
      layer = stageRoot.ownerDocument.createElement('div')
      layer.className = 'globe-overlay-layer'
      layer.style.position = 'absolute'
      layer.style.inset = '0'
      layer.style.pointerEvents = 'none'
      layer.style.zIndex = '45'
      stageRoot.appendChild(layer)
    }
    layer.appendChild(item.el)
  }
}

function lockSizes(root) {
  const targets = root.querySelectorAll('[data-lock-width="true"], [data-lock-height="true"]')
  for (const el of targets) {
    const rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null
    if (!rect) continue
    if (el.getAttribute('data-lock-width') === 'true' && rect.width) {
      el.style.width = `${Math.ceil(rect.width)}px`
      el.style.flexGrow = '0'
      el.style.flexShrink = '0'
    }
    if (el.getAttribute('data-lock-height') === 'true' && rect.height) {
      el.style.height = `${Math.ceil(rect.height)}px`
    }
  }
}

function activeWindow(item, time) {
  let index = -1
  for (let i = 0; i < item.ins.length; i++) {
    if (time >= item.ins[i]) index = i
  }
  if (index < 0) {
    return { index: -1, start: item.ins[0] ?? 0, end: item.outs[0] ?? null }
  }
  return {
    index,
    start: item.ins[index],
    end: item.outs[index] === undefined ? null : item.outs[index],
  }
}

export class Overlays {
  constructor(stage, root = document) {
    const nodes = root.querySelectorAll('[data-globe-cue], [data-globe-pin]')
    lockSizes(root)
    this.items = Array.from(nodes).map(parse)
    this.stage = stage
    if (stage && stage.root) reparentAnchored(this.items, stage.root)
  }

  get maxTime() {
    return this.items.reduce((m, i) => {
      const lastIn = i.ins[i.ins.length - 1]
      const lastOut = i.outs.length ? i.outs[i.outs.length - 1] : null
      const end = Math.max(lastIn, lastOut === null ? 0 : lastOut) + i.dur
      const typed = i.typer ? lastIn + i.typer.total / i.typeSpeed : 0
      return Math.max(m, end, typed)
    }, 0)
  }

  update(time, stage) {
    for (const item of this.items) this._updateItem(item, time, stage)
  }

  _updateItem(item, time, stage) {
    const w = activeWindow(item, time)
    const enter = w.index < 0 ? 0 : clamp01((time - w.start) / item.dur)
    const exit = w.end === null ? 0 : clamp01((time - w.end) / item.dur)
    const amount = enter * (1 - exit)
    const el = item.el

    if (item.anim === 'type') this._type(item, time, w.start)
    if (item.anim === 'draw') this._draw(item, enter)

    const gone = w.end !== null && time >= w.end + item.dur

    if (item.collapse) {
      const shrinking = w.end !== null && exit > 0 && exit < 1
      if (shrinking) {
        if (item.exitWidth === null) {
          item.exitWidth = el.offsetWidth
          item.baseMinWidth = el.style.minWidth
          item.baseMaxWidth = el.style.maxWidth
          el.style.overflow = 'hidden'
          el.style.whiteSpace = 'nowrap'
        }
        el.style.minWidth = '0px'
        el.style.maxWidth = `${item.exitWidth * (1 - exit)}px`
      } else if (exit === 0 && item.exitWidth !== null) {
        el.style.minWidth = item.baseMinWidth
        el.style.maxWidth = item.baseMaxWidth
        el.style.overflow = ''
        el.style.whiteSpace = ''
        item.exitWidth = null
      }
    }

    if (amount <= 0.001) {
      el.style.opacity = '0'
      el.style.pointerEvents = 'none'
      if (item.hiddenByDisplay || (gone && item.collapse)) {
        el.style.display = 'none'
      }
      return
    }

    const wanted = item.hiddenByDisplay ? item.revealDisplay : ''
    if (el.style.display !== wanted) el.style.display = wanted

    let opacity = amount
    let dx = item.offsetX
    let dy = item.offsetY
    let scale = 1

    if (item.anim === 'rise') {
      dy += (1 - easeOutCubic(enter)) * 16
    } else if (item.anim === 'pop') {
      scale = 0.86 + 0.14 * easeOutBack(enter)
      opacity = clamp01(enter * 1.6) * (1 - exit)
    } else if (item.anim === 'type') {
      opacity = enter > 0 ? 1 - exit : 0
    } else if (item.anim === 'draw') {
      opacity = enter > 0 ? 1 - exit : 0
    }

    if (item.anchored) {
      const p = stage.project(item.lat, item.lng)
      if (!p.visible) {
        el.style.opacity = '0'
        if (item.hiddenByDisplay) el.style.display = 'none'
        return
      }
      const limb = Math.min(1, p.depth / 0.12)
      opacity *= limb
      el.style.transform =
        `translate(${p.x + dx}px, ${p.y + dy}px) translate(-50%, -100%) scale(${scale})`
    } else {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
    }

    el.style.opacity = String(opacity)
    el.style.pointerEvents = opacity > 0.9 ? '' : 'none'
  }

  _draw(item, enter) {
    if (!item.strokes || !item.strokes.length) return
    const p = easeOutCubic(clamp01(enter))
    for (const s of item.strokes) {
      s.path.style.strokeDashoffset = String(s.length * (1 - p))
    }
  }

  _type(item, time, start) {
    if (!item.typer) return
    const elapsed = time - start
    const n = elapsed <= 0 ? 0 : Math.min(item.typer.total, Math.floor(elapsed * item.typeSpeed))
    if (n === item.typedCount) return
    item.typedCount = n
    item.typer.reveal(n)
    item.el.dataset.typing = item.typer.done ? '0' : '1'
  }
}
