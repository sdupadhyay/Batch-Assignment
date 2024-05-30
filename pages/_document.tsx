import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href='https://fonts.googleapis.com/css?family=Heebo' rel='stylesheet'/>

      <body className="dark:bg-[#3d3d3d]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
