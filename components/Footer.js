import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full p-5 mt-auto text-neutral-500 flex flex-col items-center'>
          <div className='flex gap-5 mb-5'>
            <Link href="https://github.com/Qu1etboy">
                <a target="_blank">
                    <FaGithub className='text-2xl cursor-pointer'/>
                </a>
            </Link>
            <Link href="https://www.facebook.com/Non.Weerawong">
                <a target="_blank">
                    <FaFacebook className='text-2xl cursor-pointer'/>
                </a>
            </Link>
            <Link href="https://www.instagram.com/?hl=th">
                <a target="_blank">
                    <FaInstagram className='text-2xl cursor-pointer'/>
                </a>
            </Link>
          </div>
          @qu1etboy All rights reserved
        </div>
    )
}

export default Footer;