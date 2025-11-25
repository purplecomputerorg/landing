import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Purple Computer - A joyful, kid-safe creativity computer built from your old laptop" />
        <meta name="theme-color" content="#5c2d91" />
        <meta property="og:title" content="Purple Computer" />
        <meta property="og:description" content="A joyful, kid-safe creativity computer for young children" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Purple Computer" />
        <meta name="twitter:description" content="A joyful, kid-safe creativity computer for young children" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
