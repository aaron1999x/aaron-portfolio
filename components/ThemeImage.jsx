import Image from 'next/image'
import { useTheme } from 'next-themes'
import avatarLight from '../public/images/avatar-light.png'
import avatarDark from '../public/images/avatar-dark-new.png'
import avatarOriginal from '../public/images/avatar-original.png'

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

  return <Image src={src} alt='Avatar'/>
}

export default ThemedImage