export default {
  name: 'keystage',
  title: 'Key Stage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.cy',
    },
  },
}
