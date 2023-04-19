import { FadeIn } from "../components/Animations";
import { WorkGridItem } from "../components/GridItem";
import Container from "../components/Container";
import { createClient } from "next-sanity";
import { sanityConfig } from "../lib/sanity-config";
import { urlForImage } from "../lib/sanity";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Badge from "../components/Badge";

const Works = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container title="Works - Qu1etboy">
      <FadeIn>
        <main className="container mx-auto max-w-2xl flex flex-1 flex-col justify-center items-center mt-12 p-3">
          <h1 className="text-3xl font-bold mb-5">My Works</h1>
          <p className="mb-8 text-center px-3">
            Some of my works that I&apos;m proudly to present. All my other
            works, notes and junk can be found in my{" "}
            <Link
              href="https://github.com/Qu1etboy?tab=repositories"
              className="text-pink-500 underline hover:text-pink-700 dark:hover:text-pink-300"
            >
              Github repo
            </Link>{" "}
          </p>
          <div className="grid grid-cols-1 gap-3 p-3">
            {works.map((work) => (
              <WorkGridItem
                key={work._id}
                title={work.name}
                url={`/works/${work.slug.current}`}
              >
                <p>{work.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {work.tag &&
                    work.tag.map((t, idx) => <Badge key={idx} text={t} />)}
                </div>
              </WorkGridItem>
            ))}
          </div>
        </main>
      </FadeIn>
    </Container>
  );
};

export const getStaticProps = async () => {
  const client = createClient(sanityConfig);
  const works = await client.fetch(`*[_type == "work"]`);

  return {
    props: {
      works,
    },
    revalidate: 10,
  };
};

export default Works;
