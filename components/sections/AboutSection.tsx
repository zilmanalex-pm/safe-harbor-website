// components/sections/AboutSection.tsx — Safe Harbor
//
// ROW 1: הגישה שלי (right, 50%) | רקע מקצועי (left, 50%) — equal height
// ROW 2: Tree (right, 35%) | Introduction text (left, 65%)
// ROW 3: Clinic photo — full-width landscape banner
// CLOSING: green sign-off line

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
    <article className="bg-background py-2xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg flex flex-col gap-xl">

        {/* ── ROW 1: הגישה שלי (right) | רקע מקצועי (left) — equal height ── */}
        <div className="flex flex-col md:flex-row gap-xl items-stretch">

          {/* הגישה שלי — first in DOM = RIGHT in RTL */}
          <div className="flex-1 rounded-card bg-surface border border-neutral/30 px-xl py-xl">
            <h2 className="text-[22px] font-semibold text-text mb-md">
              {approachHeadline}
            </h2>
            <p className="text-[17px] text-text/80 leading-[1.85]">
              {approach}
            </p>
          </div>

          {/* רקע מקצועי — second in DOM = LEFT in RTL */}
          <div className="flex-1 rounded-card bg-surface border border-neutral/30 px-xl py-xl">
            <h2 className="text-[22px] font-semibold text-text mb-md">
              {backgroundHeadline}
            </h2>
            <p className="text-[17px] text-text/80 leading-[1.85]">
              {background}
            </p>
          </div>

        </div>

        {/* ── ROW 2: Tree (right) + Introduction (left) ── */}
        <div className="flex flex-col md:flex-row gap-xl items-stretch">

          {/* Tree — first in DOM = RIGHT in RTL */}
          <div className="hidden md:block md:w-[35%] shrink-0 relative rounded-card overflow-hidden min-h-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tree1 - updated.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-50 pointer-events-none select-none"
            />
          </div>

          {/* Introduction — second in DOM = LEFT in RTL, fills 65% */}
          <div className="flex-1 rounded-card bg-surface border border-neutral/30 px-2xl py-2xl flex flex-col justify-center">
            <p className="text-[20px] text-text/80 leading-[1.9]">
              {opening}
            </p>
          </div>

        </div>

        {/* ── ROW 3: Two clinic photos side by side ── */}
        <div className="flex flex-col sm:flex-row gap-xl">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="flex-1 rounded-card bg-surface border border-dashed border-neutral/40 flex flex-col items-center justify-center gap-md min-h-[260px]"
            >
              <svg
                className="w-8 h-8 text-neutral/35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM3.75 19.5h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
              </svg>
              <span className="text-[14px] text-text/35 tracking-wide">תמונה של המרפאה</span>
            </div>
          ))}
        </div>

        {/* ── Closing — green sign-off ── */}
        <p className="text-[20px] font-medium text-primary leading-snug">
          {closing}
        </p>

      </div>
    </article>
  )
}
