// components/sections/AboutSection.tsx — Safe Harbor
// Three-row about page layout:
// ROW 1: הגישה שלי (right col) | רקע מקצועי (left col) — equal height flex row
// ROW 2: Tree painting (right, 35%) | Introduction text (left, 65%)
// ROW 3: Two clinic photo placeholders side by side
// CLOSING: green sign-off line
// RTL: last DOM element = visually LEFT in RTL flex row

import Image from 'next/image'

interface AboutSectionProps {
  opening: string
  approachHeadline: string
  approach: string
  backgroundHeadline: string
  background: string
  closing: string
  photoAlt: string
}

export function AboutSection({
  opening,
  approachHeadline,
  approach,
  backgroundHeadline,
  background,
  closing,
  photoAlt,
}: AboutSectionProps) {
  return (
    <article className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg flex flex-col gap-2xl">

        {/* ROW 1: Approach (right in RTL) | Background (left in RTL) */}
        {/* In RTL flex-row: last DOM child = visually LEFT */}
        <div className="flex flex-col md:flex-row gap-xl">

          {/* Background — LEFT visually in RTL (last in DOM) */}
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{backgroundHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85]">{background}</p>
          </div>

          {/* Approach — RIGHT visually in RTL (first in DOM) */}
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{approachHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85]">{approach}</p>
          </div>

        </div>

        {/* ROW 2: Tree painting (right, 35%) | Opening intro text (left, 65%) */}
        {/* In RTL: last DOM child = LEFT visually — so intro text is last */}
        <div className="flex flex-col md:flex-row gap-xl items-stretch">

          {/* Intro text — LEFT visually in RTL (last in DOM) */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[18px] text-text/80 leading-[1.85]">{opening}</p>
          </div>

          {/* Tree painting — RIGHT visually in RTL (first in DOM), 35% width */}
          <div className="relative w-full md:w-[35%] shrink-0 min-h-[340px] rounded-card overflow-hidden bg-neutral/30">
            <Image
              src="/images/tree1.png"
              alt={photoAlt}
              fill
              className="object-cover object-center"
            />
          </div>

        </div>

        {/* ROW 3: Two clinic photo placeholders side by side */}
        <div className="flex flex-col md:flex-row gap-xl">
          <div className="flex-1 min-h-[260px] rounded-card border-2 border-dashed border-neutral flex items-center justify-center text-text/30 text-sm">
            תמונת קליניקה
          </div>
          <div className="flex-1 min-h-[260px] rounded-card border-2 border-dashed border-neutral flex items-center justify-center text-text/30 text-sm">
            תמונת קליניקה
          </div>
        </div>

        {/* Closing sign-off */}
        <p className="text-[20px] font-medium text-primary leading-snug">
          {closing}
        </p>

      </div>
    </article>
  )
}
