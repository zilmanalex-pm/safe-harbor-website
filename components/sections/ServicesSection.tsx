// components/sections/ServicesSection.tsx — Safe Harbor
// Zig-zag layout: each service alternates image left/right.
// RTL-aware: even index = image first in DOM (RIGHT in RTL), odd = text first (RIGHT in RTL).
// Image col: 38% width. Text col: flex-1.


interface Service {
  slug: string
  name: string
  description: string
  image: string
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
        <div className="mb-3xl max-w-[720px]">
          <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15] mb-md">
            {headline}
          </h1>
          <p className="text-body text-text/70 leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Zig-zag rows */}
        <div className="flex flex-col gap-lg">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="flex flex-col md:flex-row items-stretch rounded-card overflow-hidden border border-neutral/40"
            >
              {i % 2 === 0 ? (
                // Even: image RIGHT in RTL (first in DOM), text LEFT
                <>
                  <div className="text-col flex-1 flex flex-col justify-center px-xl py-xl">
                    <h2 className="text-[20px] font-semibold text-text mb-sm">{service.name}</h2>
                    <p className="text-[16px] text-text/75 leading-[1.85]">{service.description}</p>
                  </div>
                  <div className="relative w-full md:w-[38%] shrink-0 min-h-[260px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </>
              ) : (
                // Odd: text RIGHT in RTL (first in DOM), image LEFT
                <>
                  <div className="relative w-full md:w-[38%] shrink-0 min-h-[260px] order-2 md:order-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="text-col flex-1 flex flex-col justify-center px-xl py-xl order-1 md:order-none">
                    <h2 className="text-[20px] font-semibold text-text mb-sm">{service.name}</h2>
                    <p className="text-[16px] text-text/75 leading-[1.85]">{service.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
