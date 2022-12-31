import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/static/images/qu1etboy.jpeg"
        />
      </Head>
      <body className="bg-[#fafafa] dark:bg-[#171717]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
