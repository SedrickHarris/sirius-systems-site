# Topical Authority Plan — Sirius Systems

The strategy for becoming the go-to result for AI automation + reputation systems for local service businesses. Built on a hub-and-spoke model: service pages are hubs, blog posts are spokes, industry pages connect both to verticals.

---

## 1. Pillar topics (the three things this site is "about")

Search engines (and AI answer engines) reward sites that are obviously *about* a small number of things. Sirius Systems is about three:

### Pillar 1 — AI automation for local service businesses
Subtopics: chatbots, voicebots, CRM automation, lead generation, appointment booking, smart websites.
Hub pages: `/ai-automation`, `/ai-chatbots`, `/ai-voicebots`, `/crm-automation`, `/appointment-booking-automation`, `/lead-generation-automation`, `/smart-websites`.

### Pillar 2 — Reputation systems for local service businesses
Subtopics: review automation, AI review responses, competitor benchmarking, reputation management.
Hub pages: `/reputation-management`, `/review-automation`, `/ai-review-responses`, `/competitor-review-benchmarking`.

### Pillar 3 — Local SEO + AEO + GBP for local service businesses
Subtopics: Google Business Profile optimization, local SEO, AEO (Answer Engine Optimization), schema, NAP consistency.
Hub pages: `/google-business-profile-optimization`, `/local-seo-aeo`.

### Capstone
`/all-in-one-business-growth-system` is the cross-pillar offer. It links to and is linked from all three pillars.

## 2. Hub-and-spoke architecture

```
                  /all-in-one-business-growth-system
                            (capstone)
                                ▲
              ┌─────────────────┼─────────────────┐
              │                 │                 │
       Pillar 1: AI       Pillar 2: Reputation   Pillar 3: Local SEO/AEO/GBP
       (6 hub pages)      (4 hub pages)          (2 hub pages)
              │                 │                 │
              ▼                 ▼                 ▼
       Blog spokes        Blog spokes        Blog spokes
       (cluster A)        (cluster B)        (cluster C)
              \                 │                 /
               \                │                /
                ▼               ▼               ▼
             Industry pages (/industries/*) — vertical mappings
```

**Hub pages**: keyword-exact landing pages (service pages) optimizing for the head term.
**Spoke pages**: blog posts targeting long-tail queries that link "up" to the hub.
**Industry pages**: vertical pivots that re-frame the hub services for a specific buyer.

## 3. Cluster maps

### Cluster A — AI automation
- Hub: `/ai-automation` (head term)
- Sub-hubs: `/ai-chatbots`, `/ai-voicebots`, `/crm-automation`, `/lead-generation-automation`, `/smart-websites`, `/appointment-booking-automation`
- Spoke topics (blog posts, 8–12 over first 6 months):
  - "What an AI chatbot actually does for a service business"
  - "Voicebot vs. answering service: cost, quality, missed-call recovery"
  - "Why most CRMs go unused — and what to automate first"
  - "Lead generation automation: from form fill to first call in under 5 minutes"
  - "Smart website vs. brochure site: 7 differences that change revenue"
  - "Appointment booking flows that don't lose the lead between yes and calendar"
  - "Where AI breaks down in local service — and what to do about it"
  - "The right order to automate a service business: lead → book → follow up → review"

### Cluster B — Reputation systems
- Hub: `/reputation-management`
- Sub-hubs: `/review-automation`, `/ai-review-responses`, `/competitor-review-benchmarking`
- Spoke topics (blog posts, 6–10):
  - "Why a 4.6 rating outperforms a 5.0 in local search"
  - "Review automation done right: when to ask, how often, what channel"
  - "How AI review responses help — and how they hurt when done wrong"
  - "Competitor review benchmarking: pulling signal from your top 5 rivals"
  - "Replying to negative reviews: a template that doesn't sound like a template"
  - "Review velocity vs. review count: what Google actually cares about"

### Cluster C — Local SEO + AEO + GBP
- Hub: `/local-seo-aeo`
- Sub-hub: `/google-business-profile-optimization`
- Spoke topics (blog posts, 6–10):
  - "Google Business Profile checklist for service businesses"
  - "Local SEO vs. AEO: ranking in search vs. ranking in AI answers"
  - "Why NAP consistency still matters (and where it usually breaks)"
  - "Schema markup that actually moves the needle for local businesses"
  - "Service-area businesses on GBP: the right way to configure"
  - "Posts, photos, products: the underused GBP surfaces"
  - "Tracking what works: GBP insights without lying to yourself"

### Cluster Capstone
- Hub: `/all-in-one-business-growth-system`
- Spoke topics:
  - "What 'all in one' actually means for a local service business"
  - "Cost of stitching tools vs. an integrated growth system"
  - "Why we built Sirius Systems the way we did" (founder voice piece)

## 4. AEO (Answer Engine Optimization) layer

AI answer engines (Google AI Overviews, Perplexity, ChatGPT-with-search, Claude) reward content that:

- Answers a specific question clearly in the first 1–2 paragraphs
- Uses structured data (FAQ, HowTo, Article) honestly
- Cites real numbers, real sources, real examples — they're penalty-prone to vague text
- Has consistent NAP and entity signals (Organization + LocalBusiness schema + sameAs)

We optimize for AEO by:

1. **FAQ-style sections** on hub pages (real questions, real answers — see `schema-plan.md`)
2. **Definitional first paragraph** on every service page — "AI chatbots for service businesses are…" patterns
3. **HowTo schema** on blog posts that legitimately are how-tos (don't force it)
4. **Entity consistency** — same org name, same `sameAs` array, same founder name everywhere

## 5. GEO (Generative Engine Optimization) note

GEO overlaps heavily with AEO but adds:
- Brand-mention frequency outside our own domain (citations, links, press) — earned, not bought
- Clear, copyable factual statements (so AI engines can quote without paraphrasing)
- A solid `about` page with `Person` + `Organization` schema (helps grounding)

We do NOT pursue GEO tactics that violate `do-not-invent-rules.md` (paid placements masquerading as editorial, fake citations, link farms).

## 6. Publishing cadence (Phase 1 launch + first 6 months)

| Phase | Posts published | Cluster split |
|-------|-----------------|---------------|
| Launch (3–5 posts) | 1 per cluster minimum + 1 capstone | A1, B1, C1, capstone1 |
| Month 1 post-launch | 4 posts | Spread across clusters |
| Month 2–3 | 3–4 per month | Lean into whichever cluster ranks earliest |
| Month 4–6 | 2–3 per month | Optimize + update top performers |

## 7. Measurement

What we watch (in order of priority):

1. **Conversions** (form submits, booked calls) by source page
2. **Branded vs. non-branded organic traffic** split
3. **Cluster-level rankings** for the head terms of each pillar
4. **AI answer citations** (manual checks — "search this in ChatGPT, do we show up?")
5. **GBP discovery / direct search** (sanity check that local SEO is working)

We don't chase vanity (impressions, raw traffic) before conversions.

## 8. Anti-patterns (do not do)

- Targeting national / generic terms ("best AI chatbot") that don't fit a local service buyer
- Publishing AI-spun content (LLM-only, no human editorial) — it's both bad and a credibility risk for a brand selling AI
- Doorway pages per city we don't serve (only build location pages for confirmed service areas)
- Stuffing keyword variants — write naturally for the buyer

## 9. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial three-pillar map, cluster spoke topics, AEO layer, publishing cadence. |
