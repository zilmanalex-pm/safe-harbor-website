// components/sections/FAQSection.tsx — Safe Harbor
// FAQ page using the Accordion component from Sprint 2.
// Questions focused on new-client hesitations, not clinical explanations.
// "use client" required — Accordion needs client-side JS for open/close animation.

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

interface FAQSectionProps {
  headline: string
  questions: FAQItem[]
}

export function FAQSection({ headline, questions }: FAQSectionProps) {
  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[720px] mx-auto px-lg">

        <h1 className="text-4xl md:text-h1 font-semibold text-text leading-[1.15] mb-3xl">
          {headline}
        </h1>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-neutral"
            >
              <AccordionTrigger className="text-body font-medium text-text text-start py-lg hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-text/75 leading-relaxed pb-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
