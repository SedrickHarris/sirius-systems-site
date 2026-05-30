import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'all-in-one-business-growth-system',
  metaTitle: 'All-in-One Business Growth System | Sirius Systems',
  metaDescription:
    'AI automation, reputation management, and local SEO built to run as one connected system — not three separate tools with manual handoffs between them.',
  eyebrow: 'The Full System',
  headline: 'Stop running three systems that do not talk to each other. Run one.',
  subheadline:
    'AI automation, smart websites, and reputation systems built to work as one engine. Leads get captured, jobs get booked, and reviews keep coming without separate tools and separate logins.',
  glyphVariant: 'beacon' as const,
  definition:
    'The all-in-one business growth system from Sirius Systems is a connected stack of AI automation, reputation management, and local SEO built specifically for local service businesses. The three pillars — lead automation, review acquisition, and search visibility — are designed to feed each other: SEO brings in the lead, automation converts and books it, the completed job produces a review, the review strengthens the local search position that brought in the next lead. Each pillar compounds the others. Running them as separate tools with manual handoffs between them breaks the compounding effect.',
  problemHeadline: 'What point solutions cost you',
  problems: [
    'Your CRM, review platform, and website do not talk to each other. Moving a lead from inquiry to booked job to review request requires someone to manually bridge each gap.',
    'You are running automation in one tool, SEO in another, and reviews in a third. None of them know what the others are doing, so none of them compound.',
    'Every new tool adds a new login, a new dashboard, and a new thing to learn and maintain. The overhead of managing the stack grows faster than the results.',
    'You cannot see the full picture in one place — pipeline, review activity, and search position — so decisions get made on incomplete information.',
  ],
  howItWorksHeadline: 'How the system runs',
  steps: [
    {
      label: 'Pillar one: AI automation',
      body: 'Every lead that comes in — form submission, missed call, web chat, voicebot interaction — gets an immediate response, a qualification sequence, and a booking path without anyone on your team doing it manually. The CRM stays current. Follow-up sequences run on schedule. Appointment reminders go out automatically. The lead capture layer handles everything from first contact to booked job.',
    },
    {
      label: 'Pillar two: Reputation',
      body: 'Every completed job triggers a review request to the right platform at the right time. Every review gets a response in your voice. Your rating and review volume grow consistently because the system asks after every job, not occasionally. Competitor benchmarking shows you exactly where your review profile stands relative to the businesses competing for your customers in local search.',
    },
    {
      label: 'Pillar three: Local SEO and AEO',
      body: 'Your website, Google Business Profile, and content are optimized so customers find you in Google local search and AI answer engines. The SEO layer feeds new leads into the automation layer. Reviews feed back into the GBP and strengthen its search signals. Content structured for AI answer engines makes your business citable when customers ask ChatGPT or Perplexity for recommendations. Each pillar strengthens the others because they are connected, not isolated.',
    },
    {
      label: 'One system, one view',
      body: 'You see one pipeline, one review feed, and one search snapshot without logging into three separate dashboards to get the picture. What the system is doing, what it has done, and where the gaps are — all visible in one place so you can make decisions with complete information rather than partial data from disconnected tools.',
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
    'Leads get captured and followed up automatically across every channel. No manual hand-off between systems, no leads sitting in a separate inbox waiting for someone to act.',
    'Reviews grow consistently because every completed job produces a request — not just the ones where someone remembered to ask.',
    'Local search visibility strengthens over time because SEO, GBP signals, and review activity are working together rather than in isolation.',
    'Your team spends less time on administrative work because the connective tissue between your tools — the data entry, the reminders, the follow-ups — is handled by the system.',
    'You can see your pipeline, reputation, and search position in one place and make decisions with complete information instead of three partial views.',
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
      a: 'It is a connected stack of AI automation, reputation management, and local SEO built specifically for local service businesses. The three pillars — lead automation, review acquisition, and search visibility — are designed to feed each other so that each one compounds the others, rather than operating as separate tools that require manual coordination between them.',
    },
    {
      q: 'What is the difference between an all-in-one system and using separate tools?',
      a: 'Separate tools do not share data or trigger each other. A lead captured in your chatbot has to be manually entered into your CRM. A completed job has to prompt someone to send a review request. A review has to be manually checked and responded to. Each handoff is a point where something gets dropped. A connected system means those handoffs happen automatically: the chatbot entry creates the CRM record, the closed job triggers the review request, the review response goes out without anyone logging in to write it.',
    },
    {
      q: 'Do I have to take the whole system or can I start with one piece?',
      a: 'You can start with one piece. Most clients begin with the part of the system that addresses their most urgent gap — usually lead follow-up automation or review acquisition — and expand from there. The system is modular. The full stack is the destination, not the entry requirement.',
    },
    {
      q: 'What does it cost?',
      a: 'Pricing depends on what you already have in place and which parts of the system you are starting with. We map your current setup in a discovery call and quote based on the gaps. There is no off-the-shelf package because no two businesses start from the same place.',
    },
    {
      q: 'How long does it take to set up the full system?',
      a: 'A phased rollout typically runs four to eight weeks from discovery to full deployment, depending on the complexity of your existing stack and how many integrations are required. We prioritize the highest-impact pieces first so the system is producing results before everything is live.',
    },
    {
      q: 'How does the SEO pillar connect to the automation and reputation pillars?',
      a: 'SEO brings in the lead. Automation captures, qualifies, and converts it into a booked job. The completed job produces a review through the reputation system. That review strengthens the GBP and local search signals that determine how prominently the business appears for the next search. The loop closes and repeats. Running SEO in isolation means it does not get the review signals that reinforce rankings. Running automation in isolation means it starves for traffic. Running reputation in isolation means the reviews do not feed back into the search position. The system works because the pillars are connected.',
    },
    {
      q: 'What is AEO and why is it part of the system?',
      a: 'AEO stands for answer engine optimization — structuring your content so AI systems like ChatGPT, Perplexity, and Google AI Overviews can extract and cite your business when customers ask relevant questions. As more customers use AI to find service recommendations before they ever run a traditional search, being in the answer is a visibility channel that did not exist a few years ago. The local SEO pillar includes AEO content structure so the system covers both traditional search and AI-generated answers.',
    },
    {
      q: 'What happens if I already have some of these tools in place?',
      a: 'We start with an audit of what you already have. Tools that are working and can be connected stay. Tools that are creating gaps or cannot be integrated are evaluated honestly — we will tell you if something is worth keeping or worth replacing. The goal is the most capable connected system with the least disruption to what is already functioning.',
    },
    {
      q: 'How is this different from a marketing agency?',
      a: 'A marketing agency typically handles one channel — ads, SEO, content, social — and delivers reports. This system is operational infrastructure: it handles what happens to a lead after it arrives, what happens after a job completes, and how your search presence is maintained on an ongoing basis. It runs continuously rather than producing a monthly deliverable. The output is a functioning system, not a campaign.',
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
    images: ['/og/default.webp'],
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
