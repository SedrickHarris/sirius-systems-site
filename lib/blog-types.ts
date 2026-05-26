// lib/blog-types.ts
// Client-safe types and constants for the blog system.
// No Node.js built-ins — safe to import from Client Components.
//
// lib/blog.ts imports from here and re-exports for backward compat.
// Client Components (BlogFilter, PostCard, etc.) import from here directly.

export type PostCategory =
  | 'ai-automation'
  | 'chatbots-voicebots'
  | 'crm-and-booking'
  | 'reputation'
  | 'reviews'
  | 'local-seo'
  | 'gbp'
  | 'aeo'
  | 'growth-systems'
  | 'founders-notes'

export const CATEGORY_LABELS: Record<PostCategory, string> = {
  'ai-automation':      'AI Automation',
  'chatbots-voicebots': 'Chatbots & Voicebots',
  'crm-and-booking':    'CRM & Booking',
  'reputation':         'Reputation',
  'reviews':            'Reviews',
  'local-seo':          'Local SEO',
  'gbp':                'Google Business Profile',
  'aeo':                'AEO & AI Answers',
  'growth-systems':     'Growth Systems',
  'founders-notes':     "Founder's Notes",
}

export const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as PostCategory[]

export interface PostFrontmatter {
  title:            string
  description:      string
  slug:             string
  date:             string
  dateModified:     string
  author:           string
  authorRole?:      string
  category:         PostCategory
  tags:             string[]
  targetQuery?:     string
  featuredImage:    string
  featuredImageAlt: string
  ogImage?:         string
  draft:            boolean
  canonicalUrl:     string
}

export interface Post {
  frontmatter:  PostFrontmatter
  slug:         string
  readingTime:  number
  rawContent:   string
}
