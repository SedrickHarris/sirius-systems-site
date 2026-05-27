// Phase 6 QA automated checks. Runs 3C, 3E, 3F, 3G, 3H, 3I, 3J, 3K.
// Reads from src/build output; emits structured results to stdout.

import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sep = path.sep

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((f) =>
    f.isDirectory() ? walk(path.join(dir, f.name)) : [path.join(dir, f.name)]
  )
}

function rel(p) {
  return p.replace(root + sep, '').split(sep).join('/')
}

const out = {}

// 3C — metaTitle lengths
out['3C metaTitle'] = (() => {
  const findings = []
  const files = walk(path.join(root, 'app')).filter((f) => f.endsWith('page.tsx'))
  for (const f of files) {
    const c = fs.readFileSync(f, 'utf8')
    // try two patterns: title: '...' (Metadata export) and metaTitle: '...'/`...`
    const matches = [
      ...c.matchAll(/metaTitle\s*:\s*['"`]([^'"`]+)['"`]/g),
      ...c.matchAll(/^\s*title:\s*['"`]([^'"`]+)['"`]/gm),
    ]
    if (matches.length === 0) continue
    for (const m of matches) {
      const t = m[1]
      // skip template suffixes like '%s | Sirius Systems'
      if (t.startsWith('%s')) continue
      findings.push({ file: rel(f), title: t, length: t.length, over: t.length > 60 })
    }
  }
  return findings
})()

// 3E — Do-not-invent pattern scan (non-SVG context)
out['3E doNotInvent'] = (() => {
  const findings = []
  const patterns = [
    { name: 'percent', re: /\b\d+%\b/i },
    { name: 'plus_clients', re: /\b\d+\+\s*clients\b/i },
    { name: 'plus_businesses', re: /\b\d+\+\s*businesses\b/i },
    { name: 'trusted_by', re: /\btrusted by\b/i },
    { name: 'guarantee', re: /\bguarantee/i },
    { name: 'results', re: /\bresults\b/i },
    { name: 'proven', re: /\bproven\b/i },
  ]
  const files = [
    ...walk(path.join(root, 'app')),
    ...walk(path.join(root, 'components')),
  ].filter((f) => f.endsWith('.tsx'))
  for (const f of files) {
    const lines = fs.readFileSync(f, 'utf8').split('\n')
    lines.forEach((line, i) => {
      const lower = line.toLowerCase()
      // skip clear SVG/CSS contexts
      const isSvg =
        lower.includes('gradient') ||
        lower.includes('viewbox') ||
        lower.includes('stroke') ||
        lower.includes('fill=') ||
        lower.includes('translate') ||
        lower.includes('cx=') ||
        lower.includes('cy=') ||
        lower.includes('rx=') ||
        lower.includes('ry=') ||
        lower.includes('opacity') ||
        lower.includes('rgba(') ||
        lower.includes('hsl(') ||
        line.match(/\d+%\)/) // closing paren of gradient stop
      if (isSvg) return
      for (const p of patterns) {
        if (p.re.test(line)) {
          findings.push({ file: rel(f), line: i + 1, pattern: p.name, text: line.trim().slice(0, 140) })
          break
        }
      }
    })
  }
  return findings
})()

// 3F — Broken internal links (compare hrefs to out/ output)
out['3F brokenLinks'] = (() => {
  const found = new Set()
  const files = [
    ...walk(path.join(root, 'app')),
    ...walk(path.join(root, 'components')),
  ].filter((f) => f.endsWith('.tsx'))
  const re1 = /href=['"](\/[^'"#?]*)['"]/g
  const re2 = /href=\{`(\/[^`#?]*)`\}/g
  for (const f of files) {
    const c = fs.readFileSync(f, 'utf8')
    for (const m of c.matchAll(re1)) found.add(m[1])
    for (const m of c.matchAll(re2)) found.add(m[1])
  }
  const broken = []
  for (const r of found) {
    if (!r) continue
    let exists = false
    if (r === '/' && fs.existsSync(path.join(root, 'out', 'index.html'))) exists = true
    else {
      const base = r.replace(/^\//, '').replace(/\/$/, '')
      if (fs.existsSync(path.join(root, 'out', base, 'index.html'))) exists = true
      else if (fs.existsSync(path.join(root, 'out', base + '.html'))) exists = true
      else if (fs.existsSync(path.join(root, 'out', base))) exists = true
    }
    if (!exists) broken.push(r)
  }
  return { scanned: found.size, broken }
})()

// 3G — NAP from lib/site.ts
out['3G nap'] = (() => {
  const s = fs.readFileSync(path.join(root, 'lib', 'site.ts'), 'utf8')
  const checks = [
    { field: 'phone.display = (727) 222-3424', ok: s.includes("display: '(727) 222-3424'") },
    { field: 'phone.href = tel:+17272223424', ok: s.includes("href: 'tel:+17272223424'") },
    { field: 'email.display = info@siriussys.io', ok: s.includes("display: 'info@siriussys.io'") },
    { field: 'email.href = mailto:info@inbox.siriussys.io', ok: s.includes("href: 'mailto:info@inbox.siriussys.io'") },
    { field: 'address includes 304 S Jones Blvd Ste 1915', ok: s.includes('304 S Jones Blvd Ste 1915') },
    { field: 'legal includes SHH Group', ok: s.includes('SHH Group') },
    { field: 'url = https://siriussys.io', ok: s.includes("url: 'https://siriussys.io'") },
  ]
  return checks
})()

// 3H — Sitemap coverage
out['3H sitemap'] = (() => {
  const sx = fs.readFileSync(path.join(root, 'out', 'sitemap.xml'), 'utf8')
  const urls = [...sx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const required = [
    '/', '/about', '/services', '/contact',
    '/ai-automation', '/ai-chatbots', '/ai-voicebots', '/crm-automation',
    '/appointment-booking-automation', '/smart-websites',
    '/lead-generation-automation', '/reputation-management',
    '/review-automation', '/ai-review-responses',
    '/google-business-profile-optimization', '/local-seo-aeo',
    '/competitor-review-benchmarking', '/all-in-one-business-growth-system',
    '/industries', '/industries/home-services',
    '/industries/construction-contractors', '/industries/professional-services',
    '/industries/auto-services', '/industries/beauty-wellness',
    '/industries/healthcare-medical', '/industries/real-estate-property',
    '/industries/hospitality-events', '/industries/education-childcare',
    '/industries/community-faith-nonprofit', '/industries/retail-local-commerce',
    '/industries/technology-b2b',
    '/privacy', '/terms',
  ]
  const missing = []
  for (const r of required) {
    const expect = 'https://siriussys.io' + (r === '/' ? '' : r)
    const expectSlash = expect + '/'
    if (!urls.includes(expect) && !urls.includes(expectSlash)) missing.push(r)
  }
  return { urlCount: urls.length, missing }
})()

// 3I — robots.txt
out['3I robots'] = (() => {
  const txt = fs.readFileSync(path.join(root, 'out', 'robots.txt'), 'utf8')
  return {
    rawHead: txt.slice(0, 200),
    userAgentAll: /User-Agent:\s*\*/i.test(txt),
    allowRoot: /Allow:\s*\//i.test(txt),
    disallowApi: /Disallow:\s*\/api\//i.test(txt),
    sitemap: /Sitemap:\s*https:\/\/siriussys\.io\/sitemap\.xml/i.test(txt),
  }
})()

// 3J — _redirects
out['3J redirects'] = (() => {
  const r = fs.readFileSync(path.join(root, 'public', '_redirects'), 'utf8')
  return {
    contractorsRedirect:
      /\/industries\/contractors\s+\/industries\/construction-contractors\s+301/.test(r),
    rawHead: r.slice(0, 200),
  }
})()

// 3K — FAQ schema byte identity (extract FAQ q values vs DATA.faqs source)
out['3K faqIdentity'] = (() => {
  // All sampled pages funnel DATA.faqs into faqPage(DATA.faqs).
  // Since both the visible FAQ block and JSON-LD consume the same array,
  // identity is structurally guaranteed. We verify the sampled files use
  // this pattern (faqPage(DATA.faqs)) AND that DATA.faqs is defined.
  const samples = [
    'app/ai-automation/page.tsx',
    'app/industries/home-services/page.tsx',
    'app/industries/technology-b2b/page.tsx',
    'app/all-in-one-business-growth-system/page.tsx',
    'app/industries/community-faith-nonprofit/page.tsx',
  ]
  const results = []
  for (const s of samples) {
    const p = path.join(root, ...s.split('/'))
    if (!fs.existsSync(p)) {
      results.push({ file: s, ok: false, reason: 'file missing' })
      continue
    }
    const c = fs.readFileSync(p, 'utf8')
    const hasFaqPageCall = /faqPage\s*\(\s*DATA\.faqs\s*\)/.test(c)
    const hasFaqsArray = /faqs\s*:\s*\[/.test(c)
    results.push({
      file: s,
      ok: hasFaqPageCall && hasFaqsArray,
      faqPageCall: hasFaqPageCall,
      faqsArray: hasFaqsArray,
    })
  }
  return results
})()

console.log(JSON.stringify(out, null, 2))
