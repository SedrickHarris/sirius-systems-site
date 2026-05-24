# Verified Public Sources — Sirius Systems

Catalog of public URLs tied to the brand. Each entry records **what the source verifies** and **what it does NOT verify**. Anything that requires verification must be sourced here or escalated to `content-needed-from-client.md`.

---

## Primary brand surfaces

### 1. Production website
- **URL:** https://siriussys.io/
- **Verifies:** brand name, primary domain, that the business is operating publicly under "Sirius Systems"
- **Does not verify:** any specific claim made on the current site (treat current copy as directional, not authoritative for the rebuild)

### 2. Google Business Profile
- **URL:** https://share.google/TUgLZOpTwsYaHLaLZ
- **Verifies:** the business is registered on Google, GBP exists and is claimable. NAP details (see §1a below) are also verified via this listing as of 2026-05-23.
- **Does not verify:** service area boundaries, review counts (pull live at render time; do not hardcode), or hours of operation.

---

## 1a. Confirmed business identity (NAP)

Verified against the Google Business Profile public listing on 2026-05-23.

| Field | Value |
|-------|-------|
| Legal name | SHH Group, doing business as Sirius Systems |
| DBA | Sirius Systems |
| Street address | 304 S Jones Blvd Ste 1915 |
| City, State, ZIP | Las Vegas, NV 89107 |
| Country | US |
| Phone (display) | (727) 222-3424 |
| Phone (E.164) | +17272223424 |
| Source | Google Business Profile (public listing) |
| Confirmed | 2026-05-23 |

These values are the canonical source for:
- `lib/site.ts` `SITE.contact.phone`
- Footer copyright + address block
- `/privacy` and `/terms` "Contact Us" sections
- Homepage `LocalBusiness` JSON-LD `name`, `legalName`, `telephone`, `address`

### 3. Facebook page
- **URL:** https://www.facebook.com/SiriusSys.io/
- **Verifies:** the brand maintains an active Facebook presence under "SiriusSys.io"
- **Does not verify:** post claims, follower counts, or any marketing copy on the page

### 4. Founder Instagram
- **URL:** https://www.instagram.com/sedrick.h.harris/
- **Verifies:** Sedrick Harris is publicly associated with the brand
- **Does not verify:** title, bio, or any specific claims posted on the account

### 5. Project repository
- **URL:** https://github.com/SedrickHarris/sirius-systems-site
- **Verifies:** the rebuild project exists under Sedrick Harris's ownership
- **Does not verify:** anything about the live business

---

## Service reference sites — ecosystem inspiration only

These are **separate brands operated by the same person**. They are referenced for service-catalog inspiration and patterns of presentation — not for content reuse, and not to be presented on this site as Sirius Systems sub-brands.

### 6. ClickVSG
- **URL:** https://clickvsg.com/
- **Use:** service catalog patterns, package structure inspiration
- **Restrictions:** do not copy copy verbatim, do not present as the same brand, do not link from Sirius Systems pages without explicit approval

### 7. Sirius Site Studio
- **URL:** https://siriussitestudio.com/
- **Use:** smart-website / web-design service framing inspiration
- **Restrictions:** same as above. Note the name overlap with "Sirius Systems" — keep brand separation crisp in any cross-reference.

### 8. Review Scraper
- **URL:** https://reviewscraper.net/
- **Use:** competitor review benchmarking service framing inspiration
- **Restrictions:** same as above.

---

## What this catalog deliberately does NOT include

The following do not appear here because they have not been independently verified:

- Specific testimonials (no public source confirms identity + permission)
- Specific case studies (no public source confirms outcomes)
- Specific awards, certifications, or partnerships
- Exact service-area boundaries
- Pricing, packaging, or commercial terms
- Founder bio details beyond name

All of the above route through `content-needed-from-client.md`.

---

## Update protocol

- Add a new source only after visiting the URL and confirming it loads and is owned/operated by the brand.
- Always record both **what the source verifies** and **what it does NOT verify**.
- If a source goes dead, mark it `[DEAD as of YYYY-MM-DD]` rather than deleting it.
