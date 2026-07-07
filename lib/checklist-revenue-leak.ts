// lib/checklist-revenue-leak.ts
// Data for the Local Business Revenue Leak Checklist lead magnet (Phase 3).
// One source of truth for the self-audit sections, the "what this reviews"
// cards, and the scorecard. Copy is client-provided; rules: plain language,
// Sirius Systems positioning, no em dashes, no fake numbers or claims.
//
// IMPLEMENTATION NOTES ONLY (not rendered, not wired here):
//   Form name:        Local Business Revenue Leak Checklist
//   CRM tag:          Lead Magnet - Revenue Leak Checklist
//   Pipeline stage:   New Lead Magnet Download
//   Source:           Website - Checklist
//   Workflow trigger: Form Submitted - Revenue Leak Checklist
//   Suggested follow-up: send checklist -> wait 10m -> ask which section
//     leaked most -> wait 1d -> missed-call/follow-up/reviews note -> wait 3d
//     -> invite to Revenue Leak Audit.
//   No form backend, download, or CRM integration is built in this phase.
//   The page is a self-audit that routes warm visitors to /revenue-leak-audit.

import { SERVICES } from '@/lib/services'

export const CHECKLIST = {
  slug: 'resources/checklists/local-business-revenue-leak-checklist',
  eyebrow: 'Self-audit checklist',
  h1: 'Local Business Revenue Leak Checklist',
  subtitle:
    'Find the hidden gaps that may be costing your business calls, bookings, reviews, and follow-up opportunities.',
  title: 'Local Business Revenue Leak Checklist | Sirius Systems',
  description:
    'Use the Local Business Revenue Leak Checklist to find gaps in lead capture, missed calls, follow-up, booking, CRM tracking, reviews, Google Business Profile, local SEO, and AEO.',
} as const

export type ServiceLink = { label: string; href: string }

// Resolve a service slug to its catalog name + apex-relative path. Throws at
// build time on a bad slug, so a dead internal link can never ship.
function svc(slug: string): ServiceLink {
  const match = SERVICES.find((s) => s.slug === slug)
  if (!match) throw new Error(`checklist-revenue-leak: unknown service slug "${slug}"`)
  return { label: match.name, href: `/${slug}` }
}

export type ChecklistSection = {
  id: string
  n: number
  title: string
  intro: string
  kind: 'fields' | 'questions'
  items: string[]
  leakSignal: string
  services: ServiceLink[]
}

export const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    id: 'business-snapshot',
    n: 1,
    title: 'Business Snapshot',
    intro:
      'Start with the basics so you can understand where leads come from, how they are handled, and which systems are supposed to support them.',
    kind: 'fields',
    items: [
      'Business name',
      'Industry',
      'Primary service area',
      'Main services offered',
      'Current website URL',
      'Google Business Profile URL',
      'Main phone number',
      'Current CRM or booking tool',
      'Biggest current problem: leads, calls, bookings, reviews, follow-up, visibility, or automation',
    ],
    leakSignal:
      'If the business cannot clearly name where leads come from and how they are handled, the follow-up system is probably relying too much on memory.',
    services: [],
  },
  {
    id: 'lead-capture',
    n: 2,
    title: 'Lead Capture',
    intro:
      'Check whether website visitors, calls, chats, and form leads are being captured properly.',
    kind: 'questions',
    items: [
      'Does your website have a clear call button on mobile?',
      'Does every major service page have a contact or booking CTA?',
      'Can visitors contact you without searching through the site?',
      'Do you have forms on key service pages?',
      'Do you know where each form submission goes?',
      'Do you receive instant internal notifications when a form is submitted?',
      'Are leads tagged by source, service, or intent?',
    ],
    leakSignal:
      'If leads are coming in but not being tracked, tagged, or followed up with, the business may be losing opportunities before the first conversation.',
    services: [svc('smart-websites')],
  },
  {
    id: 'missed-calls',
    n: 3,
    title: 'Missed Calls',
    intro:
      'Check what happens when the business misses a call, especially during busy hours, after hours, or while the team is in the field.',
    kind: 'questions',
    items: [
      'Do you know how many calls you miss each week?',
      'Does a missed caller receive an automatic text-back?',
      'Does the text ask what service they need?',
      'Does the missed-call workflow notify the team?',
      'Does the lead get added to the CRM?',
      'Is there a follow-up step if the caller does not reply?',
      'Are after-hours calls handled differently from business-hours calls?',
    ],
    leakSignal:
      'If missed callers do not receive a fast response, they may call the next business before your team has a chance to follow up.',
    services: [svc('ai-automation')],
  },
  {
    id: 'website-conversion',
    n: 4,
    title: 'Website Conversion',
    intro:
      'Traffic alone does not create revenue. The website needs to guide visitors toward calling, booking, or requesting help.',
    kind: 'questions',
    items: [
      'Is your homepage clear about who you help and what problem you solve?',
      'Are your service pages specific enough to match what customers search for?',
      'Does each page have one clear next step?',
      'Are CTAs visible above the fold?',
      'Are trust signals visible, such as reviews, service areas, process, FAQs, or proof?',
      'Does the website load quickly on mobile?',
      'Does the website connect to forms, CRM, booking, chat, or follow-up automation?',
    ],
    leakSignal:
      'A website can get traffic and still leak revenue if visitors do not understand what to do next.',
    services: [svc('smart-websites')],
  },
  {
    id: 'form-follow-up',
    n: 5,
    title: 'Form Follow-Up',
    intro:
      'Check whether form submissions are followed up with quickly and clearly.',
    kind: 'questions',
    items: [
      'When someone submits a form, who gets notified?',
      'How fast does the first response go out?',
      'Does the customer receive a confirmation message?',
      'Does the form submission create or update a contact?',
      'Does the workflow include SMS or email follow-up?',
      'Does the business follow up again if the person does not respond?',
      'Does the team know which service the person asked about?',
    ],
    leakSignal:
      'If a form submission creates an email but not a follow-up workflow, the business may be depending on manual follow-through at the worst possible time.',
    services: [svc('crm-automation')],
  },
  {
    id: 'appointment-booking',
    n: 6,
    title: 'Appointment Booking',
    intro:
      'Check whether prospects can request or book service without extra friction.',
    kind: 'questions',
    items: [
      'Can prospects request or book appointments from the website?',
      'Is the booking process mobile-friendly?',
      'Does the system prevent double-booking?',
      'Does the customer receive confirmation?',
      'Does the team receive the booking details?',
      'Does the booking trigger reminders?',
      'Does the booking connect to the CRM?',
    ],
    leakSignal:
      'If booking requires too many steps, interested prospects may stop before the appointment is scheduled.',
    services: [svc('appointment-booking-automation')],
  },
  {
    id: 'crm-tracking',
    n: 7,
    title: 'CRM Tracking',
    intro:
      'Check whether leads are stored, tagged, and tracked in one place.',
    kind: 'questions',
    items: [
      'Are all leads stored in one CRM?',
      'Are contacts created or updated automatically?',
      'Are leads tagged by service type?',
      'Are leads tagged by source, such as website, GBP, paid ad, or referral?',
      'Can the business see which leads are new, contacted, booked, won, or lost?',
      'Are old leads followed up with?',
      'Can the owner see basic pipeline activity?',
    ],
    leakSignal:
      'If leads live across texts, emails, notebooks, and call logs, the business does not have a true follow-up system.',
    services: [svc('crm-automation')],
  },
  {
    id: 'review-requests',
    n: 8,
    title: 'Review Requests',
    intro:
      'Check whether happy customers are being asked for reviews at the right time.',
    kind: 'questions',
    items: [
      'Do happy customers receive review requests?',
      'Are review requests sent by SMS or email?',
      'Are requests sent at the right time after service?',
      'Does the team know when a customer leaves a review?',
      'Are negative experiences routed to the business before becoming public reviews?',
      'Are reviews used on the website?',
      'Are reviews helping the Google Business Profile look active and trusted?',
    ],
    leakSignal:
      'If the business depends on customers to remember reviews on their own, many positive experiences never become visible proof.',
    services: [svc('review-automation'), svc('reputation-management')],
  },
  {
    id: 'google-business-profile',
    n: 9,
    title: 'Google Business Profile',
    intro:
      'Check whether the Google Business Profile supports calls, trust, services, and local discovery.',
    kind: 'questions',
    items: [
      'Is the business name, address, phone, and website accurate?',
      'Are services listed clearly?',
      'Are business hours correct?',
      'Are photos current?',
      'Are posts or updates being used?',
      'Are reviews being requested consistently?',
      'Does the profile link to the right website page?',
      'Does the business track calls, clicks, and direction requests?',
    ],
    leakSignal:
      'If the Google Business Profile is incomplete or stale, the business may lose trust before the visitor ever reaches the website.',
    services: [svc('local-seo-aeo')],
  },
  {
    id: 'local-seo-aeo',
    n: 10,
    title: 'Local SEO and AEO',
    intro:
      'Check whether the business has pages and answers that help Google and AI tools understand who it serves, what it offers, and where it operates.',
    kind: 'questions',
    items: [
      'Does the website have dedicated service pages?',
      'Does the website have industry or audience pages?',
      'Does the website answer common customer questions?',
      'Are FAQs written in plain language?',
      'Does each page have a clear title, description, and canonical URL?',
      'Are pages included in the sitemap?',
      'Are pages structured for Google, AI tools, and answer engines?',
      'Are related pages internally linked?',
    ],
    leakSignal:
      'If Google and AI tools cannot clearly understand what the business does, who it helps, and where it serves, the business may miss high-intent discovery opportunities.',
    services: [svc('local-seo-aeo')],
  },
]

export const SCORE_RANGES: {
  range: string
  label: string
  next: string
}[] = [
  { range: '0 to 15', label: 'High revenue leak risk', next: 'Book a Revenue Leak Audit' },
  { range: '16 to 25', label: 'Follow-up gaps', next: 'Review automation and CRM setup' },
  { range: '26 to 35', label: 'Conversion gaps', next: 'Improve website, CTAs, and booking flow' },
  { range: '36 to 44', label: 'Growth-ready', next: 'Strengthen reviews, SEO, and AEO' },
  { range: '45 to 50', label: 'Optimization stage', next: 'Scale with reporting, campaigns, and advanced automation' },
]

export const SCORE_HELPER =
  'You do not need a perfect score to have a good business. The goal is to find the few places where better systems could help you recover more calls, bookings, reviews, and follow-up opportunities.'
