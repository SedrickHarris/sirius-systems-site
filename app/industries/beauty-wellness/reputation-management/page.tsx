import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'beauty-wellness',
  serviceSlug: 'reputation-management',
  hubName:     'Beauty & Wellness',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Beauty & Wellness Businesses',
  metaDescription: 'Salons and spas compete on reviews. We build the system that earns them after every service, responds to every one, and tracks competitors automatically.',

  eyebrow: 'Beauty & Wellness · Reputation Management',

  headline:
    'Beauty and wellness businesses compete on reviews — most let their profile build by accident',

  subheadline:
    'Every completed service is a moment to earn a review and pull ahead in local search. Most salons, spas, and studios let those moments pass without a system in place to capture them. We build that system — so your review profile grows consistently, your competitors stay visible to you, and nothing goes unanswered.',

  heroHighlights: [
    'Automated review requests sent after every completed appointment',
    'Every review responded to — positive, negative, and everything between',
    'Competitor review benchmarking so you always know where you stand',
    'Monitoring across Google, Yelp, Facebook, and beauty-specific directories',
  ],

  definitionHeadline:
    'What reputation management actually means for a beauty or wellness business',

  definition:
    'Reputation management for a beauty and wellness business is the ongoing system that earns reviews consistently after every completed service, responds to every review on every platform, and tracks what potential clients are reading before they decide whether to book you or the business next door. It is not crisis response after a bad review lands — it is the daily operation that builds a review profile strong enough to rank in the local map pack and resilient enough that one unhappy client cannot undo it.',

  problemHeadline:
    'Where beauty and wellness businesses lose clients they already earned',

  problems: [
    'You finished the service well and the client left happy — but no one asked for a review. They meant to post one and forgot. That pattern repeats after every appointment and your review count stays flat while competitors with automated request systems keep pulling ahead in local search.',
    'A negative review posted last month is still sitting unanswered. Every prospective client who searches your name sees it first and wonders whether you care. Silence reads as indifference — and it costs you bookings every day it sits there.',
    'A competitor with comparable work and similar pricing has twice your review count. They show up first when someone searches "best salon near me." They get the call, the booking, and the new client — not because they do better work, but because they built a review system and you have not.',
    'You have no visibility into what clients are saying on Yelp, StyleSeat, or Facebook unless you manually check each platform. By the time a problem surfaces, it has already shaped the decision of every prospective client who searched for you in the meantime.',
  ],

  howItWorksHeadline: 'How the reputation system runs for your beauty or wellness business',

  steps: [
    {
      label: 'Review requests go out automatically after every service',
      body:  'When an appointment is marked complete, the system sends a review request to that client at the interval most likely to generate a response — without any action from you or your staff. Every completed service becomes an active opportunity to build your profile.',
    },
    {
      label: 'Every review on every platform receives a response',
      body:  'Positive, negative, or neutral — every review gets a professional, on-brand reply. Consistent response signals to Google and to prospective clients that your business is active, accountable, and worth booking. Unanswered reviews stop costing you.',
    },
    {
      label: 'You see your standing against competitors at all times',
      body:  'The system tracks your review profile against the businesses competing for the same local searches — volume, rating, and velocity. You always know where you stand, what the gap is, and what it would take to move up.',
    },
  ],

  featuresHeadline: 'What the reputation system covers for beauty and wellness businesses',

  features: [
    'Automated post-appointment review request sequences via text and email',
    'Response management across Google, Yelp, Facebook, and StyleSeat',
    'Negative review monitoring with early-alert flagging',
    'Competitor review benchmarking — volume, velocity, and average rating',
    'Review funnel that routes feedback before it reaches public platforms',
    'Real-time reputation reporting dashboard',
    'Lapsed-client reactivation flows that re-earn reviews from past regulars',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'competitor-review-benchmarking',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What types of beauty and wellness businesses does reputation management work for?',
      a: 'The system is built for any appointment-based beauty or wellness business — hair salons, barbershops, med spas, day spas, nail salons, lash and brow studios, massage clinics, personal training studios, and yoga and Pilates studios. If your revenue depends on repeat clients and local search visibility, your review profile is a direct revenue lever.',
    },
    {
      q: 'Why do beauty and wellness businesses need a system instead of just asking clients in person?',
      a: 'Asking in person works occasionally but it is inconsistent. Clients agree at checkout and forget by the time they get home. A system that sends an automated request at the right moment after the appointment captures far more of those intentions. It also runs without your involvement — which matters when you are in back-to-back services and cannot follow up manually.',
    },
    {
      q: 'Do Google reviews actually affect whether my salon shows up in local search results?',
      a: 'Yes. Review count, recency, and average rating are all factors in local map pack rankings. Google surfaces businesses that look active and trusted. A salon with a consistent stream of recent reviews signals to the algorithm and to the searcher that it is the right choice. Businesses with stale or thin profiles lose ground over time to competitors who keep earning new ones.',
    },
    {
      q: 'What happens when a client leaves a negative review?',
      a: 'The system monitors for new reviews across all platforms and flags negatives immediately. Every review receives a professional, on-brand response — negative replies are handled to acknowledge the concern, demonstrate accountability, and show future clients how your business handles problems. An unanswered negative review is the most costly outcome. A thoughtful response turns a liability into a visible trust signal.',
    },
    {
      q: "Can the system show me what my competitors' review profiles look like?",
      a: 'Yes. The competitor benchmarking component tracks the review volume, average rating, and review velocity of the businesses competing for the same local searches you are. You can see exactly where your profile stands relative to the businesses ranking above you and identify the specific gaps costing you visibility and new bookings.',
    },
  ],

  ctaHeadline:     'See exactly where your review profile stands against the businesses outranking you',
  ctaBody:         'We map your current review position against your top local competitors and show you the gaps before anything changes. No pressure. No invented promises. Just a clear picture of where you are and what it would take to move.',
  ctaPrimaryLabel: 'Book the Free Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/beauty-wellness/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/beauty-wellness/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function BeautyWellnessReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/beauty-wellness/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Beauty & Wellness',     url: '/industries/beauty-wellness' },
            { name: 'Reputation Management', url: '/industries/beauty-wellness/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/beauty-wellness/reputation-management',
            name:        'Reputation Management',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
