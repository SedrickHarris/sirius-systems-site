import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'auto-services',
  serviceSlug: 'review-automation',
  hubName:     'Auto Services',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for Auto Shops | Sirius Systems',
  metaDescription: 'Auto shops with more Google reviews win the local pack. We build the system that requests reviews after every job automatically — no manual step required.',

  eyebrow: 'Auto Services · Review Automation',

  headline:
    'Your competitor has more Google reviews than you. That gap widens every week you finish jobs without a system.',

  subheadline:
    'A driver searching for a mechanic sees your shop next to a competitor with three times your review count. They do not know who does better work. They call the shop with more reviews. Review automation closes that gap by sending a request after every completed job — timed to the moment the customer is most likely to respond — without a single manual step from your team.',

  heroHighlights: [
    'Review request sent automatically when the job closes — no team member has to remember',
    'SMS with a direct Google review link — the highest-converting channel for auto shop customers',
    'Timing configured to the job type: same day for repair and detail, next day for body work',
    'AI review responses that acknowledge every review publicly without manual drafting',
  ],

  definitionHeadline:
    'What review automation means for an auto service business',

  definition:
    'Review automation for an auto service business is a system that sends a review request to the customer automatically after a job is completed — triggered by the job close event in your CRM or scheduling tool, timed to when the experience is freshest, and routed to your Google Business Profile by default. For auto shops, the timing is the variable that matters most: a request sent the same day the customer drives away converts at a significantly higher rate than one sent days later when the experience has faded. The system removes the manual ask from your workflow and replaces inconsistent, occasional outreach with a sequence that fires after every job without exception — oil changes, repairs, detail appointments, tire installs, and body work included.',

  problemHeadline:
    'Where auto shops lose the review every satisfied customer intended to leave',

  problems: [
    'The customer drives away happy. No request fires. They intend to leave a review and forget within the hour. The gap between intention and action is not reluctance — it is the absence of a link sent at the right moment. That gap repeats after every job your shop completes without a system.',
    'Your service advisor is moving to the next car the minute a customer walks out. Manually asking for reviews is inconsistent, depends on who is working, and stops entirely when the bay is full. The shops building review count are not relying on anyone to remember — they have a trigger.',
    'A competitor with 180 Google reviews outranks your shop in local search even if your work is better. Review count feeds the prominence signal Google uses to rank map pack results. Every week your competitor completes jobs with a review system and you do not, that gap compounds.',
    'A customer searches for a mechanic and reads the reviews before calling. In the auto repair industry, distrust of pricing and unnecessary work is the primary concern. A shop with recent, specific reviews mentioning honest estimates and fair pricing converts that skeptic. A shop with few reviews or stale ones does not.',
  ],

  steps: [
    {
      label: 'Configure the trigger and timing by job type',
      body: 'We connect the review request to the job completion event in your CRM or scheduling system. Timing is configured to the job type: same day for general repair, detailing, and tire installs; next day for body work and major jobs where the customer needs to drive the vehicle before the experience feels complete. The request fires automatically at the configured time with no action from your team.',
    },
    {
      label: 'Send an SMS with your direct Google review link',
      body: 'The review request goes out by text — the highest-converting channel for auto service customers. The message is written in your shop\'s voice and includes a direct link to your Google Business Profile review form. No login required, no navigation required: the customer taps, types, and posts. A secondary email sequence follows for customers who do not respond by text.',
    },
    {
      label: 'Close the loop with AI review responses',
      body: 'Every review that comes in — positive or negative — receives a response. We configure AI review responses that acknowledge each review publicly in your shop\'s tone. Positive reviews get a thank-you that reinforces the specific service mentioned. Negative reviews get a professional response that demonstrates you take feedback seriously. Shops that respond to every review within 24 hours see measurably more appointments from Google Maps.',
    },
  ],

  features: [
    'Job-completion trigger connected to your CRM or scheduling tool — no manual step required',
    'SMS review request with a direct Google Business Profile review link',
    'Timing configured by job type: general repair, detailing, body work, tire install',
    'Email follow-up sequence for customers who do not respond by text',
    'AI review responses drafted and posted for every incoming review',
    'Negative review intercept — flagged for shop review before response is posted',
    'Review request templates written in your shop\'s voice, not a generic platform default',
    'Consistent review flow that builds map pack prominence over time',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does review automation do for an auto repair shop?',
      a: 'Review automation for an auto repair shop sends a review request to the customer automatically after a job closes — triggered by the job completion event in your CRM or scheduling tool, timed to when the experience is freshest, and routed to your Google Business Profile by default. It replaces inconsistent manual asking with a system that fires after every job without exception, so your review count grows at the same rate on a busy Friday as it does on a slow Tuesday.',
    },
    {
      q: 'When should an auto shop send a review request after a job?',
      a: 'The highest-converting moment is the same day the job closes — within a few hours of the customer driving away while the experience is still immediate. For body work and major repairs, the following day works better because the customer needs to drive the vehicle before the result feels real. For detailing and tire installs, the same afternoon typically converts best. The system is configured to the job type so timing is appropriate without anyone on your team deciding case by case.',
    },
    {
      q: 'How do Google reviews affect where an auto shop ranks in local search?',
      a: 'Google uses review volume, rating, recency, and content as inputs to local search ranking. A shop with more recent reviews consistently outranks a shop with a better rating but fewer reviews in the local map pack. Review content that mentions specific services — brake repair, oil change, transmission — also signals to Google what the shop specializes in, which increases visibility for those specific searches. As Google\'s AI Mode becomes more central to how customers find local businesses, review content is increasingly used to determine which shops appear in AI-generated local summaries.',
    },
    {
      q: 'Does review automation work the same way for detailers and body shops as it does for general repair shops?',
      a: 'The system is the same — the timing configuration varies by shop type. Detailers typically send the review request the same afternoon the job wraps. Body shops and collision centers send it the day after pickup because the customer needs to drive the repaired vehicle before the result is fully appreciated. Tire shops send it day of installation. Mobile mechanics typically send it within the hour. The trigger, the message, and the Google link are consistent — the timing window is configured to the job cycle.',
    },
    {
      q: 'Should an auto shop respond to every Google review, and can that be automated?',
      a: 'Yes, and yes. Shops that respond to reviews within 24 hours see measurably more appointments from Google Maps. A response to a positive review reinforces the experience for customers reading the profile. A professional response to a negative review demonstrates that the shop takes feedback seriously — which can be more persuasive to a prospective customer than a flawless rating with no engagement. AI review responses handle the drafting so every review receives a reply in your shop\'s tone without a team member writing each one manually. Negative reviews are flagged for your review before the response is posted.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/auto-services/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/auto-services/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function AutoServicesReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/auto-services/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',             url: '/' },
            { name: 'Industries',       url: '/industries' },
            { name: 'Auto Services',    url: '/industries/auto-services' },
            { name: 'Review Automation', url: '/industries/auto-services/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/auto-services/review-automation',
            name:        'Review Automation for Auto Services',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
