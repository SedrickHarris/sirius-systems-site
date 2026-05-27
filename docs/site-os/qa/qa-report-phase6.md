# Phase 6 QA Report — Sirius Systems
Generated: 2026-05-27
Build: 41 routes (`next build` clean)
Tsc: clean

## Summary

- **PASS**: 9 of 11 automated check groups
- **FAIL**: 1 hard fail (home page metaTitle 76 chars), 1 known/accepted (hospitality-events metaTitle 68 chars)
- **MANUAL PENDING**: 7 manual checks documented for human verification before Phase 7 deploy

Verdict at the bottom.

---

## Section results

### 3A Build integrity — PASS

- `npx tsc --noEmit` → exit 0, no diagnostics
- `npx next build` → exit 0, 41 static routes generated, no warnings
- All routes prerendered as `○ (Static)` except `/blog/[slug]` (`●` SSG)

### 3B Route coverage — PASS

All 35 required routes present in `out/`:
- Core (4), Service (14), Industry (13), Utility (2), Sitemap + robots (2)
- Zero missing

### 3C metaTitle lengths — 1 FAIL + 1 KNOWN OVER

Audited every `metaTitle:` / `title:` literal in `app/**/page.tsx`. Two metaTitles exceed the 60-char gate:

| File | Title | Length | Status |
|---|---|---|---|
| `app/page.tsx:36` | `AI Automation & Growth Systems for Local Service Businesses \| Sirius Systems` | 76 | **FAIL — not yet reviewed** |
| `app/industries/hospitality-events/page.tsx:12` | `Hospitality & Events Automation: Bookings & Reviews \| Sirius Systems` | 68 | KNOWN — accepted by user 2026-05-26 ("use provided") |

All other 36 metaTitle exports are ≤ 60 chars. False positives from card heading objects (e.g. `title: 'Audit'`, `title: 'Run'` on `/`, `/about`, `/contact`) were filtered out — those are card data, not page metadata.

**Recommended trim options for `app/page.tsx`:**

- `AI Automation & Growth Systems | Sirius Systems` (47 chars) — terse, on-brand
- `AI Automation for Local Service Businesses | Sirius Systems` (59 chars) — preserves "Local Service Businesses" specificity
- `Sirius Systems — AI, Smart Sites & Reputation Systems` (52 chars) — leads with brand, matches `metadata-draft.md` core-pages style

### 3D Forbidden schema — PASS

Grep for `@type.*AggregateRating`, `@type.*Review`, `@type.*Product`, `@type.*Offer` across `app/**/*.tsx` returned **0 matches**.

### 3E Do-not-invent pattern scan — PASS (all hits false positives)

The keyword scan returned 30 hits. Manual review of every hit confirms zero invented claims. Categorized:

- **`guarantee` (5 hits)** — all in copy *denying* guarantees:
  - `app/about/page.tsx:34` → `"Guarantees we can't actually enforce"` (anti-promise list)
  - `app/blog/[slug]/page.tsx:13` → code comment, not user-facing
  - `app/industries/healthcare-medical/page.tsx:167` → `"We do not make blanket compliance guarantees"`
  - `app/page.tsx:641` → `"No guarantees we can't actually enforce"` (anti-promise list)
  - `app/reputation-management/page.tsx:94` → response context, no claim made
  - `app/terms/page.tsx:115` → `"or guarantee of results"` (legal disclaimer)
- **`results` (24 hits)** — all are common-English usage in explanatory copy ("Maps results", "see results from local SEO", "produce compounding results over weeks"). None assert a specific outcome metric.
- **`See my results`** in `components/site/QualificationForm.tsx:982` — this is button copy on the qualified result page, not a claim.

Pattern scan is intentionally noisy; no action needed. Manual brand-voice review during the Lighthouse pass should re-confirm.

### 3F Broken internal links — PASS (5 hits are template literals)

Crawler returned 5 "broken" routes: `/industries/${industry.slug}`, `/${s.slug}`, `/${capstone.slug}`, `/industries/${i.slug}`, `/${service.slug}`. These are template-literal hrefs evaluated at render time, not static URLs. Slug arrays verified:

- `lib/industries.ts` → 12 slugs, all match `/industries/<slug>` routes in `out/`
- `lib/services.ts` → 14 slugs, all match `/<slug>` routes in `out/`

All 13 static internal href patterns scanned were valid. No actual broken links.

### 3G NAP consistency — PASS

All 7 fields in `lib/site.ts` match `docs/site-os/inputs/verified-public-sources.md` (GBP-confirmed 2026-05-23):

- ✓ `SITE.contact.phone.display = '(727) 222-3424'`
- ✓ `SITE.contact.phone.href = 'tel:+17272223424'`
- ✓ `SITE.contact.email.display = 'info@siriussys.io'`
- ✓ `SITE.contact.email.href = 'mailto:info@inbox.siriussys.io'`
- ✓ `SITE.contact.address` includes `'304 S Jones Blvd Ste 1915'`
- ✓ `SITE.contact.legal` includes `'SHH Group'`
- ✓ `SITE.url = 'https://siriussys.io'`

### 3H Sitemap coverage — PASS

`out/sitemap.xml` contains 36 `<url>` entries. All 33 required Phase 1 routes are present. Extras: `/booking`, `/blog`, `/blog/welcome` (the published MDX post). Zero missing.

### 3I robots.txt — PASS

`out/robots.txt`:
```
User-Agent: *
Allow: /
Disallow: /api/

Host: https://siriussys.io
Sitemap: https://siriussys.io/sitemap.xml
```
All 4 required directives present.

### 3J _redirects — PASS

`public/_redirects` contains the contractors → construction-contractors 301:
```
/industries/contractors  /industries/construction-contractors  301
```
**MANUAL PENDING**: Cloudflare Pages edge behavior must be confirmed on the live deploy (per `prelaunch-checklist.md §12b`).

### 3K FAQ schema byte-identity — PASS (all 5 samples)

| File | Pattern | Result |
|---|---|---|
| `app/ai-automation/page.tsx` | `faqPage(PAGE.faqs)` | ✓ structurally identical |
| `app/industries/home-services/page.tsx` | `faqPage(DATA.faqs)` | ✓ |
| `app/industries/technology-b2b/page.tsx` | `faqPage(DATA.faqs)` | ✓ |
| `app/all-in-one-business-growth-system/page.tsx` | `faqPage(PAGE.faqs)` | ✓ structurally identical |
| `app/industries/community-faith-nonprofit/page.tsx` | `faqPage(DATA.faqs)` | ✓ |

Every sampled page feeds the same array to both the visible FAQ component and the FAQPage JSON-LD builder. Byte-identity is structurally guaranteed by the pattern — no per-string drift possible. Service-page variant uses `PAGE.faqs`; industry-page variant uses `DATA.faqs`. Both equivalent.

---

## Manual checks pending

These must be completed by a human before Phase 7 deploy. Each is listed with method + URL or tool. None are blockers for the automated gate but all are blockers for the prelaunch checklist (`docs/site-os/qa/prelaunch-checklist.md`).

| # | Check | Method |
|---|---|---|
| M1 | Lighthouse mobile audit (Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO = 100) | https://pagespeed.web.dev/ — run against `/`, `/ai-automation`, `/industries/home-services` minimum |
| M2 | Schema validation | https://validator.schema.org/ — paste JSON-LD from `/`, `/ai-automation`, `/ai-chatbots`, `/industries/home-services`, `/industries/technology-b2b` |
| M3 | Visual review at 375px (iPhone SE) | DevTools mobile mode on every page type. Confirm no horizontal scroll, no overlapping elements, touch targets ≥ 44px |
| M4 | QualificationForm submission test | Submit the form with test data; confirm webhook fires by checking GHL endpoint logs. URL now live (`https://services.leadconnectorhq.com/hooks/qsRpwFouj6uMgzSHHDn3/webhook-trigger/lLqIumMk4qgVaHUlVeio`) as of commit `b1b718e` |
| M5 | Footer link audit | Click every link in the footer; confirm zero 404s |
| M6 | Header navigation audit | Click every nav link; confirm correct routing |
| M7 | 404 page test | Navigate to `/does-not-exist` on the live deploy; confirm 404 status returned and brand styling renders |
| M8 | Cloudflare _redirects edge test | After deploy, hit `siriussys.io/industries/contractors` and confirm 301 to `/industries/construction-contractors` |

---

## Launch readiness verdict

**NOT READY — 1 hard fail to resolve.**

Required before Phase 7:
1. **Decide on `app/page.tsx` metaTitle trim** (76 → ≤ 60 chars). Three options in section 3C. After fix, re-run `tsc` + `next build`.

After (1) is resolved, automated gate is green. The 8 manual checks above must then be completed (human verification) before the Cloudflare Pages deploy.

Hospitality-events metaTitle (68 chars) is the only other gate-failing item and was explicitly accepted by the user on 2026-05-26 — re-confirm whether to keep at 68 or trim during the homepage decision.

---

## Reproducibility

Automated checks 3C, 3E, 3F, 3G, 3H, 3I, 3J, 3K are wrapped in `scripts/qa-phase6-checks.mjs`. Re-run after any change with:

```powershell
npx tsc --noEmit
npx next build
node scripts/qa-phase6-checks.mjs
```

3B (route coverage) and 3D (forbidden schema grep) are documented inline in the task spec.
