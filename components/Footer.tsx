import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className={`w-full ${
        router.asPath === "/" ? "absolute" : ""
      } bottom-0 p-5 mt-auto text-gray-500 flex flex-col items-center`}
    >
      <ul className="flex gap-5 mb-5">
        <Link href="https://github.com/Qu1etboy" aria-label="github">
          <FaGithub className="text-xl cursor-pointer" />
        </Link>
        <Link
          href="https://www.facebook.com/Non.Weerawong"
          aria-label="facebook"
        >
          <FaFacebook className="text-xl cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/?hl=th" aria-label="instagram">
          <FaInstagram className="text-xl cursor-pointer" />
        </Link>
      </ul>
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Qu1etboy. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
