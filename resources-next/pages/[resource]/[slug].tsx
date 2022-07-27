import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "node:querystring"
import {
  getHeadings,
  getNestedHeadings,
  kebabCase,
  separatePages,
} from "lib/utils"
import sanityClient from "lib/sanityClient"
import { resourcePathQuery, resourceQuery } from "lib/queries"
import { PortableText } from "lib/interfaces"

interface Params extends ParsedUrlQuery {
  resource: string
  slug: string
}

interface Data {
  resources: Resource[]
}

interface Resource {
  resource: string
  body: PortableText[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Data = await sanityClient.fetch(resourcePathQuery)
  const paths = data.resources.map((resource) => {
    const titles = resource.body.filter((block) => block.style !== "normal")
    const headings = getHeadings(titles)
    return headings.map((heading) => {
      const slug = kebabCase(heading)
      return {
        params: { resource: resource.resource, slug },
      }
    })
  })
  return {
    paths: paths[0],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  const data: Data = await sanityClient.fetch(resourceQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

const ResourceTemplate: NextPage = () => {
  const greeting = "Hello"
  return <div>{greeting}</div>
}

export default ResourceTemplate
