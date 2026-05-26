import type { Metadata } from 'next'
import Script from "next/script";
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book a Strategy Call | Sirius Systems',
  description:
    'Schedule a discovery call with Sirius Systems. Twenty minutes to map where leads, reviews, and follow-up are leaking in your business.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book a Strategy Call | Sirius Systems',
    description:
      'Schedule a discovery call with Sirius Systems. Twenty minutes to map where leads, reviews, and follow-up are leaking in your business.',
    url: '/booking',
  },
}

export default function BookingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/booking',
            name: 'Book a Strategy Call | Sirius Systems',
            description:
              'Schedule a discovery call with Sirius Systems. Twenty minutes to map where leads, reviews, and follow-up are leaking in your business.',
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Book a Strategy Call', url: '/booking' },
          ]),
        ]}
      />
      <main style={{ background: "var(--bg-alt)", minHeight: "100vh" }}>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 20px" }}>
          <div style={{ maxWidth: 640, marginBottom: 28 }}>
            <h1 style={{ color: "var(--text-on-dark)", fontSize: 42, lineHeight: 1.1, margin: 0 }}>
              Book Your Strategy Call
            </h1>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: 18, marginTop: 12 }}>
              Choose a time below and complete your booking.
            </p>
          </div>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 28,
              padding: 22,
              boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4"
              style={{ width: "100%", border: "none", overflow: "hidden", display: "block" }}
              scrolling="no"
              id="Qn4ugo4iZ8ZJ8eaxX1c4_1779763469847"
              title="Booking widget"
            />
            <Script
              src="https://link.siriussys.io/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </main>
    </>
  );
}
