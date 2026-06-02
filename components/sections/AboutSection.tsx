// components/sections/AboutSection.tsx — Safe Harbor
// Desktop: three columns — Background | Tree painting | Approach
// Mobile: two text blocks stacked, tree hidden

import Image from 'next/image'

interface Therapy {
  name: string
  body: string
}

interface AboutSectionProps {
  h1: string
  openingHeadline?: string
  opening?: string
  approachHeadline: string
  approachQuote?: string
  approach: string
  therapies?: Therapy[]
  backgroundHeadline: string
  background: string
  educationHeadline?: string
  education?: string
  closing: string
  photoAlt: string
}

export function AboutSection({
  h1,
  approachHeadline,
  approachQuote,
  approach,
  therapies,
  backgroundHeadline,
  background,
  educationHeadline,
  education,
  closing,
  photoAlt,
}: AboutSectionProps) {
  const educationItems = education
    ? education.split('\n').filter(Boolean)
    : []

  return (
    <article className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg flex flex-col gap-2xl">

        {/* h1 hidden visually — kept for SEO */}
        <h1 className="sr-only">{h1}</h1>

        {/* Desktop: Background | Tree | Approach — Mobile: stacked text only */}
        <div className="flex flex-col md:flex-row gap-xl md:items-stretch">

          {/* Background + education */}
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{backgroundHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85] whitespace-pre-line">{background}</p>

            {educationItems.length > 0 && (
              <div className="mt-md flex flex-col gap-xs">
                {educationHeadline && (
                  <h3 className="text-[17px] font-semibold text-text/60 uppercase tracking-wide mb-xs">{educationHeadline}</h3>
                )}
                <ul className="flex flex-col gap-xs list-none ps-0">
                  {educationItems.map((item, i) => (
                    <li key={i} className="text-[17px] text-text/75 leading-[1.7] flex gap-sm items-baseline">
                      <span className="text-primary shrink-0" aria-hidden="true">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tree painting — center column, desktop only */}
          <div className="hidden md:block relative w-[32%] shrink-0 rounded-card overflow-hidden bg-neutral/20">
            <Image
              src="/images/tree1.png"
              alt={photoAlt}
              fill
              className="object-cover object-center"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Approach + therapies */}
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{approachHeadline}</h2>

            {approachQuote && (
              <blockquote className="border-s-[3px] border-primary/40 ps-md my-sm">
                <p className="text-[1.15rem] font-semibold italic text-text/90 leading-[1.7]">
                  {approachQuote}
                </p>
              </blockquote>
            )}

            <p className="text-[18px] text-text/80 leading-[1.85] whitespace-pre-line">{approach}</p>

            {therapies && therapies.length > 0 && (
              <div className="flex flex-col gap-md mt-xs">
                {therapies.map((therapy, i) => (
                  <div key={i} className="flex flex-col gap-xs">
                    <p className="text-[18px] font-bold text-text leading-snug">{therapy.name}</p>
                    <p className="text-[17px] text-text/80 leading-[1.85]">{therapy.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Closing sign-off */}
        {closing ? (
          <p className="text-[20px] font-medium text-primary leading-relaxed whitespace-pre-line">{closing}</p>
        ) : null}

      </div>
    </article>
  )
}
