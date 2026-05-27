// sanity/schemas/contact.ts — Contact page content

import { defineType, defineField } from 'sanity'

export const contactSchema = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  fields: [
    defineField({ name: 'locale', title: 'Locale', type: 'string', readOnly: true }),
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title',       type: 'string', title: 'Page title' }),
        defineField({ name: 'description', type: 'text',   title: 'Meta description', rows: 2 }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'object',
      fields: [
        defineField({ name: 'body', type: 'text', title: 'Text', rows: 3 }),
      ],
    }),
    defineField({ name: 'responseTime', title: 'Response time note', type: 'string' }),
    defineField({
      name: 'form',
      title: 'Form labels',
      type: 'object',
      fields: [
        defineField({ name: 'nameLabel',      type: 'string', title: 'Name field label' }),
        defineField({ name: 'emailLabel',     type: 'string', title: 'Email field label' }),
        defineField({ name: 'phoneLabel',     type: 'string', title: 'Phone field label' }),
        defineField({ name: 'messageLabel',   type: 'string', title: 'Message field label' }),
        defineField({ name: 'submitLabel',    type: 'string', title: 'Submit button label' }),
        defineField({ name: 'successMessage', type: 'string', title: 'Success message' }),
        defineField({ name: 'errorMessage',   type: 'string', title: 'Error message' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'intro.body', subtitle: 'locale' },
  },
})
