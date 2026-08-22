import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import satori from "satori"
import { html } from "satori-html"
import { Resvg } from "@resvg/resvg-js"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const prerender = true

export async function getStaticPaths() {
	const entries = await getCollection(
		"thoughts",
		({ data }) => import.meta.env.DEV || data.published,
	)
	return entries.map((entry) => ({
		params: { slug: entry.slug },
		props: { entry },
	}))
}

// --- Fonts (Satori needs the binaries; woff is supported) ---
const fontFile = (rel: string) =>
	readFile(path.join(process.cwd(), "node_modules", rel))

let fontsPromise: Promise<
	Array<{
		name: string
		data: Buffer
		weight: 400 | 700 | 500
		style: "normal"
	}>
>
function loadFonts() {
	fontsPromise ??= Promise.all([
		fontFile(
			"@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-400-normal.woff",
		),
		fontFile(
			"@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff",
		),
		fontFile(
			"@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff",
		),
	]).then(([b400, b700, m500]) => [
		{
			name: "Bricolage Grotesque",
			data: b400,
			weight: 400 as const,
			style: "normal" as const,
		},
		{
			name: "Bricolage Grotesque",
			data: b700,
			weight: 700 as const,
			style: "normal" as const,
		},
		{
			name: "JetBrains Mono",
			data: m500,
			weight: 500 as const,
			style: "normal" as const,
		},
	])
	return fontsPromise
}

const MIME: Record<string, string> = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
}

async function imageDataUri(image?: string): Promise<string | null> {
	if (!image) return null
	try {
		const mime = MIME[path.extname(image).toLowerCase()]
		if (!mime) return null
		const buf = await readFile(path.join(process.cwd(), "public", image))
		return `data:${mime};base64,${buf.toString("base64")}`
	} catch {
		return null // missing/unreadable image → text takes full width
	}
}

const esc = (s: string) =>
	s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")

export const GET: APIRoute = async ({ props }) => {
	const { entry } = props as {
		entry: Awaited<ReturnType<typeof getCollection>>[number]
	}
	const { title, description } = entry.data as {
		title: string
		description: string
		image?: string
	}
	const readingTime = Math.max(
		1,
		Math.round(entry.body.split(/\s+/).filter(Boolean).length / 200),
	)

	const img = await imageDataUri((entry.data as { image?: string }).image)
	const textWidth = img ? 600 : 1200
	const titleSize = title.length > 55 ? 52 : title.length > 32 ? 64 : 76

	const markup = html(`
    <div style="display:flex; width:1200px; height:630px; background:#FAF9F7; font-family:'Bricolage Grotesque';">
      ${
				img
					? `<div style="display:flex; width:600px; height:630px;"><img src="${img}" width="600" height="630" style="width:600px; height:630px; object-fit:cover;" /></div>`
					: ""
			}
      <div style="display:flex; flex-direction:column; justify-content:space-between; width:${textWidth}px; height:630px; padding:72px 64px; box-sizing:border-box;">
        <div style="display:flex; flex-direction:column;">
          <div style="font-family:'JetBrains Mono'; font-size:22px; letter-spacing:3px; color:#3F4FA0;">THOUGHTS</div>
          <div style="display:flex; font-size:${titleSize}px; font-weight:700; color:#1A1A17; line-height:1.04; letter-spacing:-1.5px; margin-top:28px;">${esc(
		title,
	)}</div>
          <div style="display:flex; font-size:28px; color:#6F6B64; line-height:1.4; margin-top:26px;">${esc(
						description,
					)}</div>
        </div>
        <div style="display:flex; align-items:center; font-family:'JetBrains Mono'; font-size:22px; color:#6F6B64;">
          <span style="color:#1A1A17;">Weerawong V.</span>
          <span style="color:#3F4FA0; margin:0 14px;">·</span>
          <span>${readingTime} min read</span>
        </div>
      </div>
    </div>
  `)

	const svg = await satori(markup, {
		width: 1200,
		height: 630,
		fonts: await loadFonts(),
	})

	const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
		.render()
		.asPng()

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	})
}
