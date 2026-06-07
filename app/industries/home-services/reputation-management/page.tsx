import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'home-services',
  serviceSlug: 'reputation-management',
  hubName:     'Home Services',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Home Service Businesses',
  metaDescription: 'Home service businesses win jobs on reviews. We build the system that earns reviews, responds to every one, and monitors your reputation automatically.',

  eyebrow: 'Home Services · Reputation Management',

  headline:
    'Home service businesses win jobs on reputation — most let theirs build by accident',

  subheadline:
    'Every completed job is a chance to earn a review and pull ahead in local search. Most home service businesses let those opportunities pass without a system in place to capture them.',

  heroHighlights: [
    'Automated review requests sent after every completed job',
    'Every review responded to — positive and negative',
    'Competitor benchmarking so you know exactly where you stand',
    'Monitoring across Google, Facebook, and industry directories',
  ],

  definitionHeadline:
    'What reputation management actually means for a home service business',

  definition:
    'Reputation management for a home service business means running a system that earns reviews consistently after every completed job, responds to every review on every platform, and monitors what customers are saying so nothing gets missed. It is not crisis response after a bad review lands — it is the ongoing operation that builds a review profile strong enough to compete in the local map pack and strong enough that one negative review does not define you.',

  problemHeadline:
    'Where home service businesses lose jobs they already earned',

  problems: [
    'You finished the job well but never asked for a review. The customer meant to leave one and forgot. That pattern repeats after every job and your review count stays flat while competitors keep pulling ahead.',
    'A negative review posted weeks ago is still sitting unanswered. Every prospective customer who searches your name sees it first and wonders if you care enough to respond.',
    'A competitor with comparable work quality has three times your review count. They rank higher in the local map pack and get the call first — not because they do better work, but because they have a system and you do not.',
    'You have no way to know what customers are saying on Facebook, Angi, or industry directories unless you manually check each one. Most of the time, you do not.',
  ],

  howItWorksHeadline: 'How the reputation system works for home services',

  steps: [
    {
      label: 'Audit your review position and benchmark against competitors',
      body:  'We pull your current review count, rating, recency, response rate, and platform coverage — then stack it against the businesses ranking above you in the local map pack. You see exactly where the gaps are before anything changes.',
    },
    {
      label: 'Build the review acquisition system',
      body:  'We configure automated review requests that go out at the right moment after a completed job — via SMS, timed so the request arrives while the customer experience is still fresh. The system runs after every job without anyone on your team doing anything manually.',
    },
    {
      label: 'Configure response workflows for every review',
      body:  'Positive reviews get a branded response. Negative reviews get a professional, prompt reply that demonstrates accountability. Response drafts are generated automatically and queued for review before anything posts — so nothing goes out wrong.',
    },
    {
      label: 'Monitor across every platform and report on progress',
      body:  'You get a single view of what customers are saying across Google, Facebook, and any industry directories relevant to your trade. New reviews surface immediately so nothing sits unanswered, and you see review velocity building over time.',
    },
  ],

  featuresHeadline: 'What the system covers',

  features: [
    'Automated review requests via SMS after every completed job',
    'Timing and message copy configured for your trade and customer base',
    'AI-assisted response drafts for every review — positive and negative',
    'Multi-platform monitoring: Google, Facebook, Angi, and industry directories',
    'Competitor benchmarking: volume, rating, recency, and response rate',
    'Review velocity tracking so you see momentum building over time',
    'Escalation alerts for negative reviews so nothing sits unanswered',
    'Monthly reputation summary so you always know where you stand',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'Why do reviews matter so much for home service businesses?',
      a: 'Home service buyers search locally, compare reviews before calling, and almost always choose from the top results in the local map pack. Review signals — volume, recency, rating, and response rate — are among the primary factors Google uses to rank businesses in those results. A home service business with a consistent review system ranks more competitively and gets called first, before a prospect ever visits a website.',
    },
    {
      q: 'How do you get customers to actually leave a review after a job?',
      a: 'Timing and friction are the two variables that determine whether a customer leaves a review. A request sent via SMS shortly after job completion — while the experience is still fresh — gets a significantly higher response rate than a request sent days later or via email. Removing friction means the customer taps a link and lands directly on your review page with no extra steps. We configure timing, channel, and message copy during setup based on how your customers actually communicate.',
    },
    {
      q: 'What happens when you get a negative review?',
      a: 'Negative reviews cannot be removed by a third party, and we do not promise otherwise. What we do is respond promptly and professionally — which signals to every prospective customer reading that review that you engage with feedback rather than ignore it. We also build a consistent volume of new reviews over time so that one negative review represents a smaller share of the overall picture.',
    },
    {
      q: 'Which review platforms matter most for home service businesses?',
      a: 'Google is the priority because your Google Business Profile rating and review count are visible directly in local search results and the map pack — the customer sees them before they ever click anything. Facebook and industry-specific directories like Angi are secondary. The exact platform mix is determined during the audit based on where your customers actually leave reviews and where your competitors are active.',
    },
    {
      q: 'How does reputation management connect to local search rankings?',
      a: 'Review signals — volume, recency, rating, and how consistently you respond — are a direct local ranking factor for Google. A home service business with a steady flow of recent reviews and an active response pattern ranks more competitively in the map pack than one with the same average rating but stale, infrequent activity. The reputation system and the local search system are not separate — they feed each other.',
    },
  ],

  ctaHeadline:     'See exactly where your review profile stands against your top competitors',
  ctaBody:         'We map your current review position against the businesses ranking above you in local search and show you the gaps before anything changes. No pressure. No invented promises. Just a clear picture of where you are and what it would take to move.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/home-services/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/home-services/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HomeServicesReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/home-services/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Home Services',         url: '/industries/home-services' },
            { name: 'Reputation Management', url: '/industries/home-services/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/home-services/reputation-management',
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
