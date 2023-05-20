import React from 'react'
import Image from 'next/image'
import ThemeSwitch from './ThemeSwitch'
import ThemeLogo from './ThemeLogo'
import logoLight  from '../public/images/logo-light.png'

const Navbar = () => {
  return (
    <div className='fixed z-20 w-full opacity-90  bg-backgroundLight dark:bg-backgroundDark transition-top duration-300 top-0'>
      <div className='px-4 py-5 flex items-center justify-between lg:w-[800px] xl:w-[980px] lg:mx-auto'>
        <ThemeLogo />
        <ThemeSwitch/>
      </div>
    </div>
  )
}

export default Navbar