# seo-automation

Low-token SEO opportunity automation module for Site OS Master.

## What this module is

`seo-automation/` holds the canonical, zero-dependency Node scripts and data-shape contract for
the SEO opportunity automation workflow. The scripts do the deterministic, mechanical work
(scanning routes, parsing CSV exports, clustering keywords, scoring opportunities) so that Claude
Code spends tokens on judgment and content, not on parsing large files.

Site OS Master stores the canonical copies. Generated client repos receive scaffold copies during
new-client onboarding. The full workflow narrative lives at
`docs/seo-opportunity-automation-workflow.md`.

## When to scaffold it

Copy this module into a client repo when the client site is ready for ongoing SEO growth work,
typically after the Phase 1 launch pages exist and there is a real route tree to scan. The client
repo is where the scripts run, because they read that repo's `app/` or `pages/` router and that
repo's keyword exports.

## What each script does

- `scripts/scan-routes.mjs` reads the Next.js `app/` and `pages/` routers and writes a compressed
  route manifest. It extracts route paths, source files, candidate titles and headings, internal
  links, schema hints, and a rough word estimate.
- `scripts/parse-keyword-csv.mjs` reads the newest Google Keyword Planner CSV export, normalizes
  the columns, deduplicates, and writes clean keyword JSON.
- `scripts/cluster-keywords.mjs` groups the normalized keywords into topic clusters by service,
  location, audience, problem, comparison, cost, and emergency patterns.
- `scripts/score-opportunities.mjs` compares clusters against existing routes and writes a ranked
  list of likely missing pillar page opportunities.

## Expected client repo paths

All inputs and outputs live under `docs/seo/` in the client repo:

- `docs/seo/keyword-exports/` input folder for raw Keyword Planner CSV files (you create and fill)
- `docs/seo/route-manifest.json` output of scan-routes
- `docs/seo/normalized-keywords.json` output of parse-keyword-csv
- `docs/seo/keyword-clusters.json` output of cluster-keywords
- `docs/seo/opportunities.json` output of score-opportunities

The scripts create `docs/seo/` automatically if it does not exist. They skip `node_modules`,
`.next`, `out`, `.git`, `dist`, `build`, and `.cache` while scanning.

## Run order

0. **Archive the previous run's `opportunities.json`** (see below — required, do not skip)
1. `scan-routes.mjs`
2. manual CSV drop into `docs/seo/keyword-exports/`
3. `parse-keyword-csv.mjs`
4. `cluster-keywords.mjs`
5. `score-opportunities.mjs`

Steps 1 and 2 are independent and can happen in either order. Steps 3, 4, and 5 must run in
sequence because each reads the previous step's JSON output.

## Required archive-before-overwrite step

**Before every pipeline run, copy the existing `docs/seo/opportunities.json` to
`docs/seo/keyword-exports/archive/opportunities-[YYYY-MM-DD-at-HH_MM_SS].json`.**

None of the scripts do this for you. `score-opportunities.mjs` writes `opportunities.json` with a
plain overwrite (`fs.writeFile`, no backup, no prompt), so an un-archived prior run is gone the
moment the script succeeds.

PowerShell:

```powershell
$src = "docs/seo/opportunities.json"
if (Test-Path $src) {
  $stamp = Get-Date -Format "yyyy-MM-dd-at-HH_mm_ss"
  Copy-Item $src "docs/seo/keyword-exports/archive/opportunities-$stamp.json"
}
```

Bash:

```bash
[ -f docs/seo/opportunities.json ] && \
  cp docs/seo/opportunities.json \
     "docs/seo/keyword-exports/archive/opportunities-$(date +%Y-%m-%d-at-%H_%M_%S).json"
```

### Why this is mandatory

Opportunity IDs (`o-001`, `o-002`, …) are **assigned per run and are not stable across runs**. The
same ID routinely refers to a completely different opportunity in the next run's output. When a
page ships, `selected-opportunity.json` records only the ID — so without the archived
`opportunities.json` from that exact run, the ID cannot be resolved back to the opportunity that
was actually chosen, and cross-referencing the current file returns a confident wrong answer.

This already happened once. The 2026-07-06 run selected `o-002` and shipped
`/industries/real-estate-property/lead-generation-automation`. The 2026-07-08 run overwrote
`opportunities.json` without archiving first; the 07-06 file is unrecoverable, and today's `o-002`
is an unrelated auto-repair opportunity. Full write-up in `docs/seo/seo-build-log.md`.

Archived files are committed to git deliberately — Keyword Planner CSVs capture search metrics at
the moment they were pulled and cannot be regenerated later, and the archived opportunity
snapshots are the only lineage record for shipped pages. Never clear this folder.

## Required manual Keyword Planner export step

Site OS never generates keyword metrics. A human must:

1. Open Google Keyword Planner.
2. Use the seed keywords from the SEO seed keywords prompt to discover or refine keywords.
3. Export the results as a CSV.
4. Save the CSV into `docs/seo/keyword-exports/` in the client repo.

`parse-keyword-csv.mjs` then reads the newest CSV in that folder. If the folder is missing or
empty, the script prints an informational message and exits cleanly without writing anything.

## Outputs per script

| Script | Reads | Writes |
| --- | --- | --- |
| scan-routes.mjs | `app/`, `pages/` routers | `docs/seo/route-manifest.json` |
| parse-keyword-csv.mjs | newest CSV in `docs/seo/keyword-exports/` | `docs/seo/normalized-keywords.json` |
| cluster-keywords.mjs | `docs/seo/normalized-keywords.json` | `docs/seo/keyword-clusters.json` |
| score-opportunities.mjs | `docs/seo/keyword-clusters.json`, `docs/seo/route-manifest.json` | `docs/seo/opportunities.json` |

Each output includes `generatedAt` and a `warnings[]` array. See
`seo-automation/templates/json-shapes.md` for the full field contract.

## Low-token usage pattern

The scripts produce small, compressed JSON files. Claude Code reads those JSON summaries instead
of crawling the route tree or a multi-thousand-row CSV. The expensive, repetitive parsing happens
once in Node and is cached on disk. Claude Code is then used only for the steps that need
judgment: selecting opportunities, writing briefs, building pages, and QA. Do not ask Claude Code
to re-derive route data or re-parse CSV rows that a script already produced.

## No-fake-data rule

These scripts never invent search volume, CPC, competition, or keyword difficulty. Metric values
are carried through exactly as exported, and missing values are recorded as null. The opportunity
`score` is an internal build-priority heuristic only. It is not keyword difficulty, ranking
probability, or a traffic estimate, and it must never be presented as one. This module inherits
`docs/no-fake-data-policy.md` from Site OS Master in full.

## Example command sequence

Bash:

```bash
cd "<client repo>"
node seo-automation/scripts/scan-routes.mjs
# export a Keyword Planner CSV, then save it into docs/seo/keyword-exports/
node seo-automation/scripts/parse-keyword-csv.mjs
node seo-automation/scripts/cluster-keywords.mjs
node seo-automation/scripts/score-opportunities.mjs
```

PowerShell (Windows):

```powershell
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; node seo-automation/scripts/scan-routes.mjs
# export a Keyword Planner CSV, then save it into docs/seo/keyword-exports/
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; node seo-automation/scripts/parse-keyword-csv.mjs
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; node seo-automation/scripts/cluster-keywords.mjs
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; node seo-automation/scripts/score-opportunities.mjs
```
