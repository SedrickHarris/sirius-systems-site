import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'ai-automation',
  metaTitle: 'AI Automation for Local Businesses | Sirius Systems',
  metaDescription:
    'Sirius Systems builds AI automation for local service businesses: capture leads, follow up faster, book more jobs, and run your operations without adding headcount.',
  eyebrow: 'AI Automation',
  headline: 'Your business on autopilot. Without the headcount.',
  subheadline:
    'AI automation connects your website, CRM, messaging, and follow-up into one system that works while you work: and keeps working while you sleep.',
  glyphVariant: 'orbit' as const,
  definition:
    'AI automation for local businesses means replacing the manual steps between a new lead and a booked job: follow-up messages, appointment reminders, review requests, CRM updates: with systems that run themselves.',
  problems: [
    'Leads fill out your form and never hear back because no one sent a follow-up.',
    'Your team spends hours on tasks that should take seconds: scheduling, reminders, data entry.',
    'You miss calls during jobs and those callers book your competitor.',
    'You know you should be asking for reviews but it never happens consistently.',
  ],
  steps: [
    {
      label: 'Map the gaps',
      body: 'We audit your current lead flow: where leads come in, where they drop off, what happens manually. Most businesses have 3 to 5 automation gaps we can close in the first session.',
    },
    {
      label: 'Build the triggers',
      body: 'We connect your existing tools: or set up the right ones: so that specific events (new lead, missed call, completed job) trigger the right automated action.',
    },
    {
      label: 'Write the sequences',
      body: 'Every automated message: SMS, email, voicebot response: gets written to sound like your business, not a robot. We configure tone, timing, and fallback paths.',
    },
    {
      label: 'Test and hand off',
      body: 'We run the system through real scenarios before it goes live. You get a clear view of what fires, when, and why: so you stay in control without doing the work.',
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
    'Missed calls get a follow-up within seconds instead of never.',
    'New leads hear from your business before they have a chance to call someone else.',
    'Your team stops doing data entry and starts doing the actual work.',
    'Review requests go out consistently after every completed job: not whenever someone remembers.',
    'Your pipeline stays current without anyone manually updating it.',
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
      a: 'It means replacing the manual steps between getting a lead and booking a job: follow-up messages, reminders, CRM updates: with automated systems that run on triggers. The business owner sets the rules once; the system executes them every time.',
    },
    {
      q: 'Do I need to replace my existing tools?',
      a: "Not necessarily. We start by mapping what you already have and identifying where the gaps are. In many cases we connect tools you already use. When a tool is genuinely holding you back, we'll say so: but the goal is to streamline, not to sell you a stack.",
    },
    {
      q: 'How long does it take to set up?',
      a: "A basic missed-call and lead follow-up system can be live in under a week. More complex setups: full pipeline automation, multi-channel sequences, voicebot integration: take 2 to 4 weeks depending on what's already in place.",
    },
    {
      q: 'Will the automated messages sound like a robot?',
      a: "Only if we write them that way: which we don't. Every message sequence is written in your business's voice and tested on real scenarios before going live. Most clients find their customers don't notice the difference.",
    },
    {
      q: "What happens if I want to change something after it's set up?",
      a: "The system is yours. We document everything so you can make simple edits, and we're available if you need changes. Automations aren't set-and-forget forever: they evolve with your business.",
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
