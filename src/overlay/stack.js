import { Typewriter } from './typewriter.js'

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const lerp = (a, b, p) => a + (b - a) * p

export function cubicBezier(x1, y1, x2, y2) {
  const curve = (a, b, t) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t
  return (x) => {
    if (x <= 0) return 0
    if (x >= 1) return 1
    let lo = 0
    let hi = 1
    let t = x
    for (let i = 0; i < 24; i++) {
      t = (lo + hi) / 2
      if (curve(x1, x2, t) < x) lo = t
      else hi = t
    }
    return curve(y1, y2, t)
  }
}

export const RISE = cubicBezier(0.45, 0, 0.2, 1)
export const SETTLE = cubicBezier(0.22, 1, 0.36, 1)

export function pose(rel, geo) {
  const active = geo.gap - geo.peek - geo.space
  if (rel < -1) {
    return { y: geo.gap + geo.height + 18, s: 1, o: 0, content: 0, z: 5 }
  }
  if (rel === -1) {
    return { y: geo.gap + geo.height - geo.peek, s: 1, o: geo.peekOpacity, content: 0, z: 6 }
  }
  if (rel === 0) {
    return { y: active, s: 1, o: 1, content: 1, z: 12, ease: RISE, odur: 0.3, cdelay: 0.35 }
  }
  if (rel === 1) {
    return { y: active - geo.lift, s: 1, o: 0, content: 0, z: 11, ease: RISE, cdur: 0.5 }
  }
  return { y: active - geo.lift, s: 1, o: 0, content: 0, z: 0 }
}

export function stepAt(time, times) {
  let k = -1
  for (let i = 0; i < times.length; i++) {
    if (time >= times[i]) k = i
  }
  return k
}

export function cardState(time, index, times, geo, dur) {
  const k = stepAt(time, times)
  if (k < 0) return pose(-2, geo)
  const from = pose(k - 1 - index, geo)
  const to = pose(k - index, geo)
  const elapsed = time - times[k]
  const ease = to.ease || SETTLE
  const move = ease(clamp01(elapsed / dur))
  const fade = ease(clamp01(elapsed / (dur * (to.odur || 1))))
  const content = SETTLE(clamp01((elapsed - dur * (to.cdelay || 0)) / (dur * (to.cdur || 1))))
  return {
    y: lerp(from.y, to.y, move),
    s: lerp(from.s, to.s, move),
    o: lerp(from.o, to.o, fade),
    content: lerp(from.content, to.content, content),
    z: to.z,
  }
}

const STRIP = ['id', 'data-globe-cue', 'data-globe-pin', 'data-in', 'data-out', 'data-dur', 'data-anim']

function strip(el) {
  for (const node of [el, ...el.querySelectorAll('*')]) {
    for (const attr of STRIP) node.removeAttribute(attr)
  }
  return el
}

function shown(el) {
  el.style.opacity = '1'
  el.style.visibility = 'visible'
  return el
}

function noWrap(el) {
  for (const node of [el, ...el.children]) {
    node.style.whiteSpace = 'nowrap'
    node.style.flexShrink = '0'
  }
  return el
}

function set(el, prop, value) {
  if (el.style[prop] !== value) el.style[prop] = value
}

export class CardStack {
  constructor(config, root = document) {
    this.cfg = config
    this.cards = []
    this.times = [0, ...config.cards.map((c) => c.at)]
    this.template = root.querySelector(config.template)
    this.profile = root.querySelector(config.profile)
    if (!this.template || !this.profile) {
      console.warn(
        '[globe] card stack skipped: ' +
        (this.template ? config.profile : config.template) + ' matched nothing'
      )
      return
    }

    const template = this.template
    const parent = template.parentElement
    if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative'
    if (getComputedStyle(this.profile).position === 'static') this.profile.style.position = 'relative'
    this.profile.style.zIndex = '20'
    if (config.width) template.style.width = `${config.width}px`
    if (config.minHeight) template.style.minHeight = `${config.minHeight}px`

    config.cards.forEach((spec, i) => {
      const el = spec.kind === 'pref' ? this._pref(spec) : this._prompt(spec)
      if (!el) return
      el.classList.add('globe-stack-card')
      Object.assign(el.style, {
        position: 'absolute',
        margin: '0',
        left: '0',
        top: '0',
        transformOrigin: '50% 100%',
        opacity: '0',
        visibility: 'hidden',
      })
      parent.insertBefore(el, template)
      const card = { spec, el, index: i + 1, typer: null, strokes: null }
      if (spec.kind === 'pref') {
        card.strokes = Array.from(el.querySelectorAll('path'))
          .map((path) => {
            let length = 0
            try { length = path.getTotalLength() } catch { length = 0 }
            if (!length) return null
            path.style.strokeDasharray = String(length)
            return { path, length }
          })
          .filter(Boolean)
      } else {
        card.typer = new Typewriter(el.firstElementChild, { byWord: true })
      }
      this.cards.push(card)
    })

    template.style.visibility = 'hidden'
    this._measure()
    this._onResize = () => { this._dirty = true }
    window.addEventListener('resize', this._onResize)
  }

  get maxTime() {
    const last = this.cfg.cards[this.cfg.cards.length - 1]
    return last ? last.at + this.cfg.dur * 1.5 : 0
  }

  _prompt(spec) {
    const source = this.template.querySelector(spec.from)
    if (!source) {
      console.warn(`[globe] card stack: ${spec.from} matched nothing, card skipped`)
      return null
    }
    const el = strip(this.template.cloneNode(false))
    const line = noWrap(shown(strip(source.cloneNode(true))))
    if (getComputedStyle(source).display === 'none') line.style.display = 'flex'
    el.appendChild(line)
    const search = this.template.querySelector(this.cfg.search)
    if (search) el.appendChild(shown(strip(search.cloneNode(true))))
    return el
  }

  _pref(spec) {
    const check = this.template.querySelector(this.cfg.check)
    const text = this.template.querySelector(this.cfg.text)
    if (!check || !text) {
      console.warn(`[globe] card stack: ${check ? this.cfg.text : this.cfg.check} matched nothing, card skipped`)
      return null
    }
    const el = strip(this.template.cloneNode(false))
    const icon = shown(strip(check.cloneNode(true)))
    icon.style.display = 'flex'
    const label = noWrap(shown(strip(text.cloneNode(false))))
    label.textContent = spec.text
    label.style.margin = '0'
    el.append(icon, label)
    return el
  }

  _measure() {
    const template = this.template
    const bottom = template.offsetTop + template.offsetHeight
    const height = (this.cards[0] && this.cards[0].el.offsetHeight) || template.offsetHeight
    this.geo = {
      gap: this.profile.offsetTop - bottom,
      height,
      peek: this.cfg.peek,
      space: this.cfg.space,
      lift: this.cfg.lift,
      peekOpacity: this.cfg.peekOpacity,
    }
    for (const card of this.cards) {
      const h = card.el.offsetHeight || height
      card.el.style.left = `${template.offsetLeft}px`
      card.el.style.top = `${bottom - h}px`
      card.el.style.width = `${template.offsetWidth}px`
    }
    this._dirty = false
  }

  update(time) {
    if (!this.cards.length) return
    if (this._dirty) this._measure()
    const dur = this.cfg.dur
    for (const card of this.cards) {
      const st = cardState(time, card.index, this.times, this.geo, dur)
      const el = card.el
      set(el, 'transform', `translateY(${st.y.toFixed(2)}px) scale(${st.s.toFixed(4)})`)
      set(el, 'opacity', st.o.toFixed(3))
      set(el, 'zIndex', String(st.z))
      set(el, 'visibility', st.o < 0.002 ? 'hidden' : 'visible')
      const content = st.content.toFixed(3)
      for (const kid of el.children) set(kid, 'opacity', content)

      const local = time - card.spec.at - dur * 0.35
      if (card.typer) {
        const words = local <= 0 ? 0 : Math.min(card.typer.total, Math.floor(local * this.cfg.typeSpeed))
        card.typer.reveal(words)
      }
      if (card.strokes) {
        const drawn = SETTLE(clamp01(local / this.cfg.drawDur))
        for (const s of card.strokes) set(s.path, 'strokeDashoffset', String(s.length * (1 - drawn)))
      }
    }
  }

  dispose() {
    window.removeEventListener('resize', this._onResize)
    for (const card of this.cards) card.el.remove()
    if (this.template) this.template.style.visibility = ''
  }
}
