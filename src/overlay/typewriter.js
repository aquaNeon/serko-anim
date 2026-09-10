const ATOMIC = new Set(['IMG', 'SVG', 'PICTURE', 'VIDEO', 'CANVAS'])
const ATOM_COST = 4

function isAtomic(el) {
  if (el.hasAttribute('data-type-atom')) return true
  if (ATOMIC.has(el.tagName.toUpperCase())) return true
  return el.textContent.trim() === ''
}

function collect(root, units, skip) {
  for (const node of Array.from(root.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue
      if (text.trim() === '') continue
      if (skip(node.parentElement)) continue
      units.push({ kind: 'text', node, text, cost: text.length })
      continue
    }
    if (node.nodeType !== Node.ELEMENT_NODE) continue
    if (skip(node)) continue

    if (isAtomic(node)) {
      units.push({ kind: 'atom', el: node, cost: ATOM_COST, display: node.style.display })
    } else {
      collect(node, units, skip)
    }
  }
}

export class Typewriter {
  constructor(el, { skipSelector = null } = {}) {
    this.el = el

    const skipped = skipSelector ? Array.from(el.querySelectorAll(skipSelector)) : []
    const skip = (node) => {
      if (!node) return false
      return skipped.some((s) => s === node || s.contains(node))
    }

    this.units = []
    collect(el, this.units, skip)
    this.total = this.units.reduce((n, u) => n + u.cost, 0)
    this.revealed = -1
    this.reveal(0)
  }

  reveal(steps) {
    if (steps === this.revealed) return
    this.revealed = steps

    let budget = steps
    for (const unit of this.units) {
      if (unit.kind === 'text') {
        const n = Math.max(0, Math.min(unit.text.length, budget))
        const next = unit.text.slice(0, n)
        if (unit.node.nodeValue !== next) unit.node.nodeValue = next
      } else {
        const want = budget >= unit.cost ? unit.display || '' : 'none'
        if (unit.el.style.display !== want) unit.el.style.display = want
      }
      budget -= unit.cost
    }
  }

  get done() {
    return this.revealed >= this.total
  }
}
