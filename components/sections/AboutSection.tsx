// components/sections/AboutSection.tsx — Safe Harbor
// Single row: Background+Education | Approach+Therapies | Tree painting (three equal columns)

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

        {/* Three columns: Background | Approach | Tree — all stretch to same height */}
        <div className="flex flex-col md:flex-row gap-xl items-stretch">

          {/* Background + education column */}
          <div className="flex-1 flex flex-col gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{backgroundHeadline}</h2>
            <p className="text-[18px] text-text/80 leading-[1.85] whitespace-pre-line">{background}</p>

            {educationItems.length > 0 && (
              <div className="mt-md flex flex-col gap-xs">
                {educationHeadline && (
                  <h3 className="text-[18px] font-semibold text-primary mb-xs">{educationHeadline}</h3>
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

          {/* Approach + therapies column */}
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

          {/* Tree painting column — stretches to full height of sibling columns */}
          <div className="relative flex-1 min-h-[480px] rounded-card overflow-hidden bg-neutral/30 hidden md:block">
            <Image
              src="/images/tree1.png"
              alt={photoAlt}
              fill
              className="object-cover object-center"
              style={{ mixBlendMode: 'multiply' }}
            />
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
