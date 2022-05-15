import { googleFontsUrl } from "landing-theme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
          crossOrigin={"anonymous"}
        />
        <link href={googleFontsUrl} rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
