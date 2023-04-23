import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Planet Sanity Studio',

  projectId: 'v0tnvh1n',
  dataset: 'production',
  apiVersion: '2023-04-23',
  basePath: '/studio',

  plugins: [deskTool({
    structure: (S) => {
      return S.list()
      .title('Base')
      .items([
        S.listItem()
        .title('Hero')
        .child(
          S.document()
          .schemaType('hero')
          .documentId('hero')),
        S.listItem()
        .title('CTA')
        .child(
          S.document()
          .schemaType('cta')
          .documentId('cta')),
        S.listItem()
        .title('Content Sections')
        .child(
          S.document()
          .schemaType('contentSections')
          .documentId('contentSections')),
        ...S.documentTypeListItems().filter(listItem => !['hero', 'cta', 'contentSections'].includes(listItem.getId()!)),
      ])
    }
  })],

  schema: {
    types: schemaTypes,
  },
})
