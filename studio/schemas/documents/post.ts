interface Selection {
  author: string
}

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
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
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeMarkdown'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'localeString',
      validation: Rule =>
        Rule.max(60).warning(`Only 60 characters will be visible.`)
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'localeString',
      validation: Rule =>
        Rule.max(65).warning(`Only 65 characters will be visible.`)
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
