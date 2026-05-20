// FAQ data per page. Each entry MUST be visible in the page body so the
// corresponding FAQPage JSON-LD is honest (see docs/seo/schema-plan.md §7).
// No invented stats or claims (see do-not-invent-rules.md).

export type QA = { q: string; a: string }

export const HOME_FAQ: QA[] = [
  {
    q: "What does Sirius Systems actually do?",
    a: "We build the system that captures, qualifies, books, and follows up on leads for a local service business — AI automation, smart websites, and reputation systems running together. You can adopt one piece or the whole engine.",
  },
  {
    q: "Is this for small businesses or larger ones?",
    a: "Local service businesses that have outgrown a website-only setup and want automation in place of more headcount. We don't build for enterprise.",
  },
  {
    q: "Do I have to replace my current CRM, booking tool, or website?",
    a: "Not necessarily. We audit what you've already got, fix what's worth keeping, and replace only what's actively losing you leads. We'll be honest about the tradeoffs.",
  },
  {
    q: "How long does it take to get something live?",
    a: "Depends on the scope. A standalone piece — a chatbot, review automation, or a smart-site rebuild — can land in two to four weeks. The full integrated system is a multi-month engagement.",
  },
  {
    q: "What does the discovery call look like?",
    a: "Twenty minutes. We ask where leads, reviews, and follow-up are leaking, and you leave with a map of the gaps and the order of operations — whether or not we end up working together.",
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
