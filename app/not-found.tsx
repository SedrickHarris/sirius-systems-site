import Link from 'next/link'
import { Section } from '@/components/site/Section'

export const metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <Section className="container-page">
      <p className="text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        This page is off the map.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        The URL you followed doesn&rsquo;t match any page on Sirius Systems. Try
        the{' '}
        <Link href="/" className="underline underline-offset-4 hover:text-foreground">
          home page
        </Link>
        , or head to{' '}
        <Link href="/services" className="underline underline-offset-4 hover:text-foreground">
          services
        </Link>
        ,{' '}
        <Link href="/industries" className="underline underline-offset-4 hover:text-foreground">
          industries
        </Link>
        ,{' '}
        <Link href="/blog" className="underline underline-offset-4 hover:text-foreground">
          blog
        </Link>
        , or{' '}
        <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">
          contact us
        </Link>
        .
      </p>
    </Section>
  )
}
