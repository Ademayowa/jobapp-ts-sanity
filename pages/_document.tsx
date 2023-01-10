import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang='en-US'>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
