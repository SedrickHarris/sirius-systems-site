import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { breadcrumbList, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'Terms of Service | Sirius Systems',
  description:
    'Terms of service for Sirius Systems, operated by SHH Group. Review the terms governing use of our website and services.',
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/terms' },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: '/terms',
    images: ['/og/default.webp'],
  },
}

export default function TermsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/terms',
            name: PAGE.title,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Terms of Service', url: '/terms' },
          ]),
        ]}
      />

      {/* ───────── Hero (dark) ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <span className="section-eyebrow">Legal</span>
          <h1 className="mt-6 hero-heading">Terms of Service</h1>
          <p className="mt-7 text-sm text-white/70 md:text-base">
            Last updated: May 23, 2026
          </p>
        </div>
      </section>

      {/* ───────── Body (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container content-medium space-y-14">

          <div>
            <h2 className="section-heading">Agreement to Terms</h2>
            <p className="mt-5 section-copy">
              By accessing or using the Sirius Systems website at{' '}
              <a href={SITE.url} className="link-underline">
                {SITE.url}/
              </a>{' '}
              (the &ldquo;Site&rdquo;), you agree to be bound by these Terms
              of Service. If you do not agree, do not use the Site.
            </p>
            <p className="mt-4 section-copy">
              The Site is operated by SHH Group, doing business as Sirius
              Systems (&ldquo;Sirius Systems&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;), with a principal place
              of business at 304 S Jones Blvd Ste 1915, Las Vegas, NV 89107.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Use of the Site</h2>
            <p className="mt-5 section-copy">
              You agree to use the Site only for lawful purposes and in a
              manner that does not infringe the rights of others. You may
              not:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 section-copy">
              <li>Use the Site to transmit spam or unsolicited messages</li>
              <li>
                Attempt to gain unauthorized access to any part of the Site
                or its related systems
              </li>
              <li>
                Use automated tools to scrape or extract content without our
                written permission
              </li>
              <li>Misrepresent your identity or affiliation</li>
            </ul>
          </div>

          <div>
            <h2 className="section-heading">Intellectual Property</h2>
            <p className="mt-5 section-copy">
              All content on the Site &mdash; including text, graphics,
              logos, and code &mdash; is the property of SHH Group dba Sirius
              Systems or its licensors and is protected by applicable
              intellectual property laws.
            </p>
            <p className="mt-4 section-copy">
              You may not reproduce, distribute, or create derivative works
              from any Site content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Services and Consultations</h2>
            <p className="mt-5 section-copy">
              Information on the Site is provided for general informational
              purposes only. Nothing on the Site constitutes a binding offer
              or guarantee of results.
            </p>
            <p className="mt-4 section-copy">
              Specific services, pricing, timelines, and outcomes are
              governed by separate written agreements between Sirius Systems
              and each client.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Disclaimer of Warranties</h2>
            <p className="mt-5 section-copy">
              The Site and its content are provided &ldquo;as is&rdquo;
              without warranty of any kind, express or implied. We do not
              warrant that the Site will be uninterrupted, error-free, or
              free of viruses or other harmful components.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Limitation of Liability</h2>
            <p className="mt-5 section-copy">
              To the fullest extent permitted by law, SHH Group dba Sirius
              Systems shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your
              use of the Site or reliance on any content on the Site.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Third-Party Links</h2>
            <p className="mt-5 section-copy">
              The Site may contain links to third-party websites. We do not
              endorse or control those sites and are not responsible for
              their content or practices.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Privacy</h2>
            <p className="mt-5 section-copy">
              Your use of the Site is also governed by our{' '}
              <Link href="/privacy" className="link-underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Changes to These Terms</h2>
            <p className="mt-5 section-copy">
              We may update these Terms from time to time. Updated Terms will
              be posted on this page with a revised effective date. Your
              continued use of the Site following any changes constitutes
              your acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Governing Law</h2>
            <p className="mt-5 section-copy">
              These Terms are governed by the laws of the State of Nevada,
              without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Contact Us</h2>
            <address className="mt-5 not-italic section-copy">
              SHH Group dba Sirius Systems
              <br />
              304 S Jones Blvd Ste 1915
              <br />
              Las Vegas, NV 89107
              <br />
              Phone:{' '}
              <a
                href={SITE.contact.phone.href}
                className="link-underline"
              >
                {SITE.contact.phone.display}
              </a>
              <br />
              Email:{' '}
              <a
                href={SITE.contact.email.href}
                className="link-underline"
              >
                {SITE.contact.email.display}
              </a>
            </address>
          </div>

        </div>
      </section>
    </>
  )
}
