import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'crm-automation',
  hubName:     'Retail & Local Commerce',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for Local Retail Stores & Boutiques',
  metaDescription: 'Local retail shops lose repeat customers to silence, not competitors. We configure the follow-up and win-back automation that brings shoppers back.',

  eyebrow: 'Retail & Local Commerce · CRM Automation',

  headline:
    'Local retail shops lose repeat customers to silence, not to competitors',

  subheadline:
    'A customer buys from your store, has a good experience, and then never hears from you again. No follow-up. No reason to return. No reminder that you exist when they are ready to buy again. They do not go to a competitor because they are unhappy — they go because the competitor stayed in front of them and you did not. CRM automation fixes the follow-up gap without adding work to your floor staff.',

  heroHighlights: [
    'Post-purchase follow-up sequences that go out automatically after every sale',
    'Win-back campaigns that re-engage customers who have not returned in 45 or 60 days',
    'Segmented outreach based on what customers bought, how recently, and how often',
    'Inquiry and lead follow-up for online or appointment-based retail — no contact left unanswered',
  ],

  definitionHeadline:
    'What CRM automation means for a local retail store or boutique',

  definition:
    'CRM automation for a local retail store means connecting your customer data — from your POS, website, booking system, or contact forms — into one place, and then setting up the sequences that follow up automatically. A customer makes a purchase and receives a thank-you message and a reason to return. A customer who has not been in for sixty days gets a win-back offer triggered by inactivity, not by someone remembering to send it. A new inquiry from your website gets a response within minutes instead of the next time someone checks email. The automation runs the follow-up your staff does not have time to do consistently.',

  problemHeadline:
    'Where local retail stores lose the repeat revenue they already earned',

  problems: [
    'A customer visits your boutique, spends meaningfully, and leaves happy. Six weeks later they are shopping at a competitor — not because your product was worse, but because the competitor sent a follow-up message and you did not. The sale was won. The relationship was not.',
    'Your customer list exists somewhere — in your POS, in a spreadsheet, in someone\'s inbox — but it is not connected to anything that acts on it. You have the data to bring customers back. There is no system turning that data into outreach.',
    'A potential customer fills out a contact form on your website about a custom order or appointment. It sits until someone checks email. By the time a response goes out, the buyer has already placed the order elsewhere. The lead was warm. The response was not.',
    'Your best customers — the ones who buy regularly and spend the most — are treated the same as first-time visitors. There is no VIP recognition, no early access, no loyalty follow-up. The customers most likely to drive repeat revenue feel no different from someone who wandered in once.',
  ],

  howItWorksHeadline: 'How CRM automation works for a local retail store or boutique',

  steps: [
    {
      label: 'Consolidate your customer data',
      body: 'We connect your customer data from wherever it currently lives — your POS, website forms, booking system, or email list — into a single customer record. Most local retailers have more customer data than they realize. It is just scattered across tools that do not talk to each other. Consolidation is the first step before any automation can run reliably.',
    },
    {
      label: 'Map the follow-up moments that matter',
      body: 'Every retail business has three or four moments where a well-timed message would bring a customer back: right after a first purchase, after a specific product category buy, after sixty days of inactivity, and around seasons or events relevant to your store. We map those moments before building anything.',
    },
    {
      label: 'Build and configure the sequences',
      body: 'We build the post-purchase sequence, the win-back campaign, the VIP segment trigger, and the inquiry response — and configure each one to fire on the right event. A purchase triggers the post-purchase flow. Sixty days of inactivity triggers the win-back. A contact form submission triggers an immediate response. Each sequence runs without staff intervention.',
    },
    {
      label: 'Connect, test, and go live',
      body: 'We connect the automation to your existing tools, test every trigger path end to end, and confirm each sequence fires correctly before anything goes live. A win-back email that fires at the wrong time, or a post-purchase message that goes to the wrong segment, damages the customer relationship it was meant to strengthen.',
    },
  ],

  features: [
    'Post-purchase follow-up sequences — automatic thank-you and return-reason messages after every sale',
    'Win-back automation — lapsed customer re-engagement triggered by inactivity windows of 45 or 60 days',
    'Customer segmentation — VIP, first-time buyer, seasonal shopper, and product-category segments built from purchase history',
    'Inquiry response automation — contact form and booking request follow-up within minutes, not hours',
    'Seasonal and event-based campaigns — automated outreach timed to your store\'s key selling windows',
    'POS and website integration — customer data consolidated from your existing tools into one record',
    'Review request triggers — post-purchase review requests sent at the right moment after a completed sale',
    'Repeat purchase reminders — automated prompts for consumable or recurring-purchase product categories',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'review-automation',
    'lead-generation-automation',
    'appointment-booking-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is CRM automation for a local retail store?',
      a: 'It means connecting your customer data from your POS, website, or contact forms into one place and setting up sequences that follow up automatically. A purchase triggers a thank-you and a reason to return. Sixty days of inactivity triggers a win-back message. A new inquiry gets an immediate response. The automation runs the follow-up your staff does not have time to do consistently — so customers hear from you at the right moment without anyone on your team having to remember to reach out.',
    },
    {
      q: 'Does a small retail shop or boutique need CRM automation?',
      a: 'If your business depends on repeat customers and your current follow-up strategy is inconsistent or nonexistent, yes. Most local retail shops have enough customer data to run effective win-back and post-purchase sequences — it is sitting in a POS or an email list and doing nothing. Automation is not about complexity. It is about making sure the customers you already have a reason to reach out to actually hear from you before they forget about your store.',
    },
    {
      q: 'How does CRM automation bring back lapsed customers?',
      a: 'A win-back sequence is triggered automatically when a customer has not purchased within a defined window — typically 45 to 60 days for a local retail business. The sequence sends a re-engagement message, usually with a reason to return such as a new arrival relevant to what they previously bought or a limited offer. The message goes out based on the inactivity trigger, not because someone on your team noticed the customer had not been in. That is the difference between a system and a manual process.',
    },
    {
      q: 'What is the difference between my POS system and a CRM for retail?',
      a: 'Your POS records the transaction. A CRM acts on the relationship. Most POS systems track what was sold and to whom, but they do not automatically follow up after the sale, segment customers by purchase behavior, or trigger a win-back message when someone goes quiet. CRM automation takes the data your POS collects and turns it into outreach — post-purchase messages, lapsed customer sequences, VIP recognition — that keeps customers returning beyond the initial sale.',
    },
    {
      q: 'Can CRM automation work if my customer data is scattered across different tools?',
      a: 'Yes, and consolidating that data is the first step we take before building any automation. Most local retailers have customer data in at least two or three places — a POS, an email list, a booking system, or a spreadsheet — but none of those sources are connected. We bring the data together into a single customer record first, then build the sequences on top of that consolidated foundation. Automation built on scattered data fires incorrectly or not at all.',
    },
  ],

  ctaHeadline: 'Your customer list is sitting there doing nothing',

  ctaBody:
    'We audit your current customer data, map the follow-up moments your store is missing, and show you what a connected win-back and retention system looks like for your specific retail operation. No pressure. No invented outcomes. Just a clear picture of what is possible with what you already have.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'CRM Automation',          url: '/industries/retail-local-commerce/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/crm-automation',
            name:        'CRM Automation for Local Retail Stores',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
