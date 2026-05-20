# Blog Post Template — Sirius Systems

The MDX skeleton every blog post starts from. Copy this file to `/content/blog/<slug>.mdx`, fill the frontmatter, write the body.

> Companion docs: `blog-strategy.md` (rules), `blog-content-plan.md` (calendar), `blog-publishing-checklist.md` (preflight), `image-prompt-bank.md` (featured image).

---

## 1. File location

```
/content/blog/<slug>.mdx
```

Slug rules (from `docs/seo/url-strategy.md`):
- lowercase, kebab-case
- ≤ 60 chars
- no dates in slug
- descriptive, not clickbait

## 2. Frontmatter template

```yaml
---
title: "<Post headline — sentence case, ≤ 60 chars>"
description: "<Meta description — 140–160 chars, answers the central question in sentence 1>"
slug: "<post-slug>"
date: "<YYYY-MM-DD — publish date>"
dateModified: "<YYYY-MM-DD — leave equal to date until first refresh>"
author: "<Sedrick Harris OR Sirius Systems Team — confirm with client>"
authorRole: "<Founder | Editor | etc.>"
category: "<one of: ai-automation, chatbots-voicebots, crm-and-booking, reputation, reviews, local-seo, gbp, aeo, growth-systems, founders-notes>"
tags: ["<tag-1>", "<tag-2>", "<tag-3>"]
targetQuery: "<the one query this post targets>"
featuredImage: "/images/blog/<post-slug>.webp"
featuredImageAlt: "<descriptive alt — not keyword-stuffed>"
ogImage: "/images/blog/<post-slug>.webp"
readingTime: <integer minutes, computed at 230 words/min>
draft: false
canonicalUrl: "https://siriussys.io/blog/<post-slug>"
---
```

## 3. Body skeleton (MDX)

```mdx
import { Callout } from '@/components/blog/Callout'
import { CTA } from '@/components/blog/CTA'

<!--
PURPOSE
- Lead with the question, answer in the first 1-2 paragraphs.
- Show the work. Use H2s every ~300-500 words.
- 2+ internal links to service or industry pages.
- End with a real CTA.
-->

<!-- 1. Hook + answer (1-2 paragraphs) -->

The single most useful thing to know about <topic> is **<the answer, plainly stated>**. The rest of this post unpacks why, and what to do about it.

<!-- 2. Why it matters / framing (1 paragraph) -->

For <ICP — local service business operators>, this matters because <consequence>.

## What <topic> actually is

<!-- 3. Definition — quotable for AEO -->

<Topic> is <definition>. In a service business, that looks like <concrete example>.

## How it works in practice

<!-- 4. Mechanism — real, not vague -->

The flow has three stages:

1. **<Stage>** — <what happens>
2. **<Stage>** — <what happens>
3. **<Stage>** — <what happens>

<!-- Optional Callout for a key point -->

<Callout type="info">
  Real, useful pull-out. Not a marketing aside.
</Callout>

## Common mistakes

<!-- 5. What goes wrong — earns trust -->

- <Mistake 1> — and why it backfires
- <Mistake 2> — and what to do instead
- <Mistake 3> — when it's actually fine

## What to do next

<!-- 6. Practical takeaway -->

If you're <reader's situation>, the fastest move is <specific recommendation>. If you're <other situation>, instead <other recommendation>.

For most service businesses, this lives inside [a broader automation system](/all-in-one-business-growth-system) — but you don't need to buy the whole thing on day one. Start with [<related service>](/<related-service-slug>) and expand from there.

## FAQ

<!-- 7. Real questions only — feeds FAQPage JSON-LD only if questions appear visually here -->

**Q: <Real question?>**
A: <Real answer.>

**Q: <Real question?>**
A: <Real answer.>

<!-- 8. CTA -->

<CTA
  headline="Want to map this for your business?"
  body="A 20-minute audit and we'll show you the gaps and the order of operations."
  href="/contact"
  label="Book a discovery call"
/>
```

## 4. Content rules

- **Voice + tone:** per `docs/brand/brand-guide.md` — confident, plainspoken, outcome-first.
- **Numbers:** real only. See `do-not-invent-rules.md`. Cite sources.
- **Examples:** anonymized internal patterns are OK only if accurate. Inventing fake examples is not OK.
- **Tone of CTAs:** direct, not pushy. One per post.
- **Image:** featured image at `/public/images/blog/<slug>.webp` per `image-prompt-bank.md`.

## 5. Required internal links

- **≥ 2 internal links** to service or industry pages (per `internal-linking-plan.md`).
- **First link to cluster hub** appears in the first 2 paragraphs.
- **Descriptive anchor text** — not "click here".

## 6. JSON-LD

Generated automatically from frontmatter (Article schema per `docs/seo/schema-plan.md`). The post template does not embed JSON-LD by hand.

If the post has a real FAQ section (visible in the body), FAQPage JSON-LD is generated from the visible Q/A pairs. If not, no FAQ JSON-LD.

## 7. Reading time

Computed: `Math.ceil(words / 230)`. Don't hand-fill — let the build compute it from the MDX content.

## 8. Draft posts

Set `draft: true` in frontmatter to keep a post out of the index, sitemap, and RSS feed while still building locally.

## 9. Update protocol

When a post is materially refreshed:

1. Bump `dateModified` to today.
2. Add a short "Updated YYYY-MM-DD:" line at the top of the body, summarizing what changed.
3. Re-run the publishing checklist.

## 10. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial MDX template + frontmatter spec. |
