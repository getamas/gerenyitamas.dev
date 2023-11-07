import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { Post } from "@/components/blog/post"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="py-6 lg:py-10">
      <div className="mx-auto w-full max-w-screen-lg px-5 pb-3 pt-5 sm:pb-5 sm:pt-8">
        <h1 className="text-lg font-semibold">
          Articles <span className="font-normal">by Tamás Gerényi</span>
        </h1>
      </div>
      {posts?.length ? (
        <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 flex-col gap-5 px-5 pb-24 sm:grid-cols-2 lg:gap-10">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
