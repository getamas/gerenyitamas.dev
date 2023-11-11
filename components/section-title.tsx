interface SectionTitleProps {
  title: string
  description?: string
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      )}
    </div>
  )
}
