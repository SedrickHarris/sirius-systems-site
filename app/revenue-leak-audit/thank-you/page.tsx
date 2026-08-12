export const metadata = {
  title: "Audit Request Received | Sirius Systems",
  description: "Your Sirius Systems Revenue Leak Audit request was received.",
  // Funnel step — kept out of the sitemap AND out of the index. Sitemap omission
  // alone is only a discovery hint; this page is reachable from the funnel and
  // would otherwise be crawled and indexed. Matches /book, /watch,
  // /get-started, /thank-you, /onboarding.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm font-semibold text-yellow-200">Request received</p>

        <h1 className="mt-4 text-4xl font-bold">
          Your Revenue Leak Audit request was received.
        </h1>

        <p className="mt-5 text-lg leading-8 text-white/75">
          We will review your website, contact process, follow-up flow, and public online presence.
          Your next step is to book a time for the audit call.
        </p>

        <a
          href="/revenue-leak-audit/book"
          className="mt-8 inline-flex rounded-lg bg-yellow-300 px-6 py-3 font-semibold text-black transition hover:bg-yellow-200"
        >
          Book Your Audit Time
        </a>
      </section>
    </main>
  );
}
