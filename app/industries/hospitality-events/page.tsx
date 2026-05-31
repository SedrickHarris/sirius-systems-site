import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'hospitality-events',

  metaTitle: 'Hospitality & Events Automation | Sirius Systems',

  metaDescription:
    'Inquiry capture, booking automation, and review systems for restaurants, event venues, wedding planners, hotels, caterers, and event service providers.',

  eyebrow: 'Hospitality & Events',

  headline:
    'The inquiry that goes unanswered on a Friday night is the booking someone else gets',

  subheadline:
    'Hospitality and events businesses run on timing. A venue inquiry that arrives at 9 PM and gets a reply Monday morning is already booked somewhere else. An event that leaves a client thrilled but produces no review is a missed acquisition. The system that captures every inquiry, confirms every booking, and asks for the review at the right moment is the one that grows.',

  heroHighlights: [
    'After-hours inquiry capture — every lead acknowledged within minutes',
    'Booking confirmation and reminder sequences that cut no-shows',
    'Post-event review requests sent at the right moment on Google',
    'AI-drafted review responses so no review goes unanswered',
  ],

  problemHeadline: 'Where hospitality and events businesses lose revenue',

  problems: [
    'Venue and event inquiries arrive on evenings and weekends when no one is available. The lead books the next venue that responds first.',
    'A great event or guest experience produces no review because no one asked. The reputation stays flat while competitors collect reviews after every job.',
    'Booking confirmations and reminders are handled manually. Last-minute no-shows and miscommunications crowd out real bookings.',
    'Negative reviews accumulate without responses. Unanswered reviews signal to every future guest that service stops after checkout.',
  ],

  systemsHeadline: 'Inquiry, booking, and reputation automation for hospitality and events',

  systemsCopy:
    'The gap between a full calendar and a half-empty one is usually not marketing — it is response speed and reputation. These are the six systems that close that gap, from the moment an inquiry lands to the review that brings the next booking.',

  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'ai-review-responses',
    'lead-generation-automation',
  ],

  subVerticalsHeadline: 'Built for every corner of the hospitality and events industry',

  subVerticalsCopy:
    'The work — capturing inquiries, confirming bookings, following up after an event, requesting reviews — is operational, not creative. The system fits around your workflow whether you run a 300-seat venue or a solo planning business.',

  featured: [
    {
      name: 'Event & Wedding Venues',
      blurb:
        'Inquiry capture, booking confirmation, and post-event review generation for event spaces and wedding venues of all sizes.',
    },
    {
      name: 'Restaurants & Catering',
      blurb:
        'Reservation follow-up, after-hours inquiry automation, and review systems for restaurants, catering companies, and private dining operations.',
    },
    {
      name: 'Wedding & Event Planners',
      blurb:
        'Lead follow-up, client communication automation, and review generation for solo planners and small planning agencies.',
    },
    {
      name: 'Hotels & Boutique Properties',
      blurb:
        'Guest communication automation and reputation management for hotels, inns, and boutique lodging properties.',
    },
  ],

  compact: [
    {
      name: 'Photographers & Videographers',
      blurb:
        'Inquiry response, booking automation, and review generation for event photographers and videographers.',
    },
    {
      name: 'DJs & Live Entertainment',
      blurb:
        'Booking confirmation, reminder sequences, and review systems for DJs and live entertainment providers.',
    },
    {
      name: 'Florists & Event Decorators',
      blurb:
        'Inquiry follow-up, booking confirmation, and post-event review requests for florists and event decorators.',
    },
    {
      name: 'Party Rental Companies',
      blurb:
        'Booking automation, delivery confirmation, and review systems for party and event rental businesses.',
    },
    {
      name: 'Food Trucks & Specialty Bakeries',
      blurb:
        'Inquiry response, event booking follow-up, and review generation for food trucks and specialty bakeries.',
    },
    {
      name: 'Bartending & Bar Services',
      blurb:
        'Booking automation and post-event review follow-up for event bartending and mobile bar businesses.',
    },
    {
      name: 'Photo Booth Companies',
      blurb:
        'Inquiry capture, booking confirmation, and review requests for photo booth rental businesses.',
    },
    {
      name: 'Tour Operators & Experiences',
      blurb:
        'Booking follow-up, guest communication, and review systems for tourism operators and experience-based businesses.',
    },
    {
      name: 'Conference Centers & Banquet Halls',
      blurb:
        'Inquiry automation, booking management, and reputation management for conference facilities and banquet halls.',
    },
  ],

  faqs: [
    {
      q: 'What types of hospitality and events businesses do you work with?',
      a: 'We work with restaurants, event venues, wedding planners, hotels, caterers, photographers, DJs, florists, and event rental companies. If your business takes bookings, hosts guests, or runs events — and relies on reviews and referrals to grow — the system applies.',
    },
    {
      q: 'How does inquiry automation work for a venue or restaurant?',
      a: 'When a lead submits an inquiry form, sends a message, or calls outside business hours, an automated response goes out within minutes — acknowledging the inquiry, collecting key event details, and moving the conversation forward without anyone on your team being available. Qualified leads are flagged for follow-up or routed directly to your booking calendar.',
    },
    {
      q: 'Can you automate review requests after an event or guest experience?',
      a: 'Yes. The review request sequence fires automatically at the right moment after an event closes or a guest checks out — typically within 24 hours while the experience is still fresh. Requests go to Google Business Profile. Timing and messaging are scoped to your operation during setup.',
    },
    {
      q: 'How does this system handle no-shows and last-minute cancellations?',
      a: 'The booking confirmation and reminder sequence sends automated confirmations at booking, then reminder messages in the days and hours before the event. This reduces the manual back-and-forth and catches conflicts early. It does not replace your cancellation policy — it enforces it by keeping every booking in communication.',
    },
    {
      q: 'Do you work with solo event planners and small venues as well as larger operations?',
      a: 'Yes. The system scales to operation size. A solo wedding planner and a multi-room venue have the same core problem — inquiry response speed and post-event reviews. We scope the setup to what actually fits your workflow and team size during the discovery call.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit for your hospitality business.',

  ctaBody:
    'We will map where inquiries, bookings, or reviews are leaking and show you the order of operations to fix it. Walk away with the plan whether or not we work together.',

  ctaPrimaryLabel: 'Get a Free Audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-hospitality-events.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsIndustryPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/industries/${DATA.slug}`,
            name: DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: 'Hospitality & Events', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
