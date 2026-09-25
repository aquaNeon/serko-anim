# hero-prompt

**What it is.** The four-stage animation that plays inside the hero's gradient
panel: the dotted globe, the globe with its pinned traveller names (held ~6s),
the traveller card stack, then the typed prompt card - and back to the globe.
It loops for as long as the panel is in view.

The prompt card is centred in the panel rather than sitting at the comp's
(80, 272) - the comp's own gutters are 80px either side, so horizontally it is
the same position, and centring it vertically is what the design calls for.

**Where it goes.** Home, hero section — the Embed element inside the gradient
panel div on the right. The panel background is drawn by the embed itself, so
the Webflow div needs no styling beyond a size. Nav, headline, body copy and
buttons stay in Webflow.

**Sizing.** The embed fills its container and falls back to `min-height: 520px`
(400px under 768px wide) if the container has no height of its own. Give the
Webflow div a height and the embed follows it.

## Knobs

At the top of the `<script>` in `script.html`:

| Name | Does |
|---|---|
| `PROMPT` | The query that types out in the last stage. |
| `TYPE_MS` | Milliseconds per character. 34 is the comp's pace. |
| `STAGES` | The sequence: which layers are visible, and `hold` in ms after the stage settles. Stage 3 keeps `globe` on while `pins` comes in. `hold: null` stays on that stage for good and stops the loop. |
| `FADE_MS` | Cross-fade length. Must match the `.62s` transition in the CSS. |
| `START_MS` | Delay after the panel scrolls into view before stage 1 starts. |

Two sizes are CSS variables in `embed.html`:

| Name | Does |
|---|---|
| `--seq-content` | On `.hero-seq`. Scales the profile stack and the prompt card inside the gradient, which stays full size - lower it for wider margins. `.8` now. |
| `--pin-s` | On `.hero-seq__pin--ella`. Ella's pin scale, `.72` to match Saur's. |

The globe's colour is the PNG's own ink; it is a single-colour alpha mask, so a
tint change means re-exporting it, not a CSS edit. Opacity and size are on
`.hero-seq__globe`.

## Assets are the ones already on the site

Webflow's Embed element caps at 50,000 characters, so nothing is inlined - the
paste is ~16,300 characters for the markup and ~5,800 for the script and the three images come from the site's own CDN,
the URLs you already have:

- globe: `..._image 786.svg`
- Ella: `..._Avatar-1.webp`
- Adam: `..._Avatar.webp`

Skyla and Saur are monograms on the Figma gradient fill, as in the comp.
This is the one place the no-network rule in `embeds/README.md` is deliberately
broken; the character limit leaves no alternative, and these are Webflow assets
either way. `globe.png` in this folder is no longer used by the embed - it is
kept only as the flattened single-colour version, should a recolour be wanted.

## How the globe keeps its colour

The comp draws the globe raster with `mix-blend-mode: multiply` over the
gradient - that is what turns its dots blue at the top and magenta at the
bottom, and what makes its white plate disappear. The embed does exactly the
same thing, which is why the raw Figma SVG can be used untouched.

The blend only works because the gradient is painted on the stage itself: the
stage is transformed, which isolates it, so anything it blends against has to be
inside it.

## Where it goes in Webflow

The Embed element inside `.feature3_img_wrap` (the div already holding the
static `Card (2)_nodrop.webp`) - i.e. `.feature3_img_html`. The embed paints the
gradient panel itself, so the placeholder `<picture>` above it should be removed
or hidden, otherwise it sits behind the animation doing nothing.

It is two embeds, so the Designer can show it:

- `embed.html` - markup and CSS. The Designer never runs scripts, so it shows
  the markup as written: the globe with the three names up, scaled to the box by
  CSS alone (container query units).
- `script.html` - the script, as a second Embed element next to the first. It
  finds the markup by walking up to the nearest parent that contains it, so both
  embeds must sit inside the same wrapper. On load it clears the Designer frame
  without a fade and starts the loop from the bare globe.

## Editing

There is no build step: `embed.html` and `script.html` are the artefact. Every length in it is a
Figma pixel off the 735x778 artboard - the stage is that artboard, scaled by
`--k` to cover whatever box Webflow gives it (set by a ResizeObserver in the
script; the CSS computes the same cover scale from container units when the
script is not running). So a number in the file and a number in Figma are the same number.

`MIN_K` in the script floors that scale at .58, so the artboard is never shrunk
past the point where its 12-17px type stops being readable; below that width the
stage is cropped rather than shrunk further.

## Why the stack fades row by row

The frosted cards use `backdrop-filter`, and a layer sitting at opacity < 1 is an
isolated group - inside one, those cards lose the panel gradient from their
backdrop and render as near-solid white, which reads as the wrong card being in
front. So the stack layer stays at opacity 1 and each row fades itself, driven
from the script: a `var()` substitution does not interpolate, so CSS alone
cannot do it, and the fade has to be raised a frame after the snap layout, which
suppresses transitions while it settles positions.

## Gotchas

- The paste is ~16,300 characters for the markup and ~5,800 for the script, inside Webflow's 50,000 limit, but only
  because the images are hosted. Re-inlining any of them breaks the paste.
- A parent with `overflow: hidden` and a fixed short height clips the pins;
  they sit near the panel's edges on purpose.
- `prefers-reduced-motion: reduce` gives the stages as hard cuts with the prompt
  fully typed, no drift and no caret.
- Nothing runs until the panel is 25% in view, and it stops when it leaves.
