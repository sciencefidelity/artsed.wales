import React, { FC } from 'react'
import format from 'date-fns/format'
import { urlFor } from '../../../lib/utils'
import s from '../styles/Mail.module.css'

interface Props {
	data: any
	document: any
}

const Events: FC<Props> = ({ data, document }) => (
	<table
		className={s.events}
		// border="0"
		cellPadding="0"
		cellSpacing="0"
	>
		<tr className={s.eventsRow}>
			<td className={s.eventsData}>
				{data.newsletter.events.map(event => (
					<table
						className={s.event}
						// border="0"
						cellPadding="0"
						cellSpacing="0"
						key={event._id}
					>
						<tr className={s.eventRow}>
							<th className={s.eventHead}>
								<a href={event.britelink}>
									<img
										src={urlFor(event.mainImage)
											.auto('format')
											.width(600)
											.height(400)
											.quality(80)
											.url()}
										className={s.imageInset}
										alt={event.title}
										width="300"
										height="200"
									/>
								</a>
								<time
									dateTime={format(new Date(event.dateStart), 'yyyy-MM-dd')}
								>
									{format(new Date(event.dateStart), 'd MMMM yyyy, k:mm')}
								</time>
								<h2>{event.title}</h2>
								<p>{event.summary}</p>
								<p>
									<a href={event.britelink}>{data.labels.register}</a>
								</p>
							</th>
						</tr>
					</table>
				))}
			</td>
		</tr>
	</table>
)
export default Events
