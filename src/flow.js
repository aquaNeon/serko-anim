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
  { track: 'destPin', at: 2.05, dur: 0.75, from: 0, to: 1, ease: 'outBack' },
  { track: 'dropHead', at: 2.6, dur: 1.8, from: 0, to: 1, ease: 'inOutCubic' },
  { track: 'originPin', at: 1.6, dur: 0.35, from: 1, to: 0, ease: 'outCubic' },
  { track: 'originPin', at: 5.6, dur: 0.45, from: 0, to: 1, ease: 'outBack' },
  { track: 'destPin', at: 10.0, dur: 0.35, from: 1, to: 0, ease: 'outCubic' },
  { track: 'destPin', at: 13.7, dur: 0.45, from: 0, to: 1, ease: 'outBack' },
]

export class Flow {
  constructor({ route, originPin, destPin, beats = DEFAULT_BEATS, offset = 0, loop = false, loopDelay = 2.5 }) {
    this.route = route
    this.originPin = originPin
    this.destPin = destPin
    this.offset = offset
    this.beats = offset
      ? beats.map((b) => ({ ...b, at: b.at + offset }))
      : beats
    this.loop = loop
    this.loopDelay = loopDelay
    this.time = 0
    this.playing = false

    this.duration = this.beats.reduce((m, b) => Math.max(m, b.at + b.dur), 0)

    this.beats = this.beats.slice().sort((a, b) => a.at - b.at)
    this._initial = {}
    for (const beat of this.beats) {
      if (!(beat.track in this._initial)) this._initial[beat.track] = beat.from
    }

    this.values = { originPin: 0, arcDraw: 0, dropHead: 0, destPin: 0 }
    Object.assign(this.values, this._initial)
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
    for (const track of Object.keys(this._initial)) {
      this.values[track] = this._initial[track]
    }
    for (const beat of this.beats) {
      if (this.time < beat.at) continue
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
