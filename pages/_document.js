import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link as='style' href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Julius+Sans+One&family=Montserrat:wght@300;500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document