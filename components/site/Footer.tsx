import Image from 'next/image'
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
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" aria-label={SITE.name} className="inline-flex">
              <Image
                src="/images/logos/sirius-systems-star-business-name-cropped-transparent-logo.webp"
                alt="Sirius Systems"
                width={1080}
                height={635}
                className="h-10 w-auto"
              />
            </Link>
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {SITE.description}
            </p>

            {/* NAP block — confirmed 2026-05-23 (see verified-public-sources.md §1a) */}
            <address
              className="mt-6 not-italic text-sm leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {SITE.contact.address.street}
              <br />
              {SITE.contact.address.cityRegion}
              <br />
              <a
                href={SITE.contact.phone.href}
                className="transition-colors hover:[color:var(--text)]"
              >
                {SITE.contact.phone.display}
              </a>
            </address>

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
          <div className="md:col-span-2">
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
          <div className="md:col-span-2">
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

          {/* Resources column */}
          <div className="md:col-span-2">
            <p
              className="font-mono text-[11px] uppercase tracking-eyebrow"
              style={{ color: 'var(--text-faint)' }}
            >
              Resources
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  FAQ Library
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/checklists"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Checklists
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/guides"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/revenue-leak-audit"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Revenue Leak Audit
                </Link>
              </li>
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
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:[color:var(--text)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-3 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between"
          style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
        >
          <p>
            &copy; {year} {SITE.contact.legal.footer}. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-faint)' }}>Built by Sedrick Harris.</p>
        </div>
      </div>
    </footer>
  )
}
