import { useState } from 'react';
import ThemeToggle from "./ThemeToggle"
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { SlideDown } from './Animations';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            <div className="relative w-full bg-neutral-50 dark:bg-neutral-900 flex items-center z-20 duration-200">
                <div className={`hidden md:block`}>
                    <ul className="flex flex-col md:flex-row list-none">
                        <Link href="/">
                            <li className="px-5 cursor-pointer">Home</li>
                        </Link>
                        <Link href="/About">
                            <li className="px-5 cursor-pointer">About me</li>
                        </Link>
                        <Link href="/Works">
                            <li className="px-5 cursor-pointer">Works</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex items-center ml-auto mr-5 md:mr-0">
                    <ThemeToggle />
                    <div onClick={() => setOpen(!open)}>
                        {open ? <IoMdClose className="block md:hidden ml-3 cursor-pointer text-xl"/> : <FaBars className="block md:hidden ml-3 cursor-pointer text-xl"/>}
                    </div>
                </div>
            </div>

            <SlideDown open={open}>
                <div className={`${open ? "block" : "hidden"} md:hidden absolute w-full z-10`}>
                    <ul className="flex flex-col list-none text-center border-y-2 dark:border-neutral-800">
                        <Link href="/">
                            <li className="p-3 cursor-pointer border-b-2 dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10">Home</li>
                        </Link>
                        <Link href="/About">
                            <li className="p-3 cursor-pointer border-b-2 dark:border-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10">About me</li>
                        </Link>
                        <Link href="/Works">
                            <li className="p-3 cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 bg-neutral-50 dark:bg-neutral-900 z-10">Works</li>
                        </Link>
                    </ul>
                </div>
            </SlideDown>
        </div>
    )
}

export default Navbar;