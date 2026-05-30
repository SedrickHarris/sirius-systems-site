import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'professional-services',

  metaTitle: 'Professional Services Automation | Sirius Systems',

  metaDescription:
    'CRM automation, consultation booking, AI chatbots, and reputation management for law firms, accounting practices, financial planners, and consultants.',

  eyebrow: 'Professional Services',

  headline: 'A consultation pipeline that runs without you chasing it',

  subheadline:
    'When you are the practitioner and the business developer, you cannot afford to spend billable hours following up on cold leads. We build the system that responds to inquiries immediately, keeps prospects warm over weeks not days, and fills your consultation calendar — so the only thing on your desk is the work you were trained to do.',

  heroHighlights: [
    'Inquiry capture and response, 24 hours a day',
    'Automated follow-up built for longer sales cycles',
    'Consultation booking without phone tag',
    'Review requests that do not require you to ask',
  ],

  problemHeadline: 'Where professional service firms quietly lose revenue',

  problems: [
    'A potential client submits a contact form at 9 PM on Friday. By Monday morning they have already booked a consultation with the firm that responded at 9:02 PM.',
    'A prospect who was not ready to commit last month is the right client this month — but there is no system keeping your firm visible between those two points. Longer professional sales cycles require consistent follow-up. A spreadsheet is not a follow-up system.',
    'Your satisfied clients think highly of you but never leave a review because asking in a professional context feels transactional. Competitors with more Google reviews win searches from people who have never heard of you.',
    'Your practice runs on referrals. Referrals are unpredictable. When they slow down, there is nothing generating new consultation requests — no lead system, no follow-up queue, no pipeline outside word of mouth.',
  ],

  systemsHeadline: 'The client acquisition stack for professional practices',

  systemsCopy:
    'Professional service businesses compete on trust and responsiveness. These are the systems that give you both — without adding work to your day.',

  serviceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'crm-automation',
    'lead-generation-automation',
    'reputation-management',
    'all-in-one-business-growth-system',
  ],

  subVerticalsHeadline: 'Built for your specific practice type',

  subVerticalsCopy:
    'The intake process, sales cycle, and review dynamics are different for a law firm than they are for a financial planner. We build systems that fit how your type of practice actually works.',

  featured: [
    {
      name: 'Law Firms & Attorneys',
      blurb:
        'Intake automation and consultation booking for law firms that need to respond to inquiries before a competing firm does. Review systems that build credibility without putting you in an awkward position.',
    },
    {
      name: 'Accounting & CPA Firms',
      blurb:
        'Consultation booking and automated follow-up for CPA firms and accounting practices — built to run year-round, not just during tax season when you have no time to manage it manually.',
    },
    {
      name: 'Financial Planners & Wealth Management',
      blurb:
        'Long-cycle lead nurture and consultation booking for financial planners and advisors where a prospect may need months of follow-up before they are ready to commit. The system keeps your firm visible throughout.',
    },
    {
      name: 'Insurance Agencies',
      blurb:
        'Automated follow-up sequences and review systems for independent insurance agencies competing on local search and referrals. Capture quote requests outside business hours and keep prospects moving toward a decision.',
    },
  ],

  compact: [
    {
      name: 'Business Consultants',
      blurb:
        'Lead nurture and consultation booking for independent consultants with longer proposal cycles and relationship-driven sales.',
    },
    {
      name: 'Marketing & Creative Agencies',
      blurb:
        'CRM automation, follow-up sequences, and review systems for agencies and studios where client relationships drive referrals.',
    },
    {
      name: 'HR & Recruiting Firms',
      blurb:
        'Inquiry automation and CRM follow-up for HR consultancies and recruiting firms managing multiple client relationships simultaneously.',
    },
    {
      name: 'IT Consultants & MSPs',
      blurb:
        'Lead follow-up and review systems for managed service providers and IT consultants.',
    },
  ],

  faqs: [
    {
      q: 'Can an AI chatbot handle intake for a law firm without giving legal advice?',
      a: 'Yes. The chatbot is configured to capture contact details, qualify the type of matter, and route the inquiry to the right person — it does not answer legal questions or provide guidance. Its only job is to make sure no inquiry goes unanswered after hours and that qualified prospects reach your calendar, not a voicemail box.',
    },
    {
      q: 'My sales cycle is 60 to 90 days. Can the system keep prospects warm that long?',
      a: 'That is exactly what it is designed for. Automated CRM sequences can run for weeks or months, sending relevant follow-up at timed intervals so a prospect who was not ready in month one is still hearing from you in month three. You set the cadence once; the system handles the execution.',
    },
    {
      q: 'How do you ask clients for reviews when the relationship is professional and formal?',
      a: 'The system sends a review request automatically after a completed engagement or closed matter — timed so it lands when the experience is fresh but not while active work is still in progress. The message is professionally worded and requires no action from you. Clients who want to leave a review can do so in one click; those who do not can ignore it.',
    },
    {
      q: 'We already use existing software for case management. Does your system integrate with it?',
      // TODO: confirm with client — replace this answer with confirmed
      // integration list before publishing. Do not invent integrations.
      a: 'Integration capability depends on the platforms involved. We assess your current stack during discovery and build the system around what you already have where possible. If a direct integration is not available, we work around it.',
    },
    {
      q: 'We get most of our business from referrals. Why do we need a lead system?',
      a: 'Referrals are valuable and unpredictable. A lead system does not replace them — it handles the periods when referrals slow down, captures the people who find you through search or social before they find a competitor, and ensures every referral who contacts you actually books rather than falling through the cracks when you are busy serving existing clients.',
    },
  ],

  ctaHeadline: 'Your consultation calendar should fill itself',

  ctaBody:
    'If you are manually following up on leads, chasing review requests, or losing prospects to slower response times, the system is the fix. Tell us where the gaps are and we will show you what a connected practice looks like.',

  ctaPrimaryLabel: 'Book a discovery call',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-professional-services.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesIndustryPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/industries/${DATA.slug}`,
            name: DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: 'Professional Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
