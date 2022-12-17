import { FadeIn } from "../components/Animations";
import Container from "../components/Container";
import Timeline from "../components/Timeline";
import Image from "next/image";

const About = () => {
  return (
    <Container title="About - Qu1etboy">
      <FadeIn>
        <div className="container mx-auto flex flex-col justify-center items-center mt-8 px-8 md:px-0">
          <h1 className="text-3xl font-bold mb-12">About me</h1>
          <div className="max-w-[1024px]">
            <div className="flex flex-col md:flex-row justify-between pt-3">
              <div className="order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-0 mb-3">
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
              <div className="overflow-hidden rounded-full h-[200px] w-[200px] order-1 md:order-2 md:ml-5">
                <Image
                  src="/profile.jpg"
                  alt="my profile"
                  width={200}
                  height={200}
                  className="grayscale"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto pt-3 grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mb-32">
            <div>
              <h1 className="md:ml-5 text-3xl font-bold border-b dark:border-gray-500 border-gray-300 pb-2">
                Education
              </h1>
              <Timeline />
            </div>
            <div>
              <h1 className="md:ml-5 text-3xl font-bold border-b dark:border-gray-500 border-gray-300 pb-2">
                Technology Skills
              </h1>
              <ul className="text-lg p-5">
                <li className="mb-5">
                  <span className="font-bold">Languages</span>
                  <ul className="pl-5">
                    <li>- JavaScript ( beginner )</li>
                    <li>- Python ( intermediate )</li>
                    <li>- C++ ( intermediate )</li>
                  </ul>
                </li>
                <li className="mb-5">
                  <span className="font-bold">Frameworks</span>
                  <ul className="pl-5">
                    <li>- ReactJS ( learning )</li>
                    <li>- NextJS ( learning )</li>
                    <li>- TailwindCSS ( learning )</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Tools</span>
                  <ul className="pl-5">
                    <li>- Git</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default About;
