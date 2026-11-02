// WARN
// setup warnings only show with ?debug or in local dev, so live pages keep a clean console;
// outside a browser (the tests) they always show
const SHOW =
  typeof location === 'undefined' ||
  import.meta.env?.DEV ||
  new URLSearchParams(location.search).has('debug')

export function warn(...args) {
  if (SHOW) console.warn(...args)
}
