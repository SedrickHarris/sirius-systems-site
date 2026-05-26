// app/blog/[slug]/page.tsx
// Dynamic blog post route — /blog/[slug]
//
// Static export strategy:
//   generateStaticParams() returns all published slugs at build time.
//   Every post is prerendered to a static HTML file in out/blog/<slug>/index.html.
//
// Schema strategy (per schema-plan.md + do-not-invent-rules.md):
//   - Article JSON-LD always emitted from confirmed frontmatter fields.
//   - FAQPage JSON-LD emitted ONLY when the post body includes a <FAQ> component
//     AND its `items` prop is extracted here. The approach: we look for a
//     `faqItems` export from the MDX file. If present, FAQPage schema is emitted;
//     if absent, no FAQPage schema. This guarantees visible text === schema text.
//   - No aggregateRating, no review, no invented claims.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

import { SITE } from '@/lib/site'
import { getPostBySlug, getAllSlugs, getRelatedPosts, CATEGORY_LABELS } from '@/lib/blog'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'
import { articleSchema } from '@/lib/schema'
import { PostCard } from '@/components/blog/PostCard'

// ─────────────────────────────────────────────────────────────────────────────
// Static params
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamic = 'force-static'
// With output: 'export', a dynamic route returning [] from generateStaticParams
// would block the build. dynamicParams = false makes the route render only the
// params returned by generateStaticParams — when empty, the route is excluded
// from the static export. /blog/<any> 404s until the first MDX file lands.
export const dynamicParams = false

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter } = post

  return {
    title:       `${frontmatter.title} | ${SITE.name}`,
    description: frontmatter.description,
    alternates:  { canonical: frontmatter.canonicalUrl },
    authors:     [{ name: frontmatter.author }],
    keywords:    frontmatter.tags,
    openGraph: {
      title:       frontmatter.title,
      description: frontmatter.description,
      url:         frontmatter.canonicalUrl,
      type:        'article',
      publishedTime: frontmatter.date,
      modifiedTime:  frontmatter.dateModified,
      authors:     [frontmatter.author],
      images: frontmatter.ogImage ?? frontmatter.featuredImage
        ? [{ url: `${SITE.url}${frontmatter.ogImage ?? frontmatter.featuredImage}`, alt: frontmatter.featuredImageAlt }]
        : [],
    },
    twitter: {
      card:        'summary_large_image',
      title:       frontmatter.title,
      description: frontmatter.description,
      images:      frontmatter.ogImage ?? frontmatter.featuredImage
        ? [`${SITE.url}${frontmatter.ogImage ?? frontmatter.featuredImage}`]
        : [],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, readingTime } = post

  // Dynamically import the MDX file.
  // The MDX module may export a `faqItems` const if it uses the <FAQ> component.
  // We use that export — when present — to emit FAQPage JSON-LD from the
  // SAME data source that renders the visible FAQ, ensuring schema === visible text.
  let PostContent: React.ComponentType
  let faqItems: { q: string; a: string }[] | undefined

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`)
    PostContent = mod.default
    // faqItems is an optional named export from the MDX file.
    // Pattern in MDX: export const faqItems = [{ q: '...', a: '...' }]
    faqItems = mod.faqItems
  } catch {
    notFound()
  }

  const related = getRelatedPosts(post, 3)
  const categoryLabel = CATEGORY_LABELS[frontmatter.category] ?? frontmatter.category

  // Build JSON-LD blocks
  const jsonLdBlocks = [
    webPage({
      url:         `/blog/${slug}`,
      name:        frontmatter.title,
      description: frontmatter.description,
    }),
    breadcrumbList([
      { name: 'Home',  url: '/' },
      { name: 'Blog',  url: '/blog' },
      { name: frontmatter.title, url: `/blog/${slug}` },
    ]),
    articleSchema(frontmatter),
    // FAQPage only when the post actually exports faqItems
    ...(faqItems && faqItems.length > 0
      ? [faqPage(faqItems.map((item) => ({ q: item.q, a: item.a })))]
      : []),
  ]

  return (
    <>
      <JsonLdScript data={jsonLdBlocks} />

      <main id="main-content">
        {/* ── Back nav ───────────────────────────────────────────────── */}
        <div className="section-alt py-4">
          <div className="site-container">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All posts
            </Link>
          </div>
        </div>

        {/* ── Post header ────────────────────────────────────────────── */}
        <header className="section-glow section-padding-sm">
          <div className="site-container">
            <div className="content-narrow">
              {/* Breadcrumb (visual) */}
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-1.5 text-xs text-[color:var(--text-faint)]">
                  <li><Link href="/" className="hover:text-[color:var(--text)] transition-colors">Home</Link></li>
                  <li aria-hidden>/</li>
                  <li><Link href="/blog" className="hover:text-[color:var(--text)] transition-colors">Blog</Link></li>
                  <li aria-hidden>/</li>
                  <li className="truncate text-[color:var(--text-muted)]" aria-current="page">
                    {frontmatter.title}
                  </li>
                </ol>
              </nav>

              {/* Category badge */}
              <span className="inline-flex items-center rounded-full bg-[color:var(--surface-2)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--blue)]">
                {categoryLabel}
              </span>

              {/* H1 */}
              <h1 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-[color:var(--text)] md:text-3xl lg:text-4xl">
                {frontmatter.title}
              </h1>

              {/* Description */}
              {frontmatter.description && (
                <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
                  {frontmatter.description}
                </p>
              )}

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[color:var(--border)] pt-5 text-sm text-[color:var(--text-faint)]">
                <span>{frontmatter.author}{frontmatter.authorRole ? ` · ${frontmatter.authorRole}` : ''}</span>
                <span aria-hidden>·</span>
                <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
                <span aria-hidden>·</span>
                <span>{readingTime} min read</span>
                {frontmatter.dateModified !== frontmatter.date && (
                  <>
                    <span aria-hidden>·</span>
                    <span>Updated <time dateTime={frontmatter.dateModified}>{formatDate(frontmatter.dateModified)}</time></span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ── Featured image ─────────────────────────────────────────── */}
        <div className="section-alt py-0">
          <div className="site-container">
            <div className="content-narrow">
              <div className="relative mt-8 h-56 overflow-hidden rounded-xl bg-[color:var(--surface-2)] md:h-80 lg:h-96">
                <Image
                  src={frontmatter.featuredImage}
                  alt={frontmatter.featuredImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, (min-width: 768px) 90vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Post body ──────────────────────────────────────────────── */}
        <article className="section-alt section-padding">
          <div className="site-container">
            <div className="content-narrow">
              {/*
                MDX content uses mdx-components.tsx overrides for all
                standard elements. Blog-specific components (Callout, CTA,
                FAQ) are imported directly inside each MDX file.
              */}
              <PostContent />
            </div>
          </div>
        </article>

        {/* ── Tags ───────────────────────────────────────────────────── */}
        {frontmatter.tags.length > 0 && (
          <div className="section-alt pb-10">
            <div className="site-container">
              <div className="content-narrow">
                <div className="flex flex-wrap gap-2 border-t border-[color:var(--border)] pt-6">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--surface-2)] px-3 py-1 text-xs text-[color:var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Related posts ──────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="section-surface section-padding">
            <div className="site-container">
              <h2 className="mb-8 font-display text-xl font-semibold text-[color:var(--text)]">
                Related posts
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
