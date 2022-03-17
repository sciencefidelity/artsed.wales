import { BarChart } from '../../components/twemoji'

export default {
  name: 'engagement',
  title: 'Engagement',
  type: 'document',
  icon: BarChart,
  // i18n: {
  //   languages: [
  //     {
  //       title: 'fields',
  //       id: 'ft'
  //     }
  //   ]
  // },
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
