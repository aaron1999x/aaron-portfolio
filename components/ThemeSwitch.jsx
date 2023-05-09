import React from 'react';
import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()


  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="items-center justify-center w-12 h-12 rounded-md  bg-cardBackgroundLight dark:bg-cardBackgroundDark bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        {mounted ? (
          theme === 'light' ? (
            <HiMoon className="inline w-6 h-6 ml-1" />
          ) : (
            <HiSun className="inline w-6 h-6" />
          )
        ) : null}
    </button>
  )
}

export default ThemeSwitch