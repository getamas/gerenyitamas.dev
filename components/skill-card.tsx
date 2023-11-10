import { Skill } from "@/types/data"
import { Icons } from "@/components/icons"

export const SkillCards = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  )
}

export const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = Icons[skill.icon]

  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <Icon className="h-12 w-12" />
        <div className="space-y-2">
          <h3 className="font-bold">{skill.title}</h3>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </div>
    </div>
  )
}
