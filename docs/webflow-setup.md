# Serko hero globe

WebGL globe for the Serko.ai hero. Renders a dot-lattice earth with a lat/lng
graticule and a drawn limb ring, sized and positioned against an element the host
page owns.

Built to drop into Webflow as a single script tag.

- `ARCHITECTURE.md` — how it works and why
- `design/hero-motion-spec.md` — measurements taken from the design SVGs

## Webflow setup

### 1. Add the mount point

Anywhere in the hero section, add an empty div with the id `globe-root`:

```html
<div id="globe-root"></div>
```

Style it: `position: absolute`, `inset: 0`, `z-index: 20`.
It must sit **above** the gradient background and **below** the hero copy.

The script sets `pointer-events: none` on it, so the globe never blocks clicks on
the hero buttons underneath. Set the property explicitly in Webflow only if you
want something different - an explicit value is left alone.

The script creates the canvas and the overlay inside it. Leave it empty in the
Designer.

### 2. Add the anchor

The globe sizes and positions itself against whichever element carries
`data-globe-anchor`. This is the block in the normal page flow that reserves
space for the globe — in the comp it is 559px tall, full width, below the buttons.

```html
<div data-globe-anchor></div>
```

It lives in the page flow, **not** inside `#globe-root`.

### 3. Add the places

Places are plain data attributes, so an editor can swap a city in the Designer
without a redeploy. Put them inside `#globe-root`:

```html
<div data-globe-place data-id="origin"
     data-lat="37.7749" data-lng="-122.4194" data-label="San Francisco"></div>
<div data-globe-place data-id="destination"
     data-lat="40.7128" data-lng="-74.0060" data-label="New York"></div>
```

If no places are found the built-in San Francisco / New York pair is used.

The first place is the route origin, the second the destination. Order in the
DOM is what decides, not the `data-id` values.

### 4. Add the script

In **Page settings → Custom code → Before `</body>`**:

```html
<script src="https://cdn.jsdelivr.net/gh/aquaNeon/serko-anim@v0.2.0/dist/serko-globe.js" defer></script>
```

Pin a tag rather than `@main` — jsDelivr caches tagged URLs permanently, and
`@main` is served with a short TTL, so an untagged URL means slower loads and
surprise updates in production.

Because the tag pins an exact file, it is worth adding Subresource Integrity so a
compromised CDN cannot swap the bundle:

```html
<script src="https://cdn.jsdelivr.net/gh/aquaNeon/serko-anim@v0.2.0/dist/serko-globe.js"
        integrity="sha384-GnBK2tRL4+omc6gjhtklN2cwGleUfr8gh2RSqmk/rOSnmGOtSe/ncOH84E6tqsJ0"
        crossorigin="anonymous" defer></script>
```

Regenerate the hash on every release, or the browser will refuse to run the file:

```bash
openssl dgst -sha384 -binary dist/serko-globe.js | openssl base64 -A
```

Webflow's embed limits (50k characters per embed, 10k for site-wide footer code)
are why this is a hosted file rather than pasted inline.

## Tuning

Layout can be overridden per-site on the root element:

| Attribute | Default | Meaning |
|---|---|---|
| `data-radius-scale` | `0.403` | sphere radius as a fraction of the anchor's width |
| `data-center-y` | `0.925` | sphere centre, in radii below the anchor's top edge |
| `data-camera-lat` | `-4` | where the camera looks |
| `data-camera-lng` | `-91` | where the camera looks |
| `data-apex-clearance` | off | px the dome's top must sit **below** the anchor's top edge |
| `data-radius-max-vh` | `0` | cap the radius at this fraction of viewport height (`0` = off) |
| `data-fit-route` | `0` | frame the globe so the route spans this fraction of the width |
| `data-route-y` | `0.34` | where the route sits, as a fraction of the anchor's height |
| `data-tilt` | `0` | degrees of tilt - positive looks from further north, showing more pole |
| `data-spin` | `0` | degrees of rotation around the axis |
| `data-globe-loop` | off | present = replay the flight on a loop |

### Keeping the route in the same place on every screen

Sizing the globe from the anchor's width means the two cities drift as the
viewport changes - fine on the design width, wrong everywhere else.

`data-fit-route` sizes the globe from the **route** instead. Give it the
fraction of the width the two cities should span and the radius is derived from
their angular separation, so they hold that span at any screen size:

```html
<div id="globe-root" data-fit-route="0.30" data-route-y="0.34">
```

`data-route-y` positions the route within the anchor, so the flight sits the
same distance below the UI above it whatever the screen size.

The camera keeps pointing wherever `data-camera-lat` / `data-camera-lng` say -
fitting the route changes the globe's **size and position only**, never its
orientation. Add `data-aim-at-route` if you do want the camera to centre on the
two places, but note that swings the globe round to the midpoint, which on a
transatlantic route means looking down from the north.

With `data-fit-route` set, `data-radius-scale` and `data-center-y` are ignored.
`data-camera-lat` and `data-camera-lng` still apply.

### Tilt and spin

`data-tilt` and `data-spin` nudge the camera off the route's midpoint - tilt
towards the pole, spin around the axis. The radius is measured from the actual
projected distance between the two places rather than a formula, so the route
holds its span and position whatever the tilt.

### Stopping the globe overlapping content above it

`data-center-y` places the sphere's **centre**, so the dome's top edge ends up
`(1 - centerY) x radius` **above** the anchor. At the default `0.925` that is
7.5% of the radius - which grows with the globe, and on a narrow layout where
the heading sits close to the anchor it is enough to overlap.

`data-apex-clearance` fixes it in pixels rather than proportionally:

```html
<div id="globe-root" data-apex-clearance="0">
```

`0` pins the dome's top edge exactly to the anchor's top edge, so it can never
reach whatever is above. A positive value leaves that many pixels of gap. It
only ever pushes the globe **down**, so `data-center-y` still controls the look
everywhere it is not needed.

`data-radius-max-vh` stops the globe getting too tall on short viewports -
`0.4` caps the radius at 40% of the window height regardless of how wide the
anchor is.

The animation runs once on load and holds its end state. Add `data-globe-loop`
to the root element to have it repeat.

Visitors with `prefers-reduced-motion: reduce` are shown the finished state
immediately, with no animation.

```html
<div id="globe-root" data-radius-scale="0.42" data-camera-lng="-85"></div>
```

Append `?debug` to the URL, or add `data-globe-debug` to the root element, to
draw test-city markers. Useful for confirming the projection lines up before
there is any art on screen.

## Local development

```bash
npm install
npm run dev      # dev harness with a live tuning panel, localhost:5173
npm test         # projection, lattice and land-mask tests
npm run build    # writes dist/serko-globe.js
npm run prebake  # regenerates src/data/landmask.js from source GeoJSON
```

`index.html` is the dev harness — it mirrors the Webflow DOM and adds sliders for
radius, camera aim, grid spacing and dot sizing, with a button to copy the tuned
values out. It is not part of the bundle.

`example/webflow.html` is the integration example: the same DOM shape as Webflow,
loading the built file from `dist/`.

## Notes on the repo

`dist/` is committed on purpose — jsDelivr serves it straight from GitHub.
Rebuild and commit it whenever `src/` changes, or the CDN will keep serving the
old bundle.

`src/data/landmask.js` is generated by `npm run prebake`. Do not edit it by hand.

## Bundle

~127 KB gzipped, three.js tree-shaken. Load it deferred; it is not needed for
first paint.


## Overlay elements

Mark any Webflow element to be driven by the animation.

| Attribute | Default | |
|---|---|---|
| `data-globe-cue` | | timeline-driven, Webflow positions it |
| `data-globe-pin` | | anchored to a lat/lng on the globe |
| `data-in` | `0` | seconds |
| `data-out` | never | seconds |
| `data-dur` | `0.6` | transition length |
| `data-anim` | `fade` | `fade` / `rise` / `pop` / `type` |
| `data-type-speed` | `26` | characters per second |
| `data-type-skip` | | selector inside the element the typewriter ignores |
| `data-display` | `block` | display value to restore if the element starts `display: none` |
| `data-lat` / `data-lng` | | required for `data-globe-pin` |
| `data-offset-x` / `data-offset-y` | `0` | px nudge from the projected point |

An element that starts `display: none` is switched on when its cue fires and
back off when it leaves. Set `data-display` if it needs something other than
`block` - `flex` for a row, for instance.
