import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { INDUSTRIES } from '@/lib/industries'
import { SERVICES } from '@/lib/services'
import {
  getIntersectionsForHub,
  getIntersectionsForService,
  getRelatedIntersections,
  getSubVerticalsForHub,
} from '@/lib/internal-links'

// Contextual internal-link blocks for the industry cluster. Every list is built
// from lib/internal-links.ts, which reads the route tree, so a page that ships
// is linked automatically. Server components only (lib/internal-links uses fs).
// Links and labels only: no claims, no schema.

type LinkItem = { href: string; label: string }

function LinkPills({ items, ariaLabel }: { items: LinkItem[]; ariaLabel: string }) {
  return (
    <ul aria-label={ariaLabel} className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="card-subtle inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            {item.label}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Hub page: every intersection page under the hub, plus its /for/ pages. */
export function HubChildLinks({ hubSlug }: { hubSlug: string }) {
  const hub = INDUSTRIES.find((i) => i.slug === hubSlug)
  const services = getIntersectionsForHub(hubSlug)
  const trades = getSubVerticalsForHub(hubSlug)
  if (!hub || (services.length === 0 && trades.length === 0)) return null

  return (
    <section className="section-soft section-padding">
      <div className="site-container">
        {services.length > 0 && (
          <>
            <div className="content-medium">
              <span className="section-eyebrow">Services by industry</span>
              <h2 className="mt-5 section-heading">Services for {hub.name}</h2>
            </div>
            <div className="mt-10">
              <LinkPills
                ariaLabel={`Services for ${hub.name}`}
                items={services.map((p) => ({ href: p.href, label: p.label }))}
              />
            </div>
          </>
        )}
        {trades.length > 0 && (
          <>
            <div className="content-medium mt-14">
              <span className="section-eyebrow">Trade pages</span>
              <h2 className="mt-5 section-heading">
                {hub.name} businesses we build for
              </h2>
            </div>
            <div className="mt-10">
              <LinkPills
                ariaLabel={`${hub.name} trade pages`}
                items={trades.map((p) => ({ href: p.href, label: p.name }))}
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

/** Service page: this service's intersection page in every industry that has one. */
export function ServiceIndustryLinks({ serviceSlug }: { serviceSlug: string }) {
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const pages = getIntersectionsForService(serviceSlug)
  if (!service || pages.length === 0) return null

  return (
    <section className="section-light section-padding">
      <div className="site-container">
        <div className="content-medium">
          <span className="section-eyebrow">By industry</span>
          <h2 className="mt-5 section-heading">{service.name} by industry</h2>
        </div>
        <div className="mt-10">
          <LinkPills
            ariaLabel={`${service.name} by industry`}
            items={pages.map((p) => ({ href: p.href, label: p.label }))}
          />
        </div>
      </div>
    </section>
  )
}

/** Intersection page: parent hub, sibling services, same service in other industries. */
export function IntersectionRelatedLinks({
  hubSlug,
  serviceSlug,
}: {
  hubSlug: string
  serviceSlug: string
}) {
  const hub = INDUSTRIES.find((i) => i.slug === hubSlug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  if (!hub || !service) return null
  const { otherServices, otherIndustries } = getRelatedIntersections(hubSlug, serviceSlug)

  return (
    <section className="section-light section-padding">
      <div className="site-container">
        <div className="content-medium">
          <span className="section-eyebrow">Keep exploring</span>
          <h2 className="mt-5 section-heading">More for {hub.name}</h2>
        </div>
        <div className="mt-10">
          <LinkPills
            ariaLabel={`${hub.name} overview`}
            items={[{ href: `/industries/${hubSlug}`, label: `${hub.name} overview` }]}
          />
        </div>

        {otherServices.length > 0 && (
          <div className="mt-10">
            <h3 className="card-title">Other services for {hub.name}</h3>
            <div className="mt-4">
              <LinkPills
                ariaLabel={`Other services for ${hub.name}`}
                items={otherServices.map((p) => ({ href: p.href, label: p.label }))}
              />
            </div>
          </div>
        )}

        {otherIndustries.length > 0 && (
          <div className="mt-10">
            <h3 className="card-title">{service.name} in other industries</h3>
            <div className="mt-4">
              <LinkPills
                ariaLabel={`${service.name} in other industries`}
                items={otherIndustries.map((p) => ({ href: p.href, label: p.label }))}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
