import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'auto-services',

  metaTitle:
    'Auto Shop Automation: Booking, Reviews & CRM | Sirius Systems',

  metaDescription:
    'Missed-call recovery, review automation, appointment booking, and service interval follow-up for auto repair shops, detailers, tire shops, and mobile mechanics.',

  eyebrow: 'Auto Services',

  headline:
    'Auto repair shop automation: capture every call, fill every bay, and bring customers back.',

  subheadline:
    'Your shop runs on volume and reputation. We build the system that recovers missed calls, books appointments, requests reviews, and reminds customers when it\'s time to come back — running automatically between every job.',

  heroHighlights: [
    'AI voicebot answers when the shop is too busy to pick up',
    'Online booking that doesn\'t require a phone call during business hours',
    'Automated review requests sent right after each job closes',
    'Service interval reminders that bring customers back without manual outreach',
  ],

  problemHeadline: 'Where auto shops leave money behind',

  problems: [
    'The phone rings while a tech is under a car. It goes to voicemail. That caller books the shop down the street before you call back.',
    'A customer drives away satisfied and never leaves a review — because the shop never asked. Your competitor with 200 more Google reviews keeps getting the walk-in traffic instead.',
    'An oil change customer comes in once, gets a great result, and disappears. There\'s no system to remind them when they\'re due back — so they go wherever they see first next time.',
    'A customer asks for an estimate over the phone or through your site. You give them a number. They say they\'ll think about it. No follow-up fires, and the job never converts.',
  ],

  systemsHeadline: 'The system stack for auto service businesses',

  systemsCopy:
    'Auto service businesses run on speed and repeat business. Every service below is built to close the gaps: from the first missed call to the fifth return visit.',

  serviceSlugs: [
    'reputation-management',
    'review-automation',
    'ai-voicebots',
    'appointment-booking-automation',
    'google-business-profile-optimization',
    'crm-automation',
  ],

  subVerticalsHeadline: 'Built for every corner of the auto services vertical',

  subVerticalsCopy:
    'Whether you run a high-volume repair shop, a mobile detail operation, or a specialty tire and wheel business, the core problems are the same. The system is configured around your operation type.',

  featured: [
    {
      name: 'Auto Repair Shops & General Mechanics',
      blurb:
        'Missed-call recovery, service reminders, and review automation for independent repair shops and general mechanics.',
    },
    {
      name: 'Auto Detailing & Ceramic Coating',
      blurb:
        'Online booking, automated follow-up, and review requests for mobile detailers and shop-based coating specialists.',
    },
    {
      name: 'Tire & Wheel Shops',
      blurb:
        'Appointment booking and review automation for tire shops competing on local search.',
    },
    {
      name: 'Auto Body & Collision Repair',
      blurb:
        'Estimate follow-up, CRM, and reputation management for body shops and collision repair centers.',
    },
  ],

  compact: [
    {
      name: 'Oil Change & Quick-Lube Centers',
      blurb:
        'Service interval reminders and review flows for high-volume quick-lube operations.',
    },
    {
      name: 'Mobile Mechanics',
      blurb:
        'Booking, follow-up, and GBP optimization for mobile mechanics operating without a fixed location.',
    },
  ],

  faqs: [
    {
      q: 'Can an AI voicebot actually handle auto shop calls?',
      a: 'For the most common inbound calls — "What are your hours?", "Do you have availability this week?", "How much does an oil change cost?" — yes. The voicebot handles those immediately and collects the customer\'s information. For complex diagnostic questions, it captures the inquiry and routes it to a callback. Your techs stop getting pulled off jobs for questions the system can answer.',
    },
    {
      q: 'How does automated review follow-up work for a shop?',
      a: 'After a job closes, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable — typically the same day or the morning after. The customer gets one message at the right moment, while the experience is still fresh. No manual step is required from the shop.',
    },
    {
      q: 'Can the system send service interval reminders — like oil change follow-ups?',
      a: 'Yes. Once a customer\'s visit is logged, a follow-up sequence can be scheduled based on the service type. An oil change triggers a reminder at 3 months or 3,000 miles depending on how you want to configure it. Tire rotations, inspections, and seasonal services all have predictable return windows the system can track and message around.',
    },
    {
      q: 'What about shops with no online booking — do customers have to switch how they call in?',
      a: 'No. Online booking is an addition, not a replacement. Customers who prefer to call still call. The AI voicebot handles after-hours and high-volume periods; the booking link handles customers who would rather self-schedule. Both paths feed the same calendar and CRM.',
    },
    {
      q: 'Does this work for mobile mechanics and detailers without a physical location?',
      a: 'Yes. The same core systems — booking, follow-up, review requests, and CRM — apply equally to mobile operators. The main difference is that GBP optimization for a service-area business has a few additional steps, which we handle during setup.',
    },
  ],

  ctaHeadline: 'Ready to stop losing jobs between phone rings?',

  ctaBody:
    'Tell us how your shop currently handles missed calls, follow-up, and reviews. We\'ll map where the gaps are and show you what the system looks like for your operation.',

  ctaPrimaryLabel: 'Build My System',
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

export default function AutoServicesIndustryPage() {
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
            { name: 'Auto Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
