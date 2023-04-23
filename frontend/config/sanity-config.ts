import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  title: 'Planet Sanity Studio',

  projectId: 'v0tnvh1n',
  dataset: 'production',
  apiVersion: '2023-04-23',
  basePath: '/studio',

  plugins: [deskTool()],
})
