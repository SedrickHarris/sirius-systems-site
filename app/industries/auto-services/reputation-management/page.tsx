import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'reputation-management',
  hubName:     'Auto Services',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Auto Repair Shops',
  metaDescription: 'Auto shops win or lose on trust signals before a driver walks in. We earn reviews after every job, respond to every one, and keep you ahead of competitors.',

  eyebrow: 'Auto Services · Reputation Management',

  headline:
    'Drivers choose the shop with more reviews — not necessarily the shop that does better work',

  subheadline:
    'Most customers cannot judge repair quality before they walk in. They judge trust signals instead — your review count, your rating, your response rate, and how recently someone left feedback. The shop that looks most trustworthy online gets the bay.',

  heroHighlights: [
    'Automated review requests sent right after every job closes',
    'Every review responded to — positive and negative, on every platform',
    'Competitor benchmarking so you know exactly where you stand against nearby shops',
    'Monitoring across Google, Yelp, Facebook, and RepairPal',
  ],

  definitionHeadline:
    'What reputation management actually means for an auto service business',

  definition:
    'Reputation management for an auto repair shop means running a system that earns reviews consistently after every completed job, responds to every review on every platform, and monitors what drivers are saying so nothing gets missed. It is not damage control after a bad review lands — it is the ongoing operation that builds a review profile strong enough to convert a skeptical driver during their search, and strong enough to be cited by AI engines like ChatGPT and Perplexity when someone asks which shop to trust near them.',

  problemHeadline:
    'Where auto shops lose customers they already served well',

  problems: [
    'The job was done right, the driver left satisfied, and no review request went out. They meant to leave one and forgot. That pattern repeats after every RO and your review count stays flat while the shop down the street keeps pulling ahead.',
    'A negative review about a misunderstanding has been sitting unanswered for three weeks. Every driver who searches your shop name reads it first and wonders if it was ever resolved — because no one replied.',
    'The dealership down the road has four times your review volume and a dedicated marketing team managing their profile. Independent shops that build a stronger review profile than the dealer are the ones that win the walk-in — reviews are the most effective equalizer.',
    'You have no visibility into what drivers are saying on Yelp, RepairPal, or Facebook unless you manually check each one. Most of the time, you do not — and a negative review on a platform you are not watching goes unanswered.',
  ],

  steps: [
    {
      label: 'Audit your current reputation and benchmark against nearby shops',
      body: 'We review your current rating, review volume, response rate, recency, and platform coverage — then benchmark those numbers against the shops and dealers ranking above you in the local map pack. Most independent shops are behind on at least two dimensions. You see exactly where the gaps are before anything changes.',
    },
    {
      label: 'Build the review acquisition system',
      body: 'We configure automated review requests that fire right after every job closes — via SMS, timed so the request arrives while the driver is still thinking about the experience. The best moment is within 24 hours of vehicle pickup. The system runs after every RO without anyone on your team remembering to ask.',
    },
    {
      label: 'Configure response workflows',
      body: 'Every review gets a response — positive reviews acknowledged, negative reviews addressed professionally and on the record. Thoughtful responses to negative reviews build more trust with future customers than a generic five-star rating, because they demonstrate how the shop handles problems.',
    },
    {
      label: 'Monitor and report across every platform',
      body: 'The system monitors your review profile across Google, Yelp, Facebook, and RepairPal. You receive a regular report showing your rating trajectory, review volume growth, response rate, and how your shop compares to local competitors and nearby dealers.',
    },
  ],

  features: [
    'Automated review requests triggered by RO close — no manual step required',
    'Multi-platform monitoring across Google, Yelp, Facebook, and RepairPal',
    'Professionally drafted review responses in your shop\'s voice',
    'Competitor and dealer benchmarking updated on a regular cadence',
    'Negative review handling that demonstrates transparency and professionalism',
    'Review volume and rating trajectory reporting',
    'SMS-first request sequencing — highest open rate for auto service customers',
    'Connects to your shop management system to trigger at RO close',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'Why does reputation management matter more for auto repair shops than most businesses?',
      a: 'Auto repair operates under a persistent trust deficit — most drivers cannot evaluate repair quality before they walk in, so they rely on reviews as a proxy for trustworthiness. A shop with a consistent stream of recent reviews and professional responses to every complaint signals transparency and accountability before a driver ever calls. That trust signal is what converts a search into a booked appointment, especially when competing against dealers and chains that already have brand recognition.',
    },
    {
      q: 'What review platforms should auto repair shops focus on?',
      a: 'Google Business Profile is the primary platform because it drives map pack placement and local search visibility. Yelp carries significant weight in auto services — more than in most other industries — because drivers actively use it to research mechanics. Facebook, RepairPal, and CarGurus are secondary platforms worth monitoring depending on your market. The system prioritizes Google first, then routes a portion of requests to Yelp and other platforms to build a well-rounded presence.',
    },
    {
      q: 'How do I compete against dealerships and chains that have more reviews?',
      a: 'Reviews are the most effective equalizer for independent shops competing against dealers. A shop with more recent reviews, a higher response rate, and professional handling of negative feedback outperforms a branded dealership with a stale or unmanaged profile in local search. The system builds review volume consistently after every job — so the gap narrows with every closed RO rather than widening.',
    },
    {
      q: 'When is the best time to ask a customer for a review?',
      a: 'Within 24 hours of vehicle pickup — while the experience is fresh and the car is running well. The system sends an SMS request automatically when the repair order closes, which means the timing is consistent after every job without your team remembering to ask. For larger jobs, a brief follow-up the day after pickup serves both as a customer service check and a natural opening for the review request.',
    },
    {
      q: 'How does a stronger review profile connect to local search rankings for auto shops?',
      a: 'Google uses review volume, rating, recency, and response rate as local search ranking signals — and in 2026, AI answer engines like ChatGPT and Perplexity use the same signals to decide which shops to recommend when someone asks for the best mechanic near them. An auto shop with consistent recent reviews and active responses ranks higher in the map pack and gets cited in AI-generated answers — which means more drivers find your shop before they find a competitor.',
    },
  ],

  ctaHeadline: 'The shop with more reviews gets the bay.',

  ctaBody:
    'Drivers make their decision before they call. What your review profile looks like at that moment determines whether they choose your shop or the one down the street. Book a discovery call and we will show you where you stand versus the shops and dealers ranking above you — and what it takes to close the gap.',

  ctaPrimaryLabel: 'Book a discovery call',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Auto Services',         url: '/industries/auto-services' },
            { name: 'Reputation Management', url: '/industries/auto-services/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/reputation-management',
            name:        'Reputation Management for Auto Repair Shops',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
