// components/sections/FAQSection.tsx — Safe Harbor
// Two-column category layout. Each category has its own accordion.
// Header row: headline + bird watercolor image.
// 'use client' required for Accordion open/close.

'use client'

import Image from 'next/image'
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
  name: string
  questions: FAQItem[]
}

interface FAQSectionProps {
  headline: string
  categories: FAQCategory[]
}

export function FAQSection({ headline, categories }: FAQSectionProps) {
  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">

        {/* Header row: headline + bird image */}
        <div className="flex flex-row items-end justify-between mb-3xl gap-lg">
          <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15]">
            {headline}
          </h1>
          <div className="shrink-0 w-[240px] h-[180px] relative opacity-90">
            <Image
              src="/images/cat.png"
              alt=""
              fill
              className="object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Two-column categories */}
        <div className="flex flex-col md:flex-row gap-2xl items-start">
          {categories.map((category, ci) => (
            <div key={ci} className="flex-1">
              <h2 className="text-[17px] font-semibold text-primary mb-lg">
                {category.name}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qi) => (
                  <AccordionItem
                    key={qi}
                    value={`cat-${ci}-q-${qi}`}
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
