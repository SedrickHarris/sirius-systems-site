// Canonical service catalog. Single source of truth: every page that
// references services pulls from here. Slugs and grouping mirror
// docs/seo/url-strategy.md §3 and docs/site-os/inputs/site-build-plan.md §3.

export type ServiceGroup = 'ai' | 'web-seo' | 'reputation' | 'capstone'

export type Service = {
  slug: string
  name: string
  oneLiner: string
  group: ServiceGroup
}

export const SERVICES: Service[] = [
  // Group A: AI & automation
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    oneLiner: 'The umbrella system. Capture, qualify, book, and follow up on autopilot.',
    group: 'ai',
  },
  {
    slug: 'ai-chatbots',
    name: 'AI Chatbots',
    oneLiner: 'On-site chat that answers in your voice and books appointments 24/7.',
    group: 'ai',
  },
  {
    slug: 'ai-voicebots',
    name: 'AI Voicebots',
    oneLiner: "Never miss a lead call. Voice AI picks up, qualifies, and books while you're on a job.",
    group: 'ai',
  },
  {
    slug: 'crm-automation',
    name: 'CRM Automation',
    oneLiner: 'Turn leads into booked jobs without manual follow-up. Your CRM, finally working.',
    group: 'ai',
  },
  {
    slug: 'appointment-booking-automation',
    name: 'Appointment Booking',
    oneLiner: 'From inquiry to confirmed appointment without you in the loop.',
    group: 'ai',
  },
  {
    slug: 'lead-generation-automation',
    name: 'Lead Generation',
    oneLiner: 'Paid, organic, and referral funnels wired directly to your CRM and booking flow.',
    group: 'ai',
  },

  // Group B: Smart websites & local SEO
  {
    slug: 'smart-websites',
    name: 'Smart Websites',
    oneLiner: 'More than a brochure. A site that captures, qualifies, books, and follows up.',
    group: 'web-seo',
  },
  {
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile',
    oneLiner: 'NAP, categories, services, posts, photos, Q&A: fully optimized for local visibility.',
    group: 'web-seo',
  },
  {
    slug: 'local-seo-aeo',
    name: 'Local SEO & AEO',
    oneLiner: 'Rank in Google AND in AI answer engines: ChatGPT, Perplexity, AI Overviews.',
    group: 'web-seo',
  },

  // Group C: Reputation
  {
    slug: 'reputation-management',
    name: 'Reputation Management',
    oneLiner: 'Earn more reviews, handle hard ones, keep local search visibility strong.',
    group: 'reputation',
  },
  {
    slug: 'review-automation',
    name: 'Review Automation',
    oneLiner: 'Right customer, right time, right channel: without spamming or sounding scripted.',
    group: 'reputation',
  },
  {
    slug: 'ai-review-responses',
    name: 'AI Review Responses',
    oneLiner: 'On-brand replies to every review, positive or hard, at scale.',
    group: 'reputation',
  },
  {
    slug: 'competitor-review-benchmarking',
    name: 'Competitor Benchmarking',
    oneLiner: 'See how your reviews stack up against your top 5 local rivals: and where to push next.',
    group: 'reputation',
  },

  // Capstone
  {
    slug: 'all-in-one-business-growth-system',
    name: 'All-in-One Growth System',
    oneLiner: 'The integrated system: AI automation + smart sites + reputation, running as one engine.',
    group: 'capstone',
  },
]

export const SERVICE_GROUPS: {
  id: ServiceGroup
  label: string
  blurb: string
  hubSlug: string
}[] = [
  {
    id: 'ai',
    label: 'AI & Automation',
    blurb: 'Chatbots, voicebots, CRM, booking, and lead-gen: wired into one system that runs while you work.',
    hubSlug: 'ai-automation',
  },
  {
    id: 'web-seo',
    label: 'Smart Websites & Local SEO',
    blurb: 'A smart website plus the local SEO + GBP + AEO work that gets you found and chosen.',
    hubSlug: 'smart-websites',
  },
  {
    id: 'reputation',
    label: 'Reputation Systems',
    blurb: 'Earn more reviews, respond well to the hard ones, and benchmark against your top local rivals.',
    hubSlug: 'reputation-management',
  },
  {
    id: 'capstone',
    label: 'All-in-One Growth System',
    blurb: 'Pick one piece, or take the whole engine. Same operator either way.',
    hubSlug: 'all-in-one-business-growth-system',
  },
]

export function servicesByGroup(group: ServiceGroup): Service[] {
  return SERVICES.filter((s) => s.group === group)
}
