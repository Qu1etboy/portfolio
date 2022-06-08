import { useContext, useRef, useEffect } from 'react'
import { ThemeContext } from '../components/Theme'
import ThemeToggle from '../components/ThemeToggle';
import Head from 'next/head';
import Link from 'next/link'
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/Animations';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Home.module.css';

export default function Home() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed('#typing-text', {
      strings: ['Developer', 'Gamer', 'Student'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 1000
    });

    return (() => {
      typed.current.destroy();
    });
  }, [])

  return (
    <div className={theme}>
      <Head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <title>Qu1etboy</title>
      </Head>
      <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-900 w-full duration-200 text-black dark:text-white flex flex-col">
        <Navbar />

        <div className='w-full mt-32 md:mt-96  flex justify-center items-center'>
          <FadeIn>
            <div className='flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <div className= 'text-center duration-75'>
                  <h1 className='font-bold text-5xl md:text-6xl my-5'>Hello there, I'm <span className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Weerawong</span></h1>
                  <p className='text-4xl font-bold p-5'>I'm a <span ref={el} id="typing-text" className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Developer</span></p>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-32 mt-10 mx-auto w-72 md:w-96'>
                <Link href="/About">
                  <button className='text-lg from-pink-600 via-pink-500 bg-gradient-to-r to-pink-600 p-5 rounded-lg hover:bg-pink-700 duration-75'>About me</button>
                </Link>
                <Link href='/Works'>
                  <button className='text-lg from-pink-600 via-pink-500 bg-gradient-to-r to-pink-600 p-5 rounded-lg hover:bg-pink-700 duration-75'>View my works</button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
        

        <Footer />
        
      </div>
    </div>
  )
}
