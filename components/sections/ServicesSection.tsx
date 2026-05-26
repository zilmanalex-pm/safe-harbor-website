// components/sections/ServicesSection.tsx — Safe Harbor
// Full services page: page headline + one section per service.
// Each service gets breathing room — not a bulleted list.

interface Service {
  slug: string
  name: string
  description: string
}

interface ServicesSectionProps {
  headline: string
  subheadline: string
  services: Service[]
}

export function ServicesSection({ headline, subheadline, services }: ServicesSectionProps) {
  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[800px] mx-auto px-lg">

        {/* Page header */}
        <div className="mb-3xl">
          <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15] mb-md">
            {headline}
          </h1>
          <p className="text-body text-text/70 leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* One block per service — generous whitespace between them */}
        <div className="flex flex-col gap-3xl">
          {services.map((service) => (
            <div
              key={service.slug}
              className="border-t border-neutral pt-2xl"
            >
              <h2 className="text-h2 font-medium text-text mb-md">
                {service.name}
              </h2>
              <p className="text-body text-text/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
