// components/sections/ContactSection.tsx — Safe Harbor
// Simple contact methods page: numbered list (WhatsApp, email, phone) + drawing placeholder.

interface ContactSectionProps {
  h1: string
  headline: string
  whatsappLabel: string
  emailLabel: string
  phoneLabel: string
  email: string
  phone: string
  whatsapp: string   // digits only, e.g. 972523777865
}

export function ContactSection({
  h1,
  headline,
  whatsappLabel,
  emailLabel,
  phoneLabel,
  email,
  phone,
  whatsapp,
}: ContactSectionProps) {
  const waHref    = `https://wa.me/${whatsapp}`
  const emailHref = `mailto:${email}`
  const telHref   = `tel:+972${phone.replace(/^0/, '')}`

  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">

        <h1 className="sr-only">{h1}</h1>

        <div className="flex flex-col md:flex-row gap-lg items-stretch">

          {/* Contact methods card */}
          <div className="flex-1 flex flex-col justify-center rounded-card border border-neutral/40 px-xl py-xl gap-xl">

            <p className="text-[24px] md:text-[32px] font-semibold text-primary leading-[1.15]">
              {headline}
            </p>

            <ol className="flex flex-col gap-lg list-none">

              {/* 1. WhatsApp */}
              <li className="flex items-center gap-md">
                <span className="text-text/35 font-medium text-[15px] shrink-0 w-5 select-none">1.</span>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-sm bg-primary text-white text-[15px] font-semibold px-lg py-sm rounded-pill hover:bg-primary/90 transition-colors"
                >
                  {whatsappLabel}
                </a>
              </li>

              {/* 2. Email */}
              <li className="flex items-center gap-md">
                <span className="text-text/35 font-medium text-[15px] shrink-0 w-5 select-none">2.</span>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[12px] font-semibold text-text/45 uppercase tracking-wide">{emailLabel}</span>
                  <a
                    href={emailHref}
                    className="text-[17px] text-primary hover:underline underline-offset-4 font-medium"
                    dir="ltr"
                  >
                    {email}
                  </a>
                </div>
              </li>

              {/* 3. Phone */}
              <li className="flex items-center gap-md">
                <span className="text-text/35 font-medium text-[15px] shrink-0 w-5 select-none">3.</span>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[12px] font-semibold text-text/45 uppercase tracking-wide">{phoneLabel}</span>
                  <a
                    href={telHref}
                    className="text-[17px] text-primary hover:underline underline-offset-4 font-medium"
                    dir="ltr"
                  >
                    {phone}
                  </a>
                </div>
              </li>

            </ol>
          </div>

          {/* Drawing placeholder */}
          <div className="relative w-full md:w-[40%] shrink-0 min-h-[320px] rounded-card border border-dashed border-neutral/60 flex items-center justify-center bg-neutral/5">
            <p className="text-[13px] text-text/30 select-none">drawing coming soon</p>
          </div>

        </div>
      </div>
    </section>
  )
}
