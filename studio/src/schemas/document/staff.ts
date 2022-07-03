import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { WomanTeacher } from '../../components/twemoji'

export default {
	name: 'staff',
	title: 'Staff',
	type: 'document',
	icon: WomanTeacher,
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
			title: 'Name',
			type: 'string',
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
			name: 'role',
			title: 'Role',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'grid',
				list: [
					{ title: 'Author', value: 'Author' },
					{ title: 'Chair', value: 'Chair' },
					{ title: 'Co-ordinator', value: 'Co-ordinator' },
					{ title: 'Facilitator', value: 'Facilitator' },
					{ title: 'Trustee', value: 'Trustee' }
				]
			},
			validation: Rule => Rule.required(),
			group: 'content'
		},
		{
			name: 'job',
			title: 'Job',
			type: 'string',
			group: 'content'
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
			group: 'content'
		},
		{
			name: 'email',
			title: 'Email',
			type: 'email',
			group: 'content'
		},
		{
			name: 'avatar',
			title: 'Avatar',
			type: 'image',
			options: {
				hotspot: true
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
			title: 'title',
			role0: 'role.0',
			role1: 'role.1',
			role2: 'role.2',
			role3: 'role.3',
			media: 'avatar'
		},
		prepare: ({ title, role0, role1, role2, role3, media }) => {
			const roles = [role0, role1, role2].filter(Boolean)
			const subtitle = roles.length > 0 ? `${roles.join(', ')}` : ''
			const hasMoreRoles = Boolean(role3)
			return {
				title,
				subtitle: hasMoreRoles ? `${subtitle}…` : subtitle,
				media
			}
		}
	}
}
