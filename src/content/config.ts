import { defineCollection, z } from "astro:content"

const thoughts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		// false (default) hides the post in production; dev always shows all.
		published: z.boolean().default(false),
		// Optional OG image (a path under public/, e.g. "/og/my-post.jpg").
		// When set it fills the left column of the share card; omitted, the
		// text takes the full width.
		image: z.string().optional(),
	}),
})

const papers = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
	}),
})

export const collections = { thoughts, papers }
