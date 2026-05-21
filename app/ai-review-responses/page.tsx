import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-review-responses',
  metaTitle: 'AI Review Responses for Service Businesses | Sirius Systems',
  metaDescription:
    'On-brand AI-assisted replies to every review: positive or hard: at scale. Never leave a review unanswered again. Built for local service businesses by Sirius Systems.',
  eyebrow: 'AI Review Responses',
  headline: 'Every review answered. In your voice. At scale.',
  subheadline:
    'Unanswered reviews signal to potential customers that no one is paying attention. AI review responses keep every review acknowledged: positive ones thanked, hard ones handled: without your team writing each one manually.',
  glyphVariant: 'pulse' as const,
  definition:
    'AI review responses for service businesses means using an AI system trained on your brand voice to draft replies to every incoming review: positive, neutral, or negative: so that no review goes unanswered and every response sounds like it came from your business.',
  problems: [
    "Positive reviews go unacknowledged because responding feels optional when you're busy.",
    'Negative reviews sit unanswered for days: or forever: because no one knows what to say.',
    'When you do respond, the tone is inconsistent depending on who wrote it and when.',
    "Responding to every review manually doesn't scale as volume grows.",
  ],
  steps: [
    {
      label: 'Train the voice profile',
      body: 'We build a voice profile for your business: the tone, the phrases you use, the level of formality, how you typically handle a complaint. The AI drafts responses that match this profile, not a generic template.',
    },
    {
      label: 'Configure response categories',
      body: 'We set up response logic by review type: glowing five-star, lukewarm four-star, specific complaint, rating-only with no text. Each category gets a different response approach so replies feel considered, not canned.',
    },
    {
      label: 'Set up the review monitoring feed',
      body: 'New reviews on Google and connected platforms surface immediately. Drafts are generated automatically so your team reviews and publishes with one click: or we configure auto-publish for positive reviews if you prefer.',
    },
    {
      label: 'Handle hard reviews with a clear workflow',
      body: 'Negative reviews get a separate workflow: a draft response that acknowledges the issue without admitting fault, plus an internal alert so the right person is aware. The response goes out promptly, which matters more than getting it perfect.',
    },
  ],
  features: [
    'AI-drafted responses: every review gets a reply draft generated automatically',
    'Brand voice training: responses match your tone, not a generic platform default',
    'Review type logic: different response approaches for positive, neutral, and negative',
    'One-click publish: team reviews draft and publishes without writing from scratch',
    'Auto-publish option: positive reviews can be responded to automatically',
    'Negative review workflow: alert plus draft for hard reviews requiring attention',
    'Multi-platform coverage: Google and connected review platforms',
    'Response rate reporting: track how quickly and consistently reviews are being answered',
  ],
  outcomes: [
    'Every review gets a response: no review sits unanswered regardless of volume.',
    'Potential customers see an active, attentive business when they read your review section.',
    'Hard reviews are handled promptly with the right tone instead of being ignored.',
    'Your team spends minutes reviewing drafts instead of hours writing responses from scratch.',
    'Response consistency improves because the AI applies the same voice rules every time.',
  ],
  relatedSlugs: [
    'review-automation',
    'reputation-management',
    'competitor-review-benchmarking',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'contractors'],
  faqs: [
    {
      q: 'What are AI review responses?',
      a: 'An AI system trained on your brand voice drafts a reply to every incoming review: positive, neutral, or negative. Your team reviews the draft and publishes with one click, or you can configure auto-publish for straightforward positive reviews.',
    },
    {
      q: 'Will the responses sound like a robot wrote them?',
      a: 'Only if the voice profile is set up carelessly. We build the voice profile from how your business actually communicates: the words you use, your level of formality, how you handle feedback. Responses that go through this process read like they came from your team.',
    },
    {
      q: 'What happens with a bad review?',
      a: 'Negative reviews trigger a separate workflow: a draft response that acknowledges the issue professionally, plus an internal alert to the right person. The goal is a prompt, measured reply that shows other customers you take feedback seriously.',
    },
    {
      q: 'Does someone still need to approve responses before they go out?',
      a: 'For negative or sensitive reviews, yes: a human reviews the draft before it publishes. For straightforward positive reviews, you can choose one-click approval or full auto-publish depending on your comfort level.',
    },
    {
      q: 'Which platforms does this cover?',
      a: 'Google is the primary platform for most local service businesses. We also cover Facebook and can integrate additional platforms where your reviews are most active. The setup is configured around where your review volume actually lives.',
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

export default function AiReviewResponsesPage() {
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
            { name: 'AI Review Responses', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'AI Review Responses',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
