import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'review-automation',
  hubName:     'Real Estate & Property Services',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for Real Estate Agents & PMs',
  metaDescription: 'Real estate agents lose inquiries to agents with more reviews. We build the system that requests reviews after every closing — no manual step required.',

  eyebrow: 'Real Estate & Property Services · Review Automation',

  headline:
    'The review window closes within 48 hours of closing. Most agents let it pass without a system.',

  subheadline:
    'A buyer hands back the keys and feels great about the transaction. That moment lasts about two days before life takes over and the review never gets written. Review automation sends the request at the right moment — from the CRM close event, in your voice, with a direct link — so every transaction has a chance to become a public signal that earns the next client.',

  heroHighlights: [
    'Review request fires from the CRM close event — no manual step from the agent',
    'Timed to the 24–48 hour post-closing window when conversion rate is highest',
    'Routes to Google and Zillow based on client type and transaction',
    'AI review responses that reply to every incoming review without manual drafting',
  ],

  definitionHeadline:
    'What review automation means for a real estate agent or property manager',

  definition:
    'Review automation for a real estate professional is a system that sends a review request to the client automatically after a transaction closes — triggered by the close event in your CRM, timed to the 24–48 hour window when the experience is freshest, and routed to the platforms that matter most for your business. For residential agents that means Google and Zillow. For property managers it means requests after lease signings and resolved maintenance requests, building a review profile that attracts both property owners and prospective tenants. The system removes the manual ask from your workflow and replaces inconsistent, deal-by-deal outreach with a sequence that fires after every transaction without exception.',

  problemHeadline:
    'Where real estate professionals lose the review every satisfied client meant to leave',

  problems: [
    'The transaction closed perfectly. The client said they would leave a review. Two weeks later, life moved on and the review was never written. That pattern repeats after every deal because intention without a prompt within 48 hours almost never converts into a posted review.',
    'You are at a showing when the close event hits your CRM. No automated request fires. By the time you think to follow up, the client has mentally moved on. The agents building review count are not relying on personal memory — they have a trigger that fires while you are still with the next client.',
    'A prospective buyer or seller researches two agents with similar track records. One has 90 Google reviews and a 4.8 rating. The other has 14. The prospect calls the first agent without ever contacting the second. That gap was not built by doing better work — it was built by having a system that asked after every closing.',
    'Property managers face a specific version of this problem: dissatisfied tenants leave reviews unprompted. Satisfied tenants do not. Without a system that asks after lease signings and resolved maintenance requests, the public review profile reflects the exceptions, not the norm.',
  ],

  steps: [
    {
      label: 'Connect the trigger to your CRM close event',
      body: 'We connect the review request to the transaction close event in your CRM. For residential agents, the trigger fires when a deal is marked closed — typically the day of key handover for buyers or the day of settlement for sellers. For property managers, triggers are configured for lease signings, lease renewals, and resolved maintenance requests. The request fires at the configured time with no action from the agent.',
    },
    {
      label: 'Send a personalized request to the right platform',
      body: 'The review request goes out by SMS first — the highest-converting channel for post-closing outreach. The message is written in your voice and references the transaction type so it feels personal, not automated. Routing is configured by client type: Google for local search visibility, Zillow or Realtor.com for platform-specific trust. A follow-up email goes out for clients who do not respond by text.',
    },
    {
      label: 'Close the loop with AI review responses',
      body: 'Every review that comes in receives a response. We configure AI review responses in your voice that acknowledge each review publicly — referencing the transaction type, neighborhood, or specific detail where available. Profiles that respond to every review within 24 hours rank higher in local search and convert more profile views to inbound inquiries. The system handles the response without manual drafting on your end.',
    },
  ],

  features: [
    'CRM close event trigger — fires automatically on transaction completion with no manual step',
    'SMS review request with direct link to Google, Zillow, or Realtor.com based on client type',
    'Timing configured to the 24–48 hour post-closing conversion window',
    'Email follow-up sequence for clients who do not respond by text',
    'Property manager triggers: lease signing, lease renewal, and maintenance resolution',
    'AI review responses drafted and posted for every incoming review within 24 hours',
    'Review request templates written in your voice — not a generic platform default',
    'Consistent review velocity that builds local search ranking and profile authority over time',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does review automation do for a real estate agent?',
      a: 'Review automation for a real estate agent sends a review request to the client automatically after a transaction closes — triggered by the close event in the CRM, timed to the 24–48 hour window when the experience is freshest, and routed to Google or Zillow based on the client type. It replaces inconsistent manual outreach with a system that fires after every transaction without exception, so review count grows at the same rate on a high-volume month as it does on a slow one.',
    },
    {
      q: 'When is the best time to send a review request after a real estate closing?',
      a: 'The highest-converting window is within 24 to 48 hours of closing. For buyers, the ideal moment is the afternoon of key handover when the emotion of the transaction is still immediate. For sellers, it is the day of settlement. Review probability drops significantly with each passing day as the experience fades and daily life takes over. A trigger connected to the CRM close event fires at the right moment automatically without the agent having to remember.',
    },
    {
      q: 'How do Google reviews affect where a real estate agent ranks in local search?',
      a: 'Google uses review volume, recency, response rate, and review content as inputs to local search ranking. An agent with more recent reviews consistently outranks an agent with a better rating but fewer reviews in the local map pack. Review content that mentions specific transaction types — first home purchase, investment property, lease renewal — also signals to Google what the agent specializes in, increasing visibility for those searches. Agents who respond to every review within 24 hours see higher profile conversion from views to inbound calls.',
    },
    {
      q: 'Does review automation work differently for property managers than for agents?',
      a: 'The system is the same — the trigger events differ. For residential agents the trigger is the CRM close date. For property managers, review requests fire after lease signings, lease renewals, and resolved maintenance requests, because those are the moments when tenants have the strongest positive sentiment. Property managers have an additional problem: dissatisfied tenants leave reviews unprompted while satisfied tenants typically do not. A system that consistently asks after positive interactions shifts the review profile toward the norm rather than the exception.',
    },
    {
      q: 'Should a real estate agent respond to every Google review, and can that be automated?',
      a: 'Yes, and yes. Responding to every review signals to Google that the profile is actively managed, which contributes to local search ranking. For prospective clients reading the profile during their research phase, a response to a positive review demonstrates attentiveness; a professional response to a negative review demonstrates that the agent takes client feedback seriously. Both signals matter to a buyer or seller who is choosing between two agents they have never met. AI review responses handle the drafting so every incoming review receives a reply in the agent\'s voice without manual effort per review.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'Review Automation',               url: '/industries/real-estate-property/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/review-automation',
            name:        'Review Automation for Real Estate & Property Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
