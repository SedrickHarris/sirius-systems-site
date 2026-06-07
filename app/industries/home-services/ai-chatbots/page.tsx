import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'home-services',
  serviceSlug: 'ai-chatbots',
  hubName:     'Home Services',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Home Service Businesses',
  metaDescription: 'Home service websites lose leads after hours. An AI chatbot qualifies visitors, answers service questions, and books appointments 24/7 — in your voice.',

  eyebrow: 'Home Services · AI Chatbots',

  headline:
    'Your website gets visitors at 9pm — an AI chatbot makes sure they book instead of leaving',

  subheadline:
    'A homeowner lands on your site after hours with a question about your service. No one answers. They close the tab and book your competitor. A chatbot built for home services stops that from happening.',

  heroHighlights: [
    '24/7 lead qualification — answers questions and qualifies visitors at any hour',
    'Appointment booking directly from the chat conversation',
    'Built around your trade, your services, and your service area',
    'Qualified leads routed straight to your CRM and calendar',
  ],

  definitionHeadline:
    'What an AI chatbot actually does for a home service business',

  definition:
    'An AI chatbot for a home service business is a conversational widget on your website that qualifies visitors, answers questions about your services and availability, and books appointments without a human on the other end. It runs at any hour in your business voice and routes qualified leads directly into your CRM and calendar — so a visitor who lands on your site at 9pm on a Tuesday can become a confirmed appointment before your team starts work the next morning.',

  problemHeadline:
    'Where home service websites lose leads they already paid to attract',

  problems: [
    'A homeowner lands on your site at 9pm with a question about pricing or availability. No one answers. They close the tab and book the competitor whose chatbot responded in ten seconds.',
    'Your team fields the same five questions every day — service area, rough pricing, what to expect. That time comes out of billable work, and the answers are identical every time.',
    'Leads from your contact form sit in an inbox until someone checks it. By the time a response goes out, the lead has already made a decision elsewhere.',
    'You have no way to qualify and capture website traffic outside business hours. Evening and weekend visitors — often the highest-intent ones — convert at a fraction of what they should.',
  ],

  howItWorksHeadline: 'How an AI chatbot works for home services',

  steps: [
    {
      label: 'Build the knowledge base from your real conversations',
      body:  'We start with the questions your business actually receives — by phone, form, and email. The chatbot is trained on those real inputs, not generic scripts. If your customers ask about service area, availability, and rough pricing, those are the first things the bot handles accurately.',
    },
    {
      label: 'Configure qualification logic for your trade',
      body:  'We set the qualification questions based on what your team needs to know before accepting a job. For a plumber, that might be the issue type, property address, and urgency level. For an HVAC company, it might include system age and whether the unit is heating or cooling. The flow is built around your specific job types.',
    },
    {
      label: 'Connect to your CRM and booking flow',
      body:  'When a visitor qualifies, the chatbot routes the lead into your CRM, triggers your follow-up sequence, and optionally books the appointment directly into your calendar. No manual handoff. No leads sitting in a separate chat inbox your team has to monitor.',
    },
    {
      label: 'Monitor conversations and sharpen over time',
      body:  'We review early interactions to find gaps — questions the initial build did not anticipate, edge cases that need better handling. The bot gets more accurate as real conversations surface what visitors actually ask.',
    },
  ],

  featuresHeadline: 'What the chatbot covers',

  features: [
    '24/7 availability: qualifies and responds to visitors at any hour',
    'Trade-specific knowledge: trained on your services, area, and common questions',
    'Lead qualification: asks the right questions before routing to your team',
    'Appointment booking: connects to your calendar and confirms the slot in chat',
    'CRM integration: qualified leads enter your pipeline automatically',
    'Follow-up trigger: booking confirmation fires the right sequence in your CRM',
    'Escalation handling: routes urgent or complex inquiries to a human',
    'Conversation logging: every chat captured so nothing requires manual transcription',
  ],

  relatedServiceSlugs: [
    'ai-voicebots',
    'appointment-booking-automation',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does an AI chatbot do for a home service business?',
      a: 'It qualifies website visitors, answers questions about your services and availability, and books appointments without a human on the other end. It runs at any hour in your business voice and routes qualified leads directly to your CRM and calendar — so a visitor who lands on your site after hours can become a confirmed appointment before your team starts work the next morning.',
    },
    {
      q: 'How does a chatbot qualify leads for a home service business?',
      a: 'The qualification flow is configured around what your team needs to know before accepting a job. For most home service businesses that means the type of service needed, the property address or service area, urgency level, and contact details. The chatbot asks those questions in a natural conversation and routes the lead with that context attached — so your team is not starting from scratch when they follow up.',
    },
    {
      q: 'Is an AI chatbot different from a contact form?',
      a: 'A contact form is passive — it collects information and stops. An AI chatbot is an active conversation that qualifies the lead in real time, answers objections, and can book an appointment before the visitor leaves the page. A form creates a task for your team to action later. A chatbot completes part of the sales process before your team is ever involved.',
    },
    {
      q: 'Can a chatbot actually book jobs for a plumber, HVAC company, or roofer?',
      a: 'Yes, when connected to your calendar. The chatbot pulls live availability and lets the visitor select a slot during the conversation. Once confirmed, the booking lands in your calendar and CRM with the job details captured. Your team receives a notification with everything they need before the appointment.',
    },
    {
      q: 'How does an AI chatbot connect to the rest of the growth system?',
      a: 'The chatbot is the website lead capture layer. It feeds qualified leads into the same CRM and booking flow that handles leads from every other source. A visitor who chats through their service need and books gets the same confirmation sequence, reminder messages, and post-job review request as a lead who came in by phone. The channel is different — the system they enter is the same.',
    },
  ],

  ctaHeadline:     'See what your website should be capturing after hours',
  ctaBody:         'We review your current website lead flow, identify where evening and weekend visitors are dropping off, and show you what a chatbot built for your trade would look like. No pressure. No invented results.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/home-services/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/home-services/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HomeServicesAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/home-services/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',          url: '/' },
            { name: 'Industries',   url: '/industries' },
            { name: 'Home Services', url: '/industries/home-services' },
            { name: 'AI Chatbots',   url: '/industries/home-services/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/home-services/ai-chatbots',
            name:        'AI Chatbots',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
