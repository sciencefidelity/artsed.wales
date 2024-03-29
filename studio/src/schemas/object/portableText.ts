import {
  codeRender,
  emailRender,
  linkRender
} from '../../components/textComponents'
import { MdOutlineAddLink, MdOutlineAlternateEmail } from 'react-icons/md'
import { RiExternalLinkLine, RiHashtag } from 'react-icons/ri'

export default {
  title: 'Rich Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      options: { spellCheck: true },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Code',
            value: 'code',
            blockEditor: {
              render: codeRender
            }
          },
          { title: 'Date', value: 'date' }
        ],
        annotations: [
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'item',
                type: 'reference',
                to: [
                  { type: 'artform' },
                  { type: 'event' },
                  { type: 'keystage' },
                  { type: 'newsletter' },
                  { type: 'page' },
                  { type: 'post' },
                  { type: 'staff' },
                  { type: 'tag' },
                  { type: 'video' }
                ],
                options: {
                  filter: ({ document }) => {
                    const { __i18n_lang } = document
                    return {
                      filter: `__i18n_lang == '${__i18n_lang}'`
                    }
                  }
                }
              }
            ],
            blockEditor: {
              icon: MdOutlineAddLink,
              render: linkRender
            }
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'href',
                type: 'url'
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ],
            blockEditor: {
              icon: RiExternalLinkLine
            }
          },
          {
            title: 'Target',
            name: 'target',
            type: 'object',
            fields: [
              {
                name: 'target',
                type: 'string'
              }
            ],
            blockEditor: {
              icon: RiHashtag,
              render: linkRender
            }
          },
          {
            title: 'Email',
            name: 'mailto',
            type: 'object',
            fields: [
              {
                name: 'mailto',
                type: 'email'
              }
            ],
            blockEditor: {
              icon: MdOutlineAlternateEmail,
              render: emailRender
            }
          }
        ]
      }
    },
    {
      type: 'imageCaption'
    },
    {
      type: 'imageGroup'
    },
    {
      type: 'youtube'
    },
    {
      type: 'markdown'
    }
  ]
}
