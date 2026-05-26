// components/blog/BlogFilter.tsx
// Client island for the blog index category filter.
// Receives all posts from the server component (app/blog/page.tsx) and
// filters them in-browser — no server round trip, no JS required for
// the initial paint (posts render fully in the server HTML).

'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'
import { PostCard } from '@/components/blog/PostCard'
import { ALL_CATEGORIES, CATEGORY_LABELS } from '@/lib/blog-types'
import type { Post, PostCategory } from '@/lib/blog-types'

interface BlogFilterProps {
  posts: Post[]
}

export function BlogFilter({ posts }: BlogFilterProps) {
  const [active, setActive] = useState<PostCategory | 'all'>('all')

  // Only show category chips for categories that have at least one post
  const populated = ALL_CATEGORIES.filter((cat) =>
    posts.some((p) => p.frontmatter.category === cat),
  )

  const filtered =
    active === 'all' ? posts : posts.filter((p) => p.frontmatter.category === active)

  // Split: first post gets featured card (larger), rest get standard cards
  const [featured, ...rest] = filtered

  return (
    <div>
      {/* Category chips */}
      {populated.length > 1 && (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter posts by category"
        >
          <button
            type="button"
            onClick={() => setActive('all')}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              active === 'all'
                ? 'bg-[color:var(--blue)] text-white'
                : 'bg-[color:var(--surface-2)] text-[color:var(--text-muted)] hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]',
            )}
            aria-pressed={active === 'all'}
          >
            All
          </button>

          {populated.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                active === cat
                  ? 'bg-[color:var(--blue)] text-white'
                  : 'bg-[color:var(--surface-2)] text-[color:var(--text-muted)] hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]',
              )}
              aria-pressed={active === cat}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      )}

      {/* Post count */}
      <p className="mb-6 text-sm text-[color:var(--text-faint)]">
        {filtered.length === 1
          ? '1 post'
          : `${filtered.length} posts`}
        {active !== 'all' && ` in ${CATEGORY_LABELS[active]}`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-[color:var(--text-muted)]">No posts in this category yet.</p>
      ) : (
        <div className="space-y-6">
          {/* Featured first post */}
          {featured && <PostCard post={featured} featured />}

          {/* Standard grid for the rest */}
          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
