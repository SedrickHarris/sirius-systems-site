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
