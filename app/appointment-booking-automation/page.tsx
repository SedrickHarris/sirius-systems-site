import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'appointment-booking-automation',
  metaTitle:
    'Appointment Booking Automation | Sirius Systems',
  metaDescription:
    'Automated booking flows that go from inquiry to confirmed appointment — connected to your calendar, CRM, and reminder sequences — without manual coordination.',
  eyebrow: 'Appointment Booking',
  headline: 'From inquiry to confirmed appointment. Without you in the loop.',
  subheadline:
    'Every unconfirmed inquiry is a job that might not happen. Booking automation closes that gap without you in the loop.',
  glyphVariant: 'arc' as const,
  definition:
    'Appointment booking automation for service businesses means connecting your lead capture, calendar, and confirmation system so that a qualified lead can select an available slot, receive a confirmation, and land in your CRM pipeline — all without a team member coordinating the exchange. The system pulls live availability from your calendar, so customers only see real open slots, and every confirmed booking triggers the right follow-up sequence automatically.',
  problems: [
    'Every booking requires a back-and-forth exchange — you send times, they respond, you confirm — and by the time you reply, the lead has already called someone else who made it easier.',
    'Leads who arrive after hours submit a form and wait. Your competitor who has self-booking captures that job overnight. You find out the next morning when you check your inbox.',
    'No-shows happen because reminders are inconsistent — sent when someone remembered to send them, skipped when things got busy. A customer who forgets costs you a slot that could have been filled.',
    'Your calendar and your CRM are two separate places. A booking confirmed in one does not update the other unless someone manually bridges them. Eventually something falls through the gap.',
  ],
  steps: [
    {
      label: 'Map your booking flow',
      body: 'We document how a lead currently becomes a booked appointment: every step, every tool, every handoff. Most businesses have three to five manual steps we can eliminate.',
    },
    {
      label: 'Connect lead capture to calendar',
      body: 'We wire your website forms, chatbot, and voicebot to your calendar so that a qualified lead can self-book a slot without waiting for a reply from your team.',
    },
    {
      label: 'Configure confirmations and reminders',
      body: 'Every booking triggers a confirmation sequence: email and SMS to the customer, notification to your team. Reminder messages go out automatically at intervals you choose, reducing no-shows without any manual effort.',
    },
    {
      label: 'Sync to CRM and invoicing',
      body: 'Confirmed bookings update your CRM pipeline and, where applicable, trigger a deposit or pre-job invoice. Everything in one place before the job starts.',
    },
  ],
  features: [
    'Self-booking: customers choose their own slot from your live availability',
    'Multi-channel entry: bookings accepted via website, chatbot, voicebot, or SMS',
    'Calendar sync: connects to Google Calendar, Outlook, or your scheduling tool',
    'Automated confirmations: email and SMS sent immediately on booking',
    'Reminder sequences: reduces no-shows with timed pre-appointment messages',
    'CRM pipeline update: confirmed bookings move the lead to the right stage automatically',
    'Rescheduling handling: customers can reschedule without calling your team',
    'Team notifications: your staff gets notified the moment a booking is confirmed',
  ],
  outcomes: [
    'Leads book without waiting for a call-back: the slot is confirmed in the conversation.',
    'No-shows drop because reminders go out consistently, not when someone remembers.',
    'Your calendar and CRM stay in sync without manual updates between them.',
    'Evening and weekend inquiries convert to booked jobs overnight.',
    'Your team starts the day with confirmed appointments, not a list of leads to chase.',
  ],
  relatedSlugs: [
    'crm-automation',
    'ai-chatbots',
    'ai-voicebots',
    'smart-websites',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'professional-services'],
  faqs: [
    {
      q: 'What is appointment booking automation?',
      a: 'It means connecting your lead capture, calendar, and confirmation systems so that bookings happen without a human coordinating each one. A qualified lead picks a slot, gets a confirmation, and your CRM updates: all automatically.',
    },
    {
      q: 'Does the customer need to create an account to book?',
      a: "No. We configure frictionless booking flows: the customer provides their name, contact info, and job details, picks a time, and they're confirmed. No account creation, no extra steps.",
    },
    {
      q: 'What calendar systems does this work with?',
      a: "We integrate with the calendar and scheduling tools you already use: Google Calendar, Outlook, and most purpose-built service scheduling platforms. If you're not sure whether yours is supported, we'll confirm during the discovery call.",
    },
    {
      q: 'How does it handle double-bookings or unavailable slots?',
      a: 'The booking system pulls live availability from your calendar, so customers only see slots that are actually open. If a slot fills while someone is booking, the system handles the conflict gracefully and offers alternatives.',
    },
    {
      q: 'Can it handle deposits or pre-job payments?',
      a: 'Yes: where your payment processor supports it, we can add a deposit step to the booking flow. The customer pays at booking, your team is notified, and the job is confirmed in one sequence.',
    },
    {
      q: 'What happens to a lead who starts booking but doesn\'t finish?',
      a: 'We configure an abandoned booking recovery sequence — if a lead starts the booking flow but does not complete it, a follow-up message fires after a set interval with a direct link back to the scheduling page. Most businesses recover a meaningful portion of these leads without any manual outreach.',
    },
    {
      q: 'Can different job types have different booking flows?',
      a: 'Yes. A free estimate, a paid service call, and a recurring maintenance appointment can each have their own booking form, their own availability rules, and their own confirmation sequence. We configure each flow based on your job types so the customer experience matches what they are actually scheduling.',
    },
    {
      q: 'How does booking automation connect to my chatbot or voicebot?',
      a: 'The chatbot on your website and the voicebot on your phone line both route qualified leads directly to the booking flow. A visitor who chats through their service need gets handed off to the scheduling page at the right moment in the conversation. A caller who reaches the voicebot after hours gets texted a booking link immediately. Both capture jobs that would otherwise wait until the next business day.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the growth system?',
      a: 'Booking automation is the conversion layer. Lead generation and AI chatbots fill the top of the funnel. CRM automation manages what happens after the booking is confirmed — reminders, job updates, pipeline stages. Review automation fires after the job is complete. When booking is automated, the handoff from lead to scheduled job to completed job to review request runs as one connected sequence without manual coordination at any step.',
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

export default function AppointmentBookingAutomationPage() {
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
            { name: 'Appointment Booking Automation', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Appointment Booking Automation',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
