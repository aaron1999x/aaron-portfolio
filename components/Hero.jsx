import React from 'react'
import ThemedImage from './ThemeImage'
import { FaGithub, FaLinkedin, FaTwitter,FaFileDownload } from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className='h-screen flex items-center mx-6 lg:w-[800px] xl:w-[980px] lg:mx-auto'>
      <div>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
          <div className='w-1/2 lg:order-2 md:w-1/3'>
            <ThemedImage />
          </div>
          <div>
            <h1 className='font-calsan text-headlineLight dark:text-headlineDark text-6xl lg:text-7xl'>Aaron Tan</h1>
            <div className=' text-paragraphLight dark:text-paragraphDark text-base lg:text-xl '>
              <p>Front-end Developer based in Kuala Lumpur, Malaysia</p>
              <p>Currently @MirTech</p>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-4 justify-between lg:justify-normal lg:gap-10 lg:-mt-10'>
          <div className='flex gap-5'>
            <SocialIcon icon={<FaGithub className='w-7 h-7 lg:w-8 lg:h-8' />} href='https://github.com/aaron1999x' />
            <SocialIcon icon={<FaLinkedin className='w-7 h-7 lg:w-8 lg:h-8'/>} href='https://www.linkedin.com/in/atys/' />
            <SocialIcon icon={<FaTwitter className='w-7 h-7 lg:w-8 lg:h-8' />} href='https://twitter.com/aarontanyeesing' />
          </div>
          <Link href='./ResumeMalaysia.pdf' target='_blank' className='hover:animate-pulse'>
            <div className='flex items-center gap-2 bg-buttonLight text-buttonTextLight dark:bg-buttonDark dark:text-buttonTextDark p-2 rounded-lg'>
              <FaFileDownload/>
              Resume
            </div>
          </Link>
          

          
        </div>

      </div>
    </section>
  )
}

export default Hero