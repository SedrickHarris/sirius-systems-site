import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck, ListChecks, Gauge } from 'lucide-react'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'
import {
  AI_AUTOMATION_FAQS,
  AI_FAQ_HUB,
  getAiFaqBySlug,
} from '@/lib/faq-ai-automation'

// Static export: prerender exactly the 12 question slugs. dynamicParams=false
// keeps any other /resources/faq/ai-automation/<x> a 404.
export function generateStaticParams() {
  return AI_AUTOMATION_FAQS.map((f) => ({ slug: f.slug }))
}

export const dynamic = 'force-static'
export const dynamicParams = false

const hubUrl = `/${AI_FAQ_HUB.slug}`

function trailFor(question: string, slug: string) {
  return [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'FAQ Library', url: '/resources/faq' },
    { name: 'AI Automation', url: hubUrl },
    { name: question, url: `${hubUrl}/${slug}` },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const faq = getAiFaqBySlug(slug)
  if (!faq) return {}

  const url = `${hubUrl}/${faq.slug}`
  return {
    title: faq.title,
    description: faq.description,
    alternates: { canonical: url },
    openGraph: {
      title: faq.title,
      description: faq.description,
      url,
      images: ['/og/default.webp'],
    },
  }
}

export default async function AiAutomationFaqDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const faq = getAiFaqBySlug(slug)
  if (!faq) notFound()

  const url = `${hubUrl}/${faq.slug}`
  const trail = trailFor(faq.question, faq.slug)

  // Related FAQs, resolved to their question text. Unknown slugs are skipped
  // so a bad reference can never render a dead card.
  const related = faq.related
    .map((s) => getAiFaqBySlug(s))
    .filter((f): f is NonNullable<typeof f> => Boolean(f))

  return (
    <>
      <JsonLdScript
        data={[
          webPage({ url, name: faq.title, description: faq.description }),
          breadcrumbList(trail),
          faqPage([{ q: faq.question, a: faq.answer }]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs className="mb-6" trail={trail} />
          <span className="section-eyebrow">{AI_FAQ_HUB.eyebrow}</span>
          <h1 className="mt-6 hero-heading max-w-4xl">{faq.question}</h1>
          <div className="mt-10">
            <Link href={hubUrl} className="btn-ghost">
              All AI Automation FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Short answer (light, AEO-quotable) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The short answer</span>
            <div className="mt-8 border-l-2 border-[color:var(--blue-system)] pl-6">
              <p className="text-lg leading-relaxed text-[color:var(--text-charcoal)] md:text-xl">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Why it matters + When to use it (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <div className="card-solid p-8">
            <span className="section-eyebrow">Why it matters</span>
            <p className="card-copy mt-5 text-[color:var(--text-charcoal)]">
              {faq.whyItMatters}
            </p>
          </div>
          <div className="card-solid p-8">
            <span className="section-eyebrow">When to use it</span>
            <p className="card-copy mt-5 text-[color:var(--text-charcoal)]">
              {faq.whenToUse}
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Related service + next steps (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related service</span>
            <h2 className="mt-5 section-heading">The system behind this answer</h2>
            <p className="mt-5 section-copy">
              This question maps most directly to{' '}
              <Link href={faq.primary.href} className="btn-link">
                {faq.primary.label}
              </Link>
              . You can also see{' '}
              <Link href={faq.secondary.href} className="btn-link">
                {faq.secondary.label}
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              href={faq.primary.href}
              className="card-solid hover-lift group flex items-center justify-between gap-4 p-6"
            >
              <span>
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                  Primary service
                </span>
                <span className="card-title mt-1 block">{faq.primary.label}</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                aria-hidden
              />
            </Link>
            <Link
              href={faq.secondary.href}
              className="card-solid hover-lift group flex items-center justify-between gap-4 p-6"
            >
              <span>
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                  Also relevant
                </span>
                <span className="card-title mt-1 block">{faq.secondary.label}</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                aria-hidden
              />
            </Link>
          </div>

          {/* Lead magnet + audit CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/resources/checklists/local-business-revenue-leak-checklist"
              className="btn-link"
            >
              <ListChecks className="h-4 w-4" aria-hidden />
              Use the Local Business Revenue Leak Checklist
            </Link>
            <Link href="/revenue-leak-audit" className="btn-link">
              <Gauge className="h-4 w-4" aria-hidden />
              Book a Revenue Leak Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Related questions (soft) ───────── */}
      {related.length > 0 && (
        <section className="section-soft section-padding">
          <div className="site-container">
            <div className="content-medium">
              <span className="section-eyebrow">Related questions</span>
              <h2 className="mt-5 section-heading">Keep exploring AI automation</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`${hubUrl}/${r.slug}`}
                  className="card-solid hover-lift group flex items-start justify-between gap-4 p-6"
                >
                  <span className="card-title text-base md:text-lg">{r.question}</span>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Final CTA (light wrapping cta-deep) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">Ready when you are</span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Book a 20-minute revenue leak audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We will map where leads, reviews, or follow-up are leaking and show
              you the order of operations to fix it. Walk away with the plan,
              whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/revenue-leak-audit" className="btn-primary">
                Book a Revenue Leak Audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={faq.primary.href} className="btn-ghost">
                Explore {faq.primary.label}
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
