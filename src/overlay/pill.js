const CSS = `
.globe-pin { position: absolute; top: 0; left: 0; pointer-events: none;
  will-change: transform, opacity; transform-origin: 50% 100%; }
.globe-pin__pill { position: absolute; left: 50%; transform: translateX(-50%);
  bottom: 31px; height: 33px; display: inline-flex; align-items: center;
  padding: 0 14px; border-radius: 16.5px; background: #000; color: #fff;
  font-size: 14px; line-height: 21px; white-space: nowrap;
  font-family: inherit; }
.globe-pin__stem { position: absolute; left: 50%; bottom: -1px; width: 2px;
  height: 24px; margin-left: -1px; background: #000; opacity: .7;
  transform-origin: 50% 100%; }
.globe-pin__dot { position: absolute; left: 50%; top: 0; width: 12px;
  height: 12px; margin-left: -6px; margin-top: -6px; border-radius: 50%;
  background: #000; box-shadow: 0 0 0 2px #fff, 0 4px 4px rgba(0,0,0,.25); }
`

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
    pill.textContent = place.label

    const stem = document.createElement('div')
    stem.className = 'globe-pin__stem'

    const dot = document.createElement('div')
    dot.className = 'globe-pin__dot'

    this.el.append(pill, stem, dot)
    this.pill = pill
    this.stem = stem
    this.dot = dot

    layer.appendChild(this.el)
    this._amount = 0
    this.setAmount(0)
  }

  setAmount(a) {
    this._amount = Math.min(1, Math.max(0, a))
    return this
  }

  update(stage) {
    const p = stage.project(this.place.lat, this.place.lng)
    const a = this._amount

    if (!p.visible || a <= 0.001) {
      this.el.style.opacity = '0'
      return
    }

    const limb = Math.min(1, p.depth / 0.12)
    this.el.style.opacity = String(a * limb)
    this.el.style.transform = `translate(${p.x}px, ${p.y}px)`

    const rise = 1 - a
    this.pill.style.transform = `translateX(-50%) translateY(${rise * 10}px)`
    this.pill.style.opacity = String(Math.min(1, a * 1.4))
    this.stem.style.transform = `scaleY(${a})`
    this.dot.style.transform = `scale(${0.4 + 0.6 * a})`
  }

  dispose() {
    this.el.remove()
  }
}
