import { MdOutlineAutoGraph } from 'react-icons/md'

export default {
  name: 'engagement',
  title: 'Engagement',
  type: 'document',
  icon: MdOutlineAutoGraph,
  i18n: {
    languages: [
      {
        id: 'ft'
      }
    ]
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'localeString'
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'heading.en',
      subtitle: 'count'
    }
  }
}
