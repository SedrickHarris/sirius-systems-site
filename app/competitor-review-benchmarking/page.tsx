import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'competitor-review-benchmarking',
  metaTitle:
    'Competitor Review Benchmarking | Sirius Systems',
  metaDescription:
    'See how your review volume, rating, recency, and response rate compare to your top local competitors — and get a gap analysis that shows where to push next.',
  eyebrow: 'Competitor Benchmarking',
  headline: 'Most businesses guess at their competitive review position — this shows you the numbers',
  subheadline:
    'Your review profile does not exist in a vacuum. It competes against every other business Google shows when someone searches for what you offer. Competitor review benchmarking tells you exactly where you stand on volume, rating, recency, and response rate — and what it would take to move into a leading position.',
  glyphVariant: 'grid' as const,
  definition:
    'Competitor review benchmarking for local service businesses means systematically comparing your Google review profile against the businesses ranking for your primary service terms — measuring volume, rating, recency, and response rate side by side. The output is a gap analysis that maps directly to your reputation system: where to accelerate acquisition, where recency is the vulnerability, and which competitors are within reach.',
  problems: [
    'You do not know whether your review count and rating are competitive or whether you are falling behind the businesses Google is already showing your customers.',
    'You are investing in review acquisition without knowing how much ground you need to make up — no target, no baseline, just an absolute number with no context.',
    'A competitor is outranking you in local search and you do not know whether reviews are the reason or where the gap actually lives.',
    'Progress has no measure. Without a benchmark, you cannot tell whether your reputation system is closing the gap or whether competitors are pulling ahead faster than you are catching up.',
  ],
  steps: [
    {
      label: 'Identify your real competitors',
      body: 'We identify the businesses actually competing for your customers in local search: not just the names you know, but the ones ranking in the local pack for your primary service terms. These are the profiles we benchmark against.',
    },
    {
      label: 'Pull the comparison data',
      body: 'We collect review volume, average rating, review recency, and response rate for each competitor across Google and relevant platforms. You get a side-by-side view of where you stand on each dimension.',
    },
    {
      label: 'Identify the gaps and priorities',
      body: "We translate the data into a clear gap analysis: which competitors are ahead on volume, which have better recency, which are responding and which aren't. Each gap maps to a specific action your reputation system should address.",
    },
    {
      label: 'Set benchmarks and track progress',
      body: 'We establish the target numbers: what review volume, rating, and response rate would put you in a leading position in your market: and configure tracking so you can see your progress against those benchmarks over time.',
    },
  ],
  features: [
    'Competitor identification: the businesses actually ranking for your service terms',
    'Review volume comparison: your count versus theirs across platforms',
    'Rating comparison: average star rating benchmarked against local competitors',
    'Recency analysis: how recently each competitor is earning reviews',
    'Response rate comparison: who is responding and how quickly',
    "Gap analysis report: prioritized list of where you're behind and by how much",
    'Target benchmarks: the numbers that would put you in a leading local position',
    'Progress tracking: monitor your position relative to competitors over time',
  ],
  outcomes: [
    'You know exactly where your review profile stands relative to the businesses competing for your customers.',
    'Your review acquisition effort is sized correctly: you know the target, not just the direction.',
    'You can see whether reviews are a factor in a competitor outranking you in local search.',
    'Progress has a baseline: you can measure whether your reputation system is closing the gap.',
    'Competitors who are vulnerable on recency or response rate become visible opportunities.',
  ],
  relatedSlugs: [
    'reputation-management',
    'review-automation',
    'local-seo-aeo',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'construction-contractors'],
  faqs: [
    {
      q: 'What is competitor review benchmarking?',
      a: 'It means comparing your review profile: volume, rating, recency, and response rate: against the businesses competing for the same customers in local search. It gives you a real picture of your competitive position instead of just an absolute number.',
    },
    {
      q: 'Which competitors do you benchmark against?',
      a: "We identify the businesses actually ranking in the local pack for your primary service terms: not just the names you're aware of. The relevant competitors are the ones Google is already showing customers when they search for what you offer.",
    },
    {
      q: "How is this different from just checking my competitors' Google profiles?",
      a: "Manual checking gives you a snapshot. Benchmarking gives you a structured comparison across multiple dimensions: volume, rating, recency, response rate: with a gap analysis that translates into specific actions, plus tracking so you can see whether you're closing the gap over time.",
    },
    {
      q: 'What do I do with the benchmarking data?',
      a: "The gap analysis maps directly to your reputation system: if you're behind on volume, review acquisition cadence increases; if recency is the issue, the trigger timing tightens; if response rate is low, the response workflow gets prioritized. The data tells you where to push.",
    },
    {
      q: 'How often should I benchmark against competitors?',
      a: 'Quarterly is a reasonable cadence for most businesses: frequent enough to catch meaningful shifts, not so frequent that noise obscures the signal. We configure the tracking so the comparison updates automatically rather than requiring a manual pull each time.',
    },
    {
      q: 'How many Google reviews do I need to be competitive in my market?',
      a: 'It depends entirely on your specific competitors in your specific location and service category. There is no universal number. Benchmarking tells you what the leading businesses in your local pack actually have — which is the only number that matters for your market. The goal is not an arbitrary count; it is a position relative to the businesses competing for the same customers.',
    },
    {
      q: 'Can benchmarking tell me why a competitor is outranking me?',
      a: 'Reviews are one factor in local search ranking, not the only one. Benchmarking shows you whether your review profile is a liability compared to competitors who are outranking you — volume deficit, rating gap, recency lag, or unanswered reviews. If the review profile looks comparable and the ranking gap persists, that points to other factors outside the reputation system.',
    },
    {
      q: 'Does this work for businesses competing in multiple service categories or locations?',
      a: 'Yes. We benchmark against the competitors ranking for each primary service term and location you want to compete in. A business with multiple service lines or a service-area operation covering multiple cities gets a benchmark set that reflects each competitive context, not a single aggregate that obscures where the real gaps are.',
    },
    {
      q: 'How does competitor benchmarking connect to the rest of the reputation system?',
      a: 'Benchmarking is the diagnostic layer that tells the reputation system where to focus. If volume is the gap, review acquisition cadence increases. If recency is the issue, trigger timing tightens. If response rate is low, the response workflow gets prioritized. Without the benchmark, the system runs blind. With it, every action has a specific target it is working toward.',
    },
  ],
}

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: `/${PAGE.slug}`,
    images: [{ url: '/images/og/competitor-review-benchmarking.webp', alt: PAGE.metaTitle }],
  },
}

export default function CompetitorReviewBenchmarkingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.metaTitle,
            description: PAGE.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            {
              name: 'Competitor Review Benchmarking',
              url: `/${PAGE.slug}`,
            },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Competitor Review Benchmarking',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
