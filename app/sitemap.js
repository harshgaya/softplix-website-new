// export default function sitemap() {
//   const baseUrl = "https://softplix.com";

//   const pages = [
//     "",
//     "/business-solution",
//     "/case-study-fintech",
//     "/web-development",
//     "/our-work",
//     "/about-us",
//     "/services/ai-development-company",
//     "/services/flutter-app-development-company",
//   ];

//   return pages.map((page) => ({
//     url: `${baseUrl}${page}`,
//     lastModified: new Date(),
//   }));
// }
import fs from "fs";
import path from "path";

export default function sitemap() {
  const baseUrl = "https://softplix.com";

  const appDir = path.join(process.cwd(), "app");

  function getPages(dir, base = "") {
    const files = fs.readdirSync(dir);
    let pages = [];

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        pages = pages.concat(getPages(fullPath, `${base}/${file}`));
      }

      if (file === "page.js" || file === "page.jsx") {
        pages.push(base || "/");
      }
    });

    return pages;
  }

  const routes = getPages(appDir);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
