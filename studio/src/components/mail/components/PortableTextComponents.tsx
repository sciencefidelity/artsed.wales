import React from 'react'
import { PortableTextComponents } from '@portabletext/react'

export const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      )
    }
  }
}
