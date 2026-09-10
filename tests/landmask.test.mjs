import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isLand, MASK_COLS, MASK_ROWS } from '../src/data/landmask.js'

test('raster has the expected shape', () => {
  assert.equal(MASK_COLS, 720)
  assert.equal(MASK_ROWS, 360)
})

test('known land', () => {
  const land = [
    ['Kansas', 38.5, -98.0],
    ['Sahara', 23.0, 13.0],
    ['Siberia', 62.0, 95.0],
    ['Amazon', -4.0, -62.0],
    ['Australia outback', -25.0, 133.0],
    ['Central India', 22.0, 78.0],
  ]
  for (const [name, lat, lng] of land) {
    assert.equal(isLand(lat, lng), true, `${name} should be land`)
  }
})

test('known ocean', () => {
  const sea = [
    ['Mid Pacific', 0.0, -140.0],
    ['Mid Atlantic', 30.0, -40.0],
    ['Indian Ocean', -20.0, 80.0],
    ['Southern Ocean', -55.0, 0.0],
    ['North Pacific', 40.0, -170.0],
  ]
  for (const [name, lat, lng] of sea) {
    assert.equal(isLand(lat, lng), false, `${name} should be ocean`)
  }
})

test('land coverage is close to the real figure', () => {
  let land = 0
  let total = 0
  for (let row = 0; row < MASK_ROWS; row++) {
    const lat = 90 - (row + 0.5) * (180 / MASK_ROWS)
    for (let col = 0; col < MASK_COLS; col++) {
      const lng = -180 + (col + 0.5) * (360 / MASK_COLS)
      total++
      if (isLand(lat, lng)) land++
    }
  }
  const pct = (land / total) * 100
  assert.ok(pct > 25 && pct < 35, `land coverage ${pct.toFixed(1)}% outside expected band`)
})

test('out of range coordinates clamp instead of throwing', () => {
  for (const [lat, lng] of [[95, 0], [-95, 0], [0, 200], [0, -200]]) {
    assert.equal(typeof isLand(lat, lng), 'boolean')
  }
})
