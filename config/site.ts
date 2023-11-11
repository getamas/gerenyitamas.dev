export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "tamasgerenyi.dev",
  description:
    "A Front-end developer based in Hungary, specialized in development of web applications using React.js, Next.js and more.",
  url: "https://tamasgerenyi.vercel.app",
  ogImage: "https://tamasgerenyi.vercel.app/og.jpg",
  mainNav: [
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/getamas",
    linkedin: "https://www.linkedin.com/in/tamasgerenyi/",
  },
}
