import { FadeIn } from "../components/Animations";
import { WorkGridItem } from "../components/GridItem";
import Container from "../components/Container";
import { createClient } from "next-sanity";
import { sanityConfig } from "../lib/sanity-config";
import { urlForImage } from "../lib/sanity";
import { InferGetStaticPropsType } from "next";

const Works = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container title="Works - Qu1etboy">
      <FadeIn>
        <div className="container mx-auto max-w-2xl flex flex-1 flex-col justify-center items-center mt-12">
          <h1 className="text-3xl font-bold mb-20">My Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 p-3">
            {works.map((work) => (
              <WorkGridItem
                key={work._id}
                title={work.name}
                thumbnail={
                  work.thumbnail !== undefined
                    ? urlForImage(work.thumbnail?.asset._ref)
                        .height(150)
                        .fit("fill")
                        .url()
                    : ""
                }
                url={`/works/${work.slug.current}`}
              >
                {work.description}
              </WorkGridItem>
            ))}
          </div>
        </div>
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
