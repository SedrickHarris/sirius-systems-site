import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Retail & Local Commerce',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for Local Retail Shops',
  metaDescription: 'Local retail shops lose customers to slow response. Sirius captures every inquiry, responds in minutes, and follows up until the shopper comes in.',

  eyebrow: 'Retail & Local Commerce · Lead Generation Automation',

  headline:
    'Your shop is generating interest — the inquiry just sits there until they buy somewhere else',

  subheadline:
    'A shopper finds your boutique on Google, clicks your website, fills out a contact form, or sends a message through your social profile. You are on the floor with a customer. The inquiry waits. By the time someone sees it — hours later, or the next morning — the shopper has already walked into the store down the street that answered in two minutes. Lead generation automation captures every inbound contact, responds immediately in your voice, and follows up consistently until the shopper walks in or buys — without anyone on your team watching an inbox.',

  heroHighlights: [
    'Immediate response to every inquiry — website forms, social messages, and GBP contacts answered in minutes',
    'Automatic follow-up sequences that keep interested shoppers engaged until they visit or buy',
    'Every contact captured in one system — no inquiries lost to ignored DMs or buried contact forms',
    'After-hours coverage — weekend and evening inquiries get the same response as Tuesday morning ones',
  ],

  definitionHeadline:
    'What lead generation automation actually does for a local retail shop',

  definition:
    'Lead generation automation for a local retail shop or storefront is the system that connects every inbound channel — your website contact form, Google Business Profile messages, social DMs, chatbot conversations — to a single intake flow that captures the contact, fires an immediate response, and starts a follow-up sequence automatically. The goal is that every shopper who reaches out gets a response before they move on. For a retail business, that means the inquiry that arrives Saturday afternoon while your floor is full gets answered within minutes, the contact lands in your system, and a follow-up goes out the next day if they have not visited — all without anyone on your team stopping what they are doing to monitor a DM inbox.',

  problemHeadline:
    'Where local retail shops lose customers they already paid to attract',

  problems: [
    'A shopper finds your store through Google, visits your website, and submits a contact form asking about availability or hours. Your team is on the floor. The inquiry sits in an email inbox until closing. By morning, the shopper has visited the competitor who responded the same afternoon.',
    'Your Google Business Profile generates inbound messages from people who are actively looking for what you sell. Most of those messages are seen hours later, and some are never seen at all. The GBP inquiry is one of the highest-intent contacts you can receive — and it goes unanswered.',
    'You run Google Ads or invest in local SEO to drive traffic. Shoppers click, visit your site, and reach out through your contact form. The ad spend is working. The follow-up is not. Every unconverted inquiry is ad spend that did not return.',
    'Inquiries arrive from multiple places — your website, Instagram DMs, Facebook messages, the Google chat button. Each one lives in a different inbox. There is no unified view, no automatic response, and no follow-up if the first message goes unread.',
  ],

  steps: [
    {
      label: 'Connect every inbound channel',
      body: 'We map every place shoppers currently reach out — your website contact form, GBP messages, social DMs, chatbot — and connect them to a single intake system. Every inquiry, regardless of which channel it came from, enters the same flow.',
    },
    {
      label: 'Respond immediately in your voice',
      body: 'The moment a contact enters the system, an automated response goes out — acknowledging the inquiry, answering common questions where possible, and prompting the next step. The response sounds like your shop, not a generic autoresponder.',
    },
    {
      label: 'Follow up until the shopper commits',
      body: 'If the shopper does not respond to the first message, the system follows up at the right intervals — a second touchpoint the next day, a third a few days later. Interested shoppers who were simply busy get brought back. Cold leads are filtered out. Your team focuses on the ones who are ready.',
    },
    {
      label: 'Track which channels drive actual visits and purchases',
      body: 'Every contact is logged with its source. Over time, you can see which channels — Google Ads, local SEO, GBP, social — are producing shoppers who actually visit and buy, versus which are generating inquiries that never convert. That data tells you where to put your next marketing dollar.',
    },
  ],

  features: [
    'Unified inbox: website, GBP, social DMs, and chatbot contacts all captured in one system',
    'Immediate response: every inquiry acknowledged in minutes, in your store\'s voice, regardless of when it arrives',
    'Automated follow-up sequences: multi-touch outreach keeps interested shoppers engaged until they visit or buy',
    'After-hours coverage: evening and weekend inquiries receive the same response as business-hours contacts',
    'GBP message capture: Google Business Profile messages routed into the same intake flow as website and social contacts',
    'Source tracking: every contact logged with the channel that produced it — ads, organic, GBP, social',
    'CRM entry: every contact lands in your system with history attached — no lost follow-ups, no forgotten inquiries',
    'Lead filtering: automated qualification separates high-intent shoppers from casual browsers so your team focuses where it matters',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-chatbots',
    'google-business-profile-optimization',
    'review-automation',
  ],

  faqs: [
    {
      q: 'What is lead generation automation for a local retail shop?',
      a: 'It is the system that connects every inbound channel — your website contact form, Google Business Profile messages, social DMs, and chatbot — to a single intake flow that captures the contact, fires an immediate response, and starts an automated follow-up sequence. For a local retail shop, that means a shopper who reaches out on Saturday afternoon while your floor is full gets an answer within minutes, their contact lands in your system, and a follow-up goes out the next day if they have not visited — without anyone on your team stopping to check an inbox.',
    },
    {
      q: 'How does lead generation automation help retail shops respond faster to inbound inquiries?',
      a: 'Most local retail shops lose inbound contacts not because of price or product, but because the response is too slow. Staff are on the floor. DMs go unread. Contact forms sit in an email inbox until closing. Automation responds to every inbound inquiry immediately — in the same window when the shopper is still engaged and has not yet walked into a competitor. The follow-up system catches the ones who do not reply immediately, so no interested contact slips through because someone forgot to check the inbox.',
    },
    {
      q: 'Can lead generation automation capture inquiries from my Google Business Profile?',
      a: 'Yes. Google Business Profile messages are one of the highest-intent contacts a local retail shop can receive — the shopper has already found you, decided you look like a fit, and reached out directly. The automation connects GBP messages to the same intake flow as your website and social channels, so every GBP inquiry gets an immediate response and enters the same follow-up sequence as any other inbound contact.',
    },
    {
      q: 'How does the system handle inquiries that come in after hours or on weekends?',
      a: 'The intake and response system operates around the clock. An inquiry that arrives at 8pm on Saturday goes through the same flow as one that arrives at 10am on Tuesday — immediate response, contact captured, follow-up sequence triggered. For a retail shop that draws traffic on evenings and weekends, after-hours coverage is where a significant portion of inbound interest actually arrives. The system handles that window without anyone on your team being available.',
    },
    {
      q: 'How does lead generation automation connect to the rest of the growth system for a retail business?',
      a: 'Lead generation automation is the intake layer — it captures every inbound contact and starts the follow-up sequence. An AI chatbot handles the questions that arrive through the website before the shopper reaches the contact form. Google Business Profile optimization makes sure the GBP is generating the messages in the first place. Review automation and reputation management make sure the profile that shoppers find on Google is strong enough to earn the click. When the intake layer runs automatically, the investment in every other channel — ads, SEO, GBP, social — converts at a higher rate because no contact goes unanswered.',
    },
  ],

  ctaHeadline: 'See where your inbound contacts are going cold',

  ctaBody:
    'We review your current inquiry channels, show you where contacts are being lost between the first touchpoint and a response, and walk you through what an automated system built for your shop would look like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the review',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'Lead Generation Automation', url: '/industries/retail-local-commerce/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/lead-generation-automation',
            name:        'Lead Generation Automation for Local Retail Shops',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
