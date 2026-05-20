import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { IndustryChip } from './IndustryChip'
import { INDUSTRIES } from '@/lib/industries'

// Industry-fit strip: chip row of relevant industries + an inclusive
// fallback line for prospects whose industry isn't listed.
export function IndustryFitStrip({ slugs }: { slugs: string[] }) {
  const industries = slugs
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter((i): i is (typeof INDUSTRIES)[number] => Boolean(i))

  return (
    <div>
      {industries.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <IndustryChip key={industry.slug} industry={industry} />
          ))}
        </div>
      )}
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Don&rsquo;t see your industry? Any local service business qualifies
        &mdash;{' '}
        <Link
          href="/contact"
          className="link-underline inline-flex items-center gap-1 text-foreground"
        >
          get in touch
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        .
      </p>
    </div>
  )
}
