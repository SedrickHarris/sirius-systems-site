# Image Prompt Bank — Sirius Systems

Reusable AI image-generation prompts for the website's hero, section, and blog imagery. Designed to produce visuals that fit the brand direction (modern, geometric, dark-leaning, "stellar systems") without resorting to stock cliches.

> When real brand colors arrive, update the `--accent` hex values inside the prompts to match.

---

## 1. Style baseline (paste into every prompt)

```
Style: modern, minimal, geometric, dark surface. Slightly futuristic but restrained — not sci-fi pastiche. High contrast. Crisp edges. Tasteful use of glow. No people. No text. No logos. No watermarks. No stock-photo cliches. Aspect ratio matches the slot.
Color palette: near-black background (#050505) with elevated dark surface (#121218). Two-color accent system — PRIMARY YELLOW (#F2EA00) used very sparingly for the single most important focal point (a star core, an apex node, a beacon tip); SECONDARY BLUE (#1468FF) for supporting accents (constellation lines, secondary nodes, atmospheric glows). Yellow appears at most once per image; blue carries the rest. Subtle starfield or constellation cue is allowed but not required.
Mood: confident, technical, calm.
```

Append the slot-specific block below to that baseline.

## 2. Hero images

### Home `/`
```
Subject: an abstract geometric "system" — interconnected nodes forming a constellation that resolves into the loose silhouette of a directional star (the Sirius reference). Lines clean, nodes glowing softly. The composition leans top-right, leaves negative space lower-left for headline.
Aspect: 16:9 hero, ~1600x900.
```

### Services `/services`
```
Subject: a clean grid of 14 minimalist glyphs arranged in 3 visual groupings (mirroring the AI / Smart-sites / Reputation pillars), with a faint capstone node above them all. Geometric, no skeuomorphism. Each glyph readable at thumbnail size.
Aspect: 16:9 hero.
```

### Capstone `/all-in-one-business-growth-system`
```
Subject: a flow diagram rendered as constellation lines — lead enters at left, moves through booking, then service, then review, looping back. Each waypoint a soft-glowing node. The loop closes elegantly on itself.
Aspect: 16:9 hero.
```

### Contact `/contact`
```
Subject: a single, calm beacon of light against a deep field, lines emerging from it suggesting communication. No phone or envelope icons. Quiet and direct.
Aspect: 16:9 hero or 3:2.
```

### About `/about`
```
Subject: a single bright star anchoring a small constellation, asymmetric, with two or three smaller satellites — abstract reference to a founder building a system. No portrait silhouette; the founder photo lives separately.
Aspect: 16:9 hero or 4:3.
```

## 3. Service-page heroes (one block per service)

Use the style baseline + one of the following subject prompts:

### `/ai-automation`
```
Subject: a clockwork-meets-circuit motif — gears replaced by light traces forming a closed loop. Sense of automation moving on its own. Single accent flare where loop begins/ends.
```

### `/ai-chatbots`
```
Subject: two stylized speech-bubble shapes formed by constellation lines, one slightly transformed/shifted to suggest dialogue. Geometric, minimal, no facial elements.
```

### `/ai-voicebots`
```
Subject: an abstract waveform rendered as a row of glowing vertical lines varying in height, with one extending into a phone-receiver-shaped curve at the far right. Quiet, confident.
```

### `/crm-automation`
```
Subject: a hub-and-spoke node graph — central CRM node with lines radiating to lead / job / follow-up / review nodes. Clean, asymmetric, minimal labels (no readable text).
```

### `/appointment-booking-automation`
```
Subject: a calendar abstracted into a constellation grid — rows of nodes with one column glowing as if booked. No actual calendar numerals.
```

### `/lead-generation-automation`
```
Subject: a funnel rendered as falling constellation lines narrowing to a glowing point — abstract, no literal funnel shape.
```

### `/smart-websites`
```
Subject: a stylized browser frame (chrome) drawn in thin lines, contents replaced with a constellation layout. The frame itself fades at the edges.
```

### `/google-business-profile-optimization`
```
Subject: a single pin-shaped node on a faint map grid (no actual map). Light beams from the pin form a small constellation upward. No Google branding.
```

### `/local-seo-aeo`
```
Subject: a magnifying-glass shape constructed from constellation lines, hovering over a small node cluster. Abstract, restrained.
```

### `/reputation-management`
```
Subject: a five-point star at center, surrounded by smaller orbiting nodes. The star is clean, geometric, slightly glowing — not a literal review-star icon.
```

### `/review-automation`
```
Subject: a sequence of small star nodes in a procession line, each slightly brighter than the last, suggesting accumulation. Composition reads left-to-right.
```

### `/ai-review-responses`
```
Subject: two paired speech-bubble shapes (constellation lines) facing each other, one shape mirrored. Sense of considered reply, not chatter.
```

### `/competitor-review-benchmarking`
```
Subject: two side-by-side constellation clusters of unequal size, with a thin connecting line and a subtle measurement-mark style indicator between them. Comparative, not adversarial.
```

## 4. Industry-page heroes

### `/industries/home-services`
```
Subject: a stylized roofline silhouette constructed entirely of constellation lines, with one bright node at the doorway. No literal house or tools.
```

### `/industries/contractors`
```
Subject: a precise blueprint-style grid with one node highlighted, suggesting precision and planning. No literal tools.
```

### `/industries/professional-services`
```
Subject: a clean horizontal bar of constellation lines anchored by a single bright node — abstract reference to a signature, a deliberate line of work, a confident decision. No literal briefcases, pens, or scales.
```

### `/industries/auto-services`
```
Subject: an abstract circular composition — concentric arcs of constellation lines orbiting a single bright center node. Suggests rotation and motion without rendering a literal wheel or rotor.
```

### `/industries/beauty-wellness`
```
Subject: a calm radial composition — soft concentric rings of constellation light radiating outward from a single bright center node. Restrained and balanced. No literal mirrors, scissors, or wellness icons.
```

## 5. Blog featured-image template

Use the style baseline + the post-specific block:

```
Subject: <one concrete metaphor for the post's core idea, expressed in constellation lines>. The image must work at 1200x630 for OG sharing AND at thumbnail size on the /blog index.
Aspect: 1200x630 (1.91:1).
```

Examples (matching launch posts):

### "Where to start with AI automation"
```
Subject: a starting-line marker rendered as a single bright node with constellation lines branching to the right (the path forward). The "start" node is unmistakably the focal point.
```

### "Why a 4.6 rating outperforms a 5.0 in local search"
```
Subject: two clusters of star-nodes side by side — the left has 5 perfectly identical glowing points; the right has slightly varied points (some brighter, some dimmer). The right cluster reads warmer / more believable.
```

### "Google Business Profile checklist for service businesses (2026)"
```
Subject: a vertical stack of small constellation-line checkmarks, each completed; the most recent checkmark glows slightly.
```

### "What an 'all-in-one business growth system' actually means"
```
Subject: three separate node clusters in the top half, merging into a single integrated constellation in the bottom half. The transition is the focal point.
```

## 6. OG / social card default

When a page has no specific image:

```
Subject: the Sirius Systems wordmark (placeholder until logo arrives) centered, on a near-black field (#050505) with a faint constellation pattern behind. Yellow (#F2EA00) accent line under the wordmark — the only yellow element. Optional blue (#1468FF) star-burst mark to the left of the wordmark.
Aspect: 1200x630.
```

Stored at `/public/og/default.png`.

## 7. Generation + post-processing checklist

For every generated image:

- [ ] Matches the style baseline (no off-brand drift)
- [ ] No people, no readable text, no logos, no watermarks
- [ ] Works at intended size AND thumbnail
- [ ] Contrast doesn't muddy the headline text overlaid in the design
- [ ] Saved as WebP (preferred) or PNG, with a high-quality JPG fallback if needed
- [ ] Filename = slug, lowercase, kebab-case: `<page-or-post-slug>.webp`
- [ ] Stored at the correct path:
  - Pages: `/public/images/<page-slug>.webp`
  - Blog: `/public/images/blog/<post-slug>.webp`
  - OG defaults: `/public/og/<purpose>.png`
- [ ] Alt text written per the source page (descriptive, not keyword-stuffed)

## 8. What we do NOT generate

- AI images of "the team" — these would be fabricated people
- AI images of "happy clients" — same problem
- AI images of fake reviews, fake screenshots, fake dashboards (UI mockups should be real or clearly abstract)
- Generated logos or wordmarks (use the real logo once provided)

## 9. Changelog of this file

| Date | Change |
|------|--------|
| 2026-05-20 | Initial prompt bank — style baseline, hero prompts for every Phase 1 page, blog image template, OG default. |
| 2026-05-20 | Industry hero prompts rewritten for the 5 confirmed hubs. Deprecated `cleaning-companies`, `junk-removal`, `real-estate`, `coaches-consultants` prompts removed. New prompts added for `professional-services`, `auto-services`, `beauty-wellness`. Note: §1 style baseline still references the deprecated yellow/blue palette — separate doc-sweep task to align with the current light + system-blue + navy brand. |
