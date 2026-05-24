import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'community-faith-nonprofit',
  metaTitle: 'Nonprofit, Church & Community Organization Automation | Sirius Systems',
  metaDescription:
    'Outreach automation, donor follow-up, and communication systems for churches, nonprofits, charities, membership organizations, and mission-driven businesses.',
  eyebrow: 'Community, Faith & Nonprofit',
  headline: 'The System That Keeps Your Mission Moving Forward',
  subheadline:
    'Community organizations and faith-based businesses run on relationships and communication. The ones that grow are the ones with consistent outreach, fast inquiry responses, and systems that keep donors, members, and volunteers engaged.',
  heroHighlights: [
    'Outreach and follow-up automation for donors, members, and volunteers',
    'Inquiry response automation so no contact goes unanswered',
    'Communication sequences for events, campaigns, and re-engagement',
    'Reputation management and review systems for community visibility',
  ],
  problemHeadline: 'Where community organizations lose engagement and momentum',
  problems: [
    'Donor and membership inquiries go unanswered because staff and volunteers are stretched thin and cannot respond quickly.',
    'Outreach and follow-up happen inconsistently because there is no automated system keeping contacts engaged between campaigns.',
    'Event attendance and volunteer participation drop because reminders and re-engagement communications are sent manually or not at all.',
    'Your organization has a strong community reputation but almost no Google presence because no one has a system to generate reviews or manage visibility.',
  ],
  systemsHeadline:
    'The automation stack built for community and mission-driven organizations',
  serviceSlugs: [
    'crm-automation',
    'lead-generation-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'appointment-booking-automation',
  ],
  subVerticalsHeadline: 'Organization types we work with',
  featured: [
    { name: 'Churches & Ministries', blurb: 'Visitor follow-up, event communication, and online reputation management for churches and ministries.' },
    { name: 'Nonprofit Organizations & Charities', blurb: 'Donor follow-up, outreach automation, and CRM systems for nonprofits and charities.' },
    { name: 'Community & Membership Organizations', blurb: 'Member communication automation and engagement systems for community and membership groups.' },
    { name: 'Youth Organizations & Programs', blurb: 'Inquiry follow-up and communication automation for youth-focused organizations.' },
    { name: 'Fundraising & Advocacy Organizations', blurb: 'Donor outreach and campaign follow-up automation for fundraising and advocacy groups.' },
  ],
  compact: [
    { name: 'Faith-Based Schools & Outreach', blurb: 'Inquiry response and enrollment follow-up for faith-based schools and outreach programs.' },
    { name: 'Volunteer Organizations', blurb: 'Volunteer inquiry response and communication automation for volunteer-driven organizations.' },
    { name: 'Civic & Local Associations', blurb: 'Member communication and event automation for civic and local associations.' },
    { name: 'Food Banks & Rescue Missions', blurb: 'Donor follow-up and volunteer inquiry automation for food banks and rescue missions.' },
    { name: 'Mentorship & Support Groups', blurb: 'Inquiry response and communication automation for mentorship and support programs.' },
    { name: 'Donor-Based Organizations', blurb: 'Donor follow-up sequences and CRM automation for donation-funded organizations.' },
    { name: 'Coaching Communities', blurb: 'Member inquiry response and enrollment automation for coaching and community programs.' },
    { name: 'Mission-Based Organizations', blurb: 'Outreach automation and CRM systems for mission-driven businesses and organizations.' },
  ],
  faqs: [
    {
      q: 'Do you work with nonprofits and faith-based organizations?',
      a: 'Yes. The core systems — inquiry response, follow-up automation, CRM, and reputation management — apply to nonprofits, churches, and community organizations just as they do to for-profit businesses.',
    },
    {
      q: 'Can you help with donor outreach and follow-up automation?',
      a: 'Yes. Automated follow-up sequences can be configured to stay in contact with donors, lapsed members, or volunteers on a defined cadence. The system keeps your organization visible and engaged without requiring manual outreach every time.',
    },
    {
      q: 'How does reputation management work for a nonprofit or church?',
      a: 'Google visibility matters for community organizations too — people search for local churches, charities, and nonprofits before they engage. We build review generation and response systems that reflect your organization honestly and professionally.',
    },
    // TODO: confirm with client which platforms they use for events and volunteer management
    {
      q: 'Can you automate event registration or volunteer sign-ups?',
      a: 'Automated booking and registration sequences are part of the system. Specific integration capability depends on the tools your organization currently uses. We confirm compatibility during onboarding.',
    },
    // TODO: confirm with client on pricing and package structure for nonprofit/community orgs
    {
      q: 'Do you work with small organizations on limited budgets?',
      a: 'We scope systems around what your organization actually needs. Get in touch and we will walk through what makes sense for your size and goals. We confirm compatibility during onboarding.',
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

export default function CommunityFaithNonprofitIndustryPage() {
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
            { name: 'Community, Faith & Nonprofit', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
