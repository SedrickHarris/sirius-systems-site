import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'local-seo-aeo',
  metaTitle: 'Local SEO & AEO for Service Businesses — Sirius Systems',
  metaDescription:
    'Local SEO and AEO that ranks your business in Google search, Google Maps, and AI answer engines — ChatGPT, Perplexity, and AI Overviews. Built for local service businesses.',
  eyebrow: 'Local SEO & AEO',
  headline: 'Rank where your customers search. Including where AI answers.',
  subheadline:
    'Local SEO puts your business in front of customers searching on Google. AEO — answer engine optimization — puts it in front of customers asking AI. Both matter now.',
  glyphVariant: 'wave' as const,
  definition:
    'Local SEO and AEO for service businesses means optimizing your web presence to rank in Google local search and Maps results, and structuring your content so AI answer engines — ChatGPT, Perplexity, Google AI Overviews — cite your business when customers ask relevant questions.',
  problems: [
    "Your business doesn't appear in the local pack for the service terms your customers actually search.",
    'Competitors with comparable or worse reviews outrank you because their technical SEO foundation is stronger.',
    "Your content isn't structured for AI answer engines — so when customers ask ChatGPT or Perplexity for recommendations, you're not in the answer.",
    'You have no visibility into which search terms are driving calls and bookings versus just impressions.',
  ],
  steps: [
    {
      label: 'Local SEO foundation audit',
      body: 'We audit your current local search presence — GBP completeness, on-site local signals, citation consistency, schema markup, and page speed. Most businesses have three to five technical gaps that are directly suppressing rankings.',
    },
    {
      label: 'On-site local optimization',
      body: 'We optimize your website for local search signals — location-relevant page content, LocalBusiness schema, service area pages where appropriate, and internal linking structure that reinforces your geographic and service relevance.',
    },
    {
      label: 'AEO content structure',
      body: 'We structure your content for AI answer engines — clear definition paragraphs, FAQ sections with direct answers, and schema markup that makes your content easy for AI systems to extract and cite. AEO is about being quotable, not just rankable.',
    },
    {
      label: 'Citation and authority building',
      body: 'We audit and clean up your business citations across directories — consistent NAP, correct categories, complete profiles on the platforms that carry the most local authority signals for your vertical.',
    },
  ],
  features: [
    'Local pack optimization — technical and content work targeted at the 3-pack',
    'Google Business Profile alignment — GBP and website signals working together',
    'LocalBusiness schema — structured data that reinforces your geographic relevance',
    'AEO content structure — definition paragraphs, FAQ, and schema for AI answer engines',
    'Service area page strategy — location-relevant pages for multi-area businesses',
    'Citation audit and cleanup — consistent NAP across directories and platforms',
    'Keyword mapping — service terms mapped to pages with the right local intent',
    'Search visibility reporting — impressions, clicks, and ranking positions over time',
  ],
  outcomes: [
    'Your business appears in local search results for the service terms customers actually use.',
    'AI answer engines have the structured content they need to cite your business in relevant answers.',
    'Technical SEO gaps that were suppressing rankings are identified and closed.',
    'Your GBP and website send consistent signals instead of contradicting each other.',
    'You have visibility into which search terms are producing calls and bookings.',
  ],
  relatedSlugs: [
    'google-business-profile-optimization',
    'smart-websites',
    'reputation-management',
    'competitor-review-benchmarking',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'contractors'],
  faqs: [
    {
      q: 'What is local SEO for a service business?',
      a: "Local SEO means optimizing your web presence so your business appears in Google search results and Maps when customers in your area search for the services you offer. It covers your Google Business Profile, your website's local signals, citation consistency, and review activity.",
    },
    {
      q: 'What is AEO and why does it matter now?',
      a: 'AEO stands for answer engine optimization — structuring your content so AI systems like ChatGPT, Perplexity, and Google AI Overviews can extract and cite it when customers ask relevant questions. As more customers use AI to find service recommendations, being in the answer matters as much as ranking on the page.',
    },
    {
      q: 'How long does it take to see results from local SEO?',
      a: 'Technical fixes — schema, page speed, GBP completeness — can produce visible ranking improvements within weeks. Content and authority building compounds over months. We set realistic expectations during the discovery process based on your current position and competitive landscape.',
    },
    {
      q: 'What is citation consistency and why does it affect rankings?',
      a: 'Citations are listings of your business name, address, and phone number across directories and platforms. When these details are inconsistent — different phone numbers, misspelled business names, wrong addresses — Google loses confidence in the accuracy of your listing, which can suppress local rankings.',
    },
    {
      q: 'How does local SEO connect to the rest of the system?',
      a: 'Local SEO is the top of the funnel — it gets customers to your website or GBP. From there, your smart website, chatbot, and booking automation convert that traffic into booked jobs. SEO without a conversion layer leaks leads; automation without SEO starves the pipeline.',
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

export default function LocalSeoAeoPage() {
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
            { name: 'Local SEO & AEO', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Local SEO & AEO',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
