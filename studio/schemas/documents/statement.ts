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
      type: 'localeMarkdown'
    }
  ],

  preview: {
    select: {
      title: 'heading'
    }
  }
}
