/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#FAFAFA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      maxWidth: {
        prose: "65ch",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ink"),
            maxWidth: "65ch",
            a: {
              color: theme("colors.ink"),
              textDecoration: "underline",
              "&:hover": {
                opacity: "0.6",
              },
              transitionDuration: "150ms",
            },
            "code, pre": {
              fontFamily: theme("fontFamily.mono").join(", "),
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme("colors.paper"),
            a: {
              color: theme("colors.paper"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
