import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-automation',
  metaTitle: 'AI Automation for Service Businesses | Sirius Systems',
  metaDescription:
    'Replace manual follow-up, missed-call recovery, and CRM updates with trigger-based systems that run automatically. Built for local service businesses.',
  eyebrow: 'AI Automation',
  headline: 'Your business on autopilot. Without the headcount.',
  subheadline:
    'Most local service businesses lose jobs not because of price or quality but because no one followed up fast enough. AI automation closes the gap between getting a lead and booking the job.',
  glyphVariant: 'orbit' as const,
  definition:
    'AI automation for local service businesses means replacing the manual steps between a new inquiry and a booked job with trigger-based systems that run without human input. When a lead submits a form, a call goes unanswered, or a job completes, the right action fires automatically: a follow-up SMS, an appointment reminder, a review request, a CRM update. The business owner sets the rules once; the system executes them every time.',
  problems: [
    'A lead fills out your form at 8pm. No one follows up until the next morning. By then they have already booked someone else.',
    'Your team spends 30 to 60 minutes a day on follow-up texts, reminder calls, and CRM updates that a system could handle in seconds.',
    'A call comes in while you are on a job. It goes to voicemail. The voicemail never gets returned. That caller is gone.',
    'Jobs complete and no one sends a review request because doing it consistently depends on someone remembering to do it.',
  ],
  steps: [
    {
      label: 'Audit your lead flow',
      body: 'We map every entry point where a lead reaches your business: form submissions, inbound calls, web chat, referrals. Then we trace exactly where leads go quiet. Most businesses find three to five drop points they were not aware of before we mapped them.',
    },
    {
      label: 'Build the trigger logic',
      body: 'We connect your existing tools or configure the right ones, then set specific events as triggers: new form submission, missed call, completed job, lead sitting in pipeline past a threshold. Each trigger fires a precise automated action, not a broadcast message to your whole list.',
    },
    {
      label: 'Write the message sequences',
      body: 'Every automated SMS, email, and voicebot response is written in your business voice before it goes live. We set the timing cadence, configure fallback paths for non-responses, and review every sequence against the scenarios it will actually encounter.',
    },
    {
      label: 'Test, launch, and hand off',
      body: 'We run every automation through real test scenarios before it touches a live lead. You receive documentation of what fires, when, and why so you can make changes or hand it to staff without rebuilding from scratch.',
    },
  ],
  features: [
    'Missed-call text-back: responds to missed calls with an SMS within seconds',
    'Lead follow-up sequences: automated SMS and email triggered by form submissions',
    'Appointment reminders: reduces no-shows without manual reminder calls',
    'Review request automation: asks for a review at the right moment after a job',
    'CRM pipeline updates: moves leads through stages automatically based on actions taken',
    'Re-engagement sequences: follows up with stale leads that went quiet',
    'Unified inbox: all messages (SMS, email, web chat) in one place',
    'Reporting: see which automations are firing and what outcomes they drive',
  ],
  outcomes: [
    'Missed calls get a follow-up text within seconds instead of never. The lead hears from you before they dial the next number on the list.',
    'New inquiries receive a response immediately, regardless of what time they come in or whether your team is in the middle of a job.',
    'Your team stops spending time on data entry and reminder calls and puts that time toward billable work instead.',
    'Review requests go out consistently after every completed job, not on the days someone happens to remember.',
    'Your pipeline reflects reality. Every lead sits in the right stage without anyone manually moving it there.',
  ],
  relatedSlugs: [
    'ai-chatbots',
    'ai-voicebots',
    'crm-automation',
    'lead-generation-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is AI automation for a local service business?',
      a: 'AI automation for a local service business means using trigger-based systems to handle the tasks that fall through the cracks between getting a lead and closing a job. When a form is submitted, a call is missed, or a job completes, a defined action fires automatically: a follow-up message, an appointment reminder, a review request, a CRM stage update. The business sets the rules once; the system executes them every time without manual input.',
    },
    {
      q: 'What is the difference between AI automation and regular automation?',
      a: 'Traditional automation runs fixed if-then rules: if this form is submitted, send this email. AI automation adds a layer of contextual judgment: understanding what a customer actually wrote, routing based on intent, and generating a response that fits the specific situation rather than applying an identical template to every contact. For local service businesses, the practical difference shows up in follow-up quality, in how the system handles edge cases, and in whether the messages feel like they came from a real business or a scheduler.',
    },
    {
      q: 'Which tasks should a local service business automate first?',
      a: 'Missed-call text-back and new lead follow-up are the highest-impact starting points because they address the two moments where most local businesses lose jobs without knowing it. A lead who calls and gets no answer, or fills out a form and hears nothing back for hours, almost always moves on. Appointment reminders and post-job review requests are the next tier: they reduce no-shows and build your review count consistently without adding work to your team.',
    },
    {
      q: 'What is a missed-call text-back?',
      a: 'A missed-call text-back is an automated SMS that fires within seconds when an inbound call goes unanswered. It tells the caller you saw their call and asks how you can help. For a service business taking calls in the field, it is the difference between a prospect knowing they are on your radar and a prospect assuming you are unresponsive and moving on. The message goes out immediately, before the caller has time to dial the next business on their list.',
    },
    {
      q: 'How is AI automation different from just hiring someone to follow up?',
      a: 'Hiring adds a person whose availability, consistency, and reliability vary. Automation runs at 2am, on weekends, and during jobs without variation. It does not get sick, go on vacation, forget, or quit. For tasks with a defined rule set: send a follow-up when a lead comes in, remind a client the day before their appointment, request a review after a job closes: automation is faster, more consistent, and less expensive than a person doing the same task manually every time.',
    },
    {
      q: 'How does AI automation connect to the rest of my business systems?',
      a: 'AI automation is the connective layer between your lead sources (website, calls, ads), your CRM, your messaging channels (SMS, email), and your booking system. Without it, those pieces operate independently and require a person to move information between them. With automation in place, a new lead triggers a CRM entry, a follow-up sequence, and a calendar prompt in a single chain. It is the operating layer that makes separate tools work as one system.',
    },
    {
      q: 'Do I need to replace my existing tools to use AI automation?',
      a: 'Not necessarily. We start by mapping what you already have and identifying where the gaps are. In many cases we connect tools you already use through direct integrations. When a tool is genuinely limiting what the system can do, we say so directly. The goal is the most capable setup with the least disruption to what is already working.',
    },
    {
      q: 'How long does it take to set up AI automation?',
      a: 'A core setup covering missed-call text-back, new lead follow-up, and appointment reminders can be live in under a week. Broader systems covering full pipeline automation, multi-channel sequences, and voicebot integration take two to four weeks depending on what tools are already in place and how complex the lead flow is. We scope the timeline during the discovery call based on your specific setup.',
    },
    {
      q: 'Will the automated messages sound like a robot?',
      a: 'Only if they are written that way. Every sequence we build is written in your business voice, reviewed before it goes live, and tested against the scenarios it will actually encounter. The benchmark we hold it to: if a customer received this message and later spoke to you in person, it should feel like it came from the same business.',
    },
  ],
}

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: `/${PAGE.slug}`,
  },
}

export default function AiAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.metaTitle,
            description: PAGE.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'AI Automation', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'AI Automation',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
