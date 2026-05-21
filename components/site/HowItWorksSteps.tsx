import { ProcessStep } from './ProcessStep'

// Numbered how-it-works steps. Each step renders as the shared ProcessStep
// component: keeps the visual language consistent with /, /about, /contact
// (same "01" / "02" badge format in accent blue).
export function HowItWorksSteps({
  steps,
}: {
  steps: { label: string; body: string }[]
}) {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
      {steps.map((step, i) => (
        <ProcessStep
          key={step.label}
          index={i + 1}
          title={step.label}
          body={step.body}
        />
      ))}
    </div>
  )
}
