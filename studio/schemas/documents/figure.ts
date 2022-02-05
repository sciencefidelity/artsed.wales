export default {
  name: 'figures',
  title: 'Figures',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number',
    }
  ],

  preview: {
    select: {
      title: 'heading.en',
      subtitle: 'count'
    }
  }
}
