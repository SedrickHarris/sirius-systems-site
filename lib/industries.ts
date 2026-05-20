// Six industries Sirius Systems serves. Mirrors
// docs/site-os/inputs/site-build-plan.md §3.3 and url-strategy.md §3.

export type Industry = {
  slug: string
  name: string
  oneLiner: string
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'home-services',
    name: 'Home Services',
    oneLiner: "Missed-call recovery and after-hours booking — built around the day you're already running.",
  },
  {
    slug: 'cleaning-companies',
    name: 'Cleaning Companies',
    oneLiner: 'Recurring contracts, automated quoting, and the review velocity that wins local search.',
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    oneLiner: 'Same-day lead capture, routing, and post-haul review asks that compound.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    oneLiner: 'Lead follow-up that actually gets answered — and a site that books showings without you chasing.',
  },
  {
    slug: 'contractors',
    name: 'Contractors',
    oneLiner: 'Quote follow-up on the 48-hour rule, plus reviews that earn trust faster than ads.',
  },
  {
    slug: 'coaches-consultants',
    name: 'Coaches & Consultants',
    oneLiner: 'Qualified discovery calls on the calendar without manual outreach.',
  },
]
