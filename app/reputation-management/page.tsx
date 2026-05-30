import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'reputation-management',
  metaTitle: 'Reputation Management for Service Businesses | Sirius',
  metaDescription:
    'Build your review volume, respond to every review, and strengthen local search visibility — with a reputation system that runs automatically after every job.',
  eyebrow: 'Reputation Management',
  headline: 'Your reputation is being built right now. The question is whether you are building it or ignoring it.',
  subheadline:
    'Every completed job is an opportunity to earn a review, respond to feedback, and strengthen your position in local search. Most businesses let those opportunities pass.',
  glyphVariant: 'beacon' as const,
  definition:
    'Reputation management for a local service business means building a system that earns reviews consistently, responds to every one of them, and monitors what is being said across platforms — so your online reputation reflects your actual work quality and reinforces your local search visibility. It is not crisis management after something goes wrong. It is the ongoing operation that prevents a weak review profile from becoming a competitive liability in the first place.',
  problems: [
    'You do good work but your review count does not reflect it. Asking for reviews depends on someone remembering to do it after every job, which means it happens occasionally instead of consistently.',
    'A negative review has been sitting unanswered for weeks and is the first thing a prospective customer sees when they search for you.',
    'Competitors in your market have more reviews and stronger ratings even though their work quality is comparable to yours. The difference is they have a system and you do not.',
    'You have no visibility into what customers are saying on Facebook, industry directories, or other platforms you do not check regularly.',
  ],
  steps: [
    {
      label: 'Audit your current reputation and competitive position',
      body: 'We review your current rating, review volume, response rate, recency, and platform coverage — then benchmark those numbers against the businesses ranking above you in local search. Most businesses are behind on at least two dimensions. You see exactly where the gaps are before we change anything.',
    },
    {
      label: 'Build the review acquisition system',
      body: 'We configure automated review requests that go out at the right moment after a completed job — via SMS or email, to the right platform, timed so the request arrives when the customer experience is still fresh. The system runs after every job without anyone on your team doing anything manually.',
    },
    {
      label: 'Configure response workflows',
      body: 'Every review gets a response. We set up AI-assisted response drafts written in your voice so that positive reviews get acknowledged promptly and hard reviews get handled with the right tone rather than left to sit. No review goes unanswered because someone forgot to check.',
    },
    {
      label: 'Monitor across platforms and maintain',
      body: 'We configure monitoring across your review platforms so new reviews surface immediately rather than being discovered days later. The system runs without ongoing manual intervention, and you receive reporting on review volume, rating trend, and response rate so you can see whether the reputation is moving in the right direction.',
    },
  ],
  features: [
    'Review acquisition automation: requests go out after every completed job',
    'Multi-platform coverage: Google, Facebook, and vertical-specific directories',
    'AI-assisted review responses: on-brand replies drafted for every review',
    'Negative review handling: response workflows for hard reviews that protect your rating',
    'Review monitoring: new reviews surface in real time across all platforms',
    'Competitor benchmarking: see how your review volume and rating compare locally',
    'GBP alignment: review activity connected to your Google Business Profile signals',
    'Reporting: review volume, rating trend, response rate over time',
  ],
  outcomes: [
    'Review volume grows consistently because requests go out after every job rather than on the days someone remembers.',
    'No review sits unanswered. Positive ones get acknowledged. Hard ones get a professional response that shows prospective customers you take feedback seriously.',
    'Your star rating moves toward reflecting your actual work quality instead of a thin, unrepresentative sample.',
    'Local search visibility strengthens over time because review volume, recency, and response rate are all positive ranking signals that compound.',
    'You have visibility into what customers are saying across every platform without manually checking each one.',
  ],
  relatedSlugs: [
    'review-automation',
    'ai-review-responses',
    'competitor-review-benchmarking',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is reputation management for a local service business?',
      a: 'Reputation management for a local service business means running a system that earns reviews consistently after every job, responds to every review, and monitors what is being said across platforms. The goal is an online reputation that reflects actual work quality and reinforces local search visibility — not crisis response after something goes wrong.',
    },
    {
      q: 'Why do reviews matter for local search rankings?',
      a: 'Review signals — volume, recency, rating, and response rate — are among the primary factors Google uses to rank businesses in local search results and the map pack. A business with consistent recent reviews and an active response pattern ranks more competitively than one with the same star rating but stale, infrequent activity. Reviews are both a trust signal for customers and a ranking signal for Google.',
    },
    {
      q: 'Can you remove negative reviews?',
      a: 'Reviews on platforms like Google cannot be removed by a third party. We do not promise otherwise. What we do is respond to negative reviews professionally and promptly — which signals to prospective customers that you engage with feedback rather than ignore it — and build a consistent volume of new positive reviews so that one negative review represents a smaller share of the total picture.',
    },
    {
      q: 'How do you ask for reviews without it feeling pushy?',
      a: 'Timing and channel are the main variables. A review request sent shortly after a completed job, when the customer experience is still fresh and positive, feels like a natural follow-up rather than a solicitation. Sending it to the channel the customer already uses and keeping the message brief and direct removes friction. We configure timing, copy, and platform during setup based on how your customers communicate.',
    },
    {
      q: 'Which review platforms do you cover?',
      a: 'Google is the priority for most local service businesses because of its direct impact on local search rankings and the map pack. We also cover Facebook and any vertical-specific directories relevant to your industry. The mix is determined during the audit based on where your customers actually leave reviews and where your competitors are active.',
    },
    {
      q: 'What is the difference between reputation management and review automation?',
      a: 'Review automation is the request-and-acquisition layer: the system that asks for reviews after each job and gets them onto the right platform. Reputation management is the full picture: acquisition, response, monitoring, competitive benchmarking, and the connection to local search visibility. Review automation is one component inside a reputation management system.',
    },
    {
      q: 'How do you handle a negative review that is unfair or inaccurate?',
      a: 'We respond professionally and factually. The response is not written to argue with the reviewer — it is written for the prospective customers reading the exchange. A calm, constructive response to an unfair review often does more to build trust with new customers than the negative review does to damage it. Flagging a review to Google for policy violations is also an option when the content is genuinely against platform rules, though removal is not guaranteed.',
    },
    {
      q: 'How long does it take to see results from reputation management?',
      a: 'Review acquisition starts producing results as soon as the system goes live and jobs complete. The compounding effect on local search visibility builds over weeks and months as review volume and recency signals strengthen. Response rate improvements are visible immediately once the workflow is configured. The full effect on competitive ranking position depends on where you start relative to competitors and how active the market is.',
    },
    {
      q: 'How does reputation management connect to the rest of my system?',
      a: 'Reputation management connects to your review acquisition automation, your AI review response workflow, your Google Business Profile, and your local SEO foundation. Reviews earned by the acquisition system land on your GBP and strengthen its local search signals. Responses handled by the AI response workflow keep the profile active. The reputation system and the local search system are not separate — they feed each other.',
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
