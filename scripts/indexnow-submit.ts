// scripts/indexnow-submit.ts
// Post-deploy IndexNow submission for Sirius Systems.
//
// The site is fully static (Next.js `output: 'export'` → Cloudflare Pages).
// There is no server runtime, so URL submission cannot happen at request time —
// this script runs at DEPLOY time (CI or manual) and POSTs the full URL list to
// api.indexnow.org in a single bulk request. See docs/site-os/indexnow-setup.md.
//
// The IndexNow key is read from the INDEXNOW_KEY environment variable and is
// NEVER hardcoded. The matching ownership-proof file lives in /public/ and is
// served at https://siriussys.io/<INDEXNOW_KEY>.txt after deploy.
//
// ts-node note: this project's ts-node config (package.json) uses
// module=commonjs / moduleResolution=node and does NOT register the `@/` path
// alias. Importing app/sitemap.ts or lib/blog.ts directly would fail at runtime
// because both pull in `@/`-aliased modules. So STATIC_ROUTES is mirrored inline
// (kept in sync with app/sitemap.ts) and blog slugs are read straight from
// content/blog/*.mdx with gray-matter — the same engine lib/blog.ts uses.

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ─────────────────────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = 'https://siriussys.io'
const HOST = 'siriussys.io'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Mirror of STATIC_ROUTES paths in app/sitemap.ts (source of truth).
// Only the path is needed here — IndexNow takes URLs, not priority/changefreq.
// Keep this list in sync when routes are added/removed in app/sitemap.ts.
const STATIC_ROUTES: readonly string[] = [
  // Core
  '/',
  '/services',
  '/about',
  '/contact',
  '/booking',
  // Service (14)
  '/ai-automation',
  '/ai-chatbots',
  '/ai-voicebots',
  '/crm-automation',
  '/appointment-booking-automation',
  '/smart-websites',
  '/lead-generation-automation',
  '/reputation-management',
  '/review-automation',
  '/ai-review-responses',
  '/google-business-profile-optimization',
  '/local-seo-aeo',
  '/competitor-review-benchmarking',
  '/all-in-one-business-growth-system',
  // Industry hub + pages
  '/industries',
  '/industries/home-services',
  '/industries/construction-contractors',
  '/industries/professional-services',
  '/industries/auto-services',
  '/industries/beauty-wellness',
  '/industries/healthcare-medical',
  '/industries/real-estate-property',
  '/industries/hospitality-events',
  '/industries/education-childcare',
  '/industries/community-faith-nonprofit',
  '/industries/retail-local-commerce',
  '/industries/technology-b2b',
  // Intersection pages — Batch 1 (Industry × Service)
  '/industries/home-services/reputation-management',
  '/industries/home-services/appointment-booking-automation',
  '/industries/home-services/ai-chatbots',
  '/industries/construction-contractors/reputation-management',
  '/industries/construction-contractors/appointment-booking-automation',
  '/industries/construction-contractors/ai-chatbots',
  '/industries/beauty-wellness/reputation-management',
  '/industries/beauty-wellness/appointment-booking-automation',
  '/industries/beauty-wellness/ai-chatbots',
  '/industries/healthcare-medical/reputation-management',
  '/industries/healthcare-medical/appointment-booking-automation',
  '/industries/healthcare-medical/ai-chatbots',
  // Intersection pages — Batch 2 (Industry × Service)
  '/industries/professional-services/reputation-management',
  '/industries/professional-services/appointment-booking-automation',
  '/industries/auto-services/reputation-management',
  '/industries/auto-services/appointment-booking-automation',
  '/industries/real-estate-property/reputation-management',
  '/industries/real-estate-property/appointment-booking-automation',
  '/industries/hospitality-events/reputation-management',
  '/industries/technology-b2b/reputation-management',
  '/industries/retail-local-commerce/reputation-management',
  // Blog index
  '/blog',
  // Utility
  '/privacy',
  '/terms',
]

// Decision: /sitemap.xml and /robots.txt are intentionally EXCLUDED. IndexNow is
// for content pages; search engines fetch sitemap/robots on their own crawl
// schedule, and the IndexNow protocol does not act on them. Submitting them adds
// noise without benefit. To include them anyway, append them to `urls` below.

// ─────────────────────────────────────────────────────────────────────────────
// IndexNow request body shape
// ─────────────────────────────────────────────────────────────────────────────

interface IndexNowPayload {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

// Read published (non-draft) blog slugs directly from content/blog/*.mdx.
// Mirrors lib/blog.ts: required fields are title/slug/date/category; draft:true
// posts are skipped (production behaviour — this script runs at deploy time).
function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return data as {
        title?: string
        slug?: string
        date?: unknown
        category?: string
        draft?: boolean
      }
    })
    .filter((d) => Boolean(d.title && d.slug && d.date && d.category))
    .filter((d) => d.draft !== true)
    .map((d) => d.slug as string)
}

function buildUrlList(): string[] {
  const staticUrls = STATIC_ROUTES.map((route) => `${SITE_URL}${route}`)
  const blogUrls = getBlogSlugs().map((slug) => `${SITE_URL}/blog/${slug}`)
  return [...staticUrls, ...blogUrls]
}

function logResponseGuidance(status: number, keyLocation: string, body: string): void {
  switch (status) {
    case 400:
      console.error('IndexNow: bad request — check URL list format')
      break
    case 403:
      console.error(
        `IndexNow: key not found or key file not accessible at ${keyLocation} — ` +
          'verify the .txt file deployed correctly',
      )
      break
    case 422:
      console.error(
        'IndexNow: one or more URLs failed validation — check that all URLs use ' +
          'HTTPS and match the registered host',
      )
      break
    case 429:
      console.error('IndexNow: rate limited — retry later')
      break
    default:
      console.error(`IndexNow: unexpected status ${status}`)
      if (body) console.error(`Response body: ${body}`)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    console.error(
      'INDEXNOW_KEY is not set. Set it before running, e.g.:\n' +
        '  PowerShell: $env:INDEXNOW_KEY="<your-key>"; npx ts-node scripts/indexnow-submit.ts\n' +
        'The key must match the ownership-proof .txt file in /public/.',
    )
    process.exit(1)
  }

  const keyLocation = `${SITE_URL}/${key}.txt`
  const urlList = buildUrlList()

  if (urlList.length === 0) {
    console.error('IndexNow: URL list is empty — nothing to submit. Aborting.')
    process.exit(1)
  }

  const payload: IndexNowPayload = {
    host: HOST,
    key,
    keyLocation,
    urlList,
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow (${INDEXNOW_ENDPOINT})...`)
  console.log(`keyLocation: ${keyLocation}`)

  let response: Response
  try {
    response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error(
      `IndexNow: network error reaching ${INDEXNOW_ENDPOINT} — ` +
        (err instanceof Error ? err.message : String(err)),
    )
    process.exit(1)
  }

  if (response.status === 200 || response.status === 202) {
    console.log(`IndexNow submission succeeded. ${urlList.length} URLs submitted.`)
    return
  }

  const body = await response.text().catch(() => '')
  logResponseGuidance(response.status, keyLocation, body)
  process.exit(1)
}

main().catch((err) => {
  console.error('Error:', err instanceof Error ? err.message : err)
  process.exit(1)
})
