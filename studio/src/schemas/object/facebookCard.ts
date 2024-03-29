import StringWithLimits from '../../components/StringWithLimits'
import { Rule } from '@sanity/types'

export default {
  name: 'facebookCard',
  title: 'Facebook Card',
  type: 'object',
  description: 'Customize Open Graph data',
  fields: [
    {
      name: 'image',
      title: 'Facebook image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Facebook title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) =>
        Rule.max(70).warning("Some text won't be visible.")
    },
    {
      name: 'description',
      title: 'Facebook Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.' // You’ve used 0
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
