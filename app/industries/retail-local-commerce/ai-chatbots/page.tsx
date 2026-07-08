import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'ai-chatbots',
  hubName:     'Retail & Local Commerce',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Retail & Local Commerce',
  metaDescription: 'Local retail shops lose website visitors after hours. An AI chatbot trained on your store answers questions, captures leads, and keeps shoppers engaged 24/7.',

  eyebrow: 'Retail & Local Commerce · AI Chatbots',

  headline:
    'Your shop closes at six — an AI chatbot keeps answering questions until they are ready to buy',

  subheadline:
    'A shopper lands on your website at 9pm with a question about availability, your return policy, or whether you carry a specific item. No one answers. They close the tab. An AI chatbot trained on your store handles that conversation instantly, in your voice, any time of day or night — so visitors who would have left without a trace become leads with contact information attached.',

  heroHighlights: [
    'Instant answers to product, pricing, availability, and policy questions — 24/7',
    'Lead capture built into every conversation — contact details collected before the visitor leaves',
    'Trained on your specific inventory, policies, and brand voice — not a generic script',
    'Qualified leads routed directly to your inbox or CRM with context from the conversation',
  ],

  definitionHeadline:
    'What an AI chatbot actually does for a local retail shop',

  definition:
    'An AI chatbot for a local retail or commerce business is a conversational assistant on your website that answers shopper questions at any hour, captures contact information from visitors who are ready to buy or inquire further, and routes qualified leads into your follow-up system — without requiring any attention from you or your staff. Unlike a generic pop-up widget, it is trained on your actual store: your product categories, your policies, your hours, and your voice, so every interaction reflects your business accurately and builds trust with the customer rather than breaking it.',

  problemHeadline:
    'Where local retail shops lose shoppers they already paid to attract',

  problems: [
    'A customer finds your website through Google at 8pm, spends three minutes on your product pages, and has one question about whether you carry a specific size or whether you ship locally. No one is there to answer. They close the tab and buy from whoever had a chatbot that responded in ten seconds.',
    'Your store fields the same questions every day — store hours, return policy, whether a product is in stock, how local delivery works. Each one takes time away from in-store customers. The answers are identical every time and could be automated entirely.',
    'Your website contact form collects inquiries and stops. There is no immediate response, no acknowledgment, and no qualification. A shopper who submits a form at night waits until the next morning — by which point they have already moved on.',
    'You have no way to identify and follow up with high-intent website visitors who browsed but did not buy. Without a chatbot capturing their contact information during the visit, they leave without a trace and your ad spend never closes the loop.',
  ],

  howItWorksHeadline:
    'How an AI chatbot works for a retail shop',

  steps: [
    {
      label: 'Trained on your store',
      body: 'We build the chatbot on the actual details of your business — your product categories, store hours, return and exchange policies, local delivery or pickup options, and the questions your customers ask most. Nothing is generic. The chatbot reflects your store specifically.',
    },
    {
      label: 'Engages every visitor',
      body: 'When a shopper lands on your website, the chatbot initiates a conversation based on what they are browsing. It answers product questions, confirms availability, explains policies, and keeps the visitor engaged instead of letting them bounce without an answer.',
    },
    {
      label: 'Captures the lead',
      body: 'Before the visitor leaves, the chatbot collects their name, contact information, and what they were looking for. That information routes directly into your inbox or CRM so you have a complete lead record with full conversation context — ready for follow-up.',
    },
    {
      label: 'Runs without your involvement',
      body: 'After setup, the chatbot operates on its own — after hours, on weekends, and during your busiest in-store periods. You see captured leads and conversation logs. You do not manage the conversations or monitor them in real time.',
    },
  ],

  featuresHeadline:
    'What the chatbot covers for your retail business',

  features: [
    '24/7 availability — answers questions when your shop is closed and your staff is offline',
    'Product and inventory question handling — availability, categories, sizing, and specifications',
    'Store policy answers — hours, returns, exchanges, local delivery, and pickup options',
    'Lead capture with contact details collected conversationally before the visitor exits',
    'After-hours inquiry logging — every unanswered question surfaced in a review queue',
    'CRM and inbox routing — qualified leads delivered with full conversation context attached',
    'Brand voice matching — trained on your language, not a scripted template',
    'Multi-channel deployment — website widget, with options for social messaging channels',
  ],

  relatedServiceSlugs: [
    'ai-automation',
    'crm-automation',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is an AI chatbot for a local retail store?',
      a: 'An AI chatbot for a local retail store is a conversational assistant on your website that answers customer questions, captures contact information from interested visitors, and routes leads into your follow-up system — automatically, at any hour of the day or night. It is trained on your specific store: your products, policies, hours, and brand voice. Unlike a generic pop-up, it reflects your business accurately so customers get real answers rather than a scripted runaround.',
    },
    {
      q: 'Can a small retail shop actually use an AI chatbot?',
      a: 'Yes — and local retail shops are often where a chatbot pays off fastest. Large enterprise retailers have full customer service teams. A local boutique, pet store, or specialty shop typically has no one available after hours to answer a product question or confirm availability. That gap is exactly what the chatbot closes. Setup is handled for you; you do not need a technical team or an ongoing management commitment to run it.',
    },
    {
      q: 'What questions does a retail chatbot answer for shoppers?',
      a: 'The chatbot handles the questions your customers ask most: store hours, return and exchange policies, product availability and categories, local delivery or pickup options, pricing, and what to expect when visiting in store. It is also trained to capture contact information when a shopper has a question that goes beyond what it can answer directly, so no inquiry goes unacknowledged.',
    },
    {
      q: 'How does the chatbot capture leads after hours?',
      a: 'When a shopper visits your website outside business hours and asks a question, the chatbot engages them in a natural conversation, provides answers where it can, and collects their name and contact information before they leave. That lead record — with the full conversation attached — routes into your inbox or CRM so you have context for the follow-up when your shop opens. You do not rely on a static contact form that the visitor may or may not fill out.',
    },
    {
      q: 'Does a chatbot replace my in-store staff?',
      a: 'No. The chatbot handles the volume of repetitive questions that arrive on your website — before, during, and after store hours — so your staff can focus on the customers who are physically in front of them. Complex questions, purchase decisions that need a personal touch, and in-store service all stay with your team. The chatbot handles the digital front door so your staff can focus on the floor.',
    },
  ],

  ctaHeadline: 'Book a 20-minute walkthrough for your retail shop',

  ctaBody:
    'We will show you exactly what an AI chatbot would cover for your specific store — the questions it would handle, the leads it would capture, and how it connects to your existing setup. No obligation.',

  ctaPrimaryLabel: 'Book the walkthrough',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'AI Chatbots',             url: '/industries/retail-local-commerce/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/ai-chatbots',
            name:        'AI Chatbots for Retail & Local Commerce',
            description: 'AI chatbot built for local retail shops and commerce businesses — trained on your products, policies, and voice to answer customer questions, capture leads, and route inquiries 24/7.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
