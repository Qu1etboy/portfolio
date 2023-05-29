export default function sitemap() {
  const routes = ['', '/about', '/projects'];
  return routes.map((route) => ({
    url: `https://qu1etboy.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
}
