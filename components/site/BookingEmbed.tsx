import Script from 'next/script'

// Third-party booking calendar embed (Sirius Systems / LeadConnector).
// Keeps the iframe attributes and src exactly as provided by the vendor;
// only the surrounding wrapper styles use existing brand tokens so the
// embed sits cleanly inside the dark surface system.
export function BookingEmbed() {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <iframe
        src="https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4"
        style={{
          width: '100%',
          border: 'none',
          overflow: 'hidden',
          minHeight: '720px',
          // iframe element fallback color (shown during load and in any
          // region the embedded document leaves transparent); does not
          // override the GHL document's own background.
          backgroundColor: 'var(--surface)',
        }}
        scrolling="no"
        id="Qn4ugo4iZ8ZJ8eaxX1c4_1779408415920"
      />
      <Script
        id="ghl-form-embed"
        src="https://link.siriussys.io/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
