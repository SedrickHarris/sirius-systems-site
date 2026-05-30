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
  headline: 'Automation for retail shops that depend on reviews and repeat customers.',
  subheadline:
    'A customer walks out happy and never reviews you. A past customer forgets you exist. Your Google Business Profile sits half-complete while the shop down the street ranks above you. None of that is a marketing problem — it is a systems problem. We fix the system.',
  heroHighlights: [
    'Review generation after every purchase to build your Google reputation',
    'Customer follow-up automation for repeat business and reactivation',
    'Local search and Google Business Profile optimization for foot traffic',
    'AI-generated review responses to keep your profile active and engaged',
  ],
  problemHeadline: 'Where local retail shops lose the customers they already earned.',
  problems: [
    'Customers leave satisfied and never leave a review — not because they don\'t want to, but because no one asked them at the right moment. Your competitor with 200 reviews asked. You didn\'t.',
    'Your Google Business Profile is missing photos, categories, or hours. Every gap is a reason Google ranks you lower than a less-established shop nearby.',
    'You have no automated way to bring past customers back. Seasonal promotions, new arrivals, and reactivation campaigns require manual effort you don\'t have time for.',
    'You have no visibility into how your reviews and local search ranking compare to the three or four shops competing for the same customers — so you\'re optimizing blind.',
  ],
  systemsHeadline: 'The system retail shops use to earn reviews and bring customers back.',
  systemsCopy:
    'Most retail shops lose the compounding value of every satisfied customer — the review they didn\'t leave, the return visit that didn\'t happen, the GBP search that sent them to a competitor. We wire the follow-up, the review ask, and the local search signals into one system so that each customer interaction has a longer tail.',
  serviceSlugs: [
    'reputation-management',
    'review-automation',
    'google-business-profile-optimization',
    'ai-review-responses',
    'local-seo-aeo',
    'crm-automation',
  ],
  subVerticalsHeadline: 'Retail and local commerce businesses we work with.',
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
      a: 'We work with local retail shops and storefronts — specialty boutiques, pet stores, health food and supplement stores, home goods, gift shops, hardware stores, and more. If your business depends on local foot traffic, repeat customers, and Google reviews, the system applies. We also work with local e-commerce businesses that serve a defined geographic area.',
    },
    {
      q: 'How does review generation work for a retail store?',
      a: 'After a purchase or visit, an automated follow-up message asks the customer to leave a Google review. The timing and channel — SMS, email, or both — are configured around your customer flow and purchase type. The system only requests reviews from real customers who completed a transaction. It does not fabricate reviews or solicit them from people who haven\'t visited.',
    },
    {
      q: 'Can you help improve our Google Business Profile ranking in Maps?',
      a: 'Yes. GBP optimization is part of the local SEO and reputation work we do for retail businesses. We audit your current profile — categories, services, photos, Q&A, hours, attributes — identify the gaps that are suppressing your Maps ranking, and make the updates that improve your visibility. Review velocity and response rate are also ranking factors, which is why the review automation and GBP work run together.',
    },
    {
      q: 'How do you bring past customers back?',
      a: 'Customer reactivation sequences send follow-up messages to past customers on a defined cadence — promoting new arrivals, seasonal offers, or a simple check-in. The timing and messaging are configured to your business and customer type. This is how retail shops maintain a relationship with their customer base between visits without requiring manual outreach every time.',
    },
    {
      q: 'Do you work with e-commerce stores or only physical retail?',
      a: 'Both. Review generation, reputation management, customer follow-up, and local search optimization all apply to local e-commerce businesses as well as physical storefronts. The difference is that physical retail also benefits from GBP and Maps optimization — which drives foot traffic directly.',
    },
  ],
  ctaHeadline: 'Book a 20-minute revenue leak audit.',
  ctaBody:
    'We\'ll map where reviews, repeat customers, and local search visibility are leaking in your retail business — and show you the order of operations. Walk away with the plan whether or not we work together.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: ['/og/default.webp'],
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
