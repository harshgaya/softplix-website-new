import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://softplix.com";

  //const blogDir = path.join(process.cwd(), "app/blog");
  const serviceDir = path.join(process.cwd(), "app/services");

  const getSlugs = (dir) => {
    return fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith("["))
      .map((file) => file);
  };

  const blogs = [];
  const services = getSlugs(serviceDir);

  const blogItems = blogs
    .map(
      (slug) => `
      <item>
        <title>${slug.replace(/-/g, " ")}</title>
        <link>${baseUrl}/blog/${slug}</link>
        <pubDate>${new Date().toUTCString()}</pubDate>
      </item>
    `,
    )
    .join("");

  const serviceItems = services
    .map(
      (slug) => `
      <item>
        <title>${slug.replace(/-/g, " ")}</title>
        <link>${baseUrl}/services/${slug}</link>
        <pubDate>${new Date().toUTCString()}</pubDate>
      </item>
    `,
    )
    .join("");

  const xml = `
  <rss version="2.0">
    <channel>
      <title>Softplix</title>
      <link>${baseUrl}</link>
      <description>AI, Flutter, and Web Development Articles</description>
      ${blogItems}
      ${serviceItems}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
