import type { Metadata } from 'next'
import {
  SubVerticalPageTemplate,
  type SubVerticalPageData,
} from '@/components/site/SubVerticalPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

// Phase 8 Batch 1. Static directory per the confirmed routing architecture:
// /industries/[hub]/for/[sub-vertical-slug]. The `for` segment is a reserved
// routing segment with no page of its own, so it gets no breadcrumb.
//
// Content came through the Core-mode strategy sequence and was scored against
// the 12-box doorway-page checklist in site-build-plan.md before build.
//
// SERP fit and competitive dominance are NOT VERIFIED for this page: the
// SERP-analysis and visibility-alignment steps were not part of this Core-mode
// build. Do not describe this page as SERP-optimized or competitively dominant.
// Readiness here is strategy-based only.

const ROUTE = '/industries/construction-contractors/for/kitchen-bathroom-remodeling'

const DATA: SubVerticalPageData = {
  hubSlug:         'construction-contractors',
  hubName:         'Construction & Contractors',
  subVerticalSlug: 'kitchen-bathroom-remodeling',
  subVerticalName: 'Kitchen & Bathroom Remodeling',

  metaTitle: 'CRM & Lead Automation for Kitchen & Bath Remodelers',

  metaDescription:
    'Fast consultation booking, backorder-delay updates, and referral requests built for how kitchen and bath remodelers win and lose jobs.',

  eyebrow: 'Kitchen & Bathroom Remodeling',

  headline:
    'A kitchen or bath consultation that takes days to schedule loses to the remodeler who shows up first.',

  subheadline:
    'Homeowners spend weeks comparing remodelers before a high-ticket, personal-space decision. We build the fast-consultation, delay-communication, and referral system that wins the job and turns a finished kitchen or bath into your next lead.',

  operatingReality: {
    demandTrigger:
      'A homeowner decides to renovate a kitchen or bathroom, driven by either a functional failure, outdated or broken fixtures, a code issue, or a lifestyle and resale upgrade decision. Distinct from a whole-project build trigger and from a damage-driven repair trigger.',
    urgencyWindow:
      'Considered on the front end, since homeowners often collect design consultations and quotes from several remodelers over weeks before committing to a personal, high-ticket space. Once booked, urgency shifts to material lead time: cabinets, countertops, and fixtures are frequently backordered, and the homeowner is living without a functioning kitchen or bathroom during the delay.',
    jobRhythm:
      'Mostly one-off, high-ticket, single-space projects. A smaller recurring segment exists among real estate flip investors and property managers renovating multiple units on a repeat basis.',
  },

  leakHeadline: 'Where a kitchen or bath remodel loses the next referral',

  leaks: [
    {
      moment:
        'A homeowner requests a design consultation and is comparing ideas and quotes across several remodelers before committing, a considered, weeks-long decision for a personal space.',
      consequence:
        'The remodeler who delivers the clearest, fastest consultation and detailed quote earns the trust needed for a high-ticket decision. Slow follow-up loses the job to whichever remodeler felt most professional and responsive during evaluation, not necessarily whoever quoted the best price.',
    },
    {
      moment:
        'After the contract is signed, a cabinet, countertop, or fixture backorder delays the installation date.',
      consequence:
        'The homeowner is already living without a functioning kitchen or bathroom and loses patience without proactive updates, and may leave a negative review over what is a supplier delay, not a craftsmanship issue, if no one tells them what is happening.',
    },
    {
      moment:
        'The finished space photographs well and the homeowner is proud of it, but no structured ask captures a review or a referral to a friend or neighbor considering their own remodel.',
      consequence:
        'Kitchen and bath remodels are among the most visually shareable, referral-friendly project types in the trade. Skipping a systematic ask at the moment of pride wastes the strongest word-of-mouth opportunity available.',
    },
  ],

  servicePriority: [
    {
      slug: 'ai-chatbots',
      why:  'Directly answers leak 1. A fast, always-on response to a design-consultation inquiry, often started as a web or chat request rather than a phone call, wins the responsiveness comparison during a multi-remodeler evaluation.',
    },
    {
      slug: 'crm-automation',
      why:  'Directly answers leak 2. Proactive backorder and delay-status updates reach the homeowner automatically, replacing silence with communication during a stressful, functionally-disruptive wait.',
    },
    {
      slug: 'review-automation',
      why:  "Directly answers leak 3. A systematic review and referral request timed to project completion captures the trade's strongest word-of-mouth moment instead of leaving it to chance.",
    },
  ],

  losingTo:
    "Kitchen and bath showrooms and big-box home-improvement retailers' installation divisions, which bundle product selection with installation in a single visit, plus independent design-build remodelers competing on portfolio and design credibility.",

  faqs: [
    {
      q: 'How long does it take to get a design consultation and quote for a kitchen or bathroom remodel?',
      a: 'An AI-powered chat response can engage a consultation request immediately and get a visit scheduled the same day, which matters when a homeowner is comparing several remodelers before committing to a high-ticket, personal-space project.',
    },
    {
      q: 'What happens if my cabinets or countertops are backordered?',
      a: 'The CRM automation sends proactive lead-time and delay updates as soon as backorder status changes, so you know what is happening instead of assuming the project has stalled while living without a functioning kitchen or bathroom.',
    },
    {
      q: 'Do you offer recurring service for property managers or investors renovating multiple units?',
      a: 'Yes. Property managers and real estate investors renovating units on a repeat basis get the same consultation and follow-up automation as a one-time homeowner project, built around a recurring relationship rather than a single quote.',
    },
    {
      q: "I'm comparing several remodelers before committing, what makes your process different?",
      a: 'Consultation speed and clarity are what separate a remodeler from the competition during a weeks-long evaluation, more than price alone. The system makes sure the fastest, clearest response to a consultation request comes from you.',
    },
    {
      q: 'What happens after my remodel is finished?',
      a: 'A structured follow-up sequence requests a review and a referral at the moment the finished space is most photograph-worthy and satisfaction is highest, turning a completed project into the next lead.',
    },
  ],

  // All four construction-contractors sub-verticals are live, so each lists the
  // other three. Add new entries only as their pages ship.
  siblings: [
    { name: 'General Contractors',   slug: 'general-contractors' },
    { name: 'Painting Contractors',  slug: 'painting-contractors' },
    { name: 'Flooring Installation', slug: 'flooring-installation' },
  ],

  capstoneLink: { slug: 'all-in-one-business-growth-system' },
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: ROUTE },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         ROUTE,
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function KitchenBathroomRemodelingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         ROUTE,
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                          url: '/' },
            { name: 'Industries',                    url: '/industries' },
            { name: 'Construction & Contractors',    url: '/industries/construction-contractors' },
            { name: 'Kitchen & Bathroom Remodeling', url: ROUTE },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/for/kitchen-bathroom-remodeling',
            name:        'Automation for Kitchen & Bathroom Remodeling',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <SubVerticalPageTemplate {...DATA} />
    </>
  )
}
