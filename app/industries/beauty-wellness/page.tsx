import type { Metadata } from 'next'
import {
  IndustryPageTemplate,
  type IndustryPageData,
} from '@/components/site/IndustryPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const DATA: IndustryPageData = {
  slug: 'beauty-wellness',

  metaTitle: 'Salon & Spa Booking Automation | Sirius Systems',

  metaDescription:
    'Automated booking, rebooking, review requests, and client retention for hair salons, med spas, day spas, and fitness studios. Built to run while you work.',

  eyebrow: 'Beauty & Wellness',

  headline:
    'Stop Leaving Money in the Chair. Automate Your Booking, Rebooking, and Reviews.',

  subheadline:
    'Beauty and wellness runs on repeat clients. The problem isn\'t finding them once — it\'s the system that brings them back, fills the gaps when they don\'t show, and earns the reviews that make new clients choose you over the next salon on Google.',

  heroHighlights: [
    'Automated online booking that works while you\'re behind the chair',
    'Rebooking prompts sent at the right interval after every visit',
    'Review requests triggered automatically after each completed appointment',
    'Lapsed client reactivation so past clients don\'t become lost clients',
  ],

  problemHeadline: 'Why your calendar isn\'t full — and it\'s not a client problem',

  problems: [
    'Your rebooking window closes the moment a client walks out. Checkout is the natural moment to rebook — but when that conversation doesn\'t happen, most clients won\'t book again until they need to. By then, they\'re searching Google and booking whoever comes up first.',
    'No-shows drain your day and there\'s nothing in place to recover the slot. A missed appointment with no fill system is pure lost revenue. Manual reminder calls happen inconsistently — or not at all when you\'re in back-to-back service hours.',
    'Happy clients leave without leaving a review because no one followed up. Asking in person feels transactional. Clients intend to leave one and forget. Meanwhile, competitors with newer reviews are capturing the clients you should be getting.',
    'Booking still requires effort — a DM, a call, or a text. Clients who can\'t book immediately when they think of it often don\'t come back to it. Whoever is easiest to book gets the appointment.',
  ],

  systemsHeadline: 'The systems that keep your chair full',

  systemsCopy:
    'These are the specific tools we connect for beauty and wellness businesses — each one targeting a revenue gap that manual follow-up can\'t close consistently.',

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
    'Every beauty and wellness business has a different rhythm — appointment length, rebooking interval, client relationship style. The system is configured around how your business actually runs.',

  featured: [
    { name: 'Hair Salons & Stylists', blurb: 'Online booking, automated rebooking reminders, and review flows for hair salons and independent stylists.' },
    { name: 'Med Spas & Aesthetics', blurb: 'Consultation booking automation, no-show reduction, and reputation management for med spas and aesthetics businesses.' },
    { name: 'Personal Training & Fitness Studios', blurb: 'Session booking automation, membership retention flows, and review systems for personal trainers and fitness studios.' },
    { name: 'Day Spas & Massage', blurb: 'Online booking, rebooking automation, and review flows for day spas and massage therapists.' },
  ],

  compact: [
    { name: 'Barbershops', blurb: 'Online booking and review automation for barbershops competing on local search and reputation.' },
    { name: 'Nail Salons', blurb: 'Appointment booking automation and review flows for nail salons.' },
    { name: 'Tattoo & Piercing Studios', blurb: 'Consultation booking and review systems for tattoo and piercing studios.' },
    { name: 'Eyebrow & Lash Studios', blurb: 'Online booking, automated reminders, and review automation for eyebrow and lash studios.' },
    { name: 'Tanning Salons', blurb: 'Membership retention flows and review systems for tanning salons.' },
    { name: 'Yoga & Pilates Studios', blurb: 'Class booking automation and client retention flows for yoga and Pilates studios.' },
    { name: 'Nutrition & Wellness Coaching', blurb: 'Discovery call booking and CRM automation for nutrition and wellness coaches.' },
    { name: 'Acupuncture & Holistic Health', blurb: 'Appointment booking automation and review flows for acupuncture and holistic health practitioners.' },
  ],

  faqs: [
    {
      q: 'What types of beauty and wellness businesses do you work with?',
      a: 'We work with hair salons, barbershops, med spas, day spas, nail salons, lash and brow studios, massage therapy clinics, personal training studios, yoga and Pilates studios, and other appointment-based beauty and wellness businesses. If your revenue depends on repeat clients and local reputation, the system is built for your model.',
    },
    {
      q: 'How does the rebooking automation work?',
      a: 'After an appointment is completed, the system sends a follow-up message at the interval you configure — typically 4 to 6 weeks for most hair and beauty services, longer for treatments with different cycles. The message includes a direct link to book the next appointment. This runs automatically without any action from you or your staff.',
    },
    {
      q: 'Our no-show rate is hurting us. What does the system actually do about it?',
      a: 'The system sends automated text reminders at 24 hours and 2 hours before each appointment, with a direct confirmation option built into the message. Most no-shows happen because clients forget — not because they want to cancel. Timed reminders catch that window consistently, without your front desk making calls.',
    },
    {
      q: 'We already have an online booking tool. What does this add?',
      a: 'Booking tools handle the scheduling. This system handles everything that happens before and after — the reminder that prevents the no-show, the follow-up that prompts the rebooking, the review request after checkout, and the reactivation message when a client hasn\'t booked in 60 or 90 days. The booking tool is one piece; this connects the full retention loop.',
    },
    {
      q: 'I\'m a solo stylist, not a big salon. Is this too much for my business?',
      a: 'No. The system scales to your size. A solo provider benefits from automated rebooking reminders and review requests the same way a multi-chair salon does — and often more, because there\'s no front desk staff to do any of it manually. You start with the pieces that address your biggest gap and add from there.',
    },
  ],

  ctaHeadline: 'Find out what\'s costing you clients — before you lose another one.',

  ctaBody:
    'We\'ll look at your current booking flow, review presence, and retention gaps and show you exactly where the system will close them. No pitch. No obligation.',

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
