import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../data.js'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='mx-6 mb-24 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12'>
      <motion.h2 className='inline-block text-4xl font-bold tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark'
        initial={{opacity:0,x:-60}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
      >My Projects.</motion.h2>
      <div className='mt-10'>
        {data.data.map((proj,index)=>(
          <ProjectCard key={proj.title} {...proj} className={index % 2 === 1 ? 'lg:flex-row-reverse' : ''} />
        ))}
      </div>
      
    </section>
  )
}

export default Projects