import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cardState, pose, cubicBezier, stepAt } from '../src/overlay/stack.js'

const geo = { gap: 8, height: 49, peek: 12, space: 12, lift: 30 }
const times = [0, 0.9, 7.0, 10.1, 13.7, 17.2, 20.1]
const kinds = [null, 'prompt', 'pref', 'pref', 'prompt', 'pref', 'pref']
const dur = 0.6
const offsets = Array.from({ length: 19 }, (_, i) => i * 0.05)
const prefs = [2, 3, 5, 6]
const prompts = [1, 4]

const trace = (step, index) =>
  offsets.map((e) => {
    const s = cardState(times[step] + e, index, times, geo, dur, kinds[index])
    return [s.y, s.s, s.o, s.content, s.z].map((v) => Math.round(v * 1e6) / 1e6)
  })

test('every preference arrives with exactly the same motion', () => {
  const first = trace(prefs[0], prefs[0])
  for (const i of prefs.slice(1)) {
    assert.deepEqual(trace(i, i), first, `card ${i} arrives differently`)
  }
})

test('every preference leaves with exactly the same motion', () => {
  const first = trace(prefs[0] + 1, prefs[0])
  for (const i of prefs.slice(1, -1)) {
    assert.deepEqual(trace(i + 1, i), first, `card ${i} leaves differently`)
  }
})

test('a card arrives behind the one leaving, in place', () => {
  for (let k = 2; k < times.length; k++) {
    const t = times[k] + dur / 2
    const entering = cardState(t, k, times, geo, dur, kinds[k])
    const leaving = cardState(t, k - 1, times, geo, dur, kinds[k - 1])
    assert.ok(entering.z < leaving.z, `card ${k} must sit behind card ${k - 1}`)
    assert.equal(pose(-1, geo, kinds[k]).y, pose(0, geo, kinds[k]).y, `card ${k} must not travel in`)
  }
})

test('preferences leave down behind the profile', () => {
  const active = pose(0, geo, 'pref')
  const gone = pose(1, geo, 'pref')
  assert.ok(gone.y > active.y, 'must leave downwards')
  assert.ok(geo.gap - gone.y + geo.height * gone.s <= 0, 'top must end at or below the profile top')
  assert.equal(gone.o, 0)
})

test('prompts never move, they only fade', () => {
  const y = pose(0, geo, 'prompt').y
  for (const i of prompts) {
    for (let k = 0; k < times.length; k++) {
      for (const e of offsets) {
        const s = cardState(times[k] + e, i, times, geo, dur, 'prompt')
        assert.equal(s.y, y, `prompt ${i} moved at step ${k}`)
      }
    }
  }
})

test('cards grow in slightly and only scale on the way in', () => {
  const start = pose(-1, geo, 'pref').s
  assert.ok(start < 1 && start >= 0.9, 'the arrival scale should be subtle')
  for (let k = 1; k < times.length; k++) {
    for (const e of offsets) {
      for (let i = 1; i < times.length; i++) {
        if (i === k) continue
        if (k < i) continue
        assert.equal(cardState(times[k] + e, i, times, geo, dur, kinds[i]).s, 1, `card ${i} scaled at step ${k}`)
      }
    }
    const settled = cardState(times[k] + dur, k, times, geo, dur, kinds[k]).s
    assert.ok(Math.abs(settled - 1) < 1e-9, `card ${k} must settle at full size`)
  }
})

test('at rest only the active card is visible', () => {
  for (let k = 1; k < times.length; k++) {
    const t = times[k] + 1.5
    for (let i = 1; i < times.length; i++) {
      const { o } = cardState(t, i, times, geo, dur, kinds[i])
      const want = i === k ? 1 : 0
      assert.ok(Math.abs(o - want) < 1e-6, `step ${k}: card ${i} opacity ${o}, want ${want}`)
    }
  }
})

test('step lookup and easing endpoints', () => {
  assert.equal(stepAt(-1, times), -1)
  assert.equal(stepAt(0, times), 0)
  assert.equal(stepAt(10.1, times), 3)
  const ease = cubicBezier(0.45, 0, 0.2, 1)
  assert.equal(ease(0), 0)
  assert.equal(ease(1), 1)
  let prev = 0
  for (let x = 0.05; x < 1; x += 0.05) {
    const y = ease(x)
    assert.ok(y >= prev, 'easing must not go backwards')
    prev = y
  }
})
