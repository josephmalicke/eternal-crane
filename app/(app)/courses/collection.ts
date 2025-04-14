import { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
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
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    
  ],
  slug: 'courses',
}
