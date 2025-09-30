# Arclet Copier Landing Page

Arclet Copier 的 [官方落地页](https://arcletcopier.com)，使用 Astro 构建的现代化、响应式网站。

## 🌟 特性

- **现代化设计**: 参考 Arclet Copier 扩展程序的设计风格，简洁优雅
- **多语言支持**: 支持中文和英文两种语言
- **响应式布局**: 完美适配桌面和移动设备
- **SEO 优化**: 完整的元数据、结构化数据和社交媒体标签
- **高性能**: 使用 Astro 构建，静态生成，加载速度快
- **无渐变设计**: 遵循原扩展程序的简洁风格，不使用渐变效果

## 🚀 技术栈

- **Astro**: 现代静态网站生成器
- **Tailwind CSS**: 实用优先的 CSS 框架
- **TypeScript**: 类型安全的 JavaScript
- **国际化**: 内置的多语言支持

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.astro     # 页面头部导航
│   ├── Hero.astro       # 英雄区域
│   ├── Features.astro   # 功能特色展示
│   ├── Screenshots.astro # 界面截图
│   ├── Download.astro   # 下载区域
│   ├── Footer.astro     # 页面底部
│   └── BackToTop.astro  # 返回顶部按钮
├── i18n/               # 国际化配置
│   ├── zh.json         # 中文翻译
│   ├── en.json         # 英文翻译
│   └── utils.ts        # 国际化工具函数
├── layouts/            # 页面布局
│   └── Layout.astro    # 主布局模板
└── pages/              # 页面文件
    ├── index.astro     # 中文主页
    └── en/
        └── index.astro # 英文主页
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 🎨 设计原则

### 颜色方案

- **主色调**: 绿色 (#22c55e) - 与扩展程序保持一致
- **次要颜色**: 灰色调 (#64748b, #1e293b 等)
- **背景色**: 纯白色和浅灰色

### 字体

- **无衬线字体**: Inter - 用于正文和界面文字
- **衬线字体**: Playfair Display - 用于标题和强调文字

### 布局特点

- 简洁的卡片式设计
- 充足的留白空间
- 现代化的圆角元素
- 优雅的阴影效果
- 无渐变设计

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **手机**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🌍 国际化

支持以下语言：

- **中文 (zh)**: 默认语言，访问 `/`
- **English (en)**: 英文版本，访问 `/en`

## 📊 SEO 优化

- 完整的 meta 标签
- Open Graph 社交媒体标签
- Twitter Card 支持
- 结构化数据 (JSON-LD)
- 语言标识和规范链接
- 站点地图支持

## 🔧 自定义

### 修改颜色主题

编辑 `tailwind.config.cjs` 文件中的颜色配置：

```javascript
colors: {
  primary: {
    // 修改主色调
  }
}
```

### 添加新语言

1. 在 `src/i18n/` 目录下创建新的语言文件
2. 更新 `astro.config.mjs` 中的语言配置
3. 创建对应的页面文件

### 修改内容

主要内容存储在 `src/i18n/` 目录下的 JSON 文件中，可以直接编辑这些文件来修改网站内容。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 开发者

由 [@rokcso](https://github.com/rokcso) 开发

## 🔗 相关链接

- [Arclet Copier GitHub](https://github.com/rokcso/arclet-copier)
- [Chrome 应用商店](https://chrome.google.com/webstore/category/extensions)
- [开发者网站](https://rokcso.com)
