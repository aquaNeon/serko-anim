const ATOMIC = new Set(['IMG', 'SVG', 'PICTURE', 'VIDEO', 'CANVAS'])

function isAtomic(el) {
  if (el.hasAttribute('data-type-atom')) return true
  if (ATOMIC.has(el.tagName.toUpperCase())) return true
  return el.textContent.trim() === ''
}

function charSteps(text) {
  const steps = []
  for (let i = 1; i <= text.length; i++) steps.push(i)
  return steps
}

function wordSteps(text) {
  const steps = []
  const re = /\S+/g
  let m
  while ((m = re.exec(text)) !== null) steps.push(m.index + m[0].length)
  if (!steps.length && text.length) steps.push(text.length)
  return steps
}

function collect(root, units, ctx) {
  for (const node of Array.from(root.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue
      if (text.trim() === '') continue
      if (ctx.skip(node.parentElement)) continue
      const steps = ctx.byWord ? wordSteps(text) : charSteps(text)
      units.push({ kind: 'text', node, text, steps, cost: steps.length })
      continue
    }
    if (node.nodeType !== Node.ELEMENT_NODE) continue
    if (ctx.skip(node)) continue

    if (isAtomic(node)) {
      units.push({
        kind: 'atom',
        el: node,
        cost: ctx.atomCost,
        display: node.style.display,
      })
    } else {
      collect(node, units, ctx)
    }
  }
}

export class Typewriter {
  constructor(el, { skipSelector = null, byWord = false } = {}) {
    this.el = el
    this.byWord = byWord

    const skipped = skipSelector ? Array.from(el.querySelectorAll(skipSelector)) : []
    const skip = (node) => {
      if (!node) return false
      return skipped.some((s) => s === node || s.contains(node))
    }

    this.units = []
    collect(el, this.units, { skip, byWord, atomCost: byWord ? 1 : 4 })
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
        const taken = Math.max(0, Math.min(unit.steps.length, budget))
        const chars = taken === 0 ? 0 : unit.steps[taken - 1]
        const next = unit.text.slice(0, chars)
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
