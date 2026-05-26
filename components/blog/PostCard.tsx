// components/blog/PostCard.tsx
// Blog index card. Consumes .card and existing tokens from globals.css.
// Used in app/blog/page.tsx post grid.

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import { CATEGORY_LABELS } from '@/lib/blog-types'
import type { Post } from '@/lib/blog-types'

interface PostCardProps {
  post:      Post
  featured?: boolean   // larger card variant for the top slot
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const { frontmatter, slug, readingTime } = post
  const categoryLabel = CATEGORY_LABELS[frontmatter.category] ?? frontmatter.category
  const href = `/blog/${slug}`

  return (
    <Link
      href={href}
      className={cn(
        'card group flex flex-col hover-lift focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-[color:var(--blue)] focus-visible:ring-offset-2',
        featured && 'md:flex-row md:gap-0',
      )}
      aria-label={frontmatter.title}
    >
      {/* Featured image */}
      <div
        className={cn(
          'relative overflow-hidden rounded-t-lg bg-[color:var(--surface-2)]',
          featured
            ? 'h-56 w-full shrink-0 rounded-l-lg rounded-tr-none md:h-auto md:w-80'
            : 'h-44',
        )}
      >
        <Image
          src={frontmatter.featuredImage}
          alt={frontmatter.featuredImageAlt}
          fill
          sizes={featured ? '(min-width: 768px) 320px, 100vw' : '(min-width: 768px) 33vw, 100vw'}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className={cn('flex flex-1 flex-col p-5', featured && 'md:p-6')}>
        {/* Category badge */}
        <span className="inline-flex w-fit items-center rounded-full bg-[color:var(--surface-2)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--blue)]">
          {categoryLabel}
        </span>

        {/* Title */}
        <h2
          className={cn(
            'mt-3 font-display font-semibold leading-snug text-[color:var(--text)] group-hover:text-[color:var(--blue)] transition-colors',
            featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg',
          )}
        >
          {frontmatter.title}
        </h2>

        {/* Description */}
        {frontmatter.description && (
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
            {frontmatter.description}
          </p>
        )}

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-3 text-xs text-[color:var(--text-faint)]">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span aria-hidden>·</span>
          <span>{readingTime} min read</span>
          {frontmatter.draft && (
            <>
              <span aria-hidden>·</span>
              <span className="rounded bg-[color:var(--warning)] px-1.5 py-0.5 text-xs font-medium text-black">
                Draft
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
