import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'ai-voicebots',
  hubName:     'Technology & B2B Services',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for IT Companies, MSPs, and B2B Firms',
  metaDescription: 'B2B buyers who call are ready to talk. An AI voicebot answers every inbound call, qualifies the prospect, and books the discovery call — 24/7.',

  eyebrow: 'Technology & B2B Services · AI Voicebots',

  headline:
    'A B2B prospect who picks up the phone to call you is ready to buy — an AI voicebot makes sure someone always answers',

  subheadline:
    'A prospect compares three managed service providers on a Tuesday evening and decides to call the one that looks like the best fit — yours. It rings out. They call the next firm on the list, reach someone immediately, and book a discovery call before the evening is over. An AI voicebot answers every inbound call in your firm\'s voice, qualifies the prospect, and books the call — whether your team is in a client engagement, on another line, or offline for the night.',

  heroHighlights: [
    '24/7 inbound call coverage — every prospect and client call answered regardless of hour or team availability',
    'B2B lead qualification by voice — company size, use case, current environment, and timeline collected on the call',
    'Discovery call and demo booking confirmed directly from the conversation — no callback lag, no email thread',
    'Qualified lead records delivered to your CRM with full call context before your team makes first contact',
  ],

  definitionHeadline:
    'What an AI voicebot does for an IT company, MSP, or B2B technology firm',

  definition:
    'An AI voicebot for a B2B technology firm is a voice agent that answers every inbound call in natural conversation — qualifying new business prospects by asking about their current environment, company size, use case, and buying timeline, booking discovery calls or demos directly on your calendar, and routing existing client support calls to the right team with a full call summary attached. It runs in your firm\'s voice, follows your intake and qualification protocol, and operates at any call volume and any hour so that a high-intent prospect who picks up the phone to call you never reaches voicemail because your team was otherwise occupied. The B2B buyer who calls instead of filling out a contact form is your most valuable inbound lead. The voicebot makes sure they are always answered.',

  problemHeadline:
    'Where IT firms and B2B technology companies lose high-intent inbound calls',

  problems: [
    'A prospect has narrowed their managed service provider search to two firms. They call yours to ask a question before booking a discovery call. Your team is in a client engagement. The call goes to voicemail. They call the other firm, reach someone immediately, and have a discovery call booked before the hour is out. You never know the call came in.',
    'A prospective client calls your IT consulting firm after seeing your case study. It is 6pm. No one is staffed to answer. They do not leave a voicemail — B2B buyers on average are far less likely to leave a message than to simply move to the next option on their list. By the time your team returns the call the following morning, the prospect has already scheduled a demo with a competitor who was available.',
    'Your team fields the same qualifying questions on every new inbound call — company size, current tech stack, pain points, budget range, timeline, and decision-maker status. A voicebot configured to your qualification script handles all of that before the call ever reaches a human, so your first conversation with every prospect is a warm briefed discussion, not a cold discovery call starting from zero.',
  ],

  howItWorksHeadline: 'How it works for your technology firm',

  steps: [
    {
      label: 'Your phone line connects to the AI voicebot',
      body: 'The voicebot answers every inbound call immediately — during client engagements, after hours, on weekends, and during peak periods when your team is at capacity. It greets every caller in your firm\'s voice, identifies whether they are a new prospect or an existing client, and routes the conversation accordingly.',
    },
    {
      label: 'New prospect calls are qualified on the call',
      body: 'For new business inquiries, the voicebot runs your qualification questions: company size, current tech environment, the specific challenge they are trying to solve, buying timeline, and decision-maker status. It collects the information your sales team needs to prioritize the opportunity and prepare for the discovery conversation — without a cold intake call.',
    },
    {
      label: 'Discovery calls and demos book directly from the conversation',
      body: 'Qualified prospects get routed to your calendar in real time. The voicebot presents available slots, the prospect confirms a time, and the booking is locked in with the full qualification summary attached — before the caller hangs up. No callback required. No email thread to confirm the time.',
    },
    {
      label: 'Every call routes to your CRM and team with full context',
      body: 'New prospect calls arrive in your CRM as structured lead records — company size, use case, timeline, decision-maker status, and call summary all attached. Existing client support calls are routed to the right team member with the call context intact, so no client repeats themselves and no engineer picks up a call cold.',
    },
  ],

  featuresHeadline: 'What the voicebot handles for your firm',

  features: [
    '24/7 inbound call answering — no prospect or client call reaches voicemail while the voicebot is active',
    'New business qualification by voice — company size, use case, tech environment, timeline, and decision-maker status captured on the call',
    'Discovery call and demo booking confirmed directly from the conversation, synced to your calendar',
    'Existing client call routing — support inquiries identified and routed to the right team member with call context attached',
    'Tier-1 FAQ handling — common questions about your services, process, onboarding, and contract terms answered before the call reaches a human',
    'CRM routing — every new prospect call delivered as a structured lead record with full qualification data before first contact',
    'Urgent escalation logic — defined triggers that transfer a live call to a human immediately when required',
    'After-hours and overflow coverage — handles calls when your team is in client engagements or at capacity',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'crm-automation',
    'lead-generation-automation',
  ],

  ctaHeadline: 'See how it would work for your technology firm',

  ctaBody:
    'We walk through your current inbound call setup, show you where prospect and client calls are going unanswered, and demonstrate what a voicebot built for your specific firm would sound and feel like. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the walkthrough',

  faqs: [
    {
      q: 'Can an AI voicebot qualify B2B leads over the phone?',
      a: 'Yes. A voicebot configured for a B2B technology firm runs your qualification questions conversationally — asking about company size, current tech environment, the problem the prospect is trying to solve, buying timeline, and decision-maker status. The answers are captured as structured data and delivered to your CRM with a full call summary before your team makes first contact. Your first conversation with every prospect starts briefed, not from scratch.',
    },
    {
      q: 'What happens when a prospect calls our IT firm after hours and no one picks up?',
      a: 'The voicebot answers immediately in your firm\'s voice, qualifies the prospect, and books a discovery call directly on your calendar — all within the original call. The prospect never reaches voicemail. They get an immediate, professional response and leave with a confirmed meeting time. Your team opens the next business day with a qualified lead record and a booked discovery call already in the calendar.',
    },
    {
      q: 'How is an AI voicebot different from a chatbot or contact form for a technology company?',
      a: 'A chatbot or contact form captures visitors who are browsing your website. A voicebot captures callers who have already decided to reach out directly — which in B2B typically signals higher intent. A prospect who picks up the phone and calls your firm is further along in the evaluation process than one who submits a contact form. The voicebot makes sure that caller is always answered and always qualified, regardless of when they call or what your team is doing.',
    },
    {
      q: 'Can an AI voicebot handle existing client support calls as well as new business inquiries?',
      a: 'Yes, and the flows are configured separately. For new prospect calls, the voicebot runs your qualification protocol and books the discovery call. For existing client calls, it identifies the client, captures the nature of the support request, and routes the call to the appropriate team member with the context already attached — so your engineer picks up a warm routed call, not a cold unknown inquiry. Urgent issues can be configured to escalate immediately.',
    },
    {
      q: 'Will B2B prospects accept talking to an AI when they call a technology firm?',
      a: 'In practice, what matters to a B2B prospect calling your firm is that someone answered and the conversation moved forward. A professional, natural-sounding voicebot that qualifies the call and books a meeting is a significantly better experience than reaching voicemail or being put on hold. For a technology firm specifically, deploying AI on your own inbound calls is also a credible signal that your firm actually uses and understands the technology you sell.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2BAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'AI Voicebots',              url: '/industries/technology-b2b/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/ai-voicebots',
            name:        'AI Voicebots for Technology & B2B Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
