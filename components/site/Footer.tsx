import Link from 'next/link'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'

// Footer: dark canvas, var(--bg-alt) one degree warmer than the page bg
// so it reads as a discrete section without breaking dark continuity.

// Curated, not exhaustive: see docs/seo/internal-linking-plan.md §5.
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
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--bg-alt)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="site-container py-16">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <p
              className="font-display text-xl font-semibold tracking-tight"
              style={{ color: 'var(--text)' }}
            >
              {SITE.name}
            </p>
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:[color:var(--text)]"
                style={{ color: 'var(--text-muted)' }}
              >
                Facebook
              </a>
              <span aria-hidden style={{ color: 'var(--text-faint)' }}>·</span>
              <a
                href={SITE.social.gbp}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:[color:var(--text)]"
                style={{ color: 'var(--text-muted)' }}
              >
                Google Business
              </a>
              <span aria-hidden style={{ color: 'var(--text-faint)' }}>·</span>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:[color:var(--text)]"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <p
              className="font-mono text-[11px] uppercase tracking-eyebrow"
              style={{ color: 'var(--text-faint)' }}
            >
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="transition-colors hover:[color:var(--text)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-faint)' }}
                >
                  See all 14 &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries column */}
          <div className="md:col-span-3">
            <p
              className="font-mono text-[11px] uppercase tracking-eyebrow"
              style={{ color: 'var(--text-faint)' }}
            >
              Industries
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="transition-colors hover:[color:var(--text)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <p
              className="font-mono text-[11px] uppercase tracking-eyebrow"
              style={{ color: 'var(--text-faint)' }}
            >
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Contact
                </Link>
              </li>
              {/* /privacy and /terms routes don't exist yet (copy blocked
                  on content-needed-from-client.md items 1.9 + 1.10). Footer
                  links removed so we don't ship broken hrefs in the meantime.
                  Restore both list items when the pages land. */}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-3 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between"
          style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
        >
          <p>
            &copy; {year} {SITE.name}.{' '}
            <span style={{ color: 'var(--text-faint)' }}>
              {/* TODO: replace with confirmed legal business name (content-needed 1.4) */}
              Legal name pending confirmation.
            </span>
          </p>
          <p style={{ color: 'var(--text-faint)' }}>Built by Sedrick Harris.</p>
        </div>
      </div>
    </footer>
  )
}
