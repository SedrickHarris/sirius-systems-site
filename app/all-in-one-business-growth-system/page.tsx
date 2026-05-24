import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'all-in-one-business-growth-system',
  metaTitle:
    'All-in-One Business Growth System for Service Businesses | Sirius Systems',
  metaDescription:
    'One system that connects AI automation, reputation management, and local SEO: so your local service business captures more leads, earns more reviews, and ranks where customers search.',
  eyebrow: 'The Full System',
  headline: 'Stop running three systems that do not talk to each other. Run one.',
  subheadline:
    'AI automation, smart websites, and reputation systems built to work as one engine. Leads get captured, jobs get booked, and reviews keep coming without separate tools and separate logins.',
  glyphVariant: 'beacon' as const,
  definition:
    'The Sirius Systems all-in-one business growth system is a connected stack of AI automation, reputation management, and local SEO built specifically for local service businesses: designed so that leads, reviews, and search visibility compound together rather than operating in isolation.',
  problemHeadline: 'What point solutions cost you',
  problems: [
    "Your CRM, review platform, and website don't talk to each other: data entry is manual and things fall through.",
    "You're running automations in one tool, SEO in another, and reviews in a third: none of them compound.",
    'Every new tool adds a new login, a new dashboard, and a new thing to manage.',
    "You can't see the full picture: leads, reviews, and rankings in one place: so decisions get made on incomplete information.",
  ],
  howItWorksHeadline: 'How the system runs',
  steps: [
    {
      label: 'Pillar one: AI automation',
      body: 'Every lead that comes in gets an immediate response, a qualification sequence, and a booking path: automatically. Missed calls, form fills, chat inquiries, and voicebot interactions all feed the same pipeline. Your CRM stays current without manual updates.',
    },
    {
      label: 'Pillar two: Reputation',
      body: 'Every completed job triggers a review request. Every review gets a response. Your rating and review volume grow consistently because the system asks every time, not occasionally. Competitor benchmarking shows you exactly where you stand.',
    },
    {
      label: 'Pillar three: Local SEO and AEO',
      body: 'Your website, Google Business Profile, and content are optimized so customers find you in local search and AI answer engines. The SEO layer feeds leads into the automation layer. Reviews feed back into the SEO layer. Each pillar strengthens the others.',
    },
    {
      label: 'One system, one view',
      body: 'You see one pipeline, one review feed, and one search snapshot without logging into three different tools to get the picture. What used to require a 30-minute check-in across separate dashboards happens in one view.',
    },
  ],
  featuresHeadline: 'What the system includes',
  features: [
    'AI automation: lead capture, follow-up, booking, and CRM across all channels',
    'AI chatbot: 24/7 on-site qualification and booking',
    'AI voicebot: missed call recovery and after-hours lead capture',
    'CRM automation: pipeline stages and sequences that run themselves',
    'Appointment booking: self-booking connected to your live calendar',
    'Review automation: requests after every completed job',
    'AI review responses: every review answered in your voice',
    'Reputation monitoring: all platforms, one feed',
    'Google Business Profile optimization: fully configured and maintained',
    'Local SEO and AEO: site and content built for local search and AI answer engines',
    'Competitor benchmarking: your position versus the local field',
    'Smart website: conversion-first, connected to the full stack',
  ],
  outcomesHeadline: 'What changes when it runs',
  outcomes: [
    'Leads get captured and followed up automatically: no manual hand-off between systems.',
    'Reviews grow consistently because every job produces a request, not just the ones where someone remembered.',
    'Local search visibility improves because SEO, GBP, and reviews are working together.',
    'Your team does less administrative work because the system handles the connective tissue.',
    'You can see your pipeline, reputation, and search position in one place instead of three.',
  ],
  relatedSlugs: [
    'ai-automation',
    'reputation-management',
    'local-seo-aeo',
    'smart-websites',
    'services',
  ],
  industryFitHeadline: 'Built for local service businesses',
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is the Sirius Systems all-in-one business growth system?',
      a: "It's a connected stack of AI automation, reputation management, and local SEO built for local service businesses. The three pillars: lead automation, reviews, and search visibility: are designed to work together so each one compounds the others, rather than operating as separate tools.",
    },
    {
      q: 'Do I have to take the whole system or can I start with one piece?',
      a: 'You can start with one piece. Most clients begin with the part of the system that addresses their most urgent gap: usually lead follow-up automation or review acquisition: and expand from there. The system is modular; the full stack is the destination, not the entry requirement.',
    },
    {
      q: 'What does it cost?',
      a: "Pricing depends on what you already have in place and which parts of the system you're starting with. We map your current setup in a discovery call and quote based on the gaps. There's no off-the-shelf package because no two businesses start from the same place.",
    },
    {
      q: 'How long does it take to set up the full system?',
      a: 'A phased rollout typically runs four to eight weeks from discovery to full deployment, depending on the complexity of your existing stack and how many integrations are required. We prioritize the highest-impact pieces first so you see results before everything is live.',
    },
    {
      q: 'What makes this different from using separate tools for each function?',
      a: "Separate tools don't talk to each other: data has to be moved manually, sequences break at handoff points, and you have no unified view of what's working. A connected system means a lead captured by the chatbot flows into the CRM, triggers a booking sequence, and eventually produces a review request after the job: without anyone manually bridging the gaps.",
    },
  ],
}

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: `/${PAGE.slug}`,
  },
}

export default function AllInOneBusinessGrowthSystemPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.metaTitle,
            description: PAGE.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            {
              name: 'All-in-One Business Growth System',
              url: `/${PAGE.slug}`,
            },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'All-in-One Business Growth System',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
