import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'crm-automation',
  hubName:     'Auto Services',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for Auto Repair & Service Shops',
  metaDescription: 'Auto shops lose repeat customers when service reminders and follow-ups stop after the car leaves. CRM automation keeps the relationship going and the bays full.',

  eyebrow: 'Auto Services · CRM Automation',

  headline:
    'Your customer left happy. Then you never reached out again — and they found another shop.',

  subheadline:
    'A customer brings their car in, approves the work, and drives away satisfied. Three months later their service interval comes up — and because no reminder went out, they search Google for a shop near them and book somewhere new. They did not leave because of a bad experience. They left because another shop stayed in front of them and yours did not. CRM automation keeps the follow-up running automatically after every visit so your customers come back to you instead of searching for someone else.',

  heroHighlights: [
    'Automated service reminders sent after every visit — timed to the service performed, not a generic schedule',
    'Deferred and declined work tracked and followed up automatically — so those jobs come back to your shop',
    'Post-service review requests go out at the right moment without anyone on your team remembering to send them',
    'Lapsed customer re-engagement sequences that bring back customers before they book somewhere else for good',
  ],

  definitionHeadline:
    'What CRM automation means for an auto service business',

  definition:
    'CRM automation for an auto service shop means configuring your customer relationship management system to handle the follow-up that keeps customers coming back — without requiring your service advisors to manually track every reminder, re-engagement message, and declined service. After a visit closes, the system automatically queues the next service reminder based on the work performed. Declined or deferred jobs get a follow-up at the right interval. Lapsed customers get a re-engagement message before they book elsewhere. Post-service review requests go out while the experience is still fresh. None of it requires anyone on your team to remember to do it.',

  problemHeadline:
    'Where auto service shops lose customers they worked hard to earn',

  problems: [
    'A customer declined brake service during their last visit because they needed to think about the cost. That was four months ago. No follow-up went out. By now, they have had the brakes done somewhere else — at a shop that sent a timely reminder. The job was yours to lose, and no one knew it was slipping.',
    'Your shop has hundreds of customers who have not been back in six months or more. Without an automated re-engagement sequence, the only way to bring them back is for someone on your team to manually identify them and reach out — which never happens because your advisors are already handling a full schedule.',
    'A customer\'s service interval comes up three months after their last oil change. You have their contact information, their vehicle details, and the history of every job done. But because there is no automated reminder in place, that information sits unused and the customer books the first shop that shows up in their search.',
    'After a job closes, the review request that would have reinforced the experience and built your reputation never goes out. Your advisors intend to ask, but they are already on to the next vehicle. The customer moves on without leaving a review, and the next potential customer sees a profile that has not grown in months.',
  ],

  howItWorksHeadline: 'How we configure CRM automation for your shop',

  steps: [
    {
      label: 'Map your customer touchpoints and service types',
      body: 'We identify the specific follow-up sequences your shop needs — post-visit service reminders based on the work performed, deferred job follow-ups for declined services, lapsed customer re-engagement for contacts who have not returned, and post-service review requests. Each touchpoint gets its own timing and message so the automation reflects how your shop actually operates.',
    },
    {
      label: 'Configure triggers, timing, and message sequences',
      body: 'We set up the automation logic tied to real events in your shop — when a job closes, when a service interval arrives, when a customer goes quiet past a defined threshold, when a job is marked as deferred. Each trigger fires the right message at the right time without manual intervention from your service desk or advisors.',
    },
    {
      label: 'Connect to your existing customer records and tools',
      body: 'We integrate the CRM automation layer with your existing customer data, your booking system, and your communication tools so that everything flows in one direction without double entry. Customer records, vehicle history, and service notes inform the follow-up sequences so every message is relevant to the specific customer and the specific work performed.',
    },
    {
      label: 'Run in the background while your team focuses on the floor',
      body: 'Once configured, the system runs on its own. Reminders fire, re-engagement sequences trigger, review requests go out, and deferred job follow-ups land at the right moment — while your advisors focus on the customers in front of them. You see what went out, who responded, and which lapsed customers are re-engaging. Nothing requires daily management from your team.',
    },
  ],

  featuresHeadline: 'What CRM automation handles for your auto service business',

  features: [
    'Post-visit service reminders — timed to the type of service performed and the customer\'s vehicle history',
    'Deferred and declined work follow-up — automated outreach for jobs a customer put off at the last visit',
    'Lapsed customer re-engagement — sequences for customers who have not returned past a defined interval',
    'Review request automation — post-service messages timed while the experience is still fresh',
    'Appointment confirmation and reminder sequences — reduces no-shows without manual outreach from your desk',
    'Customer and vehicle record sync — service history informs every message so nothing feels generic',
    'Campaign scheduling — seasonal and interval-based outreach without your team building it manually each time',
    'Activity logging — every touchpoint recorded so your team has full context before any customer conversation',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'review-automation',
    'appointment-booking-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is CRM automation for an auto repair shop?',
      a: 'CRM automation for an auto repair shop means configuring your customer relationship management system to handle follow-up automatically after every visit — service reminders timed to the work performed, deferred job follow-ups for services a customer declined, lapsed customer re-engagement for contacts who have not returned, and post-service review requests. None of it requires your service advisors to manually track or send each touchpoint. The system handles it so your team can focus on the vehicles in front of them.',
    },
    {
      q: 'How does CRM automation help bring customers back to my shop?',
      a: 'The most common reason auto shop customers do not return is not a bad experience — it is that no one reached out when their service interval came up and they searched Google for whoever was closest. CRM automation closes that gap by sending service reminders at the right interval after every visit, re-engaging customers who have gone quiet, and following up on deferred work before the customer has it done elsewhere. The communication happens automatically without your team tracking each customer manually.',
    },
    {
      q: 'What happens to deferred or declined work without a follow-up system?',
      a: 'Without automated follow-up, deferred work is effectively lost. A customer who declines brake service or a tire rotation at their last visit intended to come back for it — but without a timely reminder, they either forget or get it done somewhere that reached out first. CRM automation tracks deferred jobs from the visit record and fires a follow-up message at a configured interval, giving your shop the chance to recover that job before it goes to a competitor.',
    },
    {
      q: 'Does CRM automation work for a small or independent auto shop?',
      a: 'Yes — and independent shops are often where automated follow-up creates the biggest difference. A multi-location chain has staff dedicated to customer communication. A single-location independent shop typically has service advisors handling counter traffic, phones, and scheduling simultaneously. Automated reminders, review requests, and re-engagement sequences remove the manual communication burden without adding headcount. Setup is handled for you; your team does not manage the sequences day-to-day.',
    },
    {
      q: 'How is CRM automation different from shop management software?',
      a: 'Shop management software handles the operational side of the business — work orders, parts, invoicing, technician scheduling. CRM automation handles the customer relationship side — the follow-up that happens after the car leaves. Many shops use both, with the shop management system tracking what was done and the CRM automation layer handling the reminders, re-engagement, and review requests that bring customers back for the next visit. They work together rather than replacing each other.',
    },
  ],

  ctaHeadline: 'Book a 20-minute walkthrough for your shop',

  ctaBody:
    'We will map exactly where your shop is losing repeat customers, show you what an automated follow-up sequence would look like for your service mix, and walk through how it connects to your existing setup. No obligation.',

  ctaPrimaryLabel: 'Book the walkthrough',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',           url: '/' },
            { name: 'Industries',     url: '/industries' },
            { name: 'Auto Services',  url: '/industries/auto-services' },
            { name: 'CRM Automation', url: '/industries/auto-services/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/crm-automation',
            name:        'CRM Automation for Auto Repair & Service Shops',
            description: 'CRM automation configured for auto repair shops, body shops, and auto service businesses — post-visit service reminders, deferred work follow-up, lapsed customer re-engagement, and review request sequences that run automatically without manual effort from your service team.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
