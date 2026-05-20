// Canonical industry hubs. Five top-level industry hubs replace the
// previous six-list (cleaning-companies, junk-removal, real-estate,
// coaches-consultants folded into broader hubs as sub-verticals).
//
// Each industry hub page (when built) will surface its own sub-vertical
// cards via the IndustrySubCard component.

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
    slug: 'contractors',
    name: 'Contractors',
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
]
