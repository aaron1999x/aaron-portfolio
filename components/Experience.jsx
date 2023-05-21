import React from 'react'
import Work from './Work'

const workExperience = [
  {
    company: 'ABC Company',
    position: 'Frontend Developer',
    duration: 'Jan 2020 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt arcu ac mi placerat, in rhoncus lacus fermentum.',
  },
  // Add more work experience objects as needed
];

const Experience = () => {
  return (
    <section className='mx-6 mb-24 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12'>
      <span className='text-4xl font-bold text-underline tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark'>Experience.</span>
      <Work experience={workExperience} />
      
      
    </section>
  )
}

export default Experience