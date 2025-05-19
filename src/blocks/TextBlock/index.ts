import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'textBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
    },
  ],
}
