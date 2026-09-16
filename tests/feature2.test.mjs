import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  SEGMENTS, STEPS, cumulative, targetStep, advance, progress, parseRgb,
} from '../src/feature2/motion.js'

const cum = cumulative(SEGMENTS)
const hold = 630

test('before the section pins nothing has started', () => {
  assert.equal(targetStep(1, hold), 0)
  assert.equal(targetStep(400, hold), 0)
})

test('pinning is step 1 and every hold of scroll adds one step', () => {
  assert.equal(targetStep(0, hold), 1)
  assert.equal(targetStep(-(hold - 1), hold), 1)
  assert.equal(targetStep(-hold, hold), 2)
  assert.equal(targetStep(-3 * hold, hold), 4)
})

test('scrolling past the end holds the last step', () => {
  assert.equal(targetStep(-100 * hold, hold), STEPS)
})

const run = (from, to, dt = 1 / 60) => {
  let play = from
  let frames = 0
  while (play !== to && frames < 10000) {
    play = advance(play, to, dt)
    frames++
  }
  return { play, seconds: frames * dt }
}

test('the playhead lands exactly on its goal without overshooting', () => {
  let play = 0
  let peak = 0
  while (play !== cum[2]) {
    play = advance(play, cum[2], 1 / 60)
    peak = Math.max(peak, play)
  }
  assert.equal(play, cum[2])
  assert.equal(peak, cum[2])
})

test('scrolling back plays the same path in reverse', () => {
  const forward = run(cum[2], cum[3])
  const back = run(cum[3], cum[2])
  assert.equal(back.play, cum[2])
  assert.ok(Math.abs(forward.seconds - back.seconds) < 1 / 30)
})

test('a single step plays at natural speed', () => {
  const { seconds } = run(cum[2], cum[3])
  assert.ok(Math.abs(seconds - SEGMENTS[2]) < 0.05, `took ${seconds}s`)
})

test('a fast scroll across several steps catches up quicker than playing each', () => {
  const { seconds } = run(0, cum[STEPS])
  const natural = cum[STEPS]
  assert.ok(seconds < natural * 0.6, `took ${seconds}s of ${natural}s`)
})

test('a goal that changes mid-flight is followed from where the playhead is', () => {
  let play = 0
  for (let i = 0; i < 30; i++) play = advance(play, cum[3], 1 / 60)
  const mid = play
  play = advance(play, 0, 1 / 60)
  assert.ok(play < mid, 'must turn around immediately')
})

test('segment progress is 0 before and 1 after each segment', () => {
  const u = progress(cum[2])
  assert.deepEqual(u.slice(0, 2), [1, 1])
  assert.deepEqual(u.slice(2), [0, 0, 0])
})

test('colours parse from computed style strings', () => {
  assert.deepEqual(parseRgb('rgb(18, 18, 22)'), [18, 18, 22])
  assert.deepEqual(parseRgb('rgba(255, 255, 255, 0.5)'), [255, 255, 255])
  assert.deepEqual(parseRgb('transparent', [1, 2, 3]), [1, 2, 3])
})
