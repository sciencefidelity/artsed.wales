import React from 'react'

export const codeRender = ({ children }) => (
  <code
    style={{
      color: '#ff79c6',
      backgroundColor: '#151719'
    }}
  >
    {children}
  </code>
)

export const emailRender = ({ children }) => (
  <span
    style={{
      color: '#7aa9f3',
      borderBottom: '1px solid #7aa9f3'
    }}
  >
    {children}
  </span>
)

export const linkRender = ({ children }) => (
  <span
    style={{
      color: '#7aa9f3',
      borderBottom: '1px solid #7aa9f3'
    }}
  >
    {children}
  </span>
)
