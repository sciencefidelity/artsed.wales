import { MdOutlineAutoGraph } from 'react-icons/md'

export default {
  name: 'figure',
  title: 'Figure',
  type: 'document',
  icon: MdOutlineAutoGraph,
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
