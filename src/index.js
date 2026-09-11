const BUILD = '2026-09-11 11:59'
import { Stage } from './globe/stage.js'
import { readLayout, readPlaces } from './config.js'
import { createDebugMarkers } from './overlay/debug.js'
import { createPinLayer, Pin } from './overlay/pill.js'
import { Overlays } from './overlay/overlays.js'
import { SEQUENCE, GLOBE_START, applySequence } from './sequence.js'
import { Flow, prefersReducedMotion } from './flow.js'

const ROOT_SELECTOR = '#globe-root'

function boot() {
  const root = document.querySelector(ROOT_SELECTOR)
  if (!root) {
    console.warn(`[globe] no ${ROOT_SELECTOR} on the page`)
    return
  }
  if (root.dataset.globeMounted) return
  root.dataset.globeMounted = '1'

  const layout = readLayout(root)
  const places = readPlaces(root)

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
      loop: root.hasAttribute('data-globe-loop'),
    })

    applySequence(SEQUENCE, document)
    const overlays = new Overlays(stage, document)
    if (overlays.maxTime > flow.duration) flow.duration = overlays.maxTime

    stage.onFrame((t, s) => {
      flow.advance(s.deltaSeconds)
      originPin.update(s)
      destPin.update(s)
      overlays.update(flow.time, s)
    })

    window.__globeOverlays = overlays

    if (prefersReducedMotion()) flow.complete()
    else flow.play()
  }

  stage.start()

  const debug =
    new URLSearchParams(location.search).has('debug') ||
    root.hasAttribute('data-globe-debug')
  if (debug) createDebugMarkers(stage)

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
          sizeMismatch:
            i.host !== i.el &&
            (Math.abs(i.el.offsetWidth - parseFloat(i.host.style.width || 0)) > 2 ||
             Math.abs(i.el.offsetHeight - parseFloat(i.host.style.height || 0)) > 2),
        })),
    }
    console.log('%c[globe report]', 'font-weight:bold', report)
    return report
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
