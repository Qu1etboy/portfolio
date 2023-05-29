import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    id: 1,
    icon: (className: string) => <FaTwitter className={className} />,
    href: 'https://twitter.com/@WeerawongNon',
  },
  {
    id: 2,
    icon: (className: string) => <FaGithub className={className} />,
    href: 'https://github.com/qu1etboy',
  },
  {
    id: 3,
    icon: (className: string) => <FaLinkedin className={className} />,
    href: 'https://linkedin.com/in/weerawong',
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
          <Link key={social.id} href={social.href} target="_blank">
            {social.icon('duration-300 hover:scale-125')}
          </Link>
        ))}
      </div>
    </section>
  );
}
