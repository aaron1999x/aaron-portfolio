import React from 'react'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import FooterCredit from '@/components/FooterCredit'

const inter = Inter({ subsets: ['latin'] })
const calSans = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export default function Home() {

  return (
    <>
      <Head>
        <title>Aaron&apos;s Portfolio</title>
        <meta name="description" content="Hey I&apos;m Aaron, Learn more about what i do" />
      </Head>
      <main
        className={`${inter.className} ${calSans.variable}`}
      >
      <Navbar />
      <Hero />
      <About />
      
      <FooterCredit />
      

      
      </main>
    </>
    
  )
}
