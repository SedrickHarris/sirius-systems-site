import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { breadcrumbList, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'Privacy Policy | Sirius Systems',
  description:
    'Privacy policy for Sirius Systems, operated by SHH Group. Learn how we collect, use, and protect your information.',
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: '/privacy',
    images: ['/og/default.webp'],
  },
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/privacy',
            name: PAGE.title,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' },
          ]),
        ]}
      />

      {/* ───────── Hero (dark) ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <span className="section-eyebrow">Legal</span>
          <h1 className="mt-6 hero-heading">Privacy Policy</h1>
          <p className="mt-7 text-sm text-white/70 md:text-base">
            Last updated: May 23, 2026
          </p>
        </div>
      </section>

      {/* ───────── Body (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container content-medium space-y-14">

          <div>
            <h2 className="section-heading">Who We Are</h2>
            <p className="mt-5 section-copy">
              This website is operated by SHH Group, doing business as Sirius
              Systems (&ldquo;Sirius Systems&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Our principal place of
              business is 304 S Jones Blvd Ste 1915, Las Vegas, NV 89107.
            </p>
            <p className="mt-4 section-copy">
              If you have questions about this policy, contact us at{' '}
              <a
                href={SITE.contact.email.href}
                className="link-underline"
              >
                {SITE.contact.email.display}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="section-heading">What Information We Collect</h2>
            <p className="mt-5 section-copy">
              We collect information you provide directly to us, including
              when you:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 section-copy">
              <li>Submit a contact or qualification form</li>
              <li>Request a consultation or audit call</li>
              <li>Email or call us directly</li>
            </ul>
            <p className="mt-4 section-copy">
              Information collected may include your name, email address,
              phone number, business name, industry, and details about your
              business needs.
            </p>
            <p className="mt-4 section-copy">
              We also collect certain information automatically when you visit
              our site, including IP address, browser type, pages visited, and
              referring URLs through standard web analytics tools.
            </p>
          </div>

          <div>
            <h2 className="section-heading">How We Use Your Information</h2>
            <p className="mt-5 section-copy">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 section-copy">
              <li>Respond to your inquiries and requests</li>
              <li>Schedule and conduct consultations</li>
              <li>Send follow-up communications related to our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 section-copy">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="section-heading">How We Share Your Information</h2>
            <p className="mt-5 section-copy">
              We may share your information with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 section-copy">
              <li>
                Service providers who help us operate our business (including
                CRM, email, and scheduling platforms)
              </li>
              <li>Professional advisors where required by law</li>
              <li>Successors in the event of a business transfer</li>
            </ul>
            <p className="mt-4 section-copy">
              We require service providers to protect your information
              consistent with this policy.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Cookies and Tracking</h2>
            <p className="mt-5 section-copy">
              Our website may use cookies and similar tracking technologies to
              improve your experience and analyze site traffic. You can
              control cookies through your browser settings. Disabling cookies
              may affect certain site functionality.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Data Retention</h2>
            <p className="mt-5 section-copy">
              We retain your information for as long as necessary to fulfill
              the purposes described in this policy, unless a longer retention
              period is required by law.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Your Rights</h2>
            <p className="mt-5 section-copy">
              Depending on your location, you may have rights regarding your
              personal information, including the right to access, correct,
              or delete your data. To exercise these rights, contact us at{' '}
              <a
                href={SITE.contact.email.href}
                className="link-underline"
              >
                {SITE.contact.email.display}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="section-heading">Third-Party Links</h2>
            <p className="mt-5 section-copy">
              Our website may contain links to third-party websites. We are
              not responsible for the privacy practices of those sites and
              encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Children&rsquo;s Privacy</h2>
            <p className="mt-5 section-copy">
              Our services are not directed to individuals under the age of
              13. We do not knowingly collect personal information from
              children.
            </p>
          </div>

          <div>
            <h2 className="section-heading">Changes to This Policy</h2>
            <p className="mt-5 section-copy">
              We may update this policy from time to time. We will post the
              updated policy on this page with a revised effective date. Your
              continued use of our site following any changes constitutes
              your acceptance of the updated policy.
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
            <p className="mt-8 text-sm text-[color:var(--text-muted)]">
              See also our{' '}
              <Link href="/terms" className="link-underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
