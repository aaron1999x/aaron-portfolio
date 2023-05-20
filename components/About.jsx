import React from 'react'
import bootstrap from '../assets/icons/bootstrap.svg'
import css from '../assets/icons/css-3.svg'
import figma from '../assets/icons/figma.svg'
import github from '../assets/icons/github-icon.svg'
import html from '../assets/icons/html-5.svg'
import javascript from '../assets/icons/javascript.svg'
import nextjs from '../assets/icons/nextjs-icon.svg'
import react from '../assets/icons/react.svg'
import sass from '../assets/icons/sass.svg'
import tailwind from '../assets/icons/tailwindcss-icon.svg'
import Image from 'next/image'

const tools = [
  { name: 'HTML',icon:html }, 
  { name: 'Css',icon:css },   
  { name: 'JavaScript (ES6+)',icon:javascript},
  { name: 'Sass',icon:sass },  
  { name: 'Bootstrap',icon:bootstrap },
  { name: 'React',icon:react },
  { name: 'Next.Js',icon:nextjs },
  { name: 'Figma', icon:figma },  
  { name: 'GitHub',icon:github },
  { name: 'Tailwind',icon:tailwind }, 
]

const About = () => {
  return ( 
    <section className=' mb-24 mx-6 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12'>
      <span className='text-4xl font-bold text-underline tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark'>About Me.</span>
      <p className='mt-4'>Hi there! I&apos;m Aaron, a front-end developer who&apos;s driven and passionate about learning new skills and growing through continuous personal and professional development. With almost close to 2 years of experience in web development, I enjoy creating engaging user experiences and bringing beautiful designs to life. When I&apos;m not coding, you can find me indulging in my hobbies of collecting watches and following the excitement of Formula 1 races. Let&apos;s connect and collaborate on creating amazing web experiences together!</p>
      <div className='flex items-center flex-wrap gap-8 mt-5 lg:mt-8 justify-center lg:justify-start lg:gap-10'>
        {tools.map((items,index)=>(
          <Image src={items.icon} alt={items.name} key={items.name} className='h-9 w-auto'/>
        ))}
      </div>
    </section>
  )
}

export default About