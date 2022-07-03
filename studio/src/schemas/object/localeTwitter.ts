export default {
	name: 'localeTwitter',
	title: 'Localized Twitter',
	type: 'object',
	fieldsets: [
		{
			title: 'Translations',
			name: 'translations'
		}
	],

	fields: [
		{
			title: 'English',
			name: 'en',
			type: 'twitterCard'
		},
		{
			title: 'Welsh',
			name: 'cy',
			type: 'twitterCard'
		}
	]
}
