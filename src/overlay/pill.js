const CSS = `
.globe-pin { position: absolute; top: 0; left: 0; pointer-events: none;
  will-change: transform, opacity; transform-origin: 50% 100%; }
.globe-pin__pill { position: absolute; left: 50%; bottom: 31px; height: 33px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 16.5px; background: #000; color: #fff; font-size: 14px;
  line-height: 21px; white-space: nowrap; font-family: inherit;
  overflow: hidden; box-sizing: border-box; will-change: width, transform; }
.globe-pin__label { display: block; padding: 0 14px; }
.hero1_profile_choice_pref { margin-left: 10px; }
.globe-pin__stem { position: absolute; left: 50%; bottom: -1px; width: 2px;
  height: 24px; margin-left: -1px; background: #000; opacity: .7;
  transform-origin: 50% 100%; }
.globe-pin__dot { position: absolute; left: 50%; top: 0; width: 12px;
  height: 12px; margin-left: -6px; margin-top: -6px; border-radius: 50%;
  background: #000; box-shadow: 0 0 0 2px #fff, 0 4px 4px rgba(0,0,0,.25); }
`

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

let injected = false
function injectStyles(doc) {
  if (injected) return
  injected = true
  const el = doc.createElement('style')
  el.textContent = CSS
  doc.head.appendChild(el)
}

export function createPinLayer(stage) {
  injectStyles(document)
  const layer = document.createElement('div')
  layer.className = 'globe-pin-layer'
  Object.assign(layer.style, {
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '40',
    overflow: 'hidden',
  })
  ;(stage.box || stage.root).appendChild(layer)
  return layer
}

export class Pin {
  constructor(layer, place) {
    this.place = place
    this.el = document.createElement('div')
    this.el.className = 'globe-pin'

    const pill = document.createElement('div')
    pill.className = 'globe-pin__pill'

    const label = document.createElement('span')
    label.className = 'globe-pin__label'
    label.textContent = place.label
    pill.appendChild(label)

    const stem = document.createElement('div')
    stem.className = 'globe-pin__stem'

    const dot = document.createElement('div')
    dot.className = 'globe-pin__dot'

    this.el.append(pill, stem, dot)
    this.pill = pill
    this.label = label
    this.stem = stem
    this.dot = dot

    this.fullWidth = 0
    this.circleWidth = 33

    layer.appendChild(this.el)
    this._amount = 0
    this._pill = 1
    this.setAmount(0)
  }

  setAmount(a) {
    this._amount = a
    return this
  }

  setPill(p) {
    this._pill = p
    return this
  }

  _measure() {
    if (this.fullWidth) return
    const prevWidth = this.pill.style.width
    const prevOpacity = this.label.style.opacity
    this.pill.style.width = 'auto'
    this.label.style.opacity = '1'
    const w = this.pill.offsetWidth
    const h = this.pill.offsetHeight
    if (w) {
      this.fullWidth = Math.ceil(w)
      this.circleWidth = Math.ceil(h) || 33
    }
    this.pill.style.width = prevWidth
    this.label.style.opacity = prevOpacity
  }

  update(stage) {
    const p = stage.project(this.place.lat, this.place.lng)
    const a = this._amount

    if (!p.visible || a <= 0.001) {
      this.el.style.opacity = '0'
      return
    }

    this._measure()

    const limb = Math.min(1, p.depth / 0.12)
    const clamped = clamp01(a)
    this.el.style.opacity = String(clamped * limb)
    this.el.style.transform = `translate(${p.x}px, ${p.y}px)`

    const pill = clamp01(this._pill) * clamped
    const shape = easeOutCubic(clamp01((pill - 0.3) / 0.7))
    const text = clamp01((pill - 0.55) / 0.45)
    const puff = clamp01(pill / 0.3)

    const width = Math.round(
      this.circleWidth + (this.fullWidth - this.circleWidth) * shape
    )
    this.pill.style.width = `${width}px`
    this.pill.style.marginLeft = `${-width / 2}px`
    this.pill.style.opacity = String(puff)
    this.pill.style.transform = `scale(${0.7 + 0.3 * puff})`
    this.label.style.opacity = String(text)

    this.stem.style.transform = `scaleY(${clamped})`
    this.dot.style.transform = `scale(${0.4 + 0.6 * clamped})`
  }

  dispose() {
    this.el.remove()
  }
}
