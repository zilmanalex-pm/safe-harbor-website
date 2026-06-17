// sanity/schemas/contact.ts — Contact page content

import { defineType, defineField } from 'sanity'

export const contactSchema = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  fields: [
    defineField({ name: 'locale',       title: 'Locale',                    type: 'string', readOnly: true }),
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title',       type: 'string', title: 'Page title' }),
        defineField({ name: 'description', type: 'text',   title: 'Meta description', rows: 2 }),
      ],
    }),
    defineField({ name: 'h1',           title: 'SEO h1 (hidden)',           type: 'string' }),
    defineField({ name: 'headline',     title: 'Page headline (visible)',    type: 'string' }),
    defineField({ name: 'whatsappLabel', title: 'WhatsApp button label',    type: 'string' }),
    defineField({ name: 'emailLabel',   title: 'Email label',               type: 'string' }),
    defineField({ name: 'phoneLabel',   title: 'Phone label',               type: 'string' }),
    defineField({ name: 'email',        title: 'Email address',             type: 'string' }),
    defineField({ name: 'phone',        title: 'Phone number (local format)', type: 'string' }),
  ],
  preview: {
    select: { title: 'headline', subtitle: 'locale' },
  },
})
