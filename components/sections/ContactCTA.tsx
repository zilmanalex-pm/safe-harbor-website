// components/sections/ContactCTA.tsx — Safe Harbor
// Bottom-of-page conversion block. Ship image removed per post-launch brief.
// WhatsApp is the only contact method.

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
    <section className="bg-primary/10 py-2xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col items-center gap-lg text-center">
          <p className="text-h3 font-medium text-text leading-snug max-w-xl">
            {body}
          </p>
          <Link href={buttonHref} className={cn(buttonVariants({ size: 'lg' }))}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
