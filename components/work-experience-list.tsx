import Image from "next/image"

import { WorkExperience } from "@/types/data"

export const WorkExperienceList = ({
  experiences,
}: {
  experiences: WorkExperience[]
}) => {
  return (
    <ul className="mt-9 pt-14 mx-auto md:max-w-xl">
      {experiences.map((experience) => (
        <WorkExperienceItem experience={experience} />
      ))}
    </ul>
  )
}

export const WorkExperienceItem = ({
  experience,
}: {
  experience: WorkExperience
}) => {
  return (
    <li className="flex flex-col items-center gap-8 pb-16 sm:-mx-10 lg:-mx-16 lg:flex-row lg:items-start lg:justify-center">
      <a
        target="_blank"
        className="flex-shrink-0"
        href={experience.company.link}
      >
        <Image
          src={experience.company.logo}
          width={100}
          height={100}
          alt={experience.company.name}
        />
      </a>
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-center text-2xl font-semibold lg:text-left lg:text-3xl">
          {experience.title}
        </h3>
        <p className="pt-2 text-center font-mono text-sm uppercase lg:text-left ">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="pt-8">
          {experience.desciption.map((text) => (
            <li className='py-1 pl-7 before:-ml-7 before:pr-3 before:text-emerald-500 before:content-["✓"] dark:before:text-emerald-300'>
              {text}
            </li>
          ))}
        </ul>
        <a
          target="_blank"
          className="mt-3 inline-flex gap-1 py-2 text-base opacity-75 transition hover:opacity-100"
          href={experience.company.link}
        >
          Read more <span aria-hidden="true">↗︎</span>
        </a>
      </div>
    </li>
  )
}
