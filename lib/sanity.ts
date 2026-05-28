// lib/sanity.ts — Sanity client configuration
// Used by i18n.ts (content fetching) and any server components that need Sanity data.

import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'xmlbv2oe'
export const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
export const apiVersion = '2024-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'pro