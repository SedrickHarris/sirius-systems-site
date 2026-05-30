import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'local-seo-aeo',
  metaTitle: 'Local SEO & AEO for Service Businesses | Sirius Systems',
  metaDescription:
    'Local SEO and AEO for service businesses — rank in Google Maps and the local pack, and get cited by ChatGPT, Perplexity, and Google AI Overviews when customers ask.',
  eyebrow: 'Local SEO & AEO',
  headline: 'Show up in Google. Show up in AI answers. Both matter now.',
  subheadline:
    'Customers search Google Maps for your service. They also ask ChatGPT, Perplexity, and Google AI Overviews. Those are two different optimization problems. We solve both — the local pack signals that drive Maps rankings and the content structure that makes AI engines cite you instead of your competitor.',
  glyphVariant: 'wave' as const,
  definition:
    'Local SEO for service businesses means optimizing your Google Business Profile, website, citations, and content so your business appears in the local pack and Maps when customers search for what you offer in your area. AEO — answer engine optimization — means structuring that same content with clear definitions, direct-answer FAQ sections, and schema markup so AI systems like ChatGPT, Perplexity, and Google AI Overviews can extract and cite your business when customers ask relevant questions. The two disciplines overlap significantly: a well-optimized local SEO foundation makes AEO easier, and AEO content signals reinforce local SEO authority.',
  problems: [
    'Your business does not appear in the local pack for the service terms your customers search. A competitor with fewer reviews and a worse website outranks you because their technical SEO foundation is stronger.',
    'You have invested in a website but it is not producing local search traffic. The site describes your services but it is not structured to tell Google or AI engines where you operate, what you do, and why you are the right answer.',
    'When a customer asks ChatGPT or Perplexity \'who does HVAC repair near me\' or \'best plumber in Las Vegas,\' your business is not in the answer. That is a new kind of invisibility that most local businesses have not started solving yet.',
    'You have no visibility into which search terms are actually driving calls and bookings versus which are just generating impressions. Without that data, every SEO decision is a guess.',
  ],
  steps: [
    {
      label: 'Local SEO foundation audit',
      body: 'We audit your current local search presence: GBP completeness, on-site local signals, citation consistency, schema markup, and page speed. Most businesses have three to five technical gaps that are directly suppressing rankings.',
    },
    {
      label: 'On-site local optimization',
      body: 'We optimize your website for local search signals: location-relevant page content, LocalBusiness schema, service area pages where appropriate, and internal linking structure that reinforces your geographic and service relevance.',
    },
    {
      label: 'AEO content structure',
      body: 'We structure your content for AI answer engines: clear definition paragraphs, FAQ sections with direct answers, and schema markup that makes your content easy for AI systems to extract and cite. AEO is about being quotable, not just rankable.',
    },
    {
      label: 'Citation and authority building',
      body: 'We audit and clean up your business citations across directories: consistent NAP, correct categories, complete profiles on the platforms that carry the most local authority signals for your vertical.',
    },
  ],
  features: [
    'Local pack optimization: technical and content work targeted at the 3-pack',
    'Google Business Profile alignment: GBP and website signals working together',
    'LocalBusiness schema: structured data that reinforces your geographic relevance',
    'AEO content structure: definition paragraphs, FAQ, and schema for AI answer engines',
    'Service area page strategy: location-relevant pages for multi-area businesses',
    'Citation audit and cleanup: consistent NAP across directories and platforms',
    'Keyword mapping: service terms mapped to pages with the right local intent',
    'Search visibility reporting: impressions, clicks, and ranking positions over time',
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
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is local SEO for a service business?',
      a: "Local SEO means optimizing your web presence so your business appears in Google search results and Maps when customers in your area search for the services you offer. It covers your Google Business Profile, your website's local signals, citation consistency, and review activity.",
    },
    {
      q: 'What is AEO and why does it matter now?',
      a: 'AEO stands for answer engine optimization: structuring your content so AI systems like ChatGPT, Perplexity, and Google AI Overviews can extract and cite it when customers ask relevant questions. As more customers use AI to find service recommendations, being in the answer matters as much as ranking on the page.',
    },
    {
      q: 'How long does it take to see results from local SEO?',
      a: 'Technical fixes: schema, page speed, GBP completeness: can produce visible ranking improvements within weeks. Content and authority building compounds over months. We set realistic expectations during the discovery process based on your current position and competitive landscape.',
    },
    {
      q: 'What is citation consistency and why does it affect rankings?',
      a: 'Citations are listings of your business name, address, and phone number across directories and platforms. When these details are inconsistent: different phone numbers, misspelled business names, wrong addresses: Google loses confidence in the accuracy of your listing, which can suppress local rankings.',
    },
    {
      q: 'How does local SEO connect to the rest of the system?',
      a: 'Local SEO is the top of the funnel: it gets customers to your website or GBP. From there, your smart website, chatbot, and booking automation convert that traffic into booked jobs. SEO without a conversion layer leaks leads; automation without SEO starves the pipeline.',
    },
    {
      q: 'What is GEO — generative engine optimization — and is it different from AEO?',
      a: 'GEO and AEO overlap significantly. AEO focuses on structuring your existing content — definitions, FAQ sections, schema — so AI engines can extract and cite it. GEO adds a broader layer: building consistent entity signals across your website, Google Business Profile, citations, and off-site mentions so AI systems recognize your business as a credible, well-established entity in your category. For local service businesses, the practical difference is small — a strong AEO foundation covers most of the GEO requirements automatically.',
    },
    {
      q: 'How do I know if my business is showing up in ChatGPT or Perplexity?',
      a: 'Manual checks are the most reliable method right now — searching for the queries your customers would use and seeing whether your business appears in the response. We set up a monitoring process during onboarding that tracks your visibility across the main AI answer engines and flags changes over time. There is no equivalent of Google Search Console for AI citations yet, so manual and semi-automated tracking is the current standard.',
    },
    {
      q: 'Does local SEO work differently for businesses without a physical storefront?',
      a: 'Yes. Service area businesses — where you travel to the customer rather than operating from a fixed location — are optimized differently than storefront businesses. GBP is configured as a service area business, which affects how Maps displays your listing. On-site content and schema are structured around the areas you serve rather than a single address. The core signals — reviews, citations, content authority — are the same.',
    },
    {
      q: 'What is the difference between local SEO and national SEO?',
      a: 'Local SEO is optimized for geographic queries — searches with location intent or searches where Google infers local intent based on your IP. The ranking factors include proximity, GBP completeness, review signals, and local citations. National SEO competes on domain authority and content depth across topics regardless of geography. For service businesses that operate in a defined area, local SEO produces higher-intent traffic because the person searching is physically in a position to hire you.',
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
