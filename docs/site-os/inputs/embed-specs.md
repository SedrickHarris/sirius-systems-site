# Embed Specifications — Sirius Systems

Confirmed working embed dimensions and wrapper patterns.
Use these exact values for all GHL embeds on this site.
Do not deviate without testing and updating this file.

---

## GHL Calendar Widget

**Confirmed working:** siriussys.io/booking — May 26, 2026
**Calendar URL:** https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4
**Script:** https://link.siriussys.io/js/form_embed.js

### Wrapper div
```
overflow: 'hidden'
background: '#050505'
border: '1px solid #2A2F3A'
borderRadius: '1.5rem'
position: 'relative'
```

### iframe element
```
display: 'block'
width: '100%'
height: '900px'
border: 'none'
background: '#050505'
allowTransparency={true}
scrolling="no"
marginTop: '-72px'
marginBottom: '-52px'
```

### Script tag
```jsx
<Script
  src="https://link.siriussys.io/js/form_embed.js"
  strategy="afterInteractive"
/>
```

### How it works
The negative marginTop and marginBottom pull the white
strips that GHL renders above and below the widget card
outside the wrapper boundary. The overflow: hidden on
the wrapper clips them from view. The iframe height of
900px compensates for both margins so the visible
calendar content is fully rendered.

Visible height = 900px - 72px - 52px = 776px

### Notes
- Do not remove overflow: hidden from the wrapper —
  the clipping stops working without it
- Do not reduce marginTop below -72px — white strip
  returns at the top
- If GHL updates their calendar template and white
  returns, increase marginTop in 10px increments
  until it clips cleanly
- The left panel inside the GHL widget has its own
  internal scroll — this is GHL's design, not a bug

---

## GHL Contact Form Widget

**Status:** Replaced with native Next.js QualificationForm
component. ContactFormEmbed.tsx is retained in the repo
but not used. No iframe specs needed.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-26 | Calendar iframe dimensions confirmed and locked. White strip fix verified on siriussys.io/booking. |
