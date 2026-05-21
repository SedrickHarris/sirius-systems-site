import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'appointment-booking-automation',
  metaTitle:
    'Appointment Booking Automation for Service Businesses | Sirius Systems',
  metaDescription:
    'Automated booking flows that go from inquiry to confirmed appointment without you in the loop: connected to your calendar, CRM, and reminder sequences.',
  eyebrow: 'Appointment Booking',
  headline: 'From inquiry to confirmed appointment. Without you in the loop.',
  subheadline:
    'Every unconfirmed inquiry is a job that might not happen. Booking automation closes that gap without you in the loop.',
  glyphVariant: 'arc' as const,
  definition:
    'Appointment booking automation for service businesses means connecting your lead capture, calendar, and confirmation system so that bookings happen without a human coordinating each one: from the first inquiry to the confirmed slot.',
  problems: [
    'Every booking requires back-and-forth messages or calls to find a time that works.',
    "Leads who can't reach you immediately book a competitor who makes it easier.",
    'No-shows happen because reminders are manual and inconsistent.',
    "Your calendar lives in one place and your CRM in another: confirmations don't sync.",
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
