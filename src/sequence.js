export const SEQUENCE = [
  {
    selector: '.hero1_profile_choice_wrap',
    in: 0.2,
    anim: 'rise',
  },
  {
    selector: '.hero1_profile_choice_text_wrap',
    in: 0.6,
    anim: 'type',
    typeSpeed: 4.5,
    typeSkip: '.hero1_profile_search_wrap',
  },
  {
    selector: '.hero1_profile_item',
    in: 1.0,
    anim: 'rise',
  },
  {
    selector: '.hero1_profile_choice_second',
    in: 8.0,
    anim: 'type',
    typeSpeed: 4.5,
    display: 'flex',
  },
  {
    selector: '.hero1_profile_route_wrap',
    in: 9.4,
    anim: 'pop',
  },
]

export const GLOBE_START = 3.6

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

export function applySequence(sequence = SEQUENCE, root = document) {
  const applied = []
  const missing = []

  for (const entry of sequence) {
    const nodes = root.querySelectorAll(entry.selector)
    if (!nodes.length) {
      missing.push(entry.selector)
      continue
    }

    for (const el of nodes) {
      const marker = entry.lat !== undefined ? 'data-globe-pin' : 'data-globe-cue'
      if (!el.hasAttribute('data-globe-cue') && !el.hasAttribute('data-globe-pin')) {
        el.setAttribute(marker, '')
      }
      for (const [key, attr] of Object.entries(ATTR)) {
        if (entry[key] === undefined) continue
        if (el.hasAttribute(attr)) continue
        el.setAttribute(attr, String(entry[key]))
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
  return { applied, missing }
}
