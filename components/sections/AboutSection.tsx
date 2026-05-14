// components/sections/AboutSection.tsx — Safe Harbor
// Bio page layout: photo left + text right on desktop (mirrors in RTL).
// Mobile: photo on top, text below.
// This is typically the most-visited page — invest in the copy.

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
      <div className="w-full max-w-[1200px] mx-auto px-lg">

        {/* Top row: photo + opening paragraph */}
        <div className="flex flex-col md:flex-row gap-2xl items-start mb-2xl">

          {/* Photo — top on mobile, left on desktop LTR / right on desktop RTL */}
          <div className="w-full md:w-[380px] shrink-0 order-1 md:order-1">
            <div
              className="w-full aspect-[3/4] rounded-card overflow-hidden bg-neutral flex items-center justify-center"
              role="img"
              aria-label={photoAlt}
            >
              {/*
                Replace with Next.js <Image> when photo is ready:
                import Image from 'next/image'
                <Image src="/images/sonya-about.jpg" alt={photoAlt} fill className="object-cover object-top" priority />
              */}
              <span className="text-text/30 text-small select-none">
                [תמונה / Фото]
              </span>
            </div>
          </div>

          {/* Opening paragraph */}
          <div className="flex-1 order-2 md:order-2 flex flex-col justify-center">
            <p className="text-body text-text/80 leading-relaxed text-lg">
              {opening}
            </p>
          </div>

        </div>

        {/* Approach + Background — full width, stacked */}
        <div className="flex flex-col gap-2xl max-w-[720px]">

          <div>
            <h2 className="text-h2 font-medium text-text mb-md">
              {approachHeadline}
            </h2>
            <p className="text-body text-text/80 leading-relaxed">
              {approach}
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-medium text-text mb-md">
              {backgroundHeadline}
            </h2>
            <p className="text-body text-text/80 leading-relaxed">
              {background}
            </p>
          </div>

          {/* Closing — slightly larger, personal tone */}
          <p className="text-h3 font-medium text-primary leading-snug">
            {closing}
          </p>

        </div>

      </div>
    </article>
  )
}
