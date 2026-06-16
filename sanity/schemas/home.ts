// sanity/schemas/home.ts — Homepage content

import { defineType, defineField } from 'sanity'

export const homeSchema = defineType({
  name: 'homePage',
  title: 'Homepage',
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
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'object',
      fields: [
        defineField({ name: 'headline',  type: 'string', title: 'Main headline' }),
        defineField({ name: 'nameplate', type: 'text',   title: 'Nameplate — use \\n for line breaks', rows: 3 }),
        defineField({ name: 'photoAlt',  type: 'string', title: 'Photo alt text' }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'object',
      fields: [
        defineField({ name: 'body', type: 'text', title: 'Text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'trust',
      title: 'Trust bar',
      type: 'object',
      fields: [
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', type: 'string', title: 'Value (e.g. "10+")' }),
                defineField({ name: 'label', type: 'text',   title: 'Label — use \\n for line breaks', rows: 2 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA block',
      type: 'object',
      fields: [
        defineField({ name: 'body',        type: 'text',   title: 'Text', rows: 2 }),
        defineField({ name: 'buttonLabel', type: 'string', title: 'Button label' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.nameplate', subtitle: 'locale' },
  },
})
