import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Star,
  Search,
  LayoutDashboard,
  GitBranch,
  CalendarCheck,
  MessageSquare,
  Phone,
  MapPin,
} from 'lucide-react'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

const PAGE = {
  slug: 'resources/faq',
  title: 'FAQ Library for AI Automation and Local SEO | Sirius Systems',
  description:
    'Find plain-language answers about AI automation, smart websites, review automation, local SEO, AEO, CRM follow-up, and lead capture for local service businesses.',
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: `/${PAGE.slug}`,
    images: ['/og/default.webp'],
  },
}

// Topic clusters for the FAQ library. The individual question pages are
// built in a later phase, so every card is "Coming soon" (no href) for now.
// Add an href here as each cluster ships.
const TOPICS: ResourceCardData[] = [
  { title: 'AI Automation', blurb: 'How trigger-based systems capture leads, follow up, and book jobs without manual work.', Icon: Workflow },
  { title: 'Review Automation', blurb: 'How to earn more reviews at the right moment without spamming or sounding scripted.', Icon: Star },
  { title: 'Local SEO and AEO', blurb: 'How to get found in Google and in AI answer engines like ChatGPT and Perplexity.', Icon: Search },
  { title: 'Smart Websites', blurb: 'How a site should capture, qualify, book, and follow up, not just look good.', Icon: LayoutDashboard },
  { title: 'CRM Automation', blurb: 'How your CRM should move leads through stages and trigger follow-up on its own.', Icon: GitBranch },
  { title: 'Appointment Booking', blurb: 'How to turn an inquiry into a confirmed appointment without you in the loop.', Icon: CalendarCheck },
  { title: 'AI Chatbots', blurb: 'How on-site chat answers in your voice and books appointments around the clock.', Icon: MessageSquare },
  { title: 'AI Voicebots', blurb: 'How voice AI picks up, qualifies, and books calls while you are on a job.', Icon: Phone },
  { title: 'Google Business Profile', blurb: 'How categories, services, posts, photos, and Q&A drive local visibility.', Icon: MapPin },
  { title: 'Reputation Management', blurb: 'How to handle hard reviews and keep local search visibility strong.', Icon: ShieldCheck },
]

export default function ResourcesFaqPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.title,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: 'FAQ Library', url: `/${PAGE.slug}` },
          ]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs
            className="mb-6"
            trail={[
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
              { name: 'FAQ Library', url: `/${PAGE.slug}` },
            ]}
          />
          <span className="section-eyebrow">FAQ Library</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            FAQ Library for AI Automation, Local SEO, Reviews, and Smart Websites
          </h1>
          <p className="mt-7 hero-copy">
            Straight answers to the questions local service businesses actually
            ask before they automate lead capture, follow-up, booking, reviews,
            and local search. Organized by topic so you can go straight to what
            matters for your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#faq-topics" className="btn-primary">
              Browse topics
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/resources" className="btn-ghost">
              All resources
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Explanation (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What this is</span>
            <p className="mt-6 text-xl leading-relaxed text-[color:var(--text-charcoal)] md:text-2xl">
              The FAQ Library collects the most common questions we hear from
              local service businesses and answers them in plain language. Each
              topic below becomes its own set of questions and answers as the
              library grows.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Topic grid (soft) ───────── */}
      <section
        id="faq-topics"
        className="section-soft section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Topics</span>
            <h2 className="mt-5 section-heading">
              Choose a topic to explore
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <ResourceCard key={topic.title} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              Ready when you are
            </span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Book a 20-minute revenue leak audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We will map where leads, reviews, or follow-up are leaking and show
              you the order of operations to fix it. Walk away with the plan,
              whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book the audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See services
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              No pressure. No fake promises. Just a practical next step.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
