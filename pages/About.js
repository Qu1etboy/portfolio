import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animations";
import Layout from "../components/layouts/article";
import Container from "../components/Container";

const About = () => {
  return (
    <Container>
      <FadeIn>
        <div className="flex flex-col justify-center items-center mt-12">
          <h1 className="text-3xl font-bold mb-12">About me</h1>
          <div className="text-lg p-5">
            <p>
              My name is Weerawong Vonggatunyu or you can call me Non/Qu1etboy
            </p>
            <p>Born 5 March 2003, Bangkok Thailand</p>
            <p>
              Loving Computer and Technology at a young age but properly learn
              to code when got to the college.
            </p>
            <p>
              Right now I&apos;m studying in Computer Science at Kasetsart
              Unversity in Thailand.
            </p>
            <p>I like to solving problems and learning new things.</p>
            <p>
              I am currently learning about Web Development, Front-end and
              Back-end.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-32">
            <div>
              <h1 className="ml-5 text-3xl font-bold border-b pb-2">
                Education
              </h1>
              <ul className="text-lg">
                <li className="p-5">
                  <h1 className="font-bold">
                    Kasetsart University{" "}
                    <span className="font-medium">(2021 - Present)</span>
                  </h1>
                  <p>Bachelor&apos;s degree (2nd year) of Computer Science</p>
                  <p>Current GPAX: 3.94</p>
                </li>
                <li className="p-5">
                  <h1 className="font-bold">
                    St. Francis Xavier School{" "}
                    <span className="font-medium">(2015 - 2021)</span>
                  </h1>
                  <p>Science-Mathematic, Highschool</p>
                  <p>GPAX: 3.73</p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="ml-5 text-3xl font-bold border-b pb-2">
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
