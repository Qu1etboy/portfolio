import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import { astroImageTools } from "astro-imagetools";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  outDir: "./dist",
  output: "server",
  vite: {
    plugins: [
      {
        name: "import.meta.url-transformer",
        transform: (code, id) => {
          if (id.endsWith(".astro"))
            return code.replace(/import.meta.url/g, `"${id}"`);
        },
      },
    ],
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [tailwind()],
  adapter: vercel(),
});
