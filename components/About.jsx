import React from 'react';
import bootstrap from '../assets/icons/bootstrap.svg';
import css from '../assets/icons/css-3.svg';
import figma from '../assets/icons/figma.svg';
import github from '../assets/icons/github-icon.svg';
import html from '../assets/icons/html-5.svg';
import javascript from '../assets/icons/javascript.svg';
import nextjs from '../assets/icons/nextjs-icon.svg';
import react from '../assets/icons/react.svg';
import sass from '../assets/icons/sass.svg';
import tailwind from '../assets/icons/tailwindcss-icon.svg';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';

const tools = [
  { name: 'HTML', icon: html },
  { name: 'Css', icon: css },
  { name: 'JavaScript (ES6+)', icon: javascript },
  { name: 'Sass', icon: sass },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'React', icon: react },
  { name: 'Next.Js', icon: nextjs },
  { name: 'Figma', icon: figma },
  { name: 'GitHub', icon: github },
  { name: 'Tailwind', icon: tailwind },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <section className=" mb-24 mx-6 lg:w-[800px] xl:w-[980px] lg:mx-auto lg:py-24 lg:mb-12">
      <motion.h2
        className="inline-block text-4xl font-bold tracking-tighter lg:text-5xl text-white bg-secondaryLight dark:bg-secondaryDark"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me.
      </motion.h2>
      <motion.p
        className="mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Hi there! I&apos;m Aaron, a front-end developer who&apos;s driven and
        passionate about learning new skills and growing through continuous
        personal and professional development. With almost close to 3 years of
        experience in web development, I enjoy creating engaging user
        experiences and bringing beautiful designs to life. When I&apos;m not
        coding, you can find me indulging in my hobbies of collecting watches
        and following the excitement of Formula 1 races. Let&apos;s connect and
        collaborate on creating amazing web experiences together!
      </motion.p>
      <motion.div
        className="flex items-center flex-wrap gap-8 mt-5 lg:mt-8 justify-center lg:justify-start lg:gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tools.map((items, index) => (
          <motion.div key={items.name} variants={item}>
            <Image src={items.icon} alt={items.name} className="h-9 w-auto" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
