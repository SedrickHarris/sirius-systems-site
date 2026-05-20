import Link from 'next/link'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'

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
    <footer className="relative mt-20 border-t border-border bg-background">
      <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-30" />
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <p className="font-display text-xl tracking-tight text-foreground">
              {SITE.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href={SITE.social.facebook}
                className="text-muted hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <span aria-hidden className="text-border-strong">·</span>
              <a
                href={SITE.social.gbp}
                className="text-muted hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                Google Business
              </a>
              <span aria-hidden className="text-border-strong">·</span>
              <a
                href={SITE.social.github}
                className="text-muted hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-foreground/85 hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-muted hover:text-foreground"
                >
                  See all 14 →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Industries
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-foreground/85 hover:text-foreground"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-foreground/85 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/85 hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/85 hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {SITE.name}.{' '}
            <span className="text-muted/70">
              {/* TODO: replace with confirmed legal business name (content-needed 1.4) */}
              Legal name pending confirmation.
            </span>
          </p>
          <p className="text-muted/70">
            Built by Sedrick Harris.
          </p>
        </div>
      </div>
    </footer>
  )
}
