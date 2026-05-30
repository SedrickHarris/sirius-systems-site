import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-review-responses',
  metaTitle: 'AI Review Responses for Service Businesses | Sirius Systems',
  metaDescription:
    'AI-generated review responses in your brand voice — so every Google review gets a reply that sounds like your business, not a bot, without your team writing each one.',
  eyebrow: 'AI Review Responses',
  headline: 'Every review deserves a response. Most businesses do not have time to write them.',
  subheadline:
    'AI review responses mean no review sits unanswered. Positive ones get acknowledged, hard ones get handled in your voice, without you writing each one.',
  glyphVariant: 'pulse' as const,
  definition:
    'AI review responses for service businesses means using an AI system configured to your brand voice to draft a reply to every incoming review — positive, neutral, or negative — so that no review goes unanswered and every response reads like it came from your business, not a template. The system generates the draft; your team approves and publishes, or you configure auto-publish for positive reviews when volume makes manual approval impractical.',
  problems: [
    'Positive reviews sit without a response because replying feels optional when there are jobs to run. Prospective customers reading your reviews notice which businesses respond and which ones don\'t.',
    'A one-star review is sitting on your profile right now with no reply. Every day it goes unanswered, it signals to the next person who reads it that you either didn\'t see it or didn\'t care.',
    'When you do respond, the tone is inconsistent — whoever had five minutes wrote it, in whatever mood they were in. It does not read like the same business every time.',
    'As review volume grows, manual responses stop being realistic. Automation without a voice profile produces generic copy that makes the situation worse, not better.',
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
  industryFit: ['home-services', 'construction-contractors'],
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
    {
      q: 'Does responding to reviews actually affect my Google ranking?',
      a: 'Yes. Google has confirmed that responding to reviews is a signal it considers for local search rankings. Response rate and response recency both factor into how Google evaluates your business\'s engagement. Beyond rankings, responding to reviews influences the decision of the next prospective customer who reads your profile — a business that engages with feedback reads as more trustworthy than one that ignores it.',
    },
    {
      q: 'What makes an AI review response different from a copy-paste template?',
      a: 'A template is static — every positive review gets the same reply. An AI response system is trained on your voice and configured by review category, so a glowing five-star response differs from a lukewarm four-star, which differs from a complaint. The variation makes responses feel considered rather than automated, even when they are generated at scale.',
    },
    {
      q: 'Can the AI reference the specific service or job in the response?',
      a: 'Yes, when that data is available from your review platform or CRM. When a customer mentions the service they received, the response can acknowledge it specifically. When no detail is available, the response is warm and personal in tone without fabricating specifics it cannot know.',
    },
    {
      q: 'How does this connect to the rest of the reputation system?',
      a: 'AI review responses handle the engagement layer — making sure every review gets a reply in your voice. Review automation handles the acquisition layer — making sure every completed job produces a review request. Competitor review benchmarking shows how your response rate and volume compare to the businesses ranking above you. The three services run as one reputation system, each one reinforcing the signals the others build.',
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
    images: ['/og/default.webp'],
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
