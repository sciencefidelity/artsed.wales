import React from 'react'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { Remark } from 'react-remark'

const MarkdownPreview = ({ value }) => {
	return <Remark>{value.markdown}</Remark>
}
export default MarkdownPreview
