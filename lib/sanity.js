import { deskTool } from 'sanity/desk';
import { schemaTypes } from '../sanity/schemas'
import createImageUrlBuilder from '@sanity/image-url'
import {createClient} from 'next-sanity'

export const config = {
    name:"default",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date 
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
}

export const sanityClient = createClient(config)

export const urlFor=(source)=> createImageUrlBuilder(config).image(source)