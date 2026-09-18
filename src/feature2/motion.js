export const SEGMENTS = [0.6, 1.4, 1.0, 1.1, 1.8]
export const STEPS = SEGMENTS.length

export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
export const lerp = (a, b, p) => a + (b - a) * p
export const inOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
export const out = (t) => 1 - Math.pow(1 - t, 3)
export const win = (u, a, b, ease = inOut) => ease(clamp01((u - a) / (b - a)))

export function cumulative(segments = SEGMENTS) {
  const cum = [0]
  for (const d of segments) cum.push(cum[cum.length - 1] + d)
  return cum
}

export function targetStep(top, hold, steps = STEPS) {
  if (top > 0) return 0
  return Math.min(steps, 1 + Math.floor(-top / hold))
}

export function scrubTime(top, span, total = cumulative()[STEPS]) {
  return total * clamp01((0 - top) / span)
}

export function smooth(play, goal, dt, rate = 10) {
  const next = play + (goal - play) * (1 - Math.exp(-rate * dt))
  return Math.abs(goal - next) < 1e-3 ? goal : next
}

export function advance(play, goal, dt, speed = 1) {
  const diff = goal - play
  if (diff === 0) return play
  const rate = Math.max(1, Math.abs(diff) / 1.2) * speed
  return play + Math.sign(diff) * Math.min(Math.abs(diff), rate * dt)
}

export function progress(time, segments = SEGMENTS, cum = cumulative(segments)) {
  return segments.map((d, k) => clamp01((time - cum[k]) / d))
}

export function parseRgb(value, fallback = [255, 255, 255]) {
  const m = /rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/.exec(value || '')
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : fallback
}
