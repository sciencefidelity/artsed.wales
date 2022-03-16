import { VscCommentDiscussion } from 'react-icons/vsc'

interface Selection {
  title?: string
  author?: string
}

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: VscCommentDiscussion,
  i18n: {
    languages: [
      {
        id: 'ft'
      }
    ]
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string'
    },
    {
      name: 'approved',
      title: 'Approve Comment',
      type: 'boolean'
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: { type: 'post' }
    }
  ],
  preview: {
    select: {
      title: 'post.title.en',
      author: 'name'
    },
    prepare(selection: Selection) {
      const { title, author } = selection
      return Object.assign({}, selection, {
        title: title && `Comment in: ${title}`,
        subtitle: author && `by ${author}`
      })
    }
  }
}
