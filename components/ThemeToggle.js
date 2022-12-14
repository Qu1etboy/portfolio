import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <button
        className="m-3 p-3 text-xl text-white dark:text-neutral-900 rounded-md bg-blue-500 dark:bg-yellow-500 duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-yellow-600"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {mounted && resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
