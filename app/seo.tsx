import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  url?: string
  keywords?: string[]
  author?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  url,
  keywords,
  author,
  ...rest
}: PageSEOProps): Metadata {
  const fullTitle = `${title} | ${siteMetadata.title}`
  const fullDesc = description || siteMetadata.description
  const fullUrl = url || `${siteMetadata.siteUrl}/`
  const fullImage = image || siteMetadata.socialBanner

  return {
    title: fullTitle,
    description: fullDesc,
    keywords: keywords || siteMetadata.keywords,
    authors: [{ name: author || siteMetadata.author }],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url: fullUrl,
      siteName: siteMetadata.title,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${title} preview image`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDesc,
      images: [fullImage],
      creator: siteMetadata.twitterHandle || '@' + siteMetadata.author,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    ...rest,
  }
}
