import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'technology-b2b',
  metaTitle: 'Technology & B2B Services Automation | Sirius Systems',
  metaDescription:
    'Lead nurture automation, CRM integration, and review systems for IT firms, MSPs, SaaS companies, AI agencies, and B2B service businesses.',
  eyebrow: 'Technology & B2B Services',
  headline: 'The System That Turns B2B Inquiries Into Closed Clients',
  subheadline:
    'B2B technology and service sales cycles are longer and the stakes are higher. The firms that grow are the ones with the fastest lead response, the most consistent follow-up, and a review record that builds trust before the first call.',
  heroHighlights: [
    'Instant lead response so no inquiry sits unanswered over a weekend',
    'Multi-touch follow-up sequences built for longer B2B sales cycles',
    'CRM automation to keep every prospect organized and progressing',
    'Review generation and reputation management to build pre-sale trust',
  ],
  problemHeadline: 'Where technology and B2B service firms lose deals',
  problems: [
    'Inbound leads from your website or campaigns go unanswered for hours or days, and by the time someone follows up the prospect has already talked to a competitor.',
    'There is no consistent follow-up system, so prospects that do not convert on the first contact are lost instead of nurtured through a longer sales cycle.',
    'Your CRM has contacts in it but no automated sequences moving those contacts through a defined pipeline.',
    'You have satisfied clients who would leave a positive review but no system that asks them at the right moment, so your Google presence is thinner than it should be.',
  ],
  systemsHeadline: 'The automation stack built for technology and B2B services',
  serviceSlugs: [
    'lead-generation-automation',
    'crm-automation',
    'ai-chatbots',
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
  ],
  subVerticalsHeadline: 'Technology and B2B firm types we work with',
  featured: [
    { name: 'IT Consulting & Managed Service Providers', blurb: 'Lead follow-up automation and review systems for IT consulting and MSP businesses.' },
    { name: 'Cybersecurity Companies', blurb: 'Inquiry response and CRM automation for cybersecurity service providers.' },
    { name: 'SaaS & Software Development Firms', blurb: 'Lead nurture and follow-up automation for SaaS companies and software development firms.' },
    { name: 'AI Automation Agencies', blurb: 'CRM automation and reputation management for AI automation agency businesses.' },
    { name: 'CRM & Business Automation Consultants', blurb: 'Lead follow-up and review systems for CRM and automation consulting firms.' },
  ],
  compact: [
    { name: 'Cloud Service Providers', blurb: 'Inquiry response and follow-up automation for cloud services businesses.' },
    { name: 'App Development Firms', blurb: 'Lead nurture and CRM automation for mobile and web app development companies.' },
    { name: 'Data Analytics Firms', blurb: 'Lead follow-up and reputation management for data analytics service providers.' },
    { name: 'Digital Transformation Consultants', blurb: 'Inquiry response and follow-up automation for digital transformation consulting firms.' },
    { name: 'Web Hosting Companies', blurb: 'Customer follow-up and review systems for web hosting providers.' },
    { name: 'Call Center & Virtual Assistant Services', blurb: 'Lead capture and follow-up automation for call center and VA service businesses.' },
    { name: 'B2B Lead Generation Companies', blurb: 'CRM automation and review systems for B2B lead generation service providers.' },
    { name: 'Business Process Outsourcing', blurb: 'Lead nurture and follow-up automation for BPO service companies.' },
    { name: 'Telecom Services', blurb: 'Inquiry response and customer follow-up for B2B telecom service providers.' },
    { name: 'Systems Integration Companies', blurb: 'Lead follow-up and CRM automation for systems integration firms.' },
    { name: 'Compliance Technology Firms', blurb: 'Lead nurture and review systems for compliance and regulatory technology businesses.' },
    { name: 'Help Desk & Technical Support', blurb: 'Inquiry response and review generation for help desk and technical support providers.' },
    { name: 'Network Support Companies', blurb: 'Lead follow-up and reputation management for network support and IT infrastructure firms.' },
    { name: 'Database Management Companies', blurb: 'CRM automation and review systems for database management service providers.' },
    { name: 'Workflow Automation Consultants', blurb: 'Lead capture and follow-up automation for workflow automation consulting businesses.' },
  ],
  faqs: [
    {
      q: 'What types of technology and B2B businesses do you work with?',
      a: 'We work with IT consulting firms, MSPs, SaaS companies, software development firms, AI agencies, and other B2B service businesses. If your business generates leads online and depends on a pipeline of prospects moving toward a sale, the system applies.',
    },
    {
      q: 'How does lead follow-up automation work for a longer B2B sales cycle?',
      a: 'The follow-up sequences are configured around your sales cycle length and buyer journey. Rather than a single follow-up, the system sends a multi-touch sequence across text and email on a defined schedule — staying in contact until the prospect responds, books a call, or opts out.',
    },
    // TODO: confirm with client which CRM they use
    {
      q: 'Can you integrate with our existing CRM?',
      a: 'Integration capability depends on which CRM and tools you currently use. We evaluate your stack during onboarding and recommend the best path — whether that is integrating with what you have or moving to a better-fit platform. We confirm compatibility during onboarding.',
    },
    {
      q: 'How does review generation work for a B2B services firm?',
      a: 'After a project milestone or contract renewal, an automated follow-up asks the client to leave a Google review. For B2B firms, timing and messaging are configured around your client relationship rhythm. The system requests reviews from real clients — it does not fabricate them.',
    },
    {
      q: 'Do you work with solo consultants or only larger firms?',
      a: 'Both. The lead follow-up, CRM, and reputation systems scale from a solo consultant to a multi-person firm. The scope of the build depends on the complexity of your pipeline and the number of contacts being managed.',
    },
  ],
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
