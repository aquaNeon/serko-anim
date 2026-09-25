# approval-search

**What it is.** Step 1 of the travel approval sticky section. The search result
comes in: the summary line, the three flight cards (staggered) and the composer.
Delta gets a hover (the card lifts, the neighbours step aside, the Select
button lightens), then its Select button is clicked (a quick press). American Airlines and United drop away, and
Delta grows into the centre. It plays once per visit to the step and holds on
the selected card.

Figma, Serko.ai - Design:
- cards - `15983:92937`
- selected - `15983:92419`

**Where it goes.** Sticky section `sticky1_wrap`, first step, inside
`.sticky1_steps_visual.is-1`. It is two embeds, the same split the old code
used, so the Webflow Designer can show it:

- `embed.html` - markup and CSS. Paste into the `sticky1_steps_code` embed
  (replacing the old `.fsa` markup) and delete the old `u-embed-css` style
  embed in that visual.
- `script.html` - the script. Paste into the `u-embed-js` embed in the same
  visual, replacing the old GSAP script. It finds the markup by walking up to
  the nearest parent that contains it, so both embeds must sit inside the same
  `.sticky1_steps_visual`.

The Designer does not run scripts, so it shows the markup as written: the
first frame, with all three cards in the row, scaled to the square by CSS
alone (container query units). On the live page the script takes over, hides
everything until the step is active, and plays. The embed paints its own
gradient panel, so the old `.sticky1_steps_visual.is-1` background rule is not
needed. It needs no GSAP.

## Trigger

The embed finds the `[data-sticky-steps-item]` it sits in and watches its
`data-sticky-steps-item-status`, which the section's sticky script already sets.

- `active` and at least 25% of the embed in view - plays from the start. The
  view check matters because the section script marks step 1 `active` on load,
  before the section has been scrolled to.
- anything else (another step, or scrolled out of view) - waits `RESET_MS` (600ms, longer than the visual's .5s fade)
  and resets, so the next visit plays again.

This works on mobile too, where the steps stack, because the sticky script still
switches the status there. Outside a sticky item (opened off disk, Webflow
Designer) it falls back to playing when 40% of it is in view.

## Knobs

At the top of `script.html`:

| Name | Does |
|---|---|
| `STAGES` | The sequence, as `[stage, ms after the step goes active]`: `in` (cards and chrome enter), `hover`, `press` (button click), `pick` (others leave, Delta grows). |
| `RESET_MS` | How long after leaving the step before it resets. |
| `MIN_K` | Smallest scale for the 745x725 frame before it crops instead. |

Durations and the stagger delays are CSS transitions in the `data-stage` rules.
The easing matches `src/feature2`: `--ap-out` is ease-out cubic for entrances,
`--ap-move` is ease-in-out cubic for moves.

## Editing

Every length is a Figma pixel. No text is ever scaled by a transform, because
a scaled layer is re-drawn when its animation ends and the text visibly shifts.
Card lengths are written as the selected card's size times `--u`: `.62695px`
for the cards in the row, `1px` for the selected card, so both are laid out at
their real size. The grow is done by `.ap-search__shell`, an empty white card
that animates its box from Delta's row position to the centre, while the row
Delta fades out and `.ap-search__big` (Delta at full size) fades in on top.
Everything that moves only translates or fades, and keeps `will-change` so it
stays on its own layer for the whole sequence.

The SVGs are the Figma exports with ids prefixed `ap-search-` and numbers
rounded to two decimals (United's logo to one) to fit the paste in Webflow's
50,000-character limit. The takeoff, landing and clock icons are defined once
as `<symbol>`s and reused. `embed.html` is about 47,800 characters, so there is
little room left for more inline artwork.

## Gotchas

- Use one instance per page: the SVG ids are not unique per instance.
- Fonts are inherited from the page. In Figma the summary and "Recommended" are
  Jokker and the cards are Inter.
- `prefers-reduced-motion: reduce` shows the selected Delta card, still.
