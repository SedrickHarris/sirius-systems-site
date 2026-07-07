// lib/faq-ai-automation.ts
// Data for the AI Automation FAQ cluster (Phase 2).
// One source of truth for: the hub page cards, the [slug] detail pages,
// the FAQPage / BreadcrumbList JSON-LD, and the sitemap entries.
//
// Copy rules (see the Phase 2 brief): plain language, Sirius Systems
// positioning, no em dashes, no AI hype words. Each `answer` is the visible
// direct answer AND the FAQPage schema answer, so the two never drift.

import { SERVICES } from '@/lib/services'

export const AI_FAQ_HUB = {
  slug: 'resources/faq/ai-automation',
  eyebrow: 'AI Automation FAQ',
  title: 'AI Automation FAQ for Local Service Businesses | Sirius Systems',
  description:
    'Find plain-language answers about AI automation, missed-call text-back, CRM follow-up, appointment booking, chatbots, voicebots, reviews, and local business lead capture.',
} as const

export type ServiceLink = { label: string; href: string }

// Resolve a service slug to its catalog name + apex-relative path. Throws at
// build time if a slug is wrong, so a bad internal link can never ship.
function svc(slug: string): ServiceLink {
  const match = SERVICES.find((s) => s.slug === slug)
  if (!match) throw new Error(`faq-ai-automation: unknown service slug "${slug}"`)
  return { label: match.name, href: `/${slug}` }
}

export type AiFaq = {
  slug: string
  question: string
  title: string
  description: string
  answer: string
  whyItMatters: string
  whenToUse: string
  primary: ServiceLink
  secondary: ServiceLink
  related: string[] // sibling slugs, 3-4
}

export const AI_AUTOMATION_FAQS: AiFaq[] = [
  {
    slug: 'what-is-ai-automation-for-a-local-business',
    question: 'What is AI automation for a local business?',
    title: 'What is AI automation for a local business? | Sirius Systems',
    description:
      'AI automation for a local business handles the repeatable steps between a lead and a booked job, so follow-up, booking, and reviews happen every time on their own.',
    answer:
      'AI automation for a local business means using software to handle the repeatable steps between getting a lead and finishing a job, so they happen every time without someone remembering to do them. When a form comes in, a call is missed, or a job completes, the system sends the follow-up text, books the appointment, updates the CRM, or requests the review on its own. For a local service business, that usually covers missed-call text-back, new lead follow-up, appointment reminders, and review requests. You set the rules once, and the system runs them at 8pm, on weekends, and while you are on a job. It does not change how you do the work. It removes the manual gaps where leads and revenue usually slip away.',
    whyItMatters:
      'Local service businesses rarely lose jobs on price. They lose them on speed and consistency. A lead who waits an hour for a reply often books someone else. Automation closes that gap so every inquiry gets handled the same way, every time, without adding hours to your day.',
    whenToUse:
      'Consider it once you are getting more leads than you can answer quickly, missing calls while on jobs, or forgetting to follow up and request reviews. If any of those sound familiar, automation is the first fix to make.',
    primary: svc('ai-automation'),
    secondary: svc('all-in-one-business-growth-system'),
    related: [
      'what-should-a-service-business-automate-first',
      'what-is-missed-call-text-back',
      'how-does-ai-automation-reduce-missed-leads',
      'is-ai-automation-better-than-hiring-admin',
    ],
  },
  {
    slug: 'what-should-a-service-business-automate-first',
    question: 'What should a service business automate first?',
    title: 'What should a service business automate first? | Sirius Systems',
    description:
      'Start with missed-call text-back and new lead follow-up. These two gaps cost local service businesses the most jobs and take the least effort to fix.',
    answer:
      'Start with the two moments where local businesses lose the most jobs: missed calls and new lead follow-up. Missed-call text-back sends an automatic text the second a call goes unanswered, so the caller knows you saw them before they dial the next business. New lead follow-up replies to every form or inquiry within seconds instead of hours. Once those are running, add appointment reminders to cut no-shows and review requests after each completed job. These four cover the gaps that cost the most and take the least effort to fix. You do not need to automate everything at once. Fix the highest-impact leaks first, confirm they work, then expand into full CRM and booking automation from there.',
    whyItMatters:
      'Trying to automate everything at once usually stalls. The businesses that see results fast start where the money is leaking most, prove it works, then build out. Missed calls and slow replies are almost always the biggest and cheapest leaks to close.',
    whenToUse:
      'Automate first when you notice calls going to voicemail during jobs, leads going quiet after one reply, or reviews only happening when you remember to ask. Those are the signals to start.',
    primary: svc('ai-automation'),
    secondary: svc('crm-automation'),
    related: [
      'what-is-missed-call-text-back',
      'how-does-ai-follow-up-work',
      'how-does-ai-automation-reduce-missed-leads',
      'what-is-ai-automation-for-a-local-business',
    ],
  },
  {
    slug: 'what-is-missed-call-text-back',
    question: 'What is missed-call text-back?',
    title: 'What is missed-call text-back? | Sirius Systems',
    description:
      'Missed-call text-back sends an automatic text within seconds when a call goes unanswered, so the caller hears from you before they try the next business.',
    answer:
      'Missed-call text-back is an automatic text message that sends within seconds when an inbound call goes unanswered. It tells the caller you saw their call and asks how you can help, so they get a response before they move on to the next business on their list. For a business taking calls in the field, this is often the single highest-impact automation. Most people who call a local business and reach voicemail do not leave a message. They call the next name in the search results. A text that arrives immediately keeps that conversation alive and gives you a chance to book the job. You set the message once, and it fires on every missed call, day or night, without anyone lifting a phone.',
    whyItMatters:
      'A missed call is usually a lost job, and most owners never realize how many they miss while working. An instant text turns a dead call into an active lead and signals that your business is responsive, which is exactly what a prospect judges in the first minute.',
    whenToUse:
      'Use it if you take calls while on jobs, run a small team, or work outside normal office hours. Any business that cannot always answer the phone benefits from it right away.',
    primary: svc('ai-automation'),
    secondary: svc('ai-voicebots'),
    related: [
      'can-an-ai-voicebot-answer-after-hours-calls',
      'how-does-ai-automation-reduce-missed-leads',
      'how-does-ai-follow-up-work',
      'what-should-a-service-business-automate-first',
    ],
  },
  {
    slug: 'how-does-ai-follow-up-work',
    question: 'How does AI follow-up work?',
    title: 'How does AI follow-up work? | Sirius Systems',
    description:
      'AI follow-up watches for a trigger, then sends the right message at the right time in your business voice, and keeps going on schedule if the lead stays quiet.',
    answer:
      'AI follow-up works by watching for a trigger, then sending the right message at the right time without anyone starting it manually. When a lead submits a form, misses a call, or sits in your pipeline too long, the system sends a text or email that fits that moment. Unlike a basic autoresponder, it can read what the person wrote, respond in your business voice, and adjust based on whether they reply. If they go quiet, it follows up again on a set schedule instead of giving up after one message. Everything is written and reviewed before it goes live, so the messages sound like your business, not a robot. The result is that every lead gets consistent follow-up, even the ones you would have forgotten on a busy day.',
    whyItMatters:
      'Most leads need more than one touch before they book, but manual follow-up usually stops after the first try. Automated sequences keep going on schedule, which is where most of the recovered revenue comes from. Consistency, not volume, is what closes more jobs.',
    whenToUse:
      'Use AI follow-up when leads come in faster than you can reply, when quotes go unanswered, or when your pipeline has leads sitting untouched. It is the layer that keeps every one of them warm.',
    primary: svc('crm-automation'),
    secondary: svc('appointment-booking-automation'),
    related: [
      'how-does-ai-automation-connect-to-crm',
      'can-ai-automation-book-appointments',
      'what-is-missed-call-text-back',
      'what-should-a-service-business-automate-first',
    ],
  },
  {
    slug: 'can-ai-automation-book-appointments',
    question: 'Can AI automation book appointments?',
    title: 'Can AI automation book appointments? | Sirius Systems',
    description:
      'Yes. AI automation can offer times, book the slot on your calendar, confirm, and send reminders across chat, forms, and voice, without double-booking you.',
    answer:
      'Yes. AI automation can take a lead from first contact to a confirmed appointment without you touching it. When someone submits a form, chats on your site, or calls, the system can offer available times, book the slot on your calendar, send a confirmation, and follow up with reminders to cut no-shows. It syncs with your real availability so it never double-books, and it can qualify the lead first so only the right appointments land on your schedule. This works across chat, web forms, and voice, which means a prospect can book at midnight or while you are on another job. You stay in control of the rules: which services are bookable, how much lead time you need, and when you are available.',
    whyItMatters:
      'Every hour between an inquiry and a booked appointment is a chance for the lead to cool off or book a competitor. Letting people book instantly, on their own schedule, removes that delay and fills your calendar without the back-and-forth of phone tag.',
    whenToUse:
      'Use booking automation when scheduling eats up your day, when phone tag is losing you appointments, or when you want to capture bookings after hours. It is especially useful for businesses with steady appointment demand.',
    primary: svc('appointment-booking-automation'),
    secondary: svc('ai-chatbots'),
    related: [
      'how-does-ai-follow-up-work',
      'can-a-chatbot-qualify-service-business-leads',
      'can-an-ai-voicebot-answer-after-hours-calls',
      'how-does-ai-automation-connect-to-crm',
    ],
  },
  {
    slug: 'how-does-ai-automation-reduce-missed-leads',
    question: 'How does AI automation reduce missed leads?',
    title: 'How does AI automation reduce missed leads? | Sirius Systems',
    description:
      'AI automation makes sure every call, form, and chat gets an immediate, consistent response, then follows up on the ones that go quiet, so fewer leads slip away.',
    answer:
      'AI automation reduces missed leads by making sure every inquiry gets an immediate, consistent response, no matter when it arrives or how busy you are. It covers the points where leads usually disappear: a missed call gets an instant text, a new form submission gets a reply in seconds, a website visitor gets a chatbot that answers and books, and a lead that goes quiet gets a scheduled follow-up instead of being forgotten. Because the system runs on triggers, nothing depends on someone being free to act. A lead that comes in at 9pm is handled the same as one at 9am. Over a month, closing these gaps recovers the jobs that were quietly slipping through, usually more than owners expect once they can finally see them.',
    whyItMatters:
      'Most owners underestimate how many leads they miss, because missed calls and late replies leave no record. Automation both closes those gaps and makes them visible, so you can see the jobs you were losing and confirm they are now being caught.',
    whenToUse:
      'Use it when you suspect leads are slipping through but cannot prove where, when calls go unanswered during jobs, or when follow-up depends on memory. It turns an invisible leak into a system you can trust.',
    primary: svc('ai-automation'),
    secondary: svc('smart-websites'),
    related: [
      'what-is-missed-call-text-back',
      'how-does-ai-follow-up-work',
      'can-a-chatbot-qualify-service-business-leads',
      'what-is-ai-automation-for-a-local-business',
    ],
  },
  {
    slug: 'is-ai-automation-better-than-hiring-admin',
    question: 'Is AI automation better than hiring another admin?',
    title: 'Is AI automation better than hiring another admin? | Sirius Systems',
    description:
      'For repeatable, rule-based work, automation is usually faster, cheaper, and more consistent than another admin. The strongest setup pairs the two.',
    answer:
      'For the repeatable tasks that follow a clear rule, automation is usually faster, more consistent, and less expensive than hiring another admin. It runs at 2am, on weekends, and during jobs without variation. It does not get sick, take vacation, forget, or quit. Sending follow-ups, booking appointments, reminding clients, and requesting reviews are all tasks a system can handle every time without supervision. Hiring still makes sense for judgment work: complex conversations, relationship building, and decisions that need a person. The strongest setup is not one or the other. Automation handles the high-volume, rule-based work so your team spends their time on the jobs and conversations that actually need a human. In many local businesses, one person supported by automation outperforms two people doing everything by hand.',
    whyItMatters:
      'Adding staff adds cost and management, and people can only cover the hours they work. Automation covers every hour and never drops a task, which is why it often delivers a better return on the repeatable work that quietly fills an admin day.',
    whenToUse:
      'Consider automation before your next admin hire if the role would mostly be follow-up, scheduling, reminders, and data entry. Those are the tasks a system handles best.',
    primary: svc('ai-automation'),
    secondary: svc('all-in-one-business-growth-system'),
    related: [
      'what-is-ai-automation-for-a-local-business',
      'how-does-ai-automation-reduce-missed-leads',
      'how-does-ai-automation-connect-to-crm',
      'how-does-ai-follow-up-work',
    ],
  },
  {
    slug: 'how-does-ai-automation-connect-to-crm',
    question: 'How does AI automation connect to a CRM?',
    title: 'How does AI automation connect to a CRM? | Sirius Systems',
    description:
      'AI automation uses your CRM as the record everything runs on, creating contacts, moving pipeline stages, and triggering follow-up so the pipeline stays accurate on its own.',
    answer:
      'AI automation connects to your CRM by using it as the record that everything runs on. When a new lead comes in, the system creates or updates the contact, moves it into the right pipeline stage, and triggers the matching follow-up. As the lead replies, books, or goes quiet, the CRM updates on its own, so the pipeline always reflects reality without anyone dragging cards around. It works with the CRM you already use in most cases, connecting through direct integrations rather than replacing your tools. The CRM becomes the single place where lead source, conversation history, appointments, and review status all live together. That means you can see exactly where every lead stands, and the automation always acts on current information instead of a spreadsheet someone forgot to update.',
    whyItMatters:
      'A CRM only helps if it stays accurate, and manual updating is the first thing that slips on a busy day. When automation keeps it current, the pipeline becomes something you can trust for decisions instead of a list of stale contacts.',
    whenToUse:
      'Connect automation to your CRM when leads live in several places, when your pipeline is always out of date, or when you cannot quickly answer where a lead stands. It brings everything into one reliable view.',
    primary: svc('crm-automation'),
    secondary: svc('ai-automation'),
    related: [
      'how-does-ai-follow-up-work',
      'what-should-a-service-business-automate-first',
      'can-ai-automation-book-appointments',
      'what-is-ai-automation-for-a-local-business',
    ],
  },
  {
    slug: 'can-a-chatbot-qualify-service-business-leads',
    question: 'Can a chatbot qualify service business leads?',
    title: 'Can a chatbot qualify service business leads? | Sirius Systems',
    description:
      'Yes. A well-built chatbot asks the questions you would on a first call, sorts good-fit leads from the rest, and can book the right ones straight onto your calendar.',
    answer:
      'Yes. A well-built chatbot can qualify leads before they ever reach you by asking the same questions you would ask on a first call. It can confirm the service needed, the location, the timing, and the budget range, then route the lead based on the answers. Good-fit leads can be booked straight onto your calendar, while jobs you do not take can be handled politely without wasting your time. Because it answers in your business voice and runs around the clock, it captures and sorts website visitors at midnight the same way it would at noon. The point is not to sound human for its own sake. It is to make sure the leads that reach you are the ones worth your attention, with the details already gathered so you can pick up where it left off.',
    whyItMatters:
      'Unqualified leads cost you time, and slow qualification costs you the good ones. A chatbot that sorts inquiries the moment they arrive means you spend your day on jobs you actually want, with the background already collected.',
    whenToUse:
      'Use a qualifying chatbot when your site gets traffic but the leads are mixed, when you field a lot of jobs outside your service area, or when first calls eat up time you would rather spend working.',
    primary: svc('ai-chatbots'),
    secondary: svc('smart-websites'),
    related: [
      'can-ai-automation-book-appointments',
      'can-an-ai-voicebot-answer-after-hours-calls',
      'how-does-ai-automation-reduce-missed-leads',
      'how-does-ai-follow-up-work',
    ],
  },
  {
    slug: 'can-an-ai-voicebot-answer-after-hours-calls',
    question: 'Can an AI voicebot answer after-hours calls?',
    title: 'Can an AI voicebot answer after-hours calls? | Sirius Systems',
    description:
      'Yes. An AI voicebot picks up when you cannot, answers common questions, qualifies the caller, and can book an appointment or take a message straight into your system.',
    answer:
      'Yes. An AI voicebot can answer calls when you cannot, including after hours, on weekends, and while you are on a job. It picks up, speaks in a natural voice, answers common questions, qualifies the caller, and can book an appointment or take a message straight into your system. Instead of a caller reaching voicemail and moving on, they have a real conversation and a clear next step. You decide what it handles: which questions it answers, which calls it books, and when it should hand off or take a message for you. For a local service business, this captures the calls that usually turn into lost jobs, the ones that come in at night or during another appointment, and turns them into booked work or qualified leads waiting for you in the morning.',
    whyItMatters:
      'A large share of service calls come in outside business hours, and most callers who reach voicemail never call back. Answering those calls, even with a voicebot, is often the difference between booking the job and losing it to whoever picked up.',
    whenToUse:
      'Use a voicebot when you regularly miss calls during jobs, get after-hours demand, or cannot justify a full-time receptionist. It covers the hours a person cannot.',
    primary: svc('ai-voicebots'),
    secondary: svc('appointment-booking-automation'),
    related: [
      'what-is-missed-call-text-back',
      'can-a-chatbot-qualify-service-business-leads',
      'can-ai-automation-book-appointments',
      'how-does-ai-follow-up-work',
    ],
  },
  {
    slug: 'how-do-automated-review-requests-work',
    question: 'How do automated review requests work?',
    title: 'How do automated review requests work? | Sirius Systems',
    description:
      'Automated review requests send a text or email with a direct review link at the right moment after a job, follow up once if needed, and space requests out steadily.',
    answer:
      'Automated review requests work by asking for a review at the right moment after a job, without anyone remembering to send it. When a job is marked complete, the system sends a text or email with a direct link to leave a review, timed for when the customer is most likely to respond. It can follow up once if they do not, and it spreads requests out so they arrive steadily rather than all at once. The goal is consistency: every happy customer gets asked, the same way, every time. You are not writing or buying reviews, and you are not gaming anything. You are simply making sure the customers who already had a good experience are invited to say so, which is the part most businesses forget on a busy week.',
    whyItMatters:
      'Reviews are one of the strongest signals a local customer uses to choose you, and their influence fades over time, so a steady flow matters more than a one-time push. Most businesses have plenty of happy customers and simply never ask them at the right moment.',
    whenToUse:
      'Use automated review requests when your review count is lower than your competitors, when reviews only come in sporadically, or when asking depends on someone remembering. Consistency is what moves the needle.',
    primary: svc('review-automation'),
    secondary: svc('reputation-management'),
    related: [
      'how-does-local-seo-connect-to-automation',
      'how-does-ai-automation-reduce-missed-leads',
      'what-is-ai-automation-for-a-local-business',
      'how-does-ai-automation-connect-to-crm',
    ],
  },
  {
    slug: 'how-does-local-seo-connect-to-automation',
    question: 'How does local SEO connect to automation?',
    title: 'How does local SEO connect to automation? | Sirius Systems',
    description:
      'Local SEO brings the leads and automation makes sure none are wasted. Review requests strengthen ranking, and fast follow-up turns that visibility into booked jobs.',
    answer:
      'Local SEO and automation feed each other. Local SEO helps people find you in Google and in AI answer engines, and automation makes sure the leads that search sends you actually get captured and booked. The connection runs both ways. Automated review requests build the steady flow of reviews that strengthens your local ranking and Google Business Profile. Fast follow-up and booking mean the traffic your ranking earns turns into jobs instead of leaking away. A smart website tuned for local search captures those visitors, and the automation behind it qualifies and books them. On their own, each piece helps. Together, visibility brings the leads and automation makes sure none of them are wasted. That is why they work best as one system rather than separate projects.',
    whyItMatters:
      'Ranking well is only half the job. If leads arrive and no one follows up quickly, the visibility is wasted, and slow response can even cost you the ranking-building reviews. Automation protects the return on your local SEO work.',
    whenToUse:
      'Connect the two when you are investing in local search but not sure the leads are being captured, or when your reviews are not keeping pace with your visibility. They are strongest built together.',
    primary: svc('local-seo-aeo'),
    secondary: svc('smart-websites'),
    related: [
      'how-do-automated-review-requests-work',
      'can-a-chatbot-qualify-service-business-leads',
      'how-does-ai-automation-reduce-missed-leads',
      'what-is-ai-automation-for-a-local-business',
    ],
  },
]

export function getAiFaqBySlug(slug: string): AiFaq | undefined {
  return AI_AUTOMATION_FAQS.find((f) => f.slug === slug)
}
