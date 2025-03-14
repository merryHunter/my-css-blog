interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Car Shopping Agent',
    description: `Autonation is a car dealership chain in the USA. I built a chatbot that can help customers find the perfect car for them.`,
    imgSrc: '/static/images/autonation.png',
    href: 'https://www.demoagent.chernukha.io',
  },
]

export default projectsData
