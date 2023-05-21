import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import ThemeLogo from './ThemeLogo'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div className='fixed z-20 w-full opacity-90  bg-backgroundLight dark:bg-backgroundDark transition-top duration-300 top-0'
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.4,delay:0.2}}
    >
      <div className='px-4 py-5 flex items-center justify-between lg:w-[800px] xl:w-[980px] lg:mx-auto'>
        <ThemeLogo />
        <ThemeSwitch/>
      </div>
    </motion.div>
  )
}

export default Navbar