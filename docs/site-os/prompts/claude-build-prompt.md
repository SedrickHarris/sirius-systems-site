# Claude Code Build Prompt Template — Sirius Systems

Use this template when prompting **Claude Code** (the CLI / VS Code surface) to execute build work against this repo. Claude Project (see `claude-project-setup.md`) drafts strategy and copy; Claude Code writes code and commits.

---

## Why this template exists

Generic prompts produce generic output. The Sirius Systems build has hard guardrails (no invented claims, specific page list, specific schema plan). Wrapping every Claude Code session in this template keeps the work aligned to those guardrails without re-explaining them every time.

---

## Standard prompt block (paste at the top of any new Claude Code session)

```
# Sirius Systems — Claude Code Build Prompt

## Project context
- Brand: Sirius Systems (main brand)
- Website: https://siriussys.io/
- Repo: https://github.com/SedrickHarris/sirius-systems-site.git
- Framework: Next.js App Router + MDX + Tailwind
- Hosting: Cloudflare Pages
- Workflow engine: Site Master OS (see /docs/)

## Read before working
Always read these files into context before changes:
- /docs/site-os/inputs/client-discovery-notes.md
- /docs/site-os/inputs/do-not-invent-rules.md
- /docs/site-os/inputs/site-build-plan.md
- /docs/seo/url-strategy.md
- /docs/seo/schema-plan.md
- /docs/seo/internal-linking-plan.md
- /docs/brand/brand-guide.md
- /docs/content/page-copy-plan.md (when working on pages)
- /docs/content/blog-content-plan.md (when working on blog)

## Hard rules
1. Do not invent reviews, ratings, results, case studies, client names, testimonials, awards, certifications, guarantees, partnerships, physical address, exact service areas, founding year, team members, or specific tool integrations. If unsure, OMIT rather than fabricate.
2. Sirius Systems is the main brand. ClickVSG, Sirius Site Studio, and Review Scraper are reference sites only — do not link from Sirius Systems pages without explicit approval, do not present as the same brand.
3. URL slugs must match /docs/seo/url-strategy.md exactly.
4. Schema JSON-LD must match /docs/seo/schema-plan.md and respect do-not-invent rules.
5. Tailwind theme values come from /docs/brand/brand-guide.md. If a value is marked TBD, use the documented placeholder and add a TODO comment with the file + line ref.
6. Every meaningful change gets a one-line entry appended to /docs/site-os/changelog/project-changelog.md in the same commit.

## Workflow per task
1. Read relevant docs above.
2. State the plan in 3–6 bullets before writing code.
3. Make changes.
4. Run `npm run build` (or `next build`) and the linter if applicable.
5. Update the changelog.
6. Commit with a Conventional Commit prefix:
   - `feat:` new feature / page / component
   - `fix:` bug fix
   - `docs:` docs-only change
   - `style:` non-functional formatting
   - `refactor:` code restructure with no behavior change
   - `chore:` tooling, config
   - `seo:` schema / metadata / linking / sitemap

## Do NOT
- Push to remote without explicit confirmation in the same session.
- Force-push or rewrite history without explicit confirmation.
- Commit `.env*`, `.claude/settings.local.json`, or anything in `.gitignore`.
- Skip Git hooks (`--no-verify`) without explicit confirmation.
- Create new top-level folders without updating /docs/site-os/inputs/site-build-plan.md.

## Output style
- Brief progress updates (one sentence per milestone).
- End-of-task summary: what changed, what's next, what's blocked.
- When a do-not-invent rule blocks progress, surface it explicitly and ask the user how to proceed.
```

---

## Task-specific addenda (append per task)

### When building a service page

```
TASK: Build /<service-slug> page.

Inputs:
- /docs/content/page-copy-plan.md → service-page template
- /docs/seo/schema-plan.md → Service + Organization JSON-LD
- /docs/seo/metadata-draft.md → title + meta description
- /docs/seo/internal-linking-plan.md → cross-links

Constraints:
- Use the service-page template structure exactly.
- Include 3–5 internal links to related services or relevant industry pages, per the linking plan.
- Include Service JSON-LD; do NOT include AggregateRating or Review JSON-LD on a service page.
- CTAs link to /contact for now (revisit when booking provider is confirmed).
```

### When building an industry page

```
TASK: Build /industries/<industry-slug> page.

Inputs:
- /docs/content/page-copy-plan.md → industry-page template
- /docs/seo/internal-linking-plan.md → which services to link

Constraints:
- Lead with industry-specific framing (problems, daily reality, lead patterns).
- Map services to industry — link to the most relevant 3–5 service pages.
- Do NOT invent industry-specific testimonials or case studies.
```

### When building a blog post

```
TASK: Publish blog post <slug>.

Inputs:
- /docs/content/blog-post-template.md → MDX skeleton
- /docs/content/blog-publishing-checklist.md → preflight
- /docs/seo/blog-strategy.md → category + cluster fit
- /docs/seo/internal-linking-plan.md → link targets

Constraints:
- MDX file at /content/blog/<slug>.mdx with full frontmatter (title, description, date, author, category, tags, featuredImage, readingTime).
- Featured image at /public/images/blog/<slug>.<ext>.
- Article JSON-LD per /docs/seo/schema-plan.md.
- At least 2 internal links to relevant service or industry pages.
- Run through /docs/content/blog-publishing-checklist.md before commit.
```

### When updating SEO / schema / metadata

```
TASK: <describe>.

Inputs:
- /docs/seo/<relevant file>.md

Constraints:
- Validate JSON-LD with schema.org validator before committing (mention validation in commit message).
- No invented review/rating data in JSON-LD.
```

---

## When to stop and ask

Stop and ask the user when:

- A required piece of content is in `/docs/site-os/inputs/content-needed-from-client.md` and the task can't proceed truthfully without it.
- Two docs disagree (e.g. a URL slug differs between `url-strategy.md` and `internal-linking-plan.md`).
- The task implies inventing a claim that violates `do-not-invent-rules.md`.
- The user asked for a push, force-push, or any irreversible operation.

Asking is faster than fabricating.
