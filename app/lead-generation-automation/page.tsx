import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'lead-generation-automation',
  metaTitle:
    'Lead Generation Automation for Service Businesses | Sirius',
  metaDescription:
    'Lead generation automation that connects every inbound channel — paid, organic, referral — directly to your CRM and booking flow so no lead waits or gets lost.',
  eyebrow: 'Lead Generation',
  headline: 'More leads. Less chasing. No manual hand-off.',
  subheadline:
    'Lead generation automation connects every inbound channel — paid ads, organic search, referrals, social — directly to your CRM and booking flow so no lead waits, leaks, or gets lost.',
  glyphVariant: 'orbit' as const,
  definition:
    'Lead generation automation for service businesses means connecting every inbound channel — paid search, organic, Google Business Profile, referrals, social — to a single intake system that captures the lead, creates a CRM record, and starts a follow-up sequence automatically. The goal is that no lead waits for a human to notice it, regardless of which channel it came from or what time it arrived.',
  problems: [
    'Leads from paid ads land on your form and wait hours for a response. By the time someone follows up, they have already booked a competitor who replied first.',
    'You are investing in traffic — ads, SEO, GBP — that converts into inquiries your team does not have bandwidth to work consistently. The spend is real; the follow-up is not.',
    'Your lead sources feed different inboxes. A Google Ads lead goes one place, a referral goes somewhere else, a GBP inquiry goes another. Nothing lands in your CRM automatically and nothing is followed up consistently.',
    'You have no reliable way to know which channels are producing booked jobs versus which are producing form fills that never convert. Without that data you are optimizing blind.',
  ],
  steps: [
    {
      label: 'Audit your lead sources',
      body: 'We map every channel currently sending leads to your business: paid search, organic, Google Business Profile, referral, social: and identify where leads enter, where they go next, and where they drop out.',
    },
    {
      label: 'Unify the intake',
      body: 'We connect each channel to a single intake system: every lead, regardless of source, lands in your CRM with source tracking, contact details, and the context needed to follow up intelligently.',
    },
    {
      label: 'Wire the follow-up',
      body: 'As soon as a lead enters the system, automated sequences start: an immediate acknowledgment, a qualification message, a booking prompt. The speed and content of each sequence is tuned to the source and the service.',
    },
    {
      label: 'Track what converts',
      body: 'We configure source-level tracking so you can see which channels produce booked jobs, not just form fills. That data drives where you invest next.',
    },
  ],
  features: [
    'Multi-channel lead capture: pulls leads from paid ads, organic, GBP, referral, and social',
    'Instant CRM entry: every lead lands in your pipeline with source data attached',
    'Immediate follow-up sequences: first touchpoint fires within seconds of lead capture',
    'Lead qualification automation: filters and scores leads before they reach your team',
    'Source tracking: ties booked jobs back to the channel that produced them',
    'Duplicate detection: prevents the same lead from entering the pipeline twice',
    'Form and landing page integration: connects existing or new capture points to the flow',
    'Reporting: pipeline view by source, stage, and outcome',
  ],
  outcomes: [
    'Every lead gets a response in seconds, regardless of when or where they came in.',
    'Your team works qualified leads: not raw inquiries that may not even be a fit.',
    'You know which channels are producing revenue, not just traffic.',
    'Leads from paid campaigns convert at a higher rate because the follow-up is immediate.',
    'Nothing leaks between your marketing stack and your CRM.',
  ],
  relatedSlugs: [
    'ai-chatbots',
    'crm-automation',
    'smart-websites',
    'local-seo-aeo',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is lead generation automation for a service business?',
      a: 'It means connecting your marketing channels: paid ads, organic search, referrals, social: to your CRM and follow-up system so that every inbound lead is captured, qualified, and actioned automatically, without someone manually moving it.',
    },
    {
      q: 'Does this replace my existing marketing channels?',
      a: "No. Lead generation automation works on top of whatever channels you're already running. It makes those channels more effective by ensuring every lead they produce gets a fast, consistent follow-up instead of waiting in an inbox.",
    },
    {
      q: 'How quickly does a new lead get a follow-up?',
      a: 'The first automated touchpoint fires within seconds of a lead entering the system. Speed matters: leads contacted within the first few minutes convert at a significantly higher rate than those who wait hours.',
    },
    {
      q: 'Can it handle leads from Google Ads and organic search differently?',
      a: 'Yes. We configure source-specific sequences: a lead from a paid ad gets a different immediate response than a referral or an organic search visitor. The intent and context differ, so the follow-up should too.',
    },
    {
      q: 'How do I know which channels are actually producing booked jobs?',
      a: 'We configure source tracking from first touch through to closed job in your CRM. You get a clear view of which channels produce revenue, not just leads: so you can make informed decisions about where to invest.',
    },
    {
      q: 'What is speed to lead and why does it matter?',
      a: 'Speed to lead is the time between a lead submitting an inquiry and receiving a first response. Research consistently shows that leads contacted within the first few minutes of submitting a form are significantly more likely to convert than those who wait an hour or more. Automation addresses this by firing the first touchpoint within seconds of the lead entering the system — before a competitor has a chance to respond manually.',
    },
    {
      q: 'What counts as a lead source and how are they tracked separately?',
      a: 'A lead source is any channel that sends an inquiry to your business — Google Ads, organic search, GBP, Facebook, referral, direct traffic, or any other origin. We configure UTM tracking and source tagging during setup so every lead that enters your CRM carries its origin. That data flows through to the closed-job stage so you can see revenue by source, not just lead volume by source.',
    },
    {
      q: 'What happens to a lead that does not respond to the initial follow-up?',
      a: 'We build multi-step re-engagement sequences for non-responders — a second touchpoint at a different time of day, on a different channel if available, with different framing. The sequence runs for a defined period before the lead is marked inactive. Most businesses recover a meaningful portion of leads this way without any manual effort from the team.',
    },
    {
      q: 'Can lead generation automation work alongside a human sales process?',
      a: 'Yes — and it is designed to. Automation handles the immediate response, the qualification questions, and the booking prompt. If a lead needs a human conversation before booking, the system hands it off with the full context already captured: what service they need, what they said, how they arrived. Your team picks up a qualified conversation, not a cold inquiry.',
    },
    {
      q: 'How does lead generation automation connect to the rest of the growth system?',
      a: 'Lead generation automation is the intake layer. It fills the CRM with sourced, qualified leads. CRM automation moves those leads through the pipeline. Appointment booking automation converts them into scheduled jobs. AI chatbots and voicebots handle the leads that arrive via website or phone. When the intake layer is automated, every other piece of the system has a consistent, reliable supply of contacts to work with.',
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

export default function LeadGenerationAutomationPage() {
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
            { name: 'Lead Generation Automation', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Lead Generation Automation',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
