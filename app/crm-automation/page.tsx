import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'crm-automation',
  metaTitle: 'CRM Automation for Service Businesses | Sirius Systems',
  metaDescription:
    'CRM automation that moves leads through your pipeline without manual follow-up: built and configured for local service businesses by Sirius Systems.',
  eyebrow: 'CRM Automation',
  headline: 'Leads are slipping because no one followed up. Fix that.',
  subheadline:
    'CRM automation means your pipeline moves on its own. Stages update, follow-ups fire, and nothing sits waiting for someone to remember to act.',
  glyphVariant: 'grid' as const,
  definition:
    'CRM automation for service businesses means configuring your customer relationship management system to move leads through stages, trigger follow-up sequences, and update records automatically: based on actions taken, not manual entry.',
  problems: [
    'Leads sit in your CRM untouched because no one has time to follow up manually.',
    'Pipeline stages are wrong because updating them requires someone to remember.',
    'You have no idea which leads went cold versus which ones just need one more touchpoint.',
    "Your team enters the same data in multiple places because the systems don't talk to each other.",
  ],
  steps: [
    {
      label: 'Audit your current pipeline',
      body: 'We map how leads currently move from first contact to booked job: what triggers a stage change, what triggers a follow-up, and where leads fall out. Most pipelines have two or three obvious automation gaps.',
    },
    {
      label: 'Configure triggers and actions',
      body: 'We set up the rules: when a lead submits a form, a sequence starts. When a quote is sent, a reminder fires in 48 hours. When a job is completed, a review request goes out. Each trigger is tied to a real event, not a schedule.',
    },
    {
      label: 'Connect your tools',
      body: 'We integrate your CRM with your booking system, website forms, messaging platform, and any other tools in your stack: so data flows in one direction and records stay current automatically.',
    },
    {
      label: 'Test every path',
      body: 'Before going live, we walk every trigger path end to end: from first lead to closed job: and confirm the right actions fire at the right time. Nothing launches until it works.',
    },
  ],
  features: [
    'Pipeline stage automation: stages update based on real actions, not manual entry',
    'Follow-up sequence triggers: SMS and email sequences fire at the right moment',
    'Lead scoring and tagging: organizes leads by status, source, and urgency',
    'Form-to-CRM sync: every web form submission lands in the right pipeline stage',
    'Booking confirmation sync: confirmed appointments update CRM records automatically',
    'Re-engagement automation: dormant leads get a follow-up sequence before being archived',
    'Cross-tool integration: connects CRM to your booking, messaging, and invoicing tools',
    'Activity logging: every touchpoint recorded so nothing is lost between team members',
  ],
  outcomes: [
    'Leads move through your pipeline based on what actually happened, not what someone remembered to update.',
    "Follow-ups go out consistently: every lead gets the same sequence regardless of who's busy.",
    "Cold leads get re-engaged automatically before they're written off.",
    'Your team spends less time on data entry and more time on billable work.',
    'You can see exactly where every lead stands at any point without asking anyone.',
  ],
  relatedSlugs: [
    'lead-generation-automation',
    'appointment-booking-automation',
    'ai-chatbots',
    'review-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'professional-services'],
  faqs: [
    {
      q: 'What is CRM automation for a service business?',
      a: 'It means configuring your CRM to update pipeline stages, trigger follow-up messages, and log activity automatically: based on what actually happens with a lead, not on someone remembering to do it manually.',
    },
    {
      q: 'Do I need a specific CRM for this to work?',
      a: "We work with the CRM you already have wherever possible. If your current tool genuinely can't support automation, we'll say so clearly and recommend an alternative: but the first goal is always to make your existing stack work.",
    },
    {
      q: "What's the difference between CRM automation and just using a CRM?",
      a: 'A CRM stores data. CRM automation acts on it. The difference is whether your pipeline moves itself based on triggers, or whether it only moves when someone manually drags a card.',
    },
    {
      q: 'Will my team need to learn a new system?',
      a: 'Not necessarily. We configure the automation layer on top of what your team already uses. The goal is for the system to do more work in the background: your team should notice less manual work, not a new interface to learn.',
    },
    {
      q: 'What happens to leads that go quiet?',
      a: "We build re-engagement sequences into the CRM: leads that haven't responded after a set period get a follow-up automatically before they're marked inactive. Most businesses recover a meaningful portion of leads this way.",
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

export default function CrmAutomationPage() {
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
            { name: 'CRM Automation', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'CRM Automation',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
