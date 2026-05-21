import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'smart-websites',
  metaTitle: 'Smart Websites for Local Service Businesses | Sirius Systems',
  metaDescription:
    'A smart website does more than look good: it captures leads, qualifies visitors, books appointments, and connects to your CRM. Built for local service businesses by Sirius Systems.',
  eyebrow: 'Smart Websites',
  headline: 'Your website should book jobs. Not just describe them.',
  subheadline:
    'Your current site describes your services. A smart website captures leads, books jobs, and feeds your CRM while you are out working.',
  glyphVariant: 'grid' as const,
  definition:
    'A smart website for a service business is a site built with lead capture, qualification, and booking integrated from the ground up: connected to your CRM, chatbot, and follow-up system so that visitor activity converts to booked jobs automatically.',
  problems: [
    'Your current site looks fine but generates almost no inbound leads on its own.',
    "Visitors land, read, and leave: there's no clear next step that pulls them into your pipeline.",
    'Your contact form goes to an email inbox that someone checks when they have time.',
    "The site isn't built for local search: it doesn't rank for the terms your customers actually use.",
  ],
  steps: [
    {
      label: 'Define the conversion goal',
      body: 'Every page on a smart website has one job. We map what action each type of visitor should take: book a call, request a quote, start a chat: and build the page architecture around those goals.',
    },
    {
      label: 'Build for speed and local SEO',
      body: "The site is built on a fast, modern stack optimized for Core Web Vitals and local search signals: structured data, location-relevant content, Google Business Profile alignment. A site that doesn't rank doesn't convert.",
    },
    {
      label: 'Wire the capture and booking layer',
      body: 'Forms, chatbots, and booking widgets are integrated from day one: not added as afterthoughts. Every capture point connects directly to your CRM and triggers the right follow-up sequence.',
    },
    {
      label: 'Connect to the full system',
      body: 'The website is one piece of the system. We connect it to your AI chatbot, voicebot, review requests, and CRM automation so that what happens on the site flows through the rest of your operation automatically.',
    },
  ],
  features: [
    'Conversion-first architecture: every page built around a specific visitor action',
    'Local SEO structure: schema markup, location signals, GBP alignment built in',
    'Integrated lead capture: forms and chatbots connected to CRM from day one',
    'Appointment booking: self-booking widget wired to your live calendar',
    'Fast load times: built for Core Web Vitals and mobile performance',
    'AI chatbot integration: on-site chat connected to qualification and booking flow',
    'Review display: structured to show verified reviews when GBP data is available',
    'Analytics and tracking: source-level visibility on what traffic converts',
  ],
  outcomes: [
    'Your website becomes the top of your lead pipeline, not a digital business card.',
    'Visitors who are ready to book can do so without waiting for a call-back.',
    'Local search visibility improves because the site is built with the right signals.',
    'Your CRM stays current because every site interaction flows in automatically.',
    'You can see which pages and channels are producing booked jobs, not just traffic.',
  ],
  relatedSlugs: [
    'lead-generation-automation',
    'local-seo-aeo',
    'google-business-profile-optimization',
    'appointment-booking-automation',
    'all-in-one-business-growth-system',
  ],
  industryFit: ['home-services', 'professional-services'],
  faqs: [
    {
      q: 'What makes a website "smart"?',
      a: 'A smart website is built with lead capture, qualification, and booking integrated from the start: not bolted on later. It connects to your CRM, chatbot, and follow-up system so visitor activity converts to booked jobs automatically, rather than just generating form submissions that sit in an inbox.',
    },
    {
      q: 'Is this a template or a custom build?',
      a: 'It depends on what your business needs. We use modern, fast frameworks and component systems: not drag-and-drop page builders: so the site performs well technically. The design and content are built around your specific services, service area, and conversion goals.',
    },
    {
      q: 'Will it rank on Google?',
      a: "Local SEO is built into the architecture: structured data, location-relevant content, page speed, and Google Business Profile alignment. That gives the site the right technical foundation. Rankings depend on ongoing content and authority signals, but the site won't be starting from a technical deficit.",
    },
    {
      q: 'What happens to my current website?',
      a: "We review what you have before recommending anything. If your current site has strong SEO signals worth preserving, we factor that into the plan. A rebuild isn't always the right call: sometimes the right move is to fix what's broken and add the missing integrations.",
    },
    {
      q: 'How does the website connect to the rest of my system?',
      a: 'Every capture point on the site: forms, chatbots, booking widgets: is wired to your CRM and automation stack during the build. The website is the front door; the system handles what happens after someone walks through it.',
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
  },
}

export default function SmartWebsitesPage() {
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
            { name: 'Smart Websites', url: `/${PAGE.slug}` },
          ]),
          serviceSchema({
            slug: PAGE.slug,
            name: 'Smart Websites',
            description: PAGE.metaDescription,
          }),
          ...(PAGE.faqs.length > 0 ? [faqPage(PAGE.faqs)] : []),
        ]}
      />
      <ServicePageTemplate {...PAGE} />
    </>
  )
}
