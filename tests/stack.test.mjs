import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cardState, pose, cubicBezier, stepAt } from '../src/overlay/stack.js'

const geo = { gap: 8, height: 49, peek: 12, space: 12, lift: 30, peekOpacity: 0.5 }
const times = [0, 0.9, 7.0, 9.1, 11.7, 15.2, 17.1]
const dur = 0.6
const offsets = Array.from({ length: 19 }, (_, i) => i * 0.05)

const trace = (step, index) =>
  offsets.map((e) => {
    const s = cardState(times[step] + e, index, times, geo, dur)
    return [s.y, s.s, s.o, s.content, s.z].map((v) => Math.round(v * 1e6) / 1e6)
  })

test('every card rises from the peek with exactly the same motion', () => {
  const first = trace(1, 1)
  for (let k = 2; k < times.length; k++) {
    assert.deepEqual(trace(k, k), first, `card ${k} rises differently from card 1`)
  }
})

test('every card leaves with exactly the same motion', () => {
  const first = trace(2, 1)
  for (let k = 3; k < times.length; k++) {
    assert.deepEqual(trace(k, k - 1), first, `card ${k - 1} leaves differently from card 1`)
  }
})

test('no card ever scales', () => {
  for (let k = 0; k < times.length; k++) {
    for (const e of offsets) {
      for (let i = 1; i < times.length; i++) {
        assert.equal(cardState(times[k] + e, i, times, geo, dur).s, 1, `card ${i} scaled at step ${k}`)
      }
    }
  }
})

test('at rest only the active card and the peek are visible', () => {
  for (let k = 1; k < times.length; k++) {
    const t = times[k] + 1.5
    for (let i = 1; i < times.length; i++) {
      const { o } = cardState(t, i, times, geo, dur)
      const want = i === k ? 1 : i === k + 1 ? geo.peekOpacity : 0
      assert.ok(Math.abs(o - want) < 1e-6, `step ${k}: card ${i} opacity ${o}, want ${want}`)
    }
  }
})

test('the peek and the gap above it match the design', () => {
  const peek = pose(-1, geo)
  const active = pose(0, geo)
  const peekTopAboveProfile = geo.gap - peek.y + geo.height * peek.s
  const activeBottomAboveProfile = geo.gap - active.y
  assert.ok(Math.abs(peekTopAboveProfile - geo.peek) < 1e-9)
  assert.ok(Math.abs(activeBottomAboveProfile - (geo.peek + geo.space)) < 1e-9)
})

test('before its first swap the next card is hidden behind the profile', () => {
  const hidden = pose(-2, geo)
  assert.equal(hidden.o, 0)
  assert.ok(geo.gap - hidden.y + geo.height * hidden.s < 0, 'top must sit below the profile top')
})

test('step lookup and easing endpoints', () => {
  assert.equal(stepAt(-1, times), -1)
  assert.equal(stepAt(0, times), 0)
  assert.equal(stepAt(9.1, times), 3)
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
