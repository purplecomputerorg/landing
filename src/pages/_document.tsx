import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Transform your old laptop into a distraction-free space for kids ages 3-8 to explore, create, and play." />
        <meta name="theme-color" content="#5c2d91" />
        <meta property="og:title" content="Purple Computer" />
        <meta property="og:description" content="Give them a first computer you can feel good about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Purple Computer" />
        <meta name="twitter:description" content="Give them a first computer you can feel good about" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
