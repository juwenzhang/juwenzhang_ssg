# ssr 服务端渲染

> 搜索引擎的话对于我们的静态HTML的亲和度更高，但是通过javascript渲染是十分低的呐

## 什么是SPA呐
* SPA 就是我们的一个 single-page-application吧
  * SPA 应用的话主要是使用的是我们的客户端的渲染模式吧: CSR-Client Side Rendering
* SPA 应用的开发的话主要是通过我们的服务器直接返回一个单页面HTML实现的呐，就类似于我们的vue 和 react 的开发模式吧
* 同时我们的SPA的页app设计的话主要是通过我们的 Javascript 实现的动态渲染吧
  * 一个 SPA 界面的话主要是通过客户端的渲染，javascript 的动态更新实现吧

## SPA 具备的优缺点
* 优点
  * 只需要进行加载一次应用即可，因为请求后，我们的服务器是立马返回一个HTML页面的呐
  * 同时使用路由进行动态的切换页面的时候，页面是不需要进行重新加载的呐
  * 和原本的 web 应用做对比的话，好处就是只需要进行向服务器请求一次静态资源即可
  * 同时具备更好的用户体验吧
* 缺点
  * 不利于我们的SEO优化吧
  * 同时SPA仅仅是返回一个HTML页面，这个时候呐，我们的一次性返回的资源是十分多的呐
  * 此时就可能导致最终的首屏渲染问题的出现吧
  * SPA是不利于进行构建我们的大型项目的呐，复杂的SPA应用难以维护吧

## SEO优化实现
* 使用元素语义化标签
* h标签的合理使用，适当使用，不要大量使用
* meta元数据的配置: title, description, keywords
* 每个子页面具备我们的标题以及内部连接
  * 标题是可以通过CSS实现隐藏的呐
* 使用文本标记元素以及img标签具备alt属性吧
* robots.txt 文档的配置，告诉搜索引擎，那些数据可以爬取
* sitemap.xml 文档的配置，告诉搜索引擎，我们的网站有哪些页面

## SSG 静态站点生成
* SSG static site generation
* 可以使用我们的SSG技术实现我们的SEO优化吧
* SSG在程序的构建阶段就实现了我们的HTML页面的生成，预先把资源生成好，然后返回给客户端进行展示吧
* 优点
  * 访问速度快，减少我们的服务器的资源占用，构建阶段就将每一个HTML文档生成好了
  * 服务器直接将我们的HTML静态界面返回给客户端进行展示吧
  * SSG保留了SPA页面的前端路由的特性吧
* 缺点
  * 每次更新都需要进行重新构建
  * 不可以展示实时性的内容，实时性内容还是使用SSR来实现才是可以的呐
* 技术栈选择: vitepree vuepress nextjs nuxtjs

## SSR 服务端渲染
* SSR server side rendering
* 实现的就是将我们的页面的构建在服务端就直接完成，然后将静态页面返回给客户端展示的过程吧
* SSR有利于我们的SEO优化的呐
* 优点
  * SSR 利于进行我们的SEO优化
  * 用户在访问静态资源的时候，服务器立马将资源进行返回，不需要像SPA那样，将所有资源加载完后才进行渲染吧
  * SSR 在 hydration后，保持了前端的SPA web界面的可交互性功能吧
* 缺点
  * 服务器的压力过大，此时对服务器的要求就会更高吧
* 技术栈选型
  * php jsp 实现
  * nodejs express + webpack 来实现
  * nuxtjs + vuejs | nextjs + reactjs 来实现吧
* 可以做的页面
  * saas产品: 电子邮件，短信，电话
  * 门户网站: 门户网站，博客网站，新闻网站，论坛网站
  * 购物网站: 购物网站，商城网站，网店网站
  * 官网界面的搭建

## vue3 SSR搭建
* 在实现的时候，我们使用 createSSRApp 来进行创建我们的应用吧，通过该函数创建的就是我们的SSR应用了吧
  * `createApp` 创建对应的应用，直接挂载到页面的 div.app 中
  * `createSSRApp` 创建对应的应用，在激活的状态下才进行挂载应用
    * 服务端通过最终的 `renderTOString` 方法进行激活应用吧 (`@vue/server-renderer包中的呐`)
* 首先搭建 node 后端服务
  * 这里可以随意进行选择: express | koa 都是可以的呐
  * `pnpm i express`
  * `pnpm install -D webpack-node-externals webpack-dev-server webpack webpack-cli`
    * webpack-node-externals: 忽略 node_modules 中的文件
  * `pnpm i nodemon -D`
* 准备SPA单页面环境
  * `npm i vue vue-router vue-template-compiler` 
  * `pnpm i vue-loader babel-loader @babel/core @babel/preset-env -D`
  * `npm i -D webpack-merge webpack-cli webpack-dev-server webpack-node-externals`
* 同时还具备我们的一些 vue 相关的依赖吧
  * vue-style-loader
  * vue-loader
  * css-loader
  * style-loader
  * VueLoaderPlugin
* `实现手动搭建的流程为`:
  * 先根据一个App.vue 进行创建 `createSSRApp -> vue` ssr 应用
  * 然后将该应用实现暴露给外放进行使用，注意，写成函数形式，防止应用`跨请求注入`
  * 在自己的 node 服务中引入app，将app使用 `renderToString -> @vue/server-renderer` 方法转化为页面
  * 最后还需要进行的是对应用进行激活，否则响应式就会失效吧，这一步就是我们的 `hydration` 水和步骤吧