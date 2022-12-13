import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const defaultTheme = "dark";
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme !== null) {
      setTheme(JSON.parse(savedTheme));
    } else {
      setTheme(defaultTheme);
    }
    // console.log(savedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
