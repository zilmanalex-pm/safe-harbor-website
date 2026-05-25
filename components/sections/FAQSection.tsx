// components/sections/FAQSection.tsx — Safe Harbor
// Two-column layout: one column per category, side by side.
// Bird1 (no background) sits beside the headline as a decorative element.

'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  questions: FAQItem[]
}

interface FAQSectionProps {
  headline: string
  categories: FAQCategory[]
}

export function FAQSection({ headline, categories }: FAQSectionProps) {
  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[1100px] mx-auto px-lg">

        {/* Header row: headline + bird */}
        <div className="flex flex-row items-end justify-between mb-3xl gap-xl">
          <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15]">
            {headline}
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bird1.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block w-[160px] object-contain shrink-0 opacity-90 pointer-events-none select-none"
          />
        </div>

        {/* Two-column categories */}
        <div className="flex flex-col md:flex-row gap-2xl items-start">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="flex-1 min-w-0">

              {/* Category heading */}
              <h2 className="text-[17px] font-semibold text-primary mb-lg">
                {category.title}
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`cat-${catIndex}-item-${i}`}
                    className="border-b border-neutral"
                  >
                    <AccordionTrigger className="text-[20px] font-medium text-text text-start py-lg hover:no-underline hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[18px] text-text/75 leading-[1.85] pb-lg">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
