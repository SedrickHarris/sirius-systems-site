import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'technology-b2b',

  metaTitle: 'B2B Tech Services Automation: CRM & Leads | Sirius Systems',

  metaDescription:
    'Lead response automation, CRM pipeline management, and review systems for IT firms, MSPs, SaaS companies, AI agencies, and B2B service businesses.',

  eyebrow: 'Technology & B2B Services',

  headline:
    'The lead that sits unanswered over a weekend is already talking to a competitor',

  subheadline:
    'B2B technology buyers move fast even when sales cycles run long. The firm that responds first wins the discovery call. The firm with the stronger review record wins the shortlist comparison. The automation gap between those two outcomes is a first-response system, a multi-touch follow-up sequence, and a post-engagement review request. We build all three.',

  heroHighlights: [
    'Instant lead response — no inbound inquiry sits unanswered over nights or weekends',
    'Multi-touch follow-up sequences built for longer B2B sales cycles',
    'CRM pipeline automation to keep every prospect organized and progressing',
    'Review generation and reputation management to build pre-sale credibility',
  ],

  problemHeadline: 'Where technology and B2B service firms lose deals',

  problems: [
    'Inbound leads from your website or campaigns go unanswered for hours or over weekends. By the time someone follows up, the prospect has already had a discovery call with a competitor.',
    'Prospects that do not convert on first contact fall out of the pipeline because there is no automated follow-up sequence moving them through a longer sales cycle.',
    'The CRM has contacts in it but no automated sequences. Pipeline movement depends on a salesperson remembering to follow up — which means it does not happen consistently.',
    'Satisfied clients who would leave a positive review are never asked. The Google profile is thinner than the quality of the work warrants, which costs credibility before every discovery call.',
  ],

  systemsHeadline:
    'Lead, pipeline, and reputation automation for technology and B2B firms',

  systemsCopy:
    'Three gaps sit open in most B2B pipelines: the first-response window, the multi-touch follow-up sequence, and the post-project review request. These six systems close all three — so more leads convert, fewer go cold, and your reputation reflects the work you actually do.',

  serviceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'ai-chatbots',
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
  ],

  subVerticalsHeadline:
    'Built for technology firms and B2B service businesses',

  subVerticalsCopy:
    'The automation work — capturing and responding to inbound leads, running follow-up sequences, keeping the CRM current, requesting reviews after engagements — runs alongside your delivery work. Your team does not manage it manually. It runs because the system is built to run.',

  featured: [
    {
      name: 'IT Consulting & Managed Service Providers',
      blurb:
        'Lead follow-up automation, CRM pipeline management, and review systems for IT consulting firms and MSPs.',
    },
    {
      name: 'SaaS & Software Development Firms',
      blurb:
        'Inbound lead response and multi-touch follow-up automation for SaaS companies and software development firms.',
    },
    {
      name: 'Cybersecurity Companies',
      blurb:
        'Inquiry response, CRM automation, and reputation management for cybersecurity service providers.',
    },
    {
      name: 'AI Automation Agencies',
      blurb:
        'Lead nurture, CRM pipeline, and review systems for AI automation and consulting agencies.',
    },
  ],

  compact: [
    {
      name: 'CRM & Business Automation Consultants',
      blurb:
        'Lead follow-up and review systems for CRM and business automation consulting firms.',
    },
    {
      name: 'Cloud Service Providers',
      blurb:
        'Inquiry response and follow-up automation for cloud infrastructure and services businesses.',
    },
    {
      name: 'App Development Firms',
      blurb:
        'Lead nurture and CRM automation for mobile and web application development companies.',
    },
    {
      name: 'Data Analytics & BI Firms',
      blurb:
        'Lead follow-up and reputation management for data analytics and business intelligence providers.',
    },
    {
      name: 'Digital Transformation Consultants',
      blurb:
        'Inquiry response and pipeline automation for digital transformation consulting firms.',
    },
    {
      name: 'Systems Integration Companies',
      blurb:
        'Lead follow-up and CRM automation for systems integration and IT infrastructure firms.',
    },
    {
      name: 'IT Staffing & Recruiting Firms',
      blurb:
        'Lead response automation and review systems for technology staffing and recruiting companies.',
    },
    {
      name: 'VoIP & Telecom Service Providers',
      blurb:
        'Inquiry capture and follow-up automation for VoIP and business telecom service providers.',
    },
    {
      name: 'E-Commerce Technology Agencies',
      blurb:
        'Lead nurture and CRM pipeline automation for e-commerce technology and platform agencies.',
    },
    {
      name: 'Business Intelligence & Reporting Firms',
      blurb:
        'Lead follow-up and review systems for BI, reporting, and data visualization firms.',
    },
    {
      name: 'Technology Training & Certification Providers',
      blurb:
        'Enrollment follow-up and review automation for technology training and certification programs.',
    },
  ],

  faqs: [
    {
      q: 'What types of technology and B2B service businesses do you work with?',
      a: 'We work with IT consulting firms, MSPs, SaaS companies, software development shops, cybersecurity providers, AI agencies, and other B2B service businesses that depend on inbound leads and referrals to grow. If your business has a pipeline and sells a service, the automation system applies.',
    },
    {
      q: 'How does lead response automation work for a B2B technology firm?',
      a: 'When a lead submits a form, sends a message, or reaches out through any connected channel, an automated response goes out within minutes — acknowledging the inquiry and moving the conversation toward a discovery call. If the lead does not respond, a follow-up sequence continues reaching out across multiple touches so the prospect does not go cold while your team is focused on delivery.',
    },
    {
      q: 'Can you integrate with the CRM our firm is already using?',
      a: 'We evaluate your existing stack during onboarding and recommend the best path — whether that is integrating with your current platform or moving to a better fit for automation. We confirm compatibility before any build begins.',
    },
    {
      q: 'How does review generation work for a B2B services firm?',
      a: 'After a project milestone, contract renewal, or completed engagement, an automated follow-up sequence asks the client to leave a Google review. For B2B firms, timing and messaging are configured around your client relationship rhythm. The system requests reviews from real clients — it does not fabricate them.',
    },
    {
      q: 'Do you work with solo consultants or only larger technology firms?',
      a: 'Both. The lead follow-up, CRM, and reputation systems scale from a solo consultant to a multi-person firm. The scope of the build depends on the complexity of your pipeline and the number of contacts being managed.',
    },
  ],

  ctaHeadline: 'Book a 20-minute pipeline audit for your technology or B2B firm.',

  ctaBody:
    'We will map where leads, follow-up, or client reviews are leaking and show you the order of operations to fix it. Walk away with the plan whether or not we work together.',

  ctaPrimaryLabel: 'Get a Free Audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-technology-b2b.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2BIndustryPage() {
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
            { name: 'Technology & B2B Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
