// components/sections/ContactCTA.tsx — Safe Harbor
// Bottom-of-page conversion block. Warm background, centered, one clear action.
// No pressure language — warm and inviting, not urgent.

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ContactCTAProps {
  body: string
  buttonLabel: string
  buttonHref: string
}

export function ContactCTA({ body, buttonLabel, buttonHref }: ContactCTAProps) {
  return (
    <section className="bg-primary/10 py-3xl">
      <div className="w-full max-w-[720px] mx-auto px-lg flex flex-col items-center gap-lg text-center">
        <p className="text-h3 font-medium text-text leading-snug">
          {body}
        </p>
        <Button asChild size="lg">
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
