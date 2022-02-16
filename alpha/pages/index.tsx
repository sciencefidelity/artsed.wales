import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import ReactPlayer from "react-player"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import { components } from "components/portableTextComponents"
import Engagement from "components/engagement"
import Image from "components/image"
import Layout from "components/layout"
import Localize from "components/localize"
import QuoteCard from "components/quoteCard"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
// import PlayButton from "components/playButton"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Home = ({ data }: { data: IndexData }) => {
  const { locale } = useRouter()
  const { hero, photography, quotes, site, statements, video } = data
  const heroTitle = localize(hero.title, locale)
  return (
    <Layout
      site={site}
      statements={statements}
    >
      <div className={`${s.intro} ${u.grid} ${u.mbLarge} ${u.gapSmall}`}>
        <div className={`${s.introHeading} ${u.serif} ${u.hide} ${u.mdBlock}`}>
          {statements[0].statement && <PortableText
            value={locale === "cy" && statements[0].statement.cy
              ? statements[0].statement.cy
              : statements[0].statement.en}
            components={components}
          />}
        </div>
        <div className={s.introImage}>
          <Image
            alt={heroTitle}
            image={hero.image}
            width={900}
            height={900}
            lazy={false}
          />
          <div className={`${s.caption} ${u.sans} ${u.uppercase}`}>
            {heroTitle}
          </div>
        </div>
        <div>
          <div className={`${s.introHeading} ${u.serif} ${u.mdHide}`}>
            {statements[0].statement && <PortableText
              value={locale === "cy" && statements[0].statement.cy
                ? statements[0].statement.cy
                : statements[0].statement.en}
              components={components}
            />}
          </div>
          <div className={`${s.introBody}`}>
            {statements[12].statement && <PortableText
              value={locale === "cy" && statements[12].statement.cy
                ? statements[12].statement.cy
                : statements[12].statement.en}
              components={components}
            />}
            {statements[3].statement && <PortableText
              value={locale === "cy" && statements[3].statement.cy
                ? statements[3].statement.cy
                : statements[3].statement.en}
              components={components}
            />}
          </div>
        </div>
      </div>
      <div className={`${s.video} ${u.mbLarge} ${u.center}`}>
        <ReactPlayer
          url={video.videoLink}
          width={"100%"}
          height={"auto"}
          light={urlFor(video.mainImage)
            .auto("format")
            .width(960)
            .height(540)
            .quality(85)
            .url()}
          playIcon={<div style={{
            width: "10%",
            height: "11%",
            backgroundColor: "#09ADEF",
            borderRadius: "0.3em",
            position: "relative",
            transform: "translate(-430%, 380%)"
          }}>
            <svg
              viewBox="0 0 20 20"
              style={{
                position: "absolute",
                height: "50%",
                top: "26%",
                left: "37%"
              }}
            ><polygon fill="white" points="1,0 20,10 1,20"></polygon></svg>
          </div>}
          style={{
            border: "2px solid var(--foreground)",
            aspectRatio: "16 / 9"
          }}
        />
        <div className={`${s.caption} ${u.sans} ${u.uppercase}`}>
          <Localize data={video.title} />
        </div>
      </div>
      <Engagement site={site} statement={statements[8]} />
      <section className={`${s.quoteGrid} ${u.mbLarge} ${u.grid}`}>
        <QuoteCard
          photograph={photography[7]}
          quote={quotes[0]}
          direction={"column-reverse"}
        />
        <QuoteCard
          photograph={photography[1]}
          quote={quotes[1]}
          direction={"column"}
        />
      </section>
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
