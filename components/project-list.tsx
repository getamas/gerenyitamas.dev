import Image from "next/image"

import { Project } from "@/types/data"

export const IPhoneFrame = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="hidden md:block relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <Image src={url} width={272} height={572} alt={title} />
      </div>
    </div>
  )
}

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  return projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ))
}

export const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 pb-16 pt-14 lg:flex-row lg:items-center">
      <IPhoneFrame url={project.image} title={project.title} />
      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-2 inline-flex rounded-full bg-amber-600 px-2 py-0.5 font-mono text-sm font-semibold uppercase text-background dark:bg-yellow-300">
          🎁 Project
        </div>
        <h3 className="text-center text-2xl font-bold lg:text-left lg:text-3xl">
          <a target="_blank" className="hover:underline" href={project.url}>
            {project.title}
          </a>
        </h3>
        <p className="pt-2 text-center font-mono text-sm uppercase lg:text-left ">
          {project.technologies.map((text) => text).join(", ")}
        </p>
        <div className="mt-5 max-w-md space-y-4 text-base leading-relaxed opacity-90">
          <p>{project.description}</p>
        </div>
        <a
          target="_blank"
          className="mt-3 inline-flex gap-1 py-2 text-base opacity-75 transition hover:opacity-100"
          href={project.url}
        >
          Read more <span aria-hidden="true">↗︎</span>
        </a>
      </div>
    </div>
  )
}
