import { GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
import { Localize } from "components/localize"
import { fourohfourQuery } from "lib/queries"
import { Company, Label, Navigation, Settings } from "lib/interfaces"

interface Data {
  company: Company
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

interface Props {
  data: Data
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Data = await sanityClient.fetch(fourohfourQuery)
  return {
    props: { data },
  }
}

/**
 * Custom404: The 404 page
 * @param data - Data from the Sanity API
 * @returns The JSX Code for the Custom404 Page
 */
const Custom404: NextPage<Props> = ({ data }: Props) => {
  const { company, labels, navigation, settings } = data
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
          textAlign: "center",
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
