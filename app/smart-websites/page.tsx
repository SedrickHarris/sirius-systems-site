import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/site/ServicePageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const PAGE = {
  slug: 'smart-websites',
  metaTitle: 'Smart Websites for Service Businesses | Sirius Systems',
  metaDescription:
    'A website built to capture leads, qualify visitors, and book jobs automatically — connected to your CRM, chatbot, and follow-up system from day one.',
  eyebrow: 'Smart Websites',
  headline: 'Your website should book jobs. Not just describe them.',
  subheadline:
    'Your current site describes your services. A smart website captures leads, qualifies visitors, books jobs, and feeds your CRM while you are out working.',
  glyphVariant: 'grid' as const,
  definition:
    'A smart website for a service business is a site built with lead capture, qualification, and booking integrated from the ground up — not added as afterthoughts. Every form, chat widget, and booking entry point is connected to your CRM and follow-up automation so that visitor activity converts to pipeline entries automatically. The site is also built for local search from the start: structured data, location signals, and Google Business Profile alignment included in the foundation, not patched in later.',
  problems: [
    'Your current site looks presentable but generates almost no inbound leads on its own. Traffic arrives and leaves without converting.',
    'Visitors read your services page and have no clear next step. There is no capture point pulling them into your pipeline at the moment they are ready.',
    'Your contact form sends submissions to an email inbox that gets checked when someone has time. By then the lead has moved on.',
    'The site was not built for local search. It does not rank for the terms your customers actually type, and fixing that after the fact is harder than building it right the first time.',
  ],
  steps: [
    {
      label: 'Define the conversion architecture',
      body: 'Before any design work, we map what action each type of visitor should take: book a call, request a quote, start a chat, claim an offer. Each page gets one primary goal. The layout, copy, and capture points are built to move visitors toward that goal, not to present information and hope they act.',
    },
    {
      label: 'Build for speed and local search',
      body: 'The site is built on a fast, modern framework optimized for Core Web Vitals and mobile performance. Local SEO signals are wired in from the start: structured data markup, location-relevant page content, service area structure, and Google Business Profile alignment. A site that does not rank does not get the chance to convert.',
    },
    {
      label: 'Integrate capture, chat, and booking',
      body: 'Forms, AI chatbot widgets, and appointment booking are connected to your CRM during the build, not retrofitted afterward. Every entry point triggers the right follow-up sequence automatically. A visitor who fills out a form at 10pm enters your pipeline and gets a response before they wake up.',
    },
    {
      label: 'Connect to the full system',
      body: 'The website is the front door of your operation, not a standalone asset. We connect it to your AI chatbot, voicebot, review requests, and CRM automation so that everything a visitor does on the site flows into the same system that handles every other lead source.',
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
    'Your website becomes the top of your lead pipeline instead of a digital brochure that describes your services and stops there.',
    'Visitors who are ready to book can do so without waiting for a callback or a reply to a form submission.',
    'Local search visibility improves because the technical foundation was built correctly from the start rather than corrected after the fact.',
    'Every form submission, chat conversation, and booking entry flows into your CRM automatically. No manual data entry, no leads sitting in a separate inbox.',
    'You can see which pages and traffic sources are producing booked jobs, not just pageviews.',
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
      q: 'What is a smart website for a service business?',
      a: 'A smart website for a service business is a site built with lead capture, qualification, and booking integrated from the ground up. Every form, chat widget, and booking entry point connects to your CRM and follow-up automation so visitor activity converts to pipeline entries automatically. It is also built for local search from the start, not patched for SEO after the fact.',
    },
    {
      q: 'What is the difference between a smart website and a regular business website?',
      a: 'A regular business website presents information and waits for the visitor to act. A smart website is built around specific conversion goals for each page type, has capture points that feed directly into a CRM and automation system, and includes local SEO architecture in the foundation rather than as an add-on. The difference shows up in how many visitors become leads and how many leads become booked jobs.',
    },
    {
      q: 'Is this a template or a custom build?',
      a: 'We use modern, fast frameworks and component systems rather than drag-and-drop page builders, so the site performs well technically. The design, content, and conversion architecture are built around your specific services, service area, and target customer. The underlying technology is structured; the output is specific to your business.',
    },
    {
      q: 'Will it rank on Google?',
      a: 'Local SEO is built into the foundation: structured data markup, location-relevant page content, page speed, and Google Business Profile alignment are included from the start. That gives the site the right technical signals. Rankings also depend on ongoing content and authority building, but the site is not starting from a technical deficit the way most retrofitted sites do.',
    },
    {
      q: 'What happens to my current website?',
      a: 'We review what you have before recommending anything. If your current site has SEO signals or content worth preserving, we factor that into the plan. A full rebuild is not always the right call. Sometimes the right move is to fix the technical gaps, add the missing integrations, and improve the conversion architecture on what already exists.',
    },
    {
      q: 'How does the website connect to the rest of my business system?',
      a: 'Every capture point on the site — forms, chatbots, booking widgets — is wired to your CRM and automation stack during the build. A visitor who submits a form enters your pipeline and triggers a follow-up sequence without anyone doing it manually. The website is the entry point; the automation system handles everything that happens after.',
    },
    {
      q: 'What does conversion-first architecture mean?',
      a: 'It means every page is designed around one primary action the visitor should take, and every element on the page is there to support that action or remove friction from it. Navigation, copy, layout, and capture points are all oriented toward the conversion goal rather than toward presenting as much information as possible. Most service business websites are information-first. A smart website is conversion-first.',
    },
    {
      q: 'Why does local SEO need to be built in rather than added later?',
      a: 'Local SEO signals — structured data markup, page content tied to specific service areas, site architecture that matches how Google reads local relevance — are easiest and most effective when they are part of the original build. Retrofitting them onto a site that was not designed with them in mind often means working around decisions that conflict with good local search structure. Building them in from the start avoids that problem entirely.',
    },
    {
      q: 'How long does it take to build a smart website?',
      a: 'A focused build for a local service business — core pages, conversion architecture, local SEO foundation, and CRM integration — typically takes three to six weeks depending on the number of services, whether content is ready, and what integrations need to be configured. We scope the timeline during the discovery call based on your specific situation.',
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
    images: ['/og/default.webp'],
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
