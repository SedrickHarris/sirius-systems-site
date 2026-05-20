import { Section } from '@/components/site/Section'

// Placeholder home. Real /home copy ships in Phase 2 per
// docs/site-os/inputs/site-build-plan.md and docs/content/page-copy-plan.md §2.
export default function HomePage() {
  return (
    <Section className="container-page">
      <p className="text-xs uppercase tracking-widest text-muted">Sirius Systems</p>
      <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
        Foundation scaffolded. Pages built next.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        This is the project scaffold. The home page, service pages, industry
        pages, and blog system are built in Phase 2 against the plan in{' '}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-secondary-foreground">
          docs/site-os/inputs/site-build-plan.md
        </code>
        .
      </p>
    </Section>
  )
}
