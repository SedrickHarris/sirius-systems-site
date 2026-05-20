import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'google-business-profile-optimization',
  metaTitle: 'Google Business Profile Optimization — Sirius Systems',
  metaDescription:
    'Google Business Profile optimization that improves local search visibility — NAP, categories, services, photos, posts, and Q&A fully configured for local service businesses.',
  eyebrow: 'Google Business Profile',
  headline:
    'The first thing customers see. Most businesses set it up once and forget it.',
  subheadline:
    'Your Google Business Profile drives more local search visibility than almost any other single asset. An incomplete or stale profile loses rankings and leads to competitors who maintain theirs.',
  glyphVariant: 'beacon' as const,
  definition:
    'Google Business Profile optimization means fully configuring and actively maintaining your GBP listing — categories, services, attributes, photos, posts, Q&A, and review responses — so that Google surfaces your business prominently in local search and Maps results.',
  problems: [
    "Your GBP was set up years ago and hasn't been touched since — it's missing services, photos, and current information.",
    "You're in the wrong primary category or missing secondary categories that match how customers search.",
    "Competitors with comparable ratings rank above you because their profiles are more complete and active.",
    'Your profile has unanswered Q&A, missing service descriptions, or outdated hours that erode trust.',
  ],
  steps: [
    {
      label: 'Full profile audit',
      body: "We review every element of your current GBP against Google's best practices and your competitors' profiles — categories, service areas, attributes, photos, posts, Q&A, and review activity. You get a prioritized gap list before we touch anything.",
    },
    {
      label: 'Core optimizations',
      body: 'We update the profile elements that have the most impact on visibility — primary and secondary categories, service listings with descriptions, business attributes, NAP consistency, and the business description optimized for local search intent.',
    },
    {
      label: 'Visual and content layer',
      body: 'We configure the photo set, add service-specific images, and set up a GBP post cadence — updates, offers, or service highlights — so the profile signals active management to Google, not a stale listing.',
    },
    {
      label: 'Q&A and ongoing maintenance',
      body: 'We populate the Q&A section with the questions your customers actually ask, configure review response workflows, and establish a maintenance schedule so the profile stays current as your services, hours, or service area changes.',
    },
  ],
  features: [
    'Category optimization — primary and secondary categories matched to how customers search',
    'Service listings — every service added with descriptions that match search intent',
    'NAP consistency audit — name, address, phone consistent across your web presence',
    'Photo configuration — business, team, and service photos set up correctly',
    'GBP post setup — post cadence configured for updates, offers, or service highlights',
    'Q&A population — common questions answered before customers have to ask',
    'Attribute configuration — all relevant business attributes enabled',
    'Review response integration — connects to your review response workflow',
  ],
  outcomes: [
    'Your profile appears more completely in local search and Maps results.',
    'Customers land on a profile that answers their questions before they have to call.',
    'Google sees an actively maintained profile — which is a positive ranking signal.',
    'NAP consistency across your web presence removes a common local SEO liability.',
    'Your services are discoverable by customers searching for specific jobs, not just your business name.',
  ],
  relatedSlugs: [
    'local-seo-aeo',
    'reputation-management',
    'review-automation',
    'smart-websites',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'junk-removal', 'contractors'],
  faqs: [
    {
      q: 'What is Google Business Profile optimization?',
      a: 'It means fully configuring and actively maintaining your GBP listing — categories, services, attributes, photos, posts, and Q&A — so Google surfaces your business prominently in local search and Maps results. Most businesses set it up once and leave it incomplete.',
    },
    {
      q: 'How much does GBP affect local search rankings?',
      a: 'Significantly. GBP signals — profile completeness, category accuracy, review volume and recency, post activity, and photo count — are among the primary factors Google uses to rank local results. An incomplete or stale profile is a direct competitive disadvantage.',
    },
    {
      q: 'My GBP is already set up. Do I still need this?',
      a: "Probably. Most GBP profiles that were set up without a structured optimization process are missing secondary categories, have incomplete service listings, lack attributes, and have no post or Q&A activity. A full audit identifies what's missing and what it's costing you in visibility.",
    },
    {
      q: 'What is NAP consistency and why does it matter?',
      a: 'NAP stands for Name, Address, Phone. Inconsistencies in how your business information appears across your website, GBP, directories, and social profiles create a trust signal problem for Google — it reduces confidence that the listings refer to the same business, which can suppress rankings.',
    },
    {
      q: 'How does GBP optimization connect to the rest of the system?',
      a: 'GBP is the anchor of your local search presence. We connect it to your review acquisition system so incoming reviews land on the profile consistently, to your review response workflow so nothing goes unanswered, and to your website so the signals align across both.',
    },
  ],
}

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: `/${PAGE.slug}`,
  },
}

export default function GoogleBusinessProfileOptimizationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.metaTitle,
            description: PAGE.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            {
              name: 'Google Business Profile Optimization',
              url: `/${PAGE.slug}`,
            },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Google Business Profile Optimization',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
