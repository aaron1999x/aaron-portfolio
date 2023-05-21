import React from 'react'
import CardTag from './CardTag'
import Image from 'next/image'
import infosearch from '../public/images/infosearch-website.png'
import {FaGithub} from "react-icons/fa"
import {FiExternalLink} from 'react-icons/fi'

const ProjectCard = ({image,title,type,description,repoLink,deployLink,tech,className=""}) => {
  return (
    <div className={`${className} p-5 mb-6 flex flex-col items-center gap-6 rounded-lg bg-cardBackgroundLight dark:bg-cardBackgroundDark  lg:flex-row lg:gap-12 lg:p-8 lg:h-[400px]`}>
      <div className='h-auto overflow-hidden rounded-md shadow-md lg:w-3/5'>
        <Image quality={100} src={image} className='h-auto w-full object-top hover:object-bottom '/>
      </div>
      <div className='flex flex-col justify-center lg:w-2/5'>
        <div className='flex flex-col items-start gap-2 mb-3'>
          {/* <span className=' font-semibold text-secondaryLight dark:text-secondaryDark'>{type}</span> */}
          <span className=' font-semibold inline-block rounded-lg px-3 bg-secondaryLight  text-white dark:bg-secondaryDark'>{type}</span>
          <span className='text-headlineLight font-bold text-2xl w-1/2 lg:w-4/5'>{title}</span>
        </div>
        <p className='mb-5 text-paragraphLight dark:text-cardParagraphDark'>
          {description}
        </p>
        <div className='mb-5 flex gap-2'>
          {tech.map((tech,index)=>(
            <CardTag key={index} tech={tech} />
          ))}
        </div>
        <div className='flex gap-5'>
          <a href={repoLink} target='_blank'><FaGithub className='w-7 h-7' /></a>
          <a href={deployLink} target='_blank'><FiExternalLink className='w-7 h-7' /></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard