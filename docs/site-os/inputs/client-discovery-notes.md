# Client Discovery Notes — Sirius Systems

Living document of what we know vs. what we still need.

> **Rule:** if it isn't in the "Confirmed facts" section, it is not safe to publish.
> Anything in "Items needing confirmation" must be cleared in `docs/site-os/inputs/content-needed-from-client.md` before going into page copy or schema.

---

## 1. Confirmed facts

These are derived from public surfaces tied to the brand (see `verified-public-sources.md`).

| Item | Value | Source |
|------|-------|--------|
| Brand name | Sirius Systems | Website, Facebook, GBP |
| Primary domain | https://siriussys.io/ | DNS / Google Business Profile |
| Repository | https://github.com/SedrickHarris/sirius-systems-site | GitHub |
| Founder / operator | Sedrick Harris | Instagram handle + GitHub owner |
| Google Business Profile | Active (https://share.google/TUgLZOpTwsYaHLaLZ) | Google share link |
| Facebook | https://www.facebook.com/SiriusSys.io/ | Direct |
| Instagram (founder) | https://www.instagram.com/sedrick.h.harris/ | Direct |
| Service category — high level | AI automation, smart websites, reputation systems for local service businesses | Brief from client |

## 2. Confirmed service catalog

The following 14 service categories are confirmed by the client and form the spine of the service architecture:

1. AI automation
2. AI chatbots
3. AI voicebots
4. CRM automation
5. Appointment booking automation
6. Smart websites
7. Lead generation automation
8. Reputation management
9. Review automation
10. AI review responses
11. Google Business Profile optimization
12. Local SEO and AEO
13. Competitor review benchmarking
14. All-in-one business growth system

## 3. Confirmed target industries

1. Home services
2. Cleaning companies
3. Junk removal
4. Real estate
5. Contractors
6. Coaches and consultants

## 4. Items needing confirmation

These cannot be inferred from public sources. They must be answered by the client.

### Identity & legal
- Legal business entity name (DBA vs. LLC vs. corp)
- State of formation
- Founding year
- Physical address (if any — purely virtual is also a valid answer)
- Service area (city/metro list, or "remote / nationwide US", or specific)
- Hours of operation (for GBP and LocalBusiness schema)
- Phone number to publish on the site
- Email address to publish on the site

### Brand
- Final logo files (SVG + raster) — light and dark versions
- Primary brand color (hex)
- Secondary brand color (hex)
- Type pairing (display + body)
- Wordmark vs. mark-only usage rules
- Tagline (if any)

### People
- Founder bio (2–4 sentences) and headshot for `/about`
- Any other team members to feature (or "solo operator" — also valid)

### Proof (must be real or omitted)
- Real client logos with written permission to publish
- Real testimonials with attribution and written permission
- Real case studies with permission and verifiable outcomes
- Existing Google reviews — count and average (we'll pull live, not hardcode)
- Any awards, certifications, partnerships (only if documentable)

### Offers / commercial
- Pricing model (productized package? hourly? performance-based?)
- Lead magnet(s) (if any) — guide, audit, calculator
- Booking link / scheduling tool (Calendly, GHL, etc.)
- CRM in use (for form submissions)
- Email/SMS provider (for nurture sequences)

### Compliance
- Privacy Policy text (or directive to use a template)
- Terms of Service text (or directive to use a template)
- Cookie / tracking disclosure preference

## 5. Working assumptions (mark each as A — Assumption, must be confirmed before launch)

- **A1** — Sirius Systems is a US-based business. (To confirm.)
- **A2** — The primary audience is small-to-mid local service businesses, not enterprise. (To confirm.)
- **A3** — Reference sites (ClickVSG, Sirius Site Studio, Review Scraper) are *not* to be presented as Sirius Systems sub-brands on this site. (Confirmed by brief — restated as assumption only to flag in QA.)
- **A4** — Cloudflare Pages is the hosting target. (Confirmed by brief.)
- **A5** — The build framework is Next.js App Router with MDX blog. (Confirmed by brief.)

## 6. Notes on the existing siriussys.io site

The current production site at https://siriussys.io/ is the predecessor to what we're building. Treat its content as **directional, not authoritative**: phrases and claims there may not match the new positioning we're confirming. Anything pulled from the current site must be revalidated by the client before reuse.

## 7. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial draft created. Service catalog, industries, and public surfaces locked. Identity, brand, proof, offers, and compliance items flagged for client. |
