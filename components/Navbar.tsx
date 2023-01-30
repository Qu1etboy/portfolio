import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <div className="w-full container mx-auto max-w-2xl py-3 bg-neutral-50 dark:bg-neutral-900 flex justify-center items-center">
        <div className="flex items-center container">
          <div className="hidden md:flex">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/works" text="Works" />
            <NavLink href="https://blog.qu1etboy.vercel.app" text="Blog" />
          </div>
          <div className="flex items-center gap-3 ml-auto mr-5 md:mr-0">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
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
        isActive
          ? "font-semibold"
          : "text-gray-600 dark:text-gray-400 font-normal"
      } pr-3 cursor-pointer rounded-sm `}
    >
      <span className="capsize p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800">
        {text}
      </span>
    </Link>
  );
};

export default Navbar;
