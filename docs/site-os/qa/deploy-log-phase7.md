# Phase 7 Deploy Log — Sirius Systems

Date: 2026-05-27 (pre-deploy gate) · 2026-05-29 (live verification)
Deployer: Sedrick Harris / Sirius Systems
Status: **LIVE** — site reachable at https://siriussys.io on Cloudflare Pages as of
2026-05-29. One outstanding non-blocker: `www → apex` 301 not yet configured (see §5B).

---

## Pre-deploy gate — PASS

All Claude-Code-runnable checks executed against `main` at commit
`e407587` ("seo: homepage metaTitle trim 76→59 chars — resolves
Phase 6 hard FAIL").

| Check | Command | Result |
|---|---|---|
| Working tree | `git status` | Clean — nothing to commit |
| Last commits | `git log --oneline -5` | `e407587, 5d4bff9, fc25cd6, 6332517, 49ef835` — all pushed to origin/main |
| TypeScript | `npx tsc --noEmit` | Exit 0, no diagnostics |
| Build | `npx next build` | Exit 0, 41 routes prerendered, 2 exports |
| `out/index.html` | `Test-Path out/index.html` | True |
| `out/_redirects` | `Test-Path out/_redirects` | True — contractors→construction-contractors 301 present, LF line endings |
| `out/sitemap.xml` | `Test-Path out/sitemap.xml` | True |
| `out/robots.txt` | `Test-Path out/robots.txt` | True |
| `out/favicon.ico` | `Test-Path out/favicon.ico` | True (root copy) |
| `out/images/logos/favicons/favicon.ico` | `Test-Path` | True (suite copy) |
| `out/404.html` | `Test-Path out/404.html` | True (custom 404) |
| HTML count in `out/` | `Get-ChildItem -Recurse *.html` | 37 files (35 pages + 404 + blog/welcome) |
| Homepage logo preload | `Select-String out/index.html "preload.*logo"` | Confirmed — canonical lockup wired |

### Phase 6 verdict, resolved
- Original homepage metaTitle was 76 chars (`'AI Automation & Growth Systems for Local Service Businesses | Sirius Systems'`) — flagged as the one hard FAIL.
- Resolved this session by trimming to 59 chars (`'AI Automation for Local Service Businesses | Sirius Systems'`) — under the 60-char cap.
- Same trim applied to `metadata.title` (`app/page.tsx:36`) and `openGraph.title` (`app/page.tsx:41`).
- Commit `e407587`.

---

## Cloudflare Pages — PENDING (user dashboard work)

User to complete in Cloudflare dashboard at https://dash.cloudflare.com and report results back.

### 3A. Project created
- [ ] Workers & Pages → Pages → Create a project
- [ ] Connect to Git → GitHub authorization confirmed
- [ ] Repo selected: `SedrickHarris/sirius-systems-site`
- [ ] Branch selected: `main`

### 3B. Build settings
- [ ] Framework preset: Next.js (Static HTML Export) — OR "None" with manual settings below
- [ ] Build command: `npm run build`
- [ ] Build output directory: `out`
- [ ] Root directory: `/` (repo root)
- [ ] Node.js version: `20.x` (Environment variables or Build system version)

### 3C. Environment variables
- [ ] **None required** for Phase 7 static build (confirmed)
- [ ] (Future: `NEXT_PUBLIC_GHL_WEBHOOK_URL` — deferred post-launch task)

### 3D. Initial deploy
- [ ] Save and Deploy clicked
- [ ] Build log: success / fail — paste outcome
- [ ] Preview URL assigned: `https://________.pages.dev`

---

## Preview smoke test — PENDING

Run against the `*.pages.dev` URL before wiring the custom domain. Mark each route PASS/FAIL.

| URL | Expected | Result |
|---|---|---|
| `/` | Homepage renders, new 59-char title in `<title>`, canonical logo lockup visible | [ ] |
| `/ai-automation` | Service page renders | [ ] |
| `/industries/home-services` | Industry hub renders | [ ] |
| `/industries/construction-contractors` | Renamed hub renders | [ ] |
| `/industries/hospitality-events` | L4 rewrite renders, new 58-char title | [ ] |
| `/privacy` | Utility renders | [ ] |
| `/blog` | Blog index renders | [ ] |
| `/blog/welcome` | Welcome post renders | [ ] |
| `/does-not-exist` | Custom 404 with brand styling, 4-link nav (home/services/industries/blog/contact) | [ ] |
| `/industries/contractors` | **301 redirect** to `/industries/construction-contractors` | [ ] |

### _redirects edge test
- [ ] Hit `https://<preview>.pages.dev/industries/contractors` directly
- [ ] Confirm browser network panel shows `301` status with `Location: /industries/construction-contractors`
- [ ] If 200 (no redirect): check `out/_redirects` made it into the deploy bundle; check line-ending is LF (verified locally — should be fine)

---

## Custom domain — PENDING

### 5A. Add custom domain
- [ ] Pages project → Custom domains → Add a domain → `siriussys.io`
- [ ] DNS record auto-added (siriussys.io is on Cloudflare DNS) or added manually at registrar

### 5B. www redirect
Per `docs/seo/url-strategy.md §2`: canonical is bare `siriussys.io` (no www).
- [ ] CNAME `www` → `<project>.pages.dev` added
- [ ] Cloudflare Redirect Rule (or Page Rule) added: `www.siriussys.io/*` → `https://siriussys.io/$1` (301)
- [ ] OR: Cloudflare Pages native www redirect setting enabled

### 5C. HTTPS / TLS
- [ ] `https://siriussys.io` loads with valid certificate (no mixed content, no warning)
- [ ] Certificate issuer recorded: ____________________

### 5D. DNS propagation
- [ ] Confirmed reachable from one external network (mobile data, friend's connection, dnschecker.org)
- [ ] Cutover time recorded: ____________________

---

## Production smoke test — PENDING

Run against `https://siriussys.io` after custom domain is live.

| URL | Result |
|---|---|
| `https://siriussys.io/` | [ ] |
| `https://siriussys.io/ai-automation` | [ ] |
| `https://siriussys.io/ai-chatbots` | [ ] |
| `https://siriussys.io/reputation-management` | [ ] |
| `https://siriussys.io/all-in-one-business-growth-system` | [ ] |
| `https://siriussys.io/industries` | [ ] |
| `https://siriussys.io/industries/home-services` | [ ] |
| `https://siriussys.io/industries/construction-contractors` | [ ] |
| `https://siriussys.io/industries/healthcare-medical` | [ ] |
| `https://siriussys.io/industries/technology-b2b` | [ ] |
| `https://siriussys.io/industries/hospitality-events` | [ ] |
| `https://siriussys.io/about` | [ ] |
| `https://siriussys.io/services` | [ ] |
| `https://siriussys.io/contact` | [ ] (also: submit qualification form; confirm GHL 200 OK) |
| `https://siriussys.io/booking` | [ ] (also: GHL calendar iframe renders without white strip) |
| `https://siriussys.io/blog` | [ ] |
| `https://siriussys.io/blog/welcome` | [ ] |
| `https://siriussys.io/privacy` | [ ] |
| `https://siriussys.io/terms` | [ ] |
| `https://siriussys.io/sitemap.xml` | [ ] (returns XML, 36 entries) |
| `https://siriussys.io/robots.txt` | [ ] (returns text) |
| `https://siriussys.io/does-not-exist` | [ ] (404 status + branded 404 page) |
| `https://siriussys.io/industries/contractors` | [ ] (**301** to /construction-contractors) |

---

## Post-deploy submissions — PENDING

### Google Search Console
- [ ] Property added: `https://siriussys.io`
- [ ] Ownership verified (recommend DNS TXT via Cloudflare — fastest)
- [ ] Sitemap submitted: `https://siriussys.io/sitemap.xml`
- [ ] Initial indexing status recorded: ____________________

### Bing Webmaster Tools
- [ ] Site added: `https://siriussys.io`
- [ ] Verified (recommend "Import from Google Search Console" once GSC is verified)
- [ ] Sitemap submitted: `https://siriussys.io/sitemap.xml`

### GBP NAP cross-check
Per `docs/site-os/inputs/verified-public-sources.md §1a` (GBP confirmed 2026-05-23):

| Field | Site value | GBP value | Match? |
|---|---|---|---|
| Brand name | Sirius Systems | Sirius Systems | [ ] |
| Phone | (727) 222-3424 | (727) 222-3424 | [ ] |
| Address | 304 S Jones Blvd Ste 1915, Las Vegas, NV 89107 | 304 S Jones Blvd Ste 1915, Las Vegas, NV 89107 | [ ] |
| Website (GBP profile field) | https://siriussys.io | _____________ | [ ] |

If GBP website field shows `www.siriussys.io` or http://, update to exactly `https://siriussys.io`.

---

## Phase 7 verdict

**Status:** _Live with one outstanding non-blocker (www→apex 301)._

```
[x] COMPLETE — site live at https://siriussys.io as of 2026-05-29 (Cloudflare Pages)
[ ] BLOCKED — reason: n/a
```

### Live verification — 2026-05-29 (curl against production)

| Check | Result |
|---|---|
| `https://siriussys.io/` | 200 · `Server: cloudflare` · HTTPS valid · `<title>` = "AI Automation for Local Service Businesses \| Sirius Systems" |
| `https://siriussys.io/ai-automation` | 200 |
| `https://siriussys.io/industries/construction-contractors` | 200 |
| `https://siriussys.io/sitemap.xml` | 200 · 36 `<loc>` entries |
| `https://siriussys.io/robots.txt` | 200 |
| `https://siriussys.io/does-not-exist` | 404 (branded) |
| `https://siriussys.io/industries/contractors` | **301** → `/industries/construction-contractors` (edge `_redirects` confirmed) |
| GHL webhook | Live by design — hardcoded for launch (env-var migration deferred) |

**FAIL / outstanding:** `https://www.siriussys.io/` returns **200**, not a 301 to the bare
apex. `url-strategy.md §2` and §5B below require `www → https://siriussys.io` (301). Add a
Cloudflare redirect rule. Not a launch blocker, but should be fixed for canonical hygiene.

**Not verified this session (user dashboard actions):** Cloudflare project/build settings
(§3A–3D), preview smoke test (§ preview), GSC/Bing sitemap submission, and GBP NAP
cross-check remain as recorded below — complete and check off when done.

---

## Known deferred items (post-launch, not blockers)

- `NEXT_PUBLIC_GHL_WEBHOOK_URL` env-var migration (URL currently hardcoded in `components/site/QualificationForm.tsx` — by design; runbook lives in memory and was confirmed 2026-05-27).
- Light/inverse logo variant — no candidate in `public/images/logos/` (all variants are for dark canvas; all current surfaces are dark).
- OG default social card at `public/og/default.png` (1200×630) — TODO comment in `app/layout.tsx` openGraph block.
- 5 orphaned `components/site/` files (CategoryCard, Container, CTACard, CTASection, HowItWorksSteps) — informational, not Phase 7 blockers.
- 6 moderate npm audit findings (postcss/uuid transitive chains) — below high threshold; auto-fix would force breaking-change upgrades.
- 4 industry-page TODOs gated on client CRM confirmation (`content-needed-from-client.md` §2.4).
