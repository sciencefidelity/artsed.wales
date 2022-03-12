export default {
  name: 'statement',
  title: 'Statement',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'statement',
      title: 'Statement',
      type: 'localeRichText'
    }
  ],

  preview: {
    select: {
      title: 'heading'
    }
  }
}
