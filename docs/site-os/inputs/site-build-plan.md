# Site Build Plan — Sirius Systems

The master plan that drives the build. Everything else in `/docs` either feeds into this plan or executes against it.

---

## 1. Site goals (in priority order)

1. **Convert qualified local-service business visitors into booked discovery calls.**
2. **Establish topical authority** for AI automation + reputation systems for local businesses (drives organic acquisition).
3. **Showcase the "all-in-one growth system" positioning** so visitors don't perceive Sirius Systems as a one-trick agency.
4. **Be live and trustworthy on day one** — no placeholder copy, no fake proof, no broken pages.

## 2. Target audience

Primary: **owner-operators of local service businesses** in the twelve confirmed industry hubs (home services, construction & contractors, professional services, auto services, beauty & wellness, healthcare & medical practices, real estate & property services, hospitality & events, education & childcare, community/faith/nonprofit, retail & local commerce, technology & B2B services). Typically:

- $250k–$5M annual revenue
- 1–25 employees
- Stretched thin on follow-up, reviews, scheduling
- Mixed digital sophistication — assume the visitor is technical enough to know what a CRM is, but not technical enough to debug an API

Secondary: **agency partners** who might whitelabel or refer (not the primary audience; we don't restructure copy around them, but we don't alienate them).

## 3. Service architecture

14 confirmed service categories. They split into three functional groups, but the URL plan keeps them flat (one slug per service) for SEO clarity. The grouping is for navigation and internal linking, not URLs.

### Group A — AI & automation
- AI automation (`/ai-automation`)
- AI chatbots (`/ai-chatbots`)
- AI voicebots (`/ai-voicebots`)
- CRM automation (`/crm-automation`)
- Appointment booking automation (`/appointment-booking-automation`)
- Lead generation automation (`/lead-generation-automation`)

### Group B — Smart websites & local SEO
- Smart websites (`/smart-websites`)
- Google Business Profile optimization (`/google-business-profile-optimization`)
- Local SEO and AEO (`/local-seo-aeo`)

### Group C — Reputation
- Reputation management (`/reputation-management`)
- Review automation (`/review-automation`)
- AI review responses (`/ai-review-responses`)
- Competitor review benchmarking (`/competitor-review-benchmarking`)

### Capstone offer
- All-in-one business growth system (`/all-in-one-business-growth-system`) — bundles A+B+C

## 4. Page list (Phase 1 launch scope)

### Core
- `/`
- `/about`
- `/services`
- `/contact`

### Service (14)
- `/ai-automation`
- `/ai-chatbots`
- `/ai-voicebots`
- `/crm-automation`
- `/appointment-booking-automation`
- `/smart-websites`
- `/lead-generation-automation`
- `/reputation-management`
- `/review-automation`
- `/ai-review-responses`
- `/google-business-profile-optimization`
- `/local-seo-aeo`
- `/competitor-review-benchmarking`
- `/all-in-one-business-growth-system`

### Industry (13)
- `/industries`
- `/industries/home-services`
- `/industries/construction-contractors`
- `/industries/professional-services`
- `/industries/auto-services`
- `/industries/beauty-wellness`
- `/industries/healthcare-medical`
- `/industries/real-estate-property`
- `/industries/hospitality-events`
- `/industries/education-childcare`
- `/industries/community-faith-nonprofit`
- `/industries/retail-local-commerce`
- `/industries/technology-b2b`

### Blog (system)
- Deferred to a separate Claude Project — see §5 Phase 5 below. Not in Phase 1 launch scope.

### Utility (required for trust + legal)
- `/privacy`
- `/terms`

**Total Phase 1 pages:** 4 core + 14 service + 13 industry (index + 12 hubs) + 2 utility = **33 static routes minimum (excluding blog).** Latest `next build` reports 36 static routes (delta accounts for `/_not-found`, `/robots.txt`, `/sitemap.xml`).

### Redirect convention

This project uses `output: 'export'` in `next.config.mjs` for Cloudflare Pages. **All redirects must be defined in `public/_redirects`** using Cloudflare Pages redirect syntax. Do **not** use `next.config.mjs` `redirects()` — they are silently ignored under static export. Current rules ship in `public/_redirects`:

- `/industries/contractors  /industries/construction-contractors  301`

### Post-launch: Industry × Service intersection pages

Planned content layer building ~70–80 intersection pages across 4 batches.
AI depth: **Level 5 — all pages, no exceptions.**

**URL pattern:** `/industries/[hub-slug]/[service-slug]`
**Template:** `components/site/IntersectionPageTemplate.tsx`
**Per-page file:** `app/industries/[hub-slug]/[service-slug]/page.tsx`
**Schema:** WebPage + BreadcrumbList (4-item) + Service + FAQPage
**Sitemap:** each page added to `app/sitemap.ts` on the same commit it ships

| Batch | Industries | Services | Pages | Status |
|---|---|---|---|---|
| 1 | home-services, construction-contractors, beauty-wellness, healthcare-medical | reputation-management, appointment-booking-automation, ai-chatbots | 12 | **In progress** |
| 2 | professional-services, auto-services, real-estate-property, hospitality-events, technology-b2b, retail-local-commerce | reputation-management, appointment-booking-automation, ai-chatbots | 18 | Planned |
| 3 | Batch 1 hubs | review-automation, crm-automation, ai-voicebots | 12 | Planned |
| 4 | Remaining hubs | google-business-profile-optimization, lead-generation-automation, local-seo-aeo | 20–30 | Planned |

**Trigger condition for Batch 1:** All hub-page Level 5 SEO rebuilds complete. ✅ Met 2026-06-06.

## 5. Phase plan

### Phase 0 — Site OS foundation — **COMPLETE**
- Populated every doc in `/docs/`
- Captured confirmed facts, flagged unknowns
- Locked URL strategy, schema plan, topical authority map

### Phase 1 — Next.js scaffold + global shell — **COMPLETE**
- Next.js App Router + TypeScript + Tailwind + MDX scaffolded
- Layout, header, footer, theme, type pairing in place
- 404, robots.txt, sitemap.xml stubs shipping
- Tailwind theme tokens wired to brand colors

### Phase 2 — Core pages — **COMPLETE**
- `/`, `/about`, `/services`, `/contact` shipping
- Lead capture form built (see Phase 5b for the qualification-form rebuild)

### Phase 3 — Service pages — **COMPLETE (14 service pages)**
- All 14 service pages shipping with the shared `ServicePageTemplate`
- Each page emits `WebPage + BreadcrumbList + Service + FAQPage` JSON-LD
- Internal linking via `RelatedServicesGrid` and `IndustryFitStrip`

### Phase 4 — Industry pages — **COMPLETE (12 industry hubs)**
- Taxonomy expanded from 5 to 12 hubs (commit `8fa3b4a`)
- `/industries/contractors` renamed to `/industries/construction-contractors` (commit `8fa3b4a`); legacy page deleted (commit `75c5b80`)
- 301 redirect `/industries/contractors → /industries/construction-contractors` in `public/_redirects` (commit `985c918`)
- Level 5 SEO/AEO copy package rolled out for home-services, construction-contractors, healthcare-medical, real-estate-property — remaining hubs queued
- Each hub emits `WebPage + BreadcrumbList + FAQPage` JSON-LD (no Service / LocalBusiness / Organization / Review schema)

### Phase 5 — Blog system — **SKIPPED**
- Deferred to a separate Claude Project. Not in Phase 7 launch scope. Confirm launch strategy before deploy.

### Phase 5b — Qualification form rebuild — **COMPLETE**
- `QualificationForm` rebuilt (commit `dd71396`) with:
  - 12-industry selector pulled dynamically from `lib/industries.ts`
  - Conditional sub-category step (skipped when industry = `other`)
  - `book-anyway` ghost link removed from nurture path
  - Nurture confirmation state ("You're on our list.") swap replaces the lead-magnet card after the magnet button click
  - Webhook payload extended with `industry`, `subCategory`, `qualificationResult`, `score`
  - Second webhook fired on magnet button click (`source: qualification-form-magnet`)
  - Both webhook calls remain guarded by the `GHL_WEBHOOK_URL` stub literal until launch wiring

### Phase 6 — Prelaunch QA — **IN PROGRESS**
- Running `docs/site-os/qa/prelaunch-checklist.md` end to end
- Lighthouse, schema validator, broken-link sweep, mobile passes
- Final do-not-invent audit

### Phase 7 — Cloudflare Pages deploy — **COMPLETE — LIVE 2026-05-29**
- DNS cutover plan (canonical host TBD per `url-strategy.md`)
- Replace `GHL_WEBHOOK_URL` stub with live endpoint before deploy
- Post-launch monitoring window
- Verify `public/_redirects` fires the contractors 301 at the edge on the live deployment

**Live verification (2026-05-29, curl against production):** `https://siriussys.io`
serves over Cloudflare (HTTPS valid, `Server: cloudflare`); homepage `<title>` is the
59-char value; `/ai-automation` and `/industries/construction-contractors` return 200;
`/sitemap.xml` (36 `<loc>` entries) and `/robots.txt` return 200; unknown route returns
the branded 404; `/industries/contractors` 301-redirects to
`/industries/construction-contractors`. GHL webhook ships live by design (hardcoded;
env-var migration deferred). Full check log in `docs/site-os/qa/deploy-log-phase7.md`.
**Outstanding (not a launch blocker):** `www.siriussys.io` currently returns 200 instead
of a 301 to the bare apex — `url-strategy.md §2` / deploy-log §5B require
`www → https://siriussys.io` (301). Fix via a Cloudflare redirect rule. Post-launch
submissions (GSC/Bing sitemap, GBP NAP cross-check) also still pending per the deploy log.

## 6. Out of scope for Phase 1

Explicitly **not** in launch scope (can come post-launch):

- Client portal / dashboard
- Booking UI embedded directly (will link out to chosen provider)
- E-commerce checkout
- Multi-language
- Gated lead magnets behind email (Phase 1 lead magnets are open download or `none`)
- Live chat widget (revisit after launch)

## 7. Decisions still open

These will resolve as `content-needed-from-client.md` items return:

- Whether `/services` is a simple index or a richer "growth system" pitch
- Whether industry pages each link to all relevant services or only the top 3–5
- Whether testimonials section ships at all on day one (depends on real testimonials being available)
- Whether `/all-in-one-business-growth-system` includes pricing or routes to a discovery call

## 8. Dependencies between docs

```
inputs/client-discovery-notes.md ─┐
inputs/verified-public-sources.md ─┼─► site-build-plan.md ─► all build phases
inputs/content-needed-from-client.md ─┤
inputs/do-not-invent-rules.md ─────┘

seo/url-strategy.md ──────────────┐
seo/topical-authority-plan.md ────┼─► site-build-plan.md (page list + linking)
seo/internal-linking-plan.md ─────┘

brand/brand-guide.md ─────────────┐
brand/motion-guidelines.md ───────┼─► all UI work
brand/image-prompt-bank.md ───────┘

content/page-copy-plan.md ────────► service + industry + core pages
content/blog-content-plan.md ─────► blog launch
content/blog-post-template.md ────► every post
content/blog-publishing-checklist.md ─► every post before publish
```

## 9. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial plan: phase 0–7, page list locked, URL slugs aligned with brief, scope boundaries set. |
| 2026-05-20 | Industry taxonomy confirmed: 5 hubs (`home-services`, `contractors`, `professional-services`, `auto-services`, `beauty-wellness`). Deprecated `cleaning-companies`, `junk-removal`, `real-estate`, `coaches-consultants` — folded into `home-services` and `professional-services`. Total Phase 1 page count drops by 1. |
| 2026-05-23 | **Phase 4 expansion.** Industry taxonomy grew from 5 to 12 hubs (added `healthcare-medical`, `real-estate-property`, `hospitality-events`, `education-childcare`, `community-faith-nonprofit`, `retail-local-commerce`, `technology-b2b`). `contractors` renamed to `construction-contractors`; 301 redirect lives in `public/_redirects` (Cloudflare Pages convention — not `next.config.mjs.redirects()` because the project uses `output: 'export'`). Total Phase 1 page count restated as 33 minimum (excluding blog). |
| 2026-05-23 | **Phase 5 deferred** to a separate Claude Project. **Phase 5b** added and marked complete: `QualificationForm` rebuilt with 12-industry selector + conditional sub-category step, nurture path hardened (book-anyway removed, confirmation swap state added), webhook payload extended (`industry`, `subCategory`, `qualificationResult`, `score`), second webhook on magnet button click. **Phase 6** in progress. **Phase 7** pending. |
| 2026-05-23 | **Redirect convention recorded.** Static export means `next.config.mjs.redirects()` is a no-op; `public/_redirects` is the canonical place for 301/302 rules. |
| 2026-05-23 | **Post-launch intersection pages noted.** Batch 1 = home-services / construction-contractors / beauty-wellness / healthcare-medical paired with reputation-management / appointment-booking-automation / ai-chatbots. Build prompts to follow after hub Level 5 rebuilds. |
| 2026-06-06 | **Intersection page plan formalised.** URL pattern `/industries/[hub]/[service]` confirmed. AI depth set to Level 5 all pages. Template component `IntersectionPageTemplate.tsx` registered. Schema stack documented (WebPage + 4-item BreadcrumbList + Service + FAQPage). Batch 1–4 plan table expanded with page counts and status. Batch 1 trigger condition met. Post-launch section rewritten with full spec. |
| 2026-05-29 | **Phase 7 COMPLETE — site live at https://siriussys.io** on Cloudflare Pages (verified via production curl: homepage/service/industry 200, contractors 301 at edge, branded 404, sitemap 36 entries, HTTPS valid). Outstanding non-blockers: `www → apex` 301 not yet configured (www returns 200); GSC/Bing sitemap submission and GBP NAP cross-check pending. Phase 6 prelaunch QA not separately re-verified this session — deploy-log pre-deploy gate (tsc/build/artifact checks + Phase 6 metaTitle hard-FAIL resolution) is PASS. |
