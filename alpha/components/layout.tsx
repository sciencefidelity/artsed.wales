import { FC, ReactNode } from "react"
import { BaseHead } from "components/baseHead"
import { Footer } from "components/footer"
import { Header } from "components/header"
import { Logos } from "components/logos"
import { SignUp } from "components/signUp"
import { SocialLinks } from "components/socialLinks"
import { Company, HeadProps, Label, Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
	children: ReactNode
	company: Company
	pageHead?: HeadProps
	labels: Label[]
	navigation: Navigation
	settings: Settings
}

export const Layout: FC<Props> = ({
	children,
	company,
	pageHead,
	labels,
	navigation,
	settings
}) => {
	return (
		<>
			<BaseHead pageHead={pageHead} settings={settings} />
			<Header labels={labels} navigation={navigation} settings={settings} />
			<main className={`${s.main}`}>{children}</main>
			<section className={u.container}>
				<SignUp labels={labels} />
				<SocialLinks settings={settings} />
				<hr />
				<Logos />
			</section>
			<Footer company={company} labels={labels} settings={settings} />
		</>
	)
}
