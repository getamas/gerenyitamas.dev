import { Skill, Testimonial, WorkExperience } from "@/types/data"

export const skills: Skill[] = [
  {
    id: 1,
    title: "React",
    description: "Server and Client Components. Use hook.",
    icon: "react",
  },
  {
    id: 1,
    title: "Next.js",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    icon: "next",
  },
  {
    id: 1,
    title: "Tailwind",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
    icon: "tailwind",
  },
]

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    employmentType: "Full-time",
    company: {
      name: "Y-collective",
      logo: "/images/companies/yco-logo.jpg",
      link: "https://y-collective.com",
    },
    location: "Pécs, Hungary",
    locationType: "Hibrid",
    startDate: "Sep 2018",
    endDate: "Present",
    desciption: [
      "Core developer of web based single page applications",
      "Key contributor to React.js, Vue.js projects",
      "Architecturing new projects with scalability in mind",
      "Frontend work in a dynamic agency team for a diverse variety of clients",
      "Writing semantic and accessible HTML / SASS",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Unit Testing",
      "JavaScript",
      "Problem Solving",
      "Front-End Development",
      "REST APIs",
      "Web Applications",
      "JavaScript Frameworks",
      "SASS",
    ],
  },
  {
    id: 2,
    title: "Web Developer",
    employmentType: "Full-time",
    company: {
      name: "Webstar",
      logo: "/images/companies/webstar-logo.jpg",
      link: "https://webstar.hu",
    },
    location: "Pécs, Hungary",
    locationType: "On Site",
    startDate: "Mar 2017",
    endDate: "Apr 2018",
    desciption: [
      "Sitebuilding responsive, mobile first websites",
      "Creating complex website layouts using a custom built CMS architecture",
      "Writing automation tests",
      "QA testing a wide variety of applications with security and stability in mind",
    ],
    skills: [
      "HTML5",
      "CSS / SCSS",
      "PHP",
      "Wordpress",
      "Bootstrap",
      "JavaScript",
      "Webpack",
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "As an experienced engineer, I get the most value from seeing how Kent makes decisions and trade-offs while following best practices to build real-world apps. This stuff is gold dust, and it's super hard to find in online courses!",
    person: {
      name: "Aaron McAdam",
      avatar: "/images/avatars/aaronmcadam.jpg",
    },
    twitter: "https://twitter.com/aaronmcadam/status/1712779862463664410",
  },
  {
    id: 2,
    content:
      "I've been a fullstack dev for ~5 years, but there were always areas I never fully grasped. Kent's EpicWeb.dev demystified those areas and gave me confidence to start my own agency. I couldnt have done it without the knowledge from EpicWeb. Thank you Kent! 🚀",
    person: {
      name: "Dev Neill",
      avatar: "/images/avatars/devneill.jpg",
    },
    twitter: "https://twitter.com/devneill/status/1712844344409948538",
  },
  {
    id: 3,
    content:
      "I highly recommend EpicWeb.dev for anyone serious about mastering frontend technologies. While'd pay just for individual sections that are exceptionally good, the comprehensive package makes it an irresistible deal.",
    person: {
      name: "Pawel Pawlowski",
      avatar: "/images/avatars/pawel-pawlowski.jpg",
    },
  },
  {
    id: 4,
    content:
      "It was 🤯. A lot of fun, and I learned so much in one day. My understanding of how the web actually works is now more and I got excited about Remix too. Pumped to put it all into practice. 13/10.",
    person: {
      name: "Gwen Shapira",
      avatar: "/images/avatars/gwen-shapira.jpg",
    },
  },
]
