// components/sections/AboutSection.tsx — Safe Harbor
// Zigzag layout: Background (bird1) | Approach (ship1)
// Same card pattern as ServicesSection. Horizontal sections.

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
}: AboutSectionProps) {
  const educationItems = education
    ? education.split('\n').filter(Boolean)
    : []

  return (
    <article className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg flex flex-col gap-lg">

        {/* h1 hidden visually — kept for SEO */}
        <h1 className="sr-only">{h1}</h1>

        {/* CARD 1: Background — even index → text first (right in RTL), image second (left in RTL) */}
        <div className="flex flex-col md:flex-row items-stretch rounded-card overflow-hidden border border-neutral/40">
          <div className="flex-1 flex flex-col justify-center px-xl py-xl gap-sm">
            <h2 className="text-[20px] font-semibold text-primary">{backgroundHeadline}</h2>
            <p className="text-[16px] text-text/75 leading-[1.85] whitespace-pre-line">{background}</p>

            {educationItems.length > 0 && (
              <div className="mt-md flex flex-col gap-xs">
                {educationHeadline && (
                  <h3 className="text-[15px] font-semibold text-text/60 uppercase tracking-wide mb-xs">{educationHeadline}</h3>
                )}
                <ul className="flex flex-col gap-xs list-none ps-0">
                  {educationItems.map((item, i) => (
                    <li key={i} className="text-[15px] text-text/70 leading-[1.7] flex gap-sm items-baseline">
                      <span className="text-primary shrink-0" aria-hidden="true">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full md:w-[38%] shrink-0 min-h-[300px] bg-neutral/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bird1.png"
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '1.5rem' }}
            />
          </div>
        </div>

        {/* CARD 2: Approach — odd index → image first (right in RTL), text second (left in RTL) */}
        <div className="flex flex-col md:flex-row items-stretch rounded-card overflow-hidden border border-neutral/40">
          <div className="relative w-full md:w-[38%] shrink-0 min-h-[300px] order-2 md:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ship1.jpg"
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center px-xl py-xl gap-sm order-1 md:order-none">
            <h2 className="text-[20px] font-semibold text-primary">{approachHeadline}</h2>

            {approachQuote && (
              <blockquote className="border-s-[3px] border-primary/40 ps-md my-sm">
                <p className="text-[1.05rem] font-semibold italic text-text/90 leading-[1.7]">
                  {approachQuote}
                </p>
              </blockquote>
            )}

            <p className="text-[16px] text-text/75 leading-[1.85] whitespace-pre-line">{approach}</p>

            {therapies && therapies.length > 0 && (
              <div className="flex flex-col gap-md mt-xs">
                {therapies.map((therapy, i) => (
                  <div key={i} className="flex flex-col gap-xs">
                    <p className="text-[16px] font-bold text-text leading-snug">{therapy.name}</p>
                    <p className="text-[15px] text-text/75 leading-[1.85]">{therapy.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Closing sign-off */}
        {closing ? (
          <p className="text-[18px] font-medium text-primary leading-relaxed whitespace-pre-line px-sm">{closing}</p>
        ) : null}

      </div>
    </article>
  )
}
