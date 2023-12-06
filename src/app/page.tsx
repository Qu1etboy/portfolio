import Image from 'next/image';
import Link from 'next/link';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const socials = [
  {
    id: 4,
    name: 'resume',
    icon: (className: string) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 duration-300 hover:scale-125"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    href: 'https://drive.google.com/file/d/1Kmsyg3XjYakJc_TBIn8wic6TUofL4Sgq/view?usp=sharing',
  },
  {
    id: 2,
    name: 'github',
    icon: (className: string) => <FaGithub className={className} />,
    href: 'https://github.com/qu1etboy',
  },
  {
    id: 3,
    name: 'linkedin',
    icon: (className: string) => <FaLinkedin className={className} />,
    href: 'https://linkedin.com/in/weerawong',
  },
  {
    id: 5,
    name: 'facebook',
    icon: (className: string) => <FaFacebook className={className} />,
    href: 'https://facebook.com/non.weerawong',
  },
  {
    id: 6,
    name: 'instagram',
    icon: (className: string) => <FaInstagram className={className} />,
    href: 'https://instagram.com/nonzagreanthai',
  },
  {
    id: 1,
    name: 'twitter',
    icon: (className: string) => <FaTwitter className={className} />,
    href: 'https://twitter.com/@WeerawongNon',
  },
  {
    id: 7,
    name: 'email',
    icon: (className: string) => <MdOutlineMailOutline className={className} />,
    href: 'mailto:weerawong.v@gmail.com',
  },
];

export default function Home() {
  return (
    <section>
      <Image
        src="/me.jpg"
        alt="weerawong picture"
        width={75}
        height={75}
        className="rounded-full"
      />
      <h1 className="font-clash my-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        Weerawong Vonggatunyu
      </h1>
      <div className="mb-6 text-lg sm:text-xl md:text-xl">
        <span>Developer</span>
        <span className="mx-3 border-x border-gray-600 px-3">Creator</span>
        <span>Student</span>
      </div>
      <p className="prose sm:max-w-md md:max-w-lg">
        Hey 👋, I&apos;m <strong>Non</strong> aka <strong>Qu1etboy</strong>.
        I&apos;m a computer science student at Kasetsart University based in
        Bangkok, Thailand. I&apos;m a full-stack web developer.
      </p>
      <div className="my-6 flex gap-8 text-xl">
        {socials.map((social) => (
          <Link
            key={social.id}
            href={social.href}
            target="_blank"
            title={social.name}
            aria-label={social.name}
          >
            {social.icon('duration-300 hover:scale-125')}
          </Link>
        ))}
      </div>
    </section>
  );
}
