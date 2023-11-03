import { MetadataRoute } from "next"
import { allPosts } from "contentlayer/generated"

const postsSitemap: MetadataRoute.Sitemap = allPosts.map((post) => ({
  url: `${process.env.HOST}/blog/${post._raw.flattenedPath}`,
  lastModified: post.date,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.HOST || "",
      lastModified: new Date(),
    },
    ...postsSitemap,
  ]
}
