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
        aria-label="Theme Dark Mode"
        type="button"
        className="m-3 p-3 text-xl text-white dark:text-neutral-900 rounded-md bg-blue-500 dark:bg-yellow-500 duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-yellow-600"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-gray-200 dark:text-gray-800"
          >
            {resolvedTheme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
