// scripts/curate-reviews.ts
// Interactive curation CLI.
//
// Reads data/google-reviews.staged.json (output of fetch-reviews.ts) and walks
// each NEW review (not already in data/google-reviews.json). For each one:
//   [y] approve  →  add to final file with verified: true + permissionToPublish: true
//   [n] skip     →  do not include
//   [e] edit     →  override the displayed author name (e.g., "John D." instead
//                   of full last name), then confirm approve
//
// Final output: data/google-reviews.json. Only this file is committed.
//
// If zero reviews end up approved, `verified` stays false so the homepage
// renders the neutral trust fallback instead of an empty review block.

import fs from 'fs'
import path from 'path'
import readline from 'readline'

const PROJECT_ROOT = process.cwd()
const STAGED_PATH = path.join(PROJECT_ROOT, 'data', 'google-reviews.staged.json')
const FINAL_PATH = path.join(PROJECT_ROOT, 'data', 'google-reviews.json')

interface StagedReview {
  id: string
  authorName: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  reviewedAt: string
  sourceUrl: string
}

interface ApprovedReview extends StagedReview {
  verified: true
  permissionToPublish: true
}

interface StagedFile {
  fetchedAt: string
  placeId: string
  placeUrl: string
  summary: {
    averageRating: number
    totalReviewCount: number
    lastFetchedAt: string
  }
  reviews: StagedReview[]
}

interface FinalFile {
  verified: boolean
  lastVerifiedAt: string | null
  source: 'google-business-profile'
  placeId: string | null
  placeUrl: string | null
  summary: {
    averageRating: number | null
    totalReviewCount: number | null
    lastFetchedAt: string | null
  } | null
  reviews: ApprovedReview[]
}

function stars(n: number): string {
  const filled = '★'.repeat(n)
  const empty = '☆'.repeat(5 - n)
  return `${filled}${empty}`
}

function formatDate(s: string): string {
  return new Date(s).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function ask(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise((resolve) => rl.question(prompt, (ans) => resolve(ans)))
}

async function main(): Promise<void> {
  if (!fs.existsSync(STAGED_PATH)) {
    console.error(`No staged reviews file at ${STAGED_PATH}.`)
    console.error('Run `npm run fetch-reviews` first.')
    process.exit(1)
  }

  const staged = JSON.parse(fs.readFileSync(STAGED_PATH, 'utf-8')) as StagedFile

  // Load existing approved reviews if present; otherwise start with a fallback shape.
  let existing: FinalFile = {
    verified: false,
    lastVerifiedAt: null,
    source: 'google-business-profile',
    placeId: null,
    placeUrl: null,
    summary: null,
    reviews: [],
  }
  if (fs.existsSync(FINAL_PATH)) {
    existing = JSON.parse(fs.readFileSync(FINAL_PATH, 'utf-8')) as FinalFile
  }

  const existingIds = new Set(existing.reviews.map((r) => r.id))
  const newReviews = staged.reviews.filter((r) => !existingIds.has(r.id))

  console.log(`Staged total: ${staged.reviews.length}`)
  console.log(`Already approved: ${existingIds.size}`)
  console.log(`New to curate: ${newReviews.length}`)

  if (newReviews.length === 0) {
    console.log('Nothing to do.')
    return
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const newlyApproved: ApprovedReview[] = []

  for (let i = 0; i < newReviews.length; i++) {
    const r = newReviews[i]
    console.log('')
    console.log(`[${i + 1}/${newReviews.length}] ${r.authorName}`)
    console.log(`Date:   ${formatDate(r.reviewedAt)}`)
    console.log(`Rating: ${stars(r.rating)} (${r.rating}/5)`)
    console.log(`Text:   ${r.text || '(no comment)'}`)

    const answer = (await ask(rl, 'Action: [y] approve / [n] skip / [e] edit name: ')).trim().toLowerCase()

    if (answer === 'y') {
      newlyApproved.push({ ...r, verified: true, permissionToPublish: true })
      console.log('→ approved')
    } else if (answer === 'e') {
      const newName = (await ask(rl, `Display name (blank = keep "${r.authorName}"): `)).trim()
      const finalName = newName || r.authorName
      const confirm = (await ask(rl, `Approve as "${finalName}"? [y/n]: `)).trim().toLowerCase()
      if (confirm === 'y') {
        newlyApproved.push({ ...r, authorName: finalName, verified: true, permissionToPublish: true })
        console.log('→ approved')
      } else {
        console.log('→ skipped')
      }
    } else {
      console.log('→ skipped')
    }
  }

  rl.close()

  const allApproved = [...existing.reviews, ...newlyApproved]

  const final: FinalFile = {
    // verified: true only when at least one review is approved AND all approved
    // reviews carry verified+permissionToPublish. The latter is guaranteed by
    // how we construct ApprovedReview, so the gate is the count.
    verified: allApproved.length > 0,
    lastVerifiedAt: new Date().toISOString(),
    source: 'google-business-profile',
    placeId: staged.placeId,
    placeUrl: staged.placeUrl,
    summary: {
      averageRating: staged.summary.averageRating,
      totalReviewCount: staged.summary.totalReviewCount,
      lastFetchedAt: staged.summary.lastFetchedAt,
    },
    reviews: allApproved,
  }

  fs.writeFileSync(FINAL_PATH, JSON.stringify(final, null, 2))

  console.log('')
  console.log('---')
  console.log(`Approved this session: ${newlyApproved.length}`)
  console.log(`Total approved now:    ${allApproved.length}`)
  console.log(`Wrote:                 ${FINAL_PATH}`)
  console.log('')
  console.log('To publish:')
  console.log('  git add data/google-reviews.json')
  console.log('  git commit -m "reviews: curate GBP reviews"')
  console.log('  git push')
}

main().catch((err) => {
  console.error('Error:', err instanceof Error ? err.message : err)
  process.exit(1)
})
