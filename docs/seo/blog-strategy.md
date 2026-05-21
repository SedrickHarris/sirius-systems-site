# Blog Strategy — Sirius Systems

The blog is the topical-authority engine and the most underrated conversion surface on the site. This file defines what it's for, what it covers, how it's structured, and how it gets published.

---

## 1. Purpose

In priority order:

1. **Earn organic visibility** for long-tail queries that map to Sirius Systems' three pillars.
2. **Demonstrate competence** to the visitor who arrives via search and is sizing us up.
3. **Feed AI answer engines** — content built so AI can quote it cleanly and credit Sirius Systems.
4. **Funnel readers to service pages and discovery calls** without sounding like every paragraph is selling.

What the blog is **not**:

- A news feed
- A personal journal
- A keyword-stuffed content farm
- A place to dump AI-generated posts without editorial

## 2. Cluster architecture (recap from `topical-authority-plan.md`)

Three clusters mirror the three pillars:

- **Cluster A — AI Automation** (hub: `/ai-automation`)
- **Cluster B — Reputation Systems** (hub: `/reputation-management`)
- **Cluster C — Smart Websites + Local SEO + AEO + GBP** (hub: `/local-seo-aeo`; sub-hub `/smart-websites`)

Plus a small **Capstone** category for cross-cluster pieces (positioning, philosophy, the founder's perspective).

## 3. Category taxonomy

Categories shown on `/blog` filter UI (and used as `category` field in MDX frontmatter):

| Category slug | Display name | Cluster |
|---------------|--------------|---------|
| `ai-automation` | AI Automation | A |
| `chatbots-voicebots` | Chatbots & Voicebots | A |
| `crm-and-booking` | CRM & Booking | A |
| `reputation` | Reputation | B |
| `reviews` | Reviews | B |
| `local-seo` | Local SEO | C |
| `gbp` | Google Business Profile | C |
| `aeo` | AEO & AI Answers | C |
| `growth-systems` | Growth Systems | Capstone |
| `founders-notes` | Founder's Notes | Capstone |

**Rule:** every post has exactly **one** category. Cross-topic posts pick the dominant cluster.

## 4. Tag taxonomy

Tags are secondary, lightweight, and used for related-post suggestions. Aim for 2–5 tags per post. Suggested baseline:

- `home-services`, `contractors`, `professional-services`, `auto-services`, `beauty-wellness`
- `ai`, `chatbot`, `voicebot`, `crm`, `booking`, `lead-gen`, `smart-website`
- `reviews`, `reputation`, `competitor-benchmarking`, `gbp`, `local-seo`, `aeo`, `schema`
- `playbook`, `checklist`, `how-to`, `case-study`, `opinion`

We do not invent tags for SEO; we add a tag only when at least 2 posts will plausibly share it.

## 5. Post types

| Type | Purpose | Length | Schema |
|------|---------|--------|--------|
| **Pillar deep-dive** | Comprehensive treatment of a cluster topic | 2,000–3,500 words | `Article` |
| **How-to / checklist** | Specific procedural answer | 1,200–2,000 words | `Article` (+ `HowTo` if legit) |
| **Playbook** | Step-by-step business process | 1,500–2,500 words | `Article` |
| **Comparison** | "X vs Y" or "buy vs build" | 1,200–2,000 words | `Article` |
| **Opinion / founder's note** | Perspective piece, signed | 600–1,500 words | `Article` (author = `Person`) |
| **News / update** | New service, new feature, change in approach | 400–900 words | `Article` |

We default to **how-to / checklist / playbook** because that's what local-services buyers search for.

## 6. Voice + editorial standards

- **Voice matches `docs/brand/brand-guide.md`** — confident, plainspoken, outcome-first.
- **Never write a "post about nothing"** — every post answers a specific question or solves a specific problem.
- **First paragraph states the question** and gives the headline answer. AI engines and skim-readers both reward this.
- **Use real numbers only when real** — see `do-not-invent-rules.md`. "Roughly 30% of inbound calls go to voicemail in a typical service business" is fine if we have a source; "Our clients see 47% more leads" is forbidden without proof.
- **Cite sources** with linked references at the end of any post that uses external data.
- **No AI-only drafts.** Use AI for outline, draft, and copyedit — but a human writes/edits the published version.

## 7. SEO basics per post

- **One target query per post**, declared in frontmatter (`targetQuery`).
- **Title under 60 chars**, includes the target query or a tight variant.
- **Description 140–160 chars**, answers the central question in the first sentence.
- **URL slug** derived from headline, ≤ 60 chars, no dates.
- **Internal links** per `docs/seo/internal-linking-plan.md` (≥ 2 per post).
- **Featured image** at `/public/images/blog/<slug>.<ext>`, generated per `docs/brand/image-prompt-bank.md`.
- **`Article` JSON-LD** per `docs/seo/schema-plan.md`.
- **Reading time** computed from word count (1 min per 230 words).

## 8. Authoring + byline rules

- **Author byline preference:** TBD — Sedrick Harris or "Sirius Systems Team" (see `content-needed-from-client.md` §5).
- **Founder's notes** are always bylined to the founder personally.
- **Pillar deep-dives + how-tos** can be team-bylined.

## 9. Launch cohort (3–5 posts before go-live)

Before launch, publish **one post per cluster** plus the capstone "why we built this" piece. Working titles:

1. **Cluster A:** "Where to start with AI automation in a local service business" (`category: ai-automation`)
2. **Cluster B:** "Why a 4.6 rating outperforms a 5.0 in local search" (`category: reviews`)
3. **Cluster C:** "Google Business Profile checklist for service businesses (2026)" (`category: gbp`)
4. **Capstone:** "What an 'all-in-one business growth system' actually means" (`category: growth-systems`)
5. (Optional 5th) **Founder's note:** "Why I built Sirius Systems the way I did" (`category: founders-notes`)

Each launch post pulls double duty: ranks for its target query AND demonstrates the depth of thinking behind the matching service page.

## 10. Post-launch cadence

- Month 1: 4 posts
- Month 2–3: 3–4 posts/month
- Month 4–6: 2–3 posts/month + 2 update passes on top-performing posts

Quality over volume. A single 2,500-word pillar post that ranks #1 beats six 600-word posts that don't.

## 11. Update + refresh policy

- Every post is reviewed at least **every 12 months**.
- "Last updated" date displayed when it differs from publish date.
- Update both `dateModified` in JSON-LD and frontmatter when a refresh ships.
- Major rewrites get a brief "Updated:" line at the top of the body.

## 12. Repurposing

Each pillar post → social posts (LinkedIn / IG), an email summary, and potentially a short video. The blog post is the long-form asset; everything else is downstream. Repurposing is out of Phase 1 scope but flagged here so we don't design the blog system in a way that blocks it later.

## 13. Anti-patterns

- Publishing for the sake of cadence
- Buying backlinks
- Spinning the same post into 5 thin variants
- Citing fake stats
- Auto-publishing AI drafts with no human read

## 14. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial blog strategy — categories, tags, post types, launch cohort, cadence. |
| 2026-05-20 | Industry-tag taxonomy aligned with the 5 confirmed industry hubs. Deprecated tags (`cleaning`, `junk-removal`, `real-estate`, `coaches`) removed; replaced with the slug-aligned set. Posts targeting a former vertical now tag the new hub (e.g., a cleaning-business post tags `home-services`). |
