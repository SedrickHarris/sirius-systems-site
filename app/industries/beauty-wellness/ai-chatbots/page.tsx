import type { Metadata } from 'next'
import {
  IntersectionPageTemplate,
  type IntersectionPageData,
} from '@/components/site/IntersectionPageTemplate'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'

const DATA: IntersectionPageData = {
  hubSlug:     'beauty-wellness',
  serviceSlug: 'ai-chatbots',
  hubName:     'Beauty & Wellness',
  serviceName: 'AI Chatbots',

  metaTitle:       'AI Chatbots for Beauty & Wellness Businesses',
  metaDescription: 'An AI chatbot handles FAQs, qualifies new clients, and books appointments for your salon or spa — in your voice, 24/7, while you are behind the chair.',

  eyebrow: 'Beauty & Wellness · AI Chatbots',

  headline:
    'The AI chatbot that handles your front desk while you are behind the chair',

  subheadline:
    'Every chair is full, the phone rings twice, an Instagram DM lands asking about pricing — and none of it gets answered until you come up for air four hours later. Those leads are already gone. An AI chatbot trained on your business handles them instantly, in your voice, any time of day or night.',

  heroHighlights: [
    'Instant answers to service, pricing, availability, and policy questions — 24/7',
    'Appointment booking handled directly inside the conversation',
    'New client lead capture with contact details collected at first touch',
    'Trained on your specific services, policies, and brand voice — not a generic script',
  ],

  definitionHeadline:
    'What an AI chatbot actually does for a beauty or wellness business',

  definition:
    'An AI chatbot for a beauty or wellness business is a trained assistant that sits on your website and messaging channels, answers client questions instantly at any hour, guides visitors through your service menu, and books appointments directly — without requiring any attention from you or your staff. Unlike a generic widget, it is built on your specific services, pricing, policies, and voice so that every interaction reflects your business accurately.',

  problemHeadline:
    'Where beauty and wellness businesses lose leads they never knew they had',

  problems: [
    'New client inquiries arrive while you are four hours into a colour service and your phone is face-down on the station. By the time you see the message, they have already booked with whoever replied first. Most missed inquiries never send a second message — they just disappear.',
    'The same questions arrive on every platform, every day. Pricing. Availability. Cancellation policy. What to expect for a first visit. Answering them manually consumes time you should be spending on clients or recovery. They never stop coming and they never get easier to answer.',
    'After-hours visitors leave your website without booking because there is no one to answer questions or confirm a slot. A client who finds you at 10 PM and cannot get an immediate answer will search for someone else by morning — and your competitor\'s chatbot will respond in seconds.',
    'New inquiries from Instagram DMs, Facebook messages, and website contact forms do not become booked clients because the conversation stalls at the first unanswered message. Capturing contact details and qualifying interest in that first exchange is the difference between a lead and a lost visitor.',
  ],

  howItWorksHeadline: 'How the AI chatbot runs for your beauty or wellness business',

  steps: [
    {
      label: 'The chatbot learns your business — services, pricing, policies, voice',
      body:  'During setup, the chatbot is trained on your service menu, pricing, hours, cancellation policy, location details, and any FAQ content specific to your business. It responds as an extension of your brand — not as a generic assistant with generic answers.',
    },
    {
      label: 'It handles incoming questions and qualifies new clients instantly',
      body:  'When a visitor asks about availability, pricing, or services — at any hour — the chatbot responds immediately with accurate information. It guides interested clients through the right questions, captures contact details, and either completes the booking directly or creates a warm, context-rich handoff to you.',
    },
    {
      label: 'You see every conversation and step in whenever you want',
      body:  'All conversations are logged and visible to you at all times. When a situation calls for a human — a complex request, a returning client issue, or a specific preference — the chatbot flags it and you take over with the full conversation already in view. Nothing falls through a gap without you knowing.',
    },
  ],

  featuresHeadline: 'What the AI chatbot covers for beauty and wellness businesses',

  features: [
    '24/7 instant answers to service, pricing, availability, and policy questions',
    'Appointment booking completed directly inside the conversation',
    'New client lead capture with contact details collected at first touch',
    'Custom training on your specific service menu, pricing, and brand voice',
    'Multichannel deployment — website, Facebook Messenger, Instagram DMs, and SMS',
    'Human handoff with full conversation context when escalation is needed',
    'Complete conversation history and lead log visible to you at all times',
  ],

  relatedServiceSlugs: [
    'ai-chatbots',
    'appointment-booking-automation',
    'crm-automation',
    'all-in-one-business-growth-system',
  ],

  faqs: [
    {
      q: 'What kinds of questions can an AI chatbot answer for a salon or spa?',
      a: 'A chatbot trained on your business answers questions about your service menu, pricing, appointment availability, location and parking, cancellation and rescheduling policy, and what to expect for a first visit. It handles the questions that arrive on repeat across every channel every day — without requiring manual responses from you or your staff at any hour.',
    },
    {
      q: 'Can the chatbot actually book appointments or does it just collect inquiries?',
      a: 'It can do both, depending on how it is configured. When connected to your booking system, the chatbot confirms availability and completes the booking directly inside the conversation. For businesses not yet using direct booking integration, it collects contact details and service interest and creates a warm handoff — so no inquiry arrives cold and no context is lost.',
    },
    {
      q: "Will the chatbot sound like a robot or can it match my salon's voice?",
      a: "The chatbot is trained on your specific information and configured to reflect your brand's tone. A casual, friendly studio gets a casual, friendly chatbot. A premium med spa gets a polished, professional one. The goal is that a client interacting with the chatbot cannot tell whether they are talking to an automated assistant or a well-briefed team member — because the information and tone are accurate to your business.",
    },
    {
      q: 'What happens when a question is too complex for the chatbot to handle?',
      a: 'The chatbot is configured with escalation rules. When a conversation reaches a question outside its training, or a client asks to speak with a person, it flags the conversation for you with the full chat history attached — so you take over with complete context and the client does not have to repeat themselves. No conversation falls through without you seeing it.',
    },
    {
      q: 'Which channels can the chatbot be deployed on for a beauty or wellness business?',
      a: 'The chatbot can be deployed on your website, Facebook Messenger, Instagram DMs, and SMS — the primary channels where beauty and wellness clients initiate contact. You can start with one channel and expand from there. All conversations from all channels flow into a single view so nothing gets missed across platforms.',
    },
  ],

  ctaHeadline:     'See what your salon or spa loses every week when no one is available to respond',
  ctaBody:         'We look at your current inquiry flow, after-hours traffic, and FAQ patterns and show you exactly where an AI chatbot recovers the bookings and leads you are currently missing. No obligation.',
  ctaPrimaryLabel: 'Get a Free Audit',
}

export const metadata: Metadata = {
  title:       DATA.metaTitle,
  description: DATA.metaDescription,
  alternates: { canonical: '/industries/beauty-wellness/ai-chatbots' },
  openGraph: {
    title:       DATA.metaTitle,
    description: DATA.metaDescription,
    url:         '/industries/beauty-wellness/ai-chatbots',
    images: [{ url: '/og/default.webp', alt: DATA.metaTitle }],
  },
}

export default function BeautyWellnessAiChatbotsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url:         '/industries/beauty-wellness/ai-chatbots',
            name:        DATA.metaTitle,
            description: DATA.metaDescription,
          }),
          breadcrumbList([
            { name: 'Home',              url: '/' },
            { name: 'Industries',        url: '/industries' },
            { name: 'Beauty & Wellness', url: '/industries/beauty-wellness' },
            { name: 'AI Chatbots',       url: '/industries/beauty-wellness/ai-chatbots' },
          ]),
          serviceSchema({
            slug:        'industries/beauty-wellness/ai-chatbots',
            name:        'AI Chatbots',
            description: DATA.metaDescription,
          }),
          faqPage(DATA.faqs),
        ]}
      />
      <IntersectionPageTemplate {...DATA} />
    </>
  )
}
