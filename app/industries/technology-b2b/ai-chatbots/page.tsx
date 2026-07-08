import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'ai-chatbots',
  hubName:     'Technology & B2B Services',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for IT Companies, MSPs, and B2B Firms',
  metaDescription: 'B2B buyers move fast and choose the first firm to respond. An AI chatbot qualifies leads, books discovery calls, and captures after-hours inquiries 24/7.',

  eyebrow: 'Technology & B2B Services · AI Chatbots',

  headline:
    'B2B buyers choose the first firm to respond — an AI chatbot makes sure that is always you',

  subheadline:
    'A prospect visits your IT firm\'s website at 9pm comparing managed service providers. Your contact form takes the submission and nothing happens until morning. By then they have already scheduled discovery calls with two competitors who responded within minutes. An AI chatbot built for B2B technology firms closes that gap before the visitor leaves the page.',

  heroHighlights: [
    '24/7 lead capture and qualification — company size, use case, timeline, and decision-maker status collected in conversation',
    'Discovery call and demo scheduling booked directly from the chat — no back-and-forth email required',
    'After-hours coverage for IT firms and MSPs — 40% of B2B web traffic arrives outside business hours',
    'Qualified leads routed into your CRM with full context before your team makes first contact',
  ],

  definitionHeadline:
    'What an AI chatbot does for an IT company, MSP, or B2B technology firm',

  definition:
    'An AI chatbot for a B2B technology firm is a conversational layer on your website that engages every visitor the moment they arrive, qualifies inbound leads by asking about company size, use case, current challenges, and buying timeline, and books discovery calls or demos directly on your calendar — without a human involved. The lead that submits your contact form at 9pm and waits until morning is no longer competitive. A chatbot engages that visitor immediately, collects the qualification data your team needs, and delivers a warm, context-rich lead to your pipeline before your competitors finish their coffee.',

  problemHeadline:
    'Where IT firms and B2B technology companies lose qualified leads they already paid to attract',

  problems: [
    'A prospect compares three managed service providers on a Tuesday evening. Your contact form takes the inquiry. The other two have chatbots that responded in under a minute and booked discovery calls before midnight. You send a follow-up email Wednesday morning to a lead that has already made a decision.',
    'Your contact form delivers a name, an email, and a one-line message. No company size. No use case. No timeline. No indication of whether this person can sign a contract. Your first call is a cold discovery conversation — and by then their interest has already cooled.',
    'A SaaS company evaluating your services visits your pricing page at 2pm on a Friday and wants to book a demo before the weekend. Your team is unavailable. The visitor closes the tab. Your competitor\'s chatbot booked the demo in the same session.',
    'Your team fields the same pre-sales questions on every discovery call — what services you offer, your service area, your onboarding process, your contract terms. Those questions could be answered before the call, leaving the conversation time for the work that actually moves a deal forward.',
  ],

  steps: [
    {
      label: 'The visitor arrives and the chatbot engages immediately',
      body: 'The moment a prospect lands on your site — at any hour, on any day — the chatbot opens a conversation. No form to fill, no hold queue, no email to wait for. The visitor gets an immediate response while their interest is live.',
    },
    {
      label: 'Qualification happens inside the conversation',
      body: 'The chatbot asks about company size, current challenges, use case, buying timeline, and decision-maker status — one question at a time, in a natural exchange. By the end, it has the structured lead profile your team needs to prioritize the opportunity without a cold discovery call.',
    },
    {
      label: 'Discovery calls and demos book directly from chat',
      body: 'Qualified leads get routed to your calendar in real time. The chatbot presents available slots, the prospect confirms a time, and the booking lands in your calendar with the full qualification summary attached — before the visitor closes the tab.',
    },
    {
      label: 'The lead enters your CRM and pipeline automatically',
      body: 'Every qualified lead flows into the same CRM and pipeline your team already uses. Company size, use case, timeline, decision-maker status, and the complete conversation summary are all attached as structured data. Your follow-up sequences and lead scoring rules trigger from there.',
    },
  ],

  features: [
    '24/7 lead capture — no inquiry goes unanswered after hours, on weekends, or during busy delivery periods',
    'Conversational qualification — company size, use case, timeline, and decision-maker status collected before first human contact',
    'Discovery call and demo scheduling booked directly from the chat with full qualification context attached',
    'CRM integration — every lead arrives as a structured record, not a one-line contact form submission',
    'Pre-sales FAQ handling — your services, process, onboarding, and contract questions answered before the discovery call',
    'Consistent qualification logic — the same questions asked in the same order for every visitor, every time',
    'Human handoff with full context — your first conversation starts briefed, not cold',
  ],

  relatedServiceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'appointment-booking-automation',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'Can an AI chatbot qualify B2B leads on a technology company website?',
      a: 'Yes. A chatbot built for B2B qualification asks about company size, current challenges, what the prospect is looking to solve, their buying timeline, and whether they are the decision-maker — conversationally, not as a form. It scores the responses and routes qualified leads to your team immediately with a full context summary. Your first conversation starts with the qualification already done rather than beginning from scratch on a cold discovery call.',
    },
    {
      q: 'How does a chatbot handle after-hours inquiries for an IT firm or MSP?',
      a: 'It engages every visitor the moment they arrive, regardless of the hour. A prospect visiting your site at 9pm gets the same immediate response as one visiting at 10am on a Tuesday. The chatbot qualifies the inquiry, answers questions about your services and process, and can book a discovery call directly on your calendar. The lead arrives in your CRM with full context — company size, use case, timeline — before your team starts the next business day.',
    },
    {
      q: 'What is the difference between a chatbot and the contact form already on my website?',
      a: 'A contact form collects a name, an email, and a one-line message — then the lead waits hours or days for a response. A chatbot starts a live qualification conversation the moment the visitor arrives, collects the data your team actually needs to prioritize the lead, and can book the discovery call before the visitor leaves the page. The average B2B company takes 42 hours to respond to a form submission. A chatbot responds in seconds.',
    },
    {
      q: 'Can a chatbot book discovery calls and demos automatically?',
      a: 'Yes, when connected to your calendar. Once a visitor qualifies as a good fit during the conversation, the chatbot presents your available slots and the prospect selects and confirms a time directly in the chat. The booking lands in your calendar with the full qualification summary attached — company size, use case, timeline, and the complete conversation — so your team walks into the call already briefed.',
    },
    {
      q: 'How does a B2B chatbot connect to the CRM and pipeline?',
      a: 'The chatbot is the front-door intake layer. Every qualified lead it engages flows into the same CRM your team uses for every other lead source. Company size, use case, timeline, decision-maker status, and conversation summary are all attached as structured data. From there, your existing follow-up sequences, lead scoring rules, and pipeline stages apply automatically. The channel is different — the system the lead enters is the same.',
    },
  ],

  ctaHeadline: 'See what your website is losing after hours',

  ctaBody:
    'We review your current lead flow, show you where evening and weekend visitors are dropping off, and walk you through what a chatbot built for your technology firm would look like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2bAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'AI Chatbots',               url: '/industries/technology-b2b/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/ai-chatbots',
            name:        'AI Chatbots for IT Companies and B2B Firms',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
