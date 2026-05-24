import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'real-estate-property',
  metaTitle: 'Real Estate & Property Services Automation | Sirius Systems',
  metaDescription:
    'AI automation, lead follow-up, and reputation management for real estate agents, brokerages, property managers, mortgage companies, and home inspectors.',
  eyebrow: 'Real Estate & Property Services',
  headline: 'The System That Follows Up Before Your Lead Goes Cold',
  subheadline:
    'In real estate, the agent who responds first wins. The system we build makes sure your business is always first to respond, always following up, and always building the review record that earns referrals.',
  heroHighlights: [
    'Instant lead response automation — no inquiry goes unanswered',
    'Follow-up sequences that stay active until the lead converts or opts out',
    'Review generation after every closed deal or completed service',
    'CRM automation to keep every contact organized and moving forward',
  ],
  problemHeadline: 'Where real estate and property businesses lose deals',
  problems: [
    'New leads come in from your website, Zillow, or referrals and sit unanswered for hours because you are out showing properties.',
    'You have no consistent follow-up system, so leads that do not convert immediately are lost instead of nurtured over time.',
    'Past clients do not leave reviews because no one asks them at the right moment after a successful transaction.',
    'Your CRM has contacts in it but no automated sequences keeping those contacts engaged until they are ready to move.',
  ],
  systemsHeadline: 'The automation stack built for real estate and property',
  systemsCopy:
    'These systems handle the front-end of your client pipeline — from first inquiry to follow-up to post-transaction review — so you spend your time on deals, not admin.',
  serviceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'appointment-booking-automation',
  ],
  subVerticalsHeadline: 'Real estate and property business types we work with',
  featured: [
    { name: 'Real Estate Agents & Brokerages', blurb: 'Lead response automation and review systems for agents and brokerages of all sizes.' },
    { name: 'Property Management Companies', blurb: 'Tenant inquiry automation and reputation management for property managers.' },
    { name: 'Mortgage Companies & Loan Officers', blurb: 'Lead follow-up sequences and CRM automation for mortgage and lending businesses.' },
    { name: 'Home Inspectors & Appraisers', blurb: 'Booking automation and review generation for inspection and appraisal services.' },
    { name: 'Real Estate Investors & Developers', blurb: 'Lead capture and follow-up automation for investors and development firms.' },
  ],
  compact: [
    { name: 'Commercial Leasing Firms', blurb: 'Lead nurture and follow-up automation for commercial real estate leasing.' },
    { name: 'Title & Escrow Companies', blurb: 'Client follow-up and review systems for title and escrow businesses.' },
    { name: 'Short-Term & Vacation Rental Managers', blurb: 'Guest communication automation and review systems for short-term rental operators.' },
    { name: 'Apartment Communities', blurb: 'Leasing inquiry response and review management for apartment communities.' },
    { name: 'HOA Management Companies', blurb: 'Resident communication and reputation management for HOA management firms.' },
    { name: 'Real Estate Photography & Staging', blurb: 'Booking automation and review generation for real estate photography and staging businesses.' },
    { name: 'Leasing Agents', blurb: 'Inquiry follow-up and CRM automation for independent leasing agents.' },
    { name: 'Property Maintenance Companies', blurb: 'Booking and review automation for property maintenance service providers.' },
    { name: 'Corporate Housing Providers', blurb: 'Inquiry capture and follow-up for corporate housing and furnished rental businesses.' },
    { name: 'Land Development Companies', blurb: 'Lead follow-up and CRM automation for land development and acquisition businesses.' },
  ],
  faqs: [
    {
      q: 'How does lead response automation work for real estate?',
      a: 'When a new lead comes in — from your website, a landing page, or a connected source — an automated sequence sends an immediate response by text or email, then follows up on a scheduled cadence until the lead replies, books, or opts out. No lead sits unanswered.',
    },
    // TODO: confirm with client which lead sources and CRM they currently use
    {
      q: 'Can you connect to Zillow, Realtor.com, or my CRM?',
      a: 'Connection capability depends on the specific platforms you use. We evaluate integrations during onboarding. We confirm compatibility during onboarding.',
    },
    {
      q: 'Do you work with individual agents or just brokerages?',
      a: 'Both. The system scales from a solo agent to a multi-agent brokerage. The core components — lead response, follow-up, and reviews — apply at any team size.',
    },
    {
      q: 'How does review generation work after a closed deal?',
      a: 'After a transaction closes or a service is completed, an automated follow-up asks the client to leave a Google review. Timing and messaging are configured to fit your workflow. The system requests reviews from real clients — it does not fabricate them.',
    },
    // TODO: confirm with client which CRM they currently use
    {
      q: 'What if I already have a CRM in place?',
      a: 'We work around your existing stack where possible. Whether we integrate with your current CRM or help you move to a better-fit platform depends on what you have in place. We confirm compatibility during onboarding.',
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
