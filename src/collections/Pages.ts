import { CTABlock } from '@/blocks/CTA_Block'
import { GalleryBlock } from '@/blocks/GalleryBlock/GalleryBlock'
import { HeroBlock } from '@/blocks/HeroBlock'
import { ImageBlock } from '@/blocks/ImageBlock'
import { MapEmbedBlock } from '@/blocks/MapEmbedBlock'
import { TextBlock } from '@/blocks/TextBlock'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media', // Ensure you have a media collection
    },
    {
      name: 'footerBackground',
      type: 'upload',
      relationTo: 'media',
      label: 'Footer Background Image',
      required: false, // or true if you want to enforce it
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock,
        TextBlock,
        ImageBlock,
        GalleryBlock,
        CTABlock,
        MapEmbedBlock,
        TwoColumnBlock,
      ],
    },
  ],
}
