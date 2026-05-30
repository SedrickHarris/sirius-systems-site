import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-chatbots',
  metaTitle: 'AI Chatbots for Service Businesses | Sirius Systems',
  metaDescription:
    'AI chatbots that qualify leads, answer service questions, and book appointments 24/7 — in your voice, connected to your CRM and calendar.',
  eyebrow: 'AI Chatbots',
  headline: 'A chatbot that books jobs. Not just answers questions.',
  subheadline:
    'Website visitors who get no answer at 9pm book somewhere else. A chatbot built for service businesses makes sure that does not happen.',
  glyphVariant: 'pulse' as const,
  definition:
    'An AI chatbot for a service business is a conversational widget on your website that qualifies visitors, answers service and pricing questions, and books appointments without a human on the other end. It runs at any hour, in your business voice, and hands qualified leads directly to your CRM and calendar so nothing requires a manual follow-up.',
  problems: [
    'Visitors land on your site at 9pm with a question. No one answers. They close the tab and book your competitor.',
    'Your team fields the same five questions every day: pricing, availability, service area. That time comes out of billable work.',
    'Leads from your contact form sit in an inbox until someone gets around to them. By then the window has closed.',
    'You have no way to capture and qualify traffic outside business hours, so evening and weekend visitors convert at a fraction of what they should.',
  ],
  steps: [
    {
      label: 'Map your real conversations',
      body: 'We start with the questions your business actually gets: by phone, form, and email. The chatbot knowledge base is built from those real inputs, not from generic scripts. If your customers ask about service area, timing, and rough pricing, those are the first things the bot handles accurately.',
    },
    {
      label: 'Configure voice and qualification logic',
      body: 'We set the tone, service terminology, and qualification questions before the bot goes live. It uses your service names, your pricing language, and your boundaries. The qualification flow is built around what your team actually needs to know before accepting a job.',
    },
    {
      label: 'Connect to your CRM and calendar',
      body: 'When a visitor qualifies, the chatbot routes the lead into your CRM, triggers your follow-up sequence, and optionally books the appointment directly into your calendar. No manual hand-off. No leads sitting in a separate chat inbox.',
    },
    {
      label: 'Launch, monitor, and sharpen',
      body: 'We deploy the chatbot and monitor the first two weeks of real conversations. Visitors ask things we did not anticipate in build. We use that data to fill gaps, tune responses, and tighten the qualification flow before handing it off.',
    },
  ],
  features: [
    '24/7 availability: responds instantly at any hour, including evenings and weekends',
    'Service and pricing FAQ handling: answers your most common questions accurately',
    'Lead qualification: asks the right questions before passing to booking or follow-up',
    'Appointment booking integration: connects to your calendar and CRM',
    'SMS and email handoff: triggers follow-up sequences when chat ends',
    'Custom voice and tone: trained to sound like your specific business',
    'Mobile-optimized widget: works on any device without extra setup',
    'Conversation reporting: see what visitors ask most and where they drop off',
  ],
  outcomes: [
    'Evening and weekend visitors get an immediate answer instead of silence. The ones ready to book do so without waiting for business hours.',
    'Your team stops repeating the same answers to routine questions and puts that time toward jobs instead.',
    'Leads from off-hours traffic are captured, qualified, and in your CRM before your team starts the next morning.',
    'Booking happens inside the conversation. The customer does not have to call back, fill out another form, or wait for a reply.',
    'Your conversion rate on site traffic improves because qualified visitors now have a path to book at the moment they are ready.',
  ],
  relatedSlugs: [
    'ai-voicebots',
    'lead-generation-automation',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'professional-services'],
  faqs: [
    {
      q: 'What is an AI chatbot for a service business?',
      a: 'An AI chatbot for a service business is a conversational widget on your website that answers questions, qualifies leads, and books appointments automatically without a human monitoring it. It is trained on your specific services, service area, and pricing approach, and it runs at any hour without staff coverage.',
    },
    {
      q: 'What is the difference between an AI chatbot and a basic live chat widget?',
      a: 'A live chat widget requires a human on the other end. If no one is available, the visitor sees a message and leaves. An AI chatbot responds instantly at any hour without staffing. It handles qualification, answers real service questions, and routes to booking without anyone needing to be logged in. For a local service business, the practical difference is whether you capture leads at 9pm or lose them.',
    },
    {
      q: 'What can an AI chatbot actually handle for a service business?',
      a: 'Service and pricing questions, availability inquiries, service area confirmation, basic lead qualification, and appointment booking are all within scope. The chatbot handles the front end of the sales conversation: the questions a customer needs answered before they are ready to commit. Complex situations, complaints, and existing job issues are routed to a human via graceful handoff.',
    },
    {
      q: 'Will it actually sound like my business?',
      a: 'That is a configuration step, not a default. We train the chatbot on your service names, common questions, pricing language, and tone before it goes live. A chatbot that sounds generic is one that was deployed without that work. We do not skip it.',
    },
    {
      q: 'What happens when a lead is ready to book?',
      a: 'The chatbot connects to your calendar or booking system and completes the appointment inside the conversation. It also triggers your CRM entry and any follow-up sequences so the lead does not require a manual hand-off from the chat inbox to the rest of your system.',
    },
    {
      q: 'Can it handle leads outside business hours?',
      a: 'That is the primary use case. Most chatbot conversations happen evenings and weekends when no one is staffed. The bot captures and qualifies those leads so your first task at the start of the day is confirming booked jobs, not chasing cold inquiries that came in overnight.',
    },
    {
      q: 'What happens if a visitor asks something the chatbot cannot answer?',
      a: 'We configure a graceful handoff path. The chatbot acknowledges it cannot answer, collects the visitor contact information, and triggers a notification so a real person follows up. There are no dead ends where a visitor gets stuck and leaves.',
    },
    {
      q: 'How is an AI chatbot different from a contact form?',
      a: 'A contact form is passive. It collects information and stops. An AI chatbot is an active conversation: it asks follow-up questions, qualifies the lead in real time, answers objections, and can book an appointment before the visitor leaves the page. A form creates a task for your team. A chatbot completes part of the sales process before your team is ever involved.',
    },
    {
      q: 'How does the chatbot connect to the rest of my business system?',
      a: 'The chatbot is a front-end capture point that feeds into your CRM, calendar, and follow-up automation. When a visitor qualifies and books, the lead entry, pipeline stage, and follow-up sequence all trigger automatically. It does not operate as a separate inbox your team has to monitor. It is wired into the same system that handles every other lead source.',
    },
  ],
}

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: `/${PAGE.slug}`,
    images: ['/og/default.webp'],
  },
}

export default function AiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.metaTitle,
            description: PAGE.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'AI Chatbots', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'AI Chatbots',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
