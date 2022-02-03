import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { MapProps } from '../../components/Map'
import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations
    and photos when clicked."
        canonical="https://brutkasten.io"
        openGraph={{
          url: 'https://brutkasten.io',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked',
          images: [
            {
              url: './mg/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
