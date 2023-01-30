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
} from "../components/Icons";

const About = () => {
  return (
    <Container title="About - Qu1etboy">
      <FadeIn>
        <main className="container max-w-2xl mx-auto flex flex-col justify-center items-center mt-8 px-8 md:px-0">
          <h1 className="text-3xl font-bold mb-12">About me</h1>
          <section className="w-full max-w-5xl flex flex-col md:flex-row justify-between pt-3">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold mt-3 md:mt-0 mb-3">
                Weerawong Vonggatunyu
              </h1>
              <p className="text-gray-600 dark:text-gray-500 mb-5">
                5 March 2003, Bangkok Thailand
              </p>
              <p className="max-w-2xl text-gray-800 dark:text-gray-300">
                Doing Web Development from Frontend to Backend. <br />
                Currently studying Computer Science at Kasetsart University
                (KU81)
              </p>
            </div>
            <div className="overflow-hidden rounded-full h-[150px] w-[150px] order-1 md:order-2 md:ml-5">
              <Image
                src="/profile.jpg"
                alt="my profile"
                width={150}
                height={150}
                className="grayscale"
              />
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
                    <JavaScriptIcon />
                    <PythonIcon />
                    <CPPIcon />
                  </ul>
                </li>
                <li className="mb-5">
                  <span className="font-bold">Frameworks</span>
                  <ul className="mt-3 pl-5 flex flex-wrap gap-2">
                    <ReactIcon />
                    <NodeJsIcon />
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Tools</span>
                  <ul className="mt-3 pl-5 flex flex-wrap gap-2">
                    <GitIcon />
                    <GitHubIcon />
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
