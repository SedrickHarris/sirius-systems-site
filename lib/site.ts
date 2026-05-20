// Site-wide config constants. Sourced from docs/site-os/inputs/client-discovery-notes.md.
// Placeholder values are flagged with a note pointing at the doc that owns them.

export const SITE = {
  name: 'Sirius Systems',
  url: 'https://siriussys.io',
  shortTagline: 'AI Automation, Smart Sites, Reputation Systems',
  // Official positioning (confirmed per docs/brand/brand-skill.md, 2026-05-20).
  // The full canonical positioning line is long; this trim fits within the
  // 140–160 char meta-description target. The full version lives in
  // docs/brand/brand-guide.md §1 and is what gets quoted in long-form copy.
  description:
    'Sirius Systems helps local service businesses capture more leads, respond faster, automate follow-up, book more appointments, and improve reviews.',
  founder: 'Sedrick Harris',
  social: {
    facebook: 'https://www.facebook.com/SiriusSys.io/',
    instagramFounder: 'https://www.instagram.com/sedrick.h.harris/',
    github: 'https://github.com/SedrickHarris/sirius-systems-site',
    gbp: 'https://share.google/TUgLZOpTwsYaHLaLZ',
  },
  // Sister brands in the ecosystem — NOT presented as Sirius Systems on this site.
  // Listed here only so internal tooling has a single source. Do not import these
  // into header/footer/page UI without explicit approval.
  ecosystem: {
    clickvsg: 'https://clickvsg.com/',
    siriusSiteStudio: 'https://siriussitestudio.com/',
    reviewScraper: 'https://reviewscraper.net/',
  },
} as const

export type SiteConfig = typeof SITE
