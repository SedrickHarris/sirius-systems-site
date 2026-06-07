import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'construction-contractors',
  serviceSlug: 'reputation-management',
  hubName:     'Construction & Contractors',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Contractors',
  metaDescription: 'Contractors win bids on trust. We build the review system that earns reviews after every job, responds to every one, and keeps your reputation accurate.',

  eyebrow: 'Construction & Contractors · Reputation Management',

  headline:
    'Contractors lose bids to businesses with better reviews — not better work',

  subheadline:
    'A prospect researches three contractors before calling anyone. What they find in that search determines who gets the call. We build the system that makes sure what they find reflects the quality of your work.',

  heroHighlights: [
    'Automated review requests sent after every completed project',
    'Every review responded to — positive and negative',
    'Competitor benchmarking across Google, Houzz, Angi, and BBB',
    'Monitoring so nothing sits unanswered across any platform',
  ],

  definitionHeadline:
    'What reputation management means for a contractor',

  definition:
    'Reputation management for a contractor means running a system that earns reviews consistently after every completed project, responds to every review on every platform, and monitors what clients and subcontractors are saying so nothing damaging sits unaddressed. It is not damage control after a bad review appears — it is the ongoing operation that builds a review profile credible enough to win bids against competitors who may price similarly but look more trusted online.',

  problemHeadline:
    'Where contractors lose bids they should have won',

  problems: [
    'A prospect searches your company name before calling. A negative review from eight months ago is the first thing they see — unanswered. They call your competitor instead.',
    'You complete a project well, the client is satisfied, and no review ever appears. Asking manually is awkward and inconsistent, so it never happens reliably after every job.',
    'A competitor with comparable quality and similar pricing has forty more reviews and a more active response pattern. They rank higher and get called first — not because they are better, but because they look more established.',
    'You have no visibility into what clients are saying on Houzz, Angi, the BBB, or industry directories unless you manually check each platform. Problems surface late, if at all.',
  ],

  howItWorksHeadline: 'How the reputation system works for contractors',

  steps: [
    {
      label: 'Audit your current review position and benchmark competitors',
      body:  'We pull your current review count, rating, recency, response rate, and platform coverage — then benchmark against the contractors ranking above you in local search. You see exactly where the gaps are before anything changes.',
    },
    {
      label: 'Build the review acquisition system',
      body:  'We configure automated review requests that go out at the right moment after a completed project — via SMS, timed while the client experience is still fresh. The system runs after every job without anyone on your team doing anything manually.',
    },
    {
      label: 'Configure response workflows for every review',
      body:  'Positive reviews get a professional branded response. Negative reviews get a prompt, accountable reply that demonstrates you take feedback seriously. Response drafts are generated automatically and queued before posting — nothing goes out unchecked.',
    },
    {
      label: 'Monitor across every platform and report on momentum',
      body:  'You get a single view of what clients are saying across Google, Houzz, Angi, BBB, and any other platform relevant to your trade. New reviews surface immediately so nothing sits unanswered, and you see review velocity building over time.',
    },
  ],

  featuresHeadline: 'What the system covers',

  features: [
    'Automated review requests via SMS after every completed project',
    'Timing and copy configured for project-based contractor workflows',
    'AI-assisted response drafts for every review — positive and negative',
    'Multi-platform monitoring: Google, Houzz, Angi, BBB, and directories',
    'Competitor benchmarking: volume, rating, recency, and response rate',
    'Review velocity tracking so you see momentum building over time',
    'Escalation alerts for negative reviews so nothing sits unanswered',
    'Monthly reputation summary so you always know where you stand',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'Why do reviews matter so much for contractors winning bids?',
      a: 'Prospects researching contractors typically check three to five businesses before calling anyone. What they find in that search — review count, rating, recency, and whether reviews are responded to — determines who gets the call. A contractor with a consistent review profile looks more established and trustworthy than one with comparable work quality but a sparse or stale online presence, regardless of price.',
    },
    {
      q: 'How do you get contractor clients to leave reviews after a project?',
      a: 'Timing and channel are the variables that determine whether a client leaves a review. A request sent via SMS shortly after project completion — when the experience is fresh and the client is satisfied — gets a significantly higher response rate than a request sent weeks later or via email. We configure timing, channel, and message copy during setup based on your project close process.',
    },
    {
      q: 'What happens when a contractor gets a negative review?',
      a: 'Negative reviews cannot be removed by a third party, and we do not promise otherwise. What we do is respond promptly and professionally — which signals to every prospect reading that review that you engage with feedback rather than ignore it. A well-handled negative review often builds more trust than a page of unresponded five-star ratings, because it shows accountability.',
    },
    {
      q: 'Which review platforms matter most for contractors?',
      a: 'Google is the priority because your rating and review count are visible directly in local search and the map pack. Houzz matters for residential remodelers and custom builders. Angi and the BBB matter for clients doing due diligence on larger projects. The exact platform mix is determined during the audit based on where your clients actually leave reviews and where your competitors are active.',
    },
    {
      q: 'How does reputation management connect to winning more bids?',
      a: 'A stronger review profile improves your local search ranking, which means more prospects find you in the first place. Among the prospects who do find you, a higher review count and active response pattern increase the likelihood they call you rather than a competitor. The reputation system does not replace your estimating or your work quality — it ensures your online presence reflects both accurately.',
    },
  ],

  ctaHeadline:     'See how your review profile compares to the contractors winning bids in your market',
  ctaBody:         'We benchmark your current review position against your top local competitors and show you the gaps before anything changes. No pressure. No invented promises.',
  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/construction-contractors/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/construction-contractors/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ConstructionContractorsReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/construction-contractors/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                       url: '/' },
            { name: 'Industries',                 url: '/industries' },
            { name: 'Construction & Contractors', url: '/industries/construction-contractors' },
            { name: 'Reputation Management',      url: '/industries/construction-contractors/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/construction-contractors/reputation-management',
            name:        'Reputation Management',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
