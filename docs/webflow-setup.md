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
| `data-full-bleed` | off | present = canvas spans the window, ignoring the container |
| `data-ref-width` | unset | the width the globe's size is designed against - **set this or the globe shrinks** |
| `data-mobile-scale` | `1` | scale the globe by this below the mobile breakpoint |
| `data-mobile-below` | `768` | the width that counts as mobile |
| `data-scale-min` | `1` | never shrink below this fraction - crop instead |
| `data-scale-max` | `1` | never grow above this fraction |
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
| `data-anim` | `fade` | `fade` / `rise` / `pop` / `type` / `draw` / `grow` |
| `data-type-speed` | `26` | characters per second |
| `data-type-skip` | | selector inside the element the typewriter ignores |
| `data-display` | `block` | display value to restore if the element starts `display: none` |
| `data-lat` / `data-lng` | | required for `data-globe-pin` |
| `data-offset-x` / `data-offset-y` | `0` | px nudge from the projected point |

An element that starts `display: none` is switched on when its cue fires and
back off when it leaves. Set `data-display` if it needs something other than
`block` - `flex` for a row, for instance.


## Globe in a container, without clipping it

Putting `#globe-root` inside a max-width container is usually what you want -
it crops the bottom where the layout says, and keeps the anchor aligned to the
grid. But it also clips the globe's left and right edges, because the canvas can
only paint inside its own box.

`data-full-bleed` separates the two. The canvas and the overlay layers are
widened to the window and shifted to sit behind the container, while the anchor
keeps positioning the globe against the container as before:

```html
<div id="globe-root" data-full-bleed data-fit-route="0.30"
     data-apex-clearance="40">
```

So the bottom crops where you put it, and the sides never do.

## Fixed space below the heading

`data-apex-clearance` is the number of pixels between the top of the globe and
whatever sits above it - so the globe behaves like an image you placed with a
set margin, rather than something that drifts as the screen changes.

It works alongside `data-fit-route`: the route still sets the globe's size,
while the clearance sets its vertical position. When both are set, clearance
wins over `data-route-y`.


## Holding the globe's size

Deriving the size from the current viewport makes the globe shrink on every
narrow screen, which reads as the whole scene zooming out. Usually you want the
opposite: the globe stays the size it was designed at and the viewport simply
shows less of it.

`data-ref-width` is the width the size is designed against; `data-scale-min`
and `data-scale-max` bound how far it may deviate:

```html
<div id="globe-root" data-full-bleed data-fit-route="0.30"
     data-ref-width="1440" data-scale-min="0.9">
```

By default the globe never shrinks: it holds the size it has at
`data-ref-width` and the viewport simply crops it. Set `data-scale-min="0.9"`
to allow up to 10% of shrink on small screens before cropping takes over.

## Escaping a clipping container

`data-full-bleed` widens the canvas, but a parent with `overflow: hidden` still
clips it - which is easy to miss, because the canvas really is the right size.

The canvas is therefore also **moved** above any clipping ancestor narrower than
the window. Everything positional still comes from `#globe-root` where you put
it, so the bottom crops where your layout says and the sides do not.


## Holding the size without route fitting

`data-ref-width` alone is enough. With it set, the radius is
`ref-width x data-radius-scale`, held constant, and the viewport crops the globe
rather than shrinking it:

```html
<div id="globe-root" data-full-bleed
     data-ref-width="1440" data-radius-scale="0.472"
     data-apex-clearance="40">
```

Without `data-ref-width` the radius comes from the container's width, so it
shrinks with the screen. That is the old behaviour and it now warns in the
console.

`data-fit-route` is a different way of choosing the size - by how much of the
screen the two places should span - and is not needed just to hold the size.


## Scaling on mobile only

`data-mobile-scale` is a single multiplier applied below `data-mobile-below`,
independent of everything else - so it can be dialled in without touching the
desktop size:

```html
<div id="globe-root" data-ref-width="1440" data-radius-scale="0.472"
     data-mobile-scale="0.9" data-mobile-below="768">
```

The globe is full size at and above the breakpoint, and exactly
`data-mobile-scale` below it. The top edge stays where `data-apex-clearance`
puts it, so shrinking pulls the globe up from the bottom rather than moving it
away from the heading.

`__globeReport()` shows `mobileScale`, `mobileBelow` and `mobileActive` so you
can confirm which side of the breakpoint you are on.


## The grow animation

`data-anim="grow"` scales an element up on Y from its bottom edge, then brings
its children in one after another:

```html
<div class="hero1_profile_route_wrap" data-anim="grow" data-stagger="0.12">
```

The element scales up uniformly from `data-grow-from` (60% by default) with
opacity, and is at full size by halfway through the duration - so it settles
before the contents arrive.

An earlier version scaled on Y only, which squashed the card's contents on the
way in and read as a masking artefact rather than an entrance.

`data-stagger` is the gap between children as a fraction of the duration.
`data-stagger-target` takes a selector if only some descendants should stagger
rather than the direct children.


## Anchored cards must not be positioned in the Designer

An element with `data-globe-pin` is positioned by the globe. If it also carries
`position: absolute` with top/left offsets from Webflow, those offsets resolve
against the wrapper the globe puts it in and it lands somewhere arbitrary -
usually far from its city.

The positioning is now reset when the card is adopted, and a warning names the
element, but it is cleaner to remove it in the Designer. Style the card however
you like - size, padding, colours, the layout of its contents - just leave its
position alone.


| Attribute | Default | |
|---|---|---|
| `data-grow-from` | `0.6` | scale the `grow` animation starts from |
| `data-stagger` | `0.12` | gap between children, as a fraction of the duration |
| `data-stagger-target` | direct children | selector for which descendants stagger |


## Typing reveals, it does not retype

Each word is wrapped in a span and faded in. The text is never removed from the
DOM, so the line keeps its final wrapping from the first frame and cannot
reflow part-way through - which is what made a long line visibly jump from one
row to two as it filled in.

It also means the element must be allowed to occupy its space before its cue.
Set it to `opacity: 0` rather than `display: none` if it needs to be invisible
at load: the words carry their own opacity, so the element itself can stay
laid out.

`grow` now reverses on the way out - the element scales back down to
`data-grow-from` and fades, mirroring its entrance. The width collapse used for
other animations is skipped for it, since collapsing on X while scaling reads
as a mask rather than an exit.


## Text that must not wrap

A typed line inside a flex row is a flex item, and flex items shrink to fit. If
the row is narrower than the text the text wraps, and because the width is
locked at the fully laid-out state it stays wrapped.

`data-no-wrap="true"` on the line stops it compressing - it sets `nowrap` and
`flex-shrink: 0` on the element and its children, so the line keeps its natural
width and the bar is measured wide enough to hold it:

```html
<div class="hero1_profile_choice_text_wrap" data-no-wrap="true">
```

It is set on both prompt lines in the shipped sequence. Leave it off for
anything that is meant to wrap.

Exiting no longer animates width at all - an element fades and is removed from
the layout once it has gone. Animating width on the way out made long lines
re-wrap as they shrank.


## Leaving faster than arriving

An exit usually wants to be quicker than an entrance - the element has already
been read, so lingering feels slow.

| Attribute | Default | |
|---|---|---|
| `data-out-dur` | same as `data-dur` | how long the exit takes |
| `data-grow-out` | same as `data-grow-from` | scale the `grow` animation leaves at |

The cards arrive over 0.9s and leave in 0.32s, shrinking only slightly on the
way out - a small scale reads as a dismissal, a large one reads as the element
being sucked away.


## Two ways text can arrive

`type` reveals word by word, like speech being transcribed. Use it for anything
the user is saying.

`wipe` reveals with a clip-path sweep plus opacity, in about a third of a
second. Use it for values that were already known - a saved preference is
recalled, not spoken, and the difference in movement says so without a label.

`data-wipe-from="right"` sweeps the other way.

## Stopping the flash before the script runs

The script is deferred, so the browser paints once before anything is hidden.
Give anything that should not be visible at load `opacity: 0` in Webflow.

That is all that is needed. The animation sets opacity itself from the cue
onward, and an adopted card has its authored opacity cleared when it is moved
into the globe, so a class that hides it at load cannot also hide it when it
should appear.

Use `opacity`, not `display: none`, for anything that is typed or wiped - the
element has to be laid out for its words to be measured.

## Lines that share one slot

The search bar shows one line at a time, but every line exists in the DOM from
the start. Left in normal flow they sit side by side and the bar grows wide
enough to hold all of them at once.

Take them out of flow so they stack:

```css
.hero1_profile_choice_wrap { position: relative; width: 357px; }

.hero1_profile_choice_text_wrap,
.hero1_profile_choice_hotel {
  position: absolute; top: 0; bottom: 0; left: 16px;
  display: flex; align-items: center;
}
```

Give the bar its width directly. It used to be measured from its content, back
when typing emptied the element and the bar would otherwise collapse - now that
the words reveal by opacity the text never leaves, so there is nothing to
measure around and a plain width is both simpler and stable.
