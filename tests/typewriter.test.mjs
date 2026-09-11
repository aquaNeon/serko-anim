import { test, before } from 'node:test'
import assert from 'node:assert/strict'

let Typewriter

function makeDoc() {
  const doc = {
    createElement: (tag) => makeEl(tag),
    createTextNode: (value) => makeText(value),
    createDocumentFragment: () => {
      const frag = makeEl('#fragment')
      frag.isFragment = true
      return frag
    },
  }
  return doc
}

let doc

function makeText(value) {
  return {
    nodeType: 3,
    nodeValue: value,
    parentNode: null,
    parentElement: null,
    ownerDocument: null,
  }
}

function makeEl(tag, children = [], attrs = {}) {
  const el = {
    nodeType: 1,
    tagName: tag,
    style: {},
    childNodes: [],
    className: '',
    parentNode: null,
    parentElement: null,
    isFragment: false,
    classList: {
      contains: (c) => el.className.split(' ').includes(c),
    },
    hasAttribute: (n) => n in attrs,
    getAttribute: (n) => (n in attrs ? attrs[n] : null),
    querySelectorAll: () => [],
    contains: (other) => {
      const walk = (node) =>
        node === other || (node.childNodes || []).some(walk)
      return walk(el)
    },
    get textContent() {
      const walk = (node) =>
        node.nodeType === 3 ? node.nodeValue : (node.childNodes || []).map(walk).join('')
      return el.childNodes.map(walk).join('')
    },
    set textContent(v) {
      el.childNodes = [makeText(v)]
    },
    appendChild: (c) => {
      if (c.isFragment) {
        for (const k of c.childNodes) {
          k.parentNode = el
          k.parentElement = el
          el.childNodes.push(k)
        }
        c.childNodes = []
        return c
      }
      c.parentNode = el
      c.parentElement = el
      el.childNodes.push(c)
      return c
    },
    replaceChild: (fresh, old) => {
      const i = el.childNodes.indexOf(old)
      const incoming = fresh.isFragment ? fresh.childNodes : [fresh]
      for (const k of incoming) {
        k.parentNode = el
        k.parentElement = el
      }
      el.childNodes.splice(i, 1, ...incoming)
      if (fresh.isFragment) fresh.childNodes = []
      return old
    },
  }
  el.ownerDocument = doc
  for (const c of children) {
    c.parentNode = el
    c.parentElement = el
    c.ownerDocument = doc
    el.childNodes.push(c)
  }
  return el
}

before(async () => {
  globalThis.Node = { TEXT_NODE: 3, ELEMENT_NODE: 1 }
  doc = makeDoc()
  ;({ Typewriter } = await import('../src/overlay/typewriter.js'))
})

function buildSearchBar() {
  doc = makeDoc()
  const t1 = makeText('Fly American Airlines')
  const img = makeEl('IMG')
  const emojiWrap = makeEl('DIV', [img])
  const t2 = makeText('Outbound to New York')
  const root = makeEl('DIV', [
    makeEl('DIV', [t1]),
    emojiWrap,
    makeEl('DIV', [t2]),
  ])
  return { root, img, emojiWrap }
}

const shownUnits = (tw) =>
  tw.units.filter((u) => u.el.style.opacity === '1').length

test('text is split into word units, not removed', () => {
  const { root } = buildSearchBar()
  const before = root.textContent
  const tw = new Typewriter(root)
  assert.equal(root.textContent, before,
    'the text must still be present so the layout cannot reflow')
  assert.equal(tw.total, 3 + 1 + 4, 'three words, one atom, four words')
})

test('nothing is visible before it is revealed', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root)
  assert.equal(shownUnits(tw), 0)
})

test('units reveal one at a time, in order', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root)
  for (let n = 0; n <= tw.total; n++) {
    tw.reveal(n)
    assert.equal(shownUnits(tw), n)
    tw.units.forEach((u, i) => {
      assert.equal(u.el.style.opacity, i < n ? '1' : '0',
        `unit ${i} wrong at step ${n}`)
    })
  }
})

test('the image is an atom and survives', () => {
  const { root, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root)
  const atom = tw.units.find((u) => u.kind === 'atom')
  assert.ok(atom, 'the image must be tracked as an atom')
  assert.equal(atom.el, emojiWrap)
  tw.reveal(tw.total)
  assert.equal(emojiWrap.style.opacity, '1')
})

test('the image waits for the words before it', () => {
  const { root, emojiWrap } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(2)
  assert.equal(emojiWrap.style.opacity, '0')
  tw.reveal(4)
  assert.equal(emojiWrap.style.opacity, '1')
})

test('rewinding hides again, so scrubbing works', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(tw.total)
  tw.reveal(2)
  assert.equal(shownUnits(tw), 2)
})

test('done only once everything is revealed', () => {
  const { root } = buildSearchBar()
  const tw = new Typewriter(root)
  tw.reveal(tw.total - 1)
  assert.equal(tw.done, false)
  tw.reveal(tw.total)
  assert.equal(tw.done, true)
})

test('character mode splits into characters', () => {
  doc = makeDoc()
  const root = makeEl('DIV', [makeText('Fly')])
  const tw = new Typewriter(root, { byWord: false })
  assert.equal(tw.total, 3)
})
