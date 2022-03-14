export default {
  name: 'facilitator',
  title: 'Facilitator',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlugNames',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'localeRichText'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}