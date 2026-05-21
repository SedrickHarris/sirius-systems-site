import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'professional-services',
  metaTitle:
    'Professional Services Automation: AI Chatbots, Booking & Reviews | Sirius Systems',
  metaDescription:
    'AI chatbots, appointment booking automation, CRM, and reputation management for professional service firms: law, dental, medical, accounting, and more.',
  eyebrow: 'Professional Services',
  headline: 'More Qualified Appointments. Less Time Chasing Them.',
  subheadline:
    "Professional service firms lose potential clients to slow response times, phone tag, and no-shows. We build the system that captures inquiries instantly, qualifies them automatically, books the consultation, and follows up so you don't have to.",
  heroHighlights: [
    'Online intake + consultation booking, 24/7',
    'No-show reduction with timed reminders',
    'AI chatbot that routes: never gives advice',
    'Review requests after every completed appointment',
  ],
  problemHeadline: 'Where professional service firms lose clients',
  problems: [
    'Inquiry forms get submitted after hours and sit unanswered until morning: the prospect has already moved on.',
    "Phone tag replaces the consultation booking process, wasting staff time and losing clients who won't chase you back.",
    'No-shows burn capacity because reminders are manual, inconsistent, or nonexistent.',
    'Reviews accumulate slowly because asking feels awkward: but competitors with more reviews win more searches.',
  ],
  systemsHeadline: 'The client acquisition and retention stack',
  serviceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'crm-automation',
    'lead-generation-automation',
    'review-automation',
    'all-in-one-business-growth-system',
  ],
  subVerticalsHeadline: 'Built for your specific practice type',
  featured: [
    { name: 'Law Firms & Attorneys', blurb: 'Intake automation, consultation booking, and reputation management for law firms competing on responsiveness and local search.' },
    { name: 'Dental Practices', blurb: 'Appointment booking automation, no-show reduction, and review systems for dental practices.' },
    { name: 'Medical Practices & Clinics', blurb: 'Patient intake automation, appointment reminders, and review flows for medical practices and independent clinics.' },
    { name: 'Accounting & CPA Firms', blurb: 'Consultation booking automation and review systems for accounting firms and CPAs during and outside tax season.' },
  ],
  compact: [
    { name: 'Chiropractic', blurb: 'Appointment booking automation and review flows for chiropractic offices.' },
    { name: 'Physical Therapy & Rehab', blurb: 'Booking automation and patient follow-up for physical therapy and rehab practices.' },
    { name: 'Optometry', blurb: 'Appointment reminders, rebooking automation, and review systems for optometry practices.' },
    { name: 'Mental Health & Therapy', blurb: 'Intake automation and no-show reduction for mental health and therapy practices.' },
    { name: 'Dermatology & Med Spas', blurb: 'Booking automation, no-show reduction, and review flows for dermatology and med spa practices.' },
    { name: 'Financial Advisors & Wealth Management', blurb: 'Lead qualification, consultation booking, and CRM automation for financial advisors.' },
    { name: 'Insurance Agencies', blurb: 'Lead follow-up automation and CRM integration for independent insurance agencies.' },
    { name: 'Mortgage Brokers', blurb: 'Lead nurturing, consultation booking, and review automation for mortgage brokers.' },
    { name: 'Veterinary Practices', blurb: 'Appointment reminders, rebooking automation, and review requests for veterinary practices.' },
    { name: 'Tutoring & Test Prep', blurb: 'Enrollment automation and session booking for tutoring and test prep businesses.' },
    { name: 'Coaching & Consulting', blurb: 'Discovery call booking automation and CRM follow-up for coaches and consultants.' },
  ],
  // FAQ: Q2 (HIPAA) + Q4 (integrations) are intentionally non-committal
  // until client confirms which platforms are supported.
  faqs: [
    {
      q: 'What kinds of professional service businesses do you work with?',
      a: 'We work with licensed professionals and service firms: attorneys, dentists, medical practices, accountants, financial advisors, therapists, and more. If your business depends on scheduled appointments and local reputation, the system applies.',
    },
    {
      q: 'Is this HIPAA-compliant for medical and mental health practices?',
      a: 'This depends on the specific tools and integrations used in your setup. We evaluate compliance requirements during the discovery call and scope the system accordingly. We do not make blanket compliance guarantees.',
    },
    {
      q: 'How does the AI chatbot handle sensitive inquiries in a professional setting?',
      a: 'The chatbot is configured to qualify and route: not to provide advice or answer clinical and legal questions. It captures the inquiry, collects context, and routes to the right staff member or booking flow. The system is scoped and tested before going live.',
    },
    {
      q: 'Can this integrate with the scheduling system we already use?',
      a: "Typically yes. We evaluate your current tools during onboarding and build integrations where available. If a direct integration isn't supported, we configure a workflow that bridges the gap.",
    },
    {
      q: 'How do you handle no-show reduction?',
      a: 'The system sends automated appointment reminders by text and email at intervals you configure: typically 24 hours and 2 hours before the appointment. Confirmed appointments see significantly fewer no-shows than those managed manually.',
    },
  ],
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
  },
}

export default function ProfessionalServicesIndustryPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/industries/${DATA.slug}`,
            name: DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: 'Professional Services', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
