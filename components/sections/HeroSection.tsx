// components/sections/HeroSection.tsx — Safe Harbor
// Hero: small bird watercolor above headline + Sofia's photo column.
// No background image — bird is a compact decorative element above the text.

import Image from 'next/image'

interface HeroSectionProps {
  headline: string
  nameplate?: string
  subheadline?: string  // optional, not rendered
  ctaLabel?: string     // optional, not rendered
  ctaHref?: string      // optional, not rendered
  photoAlt: string
}

export function HeroSection({
  headline,
  nameplate,
  photoAlt,
}: HeroSectionProps) {
  return (
    <section className="min-h-[90vh] flex items-center bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row gap-2xl items-center">

          {/* Text column */}
          <div className="flex-1 flex flex-col gap-md order-2 md:order-1 text-start">

            {/* Bird — decorative, above the headline */}
            <div className="w-[180px] h-[135px] relative" aria-hidden="true">
              <Image
                src="/images/bird1.png"
                alt=""
                fill
                className="object-contain object-start"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15]">
              {headline}
            </h1>

            {nameplate && (
              <p className="text-body text-text/70 whitespace-nowrap">
                {nameplate}
              </p>
            )}
          </div>

          {/* Photo column */}
          <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-card overflow-hidden bg-neutral">
              <Image
                src="/images/Sofia.jpeg"
                alt={photoAlt}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
