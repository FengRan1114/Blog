# Pan Feng · 个人博客

一个轻量的纯静态博客，无需服务器，直接用浏览器打开即可。

---

## 项目结构

```
blog/
├── index.html              ← 首页（文章列表）
├── posts/
│   ├── _template.html      ← 新文章模板（复制这个来写新文章）
│   ├── post-1.html
│   ├── post-2.html
│   └── ...
└── static/
    ├── css/
    │   ├── style.css       ← 全局共享样式
    │   ├── index.css       ← 首页专用样式
    │   └── post.css        ← 文章页专用样式
    ├── js/
    │   └── posts-data.js   ← 文章目录数据（每次新增文章需要编辑这里）
    └── img/                ← 放你的图片
```

---

## 如何写一篇新文章

### 第一步：复制模板

把 `posts/_template.html` 复制一份，重命名为 `posts/post-6.html`（数字自增）。

### 第二步：编辑文章内容

用任何文本编辑器打开，修改以下内容：

| 位置 | 要改的内容 |
|------|-----------|
| `<title>` | 改为文章标题 |
| `<meta-tag>` | 改为分类（思考 / 日常 / 生活 / 阅读 / 感悟…） |
| `<meta-date>` | 改为日期 YYYY-MM-DD |
| `<meta-readtime>` | 改为阅读时长 |
| `<article-title>` | 改为文章标题 |
| `.article-content` | 写正文内容 |

### 第三步：登记到目录

打开 `static/js/posts-data.js`，在 `posts` 数组开头加一条记录：

```js
{
  id: 6,
  file: "posts/post-6.html",
  title: "你的文章标题",
  tag: "思考",
  date: "2025-04-01",
  excerpt: "文章摘要，50-80字，显示在首页列表。",
  readTime: "约 3 分钟",
  cover: "",        // 封面图路径，如 "static/img/post6.jpg"，留空显示 emoji
  emoji: "◈"        // 无封面图时的占位符
},
```

---

## 正文内容格式

```html
<!-- 普通段落 -->
<p>这是一段文字。</p>

<!-- 一级小标题 -->
<h2>小标题</h2>

<!-- 二级小标题 -->
<h3>更小的标题</h3>

<!-- 引用块（带橙色左线） -->
<blockquote>这是一句引用或金句。</blockquote>

<!-- 单张图片 -->
<img src="../static/img/photo.jpg" alt="图片描述">
<p class="photo-caption">图片说明文字</p>

<!-- 两栏图片网格 -->
<div class="photo-grid">
  <img src="../static/img/photo1.jpg" alt="照片1">
  <img src="../static/img/photo2.jpg" alt="照片2">
</div>
```

---

## 封面图

有封面图时，把文章里的：

```html
<div class="hero-placeholder">◈</div>
```

替换为：

```html
<img src="../static/img/your-photo.jpg" alt="封面描述">
```

图片建议尺寸：宽 1200px 以上，横向构图。

---

## 如何打开

直接双击 `index.html`，用浏览器打开即可。无需安装任何工具。
