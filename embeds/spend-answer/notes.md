# spend-answer

**What it is.** A looping chat-to-chart animation: the Ops team asks how much
free cancellations have saved, then the question gives way to the Travel spend
chart, which slides in and draws itself. Once drawn, the $18,400 answer card
pops up with its number counting up. Then it fades out and starts again.

Figma, Serko.ai - Design:
- ask - `15644:153462`
- answer - `15644:153277`

**Where it goes.** The right-hand div of its section, as two embeds side by side
in that div, so the Webflow Designer (which never runs scripts) can show it:

- `embed.html` - markup and CSS. The Designer shows the answer frame: the chart
  drawn and the $18,400 card, scaled to the div by CSS alone.
- `script.html` - the script. It finds the markup through the nearest parent
  that contains it, so both embeds must sit in the same div.

**Sizing.** The embed fills its div. If the div has no height, it takes the
Figma frame's 1024:492 ratio (never shorter than 240px). Every length in the
file is a Figma pixel off that frame, and the whole frame is scaled by `--k` to
fit the div, so a number in the CSS and a number in Figma are the same number.

If the div is taller than 1024:492, the extra height goes above the chart, not
below it. The chart card always sits on the bottom edge (it runs 4px past it, clipped, so rounding at odd scales never leaves a sliver of gradient under it), the answer card stays
in its place above the chart, and the question stays vertically centred.

## Knobs

At the top of `script.html`:

| Name | Does |
|---|---|
| `STEPS` | The loop: `ask`, `answer`, `out`, each with `hold` in ms before the next step starts. |
| `DRAW_DELAY` / `DRAW_MS` | When the graph starts drawing after the chart starts sliding in, and how long the draw takes. The answer card waits for the draw to finish. |
| `COUNT_DELAY` / `COUNT_MS` | When the $ figure starts counting after the draw finishes, and how long it takes. The delay matches the card's `.2s` pop delay in the CSS. |
| `COUNT_FROM` / `COUNT_TO` | The count-up range. `COUNT_TO` should match the figure in the markup. |
| `MIN_K` | The smallest the frame is allowed to scale. Below that it is cropped at the sides instead of shrunk further. |

Slide and fade durations are CSS transitions (`.9s` moves, `.6s` fades).

In the CSS, `--sa-chat` scales the Ops team pill and question together. It is
`.8` from 992px up (Webflow's desktop breakpoint) and `1` below, so tablet and
phone keep the question full size. Change the number or the breakpoint in the
`@media (min-width: 992px)` rule near the top of the `<style>`.

## Assets

The three avatars are 96px JPEGs inlined as data URIs, about 9KB in total. The
paste is about 24,000 characters, well under Webflow's 50,000 limit, so unlike
`hero-prompt` nothing is loaded from the network. The chart line, fill, guide,
dot and forecast are the Figma SVG paths, copied as-is.

## Gotchas

- The embed loads no fonts; all text uses the page's font. In Figma, the chat
  and chart are Inter and the answer card is Jokker. Off disk, the preview
  falls back to the browser's default font.
- The graph draws with a clip rect moved by the script. Without JS, the embed
  shows the finished answer frame.
- `prefers-reduced-motion: reduce` shows the answer frame, still, with no loop.
- Nothing runs until 25% of the embed is in view. It stops when it leaves and
  restarts from the question when it comes back.
- On a div much narrower than 2:1 (phones), the sides are cropped rather
  than shrunk past `MIN_K`. Both frames are centred, so the crop mostly eats
  gradient, but the chart's grid labels sit close to the left edge.
