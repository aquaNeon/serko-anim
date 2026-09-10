import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Flow, DEFAULT_BEATS } from '../src/flow.js'

function fakeRoute() {
  return {
    progress: 0,
    head: 0,
    setProgress(v) { this.progress = v; return this },
    setHead(v) { this.head = v; return this },
  }
}

function fakePin() {
  return {
    amount: 0,
    setAmount(v) { this.amount = v; return this },
  }
}

function makeFlow(extra = {}) {
  const route = fakeRoute()
  const originPin = fakePin()
  const destPin = fakePin()
  const flow = new Flow({ route, originPin, destPin, ...extra })
  return { flow, route, originPin, destPin }
}

test('duration is the end of the last beat', () => {
  const { flow } = makeFlow()
  const expected = DEFAULT_BEATS.reduce((m, b) => Math.max(m, b.at + b.dur), 0)
  assert.equal(flow.duration, expected)
})

test('everything starts at zero', () => {
  const { flow, route, originPin, destPin } = makeFlow()
  assert.equal(route.progress, 0)
  assert.equal(route.head, 0)
  assert.equal(originPin.amount, 0)
  assert.equal(destPin.amount, 0)
})

test('complete() drives every track to its end value', () => {
  const { flow, route, originPin, destPin } = makeFlow()
  flow.complete()
  assert.ok(Math.abs(route.progress - 1) < 1e-9)
  assert.ok(Math.abs(route.head - 1) < 1e-9)
  assert.ok(Math.abs(originPin.amount - 1) < 1e-9)
  assert.ok(Math.abs(destPin.amount - 1) < 1e-9)
})

test('the drop never runs ahead of the drawn arc', () => {
  const { flow, route } = makeFlow()
  for (let t = 0; t <= flow.duration; t += 0.02) {
    flow.seek(t)
    assert.ok(route.head <= route.progress + 1e-9,
      `at t=${t.toFixed(2)} head ${route.head} > progress ${route.progress}`)
  }
})

test('route tracks stay strictly within 0..1', () => {
  const { flow, route } = makeFlow()
  for (let t = -1; t <= flow.duration + 1; t += 0.05) {
    flow.seek(t)
    for (const v of [route.progress, route.head]) {
      assert.ok(v >= -1e-9 && v <= 1 + 1e-9, `value ${v} out of range at t=${t}`)
    }
  }
})

test('pin tracks overshoot, but only a little', () => {
  const { flow, originPin, destPin } = makeFlow()
  let peak = 0
  for (let t = -1; t <= flow.duration + 1; t += 0.01) {
    flow.seek(t)
    for (const v of [originPin.amount, destPin.amount]) {
      peak = Math.max(peak, v)
      assert.ok(v >= -0.2 && v <= 1.2, `value ${v} out of range at t=${t}`)
    }
  }
  assert.ok(peak > 1.0, 'outBack should overshoot; the pin pop depends on it')
})

test('pins settle exactly on 1', () => {
  const { flow, originPin, destPin } = makeFlow()
  flow.complete()
  assert.ok(Math.abs(originPin.amount - 1) < 1e-9)
  assert.ok(Math.abs(destPin.amount - 1) < 1e-9)
})

test('seek is pure - same time gives same values', () => {
  const { flow } = makeFlow()
  flow.seek(2.2)
  const a = { ...flow.values }
  flow.seek(0.4)
  flow.seek(2.2)
  assert.deepEqual({ ...flow.values }, a)
})

test('advance does nothing while paused', () => {
  const { flow, route } = makeFlow()
  flow.pause()
  flow.advance(1.5)
  assert.equal(flow.time, 0)
  assert.equal(route.progress, 0)
})

test('advance clamps at the end when not looping', () => {
  const { flow } = makeFlow()
  flow.play()
  for (let i = 0; i < 200; i++) flow.advance(0.1)
  assert.equal(flow.time, flow.duration)
})

test('looping wraps back to the start after the loop delay', () => {
  const { flow } = makeFlow({ loop: true, loopDelay: 1 })
  flow.play()
  flow.advance(flow.duration + 0.5)
  assert.ok(flow.time > 0, 'should still be holding during the loop delay')
  flow.advance(1)
  assert.equal(flow.time, 0)
})

test('the destination pin lands no earlier than the drop arrives', () => {
  const { flow, route, destPin } = makeFlow()
  let dropDone = null
  let pinStart = null
  for (let t = 0; t <= flow.duration; t += 0.01) {
    flow.seek(t)
    if (dropDone === null && route.head >= 0.999) dropDone = t
    if (pinStart === null && destPin.amount > 0.001) pinStart = t
  }
  assert.ok(pinStart !== null && dropDone !== null)
  assert.ok(pinStart >= dropDone - 0.35,
    `pin starts at ${pinStart} but drop only arrives at ${dropDone}`)
})

test('a custom beat list overrides the default', () => {
  const route = fakeRoute()
  const flow = new Flow({
    route,
    beats: [{ track: 'arcDraw', at: 0, dur: 2, from: 0, to: 1, ease: 'linear' }],
  })
  assert.equal(flow.duration, 2)
  flow.seek(1)
  assert.ok(Math.abs(route.progress - 0.5) < 1e-9)
})
