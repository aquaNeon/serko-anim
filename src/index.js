const BUILD = typeof __GLOBE_BUILD__ === 'string' ? __GLOBE_BUILD__ : 'dev'
import { Stage } from './globe/stage.js'
import { readLayout, readPlaces } from './config.js'
import { createDebugMarkers } from './overlay/debug.js'
import { createPinLayer, Pin } from './overlay/pill.js'
import { Overlays } from './overlay/overlays.js'
import { CardStack } from './overlay/stack.js'
import { bootFeature2 } from './feature2/index.js'
import { SEQUENCE, STACK, GLOBE_START, OUTRO_AT, applySequence } from './sequence.js'
import { Flow, prefersReducedMotion } from './flow.js'
import { warn } from './log.js'

const ROOT_SELECTOR = '#globe-root'

const FONT_WAIT_MS = 3000
const READY_ATTR = 'data-globe-ready'

const nextTask = () => new Promise((resolve) => setTimeout(resolve, 0))
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// the page's head css hides the hero cards until this is set, so the raw Webflow
// layout never flashes before the first frame places them
function markReady() {
  document.documentElement.setAttribute(READY_ATTR, '')
}

// BOOT
// the desktop hero locks card heights from the brand font, so it waits for it.
// feature 2 and the first frame follow in their own tasks
// so page load never sees one long block of our script
async function boot() {
  if (document.fonts) await Promise.race([document.fonts.ready, wait(FONT_WAIT_MS)])
  const stage = mountHero()
  if (stage) {
    const off = stage.onFrame(() => {
      off()
      markReady()
    })
  } else {
    markReady()
  }

  await nextTask()
  bootFeature2(document)
  // feature 2 changes the page height; if load has already passed,
  // the host page's ScrollTrigger missed its own refresh and needs one now
  if (document.readyState === 'complete' && window.ScrollTrigger) window.ScrollTrigger.refresh()

  if (!stage) return
  await nextTask()
  await stage.warm()
  runWhileVisible(stage)
}

function mountHero() {
  const root = document.querySelector(ROOT_SELECTOR)
  if (!root) {
    warn(`[globe] no ${ROOT_SELECTOR} on the page`)
    return null
  }
  if (root.dataset.globeMounted) return null
  root.dataset.globeMounted = '1'

  const layout = readLayout(root)
  const places = readPlaces(root)
  const debug =
    new URLSearchParams(location.search).has('debug') ||
    root.hasAttribute('data-globe-debug')
  // the local tuning page reads window.__globe, so dev exposes it without ?debug
  const expose = debug || import.meta.env?.DEV

  const stage = new Stage(root, layout)

  const origin = places[0]
  const destination = places[1]

  let flow = null
  if (origin && destination) {
    const route = stage.addRoute(origin, destination)
    const layer = createPinLayer(stage)
    const originPin = new Pin(layer, origin)
    const destPin = new Pin(layer, destination)

    flow = new Flow({
      route,
      originPin,
      destPin,
      offset: layout.globeStart || GLOBE_START,
      loop: root.getAttribute('data-globe-loop') !== 'false',
      loopDelay: 0.5,
      outroAt: OUTRO_AT,
    })

    applySequence(SEQUENCE, document)
    const stack = new CardStack({ ...STACK, mobileBelow: layout.mobileBelow }, document)
    const overlays = new Overlays(stage, document)
    const end = Math.max(overlays.maxTime, stack.maxTime)
    if (end > flow.duration) flow.duration = end

    stage.onFrame((t, s) => {
      flow.advance(s.deltaSeconds)
      originPin.update(s)
      destPin.update(s)
      overlays.update(flow.time, s)
      stack.update(flow.time)
    })

    if (expose) {
      window.__globeOverlays = overlays
      window.__globeStack = stack
    }

    if (prefersReducedMotion()) flow.complete()
    else playWhileInView(document.querySelector(STACK.wrap) || root, flow)
  }

  if (debug) createDebugMarkers(stage)
  if (!expose) return stage

  window.__globe = { stage, layout, places, flow }

  window.__globeReport = () => {
    const cam = stage.globeCam
    const rootRect = root.getBoundingClientRect()
    const boxRect = stage.box.getBoundingClientRect()
    const clipping = []
    let node = root.parentElement
    while (node && node !== document.documentElement) {
      const cs = getComputedStyle(node)
      if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') {
        clipping.push(
          (node.getAttribute('class') || node.tagName) +
          ' (' + Math.round(node.getBoundingClientRect().width) + 'px)'
        )
      }
      node = node.parentElement
    }

    const report = {
      build: BUILD,
      viewport: document.documentElement.clientWidth,
      attributesSeen: Array.from(root.attributes)
        .filter((a) => a.name.startsWith('data-'))
        .map((a) => a.name + (a.value ? '="' + a.value + '"' : '')),
      sizedBy: layout.fitRoute > 0 ? 'fit-route (fixed)'
        : layout.hasRefWidth ? 'ref-width (fixed)'
        : 'container width (SHRINKS)',
      radiusPx: Math.round(cam.radiusPx),
      globeDiameter: Math.round(cam.radiusPx * 2),
      containerWidth: Math.round(rootRect.width),
      canvasBoxWidth: Math.round(boxRect.width),
      canvasEscapedTo: stage.box.parentElement === root
        ? 'not moved'
        : (stage.box.parentElement.getAttribute('class') || stage.box.parentElement.tagName),
      clippingAncestors: clipping.length ? clipping : 'none',
      apexClearance: layout.apexClearance,
      refWidth: layout.hasRefWidth ? layout.refWidth : 'NOT SET',
      radiusScale: layout.radiusScale,
      mobileScale: layout.mobileScale,
      mobileBelow: layout.mobileBelow,
      mobileActive: document.documentElement.clientWidth < layout.mobileBelow,
      anchoredCards: (window.__globeOverlays ? window.__globeOverlays.items : [])
        .filter((i) => i.anchored)
        .map((i) => ({
          cls: (i.el.getAttribute('class') || '').split(' ')[0],
          lat: i.lat,
          lng: i.lng,
          offsetY: i.offsetY,
          inSlot: i.host !== i.el,
          slotWidth: i.host !== i.el ? i.host.style.width : 'n/a',
          slotHeight: i.host !== i.el ? i.host.style.height : 'n/a',
          cardWidth: i.el.offsetWidth,
          cardHeight: i.el.offsetHeight,
          authoredPosition: i.el.dataset.globeAuthoredPosition || 'static',
          sizeMismatch:
            i.host !== i.el &&
            (Math.abs(i.el.offsetWidth - parseFloat(i.host.style.width || 0)) > 2 ||
             Math.abs(i.el.offsetHeight - parseFloat(i.host.style.height || 0)) > 2),
        })),
    }
    console.log('%c[globe report]', 'font-weight:bold', report)
    return report
  }
  return stage
}

// starts once the element is almost fully on screen, so a short viewport that shows
// only the top of the hero waits for the scroll; pauses only once it is fully gone
function playWhileInView(el, flow) {
  if (typeof IntersectionObserver !== 'function') {
    flow.play()
    return
  }
  new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio >= 0.9) flow.play()
    else if (!entry.isIntersecting) flow.pause()
  }, { threshold: [0, 0.9] }).observe(el)
}

// the globe draws only while its box is on screen and the tab is visible,
// so an idle hero costs nothing
function runWhileVisible(stage) {
  let onScreen = true
  const sync = () => {
    if (onScreen && !document.hidden) stage.start()
    else stage.stop()
  }
  if (typeof IntersectionObserver === 'function') {
    new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      sync()
    }).observe(stage.box)
  }
  document.addEventListener('visibilitychange', sync)
  sync()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
