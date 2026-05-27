'use client'
// Sets lang, dir, and body className on the document element after mount.
// Needed because the root layout owns <html> and <body>, but locale-specific
// attributes (lang, dir, font class) are only known inside [locale]/layout.tsx.
import { useEffect } from 'react'

interface LocaleSetterProps {
  locale: string
  dir: 'ltr' | 'rtl'
  bodyClass: string
  htmlClass: string
}

export function LocaleSetter({ locale, dir, bodyClass, htmlClass }: LocaleSetterProps) {
  useEffect(() => {
    const html = document.documentElement
    html.lang = locale
    html.dir = dir
    html.className = htmlClass
    document.body.className = bodyClass
  }, [locale, dir, bodyClass, htmlClass])
  return null
}
