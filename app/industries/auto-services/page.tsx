import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'auto-services',
  metaTitle: 'Auto Services Automation: Booking, Reviews & CRM | Sirius Systems',
  metaDescription:
    'Appointment booking automation, AI chatbots, review systems, and CRM for auto repair shops, detailers, tire shops, body shops, and other auto service businesses.',
  eyebrow: 'Auto Services',
  headline:
    'Customers are searching for a shop right now. Your system should close them before they move on.',
  subheadline:
    'Auto service businesses win or lose on speed and reputation. We build the system that captures the inquiry, books the appointment, sends the reminder, and earns the review: running automatically between jobs.',
  heroHighlights: [
    'Online booking from any device, in seconds',
    'Service reminders + rebooking automation',
    'Review requests sent right after each job',
    'GBP optimization for local search visibility',
  ],
  problemHeadline: 'Where auto shops lose business',
  problems: [
    "A customer searches for a shop, lands on your site, and leaves because there's no fast way to book or ask a question.",
    'Appointment slots go unfilled because the booking process requires a phone call during business hours.',
    'Jobs get completed without a review request: and the competitor down the street with 200 more reviews keeps winning the search.',
    "Repeat customers drift away because there's no system to bring them back for oil changes, seasonal service, or follow-up work.",
  ],
  systemsHeadline: 'The service stack for auto businesses',
  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'review-automation',
    'crm-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  subVerticalsHeadline: 'Built around your shop type',
  featured: [
    { name: 'Auto Detailing (Mobile & Shop)', blurb: 'Online booking, automated reminders, and review systems for mobile and shop-based auto detailers.' },
    { name: 'Auto Repair & General Mechanics', blurb: 'Appointment booking automation, service reminders, and review flows for general repair shops.' },
    { name: 'Body Shops & Collision Repair', blurb: 'Lead capture, estimate follow-up, and reputation management for body shops and collision repair centers.' },
    { name: 'Tire Shops', blurb: 'Online appointment booking and review automation for tire shops competing on local search.' },
  ],
  compact: [
    { name: 'Windshield Repair & Replacement', blurb: 'Fast booking automation and review requests for windshield repair and replacement businesses.' },
    { name: 'Oil Change & Lube Shops', blurb: 'Rebooking automation and review systems for oil change and quick-lube operators.' },
    { name: 'Transmission & Drivetrain', blurb: 'Lead capture and estimate follow-up for transmission and drivetrain specialists.' },
    { name: 'Towing & Roadside Assistance', blurb: 'Emergency call handling and follow-up automation for towing and roadside assistance operators.' },
    { name: 'Car Wash (Self-Serve & Full-Service)', blurb: 'Booking automation and review flows for full-service car wash operations.' },
    { name: 'RV & Camper Service', blurb: 'Appointment booking and service reminders for RV and camper repair businesses.' },
    { name: 'Motorcycle & Powersports', blurb: 'Booking automation and review systems for motorcycle and powersports service shops.' },
    { name: 'Fleet Maintenance', blurb: 'CRM automation and recurring service scheduling for fleet maintenance operators.' },
  ],
  // FAQ Q5 (shop management integrations) intentionally non-committal
  // until client confirms supported platforms.
  faqs: [
    {
      q: 'What types of auto service businesses do you work with?',
      a: 'We work with repair shops, detailers, tire shops, body shops, oil change operators, towing businesses, and other auto service providers. If your business depends on bookings, local search, and customer reviews, the system applies.',
    },
    {
      q: 'Can customers book appointments online through this system?',
      a: 'Yes. The booking automation puts a real-time scheduling link on your website and in any automated message: so customers can book without calling during business hours. The appointment goes directly into your calendar.',
    },
    {
      q: 'How do you help with repeat business and retention?',
      a: 'The CRM and automation stack tracks customers and their service history, then triggers follow-up at the right interval: oil change reminders, seasonal service prompts, or a simple check-in. That sequence brings customers back without you manually tracking it.',
    },
    {
      q: 'How does review automation work for an auto shop?',
      a: 'After each job closes, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable: typically same day or next day. No manual step required from the shop.',
    },
    {
      q: 'Do you integrate with shop management software?',
      a: "It depends on the software. We evaluate your current stack during onboarding and build integrations where they're available. If a direct integration isn't supported, we configure a workflow bridge.",
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
