'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/index'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'midnight-code',
  title: 'Midnight Code',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
})
