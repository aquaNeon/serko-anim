import { test } from 'node:test'
import assert from 'node:assert/strict'
import { DEFAULT_LATTICE, forEachLatticePoint, latticeCount } from '../src/globe/lattice.js'

const collect = (cfg) => {
  const out = []
  forEachLatticePoint(cfg, (lat, lng, i) => out.push({ lat, lng, i }))
  return out
}

test('latticeCount matches what the iterator actually yields', () => {
  for (const step of [2.4, 3, 4, 5]) {
    const cfg = { latStep: step, latMin: -58, latMax: 82, lngStep: step }
    assert.equal(collect(cfg).length, latticeCount(cfg))
  }
})

test('index is dense and in order', () => {
  const pts = collect(DEFAULT_LATTICE)
  pts.forEach((p, n) => assert.equal(p.i, n))
})

test('iteration order is stable across runs', () => {
  const a = collect(DEFAULT_LATTICE)
  const b = collect(DEFAULT_LATTICE)
  assert.deepEqual(a, b)
})

test('every point lands on the graticule', () => {
  const { latStep, latMin, lngStep } = DEFAULT_LATTICE
  for (const { lat, lng } of collect(DEFAULT_LATTICE)) {
    const latSteps = (lat - latMin) / latStep
    const lngSteps = (lng + 180) / lngStep
    assert.ok(Math.abs(latSteps - Math.round(latSteps)) < 1e-9, `lat ${lat} off graticule`)
    assert.ok(Math.abs(lngSteps - Math.round(lngSteps)) < 1e-9, `lng ${lng} off graticule`)
  }
})

test('stays inside the configured latitude band', () => {
  const { latMin, latMax } = DEFAULT_LATTICE
  for (const { lat } of collect(DEFAULT_LATTICE)) {
    assert.ok(lat >= latMin - 1e-9 && lat <= latMax + 1e-9)
  }
})

test('longitude covers a full turn without duplicating the seam', () => {
  for (const { lng } of collect(DEFAULT_LATTICE)) {
    assert.ok(lng >= -180 && lng < 180, `lng ${lng} outside [-180, 180)`)
  }
})

test('no duplicate points', () => {
  const seen = new Set()
  for (const { lat, lng } of collect(DEFAULT_LATTICE)) {
    const key = `${lat.toFixed(6)}|${lng.toFixed(6)}`
    assert.ok(!seen.has(key), `duplicate at ${key}`)
    seen.add(key)
  }
})

test('density is uniform across rings, so no equatorial banding', () => {
  const perLat = new Map()
  forEachLatticePoint(DEFAULT_LATTICE, (lat) => {
    perLat.set(lat, (perLat.get(lat) ?? 0) + 1)
  })
  const counts = [...perLat.values()]
  assert.ok(counts.every((c) => c === counts[0]),
    'rings differ in meridian count; pole thinning has been reintroduced')
})
