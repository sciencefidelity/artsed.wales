import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  getHeadings,
  getNestedHeadings,
  kebabCase,
  separatePages,
} from "lib/utils"
import sanityClient from "lib/sanityClient"

interface Path {
  params: {
    resource: string
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Path = await sanityClient.fetch(resourcePathQuery)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data: Data = await sanityClient.fetch(resourceQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

const Resource: NextPage = () => {
  const greeting = "Hello"
  return <div>{greeting}</div>
}

export default Resource
