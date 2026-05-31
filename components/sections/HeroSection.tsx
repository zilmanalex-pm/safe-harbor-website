// components/sections/HeroSection.tsx — Safe Harbor
// Hero: bird watercolor background + Sofia's photo column.
// Bird image fills the entire section behind everything.
// Mobile: photo on top, text below. Desktop: text left (LTR) / right (RTL), photo right/left.

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface HeroSectionProps {
  headline: string
  nameplate?: string
  subheadline?: string   // kept optional for backward compat — not shown if absent
  ctaLabel: string
  ctaHref: string
  photoAlt: string
}

export function HeroSection({
  headline,
  nameplate,
  ctaLabel,
  ctaHref,
  photoAlt,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background py-3xl overflow-hidden">

      {/* Bird watercolor — full section background at low opacity */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/bird1.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.80]"
          style={{ mixBlendMode: 'multiply' }}
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row gap-2xl items-center">

          {/* Text column */}
          <div className="flex-1 flex flex-col gap-md order-2 md:order-1 text-start">
            <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15]">
              {headline}
            </h1>

            {/* Nameplate — byline below headline */}
            {nameplate && (
              <p className="text-small text-text/60 tracking-wide">
                {nameplate}
              </p>
            )}

            <Link href={ctaHref} className={cn(buttonVariants({ size: 'lg' }), 'self-start mt-sm')}>
              {ctaLabel}
            </Link>
          </div>

          {/* Photo column — larger than before */}
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
