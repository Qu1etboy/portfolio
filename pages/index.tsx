import Image from "next/image";
import Container from "../components/Container";
import { FadeIn } from "../components/Animations";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <main className="w-full container mx-auto mt-12 md:mt-24 max-w-2xl">
        <FadeIn>
          <div className="flex-col justify-center items-center py-3 px-5 md:p-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="order-1 duration-75">
                <h1 className="font-bold text-4xl text-center md:text-left">
                  Weerawong Vonggatunyu
                </h1>
                <p className="text-2xl text-center md:text-left text-neutral-800 dark:text-neutral-200 mt-3">
                  <span>Developer</span>
                  <span className="border-x mx-3 px-3 border-neutral-500">
                    Creator
                  </span>
                  <span>Student</span>
                </p>
              </div>
              <Image
                src="/profile2.jpg"
                alt="my profile"
                width={150}
                height={150}
                className="rounded-full md:order-1 mb-3 md:mb-0 md:ml-5"
              />
            </div>
            <p className="mt-5 text-center md:text-left">
              Hi 👋, I&apos;m <b>Non</b> aka <b>Qu1etboy</b>. I&apos;m a
              computer science student at Kasetsart University based in Bangkok,
              Thailand. I&apos;m learning to become a full-stack web developer.
            </p>

            <ul className="flex justify-center md:justify-start flex-wrap gap-3 mt-10">
              <li>
                <a
                  href="https://github.com/qu1etboy"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/weerawong"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/non.weerawong"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nonzagreanthai/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
                >
                  <FaInstagram />
                  <span>Instragram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://qu1etboy.notion.site/Qu1etboy-s-Digital-Garden-eac301f83ec84d8786857feeb63a4547"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
                >
                  <FaLeaf />
                  <span>Garden</span>
                </a>
              </li>
            </ul>
          </div>
        </FadeIn>
      </main>
    </Container>
  );
}
