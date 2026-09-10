const CITIES = [
  ["San Francisco", 37.7749, -122.4194],
  ["New York", 40.7128, -74.006],
  ["London", 51.5074, -0.1278],
  ["Reykjavik", 64.1466, -21.9426],
  ["Mexico City", 19.4326, -99.1332],
  ["Bogota", 4.711, -74.0721],
  ["Anchorage", 61.2181, -149.9003],
  ["Lagos", 6.5244, 3.3792],
  ["Tokyo", 35.6762, 139.6503],
  ["Sydney", -33.8688, 151.2093],
  ["Cape Town", -33.9249, 18.4241],
  ["Honolulu", 21.3069, -157.8583],
  ["Null Island", 0, 0],
  ["North Pole", 89.9, 0]
];
function createDebugMarkers(stage) {
  const layer = document.createElement("div");
  Object.assign(layer.style, {
    position: "absolute",
    inset: "0",
    pointerEvents: "none",
    zIndex: "40",
    font: "11px ui-monospace, monospace"
  });
  stage.root.appendChild(layer);
  const markers = CITIES.map(([label, lat, lng]) => {
    const el = document.createElement("div");
    el.textContent = label;
    Object.assign(el.style, {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      padding: "2px 5px",
      borderRadius: "3px",
      background: "#ff2d55",
      color: "#fff",
      whiteSpace: "nowrap",
      willChange: "transform, opacity"
    });
    layer.appendChild(el);
    return { el, lat, lng };
  });
  stage.onFrame(() => {
    for (const m of markers) {
      const p = stage.project(m.lat, m.lng);
      m.el.style.opacity = p.visible ? String(0.35 + 0.65 * p.depth) : "0";
      m.el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
    }
  });
  return layer;
}
export {
  createDebugMarkers
};
