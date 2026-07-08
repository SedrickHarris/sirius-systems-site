import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'ai-chatbots',
  hubName:     'Real Estate & Property Services',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Real Estate Agents & Property Managers',
  metaDescription: 'Real estate runs on speed. An AI chatbot qualifies buyers, books showings, and handles tenant inquiries 24/7 — so the first response is always yours.',

  eyebrow: 'Real Estate & Property Services · AI Chatbots',

  headline:
    'In real estate, the first to respond usually wins — an AI chatbot makes sure that is always you',

  subheadline:
    'A buyer researching listings at 9pm has a question about a property. Your contact form takes it. Nothing happens until morning. By then two other agents have already responded and one has a showing scheduled. An AI chatbot built for real estate closes that gap before the visitor ever leaves your site.',

  heroHighlights: [
    '24/7 lead capture and qualification — collects budget, timeline, and pre-approval status in the conversation',
    'Showing and consultation scheduling booked directly from the chat, no back-and-forth required',
    'Tenant inquiry handling for property managers — maintenance intake, lease questions, availability, and leasing follow-up',
    'Qualified leads routed into your CRM with full context before your team makes first contact',
  ],

  definitionHeadline:
    'What an AI chatbot does for a real estate business',

  definition:
    'An AI chatbot for a real estate business is a conversational layer on your website that engages every visitor the moment they arrive, qualifies buyer and seller leads by asking about budget, timeline, pre-approval status, and property type, and schedules showings or consultations directly on your calendar — without a human involved. For property management companies, the same system handles tenant inquiries around the clock: maintenance request intake, lease questions, rent payment questions, and availability for prospective tenants. The lead or inquiry that arrives at 10pm on a Sunday does not wait until Monday. It gets an immediate response, gets qualified or triaged, and arrives in your CRM with full context before your team ever opens their inbox.',

  problemHeadline:
    'Where real estate websites lose leads and property managers lose tenants',

  problems: [
    'A buyer lands on your listing page at 9pm with a question about the property. Your contact form takes the submission. Nothing happens until morning. By the time your team responds, the buyer has already toured with a competitor who answered in ten minutes.',
    'Your contact form captures a name and a one-line message. No budget. No timeline. No pre-approval status. Your agent\'s first call is a cold discovery call — and by then the lead\'s motivation has already cooled.',
    'A prospective tenant finds your available unit on a listing site at 7pm and wants to schedule a showing. No one responds until the next business day. They moved to the next property manager on the list within the hour.',
    'Your property management team fields the same tenant questions all day — rent due dates, maintenance request status, lease terms, pet policies. That volume consumes staff time that should go to work that requires human judgment.',
  ],

  steps: [
    {
      label: 'Visitor arrives and the chatbot engages immediately',
      body: 'The moment a buyer, seller, or prospective tenant lands on your site, the chatbot opens a conversation — at any hour, on any day. No form, no waiting room, no missed inquiry while your team is at a showing.',
    },
    {
      label: 'Qualification happens inside the conversation',
      body: 'The chatbot asks about budget, purchase or rental timeline, property type, and pre-approval status — conversationally, one question at a time. By the end of the exchange it has a structured lead profile your team can act on immediately.',
    },
    {
      label: 'Showings and consultations book directly from chat',
      body: 'Hot leads get routed to your calendar in real time. The chatbot pulls available slots, the buyer or tenant selects a time, and the appointment is confirmed — with the full qualification summary attached — before the visitor leaves the page.',
    },
    {
      label: 'The lead enters your CRM and follow-up system automatically',
      body: 'Every qualified lead flows into the same CRM your team uses for every other source. Budget, timeline, property interest, pre-approval status, and conversation summary are all attached. Your follow-up sequences trigger automatically from there.',
    },
  ],

  features: [
    '24/7 buyer and seller lead capture — no inquiry goes unanswered outside business hours',
    'Conversational qualification — budget, timeline, pre-approval status, and property type collected before first agent contact',
    'Showing and consultation scheduling booked directly from the chat conversation',
    'Tenant inquiry handling for property managers — maintenance intake, availability questions, and leasing follow-up',
    'CRM integration — every lead arrives with full context, not just a name and an email',
    'Consistent qualification logic — the same questions asked in the same order for every visitor, every time',
    'Human handoff with full context — your agent\'s first call is a warm conversation, not a cold discovery call',
  ],

  relatedServiceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'appointment-booking-automation',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'Can an AI chatbot actually qualify real estate leads on its own?',
      a: 'Yes. A chatbot built for real estate asks qualification questions conversationally — budget range, purchase or rental timeline, property type, pre-approval status, and whether the prospect is working with another agent. It scores the responses and routes hot leads to your team immediately, with the full conversation context attached. Your agent\'s first touch is a warm handoff, not a cold call to gather basic information.',
    },
    {
      q: 'What happens to leads that come in after hours or on weekends?',
      a: 'They get the same experience as a lead that arrives at noon on a Tuesday. The chatbot engages the visitor immediately, asks qualification questions, answers questions about the property or your process, and can book a showing or consultation directly on the agent\'s calendar. The lead arrives in your CRM with full context before your team starts the next business day. No inquiry waits, no visitor bounces because no one responded.',
    },
    {
      q: 'How is an AI chatbot different from the contact form already on my website?',
      a: 'A contact form collects a name, an email, and a one-line message — then waits for a human to respond hours later. A chatbot starts a live conversation the moment the visitor arrives, answers their questions, collects qualification data, and can book the showing before they leave the page. Contact forms convert roughly 1 to 3 visitors per 100. A chatbot engages the conversation instead of waiting for the visitor to decide to reach out.',
    },
    {
      q: 'Can a chatbot handle property management tenant inquiries as well as buyer leads?',
      a: 'Yes, and the use case is distinct. For property management companies, the chatbot handles the high-volume routine inquiry layer — maintenance request intake, lease term questions, rent payment questions, availability for prospective tenants, and leasing follow-up. This deflects the repetitive communication that consumes staff time, so your leasing coordinators focus on the work that requires judgment and relationship. The chatbot handles the volume; your team handles the complexity.',
    },
    {
      q: 'Will the chatbot schedule showings and appointments automatically?',
      a: 'Yes, when connected to your calendar. The chatbot pulls your available time slots and lets the buyer or prospective tenant select and confirm a showing directly in the conversation. Once booked, the appointment lands in your calendar and CRM with the lead\'s qualification details attached. Your team receives the notification with context — property interest, budget, timeline, and the full chat summary — before the showing takes place.',
    },
  ],

  ctaHeadline: 'Find out what your website is missing after hours',

  ctaBody:
    'We review your current website lead flow, show you where evening and weekend visitors are dropping off, and walk you through what a chatbot built for real estate would look like for your specific business. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'AI Chatbots',                     url: '/industries/real-estate-property/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/ai-chatbots',
            name:        'AI Chatbots for Real Estate & Property Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
