import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'retail-local-commerce',
  serviceSlug: 'ai-voicebots',
  hubName:     'Retail & Local Commerce',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for Local Retail & Commerce Shops',
  metaDescription: 'Local retail shops miss calls when staff is on the floor. An AI voicebot answers every call, handles product and policy questions, and captures leads 24/7.',

  eyebrow: 'Retail & Local Commerce · AI Voicebots',

  headline:
    'Your store closes at six — the calls keep coming anyway',

  subheadline:
    'A shopper calls your boutique at 7pm to ask whether you carry a specific item in their size, what your return policy is, or whether you ship locally. No one picks up. They hang up without leaving a message and buy from whoever answered. An AI voicebot configured for your store handles every one of those calls in your voice, at any hour, on any day — so the customers who called you first never have a reason to call someone else.',

  heroHighlights: [
    'Answers every inbound call instantly — no hold music, no voicemail, no missed opportunity',
    'Handles store hours, product availability, return policy, and location questions automatically',
    'Captures caller contact details and routes qualified leads to your CRM before the call ends',
    'Runs after hours, on weekends, and during your busiest in-store periods without staff involvement',
  ],

  definitionHeadline:
    'What an AI voicebot actually does for a local retail shop',

  definition:
    'An AI voicebot for a local retail or commerce business is a voice agent that answers your inbound phone calls in natural conversation — not a phone tree, not a hold queue, not voicemail. It listens to what the caller needs, answers questions about your store using your actual policies and product information, captures contact details from callers who want follow-up, and routes the ones who need a person to your team with full call context already logged. It runs in your store\'s voice, on your schedule, and without requiring anyone on your staff to be available — so calls that would have gone unanswered become conversations that end with a lead record and a next step.',

  problemHeadline:
    'Where local retail shops lose customers they already had on the line',

  problems: [
    'A shopper is ready to make a trip to your store but wants to confirm you carry a specific item in the right size before they drive over. They call at 6:30pm. Your store is closed, no one picks up, and they check the next shop on the list. The sale was already decided — you just didn\'t answer.',
    'Your staff is helping a customer on the floor when the phone rings. They either interrupt the in-store interaction to answer it or let it go to voicemail. The caller hears a generic recording and hangs up. That call never came back.',
    'You field the same calls every week — store hours, parking, whether a product is in stock, what your exchange policy is. Each one pulls your team away from the work that actually generates revenue in your store.',
    'Your busiest days are the ones where you can least afford to be on the phone. When the floor is full of customers and the register line is three people deep, the calls that ring through go unanswered — and those callers were often the ones most ready to buy.',
  ],

  howItWorksHeadline: 'How we set up an AI voicebot for your retail shop',

  steps: [
    {
      label: 'Map your inbound call types',
      body: 'We identify the calls your store gets most often — hours and location questions, product availability checks, return and exchange policy inquiries, new customer inquiries, and after-hours calls from shoppers who couldn\'t make it in during the day. Each call type gets its own conversation flow so the voicebot handles the predictable calls accurately and escalates anything that needs a person.',
    },
    {
      label: 'Configure your store\'s voice and information',
      body: 'We set the voice profile, the greeting, and the knowledge base using your actual store information — your hours, your policies, your product categories, and your location details. The voicebot sounds like a professional representative of your business, uses your store\'s name, and gives callers accurate answers drawn from your real information rather than a generic script.',
    },
    {
      label: 'Connect lead capture and CRM routing',
      body: 'When the voicebot engages a caller who wants follow-up — a shopper asking about a special order, a customer checking availability for a specific item — it captures their contact details conversationally and routes the lead to your inbox or CRM with the full call context attached. No voicemail to transcribe, no lead to reconstruct from memory.',
    },
    {
      label: 'Run without your involvement',
      body: 'After setup, the voicebot operates on its own — after hours, on weekends, and during your busiest in-store periods. You see captured leads, call summaries, and any escalations that needed a human. You do not monitor calls in real time or manage the conversations yourself.',
    },
  ],

  featuresHeadline: 'What the voicebot covers for your retail business',

  features: [
    '24/7 inbound call answering — every call picked up on the first ring regardless of hour or in-store activity',
    'Store hours, location, and directions — the most common pre-visit call type answered automatically',
    'Product availability and category questions — handled in natural conversation without putting the caller on hold',
    'Return, exchange, and policy inquiries — accurate answers drawn from your actual store policies',
    'After-hours call capture — lead details collected from callers who reach you when the store is closed',
    'CRM and inbox routing — qualified leads delivered with full call context before your team follows up',
    'Escalation to staff — calls that need a person are transferred with full context so callers never repeat themselves',
    'Call logs and summaries — every conversation recorded so nothing falls through the cracks',
  ],

  relatedServiceSlugs: [
    'ai-automation',
    'ai-chatbots',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is an AI voicebot for a local retail store?',
      a: 'An AI voicebot for a local retail store is a voice agent that answers your inbound phone calls automatically, in natural conversation. It handles the questions your store gets most often — store hours, product availability, return and exchange policies, and location details — and captures contact information from callers who want follow-up. It runs at any hour without requiring staff to be available, so calls that would have gone to voicemail instead end with a lead record and a next step.',
    },
    {
      q: 'Can a small boutique or specialty shop actually use an AI voicebot?',
      a: 'Yes — and local boutiques and specialty shops are often where a voicebot closes the biggest gap. Large retail chains have full phone coverage during and after hours. A local shop typically has no one available to answer after closing time, and staff who are helping customers on the floor cannot also be on the phone. The voicebot covers the calls your team cannot take without adding headcount or pulling anyone away from the in-store experience. Setup is handled for you; you do not need a technical team to run it.',
    },
    {
      q: 'What calls does a retail voicebot handle?',
      a: 'The voicebot handles the calls your store receives most frequently: questions about your hours, your location and parking, whether a specific product or size is in stock, your return and exchange policy, and how local pickup or delivery works. It can also capture contact details from shoppers who want to be notified when something is back in stock or who need follow-up on a special order. Calls that require a person — complaints, complex situations, high-value purchases that need a staff member — are escalated with full context.',
    },
    {
      q: 'Does an AI voicebot replace my retail staff?',
      a: 'No. An AI voicebot handles the repetitive, high-volume calls that pull your team away from in-store customers — hours, availability, policy questions, after-hours inquiries. Your staff stays focused on the floor, on real customer interactions, and on the work that actually requires a person. The voicebot is the front-line phone layer that answers before anyone has to decide whether to step away from a customer to pick up.',
    },
    {
      q: 'How does an AI voicebot handle calls when my store is closed?',
      a: 'The voicebot answers every call regardless of your store hours. After closing, it handles routine inquiries the same way it would during the day — store hours, location, product questions, policy answers. For callers who want follow-up or who are ready to buy, it captures their contact details and logs the conversation so your team has a complete lead record waiting when you open. No voicemails to transcribe, no missed callers who never left a message.',
    },
  ],

  ctaHeadline: 'Book a 20-minute walkthrough for your retail shop',

  ctaBody:
    'We will show you exactly how an AI voicebot would handle calls for your specific store — the questions it would answer, how it captures leads after hours, and how it connects to your existing setup. No obligation.',

  ctaPrimaryLabel: 'Book the walkthrough',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/retail-local-commerce/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/retail-local-commerce/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RetailLocalCommerceAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/retail-local-commerce/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                    url: '/' },
            { name: 'Industries',              url: '/industries' },
            { name: 'Retail & Local Commerce', url: '/industries/retail-local-commerce' },
            { name: 'AI Voicebots',            url: '/industries/retail-local-commerce/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/retail-local-commerce/ai-voicebots',
            name:        'AI Voicebots for Local Retail & Commerce Shops',
            description: 'AI voicebot configured for local retail shops and commerce businesses — answers every inbound call, handles store hours, product availability, and policy questions, and captures after-hours leads without staff involvement.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
