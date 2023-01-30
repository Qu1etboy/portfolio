import Image from "next/image";
import Container from "../components/Container";
import { FadeIn } from "../components/Animations";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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
                    Programmer
                  </span>
                  <span>Student</span>
                </p>
              </div>
              <div className="mb-3 md:mb-0 md:order-1 overflow-hidden rounded-full h-[150px] w-[150px] md:ml-5">
                <Image
                  src="/profile.jpg"
                  alt="my profile"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <p className="mt-5 text-center md:text-left">
              Hi 👋, I&apos;m <b>Non</b> aka <b>Qu1etboy</b>. I&apos;m a
              computer science student at Kasetsart University based in Bangkok,
              Thailand. I&apos;m learning to become a full-stack web developer.
            </p>

            <ul className="flex justify-center md:justify-start flex-wrap gap-3 mt-10">
              <a
                href="https://github.com/qu1etboy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/weerawong"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://facebook.com/non.weerawong"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com/nonzagreanthai/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 p-3 border-2 rounded-md text-neutral-800 border-neutral-600 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <FaInstagram />
                <span>Instragram</span>
              </a>
            </ul>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10 mx-auto w-72 md:w-96">
              <Link
                href="/about"
                className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                {"<> About </>"}
              </Link>
              <Link
                href="/works"
                className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                {"<> Works </>"}
              </Link>
            </div> */}
          </div>
        </FadeIn>
      </main>
    </Container>
  );
}
