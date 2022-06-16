import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const defaultTheme = 'dark';
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}