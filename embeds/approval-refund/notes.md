# approval-refund

**What it is.** Step 3 of the travel approval sticky section. Lena Morgan's
canceled trip card comes in ("Canceled", "Trip canceled ⋅ $1300 refunded in
full"), then the "Refunded by Stress-free Cancellation™" footer pops down from
under the card, with a little overshoot, while the orange glow behind it follows
the card's bottom edge down. It plays once per visit to the step and holds.

Figma, Serko.ai - Design:
- card - `15947:27394`
- with refund footer - `15947:27411`

**One deliberate difference from Figma.** The Figma end frame shrinks the whole
card to 90% so the footer fits the same space. Resizing the text would make it
visibly shift, so here the card keeps its first-frame size and the green wrap
grows downward instead. The footer is drawn at the same scale as the card
(Figma's footer values divided by .9). The finished card is about 18px taller
than in Figma.

**Where it goes.** Sticky section `sticky1_wrap`, third step, inside
`.sticky1_steps_visual.is-3`. Two embeds, like `approval-search`:

- `embed.html` - markup and CSS. Paste into the `sticky1_steps_code` embed
  (replacing the old `.ccr-card` markup) and delete the old `u-embed-css`
  style embed in that visual.
- `script.html` - paste into the `u-embed-js` embed in the same visual,
  replacing the old reveal script.

The Designer shows the card without the footer, scaled by CSS. Trigger, reset
and mobile behave exactly as in `approval-search` - see its notes.

## Knobs

At the top of `script.html`:

| Name | Does |
|---|---|
| `STAGES` | `in` (card enters), `drop` (footer pops down). |
| `RESET_MS` | How long after leaving the step before it resets. |
| `MIN_K` | Smallest scale for the 745x725 frame before it crops instead. |

The pop is `--ap-pop` in the CSS, an ease with a small overshoot; the wrap's
height, the footer's slide and the glow all use it.

## Editing

Every length is a Figma pixel. The card never moves after it enters; the green
wrap animates its height, and the footer (which sits under the card) only
translates and fades, so nothing with text in it is scaled.

`⋅` and `™` are written as `&sdot;` and `&trade;` so they survive any encoding.
`embed.html` is about 11,800 characters.

## Gotchas

- One instance per page.
- Fonts are inherited from the page; Figma uses Inter here.
- `prefers-reduced-motion: reduce` shows the card with the footer, still.
