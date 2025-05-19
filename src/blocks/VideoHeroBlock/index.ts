import { Block } from 'payload'

export const VideoHeroBlock: Block = {
  slug: 'videoHero',
  labels: {
    singular: 'Video Hero',
    plural: 'Video Heroes',
  },
  fields: [
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'overlayText',
      type: 'text',
    },
    {
      name: 'overlayTextSize',
      type: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    {
      name: 'textColor',
      type: 'select',
      options: ['white', 'black'],
      defaultValue: 'white',
    },
  ],
}
