import { FaMarkdown } from 'react-icons/fa'
import MarkdownPreview from '../../components/MarkdownPreview'

export default {
	name: 'markdown',
	type: 'object',
	title: 'Markdown',
	icon: FaMarkdown,
	fields: [
		{
			name: 'markdown',
			type: 'text',
			title: 'Markdown'
		}
	],
	preview: {
		select: {
			markdown: 'markdown'
		},
		component: MarkdownPreview
	}
}
