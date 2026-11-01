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

const ROUTE = '/industries/construction-contractors/for/general-contractors'

const DATA: SubVerticalPageData = {
  hubSlug:         'construction-contractors',
  hubName:         'Construction & Contractors',
  subVerticalSlug: 'general-contractors',
  subVerticalName: 'General Contractors',

  metaTitle: 'CRM & Lead Automation for General Contractors',

  metaDescription:
    'Fast bid turnaround, mid-project update automation, and referral requests built for how general contractors win and lose projects.',

  eyebrow: 'General Contractors',

  headline:
    'The general contractor who sends the fastest, most detailed bid usually wins the project.',

  subheadline:
    'A renovation or addition is a high-stakes decision homeowners take weeks comparing. We build the fast-estimate, mid-project update, and referral system that keeps you top of the shortlist and top of mind after the job is done.',

  operatingReality: {
    demandTrigger:
      'A defined multi-trade project, an addition, a whole-house renovation, or new construction, rather than a single-trade repair or refresh. The homeowner is sourcing bids from multiple general contractors to manage the full scope.',
    urgencyWindow:
      'Considered and long on the front end: homeowners often take weeks vetting several GCs before committing to a large financial and logistical undertaking. Once the project starts, the urgency inverts, and the client expects fast, ongoing communication across a multi-month build with multiple subcontractors and permit dependencies.',
    jobRhythm:
      'Mostly one-off, high-ticket projects rather than recurring work, but general contractors depend heavily on a referral pipeline, real estate agents, architects, and past clients, for the next project.',
  },

  leakHeadline: 'Where a general contracting project loses trust',

  leaks: [
    {
      moment:
        'A prospective client requests a bid for a large project and is simultaneously collecting bids from two or three other general contractors. The GC takes days to schedule an in-person walkthrough and produce a detailed written proposal.',
      consequence:
        'For a high-dollar, months-long commitment, a slow or thin proposal signals disorganization before the job even starts. The GC who is fastest and most thorough with the estimate wins the shortlist position, independent of price.',
    },
    {
      moment:
        'Mid-project, something needs to reach the client, a permit delay, a subcontractor scheduling conflict, a material delay, and there is no structured system for that update to go out.',
      consequence:
        'A client already anxious about a large investment loses trust when they have to chase the contractor for status. This erodes the relationship mid-project even when the underlying work is on track, and it is what shows up in a lukewarm review afterward.',
    },
    {
      moment:
        'The project completes and the client is satisfied, but no structured request goes out for a review or a referral to the next prospective client, a friend, a family member, a real estate agent.',
      consequence:
        'General contractors depend on referral relationships for their next high-value project. Without a systematic ask at the moment satisfaction is highest, that referral engine stays informal and inconsistent instead of compounding.',
    },
  ],

  servicePriority: [
    {
      slug: 'ai-voicebots',
      why:  'Directly answers leak 1. Immediate, qualifying response to a bid request, including scheduling the walkthrough, wins the responsiveness comparison that decides a multi-bid shortlist before price ever enters the conversation.',
    },
    {
      slug: 'crm-automation',
      why:  'Directly answers leak 2. Structured mid-project update sequences, permit status, subcontractor scheduling, material delays, keep the client informed without the contractor manually managing every status call.',
    },
    {
      slug: 'review-automation',
      why:  'Directly answers leak 3. A systematic review and referral request timed to project completion replaces an informal, easy-to-forget ask with a repeatable referral engine.',
    },
  ],

  losingTo:
    'Other established general contractors and, for larger projects, design-build firms that bundle architecture and construction under a single contract, a segment that competes on perceived lower coordination risk for the client.',

  faqs: [
    {
      q: 'How fast can I get a bid for my renovation or addition project?',
      a: 'An AI voicebot can pick up and qualify a bid request immediately, including scheduling the in-person walkthrough, so the proposal process starts the same day instead of waiting on a callback, which matters most when a homeowner is comparing several contractors at once.',
    },
    {
      q: 'Do you handle communication during a multi-month project, permits, delays, subcontractors?',
      a: 'Yes. The CRM automation is built to send structured status updates tied to real project events, so a permit delay or a subcontractor scheduling change reaches the client proactively instead of the client having to call and ask what is happening.',
    },
    {
      q: 'Do you work with real estate agents or architects who refer clients to general contractors?',
      a: 'The system is built to support a referral pipeline, not just direct leads. A completed project triggers a review and referral request timed to when client satisfaction is highest, which is what turns a single project into a repeatable source of future work.',
    },
    {
      q: "I'm comparing several general contractors for a large project, what makes your follow-up process different?",
      a: 'Response speed and proposal thoroughness are what separate a contractor from the competition in a multi-bid comparison, more than price alone. The system is built to make sure the first, most complete answer to a bid request comes from you.',
    },
    {
      q: 'What happens after my project is complete?',
      a: 'A structured follow-up sequence requests a review and a referral at the point satisfaction is highest, right after the finished project, instead of leaving that ask to memory or chance.',
    },
  ],

  // All four construction-contractors sub-verticals are live, so each lists the
  // other three. Add new entries only as their pages ship.
  siblings: [
    { name: 'Kitchen & Bathroom Remodeling', slug: 'kitchen-bathroom-remodeling' },
    { name: 'Painting Contractors',          slug: 'painting-contractors' },
    { name: 'Flooring Installation',         slug: 'flooring-installation' },
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

export default function GeneralContractorsPage() {
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
            { name: 'General Contractors',        url: ROUTE },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/for/general-contractors',
            name:        'Automation for General Contractors',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <SubVerticalPageTemplate {...DATA} />
    </>
  )
}
