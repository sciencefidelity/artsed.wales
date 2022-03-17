import { WritingHand } from '../../components/twemoji'
// import { RiEdit2Line } from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: WritingHand,
  groups: [
    {
      name: 'post',
      title: 'Content'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook'
    }
  ],
  fields: [
    {
      name: 'mainImage',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'post'
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'post'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'post'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'post'
    },
    {
      name: 'anotherDate',
      title: 'Another date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'settings',
      title: 'Post settings',
      type: 'pageSettings',
      group: 'settings'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    },
    {
      name: 'feature',
      title: 'Feature this post',
      type: 'boolean',
      group: 'settings'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'settings.authors.0.name',
      author1: 'settings.authors.1.name',
      author2: 'settings.authors.2.name',
      author3: 'settings.authors.3.name',
      media: 'image'
    },
    prepare: ({ title, author0, author1, author2, author3, media }) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle,
        media
      }
    }
  }
}
