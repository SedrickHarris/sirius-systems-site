import Link from "next/link";
import RevenueLeakAuditForm from "@/components/RevenueLeakAuditForm";
import { JsonLdScript } from "@/components/site/JsonLdScript";
import { webPage, breadcrumbList } from "@/lib/schema";

export const metadata = {
  title: "Free Revenue Leak Audit | Sirius Systems",
  description:
    "Find where your local service business is losing leads, missed calls, follow-ups, bookings, and reviews.",
  alternates: { canonical: "/revenue-leak-audit" },
  openGraph: {
    title: "Free Revenue Leak Audit | Sirius Systems",
    description:
      "Book a Revenue Leak Audit to find gaps in your website, lead capture, missed-call follow-up, booking flow, CRM tracking, reviews, and local visibility system.",
    url: "/revenue-leak-audit",
    images: ["/og/default.webp"],
  },
};

// The audit reviews these systems. Kept plain and factual: the audit points
// out gaps, it does not promise a specific outcome.
const AUDIT_REVIEWS = [
  "Website conversion",
  "Lead capture",
  "Missed calls",
  "Form follow-up",
  "Appointment booking",
  "CRM tracking",
  "Review requests",
  "Google Business Profile",
  "Local SEO and AEO",
  "Automation hand-offs",
];

// What the visitor leaves with. No guaranteed revenue, rankings, or leads.
const WALK_AWAY_WITH = [
  "A plain-language view of where leads may be leaking",
  "A prioritized list of the system gaps we find",
  "Recommended next steps you can act on",
  "Which service area is worth fixing first",
  "Whether you need a focused fix or the All-in-One Growth System",
];

// General categories only. Not an exhaustive or exclusive list.
const BEST_FIT = [
  "Home services",
  "Professional services",
  "Health and wellness",
  "Automotive",
  "Real estate and property services",
  "Local shops and service providers",
];

// Funnel hand-off. Every href is an existing route on the site.
const NEXT_SYSTEMS: { name: string; href: string; blurb: string }[] = [
  { name: "AI Automation", href: "/ai-automation", blurb: "Follow-up, missed-call text-back, and reminders that run on their own." },
  { name: "Smart Websites", href: "/smart-websites", blurb: "A site that captures, qualifies, books, and follows up." },
  { name: "CRM Automation", href: "/crm-automation", blurb: "Leads tracked, tagged, and moved through the pipeline without manual updates." },
  { name: "Appointment Booking", href: "/appointment-booking-automation", blurb: "Let prospects book on your calendar without the phone tag." },
  { name: "Review Automation", href: "/review-automation", blurb: "Ask every happy customer for a review at the right moment." },
  { name: "Local SEO and AEO", href: "/local-seo-aeo", blurb: "Get found in Google and in AI answer engines." },
  { name: "All-in-One Growth System", href: "/all-in-one-business-growth-system", blurb: "Every system above, running as one engine." },
];

const CHECKLIST_HREF = "/resources/checklists/local-business-revenue-leak-checklist";

export default function RevenueLeakAuditPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLdScript
        data={[
          webPage({
            url: "/revenue-leak-audit",
            name: "Revenue Leak Audit for Local Service Businesses",
            description:
              "Book a Revenue Leak Audit to find gaps in your website, lead capture, missed-call follow-up, booking flow, CRM tracking, reviews, and local visibility system.",
          }),
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Revenue Leak Audit", url: "/revenue-leak-audit" },
          ]),
        ]}
      />

      <section
        id="request-audit"
        className="mx-auto grid max-w-7xl scroll-mt-16 gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <div>
          <p className="mb-4 inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-medium text-yellow-200">
            Free Revenue Leak Audit
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Find where your business is losing leads, bookings, reviews, and revenue.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Sirius Systems helps local service businesses uncover the gaps in their lead capture,
            follow-up, booking, CRM, and review process before those gaps cost more money.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              Missed calls and slow replies
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              Leads not getting booked
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              Quotes not getting followed up
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              Reviews not being requested
            </div>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Prefer to check your system first?{" "}
            <Link
              href={CHECKLIST_HREF}
              className="font-medium text-yellow-200 underline-offset-4 hover:underline"
            >
              Use the Revenue Leak Checklist
            </Link>
          </p>
        </div>

        <RevenueLeakAuditForm />
      </section>

      {/* ── What the audit reviews ── */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">What the audit reviews</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            We look across the systems where local service businesses tend to lose opportunities.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIT_REVIEWS.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/40 p-5">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">How it works</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-yellow-200">Step 1</p>
            <h3 className="mt-2 text-xl font-bold">Submit your audit request</h3>
            <p className="mt-3 text-white/70">
              Tell us about your business, website, and biggest lead problem.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-yellow-200">Step 2</p>
            <h3 className="mt-2 text-xl font-bold">We review your current process</h3>
            <p className="mt-3 text-white/70">
              We look for gaps in your website, follow-up, booking, CRM, and reviews.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-yellow-200">Step 3</p>
            <h3 className="mt-2 text-xl font-bold">You get a clear fix list</h3>
            <p className="mt-3 text-white/70">
              You leave with a clear view of what is working, what is leaking, and what to fix.
            </p>
          </div>
        </div>
      </section>

      {/* ── What you walk away with ── */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">What you walk away with</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {WALK_AWAY_WITH.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-5"
              >
                <span aria-hidden className="mt-1 text-yellow-200">
                  &#10003;
                </span>
                <p className="text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best-fit businesses ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Who this is built for</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          The audit is built for local service businesses that rely on calls, forms, bookings,
          reviews, and follow-up. That includes categories like these.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {BEST_FIT.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/85"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Funnel hand-off: what to fix first ── */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">After the audit, you will know what to fix first</h2>
          <p className="mt-3 max-w-3xl text-white/75">
            Some businesses need a smarter website. Some need missed-call text-back. Some need CRM
            automation, review requests, appointment booking, or local SEO and AEO support. The
            audit helps identify the first system that should be tightened before adding more
            complexity.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NEXT_SYSTEMS.map((system) => (
              <Link
                key={system.href}
                href={system.href}
                className="group rounded-xl border border-white/10 bg-black/40 p-5 transition hover:border-yellow-300/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{system.name}</p>
                  <span
                    aria-hidden
                    className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-yellow-200"
                  >
                    &rarr;
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{system.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Checklist hand-off ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="text-3xl font-bold">Want to check your system first?</h2>
          <p className="mt-3 max-w-3xl text-white/75">
            Use the Local Business Revenue Leak Checklist to review the common places where local
            businesses lose calls, bookings, reviews, and follow-up opportunities.
          </p>
          <div className="mt-6">
            <Link
              href={CHECKLIST_HREF}
              className="inline-flex items-center gap-2 rounded-lg border border-yellow-300/40 px-5 py-3 font-semibold text-yellow-200 transition hover:bg-yellow-300/10"
            >
              Use the Checklist
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="border-t border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to find the leaks?</h2>
          <p className="mt-4 text-white/75">
            Submit your audit request and we will map where calls, bookings, reviews, and follow-up
            may be slipping, then show you what to fix first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#request-audit"
              className="rounded-lg bg-yellow-300 px-6 py-3 font-semibold text-black transition hover:bg-yellow-200"
            >
              Book a Revenue Leak Audit
            </Link>
            <Link
              href={CHECKLIST_HREF}
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/30"
            >
              Use the Revenue Leak Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
