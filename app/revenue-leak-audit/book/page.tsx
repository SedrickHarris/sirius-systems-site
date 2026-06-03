export const metadata = {
  title: "Book Your Revenue Leak Audit | Sirius Systems",
  description: "Choose a time for your Sirius Systems Revenue Leak Audit.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-yellow-200">Book your audit</p>

          <h1 className="mt-4 text-4xl font-bold">
            Pick a time for your Revenue Leak Audit.
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/75">
            This is a 20-minute review of your lead capture, follow-up, booking, CRM, and review process.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex min-h-[600px] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/40 p-8 text-center text-white/60">
            Paste your GoHighLevel calendar embed here.
          </div>
        </div>
      </section>
    </main>
  );
}
