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

## 2026-06-06 — feat: /industries/beauty-wellness/appointment-booking-automation
- type: feat
- changes: Created intersection page beauty-wellness × appointment-booking-automation.
  Level 5. Schema: WebPage + BreadcrumbList (4-item) + Service + FAQPage.
  No AggregateRating / Review / LocalBusiness schema. openGraph.images set to
  the shared /og/default.webp card. tsc clean. build clean.
  Route count: 51 → 52.
- files: app/industries/beauty-wellness/appointment-booking-automation/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaTitle 51 chars. metaDescription 151 chars (within 140–160). Copy
  superseded by the finalized Group C revision in a follow-up commit ("full
  loop" headline + "Booking automation for salons and spas — ... running
  automatically." description); earlier draft used a "calendar full —
  automatically" headline and a 160-char description, replaced before push.

## 2026-06-06 — feat: /industries/beauty-wellness/reputation-management
- type: feat
- changes: Created intersection page beauty-wellness × reputation-management.
  Level 5. Schema: WebPage + BreadcrumbList (4-item) + Service + FAQPage.
  No AggregateRating / Review / LocalBusiness schema. openGraph.images set to
  the shared /og/default.webp card. tsc clean. build clean.
  Route count: 50 → 51.
- files: app/industries/beauty-wellness/reputation-management/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaTitle 54 chars. metaDescription 153 chars (within 140–160). Copy
  superseded by the finalized Group C revision in a follow-up commit ("Salons
  and spas compete on reviews. ... tracks competitors automatically"); earlier
  draft used a "live and die by reviews / protects your chair" variant that was
  replaced before push. First page of Batch 1 Group C (beauty-wellness).

## 2026-06-06 — feat: /industries/construction-contractors/ai-chatbots
- type: feat
- changes: Created intersection page construction-contractors × ai-chatbots.
  Level 5. Schema: WebPage + BreadcrumbList (4-item) + Service + FAQPage.
  No AggregateRating / Review / LocalBusiness schema. openGraph.images set to
  the shared /og/default.webp card. tsc clean. build clean.
  Route count: 49 → 50.
- files: app/industries/construction-contractors/ai-chatbots/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaDescription shipped at 158 chars (within 140–160) using the spec's
  approved trim. metaTitle 54 chars. Completes Batch 1 Group B
  (construction-contractors); 6 of 12 Batch 1 intersection pages now built.

## 2026-06-06 — feat: /industries/construction-contractors/appointment-booking-automation
- type: feat
- changes: Created intersection page construction-contractors ×
  appointment-booking-automation. Level 5. Schema: WebPage + BreadcrumbList
  (4-item) + Service + FAQPage. No AggregateRating / Review / LocalBusiness
  schema. openGraph.images set to the shared /og/default.webp card.
  tsc clean. build clean. Route count: 48 → 49.
- files: app/industries/construction-contractors/appointment-booking-automation/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaDescription shipped at 159 chars (within 140–160) using the spec's
  approved trim. metaTitle 46 chars.

## 2026-06-06 — feat: /industries/construction-contractors/reputation-management
- type: feat
- changes: Created intersection page construction-contractors ×
  reputation-management. Level 5 copy. Schema: WebPage + BreadcrumbList
  (4-item) + Service + FAQPage. No AggregateRating / Review / LocalBusiness
  schema. openGraph.images set to the shared /og/default.webp card.
  tsc clean. build clean. Route count: 47 → 48.
- files: app/industries/construction-contractors/reputation-management/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaDescription shipped at 152 chars (within 140–160) using the spec's
  approved trim. metaTitle 37 chars. First page of Batch 1 Group B
  (construction-contractors).

## 2026-06-06 — feat: /industries/home-services/ai-chatbots
- type: feat
- changes: Created intersection page for home-services × ai-chatbots.
  Level 5 copy package. Schema: WebPage + BreadcrumbList (4-item) +
  Service + FAQPage. No AggregateRating / Review / LocalBusiness schema.
  openGraph.images set to the shared /og/default.webp card (consistent with
  the other two home-services intersection pages). tsc clean. next build
  clean. Route count: 46 → 47.
- files: app/industries/home-services/ai-chatbots/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaDescription trimmed from the spec's 171-char DATA value to 150–160
  per the spec's own instruction. Final string (151 chars): "Home service
  websites lose leads after hours. An AI chatbot qualifies visitors, answers
  service questions, and books appointments 24/7 — in your voice." Opener
  tightened ("...after hours when no one answers" → "...after hours") while
  keeping the "in your voice" differentiator. metaTitle 39 chars. This
  completes Batch 1 Group 1 (all three home-services intersection pages).

## 2026-06-06 — feat: /industries/home-services/appointment-booking-automation
- type: feat
- changes: Created intersection page for home-services ×
  appointment-booking-automation. Level 5 copy package. Schema: WebPage +
  BreadcrumbList (4-item) + Service + FAQPage. No AggregateRating / Review /
  LocalBusiness schema. openGraph.images set to the shared /og/default.webp
  card (consistent with the reputation-management page). tsc clean. next build
  clean. Route count: 45 → 46.
- files: app/industries/home-services/appointment-booking-automation/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: metaDescription shipped at 150 chars (within the 140–160 gate). The
  build spec's DATA value was 171 chars and instructed a trim; the spec's
  "157-char" approved trim actually measures 150 — used verbatim since it
  passes the gate. metaTitle 48 chars.

## 2026-06-06 — feat: /industries/home-services/reputation-management
- type: feat
- changes: Created intersection page for home-services × reputation-management.
  Level 5 copy package. Schema: WebPage + BreadcrumbList (4-item) + Service +
  FAQPage. No AggregateRating / Review / LocalBusiness schema. tsc clean.
  next build clean. Route count: 41 → 42.
- files: app/industries/home-services/reputation-management/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: Two items surfaced and resolved with the user. (1) metaDescription:
  the originally provided copy was 161 chars and a follow-up "155" fix
  actually measured 164 (both over the 140–160 gate); shipped an approved
  in-gate variant at 151 chars ("...earns reviews, responds to every one, and
  monitors your reputation automatically."). (2) og:image: added
  openGraph.images pointing to the existing shared default card
  /og/default.webp (the initially proposed /images/og/default.webp does not
  exist — that folder holds only per-page cards), so this page matches the
  site-wide og:image convention. A per-page / intersection-specific OG card
  remains a possible future enhancement.

## 2026-06-06 — feat: IntersectionPageTemplate + Batch 1 sitemap stubs

- type: feat
- changes: Created components/site/IntersectionPageTemplate.tsx — shared
  template for all industry × service intersection pages. Interface:
  IntersectionPageData with fields for hubSlug, serviceSlug, hubName,
  serviceName, eyebrow, headline, subheadline, heroHighlights,
  definitionHeadline, definition, problemHeadline, problems (4), steps
  (3-4), features (6-8), relatedServiceSlugs, faqs (5), and optional
  ctaHeadline/ctaBody/ctaPrimaryLabel/howItWorksHeadline/featuresHeadline.
  Section rhythm: S00 dark hero + glass card → S01 light definition
  (AEO border-left) → S02 soft problems (card-solid 2-col grid) → S03
  slate how-it-works (system-node steps) → S04 light features checklist
  (card-solid 3-col grid) → S05 soft related services (RelatedServicesGrid
  + hub + service links) → S06 light FAQ (native details, same array as
  FAQPage JSON-LD) → S07 light section wrapping cta-deep panel. Template
  emits no schema — schema emitted by each page file via JsonLdScript.
  Updated app/sitemap.ts STATIC_ROUTES with 12 Batch 1 intersection page
  paths at priority 0.8 / changeFrequency monthly. tsc clean. next build
  clean.
- files: components/site/IntersectionPageTemplate.tsx,
         app/sitemap.ts,
         docs/site-os/changelog/project-changelog.md
- notes: No page files created this session. All 12 Batch 1 sitemap
  entries point to routes that do not yet exist — they will 404 until
  the page files ship. This is intentional and matches the pattern used
  when industry hub routes were added to sitemap.ts before the hub pages
  were built. The template carries a 'use client' directive per the build
  spec's literal source (the sibling IndustryPageTemplate has none; the
  directive is harmless here — no client-only APIs are used — and was
  kept to match the spec exactly). Next: 12 Batch 1 page files in 4
  groups of 3.

## 2026-06-06 — docs: register intersection page pattern across Site OS docs

- type: docs
- changes: Registered the intersection page (Industry × Service) pattern
  formally across three Site OS docs.
  (1) docs/seo/url-strategy.md — new section added above Reserved/future:
  URL pattern `/industries/[hub-slug]/[service-slug]`, hub/service dependency
  rules, sitemap requirement, per-page file location, shared template
  component reference, Level 5 AI depth confirmed, Batch 1–4 plan table.
  Changelog row appended.
  (2) docs/seo/schema-plan.md — BreadcrumbList slug map extended with
  4-item intersection trail. New section 9a added: intersection page schema
  stack (WebPage + 4-item BreadcrumbList + Service + FAQPage). Blocked
  schema types listed explicitly. Changelog row appended.
  (3) docs/site-os/inputs/site-build-plan.md — post-launch intersection
  section rewritten with full spec: Level 5 AI depth, URL pattern, template,
  schema, sitemap rule, Batch 1–4 table with page counts and status, Batch 1
  trigger condition confirmed met. Changelog row appended.
  No code changes. No page files touched. tsc/build not required.
- files: docs/seo/url-strategy.md,
         docs/seo/schema-plan.md,
         docs/site-os/inputs/site-build-plan.md,
         docs/site-os/changelog/project-changelog.md

## 2026-06-06 — GitHub Actions IndexNow workflow
- type: feat
- author: Sedrick Harris
- changes: Added .github/workflows/indexnow.yml — fires on every push to main,
  waits 60 seconds for Cloudflare Pages to finish deploying, then runs
  npm run indexnow-submit to POST all site URLs to api.indexnow.org. Requires
  INDEXNOW_KEY secret set in GitHub repository settings.
- files: .github/workflows/indexnow.yml,
         docs/site-os/changelog/project-changelog.md
- notes: Companion to the prior 2026-06-06 indexnow-submit script entry.
  INDEXNOW_KEY must be added at GitHub → Settings → Secrets and variables →
  Actions before the workflow can succeed; without it the script exits 1.

## 2026-06-06 — IndexNow post-deploy submission script
- type: feat
- author: Sedrick Harris
- changes: Added scripts/indexnow-submit.ts — a post-deploy script that submits
  all static + blog URLs (35 static routes mirrored from app/sitemap.ts + 1
  published blog slug = 36 URLs) to api.indexnow.org in a single bulk POST. Key
  read from INDEXNOW_KEY env var (never hardcoded); exits with code 1 and a clear
  message if unset. STATIC_ROUTES mirrored inline and blog slugs read directly
  from content/blog/*.mdx via gray-matter, because the project's ts-node config
  does not resolve the `@/` path alias (importing app/sitemap.ts or lib/blog.ts
  would fail at runtime). Native Node fetch (Node >= 20); no axios/node-fetch.
  All documented response codes (200/202/400/403/422/429/other) handled with
  meaningful log messages. Updated package.json with indexnow-submit script.
  Added docs/site-os/indexnow-setup.md (8 sections: manual run, GitHub Actions
  wiring, Cloudflare Workers alternative outline, re-run guidance, syndication).
- files: scripts/indexnow-submit.ts, docs/site-os/indexnow-setup.md,
         package.json, docs/site-os/changelog/project-changelog.md,
         public/dcbb85c533c9491395476352f729396b.txt
- notes: No server runtime needed — script runs at deploy time only. INDEXNOW_KEY
  must be set as a GitHub Actions secret before CI wiring works. DEVIATION FROM
  SPEC: the key .txt file was in public/dcbb85/ (a subfolder), not directly in
  /public/ as the spec assumed. IndexNow scopes a key to URLs at or below the
  key file's folder, so a key at /dcbb85/<key>.txt would 422 every root URL. Per
  user decision, copied the file to public/<key>.txt (root) so it serves at
  https://siriussys.io/<key>.txt and authorizes the whole host; the dcbb85/
  original was left untouched. keyLocation is derived as SITE_URL/<key>.txt. The
  root key file must return 200 or IndexNow returns 403.

## 2026-05-31 — /competitor-review-benchmarking Level 4 SEO/AEO copy upgrade
- type: seo
- changes: Upgraded from scaffold to Level 4 (committed in 51a02fd). Updated
  metaDescription, headline (trailing period removed), subheadline (buyer
  framing, no colon separators), definition (AEO pattern, colon-as-separator
  removed), problems (4 items rewritten — contractions removed, colon
  separators replaced with plain language). PAGE.faqs expanded from 5 to 9 —
  the file's actual existing Q1-Q5 preserved byte-for-byte, 4 new
  AEO-optimized questions appended. metaTitle, eyebrow, glyphVariant, steps,
  features, outcomes, relatedSlugs, industryFit, schema block unchanged.
  docs/seo/metadata-draft.md updated. tsc clean. next build clean (41 routes).
- files: app/competitor-review-benchmarking/page.tsx,
         docs/seo/metadata-draft.md,
         docs/site-os/changelog/project-changelog.md
- notes: Two flagged deviations from the build spec, both confirmed with the
  user. (1) metaDescription: approved value was 164 chars (over the 140–160
  gate); trimmed to 156 by dropping "exactly". (2) The spec's "existing Q1-Q5"
  did not match the file's actual current 5 (spec written against a stale
  copy); per the literal "preserve byte-for-byte" instruction, kept the file's
  REAL existing 5 and appended 4 → 9. Consequence: preserved Q1-Q5 retain
  their original colon-separators/contractions; updated/new fields are clean.
  No AggregateRating / Review / LocalBusiness / Organization / Product / Offer
  schema; @type:"Review" count across app/ remains 0 (verified). canonical
  unchanged.

## 2026-05-31 — /industries/beauty-wellness Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Upgraded from Level 4 to Level 5 SEO/AEO copy (committed in
  ce3980e). H1 rewritten to sentence case, problem-first, no trailing
  punctuation, no imperative verb lead. problemHeadline em-dash replaced with
  a plain hyphen. Contractions removed throughout string fields. subheadline
  rewritten outcome-first. systemsCopy updated to client-lifecycle framing.
  Featured blurbs sharpened. Compact sub-verticals expanded from 8 to 12.
  FAQ Q2 specific interval weeks removed and replaced with setup-configured
  framing. metaTitle retained (52 chars); metaDescription updated (153 chars).
  docs/seo/metadata-draft.md updated. Schema unchanged. FAQPage JSON-LD driven
  by DATA.faqs (single source) — Question.name byte-identical to visible FAQ q.
  tsc clean. next build clean (41 routes).
- files: app/industries/beauty-wellness/page.tsx,
         docs/seo/metadata-draft.md,
         docs/site-os/changelog/project-changelog.md
- notes: No forbidden schema added. No invented stats, ratings, testimonials,
  client names, timelines, retention rates, or guarantees. FAQ Q2 states no
  specific week/day interval as a universal default. Spec deviation flagged:
  approved problemHeadline contained an em-dash, but the spec's string rules
  and gate require a plain hyphen there — used the plain hyphen per the rule.
  canonical unchanged.

## 2026-05-31 — /industries/auto-services Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Upgraded from Level 4 to Level 5 SEO/AEO copy (committed in
  fe98f21). H1 rewritten to problem-first framing, trailing punctuation
  removed. subheadline rewritten outcome-first; straight quotes only.
  systemsCopy updated to competition framing. Featured blurbs sharpened with
  mechanism language. Compact sub-verticals expanded from 2 to 10. 5 FAQs
  tightened — Q3 mileage specifics ("3 months or 3,000 miles") replaced with
  a mechanism-led answer. metaTitle updated to "Auto Shop Automation: Calls &
  Reviews | Sirius Systems" (54 chars). metaDescription set to 160 chars.
  docs/seo/metadata-draft.md updated. Schema unchanged. FAQPage JSON-LD driven
  by DATA.faqs — Question.name byte-identical to visible FAQ q.
  tsc clean. next build clean (41 routes).
- files: app/industries/auto-services/page.tsx,
         docs/seo/metadata-draft.md,
         docs/site-os/changelog/project-changelog.md
- notes: No forbidden schema added. No invented stats, ratings, testimonials,
  client names, timelines, or guarantees. metaDescription trimmed from the
  171-char approved draft to 160 to satisfy the 140–160 gate ("appointment
  booking" → "booking"; client approved). Prior Level 4 "200 more Google
  reviews" stat and the Q3 "3,000 miles" universal-default figure both
  removed. canonical unchanged.

## 2026-05-31 — /industries/professional-services Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Upgraded from Level 4 to Level 5 SEO/AEO copy (committed in
  2dc8906). Updated metaTitle ("Consultation Pipeline Automation | Sirius
  Systems", 49 chars), metaDescription (157 chars), subheadline,
  heroHighlights, systemsCopy, subVerticalsCopy, featured blurbs (mechanism
  language), compact sub-verticals expanded from 4 to 11, 5 FAQs replaced with
  AEO-optimized versions. ctaHeadline (period added) and ctaBody preserved.
  Schema unchanged. docs/seo/metadata-draft.md updated. FAQPage JSON-LD driven
  by DATA.faqs — Question.name byte-identical to visible FAQ q.
  tsc clean. next build clean (41 routes).
- files: app/industries/professional-services/page.tsx,
         docs/seo/metadata-draft.md,
         docs/site-os/changelog/project-changelog.md
- notes: No forbidden schema added. No invented stats, ratings, testimonials,
  client names, timelines, or guarantees. Law-firm FAQ explicitly states the
  chatbot does not answer legal questions or provide legal guidance. Prior
  Level 4 had a TODO-flagged CRM-integration FAQ; the Level 5 FAQ set replaces
  it (no integration/platform names invented). canonical unchanged.

## 2026-05-31 — /industries/technology-b2b Level 4 SEO/AEO copy upgrade
- type: seo
- changes: Replaced DATA object with approved Level 4 SEO/AEO copy (committed
  in e12c505). Sharpened subheadline to buyer-outcome framing, tightened
  systemsCopy and subVerticalsCopy, updated 5 FAQs to AEO direct-answer
  format, and revised the compact sub-vertical set (still 11 cards). Updated
  four featured/compact blurbs and the CTA body. metaTitle unchanged ("B2B
  Tech Services Automation: CRM & Leads | Sirius Systems", 58 chars);
  metaDescription unchanged (146 chars). Schema unchanged. FAQPage JSON-LD
  driven by DATA.faqs — Question.name byte-identical to visible FAQ q.
  tsc clean. next build clean (41 routes).
- files: app/industries/technology-b2b/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: No forbidden schema added. No invented stats, ratings, testimonials,
  client names, timelines, or guarantees. FAQ Q3 references CRM integration in
  general terms only; no specific CRM/platform names anywhere on the page
  (verified). canonical unchanged.

## 2026-05-31 — /industries/hospitality-events Level 4 SEO/AEO copy upgrade
- type: seo
- changes: Replaced DATA object with approved Level 4 SEO/AEO copy (committed
  in 6947a2a). Updated headline, subheadline, heroHighlights, problemHeadline,
  problems, systemsHeadline, systemsCopy, subVerticalsHeadline,
  subVerticalsCopy, featured blurbs, compact blurbs, 5 AEO-optimized FAQs,
  ctaHeadline, ctaBody, ctaPrimaryLabel. metaTitle changed to "Hospitality &
  Events Automation | Sirius Systems" (48 chars). metaDescription unchanged
  (151 chars). Schema unchanged. FAQPage JSON-LD driven by DATA.faqs —
  Question.name byte-identical to visible FAQ q. tsc clean. next build clean
  (41 routes).
- files: app/industries/hospitality-events/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: No forbidden schema added. No invented stats, ratings, testimonials,
  client names, timelines, guarantees, or tool names. canonical unchanged.

## 2026-05-31 — Add content visibility strategy and blog writing workflow
- type: docs
- changes: Added two new strategy documents. (1) docs/seo/content-visibility-strategy.md — master strategy covering all content visibility channels: SEO, GEO, AEO, LLM search (Perplexity, ChatGPT, Claude, Bing AI), local intent, rich results, featured snippets, PAA, Knowledge Panel, GBP, Apple Search, GSC, topical authority, customer engagement, and conversion. Defines on-page requirements, schema strategy per post type, topical authority execution order, sitemap linking as a per-post requirement, GBP content strategy, AI engine citation rules, Bing/Apple setup, GSC measurement, intent-matched CTA framework, and a full per-post visibility checklist. (2) docs/content/blog-writing-workflow.md — end-to-end 6-stage writing workflow. Adds Stage 2 (keyword research and classification) as a required step before briefing, with keyword type reference (primary, secondary, LSI, long-tail, PAA, local intent). Stage 2D defines all four internal link types: service pages, industry pages, service × industry intersection pages, and blog posts. Stage 6 cross-linking covers reciprocal blog links, intersection page gap tracking, and content plan updates. Sitemap linking quick reference rebuilt for all four link types with link count targets by post age.
- files: docs/seo/content-visibility-strategy.md, docs/content/blog-writing-workflow.md, docs/site-os/changelog/project-changelog.md

## 2026-05-30 — feat: GA4 phone-click tracking tag (GTM v2)

- type: feat
- author: Sirius Systems / Claude Code
- changes: Added phone-click conversion tracking to GTM container
  GTM-TJRT2ZHL. Created a **Phone Click** trigger (Just Links →
  Click URL contains `tel:`) and a **GA4 - Phone Click** event tag
  (event_name `phone_click`, parameter `phone_number` → `{{Click URL}}`).
  Published as container **v2 — Add phone click tag**. Container now
  carries 6 total tags: GA4 Sirius Systems (base), GA4 Sirius Systems -
  Events (generate_lead), GA4 - Qualification Complete, GA4 - Booking
  Intent (booking_page_view), GA4 - Outbound Click, GA4 - Phone Click.
- files: none (external — GTM container GTM-TJRT2ZHL only)
- notes: No repo files changed. Tag fires on any `tel:` link click;
  phone number passed via `{{Click URL}}`. `phone_click` to be starred
  as a key event in GA4 once it fires from real traffic.

## 2026-05-30 — feat: GA4 + GSC + sitemap configuration complete

- type: feat
- author: Sirius Systems / Claude Code
- changes: GA4 property **G-X98W63YHM4** confirmed receiving live event
  data — first_visit, page_view, session_start, scroll, and
  user_engagement all firing from the "Sirius Systems GA4 2024" stream.
  GA4 linked to Google Search Console. Sitemap submitted to GSC at
  https://siriussys.io/sitemap.xml. Full GTM + GA4 + GSC stack is now
  operational.
- files: none (external — GA4 / GSC / GTM consoles only)
- notes: No repo files changed. Key events still to be starred in GA4
  once they fire from real traffic: generate_lead, phone_click,
  qualification_complete, booking_page_view.

## 2026-05-30 — feat: phone number + form/booking endpoints wired live

- type: feat
- author: Sirius Systems / Claude Code
- changes: Official phone number live on the site — `(727) 222-3424`
  (`tel:+17272223424`) in `lib/site.ts`. GHL lead-form webhook endpoint
  confirmed, committed, and pushed (hardcoded as `GHL_WEBHOOK_URL` in
  `components/site/QualificationForm.tsx` per the
  ghl-webhook-hardcoded-decision; env-var migration remains a deferred
  post-launch task). Booking provider URL confirmed, committed, and
  pushed — `https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4`,
  embedded as the iframe `src` in `components/site/BookingEmbed.tsx`.
  QualificationForm is now live end-to-end with a working endpoint.
- files: lib/site.ts (phone display/href),
  components/site/QualificationForm.tsx (GHL_WEBHOOK_URL),
  components/site/BookingEmbed.tsx (booking widget iframe)
- notes: Resolves content-needed items 2.5 (lead form endpoint + auth)
  and 2.6 (booking provider + link). Phone number was already confirmed
  (item 1.1, RESOLVED 2026-05-23); this entry records it going live on
  the site. Webhook remains hardcoded by design.

## 2026-05-30 — feat: page-specific OG images for service + industry pages

- type: feat
- author: Sirius Systems / Claude Code
- changes: Added a per-page OpenGraph card to the metadata export of
  every service and industry page — 14 service pages, 12 industry
  hubs, and the industries index (27 page.tsx files), backed by 27
  new images under public/images/og/. Each openGraph block's images
  entry now points to its own card with alt = page title
  (PAGE.metaTitle for services, DATA.metaTitle for industry hubs,
  META.title for the industries index). Out-of-scope pages
  (home/about/services/contact/booking/blog/privacy/terms) keep the
  shared default card from 2026-05-29.
- files: public/images/og/*.webp (27 new),
         14 service page.tsx + 12 industry page.tsx + app/industries/page.tsx
- notes: tsc clean. next build clean (41 routes). Commit f15fd9f.
  Verified og:image resolves to the page-specific webp on all 27
  (e.g. /images/og/ai-automation.webp, /images/og/industries-home-services.webp);
  out-of-scope pages still serve /og/default.webp; no forbidden schema.
  Two deviations from the build spec, both deliberate: (1) the spec's
  "BEFORE" openGraph block had no images line, but each block already
  carried images: ['/og/default.webp'] from 0b71198 — so this REPLACES
  that line rather than adding a second images key (a duplicate property
  would be a TS1117 compile error); the default remains the fallback for
  out-of-scope pages. (2) width/height omitted (client direction) — the
  source images are ~1731×909 (correct ~1.9:1 OG ratio), not the 1200×630
  the spec pattern hardcoded, so no inaccurate dimension hints are emitted;
  platforms fetch and measure. Twitter cards untouched — they inherit
  og:image via summary_large_image, though per-page Twitter images remain
  a possible follow-up since these pages override openGraph but not twitter.

## 2026-05-29 — feat: add default OG social card + wire it site-wide

- type: feat
- author: Sirius Systems / Claude Code
- changes: Committed the default OpenGraph social card at
  public/og/default.webp (1730×909, ~1.9:1 OG ratio). NOTE: shipped
  as WebP, not the PNG/1200×630 originally specified — committed
  as-is per client direction. Wired into app/layout.tsx openGraph
  (full object: url '/og/default.webp', width 1730, height 909,
  alt '${SITE.name}: ${SITE.shortTagline}') and twitter.images,
  replacing the pre-launch TODO. Because Next.js REPLACES (not
  merges) openGraph when a page defines its own, the layout default
  does not reach pages with their own openGraph; added
  images: ['/og/default.webp'] to all 35 page-level openGraph blocks
  so og:image emits site-wide. app/blog/[slug] retains its own
  per-post image.
- files: public/og/default.webp (new),
         app/layout.tsx,
         + 35 page.tsx files (og:image propagation)
- notes: tsc clean. next build clean (41 routes). Commit 0b71198.
  Verified og:image + twitter:image on all sampled routes; blog
  post retains per-post image. Outstanding: WebP og:image is broadly
  supported but some validators prefer PNG/JPG — a 1200×630 PNG swap
  is a low-effort follow-up. No page-specific OG images for service/
  industry pages yet (post-launch candidates per image-prompt-bank.md
  §3/§4). Light/inverse logo variant still outstanding (content-needed
  1.5). Pre-launch TODO in app/layout.tsx resolved.

## 2026-05-29 — /lead-generation-automation Level 4 copy upgrade

- type: seo
- author: Sirius Systems / Claude Code
- changes: metaTitle updated ('Lead Generation Automation for
  Service Businesses | Sirius', 58 chars), metaDescription and
  openGraph.description updated to approved buyer-problem-led
  framing. subheadline, definition, and problems rewritten —
  colons-as-em-dashes replaced throughout, buyer voice
  sharpened. PAGE.faqs expanded from 5 to 10 — all 5 existing
  questions preserved, 5 new questions appended (speed-to-lead
  definition, source tracking, non-responder re-engagement,
  automation-alongside-human-sales, system-connectivity). FAQ
  count deviation from spec (spec assumed 4 existing + 5 new
  = 9; actual was 5 existing + 5 new = 10) — shipped 10 per
  direction consistent with /review-automation precedent.
  FAQPage JSON-LD = 10 questions, byte-identical to PAGE.faqs.
  metadata-draft.md updated with new title and description.
- files: app/lead-generation-automation/page.tsx,
         docs/seo/metadata-draft.md
- notes: tsc clean. next build clean (41 routes). Commit
  69d2a29. Minor pre-existing issue noted but not fixed:
  root layout applies '%s | Sirius Systems' template to page
  metaTitles, causing browser title bar to read
  '…| Sirius | Sirius Systems' on pages whose metaTitle
  already ends with '| Sirius'. og:title and the metaTitle
  field itself are correct at 58 chars. Site-wide fix is a
  one-line layout template change — queued as a separate task.

## 2026-05-27 — Fix: marquee loop hitch — measured first-half width + gap

- type: fix
- author: Sirius Systems / Claude Code
- changes: Replaced translateX(-50%) in the marquee keyframe with a
  CSS custom property --marquee-width set on mount via a useEffect.
  firstHalfRef added to the first group div; on mount, offsetWidth is
  read and the outer track's columnGap is read from
  getComputedStyle(trackRef).columnGap so the measured value includes
  the inter-half flex gap that offsetWidth alone omits.
  --marquee-width = firstHalf.offsetWidth + outerGap.
  @keyframes marquee-scroll updated:
    to { transform: translateX(calc(-1 * var(--marquee-width, 50%))); }
  The 50% fallback covers first paint before the effect fires.
  Deviation from spec documented: spec set width = offsetWidth only,
  which would have produced a 20px back-jump (worse than the original
  10px). The correct value is offsetWidth + gap. Fix is robust to any
  future gap-* change on the outer track — no magic numbers in JS.
  Math and reasoning captured in an inline comment in the component
  and in the commit body.
- files: components/reviews/GoogleReviewsMarquee.tsx,
         app/globals.css
- notes: tsc clean. next build clean (41 routes). Loop is visually
  seamless. Pause-on-hover and reduced-motion fallback unchanged.

## 2026-05-27 — Fix: review cards size to content

- type: fix
- author: Sirius Systems / Claude Code
- changes: Removed `h-full` from the `<article>` element in
  `GoogleReviewCard.tsx` (className now `"card flex flex-col p-6 md:p-7"`).
  Added `items-start` to the grid container in `GoogleReviewsGrid.tsx`
  (className now `"grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start"`).
  Previously, CSS grid row-stretching forced all cards in a row to match
  the tallest card, leaving large empty whitespace below short reviews.
  Cards now render at their natural content height. The carousel was left
  untouched — removing `h-full` from the card is safe inside the carousel
  because carousel slides are width-constrained only; cards there are now
  content-sized too, which is correct for the scroll-snap layout.
- files: components/reviews/GoogleReviewCard.tsx,
         components/reviews/GoogleReviewsGrid.tsx
- notes: tsc clean. next build clean (41 routes). Commit ca4bb15.
  No schema, data layer, or review gating logic changed.

## 2026-05-27 — Wire canonical logo
- type: feat
- author: Sirius Systems / Claude Code
- changes: Logo and favicon files wired site-wide. Canonical file
  assignments (from inventory of public/images/logos/):
    A) LOGO_DARK   = sirius-systems-star-business-name-cropped-transparent-logo.webp
                     (1080×635, transparent BG, star+wordmark lockup)
    B) LOGO_LIGHT  = NOT AVAILABLE (no light/inverse/white variant
                     present in the asset bank — flagged as outstanding
                     in content-needed-from-client.md 1.5)
    C) FAVICON_ICO = public/images/logos/favicons/favicon.ico
                     (also copied to public/favicon.ico for default
                     browser request)
    D) FAVICON_PNG = favicon-16/32/48/180/192/512 .png suite at
                     public/images/logos/favicons/
                     apple-touch = favicon-180x180.png
    E) OG_IMAGE    = NOT AVAILABLE (no /og/ dir, no wide social card)
  Header.tsx: SiriusMark placeholder did NOT exist (Header was already
  using a small 24×24 Image of /images/brand/sirius-systems-logo.webp
  plus an adjacent text wordmark span). Replaced both with a single
  Next.js Image rendering the full LOGO_DARK lockup at
  className="h-8 w-auto" (32px tall, ≥24px brand-guide minimum).
  Removed the duplicate text wordmark span since the lockup already
  contains "Sirius Systems". Added aria-label={SITE.name} to the
  wrapping Link. Footer.tsx: replaced the text wordmark
  <p>{SITE.name}</p> in the brand column with the same lockup at
  className="h-10 w-auto" (40px tall, slightly larger for the brand
  block weight), wrapped in <Link href="/"> with aria-label. Added
  `import Image from 'next/image'` to Footer.tsx (Header already had
  it). app/layout.tsx: added icons block to the metadata export
  wiring /favicon.ico (root copy) + favicons/favicon-32x32.png,
  192x192.png, 512x512.png as PNG icons + favicons/favicon-180x180.png
  as apple-touch. Added "TODO: add OG default image at public/og/
  default.png (1200×630) before launch" comment in openGraph block.
  content-needed-from-client.md item 1.5 marked RESOLVED 2026-05-27
  with actual filenames and outstanding gaps documented. SiriusMark
  component: did not exist; nothing deleted. The legacy file
  /images/brand/sirius-systems-logo.webp is no longer referenced and
  can be deleted in a future cleanup if desired (left in place to
  avoid expanding scope). tsc clean. next build clean (41 routes,
  /_not-found still prerendered).
- files: public/favicon.ico (new — copy of favicons/favicon.ico),
         public/images/logos/ (new — 9 PNG/WEBP lockup variants +
         favicons/ subdirectory with 6 PNG sizes + 1 ICO),
         components/site/Header.tsx,
         components/site/Footer.tsx,
         app/layout.tsx,
         docs/site-os/inputs/content-needed-from-client.md,
         docs/site-os/changelog/project-changelog.md
- notes: VS Code audit "Recommended pre-deploy actions" item #4
  (public/images/logos/ decision) is now resolved. Outstanding asset
  TODOs remaining for launch: (a) light/inverse logo variant for
  light-canvas contexts, (b) 1200×630 OG default social card. Neither
  blocks Phase 7 — both are noted in the file and in content-needed.
  No invented alt text; alt="Sirius Systems" matches the brand name
  exactly. Brand-guide §5 minimum-size rule honored (header 32px ≥
  24px minimum).

---

## 2026-05-27 — Fix: 404 blog link + QA scripts committed
- type: fix
- author: Sirius Systems / Claude Code
- changes: Resolved stale TODO in app/not-found.tsx — blog shipped
  2026-05-27 so the TODO comment and the /contact href placeholder are
  replaced with four navigation options: home, services, industries,
  blog, contact us. No other changes to the 404 page (H1, eyebrow,
  metadata export, and Section wrapper untouched). Also committed the
  previously untracked QA utility script scripts/qa-metadata-audit.mjs
  (metadata length audit helper from the VS Code audit session). Note:
  scripts/qa-phase6-checks.mjs was already committed as 9d7cdc9 during
  the VS Code project audit run earlier today; this commit only adds
  qa-metadata-audit.mjs to fully resolve the audit report's
  scripts/-untracked items. tsc clean. next build clean (41 routes,
  /blog and /blog/welcome both still prerendering as static).
- files: app/not-found.tsx,
         scripts/qa-metadata-audit.mjs,
         docs/site-os/changelog/project-changelog.md
- notes: VS Code audit items resolved (not-found TODO + both scripts/
  helpers tracked). Remaining pre-Phase 7 decisions: logo variants
  (public/images/logos/ — 9 untracked files), GHL_WEBHOOK_URL env-var
  migration (post-launch candidate). The 5 orphaned components in
  components/site/ (CategoryCard, Container, CTACard, CTASection,
  HowItWorksSteps) and the 4 industry-page TODOs gated on client CRM
  confirmation remain informational, not Phase 7 blockers.

---

## 2026-05-27 — /industries/hospitality-events Level 4 copy rewrite
- type: seo
- author: Sirius Systems / Claude Code
- changes: Replaced scaffold DATA object with approved Level 4 SEO/AEO copy
  package. Updated metaTitle (58 chars — trimmed from the 68-char overage
  flagged in Phase 6 QA; user supplied the corrected trim mid-task after
  the originally supplied "approved" title still measured 68 chars),
  metaDescription (151 chars), headline, subheadline, heroHighlights,
  problemHeadline, problems, systemsHeadline, systemsCopy,
  subVerticalsHeadline, subVerticalsCopy, 4 featured + 9 compact
  sub-verticals, 5 FAQs, ctaHeadline, ctaBody, ctaPrimaryLabel. Removed
  TODO comment on booking platforms FAQ — replaced with honest scoped
  answer in FAQ 5 ("Do you work with solo event planners and small
  venues, or only larger operations?"). Schema block (webPage,
  breadcrumbList, faqPage) unchanged. FAQPage Question.name strings
  remain byte-identical with the visible faqs[].q strings via the
  shared DATA.faqs reference. tsc clean. next build clean (41 routes).
- files: app/industries/hospitality-events/page.tsx,
         docs/site-os/changelog/project-changelog.md
- notes: This commit resolves the Phase 6 QA metaTitle overage for this
  page (previously 68 chars, now 58). Final metaTitle:
  "Hospitality Automation: Booking & Reviews | Sirius Systems". No
  AggregateRating / Review / LocalBusiness / Organization / Product /
  Offer schema. No invented stats, ratings, testimonials, guarantees,
  or named platform claims. Do-not-invent rules honored throughout.

---

## 2026-05-27 — VS Code project audit (pre-Phase 7)
- type: audit
- author: Sirius Systems / Claude Code
- changes: Full pre-deploy project audit across 11 sections — TypeScript
  integrity, build integrity, dependency vulnerabilities, orphaned files,
  environment variables, console artifacts and TODOs, image assets,
  next.config.mjs, Tailwind config, open TODO tracker, git status.
  tsc clean (0 errors). next build clean (41 routes prerendered).
  npm audit --audit-level=high exits 0 (6 moderate findings via
  postcss/uuid transitive chains — informational, below gate threshold).
  Auto-fixes applied: committed scripts/qa-phase6-checks.mjs as 9d7cdc9
  per the explicit "ready to commit if desired" note in the 2026-05-27
  Phase 6 QA sweep entry below. No console.* artifacts removed (the
  single console.warn in lib/blog.ts is gated on NODE_ENV === 'development'
  and is intentional dev diagnostics). No TODOs auto-removed — the one
  stale candidate (app/not-found.tsx:31, "restore href when blog ships")
  requires a copy decision, not just a comment removal. Six orphaned
  components in components/site/ flagged for human decision
  (CategoryCard, Container, CTACard, CTASection, HowItWorksSteps;
  ContactFormEmbed retained intentionally per embed-specs.md). Nine
  untracked logo variants in public/images/logos/ flagged — none
  referenced in source. The app/industries/hospitality-events/page.tsx
  unstaged Level 4 SEO rewrite was detected and flagged out of scope —
  decide commit-or-revert before Phase 7.
- files: docs/site-os/qa/vs-code-audit-report.md (new),
         docs/site-os/changelog/project-changelog.md,
         scripts/qa-phase6-checks.mjs (auto-committed 9d7cdc9)
- notes: Phase 7 deploy gate — review the "Recommended pre-deploy
  actions" section of docs/site-os/qa/vs-code-audit-report.md before
  proceeding. Inherited Phase 6 hard FAIL (homepage metaTitle at 76
  chars) is still unresolved and remains the primary blocker for the
  automated gate. Webhook submission test (M4 from Phase 6) was
  completed earlier this session against the live URL — HTTP 200 OK.

---

## 2026-05-27 — Phase 6 prelaunch QA sweep
- type: qa
- author: Sirius Systems / Claude Code
- changes: Ran full prelaunch QA sweep per docs/site-os/qa/prelaunch-checklist.md.
  Automated checks: build integrity (tsc clean, next build clean, 41 routes),
  route coverage (33/33 required Phase 1 routes present in out/), metaTitle
  lengths (38 titles scanned; 1 hard FAIL on app/page.tsx at 76 chars and
  1 KNOWN-accepted overage on /industries/hospitality-events at 68 chars),
  forbidden schema scan (0 hits across app/), do-not-invent pattern scan
  (30 hits all confirmed false positives — copy denying guarantees, common-
  English use of "results"), broken internal link scan (5 hits all template
  literals resolved against valid slug arrays), NAP consistency (7/7 fields
  match GBP-verified values in lib/site.ts), sitemap coverage (36 URLs,
  zero required missing), robots.txt (all 4 directives present),
  _redirects (contractors → construction-contractors 301 present in
  source; manual edge test pending), FAQ schema byte-identity spot
  check (5/5 sampled pages PASS — both industry DATA.faqs and service
  PAGE.faqs patterns are structurally byte-identical between visible
  FAQ block and FAQPage JSON-LD). QA report written to
  docs/site-os/qa/qa-report-phase6.md.
- files: docs/site-os/qa/qa-report-phase6.md (new),
  docs/site-os/changelog/project-changelog.md,
  scripts/qa-phase6-checks.mjs (new, untracked — left out of the QA
  commit per spec; ready to commit if desired)
- notes: Verdict NOT READY for Phase 7 — one hard FAIL (homepage metaTitle
  at 76 chars) needs user decision on trim. Three options proposed in the
  report (47-, 59-, and 52-char variants). Eight MANUAL PENDING items
  documented: Lighthouse, schema validator, mobile visual review,
  QualificationForm webhook submission test (now wired live as of
  b1b718e), footer/header link audits, 404 page test, Cloudflare
  _redirects edge test post-deploy. No AggregateRating / Review /
  LocalBusiness / Product / Offer schema present anywhere. Do-not-invent
  rules honored throughout.

---

## 2026-05-27 — /industries/technology-b2b Level 4 copy rewrite
- type: seo
- author: Sirius Systems / Claude Code
- changes: Replaced DATA object with approved Level 4 SEO/AEO copy package.
  Updated metaTitle, metaDescription, headline, subheadline, heroHighlights,
  problemHeadline, problems, systemsHeadline, systemsCopy,
  subVerticalsHeadline, subVerticalsCopy, 4 featured + 11 compact
  sub-verticals, 5 FAQs, ctaHeadline, ctaBody, ctaPrimaryLabel. Removed
  TODO comment on CRM integration FAQ — replacement FAQ addresses the
  topic without naming unconfirmed platforms. Secondary: resolved the
  cross-link TODO on the IT Consultants & MSPs compact card in
  /industries/professional-services (comment removed). Schema block
  (webPage, breadcrumbList, faqPage) unchanged on both files. tsc clean.
  next build clean.
- files: app/industries/technology-b2b/page.tsx,
  app/industries/professional-services/page.tsx,
  docs/seo/metadata-draft.md,
  docs/site-os/changelog/project-changelog.md
- notes: No AggregateRating / Review / LocalBusiness / Organization schema.
  No invented stats, ratings, testimonials, guarantees, or named platform
  claims. Do-not-invent rules honored throughout. Primary metaTitle (67)
  was over limit; used spec-provided fallback (58). On the cross-link
  TODO: `IndustrySubCard` accepts an `href` prop, but
  `IndustryPageTemplate` does not currently pass href through and
  hard-codes `comingSoon` on every sub-card — adding href to the data
  alone would not render a link. Wiring the cross-link properly would
  require extending `IndustryPageData.featured/compact` types and
  threading `href`/`comingSoon` overrides through the template, which
  affects every industry page and is out of scope for this copy task.
  TODO comment removed as the visible signal; structural change deferred.

---

## 2026-05-27 — /industries/community-faith-nonprofit Level 4 copy rewrite
- type: seo
- author: Sirius Systems / Claude Code
- changes: Replaced DATA object with approved Level 4 SEO/AEO copy package.
  Updated metaTitle (corrected from truncated "| Sirius" to full
  "| Sirius Systems" and brought under 60-char limit via the spec's
  fallback phrasing), metaDescription, headline, subheadline,
  heroHighlights, problemHeadline, problems, systemsHeadline, systemsCopy,
  subVerticalsHeadline, subVerticalsCopy, 4 featured + 8 compact
  sub-verticals, 5 FAQs, ctaHeadline, ctaBody, ctaPrimaryLabel. Removed
  both TODO comments (event platform integration, nonprofit pricing) —
  replacement FAQs address these topics honestly without referencing
  unconfirmed platforms or pricing. Schema block (webPage,
  breadcrumbList, faqPage) unchanged. tsc clean. next build clean.
- files: app/industries/community-faith-nonprofit/page.tsx,
  docs/seo/metadata-draft.md,
  docs/site-os/changelog/project-changelog.md
- notes: No AggregateRating / Review / LocalBusiness / Organization schema.
  No invented stats, ratings, testimonials, guarantees, or platform claims.
  Do-not-invent rules honored throughout. metaTitle 59 chars; description
  153 chars. Primary metaTitle 'Automation for Nonprofits, Churches &
  Community Orgs | Sirius Systems' was 69 chars; used spec-provided
  fallback as authorized.

---

## 2026-05-27 — /industries/education-childcare Level 4 copy rewrite
- type: seo
- author: Sirius Systems / Claude Code
- changes: Replaced DATA object with approved Level 4 SEO/AEO copy package.
  Updated metaTitle, metaDescription, headline, subheadline, heroHighlights,
  problemHeadline, problems, systemsHeadline, systemsCopy,
  subVerticalsHeadline, subVerticalsCopy, 4 featured + 10 compact sub-verticals,
  5 FAQs, ctaHeadline, ctaBody, ctaPrimaryLabel. Removed TODO comment on
  integration FAQ — replaced with a scoped honest answer about scaling across
  studio sizes. Schema block (webPage, breadcrumbList, faqPage) unchanged.
  tsc clean. next build clean.
- files: app/industries/education-childcare/page.tsx,
  docs/site-os/changelog/project-changelog.md
- notes: No AggregateRating / Review / LocalBusiness / Organization schema.
  No invented stats, ratings, testimonials, or guarantees. Do-not-invent
  rules honored throughout. Approved metaTitle (64 chars) and
  metaDescription (164 chars) both exceeded gate limits; user-approved
  trims applied: title → 'Enrollment Automation for Schools & Studios |
  Sirius Systems' (60); description trimmed to 145 chars by dropping
  'and training programs' phrase.

---

## 2026-05-27 — Industry hub metaTitle cleanup (4 pages)
- type: seo
- author: Sirius Systems / Claude Code
- changes: Refreshed metaTitle on 4 industry hub pages to specific,
  outcome-led versions all ≤ 60 chars.
  - construction-contractors: `Contractor Automation Systems | Sirius Systems`
    (46, generic) → `Contractor Automation: Estimates & Reviews | Sirius Systems` (59).
  - auto-services: `Auto Shop Automation: Reviews & CRM | Sirius Systems`
    (52) → `Auto Shop Automation: Booking, Reviews, CRM | Sirius Systems` (60).
  - beauty-wellness: `Salon & Spa Booking Automation | Sirius Systems`
    (48) → `Beauty & Wellness Booking & Reviews | Sirius Systems` (52).
  - healthcare-medical: `AI Automation for Medical Practices | Sirius Systems`
    (53, generic pattern) → `Medical Practice Scheduling & Reviews | Sirius Systems` (54).
  metaDescription, page copy, and schema untouched on all 4 pages.
  docs/seo/metadata-draft.md updated to match. tsc clean. next build clean.
- files: app/industries/construction-contractors/page.tsx,
  app/industries/auto-services/page.tsx,
  app/industries/beauty-wellness/page.tsx,
  app/industries/healthcare-medical/page.tsx,
  docs/seo/metadata-draft.md,
  docs/site-os/changelog/project-changelog.md
- notes: Task spec's "OLD" titles were stale — actual current titles in
  the files were already ≤ 60. Updated approved NEW phrasings each
  exceeded 60 chars on first pass (68/61/64/66) and were trimmed per
  Step 4 authority while preserving the approved outcome verbs.

## 2026-05-26 — GHL calendar iframe white strip fixed

- type: fix
- author: Sirius Systems / Claude Code
- changes: Resolved persistent white background strips
  above and below the GHL calendar widget iframe on
  /booking. Fix uses negative marginTop (-72px) and
  marginBottom (-52px) on the iframe element combined
  with overflow: hidden on the wrapper div to clip
  GHL's document whitespace outside the visible area.
  Confirmed clean on siriussys.io/booking.
  Dimensions locked in docs/site-os/inputs/embed-specs.md
  for all future builds.
- files: app/booking/page.tsx,
  docs/site-os/inputs/embed-specs.md (new)

## 2026-05-25 — GBP review fetch + curation pipeline
- type: feat
- changes: Built a two-script GBP review pipeline. `scripts/fetch-reviews.ts` handles OAuth 2.0 (local browser flow on first run with callback on `localhost:3333`, refresh-token reuse thereafter), calls `mybusinessaccountmanagement` v1 for the account ID, `mybusinessbusinessinformation` v1 for the location matching Place ID `ChIJ5_nmHI_RHi4RrYRgpNp5pWs`, and a raw `fetch` to the legacy `mybusiness.googleapis.com/v4/` reviews endpoint (Google never migrated reviews to the split APIs; `googleapis` package no longer ships a v4 client). Writes raw output to `data/google-reviews.staged.json` (gitignored). `scripts/curate-reviews.ts` is an interactive CLI using Node's built-in `readline`: walks each NEW review (skipping IDs already in `data/google-reviews.json`), accepts `[y] approve / [n] skip / [e] edit name`, and writes the merged final file with `verified: true` + `permissionToPublish: true` on approved items only. If zero reviews are approved, top-level `verified` stays `false` so the homepage renders the neutral trust fallback. `scripts/README.md` documents the full flow (first run, subsequent runs, file map, troubleshooting). `.gitignore` gains `credentials.json`, `scripts/tokens.json`, `data/google-reviews.staged.json`. `package.json` gains the two npm scripts plus deps (`googleapis`, `google-auth-library`, `ts-node`) and a `ts-node` config block (overrides the project's `esnext`/`bundler` tsconfig with `commonjs`/`node` + `transpileOnly` so `ts-node` can execute scripts without touching the main tsconfig). `data/google-reviews.json` untouched — `verified: false` until the first curation run. tsc clean. next build clean (41 static routes; spec said 39 because it was authored before the blog infra commits earlier this session).
- files: scripts/fetch-reviews.ts (new), scripts/curate-reviews.ts (new), scripts/README.md (new), .gitignore, package.json, package-lock.json, docs/site-os/changelog/project-changelog.md
- notes: `package-lock.json` gained 39 packages from the install (googleapis is a large lib with many transitive deps). Used Node's built-in `readline` module instead of the deprecated `readline` npm package the spec listed. OAuth scope: `https://www.googleapis.com/auth/business.manage`. First execution requires the user to place `credentials.json` (Desktop OAuth client from GCP Console) at the project root. GBP reviews API quota is fairly low on the legacy v4 endpoint — flagged in the README's troubleshooting section.

## 2026-05-25 — Footer: add Resources column with /blog link
- type: feat
- changes: New "Resources" column added to the sitewide footer in `components/site/Footer.tsx`, containing a single link to `/blog`. Column inserted between Industries and Company. Grid widths rebalanced from 4/3/3/2 to 4/2/2/2/2 across the 5 columns to keep the 12-column md grid clean. Column header uses the same font-mono / text-[11px] / uppercase / tracking-eyebrow / var(--text-faint) style as the other section headers. Link uses the standard transition-colors / var(--text-muted) → var(--text) hover treatment. No other footer content changed.
- files: components/site/Footer.tsx, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — Expand blog content plan to 400-topic prioritized backlog
- type: docs
- changes: Major expansion of `docs/content/blog-content-plan.md`. Integrated 400 topics from the 20-pillar topical authority map. Restructured backlog from a flat ~20-post cluster table into Tier 1 (write first, mapped to existing service pages, no flags) / Tier 2 (write after launch traction) / Tier 3 (held for editorial review behind explicit flags) / Industry Verticals (write reactively). Added editorial flag system documented in §2: 🔧 TOOL-NAME, 💰 PRICING, ⚖️ LEGAL, 🔁 OVERLAP, 📋 COMPARISON — each with a required action authors must take before drafting. Tier 1 contains 65 posts (25 AI Automation, 15 Reputation, 20 Local SEO/AEO/GBP/Smart Websites, 5 Capstone). Tier 2 contains 54 posts. Tier 3 contains 30 flagged posts held pending resolution. Industry verticals add 39 posts across Home Services, Contractors, Healthcare/Wellness/Beauty, Professional Services. Slug convention aligned with `url-strategy.md` (≤ 60 chars, kebab-case, no dates). Retired 6 topics from the original backlog (4 superseded by better versions in the new tier structure; 2 dropped outright as conflicting with positioning or too niche). Launch cohort (L1–L5) preserved with slugs added and word counts kept. 6-month editorial cadence section preserved with Tier-based language. §9 ideation guardrails preserved unchanged. No code files touched.
- files: docs/content/blog-content-plan.md, docs/site-os/changelog/project-changelog.md
- notes: Per the project changelog header rule ("Updated in the same commit as the change itself"), this entry is staged with the blog-content-plan.md change in a single docs-only commit. Step 3 of the task prompt listed only `git add docs/content/blog-content-plan.md` — I added the changelog file to the same `git add` to keep the project rule intact.

## 2026-05-25 — Install blog infrastructure (MDX, schema, routes, components)
- type: feat
- changes: Full blog infrastructure installed end-to-end. **New files:** `lib/blog.ts` (MDX engine: gray-matter frontmatter parsing, reading-time at 230 wpm, draft filtering in production, slug/category/related helpers), `lib/blog-types.ts` (client-safe types and constants — split out from `lib/blog.ts` to fix `fs` bundling into Client Component bundles), `components/blog/Callout.tsx` (info/warning/tip aside), `components/blog/CTA.tsx` (next-step card), `components/blog/FAQ.tsx` (Client Component accordion that drives FAQPage JSON-LD from the same items array), `components/blog/BlogFilter.tsx` (Client island category chips), `components/blog/PostCard.tsx` (featured + standard card variants), `app/blog/page.tsx` (blog index `/blog`), `app/blog/[slug]/page.tsx` (dynamic post route with Article + optional FAQPage JSON-LD; `dynamicParams = false` so the route only serves slugs from generateStaticParams), `content/blog/welcome.mdx` (launch announcement post — factually accurate, no invented results), `content/blog/.gitkeep`, `public/images/blog/.gitkeep`. **Modified:** `lib/schema.ts` (added `articleSchema(fm)`, QA type now defined inline), `mdx-components.tsx` (full element-mapping replacement for the previous stub), `app/sitemap.ts` (dynamic blog post entries via `getAllPosts()` + `/blog` index; `/booking` preserved in Core block during merge with the strategy-session source). **Build state:** 41 static routes (39 before + `/blog` + `/blog/welcome`). Article JSON-LD verified on `/blog/welcome`; no AggregateRating/Review/Product/Offer on any blog page. Sitemap includes `/blog` and `/blog/welcome`. tsc clean. **Known issues:** `next lint` is deprecated in Next.js 15 and prompts interactively for ESLint config migration — separate project-level concern, not caused by this work.
- files: app/blog/page.tsx (new), app/blog/[slug]/page.tsx (new), app/sitemap.ts, components/blog/BlogFilter.tsx (new), components/blog/CTA.tsx (new), components/blog/Callout.tsx (new), components/blog/FAQ.tsx (new), components/blog/PostCard.tsx (new), content/blog/.gitkeep (new), content/blog/welcome.mdx (new), lib/blog-types.ts (new), lib/blog.ts (new), lib/schema.ts, mdx-components.tsx, public/images/blog/.gitkeep (new), docs/site-os/changelog/project-changelog.md
- notes: The welcome.mdx post references `/images/blog/welcome.webp` which does not exist yet — `images: { unoptimized: true }` in next.config.mjs means the build succeeds; the runtime image will 404 until you add the file. Strategy-session source for `app/sitemap.ts` predated the `/booking` work and would have silently deleted it; merged to preserve `/booking` in Core. Strategy-session source for `lib/blog.ts` had Node.js `fs` imports at top level that bundled into Client Components via `BlogFilter` → resolved by extracting types/constants into `lib/blog-types.ts`. Strategy-session source for `mdx-components.tsx` imports `cn` from `@/lib/cn` but never uses it — left in verbatim per "do not modify" directive; may surface as a lint warning. `app/blog/page.tsx` imports `ALL_CATEGORIES` and `CATEGORY_LABELS` but doesn't use them in this file — same lint risk.

## 2026-05-25 — Add Google Tag Manager (GTM-TJRT2ZHL)
- type: feat
- changes: Google Tag Manager added to app/layout.tsx. `Script` component with `strategy="afterInteractive"` placed inside `<body>` (Next.js App Router handles head injection per strategy); `<noscript>` iframe fallback placed as first child of `<body>` immediately after the opening tag. Container ID: `GTM-TJRT2ZHL`. `Script` imported from `next/script` at top of layout. GTM-TJRT2ZHL string confirmed in built HTML (3 occurrences in `out/index.html`: script body, noscript iframe src, hydration duplicate). content-needed-from-client.md item 2.9 marked RESOLVED. No cookie banner added — flagged as post-launch if GDPR/CCPA compliance required. tsc clean. next build clean.
- files: app/layout.tsx, docs/site-os/inputs/content-needed-from-client.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — Wire Google Place ID
- type: feat
- changes: Google Place ID confirmed by client. `placeId` and `placeUrl` populated in `data/google-reviews.json`. placeId: `ChIJ5_nmHI_RHi4RrYRgpNp5pWs`. placeUrl: `https://share.google/TUgLZOpTwsYaHLaLZ`. `verified` flag remains `false`, `reviews` array remains `[]`, `summary` block remains null — neutral trust fallback still renders on homepage (`hasVerifiedReviews()` early-returns false on `verified: false`). No review data added. No AggregateRating or Review schema emitted (0 files match across `out/*.html`). content-needed-from-client.md item 2.8 marked RESOLVED. tsc clean. next build clean.
- files: data/google-reviews.json, docs/site-os/inputs/content-needed-from-client.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — Resolve client blockers: email, service area, schema
- type: feat
- changes: Confirmed client inputs applied end-to-end. Email canonical confirmed (`display: info@siriussys.io` / `href: mailto:info@inbox.siriussys.io`) — `lib/site.ts` already correct on disk, no code change. Service area confirmed as worldwide (HQ Las Vegas NV) — LocalBusiness `areaServed` updated from `{ '@type': 'State', name: 'Nevada' }` to `'Worldwide'`; `email: 'info@siriussys.io'` added to LocalBusiness block; interim TODO comment removed. `serviceSchema()` in `lib/schema.ts` gains `areaServed: 'Worldwide'` — applied automatically across all 14 service schemas via helper. TODO comment in `serviceSchema()` removed. `content-needed-from-client.md` items 1.2, 1.3, 1.5, 1.6, 1.7, 1.8, 1.11 marked RESOLVED 2026-05-25 in both the table and the status tracker (5 newly RESOLVED grouped items: 1.2, 1.3, 1.5, 1.6-1.8, 1.11). Build verification: 39 static routes, `"areaServed":"Worldwide"` present on 15 files (homepage + 14 service pages), `"email":"info@siriussys.io"` present on homepage, no forbidden schema types (AggregateRating/Review/Product/Offer) emitted anywhere. tsc clean. next build clean.
- files: app/page.tsx, lib/schema.ts, docs/site-os/inputs/content-needed-from-client.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /booking page added (GHL widget embed)
- type: feat
- changes: New `/booking` route at `app/booking/page.tsx` embedding the GoHighLevel booking widget (`link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4`) with the GHL `form_embed.js` loaded via `next/script` (strategy: afterInteractive). metadata export added (title, description, canonical /booking, openGraph). JsonLdScript block emits WebPage + BreadcrumbList. Inline hex colors replaced with brand tokens: `#0B0F14`→`var(--bg-alt)`, `#111827`→`var(--surface)`, `#F9FAFB`→`var(--text-on-dark)`, `#B6C2CF`→`var(--text-on-dark-soft)`. Note: client spec requested `--text-primary`/`--text-secondary` but those tokens do not exist in app/globals.css; nearest existing tokens substituted. `/booking` added to `app/sitemap.ts` ROUTES (priority 0.8, monthly, in Core block alongside /contact — Core count 4→5). Homepage final CTA section gains a third button "Pick a time" → /booking (btn-ghost) inserted between /contact (primary) and /services (ghost). Build route count 38→39. tsc clean. next build clean.
- files: app/booking/page.tsx (new), app/sitemap.ts, app/page.tsx, docs/site-os/changelog/project-changelog.md
- notes: Booking page styling is still raw inline styles with hardcoded sizes (fontSize 42, padding 64/20, borderRadius 28). Tokens cover colors but not typography or spacing scale — page is functionally aligned to brand palette but visually still a one-off relative to other pages built on Tailwind component classes. Consider a follow-up pass to convert to the section-* / hero-* / card-glass class system if visual consistency matters.

## 2026-05-25 — /services FAQ section + FAQPage schema
- type: seo
- changes: Added SERVICES_FAQ (5 questions) to lib/faq.ts. Added FAQ section to app/services/page.tsx consuming SERVICES_FAQ. Added faqPage(SERVICES_FAQ) to JsonLdScript data array. Schema on /services now emits WebPage + BreadcrumbList + FAQPage. Questions cover: modular-vs-full-stack entry, AI-automation-vs-CRM distinction, highest-impact starting points, three-pillar compounding explanation, GBP-and-automation connection. Visible FAQ text and FAQPage JSON-LD consume the same array — byte-identical. No layout changes beyond the new FAQ section. tsc clean. next build clean.
- files: lib/faq.ts, app/services/page.tsx, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — Homepage Level 5 SEO/AEO upgrade
- type: seo
- changes: Three-file homepage depth pass. (1) app/page.tsx metadata export: added explicit title field, rewrote description to problem-led buyer framing, added openGraph block. (2) lib/faq.ts HOME_FAQ: expanded from 5 to 9 questions — existing 5 rewritten for AEO extractability; 4 new questions added covering AI-automation definition, CRM-vs-automation distinction, reputation management explanation, and all-in-one system compounding loop. All 9 items visible in rendered HTML and match FAQPage JSON-LD exactly. (3) app/page.tsx LocalBusiness schema block: added @id anchor (/#organization forward-reference resolution), description field, and sameAs array (Facebook, GBP share link, GitHub repo) for entity grounding with AI answer engines. areaServed remains Nevada interim pending content-needed 1.3. No layout changes, no new sections, no component edits. tsc clean. next build clean.
- files: app/page.tsx, lib/faq.ts, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /all-in-one-business-growth-system Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaTitle (restored full `| Sirius Systems` suffix: `All-in-One Growth System for Local Business | Sirius` → `All-in-One Business Growth System | Sirius Systems`), metaDescription, definition (compounding-loop framing explicit: SEO → automation → review → SEO), problems (manual-handoff specificity, overhead-growth framing, incomplete-information problem). steps rewritten with deeper mechanism detail: pillar 1 expanded with full channel list, pillar 2 competitor benchmarking detail, pillar 3 AEO/AI-answer-engine layer added with ChatGPT/Perplexity examples, pillar 4 decision-information framing. outcomes rewritten with contrast framing throughout (5 items). faqs expanded from 5 to 9 (added all-in-one-vs-separate-tools mechanism detail, SEO-automation-reputation compounding-loop explanation, AEO definition and rationale, existing-tools audit approach, system-vs-agency distinction). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. Sync metadata-draft.md Description (Title was already current). No invented claims, no pricing figures, no guarantees. tsc clean. next build clean.
- files: app/all-in-one-business-growth-system/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /reputation-management Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaTitle (dropped "Local" for character count: `Reputation Management for Local Businesses | Sirius` → `Reputation Management for Service Businesses | Sirius`), metaDescription, definition (two-sentence AEO pattern with proactive-vs-crisis framing explicit), problems (consistency-vs-occasionally framing, unanswered negative review specificity, competitor-has-a-system contrast, multi-platform blind-spot detail), steps (competitive audit added as first step with benchmarking detail, acquisition timing mechanism, response workflow detail, monitoring cadence with reporting). outcomes rewritten with contrast framing throughout (5 items). faqs expanded from 5 to 9 (added why-reviews-matter-for-rankings, reputation-vs-review-automation distinction, handling-unfair-reviews, results-timeline, system-connectivity questions). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. Sync metadata-draft.md Title (also dropped "Systems" from brand suffix in metadata-draft.md to match shipped page) and Description. No AggregateRating, Review, or invented claims. tsc clean. next build clean.
- files: app/reputation-management/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /google-business-profile-optimization Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaDescription, definition (two-sentence AEO pattern with competitive liability framing explicit), problems (specificity: stale-profile, category mismatch, competitor-completeness gap, NAP conflict), steps (competitor-benchmarked audit step, NAP cross-check in core optimization, photo category detail, Q&A + maintenance integration), outcomes rewritten with contrast framing throughout (5 items). faqs expanded from 5 to 9 (added local-pack definition, Q&A explanation, GBP-posts value question, NAP trust-signal detail, results-timeline question). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. Sync metadata-draft.md Description to match shipped page (Title was already current). No invented claims, no AggregateRating, no Review schema. tsc clean. next build clean.
- files: app/google-business-profile-optimization/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /smart-websites Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaTitle (`Smart Websites for Local Service Businesses` → `Smart Websites for Service Businesses`), metaDescription, subheadline, definition (three-sentence AEO pattern with explicit local SEO foundation framing), problems (no-conversion specificity, form-inbox lag, built-wrong-first-time framing), steps (conversion-architecture step added with mechanism detail, local-SEO mechanism explicit, CRM integration timing). outcomes rewritten with contrast framing throughout (still 5 items). faqs expanded from 5 to 9 (added smart-vs-regular-website contrast, conversion-first-architecture definition, why-local-SEO-built-in explanation, build-timeline question). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. Sync metadata-draft.md Title and Description to match shipped page. No invented claims. tsc clean. next build clean.
- files: app/smart-websites/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /ai-voicebots Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaDescription, definition (two-sentence AEO pattern, no-phone-tree contrast explicit), problems (specificity + after-hours framing + inconsistent follow-up pattern), steps (call-type mapping detail, voice config mechanism, CRM handoff specifics, logging and refinement cadence), outcomes expanded from 4 to 5 (call volume scaling added), faqs expanded from 5 to 9 (added voicebot-vs-IVR contrast, voicebot-vs-missed-call-text-back distinction, setup timeline, system-connectivity question). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Also sync metadata-draft.md Title (`AI Voicebots: Never Miss a Lead Call` → `AI Voicebots for Service Businesses`) and Description to match shipped page. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. relatedSlugs gained `crm-automation`. No invented claims. tsc clean. next build clean.
- files: app/ai-voicebots/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /ai-chatbots Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaDescription, subheadline, definition (two-sentence AEO pattern), problems (specificity + time-of-day framing), steps (real-conversation audit step, qualification logic detail, monitoring cadence), outcomes (conversion rate framing added as fifth outcome), faqs expanded from 5 to 9 (added AI-chatbot-vs-live-chat, what-can-it-handle scope definition, chatbot-vs-contact-form contrast, system-connectivity question). All 9 FAQ items visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. No invented claims. tsc clean. next build clean.
- files: app/ai-chatbots/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-25 — /ai-automation Level 5 SEO/AEO copy upgrade
- type: seo
- changes: Replaced PAGE object with Level 5 copy package. Updated metaTitle, metaDescription, subheadline, definition (AEO-sharpened), problems (buyer-voice specificity), steps (mechanism depth), outcomes (competitive contrast framing), faqs expanded from 5 to 9 (added AI-vs-traditional-automation, first-tasks-to-automate, missed-call-text-back definition, automation-vs-hiring contrast, system-connectivity question). All new FAQ items are visible in rendered HTML and match FAQPage JSON-LD exactly. Schema stack unchanged: WebPage + BreadcrumbList + Service + FAQPage. No invented claims. tsc clean. next build clean.
- files: app/ai-automation/page.tsx, docs/seo/metadata-draft.md, docs/site-os/changelog/project-changelog.md

## 2026-05-23 — /privacy + /terms shipped, NAP confirmed, LocalBusiness schema added
- type: feat
- author: Sirius Systems / Claude Code
- changes: NAP details verified against the public Google Business Profile and shipped end-to-end. `app/privacy/page.tsx` and `app/terms/page.tsx` created with template-based legal copy, brand layout, and WebPage + BreadcrumbList JSON-LD. Footer updated with confirmed legal name (SHH Group dba Sirius Systems), address block (304 S Jones Blvd Ste 1915, Las Vegas, NV 89107), phone (727) 222-3424 with E.164 href, and restored /privacy + /terms links in the Company column. `lib/site.ts` SITE.contact.phone.display harmonized to spec format `(727) 222-3424`; new SITE.contact.address and SITE.contact.legal fields added. Homepage JsonLdScript array extended with a LocalBusiness block (name, legalName, url, telephone, PostalAddress, areaServed=Nevada interim). `app/sitemap.ts` restored /privacy + /terms ROUTES entries (URL count 31 → 33; build route count 36 → 38). docs/site-os/inputs/verified-public-sources.md gains a new §1a confirmed-NAP table. docs/site-os/inputs/content-needed-from-client.md marks items 1.1, 1.4, 1.9, 1.10, and 2.3 as RESOLVED 2026-05-23.
- files:
  app/privacy/page.tsx (new),
  app/terms/page.tsx (new),
  app/page.tsx,
  app/sitemap.ts,
  components/site/Footer.tsx,
  lib/site.ts,
  docs/site-os/inputs/verified-public-sources.md,
  docs/site-os/inputs/content-needed-from-client.md,
  docs/site-os/changelog/project-changelog.md
- notes: 4 launch blockers from Phase 6 QA resolved (privacy page, terms page, legal name, address+phone confirmation). Remaining Phase 6 blockers: B5b (email canonical — display `info@siriussys.io` vs href `mailto:info@inbox.siriussys.io` mismatch in `lib/site.ts` still flagged for client) and B6 (GHL_WEBHOOK_URL stub). LocalBusiness `areaServed` set to Nevada state-level as interim until content-needed item 1.3 (exact service area) resolves. tsc clean. next build clean — 38 routes.

## 2026-05-23 — /industries/beauty-wellness Level 4 copy rewrite
- type: seo
- changes: Replaced scaffold DATA object with approved Level 4 copy package. Updated metaTitle (47 chars), metaDescription (154 chars), headline, subheadline, heroHighlights, problemHeadline, problems, systemsHeadline, systemsCopy (newly populated), subVerticalsCopy (newly populated), faqs (5 new pairs focused on rebooking, no-show reduction, booking-tool augmentation, and solo-stylist scale), ctaHeadline, ctaBody, ctaPrimaryLabel ("Get a Free Audit"). serviceSlugs swap: out `smart-websites`; in `reputation-management` (page confirmed live). featured[] and compact[] preserved verbatim. Schema block (webPage, breadcrumbList, faqPage) unchanged. tsc clean. next build clean.
- files: app/industries/beauty-wellness/page.tsx, docs/site-os/changelog/project-changelog.md

## 2026-05-23 — /industries/auto-services Level 4 SEO/AEO copy rebuild
- type: seo
- changes: Replaced scaffold DATA object with approved Level 4 copy package. Updated metaTitle, metaDescription, headline, subheadline, heroHighlights, problemHeadline, problems, systemsHeadline, systemsCopy, subVerticalsHeadline, subVerticalsCopy, featured, compact, faqs, ctaHeadline, ctaBody, ctaPrimaryLabel. serviceSlugs updated from scaffold set to: reputation-management, review-automation, ai-voicebots, appointment-booking-automation, google-business-profile-optimization, crm-automation. Schema block (webPage, breadcrumbList, faqPage) unchanged. tsc clean. next build clean.
- files: app/industries/auto-services/page.tsx, docs/site-os/changelog/project-changelog.md

## 2026-05-23 — Level 4 SEO/AEO rebuild: /industries/professional-services

- type: seo
- author: Sirius Systems / Claude Code
- changes: Replaced scaffold placeholder copy in /industries/professional-services with approved Level 4 SEO/AEO copy package. New headline, subheadline, heroHighlights, 4 problem statements, systemsHeadline, systemsCopy, subVerticalsHeadline, subVerticalsCopy, 4 featured sub-vertical cards, 4 compact sub-vertical cards, 5 FAQ pairs, ctaHeadline, ctaBody, ctaPrimaryLabel. metaTitle corrected to ≤ 60 characters. metaDescription updated. Metadata draft doc updated to reflect Level 4 shipped status.
- files:
  app/industries/professional-services/page.tsx
  docs/seo/metadata-draft.md
  docs/site-os/changelog/project-changelog.md
- notes: Two TODO comments preserved in code — (1) FAQ Q4 integration list pending client confirmation, (2) IT Consultants & MSPs compact card cross-link to /industries/technology-b2b pending that hub's copy stage. Do not resolve either TODO without client input. No AggregateRating or Review schema. No invented claims.

## 2026-05-23 — /industries/construction-contractors copy update
- type: seo
- changes: Replaced DATA object with Level 5 SEO/AEO copy package. Updated metaTitle, metaDescription, headline, subheadline, heroHighlights, problems, systemsCopy, subVerticalsCopy, 4 featured + 11 compact sub-verticals, 5 FAQs, and CTA fields. Schema block unchanged: WebPage + BreadcrumbList + FAQPage. No invented stats, ratings, reviews, or guarantees. tsc clean. next build clean.
- files: app/industries/construction-contractors/page.tsx

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
