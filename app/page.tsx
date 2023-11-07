import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="/images/avatars/getamas.jpg"
            className="rounded-full object-cover w-52 h-52"
            width={200}
            height={200}
            priority
            alt="Gerényi Tamás"
          />
          <h1 className="font-heading font-bold text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            {`Hi I'm Tamás Gerényi👋`}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p>
          <div className="space-x-4">
            <Link href="#contact" className={buttonVariants()}>
              Get in touch
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              Find out more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
