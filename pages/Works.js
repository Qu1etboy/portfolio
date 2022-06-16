import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animations";
import { WorkGridItem } from "../components/GridItem";
import weatherApp from '../public/images/works/weather-app.png';
import todo from '../public/images/works/todo.png'
import Layout from '../components/layouts/article';
const Works = () => {
    return (
        <Layout title='Works'>
                <div className="relative w-full min-h-screen flex flex-col dark:text-white text-black duration-200">
                    <Navbar/>
                    <FadeIn>
                        <div className="flex flex-1 flex-col justify-center items-center mt-16 md:mt-32">
                            <h1 className='text-5xl font-bold mb-20'>My Works</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                                <WorkGridItem title='Weather App' thumbnail={weatherApp} url='https://weather.qu1etboy.vercel.app/'>
                                    A simple Weather App built using NextJS and Tailwind CSS
                                </WorkGridItem>
                                <WorkGridItem title='Todo App' thumbnail={todo} url='https://react-todo-list-app-mu.vercel.app/'>
                                    A simple Todo App that can add and remove your task.
                                </WorkGridItem>
                            </div>
                        </div>
                    </FadeIn>
                    <Footer />
                </div>
        </Layout>
    )
}

export default Works;