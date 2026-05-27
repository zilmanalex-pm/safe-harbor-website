// sanity/schemas/about.ts — About page content

import { defineType, defineField } from 'sanity'

export const aboutSchema = defineType({
  name: 'aboutPage',
  title: 'About page',
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
      name: 'opening',
      title: 'Opening paragraph (personal story)',
      type: 'object',
      fields: [
        defineField({ name: 'body', type: 'text', title: 'Text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'approach',
      title: 'How I work section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string', title: 'Headline' }),
        defineField({ name: 'body',     type: 'text',   title: 'Text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'background',
      title: 'Education & background section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string', title: 'Headline' }),
        defineField({ name: 'body',     type: 'text',   title: 'Text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'closing',
      title: 'Closing paragraph',
      type: 'object',
      fields: [
        defineField({ name: 'body', type: 'text', title: 'Text', rows: 3 }),
      ],
    }),
    defineField({ name: 'photoAlt', title: 'Photo alt text', type: 'string' }),
  ],
  preview: {
    select: { title: 'approach.headline', subtitle: 'locale' },
  },
})
