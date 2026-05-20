# Blog Publishing Checklist — Sirius Systems

Per-post preflight. Run this before every `git commit` that publishes a post. If any item fails, fix before publish — do not "publish now, fix later."

---

## 1. Strategy fit

- [ ] Post matches a category from `blog-content-plan.md` taxonomy
- [ ] Post fits a cluster (A / B / C / Capstone) — see `topical-authority-plan.md`
- [ ] `targetQuery` declared in frontmatter and is the actual focus
- [ ] Post is on the planned calendar OR added to `blog-content-plan.md`'s backlog with a note

## 2. Frontmatter

- [ ] `title` ≤ 60 chars, sentence case
- [ ] `description` 140–160 chars, answers the central question in sentence 1
- [ ] `slug` matches filename, kebab-case, ≤ 60 chars, no date
- [ ] `date` is correct (publish date)
- [ ] `dateModified` equals `date` on first publish; updated on refreshes
- [ ] `author` matches the agreed byline convention
- [ ] `category` is one of the allowed values
- [ ] `tags` are 2–5 from the taxonomy (no new tag invented for this post alone)
- [ ] `featuredImage` path exists at `/public/images/blog/<slug>.webp`
- [ ] `featuredImageAlt` is descriptive, not keyword-stuffed
- [ ] `readingTime` computed (not hand-typed)
- [ ] `draft` set to `false` (or `true` if intentionally holding)
- [ ] `canonicalUrl` correct: `https://siriussys.io/blog/<slug>`

## 3. Content quality

- [ ] First 1–2 paragraphs state the question AND give the headline answer
- [ ] At least one definitional sentence quotable by AI engines
- [ ] H2s every ~300–500 words; no walls of unbroken prose
- [ ] Examples are real, not invented
- [ ] All numbers and stats are real and cited (or removed)
- [ ] No banned phrases: "best", "#1", "unlock", "supercharge", "10x", "game-changer" (without proof)
- [ ] Voice matches `brand-guide.md`

## 4. Do-not-invent audit

- [ ] No invented testimonials
- [ ] No invented client names
- [ ] No invented stats / percentages / dollar amounts
- [ ] No invented case studies
- [ ] No claims of guarantees, partnerships, awards, certifications
- [ ] Reference-site mentions (ClickVSG, Sirius Site Studio, Review Scraper) are framed as separate sister brands, not Sirius Systems

## 5. Internal linking

- [ ] ≥ 2 internal links to service or industry pages
- [ ] First link appears in the first 2 paragraphs
- [ ] Links target the cluster hub at least once
- [ ] Anchor text is descriptive (not "click here", "learn more", or raw URL)
- [ ] Each anchor varies across posts that link to the same destination

## 6. CTA

- [ ] Exactly one primary CTA at the end of the post
- [ ] CTA copy is specific, not generic ("Book a discovery call" > "Get in touch")
- [ ] CTA links to a real page (`/contact` or relevant service)

## 7. Image

- [ ] Featured image generated per `image-prompt-bank.md` (style baseline applied)
- [ ] Saved as WebP (preferred) at `/public/images/blog/<slug>.webp`
- [ ] Alt text descriptive, not keyword-stuffed
- [ ] Works at OG-card size (1200×630) AND at blog-card thumbnail
- [ ] No people, no readable text, no logos, no watermarks
- [ ] File size optimized (< 200KB target)

## 8. SEO meta

- [ ] `<title>` ≤ 60 chars, includes target query naturally
- [ ] `<meta description>` 140–160 chars, matches frontmatter
- [ ] Canonical URL set correctly
- [ ] OpenGraph title + description + image present
- [ ] Twitter card: `summary_large_image` with same image

## 9. Schema (JSON-LD)

- [ ] `Article` JSON-LD generated, valid at https://validator.schema.org/
- [ ] If the post has a visible FAQ section, `FAQPage` JSON-LD generated from those Q/A
- [ ] If no visible FAQ, no FAQPage JSON-LD
- [ ] No `AggregateRating` / `Review` schema in blog posts (those belong to LocalBusiness, not Articles)

## 10. Sitemap + indexing

- [ ] Post will be picked up by sitemap on next build (correct frontmatter, `draft: false`)
- [ ] No `noindex` directive (unless intentional)

## 11. Accessibility

- [ ] Headings are properly nested (H1 → H2 → H3, no skipped levels)
- [ ] Images have meaningful alt
- [ ] Links are descriptive
- [ ] No "click the red button" or color-only references
- [ ] All embedded media (if any) has captions / transcript

## 12. Mobile preview

- [ ] Preview at 375px — no layout breaks
- [ ] Featured image renders correctly
- [ ] Long code blocks (if any) scroll horizontally, not overflow

## 13. Build & lint

- [ ] `npm run build` succeeds locally
- [ ] No console errors on preview page
- [ ] No broken links inside the body (manual click-through or link-checker run)

## 14. Commit

- [ ] Commit message: `feat(blog): publish <slug>` or `docs(blog): publish <slug>` per repo convention
- [ ] Changelog updated: append a line to `docs/site-os/changelog/project-changelog.md`
- [ ] PR / push reviewed against this checklist

## 15. Post-publish (within 1 hour)

- [ ] Verify production URL renders correctly (`https://siriussys.io/blog/<slug>`)
- [ ] Verify JSON-LD on production (validator)
- [ ] Verify OG card preview (Twitter / Facebook debugger)
- [ ] Add to internal "published posts" tally (if tracked)

## 16. Post-publish (within 30 days)

- [ ] Add 1–2 internal links FROM other posts TO this post if the new post fits their context
- [ ] Re-check rankings + traffic for the target query
- [ ] If post is performing, refresh quarterly; if not, audit for fixable issues

---

## Quick sign-off

Before merging:

> "I've run every box above. The post is true, useful, well-linked, and indexable."

If you can't say that, the post isn't ready.
