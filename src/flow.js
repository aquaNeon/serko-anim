const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
const easeOutBack = (t) => {
  const c = 1.70158
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
}

const EASINGS = {
  linear: (t) => t,
  outCubic: easeOutCubic,
  inOutCubic: easeInOutCubic,
  outBack: easeOutBack,
}

export const DEFAULT_BEATS = [
  { track: 'originPin', at: 0.15, dur: 0.75, from: 0, to: 1, ease: 'outBack' },
  { track: 'arcDraw', at: 0.65, dur: 1.5, from: 0, to: 1, ease: 'inOutCubic' },
  { track: 'dropHead', at: 1.55, dur: 1.9, from: 0, to: 1, ease: 'inOutCubic' },
  { track: 'destPin', at: 3.15, dur: 0.75, from: 0, to: 1, ease: 'outBack' },
]

export class Flow {
  constructor({ route, originPin, destPin, beats = DEFAULT_BEATS, loop = false, loopDelay = 2.5 }) {
    this.route = route
    this.originPin = originPin
    this.destPin = destPin
    this.beats = beats
    this.loop = loop
    this.loopDelay = loopDelay
    this.time = 0
    this.playing = false

    this.duration = beats.reduce((m, b) => Math.max(m, b.at + b.dur), 0)

    this.values = { originPin: 0, arcDraw: 0, dropHead: 0, destPin: 0 }
    this._apply()
  }

  play() {
    this.playing = true
    return this
  }

  pause() {
    this.playing = false
    return this
  }

  restart() {
    this.time = 0
    this.playing = true
    return this
  }

  seek(t) {
    this.time = t
    this._sample()
    this._apply()
    return this
  }

  complete() {
    return this.seek(this.duration)
  }

  advance(dt) {
    if (!this.playing) return this
    this.time += dt
    const end = this.duration + (this.loop ? this.loopDelay : 0)
    if (this.time > end) {
      if (this.loop) this.time = 0
      else this.time = this.duration
    }
    this._sample()
    this._apply()
    return this
  }

  _sample() {
    for (const beat of this.beats) {
      const raw = (this.time - beat.at) / beat.dur
      const clamped = Math.min(1, Math.max(0, raw))
      const ease = EASINGS[beat.ease] || EASINGS.linear
      this.values[beat.track] = beat.from + (beat.to - beat.from) * ease(clamped)
    }
  }

  _apply() {
    const v = this.values
    this.route.setProgress(v.arcDraw)
    this.route.setHead(v.dropHead)
    if (this.originPin) this.originPin.setAmount(v.originPin)
    if (this.destPin) this.destPin.setAmount(v.destPin)
  }
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
