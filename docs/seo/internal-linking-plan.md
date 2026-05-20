# Internal Linking Plan — Sirius Systems

Rules and maps for how pages link to each other. Internal linking is how we tell search engines (and humans) what's important and how concepts relate. Done wrong, it's noise.

---

## 1. Rules

1. **Every service page links to 3–5 related services.** Same-cluster first, capstone always.
2. **Every service page links to 1–3 industry pages** it's most relevant to.
3. **Every industry page links to its mapped service set** (typically 5–8 of the 14 services).
4. **Every blog post links to at least 2 service or industry pages** (the cluster hub + one related).
5. **Every service page links to the capstone** (`/all-in-one-business-growth-system`).
6. **The capstone page links back to all three pillar hubs** (`/ai-automation`, `/reputation-management`, `/local-seo-aeo`).
7. **`/services` links to all 14 service pages.** `/industries` links to all 6 industry pages.
8. **Anchor text is descriptive**, not "click here" / "learn more". Use the destination's keyword phrase or a clean variant.
9. **Footer has a single curated set of links** — not the full page list. The footer is not the sitemap.
10. **No more than ~10 in-body internal links per page**, to avoid link dilution.
11. **No cycles of pages linking only to each other** with no exits — every page links to the capstone or to `/services`.

## 2. Service-to-service link map

For each service page, the recommended internal links (in priority order):

### Group A — AI & automation

#### `/ai-automation`
1. `/ai-chatbots`
2. `/ai-voicebots`
3. `/crm-automation`
4. `/lead-generation-automation`
5. `/all-in-one-business-growth-system`

#### `/ai-chatbots`
1. `/ai-voicebots`
2. `/lead-generation-automation`
3. `/appointment-booking-automation`
4. `/crm-automation`
5. `/all-in-one-business-growth-system`

#### `/ai-voicebots`
1. `/ai-chatbots`
2. `/lead-generation-automation`
3. `/appointment-booking-automation`
4. `/all-in-one-business-growth-system`

#### `/crm-automation`
1. `/lead-generation-automation`
2. `/appointment-booking-automation`
3. `/ai-chatbots`
4. `/review-automation`
5. `/all-in-one-business-growth-system`

#### `/appointment-booking-automation`
1. `/crm-automation`
2. `/ai-chatbots`
3. `/ai-voicebots`
4. `/smart-websites`
5. `/all-in-one-business-growth-system`

#### `/lead-generation-automation`
1. `/ai-chatbots`
2. `/crm-automation`
3. `/smart-websites`
4. `/local-seo-aeo`
5. `/all-in-one-business-growth-system`

### Group B — Smart websites & local SEO

#### `/smart-websites`
1. `/lead-generation-automation`
2. `/local-seo-aeo`
3. `/google-business-profile-optimization`
4. `/appointment-booking-automation`
5. `/all-in-one-business-growth-system`

#### `/google-business-profile-optimization`
1. `/local-seo-aeo`
2. `/reputation-management`
3. `/review-automation`
4. `/smart-websites`
5. `/all-in-one-business-growth-system`

#### `/local-seo-aeo`
1. `/google-business-profile-optimization`
2. `/smart-websites`
3. `/reputation-management`
4. `/competitor-review-benchmarking`
5. `/all-in-one-business-growth-system`

### Group C — Reputation

#### `/reputation-management`
1. `/review-automation`
2. `/ai-review-responses`
3. `/competitor-review-benchmarking`
4. `/google-business-profile-optimization`
5. `/all-in-one-business-growth-system`

#### `/review-automation`
1. `/reputation-management`
2. `/ai-review-responses`
3. `/crm-automation`
4. `/google-business-profile-optimization`
5. `/all-in-one-business-growth-system`

#### `/ai-review-responses`
1. `/review-automation`
2. `/reputation-management`
3. `/competitor-review-benchmarking`
4. `/all-in-one-business-growth-system`

#### `/competitor-review-benchmarking`
1. `/reputation-management`
2. `/review-automation`
3. `/local-seo-aeo`
4. `/all-in-one-business-growth-system`

### Capstone

#### `/all-in-one-business-growth-system`
1. `/ai-automation` (pillar 1)
2. `/reputation-management` (pillar 2)
3. `/local-seo-aeo` (pillar 3)
4. `/smart-websites`
5. `/services`

## 3. Industry-to-service map

For each industry page, the most relevant services (in priority order). These are the service links each industry page should include.

### `/industries/home-services`
1. `/ai-voicebots` (missed-call recovery is huge for home services)
2. `/appointment-booking-automation`
3. `/review-automation`
4. `/lead-generation-automation`
5. `/google-business-profile-optimization`
6. `/all-in-one-business-growth-system`

### `/industries/cleaning-companies`
1. `/appointment-booking-automation`
2. `/crm-automation` (recurring contracts)
3. `/review-automation`
4. `/ai-chatbots`
5. `/smart-websites`
6. `/all-in-one-business-growth-system`

### `/industries/junk-removal`
1. `/ai-voicebots` (same-day inbound)
2. `/lead-generation-automation`
3. `/appointment-booking-automation`
4. `/review-automation`
5. `/google-business-profile-optimization`
6. `/all-in-one-business-growth-system`

### `/industries/real-estate`
1. `/ai-chatbots`
2. `/crm-automation`
3. `/lead-generation-automation`
4. `/smart-websites`
5. `/review-automation`
6. `/all-in-one-business-growth-system`

### `/industries/contractors`
1. `/lead-generation-automation`
2. `/appointment-booking-automation`
3. `/crm-automation`
4. `/review-automation`
5. `/google-business-profile-optimization`
6. `/all-in-one-business-growth-system`

### `/industries/coaches-consultants`
1. `/ai-chatbots`
2. `/appointment-booking-automation`
3. `/crm-automation`
4. `/lead-generation-automation`
5. `/smart-websites`
6. `/all-in-one-business-growth-system`

## 4. Blog-to-hub linking

Every blog post is in a cluster (see `docs/seo/topical-authority-plan.md`). Linking rules per post:

1. **Link to the cluster hub** in the first 1–3 paragraphs (contextual, not "click here").
2. **Link to at least one sub-hub** in the same cluster.
3. **Link to one related industry page** when the post has industry-specific framing.
4. **End with a clean CTA** linking to the most relevant service or to `/contact`.

Anchor text rules:

- Use the destination's name or descriptive variant
- Vary anchor text across posts so the same page is reached via "AI chatbots for service businesses", "chatbots that book jobs", "set up a chatbot", etc. — never the same anchor in every post

## 5. Footer link set (curated)

Footer should NOT mirror the full sitemap. Curate:

- **Services column** — 5 of the 14, rotated/chosen for highest-converting (TBD after launch data)
- **Industries column** — all 6 (it's a short list)
- **Resources column** — `/blog`, top 2–3 cornerstone posts
- **Company column** — `/about`, `/contact`, `/privacy`, `/terms`
- **Social row** — Facebook, GBP (only verified surfaces)

## 6. Anchor text dos and don'ts

**Do**
- "AI chatbots for service businesses" → `/ai-chatbots`
- "automate appointment booking" → `/appointment-booking-automation`
- "compare against competitors' reviews" → `/competitor-review-benchmarking`
- "the all-in-one growth system" → `/all-in-one-business-growth-system`

**Don't**
- "click here", "read more", "learn more" (unless decorative button)
- URL as anchor (`/ai-chatbots` rendered as anchor text)
- Same identical anchor across every post for the same destination

## 7. Crawlability

- All internal links are `<a href="">` HTML — no JS-only navigation that hides URLs.
- No `rel="nofollow"` on internal links.
- Pagination (blog index) uses `rel="prev"`/`rel="next"` if Phase 1 needs pagination (likely not at <20 posts).

## 8. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial linking maps for all 14 services + 6 industries + capstone + blog cluster rules. |
