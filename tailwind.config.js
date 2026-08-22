/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Warm ink/paper — easier on the eyes than pure black/white.
				ink: "#1A1A17",
				paper: "#FAF9F7",
				muted: "#6F6B64", // meta text, hue-biased grey
				line: "#E7E3DB", // hairlines / borders
				accent: "#3F4FA0", // fountain-pen indigo
			},
			fontFamily: {
				display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
				serif: ['"Newsreader"', "Georgia", '"Times New Roman"', "serif"],
				mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
			},
			maxWidth: {
				prose: "65ch",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: "none",
						fontFamily: theme("fontFamily.serif").join(", "),
						fontSize: "1.1875rem",
						lineHeight: "1.72",
						"--tw-prose-body": theme("colors.ink"),
						"--tw-prose-headings": theme("colors.ink"),
						"--tw-prose-links": theme("colors.accent"),
						"--tw-prose-bold": theme("colors.ink"),
						"--tw-prose-counters": theme("colors.muted"),
						"--tw-prose-bullets": theme("colors.accent"),
						"--tw-prose-hr": theme("colors.line"),
						"--tw-prose-quotes": theme("colors.ink"),
						"--tw-prose-quote-borders": theme("colors.accent"),
						"--tw-prose-code": theme("colors.ink"),
						p: { textWrap: "pretty" },
						"h1, h2, h3, h4": {
							fontFamily: theme("fontFamily.display").join(", "),
							fontWeight: "600",
							letterSpacing: "-0.01em",
							textWrap: "balance",
						},
						a: {
							color: theme("colors.accent"),
							textDecoration: "underline",
							textDecorationColor: theme("colors.line"),
							textDecorationThickness: "1px",
							textUnderlineOffset: "3px",
							fontWeight: "inherit",
							transitionProperty:
								"text-decoration-color, text-decoration-thickness",
							transitionDuration: "150ms",
							"&:hover": {
								textDecorationColor: theme("colors.accent"),
								textDecorationThickness: "2px",
							},
						},
						// The blockquote that pops: large Newsreader italic + ink-indigo rule
						blockquote: {
							fontFamily: theme("fontFamily.serif").join(", "),
							fontStyle: "italic",
							fontWeight: "400",
							fontSize: "1.6rem",
							lineHeight: "1.3",
							color: theme("colors.ink"),
							borderLeftWidth: "3px",
							borderLeftColor: theme("colors.accent"),
							paddingLeft: "1.5rem",
							marginTop: "2.75rem",
							marginBottom: "2.75rem",
						},
						"blockquote p::before": { content: '""' },
						"blockquote p::after": { content: '""' },
						"code, pre": {
							fontFamily: theme("fontFamily.mono").join(", "),
						},
						"code::before": { content: '""' },
						"code::after": { content: '""' },
						"ul > li::marker": { color: theme("colors.accent") },
					},
				},
				invert: {
					css: {
						"--tw-prose-body": theme("colors.paper"),
						"--tw-prose-headings": theme("colors.paper"),
						"--tw-prose-bold": theme("colors.paper"),
						"--tw-prose-quotes": theme("colors.paper"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
