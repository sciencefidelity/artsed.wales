import { WritingHand } from '../../components/twemoji'
// import { RiEdit2Line } from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: WritingHand,
  i18n: {
    base: 'en',
    languages: [
      {
        title: 'English',
        id: 'en'
      },
      {
        title: 'Welsh',
        id: 'cy'
      }
    ]
  },
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'staff' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'string'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'staff.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
