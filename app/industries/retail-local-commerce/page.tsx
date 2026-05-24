import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'retail-local-commerce',
  metaTitle: 'Retail & Local Commerce Automation | Sirius Systems',
  metaDescription:
    'Customer follow-up, review generation, and local search visibility for retail shops, boutiques, pet stores, specialty retailers, and local commerce.',
  eyebrow: 'Retail & Local Commerce',
  headline: 'The System That Keeps Customers Coming Back and Reviewing',
  subheadline:
    'Local retail lives and dies on reputation and repeat business. The shops that grow are the ones with consistent reviews, strong local search visibility, and follow-up systems that bring customers back.',
  heroHighlights: [
    'Review generation after every purchase to build your Google reputation',
    'Customer follow-up automation for repeat business and reactivation',
    'Local search and Google Business Profile optimization for foot traffic',
    'AI-generated review responses to keep your profile active and engaged',
  ],
  problemHeadline: 'Where local retail and commerce businesses lose customers',
  problems: [
    'You have happy customers who never leave reviews because no one asks them at the right moment after a purchase or visit.',
    'Your Google Business Profile is incomplete or inactive, which suppresses your visibility in local search and Maps results.',
    'There is no follow-up system to bring past customers back, so your retention depends entirely on them choosing to return on their own.',
    'You have no visibility into your online reputation relative to nearby competitors, so you do not know where you stand or what to prioritize.',
  ],
  systemsHeadline: 'The automation stack built for retail and local commerce',
  serviceSlugs: [
    'reputation-management',
    'review-automation',
    'google-business-profile-optimization',
    'ai-review-responses',
    'local-seo-aeo',
    'crm-automation',
  ],
  subVerticalsHeadline: 'Retail and local commerce businesses we work with',
  featured: [
    { name: 'Specialty Retail & Boutiques', blurb: 'Review generation and customer follow-up automation for specialty retail and boutique shops.' },
    { name: 'Pet Stores', blurb: 'Review systems and local search optimization for pet retail businesses.' },
    { name: 'Health Food & Supplement Stores', blurb: 'Customer follow-up and reputation management for health food and supplement retailers.' },
    { name: 'Home Goods & Furniture Stores', blurb: 'Review generation and Google Business Profile optimization for home goods and furniture retailers.' },
    { name: 'E-Commerce Stores', blurb: 'Customer follow-up automation and review systems for local e-commerce businesses.' },
  ],
  compact: [
    { name: 'Apparel & Shoe Shops', blurb: 'Review generation and customer reactivation for apparel and footwear retailers.' },
    { name: 'Gift & Toy Stores', blurb: 'Review systems and local search optimization for gift and toy retailers.' },
    { name: 'Beauty Supply Stores', blurb: 'Customer follow-up and review automation for beauty supply retail.' },
    { name: 'Hardware Stores', blurb: 'Review generation and Google Business Profile management for hardware retailers.' },
    { name: 'Jewelry Stores', blurb: 'Review systems and reputation management for jewelry retail businesses.' },
    { name: 'Sporting Goods Stores', blurb: 'Customer follow-up and review generation for sporting goods retailers.' },
    { name: 'Electronics & Appliance Stores', blurb: 'Review automation and local search optimization for electronics and appliance retailers.' },
    { name: 'Mattress & Flooring Showrooms', blurb: 'Review systems and Google Business Profile optimization for showroom retailers.' },
    { name: 'Garden Centers & Outdoor Living', blurb: 'Review generation and customer follow-up for garden centers and outdoor living stores.' },
    { name: 'Thrift & Consignment Shops', blurb: 'Review systems and local visibility optimization for thrift and consignment retailers.' },
    { name: 'Grocery & Convenience Stores', blurb: 'Review generation and Google Business Profile management for local grocery and convenience stores.' },
  ],
  faqs: [
    {
      q: 'What types of retail businesses do you work with?',
      a: 'We work with local retail shops and storefronts of all types — specialty boutiques, pet stores, health food stores, home goods, and more. If your business depends on local foot traffic, repeat customers, and online reviews, the system applies.',
    },
    {
      q: 'How does review generation work for a retail store?',
      a: 'After a purchase or visit, an automated follow-up message asks the customer to leave a Google review. Timing and channel are configured around your customer flow. The system requests reviews from real customers — it does not fabricate them.',
    },
    {
      q: 'Can you help improve our Google Business Profile ranking?',
      a: 'Yes. Google Business Profile optimization is part of our local SEO and reputation management work. We audit your current profile, identify gaps, and make updates that improve your visibility in local search and Maps results.',
    },
    {
      q: 'How do you help bring past customers back?',
      a: 'Customer reactivation sequences send follow-up messages to past customers on a defined cadence — promoting new products, seasonal offers, or simply checking in. The specific messaging and timing are configured to fit your business and your customers.',
    },
    {
      q: 'Do you work with e-commerce stores or only physical retail?',
      a: 'Both. The review generation, reputation management, and customer follow-up systems apply to local e-commerce businesses as well as physical storefronts.',
    },
  ],
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
  },
}

export default function RetailLocalCommerceIndustryPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/industries/${DATA.slug}`,
            name: DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: 'Retail & Local Commerce', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
