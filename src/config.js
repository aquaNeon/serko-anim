const DEFAULT_PLACES = [
  { id: "origin", lat: 37.7749, lng: -122.4194, label: "San Francisco" },
  { id: "destination", lat: 40.7128, lng: -74.006, label: "New York" }
];
const DEFAULT_LAYOUT = {

  radiusScale: 0.403,

  centerYFactor: 0.925,

  cameraLat: -20,
  cameraLatMobile: -5,
  cameraLng: -91,
  globeStart: 0,
  fitRoute: 0,
  routeY: 0.34,
  tilt: 0,
  spin: 0,
  aimAtRoute: false,
  fullBleed: false,
  refWidth: 1440,
  hasRefWidth: false,
  scaleMin: 1,
  scaleMax: 1,
  mobileScale: 1,
  mobileLift: 40,
  mobileLiftTall: null,
  liftShortH: 667,
  liftTallH: 880,
  mobileBelow: 768,
  mobileTurn: 10,
  easeBelow: 430,
  easeAbove: 1024,
  radiusMaxVh: 0,
  apexClearance: null,
  drift: 4,
  driftLat: 2,
  driftEase: 3,
  driftDirection: -1,
  feather: 120,
  cutBelow: ".hero1_profile_wrap",
  cutOffset: 64,
  fadeIn: 1.2
};
function num(el, attr, fallback) {
  const raw = el.getAttribute(attr);
  if (raw === null || raw.trim() === "") return fallback;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}
function readPlaces(root = document) {
  const els = root.querySelectorAll("[data-globe-place]");
  if (!els.length) return DEFAULT_PLACES;
  const places = [];
  els.forEach((el, i) => {
    const lat = num(el, "data-lat", NaN);
    const lng = num(el, "data-lng", NaN);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      console.warn("[globe] skipping place with bad lat/lng", el);
      return;
    }
    places.push({
      id: el.getAttribute("data-id") || `place-${i}`,
      lat,
      lng,
      label: el.getAttribute("data-label") || "",
      el
    });
  });
  return places.length ? places : DEFAULT_PLACES;
}
function readLayout(rootEl) {
  if (!rootEl) return { ...DEFAULT_LAYOUT };
  return {
    radiusScale: num(rootEl, "data-radius-scale", DEFAULT_LAYOUT.radiusScale),
    centerYFactor: num(rootEl, "data-center-y", DEFAULT_LAYOUT.centerYFactor),
    cameraLat: num(rootEl, "data-camera-lat", DEFAULT_LAYOUT.cameraLat),
    cameraLatMobile: rootEl.hasAttribute("data-camera-lat-mobile")
      ? num(rootEl, "data-camera-lat-mobile", DEFAULT_LAYOUT.cameraLat)
      : DEFAULT_LAYOUT.cameraLatMobile,
    cameraLng: num(rootEl, "data-camera-lng", DEFAULT_LAYOUT.cameraLng),
    globeStart: num(rootEl, "data-globe-start", DEFAULT_LAYOUT.globeStart),
    fitRoute: num(rootEl, "data-fit-route", DEFAULT_LAYOUT.fitRoute),
    routeY: num(rootEl, "data-route-y", DEFAULT_LAYOUT.routeY),
    tilt: num(rootEl, "data-tilt", DEFAULT_LAYOUT.tilt),
    spin: num(rootEl, "data-spin", DEFAULT_LAYOUT.spin),
    aimAtRoute: rootEl.hasAttribute("data-aim-at-route"),
    fullBleed: rootEl.hasAttribute("data-full-bleed"),
    refWidth: num(rootEl, "data-ref-width", DEFAULT_LAYOUT.refWidth),
    hasRefWidth: rootEl.hasAttribute("data-ref-width"),
    scaleMin: num(rootEl, "data-scale-min", DEFAULT_LAYOUT.scaleMin),
    scaleMax: num(rootEl, "data-scale-max", DEFAULT_LAYOUT.scaleMax),
    mobileScale: num(rootEl, "data-mobile-scale", DEFAULT_LAYOUT.mobileScale),
    mobileLift: num(rootEl, "data-mobile-lift", DEFAULT_LAYOUT.mobileLift),
    mobileLiftTall: rootEl.hasAttribute("data-mobile-lift-tall")
      ? num(rootEl, "data-mobile-lift-tall", 0)
      : DEFAULT_LAYOUT.mobileLiftTall,
    liftShortH: num(rootEl, "data-lift-short-h", DEFAULT_LAYOUT.liftShortH),
    liftTallH: num(rootEl, "data-lift-tall-h", DEFAULT_LAYOUT.liftTallH),
    mobileBelow: num(rootEl, "data-mobile-below", DEFAULT_LAYOUT.mobileBelow),
    mobileTurn: num(rootEl, "data-mobile-turn", DEFAULT_LAYOUT.mobileTurn),
    easeBelow: num(rootEl, "data-ease-below", DEFAULT_LAYOUT.easeBelow),
    easeAbove: num(rootEl, "data-ease-above", DEFAULT_LAYOUT.easeAbove),
    radiusMaxVh: num(rootEl, "data-radius-max-vh", DEFAULT_LAYOUT.radiusMaxVh),
    apexClearance: rootEl.hasAttribute("data-apex-clearance")
      ? num(rootEl, "data-apex-clearance", 0)
      : DEFAULT_LAYOUT.apexClearance,
    drift: num(rootEl, "data-drift", DEFAULT_LAYOUT.drift),
    driftLat: num(rootEl, "data-drift-lat", DEFAULT_LAYOUT.driftLat),
    driftEase: num(rootEl, "data-drift-ease", DEFAULT_LAYOUT.driftEase),
    driftDirection: (rootEl.getAttribute("data-drift-direction") || "").toLowerCase() === "same"
      ? 1
      : DEFAULT_LAYOUT.driftDirection,
    feather: num(rootEl, "data-feather", DEFAULT_LAYOUT.feather),
    cutBelow: rootEl.hasAttribute("data-cut-below")
      ? rootEl.getAttribute("data-cut-below").trim()
      : DEFAULT_LAYOUT.cutBelow,
    cutOffset: num(rootEl, "data-cut-offset", DEFAULT_LAYOUT.cutOffset),
    fadeIn: num(rootEl, "data-fade-in", DEFAULT_LAYOUT.fadeIn)
  };
}
export {
  DEFAULT_LAYOUT,
  DEFAULT_PLACES,
  readLayout,
  readPlaces
};
