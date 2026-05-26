// mdx-components.tsx
// Maps standard MDX elements to Sirius Systems dark-theme styles.
// All color values reference CSS variables from app/globals.css — no new hex values.
// The @tailwindcss/typography `prose` class is used as a base with
// dark-theme overrides applied via Tailwind utilities and inline className.
//
// Blog-specific MDX components (Callout, CTA, FAQ) are imported separately
// inside each post via: import { Callout } from '@/components/blog/Callout'
// They do NOT need registration here; MDX imports work in App Router.

import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { cn } from '@/lib/cn'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ── Headings ──────────────────────────────────────────────────────────────
    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 mb-3 font-display text-xl font-semibold leading-snug tracking-tight text-[color:var(--text)] md:text-2xl"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-7 mb-2 font-display text-lg font-semibold leading-snug text-[color:var(--text)] md:text-xl"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="mt-5 mb-1.5 font-display text-base font-semibold text-[color:var(--text)]"
        {...props}
      >
        {children}
      </h4>
    ),

    // ── Body text ─────────────────────────────────────────────────────────────
    p: ({ children, ...props }) => (
      <p
        className="my-4 text-base leading-[1.75] text-[color:var(--text-muted)]"
        {...props}
      >
        {children}
      </p>
    ),

    // ── Links ─────────────────────────────────────────────────────────────────
    a: ({ href, children, ...props }) => {
      const isInternal = href?.startsWith('/')
      if (isInternal) {
        return (
          <Link
            href={href as string}
            className="font-medium text-[color:var(--blue)] underline underline-offset-3 decoration-[color:var(--border-strong)] transition-colors hover:text-[color:var(--blue-hover)] hover:decoration-[color:var(--blue-hover)]"
            {...props}
          >
            {children}
          </Link>
        )
      }
      return (
        <a
          href={href}
          className="font-medium text-[color:var(--blue)] underline underline-offset-3 decoration-[color:var(--border-strong)] transition-colors hover:text-[color:var(--blue-hover)] hover:decoration-[color:var(--blue-hover)]"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    },

    // ── Lists ─────────────────────────────────────────────────────────────────
    ul: ({ children, ...props }) => (
      <ul
        className="my-4 space-y-1.5 pl-5 text-base leading-relaxed text-[color:var(--text-muted)] [list-style:disc]"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="my-4 space-y-1.5 pl-5 text-base leading-relaxed text-[color:var(--text-muted)] [list-style:decimal]"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="pl-1 leading-relaxed" {...props}>
        {children}
      </li>
    ),

    // ── Blockquote ────────────────────────────────────────────────────────────
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-[color:var(--blue)] bg-[color:var(--surface)] pl-5 pr-4 py-3 text-sm italic leading-relaxed text-[color:var(--text-muted)] rounded-r-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // ── Code ──────────────────────────────────────────────────────────────────
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-[color:var(--surface-2)] border border-[color:var(--border)] px-1.5 py-0.5 font-mono text-sm text-[color:var(--text)]"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),

    // ── Table ─────────────────────────────────────────────────────────────────
    table: ({ children, ...props }) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-[color:var(--border)]">
        <table
          className="w-full text-sm text-[color:var(--text-muted)]"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead
        className="bg-[color:var(--surface-2)] text-xs font-semibold uppercase tracking-wider text-[color:var(--text)]"
        {...props}
      >
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th
        className="px-4 py-3 text-left"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-t border-[color:var(--border)] px-4 py-3"
        {...props}
      >
        {children}
      </td>
    ),
    tr: ({ children, ...props }) => (
      <tr
        className="transition-colors hover:bg-[color:var(--surface)]"
        {...props}
      >
        {children}
      </tr>
    ),

    // ── Horizontal rule ───────────────────────────────────────────────────────
    hr: (props) => (
      <hr
        className="my-10 border-[color:var(--border)]"
        {...props}
      />
    ),

    // ── Strong / Em ───────────────────────────────────────────────────────────
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-[color:var(--text)]" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic text-[color:var(--text-muted)]" {...props}>
        {children}
      </em>
    ),

    // Spread any additional components (e.g. custom MDX components imported per-post)
    ...components,
  }
}
