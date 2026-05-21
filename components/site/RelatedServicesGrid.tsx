import { ServiceCard } from './ServiceCard'
import { SERVICES } from '@/lib/services'

// Looks up each slug in the canonical service catalog and renders the
// shared ServiceCard. Skips silently when a slug isn't found: so editing
// the catalog later can't break a service page that references a removed
// slug (the link just disappears, no crash).
export function RelatedServicesGrid({ slugs }: { slugs: string[] }) {
  const services = slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s))

  if (services.length === 0) return null

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
