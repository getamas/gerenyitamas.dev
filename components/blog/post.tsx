import Image from "next/image"
import Link from "next/link"

import { formatDate } from "@/lib/utils"

export function Post({ post }) {
  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-2xl shadow-gray-500/20 transition hover:bg-gray-50 dark:bg-background dark:shadow-none dark:hover:bg-gray-900/40">
      <div className="aspect-video h-full">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={804}
            height={452}
            className="bg-muted transition-colors"
          />
        )}
      </div>
      <div className="flex h-full flex-col justify-between rounded-b-lg border-x border-b border-transparent px-5 py-8 dark:border-gray-900 md:px-8">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          {post.description && (
            <p className="line-clamp-3 w-full pt-3 text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
          )}
        </div>
        <div className="z-10 flex w-full flex-col items-start justify-between space-y-10 pt-8 md:flex-row md:items-center md:space-y-0">
          {post.date && (
            <p className="text-sm text-muted-foreground">
              {formatDate(post.date)}
            </p>
          )}
          <Link href={post.slug} className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
