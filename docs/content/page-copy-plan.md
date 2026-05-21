# Page Copy Plan — Sirius Systems

Structural templates for every Phase 1 page. These are the **outline shapes** copy must fit into — actual draft copy lives in `/docs/site-os/outputs/` once drafted.

> Every section here is allowed to be **shorter** than shown. Cutting is encouraged. What's prohibited is inventing claims to fill a section — see `docs/site-os/inputs/do-not-invent-rules.md`.

---

## 1. Universal page rules

- **One hero per page.** Headline + supporting line + primary CTA.
- **Lead with the buyer's problem**, not "we are a..." copy.
- **Specifics > adjectives.** "Books appointments while you're on a roof" > "Powerful AI booking experience."
- **One primary CTA per viewport.** Secondary CTAs are ghost buttons.
- **End every page with a CTA** (primary action OR contextual link out).

## 2. Home `/`

### Sections (in order)

1. **Hero**
   - Headline: positioning line, ≤ 12 words
   - Supporting line: one sentence, ≤ 25 words
   - Primary CTA: "Book a discovery call" (text refined once booking provider lands)
   - Secondary link: "See services"
   - Background image: per `image-prompt-bank.md` → Home

2. **Problem framing (3 cards)** — three problems Sirius Systems' clients face daily
   - Card 1: "Leads call when you're on a job and don't call back"
   - Card 2: "Reviews build up faster than you can respond"
   - Card 3: "Your CRM has 8,000 contacts and nothing on autopilot"

3. **The growth system (capstone preview)**
   - Short paragraph + 3 pillar callouts (AI / Smart sites / Reputation)
   - Link to `/all-in-one-business-growth-system`

4. **Service overview (grid)**
   - All 14 service cards in 3 visual groups (A / B / C / Capstone)
   - Each card: name + 1-line description + link

5. **Industries** (compact row)
   - 5 industry chips → link to `/industries/<slug>`

6. **Process** (3 steps)
   - Step 1: Audit — what's leaking
   - Step 2: Build — wire the system
   - Step 3: Run — keep capturing
   - No fake "1,000 businesses served" stat

7. **Founder note** (small section)
   - 2–3 sentences from Sedrick Harris — voice + perspective
   - Headshot when available, otherwise omit

8. **FAQ** (4–6 real questions)
   - Real questions visitors ask. No fluff.
   - Mirrors FAQPage JSON-LD (see `schema-plan.md`)

9. **Final CTA**
   - "Ready to stop losing leads?" → `/contact`

### Hard rules for `/`
- No testimonials unless real + permissioned
- No "trusted by" logo strip unless real logos with permission
- No invented stats in the process section

## 3. About `/about`

1. **Hero** — one sentence about what Sirius Systems exists to do
2. **Why this exists** (story) — 2–3 paragraphs, plain
3. **Founder** — Sedrick Harris bio (2–4 sentences) + headshot when available
4. **Ecosystem note** — brief paragraph naming ClickVSG, Sirius Site Studio, Review Scraper as related sibling brands (explicitly: not the same brand). Optional link to each (label them clearly).
5. **What we believe** (3–4 short statements)
6. **CTA** — `/contact`

### Hard rules
- Founder bio waits on client (item 1.11). Do not invent.
- No "founded in YYYY" unless confirmed.

## 4. Services `/services`

1. **Hero** — one sentence + supporting line
2. **The three groups + capstone** — explained briefly
3. **Group A — AI & automation** — 6 service cards
4. **Group B — Smart websites & local SEO** — 3 service cards
5. **Group C — Reputation** — 4 service cards
6. **Capstone** — full-width callout for `/all-in-one-business-growth-system`
7. **Industries quick links**
8. **CTA**

## 5. Contact `/contact`

1. **Hero** — direct, no fluff. "Let's talk."
2. **Form** (fields below) OR booking embed (when provider confirmed)
3. **Alt contact info** — phone + email (when confirmed)
4. **What happens next** — 2–3 bullets ("You'll get a reply within X hours", "We'll do a 20-min audit", "If we're a fit, we map a system together")
5. **CTA** if form scrolls off — fixed button or footer-style anchor

### Form fields (Phase 1)
- Name (required)
- Business name (required)
- Industry (select — the 5 industry hubs + "Other")
- Email (required)
- Phone (optional)
- Biggest current bottleneck (textarea, optional)
- Honeypot field

## 6. Service page template (×14)

Every service page follows the same shape so they read consistently and so the build can template them.

1. **Hero**
   - Headline: keyword-first ("AI chatbots for service businesses")
   - Supporting line: outcome the buyer cares about
   - Primary CTA: `/contact`
   - Image: per service-specific prompt

2. **Definition paragraph (AEO)**
   - 1–2 sentences: "An AI chatbot for service businesses is…" — direct, quotable, true.

3. **Problem framing** — what breaks without this service (2–3 bullets)

4. **How it works** — 3–4 steps
   - Real mechanism, not marketing fluff
   - Diagrams allowed if real

5. **What you get** — feature list (4–8 items)
   - Bullets, plain, no superlatives
   - No invented integrations

6. **Outcomes** — what changes for the business
   - Describe the outcome, not a number ("missed-call recovery becomes automatic"). Numbers only if real + sourced.

7. **Related services** — 3–5 internal links per `internal-linking-plan.md`

8. **Industry fit** — 1–3 industry links

9. **FAQ** (3–5 real questions, JSON-LD-eligible)

10. **CTA** — `/contact`

### Hard rules per service page
- Use the exact slug from `url-strategy.md`
- Include `Service` JSON-LD per `schema-plan.md`
- No invented client examples
- "How it works" must describe a real mechanism (if unsure, omit specifics)

## 7. Industry page template (×5)

1. **Hero**
   - Headline: industry-specific ("Automation that fits a home-services business")
   - Supporting line: the daily reality
   - Primary CTA

2. **What's broken** — 3 bullets describing this industry's specific pain
   - These are general statements about the industry pattern, NOT claims about specific clients

3. **What we build for this industry** — paragraph mapping services → outcomes for this vertical

4. **Service stack (links)** — 5–8 most relevant services per `internal-linking-plan.md`

5. **Stories (only if real)** — one short example or quote
   - If we don't have a real one, omit this section entirely. Do NOT write a "representative" example.

6. **FAQ** — 3–5 industry-specific real questions

7. **CTA**

## 8. Industries index `/industries`

1. **Hero** — one sentence + supporting line
2. **Industry cards** — all 5, brief description each, link to industry page
3. **Note** — "Don't see your industry? We work with any local service business — get in touch."
4. **CTA**

## 9. Capstone `/all-in-one-business-growth-system`

1. **Hero** — strongest version of positioning
2. **The problem with point solutions** — paragraph
3. **The three pillars** — 3 anchored sections (AI / Reputation / Local SEO), each links to pillar hub
4. **How the system runs** — diagram / flow (per `image-prompt-bank.md`)
5. **What you get** — feature list at the system level
6. **Pricing note** — placeholder until pricing model confirmed. Default copy: "Pricing depends on what you already have in place. We map your system in a discovery call and quote based on the gaps."
7. **FAQ**
8. **CTA**

## 10. Blog index `/blog`

1. **Hero** — short, sets the editorial purpose
2. **Featured / latest** — first 1–3 posts as cards
3. **Category filters** — chip row per `blog-strategy.md` taxonomy
4. **Post grid** — newest first
5. **CTA at bottom** — optional, can route to `/contact`

## 11. Blog post `/blog/<slug>`

See `docs/content/blog-post-template.md`.

## 12. Utility pages

### `/privacy`
- Standard privacy text (client-provided or template)
- Last updated date

### `/terms`
- Standard ToS (client-provided or template)
- Last updated date

## 13. 404 page

- Headline: "This page is off the map." (or similar — refine)
- Supporting line + link back to `/`
- Optional: top 3–5 internal links (Services / Industries / Blog / Contact)

## 14. Copy review gate

Before any page ships, run it against `docs/site-os/inputs/do-not-invent-rules.md`. Anything that fails the audit gets cut, not "softened."

## 15. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial templates — Home, About, Services, Contact, service template, industry template, capstone, blog index, utility. |
| 2026-05-20 | Industry taxonomy collapsed from 6 to 5 hubs — "×6" / "all 6" / "6 industry chips" / "6 industries" updated. |
