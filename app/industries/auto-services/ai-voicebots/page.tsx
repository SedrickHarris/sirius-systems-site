import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'ai-voicebots',
  hubName:     'Auto Services',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for Auto Repair & Service Shops',
  metaDescription: 'Auto shops lose jobs every time a call hits voicemail. An AI voicebot answers every call, captures vehicle details, and books service appointments — 24/7.',

  eyebrow: 'Auto Services · AI Voicebots',

  headline:
    'The phone rings while your tech is under a hood — an AI voicebot makes sure that call does not become your competitor\'s job',

  subheadline:
    'A driver calls your shop with a brake issue, a check engine light, or a tire rotation request. Your team is mid-repair, on a test drive, or writing up a ticket at the counter. The call hits voicemail. They hang up without leaving a message and book the shop that answered. An AI voicebot trained on your services picks up every call, collects the vehicle details your team needs, and books the appointment before that driver moves on.',

  heroHighlights: [
    '24/7 call coverage — answers every call during busy bays, after hours, and on weekends',
    'Vehicle details captured on the call — make, model, year, and service need collected before handoff',
    'Service appointment booking directly from the conversation — confirmed before the caller hangs up',
    'Qualified call records routed to your team with full conversation context attached',
  ],

  definitionHeadline:
    'What an AI voicebot does for an auto service business',

  definition:
    'An AI voicebot for an auto service business is a voice agent that answers every inbound call in natural conversation, collects the caller\'s vehicle details and service need, and either books a service appointment directly or routes the lead to your team with a complete call summary — without requiring a service advisor or front desk staff member to be available. It runs in your shop\'s voice at any hour and any call volume, so no inquiry goes to voicemail because your team was otherwise occupied under a hood or at the counter.',

  problemHeadline:
    'Where auto shops lose jobs they already had coming in',

  problems: [
    'Your techs are mid-repair and the phone rings. The service advisor is writing up a ticket. Nobody gets to it in time and the call drops to voicemail. The driver does not leave a message — they call the shop down the street. You find out when your bay count is short at the end of the day.',
    'Calls come in after closing and on weekends from drivers dealing with check engine lights, flat tires, and brake noise. Those callers are not waiting until Monday morning. The shop that answers at 7pm Saturday books the job. Your voicemail does not.',
    '"Is my car ready?" calls and routine service availability questions pull your advisors off the counter repeatedly throughout the day. Every interruption costs shop throughput, and the answers to most of those calls are identical every time.',
    'Your shop does great work but drivers cannot tell that from a voicemail box. The shop with better responsiveness — not better mechanics — gets the first-time caller who found both of you on Google.',
  ],

  howItWorksHeadline:
    'How an AI voicebot works for an auto service shop',

  steps: [
    {
      label: 'Trained on your shop',
      body: 'We configure the voicebot on the specifics of your operation — your shop name, your service menu, your hours, your pricing language for routine jobs, and how you want new service calls handled. For specialty shops — tire shops, body shops, detailers — it is configured around your specific service types and intake needs.',
    },
    {
      label: 'Answers every inbound call',
      body: 'When a driver calls, the voicebot picks up immediately in your shop\'s voice and handles the conversation naturally. It identifies whether the caller needs to book a service, wants a status update, is asking about hours or pricing, or has an urgent breakdown situation that needs immediate escalation.',
    },
    {
      label: 'Captures vehicle and service details',
      body: 'For new service bookings, the voicebot collects the vehicle make, model, year, and the nature of the issue or service needed — the information your team requires to prepare the bay and the right technician. Everything is captured in a structured record, not a voicemail transcript your advisor has to decode.',
    },
    {
      label: 'Books the appointment or routes the call',
      body: 'If the service is schedulable, the voicebot confirms the appointment directly into your calendar before the call ends. If the situation requires human judgment — a complex diagnostic, an insurance question, a breakdown — it routes immediately with the full call summary so your team has context before they follow up.',
    },
  ],

  featuresHeadline:
    'What the voicebot handles for your shop',

  features: [
    '24/7 inbound call answering — no missed calls during busy bays, peak periods, evenings, or weekends',
    'Natural voice conversation — no phone tree, no hold music, no robotic prompt sequences',
    'Vehicle intake — make, model, year, and service description captured before the call ends',
    'Service appointment booking — confirmed directly into your calendar from the conversation',
    'Status update handling — "is my car ready?" calls answered without pulling advisors off the floor',
    'Urgent call escalation — breakdowns and emergency requests routed to a human immediately',
    'After-hours and overflow coverage — handles calls when your team is unavailable or at capacity',
    'Call summary routing — every call record delivered to your team with full context before follow-up',
  ],

  relatedServiceSlugs: [
    'ai-automation',
    'appointment-booking-automation',
    'reputation-management',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is an AI voicebot for an auto repair shop?',
      a: 'An AI voicebot for an auto repair shop is a voice agent that answers every inbound call, collects the caller\'s vehicle details and service need, and either books a service appointment or routes the inquiry to your team with a complete call summary — without requiring a service advisor or front desk staff to be available. It runs in your shop\'s voice at any hour so no call goes to voicemail because your team was mid-repair or at the counter.',
    },
    {
      q: 'Can an AI voicebot book service appointments for my auto shop?',
      a: 'Yes. When a caller is ready to schedule a service, the voicebot confirms the appointment directly into your calendar before the call ends — collecting the vehicle details, service type, and preferred time in the same conversation. The caller gets a confirmed booking. Your team gets a structured record with everything they need to prepare the bay, without a manual follow-up call to close the loop.',
    },
    {
      q: 'What types of auto shop calls can an AI voicebot handle?',
      a: 'The voicebot handles the high-volume routine calls that consume your team\'s time: new service bookings, hours and availability questions, pricing inquiries on common jobs like oil changes and tire rotations, and repair status updates. For calls that require human judgment — complex diagnostics, insurance coordination, breakdown emergencies — it escalates immediately with the full conversation context so your team picks up with everything already captured.',
    },
    {
      q: 'How does an AI voicebot handle after-hours calls and breakdowns?',
      a: 'After-hours calls are answered immediately in your shop\'s voice rather than reaching voicemail. For routine after-hours inquiries, the voicebot books the appointment or collects the caller\'s details for a next-morning follow-up. For breakdown or urgent situations, it is configured to collect the vehicle details and urgency level and route the record to whoever handles your after-hours emergencies — so the caller gets an immediate response and your team has the information they need.',
    },
    {
      q: 'Does an AI voicebot replace my service advisor or front desk?',
      a: 'No. The voicebot handles the calls that would otherwise go to voicemail — calls that come in when your advisor is writing up a ticket, when your tech is mid-repair, when the shop is closed, and during high-volume periods when the phone rings faster than your team can answer it. Your service advisors stay focused on the customers in front of them and the jobs in the bays. The voicebot closes the gap between every call that comes in and every call your team can realistically answer.',
    },
  ],

  ctaHeadline: 'Book a 20-minute walkthrough for your shop',

  ctaBody:
    'We will show you exactly how an AI voicebot would handle inbound calls for your specific operation — the service questions it would answer, how it would handle after-hours calls, and how booked appointments reach your calendar. No obligation.',

  ctaPrimaryLabel: 'Book the walkthrough',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',          url: '/' },
            { name: 'Industries',    url: '/industries' },
            { name: 'Auto Services', url: '/industries/auto-services' },
            { name: 'AI Voicebots',  url: '/industries/auto-services/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/ai-voicebots',
            name:        'AI Voicebots for Auto Repair & Service Shops',
            description: 'AI voicebot configured for auto repair shops, tire shops, detailers, and body shops — answers every inbound call, captures vehicle details, books service appointments, and routes urgent calls without a service advisor on the line.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
