# Project Changelog — Sirius Systems

Reverse-chronological record of meaningful project changes. Updated **in the same commit** as the change itself, not later.

Format per entry:

```
## YYYY-MM-DD — <short title>
- type: docs | feat | fix | seo | brand | chore | refactor
- author: <name>
- changes: <one-line summary>
- files: <relevant paths or globs>
- notes: <optional context, blockers raised, decisions made>
```

---

## 2026-05-23 — /industries/real-estate-property copy update
- type: seo
- changes: Set DATA object with Level 5 SEO/AEO copy package. metaTitle, metaDescription, headline, subheadline, heroHighlights, problems, systemsCopy, subVerticalsCopy, 5 featured + 10 compact sub-verticals, faqs, cta fields. Schema: WebPage + BreadcrumbList + FAQPage. No platform integration claims, no named CRM references. tsc clean. next build clean.
- files: app/industries/real-estate-property/page.tsx

## 2026-05-23 — /industries/healthcare-medical copy update
- type: seo
- changes: Set DATA object with Level 5 SEO/AEO copy package. metaTitle, metaDescription, headline, subheadline, heroHighlights, problems, systemsCopy, subVerticalsCopy, 6 featured + 12 compact sub-verticals, faqs, cta fields. Schema: WebPage + BreadcrumbList + FAQPage. No HIPAA claims, no EHR integrations, no compliance certifications. tsc clean. next build clean.
- files: app/industries/healthcare-medical/page.tsx

## 2026-05-23 — /industries/construction-contractors copy update
- type: seo
- changes: Replaced DATA object with Level 5 SEO/AEO copy package. Updated metaTitle, metaDescription, headline, subheadline, heroHighlights, problems, systemsCopy, subVerticalsCopy, faqs, and cta fields. Schema block unchanged. tsc clean. next build clean.
- files: app/industries/construction-contractors/page.tsx

## 2026-05-23 — /industries/home-services copy update
- type: seo
- changes: Replaced DATA object with Level 5 SEO/AEO copy package. Updated metaTitle, metaDescription, headline, subheadline, heroHighlights, problems, systemsCopy, subVerticalsCopy, faqs, and cta fields. Schema block unchanged. tsc clean. next build clean.
- files: app/industries/home-services/page.tsx

## 2026-05-20 — Body copy targeted fixes

- type: copy
- changes: Two targeted body copy corrections, both pre-confirmed against current file state before editing.
  1. **`/review-automation` `industryFit` data omission fixed**: array expanded from `['home-services']` to `['home-services', 'contractors']`. Review automation applies equally to contractors whose jobs complete with a clear review-able moment. Every other related service page (e.g. `/ai-review-responses`, `/reputation-management`) already lists both. Slug `'contractors'` confirmed present in `lib/industries.ts` (line 22) before the change was applied. Effect: contractors hub now also surfaces as a related industry chip on `/review-automation`, and the new entry is picked up by `IndustryFitStrip` automatically without any template change.
  2. **`/all-in-one-business-growth-system` final step body rewrite**: the "One system, one view" step body changed from product-stack description ("Everything runs through a unified stack: one place to see your pipeline, your review activity, and your search visibility...") to buyer-outcome framing ("You see one pipeline, one review feed, and one search snapshot without logging into three different tools..."). Same meaning, addressed at the buyer rather than describing the stack. The "30-minute check-in" reference is a descriptive pattern (what a manual cross-dashboard sweep typically takes), not a metric or sourced claim, and "30-minute" is a compound-modifier hyphen, not a dash.
- files: `app/review-automation/page.tsx`, `app/all-in-one-business-growth-system/page.tsx`, `docs/site-os/changelog/project-changelog.md`
- notes: typecheck clean, build clean, 25 page HTMLs prerender (27 routes counting sitemap.xml + robots.txt). All 4 dash variants (`&mdash;`, `&ndash;`, `—`, `–`) still return 0 hits across `app/`, `components/`, `lib/`. No headline, subheadline, `metaTitle`, `metaDescription`, `definition`, `problems`, `steps[].label`, `features`, `outcomes`, `relatedSlugs`, or `faqs` fields changed beyond the explicit two strings above. No CSS or component changes.

## 2026-05-20 — Headline and subheadline spec alignment

- type: copy
- changes: Updated `headline` and `subheadline` fields across 10 service pages and 2 industry pages to meet Site Master spec: outcome-first framing, buyer-problem lead, sentence case, no em-dashes or en-dashes in replacement copy. 18 total string replacements across 12 files. No structural, schema, metadata (`metaTitle`/`metaDescription`), or CSS changes; `definition`, `problems`, `steps`, `features`, `outcomes`, `relatedSlugs`, `industryFit`, and `faqs` fields all untouched. The Stage 1-3 `glyphVariant` field and component logic are also untouched.
  - `/ai-chatbots`: subheadline replaced (problem-led: "Website visitors who get no answer at 9pm book somewhere else...").
  - `/crm-automation`: headline + subheadline (problem-led: "Leads are slipping because no one followed up. Fix that."; outcome-led subheadline).
  - `/appointment-booking-automation`: subheadline (problem-led: "Every unconfirmed inquiry is a job that might not happen..."). Existing headline already passed spec.
  - `/smart-websites`: subheadline (contrastive: "Your current site describes your services. A smart website..."). Existing headline already passed spec.
  - `/google-business-profile-optimization`: subheadline (outcome-led: "An optimized GBP puts your business in front of people..."). Existing headline already passed spec.
  - `/local-seo-aeo`: headline + subheadline (parallel structure: "Show up in Google. Show up in AI answers. Both matter now.").
  - `/reputation-management`: headline + subheadline.
  - `/review-automation`: headline + subheadline (problem-led: "You are completing jobs that never turn into reviews. That is a system problem.").
  - `/ai-review-responses`: headline + subheadline.
  - `/all-in-one-business-growth-system`: headline + subheadline (action-led: "Stop running three systems that do not talk to each other. Run one.").
  - `/industries/professional-services`: headline (sentence case correction only — "More Qualified..." → "More qualified...").
  - `/industries/auto-services`: headline (sentence case + tense — "Customers Search... Online" → "Customers are searching for a shop right now...").
- files: `app/ai-chatbots/page.tsx`, `app/crm-automation/page.tsx`, `app/appointment-booking-automation/page.tsx`, `app/smart-websites/page.tsx`, `app/google-business-profile-optimization/page.tsx`, `app/local-seo-aeo/page.tsx`, `app/reputation-management/page.tsx`, `app/review-automation/page.tsx`, `app/ai-review-responses/page.tsx`, `app/all-in-one-business-growth-system/page.tsx`, `app/industries/professional-services/page.tsx`, `app/industries/auto-services/page.tsx`, `docs/site-os/changelog/project-changelog.md`
- notes: Verified — build clean, 25 page HTMLs prerender (27 routes counting sitemap.xml + robots.txt), typecheck clean. All 4 dash variants (`&mdash;`, `&ndash;`, `—`, `–`) still return 0 hits across `app/`, `components/`, `lib/`. Pages confirmed passing spec and left unchanged per the brief: `/ai-automation`, `/ai-voicebots`, `/appointment-booking-automation` (headline only), `/lead-generation-automation` (entirely), `/google-business-profile-optimization` (headline only), `/smart-websites` (headline only), `/competitor-review-benchmarking`, `/industries/contractors`, `/industries/beauty-wellness`, `/industries/home-services`. No invented claims introduced — every replacement is descriptive of capability without metric or guarantee.

## 2026-05-20 — En-dash sweep (follow-up to em-dash sweep)

- type: fix
- changes: Follow-up sweep covering en-dashes (`–` U+2013 and `&ndash;`) and a stray end-of-line em-dash that the prior em-dash sweep regex missed. Brief expanded the public-facing copy rule to disallow en-dash substitutes (Rule E). All hits were number ranges or a comment dash at EOL:
  - `lib/google-reviews.ts:29`: JSDoc `1–5 integer rating` → `1 to 5 integer rating`
  - `lib/site.ts:10`: comment `140–160 char meta-description target` → `140 to 160 char meta-description target`
  - `app/ai-automation/page.tsx:27`: body string `3–5 automation gaps` → `3 to 5 automation gaps`
  - `app/ai-automation/page.tsx:78`: FAQ answer `2–4 weeks` → `2 to 4 weeks`
  - `app/about/page.tsx:235`: body `$250k&ndash;$5M ... 1&ndash;25 employees` → `$250k to $5M ... 1 to 25 employees`
  - `components/reviews/GoogleReviewsSection.tsx:20`: comment ending `block —` (em-dash at EOL, missed by the prior `' — '` regex which required trailing space) → `block,`
- files: `lib/google-reviews.ts`, `lib/site.ts`, `app/ai-automation/page.tsx`, `app/about/page.tsx`, `components/reviews/GoogleReviewsSection.tsx`, `docs/site-os/changelog/project-changelog.md`
- notes: Number ranges replaced with "to" (the English range word), which is the natural restructure for `X–Y` patterns. Brief's Rule E options (period, colon, restructure) — period/colon don't work for numeric ranges; "to" is the restructure. typecheck clean, build clean, 25 page HTMLs prerendered (27 routes counting sitemap + robots). FAQ JSON-LD Question.name strings remain byte-identical to visible H3 text (same source array). All 4 grep variants (`&mdash;`, `&ndash;`, `—`, `–`) return 0 hits across `app/`, `components/`, `lib/`. Internal `docs/` untouched per Rule F.

## 2026-05-20 — Em-dash sweep: all public-facing instances removed

- type: fix
- changes: Removed every em-dash (`&mdash;` HTML entity + the literal ` — ` U+2014 character) from public-facing source — `app/`, `components/`, `lib/` — per the Site Master copy rule. 451 total instances across 40 files. Applied as three layers:
  - **Layer 1 (script, mechanical, 435 fixes)**: a Node.js script classified each em-dash by syntactic context and applied safe rewrites. (a) Title separator ` — Sirius Systems` → ` | Sirius Systems` (14 hits, all `metaTitle` values and the home `title.default` template). (b) Single-line string literals (feature arrays, oneLiners, FAQ answers, meta descriptions, body strings): ` — ` → `: ` (393 hits). (c) Code comment lines starting with `//`, `*`, or `/*`: ` — ` → `: ` (28 hits).
  - **Layer 2 (script, JSX block comments, 36 fixes)**: a second pass widened the comment regex to catch `{/* ... */}` JSX block comments (Stage 3 section dividers like `{/* S00 — Hero */}`) and the JSX text expression in `ServicePageTemplate.tsx:102` (` — {rest}` → `: {rest}`).
  - **Layer 3 (manual per-rule judgment, 26 fixes)**: every remaining `&mdash;` was in JSX prose where mechanical replacement would have produced ungrammatical or unclear copy. Each was fixed by reading surrounding context and applying Rule A (sentence break/aside → period or colon), Rule B (cause/effect → period + new sentence or comma + "so"), or Rule D (JSX prose). Most became periods (new sentence) or commas (continuation); a few became colons where the dash introduced a list. No invented content added.
  - **`ServicePageTemplate.tsx` split logic updated**: per the brief, the hero summary card's split separator changed from `feature.split(' — ')` to `feature.split(': ')`. The output `<span> — {rest}</span>` is now `<span>: {rest}</span>`. All 14 service-page feature arrays were updated to the colon separator by Layer 1, so the new split logic correctly recovers `lead` and `rest`. Verified on `/ai-chatbots`: feature renders as **24/7 availability**: responds instantly at any hour...
- files: All public-facing source files (`app/**/*.{ts,tsx}`, `components/**/*.{ts,tsx}`, `lib/**/*.{ts,tsx}`) plus this changelog. 40 files changed; verified via grep that 0 ` — ` and 0 `&mdash;` remain in those directories. Internal docs (`docs/`) retain em-dashes per Rule E — explicitly out of scope.
- notes: typecheck clean, build clean, 25 page HTMLs prerendered (+sitemap.xml + robots.txt = 27 routes). FAQ visible text and `FAQPage` JSON-LD remain byte-identical because both layers source the question/answer strings from the same `lib/faq.ts` arrays — the sweep modified both surfaces at once by construction. Sweep scripts (`scripts/em-dash-sweep.mjs` + `scripts/em-dash-sweep-pass2.mjs`) ran once and were deleted before commit; the `scripts/` directory was removed too. No schema, metadata, sitemap, robots, CSS, or component logic changed beyond the explicitly-listed `ServicePageTemplate` split-separator update.

## 2026-05-20 — Dark brand restoration + content audit fixes

- type: style + docs
- changes:
  - **Restored confirmed dark palette** to `tailwind.config.ts` and `app/globals.css`. Stages 1-4 had drifted to a light/navy theme that contradicted `docs/brand/brand-skill.md` (the canonical brand source, which says client-provided). Reset to the canonical map: `#050505` bg / `#0B0B0F` bg-alt / `#121218` surface / `#181824` surface-2 / `#F2EA00` yellow (action only) / `#FFF04A` yellow hover / `#1468FF` blue (workhorse support) / `#3A82FF` blue hover / `#F5F7FA` text / `#B7C0D1` muted / `#8B93A7` faint / `#2A2F3A` border / `#3F4654` border-strong. `html` ships `color-scheme: dark`; body bg is `var(--bg)`.
  - **Globals.css rebuilt** with the new primitive set: `.section-base / -alt / -surface / -grid / -glow / -accent`, `.card / -elevated / -glass / -glow / -yellow`, `.btn-primary` (yellow), `.btn-secondary` (blue), `.btn-ghost`, `.btn-link`, plus `.glow-accent`, `.system-node / -flow-line`, `.dashboard-panel + rows`, `.badge-blue / -yellow`, `.cta-deep`, `.hover-lift / -glow`. Layout utilities (`.site-container`, `.section-padding`, `.content-narrow / -medium / -wide`) preserved as-is.
  - **Backward-compat layer** added inside the same `:root` so the Stage 1-4 CSS var names pages reference inline (`--text-charcoal`, `--blue-system`, `--navy-midnight`, `--border-soft`, etc.) alias to the new dark tokens. Class-name aliases similarly map `.section-light → .section-alt`, `.section-soft → .section-surface`, `.section-deep → .section-base`, `.section-slate → .section-grid`, `.section-radial → .section-glow`, `.card-feature → .card .hover-lift`, `.card-solid → .card`, `.card-premium → .card-elevated`, `.btn-secondary-dark / -light → .btn-ghost`. This is what let the restoration land without rewriting every page file.
  - **Header.tsx rebuilt** for dark canvas — `var(--bg)` background, `var(--border)` bottom border, nav links `var(--text-muted)` → `var(--text)` on hover, active route in `var(--yellow)` with a 2px yellow underline. SiriusMark star uses `fill-primary` (now yellow) + `fill-secondary` (now blue) — matches `brand-skill.md` "electric yellow star outline + electric blue core" naturally via the token swap. CTA stays `.btn-primary` (now yellow).
  - **Footer.tsx rebuilt** for dark canvas — `var(--bg-alt)` background (one degree warmer than page bg), `var(--border)` top border, headings in `var(--text)`, body + links in `var(--text-muted)` → `var(--text)` on hover. No yellow except via the brand wordmark text inheriting `var(--text)`. Privacy/Terms TODO comment preserved (still blocked on content-needed 1.9 + 1.10).
  - **Light-mode artifact sweep** — 5 grep hits across `app/`, only **1 actual leak fixed**: `app/contact/page.tsx` form input class had `bg-white` (solid) → swapped to `bg-[color:var(--surface)]`. The other 4 hits were either `bg-white/N` opacity variants on dark canvas (intentional, correct) or `bg-[color:var(--bg-white)]` references to the alias var which now resolves to `var(--surface)` (dark).
  - **Tasks 3A / 3B / 3C** (url-strategy.md / page-copy-plan.md / site-build-plan.md industry-taxonomy updates) were **already landed in commit `6e9ed16`** (industry-taxonomy docs sweep). Verified state: `/industries` index has 5 hubs, `(×5)` in page-copy-plan, `Industry (6)` in site-build-plan (1 index + 5 hubs). No re-edit needed.
  - **Task 4** (`SITE.description` verification): current value is 148 chars, already AEO-clean, no placeholder. Left unchanged. The brief's suggested replacement is ~190 chars and would exceed the 160-char meta-description limit.
- files: `tailwind.config.ts`, `app/globals.css`, `components/site/Header.tsx`, `components/site/Footer.tsx`, `app/contact/page.tsx`, `docs/site-os/changelog/project-changelog.md`
- notes: typecheck clean, build clean, 25 page HTMLs prerendered (+sitemap.xml + robots.txt = 27 total static routes per Next.js output). Compiled CSS contains all 4 brand hex codes (`#F2EA00`, `#1468FF`, `#050505`, `#F5F7FA`). Schema integrity preserved — zero `Review`/`AggregateRating` anywhere. Brief item I declined: Header "on scroll, border transitions to var(--border-strong)" requires a new scroll listener (more state, more complexity); kept border static. Follow-ups: (1) eventually migrate page files off the alias CSS var names to the canonical new names so the alias block in `globals.css :root` can be deleted; (2) the page.tsx:518 reference `bg-[color:var(--bg-white)]` still uses an oxymoronic legacy name — works correctly, but should be renamed to `var(--surface)` in a future polish pass; (3) `content-needed-from-client.md` items 1.6 + 1.7 should be moved to RESOLVED status since the client provided the colors via `brand-skill.md`; (4) `image-prompt-bank.md` §1 style baseline still references the old dark palette hex codes — those are now restored to the active palette, so the doc is accidentally accurate again, no edit needed.

## 2026-05-20 — Industry taxonomy confirmed and docs updated

- type: docs
- changes: Updated planning docs to reflect the approved industry taxonomy change — from the original 7 industry slugs (`home-services`, `cleaning-companies`, `junk-removal`, `real-estate`, `contractors`, `coaches-consultants`, plus index) to the 5 deployed hubs (`home-services`, `contractors`, `professional-services`, `auto-services`, `beauty-wellness`, plus index). The 4 deprecated slugs never went live so no 301 redirects are required. Deprecated slugs documented in `url-strategy.md` so future readers know what was removed and where each former vertical maps now. Per the brief's "no references in any doc file" gate, the sweep extended beyond the 3 explicitly-named files to the other forward-looking specs that still carried deprecated slugs (`internal-linking-plan.md`, `metadata-draft.md`, `image-prompt-bank.md`, `blog-strategy.md`, `prelaunch-checklist.md`). Historical entries in this changelog were left untouched — they document what was true at the time. No code changes; build and typecheck still pass clean.
- files: `docs/seo/url-strategy.md`, `docs/content/page-copy-plan.md`, `docs/site-os/inputs/site-build-plan.md`, `docs/seo/internal-linking-plan.md`, `docs/seo/metadata-draft.md`, `docs/brand/image-prompt-bank.md`, `docs/seo/blog-strategy.md`, `docs/site-os/qa/prelaunch-checklist.md`, `docs/site-os/changelog/project-changelog.md`
- notes: Remaining audit follow-ups for a future doc sweep: (1) `image-prompt-bank.md` §1 style baseline still references the deprecated yellow/blue palette — needs alignment with the current light + system-blue + navy brand; (2) `brand-skill.md` and `brand-guide.md` still describe the older brand identity.

## 2026-05-20 — Stage 4: polish + QA pass

- type: fix
- changes: Refinement-only pass after Stages 1-3. No redesign, no new style system, no metadata/schema/sitemap/robots/config changes. Three targeted fixes:
  - **Footer broken links removed**: `/privacy` and `/terms` were referenced in the footer of every page but the routes don't exist (copy blocked on content-needed 1.9 + 1.10). 16 broken-link references site-wide. Comment left in `Footer.tsx` marking where to restore the items when the pages ship.
  - **`/services` hero CTA aligned**: button label changed from "Map your system in 20 min" (outlier) to "Book a discovery call" — matches `/`, `/about`, and the `ServicePageTemplate` default. Bottom CTAs across the site already use "Book the audit" consistently.
  - **`IndustrySubCard` "Coming soon" pill contrast fix**: `text-muted` (`#9CA3AF`) on the `bg-surface-2` (`#F7F9FC`) pill was ~2.54:1 — below WCAG AA. Changed to `text-muted-foreground` (`#4B5563`) — ~7:1. Affects 74 sub-vertical cards across the 5 industry hub pages.
- files: `components/site/Footer.tsx`, `components/site/IndustrySubCard.tsx`, `app/services/page.tsx`
- notes: Validated via `npm run build` (clean, 27 routes prerender). Lint same interactive-setup gate as prior stages. Brief sections **explicitly verified clean and not touched**: dark section variation (heroes use `section-deep`, processes use `section-slate`, home workflow uses `section-radial`, all CTA panels use gradient `cta-deep` — varied without being chaotic); glass usage (~22 actual `card-glass` instances across ~20 pages ≈ 1/page in hero summary slots — selective per brief); H1 audit (1 per page, verified in Stage 3); schema audit (no `Review`/`AggregateRating` anywhere, correct allowed schemas per page type). **Intentionally not changed**: `/about` final CTA framing ("Twenty minutes. A real audit. No pitch.") — the operator-voice framing matches the page's content and adds welcome variation; industry-hub hero CTAs ("Build My System") — empowerment framing is industry-page-appropriate; wayfinding CTAs ("Find My Industry", "Jump to the form") — different intent than the audit-booking CTA; header active-underline geometry — recalculated and confirmed correct for the h-16 header; focus ring color on dark sections — passes WCAG 3:1 minimum (3.76:1).

## 2026-05-20 — Stage 3: interior pages onto the premium design system

- type: feat
- changes: Migrated every non-homepage route onto the Stage 1 design system. All 27 routes now render coherently in the new brand. **No `globals.css` edits this stage** — pure consumption of Stage 1 utilities. **No metadata, schema, sitemap, robots, or config changes.** Same schema as before (`WebPage` + `BreadcrumbList` everywhere; `Service` on service pages; `FAQPage` on pages with visible FAQs; zero `Review`/`AggregateRating` anywhere).
  - **`ServicePageTemplate.tsx` rewritten** onto the new system — 10 sections per service page now use Stage 1 utilities (dark deep hero → light definition → soft problem → light feature checklist → soft outcomes grid → SLATE-dark "how it works" with `.system-node` step numbers → light related services → soft industry fit → light FAQ → light section wrapping a `.cta-deep` panel). One edit upgraded **14 service pages** automatically. Hero right-column visual swapped from the old `ConstellationGlyph` to a `.card-glass` "what this delivers" summary pulling the first 4 entries from `data.features` (selective-glass-in-hero per brief). The template kept `glyphVariant` on its data interface (now optional + ignored) so the 14 existing page-data files compile without edits.
  - **`IndustryPageTemplate.tsx` — NEW shared component** for the 5 industry hubs. 6 sections (dark hero → light pain points → soft "what we build" → light sub-vertical cards → soft FAQ → light section wrapping `.cta-deep`). Each hub `page.tsx` is now a thin data file + template call. Removed the inline-duplication that the 5 hubs had been carrying. Each hub also surfaces an `heroHighlights` array (3-4 bullets) inside the hero's `.card-glass` summary — pulled from each industry's actual value prop, no invented claims.
  - **`/industries`, `/services`, `/about`, `/contact` rewritten** — each is a one-off with its own structure but uses only Stage 1 classes. `/services` hero TOC card uses `.card-glass`; capstone section uses `.section-slate` with a `.card-glass` "what you get" panel; varied dark backgrounds across the page. `/about` hero has a `.card-glass` "what we won't do" trust card. `/contact` moves the form **out of the hero** and into a `.card-premium` on a light section (per brief — form/embed area separate from hero); hero now just frames the audit and CTA-jumps to the form anchor. Phone/email cards on `/contact` show "Pending confirmation" with `code-badge` references to content-needed items (no invented details).
  - **`ServiceCard.tsx` redesigned** for light-card style — clean `.card-solid` + `.hover-lift`, lucide icon per group (Workflow/LayoutDashboard/ShieldCheck/Layers) in a blue-tinted chip. Used by `RelatedServicesGrid` (which lives on every service page) and `/services`.
  - **`Header.tsx`** — fixed the Stage 2 white-translucent-on-white issue. Now opaque white with `border-bottom: var(--border-soft)`. Active route shows a blue underline. The "Book a call" CTA uses `.btn-primary`.
  - **`Footer.tsx`** — switched to `.section-deep` (dark navy) for site-wide visual punctuation. Four-column light-text-on-navy layout. Brand column, services column, industries column, company column. Real social URLs from `verified-public-sources.md` only.
- files: `components/site/{ServicePageTemplate, IndustryPageTemplate(new), ServiceCard, Header, Footer}.tsx`, `app/industries/{home-services, contractors, professional-services, auto-services, beauty-wellness}/page.tsx`, `app/{industries, services, about, contact}/page.tsx`
- notes: Validated via `npm run build` (lint is interactively gated on Next 15's ESLint setup migration, same as Stage 1/2). 27 routes prerender clean. H1 audit on 7 sampled pages: 1 each ✓. Forbidden schema audit: 0 Review / 0 AggregateRating ✓. Stage 1 class usage on a sample service page: `section-light ×10`, `section-soft ×6`, `section-deep ×4`, `section-slate ×2`, `card-feature ×10`, `card-solid ×18`, `card-glass ×2` (hero + capstone-style accent — selective, per brief), `cta-deep ×2`, `system-node ×8`, `btn-primary ×5`. Old-pattern leakage check (`.card .card-hover`, `bg-surface/30`, `glow-accent-soft`): 0 ✓. Dark backgrounds varied per page type: services hero uses `section-deep`, `/services` capstone uses `section-slate`, industry hub process used to be slate (the brief allows that variation), `/about` process is `section-slate` — three distinct dark variants. Glass used selectively: hero summary cards on service/industry/about/services pages, capstone "what you get" panel on `/services`. **Components made unused by this rewrite** (kept in repo for Stage 4 cleanup decision): `SectionLabel`, `ProcessStep`, `HowItWorksSteps`, `CTASection`, `CTACard`, `CategoryCard`, `IndustryChip` (still used by `IndustryFitStrip`), `IndustryFitStrip` (still used by `ServicePageTemplate`), `ConstellationGlyph` (still imported by template's old data files but no longer rendered).

## 2026-05-20 — Stage 2: homepage upgrade onto the premium design system

- type: feat
- changes: Rewrote `app/page.tsx` to consume the Stage 1 design system. Replaces the old dark-glass-everywhere structure with a polished, premium AI-infrastructure layout. **No `globals.css` or `tailwind.config.ts` edits this stage** — pure consumption of Stage 1 utilities. **No metadata or schema changes** — WebPage + FAQPage still emitted, FAQ section preserved, no Service/Review/AggregateRating.
  - **12 sections** built (the brief's 9 + the preserved FAQ + a Trust/Review-policy split + the Final CTA panel). Heading hierarchy: exactly 1 H1, 11 H2s.
  - **Hero (S1)** — `.section-deep` + `.glow-accent`. Two-column with copy/CTAs on the left and a "Live Pipeline — Today" `.dashboard-panel` on the right (the brief's selective-glass-in-hero spot). Pipeline rows use `.dashboard-row` + `.dashboard-dot` + `.dashboard-label` + `.dashboard-value` with teal "Done" + gold "Queued" status pills. **Illustrative content only** — labeled "Illustrative · your pipeline runs on the same rules" so no one mistakes it for real client metrics.
  - **Problem (S2)** — `.section-light` with 3 `.card-feature` cards (NOT glass per brief). Each card uses `.badge-blue` for the leak category.
  - **Three Systems, One Engine (S3)** — `.section-soft` with 3 `.card-feature` cards (System 01 / 02 / 03), each carrying a 3-bullet checklist via `<Check />` + `.btn-link` deep-link to the relevant service page.
  - **Connected Workflow (S4) — NEW** — `.section-radial` with a 6-node flow (Lead Capture → AI Follow-Up → CRM Pipeline → Appointment Booking → Review Request → Reputation Growth) using `.system-node` + `.system-flow-line`. Mobile/tablet renders as a 2- or 3-column grid (no flow lines); desktop renders as a single horizontal flow with the connecting lines visible. Icons via lucide (`UserPlus`, `MessageSquare`, `GitBranch`, `CalendarCheck`, `Star`, `TrendingUp`).
  - **Service overview sections (S5/S6/S7)** — three editorial splits with alternating `.section-light` → `.section-soft` → `.section-light` backgrounds. Each side flips copy/cards orientation. Service mini-cards use `.card-solid` + `.hover-lift`.
  - **Industries (S8)** — `.section-soft` with a 3-col grid of `.card-solid` cards (one per `INDUSTRIES` entry) plus a `.card-subtle` "any local service business qualifies" catch-all. Each card surfaces a lucide industry icon (`Home`, `HardHat`, `Briefcase`, `Car`, `Sparkles`) in a colored chip.
  - **How It Works (S9)** — `.section-slate` (third distinct dark shade — brief required varied dark backgrounds). Three numbered steps using `.system-node` for the "01/02/03" badges.
  - **Trust / Review Policy (S10)** — `.section-light` two-column split. Left: explicit "no fake testimonials, no inflated claims" with a 4-line `<ShieldCheck />` checklist. Right: existing `<GoogleReviewsSection variant="carousel" />` which keeps rendering its neutral trust fallback until verified GBP data lands.
  - **FAQ (S11) — preserved** — `.section-soft`. Same `HOME_FAQ` data, so FAQPage JSON-LD Q strings remain byte-identical to visible text.
  - **Final CTA (S12)** — `.section-light` wrapping a `.cta-deep` panel. Brief's suggested headline ("Book a 20-minute revenue leak audit"), primary blue + ghost CTAs, small trust-line ("No automated nurture. No surprise emails. No sales pressure.").
- files: `app/page.tsx`
- notes: `npm run lint` is interactively gated on ESLint setup (Next 15's next-lint deprecation); validated via `npm run build` (clean, 27 routes prerendered). Stage 1 class reuse audit on prerendered HTML: `.card-feature ×6`, `.card-solid ×18`, `.dashboard-panel ×1`, `.system-node ×15`, `.system-flow-line ×5`, `.cta-deep ×1`, `.section-deep/-radial/-slate ×1 each`, `.section-eyebrow ×12`, `.section-heading ×11`, `.hero-heading ×1` (counts shown are post-RSC-deduplication; the raw HTML payload has them ~2x because of the hydration data block). **Brief deviations**: (a) preserved FAQ section even though the brief's 9-section structure didn't include it — the brief separately said "do not remove existing content unless duplicated," and FAQ carries the FAQPage schema. (b) Removed the unused `<ServiceCard>` import that the old home had imported but never rendered. **Components no longer used by home** (still used elsewhere, kept): `CTACard`, `CategoryCard`, `IndustryChip`, `ProcessStep`, `CTASection`, `SectionLabel`, `ConstellationGlyph`. Stage 3 may decide to either retire some of these or migrate other pages onto the new system and re-validate need.

## 2026-05-20 — Phase 4 Task 6: robots.ts + sitemap.ts

- type: feat
- changes: Added `app/robots.ts` and `app/sitemap.ts` using the Next.js App Router `MetadataRoute` conventions. Both required `export const dynamic = 'force-static'` to compile under `output: 'export'` — without it the build errored on "/sitemap.xml" and "/robots.txt" route data collection. Sitemap covers **24 static routes**: 4 core (`/`, `/about`, `/services`, `/contact`), 14 service pages, 6 industries (index + 5 hubs). Priorities scaled per brief (root 1.0, capstone + `/services` 0.9, other services + `/about` + `/contact` 0.8, industry hubs 0.7); `changeFrequency` weekly for `/`, monthly for everything else. `lastModified` resolves at build time. Robots policy: `User-Agent: *` / `Allow: /` / `Disallow: /api/` (defensive — no API routes exist today) / `Host:` + `Sitemap:` from `SITE.url`. Verified locally — `tsc --noEmit` clean, `next build` clean (24 page routes + `/robots.txt` + `/sitemap.xml`, all `○` static-prerendered), `out/robots.txt` and `out/sitemap.xml` generated, runtime `/robots.txt` → 200 (`content-type: text/plain`), `/sitemap.xml` → 200 (`content-type: application/xml`), 24 `<url>` entries in the sitemap, zero references to deprecated industry slugs.
- files: `app/sitemap.ts`, `app/robots.ts`
- notes: **Brief deviation flagged**: brief listed 26 routes including `/privacy` and `/terms`. Both were excluded — neither page exists on disk yet (copy blocked on content-needed 1.9 + 1.10). Pointing search engines at 404 URLs from the sitemap is a negative crawl signal. Both should be added back in the same commit that ships the actual `/privacy` and `/terms` pages. **Blog dynamic routes deferred to Phase 5** per brief.

## 2026-05-20 — Phase 4 Task 5: /industries index page (industry tree complete)

- type: feat
- changes: Built `/industries` index page — the hub-list entry point that pairs with the 5 industry hub pages already shipped. Sections: Hero ("Built for the Businesses That Show Up and Do the Work" + primary CTA scrolling to the hub grid) → Hub grid (5 cards, one per `INDUSTRIES` entry, each linking to `/industries/<slug>` with a static `SUB_VERTICAL_COUNT` badge — `20 trades`, `15 specialties`, `15 practice types`, `12 shop types`, `12 business types`) → How it works (two-paragraph honest framing — same system, tuned to your industry) → FAQ (3 questions) → CTASection. Schema: WebPage + BreadcrumbList (Home > Industries) + FAQPage (3 Q byte-identical to visible). No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Verified locally — `tsc --noEmit` clean, `next build` clean (27 static routes), `/industries` → 200, all 5 hub routes still → 200, every hub-card href maps to a real route, **zero** occurrences of deprecated slugs (`cleaning-companies`, `junk-removal`, `real-estate`, `coaches-consultants`) on the rendered page. Do-not-invent honored — no stats, no testimonials, no fabricated industry-coverage numbers (the "20 trades / 15 specialties / etc." counts mirror the actual `IndustrySubCard` counts on each hub page, not invented marketing claims).
- files: `app/industries/page.tsx`
- notes: **Industry tree complete** — `/industries` index + 5 hub pages all live. Stale references to the deprecated industry slugs still exist in planning docs (`docs/seo/url-strategy.md`, `docs/seo/internal-linking-plan.md`, `docs/seo/metadata-draft.md`, `docs/brand/image-prompt-bank.md`, `docs/seo/blog-strategy.md`, `docs/site-os/inputs/site-build-plan.md`, `docs/site-os/qa/prelaunch-checklist.md`) — these are pre-collapse historical artifacts. Suggest a follow-up docs-sweep task to reconcile them with the new 5-hub taxonomy before launch QA; the most launch-critical is the prelaunch checklist (it currently lists routes that don't exist).

## 2026-05-20 — Phase 4 Task 4: /industries/beauty-wellness (industry hubs complete)

- type: feat
- changes: Built `/industries/beauty-wellness` hub page using the established 6-section industry pattern. Hero (with `beacon` ConstellationGlyph) → What's keeping your calendar from being full (4 bullets) → The automation stack for beauty and wellness (RelatedServicesGrid of 6 services) → Business types we work with (4 featured + 8 compact `IndustrySubCard`s, all `comingSoon`) → FAQ (5 questions) → CTASection. Schema: WebPage + BreadcrumbList (Home > Industries > Beauty & Wellness) + FAQPage. No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Visible `<summary>` text and FAQPage `Question.name` strings consume the same `FAQS` array (byte-identical). Verified locally — `tsc --noEmit` clean, `next build` clean (26 static routes), `/industries/beauty-wellness` → 200, 12 sub-vertical headings rendered. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or invented results. No TODOs this page.
- files: `app/industries/beauty-wellness/page.tsx`
- notes: **All 5 industry hub pages now built** — `/industries/{home-services, contractors, professional-services, auto-services, beauty-wellness}`. The `/industries` index page is the last remaining route in the industry tree; it's still a planned route (the IndustryFitStrip and Footer link to it; it will 404 until built). Glyph variants used across the five hubs for visual variety: home-services=orbit, contractors=arc, professional-services=pulse, auto-services=wave, beauty-wellness=beacon.

## 2026-05-20 — Phase 4 Task 3: /industries/auto-services

- type: feat
- changes: Built `/industries/auto-services` hub page using the established 6-section industry pattern. Hero (with `wave` ConstellationGlyph) → Where auto shops lose business (4 bullets) → The service stack for auto businesses (RelatedServicesGrid of 6 services) → Shop types we work with (4 featured + 8 compact `IndustrySubCard`s, all `comingSoon`) → FAQ (5 questions) → CTASection. Schema: WebPage + BreadcrumbList (Home > Industries > Auto Services) + FAQPage. No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Visible `<summary>` text and FAQPage `Question.name` strings consume the same `FAQS` array (byte-identical). Verified locally — `tsc --noEmit` clean, `next build` clean (25 static routes), `/industries/auto-services` → 200, 12 sub-vertical headings rendered. Do-not-invent honored.
- files: `app/industries/auto-services/page.tsx`
- notes: FAQ Q5 (shop-management software integrations) carries a `TODO` comment for client confirmation — the visible answer is intentionally non-committal ("It depends on the software", "we evaluate during onboarding") until the client confirms which platforms they support.

## 2026-05-20 — Phase 4 Task 2: /industries/professional-services

- type: feat
- changes: Built `/industries/professional-services` hub page using the established 6-section industry pattern. Hero (with `pulse` ConstellationGlyph) → Where professional service firms lose clients (4 bullets) → The client acquisition and retention stack (RelatedServicesGrid of 6 services) → Practice types we work with (4 featured + 11 compact `IndustrySubCard`s, all `comingSoon`) → FAQ (5 questions) → CTASection. Schema: WebPage + BreadcrumbList (Home > Industries > Professional Services) + FAQPage. No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Visible `<summary>` text and FAQPage `Question.name` strings consume the same `FAQS` array (byte-identical). Verified locally — `tsc --noEmit` clean, `next build` clean (24 static routes), `/industries/professional-services` → 200, 15 sub-vertical headings rendered. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or invented client results.
- files: `app/industries/professional-services/page.tsx`
- notes: Two FAQ answers are intentionally guarded against overpromising and need client confirmation before final publish — flagged as `TODO` comments in the file: Q2 (HIPAA compliance — depends on the specific tools selected; no blanket guarantee) and Q4 (scheduling-system integrations — depends on which platform the client uses). The visible answer copy is honest and non-committal; the TODOs are for sharpening once integration choices are confirmed.

## 2026-05-20 — Phase 4 Task 1: /industries/contractors

- type: feat
- changes: Built `/industries/contractors` hub page using the same 6-section pattern as `/industries/home-services`. Hero (with `arc` ConstellationGlyph) → Where contractors leak revenue (4 bullets) → The system contractors actually need (RelatedServicesGrid of 6 services) → Contractor trades we work with (4 featured + 11 compact `IndustrySubCard`s, all `comingSoon`) → FAQ (5 questions) → CTASection. Schema: WebPage + BreadcrumbList (Home > Industries > Contractors) + FAQPage. No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Visible `<summary>` text and FAQPage `Question.name` strings consume the same `FAQS` array (byte-identical). Verified locally — `tsc --noEmit` clean, `next build` clean (23 static routes), `/industries/contractors` → 200, 15 sub-vertical card headings rendered (4 featured + 11 compact). Do-not-invent honored — no stats, ratings, testimonials, guarantees, or invented client results.
- files: `app/industries/contractors/page.tsx`

## 2026-05-20 — Phase 4 Task 0: cleanup + IndustrySubCard + /industries/home-services

- type: feat
- changes: Industries taxonomy collapsed from 6 verticals to 5 canonical hubs. New `INDUSTRIES` list: `home-services`, `contractors`, `professional-services`, `auto-services`, `beauty-wellness`. Removed: `cleaning-companies`, `junk-removal`, `real-estate`, `coaches-consultants` — these fold into broader hubs as sub-vertical cards (cleaning + junk-removal → home-services; real-estate + coaches-consultants → professional-services).
  - **lib/industries.ts**: rewritten with the new 5-hub list. Each entry kept the same `slug`/`name`/`oneLiner` shape — `IndustryChip` and `IndustryFitStrip` consume it without changes.
  - **components/site/IndustrySubCard.tsx (new)**: featured + compact sizes; `comingSoon` boolean renders the static-`<div>` variant with a neutral "Coming soon" pill (border-border / bg-surface-2 / text-muted — intentionally subdued, no accent fill so it doesn't look like a CTA); `href` + `!comingSoon` upgrades to a Next.js `<Link>` with card-hover styles.
  - **app/industries/home-services/page.tsx (new — never existed before)**: 6-section hub layout — Hero (2-col with orbit ConstellationGlyph), The problem (4 bullets), What we build (RelatedServicesGrid of 6 services), Trades we work with (4 featured + 16 compact IndustrySubCards, all `comingSoon`), FAQ (5 questions), bottom CTASection. Schema: WebPage + BreadcrumbList (Home > Industries > Home Services) + FAQPage. No Service / AggregateRating / Review / LocalBusiness / Organization / Product / Offer. Visible FAQ text and FAQPage `Question.name` strings consume the same `FAQS` array so they're byte-identical.
  - **Service pages (14)**: every `industryFit` array remapped to the new canonical slugs. `cleaning-companies` and `junk-removal` → `home-services`; `real-estate` and `coaches-consultants` → `professional-services`. Arrays deduped — most pages now show 2 chips (home-services + contractors) instead of 3, plus the inclusive fallback line from `IndustryFitStrip`. The brief's literal instruction was to remap to `home-services` only; I extended the remap to `professional-services` for the other two removed slugs so `IndustryFitStrip` wouldn't silently filter them out (they're not in the canonical list anymore — they'd render as nothing without a remap).
  - **app/contact/page.tsx**: industry select options updated to match the new 5 canonical industries — old `Cleaning` / `Junk Removal` / `Real Estate` / `Coaches / Consultants` options replaced with `Professional Services` / `Auto Services` / `Beauty & Wellness`. Brief didn't explicitly mention the form, but leaving stale options would let visitors select a slug that doesn't map to any real hub — flagged as an in-scope housekeeping fix.
  - **No files deleted**: `app/industries/cleaning-companies/page.tsx` and `app/industries/junk-removal/page.tsx` were referenced as targets for deletion but neither existed on disk — `/industries/` was a planned-route directory with nothing built yet. The "delete" actions were no-ops.
- files: `lib/industries.ts`, `components/site/IndustrySubCard.tsx`, `app/industries/home-services/page.tsx`, `app/contact/page.tsx`, `app/{ai-automation,ai-chatbots,ai-voicebots,crm-automation,appointment-booking-automation,lead-generation-automation,smart-websites,reputation-management,review-automation,ai-review-responses,google-business-profile-optimization,local-seo-aeo,competitor-review-benchmarking,all-in-one-business-growth-system}/page.tsx`
- notes: `tsc --noEmit` clean, `next build` clean (22 static routes), `/industries/home-services` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or invented results; all 20 sub-vertical card blurbs are descriptive ("Recurring booking automation for X businesses"), not promotional. Q3 of the FAQ ("How quickly can you set up...") uses intentionally non-specific timing language ("in days", "longer", "we scope it during the discovery call"); a `TODO: confirm exact timelines with client` comment is left next to the FAQ array. Other industry hub pages (`/industries/contractors`, `/industries/professional-services`, `/industries/auto-services`, `/industries/beauty-wellness`) and the `/industries` index are still planned routes — `IndustryFitStrip` chips link to them and will 404 until those pages are built in subsequent Phase 4 tasks.

## 2026-05-20 — Phase 3 Task 14: /all-in-one-business-growth-system (capstone)

- type: feat
- changes: Built `/all-in-one-business-growth-system` capstone service page using the existing `ServicePageTemplate` with the `beacon` glyph variant. This is the final Phase 3 service page — **all 14 Phase 3 routes now exist**. Schema emitted: WebPage + BreadcrumbList (Home > Services > All-in-One Business Growth System) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (21 static routes), `/all-in-one-business-growth-system` → 200. Capstone is the first service page to exercise the optional template props (`problemHeadline`, `howItWorksHeadline`, `featuresHeadline`, `outcomesHeadline`, `industryFitHeadline`) — all rendered correctly. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or invented pricing figures; the "What does it cost?" FAQ is intentionally honest and non-specific. Scan for `$\d+` / `\d+%` patterns confirmed all percent occurrences are SVG radial-gradient coords in `ConstellationGlyph`, not marketing claims.
- files: `app/all-in-one-business-growth-system/page.tsx`
- notes: **Phase 3 complete. All 14 service pages built.** Next: Phase 4 industry pages (7 routes); then `app/robots.ts` + `app/sitemap.ts`; then per-page `og:title` + default OG card before Phase 6 prelaunch QA.

## 2026-05-20 — Phase 3 Task 13: /competitor-review-benchmarking

- type: feat
- changes: Built `/competitor-review-benchmarking` service page using the existing `ServicePageTemplate` with the `grid` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Competitor Review Benchmarking) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer — confirmed `@type:"Review"` count is 0 despite slug containing "review". `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (20 static routes), `/competitor-review-benchmarking` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/competitor-review-benchmarking/page.tsx`

## 2026-05-20 — Phase 3 Task 12: /local-seo-aeo

- type: feat
- changes: Built `/local-seo-aeo` service page using the existing `ServicePageTemplate` with the `wave` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Local SEO & AEO) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer — confirmed `@type:"LocalBusiness"` count is 0 even though the page text mentions "LocalBusiness schema" (that copy describes schema we deploy on clients' sites, not on this marketing page). `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (19 static routes), `/local-seo-aeo` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/local-seo-aeo/page.tsx`

## 2026-05-20 — Phase 3 Task 11: /google-business-profile-optimization

- type: feat
- changes: Built `/google-business-profile-optimization` service page using the existing `ServicePageTemplate` with the `beacon` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Google Business Profile Optimization) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer — `LocalBusiness` confirmed 0 even though the page is *about* Google Business Profile (which is the same conceptual entity). `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (18 static routes), `/google-business-profile-optimization` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/google-business-profile-optimization/page.tsx`

## 2026-05-20 — Phase 3 Task 10: /ai-review-responses

- type: feat
- changes: Built `/ai-review-responses` service page using the existing `ServicePageTemplate` with the `pulse` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > AI Review Responses) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer — confirmed `@type:"Review"` count is 0 despite slug containing "review". `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (17 static routes), `/ai-review-responses` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/ai-review-responses/page.tsx`

## 2026-05-20 — Phase 3 Task 9: /review-automation

- type: feat
- changes: Built `/review-automation` service page using the existing `ServicePageTemplate` with the `arc` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Review Automation) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer — confirmed `@type:"Review"` count is 0 despite the slug containing "review". `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (16 static routes), `/review-automation` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/review-automation/page.tsx`

## 2026-05-20 — Phase 3 Task 8: /reputation-management

- type: feat
- changes: Built `/reputation-management` service page using the existing `ServicePageTemplate` with the `beacon` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Reputation Management) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (15 static routes), `/reputation-management` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/reputation-management/page.tsx`

## 2026-05-20 — Phase 3 Task 7: /smart-websites

- type: feat
- changes: Built `/smart-websites` service page using the existing `ServicePageTemplate` with the `grid` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Smart Websites) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (14 static routes), `/smart-websites` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/smart-websites/page.tsx`

## 2026-05-20 — Phase 3 Task 6: /lead-generation-automation

- type: feat
- changes: Built `/lead-generation-automation` service page using the existing `ServicePageTemplate` with the `orbit` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Lead Generation Automation) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (13 static routes), `/lead-generation-automation` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/lead-generation-automation/page.tsx`

## 2026-05-20 — Phase 3 Task 5: /appointment-booking-automation

- type: feat
- changes: Built `/appointment-booking-automation` service page using the existing `ServicePageTemplate` with the `arc` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > Appointment Booking Automation) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (12 static routes), `/appointment-booking-automation` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/appointment-booking-automation/page.tsx`

## 2026-05-20 — Phase 3 Task 4: /crm-automation

- type: feat
- changes: Built `/crm-automation` service page using the existing `ServicePageTemplate` with the `grid` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > CRM Automation) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (11 static routes), `/crm-automation` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/crm-automation/page.tsx`

## 2026-05-20 — Phase 3 Task 3: /ai-voicebots

- type: feat
- changes: Built `/ai-voicebots` service page using the existing `ServicePageTemplate` with the `wave` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > AI Voicebots) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (10 static routes), `/ai-voicebots` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/ai-voicebots/page.tsx`

## 2026-05-20 — Phase 3 Task 2: /ai-chatbots

- type: feat
- changes: Built `/ai-chatbots` service page using the existing `ServicePageTemplate` with the `pulse` glyph variant. Schema emitted: WebPage + BreadcrumbList (Home > Services > AI Chatbots) + Service + FAQPage (5 questions; visible `<summary>` text and schema `Question.name` strings consume the same `faqs` array so they remain identical). No AggregateRating / Review / LocalBusiness / Organization / Product / Offer. `areaServed` still omitted on the Service block pending content-needed 1.3. Verified locally — `tsc --noEmit` clean, `next build` clean (9 static routes), `/ai-chatbots` → 200. Do-not-invent honored — no stats, ratings, testimonials, guarantees, or pricing.
- files: `app/ai-chatbots/page.tsx`

## 2026-05-20 — Phase 3 start: service page template + /ai-automation

- type: feat
- author: Sirius Systems / Claude Code
- changes: Built the shared service-page system and shipped `/ai-automation` as the first instance.
  - **Template** (`components/site/ServicePageTemplate.tsx`): 9 sections — Hero, Definition (AEO-quotable, border-left accent), Problem framing, How it works, What you get (feature checklist in surface card), Outcomes (per-card with Zap icon), Related services, Industry fit, FAQ, Bottom CTA. All copy lives in the `ServicePageData` prop; the template owns presentation. Hero uses the same two-column pattern as core pages with `ConstellationGlyph` in a 4:3 surface panel (grid + glow atmosphere).
  - **Sub-components**: `HowItWorksSteps` (numbered steps, reuses existing `ProcessStep`), `RelatedServicesGrid` (looks up slugs against the canonical `SERVICES` catalog, silently skips missing slugs so catalog edits can't break a service page), `IndustryFitStrip` (chip row + inclusive fallback CTA paragraph for prospects whose industry isn't listed).
  - **Schema** (`lib/schema.ts`): added `serviceSchema({ slug, name, description })` per the brief signature. Emits Service JSON-LD with `provider: { '@id': '${SITE.url}/#organization' }` as a forward reference; the Organization JSON-LD itself is still blocked on legal name (content-needed 1.4) per `schema-plan.md` §2. `areaServed` is intentionally omitted with a TODO comment pending content-needed 1.3.
  - **`/ai-automation`** is live as a static route. Schema emitted: WebPage + BreadcrumbList (Home > Services > AI Automation) + Service + FAQPage. FAQ has 5 questions; visible H3 text and schema `Question.name` strings consume the same `faqs` array, guaranteeing identical content (apostrophes are HTML-escaped in body serialization to `&#x27;` but kept literal in JSON-LD; validators normalize).
  - **`SectionLabel.tsx`**: widened `tone` type to `'default' | 'muted' | 'accent'` so the template can call `tone="muted"` explicitly per the brief. `'default'` and `'muted'` render identically (text-muted); the addition is purely semantic clarity. No visual change on existing pages.
  - **CTASection API**: the brief specified `ctaLabel`/`ctaHref` props; the existing `CTASection` takes `primary={{ label, href }}` instead. Template maps `ctaSectionLabel` and `'/contact'` into the existing prop structure rather than introducing duplicate aliases — same effect, no API drift.
- files: `components/site/{ServicePageTemplate,HowItWorksSteps,RelatedServicesGrid,IndustryFitStrip,SectionLabel}.tsx`, `lib/schema.ts`, `app/ai-automation/page.tsx`
- notes: Verified locally — `tsc --noEmit` clean, `next build` clean (8 static routes), `/ai-automation` → 200, schema audit confirms only the four allowed types are emitted and none of the forbidden ones (Review, AggregateRating, LocalBusiness, Organization, Product, Offer). Do-not-invent honored throughout — no testimonials, ratings, pricing, or invented client results on the page or in the page data. 13 more service pages to instantiate against the same template; each is now a ~100-line copy-only data file.

## 2026-05-20 — Brand skill file ingested: positioning + personality + status colors

- type: docs / brand
- author: Sirius Systems / Claude Code
- changes: Client delivered the canonical "Sirius Systems Brand Skill File" — brand statement, positioning, 8 personality traits, visual direction language, and an expanded palette. Saved verbatim and threaded into the existing brand system.
  - **New file**: `docs/brand/brand-skill.md` holds the spec exactly as delivered + a mapping table showing which existing files each section flows into. When the client revises this file, the table tells future-me where to re-sync.
  - **Positioning RESOLVED** (content-needed item 1.12). Brand statement + full positioning sentence now live in `brand.md` (positioning section flipped from "working draft" to "confirmed") and `docs/brand/brand-guide.md` §1. The meta-description-trimmed version landed in `lib/site.ts` `SITE.description` — drops the "website, CRM, messaging, growth systems" enumeration because the 160-char meta slot can't carry it.
  - **Brand personality (8 traits)** integrated into `docs/brand/brand-guide.md` §2 ahead of the existing voice rules. The previous 4-trait Voice list re-cast as "Voice rules (how the 8 traits show up in writing)" so existing copy guidance survives unchanged.
  - **Status colors added to the theme** — `success: #22C55E` and `warning: #F59E0B` in `tailwind.config.ts`. `Error` in the brand-skill file is the same hex as the existing `destructive` token; commented to make the dual-name relationship explicit (`destructive` stays as the active token, no code changes needed for the third color).
  - **Visual direction language expanded** in `brand-guide.md` §7. Brand-skill's six visual pillars (electric yellow star outline, electric blue AI/human figure, near-black background, high-contrast dark theme, clean AI automation feel, strong but controlled glow accents) now lead the imagery direction section. Added explicit "No text inside images" rule.
  - **Content-needed checklist** updated — item 1.12 marked RESOLVED with cross-reference; status tracker entry flipped from BLOCKED to RESOLVED.
- files: `docs/brand/brand-skill.md` (new), `docs/brand/brand-guide.md`, `brand.md`, `tailwind.config.ts`, `lib/site.ts`, `docs/site-os/inputs/content-needed-from-client.md`
- notes: No UI changes; no page copy changed. Hero headline kept as-is — the new positioning is the support paragraph framing, the hero stays punchy. Verified locally: typecheck clean, next build clean (7 static routes, no bundle-size change — the new success/warning tokens add CSS classes but no actual class usage yet so the production CSS is unchanged). Items still pending from `content-needed-from-client.md`: 1.1 phone, 1.2 email, 1.3 service area, 1.4 legal name, 1.5 logo SVG, 1.8 type pair, 1.9–1.10 privacy + terms, 1.11 founder bio + headshot.

## 2026-05-20 — Brand refresh: dark theme + yellow/blue palette confirmed

- type: feat / brand
- author: Sirius Systems / Claude Code
- changes: Applied the official Sirius Systems brand palette (derived from the logo) across theme tokens, shared UI, and core pages. The site is now dark-theme by default with a two-color accent system — yellow for primary actions, blue for everything supporting.
  - **Palette confirmed (no longer PLACEHOLDER):** background `#050505`, background-alt `#0B0B0F`, surface `#121218`, surface-2 `#181824`, primary yellow `#F2EA00` (hover `#FFF04A`), secondary blue `#1468FF` (hover `#3A82FF`), foreground `#F5F7FA`, muted-foreground `#B7C0D1`, muted `#8B93A7`, border `#2A2F3A`, border-strong `#3F4654`. All tokens land in `tailwind.config.ts`; full table in `docs/brand/brand-guide.md` §3.
  - **Buttons:** `.btn-primary` (yellow, dark text, lighter on hover), `.btn-secondary` (blue, light text), `.btn-ghost` (transparent), `.btn-outline` (bordered). Added `.code-badge` utility for inline code references — replaces the previous `bg-secondary` pattern (which would now render bright blue) with a neutral surface-2 background.
  - **Atmospheric glows are blue, never yellow.** `glow-accent` and `glow-accent-soft` updated to `rgb(20 104 255 / 0.12)` / `rgb(20 104 255 / 0.07)`. All `bg-primary/X blur-3xl` glow backgrounds in `CTACard`, `GoogleReviewsSection`, and the About / Services / Contact page hero cards switched to `bg-secondary/X` so yellow remains exclusive to action surfaces.
  - **Brand mark redesigned:** the placeholder `SiriusMark` in the header is now a 4-point Sirius star burst — yellow body with a blue core — using `fill-primary` and `fill-secondary` so it inherits theme changes automatically. Still a placeholder until the real logo SVG lands (content-needed 1.5).
  - **ConstellationGlyph color constants** migrated from sky-blue cyan to the new blue (`#1468FF`); added a `HIGHLIGHT` constant (yellow `#F2EA00`) used at the focal point of the `beacon` variant only, matching the brand rule that yellow marks the single most important node.
  - **Home hero now ships the canonical yellow + blue CTA pairing** the brief asked for: primary `Book a discovery call` (yellow) + secondary `See all 14 services` (blue), no longer ghost.
  - **Review avatar** background switched from `bg-secondary` (now blue, too loud) to `bg-surface-2` (neutral).
  - **Layout viewport `themeColor`** updated to `#050505`.
  - **Docs updated:** `brand.md` Visual direction section now reads "colors confirmed"; `docs/brand/brand-guide.md` §3 fully rewritten with the official palette + usage rules + working-with-tokens guidance; `docs/brand/image-prompt-bank.md` style baseline + default OG card prompt updated for the new palette; `docs/brand/motion-guidelines.md` notes that yellow hover gets *lighter* (the "brightening star" intuition); `README.md` brand note updated.
  - **Type pair remains a placeholder** (Bricolage Grotesque + Inter — content-needed 1.8 still open). Logo SVG also still pending (1.5). No other content-needed items moved.
- files: `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/{page,about,services,contact}/page.tsx`, `components/site/{Header,ConstellationGlyph,CTACard}.tsx`, `components/reviews/{GoogleReviewsSection,GoogleReviewCard}.tsx`, `brand.md`, `docs/brand/{brand-guide,image-prompt-bank,motion-guidelines}.md`, `README.md`
- notes: No invented claims introduced. No testimonials, ratings, or reviews — the Google Reviews module still renders the neutral trust fallback until verified data lands. No Review/AggregateRating JSON-LD. Accessibility preserved: yellow CTA text contrast ≥ 4.5:1 (dark on yellow), blue CTA ≥ 4.5:1, focus ring still visible globally.

## 2026-05-20 — Google Reviews module (cards + carousel + neutral fallback)

- type: feat
- author: Sirius Systems / Claude Code
- changes: Built the Google Business Profile reviews module — reusable components plus a single gating layer that guarantees no fabricated review data can render.
  - **Data layer**: `data/google-reviews.json` ships with `verified: false` and an empty `reviews` array. `lib/google-reviews.ts` wraps the file with strict accessors (`hasVerifiedReviews()`, `getVerifiedReviews()`, `getSummary()`, `getPlaceUrl()`). A review only renders when both the top-level `verified` flag is true AND every review object carries `verified: true` + `permissionToPublish: true`. The `Review` type literally types those fields as `true` rather than `boolean`, so accidentally-permissioned data trips TypeScript.
  - **Components** (`components/reviews/`): `GoogleReviewCard` (avatar initial, name, date, 5-star scale, body, "Google" source label, optional view-on-Google link); `GoogleReviewsGrid` (sm/md/lg responsive); `GoogleReviewsCarousel` (`'use client'`, native CSS scroll-snap + touch swipe + arrow-key scrolling + ARIA carousel/slide roles + Prev/Next buttons; no auto-advance; reduced-motion safe); `GoogleReviewSummary` (compact aggregate card — avg rating, count, last-updated, view-on-Google link); `GoogleReviewsSection` (orchestrator with `variant: 'grid' | 'carousel'`, falls back to a positive `NeutralTrustFallback` block when no verified reviews exist).
  - **No invented data**: the neutral fallback is a real on-brand statement — "We don't show reviews until they're real, verified, and the reviewer has agreed to be quoted" — with a direct link to the live GBP. No "Loading...", no placeholder reviews, no fake stars.
  - **No schema yet**: no Review or AggregateRating JSON-LD is emitted by these components. Per `docs/seo/schema-plan.md` §8 those only ship once Place ID is confirmed (content-needed 2.8) and the verification process is approved.
  - **Wired into home page**: new section "06 / What people say" between Reputation deep dive and Who-we-help. Currently renders the neutral trust fallback. Downstream section indices renumbered (Who we help → 07, Why Sirius → 08, Process → 09, FAQ → 10) and alternating surface backgrounds adjusted to keep the page rhythm.
- files: `data/google-reviews.json`, `lib/google-reviews.ts`, `components/reviews/{GoogleReviewCard,GoogleReviewsGrid,GoogleReviewsCarousel,GoogleReviewSummary,GoogleReviewsSection}.tsx`, `app/page.tsx`
- notes: When real reviews are ready, the only changes needed are (a) populate `data/google-reviews.json` with `verified: true`, real summary fields, and real review objects each marked `verified: true` + `permissionToPublish: true`; (b) confirm Place ID (content-needed 2.8); (c) optionally enable Review/AggregateRating JSON-LD per `schema-plan.md` §8 once the verification path is documented. The components, fallback, and orchestrator do not need to change.

## 2026-05-20 — Phase 2: core pages built (/, /about, /services, /contact)

- type: feat
- author: Sirius Systems / Claude Code
- changes: Built the four core pages on the existing Next.js scaffold per `docs/content/page-copy-plan.md` and the Phase 2 brief. Two-column hero pattern with right-side CTA card on home/about/services and a real lead-capture form (disabled until endpoint lands) on /contact. Editorial section markers (`SectionLabel`: "00 / Section name") give the pages a magazine-like rhythm. Dark, dot-grid + radial-glow atmosphere with sky-blue accent — distinct from generic AI-startup aesthetics.
  - Typography refresh: swapped placeholder font from Inter-only to **Bricolage Grotesque (display) + Inter (body)** via `next/font/google`. Updated `brand-guide.md` §4 to match.
  - Theme additions: `surface` + `surface-2` colors for elevated card panels; `border-strong` token; `bg-grid-dots` / `bg-grid-faint` background utilities; `glow-accent` radial; CSS-only noise texture; `tracking-eyebrow` letter-spacing; `container-page` widened to `max-w-7xl` per the brief ("expanded container width so the layout does not feel bunched").
  - Component library (`components/site/`): `SectionLabel`, `ConstellationGlyph` (CSS-only abstract glyph used as the image placeholder on service/category cards — 6 variants, no asset requests), `ServiceCard`, `CategoryCard`, `CTACard`, `CTASection`, `FAQ` (native `<details>` for a11y + no-JS), `ProcessStep`, `IndustryChip`, `JsonLdScript`.
  - Data: `lib/services.ts` (canonical 14 services + 4 groups), `lib/industries.ts` (6 industries), `lib/faq.ts` (real Q/A for home + contact — visible content matches the FAQPage JSON-LD), `lib/schema.ts` (helpers for WebPage / BreadcrumbList / FAQPage; no AggregateRating / Review / LocalBusiness per `do-not-invent-rules.md` + Phase 2 schema scope).
  - Header upgraded with active-route indicator (accent underline on the current section) and a primary "Book a call" CTA. Footer rebuilt with 4 columns (Brand / Services / Industries / Company), real social links from `verified-public-sources.md`, and a TODO marker for the legal business name (content-needed 1.4).
  - All "do-not-invent" rules honored. No testimonials, no logo strip, no metric counters, no fake reviews, no invented case studies. Phone, email, founder bio, and legal name appear as explicit "Pending confirmation" placeholders rather than fabrications.
  - Schema emitted: `WebPage` on all 4 pages. `BreadcrumbList` on /about, /services, /contact. `FAQPage` on / and /contact (questions match visible body content 1:1).
- files: `app/{layout,page,globals.css}`, `app/{about,services,contact}/page.tsx`, `tailwind.config.ts`, `components/site/{Header,Footer,SectionLabel,ConstellationGlyph,ServiceCard,CategoryCard,CTACard,CTASection,FAQ,ProcessStep,IndustryChip,JsonLdScript}.tsx`, `lib/{services,industries,faq,schema}.ts`, `docs/brand/brand-guide.md`, `README.md`
- notes: Internal links to Phase 3 routes (`/ai-automation`, `/reputation-management`, all 14 service pages, all 6 industry pages, `/privacy`, `/terms`) currently 404 — these are "planned routes" per the spec. Form submit is disabled until `LEAD_FORM_ENDPOINT` is provided (content-needed 2.5). Phone, email, legal name, founder bio, headshot, real positioning line, and brand color/font choices are still blocked on items 1.1, 1.2, 1.4, 1.6–1.8, 1.11, 1.12 in `content-needed-from-client.md`.

## 2026-05-20 — Docs refinement: smart-websites cluster placement + scaffold-doc sync

- type: docs
- author: Sirius Systems / Claude Code
- changes: Cross-doc consistency pass after the scaffold landed. Fixed three issues:
  1. `brand-guide.md` §3 referenced a `// TODO color` code-comment convention, but the scaffold actually uses `PLACEHOLDER` as the marker — updated the guide to match the code so search-and-replace finds every swap point.
  2. Moved `/smart-websites` from Pillar 1 (AI automation) to Pillar 3 in `topical-authority-plan.md` so its cluster placement matches `site-build-plan.md`, `internal-linking-plan.md`, `page-copy-plan.md`, and `url-strategy.md` (all of which put `/smart-websites` in Group B with local SEO + GBP). Renamed Pillar 3 / Cluster C to "Smart websites + Local SEO + AEO + GBP". Adjusted hub-and-spoke ASCII diagram (3 hubs in Pillar 3, not 2). Moved the "Smart website vs. brochure site" blog post from Cluster A to Cluster C in both `topical-authority-plan.md` and `blog-content-plan.md`.
  3. Added an explicit naming note to `topical-authority-plan.md` calling out that Cluster A/B/C letters in the SEO taxonomy do NOT all match Group A/B/C letters in the service-page UI taxonomy — and giving the exact mapping so readers don't get tripped up.
- files: `docs/brand/brand-guide.md`, `docs/seo/topical-authority-plan.md`, `docs/seo/blog-strategy.md`, `docs/content/blog-content-plan.md`
- notes: Brand-name spelling audited clean (no "Sirius System" / "SiriusSystems" variants). All 14 service slugs and all 6 industry slugs verified consistent across docs. No invented claims introduced or removed.

## 2026-05-20 — Next.js scaffold + global shell

- type: feat
- author: Sirius Systems / Claude Code
- changes: Scaffolded the Next.js App Router project. Added `package.json` (Next 15 + React 19 + TypeScript + Tailwind 3 + MDX + lucide + clsx/tailwind-merge), `tsconfig.json`, `next.config.mjs` (with `@next/mdx`), `tailwind.config.ts` (brand tokens — placeholder colors/fonts per brand-guide), `postcss.config.mjs`, `mdx-components.tsx`. Built the global shell: `app/layout.tsx` (with Inter as placeholder display font, skip-link, metadata, viewport), `app/page.tsx` (placeholder home), `app/not-found.tsx` (404 matching brand). Stub components: `Header`, `Footer`, `Container`, `Section`. Lib: `lib/site.ts` (single source of site constants — name, url, founder, social, ecosystem siblings), `lib/cn.ts` (tailwind-merge helper). DX: `.editorconfig` + `.gitattributes` to enforce LF line endings cross-platform. `.gitignore` updated for `*.tsbuildinfo` and `next-env.d.ts`.
- files: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `mdx-components.tsx`, `app/{layout,page,not-found}.tsx`, `app/globals.css`, `components/site/{Header,Footer,Container,Section}.tsx`, `lib/{cn,site}.ts`, `.editorconfig`, `.gitattributes`, `.gitignore`, `README.md`
- notes: `npm install` and build verification have NOT been run from this scaffold yet (no node_modules generated this session). Phase 2 (page content) starts with `npm install && npm run dev` then a smoke test. Brand color + font values are explicit `PLACEHOLDER` — every appearance is searchable, swap when client confirms items 1.6–1.8.

## 2026-05-20 — Site OS foundation docs populated

- type: docs
- author: Sirius Systems / Claude Code
- changes: Populated the full Site Master OS documentation foundation — README, brand snapshot, all docs/site-os/inputs/, all docs/seo/, all docs/brand/, all docs/content/, prelaunch checklist, prompt templates. No code yet.
- files: `README.md`, `brand.md`, `.env.example`, `docs/**/*.md`
- notes: Twelve client-blocker items logged in `docs/site-os/inputs/content-needed-from-client.md` (phone, email, service area, legal name, logo files, colors, type, privacy, terms, founder bio, positioning line). Build cannot proceed past Phase 0 until these resolve. Reference-site separation (ClickVSG, Sirius Site Studio, Review Scraper) recorded as ecosystem inspiration only — they are NOT to be presented as Sirius Systems on this site.

## 2026-05-20 — Repository initialized

- type: chore
- author: Sedrick Harris
- changes: Created GitHub repo, cloned locally, scaffolded directory structure (`docs/site-os/`, `docs/seo/`, `docs/brand/`, `docs/content/`, `content/blog/`, `public/images/blog/`), added .gitignore for Claude local settings + standard Node/build artifacts.
- files: repository scaffolding
- notes: Initial root commit pushed to `origin/main`.
