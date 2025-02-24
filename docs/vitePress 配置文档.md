# VitePress SSG 静态网站配置方案

## 创建属于自己的目录
> * mkdir my-blog && cd my-blog

## 初始化 package.json
> npm init -y | npm init

## 添加环境
> * npm add -D vitepress
> * 如果使用的是我们的 vitepress 的脚手架，我们只要使用 vitepress init 即可
> * 否则就是下面的配置流程了
>   * 修改package.json，添加三行script 执行脚本
>     * "docs:dev": "vitepress dev docs"
>     * "docs:build": "vitepress build docs"
>     * "docs:preview": "vite preview docs"
>   * 实现启动服务
>     * npm run dev

## 实现github 服务器
* 创建仓库
  * 仓库设置
    * 仓库一定要是 public 否则无效
  * github-page
  * 选择 github-actions
* 创建工作流
```yml
name: Deploy Pages

# 触发条件，push到main分支或者pull request到main分支
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

  # 支持手动在工作流上触发
  workflow_dispatch:

# 设置时区
env:
  TZ: Asia/Shanghai

# 权限设置
permissions:
  # 允许读取仓库内容的权限。
  contents: read
  # 允许写入 GitHub Pages 的权限。
  pages: write
  # 允许写入 id-token 的权限。
  id-token: write

# 并发控制配置
concurrency:
  group: pages
  cancel-in-progress: false

# 定义执行任务
jobs:
  # 构建任务
  build:

    runs-on: ubuntu-latest

    # node v20 运行
    strategy:
      matrix:
        node-version: [20]

    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v3
        with:
          # 保留 Git 信息
          fetch-depth: 0

      # 设置使用 Node.js 版本
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      # 使用 最新的 PNPM
      # 你也可以指定为具体的版本
      - uses: pnpm/action-setup@v2
        name: Install pnpm
        with:
          version: latest
          # version: 9
          run_install: false

        # 安装依赖
      - name: Install dependencies
        run: pnpm install --frozen-lockfile

        # 构建项目
      - name: Build blog project
        run: |
          echo ${{ github.workspace }}
          pnpm build

        # 资源拷贝
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./docs/.vitepress/dist
          destination: ./_site

        # 上传 _site 的资源，用于后续部署
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  # 部署任务
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```