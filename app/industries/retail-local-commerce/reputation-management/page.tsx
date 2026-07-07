import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'reputation-management',
  hubName:     'Retail & Local Commerce',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Local Retail Stores',
  metaDescription: 'Shoppers pick the store with more reviews before they walk in. We earn them after every purchase, respond to every one, and keep you ranking.',

  eyebrow: 'Retail & Local Commerce · Reputation Management',

  headline:
    'Shoppers decide which store to walk into before they ever leave home — most retailers are invisible when that decision gets made',

  subheadline:
    'A shopper searches "gift shops near me" or "hardware store near me" and three results appear. They scan the ratings, read recent reviews, check the response rate, and pick a store — all before stepping outside. The stores with a strong review profile get the foot traffic. The ones without a system get passed over for a competitor that showed up better on a five-inch screen.',

  heroHighlights: [
    'Automated review requests sent 24–72 hours after every purchase — in-store or online',
    'Every review responded to across Google, Yelp, and Facebook',
    'Competitor review benchmarking so you can see exactly where you stand against nearby stores',
    'Monitoring across every platform so nothing sits unanswered',
  ],

  definitionHeadline:
    'What reputation management actually means for a local retail store',

  definition:
    'Reputation management for a local retail store means running a system that earns reviews consistently after every transaction, responds to every review across every platform, and monitors what shoppers are saying so nothing gets missed. It is not damage control after a one-star review shows up on Yelp — it is the ongoing operation that builds a review profile strong enough to rank in the local pack, strong enough to convert a shopper who is comparing three stores on Google Maps, and strong enough to be cited by AI tools like ChatGPT and Perplexity when someone asks which local store to visit.',

  problemHeadline:
    'Where local retail stores lose foot traffic they already earned',

  problems: [
    'The customer left happy, made their purchase, and no review request ever went out. They meant to post something and moved on. That pattern repeats after every transaction — and your review count stays flat while the shop down the street keeps accumulating ratings and climbing the local pack.',
    'A negative review about a misunderstanding has been sitting unanswered for three weeks. Every shopper who searches your store name reads it first and wonders if the issue was ever resolved — because no one replied.',
    'A competitor two blocks away has four times your review volume and a higher position in Google Maps. Their reviews are more recent. Their profile looks more active. Shoppers who cannot distinguish between your product quality and theirs pick based on the trust signals they can see — and right now, that store is winning.',
    'You have no visibility into what customers are writing on Yelp, Facebook, or vertical directories you do not check. A complaint or a wave of positive feedback is building somewhere in your review ecosystem and you have no idea it exists.',
  ],

  steps: [
    {
      label: 'Audit your current review position and competitors',
      body: 'We review your current rating, review volume, response rate, recency, and platform coverage — then benchmark those numbers against the stores appearing in the local pack above you. Most retail shops are behind on at least two dimensions. You see exactly where the gaps are before we change anything.',
    },
    {
      label: 'Build the automated review acquisition system',
      body: 'We configure review requests that go out automatically 24 to 72 hours after every purchase — via SMS or email, to the right platform, timed so the request reaches the customer while the experience is still fresh. The system runs after every transaction without anyone on your team doing anything manually.',
    },
    {
      label: 'Respond to every review and keep the profile active',
      body: 'Every review gets a response — positive, negative, or neutral — across Google, Yelp, and Facebook. Responses go out on a cadence that signals to Google that your profile is active, which reinforces local search ranking signals alongside the review volume you are building.',
    },
  ],

  features: [
    'Automated post-purchase review request via SMS or email',
    'Review monitoring across Google, Yelp, Facebook, and relevant directories',
    'Responses to every review — in your store voice, not a generic template',
    'Competitor review benchmarking against stores ranking above you in local search',
    'Review recency tracking so your profile never goes stale',
    'Escalation alerts for negative reviews that need immediate attention',
    'Google Business Profile activity signals maintained alongside review growth',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'competitor-review-benchmarking',
  ],

  faqs: [
    {
      q: 'What does reputation management mean for a local retail store?',
      a: 'Reputation management for a local retail store means running a system that consistently earns reviews after every purchase, responds to every review across every platform, and monitors your review profile so nothing goes unanswered. It is not crisis management — it is the ongoing operation that keeps your store visible in local search and competitive on Google Maps.',
    },
    {
      q: 'Do Google reviews affect where my retail store ranks in local search?',
      a: 'Yes. Google uses review volume, rating, recency, and response rate as signals in the local pack algorithm. A retail store with consistent, recent reviews and active responses ranks higher than a store with the same rating but fewer or older reviews. Volume signals that your business is active and trusted — and that signal is what gets you into the top three results where most clicks go.',
    },
    {
      q: 'When is the best time to ask a retail customer for a Google review?',
      a: 'For in-store purchases, the best window is 24 to 72 hours after the transaction — enough time for the customer to use what they bought, but close enough that the experience is still fresh. For local e-commerce or delivery orders, the request goes out after confirmed delivery. Automated systems handle the timing without anyone on your team having to remember to send anything.',
    },
    {
      q: 'What platforms should a local retail store monitor for reviews?',
      a: 'Google Business Profile is the highest-priority platform for local retail because it drives local pack ranking and Maps visibility. Beyond Google, Yelp and Facebook are the next most important for most retail categories. Depending on your store type, vertical directories may also be worth monitoring. A complete system covers all of them and alerts you when new reviews land.',
    },
    {
      q: 'How does reputation management connect to foot traffic for a retail store?',
      a: 'Most shoppers who search for a store nearby make their decision and visit within the same day. The stores that appear in the local pack with strong review profiles get the visit. The stores that do not appear — or that appear with weak or stale review signals — lose that foot traffic to a competitor who shows up better on the results screen. A reputation system that keeps review volume growing and the profile active is one of the most direct drivers of walk-in customers for local retail.',
    },
  ],

  ctaHeadline: 'See exactly where your review profile stands against the stores ranking above you',

  ctaBody:
    'We map your current review position against the businesses appearing in the local pack above you and show you the gaps before anything changes. No pressure. No invented promises. Just a clear picture of where your store stands and what it would take to move up.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'Reputation Management',   url: '/industries/retail-local-commerce/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/reputation-management',
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
