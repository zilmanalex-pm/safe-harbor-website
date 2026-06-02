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
    defineField({ name: 'h1', title: 'Page H1 (name + title + location)', type: 'string' }),
    defineField({
      name: 'opening',
      title: 'Opening paragraph (personal story)',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string', title: 'Headline' }),
        defineField({ name: 'body', type: 'text', title: 'Text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'approach',
      title: 'How I work section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string', title: 'Headline' }),
        defineField({ name: 'quote',    type: 'text',   title: 'Opening quote', rows: 3 }),
        defineField({ name: 'body',     type: 'text',   title: 'Intro text', rows: 5 }),
        defineField({
          name: 'therapies',
          title: 'Therapy modalities',
          type: 'array',
          of: [defineField({
            name: 'therapy',
            type: 'object',
            fields: [
              defineField({ name: 'name', type: 'string', title: 'Therapy name (bold)' }),
              defineField({ name: 'body', type: 'text',   title: 'Description', rows: 3 }),
            ],
          })],
        }),
      ],
    }),
    defineField({
      name: 'background',
      title: 'Background & training section',
      type: 'object',
      fields: [
        defineField({ name: 'headline',  type: 'string', title: 'Headline' }),
        defineField({ name: 'body',      type: 'text',   title: 'Biographical text', rows: 8 }),
        defineField({ name: 'education', type: 'text',   title: 'Education credentials (one per line)', rows: 5 }),
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
