import fs from 'node:fs'
import path from 'node:path'

const glob = (dir) => {
  let results = []
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name)
    if (f.isDirectory()) results = results.concat(glob(p))
    else if (f.name === 'page.tsx') results.push(p)
  }
  return results
}

const files = glob('app').sort()
console.log('FILE'.padEnd(60) + ' | title | desc | flags')
console.log('-'.repeat(96))
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8')
  const tMatch =
    src.match(/metaTitle:\s*\n?\s*['"]([^'"]+)['"]/) ||
    src.match(/title:\s*\n?\s*['"]([^'"]+)['"]/)
  const dMatch =
    src.match(/metaDescription:\s*\n?\s*['"]([^'"]+)['"]/) ||
    src.match(/description:\s*\n?\s*['"]([^'"]+)['"]/)
  const tlen = tMatch ? tMatch[1].length : null
  const dlen = dMatch ? dMatch[1].length : null
  const flags = []
  if (tlen === null) flags.push('NO_TITLE')
  else if (tlen > 60) flags.push(`TITLE_${tlen}>60`)
  if (dlen === null) flags.push('NO_DESC')
  else if (dlen > 155) flags.push(`DESC_${dlen}>155`)
  const slug = f.replace(/\\/g, '/').replace('app/', '/').replace('/page.tsx', '') || '/'
  console.log(
    slug.padEnd(60) +
      ' | ' +
      String(tlen ?? '-').padStart(5) +
      ' | ' +
      String(dlen ?? '-').padStart(4) +
      ' | ' +
      flags.join(' '),
  )
}
