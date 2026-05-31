import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'professional-services',

  metaTitle: 'Consultation Pipeline Automation | Sirius Systems',

  metaDescription:
    'Intake automation, CRM follow-up, consultation booking, and review systems for law firms, CPA firms, financial planners, insurance agencies, and consultants.',

  eyebrow: 'Professional Services',

  headline: 'A consultation pipeline that runs without you chasing it',

  subheadline:
    'When you are the practitioner and the business developer, billable hours spent chasing cold leads are hours you cannot get back. We build the system that responds to inquiries immediately, keeps prospects warm across a 60- or 90-day sales cycle, and fills your consultation calendar — so the only thing on your desk is the work you were trained to do.',

  heroHighlights: [
    'Intake automation and after-hours inquiry capture for every practice type',
    'Multi-touch follow-up built for longer professional sales cycles',
    'Consultation booking without phone tag or manual scheduling',
    'Review requests delivered at the right moment without you having to ask',
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
    'Professional service businesses compete on trust and responsiveness. Prospects research before they call, compare firms before they book, and choose based on who responded and who has the stronger review record. These are the systems that win both — without adding work to your day.',

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
    'The intake process, sales cycle, and review dynamics are different for a law firm than they are for a financial planner or a solo consultant. We build systems that fit how your type of practice actually acquires and retains clients.',

  featured: [
    {
      name: 'Law Firms & Attorneys',
      blurb:
        'Intake automation and consultation booking for law firms that need to respond to inquiries before a competing firm does. The chatbot captures the matter type and contact details — it does not provide legal guidance. Review systems that build credibility without putting you in an awkward position with current clients.',
    },
    {
      name: 'Accounting & CPA Firms',
      blurb:
        'Consultation booking and automated follow-up for CPA firms and accounting practices built to run year-round, not only during tax season when you have no time to manage it manually. Review systems that surface your expertise to prospects who found your competitors first.',
    },
    {
      name: 'Financial Planners & Wealth Management',
      blurb:
        'Long-cycle lead nurture and consultation booking for financial planners and advisors where a prospect may need months of follow-up before they are ready to commit. The system keeps your firm visible and your name top of mind throughout the entire decision window.',
    },
    {
      name: 'Insurance Agencies',
      blurb:
        'Automated follow-up sequences and review systems for independent insurance agencies competing on local search and referrals. Capture quote requests outside business hours and keep prospects moving toward a decision without anyone on your team manually following up.',
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
        'Lead follow-up and review systems for managed service providers and IT consultants. See also: Technology & B2B Services.',
    },
    {
      name: 'Mortgage Brokers & Loan Officers',
      blurb:
        'Lead response automation and multi-touch follow-up for mortgage professionals with longer loan-cycle timelines.',
    },
    {
      name: 'Real Estate Attorneys',
      blurb:
        'Intake automation and review systems for real estate attorneys handling transaction-based client relationships.',
    },
    {
      name: 'Tax Resolution & Financial Consultants',
      blurb:
        'Lead nurture and consultation booking for tax resolution specialists and financial consultants with high-consideration buyers.',
    },
    {
      name: 'Executive & Career Coaches',
      blurb:
        'Consultation booking automation and review systems for executive, career, and business coaches with referral-driven pipelines.',
    },
    {
      name: 'Compliance & Regulatory Consultants',
      blurb:
        'Inquiry response and CRM automation for compliance consultants serving small business and professional clients.',
    },
    {
      name: 'PR & Communications Agencies',
      blurb:
        'Lead follow-up, CRM pipeline, and review systems for PR and communications firms with proposal-led sales cycles.',
    },
    {
      name: 'Notary & Legal Document Services',
      blurb:
        'Booking automation and review generation for mobile notaries and legal document preparation services.',
    },
  ],

  faqs: [
    {
      q: 'Can an AI chatbot handle intake for a law firm without giving legal advice?',
      a: 'Yes. The chatbot is configured to capture contact details, qualify the type of matter, and route the inquiry to the right person — it does not answer legal questions or provide legal guidance. Its job is to make sure no inquiry goes unanswered after hours and that qualified prospects reach your calendar, not a voicemail box.',
    },
    {
      q: 'My sales cycle is 60 to 90 days. Can automation actually stay in front of a prospect that long without annoying them?',
      a: 'Yes, and that is exactly where automation outperforms manual follow-up. A multi-touch sequence sends the right message at the right interval — not too often, not so infrequently that they forget you. The cadence and messaging are configured to match your sales cycle during setup. Your team is only notified when a prospect re-engages and is ready to move forward.',
    },
    {
      q: 'How do you handle review requests for professional services where the relationship is sensitive?',
      a: 'The review request is timed and worded to fit the professional context — it goes out after a matter closes, a project completes, or a milestone is reached, not mid-engagement. Messaging is configured for your practice type and tone. The system requests a review from real clients — it does not fabricate them or incentivize them in ways that violate platform policies.',
    },
    {
      q: 'What happens to leads that come in through my website after hours?',
      a: 'An automated response goes out within minutes — acknowledging the inquiry, collecting the information needed to qualify the prospect, and routing them toward your booking calendar or a follow-up sequence. No inquiry sits in an inbox until the next business day.',
    },
    {
      q: 'Do you work with solo practitioners or only larger firms?',
      a: 'Both. The intake, follow-up, and review systems scale to solo practitioners and multi-person firms. The scope of the build depends on how complex your intake workflow is and how many concurrent prospects you are managing. We scope it during the discovery call.',
    },
  ],

  ctaHeadline: 'Your consultation calendar should fill itself.',

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
