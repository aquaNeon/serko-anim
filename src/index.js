import { Stage } from './globe/stage.js'
import { readLayout, readPlaces } from './config.js'
import { createDebugMarkers } from './overlay/debug.js'
import { createPinLayer, Pin } from './overlay/pill.js'
import { Overlays } from './overlay/overlays.js'
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
      offset: layout.globeStart,
      loop: root.hasAttribute('data-globe-loop'),
    })

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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
