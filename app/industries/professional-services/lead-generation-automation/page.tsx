import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'lead-generation-automation',
  hubName:     'Professional Services',
  serviceName: 'Lead Generation Automation',

  metaTitle:       'Lead Generation Automation for Professional Services Firms',
  metaDescription: 'Law firms, CPA firms, and consultants lose clients to slow inquiry response and no nurture system. We build the automated pipeline that captures and converts.',

  eyebrow: 'Professional Services · Lead Generation Automation',

  headline:
    'Professional services firms lose clients between the inquiry and the consultation — not to better competitors',

  subheadline:
    'A prospective client submits a contact form on your website at 7pm on a Tuesday. No automated response goes out. By Wednesday morning they have booked a consultation with a competing firm that responded the same night. You never knew they were there. Lead generation automation closes the gap between inquiry and consultation — so your practice captures the clients you are already attracting but currently losing before the first conversation.',

  heroHighlights: [
    'Inquiry capture and immediate automated response — every contact form submission acknowledged within minutes',
    'Multi-touch nurture sequences built for 60–180 day professional services sales cycles',
    'Lead qualification that identifies serious prospects before your team spends time on them',
    'Consultation booking connected directly to the follow-up sequence — no manual coordination required',
  ],

  definitionHeadline:
    'What lead generation automation means for a law firm, CPA firm, or consulting practice',

  definition:
    'Lead generation automation for a professional services firm means connecting your inquiry capture, response, qualification, and nurture into a single system that runs without requiring practitioner time. When a prospective client submits a form, requests a consultation, or responds to your content, the system acknowledges them immediately, qualifies their inquiry against your defined criteria, and begins a follow-up sequence that keeps your firm visible across a sales cycle that may take weeks or months to close. The practitioner is only involved when a lead is warm, qualified, and ready for a real conversation — not at every stage of the intake process.',

  problemHeadline:
    'Where professional services firms lose clients they already attracted',

  problems: [
    'A prospective client submits a contact form after reading your website at 7pm. Your team is not available. No automated response goes out. By the following morning the prospect has already had a consultation with a competing firm that responded within the hour. The inquiry came to you first. You lost the client to response time, not to a better service offering.',
    'A prospective client speaks with you at a networking event and follows up by email expressing interest. Life gets busy. No one on your team has a system to follow up consistently across the next sixty days. The prospect goes quiet and eventually retains another firm. They were not lost to a competitor — they were lost to silence.',
    'Your website generates traffic from people searching for exactly what you offer. A percentage of them fill out your contact form. Most of those inquiries get a response within a day or two, which is too late for the ones who contacted two or three firms simultaneously. There is no triage, no prioritization, and no qualification — every inquiry is treated the same regardless of fit or urgency.',
    'Your best source of new clients has always been referrals. Referrals have slowed. There is no systematic alternative — no content driving inbound inquiries, no follow-up sequence keeping warm prospects engaged, no lead capture connected to your existing website traffic. When referrals slow, there is nothing to replace them.',
  ],

  howItWorksHeadline: 'How lead generation automation works for a professional services practice',

  steps: [
    {
      label: 'Map your current inquiry flow and lead sources',
      body: 'We audit how prospective clients currently find and contact your firm — website forms, referral follow-ups, directory inquiries, content downloads — and identify where leads are entering and where they are falling out before a consultation is booked. Most professional services firms lose inquiries at two specific points: the first response window and the thirty-day mark when no follow-up has gone out.',
    },
    {
      label: 'Build the capture and qualification layer',
      body: 'We configure your inquiry capture to collect the information needed to qualify a lead before your team spends time on it: practice area or service need, business size or personal situation, timeline, and how they found your firm. A qualified lead gets routed to the consultation booking sequence. An unqualified inquiry gets a response that closes the loop professionally without consuming practitioner time.',
    },
    {
      label: 'Configure the nurture sequences',
      body: 'Professional services sales cycles run long. A prospect who is not ready to retain today may be the right client in sixty or ninety days. We build the multi-touch sequence that keeps your firm visible across that window — educational content, trust-building touchpoints, and well-timed follow-ups — so when the prospect is ready to make a decision, your firm is the one they call.',
    },
    {
      label: 'Connect to consultation booking and CRM',
      body: 'We connect the nurture system to your calendar so a qualified lead can book a consultation directly without email back-and-forth. Every lead, response, and touchpoint is logged in your CRM so your team has full context before the first call and nothing is lost between team members.',
    },
  ],

  features: [
    'Immediate inquiry response — automated acknowledgment within minutes of every contact form submission',
    'Lead qualification routing — serious prospects separated from unqualified inquiries before your team is involved',
    'Multi-touch nurture sequences — follow-up across 60–180 day sales cycles without manual tracking',
    'Consultation booking integration — qualified leads self-schedule directly from the nurture sequence',
    'Referral follow-up automation — systematic follow-up for warm introductions that currently fall through',
    'Content-driven lead capture — downloadable guides, checklists, and resources that capture contact details and trigger nurture',
    'CRM logging — every inquiry, response, and touchpoint recorded so context is never lost between team members',
    'Re-engagement sequences — dormant leads contacted again at defined intervals before being archived',
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
      q: 'What is lead generation automation for a professional services firm?',
      a: 'It means connecting your inquiry capture, response, qualification, and nurture into a system that runs without requiring practitioner time at every step. When a prospective client submits a form or follows up on a referral introduction, the system responds immediately, qualifies the inquiry, and begins a follow-up sequence that keeps your firm visible across a sales cycle that may take weeks or months to close. Your team is only involved when a lead is warm, qualified, and ready for a real conversation.',
    },
    {
      q: 'How do law firms and consulting practices automate lead follow-up?',
      a: 'The follow-up sequence is triggered by the inquiry itself, not by a team member remembering to send an email. When a contact form is submitted, an immediate acknowledgment goes out and the lead enters a defined sequence — educational content, trust-building touchpoints, and consultation prompts — spaced across the length of the typical sales cycle for that practice. If a prospect books a consultation, the sequence stops. If they go quiet, a re-engagement message fires at a defined interval. The system runs whether or not anyone on your team is available.',
    },
    {
      q: 'What is the difference between buying leads and lead generation automation?',
      a: 'Purchased leads are shared with multiple firms, have no connection to your positioning, and often produce low-quality inquiries from prospects who did not specifically seek out your practice. Lead generation automation captures inquiries from people who already found your firm — through search, referral, or content — and ensures those inquiries are responded to immediately, qualified systematically, and nurtured across the full sales cycle. The leads are already interested in you specifically. Automation is what makes sure none of them slip through.',
    },
    {
      q: 'How does lead generation automation work when professional sales cycles are long?',
      a: 'Long sales cycles are exactly why automation matters. A prospect who is not ready to retain today may be the right client in sixty or ninety days, but most professional services firms have no system to stay visible across that window. Automation solves this by running a multi-touch sequence at defined intervals — not daily, not aggressively, but consistently enough that when the prospect is ready to make a decision, your firm is still in front of them. The sequence runs in the background without anyone on your team managing it manually.',
    },
    {
      q: 'Can lead generation automation replace referrals for professional services firms?',
      a: 'It does not replace referrals — it reduces your dependence on them. Most professional services firms built their practices on referrals, which is effective until referrals slow. Automation creates a parallel channel: inbound inquiries from your website and content that are captured, responded to, and nurtured systematically. It also improves referral conversion by ensuring that when someone is introduced to your firm, the follow-up happens immediately and consistently rather than depending on a team member remembering to reach out.',
    },
  ],

  ctaHeadline: 'Your firm is attracting clients it is not capturing',

  ctaBody:
    'We audit your current inquiry flow, identify where prospective clients are falling out before the first consultation, and show you what a connected lead capture and nurture system looks like for your specific practice. No pressure. No invented outcomes. Just a clear picture of what is possible with a system built for how professional services firms actually sell.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/lead-generation-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/lead-generation-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesLeadGenerationAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/lead-generation-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'Lead Generation Automation', url: '/industries/professional-services/lead-generation-automation' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/lead-generation-automation',
            name:        'Lead Generation Automation for Professional Services Firms',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
