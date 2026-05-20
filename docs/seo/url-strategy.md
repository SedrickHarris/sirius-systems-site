# URL Strategy — Sirius Systems

The authoritative URL map for the site. Every slug listed here is the **only** valid public form of that URL — no synonyms, no variants, no trailing slashes that contradict.

---

## 1. Design rules

1. **Lowercase, hyphen-separated, no trailing slash.** `/ai-chatbots`, not `/AI-Chatbots/`.
2. **Service pages are flat at the root.** `/ai-chatbots`, not `/services/ai-chatbots`. This optimizes for direct keyword targeting and matches how local-services-buyers search.
3. **Industries live under `/industries/`.** Two-level nesting maximum.
4. **Blog lives under `/blog/`.** Single level: `/blog/<slug>`. No date in URL.
5. **No category pages for the blog initially.** Categories are filterable on `/blog`, not their own routes (revisit if a category accumulates 10+ posts).
6. **No `/index.html`, no `.html` extensions, no `index` slugs.**
7. **One canonical URL per resource.** `www.siriussys.io` and `siriussys.io` collapse to one (TBD — confirm with client which is canonical).
8. **No tracking parameters in canonical URLs.** UTM tags allowed at runtime but `<link rel="canonical">` excludes them.

## 2. Canonical host

- **Canonical:** `https://siriussys.io` (no `www`, no trailing slash on root in `<link rel="canonical">`)
- **Redirects to canonical:**
  - `http://siriussys.io/*` → `https://siriussys.io/*`
  - `https://www.siriussys.io/*` → `https://siriussys.io/*` (or reverse, pending client confirmation)
  - Trailing slash variants → no trailing slash
- **Status code for redirects:** 301 permanent

> If the client wants `www` as canonical instead, invert the rules above. Decide once, encode in Cloudflare Pages, do not let both resolve.

## 3. Full URL map (Phase 1)

### Core (4)

| Slug | Purpose |
|------|---------|
| `/` | Home — positioning + service overview + capstone CTA |
| `/about` | Founder, mission, brand relationship to ecosystem |
| `/services` | Index of all 14 service pages |
| `/contact` | Lead capture + booking link |

### Service (14, flat)

| Slug | Category in `services.md` group |
|------|---------------------------------|
| `/ai-automation` | A — AI & automation |
| `/ai-chatbots` | A |
| `/ai-voicebots` | A |
| `/crm-automation` | A |
| `/appointment-booking-automation` | A |
| `/lead-generation-automation` | A |
| `/smart-websites` | B — Smart websites & local SEO |
| `/google-business-profile-optimization` | B |
| `/local-seo-aeo` | B |
| `/reputation-management` | C — Reputation |
| `/review-automation` | C |
| `/ai-review-responses` | C |
| `/competitor-review-benchmarking` | C |
| `/all-in-one-business-growth-system` | Capstone (A+B+C) |

### Industries (1 + 6)

| Slug | Notes |
|------|-------|
| `/industries` | Index — all 6 industry pages |
| `/industries/home-services` | |
| `/industries/cleaning-companies` | |
| `/industries/junk-removal` | |
| `/industries/real-estate` | |
| `/industries/contractors` | |
| `/industries/coaches-consultants` | "coaches-consultants" not "coaches-and-consultants" — keep slug compact |

### Blog (system)

| Slug | Notes |
|------|-------|
| `/blog` | Index, filterable by category |
| `/blog/<slug>` | Dynamic — slug is post-specific |

### Utility / legal

| Slug | Notes |
|------|-------|
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

### Reserved / future (do NOT publish in Phase 1 unless explicitly green-lit)

| Slug | Reason held |
|------|-------------|
| `/pricing` | Pricing model not confirmed |
| `/case-studies` | Real, permissioned case studies required |
| `/resources` | Lead-magnet strategy not confirmed |
| `/login`, `/dashboard` | No portal in Phase 1 |
| `/partners` | No partner program confirmed |

## 4. Slug naming patterns

- **Service pages:** keyword-exact. `/ai-chatbots`, not `/conversational-ai-for-businesses`.
- **Industry pages:** plural noun under `/industries/`. `/industries/contractors`, not `/industries/contractor`.
- **Blog posts:** descriptive, no clickbait, no dates, ideally ≤ 60 chars. Example: `/blog/google-business-profile-checklist-2026`.

## 5. Sitemap inclusion rules

- All Phase 1 pages are included.
- All published blog posts are included.
- `/privacy` and `/terms` are included (yes, search engines like seeing them).
- Reserved/future slugs are NOT in the sitemap until published.
- Drafts (`draft: true` in frontmatter) are NOT in the sitemap and NOT in `/blog` index.

## 6. Cross-link slug consistency

When any doc references a URL — page copy plan, metadata draft, schema plan, internal linking plan, blog post — it must use the exact slug from this file. If a slug here is wrong, fix it here first, then sweep all other docs.

## 7. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial map — 4 core + 14 service + 7 industry + blog + 2 utility. Canonical host TBD pending client (default: bare `siriussys.io`). |
