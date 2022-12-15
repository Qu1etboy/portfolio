import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SlideDown } from "./Animations";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div
        className={`${
          router.asPath === "/" ? "absolute" : ""
        } w-full bg-neutral-50 dark:bg-neutral-900 flex justify-center items-center z-20`}
      >
        <div className="flex items-center container p-2">
          <div className="hidden md:flex">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/works" text="Works" />
          </div>
          <div className="flex items-center ml-auto mr-5 md:mr-0">
            <ThemeToggle />
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <IoMdClose className="block md:hidden ml-3 cursor-pointer text-xl" />
              ) : (
                <FaBars className="block md:hidden ml-3 cursor-pointer text-xl" />
              )}
            </div>
          </div>
        </div>
      </div>

      <SlideDown open={open}>
        <div
          className={`${
            open ? "block" : "hidden"
          } md:hidden absolute w-full z-10 mt-20`}
        >
          <ul className="flex flex-col list-none text-center border-y-2 dark:border-neutral-800">
            <Link
              href="/"
              className="p-3 cursor-pointer border-b-2 dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="p-3 cursor-pointer border-b-2 dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10"
            >
              About me
            </Link>
            <Link
              href="/works"
              className="p-3 cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10"
            >
              Works
            </Link>
          </ul>
        </div>
      </SlideDown>
    </>
  );
};

const NavLink = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "font-semibold" : "text-gray-400 font-normal"
      } px-5 cursor-pointer`}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
};

export default Navbar;
