import { setDefaultLogo } from '@/hooks/useDefaultLogo'
import { CollectionConfig } from 'payload'

const Footer: CollectionConfig = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  access: {
    read: () => true,
    // update: () => true,
    // create: () => true,
    // delete: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'email'],
  },
  // hooks: {
  //   beforeChange: [setDefaultLogo],
  // },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Footer Logo',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Footer Title',
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Info',
      fields: [
        {
          name: 'phones',
          type: 'array',
          label: 'Phone Numbers',
          fields: [
            {
              name: 'phone',
              type: 'text',
              required: true,
              label: 'Phone Number',
            },
          ],
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          label: 'Email',
        },
      ],
    },
    {
      name: 'partnerLogos',
      type: 'array',
      label: 'Partner Logos',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
        {
          name: 'alt',
          type: 'text',
          required: false,
          label: 'Alt Text',
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      required: true,
      label: 'Copyright Text',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon (e.g. fa-twitter, fa-facebook)',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
  ],
}

export default Footer
