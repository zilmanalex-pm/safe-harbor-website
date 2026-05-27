// sanity/schemas/shared.ts — nav, footer, site-wide strings

import { defineType, defineField } from 'sanity'

export const sharedSchema = defineType({
  name: 'sharedContent',
  title: 'Shared / Navigation',
  type: 'document',
  fields: [
    defineField({ name: 'locale', title: 'Locale', type: 'string', readOnly: true }),
    defineField({ name: 'siteName', title: 'Site name', type: 'string' }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Digits only, no + sign. E.g. 972523777865',
    }),
    defineField({
      name: 'nav',
      title: 'Navigation labels',
      type: 'object',
      fields: [
        defineField({ name: 'home',     type: 'string', title: 'Home' }),
        defineField({ name: 'about',    type: 'string', title: 'About' }),
        defineField({ name: 'services', type: 'string', title: 'Services' }),
        defineField({ name: 'faq',      type: 'string', title: 'FAQ' }),
        defineField({ name: 'contact',  type: 'string', title: 'Contact' }),
        defineField({ name: 'cta',      type: 'string', title: 'Header CTA button' }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'tagline',   type: 'string', title: 'Tagline' }),
        defineField({ name: 'copyright', type: 'string', title: 'Copyright text' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'siteName', subtitle: 'locale' },
  },
})
