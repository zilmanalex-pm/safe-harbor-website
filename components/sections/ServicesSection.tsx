// components/sections/ServicesSection.tsx — Safe Harbor
//
// Zig-zag layout: each service alternates image side.
// RTL: first in DOM = visually RIGHT. Even rows → image first (right). Odd rows → text first (right).
// Image column: 45%, rounded card, object-cover.
// Text column: 55%, white card, vertically centered.

interface Service {
  slug: string
  image: string
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
      <div className="w-full max-w-[1200px] mx-auto px-lg">

        {/* Page header */}
        <div className="mb-3xl">
          <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15] mb-md">
            {headline}
          </h1>
          <p className="text-body text-text/70 leading-relaxed max-w-[600px]">
            {subheadline}
          </p>
        </div>

        {/* Zig-zag service rows */}
        <div className="flex flex-col gap-lg">
          {services.map((service, index) => {
            const imageFirst = index % 2 === 0 // even → image RIGHT (first in DOM in RTL)

            const imageCol = (
              <div className="w-full md:w-[38%] shrink-0 rounded-card overflow-hidden min-h-[260px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            )

            const textCol = (
              <div className="flex-1 rounded-card bg-surface border border-neutral/30 px-xl py-xl flex flex-col justify-center gap-sm">
                <h2 className="text-[20px] font-semibold text-text leading-snug">
                  {service.name}
                </h2>
                <p className="text-[16px] text-text/80 leading-[1.8]">
                  {service.description}
                </p>
              </div>
            )

            return (
              <div
                key={service.slug}
                className="flex flex-col md:flex-row gap-xl items-stretch"
              >
                {imageFirst ? (
                  // Even: image RIGHT, text LEFT (RTL: image first in DOM)
                  <>{imageCol}{textCol}</>
                ) : (
                  // Odd: text RIGHT, image LEFT (RTL: text first in DOM)
                  <>{textCol}{imageCol}</>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
