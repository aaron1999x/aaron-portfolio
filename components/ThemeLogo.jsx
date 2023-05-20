import Image from 'next/image'
import { useTheme } from 'next-themes'
import logoLight from '../public/images/logo-light.png'
import logoDark from '../public/images/logo-dark.png'


function ThemeLogo() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = logoLight
      break
    case 'dark':
      src = logoDark
      break
    default:
      src = logoLight
      break
  }

  return <Image src={src} width={60} height={60} alt='aaron logo'/>
}

export default ThemeLogo