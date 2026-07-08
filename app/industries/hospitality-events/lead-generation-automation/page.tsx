import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Hospitality & Events',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for Hospitality & Events',
  metaDescription: 'Event inquiries go to whoever responds first. We automate inquiry capture, CRM routing, and follow-up so no lead goes cold while your team is running an event.',

  eyebrow: 'Hospitality & Events · Lead Generation Automation',

  headline:
    'The inquiry came in at 9 p.m. on a Saturday while you were running an event. By Sunday morning, that couple had already booked somewhere else.',

  subheadline:
    'Hospitality and events businesses live and die by response speed. A couple contacts five venues in one sitting. A corporate planner builds a shortlist in 48 hours. The first business to respond with the right information almost always wins the booking. Lead generation automation captures every inquiry the moment it arrives — from your website, listing directories, social channels, and referrals — and starts the response and qualification process automatically, around the clock.',

  heroHighlights: [
    'Every inquiry captured automatically — website, directories, social, and referral in one pipeline',
    'Immediate response fires the moment an inquiry arrives, even at midnight on a Saturday',
    'Qualification questions collected before your first personal touchpoint',
    'Re-engagement sequences recover leads that went quiet without manual follow-up',
  ],

  definitionHeadline:
    'What lead generation automation means for a hospitality or events business',

  definition:
    'Lead generation automation for a hospitality or events business means connecting every channel that sends you inquiries — your website, listing directories, social media, referrals — into a single CRM intake system that captures each lead, responds immediately with an acknowledgment and qualifying questions, and runs a follow-up sequence until the lead books, declines, or enters an active conversation with your team. The goal is that no inquiry goes unanswered because you were mid-event, and no lead goes cold because follow-up was inconsistent across a busy season.',

  problemHeadline:
    'Where hospitality and events businesses lose bookings they should have won',

  problems: [
    'A couple submits a venue inquiry at 9 p.m. on a Saturday. Your team is working an event on-site. By the time anyone checks the inbox Sunday morning, two other venues have already responded. The couple has a tour scheduled with one of them. You were the first venue they found. Someone else got the booking.',
    'Your inquiries arrive from six different places — your website contact form, listing directories, Instagram DMs, a referral from a past client, a Google Business Profile message, and a direct email. Each feeds a different inbox or notification. Nothing routes them into one place automatically, and follow-up consistency drops when volume picks up during busy season.',
    'A corporate planner reaches out about a company event. They are contacting four venues and presenting a shortlist to their team within 48 hours. If your response takes more than a few hours, you are already off the list before anyone on your team has even read the inquiry. Speed is not a nice-to-have in this segment — it is the filter.',
    'A lead goes quiet after the first exchange. Most hospitality businesses mark it inactive and move on. Many of those leads are still planning, still comparing, and will book with whoever stays present through the decision process. A re-engagement sequence keeps your business in front of them without any manual effort from your team.',
  ],

  howItWorksHeadline: 'How we build your lead generation system',

  steps: [
    {
      label: 'Map every inquiry source',
      body: 'We trace every channel currently sending you leads — your website, listing directories, social platforms, referral sources, GBP — and identify where each inquiry enters, where it stalls, and where it drops out before a booking conversation starts.',
    },
    {
      label: 'Unify all sources into one intake',
      body: 'We connect every channel to a single CRM pipeline. Every inquiry, regardless of where it came from, lands with contact details, source data, event type, and date range attached — without anyone on your team manually copying it from one place to another.',
    },
    {
      label: 'Wire immediate response and nurture',
      body: 'The moment an inquiry arrives, an automated response fires — acknowledging the inquiry, asking qualifying questions about event type, date, and guest count, and moving the conversation forward. For leads not yet ready to commit, a nurture sequence keeps your business present through the decision window.',
    },
    {
      label: 'Track source to booked event',
      body: 'We configure source attribution so you can see which channels are producing actual booked events, not just inquiry volume. That data drives where you invest next season and which directories or platforms are worth renewing.',
    },
  ],

  featuresHeadline: 'What the system includes',

  features: [
    'Multi-channel intake — website, listing directories, social, GBP, and referral in one pipeline',
    'Instant CRM entry — every inquiry lands with source, event type, date, and contact details attached',
    'Immediate first response — acknowledgment and qualification message fires within seconds of inquiry',
    'After-hours capture — inquiries arriving evenings, weekends, and during events enter the pipeline automatically',
    'Lead qualification — event type, date, guest count, and budget range collected before your first touchpoint',
    'Nurture sequences — consistent follow-up that runs through the decision window without manual effort',
    'Re-engagement sequences — structured outreach for leads that went quiet but have not declined',
    'Source attribution — booked events traced back to the channel that produced the original inquiry',
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
      q: 'What is lead generation automation for a hospitality or events business?',
      a: 'It means connecting every channel that sends you inquiries — your website, listing directories, social media, referrals — to a single CRM system that captures each lead, responds immediately, and runs follow-up automatically. The goal is that no inquiry goes unanswered because your team was running an event, and no lead goes cold because follow-up was inconsistent during a busy stretch. The system handles the timing and consistency so your team can focus on the events themselves.',
    },
    {
      q: 'What happens to inquiries that come in after hours or while my team is running an event?',
      a: 'After-hours and mid-event inquiries enter the same CRM pipeline as inquiries during business hours. The system fires an immediate acknowledgment — letting the lead know their inquiry was received and gathering qualifying information — then queues your team for personal follow-up. By the time your event ends or your team is available, every overnight or weekend inquiry is already in the pipeline with context attached.',
    },
    {
      q: 'Do I need lead generation automation if I already list on directories like The Knot or WeddingWire?',
      a: 'Yes — because directories deliver the inquiry but do not handle what happens after it arrives. If those leads land in a separate inbox and wait for manual follow-up, you are competing against every other listed business that responds faster. Lead generation automation ensures that every directory inquiry enters your CRM immediately and gets a response in seconds, and it unifies those leads with your website and other sources so your entire pipeline is in one place.',
    },
    {
      q: 'How long should automated follow-up run for a hospitality or events lead?',
      a: 'It depends on the event type. Wedding inquiries may sit in a decision process for weeks or months — couples are comparing multiple venues and taking time to visit each one. Corporate event planners typically move faster but the business repeats annually. The nurture sequence runs for as long as the lead type warrants, with spaced touchpoints that keep your business present without being intrusive. It stops when the lead responds and enters an active conversation.',
    },
    {
      q: 'Can this work for restaurants, caterers, and event planners, not just venues?',
      a: 'Yes. The core system — unified intake, immediate response, nurture sequences, source attribution — applies to any hospitality or events business that handles inbound inquiries. A restaurant managing private dining and group reservation requests, a caterer receiving event inquiries across multiple channels, a solo wedding planner responding to couples — each has the same underlying need: every inquiry captured, every follow-up consistent, every source tracked. The sequences and qualification questions are configured to fit your specific operation.',
    },
  ],

  ctaHeadline: 'See exactly where your inquiries are going cold before anything changes',

  ctaBody:
    'We map your current inquiry flow — which channels are sending leads, what happens when an inquiry arrives after hours or during an event, and where your pipeline loses people before a booking conversation starts. No obligations. Just a clear picture of where the gaps are.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Hospitality & Events', url: '/industries/hospitality-events' },
            { name: 'Lead Generation Automation', url: '/industries/hospitality-events/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/lead-generation-automation',
            name:        'Lead Generation Automation for Hospitality & Events',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
