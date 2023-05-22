import Image from 'next/image'
import { useTheme } from 'next-themes'
import avatarLight from '../public/images/avatar-light.png'
import avatarDark from '../public/images/avatar-dark-new.png'
import {motion} from 'framer-motion'

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = avatarLight
      break
    case 'dark':
      src = avatarDark
      break
    default:
      src = avatarLight
      break
  }

  return(
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        delay:1
      }}
    >
      <Image src={src} alt='Avatar'/>
    </motion.div>
    
  )
}

export default ThemedImage