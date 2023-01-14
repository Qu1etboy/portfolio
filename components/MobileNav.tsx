import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("click", function () {
      //Hide the menus if visible
      setOpenNav(false);
    });
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenNav(!openNav);
        }}
        className="border border-neutral-300 dark:border-neutral-600 rounded-md p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 duration-300"
      >
        {openNav ? (
          <IoMdClose className="block md:hidden cursor-pointer text-xl" />
        ) : (
          <FaBars className="block md:hidden cursor-pointer text-xl" />
        )}
      </button>
      {openNav && (
        <div className="md:hidden absolute top-0 right-0 z-10 w-48 mt-16 border border-neutral-200 dark:border-neutral-700 shadow-md rounded-md">
          <ul className="flex flex-col list-none text-center">
            <Link
              href="/"
              className="p-3 cursor-pointer dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-100 dark:bg-neutral-800 z-10"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="p-3 cursor-pointer dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-100 dark:bg-neutral-800 z-10"
            >
              About me
            </Link>
            <Link
              href="/works"
              className="p-3 cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-100 dark:bg-neutral-800 z-10"
            >
              Works
            </Link>
            <Link
              href="https://blog.qu1etboy.vercel.app"
              className="p-3 cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-100 dark:bg-neutral-800 z-10"
            >
              Blog
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
