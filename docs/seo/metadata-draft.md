# Metadata Draft — Sirius Systems

Draft `<title>` and `<meta name="description">` for every Phase 1 page. These are starting points; refine in QA pass. Length targets: **title ≤ 60 chars**, **description 140–160 chars**.

> All metadata respects `do-not-invent-rules.md`. No invented ratings, results, or counts.

---

## Pattern conventions

- **Brand suffix:** `| Sirius Systems` on every page title.
- **Tone:** plain, outcome-leaning, no superlatives without proof.
- **Service pages:** `<Service> for Local Service Businesses | Sirius Systems`
- **Industry pages:** `<Industry> Marketing & Automation | Sirius Systems`
- **Blog:** `<Headline> | Sirius Systems Blog`

---

## Core pages

### `/`
- **Title:** `Sirius Systems — AI Automation, Smart Sites, Reputation Systems`
- **Description:** `Sirius Systems builds AI automation, smart websites, and reputation systems for local service businesses. One platform, end-to-end growth.`

### `/about`
- **Title:** `About Sirius Systems | Founder, Mission, Approach`
- **Description:** `Sirius Systems is built by Sedrick Harris to help local service businesses run AI automation, smart sites, and reputation systems as one growth engine.`

### `/services`
- **Title:** `Services — AI, Smart Sites & Reputation | Sirius Systems`
- **Description:** `Every service from Sirius Systems: AI chatbots and voicebots, CRM and booking automation, smart websites, reputation, review automation, local SEO and AEO.`

### `/contact`
- **Title:** `Contact Sirius Systems | Book a Discovery Call`
- **Description:** `Talk to Sirius Systems about an AI automation, smart website, or reputation system for your local service business. Book a discovery call.`

---

## Service pages

### `/ai-automation`
- **Title:** `AI Automation for Local Service Businesses | Sirius Systems`
- **Description:** `AI automation that captures leads, books jobs, and follows up — built for local service businesses, not enterprise. See how Sirius Systems sets it up.`

### `/ai-chatbots`
- **Title:** `AI Chatbots for Service Businesses | Sirius Systems`
- **Description:** `AI chatbots that answer in your voice, qualify leads, and book appointments 24/7 — connected to your CRM and calendar. Designed for service businesses.`

### `/ai-voicebots`
- **Title:** `AI Voicebots: Never Miss a Lead Call | Sirius Systems`
- **Description:** `AI voicebots that pick up missed calls, qualify the lead, and book the job — so your business runs even when you're on a roof or under a sink.`

### `/crm-automation`
- **Title:** `CRM Automation for Service Businesses | Sirius Systems`
- **Description:** `CRM automation that turns leads into booked jobs without manual follow-up — built and configured by Sirius Systems for your stack.`

### `/appointment-booking-automation`
- **Title:** `Appointment Booking Automation | Sirius Systems`
- **Description:** `Automated booking flows that go from inquiry to confirmed appointment without you in the loop — connected to your calendar, CRM, and reminders.`

### `/smart-websites`
- **Title:** `Smart Websites for Local Service Businesses | Sirius Systems`
- **Description:** `A smart website is more than a brochure — it captures, qualifies, books, and follows up. See how Sirius Systems builds them.`

### `/lead-generation-automation`
- **Title:** `Lead Generation Automation | Sirius Systems`
- **Description:** `Lead generation automation built for local service businesses — paid, organic, and referral funnels wired to your CRM and booking flow.`

### `/reputation-management`
- **Title:** `Reputation Management for Service Businesses | Sirius Systems`
- **Description:** `Reputation management that earns more reviews, handles the hard ones, and keeps your local search visibility strong. Built by Sirius Systems.`

### `/review-automation`
- **Title:** `Review Automation: Earn More Reviews on Autopilot | Sirius Systems`
- **Description:** `Review automation that asks the right customer at the right time on the right channel — without spamming or sounding scripted. Built by Sirius Systems.`

### `/ai-review-responses`
- **Title:** `AI Review Responses: On-Brand Replies at Scale | Sirius Systems`
- **Description:** `AI review responses that sound like your business, not a bot — handling positive, neutral, and tough reviews with consistent tone and policy.`

### `/google-business-profile-optimization`
- **Title:** `Google Business Profile Optimization | Sirius Systems`
- **Description:** `Google Business Profile optimization for local service businesses — NAP, categories, services, photos, posts, Q&A, and the right schema on your site.`

### `/local-seo-aeo`
- **Title:** `Local SEO & AEO for Service Businesses | Sirius Systems`
- **Description:** `Local SEO and AEO (Answer Engine Optimization) for service businesses — ranking in Google AND in AI answers like ChatGPT, Perplexity, and AI Overviews.`

### `/competitor-review-benchmarking`
- **Title:** `Competitor Review Benchmarking | Sirius Systems`
- **Description:** `See how your reviews stack up against your top local competitors — and where to push next. Competitor review benchmarking by Sirius Systems.`

### `/all-in-one-business-growth-system`
- **Title:** `All-in-One Business Growth System | Sirius Systems`
- **Description:** `Sirius Systems' all-in-one business growth system — AI automation, smart website, reputation systems, and local SEO/AEO running as one engine.`

---

## Industry pages

> **Source of truth note.** As of 2026-05-23, each industry hub page sets its own `metaTitle` / `metaDescription` inside `app/industries/<slug>/page.tsx` (via the `DATA` object passed to `IndustryPageTemplate`). The values below mirror what those pages currently export. **If a value here disagrees with the page file, the page file wins** — update this doc to match, not the other way around.

### `/industries`
- **Title:** `Industries We Serve: Local Business Automation | Sirius Systems`
- **Description:** `Sirius Systems builds AI automation, booking systems, and reputation management for local service businesses across 12 industries: home services, construction, professional services, auto, beauty, healthcare, real estate, hospitality, education, nonprofit, retail, and technology.`

### `/industries/home-services`
- **Title:** `AI Automation for Home Service Businesses | Sirius Systems`
- **Description:** `Missed-call recovery, appointment booking, and automated review requests for home service businesses: plumbers, HVAC, roofers, and 16 more trades.`

### `/industries/construction-contractors`
- **Title:** `Contractor Automation Systems | Sirius Systems`
- **Description:** `Lead follow-up, estimate automation, CRM, and review systems for general contractors, remodelers, painters, flooring companies, and specialty trades.`
- **Notes:** Renamed from `/industries/contractors` on 2026-05-23. 301 redirect from the old slug lives in `public/_redirects`.

### `/industries/professional-services`
- **Title:** `Professional Services Automation | Sirius Systems`
- **Description:** `CRM automation, consultation booking, AI chatbots, and reputation management for law firms, accounting practices, financial planners, and consultants.`
- **Notes:** Level 4 copy shipped 2026-05-23. Title 49 chars; description 150 chars. Refocused away from healthcare-style sub-verticals (those now live on `/industries/healthcare-medical`); featured set is Law/CPA/Financial Planning/Insurance, compact set is Business Consultants/Marketing & Creative Agencies/HR & Recruiting/IT Consultants & MSPs.

### `/industries/auto-services`
- **Title:** `Auto Services Automation: Booking, Reviews & CRM | Sirius Systems`
- **Description:** `Appointment booking automation, AI chatbots, review systems, and CRM for auto repair shops, detailers, tire shops, body shops, and other auto service businesses.`
- **Notes:** Pre-Level 5 copy. Pending SEO rebuild.

### `/industries/beauty-wellness`
- **Title:** `Beauty & Wellness Automation: Booking, Reviews & AI | Sirius Systems`
- **Description:** `Appointment booking automation, rebooking flows, review systems, and AI chatbots for salons, med spas, personal trainers, day spas, and other beauty and wellness businesses.`
- **Notes:** Pre-Level 5 copy. Pending SEO rebuild.

### `/industries/healthcare-medical`
- **Title:** `AI Automation for Medical Practices | Sirius Systems`
- **Description:** `Appointment automation, AI scheduling, and review systems for dental, chiropractic, physical therapy, and medical practices.`

### `/industries/real-estate-property`
- **Title:** `AI Lead Follow-Up for Real Estate Agents | Sirius Systems`
- **Description:** `Lead response automation, CRM follow-up, and review systems for real estate agents, property managers, mortgage companies, and investors.`

### `/industries/hospitality-events`
- **Title:** `Hospitality & Events Business Automation | Sirius Systems`
- **Description:** `AI automation, booking systems, and reputation management for restaurants, event venues, wedding planners, hotels, caterers, and hospitality businesses.`
- **Notes:** Initial 12-hub expansion copy. Pending Level 5 SEO rebuild.

### `/industries/education-childcare`
- **Title:** `Education & Childcare Business Automation | Sirius Systems`
- **Description:** `AI automation, enrollment follow-up, and reputation management for tutoring centers, childcare providers, music schools, martial arts studios, and training programs.`
- **Notes:** Initial 12-hub expansion copy. Pending Level 5 SEO rebuild.

### `/industries/community-faith-nonprofit`
- **Title:** `Nonprofit, Church & Community Organization Automation | Sirius Systems`
- **Description:** `Outreach automation, donor follow-up, and communication systems for churches, nonprofits, charities, membership organizations, and mission-driven businesses.`
- **Notes:** Initial 12-hub expansion copy. Pending Level 5 SEO rebuild.

### `/industries/retail-local-commerce`
- **Title:** `Retail & Local Commerce Automation | Sirius Systems`
- **Description:** `Customer follow-up, review generation, and local search visibility for retail shops, boutiques, pet stores, specialty retailers, and local commerce businesses.`
- **Notes:** Initial 12-hub expansion copy. Pending Level 5 SEO rebuild.

### `/industries/technology-b2b`
- **Title:** `Technology & B2B Services Automation | Sirius Systems`
- **Description:** `Lead nurture automation, CRM integration, and review systems for IT firms, managed service providers, SaaS companies, AI agencies, and B2B service businesses.`
- **Notes:** Initial 12-hub expansion copy. Pending Level 5 SEO rebuild.

---

## Blog

### `/blog`
- **Title:** `Sirius Systems Blog — AI, Automation & Local Growth`
- **Description:** `The Sirius Systems blog: practical guides on AI automation, smart websites, reputation systems, and local SEO for service businesses.`

### `/blog/<slug>` (template)
- **Title:** `<Post Headline> | Sirius Systems Blog` (≤ 60 chars total)
- **Description:** Front-matter `description` field per post — 140–160 chars, answers the post's central question in the first sentence.

---

## Utility

### `/privacy`
- **Title:** `Privacy Policy | Sirius Systems`
- **Description:** `How Sirius Systems collects, uses, and protects information from visitors and clients.`

### `/terms`
- **Title:** `Terms of Service | Sirius Systems`
- **Description:** `Terms of service governing use of the Sirius Systems website and services.`

---

## OpenGraph + Twitter

- **og:title** = `<title>` (without ` | Sirius Systems` suffix is fine for OG)
- **og:description** = `<description>`
- **og:image** = page-specific image when one exists, otherwise default social card at `/public/og/default.png`
- **og:type** = `website` (most pages), `article` (blog posts)
- **twitter:card** = `summary_large_image`

OG image generation strategy lives in `docs/brand/image-prompt-bank.md`.

---

## Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial drafts for all Phase 1 pages. Refine in QA pass after final positioning line is confirmed. |
| 2026-05-20 | Industry metadata rewritten for the 5 confirmed hubs. Deprecated `cleaning-companies`, `junk-removal`, `real-estate`, `coaches-consultants` removed. New title/description drafts added for `professional-services`, `auto-services`, `beauty-wellness`. |
| 2026-05-23 | Industry section restructured for the 12-hub taxonomy. `contractors` renamed to `construction-contractors`. 7 new industry sections added: `healthcare-medical`, `real-estate-property`, `hospitality-events`, `education-childcare`, `community-faith-nonprofit`, `retail-local-commerce`, `technology-b2b`. Source-of-truth note added: industry page files in `app/industries/<slug>/page.tsx` win when they disagree with this doc. Values mirrored from current production for `/industries`, `home-services`, `construction-contractors`, `healthcare-medical`, `real-estate-property` (Level 5 copy shipped); remaining seven hubs flagged as pre-Level-5 / pending SEO rebuild. |
