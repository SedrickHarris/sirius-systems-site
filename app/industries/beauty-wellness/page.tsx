import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'beauty-wellness',

  metaTitle: 'Beauty & Wellness Booking & Reviews | Sirius Systems',

  metaDescription:
    'Booking automation, rebooking reminders, no-show reduction, and review systems for hair salons, med spas, day spas, fitness studios, and beauty businesses.',

  eyebrow: 'Beauty & Wellness',

  headline:
    'The client who walked out without rebooking is already on someone else\'s calendar',

  subheadline:
    'Beauty and wellness businesses run on repeat clients. The gap between a full calendar and a half-empty one is not a marketing problem — it is the system that brings clients back, fills slots when they do not show, and earns the reviews that make new clients choose you over the next name on Google. We build that system.',

  heroHighlights: [
    'Automated online booking that works while you are behind the chair',
    'Rebooking prompts sent at the right interval after every visit',
    'Review requests triggered automatically after each completed appointment',
    'Lapsed client reactivation so past clients do not become lost clients',
  ],

  problemHeadline: 'Why your calendar is not full - and it is not a client problem',

  problems: [
    'The rebooking window closes the moment a client walks out. Checkout is the natural moment to rebook — but when that conversation does not happen, most clients will not book again until they need to. By then, they are searching Google and booking whoever comes up first.',
    'No-shows drain your day and there is nothing in place to recover the slot. A missed appointment with no fill system is pure lost revenue. Manual reminder calls happen inconsistently — or not at all when you are in back-to-back service hours.',
    'Happy clients leave without leaving a review because no one followed up. Asking in person feels transactional. Clients intend to leave one and forget. Meanwhile, competitors with more recent reviews are capturing the clients you should be getting.',
    'Booking still requires effort — a DM, a call, or a text. Clients who cannot book immediately when they think of it often do not come back to it. Whoever is easiest to book gets the appointment.',
  ],

  systemsHeadline: 'The systems that keep your chair full',

  systemsCopy:
    'Every tool below targets a specific revenue gap in the beauty and wellness client lifecycle — from the first booking to the fifth return visit and the review that brings the next new client in.',

  serviceSlugs: [
    'appointment-booking-automation',
    'review-automation',
    'crm-automation',
    'reputation-management',
    'ai-chatbots',
    'all-in-one-business-growth-system',
  ],

  subVerticalsHeadline: 'Built for your specific business type',

  subVerticalsCopy:
    'Every beauty and wellness business has a different rhythm — appointment length, rebooking interval, client relationship style. The system is configured around how your business actually runs, not a generic template.',

  featured: [
    {
      name: 'Hair Salons & Stylists',
      blurb:
        'Online booking, automated rebooking reminders, and review flows for hair salons and independent stylists. Runs while you are behind the chair.',
    },
    {
      name: 'Med Spas & Aesthetics',
      blurb:
        'Consultation booking automation, no-show reduction, and reputation management for med spas and aesthetics businesses with high-value treatment cycles.',
    },
    {
      name: 'Personal Training & Fitness Studios',
      blurb:
        'Session booking automation, membership retention flows, and review systems for personal trainers and fitness studios competing on local search and referrals.',
    },
    {
      name: 'Day Spas & Massage',
      blurb:
        'Online booking, rebooking automation, and review flows for day spas and massage therapists where repeat visit frequency drives revenue.',
    },
  ],

  compact: [
    {
      name: 'Barbershops',
      blurb:
        'Online booking, automated reminders, and review automation for barbershops competing on local search and walk-in reputation.',
    },
    {
      name: 'Nail Salons',
      blurb:
        'Appointment booking automation, rebooking reminders, and review flows for nail salons.',
    },
    {
      name: 'Tattoo & Piercing Studios',
      blurb:
        'Consultation booking, deposit confirmation, and review systems for tattoo and piercing studios.',
    },
    {
      name: 'Eyebrow & Lash Studios',
      blurb:
        'Online booking, automated reminders, and review automation for eyebrow and lash studios with high rebooking frequency.',
    },
    {
      name: 'Tanning Salons',
      blurb:
        'Membership retention flows and review systems for tanning salons building repeat visit habits.',
    },
    {
      name: 'Yoga & Pilates Studios',
      blurb:
        'Class booking automation and client retention flows for yoga and Pilates studios.',
    },
    {
      name: 'Nutrition & Wellness Coaching',
      blurb:
        'Discovery call booking and CRM automation for nutrition and wellness coaches with longer client relationships.',
    },
    {
      name: 'Acupuncture & Holistic Health',
      blurb:
        'Appointment booking automation and review flows for acupuncture and holistic health practitioners.',
    },
    {
      name: 'Waxing Studios',
      blurb:
        'Rebooking automation and review generation for waxing studios with predictable return intervals.',
    },
    {
      name: 'Aesthetic & Cosmetic Clinics',
      blurb:
        'Consultation booking, treatment follow-up sequences, and reputation management for aesthetic and cosmetic clinics.',
    },
    {
      name: 'Permanent Makeup & Microblading',
      blurb:
        'Consultation booking, touch-up reminders, and review requests for permanent makeup and microblading artists.',
    },
    {
      name: 'Stretch Therapy & Recovery Studios',
      blurb:
        'Session booking automation and retention flows for stretch therapy and recovery studios.',
    },
  ],

  faqs: [
    {
      q: 'What types of beauty and wellness businesses do you work with?',
      a: 'We work with hair salons, barbershops, med spas, day spas, nail salons, lash and brow studios, massage therapy clinics, personal training studios, yoga and Pilates studios, and other appointment-based beauty and wellness businesses. If your revenue depends on repeat clients and local reputation, the system is built for your model.',
    },
    {
      q: 'How does the rebooking automation work?',
      a: 'After an appointment is completed, the system sends a follow-up message at the interval configured for your service type — the timing is set during setup to match your specific treatment or appointment cycle. The message includes a direct booking link. This runs automatically without any action from you or your staff.',
    },
    {
      q: 'Our no-show rate is hurting us. What does the system actually do about it?',
      a: 'The system sends automated text reminders before each appointment with a direct confirmation option built into the message. Most no-shows happen because clients forget — not because they want to cancel. Timed reminders catch that window consistently, without your front desk making calls or you stopping between clients.',
    },
    {
      q: 'We already have an online booking tool. What does this add?',
      a: 'Booking tools handle the scheduling. This system handles everything that happens before and after — the reminder that prevents the no-show, the follow-up that prompts the rebooking, the review request after checkout, and the reactivation message when a client has not booked in a set number of days. The booking tool is one piece. This connects the full retention loop around it.',
    },
    {
      q: 'I am a solo stylist, not a big salon. Is this too much for my business?',
      a: 'No. The system scales to your size. A solo provider benefits from automated rebooking reminders and review requests the same way a multi-chair salon does — and often more, because there is no front desk handling any of it manually. You start with the pieces that address your biggest gap and build from there.',
    },
  ],

  ctaHeadline: 'Find out what is costing you clients — before you lose another one.',

  ctaBody:
    'We will look at your current booking flow, review presence, and retention gaps and show you exactly where the system will close them. No pitch. No obligation.',

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
    images: [{ url: '/images/og/industries-beauty-wellness.webp', alt: DATA.metaTitle }],
  },
}

export default function BeautyWellnessIndustryPage() {
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
            { name: 'Beauty & Wellness', url: `/industries/${DATA.slug}` },
          ]),
          faqPage(DATA.faqs),
        ]}
      />
      <IndustryPageTemplate {...DATA} />
    </>
  )
}
