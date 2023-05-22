import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'
import logoLight from '../public/images/logo-light.png'
import logoDark from '../public/images/logo-dark.png'


function ThemeLogo() {
  const { resolvedTheme } = useTheme();
  const [themeResolved, setThemeResolved] = React.useState(false);
  let src

  React.useEffect(() => {
    setThemeResolved(true);
  }, [resolvedTheme]);

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

  if (!themeResolved) {
    return <div>Loading...</div>; // You can use a loading state or a placeholder image here
  }

  return <Image src={src} width={60} height={60} alt='aaron logo'/>
}

export default ThemeLogo