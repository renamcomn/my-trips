import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GET_PAGES($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query GET_PAGE_BY_SLUG($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query GET_PLACES($first: Int) {
    places(first: $first) {
      id
      name
      slug
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        width
        height
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query GET_PLACE_BY_SLUG($slug: String!) {
    place(where: { slug: $slug }) {
      id
      name
      slug
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        url
        width
        height
      }
    }
  }
`
