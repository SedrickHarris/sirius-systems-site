import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'contractors',
  metaTitle:
    'Contractors: AI Automation, Lead Follow-Up & Reviews | Sirius Systems',
  metaDescription:
    'AI-powered lead follow-up, estimate automation, appointment booking, and reputation management for contractors: general contractors, remodelers, solar, flooring, and more.',
  eyebrow: 'Contractors',
  headline: 'Your Estimate Was Good. The Follow-Up Is What Lost the Job.',
  subheadline:
    'Most contractors lose jobs not because they priced wrong but because they followed up too late: or not at all. We build the system that follows up automatically, books the call, and earns the review that wins the next job without you lifting a finger.',
  heroHighlights: [
    'Estimate follow-up sequences: 24h / 72h / hand-off',
    'Lead capture across paid, organic, and referral',
    'Review automation that compounds with every job',
    'CRM pipeline that updates itself, no data entry',
  ],
  problemHeadline: 'Where contractors leak revenue',
  problems: [
    'Estimates go out and sit unanswered for days: the job goes to whoever called back first.',
    "You're busy on site and can't respond to new inquiries fast enough to win the job.",
    "Finished jobs don't turn into reviews because no one asked at the right moment.",
    'The website looks fine but has no system behind it: leads arrive and stall.',
  ],
  systemsHeadline: 'The system contractors actually need',
  serviceSlugs: [
    'lead-generation-automation',
    'appointment-booking-automation',
    'crm-automation',
    'review-automation',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],
  subVerticalsHeadline: 'Built around how your trade operates',
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
    { name: 'Tile & Stone', blurb: 'Estimate follow-up and review automation for tile and stone installation contractors.' },
    { name: 'Concrete & Flatwork', blurb: 'Lead capture and booking automation for concrete and flatwork contractors.' },
    { name: 'Drywall & Plastering', blurb: 'Job booking automation and review flows for drywall and plastering contractors.' },
    { name: 'Insulation', blurb: 'Lead follow-up and appointment automation for insulation contractors.' },
    { name: 'Siding & Exterior', blurb: 'Estimate automation and review systems for siding and exterior contractors.' },
    { name: 'Fencing', blurb: 'Quote follow-up and review automation for fencing contractors.' },
    { name: 'Decks & Outdoor Structures', blurb: 'Booking automation and review flows for deck and outdoor structure builders.' },
    { name: 'Masonry & Brickwork', blurb: 'Estimate follow-up and reputation management for masonry contractors.' },
    { name: 'Waterproofing & Foundation', blurb: 'Lead qualification and booking automation for waterproofing and foundation specialists.' },
    { name: 'Custom Home Builders', blurb: 'Multi-touch lead nurturing and consultation booking for custom home builders.' },
    { name: 'Commercial Build-Out', blurb: 'Lead qualification, estimate automation, and CRM integration for commercial build-out contractors.' },
  ],
  faqs: [
    {
      q: 'What types of contractors do you work with?',
      a: 'We work with residential and commercial contractors across most trades: general contractors, remodelers, flooring, solar, concrete, fencing, and more. If your business is project-based and depends on estimates, referrals, and local reputation, the system applies.',
    },
    {
      q: 'My estimates are already professional: what would automation actually improve?',
      a: 'The gap is almost always in follow-up timing and consistency, not estimate quality. Most contractors send an estimate and wait. Automated follow-up sends a message within 24 hours, then again at 72 hours, then flags the lead for a direct call. That sequence alone closes more jobs than redesigning the estimate.',
    },
    {
      q: 'How does the review system work for contractors?',
      a: 'After a job closes, the system sends a review request via text at the right moment: not immediately, but once the customer has had time to see the finished work. It links directly to your Google Business Profile. No manual step required from you.',
    },
    {
      q: 'Do I need a new website to use the automation system?',
      a: "No. The automation stack can run alongside your existing website. If the site is a conversion problem: visitors aren't becoming inquiries: we address that separately. The two don't have to happen at the same time.",
    },
    {
      q: 'How is this different from a generic CRM or lead service?',
      a: 'A generic CRM holds contacts. A lead service sends you names. We build the system that connects your website, CRM, phone, and review profile into a working follow-up engine: specific to how contractors sell, close, and earn referrals.',
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

export default function ContractorsIndustryPage() {
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
            { name: 'Contractors', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
