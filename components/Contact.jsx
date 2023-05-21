import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className='mx-6 mb-24 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12'>
      <motion.h2 className='inline-block text-4xl font-bold tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark'
        initial={{opacity:0,x:-60}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
      > Want to Connect?
      </motion.h2>
      <motion.p className='mt-5 mb-2 lg:text-lg'
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:true}}
      >Whether it is about new opportunities , collaboration or even freelance work, my inbox is always open. Reach out and I&apos;ll make sure to get back to you as soon as possible</motion.p>
      <a href="mailto:aarontys1999@gmail.com" className='font-bold lg:text-lg text-secondaryLight dark:text-secondaryDark'>aarontys1999@gmail.com</a>
      
      
    </section>
  )
}

export default Contact