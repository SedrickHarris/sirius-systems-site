import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Required with `output: 'export'` in next.config.mjs — see note in sitemap.ts.
export const dynamic = 'force-static'

// Standard robots policy. No `/api/` routes exist today (the site is fully
// static), but the disallow is defensive — if a future Phase introduces
// server routes, they're already excluded from the crawl. No noindex on
// any Phase 1 route.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
