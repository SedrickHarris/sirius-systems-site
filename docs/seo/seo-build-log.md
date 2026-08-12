# SEO Build Log

Log one entry per pillar page built through the SEO Opportunity Automation pipeline.

| Date | Opportunity ID | Page Title | Route | Status | Notes |
|---|---|---|---|---|---|
| 2026-07-06 | o-002 | Lead Generation Automation for Real Estate Agents | `/industries/real-estate-property/lead-generation-automation` | Shipped 2026-07-08 (`303988a`) | Decision `build-new`. Primary keyword "lead generation for real estate agents" + 8 supporting. pageType `audience-service`, intent `transactional`. Scorer recommended flat slug `get-leads-for-real-estate`; overridden to the industry-hub × service path to match Batch 1 intersection architecture. Schema planned: WebPage + BreadcrumbList (4 levels) + Service + FAQPage. Brief: 5 FAQs. Logged retroactively 2026-08-12 from `selected-opportunity.json` + `page-brief.json`. **Lineage caveat — see note below.** |

> **Lineage caveat on the o-002 entry.** The `opportunities.json`, `keyword-clusters.json`, and
> `normalized-keywords.json` currently on disk are **not** the files this page was selected from.
> They carry `generatedAt: 2026-07-08T17:52`, from a later pipeline run that overwrote the
> 2026-07-06 outputs. `selected-opportunity.json` records that o-002 came from "second
> opportunities.json" on 2026-07-06 — that file no longer exists and is not in
> `keyword-exports/archive/` (every archived `opportunities-*.json` there is dated 2026-07-08).
>
> Worse, the ID was reused: the `o-002` in today's `opportunities.json` is a **different**
> opportunity ("get more auto repair customers automatically"), not the real-estate one. Do not
> cross-reference this log entry's opportunity ID against the current `opportunities.json` — they
> will appear to match and do not. The authoritative record for this page is
> `selected-opportunity.json` and `page-brief.json` (both `2026-07-06`), which are self-contained.
>
> Going forward, snapshot `opportunities.json` alongside `selected-opportunity.json` at selection
> time, or namespace opportunity IDs per run, so this cannot recur.
