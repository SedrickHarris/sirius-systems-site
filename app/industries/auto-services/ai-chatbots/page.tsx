import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'ai-chatbots',
  hubName:     'Auto Services',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbot for Auto Shops and Auto Repair',
  metaDescription: 'Auto shops lose customers to whoever answers first. Our AI chatbot captures service requests, books appointments, and answers questions — while your techs work.',

  eyebrow: 'Auto Services · AI Chatbots',

  headline:
    'Auto shops lose customers to whoever answers first — your website should capture every inquiry',

  subheadline:
    'Your techs are in the bays. The phone rings and no one answers. The customer calls the next shop on the list and books there. An AI chatbot on your website captures that inquiry the moment it arrives — answering service questions, collecting vehicle details, and routing the customer toward a booking while your team keeps working.',

  heroHighlights: [
    '24/7 inquiry capture — service requests answered when your team is in the bays or closed',
    'Vehicle details and service type collected before your advisor makes contact',
    'Appointment booking initiated directly from the conversation',
    'Urgent situations escalated immediately — the chatbot captures the lead, your team handles the call',
  ],

  definitionHeadline:
    'What an AI chatbot does for an auto service business',

  definition:
    'An AI chatbot for an auto repair shop or auto service business is a conversational assistant on your website that answers common customer questions about your services, hours, and pricing range, captures service requests with vehicle details, and routes visitors into your appointment booking flow — around the clock, without a service advisor or front desk staff involved. It does not diagnose vehicle issues or generate repair estimates — those stay with your technicians — but it makes sure no customer who visits your website while your bays are full or your shop is closed leaves without a captured inquiry and a clear path to booking.',

  problemHeadline:
    'Where auto shops lose customers between the first question and the booked appointment',

  problems: [
    'A driver searches for a brake shop on their lunch break, visits your website, and has a quick question about whether you handle their vehicle make. There is no one to respond in the moment. They find the answer on a competitor\'s site that has a chatbot and book there before they finish their sandwich.',
    'Your team is mid-job on a full bay of cars. The website gets inquiries. The phone rings. Nobody answers. The customers who needed a same-week appointment have already moved on by the time your service advisor surfaces from the floor — and you have no record the inquiry ever came in.',
    'Evening and weekend traffic on your website converts at a fraction of what it should because your inquiry process requires business hours. A customer deciding on Friday night where to take their car Monday morning picks the shop that acknowledged them first, not the shop with the best reviews that did not respond until Monday morning.',
    'Your website has a contact form but no immediate response. A customer in a non-urgent situation — looking to schedule an oil change, a tire rotation, or an inspection — submits the form and moves on. By morning they have already booked at a shop with a self-booking link, and you have a form submission you will never convert.',
  ],

  howItWorksHeadline:
    'How the chatbot works on your shop\'s website',

  steps: [
    {
      label: 'Customer visits and inquiry opens',
      body: 'A visitor lands on your website — from a Google search, your Google Business Profile, or a direct link — and the chatbot opens a conversation in your shop\'s voice. It answers questions about your services, hours, and pricing range immediately, giving the customer a reason to stay and engage.',
    },
    {
      label: 'Service request captured with vehicle details',
      body: 'The chatbot collects the customer\'s vehicle year, make, and model, what they are experiencing or what service they need, and the best way to reach them. Your service advisor receives a pre-populated inquiry with context — not a blank name and phone number.',
    },
    {
      label: 'Appointment booked or handoff created',
      body: 'A customer ready to book is routed directly into your available appointment slots and receives a confirmation. A customer with an urgent or complex situation is escalated to your team immediately with the full conversation and vehicle details attached.',
    },
    {
      label: 'Lead delivered to your CRM with full context',
      body: 'Every completed conversation routes into your CRM or service management workflow — vehicle details, service type, preferred time, and conversation summary. Your team starts the day with qualified leads ready to action, not a pile of missed calls and voicemails.',
    },
  ],

  featuresHeadline:
    'What the chatbot includes for auto service businesses',

  features: [
    '24/7 availability — service inquiries captured when the bays are full and after closing',
    'Shop-voice configuration — answers reflect your services, vehicle types, hours, and tone',
    'Common question handling — services offered, hours, pricing range, booking process',
    'Vehicle detail capture — year, make, model, described symptoms, and contact information collected',
    'Appointment scheduling from the conversation — customers routed into available slots directly',
    'CRM handoff with full context — your advisor follows up with everything already in view',
    'Urgent situation escalation — breakdowns and no-starts routed to direct contact immediately',
    'Complementary to your phone layer — the website and messaging channel that pairs with your voice system',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'ai-voicebots',
    'appointment-booking-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What can an AI chatbot handle for an auto repair shop?',
      a: 'The chatbot answers the questions your team fields every day without stopping work — hours, services offered, pricing range, whether you handle a specific job type, and how to book. It captures the customer\'s name, vehicle year, make, and model, what they are experiencing, and their preferred service time. Every inquiry is logged and routed to your service advisor with that information already collected. It does not diagnose faults or provide repair estimates — that stays with your team. Its job is to make sure no one who visits your website after hours or mid-day while your bays are full leaves without some form of engagement and a path to booking.',
    },
    {
      q: 'How does an AI chatbot book service appointments without staff involvement?',
      a: 'When connected to your booking flow, the chatbot presents available appointment slots, the customer selects one, and the confirmation goes out automatically — no call back, no back-and-forth. For shops that prefer the service advisor to confirm appointments before they are locked in, the chatbot collects the service request and preferred time and flags it for same-day follow-up, so your team contacts a warm, pre-qualified lead rather than a cold inquiry with no context. Either way, the information is captured the moment the customer is ready to act, not the next morning when they may have already moved on.',
    },
    {
      q: 'Can a chatbot answer questions about pricing and services without giving repair estimates?',
      a: 'Yes — and that boundary is built into the configuration from the start. The chatbot is trained on your shop\'s actual service menu and pricing ranges where you choose to share them, so it can answer questions like what an oil change costs or whether you handle transmission work. It does not assess vehicle fault severity, provide diagnosis, or generate specific repair quotes — those conversations require a technician and a visual inspection. What it does is move a customer from a general question to a specific service request and an appointment, so your service advisor starts the conversation with context rather than from zero.',
    },
    {
      q: 'What happens when a customer\'s situation is urgent — a breakdown, a car that won\'t start, or a vehicle that needs a tow?',
      a: 'The chatbot is configured with an escalation path for urgent situations. A customer who describes a breakdown, a no-start, or an immediate safety concern gets routed to a direct contact method — phone number, emergency line, or a flagged alert to your team — rather than being held in the chat flow. Urgent situations are not handled by the chatbot beyond capturing the customer\'s contact information and vehicle details and getting that information in front of your team immediately. The chatbot captures the lead; your team handles the response.',
    },
    {
      q: 'Does an AI chatbot work for a small independent shop or just large chains?',
      a: 'Small independent shops are often the better fit. A single-location repair shop or mobile mechanic with no dedicated front desk has no one to absorb after-hours inquiries or handle the website traffic that arrives while the team is in the bays. Every customer who visits the website at 8 PM looking for a brake check and finds only a contact form may not still be available when you open the next morning. The chatbot closes that window without adding staff or changing how your shop operates. It is configured to your specific services, your hours, and your shop\'s voice — not a generic template.',
    },
  ],

  ctaHeadline: 'Stop losing customers to whoever answers first',

  ctaBody:
    'We review your current website inquiry flow, identify where customers are dropping off while your team is in the bays, and show you what a chatbot configured for your specific shop type would look like. No obligation.',

  ctaPrimaryLabel: 'Get a Free Website Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',          url: '/' },
            { name: 'Industries',    url: '/industries' },
            { name: 'Auto Services', url: '/industries/auto-services' },
            { name: 'AI Chatbots',   url: '/industries/auto-services/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/ai-chatbots',
            name:        'AI Chatbots for Auto Service Businesses',
            description: 'Website chatbot for auto repair shops and auto service businesses that captures service requests, collects vehicle details, and routes customers into appointment booking — no diagnosis or repair estimates provided.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
