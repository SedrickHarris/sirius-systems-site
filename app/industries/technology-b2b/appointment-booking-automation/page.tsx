import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Technology & B2B Services',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for B2B Tech Firms',
  metaDescription: 'B2B technology firms lose discovery calls to whoever responds first. We build the booking system that captures inbound leads and gets them on your calendar.',

  eyebrow: 'Technology & B2B Services · Appointment Booking Automation',

  headline:
    'B2B technology firms lose discovery calls to whoever responds first — your system should respond every time',

  subheadline:
    'Your engineers are on tickets. Your principals are in client meetings. A high-intent inbound lead submits a form and waits. By the time someone follows up, the prospect has already scheduled a discovery call with the firm that responded within the hour. Booking automation closes that window — while your team stays focused on delivery.',

  heroHighlights: [
    'Inbound leads responded to immediately — no inquiry sits unanswered while your team is in delivery',
    'Demo requests and consultation forms connect directly to your calendar for self-scheduling',
    'Automated confirmations and follow-up sequences keep prospects engaged across longer sales cycles',
    'CRM updated automatically from first inquiry to confirmed discovery call',
  ],

  definitionHeadline:
    'What appointment booking automation means for a B2B technology or IT firm',

  definition:
    'Appointment booking automation for a B2B technology firm means connecting your inbound lead capture, calendar, and CRM so that a prospect who submits a contact form, requests a demo, or reaches out through any channel can self-schedule a discovery call and receive a confirmation without a team member stopping delivery work to coordinate the exchange. The system responds while your engineers are on tickets, while your developers are in sprint, and while your principals are heads-down in client engagements — and hands you a confirmed call on your calendar when you check back in.',

  problemHeadline:
    'Where technology and B2B service firms lose discovery calls before the conversation starts',

  problems: [
    'A prospect submits a contact form on your website on a Friday afternoon. Your team is in delivery. The inquiry sits in an inbox over the weekend. By Monday morning the prospect has already had a discovery call with a competing firm that responded the same day.',
    'A demo request comes in while your developers are in sprint. No one picks it up until the following morning. The prospect interpreted the delay as a signal about your responsiveness as a service provider and moved on before you called back.',
    'Your pipeline has warm leads in it from the past 30 days — leads that showed genuine interest and then went cold because there was no automated follow-up sequence moving them toward a next conversation. Manual follow-up depends on someone remembering, which means it does not happen consistently.',
    'Inbound inquiries arrive through multiple channels — your website, LinkedIn, referrals, email — and land in different places. There is no single connected flow that routes every lead into a booking sequence, so some get missed and none get the same response experience.',
  ],

  howItWorksHeadline:
    'How booking automation works for IT firms, MSPs, and SaaS companies',

  steps: [
    {
      label: 'Map your current inbound lead and booking flow',
      body: 'We document how an inbound inquiry currently becomes a confirmed discovery call — every channel, every tool, every handoff. Most B2B technology firms have three to five manual steps between a lead arriving and a call getting booked. We identify them before building anything.',
    },
    {
      label: 'Connect every inbound channel to your calendar',
      body: 'We wire your website contact form, demo request form, chatbot, and voicebot to your calendar so a qualified prospect can self-schedule a discovery call without waiting for a team member to respond. Inquiries that arrive after hours, over weekends, and during delivery-heavy weeks all route into the same booking flow.',
    },
    {
      label: 'Configure confirmations and follow-up sequences',
      body: 'Every booking triggers an immediate confirmation by email and SMS. For leads that do not book immediately, automated follow-up sequences continue reaching out across multiple touches — keeping the prospect engaged across the longer sales cycle without manual effort from your team.',
    },
    {
      label: 'Sync to CRM and manage the pipeline from there',
      body: 'Confirmed calls update your CRM pipeline automatically. The lead enters the right stage, your team is notified, and the post-call follow-up sequence fires at the right intervals. When the engagement closes, the same system can trigger your review request sequence on Google, Clutch, or G2.',
    },
  ],

  features: [
    'Immediate inbound response: every lead acknowledged within minutes, regardless of when it arrives',
    'Self-scheduling: prospects book a discovery call or demo slot from your live calendar availability',
    'Multi-channel capture: inquiries from website, chatbot, voicebot, email, and referral all route into the same flow',
    'Automated confirmations: email and SMS sent immediately on booking to prospect and team',
    'Multi-touch follow-up: automated sequences keep warm leads engaged across longer B2B sales cycles',
    'CRM pipeline update: confirmed calls move the lead to the right stage automatically',
    'After-hours coverage: the booking flow responds at any hour without pulling engineers off delivery',
    'Post-engagement trigger: review request fires automatically after a completed project or milestone',
  ],

  relatedServiceSlugs: [
    'crm-automation',
    'ai-chatbots',
    'lead-generation-automation',
    'reputation-management',
  ],

  faqs: [
    {
      q: 'What is appointment booking automation for B2B technology and IT firms?',
      a: 'It is the system that connects your inbound lead capture, calendar, and CRM so that a prospect who submits a demo request or contact form can self-schedule a discovery call and land in your pipeline without a team member coordinating the exchange. For an IT firm or MSP, that means an inbound inquiry that arrives while your engineers are handling tickets gets an immediate response and a booking link — rather than sitting in an inbox until someone has time to follow up, by which point the prospect has already scheduled a call with a competing firm that responded first.',
    },
    {
      q: 'How does booking automation help IT firms and MSPs respond faster to inbound leads?',
      a: 'Most IT firms and MSPs lose inbound leads not because of capability or pricing but because of response time. Engineers are on tickets. Principals are in client meetings. The inbound inquiry sits unactioned for hours or over a weekend while the prospect contacts two other firms. Booking automation responds to every inbound inquiry immediately with a confirmation and a path to schedule a discovery call — so the prospect can book a slot without waiting for a callback, and your team\'s calendar fills with qualified conversations rather than cold leads to chase.',
    },
    {
      q: 'Does appointment booking automation work for longer B2B sales cycles?',
      a: 'Yes. Booking automation handles the conversion moment — turning a high-intent inbound signal into a confirmed discovery call before the prospect goes cold. The longer sales cycle that follows is where CRM automation takes over: multi-touch follow-up sequences, pipeline stage updates, and nurture communication that keeps the prospect engaged across the weeks or months a B2B technology deal can take to close. The two systems work in sequence — booking automation wins the first call; CRM automation closes the gap from there.',
    },
    {
      q: 'Can booking automation handle demo requests and consultation scheduling for SaaS companies?',
      a: 'Yes. For a SaaS company or software development firm, the most common high-intent inbound signal is a demo request or a consultation form fill. Booking automation connects that form to your calendar so the prospect can self-schedule a demo slot, receive an immediate confirmation, and enter your CRM as an active opportunity — without a sales rep having to manually reach out to propose times. The booking happens at the moment of intent, while the prospect is still engaged, rather than hours later when they have moved on.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the growth system for B2B technology firms?',
      a: 'Booking automation is the first conversion layer. Your AI chatbot or voicebot qualifies the inbound lead and routes them into the booking flow. CRM automation handles what comes after the confirmed call — pipeline stage updates, multi-touch follow-up sequences, proposal reminders, and renewal triggers for existing clients. Review automation fires after a completed engagement, building the review profile on Google, Clutch, and G2 that determines whether the next prospect shortlists your firm before making contact. When booking is automated, the sequence from inbound inquiry to confirmed discovery call to closed engagement to review request runs without manual coordination at any step.',
    },
  ],

  ctaHeadline: 'Stop losing discovery calls to whoever responds first',

  ctaBody:
    'We map your current inbound lead and booking flow, find where prospects are falling out before the first call, and show you what a connected system looks like for your specific technology or IT operation. No pressure. No invented results. Just a clear picture of what is possible.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2bAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Technology & B2B Services',      url: '/industries/technology-b2b' },
            { name: 'Appointment Booking Automation', url: '/industries/technology-b2b/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/appointment-booking-automation',
            name:        'Appointment Booking Automation for B2B Technology Firms',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
