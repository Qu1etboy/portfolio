import { useContext } from "react";
import { FaMoon, FaSun} from 'react-icons/fa';
import { ThemeContext } from "./Theme";

const ThemeToggle = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);

    return (
        <div className={theme}>
            <button className='m-3 p-3 text-xl text-white dark:text-neutral-900 rounded-md bg-blue-500 dark:bg-yellow-500 duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-yellow-600' onClick={toggleTheme}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    )
}

export default ThemeToggle;