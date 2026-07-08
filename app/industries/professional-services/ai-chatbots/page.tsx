import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'ai-chatbots',
  hubName:     'Professional Services',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbot for Professional Services Firms',
  metaDescription: 'Professional service firms lose clients to whoever responds first. Our AI chatbot captures inquiries, qualifies leads, and books consultations — day or night.',

  eyebrow: 'Professional Services · AI Chatbots',

  headline:
    'Professional service firms lose clients to whoever responds first — your website should respond every time',

  subheadline:
    'A prospect visits your site at 9 PM, has a question about your services, and finds a contact form. They close the tab and book with the firm that responded immediately. An AI chatbot built for professional services closes that gap — capturing the inquiry, qualifying the prospect, and routing them toward a consultation while your team is unavailable.',

  heroHighlights: [
    '24/7 inquiry capture — prospects engaged and qualified outside business hours',
    'Intake questions answered in your firm\'s voice without staff involvement',
    'Consultation booking initiated directly from the conversation',
    'Qualified leads delivered to your CRM with contact details and matter context already captured',
  ],

  definitionHeadline:
    'What an AI chatbot does for a professional services practice',

  definition:
    'An AI chatbot for a professional services firm is a conversational assistant on your website that captures new client inquiries, answers questions about your services and process, qualifies the prospect\'s need and contact details, and routes them into a consultation booking or a warm handoff to your team — around the clock, without a receptionist. It handles intake, not advice. Legal opinions, tax guidance, financial recommendations, and professional judgment stay with your licensed team. The chatbot\'s job is to make sure no serious inquiry leaves your website uncaptured because no one was available to respond.',

  problemHeadline:
    'Where professional practices lose clients between the inquiry and the consultation',

  problems: [
    'A prospect researches your firm after hours, has a question about your services or process, and reaches a contact form with no immediate response. They submit it and move on. By the time your team opens email in the morning, the prospect has already booked a consultation with a competing firm that had a chatbot responding at 11 PM.',
    'Your firm invests in a website, SEO, and local search visibility to drive inbound inquiries. Those inquiries hit a static form or a phone that goes to voicemail. The traffic is there. The conversion layer is missing. A meaningful share of the leads you paid to attract leave without any contact exchange.',
    'A solo practitioner or small firm has no receptionist, no intake coordinator, and no one available to handle inquiries between client meetings, court appearances, or billable engagements. Every hour spent on intake administration is an hour not spent on client work. Every after-hours inquiry that hits voicemail is a prospect deciding whether to wait or move on.',
    'Prospects contact multiple firms simultaneously and choose the first one that responds with something useful. Speed of response is a selection factor regardless of how strong your credentials are. A firm with a slower intake process loses to a faster competitor even when the quality of the work is not comparable.',
  ],

  howItWorksHeadline:
    'How the chatbot works on your firm\'s website',

  steps: [
    {
      label: 'Visitor greeted and inquiry opened',
      body: 'A prospect arrives on your website and the chatbot opens a conversation in your firm\'s voice. It answers questions about your services, your process, your fees, and what happens next — giving the visitor a reason to stay and engage rather than bounce to a contact form.',
    },
    {
      label: 'Prospect qualified and contact details captured',
      body: 'The chatbot asks the intake questions your process already requires — matter type or service need, timeline, new or existing client, and best way to reach them. Contact details and inquiry context are collected during the conversation, not after the fact.',
    },
    {
      label: 'Consultation booked or warm handoff created',
      body: 'A qualified prospect is routed directly into your consultation booking flow from the conversation. Where direct booking is not configured, the chatbot creates a warm handoff — a captured inquiry with full context flagged for same-day follow-up by your team.',
    },
    {
      label: 'Lead delivered to your CRM with full context',
      body: 'Every completed conversation routes into your CRM with name, contact details, matter or service type, and the full conversation transcript. Your team picks up a qualified lead, not a blank form submission. No data re-entry. No context lost.',
    },
  ],

  featuresHeadline:
    'What the chatbot includes for professional service practices',

  features: [
    '24/7 availability — inquiries captured outside business hours, on weekends, and on holidays',
    'Firm-voice configuration — answers reflect your services, process, fees, and tone',
    'Common question handling — services offered, process, fees, availability, next steps',
    'Prospect lead capture with contact details and matter or service type collected',
    'Consultation scheduling from the conversation — prospects routed into available slots directly',
    'CRM handoff with full conversation context — your team follows up with everything already in view',
    'Advice boundary built in — the chatbot handles intake questions, not professional judgment',
    'Escalation path for complex or sensitive matters — routes to staff with conversation transcript attached',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What can an AI chatbot do for a professional services firm without giving legal or financial advice?',
      a: 'The chatbot handles intake — not advice. It answers questions about your services, your process, your fees, your availability, and what happens next when someone reaches out. It collects the prospect\'s name, contact details, and the nature of their matter or need. It routes them into a consultation booking or creates a warm handoff to your team with all that context already captured. At no point does it provide legal opinions, tax guidance, financial recommendations, or any professional judgment. That boundary is built into the system from the start, and it stays there.',
    },
    {
      q: 'How does an AI chatbot qualify leads for a professional practice?',
      a: 'The chatbot opens a conversation with every visitor who engages it and asks the questions your intake process already requires — what type of matter or service they need, their timeline, whether they are a new or existing client, and the best way to reach them. Those answers are used to determine whether the inquiry is a fit for your practice and to route the prospect appropriately. A serious inquiry with a real need and real contact information goes directly into your booking flow or CRM. A casual question gets answered and the visitor is invited to take a next step when they are ready.',
    },
    {
      q: 'What happens when a prospect\'s question is too complex for the chatbot to handle?',
      a: 'The chatbot is configured to recognize when a question requires professional judgment and routes the conversation accordingly. Complex matters, sensitive situations, or anything that falls outside intake-level questions triggers an escalation path — either a direct handoff to your team in real time, or a captured inquiry with a clear note that human follow-up is needed. The chatbot never attempts to answer questions it is not configured to handle. Every conversation where a handoff is needed is logged with the full transcript so your team has context when they pick it up.',
    },
    {
      q: 'Will prospects know they are talking to an AI and not a person?',
      a: 'Yes, and that transparency is intentional. The chatbot is identified as an automated assistant at the start of every conversation. Prospects who want to know they are talking to AI always have that clarity — and in practice, most prospects do not object. They want a fast, accurate response at 9 PM on a Tuesday, and the chatbot delivers that. What loses clients is not AI disclosure — it is silence. A prospect who gets an instant, helpful response from a clearly identified automated assistant converts far better than one who hits a voicemail box and waits until morning.',
    },
    {
      q: 'Does an AI chatbot work for a solo practitioner or small firm with no front desk?',
      a: 'Yes — and it may be the highest-value use case. When there is no receptionist or intake coordinator absorbing after-hours inquiries, every prospect who arrives outside business hours is either captured by the chatbot or lost. There is no middle option. The chatbot functions as a virtual intake assistant that is always available, always consistent, and always hands off a qualified lead with contact details and context already collected. For a solo practitioner where every hour is billable and intake takes time away from client work, that coverage matters.',
    },
  ],

  ctaHeadline: 'Stop losing clients to whoever answers first',

  ctaBody:
    'We review your current website inquiry flow, identify where prospects are dropping off after hours, and show you what a chatbot configured for your specific practice type would look like. No obligation.',

  ctaPrimaryLabel: 'Get a Free Website Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'AI Chatbots',           url: '/industries/professional-services/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/ai-chatbots',
            name:        'AI Chatbots for Professional Services Firms',
            description: 'Website chatbot for professional service practices that captures new client inquiries, qualifies prospects, and routes them into consultation booking — intake only, no legal or financial advice provided.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
