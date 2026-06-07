import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'construction-contractors',
  serviceSlug: 'ai-chatbots',
  hubName:     'Construction & Contractors',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Contractors and Construction Companies',
  metaDescription: 'Contractor websites lose high-value leads after hours. An AI chatbot qualifies project inquiries, collects scope details, and schedules estimate walkthroughs.',

  eyebrow: 'Construction & Contractors · AI Chatbots',

  headline:
    'Contractor websites get high-value inquiries after hours — an AI chatbot makes sure they convert',

  subheadline:
    'A homeowner planning a kitchen remodel or roofing replacement researches contractors at night. When your website has no response, they move to the next one. A chatbot built for contractors captures that inquiry before they leave.',

  heroHighlights: [
    '24/7 lead qualification — collects project scope, timeline, and contact details',
    'Estimate walkthrough scheduling directly from the chat conversation',
    'Built around your project types, service area, and qualification criteria',
    'Qualified leads routed into your CRM with full scope context attached',
  ],

  definitionHeadline:
    'What an AI chatbot does for a contractor',

  definition:
    'An AI chatbot for a contractor is a conversational widget on your website that qualifies project inquiries, collects scope and timeline details, and schedules estimate walkthroughs without a human on the other end. It runs at any hour in your business voice and routes qualified leads into your CRM with the project context attached — so a homeowner who visits your site at 10pm on a Saturday becomes a scheduled estimate by the time your team starts Monday morning.',

  problemHeadline:
    'Where contractor websites lose high-value leads they already paid to attract',

  problems: [
    'A homeowner planning a renovation visits your site at 10pm, reads your project gallery, and has a question about scope and timeline. No one responds. They move to the next contractor on their list.',
    'Your contact form collects a name and email and stops. By the time your team gets to the inquiry the next morning, the prospect has already scheduled a walkthrough with someone who responded faster.',
    'Your team fields the same pre-estimate questions every day — service area, project types you take on, rough timeline, what the estimate process looks like. That time comes out of project work.',
    'You have no way to capture and qualify website traffic outside business hours. Evening and weekend visitors — often the most motivated buyers — bounce without converting.',
  ],

  howItWorksHeadline: 'How an AI chatbot works for contractors',

  steps: [
    {
      label: 'Build the knowledge base from your real inquiries',
      body:  'We start with the questions your business actually receives — by phone, form, and referral. The chatbot is trained on those real inputs: the project types you take on, your service area, your timeline, and what the estimate process looks like. It handles those questions accurately from day one.',
    },
    {
      label: 'Configure qualification for your project types',
      body:  'We set the qualification questions based on what your team needs before accepting an estimate. For a general contractor, that might include project type, approximate scope, timeline, and whether the prospect is the decision-maker. The flow is configured around your specific trade and project mix.',
    },
    {
      label: 'Connect to your estimate calendar and CRM',
      body:  'When a prospect qualifies, the chatbot schedules the estimate walkthrough directly into your calendar and routes the lead into your CRM with the full scope context captured. No manual handoff. No leads sitting in a separate chat inbox.',
    },
    {
      label: 'Monitor conversations and sharpen the qualification flow',
      body:  'We review early interactions to find gaps — project types the initial build handled imprecisely, edge cases that need better routing. The chatbot gets more accurate as real conversations surface what prospects actually ask.',
    },
  ],

  featuresHeadline: 'What the chatbot covers',

  features: [
    '24/7 availability: responds to project inquiries at any hour',
    'Project-specific qualification: collects scope, timeline, and decision-maker details',
    'Estimate scheduling: books walkthroughs from live calendar availability in chat',
    'CRM integration: qualified leads enter your pipeline with scope context attached',
    'Service area filtering: routes out-of-area inquiries without wasting team time',
    'Follow-up trigger: confirmed estimate appointments fire the right CRM sequence',
    'Escalation handling: routes urgent or complex inquiries to a human immediately',
    'Conversation logging: every chat captured so nothing requires manual transcription',
  ],

  relatedServiceSlugs: [
    'ai-voicebots',
    'appointment-booking-automation',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does an AI chatbot do for a contractor or construction company?',
      a: 'It qualifies project inquiries, collects scope and timeline details, and schedules estimate walkthroughs without a human on the other end. It runs at any hour and routes qualified leads into your CRM with the project context attached — so a prospect who visits your site after hours becomes a scheduled estimate before your team starts the next morning.',
    },
    {
      q: 'How does a chatbot qualify project leads for a contractor?',
      a: 'The qualification flow is configured around what your team needs before accepting an estimate — typically project type, approximate scope, timeline, service area, and whether the prospect is the decision-maker. The chatbot asks those questions in a natural conversation and routes the lead with that context attached, so your team is not starting from scratch when they follow up.',
    },
    {
      q: 'Can a chatbot schedule estimate walkthroughs for contractors?',
      a: 'Yes, when connected to your calendar. The chatbot pulls your live availability and lets the prospect select a slot during the conversation. Once confirmed, the walkthrough lands in your calendar and CRM with the project details captured. Your team receives a notification with everything they need before the site visit.',
    },
    {
      q: 'How does a contractor chatbot handle out-of-area inquiries?',
      a: 'The chatbot is configured with your service area during setup. When a prospect provides an address or location outside that area, the chatbot handles the response professionally — explaining your coverage and, optionally, pointing them to a referral or alternative. This filters out-of-area inquiries before they reach your team rather than after.',
    },
    {
      q: 'How does an AI chatbot connect to the rest of the contractor growth system?',
      a: 'The chatbot is the website lead capture layer. It feeds qualified project inquiries into the same CRM and booking flow that handles leads from every other source — referrals, paid ads, GBP. A prospect who chats through their project scope and schedules an estimate gets the same confirmation sequence and follow-up as a lead who came in by phone. The channel is different — the system they enter is the same.',
    },
  ],

  ctaHeadline:     'See what your contractor website should be capturing after hours',
  ctaBody:         'We review your current website lead flow, identify where evening and weekend project inquiries are dropping off, and show you what a chatbot configured for your trade would look like.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/construction-contractors/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/construction-contractors/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ConstructionContractorsAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/construction-contractors/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                       url: '/' },
            { name: 'Industries',                 url: '/industries' },
            { name: 'Construction & Contractors', url: '/industries/construction-contractors' },
            { name: 'AI Chatbots',                url: '/industries/construction-contractors/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/ai-chatbots',
            name:        'AI Chatbots',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
