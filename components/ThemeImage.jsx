import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import avatarLight from '../public/images/avatar-light.png';
import avatarDark from '../public/images/avatar-dark-new.png';
import avatarOriginal from '../public/images/avatar-original.png';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

function ThemedImage() {
  const { resolvedTheme } = useTheme();
  const [themeResolved, setThemeResolved] = React.useState(false);
  let src;

  React.useEffect(() => {
    setThemeResolved(true);
  }, [resolvedTheme]);

  switch (resolvedTheme) {
    case 'light':
      src = avatarLight;
      break;
    case 'dark':
      src = avatarDark;
      break;
    default:
      src = avatarOriginal;
      break;
  }

  if (!themeResolved) {
    return (
      <div>
        <Player 
          src='https://assets4.lottiefiles.com/packages/lf20_rlzitsb5.json'
          className="player"
          loop
          autoplay
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
        delay: 1
      }}
    >
      <Image src={src} alt='Avatar' />
    </motion.div>
  );
}

export default ThemedImage;
