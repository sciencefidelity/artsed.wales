import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import ReactPlayer from "react-player"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Markdown from "components/markdown"
import QuoteCard from "components/quoteCard"
import SignUp from "components/signUp"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Home = ({ data }: { data: IndexData }) => {
  const { locale } = useRouter()
  const { hero, photography, quotes, site, statements, video } = data
  const heroTitle = localize(hero.title, locale)
  return (
    <Layout
      site={site}
    >
      <div
        className={`${u.grid} ${u.mbLarge}`}
        style={{ gridTemplateColumns: "43% 55%", gap: "3rem" }}
      >
        <div className={s.heroContainer}>
          <img
            src={urlFor(hero.image)
              .auto("format")
              .width(900)
              .height(900)
              .quality(85)
              .url()}
            width={900}
            height={1100}
            alt={heroTitle}
            className={s.hero}
            loading="lazy"
          />
          <div className={`${s.heroCaption} ${u.sans} ${u.uppercase}`}>
            {heroTitle}
          </div>
        </div>
        <div>
          <div
            className={`${s.intro} ${u.serif} ${u.fgDark}`}
            style={{ marginTop: "3rem" }}
          >
            <Markdown content={statements[0].statement} />
          </div>
          <div style={{ marginTop: "6rem" }}>
            <Markdown content={statements[12].statement} />
          </div>
          <div>
            <Markdown content={statements[3].statement} />
          </div>
        </div>
      </div>
      <div className={`${s.video} ${u.mbLarge} ${u.center}`}>
        <ReactPlayer
          url={video.videoLink}
          width={"100%"}
          height={"auto"}
          light={true}
          style={{
            border: "2px solid var(--foreground)",
            aspectRatio: "16 / 9"
          }}
        />
        <div className={`${s.heroCaption} ${u.sans} ${u.uppercase}`}>
          {video.title.en}
        </div>
      </div>
      <section className={`${u.mbLarge} ${u.grid}`} style={{
        gridTemplateColumns: "auto auto",
        gridAutoRows: "1fr",
        gap: "2rem"
      }}>
        <QuoteCard
          photograph={photography[7]}
          quote={quotes[0]}
          direction="column-reverse"
        />
        <QuoteCard
          photograph={photography[1]}
          quote={quotes[1]}
          direction="column"
        />
      </section>
      <SignUp
        statements={statements}
        site={site}
      />
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}
