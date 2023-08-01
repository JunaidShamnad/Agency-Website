import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,

        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en" style={{scrollBehavior:'smooth'}}>
        <Head>
          {/*======================== Google Fonts ========================*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/*----------------------- Inter--------------------------------- */}
          {/* <link
            href="https://fonts.leapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}
          {/*-------------------------- Archivo Black --------------------------------------------*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
            rel="stylesheet"
          />
          {/*-------------------------- Plus Jakarta Sans --------------------------------------------*/}
          <link href="https://fonts.googleapis.com/css2?family=Alata&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          {/*-------------------------- Poppins --------------------------------------------*/}
          <link href="https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

          {/* --------------------------------Syne -------------------------------- */}
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          {/*===================== Google Fonts ============================*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
