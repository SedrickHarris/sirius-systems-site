// FAQ data per page. Each entry MUST be visible in the page body so the
// corresponding FAQPage JSON-LD is honest (see docs/seo/schema-plan.md §7).
// No invented stats or claims (see do-not-invent-rules.md).

export type QA = { q: string; a: string }

export const HOME_FAQ: QA[] = [
  {
    q: 'What does Sirius Systems do?',
    a: 'Sirius Systems builds AI automation, smart websites, and reputation systems for local service businesses. The system captures leads, follows up automatically, books appointments, requests reviews after completed jobs, and keeps your local search visibility strong — running as one connected engine rather than separate tools.',
  },
  {
    q: 'What is AI automation for a local service business?',
    a: 'AI automation for a local service business means replacing the manual steps between a new lead and a booked job with trigger-based systems. When a lead submits a form, a call goes unanswered, or a job completes, the right action fires automatically: a follow-up SMS, an appointment reminder, a review request, a CRM update. The business sets the rules once; the system runs them every time.',
  },
  {
    q: 'Which types of businesses does Sirius Systems work with?',
    a: 'Local service businesses that have outgrown a website-only setup and want automation running in place of more headcount. Home services, contractors, professional services, auto services, healthcare, real estate, and similar owner-operated businesses. We do not build for enterprise.',
  },
  {
    q: 'Do I have to replace my current CRM, booking tool, or website?',
    a: 'Not necessarily. We audit what you already have, keep what is working and can be connected, and replace only what is actively losing you leads. When a tool is genuinely limiting the system, we say so directly. The goal is the most capable connected setup with the least disruption.',
  },
  {
    q: 'What is the difference between AI automation and a CRM?',
    a: 'A CRM is a database that stores contact and deal information. AI automation is the system that acts on that information: sending follow-up messages, moving leads through stages, triggering reminders, and requesting reviews based on what has happened. Most businesses have a CRM but no automation layer, which means the data sits there and someone has to do everything manually. Automation is what makes the CRM work without constant manual input.',
  },
  {
    q: 'How long does it take to get something live?',
    a: 'A focused piece — lead follow-up automation, review acquisition, or a chatbot — can be live in two to four weeks. The full connected system covering automation, reputation, and local SEO is a multi-week phased engagement. We prioritize the highest-impact pieces first so the system is producing results before everything is deployed.',
  },
  {
    q: 'What does the discovery call look like?',
    a: 'Twenty minutes. We ask where leads, reviews, and follow-up are leaking and map the gaps in your current setup. You leave with a clear picture of the order of operations whether or not we end up working together. There is no charge for the call.',
  },
  {
    q: 'How does Sirius Systems handle reputation management?',
    a: 'Reputation management at Sirius Systems means building a system that earns reviews consistently after every completed job, responds to every review in your business voice, and monitors what is being said across platforms. Reviews earned by the acquisition system feed back into your Google Business Profile and strengthen your local search signals. The reputation system and the local search system are connected, not separate.',
  },
  {
    q: 'What is the all-in-one business growth system?',
    a: 'It is the full connected stack: AI automation handling lead capture and follow-up, a smart website built for local search and conversion, and a reputation system earning and responding to reviews — all running together so each pillar compounds the others. SEO brings in the lead, automation converts it to a booked job, the completed job produces a review, the review strengthens the local search position that brings in the next lead.',
  },
]

export const CONTACT_FAQ: QA[] = [
  {
    q: "What happens after I reach out?",
    a: "You'll get a reply within one business day to confirm a discovery-call time. The call itself is twenty minutes, and the audit you leave with is yours to keep.",
  },
  {
    q: "Do you charge for the discovery call?",
    a: "No. The audit is free. The implementation is paid, and we quote based on what you actually need after we've seen the gaps.",
  },
  {
    q: "What if I'm not sure what I need yet?",
    a: "That's exactly what the call is for. Most operators come in saying 'I think I need X' and leave knowing the three things to do in what order. You don't need a finished brief to book it.",
  },
  {
    q: "Will you sell my information or add me to a list?",
    a: "No. No automated nurture, no list-sharing, no surprise emails. If you don't move forward, we don't keep contacting you.",
  },
]
