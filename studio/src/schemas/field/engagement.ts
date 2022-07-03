import { BarChart } from '../../components/twemoji'

export default {
	name: 'engagement',
	title: 'Engagement',
	type: 'document',
	icon: BarChart,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'localeString'
		},
		{
			name: 'intro',
			title: 'Introduction',
			type: 'localeText'
		},
		{
			name: 'engagement',
			title: 'Engagement',
			type: 'array',
			of: [
				{
					name: 'engagement',
					title: 'Engagement',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'localeString'
						},
						{
							name: 'count',
							title: 'Count',
							type: 'number'
						}
					],
					preview: {
						select: {
							title: 'title.en',
							subtitle: 'count'
						},
						prepare({ title, subtitle }) {
							return {
								title: title,
								subtitle: subtitle,
								media: BarChart
							}
						}
					}
				}
			]
		}
	],
	preview: {
		select: {
			title: 'title.en'
		},
		prepare({ title }) {
			return {
				title: title,
				media: BarChart
			}
		}
	}
}
