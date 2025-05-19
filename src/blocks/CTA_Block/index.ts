import { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
    },
    {
      name: 'buttonLink',
      type: 'text',
    },
  ],
}
