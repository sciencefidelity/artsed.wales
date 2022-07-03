export default {
	name: 'localeFacebook',
	title: 'Localized Facebook',
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
