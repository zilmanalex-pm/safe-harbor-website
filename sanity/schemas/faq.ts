// sanity/schemas/faq.ts — FAQ page content

import { defineType, defineField } from 'sanity'

export const faqSchema = defineType({
  name: 'faqPage',
  title: 'FAQ page',
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
    defineField({ name: 'headline', title: 'Page headline', type: 'string' }),
    defineField({
      name: 'categories',
      title: 'Question categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Category name' }),
            defineField({
              name: 'questions',
              title: 'Questions',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'question', type: 'string', title: 'Question' }),
                    defineField({ name: 'answer',   type: 'text',   title: 'Answer', rows: 4 }),
                  ],
                  preview: {
                    select: { title: 'question' },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: 'name' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'headline', subtitle: 'locale' },
  },
})
