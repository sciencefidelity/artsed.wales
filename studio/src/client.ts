import type {SanityClient} from '@sanity/client'
import sanityClient from 'part:@sanity/base/client'

const API_VERSION = '2021-06-07'

export const client: SanityClient =
  typeof sanityClient.withConfig === 'function'
    ? sanityClient.withConfig({apiVersion: API_VERSION})
    : sanityClient
