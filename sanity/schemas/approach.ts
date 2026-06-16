// sanity/schemas/approach.ts — Approach page content (גישות טיפוליות / Мои подходы)

import { defineType, defineField } from 'sanity'

export const approachSchema = defineType({
  name: 'approachPage',
  title: 'Approach page',
  type: 'document',
  fields: [
    defineField({ name: 'locale', title: 'Locale', type: 'string', readOnly: true }),
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title',       type: 'string', title: 'Page title (browser tab)' }),
        defineField({ name: 'description', type: 'text',   title: 'Meta description', rows: 2 }),
      ],
    }),
    defineField({ name: 'h1',       type: 'string', title: 'SEO h1 (hidden, for search engines)' }),
    defineField({ name: 'headline', type: 'string', title: 'Page headline (visible, sage green)' }),
    defineField({ name: 'quote',    type: 'text',   title: 'Opening quote', rows: 3 }),
    defineField({ name: 'body',     type: 'text',   title: 'Intro paragraph — use \\n for line breaks', rows: 5 }),
    defineField({
      name: 'therapies',
      title: 'Therapy approaches',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Approach name' }),
            defineField({ name: 'body', type: 'text',   title: 'Description', rows: 4 }),
          ],
        },
      ],
    }),
    defineField({ name: 'closing', type: 'text', title: 'Closing line (optional)', rows: 2 }),
  ],
  preview: {
    select: { title: 'headline', subtitle: 'locale' },
    prepare: ({ title, subtitle }) => ({
      title: title || 'Approach page',
      subtitle,
    }),
  },
})
