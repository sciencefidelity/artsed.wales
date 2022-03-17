import { SpeechBalloon } from '../../components/twemoji'
// import { VscCommentDiscussion } from 'react-icons/vsc'

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: SpeechBalloon,
  i18n: {
    languages: [
      {
        title: 'fields',
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
    prepare(selection) {
      const { title, author } = selection
      return Object.assign({}, selection, {
        title: title && `Comment in: ${title}`,
        subtitle: author && `by ${author}`
      })
    }
  }
}
