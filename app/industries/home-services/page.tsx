import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'home-services',

  metaTitle:
    'AI Automation for Home Service Businesses | Sirius Systems',

  metaDescription:
    'Missed-call recovery, appointment booking, and automated review requests for home service businesses: plumbers, HVAC, roofers, and 16 more trades.',

  eyebrow: 'Home Services',

  headline: 'Stop Losing Jobs to the Business That Answered First',

  subheadline:
    'Home service businesses run lean. When a lead calls and gets voicemail, they call the next name on the list. We build the system that answers, qualifies, books, and follows up so you stop leaving jobs on the table.',

  heroHighlights: [
    'Missed-call recovery: automated text-back when you cannot answer',
    'Booking automation across web, voice, and SMS',
    'Review requests sent after every completed job',
    'Local search and GBP visibility you actually control',
  ],

  problemHeadline: "What's leaking revenue right now",

  problems: [
    'Calls go to voicemail after hours. The lead books a competitor before you open in the morning.',
    'Estimates get sent and sit there. The job goes to whoever followed up first.',
    'Happy customers finish the job and never leave a review because no one asked at the right moment.',
    'The website generates traffic but has no system behind it — leads arrive, stall, and leave.',
  ],

  systemsHeadline: 'The automation stack for home services',

  systemsCopy:
    'These are the six systems that address how home service businesses actually lose revenue. You do not need to understand how each one works. You need to know that together, they close the gaps.',

  serviceSlugs: [
    'ai-voicebots',
    'appointment-booking-automation',
    'review-automation',
    'lead-generation-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  productCallout: {
    lead: 'Run a plumbing business? We package the managed website and instant lead-response system into one flat-rate offer built specifically for plumbers:',
    linkLabel: 'the Plumber Growth System',
    href: '/plumber-growth-system',
  },

  subVerticalsHeadline: 'Built for how your trade actually runs',

  subVerticalsCopy:
    'Every trade has its own version of the same problem: calls come in at the worst time, estimates go cold, and jobs get done without leaving a review trail. The specifics differ. The system is the same.',

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
        "Emergency call handling and appointment booking for electricians who cannot afford to miss a job.",
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

  // TODO: confirm exact setup timelines with client before publishing Q5
  faqs: [
    {
      q: 'Do home service businesses actually need AI automation, or is this for bigger companies?',
      a: 'The system is built specifically for small and mid-size home service businesses — solo operators, two- and three-person crews, and companies up to around 15 employees. The core problem it solves — missed calls, no follow-up, no review system — is most acute at that size, not at the enterprise level. Larger companies have staff to handle these things. You do not.',
    },
    {
      q: 'What happens when a lead calls after hours and I am not available?',
      a: 'The AI voicebot answers, introduces itself as part of your business, qualifies the lead with a few questions, and either books the appointment or captures the contact for morning follow-up. The lead gets a response within seconds. You get a notification with the details when you are available.',
    },
    {
      q: 'How does the review automation work after a job is complete?',
      a: 'Once a job closes in your system, a review request goes out by text at a timed interval — enough time for the customer to experience the result but not so long that the moment passes. The message links directly to your Google Business Profile. No copy-paste instructions, no QR codes to manage. The customer taps and reviews.',
    },
    {
      q: 'Does this work if I already have a website, or do I need a new one?',
      a: 'The automation connects to your existing site in most cases. If your current site cannot support the lead capture or booking flow we need, we will scope that during the discovery call. You do not need to rebuild your site to use the system.',
    },
    {
      q: 'How long before the system starts producing results?',
      a: 'Basic lead capture and follow-up sequences can go live within days of a completed setup. Review automation and GBP optimization produce compounding results over weeks and months, not overnight. We scope exact timelines during the discovery call.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit.',

  ctaBody:
    "We will map where leads, reviews, or follow-up are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.",

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-home-services.webp', alt: DATA.metaTitle }],
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
