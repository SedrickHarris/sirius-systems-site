# Sirius Systems — Content Visibility Strategy
## SEO · GEO · AEO · LLM Search · Local Intent · Rich Results · Topical Authority · Conversion

This document defines the complete strategic framework for every blog post and content asset
produced for siriussys.io. It integrates the existing Sirius Systems blog system with the
extended visibility goals across Google, Bing, Apple Search, AI answer engines, GBP, and
conversion surfaces.

Every strategy in this document operates within the do-not-invent rules. No fabricated stats,
no invented case studies, no implied guarantees. Visibility is earned through genuine depth,
structural discipline, and topical authority — not manufactured signals.

---

## 1. The channel map

Every piece of content we publish touches multiple discovery channels simultaneously. The
table below maps each channel to what it rewards and what we do to win there.

| Channel | What it rewards | Our primary lever |
|---------|----------------|-------------------|
| Google organic (SEO) | Topical depth, E-E-A-T, internal linking | Cluster architecture + pillar posts |
| Google AI Overviews (AEO) | Direct answers, structured data, citability | Definition paragraphs + FAQ schema |
| Google rich results | FAQPage, Article, BreadcrumbList schema | JSON-LD from visible content only |
| People Also Ask | Question-format H2s, 40–80 word answers | PAA-optimized H2s in every post |
| Featured snippets | 40–60 word definitions, numbered lists, tables | Opening answer block per post |
| Google Maps / Local Pack | GBP signals, review velocity, NAP consistency | GBP-specific content cluster |
| Google Business Profile | Posts, Q&A, photos, review responses | GBP content series (Cluster C) |
| Google Search Console | Coverage, Core Web Vitals, index status | Sitemap + canonical + clean schema |
| Bing / Bing AI | Similar to Google organic; Bing AI cites content | Submit sitemap to Bing Webmaster |
| Apple Search (Spotlight) | Structured data, entity signals, fast pages | Organization + WebPage schema |
| Perplexity | Citability, direct answers, source authority | Fact-dense paragraphs, no hedging |
| ChatGPT search | Entity recognition, topical depth, verifiable claims | Consistent entity naming across site |
| LLM training / RAG | Clean prose, factual density, structured answers | No AI clichés; quotable sentences |
| GBP Knowledge Panel | Verified entity signals, sameAs, consistent NAP | Organization schema + GBP Q&A |
| Topical authority (all engines) | Cluster completeness, internal linking, depth | 400-topic backlog executed in tiers |
| Customer engagement | Useful content that solves real problems | Outcome-first writing, real answers |
| Customer conversion | Posts that flow naturally to a service or CTA | One CTA per post, mapped to intent |

---

## 2. Content architecture — how it all connects

Every post sits in a three-layer hierarchy:

```
Layer 1: Service pages (hub)
  /ai-automation, /ai-chatbots, /ai-voicebots, /crm-automation,
  /appointment-booking-automation, /lead-generation-automation,
  /reputation-management, /review-automation, /ai-review-responses,
  /google-business-profile-optimization, /local-seo-aeo, /smart-websites,
  /competitor-review-benchmarking, /all-in-one-business-growth-system

Layer 2: Industry pages (vertical pivot)
  /industries/home-services, /industries/construction-contractors,
  /industries/professional-services, /industries/healthcare-medical,
  /industries/beauty-wellness, + 7 more hubs

Layer 3: Blog posts (spoke + long-tail)
  /blog/<slug> → links up to Layer 1 and Layer 2
```

A post at Layer 3 earns topical authority for the whole cluster by targeting a specific
long-tail query, answering it completely, and linking back to the service page that converts.

The capstone (`/all-in-one-business-growth-system`) sits above all three layers and is linked
from every cluster.

---

## 3. On-page strategy — what every post must contain

### 3.1 Answer block (featured snippet + AEO)

Every post opens with the answer in the first 1–2 sentences. Not a teaser. The answer.

Format:
- Sentence 1: direct answer to the target query (20–40 words)
- Sentence 2: why it matters for the reader's specific situation
- Optional sentence 3: what the rest of the post covers

This block is what Google pulls for featured snippets. It is what AI engines quote. It is
what voice search reads aloud. It must be factually defensible and free of invented claims.

### 3.2 Definition paragraph (AEO + Knowledge Panel)

Every pillar deep-dive and how-to post includes a definition paragraph within the first
300 words. Format:

`[Topic] is [definition]. In a service business, that looks like [concrete example].`

This is the pattern AI engines extract to answer "what is X" queries. It also feeds the
Google Knowledge Panel entity description if the topic becomes associated with Sirius Systems.

### 3.3 Question-based H2s (PAA + voice search + AEO)

Minimum 2 H2s per post phrased as direct questions matching how buyers actually search.
Examples:

- "What should a service business automate first?"
- "How does missed call text back work?"
- "Does review velocity matter more than review count?"

These are the exact strings that appear in People Also Ask boxes. When our post answers them
directly and completely, we earn the PAA slot.

### 3.4 Structured formatting (rich results + scannability)

Every post must include:
- At least one comparison table (2+ options or approaches being compared)
- At least one bulleted or numbered list of 3+ items
- No more than 4 consecutive prose paragraphs without a visual break

This serves two purposes: it makes posts scannable for human readers, and it makes content
extractable for AI engines and featured snippet pulls.

### 3.5 FAQ section (FAQPage schema + PAA + LLM)

Every post ends with a visible FAQ section using the `<FAQ>` component. Minimum 5 questions,
maximum 10. The same `faqItems` array drives both the visual render and the FAQPage JSON-LD —
schema drift is structurally impossible.

FAQ questions must:
- Be phrased as a real buyer would ask them (conversational, not keyword-stuffed)
- Be answerable in 2–4 sentences without inventing data
- Not duplicate what's already answered in the body

### 3.6 Sitemap linking (new — required in every post)

Every post must include a "related resources" section or inline contextual links that create
a navigable map of the content ecosystem. See §6 for the full sitemap linking strategy.

---

## 4. Schema strategy — per post type

Every post emits a stack of JSON-LD blocks generated from confirmed frontmatter. No hand-coded
schema. No invented values.

### Standard blog post schema stack

| Schema type | Always | Conditional | Never |
|-------------|--------|-------------|-------|
| Article | ✅ | — | — |
| BreadcrumbList | ✅ | — | — |
| WebPage | ✅ | — | — |
| FAQPage | — | ✅ When visible FAQ exists | — |
| HowTo | — | ✅ When numbered steps are the core content | — |
| AggregateRating | — | — | ❌ Until verified live data |
| Review | — | — | ❌ Until verified attributed reviews |
| LocalBusiness | — | — | ❌ Not on blog posts |

### HowTo schema — when to add it

HowTo schema is eligible when:
- The post's body contains a numbered step-by-step process that IS the main content
- Each step is a concrete action with a clear outcome
- The steps are visible verbatim in the HTML (schema-matches-visible-content rule)

How-to checklists and playbooks are the right post types. Add HowTo schema to:
- AI automation setup posts
- GBP optimization checklists
- Review automation setup guides
- Appointment booking setup walkthroughs

HowTo schema earns a distinct rich result in Google — a visual step-by-step block. It also
feeds AI engines that synthesize procedural answers.

### Article schema fields that matter most for AI engines

Beyond the standard Article fields already implemented, add these to `articleSchema()`:
- `wordCount` — computed from rawContent at build time
- `articleSection` — the category display name (e.g. "AI Automation")
- `about` — a `Thing` node naming the primary topic entity
- `mentions` — array of `Thing` nodes for secondary topics referenced in the post

These fields help AI engines understand what the article is about beyond the headline and
improve the probability of citation.

### Organization schema reinforcement

The global Organization schema (emitted on every page) should include:
- `knowsAbout` — array of topic strings matching the service catalog
- `hasOfferCatalog` — references to the 14 service types
- `areaServed` — "Worldwide" or "United States" (confirmed — remote services)

These fields strengthen the Knowledge Panel entity association and help AI engines correctly
classify Sirius Systems as an authority on AI automation for local service businesses.

---

## 5. Topical authority execution

Topical authority is not a single action. It is the cumulative result of publishing every
spoke post in a cluster until the cluster is complete. The engines recognize when a site
has answered every reasonable question about a topic — and reward it with cluster-level ranking.

### Completion criteria per cluster

A cluster is considered "complete" (for initial topical authority) when:
- The hub service page is live and optimized (already done for all 14 services)
- At least 8 spoke posts are published covering the core subtopics
- Every spoke links to the hub
- The hub links back to at least 3 spokes
- At least one industry-specific post exists per major vertical for that cluster

Current state: 0 spokes published. Launch cohort (4 posts) begins this process.

### Tier 1 execution order

The fastest path to topical authority is to complete one cluster before spreading across all
three. Based on buyer intent and service page traction, the recommended order is:

1. **Cluster A (AI Automation)** — highest buyer intent, most search volume, most service
   pages to link to. 25 Tier 1 posts mapped. Complete the first 8 before moving to Cluster B.
2. **Cluster B (Reputation)** — high buyer intent, strong local search signal, directly
   supports GBP and review velocity strategy. 15 Tier 1 posts mapped.
3. **Cluster C (Local SEO / AEO / GBP / Smart Websites)** — slightly longer consideration
   cycle but essential for AI answer engine visibility. 20 Tier 1 posts mapped.

Exception: the 4 launch cohort posts (one per cluster + capstone) ship together regardless
of this order to establish a baseline presence across all clusters before launch.

---

## 6. Sitemap linking — implementation in every post

This is a new requirement not currently in the blog system. Every post must include
contextual links that let readers (and crawlers) navigate the full content ecosystem from
within any single post.

### The two-layer sitemap link requirement

**Layer 1 — In-body contextual links (existing requirement, extended)**

The current minimum is 2 internal links. Extend this to a structured set:

| Link type | Minimum | Target |
|-----------|---------|--------|
| Cluster hub | 1 | The service page this post belongs to |
| Related service | 1–2 | A related service in the same cluster |
| Industry page | 1 | The most relevant industry hub |
| Capstone | 1 | `/all-in-one-business-growth-system` (in the conclusion or CTA area) |
| Related post | 0–2 | Once other posts exist, link to 1–2 sibling spoke posts |

Total: 4–6 contextual internal links per post. Not forced — every link must appear in a
sentence where it's genuinely useful to the reader.

**Layer 2 — Related resources block (new)**

Every post ends with a "Related resources" section before the FAQ. This is a visible,
structured list of 3–5 links to related posts and service pages. It is not a sidebar widget —
it is part of the content and appears in the HTML.

Format in MDX:

```mdx
## Related resources

- [What AI automation actually does for a service business](/blog/what-ai-automation-does-local-service-business) — the foundational overview
- [AI chatbots for local businesses](/ai-chatbots) — how chatbots fit into the automation stack
- [Lead generation automation](/lead-generation-automation) — the next layer after call recovery
- [All-in-one business growth system](/all-in-one-business-growth-system) — how the full system connects
```

This section:
- Creates crawlable links between posts (PageRank distribution)
- Keeps readers on-site longer (engagement signal)
- Gives AI engines a map of related content (cluster authority signal)
- Provides natural anchor text variation across posts

Update the `blog-post-template.md` to include this section as required.

### Sitemap cross-reference for post authors

When writing a post, reference this map to select the 4–6 most relevant contextual links:

**For Cluster A posts:** Hub = `/ai-automation`. Always link to at least one of:
`/ai-chatbots`, `/ai-voicebots`, `/crm-automation`, `/appointment-booking-automation`,
`/lead-generation-automation`. Industry link from: `/industries/home-services`,
`/industries/construction-contractors`, `/industries/professional-services`.

**For Cluster B posts:** Hub = `/reputation-management`. Always link to at least one of:
`/review-automation`, `/ai-review-responses`, `/competitor-review-benchmarking`.
Industry link from any relevant hub.

**For Cluster C posts:** Hub = `/local-seo-aeo`. Always link to at least one of:
`/google-business-profile-optimization`, `/smart-websites`. Industry link from any
relevant hub.

**Capstone link:** Every post links to `/all-in-one-business-growth-system` — either
contextually in the conclusion or in the Related resources block. No exceptions.

---

## 7. GBP and local intent strategy

Sirius Systems is not a location-dependent business — it serves clients nationally. The
local intent strategy is therefore inverted: instead of targeting "[service] near me" queries
for Sirius Systems' own location, we produce content that helps local service businesses
rank better in their own local searches.

This is both a topical authority play and a GBP content strategy.

### GBP content series (Cluster C)

The 20 GBP-specific posts in Cluster C (C1-03 through C1-18) serve two functions:
1. They rank for GBP-related queries that local service business owners search
2. They establish Sirius Systems as the authoritative source on GBP optimization

Every GBP post links to `/google-business-profile-optimization` and references specific
GBP features (posts, Q&A, photos, service areas, messaging) by name. This creates a
topic cluster that AI engines associate with GBP expertise.

### Sirius Systems' own GBP

The blog content strategy indirectly supports the Sirius Systems GBP by:
- Increasing branded search volume (GBP relevance signal)
- Generating inbound links as the content gets cited
- Establishing topical authority that Google associates with the entity

Post GBP updates weekly using the same content topics as blog posts — shorter format, direct
answer, link to the full post. This creates a virtuous loop: blog post → GBP post → GBP
profile signals → better Knowledge Panel.

---

## 8. AI engine citation strategy (Perplexity, ChatGPT, Claude, Bing AI)

AI answer engines cite content that is:
- Factually specific (no vague claims, no hedging)
- Structurally clean (extractable without context)
- Authoritative (consistent entity signals across the web)
- Verifiable (the claim can be checked)

### Citation-ready writing rules

Every post must contain at least 3 "citation-ready sentences" — statements that:
- Name a specific entity (Sirius Systems, a service, a process)
- Make a specific factual claim that is true and verifiable
- Can stand alone without the surrounding paragraph

Examples of citation-ready sentences:
- "Missed call text back automation sends an SMS to a caller within seconds of a missed call, capturing leads that would otherwise go to a competitor."
- "FAQPage JSON-LD is only effective when the visible FAQ text on the page matches the schema exactly — engines that detect mismatches ignore the schema."
- "Speed-to-lead — the time between a lead inquiry and first contact — is one of the strongest predictors of whether a local service business wins or loses a job."

Examples of non-citation-ready sentences (rewrite these):
- "AI automation can really help your business grow in amazing ways." (vague, no claim)
- "Many businesses see great results from automation." (no specifics, no attribution)
- "Experts agree that automation is important." (invented authority)

### Entity consistency rules (Knowledge Panel + LLM grounding)

For AI engines to correctly associate content with Sirius Systems, the entity name must
appear consistently across every post:

- Always refer to the company as "Sirius Systems" — never "we" alone in the first mention,
  never "the company," never abbreviated.
- The about page, the Organization schema, the GBP profile, and the blog posts must all
  use the same name, the same founder name, and the same service descriptions.
- The `sameAs` array in Organization schema connects siriussys.io to the GBP, Facebook,
  and GitHub profiles — this creates a verifiable entity graph that LLMs use to ground
  responses about Sirius Systems.

---

## 9. Bing Webmaster and Apple Search

These channels require minimal additional effort beyond what's already in place.

### Bing Webmaster Tools

Actions required (one-time setup, not per-post):
1. Submit `https://siriussys.io/sitemap.xml` to Bing Webmaster Tools
2. Verify ownership via meta tag or DNS record
3. Enable the IndexNow API plugin (Next.js compatible) — sends instant index ping on deploy
4. Review Bing's site scan for crawl errors monthly

Every new post is automatically included in the sitemap (already implemented). Bing picks
it up within 24–48 hours of the sitemap ping.

### Apple Search (Spotlight / Siri)

Apple Search indexes structured data and fast-loading pages. No separate submission. Actions:
1. Ensure all JSON-LD validates (already enforced)
2. Maintain Core Web Vitals scores (Cloudflare Pages delivery handles most of this)
3. The `WebPage` schema with `description` field is the primary signal Apple uses

No special content changes needed for Apple Search beyond the schema already in place.

---

## 10. GSC strategy — measurement and maintenance

Google Search Console is the feedback loop for everything in §3–§9.

### What to track per post (starting at publish)

| Metric | What it tells you | Action threshold |
|--------|------------------|------------------|
| Impressions | Is Google indexing and showing the post? | < 50 impressions in 30 days = inspect indexing |
| Average position | Where does it rank for its target query? | > 20 = refresh content, improve answer block |
| Click-through rate | Is the title + description earning clicks? | < 1% CTR = rewrite meta description |
| PAA appearances | Are our H2s feeding People Also Ask? | Track manually — no GSC filter for this |
| Coverage errors | Is the post being crawled correctly? | Any error = fix within 24 hours |

### Refresh trigger

Any Tier 1 post that has been live for 90 days without reaching position 1–10 for its target
query gets a content refresh. Refresh actions in priority order:
1. Rewrite the answer block — make the first paragraph more direct
2. Add or improve the comparison table
3. Add 2–3 PAA-targeted H2s
4. Expand the FAQ section to 8–10 questions
5. Add 1–2 more internal links
6. Bump `dateModified` and redeploy

---

## 11. Conversion strategy — from post to discovery call

Every post has one job beyond ranking: move the reader one step closer to a discovery call.

### Intent-matched CTAs

The CTA at the end of each post must match the reader's likely intent based on post type:

| Post type | Reader intent | CTA copy | CTA destination |
|-----------|--------------|----------|-----------------|
| Pillar deep-dive | Understanding, not yet ready to buy | "Not sure where your biggest gap is? A 20-minute call usually finds it." | `/contact` |
| How-to / checklist | Active implementer, may want help | "Want this set up for your business? We build this in a day." | `/contact` or relevant service |
| Playbook | Planning a change, comparison shopping | "Ready to map this for your business? Book a discovery call." | `/contact` |
| Comparison | Evaluating options | "We can walk you through which approach fits your setup." | `/contact` |
| Industry vertical | Recognized their specific situation | "This is exactly what we build for [industry] businesses." | `/contact` or industry page |

### Engagement signals that help conversion

Posts with a Related resources section, a well-structured FAQ, and a specific CTA perform
better on all three fronts: they rank higher (longer time on page), they get cited more (more
structured content to extract), and they convert better (reader has been educated before
hitting the CTA).

The single most important conversion rule: the CTA must be specific. "Book a discovery call"
with a concrete value statement ("we'll find your biggest gap in 20 minutes") outperforms
"contact us" or "get in touch" on every metric.

---

## 12. Implementation checklist — per post

Add this section to `blog-publishing-checklist.md` as a new §17 (Full Visibility Checklist):

### SEO
- [ ] Target query declared in frontmatter `targetQuery`
- [ ] Target query appears in H1, first 100 words, and at least one H2
- [ ] Title ≤ 60 characters
- [ ] Meta description 140–160 characters, answers the query in sentence 1
- [ ] Slug ≤ 60 characters, no dates, kebab-case
- [ ] Canonical URL set correctly

### AEO / Featured snippets / PAA
- [ ] Answer block in first 1–2 sentences (20–40 words, directly answers the query)
- [ ] Definition paragraph within first 300 words (for pillar posts)
- [ ] Minimum 2 H2s phrased as questions
- [ ] At least one 40–60 word block that could stand alone as a featured snippet
- [ ] At least one comparison table
- [ ] At least one numbered or bulleted list

### Schema
- [ ] Article JSON-LD valid at schema.org/validator
- [ ] BreadcrumbList JSON-LD present (Home → Blog → Post Title)
- [ ] FAQPage JSON-LD present if visible FAQ section exists
- [ ] FAQPage JSON-LD text matches visible FAQ text exactly
- [ ] HowTo JSON-LD added if post is a step-by-step procedural guide
- [ ] `wordCount`, `articleSection`, `about` fields added to Article schema
- [ ] No AggregateRating, Review, or LocalBusiness schema on blog posts

### Internal linking / sitemap
- [ ] Link to cluster hub in first 1–3 paragraphs
- [ ] Link to 1–2 related services (same cluster)
- [ ] Link to 1 industry page (if post has vertical framing)
- [ ] Link to `/all-in-one-business-growth-system` in conclusion or Related resources
- [ ] Related resources section present (3–5 links)
- [ ] Total in-body + Related resources links: 4–8 (not more — link dilution)
- [ ] All anchor text is descriptive, no "click here" or "learn more"
- [ ] All linked pages are confirmed live (no 404s)

### AI engine citability
- [ ] At least 3 citation-ready sentences in the body
- [ ] "Sirius Systems" named explicitly (not just "we") in at least one body paragraph
- [ ] No vague claims ("many businesses see results") — specific or omit
- [ ] No hedging language that undermines citability ("might", "could possibly", "some say")
- [ ] Entity names consistent with Organization schema and GBP profile

### Bing / Apple / GSC
- [ ] Post will appear in sitemap on next build (draft: false, correct frontmatter)
- [ ] No noindex directive
- [ ] Featured image present, optimized under 200KB, correct path
- [ ] OG tags complete (title, description, image)

### Conversion
- [ ] One CTA, intent-matched to post type (see §11 table)
- [ ] CTA copy is specific, not generic
- [ ] CTA links to a confirmed live page

---

## 13. Template updates required

Two existing template files need to be updated to reflect this strategy:

### `docs/content/blog-post-template.md`

Add to the body skeleton (§3):
- A "Related resources" section template between the conclusion and the FAQ
- HowTo schema guidance in §6 (JSON-LD) for eligible post types
- `wordCount`, `articleSection`, `about` fields to the frontmatter template as optional fields

### `docs/content/blog-publishing-checklist.md`

Add §17 (Full Visibility Checklist) from §12 above as the final preflight gate before
`draft: false` is set.

---

## 14. Priority order for implementation

1. **Update `blog-post-template.md`** — add Related resources section, HowTo guidance,
   extended Article schema fields
2. **Update `blog-publishing-checklist.md`** — add §17 Full Visibility Checklist
3. **Update `lib/schema.ts`** — add `wordCount`, `articleSection`, `about`, `mentions`
   fields to `articleSchema()`; add `howToSchema()` helper
4. **Update `Organization` schema** — add `knowsAbout`, `hasOfferCatalog`, `areaServed`
5. **Submit sitemap to Bing Webmaster Tools** — one-time setup
6. **Apply strategy to L1 draft** — the L1 brief already aligns with this strategy;
   confirm Related resources section and extended schema fields are included
7. **Repeat for L2–L4** before launch

---

## 15. Changelog

| Date | Change |
|------|--------|
| 2026-05-31 | Initial plan. Covers SEO, GEO, AEO, LLM search, local intent, rich snippets, topical authority, GBP, featured snippets, PAA, Knowledge Panel, Perplexity, ChatGPT, Bing, Apple Search, GSC, customer engagement, and conversion. Integrates strategies from the Universal Blog Prompt PDF (scannable formatting discipline, voice-search H2s, self-audit format) with the existing Sirius Systems blog system. Adds sitemap linking as a per-post requirement, introduces Related resources section, extends Article schema fields, and defines intent-matched CTA framework. |
