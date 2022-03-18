import { GetStaticProps } from "next"
import sanityClient from "../lib/sanityClient"
import { newsletterQuery } from "../lib/queries"
import Preheader from "components/Preheader"
import Header from "components/Header"
import Headline from "components/Headline"
import Body from "components/Body"
import Events from "components/Events"
import Footer from "components/Footer"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(newsletterQuery)
  return {
    props: { data }
  }
}


export default function Home({ data }) {
  const { cy, en } = data
  const locale = "en"
  return (
    <table
      className="container"
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr>
        <td valign="top">
          <Preheader en={en} />
          <Header en={en} />
          <Headline en={en} />
          <Body en={en} />
          <Events en={en} />
          <Footer en={en} />
        </td>
      </tr>
    </table>
  )
}
