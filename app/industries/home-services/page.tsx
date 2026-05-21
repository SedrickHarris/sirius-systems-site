import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'home-services',
  metaTitle: 'Home Services Automation: AI, Booking & Reviews | Sirius Systems',
  metaDescription:
    'AI automation, missed-call recovery, appointment booking, and review systems for home service businesses: plumbers, HVAC, roofers, landscapers, and 16 more trades.',
  eyebrow: 'Home Services',
  headline: 'Stop Losing Jobs to the Business That Answered First',
  subheadline:
    "Home service businesses run lean. When a lead calls and gets voicemail, they call the next name on the list. We build the system that answers, qualifies, books, and follows up: so you stop leaving jobs on the table.",
  heroHighlights: [
    'Missed-call recovery: text-back within 60 seconds',
    'Booking automation across web, voice, and SMS',
    'Review requests after every completed job',
    'Local search + GBP visibility you actually own',
  ],
  problemHeadline: "What's leaking revenue right now",
  problems: [
    'Calls go to voicemail after hours and the lead books a competitor before 8 AM.',
    'Estimates get sent and never followed up on: the job goes to whoever called back first.',
    'Happy customers finish the job without leaving a review because no one asked at the right moment.',
    "The website generates traffic but doesn't capture, qualify, or route leads anywhere useful.",
  ],
  systemsHeadline: 'The automation stack for home services',
  serviceSlugs: [
    'ai-voicebots',
    'appointment-booking-automation',
    'review-automation',
    'lead-generation-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  subVerticalsHeadline: 'Built for how your trade actually runs',
  featured: [
    {
      name: 'Plumbing',
      blurb:
        'Emergency call capture, after-hours booking, and review automation for plumbers running solo or managing a crew.',
    },
    {
      name: 'HVAC & Air Conditioning',
      blurb:
        'Seasonal lead capture, maintenance reminders, and review systems for HVAC companies competing in crowded local markets.',
    },
    {
      name: 'Roofing',
      blurb:
        'Storm-season lead flow, estimate follow-up automation, and review velocity for roofing contractors.',
    },
    {
      name: 'Landscaping & Lawn Care',
      blurb:
        'Recurring service booking, seasonal upsell flows, and review automation for landscaping businesses.',
    },
  ],
  compact: [
    {
      name: 'House Cleaning & Maid Services',
      blurb:
        'Recurring booking automation and review flows for cleaning businesses scaling past word-of-mouth.',
    },
    {
      name: 'Junk Removal & Hauling',
      blurb:
        'Same-day lead capture, routing, and post-job review requests that compound over time.',
    },
    {
      name: 'Electrical',
      blurb:
        "Emergency call handling and appointment booking for electricians who can't afford to miss a job.",
    },
    {
      name: 'Painting (Interior & Exterior)',
      blurb:
        'Estimate follow-up automation and review requests for painting contractors building a referral engine.',
    },
    {
      name: 'Pest Control & Extermination',
      blurb:
        'Recurring contract automation and review systems for pest control operators.',
    },
    {
      name: 'Pressure Washing & Soft Washing',
      blurb:
        'Lead capture, seasonal outreach, and review automation for pressure washing businesses.',
    },
    {
      name: 'Pool Service & Maintenance',
      blurb:
        'Recurring scheduling, reminder automation, and review flows for pool service companies.',
    },
    {
      name: 'Handyman Services',
      blurb:
        'Booking automation and review requests for handyman operators competing on responsiveness.',
    },
    {
      name: 'Garage Door Service & Repair',
      blurb:
        'After-hours call capture and fast booking automation for garage door service businesses.',
    },
    {
      name: 'Window Cleaning',
      blurb:
        'Recurring appointment automation and review systems for window cleaning operators.',
    },
    {
      name: 'Gutter Cleaning & Guards',
      blurb:
        'Seasonal lead capture and review automation for gutter cleaning businesses.',
    },
    {
      name: 'Appliance Repair',
      blurb:
        'Fast call capture, booking automation, and follow-up for appliance repair technicians.',
    },
    {
      name: 'Carpet & Upholstery Cleaning',
      blurb:
        'Recurring booking flows and review automation for carpet and upholstery cleaning businesses.',
    },
    {
      name: 'Moving Services',
      blurb:
        'Lead qualification, booking, and review automation for moving companies.',
    },
    {
      name: 'Tree Service & Arborist',
      blurb:
        'Estimate follow-up and review automation for tree service and arborist businesses.',
    },
    {
      name: 'Home Inspection',
      blurb:
        'Booking automation and review flows for home inspectors building a referral reputation.',
    },
  ],
  // FAQs: same array drives the visible FAQ rendering and the FAQPage
  // JSON-LD on the page. Q3 timing language is intentionally non-specific
  // pending client confirmation.
  faqs: [
    {
      q: 'What types of home service businesses do you work with?',
      a: 'We work with any trade or service that operates locally: plumbers, HVAC companies, roofers, landscapers, cleaners, electricians, pest control operators, and more. If your business depends on phone calls, appointments, and local reputation, the system applies.',
    },
    {
      q: 'Do I need to already have a CRM or website?',
      a: "No. We can work with what you have or build the missing pieces. Most home service businesses we work with either have no CRM (we set one up) or have one they're not using effectively (we configure and connect it). The website situation is similar.",
    },
    {
      q: 'How quickly can you set up the missed-call and booking automation?',
      a: "Setup time depends on what's already in place. A standalone missed-call text-back and booking link can typically be operational in days. A full system buildout with CRM, automations, and review flows takes longer: we scope it during the discovery call.",
    },
    {
      q: 'Will this work for a solo operator or only larger businesses?',
      a: 'Both. A solo plumber benefits from missed-call recovery and automated review requests the same way a 10-truck HVAC company does. The system scales: you start with the pieces that address your biggest leak and add from there.',
    },
    {
      q: 'What does the automation actually replace?',
      a: "Mostly the manual tasks that fall through the cracks: following up on estimates, texting customers when you're running late, asking for a review after the job, responding to leads after hours. The automation handles those consistently so you're focused on the work, not the admin.",
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

export default function HomeServicesIndustryPage() {
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
            { name: 'Home Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
