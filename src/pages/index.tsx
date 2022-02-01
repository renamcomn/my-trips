import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { Get_PlacesQuery } from 'graphql/generated/graphql'
import { GetStaticProps } from 'next'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<Get_PlacesQuery>(GET_PLACES)
  return {
    props: {
      places
    }
  }
}
