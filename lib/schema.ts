// lib/schema.ts
// JSON-LD helpers for Sirius Systems.
//
// Rules per docs/seo/schema-plan.md and do-not-invent-rules.md:
//   - No AggregateRating / Review anywhere
//   - No LocalBusiness until NAP is confirmed (address/phone confirmed per
//     content-needed-from-client.md 2.3: 304 S Jones Blvd Ste 1915, Las Vegas, NV 89107)
//   - Article schema uses @type Article, not BlogPosting
//   - FAQPage schema only emitted when visible FAQ text exists on the page,
//     and always from the same items array that drives the visible render
//   - All values derived from confirmed frontmatter or SITE constants only

import { SITE } from '@/lib/site'
import type { PostFrontmatter } from '@/lib/blog'

export type JsonLd = Record<string, unknown>

// ── WebPage ───────────────────────────────────────────────────────────────────

export function webPage({
  url,
  name,
  description,
}: {
  url:         string
  name:        string
  description: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      `${SITE.url}${url}#webpage`,
    url:        `${SITE.url}${url}`,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id':   `${SITE.url}#website`,
      url:     SITE.url,
      name:    SITE.name,
    },
  }
}

// ── BreadcrumbList ────────────────────────────────────────────────────────────

export function breadcrumbList(trail: { name: string; url: string }[]): JsonLd {
  return {
    '@context':       'https://schema.org',
    '@type':          'BreadcrumbList',
    itemListElement:  trail.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      item.name,
      item:      `${SITE.url}${item.url}`,
    })),
  }
}

// ── FAQPage ───────────────────────────────────────────────────────────────────
// CRITICAL: Only call this with items that are ALSO visually rendered on the page.
// The items array must be the same object passed to the <FAQ> component render.

export type QA = { q: string; a: string }

export function faqPage(items: QA[]): JsonLd {
  return {
    '@context':   'https://schema.org',
    '@type':      'FAQPage',
    mainEntity:   items.map((item) => ({
      '@type': 'Question',
      name:    item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    item.a,
      },
    })),
  }
}

// ── Service ───────────────────────────────────────────────────────────────────

export function serviceSchema({
  slug,
  name,
  description,
}: {
  slug:        string
  name:        string
  description: string
}): JsonLd {
  return {
    '@context':   'https://schema.org',
    '@type':      'Service',
    '@id':        `${SITE.url}/${slug}#service`,
    serviceType:  name,
    name,
    description,
    provider:     { '@id': `${SITE.url}/#organization` },
    areaServed:   'Worldwide',
    url:          `${SITE.url}/${slug}`,
  }
}

// ── Article ───────────────────────────────────────────────────────────────────
// Used on every blog post. @type Article per schema-plan.md (not BlogPosting).
// No aggregateRating, no review, no LocalBusiness nesting.
// All values derived from confirmed frontmatter fields only.

export function articleSchema(fm: PostFrontmatter): JsonLd {
  return {
    '@context':    'https://schema.org',
    '@type':       'Article',
    headline:      fm.title,
    description:   fm.description,
    url:           fm.canonicalUrl,
    datePublished: fm.date,
    dateModified:  fm.dateModified,
    author: {
      '@type': 'Person',
      name:    fm.author,
      // Link to /about only for the confirmed founder byline
      ...(fm.author === SITE.founder ? { url: `${SITE.url}/about` } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name:    SITE.name,
      url:     SITE.url,
    },
    image:            `${SITE.url}${fm.ogImage ?? fm.featuredImage}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   fm.canonicalUrl,
    },
    // keywords only when tags are present
    ...(fm.tags.length > 0 ? { keywords: fm.tags.join(', ') } : {}),
  }
}

// ── Person ────────────────────────────────────────────────────────────────────
// Founder entity, linked to the homepage Organization via worksFor @id.
// No image field: founder headshot is not yet confirmed
// (content-needed-from-client.md item 1.11). Omit image until provided.

export function personSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type':    'Person',
    '@id':      `${SITE.url}/#founder`,
    name:       'Sedrick Harris',
    url:        `${SITE.url}/about`,
    jobTitle:   'Founder',
    worksFor:   { '@id': `${SITE.url}/#organization` },
    sameAs: [
      'https://www.instagram.com/sedrick.h.harris/',
      'https://github.com/SedrickHarris',
    ],
  }
}
