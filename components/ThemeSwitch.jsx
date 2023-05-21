import React from 'react';
import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const motionProps = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  const moonIcon = (
    <motion.div {...motionProps} >
      <HiMoon className="inline w-6 h-6 ml-1" />
    </motion.div>
  );

  const sunIcon = (
    <motion.div {...motionProps}>
      <HiSun  className="inline w-6 h-6" />
    </motion.div>
  );

  const switchIcon = theme === 'light' ? moonIcon : sunIcon;

  return (
    <button
      className="items-center justify-center w-12 h-12 rounded-md bg-cardBackgroundLight dark:bg-cardBackgroundDark bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {switchIcon}
    </button>
  );
};

export default ThemeSwitch;
