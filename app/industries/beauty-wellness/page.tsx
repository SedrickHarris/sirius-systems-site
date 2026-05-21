import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'beauty-wellness',
  metaTitle:
    'Beauty & Wellness Automation — Booking, Reviews & AI | Sirius Systems',
  metaDescription:
    'Appointment booking automation, rebooking flows, review systems, and AI chatbots for salons, med spas, personal trainers, day spas, and other beauty and wellness businesses.',
  eyebrow: 'Beauty & Wellness',
  headline: 'A Full Chair Starts with a System That Books While You Work.',
  subheadline:
    'Beauty and wellness businesses run on repeat clients and word-of-mouth. We build the system that books new clients automatically, brings existing ones back, reduces no-shows, and earns the reviews that make your chair the obvious choice.',
  heroHighlights: [
    'Online booking + rebooking automation',
    'No-show reduction with timed text reminders',
    'Review requests after every appointment',
    'Repeat-client retention sequences',
  ],
  problemHeadline: "What's keeping your calendar from being full",
  problems: [
    'No-shows drain revenue because reminders are sent manually, inconsistently, or not at all.',
    "New clients book once and don't return because there's no rebooking system prompting them at the right interval.",
    'Happy clients leave without leaving a review because asking in person feels awkward and no one follows up.',
    'Booking requires a DM, a phone call, or a text — friction that costs you clients who go to whoever is easier to book.',
  ],
  systemsHeadline: 'The automation stack for beauty and wellness',
  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'crm-automation',
    'review-automation',
    'smart-websites',
    'all-in-one-business-growth-system',
  ],
  subVerticalsHeadline: 'Built for your specific business type',
  featured: [
    { name: 'Hair Salons & Stylists', blurb: 'Online booking, automated rebooking reminders, and review flows for hair salons and independent stylists.' },
    { name: 'Med Spas & Aesthetics', blurb: 'Consultation booking automation, no-show reduction, and reputation management for med spas and aesthetics businesses.' },
    { name: 'Personal Training & Fitness Studios', blurb: 'Session booking automation, membership retention flows, and review systems for personal trainers and fitness studios.' },
    { name: 'Day Spas & Massage', blurb: 'Online booking, rebooking automation, and review flows for day spas and massage therapists.' },
  ],
  compact: [
    { name: 'Barbershops', blurb: 'Online booking and review automation for barbershops competing on local search and reputation.' },
    { name: 'Nail Salons', blurb: 'Appointment booking automation and review flows for nail salons.' },
    { name: 'Tattoo & Piercing Studios', blurb: 'Consultation booking and review systems for tattoo and piercing studios.' },
    { name: 'Eyebrow & Lash Studios', blurb: 'Online booking, automated reminders, and review automation for eyebrow and lash studios.' },
    { name: 'Tanning Salons', blurb: 'Membership retention flows and review systems for tanning salons.' },
    { name: 'Yoga & Pilates Studios', blurb: 'Class booking automation and client retention flows for yoga and Pilates studios.' },
    { name: 'Nutrition & Wellness Coaching', blurb: 'Discovery call booking and CRM automation for nutrition and wellness coaches.' },
    { name: 'Acupuncture & Holistic Health', blurb: 'Appointment booking automation and review flows for acupuncture and holistic health practitioners.' },
  ],
  faqs: [
    {
      q: 'What types of beauty and wellness businesses do you work with?',
      a: 'We work with salons, barbershops, med spas, spas, fitness studios, personal trainers, and other appointment-based beauty and wellness businesses. If your business depends on repeat clients and local reputation, the system applies.',
    },
    {
      q: 'How does the rebooking automation work?',
      a: 'After an appointment is completed, the system sends a follow-up message at the interval you configure — typically 4 to 6 weeks for most beauty services. The message includes a direct booking link. This runs automatically without any manual step from you or your staff.',
    },
    {
      q: 'How do you reduce no-shows?',
      a: 'The system sends automated reminders by text at 24 hours and 2 hours before each appointment. Clients can confirm directly from the message. Confirmed appointments show significantly fewer no-shows than manual reminder systems.',
    },
    {
      q: 'Will this work for a solo stylist or only larger salons?',
      a: 'Both. The system scales to your size. A solo stylist benefits from automated rebooking and review requests the same way a multi-chair salon does. You start with the pieces that address your biggest gap.',
    },
    {
      q: 'How does the review automation work?',
      a: 'After each appointment, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable. No manual follow-up needed from you.',
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

export default function BeautyWellnessIndustryPage() {
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
            { name: 'Beauty & Wellness', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
