import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import createImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "8junqv4c",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client;