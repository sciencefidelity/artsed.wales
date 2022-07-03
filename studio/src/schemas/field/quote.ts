import { Clipboard } from '../../components/twemoji'

export default {
	name: 'quote',
	title: 'Quote',
	type: 'document',
	icon: Clipboard,
	fields: [
		{
			name: 'quote',
			title: 'Quote',
			type: 'array',
			of: [
				{
					name: 'quote',
					title: 'Quote',
					type: 'object',
					fields: [
						{
							name: 'cite',
							title: 'Citation',
							type: 'string',
							description: 'Who is the quote by?'
						},
						{
							name: 'organisation',
							title: 'Organisation',
							type: 'localeString',
							description: 'Where do they work?'
						},
						{
							name: 'quote',
							title: 'Quote',
							type: 'localeText'
						},
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							options: {
								hotspot: true
							}
						}
					],
					preview: {
						select: {
							title: 'cite',
							subtitle: 'organisation.en'
						},
						prepare({ title, subtitle }) {
							return {
								title: title,
								subtitle: subtitle,
								media: Clipboard
							}
						}
					}
				}
			]
		}
	],
	preview: {
		select: {
			title: 'cite',
			subtitle: 'organisation.en'
		},
		prepare({ title, subtitle }) {
			return {
				title: title,
				subtitle: subtitle,
				media: Clipboard
			}
		}
	}
}
