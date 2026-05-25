// components/sections/ServicesPreview.tsx — Safe Harbor
// Audience strip: who Sofia works with — children, teenagers, adults.
// Three items in a horizontal row, no white cards, on the neutral background.

interface AudienceItem {
  label: string
  range: string
}

interface ServicesPreviewProps {
  audience: AudienceItem[]
}

export function ServicesPreview({ audience }: ServicesPreviewProps) {
  return (
    <section className="bg-neutral/60 py-2xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-xl sm:gap-0">
          {audience.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center text-center gap-xs px-xl"
            >
              <span className="text-[19px] font-semibold text-text">
                {item.label}
              </span>
              <span className="text-[15px] text-text/55 leading-snug">
                {item.range}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
