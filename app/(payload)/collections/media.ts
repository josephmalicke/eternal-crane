import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'System',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  slug: 'media',
  upload: {
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
