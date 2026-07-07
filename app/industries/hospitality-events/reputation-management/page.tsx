import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'hospitality-events',
  serviceSlug: 'reputation-management',
  hubName:     'Hospitality & Events',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for Restaurants and Event Venues',
  metaDescription: 'Restaurants and venues compete on reviews. We build the system that earns them after every service, responds to every one, and monitors your reputation.',

  eyebrow: 'Hospitality & Events · Reputation Management',

  headline:
    'Reputation management for restaurants and event venues — most let their review profile build by accident',

  subheadline:
    'A diner, a couple, or a corporate planner researches you before they ever make contact. They check your Google rating, scan your Yelp reviews, read what people said after their last event, and compare you against two competitors — all before you know they exist. The businesses with a strong review profile get the booking. The ones without a system do not.',

  heroHighlights: [
    'Automated review requests sent after every dining experience, event, or guest stay',
    'Every review responded to across Google, Yelp, TripAdvisor, The Knot, and WeddingWire',
    'Competitor review benchmarking so you always know where you stand in your market',
    'Monitoring across every platform so nothing sits unanswered',
  ],

  definitionHeadline:
    'What reputation management actually means for a restaurant, venue, or hospitality business',

  definition:
    'Reputation management for a hospitality or events business means running a system that earns reviews consistently after every guest experience, event, or completed booking, responds to every review on every platform, and monitors what diners, guests, and couples are saying so nothing gets missed. It is not damage control after a bad night shows up on Yelp — it is the ongoing operation that builds a review profile strong enough to rank in local search, strong enough to convert a prospect who is comparing you against three other venues, and strong enough to be cited by AI tools like ChatGPT and Perplexity when someone asks where to eat or which venue to book.',

  problemHeadline:
    'Where hospitality and events businesses lose bookings they already earned',

  problems: [
    'The event went perfectly, the guests left happy, and no review request ever went out. The couple meant to post one and got caught up in life. That pattern repeats after every wedding, every dinner, every event — and your review count stays flat while competitors with an automated system keep accumulating ratings and rising in search.',
    'A negative review posted last month is still sitting unanswered. Every prospective diner or couple who searches your name reads it first — and silence reads as indifference. On platforms like Yelp and TripAdvisor, an unanswered critical review is one of the fastest ways to lose bookings to the business next door that responds within 24 hours.',
    'Your reviews are split across Google, Yelp, TripAdvisor, The Knot, WeddingWire, and Facebook — none of the profiles look strong because the volume is spread thin. A couple or event planner checking any single platform sees a handful of reviews and moves to a venue that looks more established.',
    'A competing restaurant or venue with comparable quality has three times your review count and appears first in the local map pack. They get the inquiry first — not because they deliver a better experience, but because they built a system to capture reviews after every event and you have not.',
  ],

  howItWorksHeadline:
    'How reputation management works for restaurants, venues, and hospitality businesses',

  steps: [
    {
      label: 'Review request goes out after every experience',
      body: 'After every dinner, event, wedding, or guest stay, a review request is sent automatically — by text or email — while the experience is still fresh. For venues, the window is tightest: a request sent within 48 hours of the event captures peak satisfaction. For restaurants, post-visit timing is built into the workflow.',
    },
    {
      label: 'Every review gets a response',
      body: 'Positive reviews, critical reviews, and everything between — every one is acknowledged across Google, Yelp, TripAdvisor, The Knot, WeddingWire, and Facebook. A consistent response pattern signals professionalism to prospective guests and event planners, and feeds the local search algorithm.',
    },
    {
      label: 'Competitors stay visible',
      body: 'Your review volume and rating are tracked against competing restaurants, venues, and hospitality businesses in your market. When a competitor pulls ahead, you see it. When your local search ranking shifts, you know why.',
    },
    {
      label: 'Nothing slips through unmonitored',
      body: 'New reviews and mentions across every platform are monitored continuously. A negative review on TripAdvisor or a wedding directory does not sit there for weeks before someone on your team notices it.',
    },
  ],

  featuresHeadline:
    'What the reputation management system covers for hospitality and events businesses',

  features: [
    'Automated post-event and post-visit review requests via text and email',
    'Review monitoring across Google, Yelp, TripAdvisor, The Knot, WeddingWire, and Facebook',
    'Response management — every review acknowledged, every platform',
    'Competitor review benchmarking across restaurants, venues, and hospitality businesses in your market',
    'Alert system for new reviews that need fast attention',
    'Platform prioritization — volume built where it matters most for your type of business',
    'Wedding and event venue workflows scoped to post-event timing windows',
    'Reporting on review velocity, average rating, and platform-by-platform standing',
  ],

  relatedServiceSlugs: [
    'review-automation',
    'ai-review-responses',
    'google-business-profile-optimization',
    'local-seo-aeo',
  ],

  faqs: [
    {
      q: 'What is reputation management for restaurants and event venues?',
      a: 'Reputation management for restaurants and event venues is the ongoing system that earns reviews after every guest experience or event, responds to every review across every platform, and monitors what is being said about your business so nothing gets missed. It covers Google, Yelp, TripAdvisor, The Knot, WeddingWire, and Facebook — the platforms diners, couples, and event planners check before deciding where to book.',
    },
    {
      q: 'Which review platforms matter most for restaurants and hospitality businesses?',
      a: 'Google Business Profile is the highest priority for every hospitality business — it directly influences local search ranking and map pack visibility. For restaurants, Yelp and TripAdvisor carry significant weight with diners actively searching for their next meal. For event venues and wedding businesses, The Knot and WeddingWire are critical because couples research those directories specifically. The most common mistake is spreading review requests across too many platforms and ending up with thin volume on all of them — prioritize Google first, then the platform most relevant to your specific business type.',
    },
    {
      q: 'How do event venues get more reviews after a wedding or event?',
      a: 'The most reliable method is an automated review request sent within 48 hours of the event, when satisfaction is highest and the experience is still vivid. A direct text message with a single link to your Google Business Profile removes friction and captures reviews before the couple or client returns to normal life. Venues that build this into their post-event workflow consistently outperform those that rely on manual asks or hope that happy clients will review on their own.',
    },
    {
      q: 'How should a hospitality business respond to a negative review?',
      a: 'Respond within 24 hours, stay professional, and keep it brief. Acknowledge the guest experience without disputing the details publicly, express that feedback is taken seriously, and invite the person to continue the conversation offline. On platforms like Yelp and TripAdvisor, a thoughtful response to a negative review is visible to every future prospect reading that review — a well-handled response often reassures prospective guests more than the negative review harms. Silence is the only response that consistently costs bookings.',
    },
    {
      q: 'Does review volume affect local search ranking for restaurants and event venues?',
      a: 'Yes. Google\'s local algorithm factors review volume, star rating, recency, and response activity into local search and map pack rankings. Restaurants with more reviews, higher ratings, and active response patterns rank higher for searches like "restaurants near me" and "best [cuisine] in [city]". For event venues, the same signals affect visibility when couples and planners search for venues in a specific area. A consistent review acquisition system compounds over time — every event is an opportunity to strengthen both your local search position and your presence on the industry directories where your next client is already looking.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit.',

  ctaBody:
    'We will map where reviews, follow-up, or local visibility are leaking and show you the order of operations to fix it. Walk away with the plan, whether or not we work together.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/hospitality-events/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/hospitality-events/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HospitalityEventsReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/hospitality-events/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                  url: '/' },
            { name: 'Industries',            url: '/industries' },
            { name: 'Hospitality & Events',  url: '/industries/hospitality-events' },
            { name: 'Reputation Management', url: '/industries/hospitality-events/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/hospitality-events/reputation-management',
            name:        'Reputation Management for Restaurants and Event Venues',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
