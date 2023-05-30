import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) return;
  return { title: post.title };
};

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post.url === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  const minRead = Math.floor(post.body.raw.length / 200);

  return (
    <section>
      <article className="prose">
        <h1 className="font-clash mb-3">{post.title}</h1>
        <p className="text-sm text-neutral-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')} --- {minRead} min read
        </p>
        <MDXContent
          components={{
            Image: (props) => (
              <Image alt={props.alt} className="rounded-lg" {...props} />
            ),
          }}
        />
      </article>
    </section>
  );
}
