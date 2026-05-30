import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'healthcare-medical',

  metaTitle:
    'Medical Practice Scheduling & Reviews | Sirius Systems',

  metaDescription:
    'Appointment automation, AI scheduling, and review systems for dental, chiropractic, physical therapy, and medical practices.',

  eyebrow: 'Healthcare & Medical Practices',

  headline:
    'Your Practice Loses Patients It Never Had a Chance to Respond To',

  subheadline:
    'A new patient inquiry that goes unanswered after 5 PM goes somewhere else by 9 AM. A satisfied patient who had a great visit does not leave a review because no one asked. The practice that books faster and shows up better on Google wins more patients — regardless of clinical quality. We build the system that closes both gaps.',

  heroHighlights: [
    'After-hours inquiry capture and AI-assisted scheduling',
    'Automated appointment reminders that reduce no-shows',
    'Review requests sent after every completed visit',
    'Patient recall sequences that bring lapsed patients back',
  ],

  problemHeadline: 'Where patient acquisition breaks down',

  problems: [
    'New patient inquiries arrive after hours and sit until morning. By then, the patient has booked somewhere else.',
    'No-shows and last-minute cancellations leave gaps with no fill system — the slot goes empty.',
    'Satisfied patients who had a positive experience leave without a review because no one asked at the right moment.',
    'Lapsed patients drift to other providers with no recall sequence bringing them back.',
  ],

  systemsHeadline:
    'Appointment automation and reputation management for healthcare practices',

  systemsCopy:
    'Patient acquisition has two halves: getting new patients in the door and keeping existing patients from drifting. Most practices are under-automated on both. These are the six systems that close the gap.',

  serviceSlugs: [
    'appointment-booking-automation',
    'ai-chatbots',
    'reputation-management',
    'review-automation',
    'ai-voicebots',
    'crm-automation',
  ],

  subVerticalsHeadline: 'Built for patient-facing practices',

  subVerticalsCopy:
    'Healthcare businesses are service businesses first. The automation work — capturing inquiries, confirming appointments, requesting reviews, recalling lapsed patients — is operational, not clinical. The system is scoped around your front-end patient acquisition, not your EHR or clinical workflows.',

  featured: [
    {
      name: 'Medical Clinics & Primary Care',
      blurb:
        'Appointment automation and review systems for primary care and family medicine practices.',
    },
    {
      name: 'Dental Practices & Orthodontists',
      blurb:
        'New patient intake, booking confirmation, and post-visit review flows for dental offices.',
    },
    {
      name: 'Physical Therapy Clinics',
      blurb:
        'Session reminders, no-show reduction, and review generation for physical therapy practices.',
    },
    {
      name: 'Chiropractic Offices',
      blurb:
        'Recurring appointment automation and reputation management for chiropractic businesses.',
    },
    {
      name: 'Mental Health & Counseling',
      blurb:
        'Intake follow-up and scheduling automation for therapy and counseling practices.',
    },
    {
      name: 'Urgent Care Clinics',
      blurb:
        'Inquiry response and review systems for urgent care and walk-in clinics.',
    },
  ],

  compact: [
    {
      name: 'Dermatology Practices',
      blurb:
        'Booking and review automation for dermatology and skin care practices.',
    },
    {
      name: 'Optometry Practices',
      blurb:
        'Appointment reminders and review generation for eye care providers.',
    },
    {
      name: 'Pediatric Clinics',
      blurb:
        'Parent communication and scheduling automation for pediatric offices.',
    },
    {
      name: "OB-GYN & Women's Health",
      blurb:
        "Appointment automation for women's health and OB-GYN practices.",
    },
    {
      name: 'Home Health Agencies & Senior Care',
      blurb:
        'Inquiry follow-up and review systems for home health and senior care providers.',
    },
    {
      name: 'Occupational & Speech Therapy',
      blurb:
        'Scheduling and recall automation for occupational therapy and speech therapy clinics.',
    },
    {
      name: 'Podiatry Practices',
      blurb:
        'Appointment booking and review flows for podiatry offices.',
    },
    {
      name: 'Pain Management Clinics',
      blurb:
        'Patient follow-up and review systems for pain management practices.',
    },
    {
      name: 'Sports Medicine Clinics',
      blurb:
        'Booking automation and reputation management for sports medicine providers.',
    },
    {
      name: 'Telehealth Providers',
      blurb:
        'Inquiry capture and scheduling automation for telehealth practices.',
    },
    {
      name: 'Medical Billing Companies',
      blurb:
        'Lead follow-up and CRM automation for medical billing service providers.',
    },
    {
      name: 'Medical Equipment Providers',
      blurb:
        'Lead nurture and follow-up automation for medical equipment businesses.',
    },
  ],

  // TODO: confirm with client which platforms are used and
  // confirm compliance posture before publishing Q2
  faqs: [
    {
      q: 'What types of healthcare practices do you work with?',
      a: 'We work with patient-facing practices of all sizes — dental, chiropractic, physical therapy, mental health, primary care, urgent care, and specialty clinics. If your business depends on scheduled appointments, new patient acquisition, and local reputation, the system applies.',
    },
    {
      q: 'Do your systems work with HIPAA requirements for patient communication?',
      a: 'The automation we build is focused on front-end communication — scheduling inquiries, appointment reminders, and review requests. These are not clinical data functions. That said, compliance requirements vary by practice type, platform, and how patient data flows through the system. We evaluate your specific setup during the discovery call and scope accordingly. We do not make blanket compliance guarantees.',
    },
    {
      q: 'How does the AI chatbot work for a medical or dental practice?',
      a: 'The chatbot is configured to qualify new patient inquiries, answer common scheduling questions, and route to the appropriate booking flow or staff member. It does not provide clinical information, diagnosis, or medical advice. Every response boundary is set during the scoping process before the system goes live.',
    },
    {
      q: 'How does review automation work for a healthcare practice?',
      a: 'After an appointment closes, the system sends a review request by text at a timed interval. The message links directly to your Google Business Profile. It is not tied to the clinical record — it is a separate patient communication triggered by appointment completion status in your booking system. Patients who click leave a review in one tap. No manual follow-up required from your staff.',
    },
    {
      q: 'Can the system help bring back patients who have not booked in a while?',
      a: 'Yes. Patient recall sequences send automated outreach to contacts in your CRM who have not booked within a configurable window — typically 6 or 12 months, depending on your practice type. The sequence sends a message, waits for a response, and routes interested patients into the booking flow. You define the list; the system handles the outreach.',
    },
  ],

  ctaHeadline: 'Book a 20-minute revenue leak audit.',

  ctaBody:
    'We will map where new patient inquiries, reviews, or follow-up are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.',

  ctaPrimaryLabel: 'Book the audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-healthcare-medical.webp', alt: DATA.metaTitle }],
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
