import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'ai-chatbots',
  hubName:     'Hospitality & Events',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Restaurants and Event Venues',
  metaDescription: 'Hospitality runs on response speed. An AI chatbot captures reservations, qualifies event inquiries, and handles guest questions 24/7 — in your voice.',

  eyebrow: 'Hospitality & Events · AI Chatbots',

  headline:
    'In hospitality, the first to respond wins the table and the booking — an AI chatbot makes sure that is always you',

  subheadline:
    'A couple messages three venues on a Sunday evening to ask about availability for their wedding. A family of eight texts two restaurants about a reservation for Saturday night. Whichever business responds first is the one they book. An AI chatbot built for hospitality answers immediately — at any hour, across every channel — so the inquiry never goes unanswered while your team is running the floor.',

  heroHighlights: [
    '24/7 reservation and inquiry handling — restaurant bookings, event inquiries, and guest questions answered instantly',
    'Event lead qualification built into the conversation — captures event date, guest count, occasion type, and budget before your team makes first contact',
    'Tour and consultation scheduling for venues and planners booked directly from the chat',
    'Qualified leads and reservation details routed into your CRM and calendar with full context attached',
  ],

  definitionHeadline:
    'What an AI chatbot does for a restaurant, venue, or hospitality business',

  definition:
    'An AI chatbot for a hospitality or events business is a conversational layer on your website and messaging channels that responds to every inquiry the moment it arrives — reservation requests, menu questions, private event inquiries, venue tour requests, catering quotes, and guest questions about hours, policies, and availability. For restaurants, it captures bookings, answers questions about dietary options and private dining, and routes high-value catering inquiries to your team as qualified leads. For event venues and wedding planners, it qualifies every couple or corporate planner by event date, guest count, and budget, and schedules tours or consultations directly on your calendar while your team is running an event on the floor. The inquiry that arrives at 10pm on a Saturday does not wait until Monday. It gets answered, qualified, and converted before your competitors even see it.',

  problemHeadline:
    'Where hospitality and events businesses lose bookings they never knew were available',

  problems: [
    'A couple messages your venue on a Sunday evening asking about availability for their wedding. Your inbox is closed. By Monday morning they have already toured two other venues and put a hold on a date. You never knew they were looking.',
    'A corporate event planner is gathering quotes for a 50-person catering order. She messages three restaurants. The first to reply with pricing and availability gets the business. The other two reply the next day. She has already signed a contract.',
    'Your restaurant gets a reservation inquiry at 9pm through Instagram. Your host team is in the weeds with a full Saturday service. The message sits unanswered. The party books the next restaurant that responded in under a minute.',
    'Your team answers the same questions on every shift — hours, parking, dietary options, private dining minimums, cancellation policy. Every minute spent on routine questions is a minute not spent on the guests already seated in front of them.',
  ],

  steps: [
    {
      label: 'A visitor inquires and the chatbot responds in seconds',
      body: 'Whether it is a restaurant reservation request at 9pm, a venue availability question on a Sunday, or a catering inquiry on a holiday weekend — the chatbot answers immediately, across every channel your guests already use.',
    },
    {
      label: 'The inquiry gets qualified inside the conversation',
      body: 'For event and venue inquiries, the chatbot collects event date, guest count, occasion type, and budget range before your team is ever involved. For restaurant reservations, it captures party size, date, time, and any special requests and confirms availability on the spot.',
    },
    {
      label: 'Tours, consultations, and reservations book directly from chat',
      body: 'Couples book venue tours. Diners confirm reservations. Corporate planners schedule tastings. The chatbot connects to your calendar, shows available slots, and locks in the booking — with the full qualification details attached — before the visitor moves on to a competitor.',
    },
    {
      label: 'Every booking and lead enters your system automatically',
      body: 'Confirmed reservations and qualified event leads flow into the same CRM and calendar your team already uses. Event date, guest count, budget, occasion type, and conversation summary arrive with the lead — so your coordinator or host team has full context before making first contact.',
    },
  ],

  features: [
    '24/7 reservation and inquiry handling — no guest or planner goes unanswered outside service hours',
    'Event lead qualification built into the conversation — event date, guest count, occasion type, and budget captured before first contact',
    'Tour and consultation scheduling for venues and planners booked directly from the chat',
    'Catering inquiry intake — structured lead qualification so your coordinator receives a proposal-ready brief, not a vague contact form',
    'CRM and calendar integration — every reservation and event lead arrives with full context attached',
    'Consistent qualification logic — the same questions asked in the same order for every visitor across every channel',
    'Human handoff with full context — your coordinator or host team steps in already briefed, not starting from scratch',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
    'ai-review-responses',
  ],

  faqs: [
    {
      q: 'Can an AI chatbot handle restaurant reservations automatically?',
      a: 'Yes. The chatbot collects party size, date, time, and any special requests directly in the conversation, confirms availability based on your calendar, and sends a booking confirmation — without your host team picking up a phone or checking an inbox. For private dining and large group reservations, it captures the inquiry details and routes them to your events coordinator as a qualified lead with the full conversation context attached.',
    },
    {
      q: 'How does a chatbot qualify event venue and wedding inquiries?',
      a: 'The chatbot opens a conversation with every visitor who asks about event availability and collects the details your team needs before a first call: event date, approximate guest count, occasion type, budget range, and what they are looking for in a venue. Couples and corporate planners who are a good fit get routed to your calendar to schedule a tour or consultation. Your coordinator\'s first conversation starts with full context rather than basic discovery questions.',
    },
    {
      q: 'What happens to inquiries that come in after hours or during a busy event weekend?',
      a: 'They get the same response as an inquiry that arrives on a quiet Tuesday morning. The chatbot engages immediately, answers questions about availability, pricing, and your process, and can book a tour or reservation directly on your calendar. Evening and weekend inquiries — which are peak research hours for couples planning weddings and guests looking for Saturday dinner reservations — are captured and converted instead of bouncing to a faster competitor.',
    },
    {
      q: 'Can a chatbot handle catering inquiries as well as restaurant reservations?',
      a: 'Yes, and the flows are distinct. For a catering inquiry, the chatbot asks the qualification questions your catering coordinator would ask — event date, guest count, service style, dietary considerations, and budget range. By the time your coordinator sees the inquiry, it arrives as a structured lead with everything needed to send a proposal, rather than a vague contact form submission requiring a round of phone tag to gather basic details.',
    },
    {
      q: 'How does the chatbot connect to the rest of the system — calendar, CRM, and follow-up?',
      a: 'The chatbot is the intake layer. Every reservation it confirms and every event lead it qualifies flows into the same calendar and CRM your team already uses. Reservation details, event qualification data, guest count, date, and conversation summary are all attached. From there, the same confirmation sequences, reminder messages, and post-event review requests your system sends to every other booking apply automatically. The channel is different — the system the guest or lead enters is the same.',
    },
  ],

  ctaHeadline: 'See what your website is missing after hours',

  ctaBody:
    'We review your current inquiry and reservation flow, show you where evening and weekend visitors are dropping off, and walk you through what a chatbot built for your hospitality business would look like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Hospitality & Events', url: '/industries/hospitality-events' },
            { name: 'AI Chatbots',          url: '/industries/hospitality-events/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/ai-chatbots',
            name:        'AI Chatbots for Restaurants and Event Venues',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
