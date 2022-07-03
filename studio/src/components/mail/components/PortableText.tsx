import React, { FC } from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'

interface Props {
	value: any
	components: PortableTextComponents
}

const PortableTextComponent: FC<Props> = ({ value, components }) => {
	return <PortableText value={value} components={components} />
}
export default PortableTextComponent
