import { useRef, useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { FadeIn } from "../components/Animations";
import Container from "../components/Container";
import "../styles/Home.module.css";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed("#typing-text", {
      strings: ["Developer", "Programmer", "Student"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center">
        <FadeIn>
          <div className="flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center duration-75">
                <h1 className="font-bold text-5xl md:text-6xl my-5">
                  Hello there, I&apos;m{" "}
                  <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Weerawong
                  </span>
                </h1>
                <p className="text-4xl font-bold p-5">
                  I&apos;m a{" "}
                  <span
                    ref={el}
                    id="typing-text"
                    className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  ></span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10 mx-auto w-72 md:w-96">
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
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
