import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Real Estate & Property Services',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for Real Estate',
  metaDescription: 'Real estate leads book with whoever responds first. We build the booking system that captures showings, confirms appointments, and cuts no-shows automatically.',

  eyebrow: 'Real Estate & Property Services · Appointment Booking Automation',

  headline:
    'Real estate leads book with whoever responds first — your system should respond every time',

  subheadline:
    'You are showing a property when the inquiry comes in. The lead waits. By the time you call back, they have already booked a showing with another agent. Booking automation closes that gap — after hours, on weekends, and at any inquiry volume.',

  heroHighlights: [
    'Self-booking from your website, chatbot, or missed-call text-back',
    'After-hours and weekend lead capture with immediate booking confirmation',
    'Automated reminders that reduce no-shows without manual follow-up',
    'Calendar and CRM stay in sync from first inquiry to confirmed appointment',
  ],

  definitionHeadline:
    'What appointment booking automation means for a real estate business',

  definition:
    'Appointment booking automation for a real estate business means connecting your lead capture, calendar, and confirmation system so that a buyer, seller, or prospective tenant can select an available time slot, receive a confirmation, and land in your CRM pipeline without anyone on your team coordinating the exchange. The system captures showings while you are with another client, after hours, and on weekends — and hands you a confirmed appointment when you check back in.',

  problemHeadline:
    'Where real estate businesses lose confirmed appointments before the deal starts',

  problems: [
    'You are mid-showing when a buyer inquiry comes in through your website. It sits unanswered for three hours. By the time you call back, they have already toured the property with another agent who had a booking link on their listing page.',
    'A prospective tenant contacts you at 9pm about a vacant unit. No automated response goes out. By the time your leasing coordinator follows up the next morning, the prospect has already applied at a competing property that confirmed their showing instantly.',
    'No-shows happen because reminders depend on someone remembering to send them. An unconfirmed showing slot costs you time that could have gone to a qualified buyer or a lease-ready tenant.',
    'Your calendar and your CRM are two separate places. A confirmed showing in one does not update the other unless someone bridges them manually — and eventually a confirmed appointment falls through that gap.',
  ],

  howItWorksHeadline:
    'How booking automation works for real estate agents and property managers',

  steps: [
    {
      label: 'Map your current booking flow and find the gaps',
      body: 'We document how a lead currently becomes a confirmed showing or consultation — every step, every tool, every handoff. Most real estate operations have three to five manual steps that can be eliminated. We identify them before building anything.',
    },
    {
      label: 'Connect every lead source to your calendar',
      body: 'We wire your website, chatbot, voicebot, and missed-call text-back to your calendar so a qualified lead can self-book a real open slot without waiting for a reply. After-hours inquiries, weekend requests, and web form submissions all route into the same booking flow.',
    },
    {
      label: 'Configure confirmations and reminder sequences',
      body: 'Every booking triggers an immediate confirmation by SMS and email to both the lead and your team. Reminder messages fire at timed intervals before the appointment — reducing no-shows without any manual effort from your staff.',
    },
    {
      label: 'Sync to CRM and close the loop after the transaction',
      body: 'Confirmed appointments update your CRM pipeline automatically. When the transaction closes, the same system that booked the showing can trigger your review request sequence — so the workflow from first inquiry to confirmed appointment to closed deal to review request runs without manual handoffs.',
    },
  ],

  features: [
    'Self-booking: leads choose their own slot from your live calendar availability',
    'Multi-channel capture: bookings accepted via website, chatbot, voicebot, or SMS',
    'Calendar sync: connects to the scheduling tool you already use',
    'Automated confirmations: SMS and email sent immediately on booking to lead and team',
    'Reminder sequences: timed messages before the appointment reduce no-shows consistently',
    'CRM pipeline update: confirmed bookings move the lead to the right stage automatically',
    'Rescheduling handling: leads can reschedule without calling your office',
    'After-hours coverage: the booking flow runs at any hour without staff involvement',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'crm-automation',
    'ai-voicebots',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'What is appointment booking automation for real estate agents?',
      a: 'It means connecting your lead capture, calendar, and confirmation workflows so that a buyer or prospective tenant can select an available slot and receive a booking confirmation without a team member coordinating each exchange. A lead who reaches your website at 9pm on a Sunday can book a showing, get an immediate confirmation, and land in your CRM before you check your phone the next morning.',
    },
    {
      q: 'How does booking automation help real estate agents respond faster to leads?',
      a: 'Most agents lose leads not because they lack responsiveness but because they are physically unavailable at the moment of inquiry — showing a property, in a closing, or off the clock. Booking automation routes the inquiry into a self-booking flow immediately, so the lead selects a time and gets confirmed in the conversation rather than waiting for a callback that may come hours later. Speed-to-lead is the primary conversion variable in real estate, and an automated booking system addresses it without adding staff.',
    },
    {
      q: 'Does appointment booking automation work for property managers as well as agents?',
      a: 'Yes, and the workflow differs. For agents, the system captures buyer and seller inquiries and routes them into showing or consultation bookings. For property managers, it handles tenant viewing requests for vacant units, sends pre-qualification questions before the slot is offered, and triggers automated reminders that reduce no-shows before the tour. Both workflows connect to your CRM and calendar so every confirmed appointment updates your pipeline without manual input.',
    },
    {
      q: 'What happens to leads that come in after hours or on weekends?',
      a: 'Without automation, after-hours inquiries sit until the next business day — by which point the lead has often already booked with another agent. With a booking system in place, an inquiry that arrives at any hour enters the same self-booking flow: the lead picks a slot from your live availability, receives an immediate confirmation by SMS and email, and your calendar updates automatically. You start the next morning with confirmed appointments rather than a list of cold leads to chase.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the growth system?',
      a: 'Booking automation is the conversion layer. Your chatbot or AI voicebot qualifies the lead and routes them into the booking flow. CRM automation handles what comes after the confirmation — pipeline updates, pre-appointment reminders, and team notifications. Review automation fires after the transaction closes. When booking is automated, the sequence from first inquiry to confirmed appointment to completed transaction to review request runs without manual coordination at any step.',
    },
  ],

  ctaHeadline: 'Stop losing showings to whoever answers first',

  ctaBody:
    'We map your current booking flow, find where leads are falling out, and show you what a connected system looks like for your specific real estate operation. No pressure. No invented results. Just a clear picture of what is possible.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'Appointment Booking Automation',  url: '/industries/real-estate-property/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/appointment-booking-automation',
            name:        'Appointment Booking Automation for Real Estate',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
