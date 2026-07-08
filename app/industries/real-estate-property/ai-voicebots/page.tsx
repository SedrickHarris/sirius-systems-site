import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'ai-voicebots',
  hubName:     'Real Estate & Property Services',
  serviceName: 'AI Voicebots',

  metaTitle:       'AI Voicebots for Real Estate Agents & Property Managers',
  metaDescription: 'Real estate runs on speed. An AI voicebot answers every call, qualifies buyers, books showings, and handles tenant inquiries — even when you\'re in a showing.',

  eyebrow: 'Real Estate & Property Services · AI Voicebots',

  headline:
    'In real estate, the agent who answers first wins — an AI voicebot makes sure that is always you',

  subheadline:
    'You are in a showing when a buyer calls about another listing. It goes to voicemail. They hang up without leaving a message and call the next agent on the page. By the time your showing ends, the lead is gone. An AI voicebot answers every inbound call in your voice, qualifies the buyer or tenant, and books the showing before you ever walk out the door.',

  heroHighlights: [
    '24/7 inbound call coverage — every call answered regardless of hour, showings, or closings in progress',
    'Voice qualification in real time — budget, timeline, property type, and pre-approval status collected on the call',
    'Showing and consultation booking confirmed directly from the conversation — no callback required',
    'Tenant inquiry handling for property managers — maintenance intake, availability questions, and lease inquiries covered by voice',
  ],

  definitionHeadline:
    'What an AI voicebot does for a real estate business',

  definition:
    'An AI voicebot for a real estate business is a voice agent that answers every inbound call in a natural, conversational tone — qualifying buyers and sellers by asking about budget, timeline, property type, and financing status, booking showings directly on your calendar, and routing high-intent leads to your team with a complete call summary attached. For property managers, the same system handles tenant inquiries around the clock: maintenance request intake, availability questions, lease questions, and prospective tenant screening. The call that arrives while you are in a showing, at a closing table, or after office hours does not go to voicemail. It gets answered, qualified, and either routed or booked — before the prospect has a chance to call your competitor.',

  problemHeadline:
    'Where real estate businesses lose leads they paid to generate',

  problems: [
    'A buyer submits an inquiry on Zillow at 7pm on a Friday. They also call your office number. You are finishing a showing and the call goes to voicemail. They do not leave a message — research consistently shows the majority of callers who reach voicemail simply hang up and call the next agent on the list. By Saturday morning, they have a showing scheduled with someone else.',
    'Your property management office handles a high volume of calls from current tenants reporting maintenance issues, prospective tenants asking about availability and pet policies, and applicants checking application status. Each of these calls pulls a staff member off other work. During peak leasing season, the call volume becomes impossible to manage without something slipping through.',
    'A seller calls to ask about listing their home. You are in a closing. The call goes to voicemail. They hear a generic "leave a message" greeting, decide the office is too slow to respond, and book a listing consultation with an agent who picked up — because that agent had an AI voicebot answering their line.',
  ],

  howItWorksHeadline: 'How it works for your real estate business',

  steps: [
    {
      label: 'Your phone line connects to the AI voicebot',
      body: 'The voicebot answers every inbound call — whether you are in a showing, at a closing, after hours, or simply unavailable. It greets the caller in a professional voice, introduces itself on behalf of your team, and opens the qualification conversation. Callers get an immediate answer instead of voicemail.',
    },
    {
      label: 'The voicebot qualifies the caller by type and intent',
      body: 'For buyer inquiries, it asks about the property of interest, budget range, purchase timeline, pre-approval status, and whether they are working with another agent. For seller leads, it collects property address, reason for selling, and timing. For tenant inquiries, it takes the maintenance request or availability question and captures the caller\'s contact details and unit information.',
    },
    {
      label: 'Showings and consultations are booked directly from the call',
      body: 'Once the voicebot collects enough context, it accesses your calendar, presents available time slots, and confirms the showing or consultation booking with the caller — before the call ends. No callback needed. No follow-up email required. The appointment is confirmed.',
    },
    {
      label: 'Your team receives the lead with full call context',
      body: 'Every qualified call flows into your CRM with the caller\'s contact details, qualification answers, and a full call summary attached. Your team sees the intent, the budget range, the timeline, and the property interest before they make first contact. The warm handoff replaces the cold callback.',
    },
  ],

  featuresHeadline: 'What the voicebot handles for your team',

  features: [
    '24/7 inbound call answering — no call reaches voicemail while the voicebot is active',
    'Buyer qualification by voice — budget, timeline, pre-approval status, and property type collected in the conversation',
    'Seller lead intake — address, motivation, and timing captured and routed to your listing team',
    'Showing and consultation booking confirmed directly on the call, synced to your calendar',
    'Tenant inquiry handling for property managers — maintenance intake, availability, lease questions, and applicant follow-up',
    'Urgency triage — maintenance emergencies escalated immediately; routine requests logged and routed on standard workflow',
    'CRM routing — every call summary and lead record delivered to your team with full context before first contact',
    'Concurrent call handling — multiple inbound calls answered simultaneously during open house events and new listing launches',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'crm-automation',
    'lead-generation-automation',
    'reputation-management',
  ],

  ctaHeadline: 'See exactly how it would work for your real estate business',

  ctaBody:
    'We walk through your current phone setup, show you where calls are going to voicemail and what those missed calls are worth, and demonstrate what a voicebot built for real estate would sound and feel like for your specific business. No pressure. No invented numbers.',

  ctaPrimaryLabel: 'Book the walkthrough',

  faqs: [
    {
      q: 'Can an AI voicebot actually qualify real estate leads on a phone call?',
      a: 'Yes. A voicebot built for real estate conducts a structured qualification conversation — asking about the property of interest, budget range, purchase or rental timeline, pre-approval status for buyers, and motivation and timing for sellers. The answers are captured, scored, and delivered to your CRM with a full call summary before your team makes first contact. The qualification quality matches what a trained front-desk or inside sales rep would collect on an intake call.',
    },
    {
      q: 'What happens when a buyer calls while I\'m in a showing?',
      a: 'The voicebot answers in your team\'s name, qualifies the caller, and books the showing or consultation directly before the call ends. Your CRM receives the lead with full context — property interest, budget, timeline, and call summary — so your first contact is a warm follow-up, not a cold callback to gather basic information. The caller never reaches voicemail.',
    },
    {
      q: 'How is an AI voicebot different from a traditional answering service?',
      a: 'A traditional answering service takes a message and emails it to you. An AI voicebot conducts the full qualification conversation, books the appointment directly on your calendar, routes the lead into your CRM with structured data, and hands off a warm, context-rich record rather than a name and a phone number. It operates around the clock, handles multiple calls simultaneously, and never puts a caller on hold waiting for a live operator.',
    },
    {
      q: 'Does an AI voicebot work for property managers as well as real estate agents?',
      a: 'Yes, and the use cases are different enough to set up separately. For real estate agents and brokerages, the voicebot focuses on buyer and seller lead qualification and showing bookings. For property managers, it handles the full volume of tenant inquiry types — maintenance request intake, availability questions, lease questions, pet policy and application inquiries, and prospective tenant screening. Urgent maintenance issues are escalated immediately rather than logged into a standard queue.',
    },
    {
      q: 'Will callers know they are talking to an AI — and does it matter to buyers?',
      a: 'Modern AI voicebots are conversational, professional, and do not sound like the robotic phone trees callers have been trained to hate. In most cases, callers are focused on getting their question answered and their showing booked — not on whether a human or an AI picked up. What matters to a buyer calling about a property at 7pm is that someone answered immediately and helped them. A voicemail greeting is the alternative. Most callers hang up without leaving one.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/ai-voicebots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/ai-voicebots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyAiVoicebotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/ai-voicebots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'AI Voicebots',                    url: '/industries/real-estate-property/ai-voicebots' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/ai-voicebots',
            name:        'AI Voicebots for Real Estate & Property Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
