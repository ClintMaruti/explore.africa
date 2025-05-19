import { Block } from 'payload'

export const MapEmbedBlock: Block = {
  slug: 'mapEmbed',
  fields: [
    {
      name: 'embedCode',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Paste the iframe or embed code for the map.',
      },
    },
  ],
}
