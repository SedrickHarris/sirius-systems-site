import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'ai-voicebots',
  hubName:     'Professional Services',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for Professional Services Firms',
  metaDescription: 'Professional service firms lose clients every time a call hits voicemail. An AI voicebot answers every call, runs intake, and books consultations — 24/7.',

  eyebrow: 'Professional Services · AI Voicebots',

  headline:
    'Every call that hits voicemail is a prospective client choosing a firm that answered',

  subheadline:
    'You are in a client meeting, deep in a return, or away from the desk when a new inquiry calls. They hit voicemail, hang up without leaving a message, and call the next firm on the list. An AI voicebot answers every call in your firm\'s voice, runs a structured intake conversation, collects the details your team needs, and books the consultation — before your competitor picks up.',

  heroHighlights: [
    '24/7 inbound call coverage — answers every call regardless of hour or workload',
    'Structured intake by voice — collects caller details, inquiry type, and urgency before handoff',
    'Consultation booking directly from the call — no follow-up required to confirm the appointment',
    'Qualified lead records routed to your CRM with full call context attached',
  ],

  definitionHeadline:
    'What an AI voicebot does for a professional services firm',

  definition:
    'An AI voicebot for a professional services firm is a voice agent that answers your inbound calls in natural conversation, conducts a structured intake, collects the caller\'s contact details and the nature of their inquiry, and either books a consultation directly or routes the lead to your team with a complete call summary — without requiring a receptionist, an answering service, or anyone on staff to be available. It runs in your firm\'s voice, follows your intake protocol, and operates at any hour and any call volume so that no inquiry goes to voicemail because your team was otherwise occupied.',

  problemHeadline:
    'Where professional service firms lose new clients before the first meeting',

  problems: [
    'A prospective client calls your firm at 6pm on a Thursday — after your front desk has left and before you can step away from your current work. They hit voicemail, do not leave a message, and book a consultation with the competing firm that picked up. You never know the call happened.',
    'Your team manually handles the same intake questions on every new inquiry call: name, contact information, type of matter or service needed, urgency, and how they found you. That repetitive work consumes staff capacity that should go toward billable client work.',
    'Inbound calls during peak periods — tax season for accountants, court periods for attorneys — go unanswered or are returned late. The professional services buyer who cannot reach you quickly moves to the next qualified firm without waiting for a callback.',
    'New inquiry calls come in on weekends and evenings when no one is staffed to answer them. Those leads are cold before Monday morning. The firm that acknowledged them at 8pm Saturday has already booked the consultation.',
  ],

  howItWorksHeadline:
    'How an AI voicebot works for a professional services firm',

  steps: [
    {
      label: 'Trained on your firm',
      body: 'We configure the voicebot on the specifics of your practice — your firm name, the services or practice areas you handle, how you want new inquiries greeted, what intake questions your team needs answered before a consultation, and when to route a call to a human immediately. Nothing is generic.',
    },
    {
      label: 'Answers every inbound call',
      body: 'When a prospective or existing client calls, the voicebot picks up in your firm\'s voice and handles the conversation naturally. It identifies the purpose of the call, answers common questions about your services and availability, and moves the caller through your intake flow without phone trees or hold music.',
    },
    {
      label: 'Runs the intake and captures the lead',
      body: 'The voicebot collects the caller\'s name, contact details, and the nature of their inquiry using the questions your firm actually needs. For new matters, it gathers the information your team requires to prepare for the consultation. Everything is captured in a structured record — not a voicemail transcript.',
    },
    {
      label: 'Books or routes without delay',
      body: 'If the call qualifies for a consultation, the voicebot books directly into your calendar and confirms the appointment with the caller before the call ends. If the inquiry requires human judgment, it routes immediately with the full call summary attached so your team has context before they follow up.',
    },
  ],

  featuresHeadline:
    'What the voicebot handles for your practice',

  features: [
    '24/7 inbound call answering — no missed calls during meetings, peak periods, evenings, or weekends',
    'Natural voice conversation — no phone trees, no hold music, no robotic prompts',
    'Structured intake protocol — configured to your firm\'s specific questions and practice areas',
    'Consultation booking — confirms appointments directly from the call into your calendar',
    'Lead record creation — caller name, contact details, inquiry type, and urgency captured automatically',
    'CRM routing — qualified leads delivered with full call summary before your team follows up',
    'Urgent call escalation — defined triggers that route a live call to a human immediately',
    'After-hours and overflow coverage — handles calls when your team is unavailable or at capacity',
  ],

  relatedServiceSlugs: [
    'ai-automation',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is an AI voicebot for a professional services firm?',
      a: 'An AI voicebot for a professional services firm is a voice agent that answers your inbound calls, conducts a structured intake conversation, collects the caller\'s details and the nature of their inquiry, and either books a consultation or routes the lead to your team with a complete call summary. It runs in your firm\'s voice at any hour without a receptionist or answering service on the other end — so no new inquiry goes to voicemail because your team was otherwise occupied.',
    },
    {
      q: 'Can an AI voicebot handle intake for a law firm without giving legal advice?',
      a: 'Yes. The voicebot is configured to collect the caller\'s contact details, identify the type of matter, and route the inquiry to the right person — it does not answer legal questions or provide legal guidance of any kind. Its job is to make sure every call is acknowledged immediately, every inquiry is captured with the information your team needs, and qualified prospects are booked into your calendar rather than routed to a voicemail box.',
    },
    {
      q: 'What happens when the AI voicebot cannot answer a caller\'s question?',
      a: 'The voicebot is configured with escalation triggers that route calls to a human immediately when the inquiry falls outside its defined scope — urgent matters, sensitive situations, or anything your firm has flagged for live handling. Outside those triggers, it captures the caller\'s details and the question, logs the full conversation, and routes the record to your team so they can follow up with full context rather than returning a cold voicemail.',
    },
    {
      q: 'Does an AI voicebot replace my receptionist or front-desk staff?',
      a: 'No. The voicebot handles the inbound call volume that would otherwise go to voicemail — calls during client meetings, after hours, during peak periods, and when your front desk is at capacity. Your staff handles the work that requires professional judgment, relationship continuity, and the nuance that a voice agent is not suited for. The voicebot closes the gap between every call that comes in and every call your team can realistically answer.',
    },
    {
      q: 'Is an AI voicebot appropriate for a small professional services firm?',
      a: 'Yes — and small practices are often where the impact is most direct. A solo attorney or a two-person CPA firm cannot staff a receptionist around the clock, but their prospective clients still call at 7pm on a Tuesday. The voicebot answers that call, runs the intake, and books the consultation so the firm competes on responsiveness with larger practices that have full front-desk coverage. Setup is handled for you — no technical team or platform knowledge required.',
    },
  ],

  ctaHeadline: 'Book a 20-minute call to see it in action',

  ctaBody:
    'We will walk through exactly how an AI voicebot would handle inbound calls for your specific practice — the intake questions it would ask, how it would handle after-hours inquiries, and how qualified leads would reach your calendar. No obligation.',

  ctaPrimaryLabel: 'Book the call',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'AI Voicebots',          url: '/industries/professional-services/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/ai-voicebots',
            name:        'AI Voicebots for Professional Services Firms',
            description: 'AI voicebot configured for professional services practices — answers every inbound call, runs structured intake, captures lead details, and books consultations without a receptionist or answering service.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
