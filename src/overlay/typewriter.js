const ATOMIC = new Set(['IMG', 'SVG', 'PICTURE', 'VIDEO', 'CANVAS'])
const ATOM_COST = 1

function isAtomic(el) {
  if (el.hasAttribute('data-type-atom')) return true
  if (ATOMIC.has(el.tagName.toUpperCase())) return true
  return el.textContent.trim() === ''
}

function splitTextNode(node, byWord) {
  const text = node.nodeValue
  const doc = node.ownerDocument
  const holder = doc.createElement('span')
  holder.className = 'globe-type-run'
  holder.style.display = 'inline'
  holder.style.whiteSpace = 'inherit'
  const frag = holder
  const units = []

  const pattern = byWord ? /\S+\s*/g : /[\s\S]/g
  let m
  let consumed = 0
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > consumed) {
      frag.appendChild(doc.createTextNode(text.slice(consumed, m.index)))
    }
    const span = doc.createElement('span')
    span.className = 'globe-type-unit'
    span.style.display = 'inline'
    span.style.whiteSpace = 'pre-wrap'
    span.style.opacity = '0'
    span.style.willChange = 'opacity'
    span.textContent = m[0]
    frag.appendChild(span)
    units.push({ kind: 'text', el: span, cost: 1 })
    consumed = m.index + m[0].length
  }
  if (consumed < text.length) {
    frag.appendChild(doc.createTextNode(text.slice(consumed)))
  }

  node.parentNode.replaceChild(holder, node)
  return units
}

function collect(root, units, ctx) {
  for (const node of Array.from(root.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.trim() === '') continue
      if (ctx.skip(node.parentElement)) continue
      units.push(...splitTextNode(node, ctx.byWord))
      continue
    }
    if (node.nodeType !== Node.ELEMENT_NODE) continue
    if (ctx.skip(node)) continue
    if (node.classList && node.classList.contains('globe-type-unit')) continue

    if (isAtomic(node)) {
      node.style.opacity = '0'
      node.style.willChange = 'opacity'
      units.push({ kind: 'atom', el: node, cost: ATOM_COST })
    } else {
      collect(node, units, ctx)
    }
  }
}

export class Typewriter {
  constructor(el, { skipSelector = null, byWord = true } = {}) {
    this.el = el
    this.byWord = byWord

    const skipped = skipSelector ? Array.from(el.querySelectorAll(skipSelector)) : []
    const skip = (node) => {
      if (!node) return false
      return skipped.some((s) => s === node || s.contains(node))
    }

    this.units = []
    collect(el, this.units, { skip, byWord })
    this.total = this.units.reduce((n, u) => n + u.cost, 0)
    this.revealed = -1
    this.reveal(0)
  }

  reveal(steps) {
    if (steps === this.revealed) return
    this.revealed = steps

    let budget = steps
    for (const unit of this.units) {
      const shown = budget >= unit.cost ? '1' : '0'
      if (unit.el.style.opacity !== shown) unit.el.style.opacity = shown
      budget -= unit.cost
    }
  }

  get done() {
    return this.revealed >= this.total
  }
}
