import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'community-faith-nonprofit',

  metaTitle: 'Automation for Nonprofits & Community Orgs | Sirius Systems',

  metaDescription:
    'Outreach automation, donor follow-up, and communication systems for churches, nonprofits, charities, membership organizations, and mission-driven groups.',

  eyebrow: 'Community, Faith & Nonprofit',

  headline:
    'The Organizations That Stay Consistent Between Campaigns Are the Ones That Retain Donors and Members',

  subheadline:
    'Community and faith-based organizations run on relationships. The ones that grow are not necessarily the ones with the biggest mission — they are the ones that respond to inquiries quickly, follow up with donors and members consistently, and show up in local search when someone is looking for them. We build the operational system that makes consistency possible without requiring more staff hours.',

  heroHighlights: [
    'Donor and member follow-up automation — no contact falls through between campaigns',
    'Inquiry response automation so every inbound message gets acknowledged',
    'Event and re-engagement communication sequences that run on schedule',
    'Google visibility and review systems for organizations people search for locally',
  ],

  problemHeadline: 'Where community organizations lose engagement and momentum',

  problems: [
    'Donor and membership inquiries go unanswered because staff and volunteers are stretched across programs and cannot respond quickly enough.',
    'Follow-up between campaigns is inconsistent or nonexistent. Donors and members who engaged once drift because no system brought them back.',
    'Event attendance and volunteer participation drop when reminders and re-engagement messages depend on someone remembering to send them manually.',
    'The organization has a strong community reputation but almost no Google presence because no system generates reviews or manages visibility online.',
  ],

  systemsHeadline:
    'Outreach and communication automation for mission-driven organizations',

  systemsCopy:
    'The operational gaps — inquiry response, donor follow-up, event reminders, member re-engagement — are the same whether you run a church, a nonprofit, or a community program. These are the six systems that close them without adding headcount.',

  serviceSlugs: [
    'crm-automation',
    'lead-generation-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'appointment-booking-automation',
  ],

  subVerticalsHeadline:
    'Built for the way mission-driven organizations actually operate',

  subVerticalsCopy:
    'The automation work — capturing inquiries, following up with donors and members, sending event reminders, requesting reviews — is operational. It runs around your mission, not instead of it. You do not need to understand the system. You need it to work consistently while your team focuses on the people in front of them.',

  featured: [
    {
      name: 'Churches & Ministries',
      blurb:
        'Visitor follow-up, event communication automation, and Google visibility management for churches and ministries.',
    },
    {
      name: 'Nonprofit Organizations & Charities',
      blurb:
        'Donor follow-up sequences, outreach automation, and CRM systems for nonprofits and charitable organizations.',
    },
    {
      name: 'Community & Membership Organizations',
      blurb:
        'Member communication automation and re-engagement systems for community groups and membership organizations.',
    },
    {
      name: 'Youth Organizations & Programs',
      blurb:
        'Inquiry response and parent communication automation for youth-focused organizations and programs.',
    },
  ],

  compact: [
    {
      name: 'Fundraising & Advocacy Organizations',
      blurb:
        'Donor outreach and campaign follow-up automation for fundraising and advocacy groups.',
    },
    {
      name: 'Faith-Based Schools & Outreach Programs',
      blurb:
        'Inquiry response and enrollment follow-up for faith-based schools and community outreach programs.',
    },
    {
      name: 'Volunteer Organizations',
      blurb:
        'Volunteer inquiry response and communication automation for volunteer-driven organizations.',
    },
    {
      name: 'Civic & Local Associations',
      blurb:
        'Member communication and event reminder automation for civic and local associations.',
    },
    {
      name: 'Food Banks & Rescue Missions',
      blurb:
        'Donor follow-up and volunteer inquiry automation for food banks and rescue missions.',
    },
    {
      name: 'Mentorship & Support Programs',
      blurb:
        'Inquiry response and communication automation for mentorship and support group programs.',
    },
    {
      name: 'Donor-Funded Organizations',
      blurb:
        'Donor follow-up sequences and CRM automation for organizations that depend on recurring donations.',
    },
    {
      name: 'Mission-Based Service Organizations',
      blurb:
        'Outreach automation and CRM systems for mission-driven organizations providing direct community services.',
    },
  ],

  faqs: [
    {
      q: 'Do you work with nonprofits and faith-based organizations?',
      a: 'Yes. The core systems — inquiry response, follow-up automation, CRM, and reputation management — apply to nonprofits, churches, and community organizations the same way they apply to service businesses. The operational gaps are the same: contacts go unanswered, follow-up is inconsistent, and reviews do not reflect the actual community presence.',
    },
    {
      q: 'Can you help with donor and member follow-up automation?',
      a: 'Yes. Automated follow-up sequences can be configured to stay in contact with donors, lapsed members, or volunteers on a defined cadence. The system keeps your organization visible and engaged between campaigns without requiring manual outreach every time.',
    },
    {
      q: 'How does Google visibility work for a nonprofit or church?',
      a: 'People search for local churches, nonprofits, and community organizations before they engage. We build review generation systems that ask real community members for honest Google reviews, and review response workflows so incoming reviews do not go unanswered. The result is a profile that reflects your actual community presence.',
    },
    {
      q: 'Can you automate event reminders and re-engagement communications?',
      a: 'Yes. Reminder sequences for events, volunteer shifts, and recurring programs are a standard part of the system. Re-engagement flows for lapsed donors or members can also be configured to run on a set schedule so contacts do not drift silently.',
    },
    {
      q: 'Do you work with small organizations that have limited staff capacity?',
      a: 'The system is built for organizations where staff are stretched across programs and cannot manage follow-up manually. A small nonprofit and a large church have the same core problem — too many contacts to stay in touch with consistently, and not enough hours to do it by hand. We scope the system to what actually applies to your size and workflow.',
    },
  ],

  ctaHeadline: 'Book a 20-minute audit for your organization.',

  ctaBody:
    "We'll map where donor follow-up, member communication, or online visibility are falling short and show you the order of operations. Walk away with the plan, whether or not we work together.",

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
    images: ['/og/default.webp'],
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
