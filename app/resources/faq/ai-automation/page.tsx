import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Check,
  PhoneMissed,
  Inbox,
  MessageSquare,
  CalendarCheck,
  Users,
  Star,
  Tag,
  Repeat,
} from 'lucide-react'
import { RelatedServicesGrid } from '@/components/site/RelatedServicesGrid'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'
import { AI_AUTOMATION_FAQS, AI_FAQ_HUB } from '@/lib/faq-ai-automation'

export const metadata: Metadata = {
  title: AI_FAQ_HUB.title,
  description: AI_FAQ_HUB.description,
  alternates: { canonical: `/${AI_FAQ_HUB.slug}` },
  openGraph: {
    title: AI_FAQ_HUB.title,
    description: AI_FAQ_HUB.description,
    url: `/${AI_FAQ_HUB.slug}`,
    images: ['/og/default.webp'],
  },
}

const CHECKLIST_HREF = '/resources/checklists/local-business-revenue-leak-checklist'

// Breadcrumb + JSON-LD trail shared by the visible nav and the schema.
const TRAIL = [
  { name: 'Home', url: '/' },
  { name: 'Resources', url: '/resources' },
  { name: 'FAQ Library', url: '/resources/faq' },
  { name: 'AI Automation', url: `/${AI_FAQ_HUB.slug}` },
]

// Plain-language points: what AI automation means for a local service business.
const MEANS_POINTS = [
  'It handles repetitive lead and follow-up work so nothing waits on a busy day.',
  'It does not replace you or your team. It supports the work you already do.',
  'It covers the moments where leads are usually lost, like a missed call or a slow reply.',
  'It works best when your website, CRM, booking, calls, forms, reviews, and follow-up are connected.',
]

// Where automation usually helps first.
const HELPS_FIRST: {
  title: string
  body: string
  Icon: React.ComponentType<{ className?: string }>
}[] = [
  { title: 'Missed calls', Icon: PhoneMissed, body: 'When a call goes unanswered, an automatic text can reach the caller in seconds. That keeps the lead alive before they try the next business.' },
  { title: 'Form follow-up', Icon: Inbox, body: 'A new form submission can trigger an instant reply and an internal alert. The lead hears back fast instead of waiting hours.' },
  { title: 'Chat inquiries', Icon: MessageSquare, body: 'A website chat can answer common questions and capture details around the clock. It sorts real leads from browsers without your team on standby.' },
  { title: 'Appointment booking', Icon: CalendarCheck, body: 'Prospects can book an open time straight onto your calendar. That removes the back-and-forth that loses appointments.' },
  { title: 'CRM contact updates', Icon: Users, body: 'New leads can create or update a contact automatically. Your pipeline stays current without manual data entry.' },
  { title: 'Review requests', Icon: Star, body: 'A review request can send at the right moment after a job. Happy customers get asked every time, not just when someone remembers.' },
  { title: 'Lead source tagging', Icon: Tag, body: 'Leads can be tagged by service and source as they arrive. You can see what is actually driving calls and forms.' },
  { title: 'No-response follow-up', Icon: Repeat, body: 'If a lead goes quiet, a scheduled follow-up can check back on its own. Most recovered jobs come from the second or third touch.' },
]

// Common revenue leaks automation can help close.
const COMMON_LEAKS = [
  'Calls go unanswered and the caller moves on.',
  'Form leads wait too long for a first reply.',
  'Prospects are not tagged by service or source, so follow-up is guesswork.',
  'Booking takes too many steps and interested prospects drop off.',
  'Review requests depend on someone remembering to ask.',
  'Old leads are never followed up with again.',
  'Website traffic is not connected to a CRM or a clear next step.',
]

// How the system connects, in order.
const FLOW_STEPS = [
  'Website visitor',
  'Call, form, chat, or booking request',
  'Contact created or updated in CRM',
  'Team notification',
  'SMS or email follow-up',
  'Appointment booking',
  'Review request',
  'Reporting and next-step visibility',
]

// When automation may not be the first fix.
const NOT_YET = [
  'If your offer is unclear, fix your positioning first.',
  'If your website has no clear call to action, fix the page path first.',
  'If key service pages are missing, fix the content structure first.',
  'If your team does not know the follow-up process, define the process before automating it.',
  'Automation should support a clear system, not hide a messy one.',
]

// Related services (RelatedServicesGrid skips unknown slugs). All routes exist.
const RELATED_SERVICES = [
  'ai-automation',
  'crm-automation',
  'appointment-booking-automation',
  'ai-chatbots',
  'ai-voicebots',
  'smart-websites',
  'review-automation',
  'local-seo-aeo',
  'all-in-one-business-growth-system',
]

export default function AiAutomationFaqHubPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${AI_FAQ_HUB.slug}`,
            name: AI_FAQ_HUB.title,
            description: AI_FAQ_HUB.description,
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs className="mb-6" trail={TRAIL} />
          <span className="section-eyebrow">{AI_FAQ_HUB.eyebrow}</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            AI Automation FAQ for Local Service Businesses
          </h1>
          <p className="mt-7 hero-copy">
            AI automation is not just about adding a chatbot or a new tool. For a
            local service business, it should help capture missed leads, respond
            faster, organize follow-up, support booking, connect CRM activity,
            and keep opportunities from falling through the cracks.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={CHECKLIST_HREF} className="btn-primary">
              Use the Revenue Leak Checklist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/revenue-leak-audit" className="btn-ghost">
              Book a Revenue Leak Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── What AI automation means (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The plain version</span>
            <h2 className="mt-5 section-heading">
              What AI automation means for a local service business
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-charcoal)] md:text-xl">
              AI automation is not about adding a chatbot for its own sake. It
              means using software to handle the repetitive lead and follow-up
              tasks that usually depend on someone remembering to do them.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {MEANS_POINTS.map((point) => (
              <li key={point} className="card-solid flex items-start gap-3 p-6">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]"
                  aria-hidden
                />
                <span className="card-copy text-[color:var(--text-charcoal)]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Where automation helps first (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Start here</span>
            <h2 className="mt-5 section-heading">Where automation usually helps first</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HELPS_FIRST.map(({ title, body, Icon }) => (
              <div key={title} className="card-solid flex h-full flex-col p-6">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 text-[color:var(--blue-system)]"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="card-title mt-5 text-base">{title}</h3>
                <p className="card-copy mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Common revenue leaks (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">
              Common revenue leaks AI automation can help close
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {COMMON_LEAKS.map((leak) => (
              <li key={leak} className="card-solid flex items-start gap-3 p-6">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue-system)]"
                />
                <span className="card-copy text-[color:var(--text-charcoal)]">{leak}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 content-medium">
            <p className="section-copy">
              Automation helps close these gaps. It works best on top of a clear
              offer and a team that knows the process, not as a way to cover for
              a messy one.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── How the system connects (slate) ───────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it connects</span>
            <h2 className="mt-5 section-heading">How AI automation connects the growth system</h2>
            <p className="mt-5 section-copy">
              Each step hands off to the next, so a single lead moves through the
              system without anyone stitching the pieces together by hand.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW_STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span aria-hidden className="system-node shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-white/85 md:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── When not to automate yet (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">A straight answer</span>
            <h2 className="mt-5 section-heading">When automation may not be the first fix</h2>
            <p className="mt-5 section-copy">
              Automation is powerful, but it is not always the first thing to fix.
              If any of these are true, start here before adding tools.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {NOT_YET.map((item) => (
              <li key={item} className="card-solid flex items-start gap-3 p-6">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]"
                  aria-hidden
                />
                <span className="card-copy text-[color:var(--text-charcoal)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FAQ question cards (soft) ───────── */}
      <section id="faq-questions" className="section-soft section-padding scroll-mt-20">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-5 section-heading">AI Automation questions business owners ask first</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {AI_AUTOMATION_FAQS.map((faq) => (
              <Link
                key={faq.slug}
                href={`/${AI_FAQ_HUB.slug}/${faq.slug}`}
                className="card-solid hover-lift group flex items-start justify-between gap-4 p-6"
              >
                <span className="card-title text-base md:text-lg">{faq.question}</span>
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Related services (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related services</span>
            <h2 className="mt-5 section-heading">Related systems that support AI automation</h2>
          </div>
          <div className="mt-12">
            <RelatedServicesGrid slugs={RELATED_SERVICES} />
          </div>
        </div>
      </section>

      {/* ───────── Checklist CTA (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="card-premium p-8 md:p-10">
            <span className="section-eyebrow">Self-audit first</span>
            <h2 className="mt-5 section-heading">Find the leaks before adding more tools</h2>
            <p className="mt-5 max-w-2xl section-copy">
              Use the Local Business Revenue Leak Checklist to review where calls,
              forms, booking, CRM tracking, reviews, and follow-up may be slipping
              through the cracks.
            </p>
            <div className="mt-8">
              <Link href={CHECKLIST_HREF} className="btn-primary">
                Use the Revenue Leak Checklist
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Audit CTA (light wrapping cta-deep) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">Ready when you are</span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Want help mapping the system?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              The Revenue Leak Audit helps identify which part of the local growth
              system should be fixed first, whether that is website conversion,
              missed-call follow-up, CRM automation, appointment booking, reviews,
              or local SEO and AEO.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/revenue-leak-audit" className="btn-primary">
                Book a Revenue Leak Audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/ai-automation" className="btn-ghost">
                Explore AI Automation
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
