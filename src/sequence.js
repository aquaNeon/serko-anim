export const SEQUENCE = [
  {
    selector: '.hero1_profile_choice_wrap',
    in: 0.2,
    anim: 'rise',
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
    in: 0.2,
    out: 6.2,
    dur: 0.45,
    anim: 'fade',
  },
  {
    selector: '.hero1_profile_route_wrap',
    in: 3.2,
    anim: 'rise',
  },
  {
    selector: '.hero1_profile_choice_check',
    in: 6.7,
    anim: 'pop',
    display: 'flex',
  },
  {
    selector: '.hero1_profile_choice_check_mark',
    in: 6.85,
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
    anim: 'type',
    typeSpeed: 4.5,
    display: 'block',
    optional: true,
  },
  {
    selector: '.hero1_profile_choice_line',
    in: 7.6,
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
  lat: 'data-lat',
  lng: 'data-lng',
  offsetX: 'data-offset-x',
  offsetY: 'data-offset-y',
}

function createElement(entry, root) {
  const { cloneFrom, appendTo, insertAfter, text } = entry.create
  const parent = appendTo ? root.querySelector(appendTo) : null
  const sibling = insertAfter ? root.querySelector(insertAfter) : null
  if (!parent && !sibling) return null

  const template = cloneFrom ? root.querySelector(cloneFrom) : null
  const el = template
    ? template.cloneNode(false)
    : (root.ownerDocument || document).createElement('div')

  el.removeAttribute('data-globe-cue')
  el.removeAttribute('data-globe-pin')
  for (const cls of entry.selector.split('.').filter(Boolean)) {
    el.classList.add(cls)
  }
  if (text !== undefined) el.textContent = text
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

  for (const entry of sequence) {
    let nodes = root.querySelectorAll(entry.selector)
    if (!nodes.length && entry.create) {
      const made = createElement(entry, root)
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
      const marker = entry.lat !== undefined ? 'data-globe-pin' : 'data-globe-cue'
      if (!el.hasAttribute('data-globe-cue') && !el.hasAttribute('data-globe-pin')) {
        el.setAttribute(marker, '')
      }
      for (const [key, attr] of Object.entries(ATTR)) {
        if (entry[key] === undefined) continue
        if (el.hasAttribute(attr)) continue
        const value =
          key === 'in' || key === 'out'
            ? Math.round((entry[key] + offset) * 1000) / 1000
            : entry[key]
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
