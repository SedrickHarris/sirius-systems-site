// lib/blog.ts
// MDX blog engine for Sirius Systems.
// Reads content/blog/*.mdx, parses frontmatter via gray-matter,
// computes reading time at 230 wpm, filters drafts from production,
// and returns typed post objects for routes and the sitemap.
//
// ARCHITECTURE NOTE: Types and constants live in lib/blog-types.ts (client-safe,
// no Node.js deps). This file imports from there and re-exports so server-side
// callers can still do `import { Post } from '@/lib/blog'` unchanged.

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ─────────────────────────────────────────────────────────────────────────────
// Re-export client-safe types and constants from blog-types.ts
// ─────────────────────────────────────────────────────────────────────────────

export type {
  PostCategory,
  PostFrontmatter,
  Post,
} from '@/lib/blog-types'

export {
  CATEGORY_LABELS,
  ALL_CATEGORIES,
} from '@/lib/blog-types'

import type { PostCategory, PostFrontmatter, Post } from '@/lib/blog-types'

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const WPM = 230

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / WPM))
}

function parsePost(filename: string): Post | null {
  const filepath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)

  if (!data.title || !data.slug || !data.date || !data.category) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[blog] Skipping ${filename}: missing required frontmatter field(s)`)
    }
    return null
  }

  const frontmatter: PostFrontmatter = {
    title:            data.title,
    description:      data.description ?? '',
    slug:             data.slug,
    date:             data.date instanceof Date
                        ? data.date.toISOString().split('T')[0]
                        : String(data.date),
    dateModified:     data.dateModified
                        ? (data.dateModified instanceof Date
                            ? data.dateModified.toISOString().split('T')[0]
                            : String(data.dateModified))
                        : String(data.date),
    author:           data.author ?? 'Sirius Systems Team',
    authorRole:       data.authorRole,
    category:         data.category as PostCategory,
    tags:             Array.isArray(data.tags) ? data.tags : [],
    targetQuery:      data.targetQuery,
    featuredImage:    data.featuredImage ?? `/images/blog/${data.slug}.webp`,
    featuredImageAlt: data.featuredImageAlt ?? data.title,
    ogImage:          data.ogImage,
    draft:            data.draft === true,
    canonicalUrl:     data.canonicalUrl ?? `https://siriussys.io/blog/${data.slug}`,
  }

  return {
    frontmatter,
    slug:        frontmatter.slug,
    readingTime: computeReadingTime(content),
    rawContent:  content,
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const filenames = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts = filenames
    .map(parsePost)
    .filter((p): p is Post => p !== null)
    .filter((p) => {
      if (process.env.NODE_ENV === 'production') return !p.frontmatter.draft
      return true
    })
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    )

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null

  for (const ext of ['.mdx', '.md']) {
    const filepath = path.join(BLOG_DIR, `${slug}${ext}`)
    if (!fs.existsSync(filepath)) continue

    const post = parsePost(`${slug}${ext}`)
    if (!post) return null

    if (process.env.NODE_ENV === 'production' && post.frontmatter.draft) return null

    return post
  }

  return null
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter((p) => p.frontmatter.category === category)
}

export function getRecentPosts(n: number, excludeSlug?: string): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, n)
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug)

  const sameCategory = all.filter(
    (p) => p.frontmatter.category === post.frontmatter.category
  )

  const sharedTags = all
    .filter((p) => p.frontmatter.category !== post.frontmatter.category)
    .filter((p) =>
      p.frontmatter.tags.some((t) => post.frontmatter.tags.includes(t))
    )

  return [...sameCategory, ...sharedTags].slice(0, limit)
}
