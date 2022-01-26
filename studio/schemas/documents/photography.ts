export default {
  name: 'photography',
  title: 'Photography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'image',
    },
  },
}
