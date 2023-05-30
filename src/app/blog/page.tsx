import React from 'react';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function Blog() {
  return (
    <section>
      <h1 className="font-clash text-xl sm:text-2xl md:text-3xl">Blog</h1>
      <div className="mt-6">
        {allPosts
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.url}
              className="mb-4 flex flex-col space-y-1"
              href={`/blog/${post.url}`}
            >
              <div className="flex w-full flex-col">
                <p>{post.title}</p>
                <p className="text-sm text-neutral-500">
                  {format(parseISO(post.date), 'LLLL d, yyyy')}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
