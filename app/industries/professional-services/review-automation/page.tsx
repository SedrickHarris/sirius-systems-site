import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'review-automation',
  hubName:     'Professional Services',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for Professional Services Firms',
  metaDescription: 'Professional service firms close engagements without a review request. Sirius builds the system that asks every client at the right moment, every time.',

  eyebrow: 'Professional Services · Review Automation',

  headline:
    'You are closing engagements that never turn into reviews — that is a system problem, not a client problem',

  subheadline:
    'Most professional service firms complete a matter, close a file, and move on. The client was satisfied. They would have left a review if someone had asked. No one did. The competing firm down the street with three times your review volume did not earn those reviews because their work was better — they built a system that asks every client at the right moment, every time, without anyone on staff having to remember.',

  heroHighlights: [
    'Automated review requests triggered by engagement completion — no manual step from your team',
    'Professionally worded requests that fit the client relationship and comply with professional standards',
    'Google prioritized, with secondary platforms matched to your practice type',
    'Single follow-up sequence for non-responders — persistent without being intrusive',
  ],

  definitionHeadline:
    'What review automation actually means for a professional services firm',

  definition:
    'Review automation for a professional services firm is a system that sends a review request to each client automatically after an engagement closes — triggered by matter completion, file close, or project delivery — timed to when the experience is freshest and the client relationship is at its strongest. The request is worded to fit the professional context: no incentives, no direction on what to say, no language that pushes toward a positive outcome. Just a straightforward ask, delivered at the right moment, on the channel the client is most likely to use. For attorneys, accountants, financial advisors, and consultants, the trigger is an engagement event rather than a job completion, and the platform mix reflects where prospective clients in your field actually research.',

  problemHeadline:
    'Where professional service firms lose the review volume their work has already earned',

  problems: [
    'The matter closed well. The client expressed gratitude. No review request went out. Attorneys are in court or depositions, accountants are in tax season, consultants are on the next engagement — the ask never happens because no one built a system to send it automatically.',
    'A competing firm with comparable credentials has forty reviews and yours has seven. They appear first in the local pack and on the map. Prospective clients researching attorneys or accountants in your area see their volume and call them. Review count is a ranking factor and a trust signal — both of which you are ceding without a system.',
    'Your firm has a policy of not asking clients for reviews because it feels uncomfortable or you are unsure of the ethics. The result is a review profile that reflects only the clients who were motivated enough to post unprompted — disproportionately those with a complaint.',
    'You have sent manual review requests before. They work sometimes and stop entirely when things get busy. Inconsistent outreach produces inconsistent results. Review volume grows in occasional bursts and plateaus for months between them.',
  ],

  steps: [
    {
      label: 'Configure the engagement trigger',
      body: 'We connect the review request to the right moment in your workflow — matter close, file completion, project delivery, or invoice settlement — so the request fires automatically when the engagement ends, not when someone on staff remembers to send it.',
    },
    {
      label: 'Write requests that fit the professional relationship',
      body: 'We draft the SMS and email templates in your firm\'s voice — direct, professional, and compliant with the standards that apply to your practice type. The message is a straightforward ask for honest feedback, not a prompt toward a particular outcome.',
    },
    {
      label: 'Route to the right platforms',
      body: 'Google Business Profile is the primary platform for local search visibility. Depending on your practice type, the sequence also covers Avvo, Martindale-Hubbell, or Yelp — the platforms where prospective clients in your field actually research before they call.',
    },
    {
      label: 'Follow up once and stop',
      body: 'If the client does not respond to the first request, a single follow-up fires at a configured interval. The sequence stops after that — persistent enough to recover clients who were simply busy, professional enough not to push those who chose not to respond.',
    },
  ],

  features: [
    'Engagement-triggered requests: fires when a matter closes, not when someone remembers to ask',
    'SMS and email delivery: reaches the client on the channel they actually use',
    'Professionally worded templates: written for the client relationship, not a generic review-request script',
    'Google-first routing: directs clients to Google Business Profile for maximum local search impact',
    'Practice-type platform matching: Avvo, Martindale-Hubbell, or Yelp added based on your field',
    'Single follow-up sequence: one reminder after non-response, then stops',
    'Opt-out handling: clients who decline are removed and not contacted again',
    'Volume reporting: track send rate, open rate, and review conversion by engagement type',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'google-business-profile-optimization',
    'crm-automation',
  ],

  faqs: [
    {
      q: 'Is it appropriate for attorneys, accountants, and other professionals to ask clients for reviews?',
      a: 'Yes — and most bar associations and professional bodies explicitly permit it, provided the request is not coercive, does not offer an incentive, and does not direct the client toward a positive outcome. The system is configured to send an open-ended ask for honest feedback after the engagement closes, which is both permissible and effective. The ethics concern most firms have is about incentivizing or gating reviews — neither of which the system does.',
    },
    {
      q: 'What platforms does review automation cover for professional service firms?',
      a: 'Google Business Profile is the primary platform because it drives the most local search visibility and map pack placement. Depending on your practice type, the sequence also covers Avvo, Martindale-Hubbell, and FindLaw for law firms, and Yelp and Google for accounting and financial advisory practices. We configure the platform mix during setup based on where your prospective clients actually research before they contact a firm.',
    },
    {
      q: 'How does the system handle the privacy concerns specific to professional services clients?',
      a: 'The request is written to invite feedback without referencing sensitive details about the engagement. Clients are asked to share their experience with the firm — not to describe the nature of their legal matter, financial situation, or other private context. The ask is professional in tone and framed around the service relationship, not the subject matter. Clients who choose not to respond are not followed up with beyond a single reminder.',
    },
    {
      q: 'What is the trigger for a review request in a professional services context?',
      a: 'The trigger is an engagement event rather than a job completion — typically matter close, file settlement, project delivery, or final invoice. We configure the trigger to connect to the right point in your workflow, whether that is a status change in your practice management system, a CRM field update, or another completion signal. The goal is that the request fires when the client relationship is in its best state and the experience is recent.',
    },
    {
      q: 'How does review automation connect to the rest of the growth system for a professional services firm?',
      a: 'Review automation handles the acquisition side — getting reviews from closed engagements. AI review responses handle the engagement side — responding to every review on every platform in your firm\'s voice. Reputation management combines both with monitoring and competitor benchmarking. Google Business Profile optimization makes sure the profile those reviews land on is strong enough to convert prospective clients during their research phase. Together, the four systems build a review profile that works as a new client acquisition engine, not just a passive rating.',
    },
  ],

  ctaHeadline: 'See what your closed engagements are not producing',

  ctaBody:
    'We review your current engagement close process, identify where review requests are being missed, and walk you through what an automated system built for your practice type would look like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'Review Automation',     url: '/industries/professional-services/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/review-automation',
            name:        'Review Automation for Professional Services Firms',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
