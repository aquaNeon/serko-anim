export const SEQUENCE = [
  {
    selector: '.hero1_profile_wrap',
    layoutOnly: true,
    lockHeight: true,
  },
  {
    selector: '.hero1_profile_choice_wrap',
    in: 0.2,
    anim: 'rise',
    lockWidth: true,
    lockHeight: true,
  },
  {
    selector: '.hero1_profile_choice_text_wrap',
    noWrap: true,
    in: 0.6,
    out: 6.2,
    dur: 0.45,
    anim: 'type',
    typeSpeed: 4.5,
  },
  {
    selector: '.hero1_profile_search_wrap',
    in: [0.2, 11.5],
    out: [6.2, 14.7],
    dur: 0.45,
    anim: 'fade',
  },
  {
    selector: '.hero1_profile_route_wrap',
    lat: 37.7749,
    lng: -122.4194,
    offsetY: -31,
    reparent: true,
    in: 4.95,
    out: 8.4,
    dur: 0.9,
    outDur: 0.32,
    growOut: 0.86,
    anim: 'grow',
  },
  {
    selector: '.hero1_profile_choice_check',
    in: [6.7, 15.0],
    out: [11.0],
    dur: 0.4,
    anim: 'pop',
    display: 'flex',
  },
  {
    selector: '.hero1_profile_choice_check_mark',
    in: [6.85, 8.9, 15.15, 17.05],
    dur: 0.5,
    anim: 'draw',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_confirm',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'No early mornings',
      classes: ['hero1_profile_choice_pref'],
    },
    in: 7.0,
    out: 8.6,
    dur: 0.34,
    outDur: 0.24,
    anim: 'wipe',
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_confirm_two',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'Premium economy',
      classes: ['hero1_profile_choice_pref'],
    },
    in: 9.1,
    out: 11.0,
    dur: 0.34,
    outDur: 0.24,
    anim: 'wipe',
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_confirm_three',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'Walkable location',
      classes: ['hero1_profile_choice_pref'],
    },
    in: 15.2,
    out: 16.9,
    dur: 0.34,
    outDur: 0.24,
    anim: 'wipe',
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_confirm_four',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'Mid-range price',
      classes: ['hero1_profile_choice_pref'],
    },
    in: 17.1,
    dur: 0.34,
    anim: 'wipe',
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_hotel',
    noWrap: true,
    in: 11.7,
    out: 14.7,
    outDur: 0.3,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'flex',
    optional: true,
  },
  {
    selector: '.hero1_profile_hotel_wrap',
    lat: 40.7128,
    lng: -74.006,
    offsetY: -31,
    reparent: true,
    in: 13.35,
    out: 19.4,
    dur: 0.9,
    outDur: 0.32,
    growOut: 0.86,
    anim: 'grow',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_line',
    in: 19.8,
    stagger: 1.6,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'flex',
    optional: true,
  },
]

export const GLOBE_START = 3.0

const ATTR = {
  in: 'data-in',
  noWrap: 'data-no-wrap',
  out: 'data-out',
  dur: 'data-dur',
  outDur: 'data-out-dur',
  growFrom: 'data-grow-from',
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
  const { cloneFrom, appendTo, insertAfter, text, style, classes } = entry.create
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
  for (const cls of classes || []) el.classList.add(cls)
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
