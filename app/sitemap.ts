import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Required with `output: 'export'` in next.config.mjs: Next defaults
// MetadataRoute handlers to dynamic; static export needs them prerendered.
export const dynamic = 'force-static'

// All static routes the site currently ships. The shape mirrors what each
// page's `metadata.alternates.canonical` declares: so a sitemap entry
// always points at the canonical URL form, not a variant.
//
// NOTE: `/privacy` and `/terms` are intentionally OMITTED. Those routes
// are referenced in the footer and prelaunch checklist but no `app/privacy`
// or `app/terms` page has been built yet (the copy is blocked on
// content-needed-from-client.md items 1.9 + 1.10). Adding them to the
// sitemap now would send search engines to two 404 URLs, which is a
// negative crawl signal. Add them back here in the same commit that ships
// the actual pages.
//
// NOTE: `/industries/contractors` is a deprecated slug. It's served via
// a 301 redirect from `public/_redirects` to `/industries/construction-
// contractors`. Indexing a redirect target is a confusing crawl signal,
// so the legacy slug is NOT included here.

type Freq = MetadataRoute.Sitemap[number]['changeFrequency']

const ROUTES: { path: string; priority: number; changeFrequency: Freq }[] = [
  // Core (4)
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },

  // Service (14): capstone elevated to 0.9; everything else at 0.8.
  { path: '/ai-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-chatbots', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-voicebots', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/crm-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/appointment-booking-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/smart-websites', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/lead-generation-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reputation-management', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/review-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-review-responses', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/google-business-profile-optimization', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/local-seo-aeo', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/competitor-review-benchmarking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/all-in-one-business-growth-system', priority: 0.9, changeFrequency: 'monthly' },

  // Industries (13): index at 0.8, hubs at 0.7
  { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/home-services', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/construction-contractors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/professional-services', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/auto-services', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/beauty-wellness', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/healthcare-medical', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/real-estate-property', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/hospitality-events', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/education-childcare', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/community-faith-nonprofit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/retail-local-commerce', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/technology-b2b', priority: 0.7, changeFrequency: 'monthly' },

  // Utility: /privacy and /terms omitted, see note above.
  // '/privacy',   // add when page ships
  // '/terms',     // add when page ships

  // TODO: extend with blog routes when blog ships.
  // Blog posts are dynamic MDX slugs — this hardcoded
  // array pattern will need to be replaced or extended
  // to read from content/blog/ at build time and
  // generate one entry per post. See Phase 5 /
  // blog build task for implementation.
  // '/blog',      // add when blog ships
  // '/blog/[slug] entries generated dynamically'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
