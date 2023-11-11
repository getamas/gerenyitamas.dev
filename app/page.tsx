import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { projects, skills, testimonials, workExperiences } from "@/config/data"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Post } from "@/components/blog/post"
import { ProjectList } from "@/components/project-list"
import { SectionTitle } from "@/components/section-title"
import { SkillCards } from "@/components/skill-card"
import { TestimonialCards } from "@/components/testimonial-cards"
import { WorkExperienceList } from "@/components/work-experience-list"

export default function IndexPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 3)

  return (
    <>
      <section
        id="hero"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
            href={siteConfig.links.linkedin}
          >
            Follow along on LinkedIn
          </a>
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
      <section id="about">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-10 px-5 py-32 sm:gap-16 md:flex-row">
          <div className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
            <Image
              src="/images/avatars/getamas.jpg"
              className="rounded-full object-cover w-52 h-52"
              width={200}
              height={200}
              priority
              alt="Gerényi Tamás"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="pb-3 text-2xl font-semibold">About me</p>
            <p className="text-lg text-gray-800 text-opacity-80 dark:text-gray-300">
              A passionate, highly motivated web developer, having extensive
              knowledge in developing large-scale applications for the modern
              web. My key skills include but not limited to sitebuilding
              responsive website layouts, creating complex JavaScript solutions,
              single-page applications and architecturing web-based systems.
            </p>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <SectionTitle
          title="Skills"
          description="This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir."
        />
        <SkillCards skills={skills} />
      </section>
      <section id="experience">
        <div className="container space-y-6 md:max-w-4xl bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <SectionTitle title="Work Experiences" />
          <WorkExperienceList experiences={workExperiences} />
          <ProjectList projects={projects} />
        </div>
      </section>
      <section id="testimonials">
        <div className="container space-y-6 md:max-w-4xl bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <SectionTitle title="What Other People are Saying" />
          <TestimonialCards testimonials={testimonials} />
        </div>
      </section>
      <section id="articles">
        <div className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <SectionTitle title="Selected Articles" />
          {posts?.length && (
            <div className="mx-auto grid w-full grid-cols-1 flex-col gap-5 sm:px-5 pb-24 pt-10 sm:grid-cols-3 lg:gap-10">
              {posts.map((post) => (
                <Post post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
