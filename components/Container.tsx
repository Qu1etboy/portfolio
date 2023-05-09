import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Container = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Qu1etboy",
    description: "Weerawong Vonggatunyu's portfolio website",
    author: "Weerawong Vonggatunyu",
    type: "website",
    image: "https://qu1etboy.vercel.app/static/images/qu1etboy.jpeg",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content="Qu1etboy, Quietboy, Weerawong Vonggatunyu, Portfolio, Developer, Programmer"
        />
        <meta name="author" content={meta.author} />
        <meta
          property="og:url"
          content={`https://qu1etboy.vercel.app/${router.asPath}`}
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Qu1etboy" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WeerawongNon" />
        <meta name="twitter:image" content={meta.image} />

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
