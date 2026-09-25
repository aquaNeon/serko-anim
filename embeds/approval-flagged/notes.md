# approval-flagged

**What it is.** Step 2 of the travel approval sticky section. Lena Morgan's
flagged booking comes in as a compact card ("Needs review", "Out of policy").
The card then opens upward and downward into the full view: the route and badge
fade, the spend chart's bars grow in one after another, the green policy line
draws across, the blue dot and Lena's marker pop in over the flagged bar, and
the "Cancel trip" buttons come in, and the cursor moves in and clicks the
cancel options menu. It plays once per visit to
the step and holds on the open card.

Figma, Serko.ai - Design:
- compact - `15947:27979`
- open - `15947:27334`

**Where it goes.** Sticky section `sticky1_wrap`, second step, inside
`.sticky1_steps_visual.is-2`. Two embeds, like `approval-search`:

- `embed.html` - markup and CSS. Paste into the `sticky1_steps_code` embed
  (replacing the old `.serko-card` markup) and delete the old `u-embed-css`
  style embed in that visual.
- `script.html` - paste into the `u-embed-js` embed in the same visual,
  replacing the old GSAP/ScrollTrigger script.

The Designer shows the compact card, scaled by CSS. Trigger, reset and mobile
behave exactly as in `approval-search` - see its notes.

## Knobs

At the top of `script.html`:

| Name | Does |
|---|---|
| `STAGES` | `in` (compact card enters), `open` (card opens), `chart` (grid, bars, line, dot, marker), `cta` (buttons), `aim` (cursor moves in), `press` (cursor and menu button click). |
| `RESET_MS` | How long after leaving the step before it resets. |
| `MIN_K` | Smallest scale for the 745x725 frame before it crops instead. |

Inside `chart`, the order comes from CSS delays: bars from .15s, 60ms apart;
line at .55s; dot at 1.05s; marker at 1.15s.

## Editing

Every length is a Figma pixel. Nothing with text in it is scaled or resized
while it animates, so no text shifts when an animation ends:

- The pink wrap and white card are empty boxes that animate `top` and
  `height`.
- The header (photo, name, separator) is a layer that translates up with the
  card's top edge; the footer layers translate down with its bottom edge.
- Name and footer text change size between the two frames, so each exists
  twice (`--row` and `--open`) and they cross-fade.
- Only the bars, dot, marker and cursor scale, and they hold no text.

The cursor is the Figma vector at its Figma position and rotation (-37.76deg),
resting on the cancel options menu button.

Lena's photo is one inlined 120px JPEG, used twice through `--ap-flag-face`.
`embed.html` is about 21,700 characters.

## Gotchas

- One instance per page.
- Fonts are inherited from the page; Figma uses Inter here.
- `prefers-reduced-motion: reduce` shows the open card with the buttons, still.
