import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'auto-services',

  metaTitle: 'Auto Shop Automation: Calls & Reviews | Sirius Systems',

  metaDescription:
    'Missed-call recovery, review automation, booking, and service-interval follow-up for auto repair shops, detailers, tire shops, body shops, and mobile mechanics.',

  eyebrow: 'Auto Services',

  headline:
    'The missed call that went to voicemail is the job your competitor booked',

  subheadline:
    'Auto service businesses run on volume and reputation. The shop that answers first gets the bay. The shop with more Google reviews gets the walk-in. The shop that follows up after every oil change gets the repeat customer. We build the system that handles all three — running automatically between every job.',

  heroHighlights: [
    'AI voicebot answers when the shop is too busy to pick up the phone',
    'Online booking that does not require a call during business hours',
    'Automated review requests sent right after each job closes',
    'Service interval follow-up that brings customers back without manual outreach',
  ],

  problemHeadline: 'Where auto shops leave money behind',

  problems: [
    'The phone rings while a tech is under a car. It goes to voicemail. That caller books the shop down the street before you call back.',
    'A customer drives away satisfied and never leaves a review because the shop never asked. Competitors with stronger Google profiles keep getting the walk-in traffic and the first-time searches.',
    'An oil change customer comes in once, gets a great result, and disappears. There is no system to remind them when they are due back — so they go wherever they see first next time.',
    'A customer asks for an estimate over the phone or through your site. You give them a number. They say they will think about it. No follow-up fires, and the job never converts.',
  ],

  systemsHeadline: 'The automation stack for auto service businesses',

  systemsCopy:
    'Auto service businesses compete on speed of response and strength of reputation. These are the six systems that close the gap between a missed call and a filled bay — and between a satisfied customer and a five-star review.',

  serviceSlugs: [
    'reputation-management',
    'review-automation',
    'ai-voicebots',
    'appointment-booking-automation',
    'google-business-profile-optimization',
    'crm-automation',
  ],

  subVerticalsHeadline: 'Built for every type of auto service business',

  subVerticalsCopy:
    'Whether you run a high-volume repair shop, a mobile detail operation, or a specialty tire and wheel business, the core problems are the same. The system is configured around your operation type and service mix.',

  featured: [
    {
      name: 'Auto Repair Shops & General Mechanics',
      blurb:
        'Missed-call recovery, service interval reminders, and review automation for independent repair shops and general mechanics competing on local search and word of mouth.',
    },
    {
      name: 'Auto Detailing & Ceramic Coating',
      blurb:
        'Online booking, job confirmation sequences, and post-service review requests for mobile detailers and shop-based coating specialists.',
    },
    {
      name: 'Tire & Wheel Shops',
      blurb:
        'Appointment booking, seasonal service reminders, and review automation for tire shops where repeat business and local search rank drive volume.',
    },
    {
      name: 'Auto Body & Collision Repair',
      blurb:
        'Estimate follow-up sequences, CRM pipeline, and reputation management for body shops and collision repair centers where jobs are high-value and trust-dependent.',
    },
  ],

  compact: [
    {
      name: 'Oil Change & Quick-Lube Centers',
      blurb:
        'Service interval reminders and review flows for high-volume quick-lube operations with predictable return windows.',
    },
    {
      name: 'Mobile Mechanics',
      blurb:
        'Booking automation, job confirmation, and GBP optimization for mobile mechanics operating without a fixed location.',
    },
    {
      name: 'Windshield & Auto Glass Repair',
      blurb:
        'Inquiry capture, booking automation, and review requests for windshield repair and auto glass replacement businesses.',
    },
    {
      name: 'Transmission Repair Shops',
      blurb:
        'Estimate follow-up and reputation management for transmission specialists where jobs are high-value and referral-driven.',
    },
    {
      name: 'Brake Repair Specialists',
      blurb:
        'Booking automation and review systems for brake and safety service specialists.',
    },
    {
      name: 'Car Wash Facilities',
      blurb:
        'Customer follow-up and review generation for car wash operations building repeat visit frequency.',
    },
    {
      name: 'Motorcycle & ATV Repair',
      blurb:
        'Booking automation and review systems for motorcycle and powersports repair shops.',
    },
    {
      name: 'Towing & Roadside Assistance',
      blurb:
        'Missed-call recovery and follow-up automation for towing and roadside assistance operators.',
    },
    {
      name: 'Smog Check Stations',
      blurb:
        'Booking automation and review generation for smog check and emissions testing stations.',
    },
    {
      name: 'Window Tinting & Car Audio',
      blurb:
        'Inquiry capture, booking confirmation, and review requests for window tinting and car audio installation shops.',
    },
  ],

  faqs: [
    {
      q: 'Can an AI voicebot actually handle auto shop calls?',
      a: 'For the most common inbound calls — hours, availability, pricing on routine services — yes. The voicebot handles those immediately and captures the customer\'s information. For complex diagnostic questions, it collects the inquiry and routes it to a callback. Techs stop getting pulled off jobs for questions the system can answer, and no call goes to voicemail during a busy bay.',
    },
    {
      q: 'How does automated review follow-up work for a shop?',
      a: 'After a job closes, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable — typically the same day or the morning after. The customer gets one message at the right moment while the experience is still fresh. No manual step is required from the shop.',
    },
    {
      q: 'Can the system send service interval reminders for recurring services?',
      a: 'Yes. Once a customer visit is logged, a follow-up sequence can be scheduled based on service type. Oil changes, tire rotations, inspections, and seasonal services all have predictable return windows the system can track and message around. The specific intervals are configured during setup to match how your shop actually works.',
    },
    {
      q: 'What about shops with no online booking — do customers have to change how they call in?',
      a: 'No. Online booking is an addition, not a replacement. Customers who prefer to call still call. The AI voicebot handles after-hours and high-volume periods. The booking link handles customers who would rather self-schedule. Both paths feed the same calendar and CRM.',
    },
    {
      q: 'Does this work for mobile mechanics and detailers without a physical location?',
      a: 'Yes. The core systems — booking, follow-up, review requests, and CRM — apply equally to mobile operators. Google Business Profile optimization for a service-area business has a few additional configuration steps, which we handle during setup.',
    },
  ],

  ctaHeadline: 'Ready to stop losing jobs between phone rings?',

  ctaBody:
    'Tell us how your shop currently handles missed calls, follow-up, and reviews. We will map where the gaps are and show you what the system looks like for your operation.',

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
    images: [{ url: '/images/og/industries-auto-services.webp', alt: DATA.metaTitle }],
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
