# VS Code Project Audit Report — Sirius Systems
Generated: 2026-05-27
Build: 41 routes (`next build` clean)
Tsc: clean (0 errors)

## Summary
- **Sections audited:** 11 (A through K)
- **Auto-fixed:** 1 item
  - Committed `scripts/qa-phase6-checks.mjs` per project-changelog.md 2026-05-27 entry which marked it "ready to commit if desired" (commit `9d7cdc9`).
- **Action required:** 6 items (see "Recommended pre-deploy actions")
  - Homepage metaTitle hard FAIL (inherited from Phase 6)
  - 8 manual QA checks still pending (inherited from Phase 6; webhook test was completed earlier this session — 200 OK)
  - Unstaged Level 4 SEO rewrite for `app/industries/hospitality-events/page.tsx`
  - 9 untracked logo variants in `public/images/logos/`
  - Untracked `scripts/qa-metadata-audit.mjs`
  - Stale TODO in `app/not-found.tsx:31` (blog has shipped — link still points at `/contact`)
- **Informational:** 5 items
  - 6 orphaned `components/site/` files (1 intentional retention, 5 likely legacy)
  - 6 moderate npm audit findings (below high threshold)
  - 4 industry-page TODOs gated on client CRM confirmation
  - GHL webhook URL hardcoded in `QualificationForm.tsx` (not env-based)
  - `trailingSlash` not explicitly set in `next.config.mjs` (default `false` is fine for Cloudflare Pages static export)

---

## Section results

### Section A — TypeScript integrity — PASS

- `npx tsc --noEmit` → exit code **0**, no diagnostics.

### Section B — Build integrity — PASS

- `npx next build` → exit code **0**.
- **41 routes** prerendered (40 static `○`, 1 SSG `●` for `/blog/[slug]` → `/blog/welcome`).
- No warnings, no errors. Static export to `out/` completed (`Exporting (2/2) ✓`).
- First Load JS shared by all: 103 kB. Heaviest route: `/contact` (9.01 kB / 115 kB First Load) — within reasonable Phase 7 bounds.

### Section C — Dependency audit — PASS (at high threshold)

- `npm audit --audit-level=high` → exit code **0**.
- **0 high or critical findings.**
- **Informational:** 6 moderate findings:
  - `postcss <8.5.10` — XSS via Unescaped `</style>` in CSS stringify (GHSA-qx2v-qp2m-jg93). Reached via `next` (transitively).
  - `uuid <11.1.1` — Missing buffer bounds check in v3/v5/v6 (GHSA-w5hq-g745-h8pq). Reached via `gaxios → googleapis-common → googleapis`.
- Per task protocol: moderate findings are informational only. Auto-fix would require `npm audit fix --force` which bumps `next` and `googleapis` to breaking-change versions — **NOT recommended pre-Phase 7.**

### Section D — Unused or orphaned files — 6 ORPHANED COMPONENTS FLAGGED

Six files in `components/site/` have **zero `from '@/components/site/...'` import references** anywhere in `app/`, `components/`, or `lib/`:

| File | Status | Note |
| --- | --- | --- |
| `components/site/CategoryCard.tsx` | UNREFERENCED | Mentioned in changelog Phase 1 entry; likely legacy. |
| `components/site/ContactFormEmbed.tsx` | UNREFERENCED — INTENTIONAL | `docs/site-os/inputs/embed-specs.md:71` explicitly documents: "retained in the repo but not used. No iframe specs needed." Keep. |
| `components/site/Container.tsx` | UNREFERENCED | Likely superseded by `.site-container` utility in `app/globals.css`. |
| `components/site/CTACard.tsx` | UNREFERENCED | Mentioned in Phase 1 changelog entries; likely legacy. |
| `components/site/CTASection.tsx` | UNREFERENCED | Mentioned in Phase 3 changelog (Sub-components) but no current import — may have been replaced by inline CTA panels. |
| `components/site/HowItWorksSteps.tsx` | UNREFERENCED | Mentioned in Phase 3 changelog as a sub-component of `ServicePageTemplate` but current template does not import it. |

**Not deleted in this audit** (per protocol). Recommended action: human decision to retain (with explicit retention docs like `ContactFormEmbed`) or delete after Phase 7.

### Section E — Environment variable audit — INFORMATIONAL

`.env.example` declares 12 keys:

```
NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_NAME,
NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
LEAD_FORM_ENDPOINT, LEAD_FORM_API_KEY,
BOOKING_PROVIDER, BOOKING_API_KEY,
GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID,
RESEND_API_KEY, CONTACT_EMAIL
```

**Code-side `process.env.*` references** (`app/`, `components/`, `lib/`, `scripts/`):

- `lib/blog.ts:54` → `process.env.NODE_ENV === 'development'`
- `lib/blog.ts:107` → `process.env.NODE_ENV === 'production'`
- `lib/blog.ts:128` → `process.env.NODE_ENV === 'production'`

`NODE_ENV` is a built-in framework variable; no `.env.example` entry needed.

**Finding:** None of the 12 declared env vars are currently consumed in source. All are placeholders for future integrations (analytics, lead forms, booking, reviews, email). **No undocumented / unguarded env var found** in code.

**Note on GHL webhook:** Task spec references `GHL_WEBHOOK_URL` as a "confirmed stub in Phase 5b". Current state: the URL is **hardcoded as a string literal** in `components/site/QualificationForm.tsx:8` (live URL as of commit `f08d875`). It is intentionally NOT env-based, and is therefore correctly absent from `.env.example`. Functional and tested (POST → 200 OK earlier this session). Future enhancement: move to env var to reduce client-bundle exposure and allow per-environment switching. **Not a Phase 7 blocker.**

### Section F — Console artifacts and TODO scan — 1 INTENTIONAL LOG (retained), 5 TODOs (flagged)

`grep -rn` across `app/`, `components/`, `lib/` for `console\.(log|warn|error|debug|info)|TODO|FIXME|HACK|XXX`:

| File:Line | Match | Category | Action |
| --- | --- | --- | --- |
| `lib/blog.ts:55` | `console.warn` (malformed-frontmatter dev warning) | INTENTIONAL — wrapped in `if (process.env.NODE_ENV === 'development')` block above. | **Retained.** Not a debug artifact. |
| `app/not-found.tsx:31` | `TODO: restore href="/blog" when blog ships` | STALE — blog has shipped at `/blog`. | Flagged — see Recommended actions. |
| `app/industries/healthcare-medical/page.tsx:158` | `TODO: confirm with client which platforms are used` | POST-LAUNCH — client CRM confirmation gates this. | Flagged. |
| `app/industries/home-services/page.tsx:166` | `TODO: confirm exact setup timelines before publishing Q5` | POST-LAUNCH — client confirmation. | Flagged. |
| `app/industries/professional-services/page.tsx:120` | `TODO: confirm with client — replace this answer with confirmed` | POST-LAUNCH — client confirmation. | Flagged. |
| `app/industries/real-estate-property/page.tsx:142` | `TODO: confirm with client which lead sources and CRM` | POST-LAUNCH — client confirmation. | Flagged. |

- **0** `FIXME` matches.
- **0** `HACK` matches.
- **0** `XXX` matches.

No console.* artifacts to auto-remove. The single `console.warn` is intentional dev-only diagnostics.

### Section G — Image and asset audit — ACTION REQUIRED

`public/` total assets: **20**. Unreferenced in source (excluding `_redirects`, `robots`, `favicon`): **10**.

| Asset | Status |
| --- | --- |
| `public/images/blog/.gitkeep` | INTENTIONAL — keeps the `images/blog/` dir present in the tree. |
| `public/images/logos/Sirius Systems Logo AI Automation and SEO Services for Small Business (1).png` | UNTRACKED, UNREFERENCED |
| `public/images/logos/Sirius Systems Logo AI Automation and SEO Services for Small Business.png` | UNTRACKED, UNREFERENCED |
| `public/images/logos/Sirius Systems Logo AI Automation and SEO Services for Small Business.webp` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-cropped-logo.png` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-cropped-logo.webp` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-cropped-transparent-logo.png` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-cropped-transparent-logo.webp` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-logo.png` | UNTRACKED, UNREFERENCED |
| `public/images/logos/sirius-systems-star-business-name-logo.webp` | UNTRACKED, UNREFERENCED |

**Context:** `components/site/Header.tsx:52` uses `/images/brand/sirius-systems-logo.webp` (different directory). The new `public/images/logos/` dir is brand-new, untracked, and not wired into the site. The 9 files include duplicates (`(1).png`) and a mix of variants (cropped vs. uncropped, transparent vs. solid, PNG vs. WEBP).

**Recommended action:** human decision — (a) pick canonical variants, wire one into Header/Footer, and remove duplicates; (b) keep one canonical variant and gitignore the rest as working copies; or (c) commit all as documented brand asset bank. Phase 7 deploy is unaffected (assets not referenced = not shipped).

### Section H — next.config.mjs review — PASS

```js
output: 'export'        // ✓ required for Cloudflare Pages static deploy
images.unoptimized: true // ✓ required for static export
pageExtensions: ['ts','tsx','md','mdx']
reactStrictMode: true
// trailingSlash: not set (default false)
```

- `output: 'export'` ✓
- `images.unoptimized: true` ✓
- No dev-only config present (no `experimental`, no `webpack` overrides, no `headers/redirects` that would conflict with Cloudflare).
- `trailingSlash` not set → default `false`. Next 15 + export still produces `out/<route>/index.html` for each app-router route, so the deployed URLs work either way on Cloudflare Pages. **No action required.**
- MDX integration is wired via `withMDX` wrap — consistent with `app/blog/` + `content/blog/*.mdx` usage.

### Section I — Tailwind config review — PASS

- **Content array** covers:
  - `./app/**/*.{ts,tsx,md,mdx}` ✓
  - `./components/**/*.{ts,tsx}` ✓
  - `./content/**/*.{md,mdx}` ✓ (for blog MDX)
  - `./lib/**/*.{ts,tsx}` ✓
  - `./mdx-components.tsx` ✓
- **Brand tokens vs `docs/brand/brand-guide.md` and `docs/brand/brand-skill.md`:**
  - `background: #050505` ✓ matches brand-guide.md:100, brand-skill.md:41
  - `primary: #F2EA00` ✓ matches brand-guide.md:104, brand-skill.md:45
  - `secondary: #1468FF` ✓ matches brand-guide.md:107, brand-skill.md:47
  - `accent: #1468FF` (alias to secondary) ✓ matches brand-guide.md:110
  - `foreground: #F5F7FA`, `muted-foreground: #B7C0D1`, `border: #2A2F3A`, `border-strong: #3F4654` — all aligned with `app/globals.css` CSS variables (`--text`, `--text-muted`, `--border`, `--border-strong`).
- **Hardcoded hex values** in `colors{}` are intentional — this IS the token source. No drift with `app/globals.css` (which mirrors them as CSS variables, including backward-compat Stage 1-4 aliases).
- **Typography:** display + body font families bound to `var(--font-display)` / `var(--font-body)` (set in `app/layout.tsx`) with sensible fallbacks. Mono stack defined.
- **Plugins:** `@tailwindcss/typography` registered.

No gaps between brand guide and configured tokens.

### Section J — Open TODO tracker

| File:Line | TODO Text | Category | Recommended Action |
| --- | --- | --- | --- |
| `app/not-found.tsx:31` | `restore href="/blog" when blog ships` | **STALE** — blog shipped at `/blog`, `/blog/welcome` | **Copy decision required.** Either (a) change href from `/contact` to `/blog` AND update link text from "contact us" to "the blog", or (b) remove the TODO and accept the current `/contact` link as the canonical 4th nav option in the 404 page. |
| `app/industries/healthcare-medical/page.tsx:158` | `confirm with client which platforms are used` | **POST-LAUNCH** — gated on `content-needed-from-client.md` §2.4 (CRM choice — still BLOCKED) | Resolve as a batch when client confirms platform stack. |
| `app/industries/home-services/page.tsx:166` | `confirm exact setup timelines with client before publishing Q5` | **POST-LAUNCH** — gated on client confirmation | Resolve when client confirms timelines. |
| `app/industries/professional-services/page.tsx:120` | `confirm with client — replace this answer with confirmed` | **POST-LAUNCH** — gated on client | Resolve when client confirms. |
| `app/industries/real-estate-property/page.tsx:142` | `confirm with client which lead sources and CRM` | **POST-LAUNCH** — gated on `content-needed-from-client.md` §2.4 | Resolve when client confirms. |

**Cross-reference:** `docs/site-os/inputs/content-needed-from-client.md` §2.4 (CRM choice) is still unresolved in the "Important" tier — this gates 4 of the 5 TODOs above. The `not-found.tsx` TODO is the only one that is **stale** (its resolution condition — "when blog ships" — is met), but acting on it is a copy change and is therefore left to a human decision per the audit's fix protocol.

No TODOs auto-removed.

### Section K — Git status — UNCOMMITTED WORK PRESENT

**Recent 10 commits at audit start:**

```
f08d875 feat: update live GHL qualification webhook URL
7985d31 qa: Phase 6 prelaunch QA sweep — report generated
8c80a85 chore: remove stale pre-launch comment from QualificationForm
b1b718e feat: wire live GHL webhook URL into qualification form
f23872c seo: /industries/technology-b2b Level 4 copy rewrite + resolve professional-services cross-link TODO
dfe1de5 seo: /industries/community-faith-nonprofit Level 4 copy rewrite
d818588 seo: /industries/education-childcare Level 4 copy rewrite
1acce64 seo: industry hub metaTitle cleanup — 4 pages over limit or generic pattern
22ac1ac feat: add LeadConnector chat widget site-wide
396bced docs: lock in confirmed GHL calendar iframe dimensions
```

**Working tree state at audit start:**

| Path | State | Disposition in this audit |
| --- | --- | --- |
| `app/industries/hospitality-events/page.tsx` | **Modified** (unstaged) | Substantial Level 4 SEO copy rewrite — pattern matches recent committed industry rewrites (`dfe1de5`, `f23872c`). **Out of scope for this audit; flagged in Recommended actions.** |
| `public/images/logos/` | **Untracked** | 9 new logo variants. **Flagged in Section G + Recommended actions.** |
| `scripts/qa-metadata-audit.mjs` | **Untracked** | Auxiliary metadata audit script. Not authorized by changelog. **Flagged.** |
| `scripts/qa-phase6-checks.mjs` | **Untracked** | Per `project-changelog.md` 2026-05-27 entry: "ready to commit if desired". **AUTO-COMMITTED** as `9d7cdc9`. |

---

## Auto-fixes applied

1. **`scripts/qa-phase6-checks.mjs`** — committed as `9d7cdc9` (`chore: commit Phase 6 QA reproducibility script`). Authorization: `docs/site-os/changelog/project-changelog.md` 2026-05-27 entry explicitly marked it "ready to commit if desired". This is the script that reproduces automated checks 3C, 3E, 3F, 3G, 3H, 3I, 3J, 3K from `docs/site-os/qa/qa-report-phase6.md`.

No other auto-fixes were applied. Specifically:

- The single `console.warn` in `lib/blog.ts` is wrapped in `NODE_ENV === 'development'` and is intentional, not a debug artifact.
- The 5 TODO comments either (a) gate on still-unresolved client input (4 of 5) or (b) require a copy decision to resolve (1 of 5). None fit "stale TODO where `content-needed-from-client.md` confirms RESOLVED → remove the comment".

---

## Recommended pre-deploy actions

### Required (Phase 7 gate items inherited from Phase 6)

1. **Homepage metaTitle trim** (`app/page.tsx:36`, 76 chars > 60-char cap). Phase 6 report proposed three options at 47 / 52 / 59 chars. **REMAINS A HARD FAIL until resolved.** (Not introduced by this audit — inherited from `qa-report-phase6.md`.)
2. **8 manual checks** documented in `qa-report-phase6.md §Manual checks pending`. **Webhook test (M4) was completed earlier this session** against the live URL with a marked test payload → HTTP 200 OK. Remaining: M1 Lighthouse, M2 schema validator, M3 mobile visual review at 375px, M5 footer link audit, M6 header nav audit, M7 404 page test on live deploy, M8 Cloudflare `_redirects` edge test post-deploy.

### High priority — should resolve before Phase 7

3. **Decide on `app/industries/hospitality-events/page.tsx` unstaged rewrite.** Complete Level 4 SEO copy rewrite is sitting unstaged (metaTitle, metaDescription, headline, subheadline, problems, systems, sub-verticals, FAQs, new ctaHeadline/ctaBody/ctaPrimaryLabel block). Pattern matches recent committed industry rewrites. **Either commit as `seo:` or revert with `git restore`.**
4. **Decide on `public/images/logos/`.** 9 untracked logo variants exist but none are referenced (Header uses `/images/brand/sirius-systems-logo.webp`). Includes a `(1).png` duplicate. Pick canonical variant(s), wire or remove, then commit or gitignore.
5. **Decide on `scripts/qa-metadata-audit.mjs`.** Auxiliary metadata audit script untracked. Not mentioned in changelog. If retained for ongoing QA use, commit as `chore:`; otherwise delete.
6. **`app/not-found.tsx:31` TODO.** Blog has shipped — TODO is stale. Copy decision: swap `href="/contact"` to `href="/blog"` and update link text from "contact us" to "the blog", **or** remove the TODO and accept the current "contact us" link as the 4th nav option.

### Informational — no action required for Phase 7

7. **Six orphaned components** in `components/site/` — none imported. `ContactFormEmbed.tsx` is intentional retention (per `embed-specs.md`). The other 5 (`CategoryCard`, `Container`, `CTACard`, `CTASection`, `HowItWorksSteps`) are likely Phase 1-4 legacy. Decide retain-vs-delete at leisure.
8. **Six moderate npm audit findings** (postcss / uuid chains via next + googleapis). Below the high threshold gate. Auto-fix requires breaking-change upgrades to `next` and `googleapis` — **NOT recommended pre-Phase 7.**
9. **Four industry-page TODOs** gated on client CRM confirmation (`content-needed-from-client.md` §2.4). Resolve as a single SEO sweep when client confirms platforms.
10. **GHL_WEBHOOK_URL hardcoded** in `components/site/QualificationForm.tsx:8` (not env-based). Functional and tested (HTTP 200 OK). Future enhancement: move to env var. **Not a Phase 7 blocker.**

---

## Pass / fail gate

- [x] `npx tsc --noEmit` exits 0
- [x] `npx next build` exits 0 (41 routes, all prerendered)
- [PARTIAL] `git status` clean after auto-fixes — `scripts/qa-phase6-checks.mjs` committed as `9d7cdc9`. **Pre-existing in-flight items remain uncommitted** (hospitality-events SEO rewrite, `scripts/qa-metadata-audit.mjs`, `public/images/logos/`). These were present at audit start and fall outside the auto-fix protocol; each is enumerated under "Recommended pre-deploy actions" so the user can decide before Phase 7.
- [x] Audit report written to `docs/site-os/qa/vs-code-audit-report.md`
