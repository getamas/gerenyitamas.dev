import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { projects, skills, testimonials, workExperiences } from "@/config/data"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Post } from "@/components/blog/post"
import { SkillCards, TestimonialCards } from "@/components/cards"
import { ContactForm } from "@/components/contact-form"
import { Icons } from "@/components/icons"
import { ProjectList } from "@/components/project-list"
import { SectionTitle } from "@/components/section-title"
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
      <section id="hero" className="space-y-6 pb-8 md:pb-12 pt-10 lg:py-32">
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
            <Link href="/#contact" className={buttonVariants()}>
              Get in touch
            </Link>
            <Link
              href="/#about"
              className={buttonVariants({ variant: "outline" })}
            >
              Find out more
            </Link>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-10 px-5 py-16 sm:py-32 sm:gap-16 md:flex-row">
          <div className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
            <Image
              src="/images/avatars/getamas.jpg"
              className="rounded-full object-cover w-40 h-40 sm:w-52 sm:h-52"
              width={200}
              height={200}
              priority
              alt="Gerényi Tamás"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="pb-3 text-2xl font-semibold">About me</p>
            <p className="text-lg text-gray-800 text-opacity-80 dark:text-gray-300">
              Experienced Senior Frontend Developer adept in architecting
              scalable web-based systems and crafting high-performance
              single-page applications using React.js, Vue.js, and TypeScript.
              Proven track record in core development and key contributions to
              diverse projects. Eager to bring innovation and expertise to
              dynamic teams, continuously seeking growth and new challenges in
              the ever-evolving landscape of web development.
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
          description=" My key skills include but not limited to sitebuilding
               website layouts, creating complex JavaScript solutions,
              single-page applications and architecturing web-based systems."
        />
        <SkillCards skills={skills} />
      </section>
      <section id="work">
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
            <div className="mx-auto grid w-full grid-cols-1 flex-col gap-5 sm:px-5 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {posts.map((post) => (
                <Post post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section id="contact">
        <div className="container space-y-6 md:max-w-4xl bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <SectionTitle
            title="Contact Me"
            description="I'm ready to hear about your project. Don't hesitate to get in touch with me using the contact form."
          />
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 sm:gap-16 pb-16 pt-14">
            <div className="flex-grow w-full lg:max-w-md">
              <ContactForm />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <a
                className="text-indigo-500 text-opacity-100 hover:underline dark:text-brand"
                href={`mailto:${siteConfig.links.email}`}
              >
                getamas04@gmail.com
              </a>
              <ul className="flex gap-3 mt-3">
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.gitHub className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.linkedIn className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
