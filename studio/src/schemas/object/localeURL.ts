export default {
	name: 'localeURL',
	title: 'Localized URL',
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
			type: 'url'
		},
		{
			title: 'Welsh',
			name: 'cy',
			type: 'url'
		}
	]
}
