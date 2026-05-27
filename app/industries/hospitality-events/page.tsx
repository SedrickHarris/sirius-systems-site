import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'hospitality-events',

  metaTitle: 'Hospitality Automation: Booking & Reviews | Sirius Systems',

  metaDescription:
    'Inquiry capture, booking automation, and review systems for restaurants, event venues, wedding planners, hotels, caterers, and event service providers.',

  eyebrow: 'Hospitality & Events',

  headline:
    'The Inquiry That Goes Unanswered on a Friday Night Is the Booking Someone Else Gets',

  subheadline:
    'Hospitality and events businesses run on timing. A venue inquiry that comes in at 9 PM and gets a response Monday morning is already gone. A wedding or event that leaves the client thrilled but produces no review is a missed acquisition. The system that captures every inquiry, confirms every booking, and asks for the review at the right moment is the one that compounds.',

  heroHighlights: [
    'After-hours inquiry capture — every lead acknowledged within minutes',
    'Booking confirmation and reminder sequences that reduce no-shows',
    'Post-event review requests sent at the right moment on Google',
    'AI-drafted review responses so no review goes unanswered',
  ],

  problemHeadline: 'Where hospitality and events businesses lose revenue',

  problems: [
    'Venue and event inquiries arrive on evenings and weekends when no one is available. The lead books the next venue that responds.',
    'A great event or guest experience produces no review because no one asked. The reputation stays flat while competitors collect reviews from every job.',
    'Booking confirmations and reminders are handled manually. Last-minute no-shows and miscommunications fill the gaps with emergencies instead of bookings.',
    'Negative reviews accumulate without responses. Unanswered reviews signal to every future customer that service stops after checkout.',
  ],

  systemsHeadline: 'Inquiry, booking, and reputation automation for hospitality',

  systemsCopy:
    'Hospitality businesses live and die on inquiry response speed and reputation. These are the six systems that protect both — from the moment a lead comes in to the review that brings the next one.',

  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'ai-review-responses',
    'lead-generation-automation',
  ],

  subVerticalsHeadline: 'Built for the way hospitality businesses actually run',

  subVerticalsCopy:
    'The automation work — capturing inquiries, confirming bookings, following up after an event, requesting reviews — is operational, not creative. The system fits around your workflow, whether you run a restaurant, a venue, or a solo event planning business.',

  featured: [
    {
      name: 'Event & Wedding Venues',
      blurb:
        'Inquiry capture, booking confirmation, and post-event review generation for event spaces and wedding venues.',
    },
    {
      name: 'Restaurants & Catering',
      blurb:
        'Reservation follow-up, inquiry automation, and review systems for restaurants and catering businesses.',
    },
    {
      name: 'Wedding & Event Planners',
      blurb:
        'Lead follow-up and client communication automation for wedding and event planning businesses.',
    },
    {
      name: 'Hotels & Boutique Properties',
      blurb:
        'Guest communication automation and reputation management for hotels and boutique lodging.',
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
        'Booking automation and review systems for DJs and live entertainment providers.',
    },
    {
      name: 'Florists & Event Decorators',
      blurb:
        'Inquiry follow-up and review generation for florists and event decorators.',
    },
    {
      name: 'Party Rental Companies',
      blurb:
        'Booking automation and review systems for party and event rental businesses.',
    },
    {
      name: 'Food Trucks & Specialty Bakeries',
      blurb:
        'Inquiry response and review generation for food trucks and specialty bakeries.',
    },
    {
      name: 'Bartending & Bar Services',
      blurb:
        'Booking automation and follow-up for event bartending and mobile bar businesses.',
    },
    {
      name: 'Photo Booth Companies',
      blurb:
        'Inquiry capture and booking automation for photo booth rental businesses.',
    },
    {
      name: 'Tour Operators & Experiences',
      blurb:
        'Booking follow-up and review systems for tourism and experience-based businesses.',
    },
    {
      name: 'Conference Centers & Banquet Halls',
      blurb:
        'Inquiry automation and reputation management for conference and banquet facilities.',
    },
  ],

  faqs: [
    {
      q: 'What types of hospitality and events businesses do you work with?',
      a: 'We work with restaurants, event venues, wedding planners, hotels, caterers, photographers, and event service providers. If your business depends on inquiry response, bookings, and reviews, the system applies.',
    },
    {
      q: 'Can you automate responses to venue and event inquiries?',
      a: 'Yes. When an inquiry comes in through your website or contact form, an automated response goes out within minutes. A follow-up sequence keeps the lead engaged until they book or opt out — without you touching it manually.',
    },
    {
      q: 'How does review generation work after an event?',
      a: 'After the event or service is complete, an automated message asks the guest or client to leave a review on Google. Timing and messaging are configured around your workflow. The system asks real customers for real reviews — it does not fabricate them.',
    },
    {
      q: 'Can you help with negative reviews?',
      a: 'We build systems that monitor your incoming reviews and generate AI-drafted responses — for positive and negative reviews — for your approval or direct posting. Every review gets a response, which signals attentiveness to future customers reading your profile.',
    },
    {
      q: 'Do you work with solo event planners and small venues, or only larger operations?',
      a: 'The system scales. A solo wedding planner and a multi-room event venue have the same core problem — inquiry response and post-event reviews. We scope the system to what actually applies to your operation size and workflow.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit for your hospitality business.',

  ctaBody:
    "We'll map where inquiries, bookings, or reviews are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.",

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
