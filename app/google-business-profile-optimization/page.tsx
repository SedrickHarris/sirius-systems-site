import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'google-business-profile-optimization',
  metaTitle: 'Google Business Profile Optimization | Sirius Systems',
  metaDescription:
    'GBP optimization that closes the gaps suppressing your local search rankings — categories, services, photos, posts, Q&A, and NAP consistency.',
  eyebrow: 'Google Business Profile',
  headline:
    'The first thing customers see. Most businesses set it up once and forget it.',
  subheadline:
    'An optimized GBP puts your business in front of people searching for exactly what you do, in the area you serve, at the moment they are ready to book.',
  glyphVariant: 'beacon' as const,
  definition:
    'Google Business Profile optimization means fully configuring and actively maintaining your GBP listing so Google surfaces your business prominently in local search and Maps results. It covers the elements most businesses set up once and leave incomplete: primary and secondary categories, service listings with descriptions, attributes, photos, posts, Q&A, and NAP consistency across your entire web presence. An incomplete or stale profile is a direct ranking liability against competitors who maintain theirs.',
  problems: [
    'Your GBP was set up years ago and has not been updated since. Services are missing, photos are outdated, and the business description does not reflect what you actually do.',
    'You are in a primary category that is too broad or mismatched, and you are missing the secondary categories that match how customers actually search for your services.',
    'Competitors with similar or weaker review profiles rank above you in the local pack because their profiles are more complete and signal active management.',
    'Your profile has unanswered Q&A entries, missing attributes, and NAP details that do not match your website — each one a signal Google reads as unreliable.',
  ],
  steps: [
    {
      label: 'Full profile audit against competitors',
      body: 'We review every element of your current GBP against both Google best practices and the top-ranking profiles in your local market. Categories, service area configuration, attributes, photo count and recency, post frequency, Q&A status, and review response rate are all measured. You receive a prioritized gap list before we change anything.',
    },
    {
      label: 'Core profile optimization',
      body: 'We update the elements with the highest impact on visibility: primary and secondary category selection, service listings with keyword-relevant descriptions, business attributes, and the business description written for local search intent. NAP details are checked against your website and major directories and corrected where they conflict.',
    },
    {
      label: 'Visual and content layer',
      body: 'We configure the photo set with the categories Google uses to classify images, add service-specific visuals, and establish a GBP post cadence — service highlights, updates, or offers — so the profile signals ongoing activity rather than a listing that was claimed and abandoned.',
    },
    {
      label: 'Q&A, review integration, and maintenance',
      body: 'We populate the Q&A section with the questions your customers actually ask so they are answered before a visitor has to ask them. Review response workflows are connected so incoming reviews do not go unanswered. A maintenance schedule is set so the profile stays current when services, hours, or service area changes.',
    },
  ],
  features: [
    'Category optimization: primary and secondary categories matched to how customers search',
    'Service listings: every service added with descriptions that match search intent',
    'NAP consistency audit: name, address, phone consistent across your web presence',
    'Photo configuration: business, team, and service photos set up correctly',
    'GBP post setup: post cadence configured for updates, offers, or service highlights',
    'Q&A population: common questions answered before customers have to ask',
    'Attribute configuration: all relevant business attributes enabled',
    'Review response integration: connects to your review response workflow',
  ],
  outcomes: [
    'Your profile appears more completely in local search and Maps results because the gaps that were suppressing visibility are closed.',
    'Customers land on a profile that answers their questions before they have to call — service descriptions, hours, location, and Q&A all present and current.',
    'Google sees an actively maintained profile with consistent post activity and review responses, which reinforces your local ranking position over stale competitor listings.',
    'NAP consistency across your website, GBP, and directories removes a common trust signal problem that suppresses local rankings without any obvious cause.',
    'Your services are findable by customers searching for specific job types, not just by customers who already know your business name.',
  ],
  relatedSlugs: [
    'local-seo-aeo',
    'reputation-management',
    'review-automation',
    'smart-websites',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is Google Business Profile optimization?',
      a: 'Google Business Profile optimization means fully configuring and actively maintaining your GBP listing so Google surfaces your business prominently in local search and Maps results. It covers the elements most profiles leave incomplete: primary and secondary categories, service listings, attributes, photos, posts, Q&A, and consistent NAP details across your web presence.',
    },
    {
      q: 'What is the Google local pack and how does GBP affect it?',
      a: 'The local pack is the block of three business listings that appears at the top of Google search results for local service queries, above the organic results. GBP is the primary input Google uses to decide which businesses appear there. Profile completeness, category accuracy, review volume and recency, post activity, and NAP consistency are all factors. An optimized GBP is the foundation of local pack visibility.',
    },
    {
      q: 'My GBP is already set up. Do I still need this?',
      a: 'Most GBP profiles that were configured without a structured optimization process are missing secondary categories, have incomplete or absent service listings, lack relevant attributes, and have no post or Q&A activity. A full audit identifies exactly what is missing and how each gap compares to the profiles ranking above you. In most cases there are five to ten correctable issues that are directly affecting visibility.',
    },
    {
      q: 'What is NAP consistency and why does it affect rankings?',
      a: 'NAP stands for Name, Address, and Phone. When these details appear differently across your website, GBP, directories, and social profiles — different phone formats, abbreviated address variations, slightly different business names — Google loses confidence that all of those listings refer to the same business. That reduced confidence can suppress local rankings even when every other signal is strong.',
    },
    {
      q: 'How much does GBP affect local search rankings?',
      a: 'GBP signals are among the primary factors Google uses to rank local results. Profile completeness, category accuracy, review volume and recency, post frequency, and photo activity all contribute. A stale or incomplete profile is a direct competitive disadvantage against businesses in your market that actively maintain theirs.',
    },
    {
      q: 'What is GBP Q&A and why does it matter?',
      a: 'The Q&A section on a Google Business Profile lets anyone post questions that the business or the public can answer. Most businesses leave this section empty or unmonitored, which means customers post questions that go unanswered, or members of the public answer them inaccurately. Populating Q&A with the questions your customers actually ask, answered correctly, removes a trust barrier before a visitor ever contacts you.',
    },
    {
      q: 'What are GBP posts and do they actually help?',
      a: 'GBP posts are short updates that appear on your profile and in some local search results. They signal to Google that the profile is actively managed rather than claimed and abandoned. Consistent post activity is a mild but real ranking factor. More practically, posts give you a surface to highlight current services, seasonal offers, or recent work without requiring a change to your website.',
    },
    {
      q: 'How does GBP optimization connect to the rest of my system?',
      a: 'GBP is the anchor of your local search presence. It connects to your review acquisition system so incoming reviews build consistently on the profile, to your review response workflow so no review goes unanswered, and to your website so the signals across both align rather than contradict each other. An optimized GBP without a review system to feed it stalls. A review system without an optimized profile to display those reviews is a missed opportunity.',
    },
    {
      q: 'How long does it take to see results from GBP optimization?',
      a: 'Core profile updates — category corrections, service listings, attribute additions — can produce visible ranking movement within a few weeks as Google recrawls and reindexes the profile. Photo and post activity compounds over time. NAP corrections across directories take longer to propagate. The full effect of a structured optimization is typically visible over two to three months, though some improvements show up sooner depending on how significant the gaps were.',
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
    images: [{ url: '/images/og/google-business-profile-optimization.webp', alt: PAGE.metaTitle }],
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
