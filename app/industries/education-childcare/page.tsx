import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'education-childcare',

  metaTitle: 'Enrollment Automation for Schools & Studios | Sirius Systems',

  metaDescription:
    'Enrollment follow-up, trial class booking, and review systems for tutoring centers, childcare providers, music schools, and martial arts studios.',

  eyebrow: 'Education & Childcare',

  headline:
    'The Enrollment Inquiry That Sits Unanswered for Four Hours Goes to the Next Program on the List',

  subheadline:
    'Parents research multiple programs at the same time and reach out to all of them. The school or studio that responds first and follows up consistently wins the enrollment — not always the one with the best curriculum. We build the system that puts you first in that race and keeps satisfied families producing the reviews that bring the next ones in.',

  heroHighlights: [
    'Instant enrollment inquiry response — no lead sits unanswered while staff are in session',
    'Automated follow-up sequences from first contact through enrollment decision',
    'Trial class and tour booking automation built around your scheduling workflow',
    'Post-enrollment and post-semester review requests that build your reputation online',
  ],

  problemHeadline: 'Where education and childcare businesses lose enrollment',

  problems: [
    'Enrollment inquiries come in while staff are teaching and sit unanswered for hours. By the time someone responds, the parent has already enrolled somewhere else.',
    'Parents contact three to five programs at once. The one that responds within minutes and follows up twice wins the enrollment. Without a system, you are not that program.',
    'Prospects who do not convert on the first contact fall through because there is no follow-up sequence. They needed one more touchpoint and never got it.',
    'Families who had a great experience do not leave reviews because no one asked them at the right moment after a milestone — enrollment, a completed semester, a promotion.',
  ],

  systemsHeadline:
    'Enrollment automation and reputation systems for education businesses',

  systemsCopy:
    'Enrollment has two gaps most programs do not automate: the window between inquiry and first contact, and the window between a completed experience and a Google review. These are the six systems that close both.',

  serviceSlugs: [
    'lead-generation-automation',
    'ai-chatbots',
    'appointment-booking-automation',
    'reputation-management',
    'review-automation',
    'crm-automation',
  ],

  subVerticalsHeadline:
    'Built for the way education and childcare programs actually run',

  subVerticalsCopy:
    'The automation work — capturing inquiries, booking trials and tours, following up with undecided families, requesting reviews — is operational. It runs around your program schedule, not instead of it.',

  featured: [
    {
      name: 'Tutoring & Test Prep Centers',
      blurb:
        'Inquiry response, trial session booking, and enrollment follow-up for tutoring and test prep businesses.',
    },
    {
      name: 'Childcare & Daycare Centers',
      blurb:
        'Parent inquiry automation, tour booking, and review generation for childcare and daycare providers.',
    },
    {
      name: 'Music, Dance & Martial Arts Schools',
      blurb:
        'Trial class booking automation, no-show reduction, and review flows for studios and skill schools.',
    },
    {
      name: 'Private Schools & Preschools',
      blurb:
        'Enrollment inquiry follow-up and reputation management for private school and preschool programs.',
    },
  ],

  compact: [
    {
      name: 'Training & Trade Schools',
      blurb:
        'Lead follow-up and enrollment automation for vocational and trade school programs.',
    },
    {
      name: 'Driving Schools',
      blurb:
        'Booking automation and review generation for driving school businesses.',
    },
    {
      name: 'Swim Schools',
      blurb:
        'Enrollment follow-up and review systems for swim school programs.',
    },
    {
      name: 'Sports Training Programs',
      blurb:
        'Inquiry response and booking automation for youth and adult sports training.',
    },
    {
      name: 'Language Schools',
      blurb:
        'Enrollment follow-up and reputation management for language learning programs.',
    },
    {
      name: 'After-School Programs',
      blurb:
        'Parent inquiry automation and review systems for after-school program providers.',
    },
    {
      name: 'Youth Programs & Coaching',
      blurb:
        'Inquiry response and booking automation for youth programs and coaching services.',
    },
    {
      name: 'Career & Certification Programs',
      blurb:
        'Lead nurture and enrollment automation for career training and certification providers.',
    },
    {
      name: 'Homeschool Support Programs',
      blurb:
        'Inquiry follow-up and communication automation for homeschool support services.',
    },
    {
      name: 'Continuing Education Providers',
      blurb:
        'Lead capture and follow-up automation for continuing education and professional development programs.',
    },
  ],

  faqs: [
    {
      q: 'What types of education and childcare businesses do you work with?',
      a: 'We work with tutoring centers, childcare providers, music and dance studios, martial arts schools, trade schools, swim schools, and similar programs. If your business depends on enrollment, parent communication, and online reputation, the system applies.',
    },
    {
      q: 'How does inquiry response automation work for a school or studio?',
      a: 'When a parent or prospective student submits an inquiry through your website, an automated response goes out immediately — with relevant information and a prompt to book a tour or trial class. A follow-up sequence continues from there until they enroll or opt out, without your staff having to chase it manually.',
    },
    {
      q: 'Can you automate trial class and tour bookings?',
      a: 'Yes. Booking sequences for trials, tours, and consultations are a core part of the system. The flow is configured around your program type and scheduling workflow so it fits how you actually book.',
    },
    {
      q: 'How does review generation work for a school or childcare center?',
      a: 'After a meaningful milestone — enrollment confirmation, a completed semester, a belt promotion, a recital — an automated message asks the parent or student to leave a Google review. The system asks real families for real reviews. It does not fabricate them.',
    },
    {
      q: 'Do you work with small studios and single-location programs, or only larger schools?',
      a: 'The system works at any size. A single-instructor music studio and a multi-location tutoring center have the same core problem — inquiry response and review generation. We scope the system to what actually applies to your operation.',
    },
  ],

  ctaHeadline: 'Book a 20-minute enrollment leak audit for your program.',

  ctaBody:
    "We'll map where inquiries, trial bookings, or reviews are leaking and show you the order of operations. Walk away with the plan, whether or not we work together.",

  ctaPrimaryLabel: 'Get a Free Audit',
}

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: `/industries/${DATA.slug}` },
  openGraph: {
    title: DATA.metaTitle,
    description: DATA.metaDescription,
    url: `/industries/${DATA.slug}`,
    images: [{ url: '/images/og/industries-education-childcare.webp', alt: DATA.metaTitle }],
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
