import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'technology-b2b',
  serviceSlug: 'reputation-management',
  hubName:     'Technology & B2B Services',
  serviceName: 'Reputation Management',

  metaTitle:       'Reputation Management for IT Companies and MSPs',
  metaDescription: 'IT firms and MSPs compete on trust. We build the system that earns reviews after every engagement, responds to every one, and monitors your reputation.',

  eyebrow: 'Technology & B2B Services · Reputation Management',

  headline:
    'Reputation management for IT companies and MSPs — most let their review profile build by accident',

  subheadline:
    'A prospect researches your firm before they ever agree to a discovery call. They check your Google profile, scan Clutch and G2, read what past clients said about your last engagement, and form an opinion before your sales team knows they exist. The firms with a strong review profile get the call. The ones without a system do not.',

  heroHighlights: [
    'Automated review requests sent after every completed engagement or project milestone',
    'Every review responded to across Google, Clutch, G2, Trustpilot, and Capterra',
    'Competitor review benchmarking so you always know where you stand in your market',
    'Monitoring across every platform so nothing sits unanswered',
  ],

  definitionHeadline:
    'What reputation management actually means for an IT company, MSP, or B2B technology firm',

  definition:
    'Reputation management for an IT company or managed service provider means running a system that earns reviews consistently after every completed engagement, responds to every review on every platform, and monitors what clients and prospects are saying so nothing gets missed. It is not crisis response after a disgruntled client posts on G2 — it is the ongoing operation that builds a review profile strong enough to survive a B2B buying committee doing independent research, strong enough to convert a prospect who is comparing you against three other vendors, and strong enough to be cited by AI tools like ChatGPT and Perplexity when someone asks which IT firms to consider.',

  problemHeadline:
    'Where technology and B2B firms lose clients they already earned',

  problems: [
    'The engagement closed well, the client was satisfied, and no review request ever went out. They intended to post one and moved on. That pattern repeats after every project and your Google and Clutch profiles stay thin while competing firms with an automated post-engagement system keep accumulating the reviews that show up in every prospect research session.',
    'A prospect researching your firm searches your name and finds a negative review on G2 or Google with no response. In B2B, where buying committees share their findings with each other before a decision is made, an unanswered critical review can disqualify your firm before you ever get a call — and you will never know why the inquiry did not come.',
    'A competing IT firm with comparable technical credentials has forty more Google reviews, a stronger Clutch profile, and a more active response pattern. They appear first in local search and rank higher in directory listings. They get the inbound inquiry first — not because they do better work, but because they built a system and you did not.',
    'Your review volume is scattered across Google, Clutch, G2, and Trustpilot — none of the profiles look strong because the volume is spread thin. A prospect checking any single platform sees a handful of reviews and concludes your firm is smaller or less established than it actually is.',
  ],

  howItWorksHeadline:
    'How reputation management works for IT companies, MSPs, and B2B technology firms',

  steps: [
    {
      label: 'Review request goes out after every engagement',
      body: 'When a project closes, a milestone is hit, or a contract renews, a review request is sent automatically — by text or email — while the experience is still fresh. For B2B firms, timing and message framing are configured around the client relationship rhythm, not a generic consumer template.',
    },
    {
      label: 'Every review gets a response',
      body: 'Positive reviews, critical reviews, and everything between — every one is acknowledged across Google, Clutch, G2, Trustpilot, and Capterra. A consistent response pattern signals professionalism to the next prospect reading those reviews and strengthens your local search presence.',
    },
    {
      label: 'Competitors stay visible',
      body: 'Your review volume and rating are tracked against competing IT firms, MSPs, and B2B technology businesses in your market. When a competitor pulls ahead on Clutch or Google, you see it. When your local search ranking shifts, you know why.',
    },
    {
      label: 'Nothing slips through unmonitored',
      body: 'New reviews and mentions across every platform are monitored continuously. A negative review on a B2B directory or industry forum does not sit there for weeks before someone on your team notices it — and a well-timed response prevents a single post from shaping how dozens of future prospects perceive your firm.',
    },
  ],

  featuresHeadline:
    'What the reputation management system covers for technology and B2B firms',

  features: [
    'Automated post-engagement review requests via text and email',
    'Review monitoring across Google, Clutch, G2, Trustpilot, and Capterra',
    'Response management — every review acknowledged, every platform',
    'Competitor review benchmarking across IT firms and MSPs in your market',
    'Alert system for new reviews that need fast attention',
    'Platform prioritization — volume built on the platforms B2B buyers actually check',
    'B2B-specific timing and messaging configured around your client engagement cycle',
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
      q: 'What is reputation management for IT companies and MSPs?',
      a: 'Reputation management for IT companies and MSPs is the ongoing system that earns reviews after every completed engagement, responds to every review across every platform, and monitors what is being said about your business so nothing gets missed. It covers Google, Clutch, G2, Trustpilot, and Capterra — the platforms B2B buyers and buying committees check before deciding which technology firm to contact.',
    },
    {
      q: 'Which review platforms matter most for B2B technology firms?',
      a: 'Google Business Profile is the highest priority for local search visibility and map pack ranking. Clutch is critical for IT service firms and agencies because B2B buyers use it specifically to evaluate and compare technology service providers. G2 matters for SaaS and software-adjacent firms. Trustpilot and Capterra carry weight depending on your specific sub-vertical. The most common mistake is spreading review requests across too many platforms and ending up with thin volume on all of them — prioritize Google and Clutch first, then the platform most relevant to your buyer type.',
    },
    {
      q: 'How do IT companies and MSPs get more client reviews?',
      a: 'The most reliable method is an automated review request sent shortly after a project milestone, contract renewal, or completed engagement — when client satisfaction is highest and the experience is still current. A direct message with a single link removes friction and significantly increases completion rates. B2B firms that build this into their post-engagement workflow consistently outperform those that rely on manual asks or wait until the annual check-in.',
    },
    {
      q: 'How should a B2B technology firm respond to a negative review?',
      a: 'Respond promptly, stay professional, and keep the response concise. Acknowledge the concern without disputing the details publicly, express that feedback is taken seriously, and invite the person to continue the conversation offline. In B2B, where buying committees share research findings with each other, a well-handled response to a negative review often reassures more prospects than the negative review itself harms. An unresponded critical review on Clutch or G2 is the version that consistently costs business.',
    },
    {
      q: 'Does review volume affect how B2B buyers evaluate technology vendors?',
      a: 'Yes, directly. B2B buyers use review volume, recency, and response activity as trust signals when building a shortlist. A thin review profile on Google or Clutch signals either a new firm or one that clients do not feel strongly enough about to endorse publicly. Review volume also affects local search ranking on Google — IT firms with more reviews and active response patterns rank higher for searches like "IT support near me" and "managed service provider in [city]". A consistent post-engagement review system compounds over time and becomes one of the most durable competitive advantages a technology firm can build.',
    },
  ],

  ctaHeadline: 'Book a 20-minute pipeline audit for your technology firm.',

  ctaBody:
    'We will map where client reviews, follow-up, or local visibility are leaking and show you the order of operations to fix it. Walk away with the plan, whether or not we work together.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/technology-b2b/reputation-management' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/technology-b2b/reputation-management',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function TechnologyB2bReputationManagementPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/technology-b2b/reputation-management',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                      url: '/' },
            { name: 'Industries',                url: '/industries' },
            { name: 'Technology & B2B Services', url: '/industries/technology-b2b' },
            { name: 'Reputation Management',     url: '/industries/technology-b2b/reputation-management' },
          ]),
          serviceSchema({
            slug:        'industries/technology-b2b/reputation-management',
            name:        'Reputation Management for IT Companies and MSPs',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
