import { createClient } from "next-sanity";
import { sanityConfig } from "../lib/sanity-config";

function generateSiteMap(works) {
  const routes = ["/", "/about", "/works"];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
       .map(
         (route) => `
         <url>
           <loc>https://qu1etboy.dev${route}</loc>
         </url>
        `
       )
       .join("")}
     
     ${works
       .map(
         (work) => `
       <url>
         <loc>${`https://qu1etboy.dev/works/${work.slug.current}`}</loc>
       </url>
     `
       )
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Get all works from Sanity
  const client = createClient(sanityConfig);
  const works = await client.fetch(`*[_type == "work"]`);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(works);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
