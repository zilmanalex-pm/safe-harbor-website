// components/sections/HeroSection.tsx — Safe Harbor
// Hero: tree2 watercolor filling the text-column background + Sofia's photo column.

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

          {/* Text column — tree2 as background watercolor */}
          <div className="flex-1 flex flex-col gap-md order-2 md:order-1 text-start relative min-h-[340px]">

            {/* Tree2 — fills the text column background with color */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <Image
                src="/images/tree2.png"
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text sits on top of the tree */}
            <div className="relative flex flex-col gap-md">
              <h1 className="text-[28px] md:text-[36px] font-semibold text-text leading-[1.2]">
                {headline}
              </h1>

              {nameplate && (
                <p className="text-[18px] md:text-[20px] font-semibold text-primary leading-snug">
                  {nameplate}
                </p>
              )}
            </div>
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
