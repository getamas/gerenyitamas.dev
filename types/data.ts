export interface Skill {
  id?: number
  title: string
  description?: string
  icon: string
}

export interface WorkExperience {
  id?: number
  title: string
  employmentType: string
  company: {
    name: string
    logo: string
    link: string
  }
  location: string
  locationType: string
  startDate: string
  endDate: string
  desciption: string[]
  skills: string[]
}

export interface Testimonial {
  id?: number
  content: string
  person: {
    name: string
    avatar: string
  }
  twitter?: string
}
