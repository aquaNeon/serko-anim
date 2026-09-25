# approval-steps

**What it is.** The sticky section's own step script (`initStickyStepsBasic`),
fixed. It sets `data-sticky-steps-item-status` (`before` / `active` / `after`)
on each step as you scroll, which is what the three step visuals
(`approval-search`, `approval-flagged`, `approval-refund`) listen to.

**Where it goes.** Replaces the script in the `u-embed-js` embed at the bottom
of `sticky1_wrap`, after `sticky1_container`. Not the per-step `u-embed-js`
embeds inside the visuals. Needs GSAP and ScrollTrigger on the page, as before.

## What changed

- The original called `setStatus(0)` after creating the triggers, so on a
  reload further down the page it forced step 1 active and showed step 1's
  visual. It now sets the status from whichever trigger is active: the last
  step if you are past the section, the first otherwise.
- The browser restores the scroll position after `DOMContentLoaded`, so the
  status is synced again on every ScrollTrigger refresh, and a refresh runs on
  `load`.
- A status is only written when it changes, so the step visuals don't restart
  their animation on a refresh.

The "plays on load" part of the fix lives in each step's `script.html`: a
visual plays only when its step is `active` and it is at least 25% in view, so
step 1 no longer runs while the section is still below the fold.
