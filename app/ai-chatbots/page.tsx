import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-chatbots',
  metaTitle: 'AI Chatbots for Service Businesses — Sirius Systems',
  metaDescription:
    'AI chatbots that answer in your voice, qualify leads, and book appointments 24/7 — connected to your CRM and calendar. Designed for local service businesses.',
  eyebrow: 'AI Chatbots',
  headline: 'A chatbot that books jobs. Not just answers questions.',
  subheadline:
    'An AI chatbot trained on your services, your pricing questions, and your booking flow — so every website visitor gets an instant, on-brand response at any hour.',
  glyphVariant: 'pulse' as const,
  definition:
    'An AI chatbot for service businesses is a conversational widget on your website that qualifies visitors, answers service and pricing questions, and books appointments — without a human on the other end.',
  problems: [
    'Website visitors leave without converting because no one answered their question at 9pm.',
    'Your team answers the same five questions all day instead of doing billable work.',
    'Leads from your site sit in a form inbox until someone gets around to following up.',
    "Your competitors have 24/7 response and you don't — so they book the job first.",
  ],
  steps: [
    {
      label: 'Map your conversations',
      body: "We audit the most common questions your business gets — by phone, email, and form — and build the chatbot's knowledge base around real answers, not generic scripts.",
    },
    {
      label: 'Train it in your voice',
      body: 'The chatbot is configured to match your tone, use your service names, and handle your specific service area and pricing approach. It sounds like your team, not a bot.',
    },
    {
      label: 'Connect to your stack',
      body: 'We wire the chatbot to your CRM, calendar, and booking flow so that when a lead qualifies, the next step happens automatically — no manual hand-off.',
    },
    {
      label: 'Launch and monitor',
      body: 'We deploy the chatbot, monitor early conversations, and tune responses based on what visitors actually ask. The first two weeks tell us a lot — we use that data.',
    },
  ],
  features: [
    '24/7 availability — responds instantly at any hour, including weekends',
    'Service and pricing FAQ handling — answers your most common questions accurately',
    'Lead qualification — asks the right questions before passing to booking',
    'Appointment booking integration — connects to your calendar and CRM',
    'SMS and email handoff — triggers follow-up sequences when chat ends',
    'Custom voice and tone — trained to sound like your business',
    'Mobile-optimized widget — works on any device without extra setup',
    'Conversation reporting — see what visitors ask most and where they drop off',
  ],
  outcomes: [
    'Visitors get an answer in seconds instead of waiting until business hours.',
    'Your team stops repeating the same answers and focuses on jobs.',
    'Leads from evening and weekend traffic get captured and followed up automatically.',
    'Booking happens inside the conversation — no extra steps for the customer.',
  ],
  relatedSlugs: [
    'ai-voicebots',
    'lead-generation-automation',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['cleaning-companies', 'real-estate', 'coaches-consultants'],
  faqs: [
    {
      q: 'What is an AI chatbot for a service business?',
      a: "It's a conversational widget on your website that answers questions, qualifies leads, and books appointments automatically — without a human monitoring it. It's trained on your services and configured to match your voice.",
    },
    {
      q: 'Will it actually sound like my business?',
      a: "Yes — that's a configuration step, not a default. We train the chatbot on your service names, common questions, pricing approach, and tone before it goes live. Generic-sounding bots happen when this work is skipped.",
    },
    {
      q: 'What happens when a lead is ready to book?',
      a: 'The chatbot connects to your calendar or booking system and completes the appointment inside the conversation. It also triggers your CRM and follow-up sequences so nothing falls through.',
    },
    {
      q: 'Can it handle leads outside business hours?',
      a: "That's the main reason to have one. Most chatbot conversations happen evenings and weekends when no one is staffed. The bot captures and qualifies those leads so your first business-hours task is confirming booked jobs, not chasing cold inquiries.",
    },
    {
      q: "What if a visitor asks something the chatbot can't answer?",
      a: 'We configure a graceful handoff — the bot acknowledges it can\'t answer, collects contact info, and triggers a follow-up notification so a real person responds. No dead ends.',
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
