import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Hospitality & Events',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Booking Automation for Restaurants and Event Venues',
  metaDescription: 'Hospitality businesses lose bookings to whoever responds first. We build the system that captures every inquiry, confirms appointments, and cuts no-shows.',

  eyebrow: 'Hospitality & Events · Appointment Booking Automation',

  headline:
    'Hospitality businesses lose bookings to whoever responds first — your system should respond every time',

  subheadline:
    'The inquiry arrives on a Friday evening. Your team is in service, on-site at an event, or off the clock. The lead waits. By Monday morning they have confirmed with the venue or restaurant that responded within the hour. Booking automation closes that window — after hours, on weekends, and at any inquiry volume.',

  heroHighlights: [
    'After-hours inquiry capture with an immediate response and booking path',
    'Self-scheduling for tours, tastings, consultations, and private dining',
    'Automated confirmations and reminders that reduce no-shows without manual follow-up',
    'Calendar and CRM stay in sync from first inquiry to confirmed booking',
  ],

  definitionHeadline:
    'What appointment booking automation means for a restaurant, venue, or event business',

  definition:
    'Appointment booking automation for a restaurant, venue, or event business means connecting your inquiry capture, calendar, and confirmation system so that a diner, couple, or event planner can request a booking, receive an immediate response, and land in your pipeline without a team member being available to coordinate the exchange. The system responds to inquiries after hours and on weekends — the same hours when most hospitality leads arrive and most booking opportunities are lost.',

  problemHeadline:
    'Where hospitality and events businesses lose confirmed bookings before the event happens',

  problems: [
    'A couple submits an inquiry to your venue on a Friday night. Your team is running an event. The inquiry sits until Monday morning. By then the couple has already toured and deposited at a competing venue that responded within the hour.',
    'A group inquiry for a private dining experience arrives through your website after service ends. No automated response goes out. By the time your events manager follows up the next day, the organizer has already confirmed with a restaurant that acknowledged them the same night.',
    'You are on-site running a wedding when three new planning inquiries come in. None get a response until the following week. Every one of those leads is cold by the time you call back.',
    'No-shows happen because reminders depend on someone remembering to send them. An empty reservation or a missed venue tour costs you real revenue — and it happens more when your team is stretched thin through a busy weekend.',
  ],

  howItWorksHeadline:
    'How booking automation works for restaurants, venues, and event planners',

  steps: [
    {
      label: 'Map your current inquiry and booking flow',
      body: 'We document how an inquiry currently becomes a confirmed booking — every step, every tool, every point where a lead can fall through. Most hospitality operations have three to five manual handoffs that can be eliminated. We identify them before building anything.',
    },
    {
      label: 'Connect every inquiry channel to your calendar',
      body: 'We wire your website inquiry form, chatbot, voicebot, and social channels to your calendar so a qualified lead can self-schedule a tour, tasting, consultation, or reservation without waiting for a team member to respond. After-hours inquiries, weekend submissions, and social messages all route into the same booking flow.',
    },
    {
      label: 'Configure confirmations and reminder sequences',
      body: 'Every booking triggers an immediate confirmation by SMS and email. Reminder messages fire at timed intervals before the appointment — reducing no-shows without any manual effort from your team, regardless of how busy service gets.',
    },
    {
      label: 'Sync to CRM and close the loop after the event',
      body: 'Confirmed bookings update your CRM pipeline automatically. When the event or dining experience closes, the same system that booked it can trigger your review request sequence — so the workflow from first inquiry to confirmed booking to completed event to review runs without manual coordination at any step.',
    },
  ],

  features: [
    'After-hours inquiry response: every lead acknowledged immediately, regardless of when it arrives',
    'Self-scheduling: guests, couples, and planners book from your live calendar availability',
    'Multi-channel capture: inquiries accepted via website, chatbot, voicebot, or social',
    'Automated confirmations: SMS and email sent immediately on booking to guest and team',
    'Reminder sequences: timed messages before the event or reservation reduce no-shows consistently',
    'CRM pipeline update: confirmed bookings move to the right stage automatically',
    'Rescheduling handling: guests can reschedule without calling your team',
    'Post-event review trigger: review request fires automatically after the experience closes',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'crm-automation',
    'ai-voicebots',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'What is appointment booking automation for restaurants and event venues?',
      a: 'It is the system that connects your inquiry capture, calendar, and confirmation workflow so that a diner, couple, or event planner gets an immediate response and a path to booking without a team member being available to handle the exchange manually. An inquiry that arrives on a Friday evening gets acknowledged instantly, routed to a booking or consultation flow, and lands in your pipeline confirmed — rather than sitting in an inbox until Monday morning when the lead has already booked elsewhere.',
    },
    {
      q: 'How does booking automation help hospitality businesses respond to after-hours inquiries?',
      a: 'Most hospitality inquiries arrive when your team is not available — during service, on-site at an event, or outside business hours. Booking automation responds to those inquiries immediately with an acknowledgment and a path to scheduling, so the lead does not have to wait for a callback that may come hours or days later. Wedding venues report that the majority of couple inquiries arrive outside business hours, and the first venue to respond wins the tour at a disproportionate rate. Automation closes that gap without adding staff.',
    },
    {
      q: 'Does booking automation work for event planners who are on-site and unavailable during the day?',
      a: 'Yes. Event planners face a specific version of the problem: they are running events when new inquiries arrive and cannot step away to respond. Booking automation handles the initial response, collects key event details — date, guest count, type of event, budget range — and routes the lead into a consultation scheduling flow. The planner returns from the event to a qualified inquiry with a consultation already on the calendar rather than a missed call with no message.',
    },
    {
      q: 'How does booking automation reduce no-shows for restaurants and venues?',
      a: 'Most no-shows happen because reminders are inconsistent — they go out when someone on your team remembers to send them, and they do not go out when the day gets busy. Booking automation sends a confirmation immediately when a booking is made, then timed reminder messages in the hours and days before the appointment. Removing the dependency on manual reminders means every booking receives the same sequence every time, regardless of how busy your team is.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the growth system for hospitality businesses?',
      a: 'Booking automation is the conversion layer. Your AI chatbot or voicebot qualifies the inquiry and routes it into the booking flow. CRM automation handles what comes after the confirmation — pipeline updates, pre-event communication, and team notifications. Review automation fires after the event or dining experience closes, requesting a review at the moment the guest\'s experience is freshest. When booking is automated, the sequence from first inquiry to confirmed booking to completed event to review request runs without manual coordination at any step.',
    },
  ],

  ctaHeadline: 'Stop losing hospitality bookings to whoever answers first',

  ctaBody:
    'We map your current inquiry and booking flow, find where leads are falling out, and show you what a connected system looks like for your specific operation — whether you run a venue, a restaurant, or a planning business. No pressure. No invented results. Just a clear picture of what is possible.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Hospitality & Events',           url: '/industries/hospitality-events' },
            { name: 'Appointment Booking Automation', url: '/industries/hospitality-events/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/appointment-booking-automation',
            name:        'Appointment Booking Automation for Restaurants and Event Venues',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
