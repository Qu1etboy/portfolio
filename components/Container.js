import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Container = (props) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Qu1etboy",
    description: "Qu1etboy's Website",
    author: "Weerawong Vonggatunyu",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <title>{meta.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen relative text-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Container;
