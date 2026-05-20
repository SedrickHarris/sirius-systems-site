import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — generates plain HTML to `out/` so Cloudflare Pages
  // can serve the site as a static asset bundle. Every route on this site
  // is statically prerenderable (no SSR, no ISR, no middleware, no API
  // routes); see docs/site-os/changelog/project-changelog.md for the build
  // verifying every route prerenders.
  //
  // To deploy on Cloudflare Pages, set the project's:
  //   Build command:           `npm run build`
  //   Build output directory:  `out`
  //   Node version:            20.x or higher
  output: 'export',

  // The static export pipeline disables the Next.js Image Optimization
  // endpoint (it's a server feature). We don't currently use <Image>, but
  // setting this defensively means a future <Image> usage won't silently
  // break the export.
  images: { unoptimized: true },

  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
