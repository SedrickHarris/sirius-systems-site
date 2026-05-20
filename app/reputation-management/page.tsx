import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'reputation-management',
  metaTitle: 'Reputation Management for Service Businesses — Sirius Systems',
  metaDescription:
    'Reputation management that earns more reviews, handles the hard ones, and keeps your local search visibility strong. Built for local service businesses by Sirius Systems.',
  eyebrow: 'Reputation Management',
  headline: 'Your reputation is your pipeline. Treat it like one.',
  subheadline:
    'For local service businesses, reviews are the first thing a potential customer checks and the last thing most businesses manage consistently. We build the system that keeps your reputation working for you.',
  glyphVariant: 'beacon' as const,
  definition:
    'Reputation management for local service businesses means systematically earning new reviews, responding to existing ones, monitoring what is being said across platforms, and using that signal to strengthen local search visibility.',
  problems: [
    "You do great work but your review count doesn't reflect it — asking for reviews never happens consistently.",
    'A negative review sits unanswered and is the first thing new customers see.',
    'Your competitors have more reviews and better ratings even though your work is comparable.',
    "You have no visibility into what customers are saying on platforms you don't check regularly.",
  ],
  steps: [
    {
      label: 'Audit your current reputation',
      body: 'We review your current ratings, review volume, response rate, and platform coverage — Google, Facebook, and any industry-specific directories relevant to your vertical. You get a clear picture of where you stand and where the gaps are.',
    },
    {
      label: 'Build the review acquisition system',
      body: 'We set up automated review requests that go out at the right moment after a completed job — via SMS or email, to the right platform, in a way that feels natural rather than spammy. Consistent timing is the difference between occasional reviews and a steady stream.',
    },
    {
      label: 'Configure response workflows',
      body: 'Every review — positive or negative — gets a response. We set up AI-assisted response drafts in your voice so that no review sits unanswered, and hard reviews get handled with the right tone rather than ignored or escalated.',
    },
    {
      label: 'Monitor and maintain',
      body: 'We configure monitoring across your review platforms so new reviews surface immediately. You stay informed without checking manually, and the system keeps running without ongoing intervention.',
    },
  ],
  features: [
    'Review acquisition automation — requests go out after every completed job',
    'Multi-platform coverage — Google, Facebook, and vertical-specific directories',
    'AI-assisted review responses — on-brand replies drafted for every review',
    'Negative review handling — response workflows for hard reviews that protect your rating',
    'Review monitoring — new reviews surface in real time across all platforms',
    'Competitor benchmarking — see how your review volume and rating compare locally',
    'GBP alignment — review activity connected to your Google Business Profile signals',
    'Reporting — review volume, rating trend, response rate over time',
  ],
  outcomes: [
    'Review volume grows consistently because requests go out after every job, not occasionally.',
    'No review sits unanswered — positive ones get acknowledged, hard ones get handled.',
    'Your star rating reflects your actual work quality rather than a random sample.',
    'Local search visibility strengthens because review signals are a primary ranking factor.',
    'You know what customers are saying across platforms without manually checking each one.',
  ],
  relatedSlugs: [
    'review-automation',
    'ai-review-responses',
    'competitor-review-benchmarking',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'contractors'],
  faqs: [
    {
      q: 'What is reputation management for a local service business?',
      a: 'It means systematically earning new reviews, responding to existing ones, and monitoring what is being said across platforms — so your online reputation reflects your actual work quality and supports your local search visibility.',
    },
    {
      q: 'Can you remove negative reviews?',
      a: "We cannot remove reviews from platforms we don't control, and we don't promise otherwise. What we do is respond to negative reviews professionally and promptly, which signals to potential customers that you take feedback seriously — and dilute the impact of a bad review with a consistent volume of positive ones.",
    },
    {
      q: 'How do you ask for reviews without it feeling pushy?',
      a: "Timing and channel matter. A review request sent immediately after a completed job — when the customer's experience is fresh and positive — feels natural, not pushy. We configure the timing, message, and platform to match how your customers prefer to communicate.",
    },
    {
      q: 'Which review platforms do you cover?',
      a: 'Google is the priority for most local service businesses because of its direct impact on local search. We also cover Facebook and any vertical-specific platforms relevant to your industry. The mix depends on where your customers actually leave reviews.',
    },
    {
      q: 'How does reputation management affect local search rankings?',
      a: 'Review signals — volume, recency, rating, and response rate — are a significant factor in local search rankings. A business with consistent recent reviews and active responses ranks more competitively than one with the same rating but stale, infrequent review activity.',
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

export default function ReputationManagementPage() {
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
            { name: 'Reputation Management', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Reputation Management',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
