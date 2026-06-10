// components/sections/HeroSection.tsx — Safe Harbor
// Hero: tree2 watercolor spans full section background (behind both columns).
// Nameplate (intro) is large + sage green, headline (saying) is smaller + black below it.

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
    <section className="min-h-[60vh] flex items-center bg-background py-2xl relative overflow-hidden">

      {/* Tree2 — full section background, visible behind both columns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/tree2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row gap-2xl items-center">

          {/* Text column */}
          <div className="flex-1 flex flex-col gap-md order-2 md:order-1 text-start">

            {/* Nameplate — large, sage green, comes first */}
            {nameplate && (
              <p className="text-[26px] md:text-[34px] font-semibold text-primary leading-snug whitespace-pre-line">
                {nameplate}
              </p>
            )}

            {/* Headline/saying — smaller, black, below nameplate */}
            {headline && (
              <h1 className="text-[20px] md:text-[26px] font-medium text-text leading-[1.4]">
                {headline}
              </h1>
            )}

          </div>

          {/* Photo column */}
          <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-card overflow-hidden bg-neutral">
              <Image
                src="/images/Sonya Final.jpeg"
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
