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
  paths: Resource[]
}

interface Resource {
  resource: string
  body: PortableText[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Data = await sanityClient.fetch(resourcePathQuery)
  const paths = data.paths.map((path) => {
    const titles = path.body.filter((block) => block.style !== "normal")
    const headings = getHeadings(titles)
    return headings.map((heading) => {
      const slug = kebabCase(heading)
      return {
        params: { resource: path.resource, slug },
      }
    })
  })
  return {
    paths: paths[0],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { resource } = params as Params
  const res: Data = await sanityClient.fetch(resourceQuery, { resource })
  return {
    props: {
      data: res.resources,
    },
  }
}

const ResourceTemplate: NextPage = (res) => {
  const { data } = res
  console.log(data[0])
  return <pre>{JSON.stringify(data[0].body, undefined, 2)}</pre>
}

export default ResourceTemplate
