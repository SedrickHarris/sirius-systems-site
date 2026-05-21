import Link from 'next/link'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'

// Dark navy footer — site-wide visual punctuation regardless of which
// section background closed the page. Inherits section-deep typography.

// Curated, not exhaustive — see docs/seo/internal-linking-plan.md §5.
const FEATURED_SERVICES = [
  'ai-automation',
  'ai-voicebots',
  'smart-websites',
  'reputation-management',
  'all-in-one-business-growth-system',
]

export function Footer() {
  const year = new Date().getFullYear()
  const featured = FEATURED_SERVICES.map((slug) =>
    SERVICES.find((s) => s.slug === slug),
  ).filter(Boolean) as typeof SERVICES

  return (
    <footer className="section-deep border-t border-[color:var(--border-soft)]/10">
      <div className="site-container py-16">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              {SITE.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                Facebook
              </a>
              <span aria-hidden className="text-white/25">·</span>
              <a
                href={SITE.social.gbp}
                target="_blank"
                rel="noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                Google Business
              </a>
              <span aria-hidden className="text-white/25">·</span>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/55">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  See all 14 &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/55">
              Industries
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/55">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white/80 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/55 transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/55 transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {SITE.name}.{' '}
            <span className="text-white/40">
              {/* TODO: replace with confirmed legal business name (content-needed 1.4) */}
              Legal name pending confirmation.
            </span>
          </p>
          <p className="text-white/40">Built by Sedrick Harris.</p>
        </div>
      </div>
    </footer>
  )
}
