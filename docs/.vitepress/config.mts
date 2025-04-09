import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/juwenzhang_ssg/",
  lastUpdated: true,
  title: "JuWenZhang",
  description: "JuWenZhang_Static_Site",
  appearance: 'dark',
  outDir: "docs/.vitepress/dist/",
  head: [['link', {rel: 'icon', href: '/img.jpg'}]],// 添加网站图标
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
          { text: "elasticsearch", link: '/middleware/elasticsearch' },
          { text: "http", link: '/middleware/http' },
          { text: "cors", link: '/middleware/cors' },
          { text: "designMode", link: '/middleware/designMode' },
          { text: "linux", link: '/middleware/linux' },
          { text: "docker", link: '/middleware/docker' },
          { text: "algorithm", link: '/middleware/algorithm' }
        ]
      },

      {
        text: 'Java后端',
        items: [
          { text: "java", link: '/java/backend/java' },
          { text: "spring", link: '/java/backend/spring' },
          { text: "springBoot", link: '/java/backend/springBoot' },
          { text: "springCloud", link: '/java/backend/springCloud' },
          { text: "mybatis", link: '/java/backend/mybatis' },
          { text: "mybatisPlus", link: '/java/backend/mybatisPlus' },
        ]
      },

      {
        text: 'Python后端',
        items: [
          { text: "python", link: '/python/backend/python' },
          { text: "django", link: '/python//backend/django' },
          { text: "drf", link: '/python//backend/drf' },
          { text: "flask", link: '/python//backend/flask' },
          { text: "fastApi", link: '/python//backend/fastApi' },
          { text: "sanic", link: '/python//backend/sanic' },
          { text: "pydantic", link: '/python//backend/pydantic' },
        ]
      },

      {
        text: 'Golang 后端',
        items: [
          { text: "golang", link: '/golang/backend/golang' },
          { text: "gin", link: '/golang//backend/gin' },
          { text: "echo", link: '/golang//backend/echo' },
          { text: "fastHttp", link: '/golang//backend/fastHttp' },
          { text: "beego", link: '/golang//backend/beego' },
          { text: "iris", link: '/golang//backend/iris' },
          { text: "fiber", link: '/golang//backend/fiber' },
        ]
      },

      {
        text: 'Rust 后端',
        items: [
          { text: "rust", link: '/rust/backend/rust' },
          { text: "actix", link: '/rust//backend/actix' },
          { text: "warp", link: '/rust//backend/warp' },
          { text: "tokio", link: '/rust//backend/tokio' },
          { text: "hyper", link: '/rust//backend/hyper' },
          { text: "rocket", link: '/rust//backend/rocket' },
          { text: "tide", link: '/rust//backend/tide' },
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
        { text: "elasticsearch", link: "/middleware/elasticsearch" },
        { text: "http", link: "/middleware/http" },
        { text: "cors", link: "/middleware/cors" },
        { text: "designMode", link: '/middleware/designMode' },
        { text: "linux", link: "/middleware/linux" },
        { text: "docker", link: "/middleware/docker" },
        { text: "algorithm", link: "/middleware/algorithm" }
      ],
      '/java/backend/': [
        { text: "java_basic", link: "/java/backend/java" },
        { text: "spring", link: "/java/backend/spring" },
        { text: "springBoot", link: "/java/backend/springBoot" },
        { text: "springCloud", link: "/java/backend/springCloud" },
        { text: "mybatis", link: "/java/backend/mybatis" },
        { text: "mybatisPlus", link: "/java/backend/mybatisPlus" },
      ],
      '/python/backend/': [

      ],
      '/golang/backend/': [

      ],
      '/rust/backend/': [

      ],
      '/year/': [
        { text: '2023', link: '/year/2023' },
        { text: '2022', link: '/year/2022' },
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
