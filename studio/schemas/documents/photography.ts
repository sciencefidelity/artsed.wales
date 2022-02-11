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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'boolean'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'image'
    }
  }
}
