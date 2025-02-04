/* eslint-disable @next/next/google-font-preconnect */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="https://fonts.googleapis.com" />
          <link rel="preload" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicons//safari-pinned-tab.svg" color="#161b22" />
          <meta name="msapplication-TileColor" content="#161b22" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://caspertheghost.me/icons/icon-128.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@casper124578" />

          <meta name="author" content="Casper Iversen" />
        </Head>
        <body className="bg-gray-50 text-neutral-900 min-h-screen dark:bg-blue dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
