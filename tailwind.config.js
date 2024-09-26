/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.emerald.600"),
              "&:hover": {
                color: theme("colors.emerald.800"),
              },
              transitionDuration: "200ms",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
