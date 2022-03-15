import React from 'react'

interface Selection {
  title?: string
  author?: string
}

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clip-rule="evenodd" d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z"></path>
    </svg>
  ),
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
