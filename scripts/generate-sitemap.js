// 生成包含 hreflang 的 sitemap.xml 文件
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://arcletcopier.com';

// 支持的语言配置
const languages = [
  { code: 'en', url: '' }, // 默认语言不带前缀
  { code: 'zh', url: '/zh' },
  { code: 'zh-tw', url: '/zh-tw' },
  { code: 'de', url: '/de' },
  { code: 'fr', url: '/fr' },
  { code: 'pt', url: '/pt' },
  { code: 'ru', url: '/ru' },
  { code: 'ko', url: '/ko' },
  { code: 'ja', url: '/ja' },
  { code: 'es', url: '/es' },
];

// 页面配置
// lastmod 说明：
// - 首页：使用构建日期（内容经常更新）
// - Privacy/Terms：使用固定日期（仅在内容修改时需手动更新此日期）
const pages = [
  {
    path: '',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0], // 使用构建日期
  },
  {
    path: '/privacy',
    priority: '0.3', // 法律文档，较低优先级
    lastmod: '2024-09-23', // 固定日期，内容修改时需手动更新
  },
  {
    path: '/terms',
    priority: '0.3', // 法律文档，较低优先级
    lastmod: '2024-09-23', // 固定日期，内容修改时需手动更新
  },
];

function generateSitemapWithHreflang() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // 为每个页面生成所有语言版本的 URL
  pages.forEach(page => {
    languages.forEach(lang => {
      const url = `${SITE_URL}${lang.url}${page.path}`;

      xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
`;

      // 添加 hreflang 标签
      languages.forEach(hrefLang => {
        const hrefUrl = `${SITE_URL}${hrefLang.url}${page.path}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${hrefLang.code}" href="${hrefUrl}" />
`;
      });

      // 添加 x-default hreflang (指向英语版本)
      const defaultUrl = `${SITE_URL}${page.path}`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />
  </url>
`;
    });
  });

  xml += `</urlset>`;

  return xml;
}

// 生成并保存 sitemap.xml
const sitemapXml = generateSitemapWithHreflang();
const outputPath = path.join(process.cwd(), 'dist', 'sitemap.xml');

// 确保目录存在
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入包含 hreflang 的 sitemap.xml
fs.writeFileSync(outputPath, sitemapXml, 'utf8');

// 删除 Astro 生成的复杂格式文件
const astroFiles = ['sitemap-index.xml', 'sitemap-0.xml'];
astroFiles.forEach(file => {
  const filePath = path.join(outputDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

console.log('✅ 成功生成包含 hreflang 的 sitemap.xml');
console.log(`📍 路径: ${outputPath}`);
console.log('🌐 包含功能:');
console.log('  • 10种语言支持');
console.log('  • hreflang 标签');
console.log('  • x-default 标签');
console.log('  • SEO 友好格式');
