# Sirius Systems — Website Project

Official website project for **Sirius Systems**, an AI automation, smart websites, and reputation-management company.

- **Live site (current):** https://siriussys.io/
- **Repository:** https://github.com/SedrickHarris/sirius-systems-site
- **Framework target:** Next.js (App Router) + MDX
- **Hosting target:** Cloudflare Pages
- **Workflow engine:** Site Master OS (this `/docs/site-os` folder)

---

## What this repository is

This repo is **two things at once**:

1. The source code for the future Sirius Systems website (Next.js + MDX, not yet built).
2. The **Site Master OS** — a documentation operating system that drives the build: every input, prompt, plan, QA gate, and changelog entry lives in `/docs/`.

The Site OS gets populated **before** any page is built. Code follows the docs, not the other way around.

---

## Repository map

```
/                          # Next.js app will live at the root (not yet scaffolded)
brand.md                   # Root-level brand snapshot (quick reference)
README.md                  # This file

docs/
  site-os/                 # The Site Master OS — runs the project
    inputs/                # Facts, sources, unknowns, guardrails, build plan
    prompts/               # Claude Project + Claude Code prompt templates
    outputs/               # Generated artifacts (drafts, plans) — populated during build
    qa/                    # Prelaunch checklists and quality gates
    changelog/             # Project changelog
  seo/                     # URL, schema, metadata, topical authority, linking, blog SEO
  brand/                   # Brand guide, image prompts, motion guidelines
  content/                 # Page copy plans, blog plan, post template, publishing checklist
  template/                # Reusable templates (to be filled during build)

content/blog/              # MDX blog posts (created during blog build)
public/images/blog/        # Blog featured images and inline assets
```

---

## How to use the Site OS

1. **Read `docs/site-os/inputs/` first** — confirmed facts, do-not-invent rules, what still needs the client's input.
2. **Update `docs/site-os/inputs/site-build-plan.md`** as scope changes.
3. **Run prompts from `docs/site-os/prompts/`** in Claude Project (for strategy) or Claude Code (for execution).
4. **Log every meaningful change** in `docs/site-os/changelog/project-changelog.md`.
5. **Gate launch on `docs/site-os/qa/prelaunch-checklist.md`** — no green-light without it.

---

## Brand relationship rule

**Sirius Systems** is the main brand for this site.

The following are **service reference / ecosystem inspiration only** — do not copy content from them, do not present them as the same brand on this site:

- ClickVSG — https://clickvsg.com/
- Sirius Site Studio — https://siriussitestudio.com/
- Review Scraper — https://reviewscraper.net/

If cross-linking is desired later, it must be approved and labeled explicitly in `docs/site-os/inputs/site-build-plan.md`.

---

## Do not invent

This project ships only what is verifiable. The full list of things that must never be fabricated lives in `docs/site-os/inputs/do-not-invent-rules.md`. Read it before drafting any page copy, schema, or marketing claim.

---

## Status

- [x] Repository created
- [x] Site OS scaffolding committed
- [x] Foundation docs populated
- [x] Next.js app scaffolded (App Router + TS + Tailwind + MDX, global shell)
- [x] Core pages built (`/`, `/about`, `/services`, `/contact`)
- [ ] Service pages built (14)
- [ ] Industry pages built (7)
- [ ] Blog system built
- [ ] Prelaunch QA pass
- [ ] Cloudflare Pages deploy

Track progress in `docs/site-os/changelog/project-changelog.md`.

---

## Local development

After cloning, install and run:

```sh
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```sh
npm run build     # production build
npm run start     # serve the build
npm run typecheck # tsc --noEmit
npm run lint      # next lint
```

Brand colors and type are placeholders (`tailwind.config.ts`) until the client confirms — search for `PLACEHOLDER` to find swap points.
