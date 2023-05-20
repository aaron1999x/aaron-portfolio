import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../data.js'

const Projects = () => {
  return (
    <section className='mx-6 mb-24 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12'>
      <span className='text-4xl font-bold text-underline tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark'>My Projects.</span>
      <div className='mt-10'>
        {data.data.map((proj,index)=>(
          <ProjectCard key={proj.title} {...proj} className={index % 2 === 1 ? 'lg:flex-row-reverse' : ''} />
        ))}
      </div>
      
    </section>
  )
}

export default Projects