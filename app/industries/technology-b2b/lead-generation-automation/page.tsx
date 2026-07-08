import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Technology & B2B Services',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for IT Firms & B2B Tech',
  metaDescription: 'IT firms and MSPs lose inbound leads to slow response. Sirius captures every inquiry, responds in minutes, and keeps your B2B pipeline moving.',

  eyebrow: 'Technology & B2B Services · Lead Generation Automation',

  headline:
    'Your inbound leads are going cold while your engineers handle tickets',

  subheadline:
    'An IT firm or MSP invests in inbound — a website, ads, local SEO, referrals — and then the inquiries sit in an inbox for hours or over a weekend while the team handles delivery. By the time someone follows up, the prospect has already scheduled a discovery call with the firm that responded first. Lead generation automation closes that gap: every inbound inquiry gets an immediate response, a qualification sequence, and a path to book a call — without pulling a single engineer off a ticket.',

  heroHighlights: [
    'Immediate inbound response — every inquiry acknowledged in minutes, not hours or days',
    'Multi-touch follow-up sequences built for B2B tech sales cycles of 3–12 months',
    'CRM entry on every lead — no manual logging, no leads lost between tools',
    'Source tracking — know which channels produce booked discovery calls, not just form fills',
  ],

  definitionHeadline:
    'What lead generation automation actually means for a B2B technology firm',

  definition:
    'Lead generation automation for an IT firm, MSP, SaaS company, or B2B technology business is the system that connects every inbound channel — your website, paid ads, referral partners, organic search — to a single intake flow that captures the lead, creates a CRM record, fires an immediate response, and starts a multi-touch follow-up sequence automatically. The system does not replace your sales process. It handles the intake layer — the part that typically fails because engineers are on tickets, principals are in client meetings, and no one is watching the inbox at 7pm on a Friday when a prospect submits a demo request.',

  problemHeadline:
    'Where IT firms and B2B tech companies lose inbound leads they already paid to generate',

  problems: [
    'An inbound inquiry arrives — a contact form submission, a website chatbot conversation, a referral email — and sits in an inbox for hours or through the weekend. The prospect contacts two other firms in the same window. One of them responds in minutes. That firm gets the discovery call.',
    'Your team follows up on the first touchpoint. The prospect does not reply. No second touchpoint fires. No third. The lead goes cold not because it was a bad fit but because the follow-up sequence was a single email and a hope.',
    'Leads arrive from multiple channels — the website form, the chatbot, referrals, LinkedIn, paid ads — and each one goes to a different place. Nothing lands in the CRM automatically. Pipeline visibility depends on whoever last updated a spreadsheet.',
    'You have no reliable signal on which channels produce booked discovery calls versus which produce form fills that never convert. Without that data, you are investing in traffic without knowing which investment is building the pipeline.',
  ],

  steps: [
    {
      label: 'Map every inbound channel',
      body: 'We audit every channel currently sending leads to your technology firm — website forms, chatbot conversations, referral flows, paid ads, organic inquiries — and identify where leads enter, where they stall, and where they drop out of the pipeline entirely.',
    },
    {
      label: 'Build the unified intake system',
      body: 'We connect every channel to a single intake flow. Every inbound lead, regardless of source, lands in your CRM with source data, contact details, and the context needed for immediate follow-up — automatically, without manual entry from your team.',
    },
    {
      label: 'Wire the response and nurture sequences',
      body: 'The moment a lead enters the system, an automated sequence fires: an immediate acknowledgment, a qualification exchange, a path to book a discovery call. For leads that do not respond on the first touch, multi-touch sequences continue reaching out across the 3–12 month B2B sales cycle — so warm prospects do not go cold because no one remembered to follow up.',
    },
    {
      label: 'Track what converts to closed business',
      body: 'Source-level tracking connects your inbound channels to outcomes — not just contact volume. You can see which channels are filling the pipeline with prospects that become clients, and which are generating activity without producing revenue.',
    },
  ],

  features: [
    'Immediate inbound response: every lead acknowledged in minutes regardless of when or how it arrives',
    'Multi-channel capture: website, chatbot, referral, paid, organic, and LinkedIn inquiries all route into one intake flow',
    'Automatic CRM entry: every lead lands in your pipeline with source data and contact details — no manual logging',
    'Multi-touch follow-up: automated sequences keep warm prospects engaged across B2B sales cycles of 3–12 months',
    'Qualification automation: filters leads by fit before they reach your team — your principals review qualified conversations, not raw inquiries',
    'Discovery call booking: qualified leads can self-schedule directly from the follow-up sequence without waiting for a callback',
    'Source-level attribution: ties booked discovery calls back to the specific channel that produced them',
    'After-hours coverage: the intake and response system operates at any hour — Friday evening inquiries get the same response as Monday morning ones',
  ],

  relatedServiceSlugs: [
    'crm-automation',
    'ai-chatbots',
    'appointment-booking-automation',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'What is lead generation automation for an IT firm or MSP?',
      a: 'It is the system that connects every inbound channel — your website, paid ads, referral partners, organic search — to a single intake flow that captures the lead, creates a CRM record, fires an immediate response, and starts a multi-touch follow-up sequence automatically. For an IT firm or MSP, that means an inquiry that arrives at 7pm on a Friday gets a response within minutes and enters a nurture sequence that continues across the 3–12 month B2B sales cycle — without any action from your team until the lead is qualified and ready for a discovery call.',
    },
    {
      q: 'How does lead generation automation help B2B technology firms respond faster to inbound leads?',
      a: 'Most IT firms and MSPs lose inbound leads not to a competitor with better capability or pricing, but to one that responded faster. When your team is focused on delivery — handling tickets, managing client infrastructure, executing projects — the inbound inquiry sits. Automation responds to every inbound lead immediately with a confirmation and a path to schedule a call, so the prospect can move forward without waiting for a callback, and your team is only pulled in once the lead is qualified.',
    },
    {
      q: 'Can lead generation automation work with longer B2B technology sales cycles?',
      a: 'Yes — and longer sales cycles are exactly why multi-touch follow-up automation matters most. In a B2B technology sale, a prospect that does not convert on first contact is not a lost lead. It is a lead that needs consistent, relevant touchpoints over 3–12 months while they work through an internal evaluation, budget cycle, or contract end date. Automated nurture sequences keep those prospects engaged across that window without requiring manual follow-up from your team on every contact.',
    },
    {
      q: 'How does the system handle leads that come from multiple channels — website, referrals, chatbot, paid ads?',
      a: 'Each channel is connected to the same intake flow during setup. A website form submission, a chatbot conversation, a referral email, and a paid ad lead all enter the same CRM pipeline with their source data attached. Every lead gets the same immediate response and enters the appropriate follow-up sequence regardless of which channel it came from. Your team sees a unified pipeline — not four separate inboxes that each require manual attention.',
    },
    {
      q: 'How does lead generation automation connect to the rest of the growth system for a technology firm?',
      a: 'Lead generation automation is the intake layer. It fills the CRM with inbound leads and fires the first-response sequences. CRM automation moves those leads through the pipeline as they progress. Appointment booking automation converts qualified leads into scheduled discovery calls. AI chatbots capture leads that arrive via the website outside business hours. When the intake layer runs automatically, every downstream piece of the system — pipeline management, booking, nurture — has a consistent supply of leads to work with rather than depending on whoever last checked the inbox.',
    },
  ],

  ctaHeadline: 'See where your inbound leads are going cold',

  ctaBody:
    'We review your current lead flow, show you where inquiries are stalling between intake and first response, and walk you through what an automated system built for your technology firm would look like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2bLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'Lead Generation Automation', url: '/industries/technology-b2b/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/lead-generation-automation',
            name:        'Lead Generation Automation for IT Firms and B2B Tech Companies',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
