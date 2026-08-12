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

### Post-launch: Sub-vertical pages — **CONFIRMED IN SCOPE, NOT YET SPEC'D**

Sub-verticals are the specific trades listed inside each industry hub — e.g. "Tire & Wheel Shops"
inside `/industries/auto-services`. They currently render as static info cards
(`components/site/IndustrySubCard.tsx`) with no link and no badge. As of 2026-08-12 they are
**confirmed in scope for a future build phase**, superseding the earlier hub × service–only route
scope that explicitly excluded them.

This section locks in *that the phase happens* and, as of 2026-08-12, *where the pages live* —
the URL pattern is now **confirmed** (see below). No page files, templates, or schema exist yet;
only the card-data pipe has been built.

**Sub-vertical inventory (counted from the `featured` / `compact` array literals in each
`app/industries/[hub]/page.tsx`, 2026-08-12 — real counts, not estimates):**

| Hub | Featured | Compact | Total |
|---|---:|---:|---:|
| `auto-services` | 4 | 10 | 14 |
| `beauty-wellness` | 4 | 12 | 16 |
| `community-faith-nonprofit` | 4 | 8 | 12 |
| `construction-contractors` | 4 | 11 | 15 |
| `education-childcare` | 4 | 10 | 14 |
| `healthcare-medical` | 6 | 12 | 18 |
| `home-services` | 4 | 16 | 20 |
| `hospitality-events` | 4 | 9 | 13 |
| `professional-services` | 4 | 11 | 15 |
| `real-estate-property` | 5 | 10 | 15 |
| `retail-local-commerce` | 5 | 11 | 16 |
| `technology-b2b` | 4 | 11 | 15 |
| **Total (12 hubs)** | **52** | **131** | **183** |

Counts are **not** uniform across hubs — `healthcare-medical` has 6 featured (not 4) and
`real-estate-property` / `retail-local-commerce` have 5; compact ranges from 8
(`community-faith-nonprofit`) to 16 (`home-services`). Do not assume a flat 4 + N shape when
scoping the build.

**Scale note:** at one page per sub-vertical this phase is **183 pages** — more than double the
~70–80-page intersection program in the section above, and larger than the entire current site
(105 routes in `route-manifest.json`, 117 built HTML files as of 2026-08-12). Batching is
mandatory; a "build them all" prompt is not viable. See the Batch plan below.

#### URL pattern — **CONFIRMED 2026-08-12: Option B**

**`/industries/[hub]/for/[sub-vertical]`** — e.g. `/industries/auto-services/for/tire-wheel-shops`.
This is locked. The `for` segment is **reserved**: no service slug may ever be named `for`, and no
sub-vertical page may be created outside it.

The decision resolves the conflict recorded below — `/industries/[hub]/[sub-vertical]` (option A)
would have occupied the exact same URL segment position as the already-shipping intersection
pattern `/industries/[hub]/[service]` (53 such pages live today), with both as second-segment
children of a hub directory. Option B moves sub-verticals into their own reserved namespace, so the
two page families stay structurally distinguishable for breadcrumbs, sitemap grouping,
internal-linking rules, and analytics.

Consequences now settled by this choice:

- **BreadcrumbList stays 4 items** — Home → Industries → Hub → Sub-vertical. `/industries/[hub]/for`
  is a routing-only segment with no page of its own, so it gets **no crumb** and must never be
  emitted as one. Item count matches intersection pages; only the leaf `url` differs.
- **No slug de-confliction needed** between the 14 service slugs and the 183 sub-vertical slugs —
  they no longer share a namespace, in either direction, permanently.
- **Directory shape:** `app/industries/[hub]/for/[sub-vertical]/page.tsx`.

The analysis below is retained as the record of what was considered and why B won.

What was checked (2026-08-12), so the decision was made on facts:

- **No literal slug collision today.** Slugifying all 183 sub-vertical names produces zero
  matches against the 14 service slugs, zero duplicates within a hub, and zero slugs shared
  across hubs. So the routes would not physically overwrite each other right now.
- **The conflict is structural, not literal.** With both page types in one namespace, nothing in
  the URL says whether segment 2 is a service or a trade. That degrades breadcrumb generation
  (the 4-item BreadcrumbList assumes segment 2 is a service), sitemap grouping, internal-linking
  rules, and analytics segmentation. It also means every future service slug must be checked
  against 183 sub-vertical slugs forever, and vice versa.

Candidate patterns considered (historical record — **decided, do not re-open without a new entry
in §9**):

| Option | Pattern | Trade-off | Outcome |
|---|---|---|---|
| A | `/industries/[hub]/[sub-vertical]` | Shortest, best keyword adjacency. Shares the namespace with intersection pages — the conflict above. | Rejected |
| B | `/industries/[hub]/for/[sub-vertical]` | Disambiguates cleanly with a reserved segment; no collision possible. Adds a segment with no keyword value. | **CONFIRMED 2026-08-12** |
| C | `/[sub-vertical]-automation` (flat, top level) | Strong exact-match keyword targeting. Abandons hub hierarchy; pollutes the root namespace with 183 slugs. | Rejected |

**Why B won:** it is the only option that makes the two page families structurally
distinguishable, which the existing schema and linking rules depend on. The cost — one extra
segment carrying no keyword value — was judged smaller than permanently sharing a namespace
between 14 service slugs and 183 sub-vertical slugs.

#### Forward requirements (documented now, built later)

- **Template — ✅ BUILT 2026-08-12:** `components/site/SubVerticalPageTemplate.tsx`, exporting
  `SubVerticalPageTemplate` and `SubVerticalPageData`. Eight sections: deep hero (single column,
  no glass aside) → slate operating reality → light leak timeline → soft priority stack → light
  competitor band → soft FAQ → light siblings/hub → light CTA panel. Deliberately not the hub or
  intersection spine. Section counts are TypeScript tuples (3 leaks, 3 ranked services, 5 FAQs) so
  `tsc` rejects a miscounted page. See the content-brief checklist below for the per-field review
  gates. No page file uses it yet.
- **Routing architecture — CONFIRMED 2026-08-12: static directories.** Each sub-vertical ships as
  a real folder — `app/industries/[hub]/for/[sub-vertical-slug]/page.tsx`, 183 literal directories
  — **not** a dynamic `app/industries/[hub]/for/[sub-vertical]/page.tsx` route backed by
  `generateStaticParams`. In the notation used elsewhere in this section, `[hub]` and
  `[sub-vertical]` are placeholders for real slug text, never Next.js dynamic segments. Two
  reasons:
  1. **Consistency with the proven intersection convention.** All 53 live intersection pages under
     `app/industries/[hub]/[service]/` are literal static folders; there are zero bracketed
     dynamic segments anywhere under `app/industries/` (verified 2026-08-12). The only dynamic
     routes in the entire app are `app/blog/[slug]` and `app/resources/faq/ai-automation/[slug]`.
     Sub-verticals follow the pattern that already works for this content shape.
  2. **It keeps the route manifest honest.** The 2026-08-12 route-count reconciliation confirmed
     that `seo-automation/scripts/scan-routes.mjs` walks the filesystem and does **not** expand
     `generateStaticParams` — dynamic routes land in `docs/seo/route-manifest.json` as a single
     unenumerated pattern. A dynamic sub-vertical route would therefore report as **1 manifest
     entry standing in for 183 pages**, silently under-reporting the largest content phase on the
     site to every downstream SEO tool. Static directories report as 183.
- **Per-page file:** `app/industries/[hub]/for/[sub-vertical]/page.tsx` (per the confirmed pattern).
- **SEO/AEO — same bar as the service and industry pages, no exceptions:** unique H1, unique
  metaTitle and metaDescription (within the existing character limits), a direct-answer block in
  the first 1–2 paragraphs, and an FAQ section with real questions. No page ships reusing a
  sibling's copy with the trade name swapped.
- **Schema (proposed, matching the intersection-page stack):** `WebPage` + `BreadcrumbList` +
  `Service` + `FAQPage`. Nothing is emitted now — this is a plan note. Under the confirmed
  option B the BreadcrumbList is **4 items** (Home → Industries → Hub → Sub-vertical) — the
  reserved `for` segment has no page and gets no crumb.
- **Sitemap:** each page added to `app/sitemap.ts` on the same commit it ships, per existing
  convention.
- **Card wiring — ✅ DONE 2026-08-12** (this resolves the deferred TODO from
  `project-changelog.md`, 2026-05-27). `IndustryPageData.featured` / `.compact` now type as
  `{ name; blurb; href?; comingSoon? }[]`, and `IndustryPageTemplate` threads both props into
  `IndustrySubCard` on the featured and compact tiers. **The pipe exists; nothing flows through
  it.** No hub page supplies `href` or `comingSoon`, so both arrive `undefined` and every card
  across all 12 hubs still renders as a plain static card — no link, no pill, no route change.
  Populate `href` per entry only when that sub-vertical's page actually ships. The "Coming soon"
  pill is **not** to be reinstated as a blanket state — it is reserved for a sub-vertical that has
  a real href and a near-term ship date.

#### Sequencing

Run this phase **after** intersection batches 1–4 complete, not in parallel. Both phases write
into `/industries/[hub]/*` and both would touch `IndustryPageTemplate` and `app/sitemap.ts`;
running them concurrently invites route and sitemap conflicts. Override only on explicit
instruction.

#### Batch plan — 13 batches, 183 pages

Counts recounted from the live `featured` / `compact` array literals on 2026-08-12 (identical to
the earlier count that session — no hub's arrays have changed). Every batch is one build-prompt
unit.

**Sequencing rules applied, in order of precedence:**

1. **Hub priority inherits the intersection-page groups** — no new priority order was invented.
   Group A = the Batch-1 intersection hubs (`home-services`, `construction-contractors`,
   `beauty-wellness`, `healthcare-medical`). Group B = the Batch-2 hubs
   (`professional-services`, `auto-services`, `real-estate-property`, `hospitality-events`,
   `technology-b2b`, `retail-local-commerce`). Group C = the two hubs with no intersection pages
   yet (`education-childcare`, `community-faith-nonprofit`).
2. **Featured tier ships before compact within a hub.** Featured cards already carry fuller
   blurbs, so there is less content gap to close per page.
3. **Target 12–20 pages per batch**, matching the shipped intersection batches.
4. **No batch mixes hub-priority groups.** Where a group's remainder does not fill a batch, the
   batch stays small rather than borrowing from the next group.

| Batch | Group | Hub(s) | Tier | Pages | Status |
|---|---|---|---|---:|---|
| 1 | A | home-services, construction-contractors, beauty-wellness, healthcare-medical | featured | 18 | Planned |
| 2 | A | home-services | compact | 16 | Planned |
| 3 | A | healthcare-medical | compact | 12 | Planned |
| 4 | A | beauty-wellness | compact | 12 | Planned |
| 5 | A | construction-contractors | compact | 11 | Planned |
| 6 | B | professional-services, auto-services, real-estate-property | featured | 13 | Planned |
| 7 | B | hospitality-events, technology-b2b, retail-local-commerce | featured | 13 | Planned |
| 8 | B | professional-services, hospitality-events | compact | 20 | Planned |
| 9 | B | auto-services, real-estate-property | compact | 20 | Planned |
| 10 | B | technology-b2b | compact | 11 | Planned |
| 11 | B | retail-local-commerce | compact | 11 | Planned |
| 12 | C | education-childcare | mixed (4 featured + 10 compact) | 14 | Planned |
| 13 | C | community-faith-nonprofit | mixed (4 featured + 8 compact) | 12 | Planned |
| | | | **Total** | **183** | |

**Reconciliation:** Group A 18+16+12+12+11 = 69 (= 4 hubs: 20+15+16+18). Group B 13+13+20+20+11+11
= 88 (= 6 hubs: 15+14+15+13+15+16). Group C 14+12 = 26. 69+88+26 = **183**. Every sub-vertical
appears in exactly one batch; no hub's tier is split across batches.

**Notes on specific batches:**

- **Batch 1 is deliberately all-featured across all four Group A hubs.** It gives every
  top-priority hub its flagship sub-vertical pages before any hub gets its long tail, so early
  coverage is broad rather than deep in one vertical.
- **Batches 5, 10, 11 are 11 pages** — one under the 12 target. Padding them would require pulling
  from the next priority group, which rule 4 forbids. Small batch preferred over broken
  sequencing.
- **Batches 12 and 13 are mixed-tier** because each Group C hub is 12–14 pages total, which fits a
  single batch whole. Featured still builds before compact *within* the batch.
- Batch size ranges 11–20, against the intersection program's 12–30.

#### Content-brief checklist — doorway-page gate (per page, every page)

`topical-authority-plan.md` §8 forbids doorway pages. 183 pages across 12 hubs, all selling the
same 14 services and differing only by trade, is precisely the shape that produces them. The
`SubVerticalPageData` interface in `components/site/SubVerticalPageTemplate.tsx` is built to make
that hard — required fields ask for facts that differ per trade, and section counts are TypeScript
**tuples**, so `tsc` rejects a short or padded section before review. Type safety cannot judge
whether a sentence is trade-specific, though. That is what this checklist is for.

**Run this against every page before it ships. A page fails review if any box fails.**

The single controlling test, applied field by field:

> Take a sibling sub-vertical's page in the same hub. Swap its trade name for this one's. If the
> result still reads as true, the field has failed.

| # | Field | Fails review if… |
|---|---|---|
| 1 | `operatingReality.demandTrigger` | It names a generic business event ("a customer needs help") rather than the concrete thing that creates demand for this trade. A burst pipe, a hailstorm, a failed inspection, the first hot day. If two trades in the hub could share the sentence, it fails. |
| 2 | `operatingReality.urgencyWindow` | It does not commit to a length of time, or the length is the same as a sibling's. A plumbing emergency is shopped in minutes; a roof replacement over weeks. If the page does not say how long and why, it fails. |
| 3 | `operatingReality.jobRhythm` | It does not say whether the work is one-off, recurring, seasonal, or project-based, in this trade's own terms. "We help you get more customers" fails. |
| 4 | `leaks[].moment` (×3) | The moment is a generic funnel stage ("the lead comes in", "after the job"). It must name a point in **this trade's** job cycle that a practitioner would recognise. All three moments must be distinct from each other. |
| 5 | `leaks[].consequence` (×3) | It restates the moment instead of naming what it costs. Must connect to the urgency window in field 2. |
| 6 | `servicePriority` order | The three services are in the same order as a sibling page's. The ranking is the actual advice — if every trade in a hub gets the same order, the ranking is not real and the field fails. |
| 7 | `servicePriority[].why` (×3) | The reason would hold for any trade. It must explain why **this** trade fixes **this** one first, referencing its own leak from field 4. |
| 8 | `losingTo` | It says "a competitor". It must name who actually takes the job — the shop that answered first, the out-of-town storm chaser, the operator with no overhead — in terms specific to this trade. |
| 9 | `faqs` (×5) | The questions are the hub's generic questions with the trade name inserted. They must use the vocabulary a practitioner or their customer would actually type, and at least three must be answerable **only** for this trade. |
| 10 | `headline` / `subheadline` | The H1 works unchanged for a sibling trade. |
| 11 | Whole page | Fewer than **two** verifiable trade-specific nouns appear that no sibling page could use (equipment, regulation, season, certification, job step, unit of work). |
| 12 | Whole page | Any claim is invented to satisfy a box above. `do-not-invent-rules.md` outranks this checklist without exception — if a trade-specific fact is not known, the correct action is to leave the page unbuilt and raise the gap, **not** to fabricate detail that passes review. |

**Reviewer note.** Boxes 1–3 are the load-bearing ones. If `operatingReality` is genuinely
specific, the rest of the page tends to follow, because the leaks and the service ranking are
derived from it. If `operatingReality` is generic, no amount of rewriting downstream will save the
page — send it back rather than editing forward.

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

### Phase 8 — Sub-vertical pages — **CONFIRMED, URL PATTERN LOCKED — page build not started**
- Scope confirmed 2026-08-12: the 183 sub-verticals listed across the 12 industry hubs get their
  own pages. Full inventory, per-hub counts, and forward requirements in §4 "Post-launch:
  Sub-vertical pages".
- **URL pattern locked 2026-08-12: option B — `/industries/[hub]/for/[sub-vertical]`.** The `for`
  segment is reserved; it keeps sub-verticals out of the `/industries/[hub]/[service]`
  intersection namespace permanently.
- ✅ **Prep done:** `href` / `comingSoon` threaded through `IndustryPageData` →
  `IndustryPageTemplate` → `IndustrySubCard`. Pipe only — no hub page passes a value, render
  output and route count unchanged.
- ⬜ **Not started:** `SubVerticalPageTemplate.tsx`, any `app/industries/[hub]/for/*` route, any
  per-page copy, any schema, any sitemap entry.
- Sequenced after intersection batches 1–4 — not in parallel (shared `IndustryPageTemplate`,
  shared `app/sitemap.ts`).
- ⬜ **Batch plan defined 2026-08-12:** 13 batches, 11–20 pages each, all `Planned`. Full table in
  §4 "Post-launch: Sub-vertical pages" → Batch plan. No batch has started.

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
| 2026-08-12 | **Sub-vertical pages confirmed in scope — supersedes the earlier hub × service–only route scope.** Added §4 "Post-launch: Sub-vertical pages" and **Phase 8** to §5. Inventory counted from the `featured`/`compact` array literals in all 12 `app/industries/[hub]/page.tsx` files: **52 featured + 131 compact = 183 sub-verticals**; counts are uneven per hub (`healthcare-medical` 6 featured, `real-estate-property`/`retail-local-commerce` 5, compact ranges 8–16). **URL pattern left UNRESOLVED and flagged as blocking** — `/industries/[hub]/[sub-vertical]` shares a segment position with the shipping `/industries/[hub]/[service]` intersection pattern (53 pages live). Verified there is no literal slug collision today (0 matches vs the 14 service slugs, 0 in-hub duplicates, 0 cross-hub duplicates); the conflict is structural (breadcrumbs, sitemap grouping, linking rules, analytics). Options A/B/C documented for confirmation. Forward requirements recorded: `SubVerticalPageTemplate.tsx` (placeholder), unique H1 + meta + direct-answer + FAQ per page, proposed WebPage + BreadcrumbList + Service + FAQPage schema, sitemap-on-ship. Folded in the deferred sub-vertical `href` TODO from `project-changelog.md` (2026-05-27) — `href` threading through `IndustryPageData` → `IndustryPageTemplate` is now part of Phase 8 scope rather than a stray note. Sequenced after intersection batches 1–4. No application code changed by this entry. |
| 2026-08-12 | **Phase 8 template built + doorway-page gate added.** `components/site/SubVerticalPageTemplate.tsx` created (structure only, no page content). Eight-section spine, deliberately distinct from both existing templates: the hub and intersection heroes share a 1.4fr/1fr + `card-glass` layout, so this one is single-column; and where both of those cut from dark hero straight to a light definition/problem block, this one continues into a slate **operating reality** section (demand trigger / urgency window / job rhythm) placed before any pitch — a sub-vertical page has to show it understands how one trade runs before selling to it. Downstream sections derive from it: leaks are timing failures inside that rhythm (3 moment→consequence pairs on a timeline, not a flat bullet grid), and `servicePriority` ranks 3 services in adoption order for that trade (not a flat RelatedServicesGrid). Doorway resistance is enforced at type level where possible — `leaks`, `servicePriority` and `faqs` are **tuples**, so `tsc` rejects a short or padded section rather than deferring it to review; required fields (`demandTrigger`, `urgencyWindow`, `jobRhythm`, `losingTo`, per-item `why`) ask for facts that differ per trade rather than rephrasings of the same claim. Added a 12-box **content-brief checklist** to §4 operationalising the rule that type safety cannot check — controlling test: swap a sibling's trade name in; if the sentence still reads as true, the field fails. Box 12 records that `do-not-invent-rules.md` outranks the checklist: an unknown trade fact means leave the page unbuilt, never fabricate to pass. Verified by building a temporary route against mock data (all 8 sections rendered, every field emitted, unknown service slug skipped without crashing, breadcrumb leaf = sub-vertical with no `for` crumb, exactly one `<h1>`), then deleting it — `tsc --noEmit` and `next build` clean, 117 HTML files unchanged. **Not touched, and still Batch 1's definition of done:** `href`/`comingSoon` values in the 18 Batch-1 hub-page entries, `app/sitemap.ts` entries, and any sub-vertical page file. |
| 2026-08-12 | **Phase 8 batch plan defined — 13 batches, 183 pages, all `Planned`.** Replaces the "batch table to be defined" placeholder. Counts recounted from the live `featured`/`compact` array literals (52 featured + 131 compact = 183, unchanged from the earlier count this session — no hub's arrays have shifted). Sequencing, in precedence order: (1) hub priority inherits the existing intersection-page groups rather than inventing a new order — Group A = Batch-1 hubs (home-services, construction-contractors, beauty-wellness, healthcare-medical, 69 pages), Group B = Batch-2 hubs (professional-services, auto-services, real-estate-property, hospitality-events, technology-b2b, retail-local-commerce, 88 pages), Group C = the two hubs with no intersection pages yet (education-childcare, community-faith-nonprofit, 26 pages); (2) featured tier before compact within a hub; (3) target 12–20 pages per batch; (4) no batch mixes priority groups. Batch 1 is all-featured across all four Group A hubs so early coverage is broad rather than deep. Batches 5/10/11 land at 11 pages — kept small rather than padded from the next group, per rule 4. Batches 12–13 are mixed-tier because each Group C hub fits a single batch whole. Also refreshed the scale note's stale "115 routes" to the current 105 manifest routes / 117 built HTML files. No page file, template, route, or schema created. |
| 2026-08-12 | **Phase 8 routing architecture CONFIRMED: static directories, not a dynamic route.** Each of the 183 sub-verticals ships as a literal folder at `app/industries/[hub]/for/[sub-vertical-slug]/page.tsx`; no `generateStaticParams`-backed `[sub-vertical]` segment. Reasons recorded in §4 Forward requirements: (1) consistency with the proven intersection convention — all 53 live intersection pages are static folders and there are zero bracketed dynamic segments anywhere under `app/industries/` (verified 2026-08-12; the app's only dynamic routes are `app/blog/[slug]` and `app/resources/faq/ai-automation/[slug]`); (2) the 2026-08-12 route-count reconciliation confirmed `seo-automation/scripts/scan-routes.mjs` walks the filesystem without expanding `generateStaticParams`, so a dynamic route would appear in `docs/seo/route-manifest.json` as 1 entry standing in for 183 pages, under-reporting the largest content phase to every downstream SEO tool. Documentation only — no file created under `app/` or `components/`. |
| 2026-08-12 | **Phase 8 URL pattern CONFIRMED: option B — `/industries/[hub]/for/[sub-vertical]`.** Resolves the blocking decision opened earlier the same day. `for` is a reserved segment: no service slug may be named `for`, and no sub-vertical page may live outside it. Options A and C retained in §4 as the record of what was considered and why B won (only option keeping the two page families structurally distinguishable; one keyword-less segment judged cheaper than permanently sharing a namespace between 14 service slugs and 183 sub-vertical slugs). Per-page file path set to `app/industries/[hub]/for/[sub-vertical]/page.tsx`. **Correction to the 2026-08-12 entry below:** BreadcrumbList under option B is **4 items** (Home → Industries → Hub → Sub-vertical), not 5 — `/industries/[hub]/for` is a routing-only segment with no page and gets no crumb. Phase 8 status changed from "BLOCKED ON URL DECISION" to "URL PATTERN LOCKED — page build not started". **Code prep (the only application change):** `IndustryPageData.featured` / `.compact` extended to `{ name; blurb; href?; comingSoon? }[]` and both props threaded through `IndustryPageTemplate` into `IndustrySubCard` on the featured and compact tiers — resolving the deferred sub-vertical `href` TODO from `project-changelog.md` (2026-05-27). Pipe only: no hub page supplies either value, so both arrive `undefined`, every sub-vertical card renders exactly as before (plain static card, no link, no pill), and the static route count is unchanged. No sub-vertical page, template, route, or schema created. |
| 2026-05-29 | **Phase 7 COMPLETE — site live at https://siriussys.io** on Cloudflare Pages (verified via production curl: homepage/service/industry 200, contractors 301 at edge, branded 404, sitemap 36 entries, HTTPS valid). Outstanding non-blockers: `www → apex` 301 not yet configured (www returns 200); GSC/Bing sitemap submission and GBP NAP cross-check pending. Phase 6 prelaunch QA not separately re-verified this session — deploy-log pre-deploy gate (tsc/build/artifact checks + Phase 6 metaTitle hard-FAIL resolution) is PASS. |
