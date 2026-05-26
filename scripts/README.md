# GBP Review Pipeline

Two-step process for getting Google Business Profile reviews onto the live site, with explicit human curation as the gating step. No review appears on the site without going through curation.

## First run

1. Place your OAuth client credentials at `credentials.json` in the project root.
   Download from Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client IDs.
   Use type **"Desktop app"**. Project ID for reference: `sirius-systems-gbp-api`.

2. `npm run fetch-reviews`
   - Opens a browser to the Google consent screen
   - Sign in as **sedrickharris17@gmail.com** (the GBP owner)
   - Approve the requested scope (`business.manage`)
   - Script captures the OAuth callback on `localhost:3333` and saves tokens to `scripts/tokens.json`
   - Fetches all reviews and writes them to `data/google-reviews.staged.json`

3. `npm run curate-reviews`
   - Walks each NEW review one at a time
   - `y` = approve · `n` = skip · `e` = edit display name (e.g., "John D." instead of full last name), then confirm
   - Writes only approved reviews to `data/google-reviews.json`

4. Commit the curated file:
   ```
   git add data/google-reviews.json
   git commit -m "reviews: curate GBP reviews"
   git push
   ```

## Subsequent runs

Same flow, no browser prompt — the saved refresh token in `scripts/tokens.json` is used automatically:

1. `npm run fetch-reviews`
2. `npm run curate-reviews`
3. Commit and push `data/google-reviews.json`

## File map

| File | Purpose | In git? |
|---|---|---|
| `credentials.json` | OAuth client credentials | **No** (gitignored) |
| `scripts/tokens.json` | OAuth access + refresh tokens | **No** (gitignored) |
| `data/google-reviews.staged.json` | Raw fetch output (unfiltered) | **No** (gitignored) |
| `data/google-reviews.json` | Curated approved reviews — what the site renders from | **Yes** |

## Behavior notes

- The site only renders reviews when `verified: true` at the top level AND each review carries `verified: true` + `permissionToPublish: true`. See `lib/google-reviews.ts` and `docs/site-os/inputs/do-not-invent-rules.md`.
- If you approve zero reviews on a run, the top-level `verified` stays `false` and the homepage shows the neutral trust fallback — never an empty review section.
- The curate script preserves already-approved reviews in `data/google-reviews.json` across runs. New reviews from the staged file are merged in; previously-approved reviews are never re-prompted.
- The GBP reviews endpoint is still on the legacy `mybusiness.googleapis.com/v4/` API — Google never migrated reviews to the new split APIs. The fetch script makes a raw `fetch` for that endpoint while using the `googleapis` package for accounts and locations.
- OAuth scope: `https://www.googleapis.com/auth/business.manage`.

## Troubleshooting

- **Browser doesn't open**: copy the printed URL into a browser manually. The OAuth callback listener still works.
- **"No GBP accounts found"**: confirm you signed in with the GBP owner account (sedrickharris17@gmail.com), not a personal Google account that doesn't manage the business.
- **"No location found with Place ID …"**: confirm the location is verified and visible in the owner's GBP dashboard.
- **OAuth tokens stop working**: delete `scripts/tokens.json` and rerun. A fresh OAuth flow will start.
- **Port 3333 in use**: the OAuth callback listener uses port 3333. Free the port (or change the constant in `scripts/fetch-reviews.ts` AND in your OAuth client's authorized redirect URIs) and try again.
- **GBP API quota errors**: the legacy v4 API has a fairly low daily quota. If you're hitting it, wait 24 hours or request a quota increase in the Cloud Console.
