import React from 'react'
import ThemeSwitch from './ThemeSwitch'
const Navbar = () => {
  return (
    <div className='fixed z-20 w-full opacity-90  bg-backgroundLight dark:bg-backgroundDark transition-top duration-300 top-0'>
      <div className='px-4 py-5 flex items-center justify-between lg:w-[800px] xl:w-[980px] lg:mx-auto'>
        <h3 className='font-calsan text-2xl'>AT</h3>
        <ThemeSwitch/>
      </div>
    </div>
  )
}

export default Navbar