const DEFAULT_PLACES = [
  { id: "origin", lat: 37.7749, lng: -122.4194, label: "San Francisco" },
  { id: "destination", lat: 40.7128, lng: -74.006, label: "New York" }
];
const DEFAULT_LAYOUT = {

  radiusScale: 0.403,

  centerYFactor: 0.925,

  cameraLat: -4,
  cameraLng: -91,
  globeStart: 0,
  fitRoute: 0,
  routeY: 0.34,
  radiusMaxVh: 0,
  apexClearance: null
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
    cameraLng: num(rootEl, "data-camera-lng", DEFAULT_LAYOUT.cameraLng),
    globeStart: num(rootEl, "data-globe-start", DEFAULT_LAYOUT.globeStart),
    fitRoute: num(rootEl, "data-fit-route", DEFAULT_LAYOUT.fitRoute),
    routeY: num(rootEl, "data-route-y", DEFAULT_LAYOUT.routeY),
    radiusMaxVh: num(rootEl, "data-radius-max-vh", DEFAULT_LAYOUT.radiusMaxVh),
    apexClearance: rootEl.hasAttribute("data-apex-clearance")
      ? num(rootEl, "data-apex-clearance", 0)
      : DEFAULT_LAYOUT.apexClearance
  };
}
export {
  DEFAULT_LAYOUT,
  DEFAULT_PLACES,
  readLayout,
  readPlaces
};
