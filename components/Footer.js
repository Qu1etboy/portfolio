import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-5 mt-auto text-neutral-500 flex flex-col items-center">
      <div className="flex gap-5 mb-5">
        <Link href="https://github.com/Qu1etboy">
          <FaGithub className="text-2xl cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/Non.Weerawong">
          <FaFacebook className="text-2xl cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/?hl=th">
          <FaInstagram className="text-2xl cursor-pointer" />
        </Link>
      </div>
      @qu1etboy All rights reserved
    </div>
  );
};

export default Footer;
