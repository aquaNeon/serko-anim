import { Typewriter } from './typewriter.js'
const DEFAULT_DUR = 0.6

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
    inAt: num(el, 'data-in', 0),
    outAt: el.hasAttribute('data-out') ? num(el, 'data-out', Infinity) : null,
    dur: num(el, 'data-dur', DEFAULT_DUR),
    typeSpeed: num(el, 'data-type-speed', 26),
    typer: null,
    typedCount: -1,
  }

  if (anim === 'type') {
    const rect = el.getBoundingClientRect()
    if (rect.height) el.style.minHeight = `${Math.ceil(rect.height)}px`
    item.typer = new Typewriter(el, {
      skipSelector: el.getAttribute('data-type-skip') || null,
    })
  }

  el.style.willChange = 'transform, opacity'
  if (anchored) {
    el.style.position = 'absolute'
    el.style.top = '0'
    el.style.left = '0'
  }
  return item
}

export class Overlays {
  constructor(stage, root = document) {
    const nodes = root.querySelectorAll('[data-globe-cue], [data-globe-pin]')
    this.items = Array.from(nodes).map(parse)
    this.stage = stage
  }

  get maxTime() {
    return this.items.reduce((m, i) => {
      const end = i.outAt !== null ? i.outAt + i.dur : i.inAt + i.dur
      const typed = i.typer ? i.inAt + i.typer.total / i.typeSpeed : 0
      return Math.max(m, end, typed)
    }, 0)
  }

  update(time, stage) {
    for (const item of this.items) this._updateItem(item, time, stage)
  }

  _updateItem(item, time, stage) {
    const enter = clamp01((time - item.inAt) / item.dur)
    const exit = item.outAt === null ? 0 : clamp01((time - item.outAt) / item.dur)
    const amount = enter * (1 - exit)
    const el = item.el

    if (item.anim === 'type') this._type(item, time)

    if (amount <= 0.001) {
      el.style.opacity = '0'
      el.style.pointerEvents = 'none'
      return
    }

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
    }

    if (item.anchored) {
      const p = stage.project(item.lat, item.lng)
      if (!p.visible) {
        el.style.opacity = '0'
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

  _type(item, time) {
    if (!item.typer) return
    const elapsed = time - item.inAt
    const n = elapsed <= 0 ? 0 : Math.min(item.typer.total, Math.floor(elapsed * item.typeSpeed))
    if (n === item.typedCount) return
    item.typedCount = n
    item.typer.reveal(n)
    item.el.dataset.typing = item.typer.done ? '0' : '1'
  }
}
