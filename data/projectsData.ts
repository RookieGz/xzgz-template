interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'CodeSnap',
    description: `The Ultimate Code Beautification and Visualization Tool. Designed for developers, educators, and content creators, `,
    imgSrc: '/static/images/codesnap.png',
    href: 'https://ccodesnap.vercel.app/',
  },
]

export default projectsData
