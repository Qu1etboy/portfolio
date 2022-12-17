import Link from "next/link";
import { FadeIn } from "../components/Animations";
import Container from "../components/Container";

const Custom500 = () => {
  return (
    <Container>
      <FadeIn>
        <div className="container mx-auto max-w-2xl text-center mt-24">
          <p className="text-xl font-bold">500 - Server-side error occurred</p>
          <Link
            href="/"
            className="font-semibold p-3 hover:bg-blue-500 dark:hover:bg-blue-500 rounded-md bg-blue-400 dark:bg-blue-600"
          >
            Go back home
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Custom500;
