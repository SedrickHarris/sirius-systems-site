import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'professional-services',
  serviceSlug: 'reputation-management',
  hubName:     'Professional Services',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Professional Services',
  metaDescription: 'Professional service firms compete on trust. We build the system that earns reviews after every engagement, responds to every one, and monitors your reputation.',

  eyebrow: 'Professional Services · Reputation Management',

  headline:
    'Professional service firms compete on trust — most let their reputation build by accident',

  subheadline:
    'Prospective clients research your firm before they call. They read reviews, compare ratings, and make a shortlist before you know they exist. The firms that show up with a strong review profile get the call. The ones that do not, do not.',

  heroHighlights: [
    'Automated review requests sent after every closed engagement',
    'Every review responded to — positive and negative, on every platform',
    'Competitor benchmarking so you know where your firm stands',
    'Monitoring across Google, Facebook, Avvo, Lawyers.com, FindLaw, and professional directories',
  ],

  definitionHeadline:
    'What reputation management actually means for a professional practice',

  definition:
    'Reputation management for a professional services firm means running a system that earns reviews consistently after every completed engagement, responds to every review across every platform, and monitors what is being said so nothing gets missed. It is not damage control after a difficult client leaves a negative review — it is the ongoing operation that builds a review profile strong enough to convert a prospective client during their research phase, and strong enough to be cited by AI engines like ChatGPT and Perplexity when someone asks which firms to call.',

  problemHeadline:
    'Where professional service firms lose clients they already earned',

  problems: [
    'The engagement closed well but no review request went out. The client intended to leave one and moved on. That pattern repeats after every matter and your review count stays flat while competitors with a system keep accumulating ratings.',
    'A negative review posted two months ago has no response. Every prospective client who searches your firm name reads it first and wonders if the issue was never resolved — because no one replied.',
    'A competing firm with comparable credentials has four times your review volume. They appear first in local search and on the map pack. Prospects who do not know either firm choose them — not because their work is better, but because their review profile signals more established trust.',
    'Your practice depends on referrals. Referrals research you before they call. When a referred prospect searches your name and finds a thin review profile or no recent activity, you lose a client who already had a reason to hire you.',
  ],

  steps: [
    {
      label: 'Audit your current reputation and competitive position',
      body: 'We review your current rating, review volume, platform coverage, response rate, and recency — then benchmark those numbers against the firms ranking above you in local search and on the map pack. Most professional practices are behind on at least two dimensions. You see exactly where the gaps are before anything changes.',
    },
    {
      label: 'Build the review acquisition system',
      body: 'We configure automated review requests that go out at the right moment after every closed engagement — via SMS or email, to the right platform, timed so the request arrives when the client experience is still fresh. The system runs after every engagement without anyone on your team remembering to send it.',
    },
    {
      label: 'Configure response workflows',
      body: 'Every review gets a response — positive reviews acknowledged, negative reviews addressed professionally and on the record. Responses are drafted in your firm\'s voice and reviewed before they publish, so nothing goes out that could create additional risk in a professional context.',
    },
    {
      label: 'Monitor and report',
      body: 'The system monitors your review profile across Google, Facebook, Avvo, Lawyers.com, FindLaw, and other platforms relevant to your practice type. You receive a regular report showing your rating trajectory, review volume growth, response rate, and how your firm compares to local competitors.',
    },
  ],

  features: [
    'Automated review requests triggered by engagement completion — no manual step required',
    'Multi-platform monitoring across Google, Facebook, Avvo, Lawyers.com, FindLaw, and practice-specific directories',
    'Professionally drafted review responses in your firm\'s voice',
    'Competitor benchmarking updated on a regular cadence',
    'Negative review handling that protects your professional standing',
    'Review volume and rating trajectory reporting',
    'Platform-specific sequencing — Google prioritized for local search impact',
    'Connects to your CRM or intake system to trigger at the right moment',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'Is it appropriate to ask clients for reviews in a professional services context?',
      a: 'Yes — and most clients are willing to leave one when asked at the right moment. The hesitation usually comes from asking in a way that feels transactional or awkward. The system handles timing and channel so the request arrives when the client relationship is in good standing and the experience is recent. Practice-specific considerations, such as attorney ethics rules in certain jurisdictions, are factored into how the request is structured.',
    },
    {
      q: 'What platforms does the reputation system cover for professional service firms?',
      a: 'Google Business Profile is the primary platform because it drives the most local search visibility and map pack placement. Depending on your practice type, the system also covers Facebook, Avvo, Lawyers.com, FindLaw, Martindale, Yelp, and other directories relevant to attorneys, accountants, financial planners, and consultants. We prioritize the platforms where prospective clients in your specific field actually go to research.',
    },
    {
      q: 'How does reputation management differ from review automation?',
      a: 'Review automation is the specific system that sends review requests after every completed engagement and drives consistent review acquisition. Reputation management is the broader operation — it includes review acquisition, response to every review on every platform, monitoring across directories, competitor benchmarking, and ongoing reporting on your reputation health. Review automation is one component of a full reputation management system.',
    },
    {
      q: 'What happens when a negative review is left by a difficult client?',
      a: 'Every negative review gets a professional, on-the-record response. The response acknowledges the concern without confirming details that could create confidentiality or ethical issues, and it demonstrates to every other prospective client reading the profile that the firm takes feedback seriously. A single negative review on a profile with consistent responses and strong volume has far less impact than an unanswered negative review on a thin profile.',
    },
    {
      q: 'How does a stronger review profile connect to local search rankings?',
      a: 'Google uses review volume, rating, recency, and response rate as local search ranking signals. A professional service firm with consistent recent reviews and active responses ranks higher in the local map pack than a firm with comparable credentials and a stale or thin review profile. The reputation system improves the signals Google uses to rank local results — which means more prospective clients find your firm before they find a competitor.',
    },
  ],

  ctaHeadline: 'Your review profile is the first thing a prospective client checks.',

  ctaBody:
    'Before they call, they search. What they find determines whether your firm makes the shortlist. Book a discovery call and we will show you where your reputation stands versus the firms ranking above you — and what it takes to close the gap.',

  ctaPrimaryLabel: 'Book a discovery call',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/professional-services/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/professional-services/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function ProfessionalServicesReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/professional-services/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Professional Services', url: '/industries/professional-services' },
            { name: 'Reputation Management', url: '/industries/professional-services/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/professional-services/reputation-management',
            name:        'Reputation Management for Professional Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
