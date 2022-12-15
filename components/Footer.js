import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={`w-full ${
        router.asPath === "/" ? "absolute" : ""
      } bottom-0 p-5 mt-auto text-neutral-500 flex flex-col items-center`}
    >
      <div className="flex gap-5 mb-5">
        <Link href="https://github.com/Qu1etboy" aria-label="github">
          <FaGithub className="text-2xl cursor-pointer" />
        </Link>
        <Link
          href="https://www.facebook.com/Non.Weerawong"
          aria-label="facebook"
        >
          <FaFacebook className="text-2xl cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/?hl=th" aria-label="instagram">
          <FaInstagram className="text-2xl cursor-pointer" />
        </Link>
      </div>
      @qu1etboy All rights reserved
    </div>
  );
};

export default Footer;
