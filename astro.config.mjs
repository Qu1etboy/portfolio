import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import mermaid from "astro-mermaid"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	site: "https://qu1etboy.dev",
	publicDir: "./public",
	outDir: "./dist",
	output: "server",
	markdown: {
		shikiConfig: {
			theme: "dracula",
		},
	},
	vite: {
		plugins: [
			{
				name: "import.meta.url-transformer",
				transform: (code, id) => {
					if (id.endsWith(".astro"))
						return code.replace(/import.meta.url/g, `"${id}"`)
				},
			},
		],
		ssr: {
			external: ["svgo"],
		},
	},
	integrations: [
		tailwind(),
		mdx(),
		mermaid({
			theme: "neutral",
			autoTheme: true,
		}),
	],
	adapter: vercel(),
})
