# Site Build Plan — Sirius Systems

The master plan that drives the build. Everything else in `/docs` either feeds into this plan or executes against it.

---

## 1. Site goals (in priority order)

1. **Convert qualified local-service business visitors into booked discovery calls.**
2. **Establish topical authority** for AI automation + reputation systems for local businesses (drives organic acquisition).
3. **Showcase the "all-in-one growth system" positioning** so visitors don't perceive Sirius Systems as a one-trick agency.
4. **Be live and trustworthy on day one** — no placeholder copy, no fake proof, no broken pages.

## 2. Target audience

Primary: **owner-operators of local service businesses** in the five confirmed industry hubs (home services, contractors, professional services, auto services, beauty and wellness). Typically:

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

### Industry (6)
- `/industries`
- `/industries/home-services`
- `/industries/contractors`
- `/industries/professional-services`
- `/industries/auto-services`
- `/industries/beauty-wellness`

### Blog (system)
- `/blog`
- `/blog/[slug]`

### Utility (required for trust + legal)
- `/privacy`
- `/terms`

**Total Phase 1 pages:** 4 + 14 + 6 + (blog index + N posts) + 2 = **~26 static routes + blog posts**

## 5. Phase plan

### Phase 0 — Site OS foundation (THIS PHASE)
- Populate every doc in `/docs/`
- Capture confirmed facts + flag unknowns
- Lock the URL strategy, schema plan, topical authority map
- Output: this set of docs, reviewable before code is written

### Phase 1 — Next.js scaffold + global shell
- `next@latest` with App Router, TypeScript, Tailwind, MDX
- Layout, header, footer, theme, type pairing
- 404, robots.txt, sitemap.xml stubs
- Tailwind theme tokens wired to brand colors (placeholders until client confirms)

### Phase 2 — Core pages
- `/`, `/about`, `/services`, `/contact`
- Lead capture form (stub → wired once endpoint provided)

### Phase 3 — Service pages
- 14 service pages, one MDX/TSX file each
- Consistent template: hero → problem framing → how it works → outcomes → cross-links → CTA
- Schema.org `Service` JSON-LD on each

### Phase 4 — Industry pages
- 1 index + 5 industry hub pages
- Each maps which services apply, with internal links

### Phase 5 — Blog system
- `/blog` index + `/blog/[slug]` dynamic
- MDX in `content/blog/`, util in `lib/blog.ts`
- Categories, tags, author, dates, reading time, featured image
- `Article` schema per post
- 3–5 launch posts published

### Phase 6 — Prelaunch QA
- Run `docs/site-os/qa/prelaunch-checklist.md` end to end
- Lighthouse, schema validator, broken-link sweep, mobile passes
- Final do-not-invent audit

### Phase 7 — Cloudflare Pages deploy
- DNS cutover plan (depends on whether current siriussys.io is being replaced or this is a staging clone)
- Post-launch monitoring window

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
