import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'healthcare-medical',
  metaTitle: 'Healthcare & Medical Practice Automation | Sirius Systems',
  metaDescription:
    'AI automation, appointment booking, and reputation management for medical clinics, dental practices, physical therapy, chiropractic offices, mental health practices, and urgent care.',
  eyebrow: 'Healthcare & Medical Practices',
  headline: 'The Growth System Built for Patient-Facing Practices',
  subheadline:
    'Patients search, compare reviews, and book online before they ever call. The practices that grow are the ones with the fastest response, the most reviews, and the cleanest booking experience.',
  heroHighlights: [
    'Automated appointment booking and confirmation sequences',
    'Review generation after every completed visit',
    'Missed-call text-back so no new patient inquiry goes unanswered',
    'Recall and reactivation campaigns for lapsed patients',
  ],
  problemHeadline: 'Where patient-facing practices lose revenue',
  problems: [
    'New patient inquiries go unanswered after hours because no one is staffed to respond, and the patient books somewhere else.',
    'Your practice has hundreds of satisfied patients but almost no recent Google reviews because no one asks at the right moment.',
    'Appointment no-shows and last-minute cancellations leave gaps in the schedule that are hard to fill without a system.',
    'Lapsed patients drift away quietly because there is no automated recall or reactivation follow-up in place.',
  ],
  systemsHeadline: 'The automation stack built for healthcare and medical',
  systemsCopy:
    'These are the systems that handle the front-end patient experience — from first inquiry to confirmed appointment to post-visit review — so your staff focuses on care, not follow-up.',
  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'ai-voicebots',
    'crm-automation',
  ],
  subVerticalsHeadline: 'Practice types we work with',
  subVerticalsCopy:
    'These systems apply across patient-facing healthcare and medical businesses of all sizes.',
  featured: [
    { name: 'Medical Clinics & Primary Care', blurb: 'Appointment automation and review systems for primary care and family medicine practices.' },
    { name: 'Dental Practices & Orthodontists', blurb: 'New patient intake, booking confirmation, and post-visit review flows for dental offices.' },
    { name: 'Physical Therapy Clinics', blurb: 'Session reminders, no-show reduction, and review generation for PT practices.' },
    { name: 'Chiropractic Offices', blurb: 'Recurring appointment automation and reputation management for chiropractic businesses.' },
    { name: 'Mental Health & Counseling', blurb: 'Intake follow-up and scheduling automation for therapy and counseling practices.' },
    { name: 'Urgent Care Clinics', blurb: 'Inquiry response and review systems for urgent care and walk-in clinics.' },
  ],
  compact: [
    { name: 'Dermatology Practices', blurb: 'Booking and review automation for dermatology and skin care practices.' },
    { name: 'Optometry Practices', blurb: 'Appointment reminders and review generation for eye care providers.' },
    { name: 'Pediatric Clinics', blurb: 'Parent communication and scheduling automation for pediatric offices.' },
    { name: "OB-GYN & Women's Health", blurb: "Appointment automation for women's health and OB-GYN practices." },
    { name: 'Home Health Agencies & Senior Care', blurb: 'Inquiry follow-up and review systems for home health and senior care providers.' },
    { name: 'Occupational & Speech Therapy', blurb: 'Scheduling and recall automation for OT and speech therapy clinics.' },
    { name: 'Podiatry Practices', blurb: 'Appointment booking and review flows for podiatry offices.' },
    { name: 'Pain Management Clinics', blurb: 'Patient follow-up and review systems for pain management practices.' },
    { name: 'Sports Medicine Clinics', blurb: 'Booking automation and reputation management for sports medicine providers.' },
    { name: 'Telehealth Providers', blurb: 'Inquiry capture and scheduling automation for telehealth practices.' },
    { name: 'Medical Billing Companies', blurb: 'Lead follow-up and CRM automation for medical billing service providers.' },
    { name: 'Medical Equipment Providers', blurb: 'Lead nurture and follow-up automation for medical equipment businesses.' },
  ],
  faqs: [
    {
      q: 'What types of healthcare businesses do you work with?',
      a: 'We work with patient-facing practices and healthcare businesses of all sizes — dental, chiropractic, physical therapy, mental health, primary care, and specialty clinics. If your business depends on appointments, reviews, and new patient acquisition, the system applies.',
    },
    // TODO: confirm with client which platforms are used and confirm compliance posture
    {
      q: 'Do your systems handle patient data securely?',
      a: 'The automation systems we build are focused on front-end communication — scheduling, follow-up messaging, and review requests. Specific compliance requirements depend on the tools and integrations selected. We confirm compatibility during onboarding.',
    },
    {
      q: 'Can you automate appointment reminders to reduce no-shows?',
      a: 'Yes. Automated reminder sequences — text and email — are a core part of the appointment booking system. Reminder timing and messaging are configured based on your practice type and scheduling workflow.',
    },
    {
      q: 'How does review generation work for a medical practice?',
      a: 'After a completed visit, an automated follow-up sequence asks the patient to leave a review on Google. The timing, message, and channel are configured to fit your practice. The system does not fabricate reviews — it requests them from real patients at the right moment.',
    },
    // TODO: confirm with client which practice management platforms they currently use
    {
      q: 'Do you integrate with practice management software?',
      a: 'Integration capability depends on which practice management platform you use. We evaluate integrations during onboarding. We confirm compatibility during onboarding.',
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

export default function HealthcareMedicalIndustryPage() {
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
            { name: 'Healthcare & Medical Practices', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
