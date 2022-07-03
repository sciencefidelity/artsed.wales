import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { ClosedLockWithKey } from '../../components/twemoji'

export default {
	name: 'keystage',
	title: 'Key Stage',
	type: 'document',
	icon: ClosedLockWithKey,
	i18n,
	initialValue: {
		__i18n_lang: 'en',
		__i18n_refs: []
	},
	groups: [
		{
			name: 'content',
			title: 'Content'
		},
		{
			name: 'meta',
			title: 'Meta data'
		},
		{
			name: 'twitter',
			title: 'Twitter'
		},
		{
			name: 'facebook',
			title: 'Facebook'
		}
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'content'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			group: 'content'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: isUniqueLocale
			},
			group: 'content'
		},
		{
			name: 'meta',
			title: 'Meta data',
			type: 'metaData',
			group: 'meta'
		},
		{
			name: 'twitter',
			title: 'Twitter Card',
			type: 'twitterCard',
			group: 'twitter'
		},
		{
			name: 'facebook',
			title: 'Facebook Card',
			type: 'facebookCard',
			group: 'facebook'
		}
	],

	preview: {
		select: {
			title: 'title'
		},
		prepare({ title }) {
			return {
				title: title,
				media: ClosedLockWithKey
			}
		}
	}
}
