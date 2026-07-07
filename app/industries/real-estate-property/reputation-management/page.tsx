import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'reputation-management',
  hubName:     'Real Estate & Property Services',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Real Estate Agents',
  metaDescription: 'Real estate agents compete on reviews. We build the system that earns them after every closing, responds to every one, and monitors your reputation.',

  eyebrow: 'Real Estate & Property Services · Reputation Management',

  headline:
    'Reputation management for real estate agents — most let their review profile build by accident',

  subheadline:
    'A buyer or seller researches you before they ever call. They read your Google reviews, check your Zillow profile, compare your rating against two other agents, and make a shortlist you never knew existed. The agents with a strong review profile get the call. The ones without a system do not.',

  heroHighlights: [
    'Automated review requests sent after every closing — while the experience is still fresh',
    'Every review responded to across Google, Zillow, Realtor.com, and Facebook',
    'Competitor review benchmarking so you always know where you stand in your market',
    'Monitoring across every platform so nothing sits unanswered',
  ],

  definitionHeadline:
    'What reputation management actually means for a real estate agent',

  definition:
    'Reputation management for a real estate agent means running a system that earns reviews consistently after every closed transaction, responds to every review on every platform, and monitors what buyers, sellers, and tenants are saying so nothing gets missed. It is not damage control after a difficult client leaves a negative review — it is the ongoing operation that builds a review profile strong enough to rank in local search, strong enough to convert a prospect during their research phase, and strong enough to be cited by AI tools like ChatGPT and Perplexity when someone asks which agent to call.',

  problemHeadline:
    'Where real estate agents lose clients they already earned',

  problems: [
    'The transaction closed well but no review request went out. The client meant to post one and moved on. That pattern repeats after every deal and your review count stays flat while agents with an automated system keep accumulating ratings and pulling ahead in local search.',
    'A negative review posted weeks ago is still sitting unanswered. Every prospective buyer or seller who searches your name reads it first — and silence reads as indifference. That unanswered review is costing you inquiries every day it sits there.',
    'A competing agent with comparable experience and similar pricing has forty more reviews and a more active response pattern. They rank higher in the map pack and on Zillow agent search. They get called first — not because they are better, but because they have a system and you do not.',
    'Your reviews are scattered across Google, Zillow, Realtor.com, and Facebook — none of the profiles look strong because the volume is spread thin. A prospect checking any single platform sees a handful of reviews and moves to the next agent on the list.',
  ],

  howItWorksHeadline:
    'How reputation management works for real estate agents and property managers',

  steps: [
    {
      label: 'Review request goes out after every transaction',
      body: 'When a deal closes or a lease is signed, a review request is sent automatically — by text or email — while the experience is still fresh. No manual follow-up required. No awkward ask. The timing and message are built into the workflow.',
    },
    {
      label: 'Every review gets a response',
      body: 'Positive reviews, critical reviews, and everything in between — every one is acknowledged across Google, Zillow, Realtor.com, and Facebook. A consistent response pattern signals professionalism to prospective clients and strengthens your local search presence.',
    },
    {
      label: 'Competitors stay visible',
      body: 'Your review volume and rating are tracked against competing agents and brokerages in your market. When a competitor pulls ahead, you see it. When your ranking in local search shifts, you know why.',
    },
    {
      label: 'Nothing slips through unmonitored',
      body: 'Mentions and new reviews across every platform are monitored continuously. A negative review that surfaces on a directory you rarely check does not sit there for months before someone notices it.',
    },
  ],

  featuresHeadline:
    'What the reputation management system covers for real estate businesses',

  features: [
    'Automated post-closing review requests via text and email',
    'Review monitoring across Google, Zillow, Realtor.com, Facebook, and Redfin',
    'Response management — every review acknowledged, every platform',
    'Competitor review benchmarking across agents and brokerages in your market',
    'Alert system for new reviews that need fast attention',
    'Review profile consolidation — volume built on the platforms that matter most',
    'Property management review workflows for tenant touchpoints and lease renewals',
    'Reporting on review velocity, average rating, and platform-by-platform standing',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'local-seo-aeo',
  ],

  faqs: [
    {
      q: 'What is reputation management for real estate agents?',
      a: 'Reputation management for real estate agents is the ongoing system that earns reviews after every transaction, responds to every review across every platform, and monitors what is being said about your business so nothing gets missed. It covers Google, Zillow, Realtor.com, Facebook, and Redfin — the platforms buyers and sellers check before deciding which agent to call.',
    },
    {
      q: 'How do real estate agents get more Google reviews?',
      a: 'The most reliable method is an automated review request sent within 48 hours of closing, when client satisfaction is highest and the experience is still fresh. A direct link to your Google Business Profile in a short text message removes friction and significantly increases completion rates. Agents who automate this process consistently outperform those who ask manually or not at all.',
    },
    {
      q: 'Which review platforms matter most for real estate agents?',
      a: 'Google Business Profile is the highest priority — it directly influences local search ranking and map pack visibility. Zillow is critical because buyers and sellers actively use it to compare agents during their search. Realtor.com and Facebook are secondary but worth maintaining. The most common mistake is spreading requests across too many platforms and ending up with thin volume on all of them — prioritize Google first, then Zillow.',
    },
    {
      q: 'How should a real estate agent respond to a negative review?',
      a: 'Respond promptly, stay professional, and keep the response brief. Acknowledge the concern without arguing the details publicly, express that you take feedback seriously, and invite the person to continue the conversation offline. A well-handled response to a negative review often reassures prospective clients more than the negative review harms — silence is the only response that consistently costs business.',
    },
    {
      q: 'Does review volume affect local search ranking for real estate agents?',
      a: 'Yes. Google\'s local algorithm uses review volume, star rating, recency, and response activity as ranking signals. Agents with more reviews, higher ratings, and active response patterns rank higher in the map pack for searches like "real estate agent near me" and "realtor in [city]". Zillow also factors review count into its own agent search ranking. A consistent review acquisition system compounds over time — every closed transaction is an opportunity to strengthen both your local search position and your profile on industry-specific platforms.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit.',

  ctaBody:
    'We will map where reviews, follow-up, or local visibility are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'Reputation Management',           url: '/industries/real-estate-property/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/reputation-management',
            name:        'Reputation Management for Real Estate Agents',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
