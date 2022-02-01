import client from 'graphql/client'
import {
  Get_Place_By_SlugQuery,
  Get_PlacesQuery
} from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Places'

const Place = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()
  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export const getStaticPaths = async () => {
  const { places } = await client.request<Get_PlacesQuery>(GET_PLACES, {
    first: 3
  })
  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<Get_Place_By_SlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}

export default Place
