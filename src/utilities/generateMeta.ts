import type { Metadata } from 'next'

import type { Media, Page, Config, Header } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getUrl'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Header> | null
}): Promise<Metadata> => {
  const { doc } = args

  let ogImage: string | undefined = undefined
  let title: string | undefined = undefined
  let description: string | undefined = undefined
  let url: string = '/'

  if (doc) {
    // If doc is a Page (has 'seo' or 'excerpt' or 'slug')
    if ('seo' in doc && doc.seo && typeof doc.seo === 'object') {
      if ('ogImage' in doc.seo && doc.seo.ogImage && typeof doc.seo.ogImage === 'object') {
        ogImage = (doc.seo.ogImage as any)?.url || undefined
      }
      description = doc.seo.metaDescription || (doc as any).excerpt || ''
    } else {
      // Fallback for Header or other types
      description = (doc as any).excerpt || ''
    }

    if ('title' in doc) {
      title = doc.title
    }

    if ('slug' in doc) {
      url = Array.isArray(doc.slug) ? doc.slug.join('/') : `/${doc.slug}`
    }
  }

  return {
    description,
    openGraph: mergeOpenGraph({
      description,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url,
    }),
    title,
  }
}
