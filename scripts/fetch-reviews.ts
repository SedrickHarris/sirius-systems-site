// scripts/fetch-reviews.ts
// Fetches Google Business Profile reviews via OAuth 2.0 + GBP API.
//
// Outputs an UNCURATED snapshot to data/google-reviews.staged.json — that file
// is gitignored. The interactive curate step (scripts/curate-reviews.ts) is the
// only path that writes to data/google-reviews.json, and only after human approval.
//
// First run: opens a browser to Google consent screen, captures the OAuth
// callback on localhost:3333, saves tokens to scripts/tokens.json (gitignored).
// Subsequent runs: uses the saved refresh token, no browser.
//
// GBP API note: the reviews endpoint is still on the legacy
// mybusiness.googleapis.com/v4/ API — Google never migrated reviews to the new
// split APIs. We use `googleapis` for accounts + locations and a raw fetch for
// the v4 reviews endpoint.

import fs from 'fs'
import path from 'path'
import http from 'http'
import { URL } from 'url'
import { exec } from 'child_process'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

const PROJECT_ROOT = process.cwd()
const CREDENTIALS_PATH = path.join(PROJECT_ROOT, 'credentials.json')
const TOKENS_PATH = path.join(PROJECT_ROOT, 'scripts', 'tokens.json')
const STAGED_PATH = path.join(PROJECT_ROOT, 'data', 'google-reviews.staged.json')
const PLACE_ID = 'ChIJ5_nmHI_RHi4RrYRgpNp5pWs'
const PLACE_URL = 'https://share.google/TUgLZOpTwsYaHLaLZ'
// Sirius Systems GBP location ID. The location is accessible to
// sedrickharris17@gmail.com via direct GET but does NOT enumerate under
// accounts/{personal_account}/locations.list (likely lives in a Business
// Group / Organization container outside the default accounts.list view).
// So we look it up directly by name instead of searching by Place ID.
const LOCATION_ID = '8459044461157530093'
const CALLBACK_PORT = 3333
const CALLBACK_PATH = '/oauth2callback'

const SCOPES = ['https://www.googleapis.com/auth/business.manage']

interface OAuthClientConfig {
  client_id: string
  client_secret: string
  redirect_uris?: string[]
}

interface StagedReview {
  id: string
  authorName: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  reviewedAt: string
  sourceUrl: string
}

function readCredentials(): OAuthClientConfig {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(
      `credentials.json not found at ${CREDENTIALS_PATH}. ` +
      `Download OAuth client credentials (type: Desktop app) from Google Cloud ` +
      `Console → APIs & Services → Credentials, and place at the project root.`,
    )
  }
  const raw = fs.readFileSync(CREDENTIALS_PATH, 'utf-8')
  const parsed = JSON.parse(raw)
  const client: OAuthClientConfig | undefined = parsed.installed ?? parsed.web
  if (!client) {
    throw new Error('credentials.json does not contain an installed or web client configuration.')
  }
  return client
}

function openBrowser(url: string): void {
  const platform = process.platform
  const cmd =
    platform === 'darwin' ? `open "${url}"` :
    platform === 'win32' ? `start "" "${url}"` :
    `xdg-open "${url}"`
  exec(cmd, (err) => {
    if (err) {
      console.warn(`Could not open browser automatically: ${err.message}`)
      console.warn(`Open this URL manually:\n${url}`)
    }
  })
}

async function getOAuth2Client(): Promise<OAuth2Client> {
  const creds = readCredentials()
  const redirectUri = `http://localhost:${CALLBACK_PORT}${CALLBACK_PATH}`
  const oauth2Client = new OAuth2Client(creds.client_id, creds.client_secret, redirectUri)

  // Saved tokens path: try refresh, fall back to fresh flow on failure
  if (fs.existsSync(TOKENS_PATH)) {
    try {
      const saved = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf-8'))
      oauth2Client.setCredentials(saved)
      const { credentials } = await oauth2Client.refreshAccessToken()
      // Preserve the refresh_token from the prior file if Google omitted it on refresh
      const merged = { ...saved, ...credentials }
      oauth2Client.setCredentials(merged)
      fs.writeFileSync(TOKENS_PATH, JSON.stringify(merged, null, 2))
      console.log('Using saved tokens (refreshed).')
      return oauth2Client
    } catch (e) {
      console.log('Saved tokens invalid or expired — starting new OAuth flow.')
    }
  }

  // Fresh OAuth flow
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  })

  console.log('Opening browser for Google authentication...')
  openBrowser(authUrl)
  console.log(`If the browser does not open automatically, visit:\n${authUrl}\n`)

  const code = await new Promise<string>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      if (!req.url) {
        res.writeHead(404)
        res.end()
        return
      }
      const parsed = new URL(req.url, `http://localhost:${CALLBACK_PORT}`)
      if (parsed.pathname !== CALLBACK_PATH) {
        res.writeHead(404)
        res.end()
        return
      }
      const errParam = parsed.searchParams.get('error')
      const codeParam = parsed.searchParams.get('code')
      if (errParam) {
        res.writeHead(400, { 'Content-Type': 'text/html' })
        res.end(`<html><body><h1>OAuth error: ${errParam}</h1></body></html>`)
        reject(new Error(`OAuth error: ${errParam}`))
        server.close()
        return
      }
      if (codeParam) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<html><body><h1>Authorized.</h1><p>You can close this tab and return to the terminal.</p></body></html>')
        resolve(codeParam)
        server.close()
        return
      }
      res.writeHead(400)
      res.end('Missing code')
    })
    server.listen(CALLBACK_PORT, () => {
      console.log(`Listening for OAuth callback on http://localhost:${CALLBACK_PORT}${CALLBACK_PATH}`)
    })
    server.on('error', reject)
  })

  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)

  fs.mkdirSync(path.dirname(TOKENS_PATH), { recursive: true })
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, null, 2))
  console.log(`Saved tokens to ${TOKENS_PATH}`)

  return oauth2Client
}

// GBP star rating enum → integer
function mapStarRating(s: string | undefined): 1 | 2 | 3 | 4 | 5 {
  const map: Record<string, 1 | 2 | 3 | 4 | 5> = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  }
  return map[s ?? ''] ?? 5
}

async function fetchAllReviews(
  accessToken: string,
  accountId: string,
  locationId: string,
): Promise<{ reviews: unknown[]; totalReviewCount: number; averageRating: number }> {
  const base = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`
  const all: unknown[] = []
  let pageToken: string | undefined
  let totalReviewCount = 0
  let averageRating = 0

  do {
    const url = pageToken ? `${base}?pageToken=${encodeURIComponent(pageToken)}` : base
    const resp = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    if (!resp.ok) {
      const body = await resp.text()
      throw new Error(`GBP reviews API error ${resp.status}: ${body}`)
    }
    const data = (await resp.json()) as {
      reviews?: unknown[]
      nextPageToken?: string
      totalReviewCount?: number
      averageRating?: number
    }
    if (data.reviews) all.push(...data.reviews)
    pageToken = data.nextPageToken
    if (typeof data.totalReviewCount === 'number') totalReviewCount = data.totalReviewCount
    if (typeof data.averageRating === 'number') averageRating = data.averageRating
  } while (pageToken)

  return { reviews: all, totalReviewCount, averageRating }
}

async function main(): Promise<void> {
  const oauth2Client = await getOAuth2Client()

  // 1. Account ID
  const accountsApi = google.mybusinessaccountmanagement({ version: 'v1', auth: oauth2Client })
  const accountsResp = await accountsApi.accounts.list({})
  const accounts = accountsResp.data.accounts ?? []
  if (accounts.length === 0) {
    throw new Error('No GBP accounts found for the authenticated user.')
  }
  // Pick the first account — most sole-operator GBPs only have one.
  const account = accounts[0]
  const accountName = account.name!
  const accountId = accountName.split('/')[1]
  console.log(`Account: ${account.accountName ?? account.name}`)

  // 2. Get the Sirius Systems location directly by ID, then sanity-check
  // that its Place ID still matches what we have on record.
  const businessInfoApi = google.mybusinessbusinessinformation({ version: 'v1', auth: oauth2Client })
  const locationResp = await businessInfoApi.locations.get({
    name: `locations/${LOCATION_ID}`,
    readMask: 'name,title,metadata',
  })
  const location = locationResp.data
  const meta = location.metadata as { placeId?: string } | undefined
  if (meta?.placeId && meta.placeId !== PLACE_ID) {
    console.warn(`Place ID mismatch: hardcoded ${PLACE_ID}, GBP says ${meta.placeId}`)
  }
  const locationId = LOCATION_ID
  console.log(`Location: ${location.title ?? location.name}`)

  // 3. Fetch reviews via raw v4 API
  const accessToken = (oauth2Client.credentials.access_token ?? '') as string
  if (!accessToken) {
    throw new Error('No access token available after OAuth flow.')
  }
  const { reviews: rawReviews, totalReviewCount, averageRating } = await fetchAllReviews(
    accessToken,
    accountId,
    locationId,
  )

  // 4. Map to staged shape (no verified/permissionToPublish — curation sets those)
  const staged: StagedReview[] = rawReviews.map((raw) => {
    const r = raw as {
      name?: string
      reviewId?: string
      reviewer?: { displayName?: string; profilePhotoUrl?: string }
      starRating?: string
      comment?: string
      createTime?: string
    }
    const id = r.reviewId ?? r.name ?? `unknown-${Date.now()}-${Math.random().toString(36).slice(2)}`
    return {
      id,
      authorName: r.reviewer?.displayName ?? 'Anonymous',
      rating: mapStarRating(r.starRating),
      text: r.comment ?? '',
      reviewedAt: r.createTime ?? new Date().toISOString(),
      sourceUrl: r.reviewer?.profilePhotoUrl ?? PLACE_URL,
    }
  })

  const computedAvg = staged.length > 0
    ? staged.reduce((sum, r) => sum + r.rating, 0) / staged.length
    : 0

  const nowIso = new Date().toISOString()
  const output = {
    fetchedAt: nowIso,
    placeId: PLACE_ID,
    placeUrl: PLACE_URL,
    summary: {
      averageRating: averageRating || Number(computedAvg.toFixed(2)),
      totalReviewCount: totalReviewCount || staged.length,
      lastFetchedAt: nowIso,
    },
    reviews: staged,
  }

  fs.mkdirSync(path.dirname(STAGED_PATH), { recursive: true })
  fs.writeFileSync(STAGED_PATH, JSON.stringify(output, null, 2))

  console.log('---')
  console.log(`Total reviews fetched:  ${staged.length}`)
  console.log(`Average rating:         ${output.summary.averageRating}`)
  console.log(`Staged file:            ${STAGED_PATH}`)
  console.log('Next: npm run curate-reviews')
}

main().catch((err) => {
  console.error('Error:', err instanceof Error ? err.message : err)
  process.exit(1)
})
