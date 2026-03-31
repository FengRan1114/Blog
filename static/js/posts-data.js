/**
 * posts-data.js — 所有文章的目录数据
 *
 * 每次新建一篇文章，只需要：
 *  1. 在 posts/ 目录下创建对应的 HTML 文件
 *  2. 在下面 posts 数组里添加一条记录
 *
 * 字段说明：
 *  id        — 唯一数字 ID，自增
 *  file      — 对应的文章文件名（放在 posts/ 目录下）
 *  title     — 文章标题
 *  tag       — 分类标签（思考 / 日常 / 生活 / 阅读 / 感悟 / 随笔…自由定义）
 *  date      — 发布日期 YYYY-MM-DD
 *  excerpt   — 摘要，显示在列表页（建议 50-80 字）
 *  readTime  — 阅读时长估算（如 "约 3 分钟"）
 *  cover     — 封面图路径（相对于 index.html），留空则显示 emoji 占位
 *  emoji     — 封面无图时的占位符号
 */

const posts = [
  {
    id: 1,
    file: "posts/post-1.html",
    title: "三思而后语",
    tag: "思考",
    date: "2025-03-31",
    excerpt: "沉默比说错好，纯粹比深思熟虑好",
    readTime: "约 1分钟",
    cover: "",
    emoji: "🤔"
  },
  {
    id: 2,
    file: "posts/post-2.html",
    title: "代码跑通的那一刻",
    tag: "日常",
    date: "2025-03-25",
    excerpt: "调了整整两个小时，最后发现是一个多余的括号。那种豁然开朗，是任何事情都替代不了的。",
    readTime: "约 2 分钟",
    cover: "",
    emoji: "⌘"
  },
  {
    id: 3,
    file: "posts/post-3.html",
    title: "山里的那个周末，什么都没有发生",
    tag: "生活",
    date: "2025-03-15",
    excerpt: "没有网络、没有通知。风声、鸟鸣、树叶的影子在地上移动。回来之后，思路反而清晰了很多。",
    readTime: "约 3 分钟",
    cover: "",
    emoji: "◎"
  },
  {
    id: 4,
    file: "posts/post-4.html",
    title: "读《失控》：软件是在培育生态，不是建造楼房",
    tag: "阅读",
    date: "2025-02-28",
    excerpt: "凯文·凯利这本书让我重新理解了复杂系统。也许我们一直在用错误的比喻，去理解我们自己造出的东西。",
    readTime: "约 5 分钟",
    cover: "",
    emoji: "⊙"
  },
  {
    id: 5,
    file: "posts/post-5.html",
    title: "爱上的过程，本身也是爱",
    tag: "感悟",
    date: "2025-02-10",
    excerpt: "辛梅尔说，爱不是一个状态，而是一个过程。那些正在靠近的时刻，和已经抵达的时刻，同等真实。",
    readTime: "约 3 分钟",
    cover: "",
    emoji: "◇"
  }
];
