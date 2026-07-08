import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'crm-automation',
  hubName:     'Technology & B2B Services',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for IT Firms, MSPs & B2B Tech Companies',
  metaDescription: 'IT firms and MSPs lose deals to disorganized pipelines and missed follow-ups. We configure the CRM automation that keeps every prospect moving forward.',

  eyebrow: 'Technology & B2B Services · CRM Automation',

  headline:
    'IT firms and MSPs lose deals to disorganized pipelines and missed follow-ups — not to better competitors',

  subheadline:
    'Your team is in delivery. The pipeline depends on someone remembering to follow up. A prospect who expressed interest three weeks ago is now sitting at the wrong stage in your CRM — or not in your CRM at all. The deals you lose are not always lost to a competitor with a better offer. They are lost to the firm that stayed in front of the prospect while yours went quiet. CRM automation fixes that without adding work to your team.',

  heroHighlights: [
    'Pipeline stages that update based on what actually happens — not what someone remembers to log',
    'Multi-touch follow-up sequences that run automatically across 60–180 day B2B sales cycles',
    'Lead routing from inbound inquiry to the right team member without manual assignment',
    'Renewal and upsell triggers built into the CRM so no contract expiration slips through',
  ],

  definitionHeadline:
    'What CRM automation means for an IT firm, MSP, or B2B technology company',

  definition:
    'CRM automation for a B2B technology firm means configuring your CRM to update pipeline stages, trigger follow-up sequences, route inbound leads, and log activity automatically — based on what actually happens in a deal, not on what someone manually enters. A prospect submits a contact form and the CRM creates the record, assigns it to the right team member, and starts a follow-up sequence without anyone touching it. A proposal goes out and a reminder task fires at day three, day seven, and day fourteen without a rep having to remember. A contract closes and a renewal trigger gets set for eleven months out. The system runs the pipeline discipline your team does not have time to enforce manually.',

  problemHeadline:
    'Where IT firms and MSPs quietly lose pipeline they worked to build',

  problems: [
    'An inbound lead comes in on a Thursday afternoon while your team is heads-down on a client project. No one sees it until Monday. By then the prospect has already had discovery calls with two other firms. The lead was warm when it arrived and cold by the time anyone responded.',
    'A prospect showed strong interest after your initial discovery call but was not ready to commit. There is no follow-up sequence in place. Three weeks later nobody has touched the deal. The prospect signed with a competitor who kept showing up in their inbox.',
    'Your CRM has contacts in it but the pipeline stages are whatever someone last updated them to, which is often weeks behind reality. When leadership asks for a pipeline review, the numbers are not trustworthy because the data depends on manual entry that nobody has time to do consistently.',
    'A client contract is up for renewal in ninety days. No one flagged it. The client received a competing proposal last month and is now in evaluation. The renewal conversation should have started sixty days ago but there was no system to surface it.',
  ],

  howItWorksHeadline: 'How CRM automation works for a B2B technology or IT firm',

  steps: [
    {
      label: 'Map your current pipeline and lead flow',
      body: 'We audit how inbound leads arrive, where they go when they do, how follow-up currently happens, and where deals stall or disappear. Most B2B technology firms have three or four specific drop-off points — the gap between inquiry and first contact, the week after the proposal, and the sixty-day mark when interest has cooled. We find those gaps before building anything.',
    },
    {
      label: 'Configure pipeline stages that reflect buyer decisions',
      body: 'We rebuild or reconfigure your pipeline so stages reflect what the buyer has agreed to, not what the seller has done. A stage called "Proposal Sent" tells you what happened. A stage called "Proposal Under Review — Follow-Up Active" tells you where the deal actually is. Accurate stages produce accurate forecasts and trigger the right automation at the right time.',
    },
    {
      label: 'Build the trigger sequences',
      body: 'Every stage transition, inbound lead, and inactivity window gets a trigger. A new inquiry starts a response sequence. A proposal going out starts a follow-up cadence. A deal sitting dormant for fourteen days gets escalated. A contract closing fires a renewal reminder for eleven months out. The triggers run without a rep having to remember any of it.',
    },
    {
      label: 'Connect your tools and test every path',
      body: 'We integrate the CRM with your booking system, website forms, email, and any PSA or project management tools your team uses. Then we walk every trigger path end to end before anything goes live. A sequence that fires to the wrong person, at the wrong stage, because of a configuration gap is worse than no automation at all.',
    },
  ],

  features: [
    'Pipeline stage automation — stages update based on real deal activity, not manual entry',
    'Multi-touch follow-up sequences — email and task cadences that run automatically across long B2B cycles',
    'Inbound lead routing — new inquiries assigned to the right team member without manual coordination',
    'Proposal follow-up triggers — automatic reminders at day three, seven, and fourteen after a proposal goes out',
    'Multi-stakeholder contact tracking — IT director, business owner, and procurement contacts organized under one deal record',
    'Dormant deal escalation — deals with no activity in fourteen-plus days flagged automatically',
    'Renewal and upsell triggers — contract expiration reminders built into the CRM at close',
    'Form-to-CRM sync — every inbound web form or calendar booking creates and updates the CRM record automatically',
  ],

  relatedServiceSlugs: [
    'appointment-booking-automation',
    'lead-generation-automation',
    'ai-chatbots',
    'review-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is CRM automation for an IT company or MSP?',
      a: 'It means configuring your CRM to update pipeline stages, trigger follow-up sequences, route inbound leads, and log activity automatically — based on real deal events, not on what someone manually enters. When a prospect submits a form, the record is created and a response sequence starts without anyone touching it. When a proposal goes out, follow-up tasks fire at day three, seven, and fourteen. The CRM runs the pipeline discipline your team does not have time to enforce on its own.',
    },
    {
      q: 'Do I need CRM automation if I already have a CRM?',
      a: 'A CRM stores data. CRM automation acts on it. If your pipeline stages are only as current as the last time someone remembered to update them, and follow-up depends on individual memory rather than a system, you have a CRM but no automation. The data exists but it is not doing anything. Automation is what makes the CRM useful as a pipeline management tool rather than a contact database.',
    },
    {
      q: 'How does CRM automation handle the long sales cycles typical of B2B tech firms?',
      a: 'B2B technology sales cycles often run sixty to one hundred eighty days with multiple decision-makers involved at different stages. Automation handles that by setting triggers at each stage transition rather than running on a fixed schedule. A deal that moves into evaluation triggers a different sequence than a deal that has been dormant for three weeks. The system adapts to where each deal is, not where the calendar says it should be.',
    },
    {
      q: 'Can CRM automation manage deals with multiple stakeholders — IT director, business owner, procurement?',
      a: 'Yes. The CRM is configured to associate multiple contacts with a single deal record, with each contact tagged by role. Follow-up sequences can be directed to the right person at the right stage — the IT director gets technical content after the discovery call, the business owner gets ROI framing before the proposal review, and procurement gets contract terms when the deal enters negotiation. No single sequence goes to everyone.',
    },
    {
      q: 'What happens to renewal and upsell opportunities if they are not tracked in the CRM?',
      a: 'They slip. A contract that expires in ninety days is not visible until someone goes looking for it, and by then the client may already be in evaluation with a competitor. CRM automation builds the renewal trigger at close — when the deal is marked won, a task fires at a defined interval before the contract end date so the conversation starts on time. Upsell triggers work the same way: when a client account reaches a defined threshold of activity or contract value, the CRM flags it for the account owner.',
    },
  ],

  ctaHeadline: 'Your pipeline is losing deals it should be winning',

  ctaBody:
    'We audit your current CRM setup, map where inbound leads and active deals fall out of the pipeline, and show you what a properly configured automation system looks like for your IT firm or MSP. No pressure. No invented outcomes. Just a clear picture of what is broken and what fixing it looks like.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2bCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'CRM Automation',            url: '/industries/technology-b2b/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/crm-automation',
            name:        'CRM Automation for B2B Technology Firms',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
