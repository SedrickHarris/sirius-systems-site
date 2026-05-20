# Do-Not-Invent Rules — Sirius Systems

Hard guardrails. Anything in this file that we don't have **real, documentable, permissioned** evidence for, we **do not publish** — on the website, in schema, in metadata, in social cards, or anywhere else.

These rules apply equally to AI-assisted drafting, to human-written drafts, and to placeholder copy. "I'll just put something there for now" is the failure mode this file exists to prevent.

---

## Why this file exists

The site sells trust services (reputation management, review automation, AI for local businesses). Faking trust signals on the page that sells trust services is both an ethical and a credibility failure. It's also a legal risk (FTC endorsement rules, false advertising). One invented testimonial undoes ten real ones.

The rules below apply regardless of how harmless the invention seems.

---

## Hard "do not invent" list

### 1. Reviews
- No fabricated review text.
- No imaginary reviewer names or photos.
- Reviews shown on the site must be pulled live from a real source (Google Place API, etc.) or be real reviews quoted with documented permission.

### 2. Ratings
- Do not assert a star rating that isn't pulled live or copied from a verifiable public source on the day of build.
- Do not invent counts ("47 five-star reviews") — pull live or omit.

### 3. Revenue / results claims
- No "we generated $X for clients" without documented per-client proof.
- No "X% increase" claims without methodology and source data on file.
- No "we book X appointments per month" without records.

### 4. Case studies
- A case study requires: (a) a real, named client; (b) written permission to publish; (c) verifiable metrics or qualitative outcomes the client confirms.
- Without (a)+(b)+(c), the case study does not ship. Stub copy that "sounds case-study-ish" is also not allowed.

### 5. Client names
- No client name appears on the site without that client's documented written permission.
- No invented anonymized clients ("a roofer in Texas") — say nothing rather than say a fictional something.

### 6. Testimonials
- Real names, real quotes, real permission. No composite, "representative," or AI-generated testimonials.
- Photos beside quotes must be of the actual person quoted, with permission.

### 7. Awards
- No award listed unless it is a real award won by Sirius Systems with the award name, year, and granting body.
- No "as featured in" without a real, linkable feature.

### 8. Certifications
- No certification listed unless Sirius Systems actually holds it, with a verifiable issuer and date.

### 9. Guarantees
- No "guaranteed results", "guaranteed leads", "money-back guarantee", etc. — unless an actual, written, enforceable guarantee is on file. If there is one, the exact terms are linked or quoted verbatim.

### 10. Partnerships
- No "partner of X" / "Google partner" / "Meta partner" claims unless Sirius Systems holds the actual partnership credential.

### 11. Physical address
- No physical address published unless one is real, current, and the client wants it public.
- If the business is virtual, the footer says so or omits address entirely.

### 12. Service areas
- No specific city, county, or metro listed unless the client confirms they actively serve that area.
- "Nationwide" is allowed only if accurate.

### 13. Team members
- No invented team members, founders, or roles.
- Stock photos of "the team" are not allowed.

### 14. Years in business / founding date
- No invented founding year. If unknown, omit.

### 15. Specific tools / integrations
- No claim of integration with a specific platform (GoHighLevel, HubSpot, Calendly, Twilio, etc.) unless Sirius Systems actually integrates with it and the client confirms.

---

## Schema-specific rules

This list also governs structured data. Schema.org JSON-LD is **not a softer surface** for invented claims — search engines treat it as a primary signal.

- `AggregateRating` JSON-LD only ships if reviews are real (pulled live, ideally) — see `docs/seo/schema-plan.md`.
- `Review` objects in JSON-LD must mirror real reviews.
- `LocalBusiness` `areaServed` must match the client-confirmed service area.
- `Organization` `sameAs` array uses only URLs from `verified-public-sources.md`.
- `Person` schema for the founder uses only confirmed bio details.

---

## What to do when blocked

If a section of the site needs a claim we don't have evidence for:

1. **Do not write a placeholder claim** ("Trusted by 100+ businesses" as a "we'll change the number later" stub is forbidden — it always ships).
2. **Omit the section** for launch, or replace with copy that is true regardless of the unknown.
3. **Log the gap** in `content-needed-from-client.md`.
4. **Surface it in the changelog** so it's visible in QA review.

---

## Acceptable language patterns when proof is absent

Instead of inventing, use language that's true on day one:

- "Built for local service businesses" (true — it's the positioning)
- "Automations designed to capture leads while you're on the job" (descriptive, no numeric claim)
- "A growth system, not a one-off website" (positioning, not a results claim)

Avoid:

- "Helping hundreds of businesses..." (numeric without proof)
- "Trusted by leaders in..." (social proof without proof)
- "Our clients see X% more..." (results claim without data)

---

## QA gate

Every page and every JSON-LD blob is reviewed against this file before launch. The check is in `docs/site-os/qa/prelaunch-checklist.md`.
