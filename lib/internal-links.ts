// lib/internal-links.ts
// Single source of truth for industry-page internal linking.
//
// Intersection pages (/industries/[hub]/[service]) and sub-vertical pages
// (/industries/[hub]/for/[sub-vertical]) are individual route files, so the
// route tree is the registry: this module scans app/industries at build time
// (same pattern as lib/blog.ts) and the sitemap, hub pages, service pages and
// intersection pages all read from it. Ship a page and every list picks it up.
//
// A page is only listed if its file does not declare `index: false`, so a
// noindex route can never be linked or sitemapped through this module.
//
// Server-only: imports node:fs. Do not import from a 'use client' file.

import fs from 'fs'
import path from 'path'
import { INDUSTRIES } from '@/lib/industries'
import { SERVICES } from '@/lib/services'

const INDUSTRIES_DIR = path.join(process.cwd(), 'app', 'industries')

export type IntersectionPage = {
  hubSlug: string
  hubName: string
  serviceSlug: string
  serviceName: string
  href: string
  label: string
}

export type SubVerticalPage = {
  hubSlug: string
  hubName: string
  slug: string
  name: string
  href: string
  label: string
}

function readIndexablePage(dir: string): string | null {
  const file = path.join(dir, 'page.tsx')
  if (!fs.existsSync(file)) return null
  const src = fs.readFileSync(file, 'utf8')
  return /index:\s*false/.test(src) ? null : src
}

function subdirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

let intersectionCache: IntersectionPage[] | null = null
let subVerticalCache: SubVerticalPage[] | null = null

/** Every indexable intersection page, in catalog order (industry, then service). */
export function getIntersectionPages(): IntersectionPage[] {
  if (intersectionCache) return intersectionCache
  const pages: IntersectionPage[] = []
  for (const hub of INDUSTRIES) {
    const present = new Set(subdirs(path.join(INDUSTRIES_DIR, hub.slug)))
    for (const service of SERVICES) {
      if (!present.has(service.slug)) continue
      if (!readIndexablePage(path.join(INDUSTRIES_DIR, hub.slug, service.slug))) continue
      pages.push({
        hubSlug: hub.slug,
        hubName: hub.name,
        serviceSlug: service.slug,
        serviceName: service.name,
        href: `/industries/${hub.slug}/${service.slug}`,
        label: `${service.name} for ${hub.name}`,
      })
    }
  }
  intersectionCache = pages
  return pages
}

/** Every indexable sub-vertical page under /industries/[hub]/for/. */
export function getSubVerticalPages(): SubVerticalPage[] {
  if (subVerticalCache) return subVerticalCache
  const pages: SubVerticalPage[] = []
  for (const hub of INDUSTRIES) {
    const forDir = path.join(INDUSTRIES_DIR, hub.slug, 'for')
    for (const slug of subdirs(forDir).sort()) {
      const src = readIndexablePage(path.join(forDir, slug))
      if (!src) continue
      const named = src.match(/subVerticalName:\s*(['"])(.+?)\1/)
      const name =
        named?.[2] ??
        slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      pages.push({
        hubSlug: hub.slug,
        hubName: hub.name,
        slug,
        name,
        href: `/industries/${hub.slug}/for/${slug}`,
        label: `${name} in ${hub.name}`,
      })
    }
  }
  subVerticalCache = pages
  return pages
}

export function getIntersectionsForHub(hubSlug: string): IntersectionPage[] {
  return getIntersectionPages().filter((p) => p.hubSlug === hubSlug)
}

export function getIntersectionsForService(serviceSlug: string): IntersectionPage[] {
  return getIntersectionPages().filter((p) => p.serviceSlug === serviceSlug)
}

export function getSubVerticalsForHub(hubSlug: string): SubVerticalPage[] {
  return getSubVerticalPages().filter((p) => p.hubSlug === hubSlug)
}

// Next `count` entries after `self` in a list, wrapping around. Rotating (not
// "first N") spreads inbound links evenly: with a group of n pages every page
// receives min(count, n - 1) links from its siblings, so no page is orphaned.
function nextAfter<T>(list: T[], isSelf: (item: T) => boolean, count: number): T[] {
  const i = list.findIndex(isSelf)
  if (i === -1) return []
  const out: T[] = []
  for (let step = 1; step < list.length && out.length < count; step++) {
    out.push(list[(i + step) % list.length])
  }
  return out
}

/**
 * Related links for one intersection page. Never includes the page itself.
 *  - otherServices: same industry, different service
 *  - otherIndustries: same service, different industry
 */
export function getRelatedIntersections(hubSlug: string, serviceSlug: string, count = 4) {
  const isSelf = (p: IntersectionPage) => p.hubSlug === hubSlug && p.serviceSlug === serviceSlug
  return {
    otherServices: nextAfter(getIntersectionsForHub(hubSlug), isSelf, count),
    otherIndustries: nextAfter(getIntersectionsForService(serviceSlug), isSelf, count),
  }
}
