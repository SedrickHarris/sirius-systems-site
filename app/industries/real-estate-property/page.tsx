import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'real-estate-property',

  metaTitle:
    'AI Lead Follow-Up for Real Estate Agents | Sirius Systems',

  metaDescription:
    'Lead response automation, CRM follow-up, and review systems for real estate agents, property managers, mortgage companies, and investors.',

  eyebrow: 'Real Estate & Property Services',

  headline: 'The First Agent to Respond Usually Gets the Client',

  subheadline:
    'Real estate runs on speed and relationships. When a new lead comes in while you are showing a property, it sits. By the time you respond, the lead has already heard from two other agents. We build the system that responds immediately, follows up on a schedule, and earns the review that makes the next lead easier to close.',

  heroHighlights: [
    'Immediate lead response by text or email — even when you are showing',
    'Automated nurture sequences for leads that did not convert immediately',
    'Review requests sent after every closed deal',
    'CRM that updates itself and follows up without manual input',
  ],

  problemHeadline: 'Where real estate businesses lose deals',

  problems: [
    'A new lead comes in while you are at a showing. It sits for two hours. Two other agents already responded.',
    'Your CRM has hundreds of contacts from the last 18 months. None of them have heard from you in months.',
    'You closed a deal. The client was happy. They never left a review because no one asked at the right moment.',
    'Past clients drift to other agents. There is no system keeping your name in front of them between transactions.',
  ],

  systemsHeadline:
    'Lead response automation and reputation management for real estate',

  systemsCopy:
    'Real estate has a specific version of the same problem every service business has: speed to response, consistent follow-up, and reviews that build trust before the first call. These are the six systems that address all three.',

  serviceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'appointment-booking-automation',
  ],

  subVerticalsHeadline: 'Built for every part of the real estate market',

  subVerticalsCopy:
    'Real estate is not one business type. An independent agent competing on response time has different automation needs than a property management company handling tenant inquiries, or a mortgage officer working a longer pipeline. The system is scoped to how your specific role in the transaction actually operates.',

  featured: [
    {
      name: 'Real Estate Agents & Teams',
      blurb:
        'Lead response automation, CRM follow-up sequences, and review systems for solo agents and team leads.',
    },
    {
      name: 'Property Management Companies',
      blurb:
        'Tenant inquiry automation and reputation management for property managers.',
    },
    {
      name: 'Mortgage Companies & Loan Officers',
      blurb:
        'Lead follow-up sequences and CRM automation for mortgage and lending businesses.',
    },
    {
      name: 'Home Inspectors & Appraisers',
      blurb:
        'Booking automation and review generation for inspection and appraisal services.',
    },
    {
      name: 'Real Estate Investors & Developers',
      blurb:
        'Lead capture and follow-up automation for investors and development firms.',
    },
  ],

  compact: [
    {
      name: 'Commercial Leasing Firms',
      blurb:
        'Lead nurture and follow-up automation for commercial real estate leasing.',
    },
    {
      name: 'Title & Escrow Companies',
      blurb:
        'Client follow-up and review systems for title and escrow businesses.',
    },
    {
      name: 'Short-Term & Vacation Rental Managers',
      blurb:
        'Guest communication automation and review systems for short-term rental operators.',
    },
    {
      name: 'Apartment Communities',
      blurb:
        'Leasing inquiry response and review management for apartment communities.',
    },
    {
      name: 'HOA Management Companies',
      blurb:
        'Resident communication and reputation management for HOA management firms.',
    },
    {
      name: 'Real Estate Photography & Staging',
      blurb:
        'Booking automation and review generation for real estate photography and staging businesses.',
    },
    {
      name: 'Leasing Agents',
      blurb:
        'Inquiry follow-up and CRM automation for independent leasing agents.',
    },
    {
      name: 'Property Maintenance Companies',
      blurb:
        'Booking and review automation for property maintenance service providers.',
    },
    {
      name: 'Corporate Housing Providers',
      blurb:
        'Inquiry capture and follow-up for corporate housing and furnished rental businesses.',
    },
    {
      name: 'Land Development Companies',
      blurb:
        'Lead follow-up and CRM automation for land development and acquisition businesses.',
    },
  ],

  // TODO: confirm with client which lead sources and CRM
  // they currently use before publishing Q2
  faqs: [
    {
      q: 'How does lead response automation work when I am with a client or in a showing?',
      a: 'When a new lead comes in from your website, a landing page, or a connected lead source, the system sends an immediate response by text or email — introducing itself as part of your business, capturing qualifying information, and routing the lead into a follow-up sequence. You get a notification with the lead details. The lead gets a response in seconds, not hours.',
    },
    {
      q: 'Can this connect to Zillow, Realtor.com, or my existing CRM?',
      a: 'Connection capability depends on the specific platforms you use. We evaluate integrations during the discovery call and confirm compatibility before scoping the build.',
    },
    {
      q: 'Do you work with individual agents or only teams and brokerages?',
      a: 'Both. The system scales from a solo agent to a multi-agent brokerage. The core components — lead response, follow-up sequences, and review automation — apply at any team size. Larger teams may use more of the CRM automation features; solo agents often start with lead response and reviews.',
    },
    {
      q: 'How does review automation work after a closed deal?',
      a: 'After a transaction closes, the system sends a review request by text at a timed interval — typically a week or two post-close, once the client has settled. The message links directly to your Google Business Profile. One tap. No copy-paste instructions, no asking in person. Clients who were going to leave a review actually do.',
    },
    {
      q: 'My CRM is full of old contacts I never followed up with. Can the system help with that?',
      a: 'Yes. We can set up re-engagement sequences for lapsed contacts in your CRM — timed outreach that surfaces over several weeks, reconnects without being intrusive, and routes anyone who responds back into an active pipeline. The contacts you already have are often the most underutilized asset in a real estate business.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit.',

  ctaBody:
    'We will map where leads, reviews, or follow-up are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.',

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
    images: [{ url: '/images/og/industries-real-estate-property.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyIndustryPage() {
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
            { name: 'Real Estate & Property Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
