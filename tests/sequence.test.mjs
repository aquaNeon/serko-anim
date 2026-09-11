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

const asList = (v) => (Array.isArray(v) ? v : [v])

test('every shipped sequence entry is well formed', () => {
  for (const entry of SEQUENCE) {
    assert.ok(entry.selector && entry.selector.startsWith('.'),
      `bad selector: ${entry.selector}`)

    if (entry.layoutOnly) {
      assert.equal(entry.in, undefined,
        `${entry.selector} is layoutOnly so it must not carry timing`)
      continue
    }

    const ins = asList(entry.in)
    for (const v of ins) {
      assert.equal(typeof v, 'number', `${entry.selector} needs numeric in`)
      assert.ok(v >= 0, `${entry.selector} in must not be negative`)
    }
    for (let i = 1; i < ins.length; i++) {
      assert.ok(ins[i] > ins[i - 1], `${entry.selector} in times must ascend`)
    }

    if (entry.out !== undefined) {
      const outs = asList(entry.out)
      assert.ok(outs.length <= ins.length,
        `${entry.selector} has more out points than in points`)
      outs.forEach((o, i) => {
        assert.ok(o > ins[i], `${entry.selector} out[${i}] must follow its in`)
        if (ins[i + 1] !== undefined) {
          assert.ok(ins[i + 1] >= o,
            `${entry.selector} window ${i} overlaps the next one`)
        }
      })
    }
    if (entry.anim !== undefined) {
      assert.ok(['fade', 'rise', 'pop', 'type', 'draw'].includes(entry.anim),
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

function makeDomEl(cls) {
  const attrs = new Map()
  const el = {
    className: cls,
    attrs,
    childNodes: [],
    parentNode: null,
    style: {},
    classList: {
      add: (c) => {
        const parts = el.className.split(' ').filter(Boolean)
        if (!parts.includes(c)) parts.push(c)
        el.className = parts.join(' ')
      },
      remove: (c) => {
        el.className = el.className.split(' ').filter((x) => x && x !== c).join(' ')
      },
      [Symbol.iterator]: function* () {
        yield* el.className.split(' ').filter(Boolean)
      },
    },
    hasAttribute: (n) => attrs.has(n),
    getAttribute: (n) => (attrs.has(n) ? attrs.get(n) : null),
    setAttribute: (n, v) => attrs.set(n, v),
    removeAttribute: (n) => attrs.delete(n),
    cloneNode: () => makeDomEl(el.className),
    appendChild: (c) => { el.childNodes.push(c); c.parentNode = el; return c },
    insertBefore: (c) => { el.childNodes.push(c); c.parentNode = el; return c },
    textContent: '',
  }
  return el
}

test('a missing element is created by cloning a styled one', () => {
  const template = makeDomEl('hero1_profile_choice_text')
  const check = makeDomEl('hero1_profile_choice_check')
  const parent = makeDomEl('wrap')
  parent.appendChild(check)

  const root = {
    querySelectorAll: (sel) => (sel === '.made' ? [] : []),
    querySelector: (sel) =>
      sel === '.hero1_profile_choice_text' ? template
      : sel === '.hero1_profile_choice_check' ? check
      : null,
    ownerDocument: { createElement: () => makeDomEl('') },
  }

  const { created } = applySequence([{
    selector: '.made',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'No early mornings',
    },
    in: 7,
    anim: 'type',
  }], root)

  assert.deepEqual(created, ['.made'])
  const made = parent.childNodes.find((c) => c.className.includes('made'))
  assert.ok(made, 'created element must be inserted into the DOM')
  assert.equal(made.textContent, 'No early mornings')
  assert.match(made.className, /hero1_profile_choice_text/, 'keeps the template styling')
  assert.equal(made.style.display, 'none', 'starts hidden so it cannot flash')
  assert.equal(made.getAttribute('data-in'), '7')
})

test('an element built in Webflow wins over creating one', () => {
  const existing = makeEl('made')
  const root = {
    querySelectorAll: (sel) => (sel === '.made' ? [existing] : []),
    querySelector: () => null,
  }
  const { created } = applySequence([{
    selector: '.made',
    create: { cloneFrom: '.x', appendTo: '.y', text: 'injected' },
    in: 7,
  }], root)

  assert.deepEqual(created, [], 'must not create when the element already exists')
  assert.equal(existing.getAttribute('data-in'), '7')
})

test('creation is skipped when there is nowhere to put it', () => {
  const root = { querySelectorAll: () => [], querySelector: () => null }
  const { created, missing } = applySequence([{
    selector: '.made',
    create: { cloneFrom: '.x', appendTo: '.nope', text: 'hi' },
    in: 1,
  }], root)
  assert.deepEqual(created, [])
  assert.deepEqual(missing, ['.made'])
})

test('array in/out points survive stagger as a comma list', () => {
  const els = [makeEl('w'), makeEl('w')]
  const root = makeRoot({ '.w': els })
  applySequence([{ selector: '.w', in: [0.2, 5], out: [2], stagger: 1 }], root)

  assert.equal(els[0].getAttribute('data-in'), '0.2,5')
  assert.equal(els[0].getAttribute('data-out'), '2')
  assert.equal(els[1].getAttribute('data-in'), '1.2,6')
  assert.equal(els[1].getAttribute('data-out'), '3')
})

test('a clone does not inherit another entry identity class', () => {
  const first = makeDomEl('hero1_profile_choice_text hero1_profile_choice_confirm')
  const anchor = makeDomEl('anchor')
  const parent = makeDomEl('wrap')
  parent.appendChild(anchor)

  const root = {
    querySelectorAll: () => [],
    querySelector: (sel) =>
      sel === '.hero1_profile_choice_text' ? first
      : sel === '.anchor' ? anchor
      : null,
    ownerDocument: { createElement: () => makeDomEl('') },
  }

  applySequence([
    { selector: '.hero1_profile_choice_confirm', in: 7 },
    {
      selector: '.hero1_profile_choice_confirm_two',
      create: { cloneFrom: '.hero1_profile_choice_text', insertAfter: '.anchor', text: 'two' },
      in: 9,
    },
  ], root)

  const made = parent.childNodes.find((c) => c.className.includes('confirm_two'))
  assert.ok(made, 'element must be created')
  const classes = made.className.split(' ')
  assert.ok(!classes.includes('hero1_profile_choice_confirm'),
    `clone kept a foreign identity class: ${made.className}`)
  assert.ok(classes.includes('hero1_profile_choice_text'), 'styling classes are kept')
  assert.ok(classes.includes('hero1_profile_choice_confirm_two'), 'own class added')
})

test('a layoutOnly entry sets its attributes but is not a cue', () => {
  const el = makeEl('outer')
  const root = makeRoot({ '.outer': [el] })
  applySequence([{ selector: '.outer', layoutOnly: true, lockHeight: true }], root)

  assert.equal(el.getAttribute('data-lock-height'), 'true')
  assert.equal(el.hasAttribute('data-globe-cue'), false,
    'layoutOnly must not turn the element into an animated item')
})
