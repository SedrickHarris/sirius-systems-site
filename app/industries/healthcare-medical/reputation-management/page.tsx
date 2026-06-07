import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'healthcare-medical',
  serviceSlug: 'reputation-management',
  hubName:     'Healthcare & Medical',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Medical Practices | Sirius Systems',
  metaDescription: 'Patients check your reviews before booking. Sirius Systems helps medical practices automate reviews, respond to feedback, and protect local search rankings.',

  eyebrow:   'Healthcare · Reputation Management',
  headline:  'Your medical practice reputation — built on real patient feedback, managed automatically',
  subheadline: 'Patients research you before they call. A managed reputation system earns more reviews, responds to every one, and keeps your practice visible where patients search.',
  heroHighlights: [
    'Automated post-visit review requests sent to patients on the right channel',
    'AI-assisted responses to every review — positive and critical',
    'Monitoring across Google, Healthgrades, and key healthcare directories',
    'Reputation signals connected to your local search visibility',
  ],

  definitionHeadline: 'What reputation management means for a medical practice',
  definition: 'Reputation management for a medical practice is the ongoing process of earning patient reviews, responding to feedback in a timely and HIPAA-aware manner, and maintaining accurate listings across platforms where patients make provider decisions. When managed consistently, it becomes a patient acquisition system — not just a damage-control measure.',

  problemHeadline: 'Why most medical practices have a reputation gap they do not know about',
  problems: [
    'Satisfied patients leave your office and never leave a review — while dissatisfied patients are far more likely to post publicly, leaving your profile skewed toward outliers.',
    'Negative reviews sit unanswered for weeks because no one on staff owns the response process, which signals to prospective patients that the practice does not engage with feedback.',
    'Your practice appears on Healthgrades, Vitals, and Google with outdated information, inconsistent NAP data, and no recent reviews — even when your actual patients are happy.',
    'Every missed review request is a missed ranking signal. Patient review volume and recency are direct inputs into how Google ranks local medical providers.',
  ],

  howItWorksHeadline: 'How the reputation system works for your practice',
  steps: [
    { label: 'Post-visit trigger', body: 'After a patient appointment, a review request is sent automatically — by text or email — at the right interval for your practice type, with a frictionless path to your preferred platform.' },
    { label: 'AI-assisted response', body: 'Every incoming review — five-star praise or a difficult one-star complaint — receives a drafted response that reflects your practice\'s voice without disclosing protected patient information.' },
    { label: 'Monitoring and visibility', body: 'Your reputation data is tracked across Google and healthcare-specific directories. Review volume, recency, and response rate are reported so you can see the system working.' },
  ],

  featuresHeadline: 'What the reputation system includes for healthcare practices',
  features: [
    'Automated review request workflows triggered by patient visit activity',
    'Multichannel delivery — text and email — to match patient communication preferences',
    'AI-drafted review responses that stay within HIPAA-aware communication boundaries',
    'Review monitoring across Google, Healthgrades, and major healthcare directories',
    'Listing accuracy checks to ensure your practice information is consistent where patients search',
    'Response rate and review volume tracking in a single dashboard',
    'Escalation workflow for critical or sensitive reviews requiring staff review before response',
    'Integration with your patient communication system to avoid double-messaging',
  ],

  relatedServiceSlugs: ['review-automation', 'ai-review-responses', 'google-business-profile-optimization', 'local-seo-aeo'],

  faqs: [
    {
      q: 'Do patient reviews actually affect how my practice ranks on Google?',
      a: 'Yes. Google uses review volume, recency, and star rating as ranking signals for local search results. A practice that consistently earns new reviews and responds to them tends to outrank competitors with older or thinner review profiles. Managing your review presence is not separate from local SEO — it is part of it.',
    },
    {
      q: 'How do you handle review responses without violating patient privacy?',
      a: 'Review responses are drafted to acknowledge feedback and demonstrate responsiveness without confirming that the reviewer was a patient or referencing any appointment details. Responses follow HIPAA-aware communication practices — thanking reviewers, addressing tone, and inviting further conversation offline without disclosing protected health information.',
    },
    {
      q: 'Can you collect reviews for Healthgrades and Vitals, not just Google?',
      a: 'The system directs patients to the platform that matters most for your practice. For most medical practices, that starts with Google. Healthgrades and other healthcare-specific directories are part of the monitoring and listing accuracy layer, and review requests can be configured to route patients to the platform where your profile needs the most attention.',
    },
    {
      q: 'What if we already have negative reviews? Does this help with those?',
      a: 'The system does not remove reviews. What it does is build a consistent stream of new, genuine patient feedback that gives your profile balance and recency. AI-assisted responses to existing negative reviews are also part of the system — responding professionally to a difficult review signals to prospective patients that the practice takes feedback seriously.',
    },
    {
      q: 'We only have a small front desk team. How much does this require from our staff?',
      a: 'Once configured, the review request process runs automatically from your patient visit trigger. Staff only need to step in for reviews flagged as sensitive or requiring a personal response. The system handles the volume — your team handles the exceptions.',
    },
  ],

  ctaHeadline:      'Find out where your practice reputation stands — and what it is costing you',
  ctaBody:          'We will audit your current review presence, identify the gaps your competitors are filling, and show you exactly how the system closes them. No obligation.',
  ctaPrimaryLabel:  'Get a Free Reputation Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/healthcare-medical/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/healthcare-medical/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HealthcareMedicalReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/healthcare-medical/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Healthcare & Medical',  url: '/industries/healthcare-medical' },
            { name: 'Reputation Management', url: '/industries/healthcare-medical/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/healthcare-medical/reputation-management',
            name:        'Reputation Management for Medical Practices',
            description: 'Automated review collection, HIPAA-aware response workflows, and reputation monitoring for medical practices and healthcare providers.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
