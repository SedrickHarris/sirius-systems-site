# Blog Writing Workflow — Sirius Systems

The end-to-end process for every post from topic selection to publish. This is the
authoritative workflow. It supersedes the implicit process previously spread across
`blog-strategy.md`, `blog-post-template.md`, and `blog-publishing-checklist.md`.
Those files remain the technical reference; this file defines the sequence.

---

## Overview — 6 stages

```
Stage 1 → Topic selection and keyword inputs
Stage 2 → Keyword research and classification
Stage 3 → Content brief
Stage 4 → Draft
Stage 5 → Preflight (publishing checklist)
Stage 6 → Publish and index
```

Every post goes through all 6 stages in order. No skipping.

---

## Stage 1 — Topic selection and keyword inputs

**Who does it:** Strategy lead (this Claude Project)
**Output:** A row from `blog-content-plan.md` with topic, slug, target query, provided
keywords, internal link targets, and category.

### How to select the next topic

1. Open `docs/content/blog-content-plan.md`
2. Pick the next Tier 1 post in the cluster with the least published coverage
3. Confirm no editorial flag (🔧 💰 ⚖️ 🔁 📋) is blocking the topic
4. Pull the full row: title, slug, category, target query, type, internal links

### Keyword inputs

Every topic in the content plan came with a set of provided keywords from the topical
authority map. These are the starting inputs, not the final keyword set. They are appended
to the content brief in Stage 3 after keyword research in Stage 2 validates and expands them.

**Where the provided keywords live:** Each pillar and subpillar in the 20-pillar topical
authority map (Parts 1–4) includes a `Keywords` field. Pull those for the topic before
moving to Stage 2.

---

## Stage 2 — Keyword research and classification

**Who does it:** Strategy lead (this Claude Project) using web search
**Output:** A classified keyword set — primary, secondary, LSI, PAA, and long-tail — that
drives the content brief in Stage 3.

This stage is new. It runs on every topic before briefing begins. The provided keywords
from the content plan are inputs, not outputs.

### Step 2A — Classify the provided keywords

Take the keywords from the content plan row and classify each one:

| Classification | Definition | Example |
|----------------|-----------|---------|
| **Primary** | The single query the post targets — highest buyer intent, most specific to the post topic | `ai automation for service business` |
| **Secondary** | High-relevance variants with overlapping intent — incorporate naturally 1–2 times each | `how to automate service business`, `AI automation for small business` |
| **LSI (Latent Semantic Indexing)** | Conceptually related terms that signal topic depth — use in body prose | `workflow automation`, `business process automation`, `automated follow-up` |
| **Long-tail** | Specific 4–6 word queries — use as H2 or H3 subheadings where the post covers that specific sub-question | `what to automate first in a service business` |
| **PAA (People Also Ask)** | Question-format queries that appear in Google's PAA box — each one becomes a candidate H2 or FAQ item | `what is AI automation for local businesses?` |
| **Local intent** | Geo-modified variants — use only when genuinely relevant; Sirius Systems is national, so these appear in posts about helping clients rank locally, not about Sirius Systems' own location | `AI automation for home service businesses`, `contractor automation system` |

### Step 2B — Run keyword research

Search for the primary keyword and each secondary keyword. For each search:

1. **Look at the top 10 results** — what angle are they taking? What are we competing against?
2. **Extract PAA questions** — these become H2 candidates or FAQ items
3. **Identify gaps** — what questions are being asked that no top result answers well?
4. **Check search intent** — is this informational (explain), navigational (find), commercial (compare), or transactional (buy)? The post type must match the intent.

Intent-to-post-type mapping:

| Search intent | Correct post type |
|--------------|-------------------|
| Informational ("what is", "how does") | Pillar deep-dive or How-to |
| Informational + process ("how to set up") | How-to / checklist or Playbook |
| Commercial ("X vs Y", "best X") | Comparison — check for editorial flags first |
| Transactional ("hire X", "X service") | Service page, not a blog post |

If keyword research reveals the primary keyword has transactional intent, flag it — the
content may belong on a service page rather than the blog.

### Step 2C — Build the keyword set for the brief

Produce a structured keyword set:

```
Primary keyword: [one query]
Secondary keywords: [2–5 variants]
LSI terms: [4–8 related terms to weave into prose]
Long-tail / H2 candidates: [3–5 specific sub-questions]
PAA targets: [3–6 question-format queries]
Keyword type notes: [any intent conflicts, competition notes, gaps identified]
```

This set goes directly into the content brief in Stage 3.

### Step 2D — Identify and select all internal links

Every post links to four types of pages. Select all applicable links at this stage — before
briefing begins — so the drafter receives a complete link table and doesn't make link
decisions during writing.

**Target: 6–10 total internal links per post** across all four types combined.
- In-body contextual links: 4–7
- Related resources section: 3–5
- Total ceiling: 10 (beyond this, link equity dilutes)

---

#### Link type 1 — Service pages

Service pages are the conversion layer. Every post links to its cluster hub plus 1–2
related services. These are required in every post regardless of topic.

| Link | Required | Selection rule |
|------|----------|---------------|
| Cluster hub | ✅ Always | The primary service page for this post's cluster |
| Related service(s) | ✅ 1–2 | Services most directly relevant to this specific topic |
| Capstone | ✅ Always | `/all-in-one-business-growth-system` — in conclusion or Related resources |

**Service pages (14):**
`/ai-automation`, `/ai-chatbots`, `/ai-voicebots`, `/crm-automation`,
`/appointment-booking-automation`, `/smart-websites`, `/lead-generation-automation`,
`/reputation-management`, `/review-automation`, `/ai-review-responses`,
`/google-business-profile-optimization`, `/local-seo-aeo`,
`/competitor-review-benchmarking`, `/all-in-one-business-growth-system`

---

#### Link type 2 — Industry pages

Industry pages connect service topics to specific buyer verticals. Include 1–2 when the
post has a vertical angle or when the topic's buyer maps cleanly to an industry.

| Link | Required | Selection rule |
|------|----------|---------------|
| Primary industry | ✅ When topic has vertical framing | The `/industries/` hub that best matches the post's target buyer |
| Secondary industry | Optional | A second industry hub if the topic applies equally to two verticals |

**Industry pages (12):**
`/industries/home-services`, `/industries/construction-contractors`,
`/industries/professional-services`, `/industries/auto-services`,
`/industries/beauty-wellness`, `/industries/healthcare-medical`,
`/industries/real-estate-property`, `/industries/hospitality-events`,
`/industries/education-childcare`, `/industries/community-faith-nonprofit`,
`/industries/retail-local-commerce`, `/industries/technology-b2b`

---

#### Link type 3 — Service × industry intersection pages

These are the planned post-launch intersection pages that combine a specific service with a
specific industry (e.g. AI chatbots for home services, reputation management for contractors).

**Current status:** Not yet built. When they exist, they become high-priority link targets
because they carry both service and industry relevance for a single click.

**How to handle now:**
- If an intersection page exists at the time of drafting, link to it — check the sitemap
- If it does not yet exist, note it in the brief as a "future link" so it gets added when
  that intersection page launches
- Do not link to a URL that does not yet resolve

**When intersection pages launch**, retroactively update relevant published posts to include
the intersection page link. The cross-linking step in Stage 6 covers this.

---

#### Link type 4 — Other blog posts

Blog-to-blog linking builds the content graph that crawlers and AI engines follow across
the library. As the blog grows, these links become increasingly important for topical
authority signaling.

**Selection rules:**

| Scenario | Action |
|----------|--------|
| Published posts in same cluster | Link to 1–2 if they cover a directly related subtopic — reader should read both |
| Published posts in adjacent cluster | Link to 1 if the topic bridges clusters (e.g. an AI automation post that touches reputation) |
| No published posts yet | Skip — do not link to posts that don't exist |
| Future planned post covers a subtopic this post mentions | Note in brief as "future reciprocal link" — add when that post publishes |

**How to find applicable blog posts:**
Search the published blog library at `/blog` and the content plan in
`docs/content/blog-content-plan.md`. For each candidate:
- Is the topic genuinely related, not just in the same cluster?
- Would a reader of this post benefit from reading that one?
- Does the anchor text describe the linked post's actual topic?

If all three are yes — link it. If any answer is no — skip it.

**Blog-to-blog reciprocal linking log:**
Maintain a running note at the bottom of each content brief listing posts that should
link back to this one when they publish. Format:

```
Future reciprocal links (add when these posts publish):
- /blog/[future-slug] — should mention this post when covering [related subtopic]
- /blog/[future-slug] — should reference this post in its Related resources section
```

---

#### Full link selection output — produce this table in the brief

```
| # | Link type | Anchor text | Destination | Placement |
|---|-----------|-------------|-------------|-----------|
| 1 | Service (hub) | [descriptive anchor] | /[service-slug] | First 1–3 paragraphs |
| 2 | Service (related) | [descriptive anchor] | /[service-slug] | [H2 section name] |
| 3 | Industry | [descriptive anchor] | /industries/[slug] | [H2 section name or body] |
| 4 | Capstone | [descriptive anchor] | /all-in-one-business-growth-system | Conclusion |
| 5 | Blog (sibling) | [descriptive anchor] | /blog/[slug] | Related resources |
| 6 | Blog (related) | [descriptive anchor] | /blog/[slug] | Related resources or body |
```

Anchor text rules — apply to all four link types:
- **Descriptive** — describes the destination's topic, not "click here" or "learn more"
- **Varied** — never the same exact anchor phrase used for the same destination in two posts
- **Natural** — reads as normal prose when embedded in a sentence
- **Specific** — "how AI chatbots handle after-hours inquiries" is better than "AI chatbots"

---

## Stage 3 — Content brief

**Who does it:** Strategy lead (this Claude Project)
**Output:** A fully structured content brief ready to hand to a drafter

The brief contains every input the drafter needs and nothing they have to look up. Format
matches the L1 brief already produced for `where-to-start-ai-automation-service-business`.

### Content brief structure

Every brief includes all of the following sections:

1. **Post metadata** — title, slug, file path, category, cluster, type, target word count,
   draft status

2. **Frontmatter block** — complete, filled-in YAML ready to paste into the MDX file

3. **Featured image prompt** — style baseline from `image-prompt-bank.md` + post-specific
   subject block

4. **SEO metadata** — title tag, meta description, primary keyword, secondary keywords

5. **Keyword set** — output of Stage 2 classification: primary, secondary, LSI, long-tail,
   PAA targets, keyword type notes

6. **Reader and intent** — who is reading, where they are in the funnel, what they need to
   leave with

7. **Angle and argument** — the post's central claim and how the argument builds

8. **Outline** — section-by-section with:
   - H2 text (phrased as a question where the topic supports it)
   - Approximate word count per section
   - Key points to cover in that section
   - Which keywords to incorporate
   - Which internal links belong in or near that section
   - Table or list opportunities

9. **Internal links table** — anchor text, destination, placement (from Stage 2D)

10. **Related resources section** — the 3–5 links that appear at the end of the post in the
    "Related resources" MDX block

11. **FAQ questions** — 5–8 candidate questions drawn from PAA research, each answerable
    in 2–4 sentences without inventing data

12. **CTA block** — intent-matched CTA copy and destination per the content-visibility-strategy
    §11 table

13. **Do-not-invent checklist** — post-specific items flagged before drafting begins

14. **Publishing checklist trigger** — note that the full `blog-publishing-checklist.md`
    runs before `draft: false`

---

## Stage 4 — Draft

**Who does it:** Drafter (Claude with human review, or human)
**Input:** The Stage 3 content brief
**Output:** Complete MDX file at `content/blog/<slug>.mdx` with `draft: true`

### Drafting rules

**Keyword incorporation:**
- Primary keyword: appears in H1 (title), first 100 words, at least one H2, meta description
- Secondary keywords: 1–2 natural appearances each throughout the body
- LSI terms: woven naturally into prose — not forced, not concentrated in one section
- Long-tail terms: used as H2 or H3 subheadings where the post covers that sub-question
- PAA questions: at least 3 appear as H2s or in the FAQ section

**Structure requirements:**
- Answer block in the first 1–2 sentences (20–40 words, directly answers the primary query)
- Definition paragraph within the first 300 words for pillar deep-dives
- Minimum 2 H2s phrased as questions
- At least one comparison table
- At least one bulleted or numbered list of 3+ items
- No more than 4 consecutive prose paragraphs without a visual break
- Related resources section before the FAQ
- FAQ section (5–8 questions using the `<FAQ>` component)
- Intent-matched CTA using the `<CTA>` component

**Keyword density rule:**
Primary keyword: 2–4 appearances in the body naturally distributed. Never 3 consecutive
paragraphs each containing the primary keyword. Secondary keywords: 1–2 each. Stop counting
once the writing sounds right — density is a constraint, not a target.

**Internal link placement — all four link types:**
- Cluster hub (service) link in the first 1–3 paragraphs — required, non-negotiable
- Related service links in the body section most relevant to that service's function
- Industry page link where the post addresses that vertical's specific situation
- Capstone (`/all-in-one-business-growth-system`) in the conclusion or Related resources
- Blog post links placed primarily in Related resources; contextual in-body only when the
  linked post is directly referenced in a sentence
- Service × industry intersection page links inline near the most relevant body section;
  note as "future link" in the brief if the page does not yet exist
- Related resources section: 3–5 links — mix of service pages, industry pages, and
  published blog posts (not all one type)
- Total in-body + Related resources: 6–10 (ceiling — beyond this, link equity dilutes)

**Voice discipline:**
- Outcome-first: what the system does for the business, not what it is internally
- Plainspoken: if a sentence needs three readings, rewrite it
- Confident: no hedging language that undermines citability
- No forbidden phrases: "unlock", "supercharge", "next-level", "game-changer", "solutions",
  "in today's world", "it's important to note", "delve into", "landscape of", "ensure"

**Citation-ready sentences:**
At least 3 sentences per post that are specific, verifiable, entity-named, and can stand
alone without surrounding context. These are what AI engines quote.

---

## Stage 5 — Preflight

**Who does it:** Author or editor
**Input:** Draft MDX with `draft: true`
**Output:** Approved MDX with `draft: false`, ready to commit

Run `docs/content/blog-publishing-checklist.md` in full. The checklist covers:
- §1 Strategy fit
- §2 Frontmatter completeness
- §3 Content quality
- §4 Do-not-invent audit
- §5 Internal linking
- §6 CTA
- §7 Image
- §8 SEO meta
- §9 Schema (JSON-LD)
- §10 Sitemap + indexing
- §11 Accessibility
- §12 Mobile preview
- §13 Build and lint
- §14 Commit

Plus the extended visibility checklist from `docs/seo/content-visibility-strategy.md` §12:
- SEO
- AEO / Featured snippets / PAA
- Schema
- Internal linking / sitemap
- AI engine citability
- Bing / Apple / GSC
- Conversion

Do not set `draft: false` until every item passes. No "publish now, fix later."

---

## Stage 6 — Publish and index

**Who does it:** Claude Code
**Input:** Approved MDX with `draft: false`
**Output:** Post live at `https://siriussys.io/blog/<slug>`, indexed, verified

### Commit

```
git add content/blog/<slug>.mdx public/images/blog/<slug>.webp
git add docs/site-os/changelog/project-changelog.md
git commit -m "feat(blog): publish <slug>"
git push
```

### Post-publish verification (within 1 hour)

- [ ] Production URL renders: `https://siriussys.io/blog/<slug>`
- [ ] JSON-LD valid: https://validator.schema.org/
- [ ] Rich result eligible: https://search.google.com/test/rich-results
- [ ] OG card preview: use Twitter card validator or Facebook debugger
- [ ] Sitemap includes the new post (verify at `https://siriussys.io/sitemap.xml`)
- [ ] Submit URL to GSC for expedited indexing (URL Inspection → Request Indexing)
- [ ] Submit URL to Bing Webmaster URL submission tool

### Post-publish cross-linking (within 7 days)

**Step 1 — Link TO this post from existing posts:**
- [ ] Search published blog library for posts that mention this topic or a related subtopic
- [ ] Add contextual links from those posts to this new post
- [ ] Update `dateModified` on every edited post and recommit each one

**Step 2 — Activate future reciprocal links:**
- [ ] Check the "future reciprocal links" note in this post's content brief
- [ ] For any future post listed there that is now published, add the link
- [ ] Update `dateModified` and recommit those posts

**Step 3 — Log intersection page gaps:**
- [ ] If the content brief noted a "future link" to a service × industry intersection page
  that doesn't yet exist, add a note to the intersection page build queue

**Step 4 — Update blog-content-plan.md:**
- [ ] Add this post's slug to the "sibling posts" reference for related future posts in
  the same cluster so Stage 2D picks it up when those posts are briefed

---

## Keyword type reference

Use this table when classifying keywords in Stage 2. Knowing the type determines where and
how often the keyword appears in the post.

| Type | Where to place | Frequency | SEO function |
|------|---------------|-----------|--------------|
| Primary | H1, first 100 words, 1 H2, meta description, URL slug | 2–4 times body | Primary ranking signal |
| Secondary | Body prose, optionally H2 or H3 | 1–2 times each | Topical relevance, ranking support |
| LSI | Body prose only — never forced into headings | Organic — appears when natural | Topic depth signal, semantic relevance |
| Long-tail | H2 or H3 subheading, or FAQ question | Once each | Featured snippet, PAA, voice search |
| PAA | H2 or FAQ question, answered in 40–80 words | Once each | PAA box, voice search, AEO |
| Local intent | Body prose when topic is vertical-specific | Organic | Local buyer intent matching |

---

## Sitemap linking quick reference

Use this in Stage 2D and Stage 4 to select and place links correctly.
All four link types apply to every post — work through each section in order.

---

### Service page links — required in every post

#### Cluster A posts
1. `/ai-automation` — cluster hub, required, first 1–3 paragraphs
2. One or two of: `/ai-chatbots`, `/ai-voicebots`, `/crm-automation`,
   `/appointment-booking-automation`, `/lead-generation-automation`
3. `/all-in-one-business-growth-system` — capstone, required, conclusion

#### Cluster B posts
1. `/reputation-management` — cluster hub, required
2. One or two of: `/review-automation`, `/ai-review-responses`,
   `/competitor-review-benchmarking`
3. `/all-in-one-business-growth-system` — required

#### Cluster C posts
1. `/local-seo-aeo` — cluster hub, required
2. One or two of: `/google-business-profile-optimization`, `/smart-websites`
3. `/all-in-one-business-growth-system` — required

#### Capstone posts
1. All three cluster hubs: `/ai-automation`, `/reputation-management`, `/local-seo-aeo`
2. 2–3 relevant service pages that support the argument
3. `/contact`

---

### Industry page links — required when topic has vertical framing

Match the post's target buyer to the right industry hub:

| Buyer type | Industry page |
|------------|--------------|
| HVAC, plumbers, roofers, electricians, cleaners, landscapers | `/industries/home-services` |
| General contractors, remodelers, builders, specialty trades | `/industries/construction-contractors` |
| Attorneys, accountants, consultants, insurance agents | `/industries/professional-services` |
| Medical practices, dental, chiro, therapy | `/industries/healthcare-medical` |
| Salons, spas, med spas, wellness studios | `/industries/beauty-wellness` |
| Auto repair, dealerships, detailing | `/industries/auto-services` |
| Realtors, property managers, investors | `/industries/real-estate-property` |
| Hotels, venues, event planners | `/industries/hospitality-events` |
| Schools, daycares, tutoring | `/industries/education-childcare` |
| Churches, nonprofits, community orgs | `/industries/community-faith-nonprofit` |
| Retail shops, local e-commerce | `/industries/retail-local-commerce` |
| SaaS, IT services, B2B agencies | `/industries/technology-b2b` |

When the post targets a specific trade (e.g. HVAC) link to the primary industry page
(`/industries/home-services`) AND note the specific trade in the anchor text:
"HVAC companies using AI automation" → `/industries/home-services`

---

### Service × industry intersection page links — link when they exist

Intersection pages combine a specific service with a specific industry vertical.
These are planned for post-launch. Check the current sitemap before briefing.

**When an intersection page exists:**
Link to it inline, near the body section where that service + vertical combination is
discussed. This is higher-value than either a service page or industry page alone.

**When an intersection page does not yet exist:**
Note it in the brief as a future link:
`Future link: /industries/home-services + /ai-automation intersection page — add when live`

Track these gaps. When intersection pages launch, update all posts that noted them.

---

### Blog post links — add as the library grows

Apply the selection logic from Stage 2D:

- Same cluster, related subtopic → link in Related resources or body
- Adjacent cluster, bridging topic → link in Related resources
- No published posts yet → skip, do not invent links

**Grow the link density over time.** A post published today with 0 blog-to-blog links should
have 2–4 blog-to-blog links added via the Stage 6 cross-linking process as the library fills
out. This is a living document — links are added, not only written at publish time.

---

### Link count targets by post age

| Post age | Service links | Industry links | Intersection links | Blog links | Total |
|----------|--------------|---------------|-------------------|------------|-------|
| At publish | 3–4 | 1–2 | 0–1 | 0–2 | 6–8 |
| After 10 posts in cluster | 3–4 | 1–2 | 0–1 | 2–3 | 7–9 |
| After 25 posts in cluster | 3–4 | 1–2 | 1–2 | 3–4 | 8–10 |

Maximum total: 10 links per post. Beyond that, link equity dilutes.

---

## Workflow summary card

```
Topic selected from blog-content-plan.md
         ↓
Stage 1: Pull topic row + provided keywords from topical authority map
         ↓
Stage 2: Keyword research + classification
         2A: Classify provided keywords (primary / secondary / LSI / long-tail / PAA / local intent)
         2B: Run searches — extract PAA, identify gaps, confirm intent
         2C: Build final keyword set for the brief
         2D: Select all internal links across four types:
             ├── Service pages (hub + related + capstone) — required
             ├── Industry pages (1–2 matching buyer vertical) — required when applicable
             ├── Service × industry intersection pages — link if live, note if future
             └── Blog posts (sibling + related) — add what exists, note future reciprocals
         ↓
Stage 3: Write content brief
         (keyword set + full link table + outline + FAQ candidates + CTA + do-not-invent check)
         ↓
Stage 4: Draft MDX (draft: true)
         Keywords incorporated per type rules
         All four link types placed per brief
         Related resources section with mixed link types
         ↓
Stage 5: Preflight
         Full publishing checklist + visibility checklist
         Set draft: false
         ↓
Stage 6: Publish + verify + submit to GSC + Bing
         Cross-link from existing posts to this one
         Log future reciprocal links for upcoming posts
         Note any intersection page gaps for the build queue
```

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-31 | Initial workflow document. Added Stage 2 (keyword research and classification) as a required step before briefing. Added keyword type reference table. Integrated sitemap linking as a Stage 2 output and Stage 4 requirement. Aligned with content-visibility-strategy.md §6 (sitemap linking) and §12 (visibility checklist). Connects to blog-post-template.md, blog-publishing-checklist.md, content-visibility-strategy.md, internal-linking-plan.md, and blog-content-plan.md. |
| 2026-05-31 | Updated Stage 2D to define all four link types: (1) service pages, (2) industry pages, (3) service × industry intersection pages, (4) other blog posts. Updated Stage 4 internal link placement rules for all four types. Updated Stage 6 cross-linking to cover reciprocal blog links, intersection page gap tracking, and blog-content-plan.md updates. Replaced sitemap quick reference with four-section structure covering all link types plus link count targets by post age. Updated workflow summary card to reflect four-type link selection. |
