export const SEQUENCE = [
  {
    selector: '.hero1_profile_wrap',
    layoutOnly: true,
    lockHeight: true,
  },
  {
    selector: '.hero1_profile_route_wrap',
    lat: 37.7749,
    lng: -122.4194,
    offsetY: -31,
    mobileOffsetY: 24,
    reparent: true,
    in: 4.95,
    out: 12.0,
    dur: 0.9,
    outDur: 0.32,
    growOut: 0.86,
    anim: 'grow',
  },
  {
    selector: '.hero1_profile_hotel_wrap',
    lat: 40.7128,
    lng: -74.006,
    offsetY: -31,
    mobileOffsetY: 24,
    reparent: true,
    in: 15.35,
    out: 22.0,
    dur: 0.9,
    outDur: 0.32,
    growOut: 0.86,
    anim: 'grow',
    optional: true,
  },
]

export const STACK = {
  template: '.hero1_profile_choice_wrap',
  profile: '.hero1_profile_item',
  wrap: '.hero1_profile_wrap',
  name: '.hero1_profile_name',
  nameStyle: {
    fontFamily: "'Jokker', system-ui, sans-serif",
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '150%',
    color: 'rgba(0, 0, 0, 0.88)',
  },
  check: '.hero1_profile_choice_check',
  text: '.hero1_profile_choice_text',
  search: '.hero1_profile_search_wrap',
  width: 450,
  minHeight: 49,
  mobileFontSize: 14,
  checkGap: 8,
  dur: 0.6,
  peek: 12,
  space: 12,
  lift: 30,
  typeBy: 'char',
  typeSpeed: 28,
  drawDur: 0.5,
  cards: [
    { at: 0.9, kind: 'prompt', from: '.hero1_profile_choice_text_wrap', hideOnMobile: '.hero1_profile_choice_emoji' },
    { at: 7.0, kind: 'pref', text: 'No early mornings' },
    { at: 10.1, kind: 'pref', text: 'Premium economy' },
    { at: 13.7, kind: 'prompt', from: '.hero1_profile_choice_hotel' },
    { at: 17.2, kind: 'pref', text: 'Walkable location' },
    { at: 20.1, kind: 'pref', text: 'Mid-range price' },
  ],
}

export const GLOBE_START = 3.0

const ATTR = {
  in: 'data-in',
  noWrap: 'data-no-wrap',
  out: 'data-out',
  dur: 'data-dur',
  collapse: 'data-collapse',
  outDur: 'data-out-dur',
  growOut: 'data-grow-out',
  anim: 'data-anim',
  typeSpeed: 'data-type-speed',
  typeSkip: 'data-type-skip',
  typeBy: 'data-type-by',
  display: 'data-display',
  lockWidth: 'data-lock-width',
  lockHeight: 'data-lock-height',
  lat: 'data-lat',
  lng: 'data-lng',
  offsetX: 'data-offset-x',
  offsetY: 'data-offset-y',
  mobileOffsetY: 'data-mobile-offset-y',
  reparent: 'data-reparent',
}

function ownedClasses(sequence) {
  const owned = new Set()
  for (const entry of sequence) {
    for (const cls of entry.selector.split('.').filter(Boolean)) owned.add(cls)
  }
  return owned
}

function createElement(entry, root, owned) {
  const { cloneFrom, appendTo, insertAfter, text, style } = entry.create
  const parent = appendTo ? root.querySelector(appendTo) : null
  const sibling = insertAfter ? root.querySelector(insertAfter) : null
  if (!parent && !sibling) return null

  const template = cloneFrom ? root.querySelector(cloneFrom) : null
  const el = template
    ? template.cloneNode(false)
    : (root.ownerDocument || document).createElement('div')

  el.removeAttribute('data-globe-cue')
  el.removeAttribute('data-globe-pin')
  for (const attr of ['data-in', 'data-out', 'data-dur', 'data-anim']) {
    el.removeAttribute(attr)
  }
  if (owned) {
    for (const cls of Array.from(el.classList || [])) {
      if (owned.has(cls)) el.classList.remove(cls)
    }
  }
  for (const cls of entry.selector.split('.').filter(Boolean)) {
    el.classList.add(cls)
  }
  if (text !== undefined) el.textContent = text
  if (style) Object.assign(el.style, style)
  el.style.display = 'none'

  if (sibling && sibling.parentNode) {
    sibling.parentNode.insertBefore(el, sibling.nextSibling)
  } else {
    parent.appendChild(el)
  }
  return el
}

export function applySequence(sequence = SEQUENCE, root = document) {
  const applied = []
  const missing = []
  const created = []
  const owned = ownedClasses(sequence)

  for (const entry of sequence) {
    let nodes = root.querySelectorAll(entry.selector)
    if (!nodes.length && entry.create) {
      const made = createElement(entry, root, owned)
      if (made) {
        nodes = [made]
        created.push(entry.selector)
      }
    }
    if (!nodes.length) {
      if (!entry.optional) missing.push(entry.selector)
      continue
    }

    let index = 0
    for (const el of nodes) {
      const offset = entry.stagger ? index * entry.stagger : 0
      index++
      if (!entry.layoutOnly) {
        const marker = entry.lat !== undefined ? 'data-globe-pin' : 'data-globe-cue'
        if (!el.hasAttribute('data-globe-cue') && !el.hasAttribute('data-globe-pin')) {
          el.setAttribute(marker, '')
        }
      }
      if (entry.style) Object.assign(el.style, entry.style)
      for (const [key, attr] of Object.entries(ATTR)) {
        if (entry[key] === undefined) continue
        if (el.hasAttribute(attr)) continue
        const shift = (v) => Math.round((v + offset) * 1000) / 1000
        const raw = entry[key]
        const value =
          key === 'in' || key === 'out'
            ? Array.isArray(raw) ? raw.map(shift).join(',') : shift(raw)
            : raw
        el.setAttribute(attr, String(value))
      }
      applied.push(entry.selector)
    }
  }

  if (missing.length) {
    console.warn(
      '[globe] sequence selectors matched nothing: ' + missing.join(', ') +
      ' - a class was probably renamed in Webflow'
    )
  }
  return { applied, missing, created }
}
