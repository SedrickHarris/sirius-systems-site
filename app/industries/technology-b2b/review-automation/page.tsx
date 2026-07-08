import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'review-automation',
  hubName:     'Technology & B2B Services',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for IT Companies and MSPs',
  metaDescription: 'IT firms and MSPs lose prospects before the first call because their review profile is thin. We build the automation that earns reviews after every engagement.',

  eyebrow: 'Technology & B2B Services · Review Automation',

  headline:
    'IT companies and MSPs lose prospects before the first call — your review profile is the reason',

  subheadline:
    'A buying committee researching managed service providers checks your Google profile, scans Clutch and G2, and reads what past clients said about your last engagement — before they ever contact your sales team. By the time a prospect reaches out, seventy to eighty percent of their decision is already made. If your review profile is thin, the decision is already made against you. Review automation fixes that before the next prospect starts their research.',

  heroHighlights: [
    'Automated review requests triggered at project milestones, ticket resolution, and contract renewal — not generic transaction points',
    'Multi-platform coverage across Google, Clutch, G2, Trustpilot, and Capterra — every platform a B2B buyer checks',
    'Satisfied clients receive a request while the engagement is still fresh — before the feeling fades and the follow-up never happens',
    'CRM and PSA-connected workflows — review requests fire from the systems your team already uses',
  ],

  definitionHeadline:
    'What review automation means for a B2B technology firm or managed service provider',

  definition:
    'Review automation for an IT company or MSP means running a system that sends review requests to clients at the right moment in the engagement lifecycle — after a project closes, after a ticket is marked resolved, after a contract renews — without a team member initiating it manually. The system triggers from your CRM or PSA, sends a personalized request to the right contact, follows up if there is no response, and routes the result to the platform most relevant to your buyer: Google for local search visibility, Clutch or G2 for B2B due diligence, Trustpilot or Capterra for broader enterprise trust signals.',

  problemHeadline:
    'Where IT firms and MSPs lose reviews they already earned',

  problems: [
    'A client wraps a six-week infrastructure project satisfied with the outcome. Your team is already on the next engagement. The review request never goes out. The client intended to post one and moved on. That pattern repeats after every project and your Clutch and Google profiles stay thin while a competing firm with an automated post-engagement sequence keeps accumulating the reviews that show up in every prospect research session.',
    'A technician closes a support ticket and the client responds with thanks. Nobody has a system for turning that moment into a review request. The satisfaction is there. The process is not.',
    'A prospect compares two IT firms before scheduling a discovery call. One has forty-three reviews across Google and Clutch with a consistent pattern of responses. The other has nine. The prospect schedules with the first firm. Your team never knew the research happened.',
    'A contract renews after a strong year. The relationship is at its highest point. No review request fires. Three months later, the client has moved on mentally, the timing is awkward to ask, and the opportunity is gone.',
  ],

  howItWorksHeadline: 'How review automation works for a technology firm or MSP',

  steps: [
    {
      label: 'Connect to your delivery system',
      body: 'The automation connects to your CRM, PSA, or project management tool — whichever system your team already uses to track project status, ticket resolution, and contract milestones. No separate tool to maintain. Review requests originate from the data your team is already recording.',
    },
    {
      label: 'Requests fire at the right moment',
      body: 'When a project closes, a ticket is marked resolved, or a contract renews, the system sends a personalized review request to the appropriate client contact. Timing is configured to match the natural rhythm of your engagement model — not a generic delay after a transaction.',
    },
    {
      label: 'Multi-platform routing toward your buyers',
      body: 'Requests direct clients toward the review platform most relevant to your buyer: Google for local search visibility, Clutch or G2 for B2B procurement research, Trustpilot or Capterra for enterprise trust signals. The routing is configured during setup based on where your specific prospects do their due diligence.',
    },
    {
      label: 'Monitoring and response across every platform',
      body: 'Every review that lands — on any platform — triggers a notification so your team can respond before anything sits unanswered. An unanswered review on a B2B platform during a prospect research session sends the wrong signal to a buying committee. The system makes sure that never happens.',
    },
  ],

  featuresHeadline: 'What the review automation system covers',

  features: [
    'Milestone-triggered review requests — project close, ticket resolution, contract renewal, onboarding handoff',
    'Personalized request messages configured in your firm\'s voice and cadence',
    'Follow-up sequences for non-responders, configured for B2B relationship timing',
    'Multi-platform routing toward Google, Clutch, G2, Trustpilot, and Capterra',
    'CRM and PSA integration so review requests originate from your existing delivery systems',
    'Real-time monitoring across every review platform so nothing sits unanswered',
    'Response coverage — every review on every platform acknowledged and addressed',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'competitor-review-benchmarking',
    'google-business-profile-optimization',
  ],

  faqs: [
    {
      q: 'Do IT companies and MSPs actually need review automation?',
      a: 'Yes. B2B buyers check review platforms at every stage of their decision — before building a shortlist, during evaluation, and before final selection. The firms with a strong, consistently updated profile get included in that research. The ones with a thin profile or no recent reviews get passed over before the first conversation. Most IT firms and MSPs have satisfied clients and no system for turning that satisfaction into a visible review profile. Review automation is how you fix that without adding a manual process to a team that is already in delivery.',
    },
    {
      q: 'How does review automation work for a B2B technology firm?',
      a: 'The system connects to your CRM or PSA and fires review requests at defined engagement milestones — project completion, ticket marked resolved, contract renewal, or onboarding handoff. A personalized request goes to the right client contact, directing them to the review platform most relevant to your buyers: Google for local search visibility, Clutch or G2 for B2B procurement research, Trustpilot or Capterra for enterprise trust signals. If the client does not respond, a follow-up sequence continues reaching out on a cadence configured for a B2B relationship.',
    },
    {
      q: 'Where do B2B buyers check reviews before choosing an IT firm or MSP?',
      a: 'B2B buyers typically check Google Business Profile for local firms, Clutch and Goodfirms for project-based technology work, G2 and Capterra for SaaS and software vendors, and Trustpilot for broader service credibility. AI tools like ChatGPT and Perplexity are increasingly surfacing vendors from established profiles on these platforms when answering questions about which IT firms or MSPs to consider. A review automation system routes client requests toward the platforms where your specific buyers are doing their research.',
    },
    {
      q: 'Can review automation connect to our existing CRM or PSA?',
      a: 'We evaluate your existing stack during onboarding and recommend the best path — whether that is integrating with your current platform or connecting through an automation layer. We confirm compatibility before any build begins and configure triggers to match the way your team already tracks project status and engagement milestones.',
    },
    {
      q: 'How is review automation for a B2B technology firm different from a consumer business?',
      a: 'Consumer review automation is typically triggered by a single transaction and sent immediately. B2B review automation for a technology firm is configured around the delivery lifecycle — which is longer, involves multiple contacts, and has specific milestones that signal the right moment to ask. The request is more formal, the relationship context matters, and the platform routing is more specific because a B2B buying committee checks different platforms than a consumer would.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2BReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'Review Automation',         url: '/industries/technology-b2b/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/review-automation',
            name:        'Review Automation for IT Companies and MSPs',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
