// Numbered step used on home + about. Stacks vertically on mobile,
// columns on desktop.
export function ProcessStep({
  index,
  title,
  body,
}: {
  index: number
  title: string
  body: string
}) {
  return (
    <div className="relative pl-12">
      <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-strong font-mono text-xs text-accent">
        {String(index).padStart(2, '0')}
      </span>
      <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
    </div>
  )
}
