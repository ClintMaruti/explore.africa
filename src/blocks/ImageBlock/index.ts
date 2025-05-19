import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'fullWidth',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
