import type { Metadata } from 'next';
import {
  FaReact,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSpring,
  SiRabbitmq,
  SiKong,
  SiFirebase,
  SiRedis,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const educations = [
  {
    id: 1,
    name: 'Kasetsart University',
    major: "Bachelor's degree (2nd year) of Computer Science",
    gpa: 'Current GPAX: 3.95',
    years: '2021 - Present',
  },
  {
    id: 2,
    name: 'St. Francis Xavier School',
    major: 'Science-Mathematic, Highschool',
    gpa: 'GPAX: 3.73',
    years: '2015 - 2021',
  },
];

const skills = [
  { icon: <TbBrandNextjs /> },
  { icon: <FaReact /> },
  { icon: <SiTypescript /> },
  { icon: <SiSpring /> },
  { icon: <SiJavascript /> },
  { icon: <FaPython /> },
  { icon: <FaNodeJs /> },
  { icon: <SiExpress /> },
  { icon: <SiNestjs /> },
  { icon: <SiPrisma /> },
  { icon: <SiTailwindcss /> },
  { icon: <FaDocker /> },
  { icon: <FaGitAlt /> },
  { icon: <SiFirebase /> },
  { icon: <SiMysql /> },
  { icon: <SiRedis /> },
  { icon: <SiMongodb /> },
  { icon: <SiPostgresql /> },
  { icon: <SiRabbitmq /> },
  { icon: <SiKong /> },
];

export const metadata: Metadata = {
  title: 'About',
  description: 'Computer Science student at Kasetsart University',
};

export default function About() {
  return (
    <section>
      <h1 className="font-clash text-xl sm:text-2xl md:text-3xl">About me</h1>
      <div className="prose mt-6">
        <p>Hi, I&apos;m Weerawong Vonggatunyu. You can call me Non.</p>
        <p>
          I am a third-year student in Computer Science. My passion for
          computers and technology brought me to Kasetsart University.
        </p>
        <p>
          I have experience building Front-End for projects but can also do
          Back-End as well.
        </p>
        <p>
          I am a learner who seeks to find new things along the way and improve
          my knowledge from a mistake I made.
        </p>
      </div>
      <div>
        <h2 className="font-clash mb-3 mt-6 text-lg sm:text-xl md:text-2xl">
          Education
        </h2>
        <ol className="relative border-l border-gray-200">
          {educations.map((education) => (
            <li key={education.id} className="mb-10 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {education.years}
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                {education.name}
              </h3>
              <p className="text-base font-normal text-gray-500">
                {education.major}
              </p>
              <p className="text-sm text-gray-500">{education.gpa}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2 className="font-clash mb-3 mt-6 text-lg sm:text-xl md:text-2xl">
          Skills
        </h2>
        <p className="prose mb-5">
          Things I have learned and used on a daily basis
        </p>
        <ul className="flex flex-wrap gap-3 text-5xl">
          {skills.map((skill, idx) => (
            <li key={idx}>{skill.icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
