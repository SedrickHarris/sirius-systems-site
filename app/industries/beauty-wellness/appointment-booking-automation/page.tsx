import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'beauty-wellness',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Beauty & Wellness',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Booking Automation for Beauty & Wellness Businesses',
  metaDescription: 'Booking automation for salons and spas — online scheduling, no-show reminders, rebooking prompts, and lapsed-client reactivation running automatically.',

  eyebrow: 'Beauty & Wellness · Appointment Booking Automation',

  headline:
    'Most salons have a booking link. What fills a calendar is the system built around it',

  subheadline:
    'Online booking is one piece. The reminder that stops the no-show, the follow-up that prompts the rebooking, and the message that brings a lapsed client back — those are the pieces most beauty and wellness businesses are missing. We build the full loop.',

  heroHighlights: [
    '24/7 online booking that works while you are behind the chair',
    'Automated reminders that cut no-shows before they drain your day',
    'Post-appointment rebooking prompts timed to your specific service cycle',
    'Lapsed-client reactivation that recovers past clients before they are gone for good',
  ],

  definitionHeadline:
    'What appointment booking automation actually means for a beauty or wellness business',

  definition:
    'Appointment booking automation for a beauty or wellness business is the connected system that handles online scheduling, pre-appointment reminders, post-appointment rebooking prompts, and lapsed-client reactivation — all running without staff involvement after setup. It is not a booking widget; it is the full client retention loop built around every completed service so that each appointment generates the next one.',

  problemHeadline:
    'Where beauty and wellness businesses bleed calendar revenue without realizing it',

  problems: [
    'Clients who do not rebook at checkout rarely come back on their own. The natural moment to secure the next appointment is when they are still in the chair — but when that conversation does not happen, most clients wait until they need a service again. By then they are searching Google and whoever shows up first gets the booking.',
    'No-shows destroy a day that cannot be recovered. A 45-minute gap with no fill system is pure lost revenue. Manual reminder calls happen inconsistently — when you are booked back-to-back through the afternoon, nothing goes out and the client simply does not show.',
    'After-hours booking requests go unanswered until the next morning. Clients who decide to book at 9 PM want to lock something in immediately. If your booking process requires a call or a DM the next day, a meaningful share of those intentions never become appointments.',
    'Past clients who have not booked in 60 or 90 days are quietly gone unless something reaches out with a reason to return. Most beauty and wellness businesses have no system that touches lapsed clients — so those relationships expire without either side noticing.',
  ],

  howItWorksHeadline: 'How the booking automation system runs for your beauty or wellness business',

  steps: [
    {
      label: 'Clients book online any time — without calling',
      body:  'Your booking link is live 24/7. Clients schedule from your website, Google Business Profile, or social bio without a call, DM, or waiting on a response. Every new booking lands on your calendar automatically.',
    },
    {
      label: 'Automated reminders go out before every appointment',
      body:  'The system sends confirmation and reminder messages at configured intervals before each appointment. Most no-shows happen because a client forgot — not because they intended to cancel. Timed reminders close that gap consistently.',
    },
    {
      label: 'A rebooking prompt follows every completed service',
      body:  'After each appointment is marked complete, a follow-up goes out at the interval that matches your service cycle — two weeks for a lash fill, eight weeks for a colour appointment. The message includes a direct booking link and runs without any action from you.',
    },
    {
      label: 'Lapsed clients get a reason to come back',
      body:  'Clients who have not booked in a set number of days receive a reactivation message automatically. This recovers a portion of relationships that would otherwise expire — turning past clients into returning ones without manual outreach.',
    },
  ],

  featuresHeadline: 'What the booking automation system includes for beauty and wellness businesses',

  features: [
    '24/7 online booking connected to your live calendar',
    'Automated confirmation messages sent immediately after each new booking',
    'Pre-appointment reminder sequences via text and email',
    'Post-appointment rebooking prompts timed to your service cycle',
    'Lapsed-client reactivation flows for clients who have not returned in a set period',
    'Waitlist management that fills cancelled slots automatically',
    'Post-service follow-up flow with integrated review request',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'crm-automation',
    'ai-chatbots',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What types of beauty and wellness businesses does booking automation work for?',
      a: 'The system works for any appointment-based beauty or wellness business — hair salons, barbershops, med spas, day spas, nail salons, lash studios, massage therapists, personal trainers, yoga and Pilates studios, and similar businesses. If you are currently managing bookings by phone, DM, or a basic booking link with nothing automated around it, this is the layer your business is missing.',
    },
    {
      q: 'How does the rebooking automation actually work after an appointment?',
      a: 'When an appointment is marked complete, the system sends a follow-up message at a configured interval matched to your service type. A stylist running six-week colour appointments gets a different interval than a waxing studio running three-week returns. The message includes a direct booking link and goes out automatically — no action required from you or your staff.',
    },
    {
      q: 'We already have an online booking tool. What does this add?',
      a: 'A booking tool handles the scheduling. This system handles everything that surrounds it — the reminder that prevents the no-show, the follow-up that prompts the rebooking, the reactivation message when a client has not returned, and the review request after checkout. The booking tool is one piece. This connects the full retention loop around it so each completed service generates the next one.',
    },
    {
      q: 'I am a solo stylist with no front desk. Is this built for my size of business?',
      a: 'Yes — and it may be more valuable for a solo provider than for a multi-chair salon. When there is no front desk to absorb manual follow-up, automation covers the gap entirely. You start with the pieces that address your biggest revenue leak and build from there. The system is configured to your service types and schedule, not a generic template.',
    },
    {
      q: 'Can the system help fill last-minute cancellations?',
      a: 'Yes. The waitlist component monitors for cancelled slots and automatically notifies clients on a waitlist when a spot opens at their preferred time or with their preferred provider. This recovers a portion of cancelled appointments that would otherwise become empty slots in your day.',
    },
  ],

  ctaHeadline:     'Find out what your booking flow is costing you — before you lose another slot',
  ctaBody:         'We look at your current booking process, no-show rate, and rebooking gaps and show you exactly where the system closes them. No pitch. No obligation.',
  ctaPrimaryLabel: 'Get a Free Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/beauty-wellness/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/beauty-wellness/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function BeautyWellnessAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/beauty-wellness/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Beauty & Wellness',              url: '/industries/beauty-wellness' },
            { name: 'Appointment Booking Automation', url: '/industries/beauty-wellness/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/beauty-wellness/appointment-booking-automation',
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
