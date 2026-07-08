import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'review-automation',
  hubName:     'Retail & Local Commerce',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for Local Retail Stores',
  metaDescription: 'Shoppers pick the store with more reviews before they walk in the door. We build the system that earns them after every purchase — automatically.',

  eyebrow: 'Retail & Local Commerce · Review Automation',

  headline:
    'Shoppers decide which store to walk into before they leave home — your review count is what tips that decision',

  subheadline:
    'A shopper searches "gift shops near me" and three results appear in the local pack. They scan the star ratings, check the most recent reviews, and decide — before getting in the car. The stores in those top three spots earn the visit. The ones further down the list do not. Review automation is how your store stays in those top three positions: a system that earns new reviews from every satisfied customer, responds to every one that comes in, and keeps your profile active enough to rank.',

  heroHighlights: [
    'Automated review requests sent 24–48 hours after every purchase — in-store and online',
    'POS and CRM-connected triggers so requests fire from the systems you already use',
    'Every review responded to across Google, Yelp, and Facebook — nothing sits unanswered',
    'Competitor review benchmarking so you can see exactly where you stand against nearby stores',
  ],

  definitionHeadline:
    'What review automation means for a local retail store or storefront',

  definition:
    'Review automation for a local retail store means connecting your point-of-sale or CRM to a system that sends a personalized review request to every customer within the optimal window after purchase — typically 24 to 48 hours — without a staff member initiating it manually. The system follows up with customers who do not respond to the first message, routes the request to the right platform, and monitors incoming reviews across Google, Yelp, and Facebook so your team can respond before anything sits unanswered.',

  problemHeadline:
    'Where local retail stores lose the reviews their customers meant to leave',

  problems: [
    'A customer walks out happy, tells the person at the register it was a great experience, and never leaves a review. Not because they did not mean to — but because no one sent a reminder at the right moment and the intention faded within hours. That pattern repeats after every transaction, and your review count stays flat while the store down the street keeps climbing the local pack.',
    'A staff member at the register asks a customer to leave a Google review. The customer nods, forgets by the time they reach their car, and the moment is gone. The request depends on staff memory and the right moment of rapport — neither of which is consistent across every shift and every transaction.',
    'A negative review lands on Google and sits unanswered for two weeks. Every shopper who searches your store and reads that review sees no response — and interprets the silence as confirmation. An unanswered negative review costs you foot traffic every day it sits there.',
    'Your store served two hundred customers this week. Three of them left reviews. The remaining one hundred and ninety-seven had positive experiences and no system ever reached them at the moment when they were most likely to share it. That is the gap review automation closes.',
  ],

  howItWorksHeadline: 'How review automation works for a retail store or local storefront',

  steps: [
    {
      label: 'Connect to your point of sale or CRM',
      body: 'The system connects to the tool your store already uses to process transactions — whether that is a POS system, an e-commerce platform, or a CRM. When a sale completes, the customer contact is captured and the review request workflow begins automatically. No staff action required after setup.',
    },
    {
      label: 'Request fires at the right moment',
      body: 'Twenty-four to forty-eight hours after purchase, a personalized review request goes to the customer via SMS or email — whichever channel they opted into. The message references their recent visit and includes a direct link to your Google review page. No hunting around, no extra steps for the customer.',
    },
    {
      label: 'Follow-up for non-responders',
      body: 'If the customer does not respond to the first message, a single follow-up fires after a configured interval. The sequence stops after the follow-up — persistent enough to recover customers who missed the first message, without crossing into repeated outreach that feels unwelcome.',
    },
    {
      label: 'Every review monitored and responded to',
      body: 'New reviews across Google, Yelp, and Facebook trigger a notification so your team can respond before anything sits unanswered. Every review — positive or negative — receives a response. Consistent engagement signals to Google that your business is active and to prospective shoppers that someone is paying attention.',
    },
  ],

  featuresHeadline: 'What the review automation system covers for retail',

  features: [
    'POS and CRM-triggered review requests — fires automatically when a transaction completes',
    'Configurable send timing — 24 to 48 hours post-purchase for optimal response rates',
    'SMS and email request delivery — SMS for in-store customers, email for online orders',
    'Single follow-up for non-responders — configured to stop after one touch',
    'Multi-platform monitoring across Google, Yelp, and Facebook',
    'Response coverage — every review on every platform acknowledged and addressed',
    'Competitor review benchmarking — see how your review profile compares to nearby stores',
    'Direct review link in every message — removes friction between request and submission',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'google-business-profile-optimization',
    'competitor-review-benchmarking',
  ],

  faqs: [
    {
      q: 'Do local retail stores actually need review automation?',
      a: 'Yes. Shoppers check Google reviews before choosing which store to visit — most local search decisions are made before the customer leaves their house. The stores in the top three local pack positions earn the foot traffic; the ones further down do not. Review automation is the system that keeps your store ranking by generating new reviews consistently after every purchase, without relying on staff to ask or customers to remember.',
    },
    {
      q: 'How does review automation work for a retail store after a purchase?',
      a: 'The system connects to your point-of-sale or CRM and fires a review request automatically when a transaction completes. Twenty-four to forty-eight hours after the purchase, the customer receives a personalized SMS or email with a direct link to your Google review page. If they do not respond, a single follow-up goes out after a configured interval. The entire sequence runs without any staff involvement after initial setup.',
    },
    {
      q: 'What is the best time to send a review request to a retail customer?',
      a: 'The optimal window for retail is 24 to 48 hours after purchase — enough time for the customer to have reflected on their experience, but close enough that the visit is still fresh. Requests sent within that window convert at significantly higher rates than those sent days later. After 72 hours, response rates drop sharply as the experience fades and the motivation to write a review fades with it.',
    },
    {
      q: 'Can review automation connect to our existing POS system?',
      a: 'We evaluate your existing setup during onboarding and recommend the best connection path — whether that is a direct integration with your POS or e-commerce platform or a connection through an automation layer. We confirm compatibility before any build begins and configure the trigger to match how your store actually processes transactions.',
    },
    {
      q: 'What happens to negative reviews — can the system handle those?',
      a: 'The system monitors every incoming review across Google, Yelp, and Facebook and alerts your team when a new review lands so nothing sits unanswered. Negative reviews are flagged for a timely response. An unanswered negative review costs you prospective customers every day it appears without a reply — consistent response coverage is part of what the system provides.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'Review Automation',       url: '/industries/retail-local-commerce/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/review-automation',
            name:        'Review Automation for Local Retail Stores',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
