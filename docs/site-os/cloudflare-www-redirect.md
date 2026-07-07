# Cloudflare: force www → apex (301)

**Status:** ✅ Done and verified on 2026-07-07. The Cloudflare Redirect Rule is live;
`www` now 301-redirects to the apex domain and the fix has been verified end to end
(see "Verified behavior" below).

## Goal

- `https://www.siriussys.io/*` → `https://siriussys.io/:splat` with **301** (permanent)
- `https://siriussys.io/*` stays the live canonical site (never redirect the apex away)

## Why this can't live in `public/_redirects`

Cloudflare Pages' `_redirects` file matches **root-relative paths only**. Domain / hostname
matching is explicitly unsupported (per Cloudflare docs), so a `www`-specific source line is
silently ignored, and a path-only catch-all like `/*  https://siriussys.io/:splat  301`
would match the apex too and create an **infinite redirect loop**. This redirect therefore
has to be done at the zone (dashboard) level, not in the build output.

See the guard comment in `public/_redirects`.

## Verified behavior (2026-07-07, after the Redirect Rule went live)

| Request | Result |
|---|---|
| `https://www.siriussys.io/` | `301` → `https://siriussys.io/` ✅ |
| `https://www.siriussys.io/services` | `301` → `https://siriussys.io/services` ✅ (path preserved) |
| `https://siriussys.io/` | `200` — remains the live canonical site ✅ |

Confirmed:

- `https://www.siriussys.io/` redirects with **301** to `https://siriussys.io/`.
- `https://www.siriussys.io/services` redirects with **301** to `https://siriussys.io/services`.
- `https://siriussys.io/` remains **200** (the apex is never redirected away).
- The redirect **preserves paths** (`/services` → `/services`), so no service or industry URLs break.
- **No redirect loop and no redirect chain** — `www` → 301 → apex → 200, a single hop.
- The final landed page is the **current Sirius Systems site**
  (title *"AI Automation for Local Service Businesses | Sirius Systems"*,
  h1 *"Stop losing leads, reviews, and revenue to manual work."*), **not** the old one-page
  version ("Get More Local Business Leads…").
- Canonical tags, `metadataBase`, sitemap, and robots remain **apex-only** — unchanged by this fix.

`www` and the apex serve off the same Pages project; the 301 removes the duplicate crawlable
copy so Google consolidates unambiguously on the apex.

## Fix — add a Redirect Rule (recommended, free, one rule)

1. Cloudflare dashboard → select the **siriussys.io** zone.
2. **Rules → Redirect Rules → Create rule** (or use the built-in
   **"Redirect from WWW to Root"** template, which fills this in for you).
3. **If incoming requests match** — Custom filter expression:
   ```
   http.host eq "www.siriussys.io"
   ```
4. **Then... URL redirect:**
   - Type: **Dynamic**
   - Expression: `concat("https://siriussys.io", http.request.uri)`
     (`http.request.uri` already includes path **and** query string — leave
     "Preserve query string" off to avoid duplicating it)
   - Status code: **301**
5. Deploy.

## Verify after deploying

```bash
curl -I https://www.siriussys.io/            # expect: 301, Location: https://siriussys.io/
curl -I https://www.siriussys.io/services    # expect: 301, Location: https://siriussys.io/services
curl -L https://www.siriussys.io/ | grep -i '<h1'   # expect current apex hero, no redirect chain
curl -I https://siriussys.io/                # expect: 200 (apex NOT redirected)
```

## If www still serves stale content after the rule

Then `www` is pointed at a different origin, not the Pages project. Check, in order:
1. **Pages → the project → Custom domains:** confirm BOTH `siriussys.io` and
   `www.siriussys.io` are attached to *this* project.
2. **DNS:** confirm the `www` record (CNAME/`A`) targets the current Pages deployment,
   not an old host / old Pages project / parked page.
3. **Rules:** confirm no stale **Page Rule**, **Bulk Redirect**, or **Worker route** is
   serving the outdated one-page site on `www`.
