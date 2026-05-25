// components/sections/HeroSection.tsx — Safe Harbor
// Hero: two-column layout (text + photo), RTL-aware, mobile-first.
// Mobile: photo on top, text below.
// Desktop LTR: text left, photo right.
// Desktop RTL: text right, photo left (flex-row reverses naturally with dir="rtl").

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  photoAlt: string
}

export function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  photoAlt,
}: HeroSectionProps) {
  return (
    <section className="relative flex items-center bg-background py-2xl overflow-hidden">

      {/* Background drawing — tree in fog, full hero width, decorative only */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/tree2.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          priority={false}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row gap-2xl items-stretch">

          {/* Text column — appears below photo on mobile (order-2), left on desktop LTR */}
          <div className="flex-1 flex flex-col gap-md order-2 md:order-1 text-start justify-center">
            <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15]">
              {headline}
            </h1>
            <p className="text-body text-text/70 max-w-md leading-relaxed">
              {subheadline}
            </p>
            <div className="mt-sm">
              <Link href={ctaHref} className={cn(buttonVariants({ size: 'default' }), 'self-start')}>
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* Photo column — appears on top on mobile (order-1), right on desktop LTR */}
          <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-card overflow-hidden bg-neutral">
              <Image
                src="/images/sofia-hero.jpg"
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
