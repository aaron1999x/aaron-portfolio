import infosearch from "./public/images/infosearch-website.png"
import linktree from "./public/images/linktree-website.png"

export default{
  data:[
    {
      image:infosearch,
      title:"Infosearch Consultancy",
      type:"Freelance",
      description:"This was my first freelance project. The goal was to redesign the client's old website into something clean and modern looking.",
      repoLink:"https://github.com/aaron1999x/infosearch-react",
      deployLink:"https://www.info-search.com.my/",
      tech:[
        "React",
        "Tailwind CSS"
      ]
    },
    {
      image:linktree,
      title:"Custom Linktree",
      type:"Personal",
      description:"Linktree is the number one go-to tool to share multiple links on social media. I figured that creating my own version of Linktree would be a fun and straightforward project, and a great way to explore Tailwind CSS and Next.js for the first time.",
      repoLink:"https://github.com/aaron1999x/custom-linktree",
      deployLink:"https://aaron-linktree.vercel.app/",
      tech:[
        "React",
        "Tailwind CSS"
      ]
    }
  ]
}