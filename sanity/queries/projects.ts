import { defineQuery } from 'next-sanity'

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    image,
    description,
    liveUrl,
    featured,
    order
  }
`)

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    image,
    description,
    liveUrl
  }
`)

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    description,
    liveUrl
  }
`)

export const ALL_PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project"] {
    "slug": slug.current
  }
`)
