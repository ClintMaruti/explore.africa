import { Block } from 'payload'

export const TwoColumnBlock: Block = {
  slug: 'twoColumnBlock',
  labels: {
    singular: 'Two Column Block',
    plural: 'Two Column Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description',
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Button Text',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Button URL',
        },
      ],
    },
    {
      name: 'reverse',
      type: 'checkbox',
      label: 'Reverse Column Order',
      defaultValue: false,
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
      label: 'Subheading',
    },
  ],
}
