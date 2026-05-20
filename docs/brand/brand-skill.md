# Sirius Systems Brand Skill File

> **Status:** canonical brand reference (client-provided 2026-05-20).
> Where this file disagrees with anything else in `/docs/brand/`, this file wins. Reflect the change in the other docs and the `tailwind.config.ts` tokens.

---

## Brand

Sirius Systems is an AI automation, smart website, reputation, and local business growth systems company for service-based businesses.

## Core Positioning

Sirius Systems helps local businesses capture more leads, respond faster, automate follow-up, book more appointments, improve reviews, and connect their website, CRM, messaging, and growth systems into one streamlined platform.

## Brand Personality

- Modern
- Technical but easy to understand
- Confident
- Helpful
- Conversion-focused
- Trust-building
- Futuristic without feeling cold
- Professional for small business owners

## Visual Direction

The visual identity is based on the Sirius Systems logo:

- Electric yellow star outline
- Electric blue AI/human figure
- Near-black background
- High-contrast dark theme
- Clean AI automation feel
- Strong but controlled glow accents

## Official Working Color Palette

```text
Background:        #050505
Background Alt:    #0B0B0F
Surface:           #121218
Surface Alt:       #181824
Primary Yellow:    #F2EA00
Yellow Hover:      #FFF04A
Primary Blue:      #1468FF
Blue Hover:        #3A82FF
Text Primary:      #F5F7FA
Text Secondary:    #B7C0D1
Muted Text:        #8B93A7
Border:            #2A2F3A
Success:           #22C55E
Warning:           #F59E0B
Error:             #EF4444
```

---

## How this file flows into the project

| This file says... | Lives in code at... |
|-------------------|---------------------|
| Core positioning | `lib/site.ts` (`SITE.description`), `brand.md`, `docs/brand/brand-guide.md` |
| Brand personality | `docs/brand/brand-guide.md` §2 (voice + tone), informs all copy |
| Visual direction | `docs/brand/brand-guide.md` §3 + `§7`, `docs/brand/image-prompt-bank.md` style baseline |
| Color palette | `tailwind.config.ts` `colors`, `docs/brand/brand-guide.md` §3 |

When the client revises this file, treat it as a brief to re-sync the four locations above.
