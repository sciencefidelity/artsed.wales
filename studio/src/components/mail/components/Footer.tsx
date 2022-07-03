import React, { FC } from 'react'
import s from '../styles/Mail.module.css'

interface Props {
	data: any
	document: any
}

const year = new Date().getFullYear()

const Footer: FC<Props> = ({ data, document }) => {
	return (
		<table
			className={s.footer}
			// border="0"
			cellPadding="0"
			cellSpacing="0"
		>
			{data.newsletter.social && (
				<tr className={s.footerRowSocial}>
					<td className={s.footerDataSocial}>
						{data.newsletter.social.map(link => (
							<a href={link.url} key={link._key}>
								<img
									src={link.icon}
									className={s.imageSocial}
									alt={link.name}
									width="48"
									height="48"
								/>
							</a>
						))}
					</td>
				</tr>
			)}
			<tr className={s.footerRow}>
				<td className={s.footerData}>
					<p>
						&copy; {year} {data.company.title}
					</p>
					<p>
						{data.company.address.line1} &bull; {data.company.address.line2}{' '}
						&bull; {data.company.address.city} &bull;{' '}
						{data.company.address.postcode}
					</p>
					<p>
						{data.labels.change}
						<br />
						<a href="*|UNSUB|*">{data.labels.unsubscribe}</a>.
					</p>
				</td>
			</tr>
		</table>
	)
}
export default Footer
