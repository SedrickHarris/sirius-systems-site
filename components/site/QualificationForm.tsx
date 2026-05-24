'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, Check, Loader2 } from 'lucide-react'
import { INDUSTRIES } from '@/lib/industries'

// Replace before launch with the live GHL inbound webhook URL.
const GHL_WEBHOOK_URL = 'TODO_GHL_WEBHOOK_URL'
const BOOKING_URL =
  'https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4'
const THRESHOLD = 20

type Step =
  | 'industry'
  | 'sub-category'
  | 'lead-volume'
  | 'operation'
  | 'contact'
  | 'result-qualified'
  | 'result-nurture'

interface FormData {
  leadVolume: string
  bottleneck: string[]
  currentTools: string
  followUpSpeed: string
  decisionMaker: string
  timeline: string
  email: string
  firstName: string
}

const EMPTY_FORM: FormData = {
  leadVolume: '',
  bottleneck: [],
  currentTools: '',
  followUpSpeed: '',
  decisionMaker: '',
  timeline: '',
  email: '',
  firstName: '',
}

// Industry → list of sub-categories. The sub-category step is shown for
// any industry slug present in this map. When the user picks 'other', the
// sub-category step is skipped. Sub-category values are the literal label
// strings (not slugs), since they're routing/CRM data only and never
// contribute to the qualification score.
const SUB_CATEGORIES: Record<string, string[]> = {
  'home-services': [
    'Plumbing',
    'HVAC',
    'Electrical Services',
    'Roofing',
    'House Cleaning & Maid Services',
    'Lawn Care & Landscaping',
    'Pest Control',
    'Handyman Services',
    'Carpet & Upholstery Cleaning',
    'Window Cleaning & Pressure Washing',
    'Appliance Repair',
    'Garage Door Repair & Installation',
    'Pool Maintenance & Repair',
    'Water, Fire & Mold Restoration',
    'Junk Removal & Hauling',
    'Moving Services',
    'Tree Services & Arborists',
    'Locksmithing',
    'Home Security Installation',
    'Solar Panel Installation & Maintenance',
    'Gutter Repair & Cleaning',
    'Chimney & Fireplace Services',
    'Insulation Installation',
    'Irrigation & Sprinkler Repair',
    'Fence Repair',
    'Pet Waste Removal',
    'Holiday Lighting Installation',
    'Home Inspection',
    'Smart Home Installation',
  ],
  'construction-contractors': [
    'General Contractors',
    'Residential Remodeling (Kitchen & Bathroom)',
    'Painting Contractors',
    'Flooring Installation',
    'Deck & Patio Builders',
    'Concrete & Masonry',
    'Custom Home Builders',
    'Commercial Construction & Build-Outs',
    'Drywall Installation',
    'Carpentry & Framing',
    'Tile & Stone Contractors',
    'Siding & Exterior Contractors',
    'Window & Door Installation',
    'Fencing Contractors',
    'Paving & Asphalt Contractors',
    'Waterproofing & Foundation Repair',
    'Excavation & Demolition',
    'Epoxy Flooring Contractors',
    'Cabinet Installers & Custom Woodworking',
    'Countertop Installation',
    'Outdoor Kitchen Builders',
    'Home Additions',
    'Tenant Improvement Contractors',
  ],
  'professional-services': [
    'Law Firms & Attorneys',
    'Accounting, CPA & Bookkeeping',
    'Financial Planners & Wealth Management',
    'Insurance Agencies',
    'Business Consultants & Coaches',
    'Marketing & Creative Agencies',
    'Mortgage Brokers & Loan Officers',
    'Architecture & Engineering Firms',
    'HR Consultants & Staffing Agencies',
    'Recruiting Agencies',
    'Web Design Agencies',
    'Tax Preparation Services',
    'Private Investigation Services',
    'Notary Public & Signing Agents',
    'Translation & Interpretation Services',
  ],
  'auto-services': [
    'Auto Repair Shops & General Mechanics',
    'Auto Detailing & Ceramic Coating',
    'Tire & Wheel Shops',
    'Auto Body & Collision Repair',
    'Oil Change & Quick-Lube Centers',
    'Windshield & Auto Glass Repair',
    'Transmission Repair',
    'Brake Repair Specialists',
    'Car Wash Facilities',
    'Mobile Mechanics',
    'Motorcycle & ATV Repair',
    'RV Repair',
    'Towing & Roadside Assistance',
    'Fleet Maintenance',
    'Diesel Repair',
    'Smog Check Stations',
    'Auto AC Repair',
    'Window Tinting & Car Audio',
    'Auto Upholstery',
    'Wheel & Rim Repair',
    'Auto Locksmiths',
  ],
  'beauty-wellness': [
    'Hair Salons & Barbershops',
    'Nail Salons',
    'Day Spas & Medical Spas',
    'Personal Training Studios & Gyms',
    'Massage Therapy Clinics',
    'Estheticians & Skincare',
    'Boutique Fitness Studios (Yoga, Pilates)',
    'Tattoo & Piercing Studios',
    'Lash & Brow Bars',
    'Waxing Studios',
    'Tanning Salons',
    'Aesthetic & Cosmetic Clinics',
    'Nutrition & Wellness Coaches',
    'Weight Loss Clinics',
    'IV Therapy & Cryotherapy Studios',
    'Stretch Therapy Studios',
    'Makeup Artists & Bridal Beauty',
    'Permanent Makeup Artists',
  ],
  'healthcare-medical': [
    'Medical Clinics & Primary Care',
    'Dental Practices & Orthodontists',
    'Physical Therapy Clinics',
    'Chiropractic Offices',
    'Mental Health & Counseling Practices',
    'Urgent Care Clinics',
    'Dermatology Practices',
    'Optometry Practices',
    'Pediatric Clinics',
    "OB-GYN & Women's Health",
    'Home Health Agencies & Senior Care',
    'Occupational & Speech Therapy',
    'Podiatry Practices',
    'Pain Management Clinics',
    'Sports Medicine Clinics',
    'Telehealth Providers',
    'Medical Billing Companies',
    'Medical Equipment Providers',
  ],
  'real-estate-property': [
    'Real Estate Agents & Brokerages',
    'Property Management Companies',
    'Mortgage Companies & Loan Officers',
    'Home Inspectors & Appraisers',
    'Real Estate Investors & Developers',
    'Commercial Leasing Firms',
    'Title & Escrow Companies',
    'Short-Term & Vacation Rental Managers',
    'Apartment Communities',
    'HOA Management Companies',
    'Real Estate Photography & Staging',
    'Leasing Agents',
    'Property Maintenance Companies',
    'Corporate Housing Providers',
    'Land Development Companies',
  ],
  'hospitality-events': [
    'Restaurants & Catering',
    'Event & Wedding Venues',
    'Wedding & Event Planners',
    'Hotels & Boutique Hotels',
    'Photographers & Videographers',
    'DJs & Live Entertainment',
    'Florists & Event Decorators',
    'Party Rental Companies',
    'Food Trucks & Bakeries',
    'Bartending Services',
    'Photo Booth Companies',
    'Tourism & Tour Operators',
    'Conference Centers & Banquet Halls',
    'Corporate Event Services',
  ],
  'education-childcare': [
    'Tutoring & Test Prep Centers',
    'Childcare & Daycare Centers',
    'Music, Dance & Martial Arts Schools',
    'Private Schools & Preschools',
    'Training & Trade Schools',
    'Driving Schools',
    'Swim Schools',
    'Sports Training Programs',
    'Language Schools',
    'After-School Programs',
    'Online Education Providers',
    'Youth Programs & Coaching',
    'Career & Certification Programs',
    'Homeschool Support Programs',
    'Continuing Education Providers',
  ],
  'community-faith-nonprofit': [
    'Churches & Ministries',
    'Nonprofit Organizations & Charities',
    'Community & Membership Organizations',
    'Youth Organizations & Programs',
    'Fundraising & Advocacy Organizations',
    'Faith-Based Schools & Outreach',
    'Volunteer Organizations',
    'Civic & Local Associations',
    'Food Banks & Rescue Missions',
    'Mentorship & Support Groups',
    'Donor-Based Organizations',
    'Coaching Communities',
    'Mission-Based Organizations',
  ],
  'retail-local-commerce': [
    'Specialty Retail & Boutiques',
    'Pet Stores',
    'Health Food & Supplement Stores',
    'Home Goods & Furniture Stores',
    'E-Commerce Stores',
    'Apparel & Shoe Shops',
    'Gift & Toy Stores',
    'Beauty Supply Stores',
    'Hardware Stores',
    'Jewelry Stores',
    'Sporting Goods Stores',
    'Electronics & Appliance Stores',
    'Mattress & Flooring Showrooms',
    'Garden Centers & Outdoor Living',
    'Thrift & Consignment Shops',
    'Grocery & Convenience Stores',
  ],
  'technology-b2b': [
    'IT Consulting & Managed Service Providers',
    'Cybersecurity Companies',
    'SaaS & Software Development Firms',
    'AI Automation Agencies',
    'CRM & Business Automation Consultants',
    'Cloud Service Providers',
    'App Development Firms',
    'Data Analytics Firms',
    'Digital Transformation Consultants',
    'Web Hosting Companies',
    'Call Center & Virtual Assistant Services',
    'B2B Lead Generation Companies',
    'Business Process Outsourcing',
    'Telecom Services',
    'Systems Integration Companies',
    'Compliance Technology Firms',
    'Help Desk & Technical Support',
    'Network Support Companies',
    'Database Management Companies',
    'Workflow Automation Consultants',
  ],
}

const SUB_CATEGORY_OTHER = 'Other / My business type is not listed'

const LEAD_VOLUME_POINTS: Record<string, number> = {
  '50-plus': 5,
  '20-to-50': 4,
  '10-to-20': 3,
  'under-10': 1,
}

const TOOLS_POINTS: Record<string, number> = {
  'yes-crm-and-automation': 3,
  'yes-crm-only': 4,
  'spreadsheets-or-basic': 5,
  'nothing-yet': 3,
}

const FOLLOW_UP_POINTS: Record<string, number> = {
  'within-5-minutes': 1,
  'within-1-hour': 2,
  'same-day': 4,
  'next-day-or-longer': 5,
  inconsistent: 5,
}

const DECISION_POINTS: Record<string, number> = {
  yes: 4,
  'mostly-yes': 3,
  'need-approval': 1,
  no: 0,
}

const TIMELINE_POINTS: Record<string, number> = {
  immediately: 5,
  'within-30-days': 4,
  'within-90-days': 3,
  'just-researching': 0,
}

// Industry and sub-category are routing/CRM-only and do not contribute
// to the qualification score. Threshold (THRESHOLD = 20) is unchanged.
function calculateScore(form: FormData): number {
  let score = 0
  score += LEAD_VOLUME_POINTS[form.leadVolume] ?? 0
  score += Math.min(form.bottleneck.length * 2, 6)
  score += TOOLS_POINTS[form.currentTools] ?? 0
  score += FOLLOW_UP_POINTS[form.followUpSpeed] ?? 0
  score += DECISION_POINTS[form.decisionMaker] ?? 0
  score += TIMELINE_POINTS[form.timeline] ?? 0
  return score
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

const LEAD_VOLUME_OPTIONS = [
  { value: 'under-10', label: 'Under 10' },
  { value: '10-to-20', label: '10 to 20' },
  { value: '20-to-50', label: '20 to 50' },
  { value: '50-plus', label: '50+' },
]

const BOTTLENECK_OPTIONS = [
  { value: 'slow-follow-up', label: 'Missed or slow lead follow-up' },
  { value: 'missed-leads', label: 'Leads not converting to booked appointments' },
  { value: 'no-show-appointments', label: 'No-shows and cancellations' },
  { value: 'bad-reviews', label: 'Not enough Google reviews' },
  { value: 'manual-admin', label: 'Too much manual admin work' },
  { value: 'not-ranking-locally', label: 'Not ranking well locally' },
]

const TOOLS_OPTIONS = [
  { value: 'yes-crm-and-automation', label: 'CRM plus automation (e.g. GHL, HubSpot)' },
  { value: 'yes-crm-only', label: 'CRM only, no automation' },
  { value: 'spreadsheets-or-basic', label: 'Spreadsheets or basic tools' },
  { value: 'nothing-yet', label: 'Nothing formal yet' },
]

const FOLLOW_UP_OPTIONS = [
  { value: 'within-5-minutes', label: 'Within 5 minutes' },
  { value: 'within-1-hour', label: 'Within 1 hour' },
  { value: 'same-day', label: 'Same day' },
  { value: 'next-day-or-longer', label: 'Next day or longer' },
  { value: 'inconsistent', label: "Honestly, it's inconsistent" },
]

const DECISION_OPTIONS = [
  { value: 'yes', label: 'Yes, I decide' },
  { value: 'mostly-yes', label: 'Mostly — I lead the decision' },
  { value: 'need-approval', label: 'I need approval from someone else' },
  { value: 'no', label: "No, I'm researching for someone else" },
]

const TIMELINE_OPTIONS = [
  { value: 'immediately', label: 'I want to move immediately' },
  { value: 'within-30-days', label: 'Within the next 30 days' },
  { value: 'within-90-days', label: 'Within the next 90 days' },
  { value: 'just-researching', label: 'Just researching for now' },
]

type OptionCardProps = {
  selected: boolean
  onSelect: () => void
  label: string
  icon?: React.ReactNode
  multi?: boolean
  ariaLabel?: string
}

function OptionCard({
  selected,
  onSelect,
  label,
  icon,
  multi = false,
  ariaLabel,
}: OptionCardProps) {
  const base =
    'cursor-pointer rounded-lg border p-3 text-sm transition-all duration-150 flex items-center gap-3'
  const stateClass = selected
    ? 'border-[color:var(--blue)] bg-[color:var(--surface-2)] text-[color:var(--text)]'
    : 'border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-muted)] hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]'

  return (
    <div
      role={multi ? 'checkbox' : 'radio'}
      aria-checked={selected}
      aria-label={ariaLabel ?? label}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      className={`${base} ${stateClass}`}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span className="flex-1">{label}</span>
      {multi ? (
        <span
          aria-hidden
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
            selected
              ? 'border-[color:var(--blue)] bg-[color:var(--blue)]'
              : 'border-[color:var(--border-strong)] bg-transparent'
          }`}
        >
          {selected ? <Check className="h-3 w-3 text-[color:var(--text)]" /> : null}
        </span>
      ) : null}
    </div>
  )
}

export function QualificationForm() {
  const [step, setStep] = useState<Step>('industry')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [touched, setTouched] = useState({ email: false, firstName: false })
  const [magnetSent, setMagnetSent] = useState(false)
  const [magnetSubmitting, setMagnetSubmitting] = useState(false)
  const [magnetError, setMagnetError] = useState<string | null>(null)

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const toggleBottleneck = (value: string) =>
    setForm((prev) => ({
      ...prev,
      bottleneck: prev.bottleneck.includes(value)
        ? prev.bottleneck.filter((v) => v !== value)
        : [...prev.bottleneck, value],
    }))

  // Changing industry resets the sub-category selection so a stale value
  // can't leak into the payload after a back-and-change navigation.
  const setIndustry = (value: string) => {
    setSelectedIndustry(value)
    setSelectedSubCategory('')
  }

  // Step sequence depends on the industry choice. 'other' skips the
  // sub-category step entirely; any real slug includes it.
  const steps: Step[] =
    selectedIndustry === 'other'
      ? ['industry', 'lead-volume', 'operation', 'contact']
      : ['industry', 'sub-category', 'lead-volume', 'operation', 'contact']

  const isResultStep =
    step === 'result-qualified' || step === 'result-nurture'
  const currentStepIndex = steps.indexOf(step)
  const totalSteps = steps.length

  const canProceedIndustry = selectedIndustry !== ''
  const canProceedSubCategory = selectedSubCategory !== ''
  const canProceedLeadVolume = form.leadVolume !== ''
  const canProceedOperation =
    form.bottleneck.length > 0 &&
    form.currentTools !== '' &&
    form.followUpSpeed !== ''
  const canProceedContact =
    form.decisionMaker !== '' &&
    form.timeline !== '' &&
    form.firstName.trim() !== '' &&
    isValidEmail(form.email)

  const handleNext = () => {
    if (step === 'industry') {
      if (!canProceedIndustry) return
      setStep(selectedIndustry === 'other' ? 'lead-volume' : 'sub-category')
    } else if (step === 'sub-category') {
      if (!canProceedSubCategory) return
      setStep('lead-volume')
    } else if (step === 'lead-volume') {
      if (!canProceedLeadVolume) return
      setStep('operation')
    } else if (step === 'operation') {
      if (!canProceedOperation) return
      setStep('contact')
    }
  }

  const handleBack = () => {
    if (step === 'sub-category') setStep('industry')
    else if (step === 'lead-volume') {
      setStep(selectedIndustry === 'other' ? 'industry' : 'sub-category')
    } else if (step === 'operation') setStep('lead-volume')
    else if (step === 'contact') setStep('operation')
  }

  const handleSubmit = async () => {
    if (!canProceedContact || submitting) return
    setSubmitting(true)
    setSubmitError(null)

    const score = calculateScore(form)
    const qualificationResult: 'qualified' | 'nurture' =
      score >= THRESHOLD ? 'qualified' : 'nurture'
    const tag = qualificationResult === 'qualified' ? 'qualified-lead' : 'nurture-lead'
    const nextStep: Step =
      qualificationResult === 'qualified' ? 'result-qualified' : 'result-nurture'

    const payload = {
      firstName: form.firstName.trim(),
      email: form.email.trim(),
      industry: selectedIndustry,
      subCategory: selectedSubCategory,
      leadVolume: form.leadVolume,
      bottlenecks: form.bottleneck.join(', '),
      currentTools: form.currentTools,
      followUpSpeed: form.followUpSpeed,
      decisionMaker: form.decisionMaker,
      timeline: form.timeline,
      qualificationScore: score,
      qualificationTag: tag,
      qualificationResult,
      score,
      source: 'contact-page-qualification-form',
    }

    // Skip the network call while the webhook URL is still the placeholder
    // so the form is functional during development and visual QA.
    if (GHL_WEBHOOK_URL === 'TODO_GHL_WEBHOOK_URL') {
      setSubmitting(false)
      setStep(nextStep)
      return
    }

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setSubmitting(false)
      setStep(nextStep)
    } catch {
      setSubmitting(false)
      setSubmitError(
        'Something went wrong submitting your answers. Please try again or email us directly.'
      )
    }
  }

  // Second webhook call fired when the nurture lead-magnet button is clicked.
  // Separate payload shape from the main submission; same stub guard.
  const handleMagnetClick = async () => {
    if (magnetSubmitting || magnetSent) return
    setMagnetSubmitting(true)
    setMagnetError(null)

    const score = calculateScore(form)
    const payload = {
      firstName: form.firstName.trim(),
      email: form.email.trim(),
      industry: selectedIndustry,
      subCategory: selectedSubCategory,
      qualificationResult: 'nurture' as const,
      score,
      magnetRequested: true,
      source: 'qualification-form-magnet',
    }

    if (GHL_WEBHOOK_URL === 'TODO_GHL_WEBHOOK_URL') {
      setMagnetSubmitting(false)
      setMagnetSent(true)
      return
    }

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setMagnetSubmitting(false)
      setMagnetSent(true)
    } catch {
      setMagnetSubmitting(false)
      setMagnetError(
        'Something went wrong sending the guide. Please try again.'
      )
    }
  }

  // Industry options pull dynamically from INDUSTRIES (12 hubs) plus a final
  // 'other' sentinel. Never hardcode the industry list.
  const industryOptions = [
    ...INDUSTRIES.map((i) => ({ value: i.slug, label: i.name })),
    { value: 'other', label: 'Other / Not Listed' },
  ]

  return (
    <div className="card-elevated p-8 lg:p-10">
      {!isResultStep && (
        <>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--blue-system)]">
              Fit Check
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--text-muted)]">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
          </div>
          <div
            className="mt-3 flex items-center gap-2"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-valuenow={currentStepIndex + 1}
          >
            {steps.map((s, i) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  currentStepIndex >= i
                    ? 'bg-[color:var(--blue)]'
                    : 'bg-[color:var(--border)]'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {step === 'industry' && (
        <div className="mt-6">
          <h2 className="sr-only">Industry</h2>
          <p className="font-display text-lg leading-snug text-[color:var(--text)]">
            What industry are you in?
          </p>
          <p className="mt-1 text-xs text-[color:var(--text-muted)]">
            Select your industry
          </p>
          <div
            role="radiogroup"
            aria-label="Industry"
            className="mt-4 grid gap-2 sm:grid-cols-2"
          >
            {industryOptions.map(({ value, label }) => (
              <OptionCard
                key={value}
                selected={selectedIndustry === value}
                onSelect={() => setIndustry(value)}
                label={label}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceedIndustry}
            className="btn-primary mt-8 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}

      {step === 'sub-category' && (
        <div className="mt-6">
          <h2 className="sr-only">Business type</h2>
          <p className="font-display text-lg leading-snug text-[color:var(--text)]">
            What best describes your business?
          </p>
          <p className="mt-1 text-xs text-[color:var(--text-muted)]">
            Select your business type
          </p>
          <div
            role="radiogroup"
            aria-label="Business type"
            className="mt-4 grid gap-2 sm:grid-cols-2"
          >
            {[
              ...(SUB_CATEGORIES[selectedIndustry] ?? []),
              SUB_CATEGORY_OTHER,
            ].map((label) => (
              <OptionCard
                key={label}
                selected={selectedSubCategory === label}
                onSelect={() => setSelectedSubCategory(label)}
                label={label}
              />
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceedSubCategory}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      )}

      {step === 'lead-volume' && (
        <div className="mt-6">
          <h2 className="sr-only">Lead volume</h2>
          <p className="font-display text-lg leading-snug text-[color:var(--text)]">
            How many new leads does your business receive per month?
          </p>
          <div
            role="radiogroup"
            aria-label="Lead volume"
            className="mt-4 grid gap-2 sm:grid-cols-2"
          >
            {LEAD_VOLUME_OPTIONS.map(({ value, label }) => (
              <OptionCard
                key={value}
                selected={form.leadVolume === value}
                onSelect={() => update('leadVolume', value)}
                label={label}
              />
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceedLeadVolume}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      )}

      {step === 'operation' && (
        <div className="mt-6">
          <h2 className="sr-only">Your current operation</h2>
          <div>
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              Where are your biggest growth bottlenecks?
            </p>
            <p className="mt-1 text-xs text-[color:var(--text-muted)]">
              Select all that apply.
            </p>
            <div className="mt-4 grid gap-2">
              {BOTTLENECK_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.bottleneck.includes(value)}
                  onSelect={() => toggleBottleneck(value)}
                  label={label}
                  multi
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              What tools do you currently use to manage leads?
            </p>
            <div
              role="radiogroup"
              aria-label="Current tools"
              className="mt-4 grid gap-2"
            >
              {TOOLS_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.currentTools === value}
                  onSelect={() => update('currentTools', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              How quickly does your team typically follow up with new leads?
            </p>
            <div
              role="radiogroup"
              aria-label="Follow-up speed"
              className="mt-4 grid gap-2"
            >
              {FOLLOW_UP_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.followUpSpeed === value}
                  onSelect={() => update('followUpSpeed', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceedOperation}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      )}

      {step === 'contact' && (
        <div className="mt-6">
          <h2 className="sr-only">Timing and contact</h2>
          <div>
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              Are you the decision-maker for investing in growth systems?
            </p>
            <div
              role="radiogroup"
              aria-label="Decision-maker"
              className="mt-4 grid gap-2"
            >
              {DECISION_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.decisionMaker === value}
                  onSelect={() => update('decisionMaker', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              What&rsquo;s your timeline for making a change?
            </p>
            <div
              role="radiogroup"
              aria-label="Timeline"
              className="mt-4 grid gap-2"
            >
              {TIMELINE_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.timeline === value}
                  onSelect={() => update('timeline', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="qf-firstName" className="field-label">
                First name
              </label>
              <input
                id="qf-firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                className="field"
              />
              {touched.firstName && form.firstName.trim() === '' ? (
                <p
                  role="alert"
                  className="mt-1 text-xs text-[color:var(--error)]"
                >
                  First name is required.
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="qf-email" className="field-label">
                Work email
              </label>
              <input
                id="qf-email"
                type="email"
                autoComplete="email"
                placeholder="you@yourbusiness.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                className="field"
              />
              {touched.email && !isValidEmail(form.email) ? (
                <p
                  role="alert"
                  className="mt-1 text-xs text-[color:var(--error)]"
                >
                  Enter a valid email address.
                </p>
              ) : null}
            </div>
          </div>

          {submitError ? (
            <p
              role="alert"
              className="mt-4 text-xs text-[color:var(--error)]"
            >
              {submitError}
            </p>
          ) : null}

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
              disabled={submitting}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || !canProceedContact}
              aria-busy={submitting}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Scoring...
                </>
              ) : (
                <>
                  See my results
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {step === 'result-qualified' && (
        <div>
          <div
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full border-2"
            style={{ borderColor: 'var(--success)' }}
          >
            <Check className="h-6 w-6" style={{ color: 'var(--success)' }} />
          </div>

          <span className="section-eyebrow mt-6 block">You&rsquo;re a fit</span>
          <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-[color:var(--text)] md:text-3xl">
            Let&rsquo;s map your system.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Based on your answers, Sirius Systems can likely make a meaningful
            difference in how your business captures and converts leads. The
            next step is a 20-minute audit call — no pitch, just a system map
            you keep.
          </p>

          <div className="my-6 border-t border-[color:var(--border)]" />

          <ul className="space-y-3">
            {[
              "We'll review exactly where leads are leaking",
              "You'll get a written order of operations",
              'No obligation to move forward',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[color:var(--text-muted)]"
              >
                <Check
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--success)]"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 flex w-full items-center justify-center gap-2"
          >
            Book the 20-min audit call
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>

          <p className="mt-3 text-center text-xs text-[color:var(--text-muted)]">
            Opens in a new tab. No account needed.
          </p>
        </div>
      )}

      {step === 'result-nurture' && (
        <div>
          <div
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--blue)' }}
          >
            <BookOpen className="h-6 w-6" style={{ color: 'var(--blue)' }} />
          </div>

          <span className="section-eyebrow mt-6 block">Your next step</span>
          <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-[color:var(--text)] md:text-3xl">
            Start here before the call.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Based on your answers, there are a few things worth thinking
            through before a strategy call will be most useful. We&rsquo;ve put
            together a guide with the right questions to ask yourself first.
          </p>

          <div className="my-6 border-t border-[color:var(--border)]" />

          {magnetSent ? (
            <div className="card-elevated p-5 mt-4">
              <p className="font-semibold text-base text-[color:var(--text)]">
                You&rsquo;re on our list.
              </p>
              <p className="text-xs text-[color:var(--text-muted)] mt-2 leading-relaxed">
                We&rsquo;ll review your info and reach out with resources
                tailored to where you are right now. Most businesses we work
                with aren&rsquo;t ready to move the day they find us — and
                that&rsquo;s fine. When the timing is right, we&rsquo;ll be
                ready.
              </p>
            </div>
          ) : (
            <>
              <div className="card-elevated p-5 mt-4">
                <span className="code-badge">Free Resource</span>
                <p className="mt-3 font-semibold text-base text-[color:var(--text)]">
                  The Local Business Automation Audit
                </p>
                <p className="text-xs text-[color:var(--text-muted)] mt-1 leading-relaxed">
                  10 questions that reveal exactly where your business is
                  leaking leads, revenue, and time — before you spend a dollar
                  on any tool.
                </p>
              </div>

              <p className="text-xs text-[color:var(--text-muted)] mt-3 text-center">
                We&rsquo;ll email this to {form.firstName} at {form.email}
              </p>

              {magnetError ? (
                <p
                  role="alert"
                  className="mt-4 text-xs text-[color:var(--error)]"
                >
                  {magnetError}
                </p>
              ) : null}

              <button
                type="button"
                onClick={handleMagnetClick}
                disabled={magnetSubmitting}
                aria-busy={magnetSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 mt-6 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {magnetSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : (
                  <>
                    Send me the guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </>
                )}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
