// JSON-LD helpers. Every emit respects docs/seo/schema-plan.md and
// docs/site-os/inputs/do-not-invent-rules.md. No AggregateRating / Review.
// No LocalBusiness until NAP is confirmed.

import { SITE } from '@/lib/site'
import type { QA } from '@/lib/faq'

export type JsonLd = Record<string, unknown>

export function webPage({
  url,
  name,
  description,
}: {
  url: string
  name: string
  description: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}${url}#webpage`,
    url: `${SITE.url}${url}`,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE.url}#website`,
      url: SITE.url,
      name: SITE.name,
    },
  }
}

export function breadcrumbList(
  trail: { name: string; url: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }
}

export function faqPage(items: QA[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function serviceSchema({
  slug,
  name,
  description,
}: {
  slug: string
  name: string
  description: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${slug}#service`,
    serviceType: name,
    name,
    description,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'Worldwide',
    url: `${SITE.url}/${slug}`,
  }
}

