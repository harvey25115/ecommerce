import { Html, Head, Main, NextScript } from "next/document";

/**
 * NextJS default document
 * @returns ReactNode
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="E-commerce page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
