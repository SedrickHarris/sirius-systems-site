import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'healthcare-medical',
  serviceSlug: 'appointment-booking-automation',
  hubName:     'Healthcare & Medical',
  serviceName: 'Appointment Booking Automation',

  metaTitle:       'Patient Booking Automation for Medical Practices',
  metaDescription: 'Medical practices lose patients to whoever answers first. Automate scheduling so patients book 24/7, confirmations send automatically, and no-shows drop.',

  eyebrow:     'Healthcare · Appointment Booking Automation',
  headline:    'Medical practices lose patients to whoever answers first — automate that gap',
  subheadline: 'A patient calls after hours and gets voicemail. They hang up and book the practice down the street. Booking automation closes that window — every hour of every day, at any call volume.',

  heroHighlights: [
    'Patients self-schedule from your website or chatbot — 24 hours a day',
    'Automated confirmations and reminders sent by text and email on every booking',
    'After-hours inquiries captured and routed into the booking flow immediately',
    'Calendar and CRM stay in sync from first contact to completed visit',
  ],

  definitionHeadline: 'What appointment booking automation means for a medical practice',
  definition: 'Appointment booking automation for a medical practice means connecting your patient inquiry, calendar, and confirmation system so that a new or returning patient can select an available slot, receive a confirmation, and enter your scheduling pipeline without a front desk team member coordinating the exchange. The system works after hours, on weekends, and at any volume — so your staff focuses on patients in the office, not on the phone.',

  problemHeadline: 'Where medical practices lose patients before the first visit happens',
  problems: [
    'A patient calls after clinic hours and reaches voicemail. They hang up without leaving a message and book the next practice that has an online scheduling option. You never know the inquiry existed.',
    'Your front desk spends a significant portion of each day on outbound reminder calls and confirmation follow-ups — time that comes directly out of patient care capacity and leaves some reminders unsent when the day gets busy.',
    'No-shows happen because reminders are inconsistent. A patient who forgets an appointment costs you a billable time slot and disrupts your provider\'s schedule — and it happens more often than it should when reminders depend on someone remembering to send them.',
    'New patient inquiries that arrive through your website form or social profile sit unacknowledged for hours. By the time someone replies, the patient has already scheduled somewhere else and the slot is gone.',
  ],

  howItWorksHeadline: 'How the booking system works for your practice',
  steps: [
    {
      label: 'Inquiry captured',
      body: 'A patient contacts your practice through your website, chatbot, or missed-call text-back. The system captures the inquiry immediately and routes it into the booking flow — after hours, on weekends, or during a full day of patient visits.',
    },
    {
      label: 'Slot selected and confirmed',
      body: 'The patient selects an available appointment time from your live calendar. A confirmation is sent automatically by text and email. No phone tag. No back-and-forth. No front desk intervention required.',
    },
    {
      label: 'Reminders sent automatically',
      body: 'At configured intervals before the appointment, reminders go out by text and email. Patients can confirm, cancel, or reschedule directly from the message. Cancellations return the slot to your calendar without staff involvement.',
    },
  ],

  featuresHeadline: 'What the booking system includes for healthcare practices',
  features: [
    'Patient self-scheduling from your website or patient-facing chatbot',
    '24/7 availability — new and returning patients can book outside clinic hours',
    'Automated confirmation messages by text and email on every booking',
    'Multi-step reminder sequences at intervals configured for your practice type',
    'Cancellation and reschedule handling that returns slots to your live calendar automatically',
    'After-hours inquiry capture with immediate booking flow routing',
    'Calendar sync so patients only see slots that are genuinely available',
    'CRM pipeline update triggered by confirmed appointment — no manual data entry',
  ],

  relatedServiceSlugs: ['ai-chatbots', 'ai-voicebots', 'crm-automation', 'reputation-management'],

  faqs: [
    {
      q: 'Can patients book appointments on our website after the office closes?',
      a: 'Yes. Patient self-scheduling means a new or returning patient can select an available slot and receive a confirmation at any hour — including evenings, weekends, and holidays — without a staff member present. The calendar only shows slots that are actually open, and every confirmed booking triggers an automatic confirmation to the patient.',
    },
    {
      q: 'How does this system reduce no-shows?',
      a: 'The system sends automated reminder messages — by text and email — at set intervals before each appointment. Patients can confirm, cancel, or reschedule directly from the reminder without calling the office. Because reminders fire on every booking rather than when someone remembers to send them, the no-show rate drops consistently over time.',
    },
    {
      q: 'Does this replace our existing scheduling software?',
      a: 'Not necessarily. The booking automation layer connects to your existing calendar and, where possible, your existing scheduling tool. The goal is to add the self-scheduling and automation capabilities your current setup is missing — not to rip out what already works. We confirm compatibility during setup before building anything.',
    },
    {
      q: 'What happens when a patient cancels through the reminder?',
      a: 'When a patient cancels or reschedules from the automated reminder, the slot is returned to your live calendar automatically. No staff intervention is needed. The system can optionally notify your front desk of the cancellation so the slot can be offered to a waitlisted patient or filled proactively.',
    },
    {
      q: 'Is this system HIPAA-compliant?',
      a: 'The booking and communication system is configured to operate within HIPAA-aware communication boundaries. Confirmation and reminder messages are structured to avoid transmitting protected health information in text or email form. We discuss your specific compliance requirements during discovery before any configuration is finalized.',
    },
  ],

  ctaHeadline:     'See what your current booking flow is costing you',
  ctaBody:         'We will map your current patient inquiry and scheduling process, identify where patients are dropping off, and show you exactly what a connected booking system looks like for your practice. No obligation.',
  ctaPrimaryLabel: 'Get a Free Booking Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/healthcare-medical/appointment-booking-automation' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/healthcare-medical/appointment-booking-automation',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function HealthcareMedicalAppointmentBookingAutomationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/healthcare-medical/appointment-booking-automation',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',                           url: '/' },
            { name: 'Industries',                     url: '/industries' },
            { name: 'Healthcare & Medical',           url: '/industries/healthcare-medical' },
            { name: 'Appointment Booking Automation', url: '/industries/healthcare-medical/appointment-booking-automation' },
          ]),
          serviceSchema({
            slug:        'industries/healthcare-medical/appointment-booking-automation',
            name:        'Appointment Booking Automation for Medical Practices',
            description: 'Patient self-scheduling, automated confirmations, reminder sequences, and calendar sync for medical practices — HIPAA-aware and connected to your existing systems.',
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
