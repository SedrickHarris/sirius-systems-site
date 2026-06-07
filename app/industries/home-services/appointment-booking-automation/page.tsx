import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'home-services',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Home Services',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for Home Services',
  metaDescription: 'Home service businesses lose jobs to whoever answers first. We build the booking system that captures leads, confirms appointments, and cuts no-shows.',

  eyebrow: 'Home Services · Appointment Booking Automation',

  headline:
    'Home service leads book with whoever answers first — your system should answer every time',

  subheadline:
    'You are on a job when the call comes in. The lead hits voicemail, hangs up, and books your competitor. Booking automation closes that gap — after hours, on weekends, and at any call volume.',

  heroHighlights: [
    'Self-booking from your website, chatbot, or missed-call text-back',
    'After-hours lead capture with immediate booking confirmation',
    'Automated reminders that reduce no-shows without manual follow-up',
    'Calendar and CRM stay in sync from inquiry to completed job',
  ],

  definitionHeadline:
    'What appointment booking automation means for a home service business',

  definition:
    'Appointment booking automation for a home service business means connecting your lead capture, calendar, and confirmation system so that a qualified lead can select an available slot, receive a confirmation, and land in your CRM pipeline without a team member coordinating the exchange. The system captures jobs while you are on a roof, under a sink, or away from your phone — and hands you a confirmed appointment when you check back in.',

  problemHeadline:
    'Where home service businesses lose confirmed jobs before the work starts',

  problems: [
    'You are mid-job when a lead calls. It goes to voicemail. They hang up without leaving a message and book the competitor who answered. You find out when you check your missed calls at end of day.',
    'A homeowner submits your website form at 9pm on a Saturday. With no automated response, they wait. By Monday morning they have already confirmed with someone else who had a booking link in their footer.',
    'No-shows happen because reminders depend on someone remembering to send them. A customer who forgets their appointment costs you a time slot that could have gone to a paying job.',
    'Your calendar and your CRM are two separate places. A booking confirmed in one does not update the other unless someone manually bridges them — and eventually something falls through that gap.',
  ],

  howItWorksHeadline:
    'How booking automation works for home services',

  steps: [
    {
      label: 'Map your current booking flow and find the gaps',
      body:  'We document how a lead currently becomes a confirmed appointment — every step, every tool, every handoff. Most home service businesses have three to five manual steps that can be eliminated. We identify them before building anything.',
    },
    {
      label: 'Connect every lead source to your calendar',
      body:  'We wire your website, chatbot, voicebot, and missed-call text-back to your calendar so a qualified lead can self-book a real open slot without waiting for a reply. After-hours inquiries, weekend calls, and web form submissions all route into the same booking flow.',
    },
    {
      label: 'Configure confirmations and reminder sequences',
      body:  'Every booking triggers an immediate confirmation by SMS and email. Reminder messages fire at timed intervals before the appointment — reducing no-shows without any manual effort from your team.',
    },
    {
      label: 'Sync to CRM and close the loop after the job',
      body:  'Confirmed bookings update your CRM pipeline automatically. When the job completes, the same system that booked it can trigger your review request sequence — so the workflow from lead to confirmed appointment to completed job to review runs without manual handoffs.',
    },
  ],

  featuresHeadline: 'What the booking system covers',

  features: [
    'Self-booking: leads choose their own slot from your live calendar availability',
    'Multi-channel entry: bookings accepted via website, chatbot, voicebot, or SMS',
    'Missed-call text-back: immediate booking link sent when a call goes unanswered',
    'After-hours capture: the system takes bookings when your team is unavailable',
    'Automated confirmations: SMS and email sent the moment a booking is confirmed',
    'Reminder sequences: timed pre-appointment messages that reduce no-shows',
    'CRM sync: confirmed bookings update your pipeline stage automatically',
    'Abandoned booking recovery: follow-up fires when a lead starts but does not finish booking',
  ],

  relatedServiceSlugs: [
    'ai-voicebots',
    'ai-chatbots',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is appointment booking automation for a home service business?',
      a: 'It means connecting your lead capture, calendar, and confirmation system so that a qualified lead can select an available slot, receive a confirmation, and land in your CRM without a team member coordinating the exchange. The system books jobs while you are on a job — and hands you a confirmed appointment when you check back in.',
    },
    {
      q: 'What happens to a lead that calls after hours when no one answers?',
      a: 'A missed-call text-back fires immediately with a direct booking link. The lead gets a response within seconds of hanging up, before they have a chance to call the next contractor on their list. If they complete the booking, it lands in your calendar with full confirmation sent to both parties.',
    },
    {
      q: 'How does booking automation reduce no-shows for home service businesses?',
      a: 'Reminder messages go out automatically at intervals you choose — typically 24 hours before and the morning of the appointment. Because the reminders fire consistently on every booking rather than when someone remembers to send them, no-shows drop without any manual effort from your team.',
    },
    {
      q: 'Does the booking system work with the calendar I already use?',
      a: 'The booking flow connects to your existing calendar so customers only see slots that are actually open. If your current calendar or scheduling tool is supported, we wire directly to it. We confirm compatibility during the discovery call before building anything.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the growth system?',
      a: 'Booking automation is the conversion layer. Your AI voicebot and chatbot qualify leads and route them into the booking flow. CRM automation handles what comes after the confirmation — pipeline updates, job reminders, team notifications. Review automation fires after the job closes. When booking is automated, the full sequence from lead to appointment to completed job to review runs without manual coordination at any step.',
    },
  ],

  ctaHeadline:     'Stop losing jobs to whoever answers first',
  ctaBody:         'We map your current booking flow, identify where leads are falling out, and show you what a connected system looks like for your specific trade. No pressure. No invented results. Just a clear picture of what is possible.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/home-services/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/home-services/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HomeServicesAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/home-services/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Home Services',                  url: '/industries/home-services' },
            { name: 'Appointment Booking Automation', url: '/industries/home-services/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/home-services/appointment-booking-automation',
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
