// sanity/schemas/index.ts — registers all schemas with Sanity Studio

import { sharedSchema }   from './shared'
import { homeSchema }     from './home'
import { aboutSchema }    from './about'
import { approachSchema } from './approach'
import { servicesSchema } from './services'
import { faqSchema }      from './faq'
import { contactSchema }  from './contact'

export const schemaTypes = [
  sharedSchema,
  homeSchema,
  aboutSchema,
  approachSchema,
  servicesSchema,
  faqSchema,
  contactSchema,
]
