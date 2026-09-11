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
    in: 0.6,
    out: 6.2,
    dur: 0.45,
    anim: 'type',
    typeSpeed: 4.5,
  },
  {
    selector: '.hero1_profile_search_wrap',
    in: [0.2, 11.5],
    out: [6.2],
    dur: 0.45,
    anim: 'fade',
  },
  {
    selector: '.hero1_profile_route_wrap',
    lat: 37.7749,
    lng: -122.4194,
    offsetY: 6,
    reparent: true,
    in: 4.6,
    out: 8.4,
    dur: 0.5,
    anim: 'pop',
  },
  {
    selector: '.hero1_profile_choice_check',
    in: 6.7,
    out: 11.0,
    dur: 0.4,
    anim: 'pop',
    display: 'flex',
  },
  {
    selector: '.hero1_profile_choice_check_mark',
    in: [6.85, 8.9],
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
    },
    in: 7.0,
    out: 8.6,
    dur: 0.4,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_confirm_two',
    create: {
      cloneFrom: '.hero1_profile_choice_text',
      insertAfter: '.hero1_profile_choice_check',
      text: 'Premium economy',
    },
    in: 9.1,
    out: 11.0,
    dur: 0.4,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_hotel',
    in: 11.7,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'flex',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_line',
    in: 14.0,
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
  out: 'data-out',
  dur: 'data-dur',
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
