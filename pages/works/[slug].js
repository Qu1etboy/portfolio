import { createClient } from "next-sanity";
import Container from "../../components/Container";
import { sanityConfig } from "../../lib/sanity-config";
import { useRouter } from "next/router";
import { use } from "react";
import { FadeIn } from "../../components/Animations";

const Work = ({ work }) => {
  console.log("My work = ", work);
  return (
    <Container>
      <FadeIn>
        <div className="container max-w-2xl mx-auto mt-10">
          <h1>{work.name}</h1>
          <p>{work.detail}</p>
        </div>
      </FadeIn>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const client = createClient(sanityConfig);
  const works = await client.fetch(`*[_type == 'work']`);

  return {
    paths: works.map((work) => ({ params: { slug: work.slug.current } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const client = createClient(sanityConfig);
  // console.log(context.params.slug);
  const work = await client.fetch(
    `*[ _type == 'work' && slug.current == '${context.params.slug}' ][0]{ id, name, detail, thumbnail }`
  );

  return {
    props: {
      work,
    },
  };
};

export default Work;
