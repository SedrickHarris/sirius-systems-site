# Project Changelog — Sirius Systems

Reverse-chronological record of meaningful project changes. Updated **in the same commit** as the change itself, not later.

Format per entry:

```
## YYYY-MM-DD — <short title>
- type: docs | feat | fix | seo | brand | chore | refactor
- author: <name>
- changes: <one-line summary>
- files: <relevant paths or globs>
- notes: <optional context, blockers raised, decisions made>
```

---

## 2026-05-20 — Google Reviews module (cards + carousel + neutral fallback)

- type: feat
- author: Sirius Systems / Claude Code
- changes: Built the Google Business Profile reviews module — reusable components plus a single gating layer that guarantees no fabricated review data can render.
  - **Data layer**: `data/google-reviews.json` ships with `verified: false` and an empty `reviews` array. `lib/google-reviews.ts` wraps the file with strict accessors (`hasVerifiedReviews()`, `getVerifiedReviews()`, `getSummary()`, `getPlaceUrl()`). A review only renders when both the top-level `verified` flag is true AND every review object carries `verified: true` + `permissionToPublish: true`. The `Review` type literally types those fields as `true` rather than `boolean`, so accidentally-permissioned data trips TypeScript.
  - **Components** (`components/reviews/`): `GoogleReviewCard` (avatar initial, name, date, 5-star scale, body, "Google" source label, optional view-on-Google link); `GoogleReviewsGrid` (sm/md/lg responsive); `GoogleReviewsCarousel` (`'use client'`, native CSS scroll-snap + touch swipe + arrow-key scrolling + ARIA carousel/slide roles + Prev/Next buttons; no auto-advance; reduced-motion safe); `GoogleReviewSummary` (compact aggregate card — avg rating, count, last-updated, view-on-Google link); `GoogleReviewsSection` (orchestrator with `variant: 'grid' | 'carousel'`, falls back to a positive `NeutralTrustFallback` block when no verified reviews exist).
  - **No invented data**: the neutral fallback is a real on-brand statement — "We don't show reviews until they're real, verified, and the reviewer has agreed to be quoted" — with a direct link to the live GBP. No "Loading...", no placeholder reviews, no fake stars.
  - **No schema yet**: no Review or AggregateRating JSON-LD is emitted by these components. Per `docs/seo/schema-plan.md` §8 those only ship once Place ID is confirmed (content-needed 2.8) and the verification process is approved.
  - **Wired into home page**: new section "06 / What people say" between Reputation deep dive and Who-we-help. Currently renders the neutral trust fallback. Downstream section indices renumbered (Who we help → 07, Why Sirius → 08, Process → 09, FAQ → 10) and alternating surface backgrounds adjusted to keep the page rhythm.
- files: `data/google-reviews.json`, `lib/google-reviews.ts`, `components/reviews/{GoogleReviewCard,GoogleReviewsGrid,GoogleReviewsCarousel,GoogleReviewSummary,GoogleReviewsSection}.tsx`, `app/page.tsx`
- notes: When real reviews are ready, the only changes needed are (a) populate `data/google-reviews.json` with `verified: true`, real summary fields, and real review objects each marked `verified: true` + `permissionToPublish: true`; (b) confirm Place ID (content-needed 2.8); (c) optionally enable Review/AggregateRating JSON-LD per `schema-plan.md` §8 once the verification path is documented. The components, fallback, and orchestrator do not need to change.

## 2026-05-20 — Phase 2: core pages built (/, /about, /services, /contact)

- type: feat
- author: Sirius Systems / Claude Code
- changes: Built the four core pages on the existing Next.js scaffold per `docs/content/page-copy-plan.md` and the Phase 2 brief. Two-column hero pattern with right-side CTA card on home/about/services and a real lead-capture form (disabled until endpoint lands) on /contact. Editorial section markers (`SectionLabel`: "00 / Section name") give the pages a magazine-like rhythm. Dark, dot-grid + radial-glow atmosphere with sky-blue accent — distinct from generic AI-startup aesthetics.
  - Typography refresh: swapped placeholder font from Inter-only to **Bricolage Grotesque (display) + Inter (body)** via `next/font/google`. Updated `brand-guide.md` §4 to match.
  - Theme additions: `surface` + `surface-2` colors for elevated card panels; `border-strong` token; `bg-grid-dots` / `bg-grid-faint` background utilities; `glow-accent` radial; CSS-only noise texture; `tracking-eyebrow` letter-spacing; `container-page` widened to `max-w-7xl` per the brief ("expanded container width so the layout does not feel bunched").
  - Component library (`components/site/`): `SectionLabel`, `ConstellationGlyph` (CSS-only abstract glyph used as the image placeholder on service/category cards — 6 variants, no asset requests), `ServiceCard`, `CategoryCard`, `CTACard`, `CTASection`, `FAQ` (native `<details>` for a11y + no-JS), `ProcessStep`, `IndustryChip`, `JsonLdScript`.
  - Data: `lib/services.ts` (canonical 14 services + 4 groups), `lib/industries.ts` (6 industries), `lib/faq.ts` (real Q/A for home + contact — visible content matches the FAQPage JSON-LD), `lib/schema.ts` (helpers for WebPage / BreadcrumbList / FAQPage; no AggregateRating / Review / LocalBusiness per `do-not-invent-rules.md` + Phase 2 schema scope).
  - Header upgraded with active-route indicator (accent underline on the current section) and a primary "Book a call" CTA. Footer rebuilt with 4 columns (Brand / Services / Industries / Company), real social links from `verified-public-sources.md`, and a TODO marker for the legal business name (content-needed 1.4).
  - All "do-not-invent" rules honored. No testimonials, no logo strip, no metric counters, no fake reviews, no invented case studies. Phone, email, founder bio, and legal name appear as explicit "Pending confirmation" placeholders rather than fabrications.
  - Schema emitted: `WebPage` on all 4 pages. `BreadcrumbList` on /about, /services, /contact. `FAQPage` on / and /contact (questions match visible body content 1:1).
- files: `app/{layout,page,globals.css}`, `app/{about,services,contact}/page.tsx`, `tailwind.config.ts`, `components/site/{Header,Footer,SectionLabel,ConstellationGlyph,ServiceCard,CategoryCard,CTACard,CTASection,FAQ,ProcessStep,IndustryChip,JsonLdScript}.tsx`, `lib/{services,industries,faq,schema}.ts`, `docs/brand/brand-guide.md`, `README.md`
- notes: Internal links to Phase 3 routes (`/ai-automation`, `/reputation-management`, all 14 service pages, all 6 industry pages, `/privacy`, `/terms`) currently 404 — these are "planned routes" per the spec. Form submit is disabled until `LEAD_FORM_ENDPOINT` is provided (content-needed 2.5). Phone, email, legal name, founder bio, headshot, real positioning line, and brand color/font choices are still blocked on items 1.1, 1.2, 1.4, 1.6–1.8, 1.11, 1.12 in `content-needed-from-client.md`.

## 2026-05-20 — Docs refinement: smart-websites cluster placement + scaffold-doc sync

- type: docs
- author: Sirius Systems / Claude Code
- changes: Cross-doc consistency pass after the scaffold landed. Fixed three issues:
  1. `brand-guide.md` §3 referenced a `// TODO color` code-comment convention, but the scaffold actually uses `PLACEHOLDER` as the marker — updated the guide to match the code so search-and-replace finds every swap point.
  2. Moved `/smart-websites` from Pillar 1 (AI automation) to Pillar 3 in `topical-authority-plan.md` so its cluster placement matches `site-build-plan.md`, `internal-linking-plan.md`, `page-copy-plan.md`, and `url-strategy.md` (all of which put `/smart-websites` in Group B with local SEO + GBP). Renamed Pillar 3 / Cluster C to "Smart websites + Local SEO + AEO + GBP". Adjusted hub-and-spoke ASCII diagram (3 hubs in Pillar 3, not 2). Moved the "Smart website vs. brochure site" blog post from Cluster A to Cluster C in both `topical-authority-plan.md` and `blog-content-plan.md`.
  3. Added an explicit naming note to `topical-authority-plan.md` calling out that Cluster A/B/C letters in the SEO taxonomy do NOT all match Group A/B/C letters in the service-page UI taxonomy — and giving the exact mapping so readers don't get tripped up.
- files: `docs/brand/brand-guide.md`, `docs/seo/topical-authority-plan.md`, `docs/seo/blog-strategy.md`, `docs/content/blog-content-plan.md`
- notes: Brand-name spelling audited clean (no "Sirius System" / "SiriusSystems" variants). All 14 service slugs and all 6 industry slugs verified consistent across docs. No invented claims introduced or removed.

## 2026-05-20 — Next.js scaffold + global shell

- type: feat
- author: Sirius Systems / Claude Code
- changes: Scaffolded the Next.js App Router project. Added `package.json` (Next 15 + React 19 + TypeScript + Tailwind 3 + MDX + lucide + clsx/tailwind-merge), `tsconfig.json`, `next.config.mjs` (with `@next/mdx`), `tailwind.config.ts` (brand tokens — placeholder colors/fonts per brand-guide), `postcss.config.mjs`, `mdx-components.tsx`. Built the global shell: `app/layout.tsx` (with Inter as placeholder display font, skip-link, metadata, viewport), `app/page.tsx` (placeholder home), `app/not-found.tsx` (404 matching brand). Stub components: `Header`, `Footer`, `Container`, `Section`. Lib: `lib/site.ts` (single source of site constants — name, url, founder, social, ecosystem siblings), `lib/cn.ts` (tailwind-merge helper). DX: `.editorconfig` + `.gitattributes` to enforce LF line endings cross-platform. `.gitignore` updated for `*.tsbuildinfo` and `next-env.d.ts`.
- files: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `mdx-components.tsx`, `app/{layout,page,not-found}.tsx`, `app/globals.css`, `components/site/{Header,Footer,Container,Section}.tsx`, `lib/{cn,site}.ts`, `.editorconfig`, `.gitattributes`, `.gitignore`, `README.md`
- notes: `npm install` and build verification have NOT been run from this scaffold yet (no node_modules generated this session). Phase 2 (page content) starts with `npm install && npm run dev` then a smoke test. Brand color + font values are explicit `PLACEHOLDER` — every appearance is searchable, swap when client confirms items 1.6–1.8.

## 2026-05-20 — Site OS foundation docs populated

- type: docs
- author: Sirius Systems / Claude Code
- changes: Populated the full Site Master OS documentation foundation — README, brand snapshot, all docs/site-os/inputs/, all docs/seo/, all docs/brand/, all docs/content/, prelaunch checklist, prompt templates. No code yet.
- files: `README.md`, `brand.md`, `.env.example`, `docs/**/*.md`
- notes: Twelve client-blocker items logged in `docs/site-os/inputs/content-needed-from-client.md` (phone, email, service area, legal name, logo files, colors, type, privacy, terms, founder bio, positioning line). Build cannot proceed past Phase 0 until these resolve. Reference-site separation (ClickVSG, Sirius Site Studio, Review Scraper) recorded as ecosystem inspiration only — they are NOT to be presented as Sirius Systems on this site.

## 2026-05-20 — Repository initialized

- type: chore
- author: Sedrick Harris
- changes: Created GitHub repo, cloned locally, scaffolded directory structure (`docs/site-os/`, `docs/seo/`, `docs/brand/`, `docs/content/`, `content/blog/`, `public/images/blog/`), added .gitignore for Claude local settings + standard Node/build artifacts.
- files: repository scaffolding
- notes: Initial root commit pushed to `origin/main`.
