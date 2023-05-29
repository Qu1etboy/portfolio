import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import type { Metadata } from 'next';

const projects = [
  {
    id: 1,
    name: 'Bangkok Air Quality Map',
    description: 'Show the air quality on the map in Bangkok',
    website: 'https://bangkokairqualitymap.vercel.app',
    github: 'https://github.com/Qu1etboy/bangkok-air-quality-map',
  },
  {
    id: 2,
    name: 'Resume Edit',
    description: 'A resume maker website',
    website: '',
    github: 'https://github.com/Qu1etboy/pm2.5-tracker',
  },
  {
    id: 3,
    name: 'PM 2.5 Tracker',
    description: 'Know how much PM 2.5 is in your area',
    website: '',
    github: 'https://github.com/Qu1etboy/resume-edit',
  },
  {
    id: 4,
    name: 'KU-Fondue',
    description:
      'A Java desktop application for submit a complaint about Kasetsart University',
    github: 'https://github.com/Qu1etboy/KU-Fondue',
  },
];

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My proudest to present projects',
};

export default function Projects() {
  return (
    <section>
      <h1 className="font-clash text-xl sm:text-2xl md:text-3xl">Projects</h1>
      <p className="prose mt-6">
        I love building things for the web. From something as simple as a single
        HTML page to a full-stack web application. Here are the ones that
        I&apos;m most proud of. Other projects can be found in my{' '}
        <Link
          href="https://github.com/Qu1etboy?tab=repositories"
          target="_blank"
          className="text-pink-500 hover:underline"
        >
          GitHub repo
        </Link>
      </p>
      <div className="mt-16 grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-44 flex-col rounded-lg px-5 py-6 duration-300 hover:bg-gray-100"
          >
            <h2 className="mb-2 font-semibold">{project.name}</h2>
            <p className="prose text-sm text-gray-800">{project.description}</p>
            <div className="mt-auto flex items-center">
              {project.website && (
                <Link href={project.website}>
                  <BiLink className="text-xl duration-300 hover:scale-125 hover:text-pink-500" />
                </Link>
              )}
              <Link href={project.github} className="ml-auto">
                <FaGithub className="duration-300 hover:scale-125" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
