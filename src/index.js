import { Stage } from "./globe/stage.js";
import { readLayout, readPlaces } from "./config.js";
import { createDebugMarkers } from "./overlay/debug.js";
const ROOT_SELECTOR = "#globe-root";
function boot() {
  const root = document.querySelector(ROOT_SELECTOR);
  if (!root) {
    console.warn(`[globe] no ${ROOT_SELECTOR} on the page`);
    return;
  }
  if (root.dataset.globeMounted) return;
  root.dataset.globeMounted = "1";
  const layout = readLayout(root);
  const places = readPlaces(root);
  const stage = new Stage(root, layout);
  stage.start();
  const debug = new URLSearchParams(location.search).has("debug") || root.hasAttribute("data-globe-debug");
  if (debug) createDebugMarkers(stage);
  window.__globe = { stage, layout, places };
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
