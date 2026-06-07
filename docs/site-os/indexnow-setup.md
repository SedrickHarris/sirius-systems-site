# IndexNow Setup — Sirius Systems

Post-deploy URL submission for a fully static site (Next.js `output: 'export'` →
Cloudflare Pages). Script: `scripts/indexnow-submit.ts`. Run command:
`npm run indexnow-submit`.

---

## 1. What IndexNow is and why it matters

IndexNow is a protocol that lets a site tell participating search engines, with a
single HTTP request, which URLs have been added or changed. It does not guarantee
or speed up indexing — it **notifies** search engines of changes, which reduces
crawl lag so engines discover new and updated pages sooner instead of waiting for
their next scheduled crawl.

---

## 2. Key file verification

Ownership is proven by a key file served over HTTPS on the site.

- **The key string** is the IndexNow key (also the contents of the `.txt` file).
- **The key file** must be reachable at the **site root** so the key is
  authorized for the whole host:
  `https://siriussys.io/<key>.txt`
- In this repo the file lives at `public/<key>.txt` (Cloudflare Pages serves
  `public/` at the domain root). A copy also exists under `public/dcbb85/` from
  initial setup — the **root** copy is the one IndexNow validates against.

> ⚠️ **Directory scope gotcha.** IndexNow authorizes a key only for URLs at or
> below the folder the key file sits in. A key at `/dcbb85/<key>.txt` could only
> submit `/dcbb85/*` URLs — every real page (`/`, `/services`, `/blog/...`) would
> be rejected with **422**. That is why the key file must be at the root for a
> whole-site submission.

Verify it is live after deploy (PowerShell):

```powershell
curl -I https://siriussys.io/<key>.txt
```

Expect: `HTTP/… 200`. A 404 means the file did not deploy to the root; a 403 from
IndexNow later means the key file was not reachable at the `keyLocation`.

---

## 3. How to run the script manually

The script reads the key from the `INDEXNOW_KEY` environment variable and never
hardcodes it. PowerShell (this project's standard shell):

```powershell
$env:INDEXNOW_KEY="<your-key>"; npx ts-node scripts/indexnow-submit.ts
```

Or via the npm script:

```powershell
$env:INDEXNOW_KEY="<your-key>"; npm run indexnow-submit
```

If `INDEXNOW_KEY` is unset the script prints a clear error and exits with code 1
(it does not crash or send a request).

The script builds the URL list from the static routes mirrored from
`app/sitemap.ts` plus every published (non-draft) blog slug in
`content/blog/*.mdx`, then POSTs them all to `https://api.indexnow.org/indexnow`
in one bulk request. `keyLocation` is derived as
`https://siriussys.io/<INDEXNOW_KEY>.txt`.

---

## 4. Wire into GitHub Actions (recommended)

Run the submission after the Cloudflare Pages deploy has propagated. Store the key
as a repository secret (`Settings → Secrets and variables → Actions → New
repository secret`, name `INDEXNOW_KEY`).

```yaml
# .github/workflows/indexnow.yml
name: IndexNow submit
on:
  push:
    branches: [main]

jobs:
  indexnow:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      # Give Cloudflare Pages time to build + propagate the new deploy so the
      # key file and pages are live before we submit. A fixed sleep is the
      # simplest approach; alternatively gate this job on a Pages deploy webhook.
      - name: Wait for CDN propagation
        run: sleep 60
      - name: Submit URLs to IndexNow
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
        run: npx ts-node scripts/indexnow-submit.ts
```

> The 60-second sleep is a pragmatic stand-in for "deploy is live." If you want a
> tighter signal, trigger this workflow from a Cloudflare Pages deployment
> notification instead of `on: push`, or poll `curl -I https://siriussys.io/<key>.txt`
> until it returns 200 before submitting.

---

## 5. Wire into Cloudflare Pages (alternative)

Cloudflare Pages does not natively run an arbitrary post-deploy Node.js script.
Two options if you want to stay in the Cloudflare ecosystem:

- **Preferred:** use the GitHub Actions workflow above. It is the simplest
  reliable path and keeps the URL-building logic in one TypeScript file.
- **Cloudflare Worker + Deploy Hook (outline only — not built here):** create a
  Worker that calls the IndexNow API directly, and invoke it from a Pages
  **Deploy Hook** URL after each successful deploy. The Worker would hold the key
  as a secret (`wrangler secret put INDEXNOW_KEY`), build the same URL list, and
  POST to `https://api.indexnow.org/indexnow`. This duplicates the submission
  logic in Worker form, so only pursue it if GitHub Actions is unavailable.

---

## 6. When to re-run

- On every deploy that **adds new pages or changes existing URLs** (new blog
  posts, new service/industry pages, renamed routes).
- IndexNow is **idempotent** — submitting the same URL twice is safe.
- Re-submitting on **content updates** (e.g. a revised blog post) is recommended
  so engines re-crawl the changed page sooner.

---

## 7. Registered search engines

The shared `api.indexnow.org` endpoint **syndicates** a submission to all
participating IndexNow engines — currently including **Bing, Yandex, Seznam, and
Naver** — so one POST reaches them all.

Google operates its own IndexNow-compatible endpoint and participates in the
shared infrastructure; confirm Google's current syndication status against the
[official IndexNow participants list](https://www.indexnow.org/) before relying on
it. Regardless, **Google Search Console remains the primary submission and
monitoring tool for Google** — treat IndexNow as complementary, not a replacement.

---

## 8. Do-not-invent note

IndexNow does **not** guarantee faster indexing and does not control when a search
engine actually crawls or ranks a page. It **notifies** engines that URLs have
changed, reducing crawl lag. Do not describe it as a ranking or
guaranteed-indexing tool.
