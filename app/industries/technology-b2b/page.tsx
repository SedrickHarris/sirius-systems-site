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
    'The Lead That Sits Unanswered Over a Weekend Is Already Talking to a Competitor',

  subheadline:
    'B2B technology sales cycles are longer, which makes the first-response window more expensive to lose. The firms that close more business are the ones that respond within minutes, follow up across multiple touches, and have a review record that builds trust before the discovery call even happens. We build the pipeline and reputation system that makes that the default, not the exception.',

  heroHighlights: [
    'Instant lead response — no inbound inquiry sits unanswered over nights or weekends',
    'Multi-touch follow-up sequences built for longer B2B sales cycles',
    'CRM pipeline automation to keep every prospect organized and progressing',
    'Review generation and reputation management to build pre-sale credibility',
  ],

  problemHeadline: 'Where technology and B2B service firms lose deals',

  problems: [
    'Inbound leads from your website or campaigns go unanswered for hours or over weekends. By the time someone follows up, the prospect has already had a discovery call with a competitor.',
    'Prospects that do not convert on the first contact fall out of the pipeline because there is no automated follow-up sequence moving them through a longer sales cycle.',
    'The CRM has contacts in it but no automated sequences. Pipeline movement depends on a salesperson remembering to follow up — which means it does not happen consistently.',
    'Satisfied clients who would leave a positive review are never asked. The Google profile is thinner than the quality of the work warrants, which costs credibility in pre-sale research.',
  ],

  systemsHeadline:
    'Lead, pipeline, and reputation automation for technology and B2B firms',

  systemsCopy:
    'B2B pipelines have three automation gaps most firms leave open: the first-response window, the multi-touch follow-up sequence, and the post-project review request. These are the six systems that close all three.',

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
    'The automation work — capturing and responding to inbound leads, running follow-up sequences, keeping the CRM current, requesting reviews after engagements — is operational. It runs alongside your delivery work without requiring your team to manage it manually.',

  featured: [
    {
      name: 'IT Consulting & Managed Service Providers',
      blurb:
        'Lead follow-up automation, CRM pipeline management, and review systems for IT consulting and MSP businesses.',
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
      name: 'Compliance Technology Firms',
      blurb:
        'Lead nurture and review systems for compliance and regulatory technology businesses.',
    },
    {
      name: 'B2B Lead Generation Companies',
      blurb:
        'CRM automation and review systems for B2B lead generation service providers.',
    },
    {
      name: 'Help Desk & Technical Support',
      blurb:
        'Inquiry response and review generation for help desk and technical support providers.',
    },
    {
      name: 'Network Support Companies',
      blurb:
        'Lead follow-up and reputation management for network support and IT infrastructure firms.',
    },
    {
      name: 'Workflow Automation Consultants',
      blurb:
        'Lead capture and follow-up automation for workflow and process automation consulting businesses.',
    },
  ],

  faqs: [
    {
      q: 'What types of technology and B2B businesses do you work with?',
      a: 'We work with IT consulting firms, MSPs, SaaS companies, software development firms, AI agencies, cybersecurity companies, and other B2B service businesses. If your business generates inbound leads and depends on a pipeline of prospects moving toward a sale, the system applies.',
    },
    {
      q: 'How does lead follow-up automation work for a longer B2B sales cycle?',
      a: 'The follow-up sequences are configured around your sales cycle length and typical buyer journey. Rather than a single follow-up, the system sends a multi-touch sequence across email and SMS on a defined schedule — staying in contact until the prospect responds, books a call, or opts out. No manual tracking required.',
    },
    {
      q: 'Can you work with the CRM we already have?',
      a: 'Integration capability depends on which CRM and tools you currently use. We evaluate your stack during onboarding and recommend the best path — whether that is integrating with your existing platform or moving to a better fit. We confirm compatibility before any build begins.',
    },
    {
      q: 'How does review generation work for a B2B services firm?',
      a: 'After a project milestone, contract renewal, or completed engagement, an automated follow-up asks the client to leave a Google review. For B2B firms, timing and messaging are configured around your client relationship rhythm. The system requests reviews from real clients — it does not fabricate them.',
    },
    {
      q: 'Do you work with solo consultants or only larger technology firms?',
      a: 'Both. The lead follow-up, CRM, and reputation systems scale from a solo consultant to a multi-person firm. The scope of the build depends on the complexity of your pipeline and the number of contacts being managed.',
    },
  ],

  ctaHeadline: 'Book a 20-minute pipeline audit for your technology or B2B firm.',

  ctaBody:
    "We'll map where leads, follow-up, or client reviews are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.",

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
