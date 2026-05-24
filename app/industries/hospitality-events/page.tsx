import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'hospitality-events',
  metaTitle: 'Hospitality & Events Business Automation | Sirius Systems',
  metaDescription:
    'AI automation, booking systems, and reputation management for restaurants, event venues, wedding planners, hotels, caterers, and hospitality businesses.',
  eyebrow: 'Hospitality & Events',
  headline: 'The System That Fills Your Calendar and Earns Your Next Review',
  subheadline:
    'Hospitality is a reputation business. The venues, restaurants, and event companies that grow are the ones with the most reviews, the fastest inquiry responses, and the cleanest booking experience.',
  heroHighlights: [
    'Inquiry capture and response automation — no event lead goes unanswered',
    'Booking confirmation and reminder sequences that reduce no-shows',
    'Post-event review generation to build your reputation on Google',
    'Reputation monitoring and AI-generated review responses',
  ],
  problemHeadline: 'Where hospitality and events businesses lose bookings',
  problems: [
    'Venue and event inquiries come in on nights and weekends when no one is available to respond, and the couple or client books somewhere else.',
    'You deliver a great experience but do not have a system that asks guests or clients for a review at the right moment after the event.',
    'Booking confirmations and reminders are handled manually, which leads to miscommunications, no-shows, and last-minute changes.',
    'Your reputation on Google does not reflect the quality of your events because reviews are inconsistent and unmanaged.',
  ],
  systemsHeadline: 'The automation stack built for hospitality and events',
  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'ai-review-responses',
    'lead-generation-automation',
  ],
  subVerticalsHeadline: 'Hospitality and events businesses we work with',
  featured: [
    { name: 'Restaurants & Catering', blurb: 'Reservation automation, inquiry response, and review systems for restaurants and catering companies.' },
    { name: 'Event & Wedding Venues', blurb: 'Inquiry capture, booking automation, and post-event review generation for event spaces.' },
    { name: 'Wedding & Event Planners', blurb: 'Lead follow-up and client communication automation for wedding and event planning businesses.' },
    { name: 'Hotels & Boutique Hotels', blurb: 'Guest communication automation and reputation management for hotels and boutique properties.' },
    { name: 'Photographers & Videographers', blurb: 'Inquiry response, booking automation, and review generation for event photographers and videographers.' },
  ],
  compact: [
    { name: 'DJs & Live Entertainment', blurb: 'Booking automation and review systems for DJs and live entertainment providers.' },
    { name: 'Florists & Event Decorators', blurb: 'Inquiry follow-up and review generation for florists and event decorators.' },
    { name: 'Party Rental Companies', blurb: 'Booking automation and review systems for party and event rental businesses.' },
    { name: 'Food Trucks & Bakeries', blurb: 'Inquiry response and review generation for food trucks and specialty bakeries.' },
    { name: 'Bartending Services', blurb: 'Booking automation and follow-up for event bartending businesses.' },
    { name: 'Photo Booth Companies', blurb: 'Inquiry capture and booking automation for photo booth rental businesses.' },
    { name: 'Tourism & Tour Operators', blurb: 'Booking follow-up and review systems for tourism and tour operator businesses.' },
    { name: 'Conference Centers & Banquet Halls', blurb: 'Inquiry automation and reputation management for conference and banquet facilities.' },
    { name: 'Corporate Event Services', blurb: 'Lead follow-up and booking automation for corporate event planning and production.' },
  ],
  faqs: [
    {
      q: 'What types of hospitality businesses do you work with?',
      a: 'We work with restaurants, event venues, wedding planners, hotels, caterers, photographers, and event service providers of all sizes. If your business depends on bookings, reviews, and inquiry response, the system applies.',
    },
    {
      q: 'Can you automate responses to venue and event inquiries?',
      a: 'Yes. When an inquiry comes in through your website or contact form, an automated response goes out immediately. A follow-up sequence keeps the conversation going until the lead books or opts out.',
    },
    {
      q: 'How does review generation work after an event?',
      a: 'After the event or service is complete, an automated message asks the guest or client to leave a review on Google. Timing and messaging are configured around your workflow. The system requests reviews from real customers — it does not fabricate them.',
    },
    {
      q: 'Can you help manage negative reviews?',
      a: 'We build systems that monitor your reviews and generate AI-drafted responses — positive and negative — for your review or direct posting. Responses follow your brand voice and do not make claims we cannot support.',
    },
    // TODO: confirm with client which booking or reservation platforms they use
    {
      q: 'Do you connect to reservation or booking platforms?',
      a: 'Integration capability depends on which platforms you use. We evaluate this during onboarding. We confirm compatibility during onboarding.',
    },
  ],
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
