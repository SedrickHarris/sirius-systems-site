import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'crm-automation',
  hubName:     'Hospitality & Events',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for Restaurants and Event Venues',
  metaDescription: 'Hospitality runs on repeat guests and booked events. We build the CRM automation that brings diners back, converts venue inquiries, runs post-event follow-up.',

  eyebrow: 'Hospitality & Events · CRM Automation',

  headline:
    'Your hospitality business runs on relationships — your CRM should be building them while you run the floor',

  subheadline:
    'A restaurant fills seats by keeping first-time guests coming back. An event venue fills its calendar by converting every inquiry before a competitor does. Both depend on follow-up that happens automatically — not on whoever remembers to send the next message while managing a busy service. CRM automation is the system that runs the follow-up, builds the guest database, and keeps your pipeline moving without pulling you away from the work that actually requires you.',

  heroHighlights: [
    'Guest database automation that builds rich profiles from every reservation, event, and visit',
    'Automated win-back and repeat visit sequences for restaurants and hospitality businesses',
    'Venue inquiry pipeline from first contact through signed contract without manual chasing',
    'Post-event and post-visit follow-up that requests reviews and re-engages guests automatically',
  ],

  definitionHeadline:
    'What CRM automation means for a restaurant, venue, or hospitality business',

  definition:
    'CRM automation for a hospitality or events business means connecting your guest database to the sequences, triggers, and workflows that keep every guest relationship moving forward without manual effort from your team. For restaurants and food service businesses, that means every diner becomes a profile, every lapsed guest receives a win-back sequence, and every post-visit review request fires automatically without your manager sending it manually. For event venues, wedding planners, and catering companies, it means every inquiry enters a pipeline that responds immediately, nurtures the lead through the booking decision, and follows up after the event is done — so the couple who toured your venue last week hears from you before they book somewhere else.',

  problemHeadline:
    'Where hospitality and events businesses lose guests and bookings they already earned',

  problems: [
    'A couple dined at your restaurant for their anniversary. The experience was exceptional. No review request ever went out, no win-back offer reached them at 30 days, and no message reminded them of their upcoming second anniversary. They will probably return at some point — but your competitor with an automated guest sequence will get there first.',
    'An event inquiry arrives on your venue website at 7pm on a Friday. Your coordinator sees it Monday morning. By then the couple has already toured a competing venue that sent a response within the hour, answered their budget question through an automated chatbot, and scheduled a tour for Saturday afternoon.',
    'You have a guest database with hundreds of contacts from reservation forms, private dining inquiries, and past events. Nothing automated is running against it. No win-back sequences for lapsed diners, no anniversary triggers, no post-event follow-up sequences for catering clients who could book again next quarter.',
    'After every event your catering team delivers, you rely on word of mouth and hope for a review. The follow-up email goes out whenever someone on your team remembers. Sometimes that is three days later. Sometimes it is never. The review and the rebooking conversation both get left to chance.',
  ],

  steps: [
    {
      label: 'Map your guest journey and booking pipeline',
      body: 'We document how guests and clients currently move through your business — from first contact through repeat visit or rebooked event. For restaurants, that includes how guest data is collected and what currently happens after a visit. For venues and event businesses, that includes how inquiries arrive, how they are followed up, and where leads go cold. This audit determines exactly which automations to build first.',
    },
    {
      label: 'Build the sequences and triggers for your specific operation',
      body: 'Restaurant automation differs from venue automation. Guest win-back sequences differ from event inquiry pipelines. We build the workflows that match how your specific business operates — post-visit review requests, lapsed guest campaigns, inquiry response sequences, post-event follow-up, and rebooking triggers — configured to fire at the right moment without manual input.',
    },
    {
      label: 'Connect your lead sources, reservation system, and existing tools',
      body: 'We connect your CRM to the channels your guests and clients already use to reach you — website inquiry forms, reservation systems, chatbot conversations, and call tracking. Every new contact enters the system automatically with the right tags and sequence already firing. No manual data entry, no contacts falling into a spreadsheet that nobody checks.',
    },
    {
      label: 'Activate and hand off a system that runs without you',
      body: 'Before handoff, every sequence is tested against real contact records. You receive a running system where win-back campaigns are already active, event inquiry follow-up is already firing, and post-visit review requests are already scheduled. Your team focuses on hospitality — the system handles the follow-up.',
    },
  ],

  features: [
    'Guest database automation — every reservation, inquiry, and visit builds a centralized guest profile automatically, including visit history, preferences, and interaction records, without manual data entry',
    'Win-back and repeat visit campaigns — lapsed guest sequences trigger automatically at configured intervals after a last visit to re-engage diners who have not returned, with personalized messaging based on their history',
    'Event inquiry pipeline automation — every venue or event inquiry receives an immediate response and enters a pipeline with stage-based follow-up, tour scheduling prompts, and proposal reminders that fire without manual chasing',
    'Post-event and post-visit follow-up — thank-you messages, review requests, and rebooking prompts fire automatically after every completed event, dining experience, or catering engagement, without your team remembering to send them',
    'Catering and private dining rebooking sequences — corporate clients, private dining groups, and repeat event bookers receive proactive outreach before their next likely booking window, turning a one-time event into an ongoing relationship',
    'Wedding and event planner lead nurture — couples and event planners who inquired but have not booked receive multi-step nurture sequences that keep your venue or planning business top of mind through a longer decision cycle',
    'Hotel and boutique property guest journey automation — pre-arrival messages, post-stay review requests, and return-visit offers run automatically based on booking data, building guest loyalty without adding front-desk workload',
    'Unified guest and client visibility — every contact in your CRM is tagged by type with their full interaction history, so your team always knows who they are talking to and what happened last time',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'reputation-management',
    'ai-chatbots',
    'review-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is CRM automation for a restaurant or hospitality business?',
      a: 'CRM automation for a hospitality business means connecting your guest database to the sequences and triggers that keep every relationship moving forward without manual effort. For restaurants, it means post-visit follow-up, win-back campaigns for lapsed diners, and review requests that fire automatically after every service. For event venues and catering companies, it means inquiry response automation, pipeline stage management, and post-event follow-up that runs without your coordinator manually queuing each message.',
    },
    {
      q: 'How is this different from the CRM built into my reservation or booking platform?',
      a: 'Built-in CRM tools in reservation platforms are designed for managing bookings, not for building automated guest relationships. They store guest data but rarely run the sequences that bring guests back or convert leads into confirmed events. CRM automation is the layer that makes your existing guest data act on your behalf — sending the win-back message, triggering the review request, and following up on the event inquiry — rather than waiting for someone on your team to do it manually.',
    },
    {
      q: 'Can this work for both our restaurant dining room and our private event and catering business?',
      a: 'Yes. The two tracks are configured separately because the buyer journeys are different. Dining room guests receive post-visit follow-up, win-back sequences, and review requests based on visit data. Private event and catering clients receive inquiry response automation, proposal follow-up, post-event review requests, and rebooking outreach based on event type and timing. Both tracks run from the same CRM so your team has one view of every guest and client relationship.',
    },
    {
      q: 'We are an event venue and wedding planner. How does the inquiry pipeline automation work?',
      a: 'Every inquiry that arrives — from your website, inquiry directories, or chatbot — receives an immediate automated response and enters a pipeline with a clear stage. Follow-up messages fire at configured intervals if the couple or planner has not responded. Tour scheduling prompts go out automatically. Proposal reminders fire when a proposal goes unsigned past a set window. At each stage, the right message goes out at the right time without your coordinator manually tracking which leads need attention.',
    },
    {
      q: 'What happens to the guest contacts and past event clients already in our system?',
      a: 'Existing contacts are segmented and enrolled in the appropriate sequences based on their history. Lapsed restaurant guests can be enrolled in win-back campaigns. Past event clients receive rebooking outreach timed to their next likely booking window. Corporate catering contacts get proactive check-ins before quarterly event seasons. The system starts working on what you already have, not just on new contacts who come in after go-live.',
    },
  ],

  ctaHeadline: 'Find out where your guest relationships and event pipeline are leaking',

  ctaBody:
    'We map your current guest follow-up and event booking flow, identify where contacts are going cold, and show you what an automated system looks like for your specific hospitality operation — restaurant, venue, planner, or hotel. No pressure. No invented results. Just a clear picture of what is possible.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Hospitality & Events', url: '/industries/hospitality-events' },
            { name: 'CRM Automation',       url: '/industries/hospitality-events/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/crm-automation',
            name:        'CRM Automation for Restaurants and Event Venues',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
