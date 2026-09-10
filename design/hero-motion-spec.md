# Serko hero globe — motion spec

Measurements taken from the SVGs supplied by design, cross-checked against the
Figma frame `14691:18859`.

## 1. Place pop-up (pill + stem + surface dot)

Source viewBox `123 x 79`. The **surface point is `(61.5, 64)`** — that is the
coordinate `project(lat, lng)` returns. Everything else is an offset from it.

| Part | Geometry | Paint |
|---|---|---|
| Pill | `x 15.5..107.5` (w 92), `y 0..33` (h 33), `r 16.5` (fully rounded) | fill `#000` |
| Label | inset `14px` horizontal, `6px` top, line box `21px` | fill `#fff` |
| Stem | `x 61.5`, `y 41..65`, width `2` | `#000` at `opacity 0.7` |
| Dot | `cx 61.5 cy 64 r 5` | fill `#000` |
| Dot ring | `r 6`, stroke width `2` | `#fff` |
| Dot shadow | `dy 4`, `stdDeviation 2` | `#000` at `25%` |

Offsets from the surface point:
- pill bottom edge `-31`, pill top edge `-64`
- stem runs `-23` to `+1` (note the **8px gap** between pill bottom and stem top)

Pill width hugs its label. Confirmed against Figma: "San Francisco" = 123 wide
(text 95 + 14 padding each side), "New York" = 92 wide (text 64 + 14 + 14). So
the pill is padding-driven, not fixed width — which means it must be **DOM, not
canvas**: real text, real font metrics, editable in Webflow.

## 2. Route arc

Two strokes stacked on the same path, both width `2`:

1. **Base** — solid `#98CCFA`
2. **Overlay** — linear gradient, `#000` fully opaque at the **destination** end,
   `#666` at `opacity 0` at the **origin** end

Net read: near-black at the destination, fading to light blue at the origin.
Design intent stated as "the saturated side is the destination".

## 3. Travel drop

Source viewBox `20 x 7`. A comet/teardrop: rounded head on the **leading** edge
(direction of travel), tapering to a point at the tail.

- Base fill `#A3D2FA`
- Overlay gradient `#000` at the head → `#000 @ 0.6` at the tail
- Head radius ≈ `3.4`, total length `20`

## 4. Drop masking

A few pixels of arc immediately **ahead** of the drop head are painted back to
the base blue, so the drop reads as leading the saturated trail rather than
sitting on top of a finished line.

In the supplied SVG this is the short stroke
`M403.152 5.45657C404.179 5.89581 406.358 8.76929 404.013 11.4155`
in `#A4D2FA` — a cap drawn across the arc at the drop head.

### Implementation note

Points 2–4 are one mechanism, not three. The ribbon shader carries a per-vertex
`t` along the path; then

- `uDrawProgress` — how much of the arc exists at all (the draw-on)
- `uDropT` — where the drop currently sits
- saturation ramps from the origin up to `uDropT`, base blue ahead of it
- the mask is just a short `t` window in front of `uDropT`

so the whole behaviour falls out of two uniforms rather than any per-frame
geometry rebuild.

## Open question

Whether the arc's saturation is **static** (dark at destination from the moment
it draws) or **follows the drop** (dark behind, blue ahead, resolving to the
static state once the drop lands). The mask-ahead-of-head detail implies the
second. Assuming *follows the drop* until told otherwise — it is a one-line
change either way.
