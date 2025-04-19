import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/juwenzhang_ssg/",
  lastUpdated: true,
  title: "JuWenZhang",
  keywords: "Juwenzhang,juwenzhang,juzhihong,jzh,jzh-blog,jzh-ssg,blog,jzh-ssg,jzh-ssg-blog,juwenzhang-blog-ssg",
  description: "JuWenZhang_Static_Site",
  appearance: 'dark',
  outDir: "docs/.vitepress/dist/",
  head: [
    ['link', { rel: 'icon', href: '/img.ico' }]
  ],
  themeConfig: {
    logo: "/img.jpg",
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          { text: "html", link: '/frontend/html' },
          { text: "css", link: '/frontend/css' },
          { text: "javascript", link: '/frontend/javascript' },
          { text: "typescript", link: '/frontend/typescript' },
          { text: "react", link: '/frontend/react' },
          { text: "vue", link: '/frontend/vue' },
          { text: "visibleEnd", link: '/frontend/visibleEnd' },
          { text: "vite", link: '/frontend/vite' },
          { text: "webpack", link: '/frontend/webpack' },
          { text: "rollup", link: '/frontend/rollup' },
          { text: "gulp", link: '/frontend/gulp' },
          { text: "nodejs", link: '/frontend/nodejs' },
          { text: "deno", link: '/frontend/deno' },
          { text: "interview", link: '/frontend/interview' },
        ]
      },

      {
        text: "中间件",
        items: [
          { text: "mysql", link: '/middleware/mysql' },
          { text: "mongodb", link: '/middleware/mongodb' },
          { text: "redis", link: '/middleware/redis' },
          { text: "elasticsearch", link: '/middleware/elasticSearch' },
          { text: "http", link: '/middleware/http' },
          { text: "cors", link: '/middleware/cors' },
          { text: "designMode", link: '/middleware/designMode' },
          { text: "linux", link: '/middleware/linux' },
          { text: "docker", link: '/middleware/docker' },
          { text: "algorithm", link: '/middleware/algorithm' }
        ]
      },

      {
        text: '年度总结',
        items: [
          { text: "2025", link: '/year/2025'}
        ]
      }
    ],

    sidebar: {
      '/frontend/': [
        { text: 'HTML', link: '/frontend/html' },
        { text: "CSS", link: '/frontend/css' },
        { text: "JavaScript", link: '/frontend/javascript' },
        { text: "TypeScript", link: '/frontend/typescript' },
        { text: "React", link: '/frontend/react' },
        { text: "Vue", link: '/frontend/vue' },
        { text: "VisibleEnd", link: '/frontend/visibleEnd' },
        { text: "Vite", link: '/frontend/vite' },
        { text: "Webpack", link: '/frontend/webpack' },
        { text: "Rollup", link: '/frontend/rollup' },
        { text: "Gulp", link: '/frontend/gulp' },
        { text: "Nodejs", link: '/frontend/nodejs' },
        { text: "Deno", link: '/frontend/deno' },
        { text: "Interview", link: '/frontend/interview' },
      ],
      '/middleware/': [
        { text: "mysql", link: "/middleware/mysql" },
        { text: "mongodb", link: "/middleware/mongodb" },
        { text: "redis", link: "/middleware/redis" },
        { text: "elasticsearch", link: "/middleware/elasticSearch" },
        { text: "http", link: "/middleware/http" },
        { text: "cors", link: "/middleware/cors" },
        { text: "designMode", link: '/middleware/designMode' },
        { text: "linux", link: "/middleware/linux" },
        { text: "docker", link: "/middleware/docker" },
        { text: "algorithm", link: "/middleware/algorithm" }
      ],
      '/year/': [
        { text: '2025', link: '/year/2025' },
      ],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    editLink: {
      pattern: 'https://github.com/juwenzhang/juwenzhang_ssg/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdatedText: "最近更新时间",

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 @bytedance JuWenZhang'
    },

    socialLinks: [
      { icon: "juejin", link: "https://juejin.cn/user/3877322821505440" },
      { icon: 'github', link: 'https://github.com/juwenzhang/' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          model: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '重置搜索查询',
            footer: {
              selectorText: "选择",
              navigateText: "切换",
            }
          }
        }
      }
    },
  }
})
