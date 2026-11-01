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
//
// Note on insurance-claim coordination: an earlier draft of FAQ 4 asked whether
// we work with insurance claims for water or storm damage. That capability is
// not confirmed, so the question was replaced rather than answered. Do not add
// it back without client confirmation, and do not answer it either way from
// inference. See do-not-invent-rules.md.

const ROUTE = '/industries/construction-contractors/for/flooring-installation'

const DATA: SubVerticalPageData = {
  hubSlug:         'construction-contractors',
  hubName:         'Construction & Contractors',
  subVerticalSlug: 'flooring-installation',
  subVerticalName: 'Flooring Installation',

  metaTitle: 'Flooring Contractor Lead & CRM Automation',

  metaDescription:
    'Fast response to damage calls, schedule communication for remodel orders, and referral follow-up built for flooring installers.',

  eyebrow: 'Flooring Installation',

  headline:
    'When flooring damage hits, homeowners call everyone in the same hour.',

  subheadline:
    'Water and storm damage do not wait for a considered decision, and a backordered material can stall a remodel schedule you do not control. We build the fast-response, schedule-communication, and referral-follow-up system built for how flooring work actually happens.',

  operatingReality: {
    demandTrigger:
      'Damage-or-remodel driven, not refresh-driven. A damage trigger: water damage, pet damage, or worn traffic patterns force a replacement decision the homeowner did not choose the timing of. A remodel trigger: flooring is usually one line item inside a larger kitchen, bathroom, or whole-home remodel, meaning the flooring company is rarely the first call, they are brought in after cabinets, counters, or a general contractor scope is already set.',
    urgencyWindow:
      'Damage-driven jobs are genuinely urgent, standing water and active damage create a real clock, mold risk and subfloor damage getting worse. Remodel-driven jobs run on the broader project timeline, which the flooring company does not control, so the urgency is fitting into an install window set by other trades rather than raw response speed.',
    jobRhythm:
      'Almost entirely project-based and one-off for residential, with no meaningful recurring-homeowner segment. The closest equivalent is commercial and property-management portfolios replacing flooring across multiple units on a cycle, which is a different buyer entirely, a facilities manager rather than a homeowner, and a different sales motion.',
  },

  leakHeadline: 'Where a flooring job gets lost to someone faster',

  leaks: [
    {
      moment:
        'After sudden water or storm damage, the homeowner calls multiple flooring and restoration companies in the same hour, in a genuine panic state.',
      consequence:
        'Whoever gets an in-home assessment scheduled first typically wins, and the window to be first is measured in hours rather than days.',
    },
    {
      moment:
        'Material lead time or a backorder is not communicated proactively once a remodel-tied order is placed.',
      consequence:
        'The customer, already juggling a multi-trade remodel schedule, loses confidence in the flooring company specifically and either cancels or lets a competitor with faster stock take over.',
    },
    {
      moment:
        'After install, there is no structured follow-up for warranty registration, care instructions, or a referral ask.',
      consequence:
        'Repeat and referral revenue from realtor and property-manager relationships goes uncaptured, silently, because the company attention moves to the next job the moment install is done.',
    },
  ],

  servicePriority: [
    {
      slug: 'ai-voicebots',
      why:  'Directly answers leak 1. Damage-driven inquiries need sharp urgency, and the in-home assessment scheduled fastest wins.',
    },
    {
      slug: 'crm-automation',
      why:  'Directly answers leak 2. Material-lead-time and multi-trade-schedule communication is structurally specific to flooring, where an order can sit waiting on stock.',
    },
    {
      slug: 'review-automation',
      why:  'Directly answers leak 3. Referral-relationship follow-up tuned to the realtor and property-manager channel, not a generic review ask.',
    },
  ],

  losingTo:
    'Restoration companies for damage-driven jobs specifically, since an insurance-adjuster-referred restoration company can absorb the whole job including flooring and cut the specialist flooring installer out entirely, and big-box retailers in-house installation arms for remodel-driven jobs.',

  faqs: [
    {
      q: 'How fast can you respond to water or storm damage flooring issues?',
      a: 'Damage-driven inquiries are treated as urgent. An AI voicebot can pick up and schedule an in-home assessment immediately, which matters because homeowners in this situation are typically calling several companies within the same hour.',
    },
    {
      q: 'Do you coordinate scheduling with other remodel trades like cabinets and countertops?',
      a: 'The CRM automation is built to track where a flooring job sits inside a larger remodel timeline, so scheduling and material-lead-time communication account for the sequence set by other trades rather than treating flooring as a standalone job.',
    },
    {
      q: 'What happens if my flooring material is backordered?',
      a: 'Automated updates keep the customer informed of lead-time and backorder status proactively, rather than leaving them to assume the project has stalled or reach out to a competitor with faster stock.',
    },
    {
      q: 'What happens after installation, do you help make sure I get a warranty registered or follow up for referrals?',
      a: 'Yes. After a flooring job is marked complete, a follow-up sequence handles warranty registration and care instructions, and includes a referral ask timed to when the customer is most satisfied, closing the loop on the realtor and property-manager relationships that often source the job in the first place.',
    },
    {
      q: 'Does the follow-up system change depending on whether the job is damage repair or a planned remodel?',
      a: 'Yes. A damage-driven call is treated with the urgency of an active problem, so the voicebot and booking flow prioritize fast response. A remodel-tied order is tracked against the schedule set by other trades in the project, with proactive lead-time and installation-window updates instead of urgent-response messaging that would not fit a planned timeline.',
    },
  ],

  // All four construction-contractors sub-verticals are live, so each lists the
  // other three. Add new entries only as their pages ship.
  siblings: [
    { name: 'General Contractors',           slug: 'general-contractors' },
    { name: 'Kitchen & Bathroom Remodeling', slug: 'kitchen-bathroom-remodeling' },
    { name: 'Painting Contractors',          slug: 'painting-contractors' },
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

export default function FlooringInstallationPage() {
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
            { name: 'Flooring Installation',      url: ROUTE },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/for/flooring-installation',
            name:        'Automation for Flooring Installation',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <SubVerticalPageTemplate {...DATA} />
    </>
  )
}
