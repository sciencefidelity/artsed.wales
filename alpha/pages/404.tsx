import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
import { Localize } from "components/localize"
import { fourohfourQuery } from "lib/queries"
import { Company, Label, Navigation, Settings } from "lib/interfaces"

export const getStaticProps: GetStaticProps = async () => {
	const data = await sanityClient.fetch(fourohfourQuery)
	return {
		props: { data }
	}
}

const Custom404 = ({ data }) => {
	const { company, labels, navigation, settings } = data as {
		company: Company
		labels: Label[]
		navigation: Navigation
		settings: Settings
	}
	return (
		<Layout
			company={company}
			labels={labels}
			navigation={navigation}
			settings={settings}
		>
			<div
				className="container"
				style={{
					height: "100vh",
					display: "grid",
					textAlign: "center"
				}}
			>
				<div style={{ margin: "auto" }}>
					<h1 style={{ fontSize: "3rem", fontWeight: 600 }}>
						<Localize data={labels[28].text} />
					</h1>
					<p>
						<Localize data={labels[29].text} />
					</p>
				</div>
			</div>
		</Layout>
	)
}
export default Custom404
