import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'review-automation',
  metaTitle: 'Review Automation for Service Businesses | Sirius Systems',
  metaDescription:
    'Review automation that asks the right customer at the right time on the right channel: without spamming or sounding scripted. Built for local service businesses.',
  eyebrow: 'Review Automation',
  headline: 'You are completing jobs that never turn into reviews. That is a system problem.',
  subheadline:
    'Review automation sends the ask at the right moment, on the right channel, every time a job closes. Review volume grows with your job volume.',
  glyphVariant: 'arc' as const,
  definition:
    'Review automation for service businesses means triggering review requests automatically after a completed job: via SMS or email: so that asking for reviews happens consistently every time, not only when someone remembers.',
  problems: [
    'You finish a job, the customer is happy, and no one asks for a review before the moment passes.',
    "Manual review requests are inconsistent: some customers get asked, most don't.",
    'Your review count grows slowly while competitors with the same quality of work have far more.',
    "Generic review request templates get ignored because they don't sound like your business.",
  ],
  steps: [
    {
      label: 'Identify the trigger point',
      body: 'We configure the review request to fire at the right moment: typically when a job is marked complete in your CRM or booking system. Timing is the single biggest factor in whether a request gets a response.',
    },
    {
      label: 'Write the request in your voice',
      body: 'We write the SMS and email request templates to match your tone: direct, warm, or professional depending on your brand. A message that sounds like it came from a real person gets far more responses than a generic platform template.',
    },
    {
      label: 'Route to the right platform',
      body: 'We configure requests to direct customers to the platform that matters most for your business: Google in most cases, with Facebook or industry directories as secondary options. One clear link, one clear ask.',
    },
    {
      label: 'Connect to your follow-up flow',
      body: "If a customer doesn't respond to the first request, a single follow-up fires after a set interval. We configure the cadence so it's persistent enough to work without feeling like spam.",
    },
  ],
  features: [
    'Automated trigger: request fires when a job is marked complete, not when someone remembers',
    'SMS and email delivery: sends on the channel the customer is most likely to use',
    'Custom message templates: written in your voice, not a generic platform default',
    'Platform routing: directs customers to Google, Facebook, or your priority platform',
    'Single follow-up sequence: one reminder after non-response, then stops',
    'CRM integration: trigger connects to your existing job management or CRM tool',
    "Opt-out handling: customers who don't want requests are removed automatically",
    'Volume reporting: track request send rate, open rate, and review conversion over time',
  ],
  outcomes: [
    'Every completed job produces a review request: not just the ones where someone remembered to ask.',
    'Review volume grows at a consistent rate instead of in random bursts.',
    'More of your happy customers leave reviews because the ask comes at the right moment.',
    'Your review count reflects your actual job volume rather than a fraction of it.',
    'Your team spends zero time manually sending review requests.',
  ],
  relatedSlugs: [
    'reputation-management',
    'ai-review-responses',
    'crm-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services'],
  faqs: [
    {
      q: 'What is review automation for a service business?',
      a: 'It means triggering review requests automatically after a completed job: via SMS or email: so that asking for reviews happens every time, not only when someone on your team remembers to do it manually.',
    },
    {
      q: 'Will it look spammy to customers?',
      a: "Only if the message is generic and the timing is wrong. We write request templates in your voice and configure them to fire at the moment a customer's experience is freshest: right after job completion. A well-timed, natural-sounding message from a business they just hired doesn't feel like spam.",
    },
    {
      q: 'What if a customer had a bad experience?',
      a: 'We can configure a satisfaction check before the review request fires: if the customer signals dissatisfaction, the request is withheld and a service recovery sequence starts instead. This protects your rating while giving you a chance to resolve the issue.',
    },
    {
      q: 'Which platform does the review request go to?',
      a: 'Google is the default for most local service businesses because of its direct impact on local search visibility. We can configure requests to route to Facebook or industry-specific platforms as secondary options, or run separate sequences for each.',
    },
    {
      q: 'How does this connect to my CRM or job management tool?',
      a: 'The review request trigger connects to the job completion event in your CRM or scheduling tool. When a job is marked done, the sequence starts. We configure the integration during setup: no manual step required from your team.',
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

export default function ReviewAutomationPage() {
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
            { name: 'Review Automation', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Review Automation',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
