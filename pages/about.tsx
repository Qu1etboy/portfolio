import { FadeIn } from "../components/Animations";
import Container from "../components/Container";
import Timeline from "../components/Timeline";
import Image from "next/image";
import {
  CPPIcon,
  GitHubIcon,
  GitIcon,
  JavaScriptIcon,
  NodeJsIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "../components/Icons";

const About = () => {
  return (
    <Container title="About - Qu1etboy">
      <FadeIn>
        <main className="container max-w-2xl mx-auto flex flex-col justify-center items-center mt-12 px-8 md:px-0">
          <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 pt-3">
            <Image
              src="/profile.jpg"
              alt="my profile"
              width={150}
              height={150}
              className="w-full rounded-md md:mr-5"
            />
            <div className="py-5 md:p-5 -6 col-span-2">
              <h1 className="text-3xl font-bold mb-5">About me</h1>
              <article>
                <p>Hi, I&apos;m Weerawong Vonggatunyu. You can call me Non.</p>
                <br />
                <p>
                  I&apos;m currently studying computer science at Kasetsart
                  University based in Bangkok, Thailand.
                </p>
                <br />
                <p>
                  I&apos;m passionate about technology and I love to learn new
                  things. I like to build stuff that helps make everyone&apos;s
                  life better.
                </p>
              </article>
            </div>
          </section>
          <div className="w-full md:w-auto pt-3 grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mb-32">
            <section>
              <h1 className="text-3xl font-bold border-b dark:border-gray-500 border-gray-300 pb-2">
                Education
              </h1>
              <Timeline />
            </section>
            <section>
              <h1 className="text-3xl font-bold border-b dark:border-gray-500 border-gray-300 pb-2">
                Technology Skills
              </h1>
              <ul className="text-lg p-5">
                <li className="mb-5">
                  <span className="font-bold">Languages</span>
                  <ul className="mt-3 pl-5 flex flex-wrap gap-2">
                    <li>
                      <TypeScriptIcon />
                    </li>
                    <li>
                      <JavaScriptIcon />
                    </li>
                    <li>
                      <PythonIcon />
                    </li>
                    <li>
                      <CPPIcon />
                    </li>
                  </ul>
                </li>
                <li className="mb-5">
                  <span className="font-bold">Frameworks</span>
                  <ul className="mt-3 pl-5 flex flex-wrap gap-2">
                    <li>
                      <ReactIcon />
                    </li>
                    <li>
                      <NodeJsIcon />
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Tools</span>
                  <ul className="mt-3 pl-5 flex flex-wrap gap-2">
                    <li>
                      <GitIcon />
                    </li>
                    <li>
                      <GitHubIcon />
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </FadeIn>
    </Container>
  );
};

export default About;
