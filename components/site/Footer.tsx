import { SITE } from '@/lib/site'

// Stub. Real footer (curated link columns per docs/seo/internal-linking-plan.md §5,
// legal name + NAP) ships in Phase 2 once those values land.
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-10 text-sm text-muted">
        <p className="text-foreground">{SITE.name}</p>
        <p className="mt-2">
          {SITE.description}
        </p>
        <p className="mt-6 text-xs">
          &copy; {year} {SITE.name}. Legal name, phone, address, and curated
          link columns wired in once confirmed &mdash; see{' '}
          <code className="rounded bg-secondary px-1 py-0.5 text-secondary-foreground">
            docs/site-os/inputs/content-needed-from-client.md
          </code>
          .
        </p>
      </div>
    </footer>
  )
}
