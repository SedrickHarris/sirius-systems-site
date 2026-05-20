# Motion Guidelines — Sirius Systems

How the site moves. Motion is a brand asset; misuse degrades both UX and brand. The defaults below are conservative on purpose.

---

## 1. Principles

1. **Motion serves comprehension, not decoration.** If it doesn't help a user understand state, hierarchy, or flow, it doesn't ship.
2. **Subtle over showy.** Sirius Systems sells systems; flashy motion reads as "marketing site" not "systems vendor."
3. **Fast.** Most UI motion is 150–250ms. Anything > 400ms had better be justified.
4. **Respect prefers-reduced-motion.** Every animation has a reduced-motion fallback that conveys the same state without movement.
5. **One thing moves at a time** on first paint. No "everything fades in everywhere" choreography.

## 2. Duration & easing tokens

Use these named tokens in code (Tailwind config or CSS vars). Don't hand-type durations.

| Token | Duration | Use |
|-------|----------|-----|
| `motion-instant` | 80ms | Toggle, checkbox |
| `motion-fast` | 150ms | Hover, focus, press |
| `motion-base` | 200ms | Default UI transitions |
| `motion-slow` | 300ms | Entering content, dropdowns |
| `motion-hero` | 500ms | First-paint hero reveal (use sparingly) |
| `motion-page` | 0ms | Page transitions (DEFAULT: NONE — see §6) |

| Easing | Curve | Use |
|--------|-------|-----|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering elements |
| `ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exiting elements |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Bidirectional (rare) |
| `ease-linear` | `linear` | Loading indicators only |

## 3. Allowed motion patterns

### Hover
- Buttons: background color + subtle elevation (shadow), 150ms ease-out.
- Links in body copy: underline appears (or color shifts), 100ms.
- Cards: 1–2px lift + faint shadow, 200ms.

### Focus
- Visible focus ring on every interactive element (don't replace with hover-style states).
- Ring uses the accent color at appropriate contrast.

### Press / active
- Slight scale-down (≤ 0.98) OR brightness shift, 80ms.

### Reveal on scroll
- Use sparingly — only for the hero section and the first section beneath.
- Translate-y of 8–16px + opacity 0 → 1, 300ms ease-out, staggered max 100ms between siblings.
- Do NOT animate every section on the page. After the second section, content is static on scroll.

### Loading
- Skeleton placeholders for content that takes > 300ms.
- Spinner only for button-level submits, never for page-level loads (use skeletons there).

### Form interactions
- Field focus: border color shifts to accent, 150ms.
- Validation error: shake is disallowed; instead, border becomes destructive color and helper text fades in over 200ms.

### Disclosure (accordion, dropdown)
- Height animation 200ms ease-out, opacity 100ms ease-out (slightly later than height).

## 4. Disallowed motion patterns (default-off)

- **Parallax scrolling** — feels gimmicky against the systems positioning.
- **Auto-playing background video** — kills LCP, drains battery.
- **Looping hero animations** that draw attention indefinitely.
- **Cursor-following effects** (custom cursors, magnetic buttons) — high effort, low signal.
- **Animated counters** that "count up" from 0 — unless the count is a real, sourced number AND animation aids comprehension.
- **Marquee scrollers** of logos, especially if logos are fake (see do-not-invent).
- **Confetti / celebratory bursts** for form submits — too playful for the brand register.

Exceptions to the above require explicit approval and a brief written justification in the relevant PR.

## 5. prefers-reduced-motion

All motion above must have a reduced-motion variant:

- Use `@media (prefers-reduced-motion: reduce)` in CSS.
- Default reduced-motion behavior: opacity transitions only, ≤ 100ms, no translate / scale / rotate.
- Disclosure animations: instant.
- Reveal-on-scroll: disabled — content visible immediately.
- Spinners: continue to spin (essential for indicating progress) but at reduced spin rate if possible.

## 6. Page transitions

**Default: none.** Next.js App Router serves pages instantly; transitions add latency and risk a "spa-feel" tax. Leave them off in Phase 1.

If a future phase introduces them, keep them under 200ms with a fast crossfade only.

## 7. Loading states

- **First paint:** server-render the layout shell + visible-above-the-fold content. Skeletons only for below-the-fold async content.
- **Form submit:** disable the button, swap label to "Sending..." or similar, optional inline spinner. No full-screen blocker.
- **Blog index pagination (post-launch):** spinner inline next to "Load more" — no page jump.

## 8. Iconography motion

- Static by default.
- Allowed: subtle directional shift on hover (e.g., arrow icon nudges 2–4px in its direction) — 150ms.
- Disallowed: looping icon animations, "Lottie everywhere" patterns.

## 9. Implementation notes

- Use CSS transitions + Tailwind utilities where possible (`transition-colors duration-200 ease-out`).
- For multi-step or scroll-coupled motion, use Framer Motion sparingly. Don't import it for things CSS can do.
- Animate `transform` and `opacity` — never `width`, `height`, `top`, `left` (jank).
- No JS-driven scroll hijacking. Native scroll only.

## 10. QA gate

Motion is checked in `docs/site-os/qa/prelaunch-checklist.md`:

- [ ] All motion respects `prefers-reduced-motion`.
- [ ] No auto-playing media on first paint.
- [ ] LCP not delayed by entrance animations.
- [ ] No banned patterns from §4 ship in Phase 1.

## 11. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial guidelines — tokens, allowed/disallowed patterns, reduced-motion rules. |
