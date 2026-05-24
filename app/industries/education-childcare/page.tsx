import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'education-childcare',
  metaTitle: 'Education & Childcare Business Automation | Sirius Systems',
  metaDescription:
    'AI automation, enrollment follow-up, and reputation management for tutoring, childcare, music schools, martial arts studios, and training programs.',
  eyebrow: 'Education & Childcare',
  headline: 'The System That Turns Inquiries Into Enrolled Students',
  subheadline:
    'Parents research, compare reviews, and reach out to multiple programs at once. The schools and studios that win enrollment are the ones that respond first, follow up consistently, and have the best reputation online.',
  heroHighlights: [
    'Instant inquiry response so no enrollment lead goes cold',
    'Automated follow-up sequences from first contact to enrollment',
    'Review generation to build your reputation for new families researching online',
    'Parent communication automation for reminders and re-enrollment',
  ],
  problemHeadline: 'Where education and childcare businesses lose enrollment',
  problems: [
    'Enrollment inquiries come in and sit unanswered for hours or days because staff are in session and cannot respond immediately.',
    'Parents reach out to multiple programs at once, and your competitors respond faster, so you lose the enrollment before a conversation even starts.',
    'You have no consistent follow-up system, so prospects who do not convert immediately are lost instead of nurtured until they are ready.',
    'Satisfied families do not leave reviews because no one asks them at the right moment, and your online reputation does not reflect your actual quality.',
  ],
  systemsHeadline: 'The automation stack built for education and childcare',
  serviceSlugs: [
    'lead-generation-automation',
    'ai-chatbots',
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
    'crm-automation',
  ],
  subVerticalsHeadline: 'Education and childcare programs we work with',
  featured: [
    { name: 'Tutoring & Test Prep Centers', blurb: 'Inquiry response and enrollment automation for tutoring and test prep businesses.' },
    { name: 'Childcare & Daycare Centers', blurb: 'Parent inquiry follow-up and review systems for childcare and daycare providers.' },
    { name: 'Music, Dance & Martial Arts Schools', blurb: 'Trial class booking automation and review generation for studios and schools.' },
    { name: 'Private Schools & Preschools', blurb: 'Enrollment inquiry follow-up and reputation management for private and preschool programs.' },
    { name: 'Training & Trade Schools', blurb: 'Lead follow-up and enrollment automation for vocational and trade school programs.' },
  ],
  compact: [
    { name: 'Driving Schools', blurb: 'Booking automation and review generation for driving school businesses.' },
    { name: 'Swim Schools', blurb: 'Enrollment follow-up and review systems for swim school programs.' },
    { name: 'Sports Training Programs', blurb: 'Inquiry response and booking automation for youth and adult sports training.' },
    { name: 'Language Schools', blurb: 'Enrollment follow-up and reputation management for language learning programs.' },
    { name: 'After-School Programs', blurb: 'Parent inquiry automation and review systems for after-school program providers.' },
    { name: 'Online Education Providers', blurb: 'Lead follow-up and enrollment automation for online course and education businesses.' },
    { name: 'Youth Programs & Coaching', blurb: 'Inquiry response and booking automation for youth programs and coaching services.' },
    { name: 'Career & Certification Programs', blurb: 'Lead nurture and enrollment automation for career training and certification providers.' },
    { name: 'Homeschool Support Programs', blurb: 'Inquiry follow-up and communication automation for homeschool support services.' },
    { name: 'Continuing Education Providers', blurb: 'Lead capture and follow-up automation for continuing education and professional development programs.' },
  ],
  faqs: [
    {
      q: 'What types of education and childcare businesses do you work with?',
      a: 'We work with tutoring centers, childcare providers, music and dance studios, martial arts schools, trade schools, and similar programs. If your business depends on enrollment, parent communication, and online reputation, the system applies.',
    },
    {
      q: 'How does inquiry response automation work for a school or studio?',
      a: 'When a parent or student submits an inquiry through your website, an automated response goes out immediately with relevant information and a prompt to book a tour or trial class. A follow-up sequence continues until they enroll or opt out.',
    },
    {
      q: 'Can you automate trial class or tour bookings?',
      a: 'Yes. Automated booking sequences for trials, tours, and consultations are a core part of the system. The flow is configured around your program type and scheduling workflow.',
    },
    {
      q: 'How does review generation work for a school or childcare center?',
      a: 'After a milestone — enrollment, a semester, or a completed program — an automated message asks the parent or student to leave a Google review. The system requests reviews from real families, it does not fabricate them.',
    },
    // TODO: confirm with client which enrollment or school management systems they currently use
    {
      q: 'Do you integrate with enrollment management or school management software?',
      a: 'Integration capability depends on which platforms you use. We evaluate this during onboarding. We confirm compatibility during onboarding.',
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

export default function EducationChildcareIndustryPage() {
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
            { name: 'Education & Childcare', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
