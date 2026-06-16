// sanity.config.ts — Sanity Studio configuration
// Studio is embedded at /studio (see app/studio/[[...tool]]/page.tsx)

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'xmlbv2oe'
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name: 'safe-harbor',
  title: 'Safe Harbor — Content',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            S.listItem()
              .title('Homepage')
              .child(
                S.list()
                  .title('Homepage')
                  .items([
                    S.documentListItem().schemaType('homePage').id('homePage-he').title('Hebrew'),
                    S.documentListItem().schemaType('homePage').id('homePage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('About page')
              .child(
                S.list()
                  .title('About')
                  .items([
                    S.documentListItem().schemaType('aboutPage').id('aboutPage-he').title('Hebrew'),
                    S.documentListItem().schemaType('aboutPage').id('aboutPage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('Approach page')
              .child(
                S.list()
                  .title('Approach')
                  .items([
                    S.documentListItem().schemaType('approachPage').id('approachPage-he').title('Hebrew'),
                    S.documentListItem().schemaType('approachPage').id('approachPage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('Services page')
              .child(
                S.list()
                  .title('Services')
                  .items([
                    S.documentListItem().schemaType('servicesPage').id('servicesPage-he').title('Hebrew'),
                    S.documentListItem().schemaType('servicesPage').id('servicesPage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('FAQ page')
              .child(
                S.list()
                  .title('FAQ')
                  .items([
                    S.documentListItem().schemaType('faqPage').id('faqPage-he').title('Hebrew'),
                    S.documentListItem().schemaType('faqPage').id('faqPage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('Contact page')
              .child(
                S.list()
                  .title('Contact')
                  .items([
                    S.documentListItem().schemaType('contactPage').id('contactPage-he').title('Hebrew'),
                    S.documentListItem().schemaType('contactPage').id('contactPage-ru').title('Russian'),
                  ])
              ),
            S.listItem()
              .title('Navigation & Footer')
              .child(
                S.list()
                  .title('Shared')
                  .items([
                    S.documentListItem().schemaType('sharedContent').id('sharedContent-he').title('Hebrew'),
                    S.documentListItem().schemaType('sharedContent').id('sharedContent-ru').title('Russian'),
                  ])
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
