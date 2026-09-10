import { test } from 'node:test'
import assert from 'node:assert/strict'
import { GlobeCamera, latLngToVec3 } from '../src/globe/camera.js'

const D2R = Math.PI / 180
const VIEW = { w: 1512, h: 900 }
const CENTER = { x: 700, y: 820 }
const RADIUS = 496

function makeCam(lat = -4, lng = -91) {
  const c = new GlobeCamera()
  c.lookAtLatLng(lat, lng)
  c.layout(VIEW.w, VIEW.h, CENTER, RADIUS)
  return c
}

function angularDistance(aLat, aLng, bLat, bLng) {
  const d =
    Math.sin(aLat * D2R) * Math.sin(bLat * D2R) +
    Math.cos(aLat * D2R) * Math.cos(bLat * D2R) * Math.cos((aLng - bLng) * D2R)
  return Math.acos(Math.min(1, Math.max(-1, d)))
}

const CITIES = [
  ['San Francisco', 37.7749, -122.4194],
  ['New York', 40.7128, -74.006],
  ['London', 51.5074, -0.1278],
  ['Tokyo', 35.6762, 139.6503],
  ['Sydney', -33.8688, 151.2093],
  ['Cape Town', -33.9249, 18.4241],
  ['Null Island', 0, 0],
  ['North Pole', 90, 0],
  ['South Pole', -90, 0],
]

test('latLngToVec3 lands on the sphere of the requested radius', () => {
  for (const [, lat, lng] of CITIES) {
    for (const r of [1, 1.05, 2]) {
      const v = latLngToVec3(lat, lng, r)
      assert.ok(Math.abs(v.length() - r) < 1e-9)
    }
  }
})

test('the sub-camera point projects exactly to the sphere centre', () => {
  for (const [lat, lng] of [[-4, -91], [0, 0], [55, -98], [-33, 151]]) {
    const cam = makeCam(lat, lng)
    const p = cam.project(lat, lng)
    assert.ok(Math.hypot(p.x - CENTER.x, p.y - CENTER.y) < 1e-6)
    assert.ok(Math.abs(p.depth - 1) < 1e-9)
    assert.equal(p.visible, true)
  }
})

test('a point 90 degrees away lands exactly on the limb', () => {
  const cam = makeCam()
  const limb = cam.project(-4 - 90, -91)
  assert.ok(Math.abs(Math.hypot(limb.x - CENTER.x, limb.y - CENTER.y) - RADIUS) < 1e-6)
  assert.ok(Math.abs(limb.depth) < 1e-9)
})

test('screen distance from centre equals R sin(theta) for every city', () => {
  const cam = makeCam()
  for (const [name, lat, lng] of CITIES) {
    const p = cam.project(lat, lng)
    const theta = angularDistance(lat, lng, -4, -91)
    const expected = RADIUS * Math.sin(theta)
    const actual = Math.hypot(p.x - CENTER.x, p.y - CENTER.y)
    assert.ok(Math.abs(actual - expected) < 1e-6, `${name}: ${actual} vs ${expected}`)
  }
})

test('depth equals cos(theta) for every city', () => {
  const cam = makeCam()
  for (const [name, lat, lng] of CITIES) {
    const p = cam.project(lat, lng)
    const expected = Math.cos(angularDistance(lat, lng, -4, -91))
    assert.ok(Math.abs(p.depth - expected) < 1e-9, `${name}: ${p.depth} vs ${expected}`)
  }
})

test('visible is true exactly on the near hemisphere', () => {
  const cam = makeCam()
  for (const [name, lat, lng] of CITIES) {
    const p = cam.project(lat, lng)
    const near = angularDistance(lat, lng, -4, -91) < Math.PI / 2
    assert.equal(p.visible, near, `${name}`)
  }
})

test('the antipode is hidden and has depth -1', () => {
  const cam = makeCam()
  const p = cam.project(4, 89)
  assert.equal(p.visible, false)
  assert.ok(Math.abs(p.depth + 1) < 1e-9)
})

test('projection is stable under relayout at a different viewport', () => {
  const a = makeCam()
  const before = CITIES.map(([, lat, lng]) => a.project(lat, lng))

  a.layout(2400, 1400, { x: 1200, y: 1300 }, 800)
  const after = CITIES.map(([, lat, lng]) => a.project(lat, lng))

  CITIES.forEach(([name], i) => {
    assert.ok(Math.abs(before[i].depth - after[i].depth) < 1e-12,
      `${name}: depth must not depend on viewport`)
    const rBefore = Math.hypot(before[i].x - CENTER.x, before[i].y - CENTER.y) / RADIUS
    const rAfter = Math.hypot(after[i].x - 1200, after[i].y - 1300) / 800
    assert.ok(Math.abs(rBefore - rAfter) < 1e-9,
      `${name}: normalised radius must survive relayout`)
  })
})

test('surfaceOffset pushes a point off the sphere without moving its depth', () => {
  const cam = makeCam()
  const flat = cam.project(37.7749, -122.4194, 0)
  const lifted = cam.project(37.7749, -122.4194, 0.05)
  assert.ok(Math.abs(flat.depth - lifted.depth) < 1e-9)
  const dFlat = Math.hypot(flat.x - CENTER.x, flat.y - CENTER.y)
  const dLift = Math.hypot(lifted.x - CENTER.x, lifted.y - CENTER.y)
  assert.ok(Math.abs(dLift / dFlat - 1.05) < 1e-9)
})

test('camDir is a unit vector pointing at the camera', () => {
  for (const [lat, lng] of [[-4, -91], [0, 0], [80, 20]]) {
    const cam = makeCam(lat, lng)
    assert.ok(Math.abs(cam.camDir.length() - 1) < 1e-9)
    const expected = latLngToVec3(lat, lng, 1)
    assert.ok(cam.camDir.distanceTo(expected) < 1e-9)
  }
})
