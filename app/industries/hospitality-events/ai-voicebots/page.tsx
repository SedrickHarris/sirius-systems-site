import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'ai-voicebots',
  hubName:     'Hospitality & Events',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for Restaurants and Event Venues',
  metaDescription: 'Every unanswered call during a dinner rush or a Sunday evening is a booking lost to whoever picked up. An AI voicebot answers every call, 24/7.',

  eyebrow: 'Hospitality & Events · AI Voicebots',

  headline:
    'In hospitality, the call that goes unanswered during service is a booking that goes to whoever picked up',

  subheadline:
    'It is Friday at 7pm. Your host is managing a full dining room. The phone rings. No one can get to it. The caller does not leave a voicemail — they call the next restaurant on the list and book a table there. An AI voicebot answers every inbound call in your venue\'s voice, takes the reservation, answers the question, and qualifies the event inquiry — whether your team is on the floor, running an event, or closed for the evening.',

  heroHighlights: [
    '24/7 inbound call coverage — every reservation request, guest question, and event inquiry answered regardless of service volume',
    'Reservation intake by voice — party size, date, time, and special requests collected and confirmed on the call',
    'Event and venue inquiry qualification — event date, guest count, occasion type, and budget captured before your coordinator is ever involved',
    'Every call summary and booking routed to your CRM and calendar with full context attached',
  ],

  definitionHeadline:
    'What an AI voicebot does for a restaurant, venue, or events business',

  definition:
    'An AI voicebot for a hospitality or events business is a voice agent that answers every inbound call in a natural, conversational tone — taking reservations, answering guest questions about hours, dietary options, availability, and policy, and qualifying event inquiries by collecting event date, guest count, occasion type, and budget before routing to your team. For restaurants, it handles the call volume your floor staff cannot manage during service, taking reservations, answering menu and hours questions, and logging catering inquiries as structured leads. For event venues and wedding venues, it answers after-hours inquiries from couples and corporate planners, collects the qualification details your coordinator needs, and books tour and consultation appointments directly on your calendar. The call that arrives during the dinner rush, on a Sunday evening, or at 10pm when your team has gone home does not go to voicemail. It gets answered and handled.',

  problemHeadline:
    'Where hospitality and events businesses lose bookings they never see coming',

  problems: [
    'Your host team is managing a fully-booked Friday service when the phone rings with a reservation request for a party of ten next Saturday. No one gets to it. The caller hangs up after four rings and books the next restaurant that picked up immediately. You never know the call happened.',
    'A couple gets engaged on a Saturday night and spends the next two hours calling wedding venues. Your venue\'s phone rings at 9pm. The office is closed. They leave no voicemail — research consistently shows the majority of callers in this scenario simply move on — and book a tour with the venue that answered. The first to respond wins the booking.',
    'Your events coordinator is running an on-site corporate event when three separate calls come in about private dining availability and catering quotes. All three go to voicemail. Two of the callers do not leave messages. By Monday morning, at least one of them has committed to a competitor who called back the same day because their AI voicebot captured and logged the inquiry in real time.',
  ],

  howItWorksHeadline: 'How it works for your hospitality business',

  steps: [
    {
      label: 'Your phone line connects to the AI voicebot',
      body: 'The voicebot answers every inbound call — during service, after hours, during events, and on weekends. It greets every caller in your business\'s voice, identifies the purpose of the call, and responds naturally without phone trees, hold music, or the caller being asked to press anything.',
    },
    {
      label: 'The voicebot handles the call by type',
      body: 'For restaurant callers, it takes the reservation — collecting party size, date, time preference, and any special requests — and confirms availability. For guest questions about hours, menu, parking, or policy, it answers immediately. For catering and private dining inquiries, it collects the event details and logs a structured lead. For venue and wedding callers, it runs the qualification conversation — event date, guest count, occasion type, and budget — and routes the lead to your coordinator with all of that context attached.',
    },
    {
      label: 'Reservations are confirmed and tours are booked on the call',
      body: 'The voicebot accesses your reservation system and calendar, confirms availability, and locks in the booking before the caller hangs up. Restaurant reservations are confirmed in real time. Venue tour and consultation appointments are booked directly on your coordinator\'s calendar — no callback required, no follow-up email, no calendar ping-pong.',
    },
    {
      label: 'Every call, booking, and lead enters your system automatically',
      body: 'Confirmed reservations flow into your calendar and system with party size, date, time, and any special notes attached. Qualified event leads arrive in your CRM with the full call summary — event date, guest count, budget range, occasion type, and contact details — so your coordinator\'s first conversation is a warm follow-up, not a cold discovery call.',
    },
  ],

  featuresHeadline: 'What the voicebot handles for your team',

  features: [
    '24/7 inbound call answering — no call goes unanswered during service, events, evenings, or weekends',
    'Restaurant reservation intake — party size, date, time, and special requests collected and confirmed on the call',
    'Guest FAQ handling — hours, dietary options, parking, availability, and policy questions answered without staff involvement',
    'Catering and private dining inquiry intake — structured lead capture so your coordinator receives a proposal-ready brief, not a vague voicemail',
    'Venue and wedding inquiry qualification — event date, guest count, occasion type, and budget captured before your first coordinator touchpoint',
    'Tour and consultation booking for venues — appointments confirmed directly from the call, synced to your calendar',
    'CRM routing — every call summary, reservation, and event lead delivered with full context before your team follows up',
    'Concurrent call handling — multiple simultaneous inbound calls managed during peak service periods and new event launches',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
    'ai-review-responses',
  ],

  ctaHeadline: 'See how it would work for your restaurant or venue',

  ctaBody:
    'We walk through your current phone setup, show you where calls are going unanswered during service and after hours, and demonstrate what a voicebot built for your specific hospitality business would sound and feel like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the walkthrough',

  faqs: [
    {
      q: 'Can an AI voicebot take restaurant reservations automatically?',
      a: 'Yes. The voicebot answers the call, asks for party size, preferred date and time, and any special requests, confirms availability against your reservation system, and locks in the booking — all within the call, without staff involvement. For large group, private dining, and catering inquiries, it collects the details and routes a structured lead to your team rather than attempting to quote on the spot.',
    },
    {
      q: 'What happens to calls that come in during a dinner rush or when staff are on the floor?',
      a: 'The voicebot answers them immediately — the same way it answers a call at 11am on a Tuesday. Your floor team never needs to stop what they are doing. The caller gets an immediate, professional response, the reservation or inquiry is handled, and a call summary is logged. The guest experience on the floor is not interrupted by the phone.',
    },
    {
      q: 'How is an AI voicebot different from a traditional answering service for restaurants?',
      a: 'A traditional answering service takes a message and passes it on — which means your team still has to call back, gather the details, and confirm the booking manually. An AI voicebot completes the reservation, answers the question, or qualifies the catering inquiry fully within the original call. Nothing is passed to a human for completion unless the voicebot is configured to escalate specific call types. The caller is handled, not deferred.',
    },
    {
      q: 'Can an AI voicebot qualify wedding venue and event inquiries — not just restaurant calls?',
      a: 'Yes, and the conversation flows are configured separately by inquiry type. For a restaurant reservation, the voicebot asks for party size, date, and time. For a wedding venue inquiry, it asks about the event date, guest count, occasion type, and budget range, and books a tour directly on your coordinator\'s calendar. Catering and corporate event inquiries collect the details your team needs to prepare a proposal. Each call type is handled according to your business\'s specific workflow.',
    },
    {
      q: 'Will guests know they are talking to an AI — and does it affect their experience?',
      a: 'Modern AI voicebots are conversational and professional — they do not sound like the automated phone systems callers have been trained to route around. What matters to a guest calling for a reservation or a couple calling about a wedding venue is that someone answered and helped them immediately. The alternative — ringing out, reaching voicemail, or going on hold during a busy service — is the experience that actually damages guest trust and costs you the booking.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Hospitality & Events', url: '/industries/hospitality-events' },
            { name: 'AI Voicebots',         url: '/industries/hospitality-events/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/ai-voicebots',
            name:        'AI Voicebots for Hospitality & Events',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
