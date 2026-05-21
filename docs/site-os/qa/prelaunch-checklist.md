# Prelaunch QA Checklist — Sirius Systems

The hard gate before Cloudflare Pages deploy. Every item must be `[x]`-checked with evidence (commit SHA, screenshot, validator URL, or note) **on launch day**, not when the page was first built.

A failing item is a launch blocker, not a "we'll fix it after."

---

## 1. Do-not-invent audit (highest priority)

For every page and every JSON-LD blob:

- [ ] No invented reviews
- [ ] No invented ratings or review counts
- [ ] No invented revenue / results claims
- [ ] No invented case studies
- [ ] No invented client names
- [ ] No invented testimonials
- [ ] No invented awards / certifications / partnerships
- [ ] No invented guarantees
- [ ] No invented physical address
- [ ] No invented service-area cities/metros
- [ ] No invented team members
- [ ] No invented founding year
- [ ] No invented integrations
- [ ] All testimonials (if any) have documented written permission
- [ ] All client logos (if any) have documented written permission

If any box is unchecked, the offending content is removed before launch.

## 2. Confirmed-facts audit

Cross-reference final pages against `client-discovery-notes.md` "Confirmed facts":

- [ ] Brand name "Sirius Systems" used consistently (not "SiriusSystems", "Sirius System", etc.)
- [ ] Phone number matches client-confirmed value (header, footer, contact, schema)
- [ ] Email matches client-confirmed value (footer, contact, schema)
- [ ] Service area matches client-confirmed value (footer, schema, copy)
- [ ] Legal business name in footer + Terms matches client-confirmed value
- [ ] Founder name spelled "Sedrick Harris" everywhere

## 3. Page coverage

Every page in `site-build-plan.md` Phase 1 ships:

### Core
- [ ] `/`
- [ ] `/about`
- [ ] `/services`
- [ ] `/contact`

### Services (14)
- [ ] `/ai-automation`
- [ ] `/ai-chatbots`
- [ ] `/ai-voicebots`
- [ ] `/crm-automation`
- [ ] `/appointment-booking-automation`
- [ ] `/smart-websites`
- [ ] `/lead-generation-automation`
- [ ] `/reputation-management`
- [ ] `/review-automation`
- [ ] `/ai-review-responses`
- [ ] `/google-business-profile-optimization`
- [ ] `/local-seo-aeo`
- [ ] `/competitor-review-benchmarking`
- [ ] `/all-in-one-business-growth-system`

### Industries (6)
- [ ] `/industries`
- [ ] `/industries/home-services`
- [ ] `/industries/contractors`
- [ ] `/industries/professional-services`
- [ ] `/industries/auto-services`
- [ ] `/industries/beauty-wellness`

### Blog
- [ ] `/blog`
- [ ] At least 3 published posts at `/blog/<slug>`
- [ ] Each post has a featured image at `public/images/blog/`

### Utility
- [ ] `/privacy`
- [ ] `/terms`

### Friendly errors
- [ ] `404` page returns 404 status and matches brand
- [ ] (Optional) `500` page

## 4. SEO essentials

- [ ] `robots.txt` present, allows crawling, references sitemap
- [ ] `sitemap.xml` lists all Phase 1 routes + every blog post
- [ ] Every page has a unique `<title>` and `<meta name="description">` per `metadata-draft.md`
- [ ] Every page has a canonical URL
- [ ] OpenGraph + Twitter card metadata on every page
- [ ] No duplicate titles or descriptions across pages

## 5. Structured data (JSON-LD)

Per `docs/seo/schema-plan.md`:

- [ ] `Organization` JSON-LD on `/` (or in shared layout)
- [ ] `LocalBusiness` JSON-LD with confirmed `areaServed`
- [ ] `WebSite` JSON-LD with site search action (if applicable)
- [ ] `Service` JSON-LD on each of the 14 service pages
- [ ] `BreadcrumbList` JSON-LD on every page beyond `/`
- [ ] `Article` JSON-LD on every blog post
- [ ] `Person` JSON-LD for founder on `/about` (only confirmed fields)
- [ ] No `AggregateRating` JSON-LD unless backed by real, pulled-live data
- [ ] All JSON-LD validates in https://validator.schema.org/

## 6. Brand consistency

Per `docs/brand/brand-guide.md`:

- [ ] Logo renders correctly (header, footer, favicon, social cards)
- [ ] Primary brand color applied consistently
- [ ] Secondary brand color applied consistently
- [ ] Type pair applied (display + body)
- [ ] No placeholder colors (TBDs) remain in the deployed CSS
- [ ] Voice / tone audit passed on every page (`docs/brand/brand-guide.md` voice section)

## 7. Internal linking

Per `docs/seo/internal-linking-plan.md`:

- [ ] Every service page links to at least 3 related services + relevant industry pages
- [ ] Every industry page links to its mapped service set
- [ ] Every blog post links to at least 2 relevant service or industry pages
- [ ] `/services` links to all 14 service pages
- [ ] `/industries` links to all 5 industry hub pages
- [ ] No broken internal links (run a crawl)

## 8. Performance

- [ ] Lighthouse (mobile) — Performance ≥ 90
- [ ] Lighthouse (mobile) — Accessibility ≥ 95
- [ ] Lighthouse (mobile) — Best Practices ≥ 95
- [ ] Lighthouse (mobile) — SEO = 100
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

## 9. Accessibility

- [ ] All images have meaningful `alt` text (decorative images use `alt=""`)
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] All interactive elements keyboard-reachable in logical order
- [ ] Focus styles visible
- [ ] No form field without an associated label
- [ ] Skip-to-content link present

## 10. Forms

- [ ] Contact form submits to confirmed endpoint
- [ ] Confirmation message on success
- [ ] Error handling on failure
- [ ] Honeypot or other spam mitigation in place
- [ ] No PII logged client-side

## 11. Analytics & tracking

- [ ] Analytics provider configured per client choice (or explicitly omitted)
- [ ] No legacy / leftover tracking scripts from previous site
- [ ] Cookie / consent banner per client preference

## 12. Legal

- [ ] `/privacy` published with current text
- [ ] `/terms` published with current text
- [ ] Footer links to both
- [ ] Footer carries legal business name + year

## 13. Mobile

- [ ] Every page reviewed at 375px (iPhone SE) and 414px (iPhone Pro)
- [ ] No horizontal scroll on any page
- [ ] Touch targets ≥ 44×44px
- [ ] Sticky elements don't cover content

## 14. Deploy

- [ ] Cloudflare Pages build succeeds on `main`
- [ ] Custom domain (`siriussys.io` or staging subdomain) wired
- [ ] HTTPS active
- [ ] DNS cutover plan agreed with client (date + rollback path)
- [ ] Post-deploy smoke test of every Phase 1 route

## 15. Post-launch (first 72 hours)

- [ ] Submit sitemap in Google Search Console
- [ ] Submit sitemap in Bing Webmaster Tools
- [ ] Confirm GBP NAP matches site NAP
- [ ] Watch for 404s in analytics
- [ ] Watch Lighthouse weekly for regressions
