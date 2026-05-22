import Script from 'next/script'

// Third-party Website Contact Form embed (Sirius Systems / LeadConnector).
// Iframe attributes, src, id, title, data-form-id, and inline style are
// preserved exactly as provided by the vendor. Wrapper styles use existing
// brand tokens only. The form_embed.js loader is shared with BookingEmbed
// via a common id so next/script renders one script tag per page.
export function ContactFormEmbed() {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
        minHeight: '492px',
      }}
    >
      <iframe
        src="https://link.siriussys.io/widget/form/BHqYGk6NAbu58Q68tSRk"
        style={{
          width: '100%',
          // min-height floor (data-height=492 from GHL, +breathing room
          // for the two-column layout) until form_embed.js autosizes.
          // Avoids the collapsed-height bug from height:100% when the
          // parent has no defined height.
          minHeight: '560px',
          border: 'none',
          borderRadius: '3px',
          display: 'block',
          backgroundColor: 'var(--surface)',
        }}
        id="inline-BHqYGk6NAbu58Q68tSRk"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Contact Form"
        data-height="492"
        data-layout-iframe-id="inline-BHqYGk6NAbu58Q68tSRk"
        data-form-id="BHqYGk6NAbu58Q68tSRk"
        title="Website Contact Form"
      />
      <Script
        id="ghl-form-embed"
        src="https://link.siriussys.io/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
