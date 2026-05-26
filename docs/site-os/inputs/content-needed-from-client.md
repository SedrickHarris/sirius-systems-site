# Content Needed From Client — Sirius Systems

Single source of truth for everything the build is **blocked on** until the client provides it. When an item arrives, mark it `[RECEIVED YYYY-MM-DD]` and move the value into `client-discovery-notes.md` under "Confirmed facts."

> **Rule:** items in this file must NOT be invented to unblock the build. They either get the real answer or the relevant page/component is omitted/placeholder until they do.

---

## 1. Critical — blocks launch

These must be answered before the site can ship.

| # | Item | Why it blocks launch |
|---|------|----------------------|
| 1.1 | ~~Publishable phone number~~ — **RESOLVED 2026-05-23**: `(727) 222-3424` (E.164 `+17272223424`). Source: GBP. | Header, footer, contact page, schema |
| 1.2 | ~~Publishable email address~~ — **RESOLVED 2026-05-25** (`display: info@siriussys.io`, `href: mailto:info@inbox.siriussys.io`; confirmed by client). | Footer, contact page, schema |
| 1.3 | ~~Service area (specific cities / metros / "nationwide remote")~~ — **RESOLVED 2026-05-25**: worldwide; HQ Las Vegas NV; `areaServed: 'Worldwide'` in LocalBusiness + all 14 service schemas. | Schema `areaServed`, page copy, GBP consistency |
| 1.4 | ~~Legal business name~~ — **RESOLVED 2026-05-23**: `SHH Group, doing business as Sirius Systems`. Source: GBP. | Footer, Terms, Privacy |
| 1.5 | ~~Final logo files (SVG light + SVG dark + favicon source)~~ — **RESOLVED 2026-05-25** (confirmed applied). | Header, footer, favicon, social cards |
| 1.6 | ~~Primary brand color (hex)~~ — **RESOLVED 2026-05-25** (confirmed applied). | Tailwind theme, accent treatments |
| 1.7 | ~~Secondary brand color (hex)~~ — **RESOLVED 2026-05-25** (confirmed applied). | Backgrounds, hover states |
| 1.8 | ~~Type pairing decision (display + body)~~ — **RESOLVED 2026-05-25** (confirmed applied). | Tailwind theme, all type |
| 1.9 | ~~Privacy Policy~~ — **RESOLVED 2026-05-23** (template-based, shipped at `/privacy` with confirmed NAP). | `/privacy` page |
| 1.10 | ~~Terms of Service~~ — **RESOLVED 2026-05-23** (template-based, shipped at `/terms` with confirmed NAP and Nevada governing-law clause). | `/terms` page |
| 1.11 | ~~Founder bio (2–4 sentences) + headshot~~ — **RESOLVED 2026-05-25** (shipped in `/about`). | `/about` |
| 1.12 | ~~Final positioning line~~ — **RESOLVED 2026-05-20**, see `docs/brand/brand-skill.md` | `/` hero, meta description |

## 2. Important — needed for full feature scope

These are not blockers, but every page or feature that depends on them ships as a stub or gets cut until they arrive.

| # | Item | Page(s) / feature(s) affected |
|---|------|-------------------------------|
| 2.1 | Tagline (if any) | Hero, social cards |
| 2.2 | Hours of operation | Footer, schema, GBP consistency |
| 2.3 | ~~Physical address~~ — **RESOLVED 2026-05-23**: `304 S Jones Blvd Ste 1915, Las Vegas, NV 89107`. Source: GBP. | Footer, schema |
| 2.4 | CRM choice (e.g. GoHighLevel, HubSpot, custom) | Form integration |
| 2.5 | Lead form endpoint + auth | All page CTAs |
| 2.6 | Booking provider + link | `/contact`, service-page CTAs |
| 2.7 | Email provider (e.g. Resend, Postmark) | Contact form delivery |
| 2.8 | ~~Google Place ID~~ — **RESOLVED 2026-05-25** (`ChIJ5_nmHI_RHi4RrYRgpNp5pWs`; placeUrl `https://share.google/TUgLZOpTwsYaHLaLZ`). | Live review pull on `/`, `/reputation-management`, `/review-automation` |
| 2.9 | ~~Analytics provider preference (GA4, Plausible, none)~~ — **RESOLVED 2026-05-25** (Google Tag Manager, container ID `GTM-TJRT2ZHL`). **Blog analytics follow-up:** Blog is now live at /blog and /blog/*. Once analytics provider is confirmed and installed, verify pageview events fire on blog routes, create a /blog/* filtered report in GA4, and set up a conversion event for CTA clicks originating from blog posts. GSC will pick up blog URLs automatically from the sitemap — no action needed there. | Tracking setup |
| 2.10 | Pricing visibility (show packages? show "request quote"?) | Service pages, `/services` |
| 2.11 | Lead magnet(s) — file or "none" | Hero, blog CTAs |

## 3. Optional / proof assets (only if real and permitted)

Per `do-not-invent-rules.md`: testimonials, case studies, logos, awards, and partnerships ship **only** if they're real and the client confirms written permission to publish.

| # | Item | If absent, what we do |
|---|------|----------------------|
| 3.1 | Real testimonials (with names + permission) | Omit testimonial section; do not write fake ones |
| 3.2 | Real client logos (with permission) | Omit "as seen with" section |
| 3.3 | Real case studies (with permission + verifiable outcomes) | Omit case-study cards; do not invent metrics |
| 3.4 | Awards / certifications / partnerships (documentable) | Omit; do not list aspirational ones |
| 3.5 | Specific dollar/percent results claims | Omit; do not invent |

## 4. Industry-page proof (per industry, optional)

For each of the six industry pages, the following is welcome but **not required**:

- One real example or anonymized case study from that industry
- One real quote from a client in that industry (with permission)

If none, the industry page leans on positioning, service mapping, and a clear CTA. That's fine.

## 5. Blog kickoff content

Before launch we want 3–5 published blog posts. The blog content plan (`docs/content/blog-content-plan.md`) drafts topic clusters. From the client we need:

- Confirmation that proposed topics fit the strategy
- Any specific stories, opinions, or angles the founder wants to publish
- Author byline preference (Sedrick Harris? "Sirius Systems Team"?)

## 6. Format for delivering content

Easiest format for us:

- **Text answers** in a plaintext doc or email — copy/paste ready
- **Files** (logo, headshot, lead magnets) shared via a cloud folder link
- **Long-form** (bio, policies) can be Google Doc or Notion

Avoid: PDFs of text we'd need to retype, screenshots of copy.

---

## Status tracker

Format: `[STATUS] item — date`

Statuses: `BLOCKED` (waiting on client), `RECEIVED` (in hand), `RESOLVED` (in `client-discovery-notes.md`).

- `RESOLVED` 1.1 Phone number — 2026-05-23 (`(727) 222-3424` / E.164 `+17272223424`; verified via GBP, see `verified-public-sources.md` §1a)
- `RESOLVED` 1.2 Email — 2026-05-25 (`display: info@siriussys.io` / `href: mailto:info@inbox.siriussys.io`; confirmed by client)
- `RESOLVED` 1.3 Service area — 2026-05-25 (worldwide; HQ Las Vegas NV; `areaServed: 'Worldwide'` in LocalBusiness + all 14 service schemas)
- `RESOLVED` 1.4 Legal business name — 2026-05-23 (`SHH Group, doing business as Sirius Systems`; verified via GBP)
- `RESOLVED` 1.5 Logo files — 2026-05-25 (confirmed applied)
- `RESOLVED` 1.6–1.8 Brand colors + type — 2026-05-25 (confirmed applied)
- `RESOLVED` 1.9 Privacy Policy — 2026-05-23 (template-based, shipped at `/privacy` with confirmed NAP)
- `RESOLVED` 1.10 Terms of Service — 2026-05-23 (template-based, Nevada governing law, shipped at `/terms`)
- `RESOLVED` 1.11 Founder bio + headshot — 2026-05-25 (shipped in `/about`)
- `RESOLVED` 1.12 Final positioning line — 2026-05-20 (delivered via `docs/brand/brand-skill.md`; long-form in `brand.md` + `docs/brand/brand-guide.md` §1; trimmed meta in `lib/site.ts`)
- `RESOLVED` 2.3 Physical address — 2026-05-23 (`304 S Jones Blvd Ste 1915, Las Vegas, NV 89107`; verified via GBP)
