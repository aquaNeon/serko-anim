import { test, before } from 'node:test'
import assert from 'node:assert/strict'

let Typewriter

before(async () => {
  class FakeNode {
    constructor() { this.childNodes = [] }
  }
  globalThis.Node = { TEXT_NODE: 3, ELEMENT_NODE: 1 }

  const makeText = (value) => ({
    nodeType: 3,
    nodeValue: value,
    _original: value,
    parentElement: null,
  })

  const makeEl = (tag, children = [], attrs = {}) => {
    const el = {
      nodeType: 1,
      tagName: tag,
      style: {},
      _attrs: attrs,
      childNodes: children,
      hasAttribute: (n) => n in attrs,
      getAttribute: (n) => (n in attrs ? attrs[n] : null),
      querySelectorAll: () => [],
      contains: (other) => {
        const walk = (node) => {
          if (node === other) return true
          return (node.childNodes || []).some(walk)
        }
        return walk(el)
      },
      get textContent() {
        const walk = (node) =>
          node.nodeType === 3 ? node.nodeValue : (node.childNodes || []).map(walk).join('')
        return (el.childNodes || []).map(walk).join('')
      },
    }
    for (const c of children) if (c.nodeType === 3) c.parentElement = el
    return el
  }

  globalThis.__makeText = makeText
  globalThis.__makeEl = makeEl
  ;({ Typewriter } = await import('../src/overlay/typewriter.js'))
})

function buildSearchBar() {
  const t1 = globalThis.__makeText('Fly American Airlines')
  const img = globalThis.__makeEl('IMG', [])
  const emojiWrap = globalThis.__makeEl('DIV', [img])
  const t2 = globalThis.__makeText('Outbound to New York')
  const textWrap = globalThis.__makeEl('DIV', [
    globalThis.__makeEl('DIV', [t1]),
    emojiWrap,
    globalThis.__makeEl('DIV', [t2]),
  ])
  const root = globalThis.__makeEl('DIV', [textWrap])
  return { root, t1, t2, img, emojiWrap }
}

test('the inline image survives typing', () => {
  const { root, img, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(tw.total)
  assert.ok(img, 'image node must still exist')
  assert.notEqual(emojiWrap.style.display, 'none', 'image should be shown when fully typed')
})

test('the image is hidden until the text before it is typed', () => {
  const { root, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(5)
  assert.equal(emojiWrap.style.display, 'none')
})

test('text reveals progressively, in order', () => {
  const { root, t1, t2 } = buildSearchBar()
  const tw = new Typewriter(root)

  tw.reveal(0)
  assert.equal(t1.nodeValue, '')
  assert.equal(t2.nodeValue, '')

  tw.reveal(3)
  assert.equal(t1.nodeValue, 'Fly')
  assert.equal(t2.nodeValue, '', 'later text must not start before earlier finishes')

  tw.reveal(t1._original.length)
  assert.equal(t1.nodeValue, t1._original)
  assert.equal(t2.nodeValue, '')

  tw.reveal(tw.total)
  assert.equal(t1.nodeValue, t1._original)
  assert.equal(t2.nodeValue, t2._original)
})

test('total covers both text runs plus the atom', () => {
  const { root, t1, t2 } = buildSearchBar()
  const tw = new Typewriter(root)
  assert.equal(tw.total, t1._original.length + t2._original.length + 4)
})

test('done only once everything is revealed', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(tw.total - 1)
  assert.equal(tw.done, false)
  tw.reveal(tw.total)
  assert.equal(tw.done, true)
})

test('rewinding hides content again, so scrubbing works', () => {
  const { root, t1, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(tw.total)
  tw.reveal(2)
  assert.equal(t1.nodeValue, 'Fl')
  assert.equal(emojiWrap.style.display, 'none')
})

test('skipSelector leaves matched subtrees alone', () => {
  const arrow = globalThis.__makeEl('SVG', [])
  const t1 = globalThis.__makeText('Hello')
  const root = globalThis.__makeEl('DIV', [globalThis.__makeEl('DIV', [t1]), arrow])
  root.querySelectorAll = () => [arrow]
  const tw = new Typewriter(root, { skipSelector: 'svg' })
  assert.equal(tw.total, 5, 'skipped atom must not cost steps')
  tw.reveal(0)
  assert.notEqual(arrow.style.display, 'none', 'skipped element stays visible')
})

test('word mode reveals whole words, not characters', () => {
  const { root, t1, t2 } = buildSearchBar()
  const tw = new Typewriter(root, { byWord: true })

  tw.reveal(1)
  assert.equal(t1.nodeValue, 'Fly')
  tw.reveal(2)
  assert.equal(t1.nodeValue, 'Fly American')
  tw.reveal(3)
  assert.equal(t1.nodeValue, 'Fly American Airlines')
  assert.equal(t2.nodeValue, '')
})

test('word mode counts words plus one per atom', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root, { byWord: true })
  assert.equal(tw.total, 3 + 1 + 4, 'three words, one atom, four words')
})

test('word mode never leaves a partial word on screen', () => {
  const { root, t1, t2 } = buildSearchBar()
  const tw = new Typewriter(root, { byWord: true })
  for (let n = 0; n <= tw.total; n++) {
    tw.reveal(n)
    for (const node of [t1, t2]) {
      const shown = node.nodeValue
      if (shown === '' || shown === node._original) continue
      assert.ok(!/\s$/.test(shown), `"${shown}" ends mid-gap`)
      const nextChar = node._original[shown.length]
      assert.ok(nextChar === undefined || /\s/.test(nextChar),
        `"${shown}" cuts a word in half`)
    }
  }
})

test('word mode still hides the image until its turn', () => {
  const { root, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root, { byWord: true })
  tw.reveal(2)
  assert.equal(emojiWrap.style.display, 'none')
  tw.reveal(4)
  assert.notEqual(emojiWrap.style.display, 'none')
})
