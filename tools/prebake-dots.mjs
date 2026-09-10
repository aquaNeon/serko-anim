import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const GEOJSON_URL = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
const GEOJSON_CACHE = resolve(ROOT, "tools/.cache/countries.geo.json");
const OUT = resolve(ROOT, "src/data/landmask.js");
const COLS = 720;
const ROWS = 360;
async function loadGeoJSON() {
  if (existsSync(GEOJSON_CACHE)) {
    console.log("using cached geojson");
    return JSON.parse(readFileSync(GEOJSON_CACHE, "utf8"));
  }
  console.log("fetching", GEOJSON_URL);
  const res = await fetch(GEOJSON_URL);
  if (!res.ok) throw new Error(`geojson fetch failed: ${res.status}`);
  const text = await res.text();
  mkdirSync(dirname(GEOJSON_CACHE), { recursive: true });
  writeFileSync(GEOJSON_CACHE, text);
  return JSON.parse(text);
}
function buildRings(features) {
  const rings2 = [];
  for (const f of features) {
    const g = f.geometry;
    if (!g) continue;
    const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    for (const poly of polys) {
      const outer = poly[0];
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const [x, y] of outer) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      rings2.push({ outer, minX, minY, maxX, maxY });
    }
  }
  return rings2;
}
function pointInRing(lng, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if (yi > lat !== yj > lat && lng < (xj - xi) * (lat - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}
function isOnLand(lng, lat, rings2) {
  for (const r of rings2) {
    if (lng < r.minX || lng > r.maxX || lat < r.minY || lat > r.maxY) continue;
    if (pointInRing(lng, lat, r.outer)) return true;
  }
  return false;
}
const geo = await loadGeoJSON();
const rings = buildRings(geo.features);
console.log(`${geo.features.length} features -> ${rings.length} rings`);
const bytes = new Uint8Array(COLS * ROWS / 8);
let landCells = 0;
for (let row = 0; row < ROWS; row++) {
  const lat = 90 - (row + 0.5) * (180 / ROWS);
  for (let col = 0; col < COLS; col++) {
    const lng = -180 + (col + 0.5) * (360 / COLS);
    if (isOnLand(lng, lat, rings)) {
      const i = row * COLS + col;
      bytes[i >> 3] |= 1 << (i & 7);
      landCells++;
    }
  }
  if (row % 60 === 0) process.stdout.write(`  row ${row}/${ROWS}\r`);
}
console.log(`
${landCells} land cells of ${COLS * ROWS} (${(landCells / (COLS * ROWS) * 100).toFixed(1)}%)`);
const b64 = Buffer.from(bytes).toString("base64");
console.log(
  `raw ${(bytes.length / 1024).toFixed(1)} KB, base64 ${(b64.length / 1024).toFixed(1)} KB, base64+gzip ${(gzipSync(Buffer.from(b64)).length / 1024).toFixed(1)} KB`
);
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `export const MASK_COLS = ${COLS}
export const MASK_ROWS = ${ROWS}

const PACKED = '${b64}'

let bits = null
function ensure() {
  if (bits) return bits
  const bin = atob(PACKED)
  bits = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bits[i] = bin.charCodeAt(i)
  return bits
}

export function isLand(lat, lng) {
  const b = ensure()
  let col = Math.floor(((lng + 180) / 360) * MASK_COLS)
  let row = Math.floor(((90 - lat) / 180) * MASK_ROWS)
  if (col < 0) col = 0; else if (col >= MASK_COLS) col = MASK_COLS - 1
  if (row < 0) row = 0; else if (row >= MASK_ROWS) row = MASK_ROWS - 1
  const i = row * MASK_COLS + col
  return (b[i >> 3] & (1 << (i & 7))) !== 0
}
`);
console.log(`wrote ${OUT}`);
