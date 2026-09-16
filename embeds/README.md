# Embeds

Standalone HTML animations that are **pasted into a Webflow Embed element**.
Nothing here is built, bundled, or served from the CDN - the file in this repo
is the thing that goes on the site, and the paste is the deploy.

The globe is the exception: it ships as `dist/serko-globe.js` from jsDelivr and
is documented in `docs/webflow-setup.md`. Keep the two apart.

## Layout

```
embeds/
  README.md            this file - the index below is the source of truth
  <name>/
    embed.html         paste this whole file into the Webflow Embed element
    notes.md           what it is, where it goes, what can be tuned
```

One folder per animation, named for what it is, in kebab-case
(`price-ticker`, not `anim2`).

## The index

| Embed | Where it goes | Status |
|---|---|---|
| _(none yet)_ | | |

Add a row when you add a folder - this table is how anyone finds which embed
is live on which page.

## Rules for an embed.html

**Self-contained.** One file: markup, a single `<style>`, a single `<script>`.
No imports, no build step, no local file references. A reader should be able to
open it straight off disk and see the finished animation.

**Scoped.** Webflow's own CSS is on the page with it, so every class is
prefixed with the embed's name (`.price-ticker__row`) and every selector is
under one root element. No bare element selectors (`div`, `p`, `h2`), no
`:root` variables, no styles on `body` - they leak into the whole page.

**Sized by its container.** The embed fills the Webflow div it sits in. No
fixed pixel widths on the root, no viewport units that assume a full-width
section, and it has to survive a phone at 375px.

**Quiet when it should be.** Honour `prefers-reduced-motion: reduce` - the
static end state, not the animation. If it animates on scroll, it does nothing
until it is in view.

**No network.** No fonts, images, or scripts fetched from anywhere. Webflow
already loads the brand fonts, so inherit them (`font-family: inherit`).
Artwork goes in as inline SVG or a data URI.

## Working on one

Open `embeds/<name>/embed.html` in a browser - that is the whole dev loop.
To check it against the real page, paste it into the Webflow Embed element on
a staging page rather than trying to rebuild the page here.

## notes.md

Short, and written for the person pasting it, not for the person who wrote it:

- **What it is** - one line.
- **Where it goes** - the page and the section, e.g. "Pricing, under the plan
  cards".
- **Knobs** - the handful of numbers at the top of the `<script>` worth
  changing, and what each does.
- **Gotchas** - anything that breaks it (a parent with `overflow: hidden`, a
  section shorter than the animation needs).
