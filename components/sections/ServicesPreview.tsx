// components/sections/ServicesPreview.tsx — Safe Harbor
// 2x2 card grid on desktop, single column on mobile.
// Uses Card component from Sprint 2.
// Section background uses warm neutral to create visual separation from hero.

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface Service {
  name: string
  description: string
}

interface ServicesPreviewProps {
  services: Service[]
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="bg-neutral/40 py-2xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">

        {/* Section title — Sprint 4 will add a proper heading from content JSON */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {services.map((service, i) => (
            <Card key={i} className="hover:border-primary/40 transition-colors duration-200">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-text/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
