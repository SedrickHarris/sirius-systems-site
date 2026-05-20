// Editorial section marker: "01 / What we build". Mono-styled, small caps,
// with a thin accent rule. Used at the top of every major section to give
// the page an editorial rhythm.
export function SectionLabel({
  index,
  label,
  tone = 'default',
}: {
  index: string
  label: string
  tone?: 'default' | 'accent'
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-eyebrow">
      <span className={tone === 'accent' ? 'text-accent' : 'text-muted'}>
        {index}
      </span>
      <span aria-hidden className="h-px w-8 bg-border-strong" />
      <span className="text-foreground/80">{label}</span>
    </div>
  )
}
