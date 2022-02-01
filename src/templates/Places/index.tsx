import Image from 'next/image'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }}></div>

      {place.gallery.map((image, index) => (
        <Image
          key={`photo-${index}`}
          src={image.url}
          alt={place.name}
          width={image.width}
          height={image.height}
        />
      ))}
    </>
  )
}
