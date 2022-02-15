/**
 * Post component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/blog`.
 *
 * @param data - all props fetched with `postQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `postPathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import sanityClient from "lib/sanityClient"
import { postQuery, postPathQuery } from "lib/queries"
import Layout from "components/layout"
import { components } from "components/portableTextComponents"
import ErrorTemplate from "components/errorTemplate"
import Localize from "components/localize"
import PostDate from "components/postDate"
import { LocaleString } from "generated/schema"
import { PostData } from "lib/interfaces"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(postQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const PostPage = ({ data }: { data: PostData }) => {
  const router = useRouter()
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const title: LocaleString = {
    _type: "localeString",
    en: "Blog",
    cy: "Blog"
  }
  const { locale } = router
  const { post, site, statements } = data
  const blocks = locale === "cy" && post.body.cy ? post.body.cy : post.body.en
  return (
    <Layout
      site={site}
      statements={statements}
      title={title}
    >
      <section>
        <h1>{locale === "cy" ? "Newyddion" : "News"}</h1>
        {post.title &&
          <h2><Localize data={post.title} />.</h2>
        }
        {post.body &&
          <PortableText value={blocks} components={components} />
        }
        <p>
          {locale === "cy" ? "Wedi'i gyhoeddi ar" : "Published on"}{" "}
          {post.publishedAt && <PostDate date={post.publishedAt} />}
        </p>
      </section>
    </Layout>
  )
}
export default PostPage
