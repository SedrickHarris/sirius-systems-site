# Schema Plan — Sirius Systems

JSON-LD plan for every Phase 1 page. Schema.org structured data is a primary signal for both search engines and AI answer engines — so every block in this plan respects `docs/site-os/inputs/do-not-invent-rules.md`.

---

## 1. Global rules

- **All JSON-LD validates** at https://validator.schema.org/ and (for Rich Results-eligible types) https://search.google.com/test/rich-results.
- **No `AggregateRating` / `Review` unless backed by real data** — see Section 8.
- **One canonical `Organization`** referenced by `@id` across pages.
- **`sameAs` array** uses only URLs from `docs/site-os/inputs/verified-public-sources.md`:
  - https://siriussys.io
  - https://www.facebook.com/SiriusSys.io/
  - https://www.instagram.com/sedrick.h.harris/ (founder Person, not Organization sameAs — see notes)
  - GBP URL (canonical form, not the share-link redirect)
- **Use `@id` URLs**, not just types, so blocks reference each other cleanly.

## 2. What ships on every page (in `<head>` via shared layout)

### `Organization` (canonical)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://siriussys.io/#organization",
  "name": "Sirius Systems",
  "url": "https://siriussys.io",
  "logo": "https://siriussys.io/logo.svg",
  "founder": { "@id": "https://siriussys.io/#founder" },
  "sameAs": [
    "https://www.facebook.com/SiriusSys.io/"
  ]
}
```

> Add Instagram to `sameAs` only when the account is repositioned as the Sirius Systems Org account (currently it's the founder's personal handle).

### `WebSite`

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://siriussys.io/#website",
  "url": "https://siriussys.io",
  "name": "Sirius Systems",
  "publisher": { "@id": "https://siriussys.io/#organization" }
}
```

> Add a `potentialAction` SearchAction only if on-site search exists (Phase 1: no, so omit).

### `BreadcrumbList`

Every page below `/`. Items are `name` + `item` (URL).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siriussys.io/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://siriussys.io/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Chatbots", "item": "https://siriussys.io/ai-chatbots" }
  ]
}
```

## 3. `LocalBusiness` (on `/` and shared layout)

Ships **only after** these are client-confirmed:
- Legal name
- Publishable phone
- Publishable email
- Service area
- Hours of operation

Template (do not publish until placeholders resolved):

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://siriussys.io/#localbusiness",
  "name": "Sirius Systems",
  "url": "https://siriussys.io",
  "telephone": "<PHONE — pending client>",
  "email": "<EMAIL — pending client>",
  "areaServed": "<AREA — pending client>",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "<HH:MM — pending>",
      "closes": "<HH:MM — pending>"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/SiriusSys.io/"
  ]
}
```

> If the business is virtual / nationwide, set `areaServed` to a country or array of states. Do NOT invent a physical address.

## 4. `Person` for founder (on `/about`)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://siriussys.io/#founder",
  "name": "Sedrick Harris",
  "url": "https://siriussys.io/about",
  "image": "https://siriussys.io/images/sedrick-harris.jpg",
  "jobTitle": "Founder",
  "worksFor": { "@id": "https://siriussys.io/#organization" },
  "sameAs": [
    "https://www.instagram.com/sedrick.h.harris/",
    "https://github.com/SedrickHarris"
  ]
}
```

> `image` ships only when the headshot is provided. Until then, omit `image`.

## 5. `Service` (on each of the 14 service pages)

Template — one block per service. Replace `<...>` placeholders.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://siriussys.io/<slug>#service",
  "serviceType": "<Service display name — e.g. 'AI Chatbots'>",
  "name": "<Service display name>",
  "description": "<One-sentence description matching metadata-draft.md>",
  "provider": { "@id": "https://siriussys.io/#organization" },
  "areaServed": "<AREA — pending client>",
  "url": "https://siriussys.io/<slug>"
}
```

> Do NOT add `offers` with pricing unless pricing is confirmed and intended to be public.

## 6. `Article` (on each blog post)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://siriussys.io/blog/<slug>#article",
  "mainEntityOfPage": "https://siriussys.io/blog/<slug>",
  "headline": "<Post headline>",
  "description": "<Post description from frontmatter>",
  "image": ["https://siriussys.io/images/blog/<slug>.jpg"],
  "datePublished": "<ISO 8601>",
  "dateModified": "<ISO 8601>",
  "author": { "@id": "https://siriussys.io/#founder" },
  "publisher": { "@id": "https://siriussys.io/#organization" }
}
```

> Use `Article`, not `BlogPosting`, unless we need feed-specific behavior — `Article` is broader and well-supported.

## 7. `FAQPage` (on hub pages where FAQ is real, NOT injected)

Only ship FAQ schema when the page actually contains the same questions and answers in visible HTML. Do not fabricate FAQs to "feed the schema."

Template:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "<Real question shown on the page>",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<Answer shown on the page, plain text>"
      }
    }
  ]
}
```

## 8. `AggregateRating` and `Review` — special handling

**Default: do not ship.**

Conditions for shipping `AggregateRating`:
1. The data is pulled live from Google Place API (or equivalent verified source) at build or render time.
2. The Place ID is confirmed (`docs/site-os/inputs/content-needed-from-client.md` item 2.8).
3. The visible page shows the same rating + review count as the schema.

Conditions for shipping `Review`:
1. Each review object mirrors a real, public review with `author.name`, `reviewBody`, `reviewRating`.
2. The visible page shows the same quotes.
3. We have documented permission to use the reviewer's name in JSON-LD.

If any of the above fails: **omit the block**. Do not approximate.

## 9. `BreadcrumbList` slug map

The breadcrumb trail per page (used to generate the JSON-LD above):

- `/about`: Home → About
- `/services`: Home → Services
- `/<service-slug>`: Home → Services → <Service Name>
- `/contact`: Home → Contact
- `/industries`: Home → Industries
- `/industries/<industry-slug>`: Home → Industries → <Industry Name>
- `/blog`: Home → Blog
- `/blog/<slug>`: Home → Blog → <Post Headline>
- `/privacy`: Home → Privacy
- `/terms`: Home → Terms

## 10. What we are explicitly NOT publishing in Phase 1 schema

- `JobPosting` (no hiring page)
- `Event` (no events)
- `Product` (services, not products)
- `Course` (no courses confirmed)
- `Recipe`, `HowTo` on non-howto pages
- `MedicalBusiness`, `Restaurant`, or other vertical-specific types — Sirius Systems is `LocalBusiness` / `Organization`

## 11. QA gate

Schema is checked in `docs/site-os/qa/prelaunch-checklist.md` Section 5. Validator output (clean) must be archived on launch day.

## 12. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial plan: Organization, WebSite, BreadcrumbList, LocalBusiness (blocked), Person (founder), Service (×14), Article (per blog post). AggregateRating/Review gated on confirmed data. |
