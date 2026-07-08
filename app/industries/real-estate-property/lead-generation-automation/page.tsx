import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Real Estate & Property Services',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for Real Estate Agents',
  metaDescription: 'Real estate leads go to whoever responds first. We automate inquiry capture, CRM routing, and follow-up so no lead goes cold while you are at a showing.',

  eyebrow: 'Real Estate & Property Services · Lead Generation Automation',

  headline:
    'The lead came in while you were at a showing. By the time you saw it, they had already booked with someone else.',

  subheadline:
    'Real estate runs on speed. A new buyer inquiry, a seller valuation request, a referral that lands in a text — if no one responds within minutes, the lead moves to the next agent who does. Lead generation automation connects every channel sending you inquiries into one system that responds immediately, qualifies the contact, and keeps following up for as long as it takes — while you stay focused on your clients.',

  heroHighlights: [
    'Immediate response to every new inquiry — even when you are in a showing or after hours',
    'Every lead source unified: website, portals, referrals, and paid ads in one CRM pipeline',
    'Long-term nurture sequences for leads that are not ready now but will be in 3–12 months',
    'Source tracking that shows which channels produce closed deals, not just form fills',
  ],

  definitionHeadline:
    'What lead generation automation means for a real estate business',

  definition:
    'Lead generation automation for a real estate agent, team, or property services business means connecting every channel that sends you inquiries — your website, listing portals, paid ads, open house sign-ins, and referrals — into a single CRM intake system that captures the contact, responds immediately, and runs a follow-up sequence for as long as the lead needs to be nurtured. The goal is that no inquiry goes cold because you were busy, and no lead falls out of the pipeline because the follow-up was inconsistent. In a market where the first agent to respond usually wins, automation is what makes consistent speed possible at any volume.',

  problemHeadline:
    'Where real estate businesses lose leads they already worked to earn',

  problems: [
    'A buyer submits an inquiry from your website at 7 p.m. on a Tuesday while you are wrapping up a showing. You check your phone an hour later. The lead has already responded to two other agents who got back to them faster. You were the one they found first. Someone else got the call.',
    'Your leads come from six different places — your website, listing portals, paid ads, a referral, an open house sign-in, and a landing page from last quarter\'s campaign. Each one feeds a different inbox, a different spreadsheet, or a CRM field that someone has to fill in manually. Nothing routes everything into one place automatically, and follow-up is inconsistent across all of them.',
    'Most real estate leads are not ready to transact for three to twelve months. Most agents follow up for a week and then stop. The leads that eventually close go to whoever stayed in front of them long enough — usually a competitor with a drip sequence running in the background while you moved on to the next prospect.',
    'You know you are investing in traffic — ads, your GBP, your website, portal listings — but you have no reliable way to trace which of those channels is producing closed deals versus which is producing inquiries that never convert. Without that attribution, your marketing budget is allocated by gut feel instead of by data.',
  ],

  howItWorksHeadline: 'How we build your lead generation system',

  steps: [
    {
      label: 'Map every channel sending you leads',
      body: 'We trace where inquiries are currently coming in — your website, listing portals, paid campaigns, open house tools, referral sources — and identify where each one enters your pipeline, where follow-up stalls, and where contacts drop out before you ever have a real conversation.',
    },
    {
      label: 'Unify all sources into one intake',
      body: 'We connect every channel to a single CRM pipeline. Every lead, regardless of where it came from, lands with contact details, source data, and the context your team needs to follow up — without anyone manually copying it from one place to another.',
    },
    {
      label: 'Wire immediate response and long-term nurture',
      body: 'The moment a lead enters the system, an immediate response goes out — acknowledging the inquiry and starting the qualification conversation. For leads that are not ready now, a long-term nurture sequence runs automatically, keeping your name in front of them across the months it takes for them to be ready to move.',
    },
    {
      label: 'Track source to closed deal',
      body: 'We configure source attribution so you can see which channels are producing actual closed business, not just form fills or portal views. That data changes how you allocate your marketing spend next quarter.',
    },
  ],

  featuresHeadline: 'What the system includes',

  features: [
    'Multi-channel intake — website, portals, paid ads, open house, and referral in one pipeline',
    'Instant CRM entry — every lead lands with source data and contact details attached automatically',
    'Immediate first response — acknowledgment and qualification message fires within seconds of inquiry',
    'Long-term nurture sequences — automated follow-up that runs for weeks or months without manual input',
    'After-hours and weekend capture — inquiries arriving outside business hours enter the pipeline automatically',
    'Lead qualification — buyer or seller intent, timeline, and property criteria captured before your first call',
    'Re-engagement sequences — structured outreach for leads that went quiet but are not closed',
    'Source attribution — closed deals traced back to the channel that produced the original inquiry',
  ],

  relatedServiceSlugs: [
    'crm-automation',
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is lead generation automation for a real estate agent?',
      a: 'It means connecting every channel that sends you inquiries — your website, listing portals, paid ads, open house tools, referrals — to a single CRM system that captures each contact, responds immediately, and runs follow-up automatically. The goal is that no lead goes unanswered because you were in a showing, and no lead goes cold because follow-up was inconsistent. The system handles the timing and consistency so you can focus on the conversations that require your direct involvement.',
    },
    {
      q: 'How does automated lead follow-up work when I am at a showing?',
      a: 'When a new inquiry arrives while you are unavailable, the system fires an immediate response — acknowledging the inquiry, introducing your business, and starting a qualification exchange. By the time you are free to make contact, the lead has already heard from your pipeline, provided some context about what they are looking for, and is warm rather than cold. You pick up a conversation already in progress, not a lead who has been waiting.',
    },
    {
      q: 'Do I need lead generation automation if I already get leads from Zillow or listing portals?',
      a: 'Yes — because portals deliver the inquiry but do not handle what happens next. If those leads land in an email inbox and wait for manual follow-up, you are competing against every other agent who responds faster. Lead generation automation ensures that every portal inquiry enters your CRM immediately and gets a response in seconds, regardless of when it arrives. It also unifies portal leads with your other sources so everything is tracked in one place.',
    },
    {
      q: 'How long should automated follow-up run for a real estate lead?',
      a: 'Most real estate leads take three to twelve months from first inquiry to transaction. Most agents stop following up after a week. The automation runs a long-term nurture sequence — spaced touchpoints across weeks and months — that keeps your name present until the lead is ready to move. The sequence is designed to be consistent without feeling intrusive, and it stops when the lead responds and enters an active conversation.',
    },
    {
      q: 'Does lead generation automation work for property managers and mortgage companies, not just agents?',
      a: 'Yes. The core system — unified intake, immediate response, long-term nurture, source attribution — applies to any real estate business that handles inbound inquiries. Property managers receive tenant inquiries from multiple sources. Mortgage companies work longer pipelines where nurture timing matters. The specific sequences and qualification questions are configured to fit how your particular role in the real estate market actually operates.',
    },
  ],

  ctaHeadline: 'See exactly where your leads are going cold before anything changes',

  ctaBody:
    'We map your current inquiry flow — which channels are sending leads, what happens the moment a new contact arrives, and where your pipeline loses people before a real conversation starts. No obligations. Just a clear picture of where the gaps are.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'Lead Generation Automation',      url: '/industries/real-estate-property/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/lead-generation-automation',
            name:        'Lead Generation Automation for Real Estate & Property Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
