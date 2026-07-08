import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'crm-automation',
  hubName:     'Professional Services',
  serviceName: 'CRM Automation',

  metaTitle:       'CRM Automation for Professional Services Firms',
  metaDescription: 'Professional service firms lose leads after intake — not because the prospect left, but because follow-up stopped. CRM automation keeps the pipeline moving.',

  eyebrow: 'Professional Services · CRM Automation',

  headline:
    'Your prospect did not go cold. Your follow-up did.',

  subheadline:
    'A prospective client fills out your intake form, has a consultation, and says they need to think it over. Your team gets busy. The follow-up that was supposed to go out at day seven does not go out until day twenty-two, if it goes out at all. By then, they have retained someone else — not because your firm was the wrong choice, but because another firm stayed in front of them and yours did not. CRM automation keeps follow-up running on schedule whether your team is in meetings, in client work, or simply out of bandwidth.',

  heroHighlights: [
    'Automated follow-up sequences that run on schedule — regardless of what else is happening in the firm',
    'Pipeline stages that update based on real actions, not manual entry from an already-stretched team',
    'Lead re-engagement flows for prospects who went quiet — before they are written off and lost for good',
    'Every intake, inquiry, and consultation logged in one place with context attached',
  ],

  definitionHeadline:
    'What CRM automation means for a professional services firm',

  definition:
    'CRM automation for a professional services firm means configuring your client relationship management system to take action on leads automatically — without anyone on your team having to remember to do it. When a prospect submits an intake form, a follow-up sequence starts. When a consultation happens, the next touchpoint fires at the right interval. When a lead goes quiet at day thirty, a re-engagement message goes out instead of the lead going cold by default. The pipeline stages update based on what actually happened, not on who had time to log it. Your team sees an accurate view of every lead at any moment without asking anyone for a status update.',

  problemHeadline:
    'Where professional service firms lose clients they already had in the pipeline',

  problems: [
    'A prospective client had a strong consultation with your firm three weeks ago. No one on your team has followed up since the day-three check-in because everyone has been focused on billable work. The prospect did not lose interest — they lost confidence that your firm was paying attention. They retained someone else.',
    'Your pipeline is full of leads in stages that do not reflect reality. The "proposal sent" stage has five names in it from six weeks ago. Nobody moved them because moving them requires someone to remember to move them. Your actual pipeline health is invisible.',
    'You have no reliable system for leads who say "not yet." A prospect who is not ready to move forward in October might be ready in January — but without an automated re-engagement sequence, they are effectively lost the moment they step out of the active follow-up window.',
    'Your intake relies on whoever took the inquiry remembering to add it to the CRM, send the confirmation, and start the follow-up. When that person is in back-to-back client meetings, the new lead sits in an email thread for three days before anyone touches it.',
  ],

  howItWorksHeadline: 'How we configure CRM automation for your practice',

  steps: [
    {
      label: 'Map your current pipeline and intake flow',
      body: 'We trace exactly how a lead moves through your firm from first contact to signed engagement — what happens after an inquiry comes in, what triggers a follow-up, what determines a stage change, and where leads typically fall out. Most professional service pipelines have two or three points where leads drop because the next action depends on someone remembering to take it.',
    },
    {
      label: 'Configure triggers, sequences, and stage rules',
      body: 'We set up the automation logic: when a new intake form arrives, a confirmation and sequence start immediately. When a consultation is completed, a follow-up fires at the right interval. When a prospect has been quiet for a defined number of days, a re-engagement message goes out. Every trigger is tied to a real event in the client relationship, not a generic schedule.',
    },
    {
      label: 'Connect your intake forms, calendar, and tools',
      body: 'We integrate your CRM with the intake forms on your website, your scheduling system, and your communication tools so that data flows in one direction without manual transfer. A consultation booked through your calendar creates a CRM record. A form submission on your website enters the right pipeline stage. Nothing requires a staff member to copy it from one system to another.',
    },
    {
      label: 'Run and refine without your involvement',
      body: 'Once configured, the system runs on its own — follow-ups fire, stages update, re-engagement sequences trigger, and your pipeline view stays current. You see where every lead stands at any moment without asking your team. When something needs a human response, the system surfaces it. Everything else moves automatically.',
    },
  ],

  featuresHeadline: 'What CRM automation handles for your practice',

  features: [
    'Intake-to-CRM sync — every form submission, inquiry, and consultation entered automatically with no manual transfer',
    'Follow-up sequence automation — timed messages go out at the right intervals after every intake touchpoint',
    'Pipeline stage rules — stages update based on real actions, not manual entry by an already-stretched team',
    'Lead re-engagement flows — automated outreach for prospects who went quiet before the follow-up window closed',
    'Consultation follow-up triggers — the next step fires automatically after every meeting with a prospective client',
    'Long-cycle nurture sequences — stays in front of prospects across 60–90+ day decision windows without manual effort',
    'Activity logging — every touchpoint recorded and attached to the lead record so context is never lost',
    'Pipeline visibility — accurate, real-time view of every lead\'s stage without relying on team status updates',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What is CRM automation for a professional services firm?',
      a: 'CRM automation for a professional services firm means configuring your client relationship management system to take action on leads automatically — without anyone on your team having to remember to do it. Follow-up sequences fire on schedule after intake and consultations. Pipeline stages update based on real events. Prospects who go quiet get a re-engagement message before the window closes. Your team sees an accurate pipeline without asking anyone for a status report.',
    },
    {
      q: 'Does CRM automation work for long sales cycles where a prospect takes months to decide?',
      a: 'Yes — long-cycle professional services sales are where automation matters most. Manual follow-up across a 60 to 90 day decision window is inconsistent by nature. Someone gets busy at week four and the follow-up skips. A prospect who was leaning toward your firm stops hearing from you and interprets that as disinterest. Automation keeps the sequence running at the right intervals for as long as the prospect is in your pipeline — without requiring your team to manually track the cadence.',
    },
    {
      q: 'Can CRM automation handle law firm intake without crossing into legal advice?',
      a: 'Yes. Automation handles the logistical side of intake — confirming receipt of an inquiry, sending a follow-up with next steps, scheduling a consultation, and routing the lead to the right attorney based on matter type. The system does not provide legal guidance or answer substantive questions about the case. Its job is to make sure no inquiry sits unacknowledged and no qualified prospect falls out of the pipeline because a follow-up was not sent.',
    },
    {
      q: 'What happens to leads in my CRM that are not ready to move forward yet?',
      a: 'Without automation, a lead who says "not yet" effectively exits your pipeline — there is no system to re-engage them at the right moment, so they stay cold until someone manually decides to follow up, which often never happens. With CRM automation, those leads enter a long-cycle nurture sequence that keeps your firm visible at appropriate intervals over weeks or months. When the prospect is ready to move forward, your firm is still in the conversation rather than a distant memory.',
    },
    {
      q: 'How is this different from just using a CRM?',
      a: 'A CRM stores data. CRM automation acts on it. Without automation, your CRM is an accurate record of what has happened — but it waits for someone to decide what to do next. With automation, the CRM takes the next step on its own: sends the follow-up, advances the stage, triggers the re-engagement message, logs the activity. The data stays current and the leads keep moving without requiring your team to manage the process manually alongside their billable work.',
    },
  ],

  ctaHeadline: 'Book a 20-minute walkthrough for your practice',

  ctaBody:
    'We will map exactly where leads are dropping out of your current pipeline, show you what an automated follow-up sequence would look like for your specific intake flow, and walk through how the system connects to your existing tools. No obligation.',

  ctaPrimaryLabel: 'Book the walkthrough',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/crm-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/crm-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesCrmAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/crm-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'CRM Automation',        url: '/industries/professional-services/crm-automation' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/crm-automation',
            name:        'CRM Automation for Professional Services Firms',
            description: 'CRM automation configured for professional services firms — automated follow-up sequences, pipeline stage rules, intake-to-CRM sync, and long-cycle lead nurture that keeps prospects moving toward a decision without manual effort from your team.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
