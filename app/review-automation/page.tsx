import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'review-automation',
  metaTitle: 'Review Automation for Service Businesses | Sirius Systems',
  metaDescription:
    'Automated review requests sent at the right moment after every job — so your Google review count grows consistently without anyone on your team having to remember to ask.',
  eyebrow: 'Review Automation',
  headline: 'You are completing jobs that never turn into reviews. That is a system problem.',
  subheadline:
    'Every completed job is a review opportunity. Most businesses convert one in ten, not because their customers are unhappy, but because no one asked at the right moment. Review automation fixes the ask — timing, channel, and message — so every job has a chance to become a public signal that brings the next customer in.',
  glyphVariant: 'arc' as const,
  definition:
    'Review automation for local service businesses is a system that sends a review request to the customer automatically after a job is completed — triggered by the job completion event in your CRM or scheduling tool, timed to when the experience is freshest, and configured to route to Google by default. It removes the manual ask from your team\'s workflow and replaces inconsistent, occasional outreach with a sequence that fires after every job without exception.',
  problems: [
    'You finish a job, the customer is happy, and they never leave a review — not because they wouldn\'t, but because no one asked them within 24 hours while the experience was still fresh.',
    'Your team has tried asking customers in person. It works sometimes. It doesn\'t scale, it depends on who\'s on the job, and it stops entirely when things get busy.',
    'Your competitor has more reviews than you. They almost certainly have a system. You don\'t — which means the gap widens every week, not just because they\'re getting more reviews, but because you\'re falling further behind on a local ranking factor.',
    'You have no way to know which jobs turned into reviews and which didn\'t. There\'s no trigger, no tracking, and no way to close the loop without someone manually checking.',
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
  industryFit: ['home-services', 'construction-contractors'],
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
    {
      q: 'Does review volume actually affect my Google ranking?',
      a: 'Yes. Review count, recency, rating, and response rate are confirmed local ranking factors for Google Maps and the local pack. A business with more recent reviews from real customers consistently outranks a business with fewer or older reviews at the same quality level. Review automation addresses the volume and recency dimensions directly — by making sure every completed job produces a request, not just the ones where someone remembered to ask.',
    },
    {
      q: 'What is the best time to send a review request?',
      a: 'Within 24 hours of job completion, while the experience is fresh and the customer still has your business top of mind. The exact timing is configured based on your job type — a same-day service might trigger a request that evening, while a multi-day project might trigger it the morning after the final walkthrough. The system is set up around your workflow, not a generic schedule.',
    },
    {
      q: 'Can I customize the message the customer receives?',
      a: 'Yes. The review request message is written in your voice — we configure the template during setup. The message references the specific job or service when that data is available from your CRM. It does not feel like a generic bulk email because it is tied to a real transaction.',
    },
    {
      q: 'How does review automation connect to the rest of the reputation system?',
      a: 'Review automation handles the acquisition side — getting reviews from completed jobs. AI review responses handle the engagement side — responding to every review in your voice. Competitor review benchmarking shows how your growing profile compares to the businesses ranking above you. The three pieces run together as one reputation system, each one strengthening the signal the others send to Google and to prospective customers.',
    },
    {
      q: 'What happens if a customer ignores the first request?',
      a: 'A single follow-up message fires after a configured interval — typically 48 to 72 hours. The sequence stops after the follow-up whether or not the customer responds, so it stays persistent enough to work without feeling like repeated spam. If the customer had a bad experience and signals dissatisfaction, the review request is withheld entirely and a service recovery sequence starts instead.',
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
    images: [{ url: '/images/og/review-automation.webp', alt: PAGE.metaTitle }],
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
