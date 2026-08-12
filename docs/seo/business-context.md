# Business Context

Business Name: Sirius Systems
Website: https://siriussys.io
Primary Location: [NEEDS CONFIRMATION — not found in existing strategy docs]
                  (No physical address stated anywhere; schema-plan.md explicitly
                  blocks LocalBusiness/address until client-confirmed and says
                  "Do NOT invent a physical address.")
Service Areas: National / United States — remote services.
               (content-visibility-strategy.md §7: "Sirius Systems is not a
               location-dependent business — it serves clients nationally."
               §4 Organization areaServed = "Worldwide" or "United States",
               noted "confirmed — remote services." Exact areaServed string
               (Worldwide vs United States) [NEEDS CONFIRMATION].)
Business Type: AI automation, smart-website, and reputation-systems provider /
               growth-system company for local service businesses.
               ("A growth system, not an agency layer." — /about)

## What This Business Does
Sirius Systems builds AI automation, smart websites, and reputation systems for
local service businesses, delivered as one connected growth system rather than
separate tools with manual handoffs. Positioning line (metadata-draft.md, home):
"One platform, end-to-end growth."

## Primary Services
Fourteen services, organized under three pillars (topical-authority-plan.md,
url-strategy.md):

Pillar 1 — AI Automation:
- AI Automation (/ai-automation)
- AI Chatbots (/ai-chatbots)
- AI Voicebots (/ai-voicebots)
- CRM Automation (/crm-automation)
- Appointment Booking Automation (/appointment-booking-automation)
- Lead Generation Automation (/lead-generation-automation)

Pillar 2 — Reputation Systems:
- Reputation Management (/reputation-management)
- Review Automation (/review-automation)
- AI Review Responses (/ai-review-responses)
- Competitor Review Benchmarking (/competitor-review-benchmarking)

Pillar 3 — Smart Websites + Local SEO / AEO / GBP:
- Smart Websites (/smart-websites)
- Google Business Profile Optimization (/google-business-profile-optimization)
- Local SEO & AEO (/local-seo-aeo)

Capstone:
- All-in-One Business Growth System (/all-in-one-business-growth-system)

## Primary Audience
Local service businesses — specifically owner-operators. (/about: "Owner-operators
of local service businesses.") Served across 12 industry verticals: home services,
construction & contractors, professional services, auto services, beauty & wellness,
healthcare & medical, real estate & property, hospitality & events, education &
childcare, community/faith/nonprofit, retail & local commerce, technology/B2B.

## Key Differentiators
- One connected, integrated growth system — not separate tools with manual
  handoffs, and "not an agency layer" (/about; metadata-draft.md capstone).
- Do-not-invent discipline: no fake testimonials, no inflated claims, no invented
  stats/ratings (home H2 "No fake testimonials. No inflated claims."; enforced by
  do-not-invent-rules across all docs).
- Built specifically for local service businesses (not generic/national SMB).
- End-to-end coverage: AI automation + reputation + local SEO/AEO under one operator
  ("Fourteen services. One operator. One system." — /services).
- Founder-led: [NEEDS CONFIRMATION — founder named as differentiator not stated,
  but founder identity is confirmed: Sedrick Harris, Founder (schema-plan.md,
  metadata-draft.md /about).]

## Existing Pages (summary)
route-manifest.json shows 105 routes (app router, regenerated 2026-08-12): 4 core
(/, /about, /services, /contact) + 14 flat service pages + /industries index + 12
industry hubs + 53 intersection pages (industry × service, Batches 1–2 complete)
+ blog system (/blog, /blog/:slug) + resources (/resources and its faq, checklists,
guides sub-hubs, plus the /resources/faq/ai-automation cluster) + the Growth System
product page (/plumber-growth-system) and its funnel (/book, /watch, /get-started,
/thank-you, /onboarding) + earlier conversion funnel (/booking, /revenue-leak-audit
and its /book and /thank-you steps) + utility (/privacy, /terms).

Intersection pages cover 10 of the 12 hubs. community-faith-nonprofit and
education-childcare have none yet. Per-hub counts: auto-services, hospitality-events,
professional-services, real-estate-property, technology-b2b 7 each;
retail-local-commerce 6; beauty-wellness, construction-contractors,
healthcare-medical, home-services 3 each.

Note: the manifest count is filesystem-derived and counts each dynamic route once —
/blog/:slug and /resources/faq/ai-automation/:slug are 2 manifest entries but 13
built pages, so `next build` emits 117 HTML files and the sitemap carries 109 <loc>
entries. The three-way gap is fully reconciled and expected: 117 HTML = 109 sitemap
+ /404 + 7 noindex funnel steps, and 117 = 105 manifest − 2 dynamic patterns + 13
concrete dynamic pages + /404.

The 7 funnel steps (/book, /watch, /get-started, /thank-you, /onboarding,
/revenue-leak-audit/book, /revenue-leak-audit/thank-you) are deliberately excluded
from the sitemap AND marked noindex, nofollow. Sitemap omission alone is only a
discovery hint, so both are required. Do not add any of them to app/sitemap.ts.

Note: manifest shows several pages emitting AggregateRating/Review/LocalBusiness
schema hints — cross-check against schema-plan.md gating (those types are blocked
until verified data).
