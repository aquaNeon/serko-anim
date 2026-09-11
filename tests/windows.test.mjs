import { test, before } from 'node:test'
import assert from 'node:assert/strict'

let Overlays

before(async () => {
  globalThis.Node = { TEXT_NODE: 3, ELEMENT_NODE: 1 }
  globalThis.getComputedStyle = () => ({ display: 'block' })
  ;({ Overlays } = await import('../src/overlay/overlays.js'))
})

function makeEl(attrs = {}) {
  return {
    className: 'x',
    style: {},
    childNodes: [],
    offsetWidth: 100,
    hasAttribute: (n) => n in attrs,
    getAttribute: (n) => (n in attrs ? attrs[n] : null),
    setAttribute: (n, v) => { attrs[n] = v },
    querySelectorAll: () => [],
    getBoundingClientRect: () => ({ width: 100, height: 20 }),
  }
}

function makeOverlays(attrs) {
  const el = makeEl({ 'data-globe-cue': '', ...attrs })
  const root = { querySelectorAll: () => [el] }
  const ov = new Overlays(null, root)
  return { ov, el }
}

const opacityAt = (ov, el, t) => {
  ov.update(t, { project: () => ({ visible: true, depth: 1, x: 0, y: 0 }) })
  return parseFloat(el.style.opacity || '1')
}

test('a single window behaves as before', () => {
  const { ov, el } = makeOverlays({ 'data-in': '1', 'data-out': '3', 'data-dur': '0.5' })
  assert.equal(opacityAt(ov, el, 0.5), 0)
  assert.ok(opacityAt(ov, el, 2) > 0.9)
  assert.equal(opacityAt(ov, el, 4), 0)
})

test('two windows bring an element back', () => {
  const { ov, el } = makeOverlays({
    'data-in': '0.2,11.5',
    'data-out': '6.2',
    'data-dur': '0.45',
  })

  assert.ok(opacityAt(ov, el, 1) > 0.9, 'visible in the first window')
  assert.equal(opacityAt(ov, el, 8), 0, 'gone between windows')
  assert.ok(opacityAt(ov, el, 12.5) > 0.9, 'back for the second window')
})

test('the second window has no out point, so it stays', () => {
  const { ov, el } = makeOverlays({
    'data-in': '0.2,11.5',
    'data-out': '6.2',
    'data-dur': '0.45',
  })
  assert.ok(opacityAt(ov, el, 60) > 0.9, 'still visible long after')
})

test('windows are picked by the latest in point passed', () => {
  const { ov, el } = makeOverlays({
    'data-in': '0,5,10',
    'data-out': '2,7',
    'data-dur': '0.4',
  })
  assert.ok(opacityAt(ov, el, 1) > 0.9)
  assert.equal(opacityAt(ov, el, 3), 0)
  assert.ok(opacityAt(ov, el, 6) > 0.9)
  assert.equal(opacityAt(ov, el, 8), 0)
  assert.ok(opacityAt(ov, el, 11) > 0.9)
})

test('scrubbing backwards restores an earlier window', () => {
  const { ov, el } = makeOverlays({
    'data-in': '0.2,11.5',
    'data-out': '6.2',
    'data-dur': '0.45',
  })
  opacityAt(ov, el, 12.5)
  assert.ok(opacityAt(ov, el, 1) > 0.9, 'must recover when time moves back')
  assert.notEqual(el.style.display, 'none', 'and must not stay collapsed')
})

test('maxTime accounts for the last window', () => {
  const { ov } = makeOverlays({
    'data-in': '0.2,11.5',
    'data-out': '6.2',
    'data-dur': '0.45',
  })
  assert.ok(ov.maxTime >= 11.95, `maxTime ${ov.maxTime} must cover the last window`)
})

test('an element that returns is displayed again, not left hidden', () => {
  const { ov, el } = makeOverlays({
    'data-in': '0.2,11.5',
    'data-out': '6.2',
    'data-dur': '0.45',
  })
  const at = (t) => {
    ov.update(t, { project: () => ({ visible: true, depth: 1, x: 0, y: 0 }) })
    return { display: el.style.display, opacity: parseFloat(el.style.opacity || '1') }
  }
  at(1)
  at(8)
  const back = at(12)
  assert.notEqual(back.display, 'none')
  assert.ok(back.opacity > 0.9)
})

test('exiting never touches width, so nothing can re-wrap', () => {
  const { ov, el } = makeOverlays({
    'data-in': '1',
    'data-out': '3',
    'data-dur': '0.5',
  })
  for (const t of [1.2, 3.1, 3.3, 3.6]) {
    ov.update(t, { project: () => ({ visible: true, depth: 1, x: 0, y: 0 }) })
    assert.ok(!el.style.maxWidth, `maxWidth was set to ${el.style.maxWidth} at ${t}`)
    assert.ok(!el.style.minWidth, `minWidth was set to ${el.style.minWidth} at ${t}`)
    assert.notEqual(el.style.whiteSpace, 'nowrap')
  }
})
