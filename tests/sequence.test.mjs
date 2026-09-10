import { test } from 'node:test'
import assert from 'node:assert/strict'
import { SEQUENCE, applySequence } from '../src/sequence.js'

function makeEl(cls) {
  const attrs = new Map()
  return {
    className: cls,
    attrs,
    hasAttribute: (n) => attrs.has(n),
    getAttribute: (n) => (attrs.has(n) ? attrs.get(n) : null),
    setAttribute: (n, v) => attrs.set(n, v),
  }
}

function makeRoot(map) {
  return {
    querySelectorAll: (sel) => map[sel] || [],
  }
}

test('a sequence entry marks the element and sets its timing', () => {
  const el = makeEl('hero1_profile_choice_wrap')
  const root = makeRoot({ '.hero1_profile_choice_wrap': [el] })
  applySequence([{ selector: '.hero1_profile_choice_wrap', in: 0.2, anim: 'rise' }], root)

  assert.equal(el.hasAttribute('data-globe-cue'), true)
  assert.equal(el.getAttribute('data-in'), '0.2')
  assert.equal(el.getAttribute('data-anim'), 'rise')
})

test('an attribute already in the markup wins over the sequence', () => {
  const el = makeEl('x')
  el.setAttribute('data-in', '5')
  const root = makeRoot({ '.x': [el] })
  applySequence([{ selector: '.x', in: 0.2, anim: 'rise' }], root)

  assert.equal(el.getAttribute('data-in'), '5', 'Webflow value must not be overwritten')
  assert.equal(el.getAttribute('data-anim'), 'rise', 'unset values still come from the sequence')
})

test('an entry with lat/lng marks the element as anchored', () => {
  const el = makeEl('card')
  const root = makeRoot({ '.card': [el] })
  applySequence([{ selector: '.card', in: 1, lat: 37.77, lng: -122.42 }], root)

  assert.equal(el.hasAttribute('data-globe-pin'), true)
  assert.equal(el.hasAttribute('data-globe-cue'), false)
  assert.equal(el.getAttribute('data-lat'), '37.77')
})

test('a renamed class is reported, not silently ignored', () => {
  const root = makeRoot({})
  const warnings = []
  const original = console.warn
  console.warn = (m) => warnings.push(m)
  try {
    const { missing } = applySequence([{ selector: '.gone', in: 1 }], root)
    assert.deepEqual(missing, ['.gone'])
    assert.equal(warnings.length, 1)
    assert.match(warnings[0], /matched nothing/)
  } finally {
    console.warn = original
  }
})

test('every shipped sequence entry is well formed', () => {
  for (const entry of SEQUENCE) {
    assert.ok(entry.selector && entry.selector.startsWith('.'),
      `bad selector: ${entry.selector}`)
    assert.equal(typeof entry.in, 'number', `${entry.selector} needs a numeric in`)
    assert.ok(entry.in >= 0, `${entry.selector} in must not be negative`)
    if (entry.out !== undefined) {
      assert.ok(entry.out > entry.in, `${entry.selector} out must follow in`)
    }
    if (entry.anim !== undefined) {
      assert.ok(['fade', 'rise', 'pop', 'type'].includes(entry.anim),
        `${entry.selector} has unknown anim ${entry.anim}`)
    }
  }
})

test('shipped sequence has no duplicate selectors', () => {
  const seen = new Set()
  for (const entry of SEQUENCE) {
    assert.ok(!seen.has(entry.selector), `duplicate entry for ${entry.selector}`)
    seen.add(entry.selector)
  }
})

test('staggered times carry no float noise', () => {
  const els = [makeEl('l'), makeEl('l'), makeEl('l'), makeEl('l')]
  const root = makeRoot({ '.l': els })
  applySequence([{ selector: '.l', in: 0.6, stagger: 1.6 }], root)
  for (const el of els) {
    const v = el.getAttribute('data-in')
    assert.ok(!/\d{6,}/.test(v), `float noise in data-in: ${v}`)
  }
})

test('stagger spaces a run of matching elements', () => {
  const els = [makeEl('line'), makeEl('line'), makeEl('line')]
  const root = makeRoot({ '.line': els })
  applySequence([{ selector: '.line', in: 0.6, stagger: 1.6, anim: 'type' }], root)

  assert.equal(els[0].getAttribute('data-in'), '0.6')
  assert.equal(els[1].getAttribute('data-in'), '2.2')
  assert.equal(els[2].getAttribute('data-in'), '3.8')
})

test('stagger shifts out-points too, keeping each line on screen equally', () => {
  const els = [makeEl('line'), makeEl('line')]
  const root = makeRoot({ '.line': els })
  applySequence([{ selector: '.line', in: 1, out: 3, stagger: 2 }], root)

  assert.equal(els[0].getAttribute('data-out'), '3')
  assert.equal(els[1].getAttribute('data-out'), '5')
})

test('without stagger every match shares the same timing', () => {
  const els = [makeEl('a'), makeEl('a')]
  const root = makeRoot({ '.a': els })
  applySequence([{ selector: '.a', in: 2 }], root)

  assert.equal(els[0].getAttribute('data-in'), '2')
  assert.equal(els[1].getAttribute('data-in'), '2')
})
