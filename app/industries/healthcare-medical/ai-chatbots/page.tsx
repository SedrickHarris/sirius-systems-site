import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'healthcare-medical',
  serviceSlug: 'ai-chatbots',
  hubName:     'Healthcare & Medical',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Medical Practices and Clinics',
  metaDescription: 'Medical websites lose new patient inquiries after hours. An AI chatbot answers questions, qualifies visitors, and books them — in your practice voice.',

  eyebrow:     'Healthcare · AI Chatbots',
  headline:    'Your medical practice website gets patient inquiries after hours — an AI chatbot makes sure they convert',
  subheadline: 'A prospective patient visits your site at 8pm with a question about your services, insurance, or availability. No one responds. They find another practice that does. A chatbot built for healthcare closes that gap.',

  heroHighlights: [
    'New patient inquiries captured and qualified 24 hours a day',
    'Answers common questions about services, providers, and availability — in your practice voice',
    'Appointment scheduling directly from the chat conversation',
    'Qualified leads routed into your CRM with contact details and visit reason captured',
  ],

  definitionHeadline: 'What an AI chatbot does for a medical practice',
  definition: 'An AI chatbot for a medical practice is a conversational assistant on your website that answers patient questions, qualifies new patient inquiries, and routes visitors into your scheduling flow — without a front desk team member present. It runs in your practice voice around the clock, captures the contact details and visit reason of every serious inquiry, and hands off to your team with context already collected, so no new patient opportunity goes unacknowledged because the office was closed.',

  problemHeadline: 'Where medical practice websites lose new patients before the first call',
  problems: [
    'A prospective patient finds your practice through Google, visits your website at 7pm, and has a question about whether you accept their insurance or take new patients. No one is there to answer. They move to the next result.',
    'Your website has a contact form but no immediate response. A new patient who submits a form at night waits until the next business day for a reply — and by then they have already scheduled with a practice that acknowledged them faster.',
    'Your front desk fields the same questions every day — hours, accepted insurance, whether you are taking new patients, what to bring to a first appointment. That time adds up and comes directly out of patient care capacity.',
    'After-hours and weekend traffic on your website converts at a fraction of its potential because there is no one available to answer a question or move a visitor toward scheduling when they are most ready to act.',
  ],

  howItWorksHeadline: 'How the chatbot works on your practice website',
  steps: [
    {
      label: 'Visitor greeted and qualified',
      body: 'A patient visits your website and the chatbot opens a conversation in your practice voice. It answers questions about services, availability, and what to expect — and identifies whether the visitor is a new or returning patient looking to schedule.',
    },
    {
      label: 'Inquiry captured or appointment booked',
      body: 'The chatbot collects the visitor\'s contact details and reason for visit. If connected to your scheduling flow, it routes them directly into available appointment slots. Either way, no inquiry leaves the site without being captured.',
    },
    {
      label: 'Lead handed off with context',
      body: 'The qualified inquiry — with name, contact information, visit reason, and conversation summary — routes into your CRM and notifies your team. When your front desk arrives in the morning, the lead is already in the pipeline with everything needed to follow up.',
    },
  ],

  featuresHeadline: 'What the chatbot includes for healthcare practices',
  features: [
    '24/7 availability — new patient inquiries captured outside clinic hours',
    'Practice-voice configuration — answers reflect your services, providers, and tone',
    'Common question handling — insurance, availability, new patient process, directions',
    'New patient lead capture with contact details and visit reason collected',
    'Appointment scheduling integration — visitors routed into available slots from the conversation',
    'CRM handoff with full conversation context — no data re-entry for your front desk',
    'HIPAA-aware conversation design — no protected health information collected in chat',
    'Escalation path for urgent or clinical questions — routes to staff or appropriate contact',
  ],

  relatedServiceSlugs: ['appointment-booking-automation', 'ai-voicebots', 'reputation-management', 'crm-automation'],

  faqs: [
    {
      q: 'What kinds of questions can an AI chatbot answer for a medical practice?',
      a: 'The chatbot is configured around your specific practice — your services, providers, accepted insurance, hours, location, new patient process, and what to expect at a first visit. It handles the questions your front desk receives every day without staff involvement. Questions that fall outside what the bot is configured to answer are flagged and routed to your team.',
    },
    {
      q: 'Can the chatbot book patient appointments directly?',
      a: 'When connected to your scheduling flow, yes. The chatbot routes qualified visitors into your available appointment slots and sends a confirmation. For practices that prefer to confirm new patient bookings manually, the chatbot captures the inquiry and visit preference and notifies your front desk so they can follow up the same day.',
    },
    {
      q: 'Is this chatbot HIPAA-compliant?',
      a: 'The chatbot is designed to avoid collecting protected health information in the conversation. It captures contact details and visit reason — the same information a front desk team member would collect on an initial call — without asking for medical history, diagnosis, or clinical details. We discuss your specific compliance requirements during setup before any configuration is finalized.',
    },
    {
      q: 'How is an AI chatbot different from a contact form?',
      a: 'A contact form creates a task for your team to action later — often the next business day. The chatbot responds immediately, at any hour, and moves the visitor toward scheduling during the same session. A prospective patient who gets an instant response is far more likely to stay in your pipeline than one who submits a form and waits.',
    },
    {
      q: 'How does the chatbot connect to the rest of the growth system?',
      a: 'The chatbot is the website lead capture layer. It feeds new patient inquiries into the same CRM and booking flow that handles leads from every other channel. A visitor who chats through their visit reason and schedules gets the same confirmation sequence, appointment reminders, and post-visit review request as a patient who called in. The channel is different — the system they enter is the same.',
    },
  ],

  ctaHeadline:     'See what your practice website should be capturing after hours',
  ctaBody:         'We review your current website lead flow, identify where new patient inquiries are dropping off, and show you what a chatbot configured for your practice type would look like. No obligation.',
  ctaPrimaryLabel: 'Get a Free Website Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/healthcare-medical/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/healthcare-medical/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HealthcareMedicalAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/healthcare-medical/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Healthcare & Medical', url: '/industries/healthcare-medical' },
            { name: 'AI Chatbots',          url: '/industries/healthcare-medical/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/healthcare-medical/ai-chatbots',
            name:        'AI Chatbots for Medical Practices',
            description: 'Website chatbot for medical practices that captures new patient inquiries, answers common questions, and routes visitors into scheduling — HIPAA-aware and configured to your practice voice.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
