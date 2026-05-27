// sanity/schemas/services.ts — Services page content

import { defineType, defineField } from 'sanity'

export const servicesSchema = defineType({
  name: 'servicesPage',
  title: 'Services page',
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
    defineField({ name: 'headline',    title: 'Page headline',    type: 'string' }),
    defineField({ name: 'subheadline', title: 'Page subheadline', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Service blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'slug',        type: 'string', title: 'Slug (do not change)', readOnly: false }),
            defineField({ name: 'name',        type: 'string', title: 'Service name' }),
            defineField({ name: 'description', type: 'text',   title: 'Description', rows: 5 }),
            defineField({ name: 'image',       type: 'string', title: 'Image path (e.g. /images/bird3.jpg)' }),
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
