// components/sections/IntroSection.tsx — Safe Harbor
// A quiet, centered paragraph section that sets the tone between Hero and Services.
// Generous whitespace. No decoration. The text does the work.

interface IntroSectionProps {
  body: string
}

export function IntroSection({ body }: IntroSectionProps) {
  if (!body) return null
  return (
    <section className="bg-background py-2xl">
      <div className="w-full max-w-[720px] mx-auto px-lg">
        <p className="text-body text-text/80 leading-relaxed text-center">
          {body}
        </p>
      </div>
    </section>
  )
}
