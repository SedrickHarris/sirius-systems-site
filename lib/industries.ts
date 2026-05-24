// Canonical industry hubs. Twelve top-level industry hubs covering local
// service businesses across home, construction, professional, auto,
// beauty, healthcare, real estate, hospitality, education, community,
// retail, and technology verticals.
//
// Each industry hub page (under app/industries/<slug>) surfaces its own
// sub-vertical cards via the IndustrySubCard component.

export type Industry = {
  slug: string
  name: string
  oneLiner: string
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'home-services',
    name: 'Home Services',
    oneLiner:
      "Missed-call recovery, after-hours booking, and the automation stack that runs while you're on the job.",
  },
  {
    slug: 'construction-contractors',
    name: 'Construction & Contractors',
    oneLiner:
      'Quote follow-up on the 48-hour rule, plus reviews that earn trust faster than ads.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    oneLiner:
      'Qualified appointments on the calendar and automated follow-up that closes more consultations.',
  },
  {
    slug: 'auto-services',
    name: 'Auto Services',
    oneLiner:
      'Online booking, automated reminders, and review systems built for shops and mobile operators.',
  },
  {
    slug: 'beauty-wellness',
    name: 'Beauty & Wellness',
    oneLiner:
      'Rebooking automation, no-show reduction, and review flows that fill your chair.',
  },
  {
    slug: 'healthcare-medical',
    name: 'Healthcare & Medical Practices',
    oneLiner:
      'Appointment automation, recall campaigns, and review systems built for patient-facing practices.',
  },
  {
    slug: 'real-estate-property',
    name: 'Real Estate & Property Services',
    oneLiner:
      'Lead response automation, follow-up sequences, and review systems for agents, brokers, and property managers.',
  },
  {
    slug: 'hospitality-events',
    name: 'Hospitality & Events',
    oneLiner:
      'Inquiry capture, booking automation, and reputation management for restaurants, venues, and event businesses.',
  },
  {
    slug: 'education-childcare',
    name: 'Education & Childcare',
    oneLiner:
      'Enrollment follow-up, parent communication automation, and review systems for schools, studios, and centers.',
  },
  {
    slug: 'community-faith-nonprofit',
    name: 'Community, Faith & Nonprofit',
    oneLiner:
      'Outreach automation, donor follow-up, and communication systems for mission-driven organizations.',
  },
  {
    slug: 'retail-local-commerce',
    name: 'Retail & Local Commerce',
    oneLiner:
      'Customer follow-up, review generation, and local search visibility for shops and storefronts.',
  },
  {
    slug: 'technology-b2b',
    name: 'Technology & B2B Services',
    oneLiner:
      'Lead nurture automation, CRM integration, and review systems for IT firms, agencies, and B2B service providers.',
  },
]
