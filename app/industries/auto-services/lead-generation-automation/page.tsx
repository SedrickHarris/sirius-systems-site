import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Auto Services',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for Auto Shops',
  metaDescription: 'Auto shops lose leads to whoever follows up first. We build a system that captures every inquiry, routes it into your CRM, and starts follow-up automatically.',

  eyebrow: 'Auto Services · Lead Generation Automation',

  headline:
    'Your shop gets found. Then the lead disappears. That gap is where your growth is stuck.',

  subheadline:
    'A driver searches, finds your shop, submits an inquiry — and nobody follows up fast enough. They book somewhere else. Lead generation automation connects your GBP, website, and paid channels to a single intake system that captures every inquiry, enters it into your CRM, and starts follow-up the moment it arrives — while your team is still in the bays.',

  heroHighlights: [
    'Every inquiry captured — GBP, website, ads, and referral in one intake system',
    'Automated follow-up starts within seconds of a lead arriving, not hours later',
    'Source tracking shows which channels produce booked jobs, not just inquiries',
    'Re-engagement sequences recover leads that did not respond to the first touchpoint',
  ],

  definitionHeadline:
    'What lead generation automation means for an auto service business',

  definition:
    'Lead generation automation for an auto service business means connecting every channel that sends you inquiries — Google Business Profile, your website, paid search, referrals — into a single intake system that captures the lead, creates a CRM record with source data attached, and starts a follow-up sequence automatically. The goal is that no inquiry waits for a team member to notice it. Whether the lead arrives during a busy afternoon when every tech is in a bay, or at 9 p.m. on a Sunday, the system responds, qualifies, and routes it before your competitors do.',

  problemHeadline:
    'Where auto shops lose leads they already paid to capture',

  problems: [
    'A driver submits a form from your website while you are mid-job. The inquiry lands in an email inbox. By the time anyone checks it — two hours later, end of day, Monday morning — the customer already booked the shop that called them back first. You paid for the traffic. Your competitor got the job.',
    'Your GBP gets views and clicks. Your paid ads generate form fills. Your website gets organic traffic. But each channel feeds a different inbox or notification, and nothing routes everything into one place automatically. Leads fall between the gaps because your intake was never designed to handle multiple sources at once.',
    'You have no reliable way to know whether the jobs coming through the door this month are from Google Ads, organic search, your GBP listing, or referrals. Without source tracking tied to booked appointments, you cannot tell which channels are producing revenue and which are producing inquiries that never convert.',
    'A lead that does not respond to the first message gets mentally filed under not interested and never followed up on again. Most shops leave a meaningful share of their pipeline in that status. A structured re-engagement sequence recovers a portion of those leads without any manual effort.',
  ],

  howItWorksHeadline: 'How we build your lead generation system',

  steps: [
    {
      label: 'Map your current intake',
      body: 'We trace every channel currently sending leads to your shop — GBP, website forms, paid campaigns, referral sources — and identify where inquiries enter, where they stall, and where they drop out of the pipeline entirely.',
    },
    {
      label: 'Unify the intake into one system',
      body: 'We connect each channel to a single CRM intake flow. Every lead, regardless of source, lands in your pipeline with contact details, the channel it came from, and the service type attached. No manual data entry required.',
    },
    {
      label: 'Wire the follow-up sequences',
      body: 'As soon as a lead enters the system, automated sequences start — an immediate acknowledgment, a qualification message, a booking prompt. The timing and content of each touchpoint is tuned to the source and the service type your shop handles.',
    },
    {
      label: 'Track source to booked job',
      body: 'We configure source-level attribution so you can see which channels produce booked appointments, not just form fills. That data drives where you invest next and which channels get cut.',
    },
  ],

  featuresHeadline: 'What the system includes',

  features: [
    'Multi-channel intake — GBP, website, paid ads, referral, and social in one pipeline',
    'Instant CRM entry — every inquiry lands with source data and service type attached',
    'Immediate follow-up sequences — first touchpoint fires within seconds of lead capture',
    'After-hours capture — inquiries arriving outside shop hours enter the pipeline automatically',
    'Lead qualification — service type, vehicle, and urgency captured before your advisor sees it',
    'Re-engagement sequences — structured follow-up for leads that did not respond the first time',
    'Source attribution — booked jobs traced back to the channel that produced them',
    'Duplicate detection — the same customer does not enter the pipeline twice',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'crm-automation',
    'ai-chatbots',
    'reputation-management',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is lead generation automation for an auto repair shop?',
      a: 'It means connecting every channel that sends you inquiries — your Google Business Profile, website, paid ads, referral sources — to a single CRM intake system that captures each lead, records where it came from, and starts a follow-up sequence automatically. The goal is that no inquiry waits for someone on your team to notice it, regardless of when it arrives or which channel it came through.',
    },
    {
      q: 'Do I need a separate lead generation system if I am already running Google Ads?',
      a: 'Yes. Paid ads drive traffic and generate form fills, but they do not handle what happens after the inquiry arrives. Without an automated intake and follow-up system, those leads wait in an inbox until someone on your team responds. If that takes more than a few minutes, the customer has already moved on. The lead generation system is what converts the traffic your ads produce into actual booked appointments.',
    },
    {
      q: 'How does lead follow-up automation work for an auto shop?',
      a: 'When an inquiry arrives — from a form, a GBP message, or a paid campaign — the system captures it, creates a CRM record, and fires a follow-up sequence automatically. The first touchpoint typically goes out within seconds: an acknowledgment that their inquiry was received and a next-step prompt. If they do not respond, a re-engagement sequence follows at defined intervals. Your service advisor only gets involved once the lead has responded and the service type is confirmed.',
    },
    {
      q: 'What happens to inquiries that come in after hours?',
      a: 'After-hours inquiries enter the same CRM pipeline as inquiries during business hours. The system captures the contact details, records the source, and queues the follow-up sequence to fire at the appropriate time. Your team starts the next morning with a complete list of overnight inquiries already in the pipeline, with context attached — no hunting through email or missed call logs.',
    },
    {
      q: 'How is this different from buying leads from a lead generation company?',
      a: 'A lead generation company sells you contact lists or shared inquiry data — leads that may have been sold to multiple shops and may not match your service area or the types of jobs you take. Lead generation automation works on the traffic and inquiries your shop already earns through your GBP, website, and marketing. It captures and converts that existing demand instead of adding a new paid lead source on top of it.',
    },
  ],

  ctaHeadline: 'See where your shop is losing leads before anything changes',

  ctaBody:
    'We map your current intake — which channels are sending you leads, what happens after an inquiry arrives, and where customers drop out before booking — and show you the gaps clearly. No obligations. No invented promises. Just an honest picture of where your pipeline stands.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                       url: '/' },
            { name: 'Industries',                 url: '/industries' },
            { name: 'Auto Services',              url: '/industries/auto-services' },
            { name: 'Lead Generation Automation', url: '/industries/auto-services/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/lead-generation-automation',
            name:        'Lead Generation Automation for Auto Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
