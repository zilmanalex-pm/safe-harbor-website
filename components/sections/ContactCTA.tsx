// components/sections/ContactCTA.tsx — Safe Harbor
// Bottom-of-page conversion block. Warm background, centered, one clear action.
// No pressure language — warm and inviting, not urgent.

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactCTAProps {
  body: string
  buttonLabel: string
  buttonHref: string
}

export function ContactCTA({ body, buttonLabel, buttonHref }: ContactCTAProps) {
  return (
    <section className="bg-primary/10 py-2xl overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row items-center gap-2xl">

          {/* Painting — desktop only, decorative */}
          <div className="hidden md:block flex-1" aria-hidden="true">
            <div className="relative w-full aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="/images/pair.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div className="flex-1 flex flex-col items-center gap-lg text-center">
            <p className="text-h3 font-medium text-text leading-snug">
              {body}
            </p>
            <Link href={buttonHref} className={cn(buttonVariants({ size: 'lg' }))}>
              {buttonLabel}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
