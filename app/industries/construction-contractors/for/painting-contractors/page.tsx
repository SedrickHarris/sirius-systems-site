import type { Metadata } from 'next'
import {
  SubVerticalPageTemplate,
  type SubVerticalPageData,
} from '@/components/site/SubVerticalPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

// Phase 8 pilot page. Static directory per the confirmed routing architecture:
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

const ROUTE = '/industries/construction-contractors/for/painting-contractors'

const DATA: SubVerticalPageData = {
  hubSlug:         'construction-contractors',
  hubName:         'Construction & Contractors',
  subVerticalSlug: 'painting-contractors',
  subVerticalName: 'Painting Contractors',

  metaTitle: 'CRM & Lead Automation for Painting Contractors',

  metaDescription:
    'Automated estimate follow-up, weather-reschedule alerts, and lead nurture built for how painting contractors win and lose jobs.',

  eyebrow: 'Painting Contractors',

  headline:
    'Painting estimates get three bids by default: be the one who shows up first.',

  subheadline:
    'A sale-driven repaint moves in days. A refresh job can sit for months unless something follows up. We build the estimate-speed, weather-reschedule, and nurture system that wins both.',

  operatingReality: {
    demandTrigger:
      'Two distinct triggers. A sale-driven trigger: a homeowner or their realtor wants the property repainted before listing, or a buyer wants it repainted before move-in. A refresh trigger: visible wear, fading, peeling, chalking on exterior, scuffed or dated color on interior, with no external deadline attached.',
    urgencyWindow:
      'Bimodal. Sale-driven jobs have a hard deadline, days to two weeks before a listing photo shoot or closing, and behave like an emergency despite not being one. Refresh-driven jobs have no deadline at all and are the easiest home-improvement category to defer indefinitely.',
    jobRhythm:
      'Mostly one-off for owner-occupied residential, but with a genuine recurring segment: property managers and landlords doing turnover painting between tenants, which is scheduled, repeat, and relationship-driven rather than one-time-quote-driven.',
  },

  leakHeadline: 'Where a painting estimate goes cold',

  leaks: [
    {
      moment:
        'The estimate request comes in, and the homeowner is deliberately collecting three bids before deciding, normalized buyer behavior in residential painting specifically.',
      consequence:
        'The contractor who gets an in-person estimate scheduled and delivered fastest often wins on responsiveness alone, independent of price. Contractors who take days to schedule the walkthrough compete on price against contractors who never got a fair look.',
    },
    {
      moment:
        'An exterior job gets weather-delayed, rain or temperature, and the crew does not proactively communicate the new date.',
      consequence:
        'The customer does not know whether they have been forgotten and starts calling other painters while waiting. A job already won gets re-opened to competition through silence, not through a pricing loss.',
    },
    {
      moment:
        'An interior color-consultation or estimate visit happens, the customer says they will think about it, and no structured follow-up sequence exists.',
      consequence:
        'Because there is no external deadline forcing a decision, thinking about it quietly becomes never, or becomes a booking with whichever painter happens to follow up first, weeks later.',
    },
  ],

  servicePriority: [
    {
      slug: 'ai-voicebots',
      why:  'Directly answers leak 1. Fast response to the estimate request wins the commoditized bid-shopping dynamic independent of price.',
    },
    {
      slug: 'appointment-booking-automation',
      why:  'Directly answers leak 2. Proactive reschedule messaging on weather delays prevents an already-won job from reopening to competition through silence.',
    },
    {
      slug: 'crm-automation',
      why:  'Directly answers leak 3. A structured nurture sequence for no-decision estimates replaces dependence on someone remembering to call back weeks later.',
    },
  ],

  losingTo:
    'Primarily other local painting contractors and the highly fragmented handyman/solo-operator segment of the category. Painting has one of the lowest barriers to entry of any home trade, so the competitive set is wider and less consolidated than roofing or flooring.',

  faqs: [
    {
      q: 'How long does it take to get a painting estimate scheduled?',
      a: 'Response speed is the core of this system. An AI voicebot and automated booking flow answer and schedule an estimate request without waiting on a callback, which matters most in residential painting since homeowners are typically comparing multiple bids.',
    },
    {
      q: 'Do you handle both interior and exterior painting, and does weather affect scheduling?',
      a: 'The automation is built around your job types. An exterior job that gets weather-delayed triggers a proactive reschedule message instead of leaving the customer waiting, which keeps a job you already won from reopening to competition.',
    },
    {
      q: 'Do you offer recurring service for rental property turnover painting?',
      a: 'Yes. Property managers and landlords scheduling repeat turnover painting between tenants get the same booking and follow-up automation as one-time residential jobs, built around a recurring relationship rather than a single quote.',
    },
    {
      q: 'What if I am not ready to decide after getting my estimate?',
      a: 'A structured nurture sequence follows every estimate that does not convert immediately, so a let us think about it response gets a consistent follow-up cadence instead of depending on someone remembering to call back weeks later.',
    },
    {
      q: 'Painting has a lot of solo operators and small crews bidding the same jobs. How do you help us stand out?',
      a: 'In a fragmented market with a low barrier to entry, consistent response speed and follow-up are what separate a crew from the competition more than price or crew size. The system gives a small painting operation the same responsiveness as a larger company.',
    },
  ],

  // Only list sub-verticals whose pages are actually live. Both pilot pages
  // shipped together, so each links to the other. Add the remaining
  // construction-contractors sub-verticals as their pages ship.
  siblings: [
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

export default function PaintingContractorsPage() {
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
            { name: 'Home',                       url: '/' },
            { name: 'Industries',                 url: '/industries' },
            { name: 'Construction & Contractors', url: '/industries/construction-contractors' },
            { name: 'Painting Contractors',       url: ROUTE },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/for/painting-contractors',
            name:        'Automation for Painting Contractors',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <SubVerticalPageTemplate {...DATA} />
    </>
  )
}
