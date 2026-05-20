// CSS / inline-SVG "image placeholder" for service and category cards.
// Six tasteful variants — abstract constellation/grid shapes that nod to
// the brand's "Sirius / stellar systems" direction without being literal.
// Replace with real generated imagery later per docs/brand/image-prompt-bank.md.

type Variant = 'orbit' | 'pulse' | 'wave' | 'grid' | 'beacon' | 'arc'

const STROKE = 'rgb(148 163 184 / 0.45)'
const ACCENT = 'rgb(14 165 233 / 0.95)'
const ACCENT_SOFT = 'rgb(14 165 233 / 0.30)'

export function ConstellationGlyph({
  variant = 'orbit',
  className = '',
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="cg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_SOFT} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {variant === 'orbit' && (
        <g>
          <circle cx="60" cy="40" r="22" stroke={STROKE} strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="40" r="36" stroke={STROKE} strokeWidth="0.5" fill="none" strokeDasharray="2 4" />
          <circle cx="82" cy="40" r="2.5" fill={ACCENT} />
          <circle cx="60" cy="40" r="1.5" fill={STROKE} />
          <circle cx="42" cy="22" r="1" fill={STROKE} />
        </g>
      )}
      {variant === 'pulse' && (
        <g>
          {[24, 36, 48, 60, 72, 84, 96].map((x, i) => (
            <line
              key={x}
              x1={x}
              x2={x}
              y1={40 - (i === 3 ? 22 : Math.abs(3 - i) * 6 + 4)}
              y2={40 + (i === 3 ? 22 : Math.abs(3 - i) * 6 + 4)}
              stroke={i === 3 ? ACCENT : STROKE}
              strokeWidth={i === 3 ? '1.5' : '0.75'}
              strokeLinecap="round"
            />
          ))}
        </g>
      )}
      {variant === 'wave' && (
        <g>
          <path
            d="M 12 40 Q 30 24 48 40 T 84 40 T 108 40"
            stroke={STROKE}
            strokeWidth="0.75"
            fill="none"
          />
          <path
            d="M 12 50 Q 30 34 48 50 T 84 50 T 108 50"
            stroke={ACCENT}
            strokeWidth="1.25"
            fill="none"
          />
          <circle cx="108" cy="50" r="2.5" fill={ACCENT} />
        </g>
      )}
      {variant === 'grid' && (
        <g>
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const cx = 16 + c * 11
              const cy = 14 + r * 11
              const accentDot = r === 2 && c === 5
              return (
                <circle
                  key={`${r}-${c}`}
                  cx={cx}
                  cy={cy}
                  r={accentDot ? 2 : 0.9}
                  fill={accentDot ? ACCENT : STROKE}
                />
              )
            }),
          )}
        </g>
      )}
      {variant === 'beacon' && (
        <g>
          <circle cx="60" cy="40" r="20" fill="url(#cg-glow)" />
          <circle cx="60" cy="40" r="3.5" fill={ACCENT} />
          <line x1="60" y1="14" x2="60" y2="66" stroke={STROKE} strokeWidth="0.5" />
          <line x1="34" y1="40" x2="86" y2="40" stroke={STROKE} strokeWidth="0.5" />
        </g>
      )}
      {variant === 'arc' && (
        <g>
          <path
            d="M 16 60 Q 60 8 104 60"
            stroke={STROKE}
            strokeWidth="0.75"
            fill="none"
          />
          <circle cx="16" cy="60" r="1.5" fill={STROKE} />
          <circle cx="60" cy="20" r="2.5" fill={ACCENT} />
          <circle cx="104" cy="60" r="1.5" fill={STROKE} />
        </g>
      )}
    </svg>
  )
}
