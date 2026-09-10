const DEFAULT_LATTICE = {
  latStep: 2.4,
  latMin: -58,
  latMax: 82,

  lngStep: 2.4
};
function latticeCount(cfg = DEFAULT_LATTICE) {
  const nLat = Math.round((cfg.latMax - cfg.latMin) / cfg.latStep) + 1;
  return nLat * Math.max(1, Math.round(360 / cfg.lngStep));
}
function forEachLatticePoint(cfg, cb) {
  const { latStep, latMin, latMax, lngStep } = cfg;
  const nLat = Math.round((latMax - latMin) / latStep) + 1;
  const nLng = Math.max(1, Math.round(360 / lngStep));
  let index = 0;
  for (let i = 0; i < nLat; i++) {
    const lat = latMin + i * latStep;
    for (let j = 0; j < nLng; j++) {
      cb(lat, -180 + j * lngStep, index++);
    }
  }
}
export {
  DEFAULT_LATTICE,
  forEachLatticePoint,
  latticeCount
};
