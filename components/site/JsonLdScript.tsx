import type { JsonLd } from '@/lib/schema'

// Renders one or more JSON-LD blocks as <script type="application/ld+json">.
// Per docs/seo/schema-plan.md and do-not-invent-rules.md.
export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
