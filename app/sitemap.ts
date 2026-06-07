// app/sitemap.ts
// Generates sitemap.xml for Sirius Systems.
// Statically prerendered with `output: 'export'` in next.config.mjs.
//
// Blog posts are read from content/blog/*.mdx at build time via lib/blog.ts.
// Only published posts (draft: false) appear in the sitemap.

import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

type Freq = MetadataRoute.Sitemap[number]['changeFrequency']

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: Freq }[] = [
  // Core
  { path: '/',                             priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/services',                     priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about',                        priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/booking',                      priority: 0.8, changeFrequency: 'monthly' },

  // Service (14)
  { path: '/ai-automation',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-chatbots',                         priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-voicebots',                        priority: 0.8, changeFrequency: 'monthly' },
  { path: '/crm-automation',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/appointment-booking-automation',      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/smart-websites',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/lead-generation-automation',          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reputation-management',               priority: 0.8, changeFrequency: 'monthly' },
  { path: '/review-automation',                   priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-review-responses',                 priority: 0.8, changeFrequency: 'monthly' },
  { path: '/google-business-profile-optimization',priority: 0.8, changeFrequency: 'monthly' },
  { path: '/local-seo-aeo',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/competitor-review-benchmarking',      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/all-in-one-business-growth-system',   priority: 0.9, changeFrequency: 'monthly' },

  // Industry hub + pages
  { path: '/industries',                          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/home-services',            priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/construction-contractors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/professional-services',    priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/auto-services',            priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/beauty-wellness',          priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/healthcare-medical',       priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/real-estate-property',     priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/hospitality-events',       priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/education-childcare',      priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/community-faith-nonprofit',priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/retail-local-commerce',    priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/technology-b2b',           priority: 0.7, changeFrequency: 'monthly' },

  // Intersection pages — Batch 1 (Industry × Service)
  // Priority 0.8 — same as service pages (Level 5, high-intent buyers)
  { path: '/industries/home-services/reputation-management',              priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/home-services/appointment-booking-automation',     priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/home-services/ai-chatbots',                        priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/construction-contractors/reputation-management',   priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/construction-contractors/appointment-booking-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/construction-contractors/ai-chatbots',             priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/beauty-wellness/reputation-management',            priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/beauty-wellness/appointment-booking-automation',   priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/beauty-wellness/ai-chatbots',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/healthcare-medical/reputation-management',         priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/healthcare-medical/appointment-booking-automation',priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/healthcare-medical/ai-chatbots',                   priority: 0.8, changeFrequency: 'monthly' },

  // Blog index
  { path: '/blog',                                priority: 0.8, changeFrequency: 'weekly'  },

  // Utility
  { path: '/privacy',                             priority: 0.3, changeFrequency: 'yearly'  },
  { path: '/terms',                               priority: 0.3, changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url:             `${SITE.url}${route.path}`,
    lastModified:    new Date(),
    changeFrequency: route.changeFrequency,
    priority:        route.priority,
  }))

  // Dynamic blog post entries — built from MDX frontmatter dates
  const posts = getAllPosts()
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url:             `${SITE.url}/blog/${post.slug}`,
    lastModified:    new Date(post.frontmatter.dateModified + 'T00:00:00'),
    changeFrequency: 'monthly' as Freq,
    priority:        0.7,
  }))

  return [...staticEntries, ...postEntries]
}
