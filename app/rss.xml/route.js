import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://softplix.com";

  const serviceDir = path.join(process.cwd(), "app/services");
  const categoryErrorDir = path.join(
    process.cwd(),
    "app/category/node-js/error",
  );

  const getSlugs = (dir) => {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith("["))
      .map((file) => file);
  };

  const services = getSlugs(serviceDir);
  const categoryErrors = getSlugs(categoryErrorDir);

  // SERVICES
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

  // CATEGORY: node-js/error
  const categoryItems = categoryErrors
    .map(
      (slug) => `
      <item>
        <title>${slug.replace(/-/g, " ")}</title>
        <link>${baseUrl}/category/node-js/error/${slug}</link>
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
      ${serviceItems}
      ${categoryItems}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
