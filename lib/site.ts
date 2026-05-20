// Site-wide config constants. Sourced from docs/site-os/inputs/client-discovery-notes.md.
// Placeholder values are flagged with a note pointing at the doc that owns them.

export const SITE = {
  name: 'Sirius Systems',
  url: 'https://siriussys.io',
  shortTagline: 'AI Automation, Smart Sites, Reputation Systems',
  // Working positioning — pending client confirmation (content-needed 1.12).
  description:
    'Sirius Systems builds AI automation, smart websites, and reputation systems for local service businesses. One platform, end-to-end growth.',
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
