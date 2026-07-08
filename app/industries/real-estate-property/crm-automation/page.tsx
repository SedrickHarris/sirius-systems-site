import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'real-estate-property',
  serviceSlug: 'crm-automation',
  hubName:     'Real Estate & Property Services',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for Real Estate Agents & Property Managers',
  metaDescription: 'Your CRM only works if the follow-up runs automatically. We build the pipeline, sequences, and automation so no lead, showing, or lease renewal falls through.',

  eyebrow: 'Real Estate & Property Services · CRM Automation',

  headline:
    'Your CRM should be running your follow-up — not waiting for you to remember to use it',

  subheadline:
    'Most real estate professionals have a CRM. Very few have one that actually works. The contacts are in there. The pipeline stages exist. But the follow-up still depends on someone remembering to send the next message, move the next stage, or reach back out to the lead that went quiet three weeks ago. CRM automation closes that gap — connecting your contact database to the sequences, triggers, and workflows that keep every lead, client, and prospect moving forward without manual effort.',

  heroHighlights: [
    'Automated follow-up sequences for buyer leads, seller leads, and past clients',
    'Pipeline stage management that updates based on actions, not memory',
    'Property manager leasing pipeline automation from inquiry to signed lease',
    'Database reactivation sequences that turn dormant contacts into active conversations',
  ],

  definitionHeadline:
    'What CRM automation means for a real estate business',

  definition:
    'CRM automation for a real estate business means connecting your contact database to a system of triggers, sequences, and workflows so that every lead gets an immediate response, every pipeline stage reflects what actually happened, and every follow-up fires on schedule without anyone on your team manually queuing it. For residential agents and teams, that means buyer and seller pipelines that move leads from first inquiry through closing without dropped conversations. For property managers and leasing teams, it means rental inquiries that receive instant responses, tour scheduling that runs automatically, and lease renewal sequences that fire weeks before expiration without a coordinator touching them. The CRM stops being a database and starts being the system that runs your business.',

  problemHeadline:
    'Where real estate businesses lose deals and leases because the CRM is not doing its job',

  problems: [
    'A buyer lead comes in from your website at 8pm. It sits in your CRM under "New Lead" until someone logs in the next morning. By then, they have already toured a property with the agent who texted back within ten minutes. Your CRM captured the lead. The follow-up did not happen.',
    'You have 400 contacts in your database. Eighty of them are people who inquired in the last 18 months but never transacted. They have no active follow-up running. No one is reaching out. Some of them are ready to move right now and have no idea you are still in business.',
    'Your leasing team gets 30 rental inquiries a week. Half of them arrive after hours or on weekends. By Monday morning, prospective tenants have already applied at the competing property that sent an automated response Saturday night with a self-scheduling tour link.',
    'A past client closed with you two years ago. Their home value has appreciated significantly and they are likely ready to sell. Nothing in your CRM is tracking that window. No anniversary message, no market update, no check-in sequence — because no one set it up.',
  ],

  steps: [
    {
      label: 'Map your current pipeline and contact database',
      body: 'We start by understanding how leads actually move through your business today — what sources they come from, where they get stuck, what follow-up is manual, and where contacts go cold. For property managers, we map the full leasing lifecycle from inquiry through renewal. This audit determines exactly what automation to build and in what order.',
    },
    {
      label: 'Build the sequences, triggers, and pipeline stages',
      body: 'We configure the follow-up sequences, behavioral triggers, pipeline stage logic, and contact segmentation your CRM needs to run without manual input. Buyer sequences differ from seller sequences. Rental inquiry automation differs from past-client nurture. Every workflow is built to match how your specific operation actually works, not a generic template.',
    },
    {
      label: 'Connect your lead sources and sync your contact data',
      body: 'We connect your CRM to the lead sources you are already using — website forms, listing portals, call tracking, chatbot inquiries — so every new contact enters the system automatically with the right tags, stage assignment, and sequence already firing. No manual imports, no copy-paste between platforms.',
    },
    {
      label: 'Test, activate, and hand off a running system',
      body: 'Before handoff, every sequence and trigger is tested against real contact records. You receive a system where the follow-up is already running, the pipeline is already organized, and your team\'s only job is to show up for the conversations the automation surfaces — not to keep the system going.',
    },
  ],

  features: [
    'Instant lead response and new inquiry sequences — every new contact gets an immediate, personalized reply within minutes, regardless of when the inquiry arrives, with follow-up continuing automatically until the lead responds or converts',
    'Buyer and seller pipeline automation — separate pipeline tracks with their own stage logic, follow-up cadence, and behavioral triggers that update based on what actually happened, not based on manual card moves',
    'Leasing inquiry and prospect-to-lease automation — rental inquiry responses fire automatically after hours and on weekends, tour scheduling links go out with the first response, and follow-up continues until the prospect tours, applies, or is marked ineligible',
    'Lease renewal and tenant retention sequences — renewal outreach begins automatically at 90, 60, and 30 days before expiration with escalating follow-up for non-responders and automatic record updates for tenants who renew',
    'Database reactivation campaigns — dormant contacts including past clients, old leads, open house registrants, and expired listing contacts are enrolled in reactivation sequences that surface who is ready to transact now',
    'Past client and sphere of influence nurture — automated touchpoint sequences including market updates, home purchase anniversaries, annual check-ins, and seasonal messages keep your name front of mind across your entire database',
    'Lead source tracking and pipeline visibility — every contact is tagged with the source that generated them, pipeline stages reflect real-time status, and you can see where every buyer, seller, or rental prospect sits without asking your team',
    'Cross-system sync and integration — your CRM connects to your calendar, email, listing portals, and existing tools so lead data flows in automatically, stage updates push to the right places, and no contact records go stale',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'lead-generation-automation',
    'reputation-management',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'Does CRM automation work with the real estate CRM I am already using?',
      a: 'In most cases, yes. The automation layer connects to your existing CRM rather than replacing it. If your current platform supports the workflows you need, we build inside it. If it does not, we identify what is missing and configure a system that does — either by adding to what you have or migrating to a platform that supports your operation. Either way, you are not starting over from scratch.',
    },
    {
      q: 'How is CRM automation different from just having a CRM?',
      a: 'A CRM is a database. CRM automation is what makes that database act on your behalf. Most real estate professionals have a CRM full of contacts and pipeline stages that still require someone to manually send the next follow-up, move the next stage, and remember who to call. Automation means those actions happen based on triggers and schedules — not based on someone remembering to do them.',
    },
    {
      q: 'Can the system handle both buyer leads and seller leads separately?',
      a: 'Yes. Buyer and seller leads have completely different timelines, motivations, and follow-up needs. The automation treats them as separate pipelines with separate sequences, separate triggers, and separate communication cadences. A buyer who is six months out from purchasing needs different messaging than a seller who is ready to list in 30 days. The system accounts for that from the moment the lead enters.',
    },
    {
      q: 'We are a property management company, not a residential agent. Does this apply to us?',
      a: 'The leasing pipeline automation and tenant lifecycle workflows are built specifically for property management operations. Rental inquiry response, tour scheduling, application follow-up, and lease renewal sequences are all distinct from the residential sales track. The system is configured for how a leasing team actually works — inquiry volume, after-hours coverage, and the prospect-to-lease conversion process — not adapted from a residential agent template.',
    },
    {
      q: 'What happens to the contacts already in our CRM?',
      a: 'Existing contacts are segmented, tagged, and enrolled in the appropriate sequences based on where they are in your pipeline. Dormant contacts from the last 12 to 24 months can be enrolled in reactivation campaigns. Past clients go into long-term nurture sequences. Active leads get assigned to the right follow-up track. The system starts working on what you already have, not just on new leads that come in after go-live.',
    },
  ],

  ctaHeadline: 'Find out where your CRM is letting leads go quiet',

  ctaBody:
    'We map your current pipeline, identify where follow-up is breaking down, and show you what an automated system looks like for your specific real estate operation — agents, teams, or property managers. No pressure. No invented results. Just a clear picture of what is possible.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/real-estate-property/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/real-estate-property/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function RealEstatePropertyCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/real-estate-property/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                            url: '/' },
            { name: 'Industries',                      url: '/industries' },
            { name: 'Real Estate & Property Services', url: '/industries/real-estate-property' },
            { name: 'CRM Automation',                  url: '/industries/real-estate-property/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/real-estate-property/crm-automation',
            name:        'CRM Automation for Real Estate & Property Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
