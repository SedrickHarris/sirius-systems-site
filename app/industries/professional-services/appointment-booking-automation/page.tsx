import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Professional Services',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for Professional Services',
  metaDescription: 'Professional firms lose consultations to whoever responds first. We build the system that captures inquiries, books the meeting, and cuts no-shows.',

  eyebrow: 'Professional Services · Appointment Booking Automation',

  headline:
    'Professional service firms lose consultations to whoever responds first — most have no system for that race',

  subheadline:
    'A prospective client contacts two or three firms at the same time. The first to acknowledge the inquiry, offer a booking link, and confirm the meeting wins the consultation. The others never get a reply. Booking automation makes sure your firm is always the one that responds — after hours, on weekends, and at any inquiry volume.',

  heroHighlights: [
    'Consultations self-scheduled from your website or inquiry form — 24 hours a day',
    'Automated confirmations and intake questions collected at the time of booking',
    'Reminder sequences that cut no-shows without manual follow-up',
    'Calendar and CRM stay in sync from first inquiry to completed engagement',
  ],

  definitionHeadline:
    'What appointment booking automation means for a professional services firm',

  definition:
    'Appointment booking automation for a professional services firm means connecting your inquiry capture, calendar, and confirmation system so that a prospective client can select an available consultation slot, submit intake information, receive a confirmation, and enter your pipeline without a team member coordinating the exchange. The system responds to every inquiry immediately, works after hours and on weekends, and hands your team a confirmed appointment with context already collected — so no consultation opportunity disappears because the office was closed or someone was in a meeting.',

  problemHeadline:
    'Where professional services firms lose clients before the first consultation happens',

  problems: [
    'A prospective client submits an inquiry through your website at 7pm on a Tuesday. With no automated response and no booking link, they wait. By the next morning they have confirmed a consultation with a competing firm that acknowledged their inquiry the same night.',
    'Your team spends real time every week on scheduling back-and-forth — email chains to find a mutual time, confirmation calls, calendar invites sent manually. That time comes directly out of billable capacity and adds friction to a process that should be seamless.',
    'No-shows drain a day that cannot be recovered. A consultation slot held for a client who does not appear is a blocked hour with no output. When reminders depend on someone remembering to send them, some reminders do not go out — and no-show rates climb accordingly.',
    'New client inquiries that arrive over weekends, holidays, or after hours sit unacknowledged until the next business day. By then the prospect has often already committed to a firm that was reachable when they were ready to decide.',
  ],

  steps: [
    {
      label: 'Map your inquiry-to-consultation pipeline and find where it leaks',
      body: 'We review how inquiries currently reach your firm, what happens to after-hours requests, how long the booking process takes, and where prospective clients drop out. Most firms lose opportunities at two points: the initial response window and the confirmation stage. You see exactly where before anything changes.',
    },
    {
      label: 'Build the automated booking and intake system',
      body: 'We connect your inquiry capture to a booking page that shows available consultation slots, collects intake information relevant to your practice — case type, project scope, financial context — and confirms the appointment automatically. The system routes after-hours inquiries into the same flow so nothing sits overnight.',
    },
    {
      label: 'Configure reminders and keep the pipeline synchronized',
      body: 'Every booked consultation triggers a confirmation, a 24-hour reminder, and a same-day reminder — via text and email — without any manual step from your team. The CRM is updated at each stage so your pipeline reflects the real state of every inquiry from first contact through completed engagement.',
    },
  ],

  features: [
    'Self-scheduling booking page embedded on your website or linked in inquiry responses',
    'Intake forms that collect case details, project scope, or financial context at the time of booking',
    'Automated confirmation sent immediately after every booking',
    'Multi-step reminder sequence — 24-hour and same-day — via SMS and email',
    'After-hours inquiry capture routed into the same booking flow with no delay',
    'CRM updated automatically from inquiry to confirmed consultation to closed engagement',
    'Round-robin or direct routing for firms with multiple practitioners',
    'No-show recovery follow-up triggered automatically when an appointment is missed',
  ],

  relatedServiceSlugs: [
    'crm-automation',
    'ai-chatbots',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does appointment booking automation mean for a professional services firm?',
      a: 'Appointment booking automation for a professional services firm means connecting your inquiry intake, calendar, and confirmation system so that a prospective client can schedule a consultation, submit relevant background information, and receive a confirmation — without a team member managing the exchange. It responds to every inquiry immediately, works outside office hours, and hands your team a prepared, confirmed appointment with context already collected.',
    },
    {
      q: 'How do professional service firms lose consultations to slow response times?',
      a: 'Prospective clients typically contact more than one firm at the same time. The first firm to acknowledge the inquiry and offer a clear next step — a booking link, a confirmed time slot — wins the conversation before the others even reply. Firms without an automated response system lose those prospects during the window between inquiry submission and the next morning when staff arrive, and those prospects rarely come back.',
    },
    {
      q: 'How does booking automation reduce no-shows for attorneys, consultants, and accountants?',
      a: 'A structured reminder sequence — an immediate confirmation, a 24-hour reminder, and a same-day message — sent by both SMS and email dramatically reduces the rate at which clients miss their scheduled consultations. When reminders go out consistently on every booking without manual intervention, no-show rates drop because the client is kept informed and given clear options to reschedule if needed.',
    },
    {
      q: 'What should a booking system capture from a client before a professional services consultation?',
      a: 'The intake form connected to the booking page should collect the information your practitioner needs to walk into the meeting prepared — case type, legal matter description, project scope, entity type, financial situation, or whatever context is specific to your practice. Collecting this at the time of booking eliminates the prep back-and-forth and makes the consultation itself more productive from the first minute.',
    },
    {
      q: 'How does appointment booking automation connect to a CRM for a professional services firm?',
      a: 'Every booking, confirmation, reminder, and completion event updates the CRM automatically so your pipeline reflects the real state of every prospective client relationship. A new inquiry creates a contact record. A confirmed booking advances the stage. A no-show triggers a recovery sequence. Nothing requires manual data entry, and no lead falls through the gap between your scheduling system and your client management records.',
    },
  ],

  ctaHeadline: 'See exactly where your inquiry-to-consultation pipeline is losing prospective clients',

  ctaBody:
    'We map your current inquiry flow — how requests reach your firm, what happens after hours, and where prospective clients drop out before the first meeting — and show you the gaps before anything changes. No pressure. No invented promises. Just a clear picture of where your firm stands.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesAppointmentBookingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Professional Services',          url: '/industries/professional-services' },
            { name: 'Appointment Booking Automation', url: '/industries/professional-services/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/appointment-booking-automation',
            name:        'Appointment Booking Automation',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
