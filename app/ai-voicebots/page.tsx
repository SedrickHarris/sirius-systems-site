import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-voicebots',
  metaTitle: 'AI Voicebots for Service Businesses | Sirius Systems',
  metaDescription:
    'AI voicebots that answer missed calls, qualify leads by voice, and book appointments automatically — so no inbound call goes unanswered.',
  eyebrow: 'AI Voicebots',
  headline: 'Every missed call is a missed job. Stop missing them.',
  subheadline:
    'An AI voicebot answers the calls you cannot take, qualifies the caller in natural conversation, and books or routes the lead before they call your competitor.',
  glyphVariant: 'wave' as const,
  definition:
    'An AI voicebot for a service business is an automated phone agent that answers inbound calls using natural voice conversation: no phone tree, no hold music, no voicemail. It qualifies the caller, answers common service questions, and books the appointment or routes the lead to your CRM with full call context. It runs when you are on a job, after hours, and at any call volume without adding staff.',
  problems: [
    'You are on a job and a new lead calls. It goes to voicemail. They hang up without leaving a message and book someone else.',
    'After-hours calls go unanswered and those leads have already made a decision by the time your team starts the next morning.',
    'Your front desk spends the first two hours of every day on routine calls: availability, service area, rough pricing. That time comes out of everything else.',
    'Voicemail follow-up is inconsistent. Some callers hear back the same day. Others wait two days. A few never hear back at all.',
  ],
  steps: [
    {
      label: 'Map your inbound call types',
      body: 'We identify the most common reasons people call your business: new service inquiry, quote request, scheduling, existing customer follow-up, emergency. Each call type gets its own flow so the voicebot handles the predictable calls well and escalates the ones that need a human.',
    },
    {
      label: 'Configure the voice and script',
      body: 'We set the voice profile, the opening, and the qualification questions based on what your team actually needs to know before accepting a job. The voicebot uses your service names, your service area boundaries, and your scheduling language. It sounds like a professional representative of your business, not a generic phone agent.',
    },
    {
      label: 'Connect to booking and CRM',
      body: 'When the voicebot qualifies a caller, it books directly into your calendar or routes the lead to your CRM with the full call context captured: caller name, service type, location, urgency. No double-entry, no lost notes, no manual transcription of a voicemail.',
    },
    {
      label: 'Monitor, log, and refine',
      body: 'Every call is logged and summarized. We review early interactions to find gaps in the flow and update responses based on what callers actually say. Callers ask things the initial build did not anticipate. We use those cases to make the system more accurate over time.',
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
    'Missed calls get answered and qualified instead of going to voicemail. The lead is in your pipeline before the call ends.',
    'After-hours callers reach a capable agent rather than a voicemail box. Jobs that would have gone to a competitor by morning are captured instead.',
    'Your front desk handles fewer routine calls and puts that time toward work that actually requires a person.',
    'Every inbound call is logged with context. No more reconstructing what a caller wanted from a two-word voicemail.',
    'Call volume spikes and busy periods no longer mean dropped leads. The voicebot scales without adding headcount.',
  ],
  relatedSlugs: [
    'ai-chatbots',
    'lead-generation-automation',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is an AI voicebot for a service business?',
      a: 'An AI voicebot for a service business is an automated phone agent that answers inbound calls using natural voice conversation. It qualifies the caller, handles common service questions, and books the appointment or routes the lead to your CRM with call context captured. It operates without a human on the line and runs at any hour without staffing.',
    },
    {
      q: 'What is the difference between an AI voicebot and a phone tree or IVR?',
      a: 'A phone tree or IVR routes calls based on button presses: press 1 for scheduling, press 2 for billing. An AI voicebot conducts a real conversation. The caller speaks naturally and the voicebot understands what they said, asks follow-up questions, and responds appropriately. There are no menus to navigate and no requirement for the caller to adapt to the system.',
    },
    {
      q: 'Will callers know they are talking to an AI?',
      a: 'The voicebot is configured to be professional and clear. Whether it identifies itself as automated depends on your preference and any applicable regulations in your area. We walk through that during setup. The goal is a smooth, useful experience that handles the caller well, not one that tries to pass as human.',
    },
    {
      q: 'What happens if the voicebot cannot handle the call?',
      a: 'We configure escalation paths for calls outside the standard flow: complaints, complex situations, existing job issues. The voicebot acknowledges it cannot handle the request and either transfers to a human in real time or collects the caller information and triggers a callback. There are no dead ends where a caller gets stuck and hangs up.',
    },
    {
      q: 'Does it work for emergency or same-day service calls?',
      a: 'Yes. We build urgency-detection into the flow so the voicebot can recognize when a caller has an emergency or same-day need and respond accordingly: booking a same-day slot if your calendar has one available, or routing to a human immediately if the situation warrants it.',
    },
    {
      q: 'How does the voicebot connect to my calendar and CRM?',
      a: 'We integrate with your existing booking and CRM tools during setup. When a call ends with a qualified lead, the appointment is created in your calendar and the CRM record is populated automatically with the call details. No manual entry and no separate inbox to check.',
    },
    {
      q: 'What is the difference between an AI voicebot and a missed-call text-back?',
      a: 'A missed-call text-back fires an SMS after a call goes unanswered. It is fast and effective for recapturing leads who are willing to switch to text. An AI voicebot answers the call before it becomes a missed call. The voicebot is the voice channel; the text-back is the recovery layer when a call still slips through. Both can run together as part of the same system.',
    },
    {
      q: 'How long does it take to set up an AI voicebot?',
      a: 'A single-flow voicebot covering new service inquiries and appointment booking can be live in one to two weeks. Multi-flow setups covering different call types, urgency routing, and deeper CRM integration take two to four weeks depending on what tools are already in place. We scope the timeline during the discovery call.',
    },
    {
      q: 'How does an AI voicebot connect to the rest of my business system?',
      a: 'The voicebot is the inbound voice layer of your lead capture system. When it qualifies a caller, it feeds into the same CRM, calendar, and follow-up automation that handles leads from your website and other sources. A lead captured by phone goes through the same pipeline as a lead captured by form or chat. The channel is different; the system they enter is the same.',
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
