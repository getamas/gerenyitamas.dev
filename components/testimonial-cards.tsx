import Image from "next/image"

import { Testimonial } from "@/types/data"
import { Icons } from "@/components/icons"

export const TestimonialCards = ({
  testimonials,
}: {
  testimonials: Testimonial[]
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:-mx-32 py-8">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial
}) => {
  return (
    <blockquote className="relative !my-0 flex flex-col justify-between rounded-md border-l-0 bg-white !p-5 not-italic text-foreground dark:bg-white/5 lg:!p-8">
      <div className="text-lg font-medium leading-8">
        <p>{testimonial.content}</p>
      </div>
      <div className="mt-8 flex w-full items-center justify-between gap-1.5 text-base">
        <div className="flex items-center gap-2">
          <Image
            src={testimonial.person.avatar}
            className="!my-0 rounded-full"
            width={48}
            height={48}
            alt={testimonial.person.name}
          />
          <span className="opacity-75">{testimonial.person.name}</span>
        </div>
        {testimonial.twitter && (
          <a
            href={testimonial.twitter}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.X className="h-5 w-5 text-foreground opacity-50 transition hover:opacity-100" />
          </a>
        )}
      </div>
    </blockquote>
  )
}
