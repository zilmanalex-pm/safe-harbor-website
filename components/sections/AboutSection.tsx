// components/sections/AboutSection.tsx — Safe Harbor
// Three-row about page layout:
// ROW 1: Approach (right in RTL) | Background (left in RTL)
// ROW 2: Tree painting (right, 35%) | Opening intro text (left, 65%)
// CLOSING: green sign-off line

import Image from 'next/image'

interface AboutSectionProps {
  h1: string
  openingHeadline: string
  opening: string
  approachHeadline: string
  approachQuote?: string
  approach: string
  backgroundHeadline: string
  background: string
  closing: string
  photoAlt: string
}

export function AboutSection({
  h1,
  openingHeadline,
  opening,
  approachHeadline,
  approachQuote,
  approach,
  backgroundHeadline,
  background,
  closing,
  photoAlt,
}: AboutSectionProps) {
  return (
    <article className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg flex flex-col gap-2xl">

        {/* h1 hidden visually — kept for SEO */}
        <h1 className="sr-only">{h1}</h1>

        {/* ROW 1: Approach (right in RTL) | Background (left in RTL) */}
        <div className="flex flex-col md:flex-row gap-xl">
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{backgroundHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85]">{background}</p>
          </div>
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{approachHeadline}</h2>
            {approachQuote && (
              <blockquote className="border-s-[3px] border-primary/40 ps-md my-sm">
                <p className="text-[1.25rem] font-semibold italic text-text/90 leading-[1.7]">
                  {approachQuote}
                </p>
              </blockquote>
            )}
            <p className="text-[18px] text-text/80 leading-[1.85]">{approach}</p>
          </div>
        </div>

        {/* ROW 2: Tree painting (right, 35%) | Opening intro text (left, 65%) */}
        <div className="flex flex-col md:flex-row gap-xl items-stretch">
          <div className="flex-1 flex flex-col justify-center gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{openingHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85]">{opening}</p>
          </div>
          <div className="relative w-full md:w-[35%] shrink-0 min-h-[340px] rounded-card overflow-hidden bg-neutral/30">
            <Image
              src="/images/tree1.png"
              alt={photoAlt}
              fill
              className="object-cover object-center"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* Closing sign-off — each sentence on its own line */}
                <p className="text-[20px] font-medium text-primary leading-relaxed whitespace-pre-line">{closing}</p>

      </div>
    </article>
  )
}
