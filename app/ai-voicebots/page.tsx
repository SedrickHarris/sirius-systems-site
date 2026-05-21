import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-voicebots',
  metaTitle: 'AI Voicebots for Service Businesses | Sirius Systems',
  metaDescription:
    "AI voicebots that pick up missed calls, qualify the lead, and book the job: so your business keeps running even when you're on a job site.",
  eyebrow: 'AI Voicebots',
  headline: 'Every missed call is a missed job. Stop missing them.',
  subheadline:
    "An AI voicebot answers calls you can't, qualifies the caller in natural conversation, and books or routes the lead: before they call your competitor.",
  glyphVariant: 'wave' as const,
  definition:
    'An AI voicebot for service businesses is an automated phone agent that answers inbound calls, handles common questions, qualifies leads, and books appointments using natural voice conversation: without a human on the line.',
  problems: [
    "You're on a job and a new lead calls: it goes to voicemail and they hang up without leaving a message.",
    'After-hours calls go unanswered and those leads book someone else by morning.',
    'Your front desk spends half the day on calls that could be handled automatically.',
    "Voicemail follow-up is inconsistent: some leads get called back, others don't.",
  ],
  steps: [
    {
      label: 'Define your call flows',
      body: 'We map the most common inbound call types: new service inquiry, existing customer, quote request, emergency: and build a response flow for each. The voicebot handles the predictable; humans handle the rest.',
    },
    {
      label: 'Record or synthesize the voice',
      body: 'We configure a voice that fits your brand: professional, approachable, or direct. Callers interact with a clear, natural-sounding agent, not a phone tree.',
    },
    {
      label: 'Connect to booking and CRM',
      body: 'When the voicebot qualifies a caller, it books the appointment directly or routes to your CRM with full call context: no double-entry, no lost notes.',
    },
    {
      label: 'Monitor and refine',
      body: 'Every call is logged. We review early interactions to catch gaps in the flow and update responses based on what callers actually say. The system gets sharper over time.',
    },
  ],
  features: [
    "Missed-call pickup: answers calls you can't take in real time",
    'After-hours coverage: handles inbound calls outside business hours',
    'Lead qualification by voice: asks the right questions before booking or routing',
    'Appointment booking: connects to your calendar and confirms the slot',
    'CRM handoff: logs call details and triggers follow-up sequences',
    'Call routing: escalates to a human when the situation requires it',
    'Natural language handling: understands varied phrasing, not just scripted responses',
    'Full call logging: every conversation recorded and summarized',
  ],
  outcomes: [
    'Missed calls get answered and qualified instead of going to voicemail.',
    'After-hours leads are captured and booked before your team starts the next morning.',
    'Your front desk handles fewer routine calls and focuses on higher-value work.',
    'Every inbound lead is logged with context: no more lost sticky notes or missed follow-ups.',
  ],
  relatedSlugs: [
    'ai-chatbots',
    'lead-generation-automation',
    'appointment-booking-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'contractors'],
  faqs: [
    {
      q: 'What is an AI voicebot for a service business?',
      a: "It's an automated phone agent that answers inbound calls, qualifies the caller, and books or routes the lead using natural voice conversation. It handles the calls you can't: when you're on a job, after hours, or at capacity.",
    },
    {
      q: "Will callers know they're talking to an AI?",
      a: 'The voicebot is configured to be clear and professional. Whether it identifies itself as automated depends on your preference and applicable regulations: we walk through that during setup. The goal is a smooth, useful experience, not deception.',
    },
    {
      q: "What happens if the voicebot can't handle the call?",
      a: 'We configure escalation paths. If a caller asks for something outside the flow: a complaint, a complex situation, an existing job issue: the voicebot acknowledges it and either transfers to a human or collects info for a callback.',
    },
    {
      q: 'Does it work for emergency or same-day service calls?',
      a: 'Yes: we build specific flows for urgent calls. The voicebot can recognize urgency signals in the conversation and route or respond accordingly, including booking same-day slots if your calendar has them.',
    },
    {
      q: 'How does it connect to my existing calendar and CRM?',
      a: 'We integrate with your existing booking and CRM tools during setup. When a call ends with a qualified lead, the appointment is created and the CRM record is updated automatically: no manual entry.',
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

export default function AiVoicebotsPage() {
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
            { name: 'AI Voicebots', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'AI Voicebots',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
