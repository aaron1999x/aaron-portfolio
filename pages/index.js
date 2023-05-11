import React from 'react'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import FooterCredit from '@/components/FooterCredit'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const calSans = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export default function Home() {

  return (
    <>
      <Head>
       {/* Google tag (gtag.js)  */}
        <title>Aaron&apos;s Portfolio</title>
        <meta name="description" content="Hey I&apos;m Aaron, Learn more about what i do" />
      </Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-J2BTZ54QZD'
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J2BTZ54QZD');
        `}
      </Script>
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
