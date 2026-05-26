import type { Metadata } from 'next'
import Script from "next/script";
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book an Appointment | Sirius Systems',
  description:
    'Schedule a discovery call with Sirius Systems. Twenty minutes to map where leads, reviews, and follow-up are leaking in your business.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book an Appointment | Sirius Systems',
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
            name: 'Book an Appointment | Sirius Systems',
            description:
              'Schedule a discovery call with Sirius Systems. Twenty minutes to map where leads, reviews, and follow-up are leaking in your business.',
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Book an Appointment', url: '/booking' },
          ]),
        ]}
      />
      <main style={{ background: "var(--bg-alt)", minHeight: "100vh", padding: "64px 20px" }}>
        <section style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 24 }}>
            <h1 style={{ color: "var(--text-on-dark)", fontSize: 42, margin: 0 }}>Book Your Appointment</h1>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: 18 }}>
              Choose a time below and complete your booking.
            </p>
          </div>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 28,
              padding: 24,
              boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
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
