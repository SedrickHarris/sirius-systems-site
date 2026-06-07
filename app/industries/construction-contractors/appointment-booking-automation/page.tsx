import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'construction-contractors',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Construction & Contractors',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Appointment Booking Automation for Contractors',
  metaDescription: 'Contractors lose estimates to whoever responds first. We build the booking system that schedules walkthroughs, sends reminders, and keeps your pipeline moving.',

  eyebrow: 'Construction & Contractors · Appointment Booking Automation',

  headline:
    'Contractors lose estimates to whoever schedules the walkthrough first — automate that step',

  subheadline:
    'A prospect contacts three contractors. The first one to schedule and confirm an estimate walkthrough wins the job most of the time. Booking automation makes sure that contractor is you.',

  heroHighlights: [
    'Estimate walkthroughs self-scheduled from your website or lead capture',
    'Automated confirmations and reminders reduce no-shows and wasted site visits',
    'After-hours inquiries captured and routed into your booking flow immediately',
    'CRM updated automatically from inquiry to confirmed estimate to closed job',
  ],

  definitionHeadline:
    'What booking automation means for a contractor',

  definition:
    'Appointment booking automation for a contractor means connecting your lead capture, calendar, and confirmation system so that a prospect can schedule an estimate walkthrough without waiting for a call-back from your team. The system captures the inquiry, confirms the appointment, and sends reminders — so the prospect shows up prepared and the job does not go to a faster competitor while you were finishing another project.',

  problemHeadline:
    'Where contractors lose project opportunities before the estimate is even written',

  problems: [
    'A prospect submits an inquiry on your website at 7pm. With no automated response, they wait. By the next morning they have already scheduled a walkthrough with a competitor who responded the same night.',
    'You confirm an estimate appointment by phone, but send no written confirmation and no reminder. The client forgets, you make a wasted site visit, and the job goes to whoever followed up faster.',
    'Your calendar and your CRM are managed separately. A confirmed estimate appointment does not update your pipeline automatically, so leads fall between the gaps when things get busy.',
    'Inbound inquiries pile up during active project phases when your team is on site. By the time someone gets to them, the window for winning the estimate has already closed.',
  ],

  howItWorksHeadline: 'How booking automation works for contractors',

  steps: [
    {
      label: 'Map your estimate and sales process',
      body:  'We document how a prospect currently becomes a scheduled estimate — every step, every tool, every manual handoff. Most contractor sales processes have three to five manual steps that slow response time and create the gap a competitor fills.',
    },
    {
      label: 'Connect lead capture to your estimate calendar',
      body:  'We wire your website, chatbot, and lead forms to your calendar so a qualified prospect can self-schedule an estimate walkthrough without waiting for a call-back. After-hours and weekend inquiries go into the same booking flow as business-hours leads.',
    },
    {
      label: 'Configure confirmations and pre-visit reminders',
      body:  'Every scheduled estimate triggers a written confirmation by SMS and email. Reminders fire before the walkthrough so the prospect shows up prepared and wasted site visits drop. Both parties have a confirmed record without a back-and-forth exchange.',
    },
    {
      label: 'Sync to CRM and track through the pipeline',
      body:  'Confirmed estimates update your CRM pipeline automatically. When the estimate is sent, the system can trigger a follow-up sequence at the right intervals — so proposals that go quiet get a nudge before the job goes elsewhere.',
    },
  ],

  featuresHeadline: 'What the booking system covers',

  features: [
    'Self-scheduling: prospects book estimate walkthroughs from live calendar availability',
    'Multi-channel entry: inquiries accepted via website, chatbot, or lead form',
    'After-hours capture: inquiries received outside business hours enter the booking flow immediately',
    'Automated confirmations: SMS and email sent the moment a walkthrough is scheduled',
    'Pre-visit reminders: timed messages reduce no-shows and wasted site visits',
    'CRM sync: confirmed estimates update your pipeline stage automatically',
    'Estimate follow-up sequences: proposals that go quiet get a timed nudge',
    'Abandoned inquiry recovery: follow-up fires when a lead starts but does not complete booking',
  ],

  relatedServiceSlugs: [
    'crm-automation',
    'ai-chatbots',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is appointment booking automation for a contractor?',
      a: 'It means connecting your lead capture, calendar, and confirmation system so that a prospect can schedule an estimate walkthrough without waiting for a call-back. The system captures the inquiry, confirms the appointment, and sends reminders — so the job does not go to a faster competitor while you were finishing another project.',
    },
    {
      q: 'How does booking automation help contractors win more estimates?',
      a: 'Prospects contacting multiple contractors typically move forward with whoever responds and schedules first. Booking automation removes the delay between inquiry and confirmed appointment — the prospect can schedule immediately, gets a written confirmation, and receives reminders. That speed and professionalism signal reliability before the estimate is even written.',
    },
    {
      q: 'What happens to a contractor inquiry that comes in after hours?',
      a: 'The inquiry enters the booking flow immediately. If self-scheduling is enabled, the prospect can book an estimate slot directly from your live availability without waiting for a response. If qualification is required first, the system captures the details and triggers an automatic follow-up at the start of the next business day — before competitors who check their inbox manually.',
    },
    {
      q: 'How does booking automation reduce wasted site visits for contractors?',
      a: 'Wasted site visits happen when an estimate appointment is confirmed verbally but the prospect receives no written record and no reminder. Booking automation sends an immediate written confirmation and reminder messages before the walkthrough. The prospect has a confirmed record in their inbox and on their phone — which significantly reduces the rate of forgotten or missed appointments.',
    },
    {
      q: 'How does appointment booking automation connect to the rest of the contractor growth system?',
      a: 'Booking automation is the conversion layer between lead capture and active project pipeline. Lead generation and your website chatbot bring inquiries in. CRM automation manages the pipeline after the estimate is confirmed. Review automation fires after the project closes. When booking is automated, the sequence from inquiry to estimate to project to review runs without manual coordination at any step.',
    },
  ],

  ctaHeadline:     'See where your estimate pipeline is losing jobs to faster competitors',
  ctaBody:         'We map your current inquiry-to-estimate flow and identify where the delays are. No pressure. No invented promises. Just a clear picture of where speed is costing you projects.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/construction-contractors/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/construction-contractors/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ConstructionContractorsAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/construction-contractors/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Construction & Contractors',     url: '/industries/construction-contractors' },
            { name: 'Appointment Booking Automation', url: '/industries/construction-contractors/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/appointment-booking-automation',
            name:        'Appointment Booking Automation',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
