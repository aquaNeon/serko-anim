import {
  SEGMENTS, STEPS, cumulative, targetStep, scrubTime, smooth, advance, progress,
  lerp, out, win, parseRgb,
} from './motion.js'

const CUM = cumulative(SEGMENTS)
const PIN_EDGE = 32
const MOBILE = 767
const STYLE_ID = 'f2-style'
const CSS = `
.f2-pin{position:sticky;top:0;height:100vh;overflow:hidden}
.f2-track{position:absolute;left:0;top:0;width:0;height:0;z-index:2}
.f2-card{position:absolute!important;left:0!important;top:0!important;margin:0!important;box-sizing:border-box;transform-origin:50% 50%}
.f2-badge{position:absolute;top:12px;right:12px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:4.608px 10.4px;border-radius:6.912px;-webkit-backdrop-filter:blur(18.432px);backdrop-filter:blur(18.432px);font-family:inherit;font-size:13px;font-weight:600;line-height:19px;white-space:nowrap;pointer-events:none;z-index:2}
.f2-badge-disrupted{background:#fde7c4;color:#b8660f}
.f2-badge-confirmed{background:#c0f2b5;color:#17510b;opacity:0}
.f2-badge-rebooked{background:#fde7c4;color:#b8660f}
.f2-soft{background-color:#eeeef3!important}
.f2-soft,.f2-soft *{color:#121216!important}
.f2-ring{position:absolute;inset:-3px;border-radius:999px;z-index:-1;opacity:0;pointer-events:none;background:linear-gradient(90deg,#ff8c51,#f489ad 45%,#9b7cf6);filter:blur(6px)}
.f2-bg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;margin:0!important;object-fit:cover;object-position:50% 100%;z-index:-1;pointer-events:none}
.f2-pill{position:absolute;left:50%;top:50%;box-sizing:border-box;display:flex;align-items:center;gap:2.042em;padding:1.441em;opacity:0;pointer-events:none;font-size:10px;line-height:0}
.f2-avatar{position:relative;flex:0 0 auto;width:7.35em;height:7.35em;border-radius:50%;overflow:hidden;background:#dedeea}
.f2-avatar img{display:block!important;visibility:visible!important;position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover}
.f2-avatar-b{width:7.278em;height:7.278em}
.f2-wave{flex:0 0 auto;width:15.682em;height:5.672em;display:flex;align-items:center;gap:.334em}
.f2-wave i{flex:0 0 auto;width:.667em;border-radius:.417em;background:#000;opacity:.2}
.f2-close{flex:0 0 auto;box-sizing:border-box;width:7.327em;height:7.327em;border-radius:50%;border:.24em solid transparent;display:flex;align-items:center;justify-content:center;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(45deg,#ff8c51 0%,#f489ad 35%,#e388f2 62%,#96cbfa 100%) border-box}
.f2-close svg{width:2.4em;height:2.4em;display:block}
[data-f2-title],[data-f2-title] *{text-align:center!important}
.f2-title-b{position:absolute!important;opacity:0;pointer-events:none;margin:0!important;text-align:center}
.f2-title-b-head{margin:0!important;color:#000!important;text-align:center!important;max-width:none!important}
.f2-title-b-sub{margin:12px auto 0!important;max-width:448px!important;font-size:16px!important;font-weight:500!important;line-height:1.5!important;color:#000!important;text-align:center!important}
`

const DEFAULTS = {
  count: 12,
  disrupted: 4,
  shift: 2,
  hold: 70,
  endHold: 50,
  textGap: 160,
  titleB: '24/7 human support,\nwhenever you need it.',
  titleBSub: 'Our support crew is here to help and available any time, day or night, wherever you are in the world.',
  disruptedLabel: 'Disrupted',
  rebookedLabel: 'Rebooked',
  confirmedLabel: 'Confirmed',
  softButton: 'See alternatives',
  logos: [
    '',
    'https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa32dd2a66e06a72860750b_Flight.png',
    'https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa827c299c1c34d28a5cffe_slotStart%20(2).png',
  ],
  avatarA: 'https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa835df822458297f3c3dd1_man_profile.png',
  avatarB: 'https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa3cae176be149882a84d17_5712689%202.png',
}

const PILL = { w: 466.45, h: 102.32 }
const GLASS_SHADOW = '0 0 0 0.97px rgba(0,0,0,.04), 0 2.92px 7.8px -1.95px rgba(0,0,0,.1), 0 0.97px 0.97px -0.97px rgba(0,0,0,.1)'
const BARS = [10.01, 23.36, 33.37, 56.72, 33.37, 23.36, 23.36, 33.37, 40.04, 23.36, 23.36, 16.68, 10.01, 10.01, 10.01, 10.01]
const CLOSE_ICON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5L19 19M19 5L5 19" stroke="#252525" stroke-width="2.4" stroke-linecap="round"/></svg>'

const text = (el, name, fallback) => {
  const v = el.getAttribute(name)
  return v === null || v.trim() === '' ? fallback : v
}
const imageSrc = (el) => {
  const img = el.tagName === 'IMG' ? el : el.querySelector('img')
  return img ? img.getAttribute('src') || '' : text(el, 'data-f2-logo-src', '')
}
const number = (el, name, fallback) => {
  const n = parseFloat(el.getAttribute(name))
  return Number.isFinite(n) ? n : fallback
}

function injectStyle(doc) {
  if (doc.getElementById(STYLE_ID)) return
  const style = doc.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  doc.head.appendChild(style)
}

let idSeed = 0
function uniquifyIds(root) {
  const suffix = `-f2c${++idSeed}`
  const renamed = new Map()
  for (const node of root.querySelectorAll('[id]')) {
    const next = node.id + suffix
    renamed.set(node.id, next)
    node.id = next
  }
  if (!renamed.size) return
  for (const node of root.querySelectorAll('*')) {
    for (const a of Array.from(node.attributes)) {
      if (!a.value.includes('#')) continue
      let v = a.value
      for (const [from, to] of renamed) {
        v = v.split(`url(#${from})`).join(`url(#${to})`)
        if (v === `#${from}`) v = `#${to}`
      }
      if (v !== a.value) node.setAttribute(a.name, v)
    }
  }
}

function findBox(panel) {
  let box = panel
  while (box && box.children.length === 1 && box.firstElementChild.tagName === 'DIV') {
    const cs = getComputedStyle(box)
    const clear = cs.backgroundImage === 'none' && /^(transparent|rgba\(.*,\s*0\))$/.test(cs.backgroundColor)
    if (!clear) break
    box = box.firstElementChild
  }
  return box
}

function blankTime(card) {
  const time = card.querySelector('[data-f2-time]') || card.querySelector('[class*="time_text"]')
  if (!time) return
  const fill = card.querySelector('[class*="card_fill"]')
  const cs = fill ? getComputedStyle(fill) : null
  time.textContent = ''
  Object.assign(time.style, {
    display: 'block',
    flex: '0 0 auto',
    width: '2.0625rem',
    height: cs && parseFloat(cs.height) ? cs.height : '6px',
    borderRadius: cs ? cs.borderRadius : '3px',
    backgroundColor: cs ? cs.backgroundColor : '#ececf1',
  })
}

function findButton(card) {
  return card.querySelector('[data-f2-button]') || card.querySelector('[class*="btn"]')
}

function setLabel(button, label) {
  const leaf = Array.from(button.querySelectorAll('*'))
    .reverse()
    .find((n) => n.children.length === 0 && n.textContent.trim())
  ;(leaf || button).textContent = label
}

function lines(el, value) {
  el.textContent = ''
  value.split('\n').forEach((line, i) => {
    if (i) el.appendChild(el.ownerDocument.createElement('br'))
    el.appendChild(el.ownerDocument.createTextNode(line))
  })
}

export class Feature2 {
  constructor(section) {
    this.section = section
    const doc = section.ownerDocument
    const template = section.querySelector('[data-f2-card]')
    const panel = findBox(section.querySelector('[data-f2-panel]'))
    this.ok = Boolean(panel && template)
    if (!this.ok) {
      console.warn('[f2] needs [data-f2-panel] and [data-f2-card] inside [data-f2]')
      return
    }
    injectStyle(doc)

    const count = Math.max(11, Math.round(number(section, 'data-f2-count', DEFAULTS.count)))
    const shift = Math.round(number(section, 'data-f2-shift', DEFAULTS.shift))
    this.opts = {
      count,
      shift,
      disrupted: DEFAULTS.disrupted,
      focus: DEFAULTS.disrupted + shift,
      hold: number(section, 'data-f2-hold', DEFAULTS.hold),
      // "steps" is the earlier behaviour: each hold of scroll plays the next segment on a timer
      steps: text(section, 'data-f2-scroll', 'scrub') === 'steps',
      endHold: number(section, 'data-f2-end-hold', DEFAULTS.endHold),
      textGap: number(section, 'data-f2-text-gap', DEFAULTS.textGap),
      logos: this._logos(section),
      avatars: ['a', 'b'].map((k) => this._avatarSource(section, k)),
    }

    const panelRect = panel.getBoundingClientRect()
    const cardRect = template.getBoundingClientRect()
    this.ratio = panelRect.height / Math.max(1, panelRect.width)
    this.cardW = cardRect.width || 220
    this.cardH = cardRect.height || 270
    this.cardY = panelRect.height
      ? (cardRect.top + cardRect.height / 2 - panelRect.top) / panelRect.height
      : 0.6

    if (!findButton(template)) {
      console.warn('[f2] no [data-f2-button] in the card - the glow and hover are skipped')
    }

    const pin = doc.createElement('div')
    pin.className = 'f2-pin'
    while (section.firstChild) pin.appendChild(section.firstChild)
    section.appendChild(pin)
    if (getComputedStyle(section).position === 'static') section.style.position = 'relative'
    this.pin = pin
    this.header = Array.from(pin.children).filter((el) => !el.contains(panel))

    const slot = panel.cloneNode(false)
    slot.removeAttribute('data-f2-panel')
    slot.setAttribute('aria-hidden', 'true')
    slot.style.visibility = 'hidden'
    slot.style.height = `${panelRect.height}px`
    panel.parentNode.insertBefore(slot, panel)
    this.slot = slot
    Object.assign(panel.style, {
      position: 'absolute', margin: '0', zIndex: '3', overflow: 'hidden', boxSizing: 'border-box',
      maxWidth: 'none', maxHeight: 'none',
    })
    this.panel = panel

    const bg = panel.querySelector('[data-f2-bg]') ||
      Array.from(panel.querySelectorAll('img')).find((img) => !template.contains(img))
    if (bg) {
      const cover = bg.cloneNode(false)
      cover.removeAttribute('data-f2-bg')
      cover.removeAttribute('class')
      cover.removeAttribute('style')
      cover.className = 'f2-bg'
      cover.loading = 'eager'
      cover.alt = ''
      bg.style.visibility = 'hidden'
      panel.prepend(cover)
    }

    this.titleA = section.querySelector('[data-f2-title="a"]')
    this.titleB = section.querySelector('[data-f2-title="b"]')
    if (!this.titleB && this.titleA) this.titleB = this._makeTitleB()
    if (this.titleB) this.titleB.classList.add('f2-title-b')

    this.track = doc.createElement('div')
    this.track.className = 'f2-track'
    panel.appendChild(this.track)
    template.style.display = 'none'

    this.cards = []
    for (let i = 0; i < count; i++) this.cards.push(this._makeCard(template, i))

    this.play = 0
    this.last = 0
    this.rendered = false
    this.reduced = typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    this._frame = (now) => this.frame(now)
    this._onResize = () => this.measure()
    this.measure()
  }

  _logos(section) {
    const logos = section.hasAttribute('data-f2-logos')
      ? text(section, 'data-f2-logos', '').split(',').map((s) => s.trim()).filter(Boolean)
      : DEFAULTS.logos.slice()
    for (const el of section.querySelectorAll('[data-f2-logo]')) {
      const slot = Math.round(parseFloat(el.getAttribute('data-f2-logo')))
      const src = imageSrc(el)
      if (!src || !(slot >= 1)) continue
      while (logos.length < slot) logos.push('')
      logos[slot - 1] = src
    }
    return logos
  }

  _avatarSource(section, key) {
    const found = section.querySelector(`[data-f2-avatar="${key}"]`)
    const img = found && (found.tagName === 'IMG' ? found : found.querySelector('img'))
    if (img) {
      img.remove()
      img.removeAttribute('data-f2-avatar')
      img.removeAttribute('srcset')
      img.removeAttribute('sizes')
      img.style.display = ''
      img.loading = 'eager'
      return img
    }
    return text(section, `data-f2-avatar-${key}`, key === 'a' ? DEFAULTS.avatarA : DEFAULTS.avatarB)
  }

  _makeTitleB() {
    const a = this.titleA
    const b = a.cloneNode(true)
    b.setAttribute('data-f2-title', 'b')
    const head = b.querySelector('p,h1,h2,h3,h4,h5,h6') || b
    lines(head, text(this.section, 'data-f2-title-b', DEFAULTS.titleB))
    const sub = head.cloneNode(false)
    head.classList.add('f2-title-b-head')
    sub.classList.add('f2-title-b-sub')
    sub.textContent = text(this.section, 'data-f2-title-b-sub', DEFAULTS.titleBSub)
    head.after(sub)
    a.after(b)
    return b
  }

  _makeCard(template, i) {
    const doc = template.ownerDocument
    const { disrupted, focus, logos, avatars } = this.opts
    const el = template.cloneNode(true)
    el.style.display = ''
    el.removeAttribute('data-f2-card')
    el.classList.add('f2-card')
    uniquifyIds(el)

    const card = { i, el, kids: Array.from(el.children), button: findButton(el) }

    if (logos.length && logos[i % logos.length]) {
      const img = el.querySelector('img')
      if (img) {
        img.removeAttribute('srcset')
        img.loading = 'eager'
        img.src = logos[i % logos.length]
      }
    }

    if (i === disrupted) {
      const badge = doc.createElement('div')
      badge.className = 'f2-badge f2-badge-rebooked'
      badge.textContent = text(this.section, 'data-f2-rebooked-label', DEFAULTS.rebookedLabel)
      el.appendChild(badge)
      if (card.button) {
        card.button.classList.add('f2-soft')
        setLabel(card.button, text(this.section, 'data-f2-soft-button', DEFAULTS.softButton))
        const ring = doc.createElement('span')
        ring.className = 'f2-ring'
        card.button.appendChild(ring)
        card.ring = ring
      }
    }

    if (i === disrupted + 1) {
      const hint = doc.createElement('div')
      hint.className = 'f2-badge f2-badge-disrupted'
      hint.textContent = text(this.section, 'data-f2-disrupted-label', DEFAULTS.disruptedLabel)
      el.appendChild(hint)
      card.hint = hint
    }

    if (i === focus) {
      const badge = doc.createElement('div')
      badge.className = 'f2-badge f2-badge-confirmed'
      badge.textContent = text(this.section, 'data-f2-confirmed-label', DEFAULTS.confirmedLabel)
      el.appendChild(badge)
      card.confirmed = badge

      const pill = doc.createElement('div')
      pill.className = 'f2-pill'
      const avatar = (source, key) => {
        const wrap = doc.createElement('span')
        wrap.className = `f2-avatar f2-avatar-${key}`
        let img = source
        if (typeof source === 'string') {
          img = source ? doc.createElement('img') : null
          if (img) img.src = source
        }
        if (img) {
          img.alt = ''
          wrap.appendChild(img)
        }
        return wrap
      }
      const wave = doc.createElement('span')
      wave.className = 'f2-wave'
      for (let b = 0; b < BARS.length; b++) wave.appendChild(doc.createElement('i'))
      const close = doc.createElement('span')
      close.className = 'f2-close'
      close.innerHTML = CLOSE_ICON
      pill.append(avatar(avatars[0], 'a'), wave, avatar(avatars[1], 'b'), close)
      el.appendChild(pill)
      Object.assign(card, { pill, wave, bars: Array.from(wave.children) })
    }

    this.track.appendChild(el)
    if (i !== disrupted && i !== focus) blankTime(el)
    if (card.button && getComputedStyle(card.button).position === 'static') {
      card.button.style.position = 'relative'
    }
    card.bg = parseRgb(getComputedStyle(el).backgroundColor)
    card.btnBg = card.button ? parseRgb(getComputedStyle(card.button).backgroundColor, [18, 18, 22]) : null
    return card
  }

  measure() {
    const pin = this.pin
    const vw = pin.clientWidth
    const vh = document.documentElement.clientHeight || innerHeight
    this.slot.style.height = `${this.slot.offsetWidth * this.ratio}px`
    const pr = pin.getBoundingClientRect()
    const s = this.slot.getBoundingClientRect()
    const offset = Math.max(0, Math.round(s.bottom - pr.top + PIN_EDGE - vh))
    pin.style.top = `${-offset}px`
    pin.style.height = `${vh + offset}px`
    const radius = parseFloat(getComputedStyle(this.slot).borderTopLeftRadius) || 22
    const smallW = vw <= MOBILE ? vw - 24 : Math.min(s.width, vw - 24)
    const w = this.cardW
    this.geo = {
      w,
      h: this.cardH,
      gap: Math.max(14, w * 0.09),
      offset,
      small: {
        x: (vw - smallW) / 2, y: s.top - pr.top, w: smallW, h: s.height, r: radius,
      },
      full: { x: 12, y: offset + 12, w: vw - 24, h: vh - 24, r: Math.max(radius, 28) },
      hold: (this.opts.hold / 100) * vh,
    }
    const endHold = this.opts.steps ? 0 : (this.opts.endHold / 100) * vh
    this.section.style.height = `${vh + offset + STEPS * this.geo.hold + endHold}px`
    this.rendered = false
  }

  start() {
    addEventListener('resize', this._onResize)
    addEventListener('load', this._onResize, { once: true })
    requestAnimationFrame(this._frame)
  }

  frame(now) {
    requestAnimationFrame(this._frame)
    const dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 0
    this.last = now
    const rect = this.section.getBoundingClientRect()
    const top = rect.top + this.geo.offset
    const goal = this.opts.steps
      ? CUM[targetStep(top, this.geo.hold)]
      : scrubTime(top, STEPS * this.geo.hold, CUM[STEPS])
    const next = this.reduced ? goal
      : this.opts.steps ? advance(this.play, goal, dt) : smooth(this.play, goal, dt)
    const moving = next !== this.play
    this.play = next
    const visible = rect.bottom > -50 && rect.top < innerHeight + 50
    if (!visible && !moving && this.rendered) return
    this.render(this.play, now)
    this.rendered = true
  }

  render(time, now) {
    const u = progress(time, SEGMENTS, CUM)
    const { w, h, gap } = this.geo
    const { disrupted, focus, shift: slots } = this.opts
    const pitch = w + gap

    const grow = win(u[1], 0.05, 0.6)
    const small = this.geo.small
    const full = this.geo.full
    const pw = lerp(small.w, full.w, grow)
    const ph = lerp(small.h, full.h, grow)
    Object.assign(this.panel.style, {
      left: `${lerp(small.x, full.x, grow)}px`,
      top: `${lerp(small.y, full.y, grow)}px`,
      width: `${pw}px`,
      height: `${ph}px`,
      borderRadius: `${lerp(small.r, full.r, grow)}px`,
    })

    const headerOut = win(u[1], 0, 0.45)
    for (const el of this.header) {
      el.style.opacity = String(1 - headerOut)
      el.style.transform = `translateY(${-40 * headerOut}px)`
    }

    const toPill = win(u[4], 0.18, 0.5)
    const pillW = Math.min(Math.max(64, w * 0.46) * (PILL.w / PILL.h), pw - 40)
    const pillH = pillW / (PILL.w / PILL.h)
    const cardNow = lerp(h, pillH, toPill)
    const titleOut = win(u[4], 0, 0.3)
    const titleIn = win(u[4], 0.45, 0.8)
    const a = this.titleA
    const b = this.titleB
    const hA = a ? a.offsetHeight : 0
    const hB = b ? b.offsetHeight : hA
    const titleH = lerp(hA, hB, win(u[4], 0.2, 0.6))
    const textGap = this.opts.textGap
    const groupTop = Math.max(24, (ph - (hA + textGap + h)) / 2)
    const naturalTop = a ? a.offsetTop : 0
    const titleTop = lerp(naturalTop, groupTop, grow)
    if (a) {
      a.style.opacity = String(1 - titleOut)
      a.style.transform = `translateY(${titleTop - naturalTop - 12 * titleOut}px)`
    }
    if (b && a) {
      const titleWidth = Math.min(pw - 48, Math.max(a.offsetWidth, 480))
      Object.assign(b.style, {
        left: `${(pw - titleWidth) / 2}px`,
        top: `${titleTop}px`,
        width: `${titleWidth}px`,
        opacity: String(titleIn),
        transform: `translateY(${12 * (1 - titleIn)}px)`,
      })
    }

    this.track.style.left = `${pw / 2}px`
    this.track.style.top = `${lerp(ph * this.cardY, groupTop + titleH + textGap + cardNow / 2, grow)}px`

    const shift = win(u[2], 0, 1)
    const hover = win(u[3], 0, 0.3)
    const focusGrow = win(u[3], 0.25, 0.85, out)
    const settle = win(u[4], 0, 0.3)
    const highlight = win(u[0], 0, 1, out)

    for (const c of this.cards) {
      const s = c.el.style
      const d = c.i - disrupted
      let x = 0
      let y = 0
      let rot = 0
      let scale = 1
      let opacity = 0
      let z = 5

      if (d === 0) { opacity = 1; z = 20 }
      else if (d === 1) { x = 16; y = -10; rot = 6; opacity = 0.5; z = 19 }

      const reach = Math.abs(d)
      const spread = win(u[1], 0.3 + 0.045 * reach, 0.85 + 0.03 * reach)
      x = lerp(x, d * pitch, spread)
      y = lerp(y, 0, spread)
      rot = lerp(rot, 0, spread)
      opacity = lerp(opacity, 1, win(u[1], 0.3 + 0.045 * reach, 0.6 + 0.045 * reach))
      if (spread > 0.5 && d !== 0) z = 10
      if (c.hint) c.hint.style.opacity = String(1 - spread)

      x -= slots * pitch * shift

      const f = c.i - focus
      if (f !== 0) x += Math.sign(f) * pitch * 0.2 * focusGrow * (1 - settle)

      let width = w
      let height = h
      let radius = null
      let content = 1
      let pillOpacity = 0

      if (f === 0) {
        if (u[2] > 0) z = 30
        scale = 1 + 0.28 * focusGrow * (1 - settle)
        rot += -4 * focusGrow * (1 - settle)
        content = 1 - win(u[4], 0, 0.22)
        const widen = win(u[4], 0.46, 0.72)
        width = lerp(lerp(w, w * 0.9, toPill), pillW, widen)
        height = lerp(h, pillH, toPill)
        radius = toPill > 0 ? lerp(16, pillH / 2, toPill) : null
        pillOpacity = widen > 0.999 ? 1 : 0

        if (c.button && c.btnBg) {
          const [r, g, b] = c.btnBg
          c.button.style.backgroundColor =
            `rgb(${lerp(r, 110, hover)}, ${lerp(g, 110, hover)}, ${lerp(b, 118, hover)})`
        }
        if (c.confirmed) c.confirmed.style.opacity = String(win(u[3], 0.45, 0.9) * content)

        const em = (pillH / PILL.h) * 10
        Object.assign(c.pill.style, {
          fontSize: `${em}px`,
          width: `${pillW}px`,
          height: `${pillH}px`,
          transform: 'translate(-50%, -50%)',
          opacity: String(pillOpacity),
        })
        s.overflow = toPill > 0 ? 'hidden' : ''
        Array.from(c.pill.children).forEach((item, k) => {
          const e = win(u[4], 0.72 + 0.05 * k, 0.85 + 0.05 * k, out)
          item.style.opacity = String(e)
          item.style.transform = `scale(${lerp(0.6, 1, e)})`
        })
        const wave = win(u[4], 0.8, 1)
        c.bars.forEach((bar, k) => {
          const base = BARS[k] / 10
          const talk = 0.55 + 0.45 * Math.abs(Math.sin(now / 260 + k * 0.7) * Math.cos(now / 610 + k * 0.33))
          const peak = Math.min(5.672, base * lerp(1, talk * 1.35, wave))
          bar.style.height = `${Math.max(1.001, lerp(1.001, peak, wave))}em`
        })
      } else {
        const leave = win(u[4], 0.05 + 0.035 * Math.abs(f), 0.45 + 0.035 * Math.abs(f))
        opacity *= 1 - leave
        y += 40 * leave
      }

      if (d === 0) {
        const glass = win(u[1], 0.7, 1)
        const [r, g, b] = c.bg
        c.el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${lerp(1, 0.6, glass)})`
        c.el.style.boxShadow = glass > 0 ? GLASS_SHADOW : ''
        if (c.ring) c.ring.style.opacity = String(0.45 * highlight * (1 - win(u[1], 0.4, 0.8)))
      }

      s.width = `${width}px`
      s.height = `${height}px`
      s.borderRadius = radius === null ? '' : `${radius}px`
      s.transform = `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${rot}deg) scale(${scale})`
      s.opacity = String(opacity)
      s.zIndex = String(z)
      s.visibility = opacity < 0.002 ? 'hidden' : 'visible'
      const kid = String(content)
      for (const k of c.kids) k.style.opacity = kid
    }
  }
}

export function bootFeature2(doc = document) {
  const mounted = []
  for (const section of doc.querySelectorAll('[data-f2]')) {
    if (section.dataset.f2Mounted) continue
    section.dataset.f2Mounted = '1'
    const feature = new Feature2(section)
    if (!feature.ok) continue
    feature.start()
    mounted.push(feature)
  }
  if (mounted.length && typeof window !== 'undefined') window.__f2 = mounted
  return mounted
}
