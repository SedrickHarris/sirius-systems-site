import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Auto Services',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for Auto Shops',
  metaDescription: 'Auto shops lose jobs to whoever answers first. We build a booking system that captures inquiries, confirms appointments, and brings customers back on schedule.',

  eyebrow: 'Auto Services · Appointment Booking Automation',

  headline:
    'The job goes to whoever answers first — most auto shops have no system for when that call comes in',

  subheadline:
    'A driver needs an oil change, hears a noise, or has a warning light on. They search, find two or three shops nearby, and call the first one. If you are under a car, the phone rings out. They call the next shop. Booking automation makes sure that even when you cannot pick up, your shop still gets the appointment.',

  heroHighlights: [
    'Online booking from your website — 24 hours a day, no call required',
    'After-hours inquiries captured and routed into the booking flow automatically',
    'Automated reminders that cut no-shows and keep bays full',
    'Service interval follow-up that brings customers back without manual outreach',
  ],

  definitionHeadline:
    'What appointment booking automation means for an auto service business',

  definition:
    'Appointment booking automation for an auto service business means connecting your inquiry capture, calendar, and confirmation system so that a customer can schedule a service appointment, receive a confirmation, and enter your pipeline without a team member coordinating the exchange. The system captures jobs when the phone goes unanswered, books appointments after hours, sends reminders that cut no-shows, and follows up on service intervals — all running automatically between every job you work.',

  problemHeadline:
    'Where auto shops lose jobs they should have won',

  problems: [
    'You are in the bay when the call comes in. The phone rings out, goes to voicemail, and the customer calls the shop down the street instead. By the time you check your missed calls at end of day, that job is already booked somewhere else.',
    'A customer searches for a shop on Saturday evening, finds your listing, and has no way to book without calling. You are closed. They find a competitor with an online booking option and schedule the appointment before your shop opens Monday morning.',
    'No-shows drain a day you cannot recover. A booked bay with no car in it means a technician without work and a time slot that cannot be filled last minute. When appointment reminders depend on someone remembering to send them, some reminders do not go out — and no-show rates reflect it.',
    'A customer drives away satisfied after an oil change and disappears. There is no follow-up, no service interval reminder, and no prompt when they are due back. Three months later they search again and book with whoever appears first — not necessarily your shop.',
  ],

  steps: [
    {
      label: 'Map how calls and inquiries reach your shop and where they fall through',
      body: 'We review your current call volume, after-hours coverage, booking process, and reminder cadence — then identify where jobs are being lost before they reach the bay. Most shops have gaps at two points: the unanswered call and the no-follow-up-sent job. You see exactly where before anything changes.',
    },
    {
      label: 'Build the automated booking and vehicle intake system',
      body: 'We connect your inquiry capture to a booking page that shows available slots, collects vehicle information — make, model, year, and service description — and confirms the appointment automatically. The system captures after-hours inquiries and routes them into the same booking flow so nothing sits overnight.',
    },
    {
      label: 'Configure reminders, service intervals, and CRM sync',
      body: 'Every booked appointment triggers a confirmation and a pre-appointment reminder sequence via SMS and email. After each completed job, a service interval follow-up is scheduled based on the service type — oil change, tire rotation, inspection — so customers receive a timely prompt when they are due back. The CRM is updated at every stage without manual entry.',
    },
  ],

  features: [
    'Online booking page embedded on your website and linked from your Google Business Profile',
    'Vehicle intake form collecting make, model, year, and service description at booking',
    'Automated confirmation sent immediately after every booking',
    'SMS and email reminder sequence before every appointment',
    'After-hours inquiry capture routed into the booking flow with no delay',
    'Service interval follow-up scheduled automatically after completed jobs',
    'CRM updated from first inquiry through completed repair without manual data entry',
    'No-show recovery follow-up triggered automatically when an appointment is missed',
  ],

  relatedServiceSlugs: [
    'ai-voicebots',
    'crm-automation',
    'review-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does appointment booking automation mean for an auto repair shop?',
      a: 'Appointment booking automation for an auto repair shop means connecting your inquiry capture, calendar, and confirmation system so that a customer can book a service slot, receive a confirmation, and enter your pipeline without a team member coordinating it. The system answers when the phone goes unanswered, books jobs after hours, and sends reminders that keep customers showing up — all running between the work your team is already doing.',
    },
    {
      q: 'How do auto shops lose jobs to missed calls during busy periods?',
      a: 'When technicians are in the bays and the service advisor is with a walk-in, the phone rings out. Customers who reach voicemail — especially first-time callers — typically do not leave a message. They call the next shop on their search results. A shop with online booking or an after-hours capture system gets that job instead. The missed call problem is a direct revenue leak that booking automation closes without adding headcount.',
    },
    {
      q: 'How does booking automation reduce no-shows at an auto repair shop?',
      a: 'An automated reminder sequence — a confirmation at booking, a message the day before, and a same-day reminder — sent by SMS and email dramatically reduces the rate at which customers miss their appointments. When reminders go out consistently on every booking without a team member sending them manually, no-show rates drop and bays stay productive instead of sitting idle during booked time slots.',
    },
    {
      q: 'Can booking automation work for mobile mechanics and detailers without a physical shop location?',
      a: 'Yes. The core booking system — online scheduling, confirmation, reminder sequences, and CRM sync — applies equally to mobile operators. The intake form collects the service address and vehicle details instead of a drop-off time. After-hours inquiry capture works the same way. Mobile mechanics and detailers who add automated booking stop losing jobs to operators who are easier to reach and faster to confirm.',
    },
    {
      q: 'How does service interval follow-up work for an auto shop?',
      a: 'After a job closes, the system schedules a follow-up message timed to the service type. An oil change customer receives a prompt when they are approaching their next interval. A tire rotation or inspection customer gets a reminder when the seasonal window is right. These messages go out automatically without any manual step from the shop — and they bring customers back before they search Google again and book with whoever appears first.',
    },
  ],

  ctaHeadline: 'See exactly where your shop is losing jobs before they reach the bay',

  ctaBody:
    'We map your current inquiry flow — how calls reach your shop, what happens after hours, and where jobs fall through before a booking is confirmed — and show you the gaps before anything changes. No pressure. No invented promises. Just a clear picture of where your operation stands.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesAppointmentBookingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Auto Services',                  url: '/industries/auto-services' },
            { name: 'Appointment Booking Automation', url: '/industries/auto-services/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/appointment-booking-automation',
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
