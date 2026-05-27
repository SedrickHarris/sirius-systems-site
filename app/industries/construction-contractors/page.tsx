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
    'Contractor Automation: Estimates & Reviews | Sirius Systems',

  metaDescription:
    'Lead follow-up, estimate automation, CRM, and review systems for general contractors, remodelers, painters, flooring companies, and specialty trades.',

  eyebrow: 'Construction & Contractors',

  headline:
    'The System That Keeps Construction Businesses Booked and Reviewed',

  subheadline:
    'Most contractors lose jobs not because they priced wrong — but because they followed up too late, or not at all. We build the system that follows up automatically, books the call, and earns the review that wins the next job.',

  heroHighlights: [
    'Estimate follow-up sequences that run at 24h, 72h, and hand-off — without you touching them',
    'Lead capture across paid, organic, and referral channels',
    'Review automation that builds your reputation after every completed job',
    'CRM pipeline that updates itself — no manual data entry required',
  ],

  problemHeadline: 'Where contractors leak revenue',

  problems: [
    'Estimates go out and sit. The job goes to whoever followed up first — not whoever priced better.',
    'You are on site and cannot respond to a new inquiry fast enough to stay in the running.',
    'Completed jobs do not turn into reviews because no one asked at the right moment.',
    'The website looks fine but has no system behind it — leads stall before they ever reach you.',
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
      name: 'Painting Contractors',
      blurb:
        'Quote follow-up, job booking, and post-job review automation for residential and commercial painters.',
    },
    {
      name: 'Flooring Installation',
      blurb:
        'Estimate automation, booking, and review requests for flooring contractors competing on responsiveness and reputation.',
    },
  ],

  compact: [
    {
      name: 'Deck & Patio Builders',
      blurb:
        'Booking automation and review flows for deck and outdoor structure builders.',
    },
    {
      name: 'Concrete & Masonry',
      blurb:
        'Lead capture and booking automation for concrete and masonry contractors.',
    },
    {
      name: 'Tile & Stone',
      blurb:
        'Estimate follow-up and review automation for tile and stone installation contractors.',
    },
    {
      name: 'Drywall & Plastering',
      blurb:
        'Job booking automation and review flows for drywall and plastering contractors.',
    },
    {
      name: 'Siding & Exterior',
      blurb:
        'Estimate automation and review systems for siding and exterior contractors.',
    },
    {
      name: 'Fencing Contractors',
      blurb:
        'Quote follow-up and review automation for fencing contractors.',
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
        'Lead qualification, estimate automation, and CRM for commercial build-out contractors.',
    },
    {
      name: 'Insulation',
      blurb:
        'Lead follow-up and appointment automation for insulation contractors.',
    },
    {
      name: 'Excavation & Demolition',
      blurb:
        'Estimate follow-up and CRM pipeline for excavation and demolition contractors.',
    },
  ],

  faqs: [
    {
      q: 'What types of contractors do you work with?',
      a: 'We work with residential and commercial contractors across most trades — general contractors, remodelers, flooring companies, painters, deck builders, concrete contractors, and more. The automation systems are the same across trades; the triggers and follow-up sequences are configured for how your specific job cycle works.',
    },
    {
      q: 'How does estimate follow-up automation work for contractors?',
      a: 'When a lead comes in — from your website, your Google Business Profile, or a referral — the system captures their contact information and starts a follow-up sequence automatically. You set the timing and the messages. The system sends them at 24 hours, 72 hours, and a final check-in without you having to remember or manually reach out. If they respond, it routes to you. If they book, it stops.',
    },
    {
      q: 'Can you help me get more Google reviews for my contracting business?',
      a: 'Yes. Review automation sends a review request to your customer after the job closes — at the right moment, through text or email, with a direct link to your Google Business Profile. Most contractors who complete strong work have few reviews because no one has a consistent ask process. The system builds that into every completed job.',
    },
    {
      q: 'Do I need a CRM to use these systems?',
      a: 'No. If you do not have one, we can set up a CRM as part of the system. If you already use one, we connect it. The goal is a single pipeline where you can see every active lead, every estimate sent, and every follow-up status without logging into multiple tools or updating a spreadsheet.',
    },
    {
      q: 'Does this work if most of my business comes from referrals?',
      a: 'Yes — and it makes referrals work harder. When a referral contacts you, the system captures them, follows up, books the consultation, and asks for a review after the job. The referral that used to be a one-time customer becomes a repeat review and a source for the next referral. The system amplifies word of mouth — it does not replace it.',
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
