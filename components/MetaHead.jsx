import React from 'react'
import Head from 'next/head'

const MetaHead = () => {
  return (
    <Head>
      <title>Aaron&apos;s Portfolio</title>
      {/* <!-- Primary Meta Tags --> */}
      <title>Aaron&apos;s Portfolio</title>
      <meta name="title" content="Aaron's Portfolio"/>
      <meta name="description" content="Hi, im Aaron, a front-end developer. Learn more about me and what i do."/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://atys.dev/"/>
      <meta property="og:title" content="Aaron's Portfolio"/>
      <meta property="og:description" content="Hi, im Aaron, a front-end developer. Learn more about me and what i do."/>
      <meta property="og:image" content="https://atys.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-light.d3c8244a.png&w=1920&q=75"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://atys.dev/"/>
      <meta property="twitter:title" content="Aaron's Portfolio"/>
      <meta property="twitter:description" content="Hi, im Aaron, a front-end developer. Learn more about me and what i do."/>
      <meta property="twitter:image" content="https://atys.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-light.d3c8244a.png&w=1920&q=75"/>
    </Head>
  )
}

export default MetaHead