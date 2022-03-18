import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "2l9k48uy",
  dataset: "production",
  apiVersion: "2022-03-05",
  useCdn: true
})
