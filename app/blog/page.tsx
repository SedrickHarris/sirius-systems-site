// app/blog/page.tsx
// Blog index — /blog
// Lists all published posts, newest first.
// Category filter chips use a client island (BlogFilter) so the static
// export stays fully prerenderable while filter UX works in-browser.

import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts, ALL_CATEGORIES, CATEGORY_LABELS } from '@/lib/blog'
import { PostCard } from '@/components/blog/PostCard'
import { BlogFilter } from '@/components/blog/BlogFilter'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title:       `Blog | ${SITE.name}`,
  description: 'Guides, playbooks, and practical takes on AI automation, reputation management, and local SEO for owner-operated service businesses.',
  alternates:  { canonical: `${SITE.url}/blog` },
  openGraph: {
    title:       `Blog | ${SITE.name}`,
    description: 'Guides, playbooks, and practical takes on AI automation, reputation management, and local SEO for owner-operated service businesses.',
    url:         `${SITE.url}/blog`,
    type:        'website',
    images: ['/og/default.webp'],
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-glow section-padding-sm">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Blog</span>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[color:var(--text)] md:text-4xl lg:text-5xl">
              Guides for service businesses that run on automation
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
              Practical takes on AI automation, reputation management, and local SEO — written for owner-operators who want outcomes, not theory.
            </p>
          </div>
        </div>
      </section>

      {/* ── Post grid ────────────────────────────────────────────────── */}
      <section className="section-alt section-padding">
        <div className="site-container">
          {posts.length === 0 ? (
            <p className="text-[color:var(--text-muted)]">
              Posts coming soon. Check back shortly.
            </p>
          ) : (
            <BlogFilter posts={posts} />
          )}
        </div>
      </section>
    </main>
  )
}
