# Brand Guide — Sirius Systems

The full brand reference. The root `brand.md` is a one-pager; this is the working document for design, copy, and engineering.

> Items marked **TBD** are waiting on the client (tracked in `docs/site-os/inputs/content-needed-from-client.md`). Do not fill them in with invented values. Use the documented placeholder until the real value lands.

---

## 1. Brand identity

### Name
**Sirius Systems**

- Always spelled `Sirius Systems` — capital S, capital S, single space.
- Never `SiriusSystems`, `Sirius System`, `siriussys`, or all-caps.
- The handle / short form `SiriusSys.io` (as used on Facebook) is acceptable in URL contexts only.

### Tagline
**TBD** — pending client decision. Until then, no tagline is shipped anywhere a tagline would appear (header lockup, OG cards, footer).

### Positioning (confirmed)

The official positioning from `docs/brand/brand-skill.md`:

> Sirius Systems helps local businesses capture more leads, respond faster, automate follow-up, book more appointments, improve reviews, and connect their website, CRM, messaging, and growth systems into one streamlined platform.

This is the canonical long-form positioning. Three places it shows up:

- **Long-form** (about-page intro, capability decks, sales copy): use the full sentence verbatim.
- **Meta description** (`SITE.description` in `lib/site.ts`): a trimmed version that fits ≤160 chars — drops "and connect their website, CRM, messaging, and growth systems into one streamlined platform" because the meta slot can't carry it.
- **Hero headline**: the positioning sentence is a description, NOT a headline. The hero uses a punchier framing ("Stop losing leads, reviews, and revenue to manual work.") with the positioning as the supporting paragraph.

Brand statement (one-line context for AI/sales tools):

> Sirius Systems is an AI automation, smart website, reputation, and local business growth systems company for service-based businesses.

## 2. Voice & tone

### Brand personality (the 8 traits)

From `docs/brand/brand-skill.md`:

1. **Modern** — current vocabulary, current tools, no enterprise-era jargon.
2. **Technical but easy to understand** — we sell technical capability to non-technical buyers. Use the right word, then translate it.
3. **Confident** — assert what works without hedging. "This is how X works" rather than "We think X might help."
4. **Helpful** — every piece of copy should leave the reader with something useful even if they don't buy.
5. **Conversion-focused** — every section has a job. Drift toward the action.
6. **Trust-building** — we sell trust services. Honesty about limits builds it; fluff destroys it.
7. **Futuristic without feeling cold** — yes to AI, automation, "systems" language. No to "synergy", "leverage", or sci-fi pastiche.
8. **Professional for small business owners** — the audience is owner-operators of local service businesses, not Fortune 500 buyers. Speak like you respect them as operators, not like you're talking down or talking past them.

### Voice rules (how the 8 traits show up in writing)

- **Outcome-first** — lead with what it does for the business, not what it is internally. "Books appointments while you're on the roof" > "Multi-agent LLM with calendar integration."
- **Plain words for hard ideas** — if a sentence needs three readings, rewrite it.
- **Honest about limits** — when something is hard, say so. We sell trust services; oversell undoes us.
- **No hype superlatives** — "best", "#1", "leading", "trusted by thousands" — unless documented. See `do-not-invent-rules.md`.
- **Conversion-aware, not pushy** — one primary CTA per section, no urgency theater.

### Tone (varies by surface)

| Surface | Tone notes |
|---------|------------|
| Home / capstone | Confident, ambitious, but grounded |
| Service pages | Practical, technical-but-clear, outcome-focused |
| Industry pages | Empathic — show we get the daily reality |
| Blog (how-to) | Instructive, no fluff, examples > theory |
| Blog (opinion / founder's note) | First person, opinionated, signed |
| Legal pages | Neutral, clear, no marketing language |
| Errors (404, form errors) | Helpful, friendly, brief, no jokes that age poorly |

### Words and phrases to avoid

- "Best", "#1", "leading", "premier", "trusted by thousands" — unless documented
- "Unlock", "supercharge", "next-level", "10x", "game-changer" — clichés
- "AI-powered" stuck on every noun — pick what's actually AI-powered
- "Solutions" used as a vague filler ("our solutions help your business...")
- "Cutting-edge", "state-of-the-art", "revolutionary"

### Words and phrases we prefer

- "Built for" rather than "designed for" (more concrete)
- "System" rather than "platform" (matches the brand)
- "Capture", "book", "follow up", "earn" — verbs the buyer already uses
- "Local service business" — our actual ICP, named explicitly

### Capitalization

- Sentence case for headlines, not title case ("Smart websites for local service businesses").
- Exceptions: brand name, product names, proper nouns (Google Business Profile, etc.).

## 3. Color (confirmed)

The Sirius Systems palette is derived from the official logo. These values are confirmed and live in `tailwind.config.ts` as the active brand tokens. They are no longer placeholders — content-needed items 1.6 + 1.7 are resolved.

### Palette

| Token | Hex | Use |
|-------|-----|-----|
| `background` | `#050505` | Page background. The default canvas everywhere. |
| `background-alt` | `#0B0B0F` | Alternating section backgrounds for vertical rhythm. |
| `surface` | `#121218` | Card / panel surface — sits on top of `background`. |
| `surface-2` | `#181824` | Elevated surface; chip / code-badge backgrounds. |
| `primary` | `#F2EA00` | **YELLOW.** Reserved for primary CTAs and the brand mark. |
| `primary-foreground` | `#050505` | Dark text on yellow CTA — required for AA contrast. |
| `primary-hover` | `#FFF04A` | Yellow CTA hover state (lighter, not darker). |
| `secondary` | `#1468FF` | **BLUE.** Supporting accent — section labels, eyebrows, link underlines, focus rings, decorative SVG strokes, atmospheric glows. Also the secondary CTA button color. |
| `secondary-foreground` | `#F5F7FA` | Light text on the blue secondary CTA. |
| `secondary-hover` | `#3A82FF` | Blue secondary CTA hover state. |
| `accent` | `#1468FF` | Alias to `secondary`. Existing `text-accent` / `ring-accent` usages all resolve to the same blue. |
| `foreground` | `#F5F7FA` | Body text. |
| `muted-foreground` | `#B7C0D1` | De-emphasized body text. |
| `muted` | `#8B93A7` | Caption / meta / placeholder text. |
| `border` | `#2A2F3A` | Hairline borders, card edges. |
| `border-strong` | `#3F4654` | Hover / emphasis border, button outlines. |
| `success` | `#22C55E` | Form success, positive confirmation. White text on top. |
| `warning` | `#F59E0B` | Validation warning, non-fatal alert. Dark text on top (yellow-orange is high luminance). |
| `destructive` / "Error" | `#EF4444` | Errors and destructive actions only. `destructive` is the active token name; `Error` in the brand-skill file refers to this same hex. |

### Color use rules

- **Yellow = action.** `bg-primary` appears only on the single primary CTA per viewport, and on the brand mark. Never used as an atmospheric tint, on dot fills, hover surfaces, section labels, or anywhere else where it would dilute the "this is the action" signal.
- **Blue = support.** `text-accent`, `bg-secondary`, `ring-accent`, `fill-accent` all carry the workhorse supporting accent role — eyebrows, links, dots, focus rings, atmospheric glows, decorative SVG.
- **The home hero is the canonical yellow + blue CTA pairing** (primary yellow, secondary blue). Avoid using both colors on the same visual element.
- **One primary CTA per viewport.** Additional actions are blue (when prominent) or ghost / link styling (when subtle).
- **Body text never on a non-tested background** — verify contrast ≥ 4.5:1.
- **No yellow text in body copy.** Yellow renders correctly only when paired with dark text on the button surface.

### Working with the tokens in code

- Buttons: `.btn-primary` (yellow), `.btn-secondary` (blue), `.btn-ghost` (transparent), `.btn-outline` (bordered).
- Inline code references: use the `.code-badge` utility (surface-2 background) — never `bg-secondary` directly, which would render bright blue.
- Atmospheric blur glows behind cards: `bg-secondary/15 blur-3xl` (NOT `bg-primary/X` — yellow is for actions only).
- Focus ring: `:focus-visible` ships a 2px `ring-accent` ring globally. Don't override per-component without a replacement.

## 4. Type (TBD — placeholders)

> Type pairing is blocked on the client (item 1.8). Placeholders below until confirmed.

### Placeholder pair

- **Display:** Bricolage Grotesque (variable, optical sizing) — fallbacks: `ui-sans-serif, system-ui, sans-serif`
- **Body:** Inter (variable) — fallbacks: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **Mono:** `ui-monospace, "SF Mono", Menlo, Consolas, monospace`

Both are placeholders. Bricolage was picked as the display placeholder because it has optical sizing (looks refined at hero scale, readable at card-title scale), reads as confident-but-not-techy, and is distinctive enough that the site doesn't look like every other Inter-everywhere AI-startup template. Inter is kept for body because it's a quiet workhorse that won't fight the display face.

When the real pair arrives, update Tailwind theme (`tailwind.config.ts` → `fontFamily.display` + `fontFamily.sans`), the Google Fonts imports in `app/layout.tsx`, and this section.

### Scale

| Token | Size | Line height | Use |
|-------|------|-------------|-----|
| `display` | 60px / 72px | 1.05 | Hero headlines |
| `h1` | 48px / 56px | 1.1 | Page headlines |
| `h2` | 36px / 44px | 1.15 | Section headlines |
| `h3` | 24px / 32px | 1.25 | Subsection |
| `h4` | 20px / 28px | 1.3 | Card titles |
| `body` | 18px | 1.6 | Body text |
| `small` | 14px | 1.5 | Meta, captions |

Adjust scale for mobile (-10–20% on display/h1).

### Type rules

- **Max 70 characters per body line** (use `max-w-prose` or equivalent).
- **One display headline per page** (the hero).
- **No more than two type weights in active use** beyond regular (typically: regular + semibold/bold).

## 5. Logo (TBD)

> Logo files are blocked (item 1.5). Until they arrive, the header uses a wordmark in the display typeface at the placeholder primary color.

When real logo arrives:

- SVG light, SVG dark, favicon source (SVG/PNG at 512×512)
- Define clear-space (≥ logo height on all sides)
- Define minimum size (≥ 24px tall for header, ≥ 16px for favicon-derived contexts)
- Define monochrome variants for inverse / single-color use

## 6. Iconography

- Use a single icon library across the site (recommended: Lucide). Do not mix libraries.
- Stroke icons preferred over filled.
- 1.5px or 2px stroke weight, consistent across sizes.
- No emoji as icons in UI chrome.

## 7. Imagery direction

From `docs/brand/brand-skill.md`, the visual identity rests on six pillars:

- **Electric yellow star outline** — the focal mark; matches the brand's primary yellow at the star core. Use sparingly.
- **Electric blue AI/human figure** — secondary mark; matches secondary blue. Used where we depict the system in action.
- **Near-black background** — `#050505` everywhere, not navy, not slate.
- **High-contrast dark theme** — text and chrome push toward the bright end of the scale.
- **Clean AI automation feel** — geometric, sharp, modern. No retrofuturistic clutter.
- **Strong but controlled glow accents** — blue radial glows behind cards, never yellow.

Operating rules:

- **No stock photo clichés** — handshake, laptop on coffee table, "diverse team smiling at whiteboard."
- **Lean into abstract / geometric / "stellar" motifs** — Sirius is a star; the brand uses that visual cue directly via the star mark.
- **Prefer AI-generated heroes** where licensing of stock isn't worth it; image prompts live in `docs/brand/image-prompt-bank.md`.
- **People photos** require permission. No invented faces.
- **No text inside images.** Page copy carries the words.

## 8. UI / UX direction

- **Dark-leaning theme** as default (matches the futuristic / systems positioning). Light mode optional, post-launch.
- **Generous whitespace** — Sirius Systems is not a low-rent service. Spacing communicates value.
- **Sectioned, opinionated layouts** — each page section makes one point.
- **Sticky header**, simple nav (Services / Industries / Blog / Contact).
- **One primary CTA color**, used sparingly.
- **Form fields** are large, obvious, and forgiving (clear error states, no surprise validations).

## 9. Component primitives (Phase 1)

When the codebase scaffolds, these are the primitives we expect:

- `Button` (variants: primary, secondary, ghost, link)
- `Input`, `Textarea`, `Select`
- `Card`
- `Section` (page section wrapper)
- `Container` (max-width wrapper)
- `Heading` (semantic + scale)
- `Prose` (long-form content style)
- `Badge`, `Tag`
- `Callout` (info / warning / success)
- `BlogCard`
- `ServiceCard`
- `IndustryCard`

Built with Tailwind utility classes + headless primitives (Radix or shadcn-style) — no opinionated CSS-in-JS.

## 10. Accessibility

- All interactive elements keyboard-reachable.
- Focus styles visible (don't override the browser ring without a replacement).
- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text and graphics.
- All form fields have programmatic labels.
- No information conveyed by color alone.
- `aria-` attributes where needed; no `aria-` theater where not.

## 11. Motion

See `docs/brand/motion-guidelines.md` — subtle, purposeful, no auto-playing video on first paint.

## 12. Open questions for client (mirror of `content-needed-from-client.md`)

- Tagline?
- Primary + secondary brand color?
- Display + body type pair?
- Logo (light + dark + favicon source)?
- Founder bio + headshot?
- Final positioning line?

## 13. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial guide — voice, tone, type/color placeholders, UI principles, components list. |
