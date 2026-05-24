import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'construction-contractors',

  metaTitle:
    'Construction & Contractor Automation | Sirius Systems',

  metaDescription:
    'Lead follow-up, estimate automation, CRM, and review systems for general contractors, remodelers, painters, flooring companies, and specialty trades.',

  eyebrow: 'Construction & Contractors',

  headline:
    'The System That Keeps Construction Businesses Booked and Reviewed',

  subheadline:
    'Most contractors lose jobs not because they priced wrong — but because they followed up too late, or not at all. We build the system that follows up automatically, books the call, and earns the review that wins the next job.',

  heroHighlights: [
    'Estimate follow-up sequences at 24h, 72h, and hand-off',
    'Lead capture across paid, organic, and referral channels',
    'Review automation that builds reputation with every completed job',
    'CRM pipeline that updates itself — no manual data entry',
  ],

  problemHeadline: 'Where contractors leak revenue',

  problems: [
    'Estimates go out and sit. The job goes to whoever followed up first — not whoever priced better.',
    'You are on site and cannot respond to a new inquiry fast enough to stay competitive.',
    'Completed jobs do not turn into reviews because no one asked at the right moment.',
    'The website looks fine but has no system behind it — leads stall before they reach you.',
  ],

  systemsHeadline: 'The system contractors actually need',

  systemsCopy:
    'Most contractors need the same six things: a way to capture leads, a way to follow up before they go cold, a CRM that tracks the pipeline without manual input, review automation after every job, a stronger GBP presence, and a way to connect all of it. These are the six systems that do that.',

  serviceSlugs: [
    'lead-generation-automation',
    'appointment-booking-automation',
    'crm-automation',
    'review-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  subVerticalsHeadline: 'Built around how your trade operates',

  subVerticalsCopy:
    'Construction is project-based. A missed follow-up on a high-ticket estimate is not a missed appointment — it is a missed contract. The gap between winning and losing the job is almost always response time and follow-up consistency, not price.',

  featured: [
    {
      name: 'General Contractors',
      blurb:
        'Lead qualification, estimate follow-up automation, and review systems for GCs managing multiple active jobs.',
    },
    {
      name: 'Kitchen & Bathroom Remodeling',
      blurb:
        'High-ticket estimate follow-up, consultation booking automation, and review flows for remodelers.',
    },
    {
      name: 'Flooring Installation',
      blurb:
        'Estimate automation, booking, and review requests for flooring contractors competing on responsiveness and reputation.',
    },
    {
      name: 'Solar Installation',
      blurb:
        'Multi-step lead nurturing, consultation booking, and post-install review automation for solar contractors.',
    },
  ],

  compact: [
    {
      name: 'Tile & Stone',
      blurb:
        'Estimate follow-up and review automation for tile and stone installation contractors.',
    },
    {
      name: 'Concrete & Flatwork',
      blurb:
        'Lead capture and booking automation for concrete and flatwork contractors.',
    },
    {
      name: 'Drywall & Plastering',
      blurb:
        'Job booking automation and review flows for drywall and plastering contractors.',
    },
    {
      name: 'Insulation',
      blurb:
        'Lead follow-up and appointment automation for insulation contractors.',
    },
    {
      name: 'Siding & Exterior',
      blurb:
        'Estimate automation and review systems for siding and exterior contractors.',
    },
    {
      name: 'Fencing',
      blurb:
        'Quote follow-up and review automation for fencing contractors.',
    },
    {
      name: 'Decks & Outdoor Structures',
      blurb:
        'Booking automation and review flows for deck and outdoor structure builders.',
    },
    {
      name: 'Masonry & Brickwork',
      blurb:
        'Estimate follow-up and reputation management for masonry contractors.',
    },
    {
      name: 'Waterproofing & Foundation',
      blurb:
        'Lead qualification and booking automation for waterproofing and foundation specialists.',
    },
    {
      name: 'Custom Home Builders',
      blurb:
        'Multi-touch lead nurturing and consultation booking for custom home builders.',
    },
    {
      name: 'Commercial Build-Out',
      blurb:
        'Lead qualification, estimate automation, and CRM integration for commercial build-out contractors.',
    },
  ],

  faqs: [
    {
      q: 'What types of contractors do you work with?',
      a: 'We work with residential and commercial contractors across most trades — general contractors, remodelers, flooring companies, solar installers, painters, fencing businesses, concrete contractors, and more. If your business is project-based and depends on estimates, referrals, and local reputation, the system applies.',
    },
    {
      q: 'My estimates are already detailed and professional. What would automation actually change?',
      a: 'The gap is almost never in estimate quality — it is in follow-up timing and consistency. Most contractors send an estimate and wait. An automated follow-up sends a message within 24 hours, again at 72 hours, and then flags the lead for a direct call if there is still no response. That sequence alone closes more jobs than redesigning the estimate format.',
    },
    {
      q: 'How does the review system work for a contractor?',
      a: 'After a job closes, the system sends a review request by text at a timed interval — long enough for the customer to see the finished result, not so long that the moment has passed. The message links directly to your Google Business Profile. No manual step required from you or your crew.',
    },
    {
      q: 'Do I need a new website to connect the lead follow-up system?',
      a: 'No. In most cases the automation connects to your existing site. If your current site needs changes to support the follow-up flow, we scope that during the discovery call. The website rebuild is optional, not required.',
    },
    {
      q: 'How is this different from just buying more leads from a lead generation service?',
      a: 'Lead generation services sell you the same leads they sell to other contractors in your market. This system captures leads you already generate — from your own site, your GBP, your referrals, and your ads — and follows up faster and more consistently than your competition. You own the leads. You own the follow-up.',
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
  },
}

export default function ConstructionContractorsIndustryPage() {
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
            { name: 'Construction & Contractors', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
