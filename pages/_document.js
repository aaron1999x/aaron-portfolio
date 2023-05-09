import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-backgroundLight text-paragraphLight dark:bg-backgroundDark dark:text-paragraphDark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
