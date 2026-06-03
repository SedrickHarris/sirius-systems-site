import RevenueLeakAuditForm from "@/components/RevenueLeakAuditForm";

export const metadata = {
  title: "Free Revenue Leak Audit | Sirius Systems",
  description:
    "Find where your local service business is losing leads, missed calls, follow-ups, bookings, and reviews.",
};

export default function RevenueLeakAuditPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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
        </div>

        <RevenueLeakAuditForm />
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">What the audit checks</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Website conversion path",
              "Phone and form response speed",
              "Lead follow-up process",
              "CRM pipeline visibility",
              "Quote follow-up gaps",
              "Review request process",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/40 p-5">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
}
