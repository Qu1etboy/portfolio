import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const defaultTheme = 'dark';
    const [theme, setTheme] = useState(defaultTheme);
    
    // this code is not working idk why. will fix later.
    // const [theme, setTheme] = useState(() => {
    //     var savedTheme = null;
    //     if (typeof window !== 'undefined')
    //         savedTheme = localStorage.getItem('theme');
    //     if (savedTheme) {
    //         return JSON.parse(savedTheme);
    //     }
    //     else {
    //         return defaultTheme;
    //     }
    // });

    // // run when reload the page
    
    // useEffect(() => {
    //     localStorage.setItem('theme', JSON.stringify(theme));
    // }, [theme])
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}