// 生成标准 sitemap.xml 文件
import fs from "fs";
import path from "path";

const SITE_URL = "https://arcletcopier.com";

// 页面配置 - 标准 sitemap 格式
const pages = [
  {
    url: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/zh/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/zh-tw/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/de/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/fr/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/pt/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/ru/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/ko/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/ja/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/es/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/zh/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/zh-tw/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/de/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/fr/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/pt/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ru/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ko/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ja/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/es/privacy/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/zh/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/zh-tw/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/de/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/fr/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/pt/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ru/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ko/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/ja/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    url: "/es/terms/",
    priority: "0.5",
    changefreq: "monthly",
  },
];

function generateStandardSitemap() {
  // 使用 YYYY-MM-DD 格式的日期
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach((page) => {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  return xml;
}

// 生成并保存标准 sitemap.xml
const sitemapXml = generateStandardSitemap();
const outputPath = path.join(process.cwd(), "dist", "sitemap.xml");

// 确保目录存在
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入标准格式的 sitemap.xml
fs.writeFileSync(outputPath, sitemapXml, "utf8");

// 删除 Astro 生成的复杂格式文件
const astroFiles = ["sitemap-index.xml", "sitemap-0.xml"];
astroFiles.forEach((file) => {
  const filePath = path.join(outputDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

console.log("✅ 成功生成标准 sitemap.xml");
console.log(`📍 路径: ${outputPath}`);
console.log("📋 格式: 标准 XML sitemap (无 hreflang)");
