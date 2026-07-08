import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'review-automation',
  hubName:     'Hospitality & Events',
  serviceName: 'Review Automation',

  metaTitle:       'Review Automation for Restaurants & Event Venues',
  metaDescription: 'Unhappy guests review without being asked. Satisfied ones need the prompt. We build the system that requests reviews after every service — automatically.',

  eyebrow: 'Hospitality & Events · Review Automation',

  headline:
    'Dissatisfied guests leave reviews without being asked. Satisfied ones need a prompt that most hospitality businesses never send.',

  subheadline:
    'A diner finishes a great meal and moves on. A couple leaves their wedding reception on a high and spends the next week unpacking boxes. Without a review request sent at the right moment after each experience, that satisfaction stays private — and your review profile reflects the exceptions, not the norm. Review automation closes that gap after every service, every event, every stay.',

  heroHighlights: [
    'Review request fires from the trigger event — POS close, post-checkout, or post-event — automatically',
    'Timing configured by sub-vertical: 2 hours for dining, 24–48 hours for events and venues, 6–8 hours for hotels',
    'SMS delivery to the right platform — Google, Yelp, TripAdvisor, The Knot, or WeddingWire by business type',
    'AI review responses that acknowledge every incoming review without manual drafting',
  ],

  definitionHeadline:
    'What review automation means for a restaurant, venue, or hospitality business',

  definition:
    'Review automation for a hospitality or events business is a system that sends a review request to the guest automatically after every service interaction — triggered by the relevant event in your POS, CRM, or booking system, timed to the window when the experience is freshest for your specific business type, and routed to the platform that matters most for your audience. For restaurants that is Google and Yelp within a few hours of the meal. For hotels it is Google and TripAdvisor within 24 hours of checkout. For wedding venues and event businesses it is Google and The Knot or WeddingWire within 48 hours of the event. The system replaces inconsistent manual outreach — which depends on staff remembering — with a sequence that fires after every service without exception.',

  problemHeadline:
    'Where hospitality and events businesses lose reviews they already earned',

  problems: [
    'The dining room was full on Saturday. Guests were happy, tipping well, telling the server it was the best meal they had had in months. Sunday morning your Google profile has zero new reviews. No request went out. The guests who might have posted moved on the moment they walked out the door.',
    'A wedding couple left the reception on the highest night of their year. Two days later they are unpacking, answering messages, and returning to work. The review they fully intended to write never happens because no request arrived while the memory was still immediate and the emotion was still present.',
    'Your team asks for reviews when they remember to — which means on slow nights, not on busy ones. The guests who had the best experiences on your most successful services are the ones least likely to be asked because your staff was focused on delivering, not on follow-up.',
    'A competitor with twice your review count ranks above you in local search for your same category and neighborhood. They are not delivering a better experience. They have a system that asks after every cover, every event, every checkout. You do not — and the gap compounds every week.',
  ],

  steps: [
    {
      label: 'Connect the trigger to the right event in your stack',
      body: 'We connect the review request to the service completion event in your POS, reservation system, or CRM. For restaurants the trigger is the closed check. For hotels it is the checkout record from your property management system. For event venues and wedding businesses it is the event date in your booking system. The request fires at the configured delay — 2 hours for dining, 6–8 hours for hotel checkout, 48 hours for events — with no action required from your team.',
    },
    {
      label: 'Send an SMS request to the right platform for your business type',
      body: 'The review request goes out by text — the highest-converting channel for hospitality guests across every sub-vertical. Routing is configured by business type: Google and Yelp for restaurants, Google and TripAdvisor for hotels, Google and The Knot or WeddingWire for wedding venues and event spaces. The message is written in your voice. A follow-up email sequence goes out for guests who do not respond by text.',
    },
    {
      label: 'Close the loop with AI review responses across every platform',
      body: 'Every review that comes in — positive or critical — receives a response. We configure AI review responses in your voice that acknowledge each review publicly across Google, Yelp, TripAdvisor, and your industry-specific platforms. Restaurants that respond to 75% or more of their reviews outrank non-responders in local search. The system handles the drafting so every review has a reply without a manager spending the end of their shift writing responses.',
    },
  ],

  features: [
    'Trigger connected to POS, property management system, or event booking platform',
    'Timing configured by sub-vertical: dining, hotel checkout, event, wedding venue',
    'SMS review request routed to the right platform for your business type',
    'Email follow-up sequence for guests who do not respond by text',
    'Platform coverage: Google, Yelp, TripAdvisor, The Knot, WeddingWire by business type',
    'AI review responses drafted and posted for every incoming review',
    'Consistent review velocity that builds local search ranking and platform visibility over time',
    'Review request templates written in your voice — not a generic platform default',
  ],

  relatedServiceSlugs: [
    'reputation-management',
    'ai-review-responses',
    'google-business-profile-optimization',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What does review automation do for a restaurant or event venue?',
      a: 'Review automation for a restaurant or event venue sends a review request to the guest automatically after every service interaction — triggered by the closed check, the checkout record, or the event date in your booking system, timed to the window when the experience is freshest, and routed to the platform where it has the most impact. It replaces inconsistent manual outreach that depends on staff remembering with a sequence that fires after every service without exception.',
    },
    {
      q: 'When should a restaurant send a review request after a visit?',
      a: 'The highest-converting window for restaurants is 1 to 3 hours after the check closes — after the guest has left and settled in but before the meal fades from immediate memory. For breakfast and lunch spots the window is shorter: 1 to 2 hours. For event venues and wedding businesses, 48 hours post-event works best — couples are too busy in the immediate aftermath and need a day or two before the review request feels natural. For hotels, 6 to 8 hours after checkout is the sweet spot: the guest has reached their destination but the stay is still the most recent significant experience they had.',
    },
    {
      q: 'Which review platforms matter most for hospitality businesses?',
      a: 'Google Business Profile is the highest priority for every hospitality business — it directly influences local search ranking and map pack visibility. For restaurants, Yelp and TripAdvisor carry significant weight with diners actively comparing options. For hotels, TripAdvisor is critical for travel research alongside Google. For wedding venues and event spaces, The Knot and WeddingWire are essential because couples research those directories specifically before making venue inquiries. The most common mistake is spreading requests across too many platforms and ending up with thin volume on all of them — the system prioritizes Google first, then the platform most relevant to your specific business type.',
    },
    {
      q: 'Why do unhappy guests leave reviews without being asked while happy ones do not?',
      a: 'Dissatisfied guests are motivated to share their experience publicly without any prompt — the frustration drives action. Satisfied guests intend to leave a review and do not because nothing in their experience creates urgency. A review request sent at the right moment, with a direct link, gives satisfied guests the nudge and the path they needed but would not have created on their own. Without the request, the public review profile skews toward the negative minority — not because the experience was poor, but because only one side had a reason to act.',
    },
    {
      q: 'Should restaurants and venues respond to every review, and can that be automated?',
      a: 'Yes, and yes. Restaurants that respond to 75% or more of their reviews outrank non-responders in local search. For event venues, a professional response to a negative review is often more trust-building for prospective clients than a flawless rating with no engagement — it demonstrates how the business handles problems. AI review responses handle the drafting so every incoming review receives a reply in your voice across Google, Yelp, TripAdvisor, and your industry-specific platforms, without a manager spending their post-service hours writing responses manually.',
    },
  ],
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/review-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/review-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsReviewAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/review-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                 url: '/' },
            { name: 'Industries',           url: '/industries' },
            { name: 'Hospitality & Events', url: '/industries/hospitality-events' },
            { name: 'Review Automation',    url: '/industries/hospitality-events/review-automation' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/review-automation',
            name:        'Review Automation for Restaurants and Event Venues',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
