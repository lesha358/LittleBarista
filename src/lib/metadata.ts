import { Metadata } from 'next'

type MetadataProps = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  path?: string
}

export function generateMetadata({
  title,
  description,
  image = '/images/logo.png',
  noIndex = false,
  path = '',
}: MetadataProps): Metadata {
  const baseUrl = 'https://littlebarista.ru'
  const url = path ? `${baseUrl}${path}` : baseUrl
  const defaultTitle = 'Little Barista - Кофейные мероприятия'
  const defaultDescription = 'Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональное кофейное оборудование и бариста для ваших событий.'

  return {
    metadataBase: new URL(baseUrl),
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    openGraph: {
      title: title ? `${title} | ${defaultTitle}` : defaultTitle,
      description: description || defaultDescription,
      url,
      siteName: 'Little Barista',
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title || defaultTitle,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${defaultTitle}` : defaultTitle,
      description: description || defaultDescription,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
} 