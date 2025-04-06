# HTML 文档

## HTML 什么是DOCTYPE？ 其作用是什么？？
* Doctype 是我们的 html5 的文档声明
* 其作用主要是告诉我们的浏览器使用怎样的格式解析我们的 HTML 文档吧

## HTML 什么是html的元素语义化
* html元素语义化的话最主要的就是使用正确的标签做正确的事情，给我们的某块内容提供一些合适的标签，使得我们的页面具备良好的结构
* 为什么需要使用我们的元素语义化:
  * 在没有我们的CSS的干涉之下，能够呈现出页面的合理结构
  * 合理使用我们的标签可是提高SEO优化，这样就可以实现和搜索引擎之间简历良好的关系吧
  * 方便团队的维护，减少团队代码的差异性吧

## HTML 前端界面的三层结构
* HTML structural layer
* CSS presentation layer
* javascript behavior layer

## HTML H5 元素的型特性
* 语义化标签: article header footer nav 
* 视频标签: video 音频标签: audio
* 表单控件: calemdar date time email
* 本地离线缓存: localStorage 和 sessionStorage
* 拖拽释放的实现

## HTML 页面中如何实现 canvas
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, 
    initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
  <canvas id="canvas" width="200" height="200"></canvas>

  <script>
      const canvas = document.getElementById("canvas")  // 获取得到 canvas 画布
      const ctx = canvas.getContext("2d")  // 获取绘制上下文
      // 然后的就是执行不同的 ctx 中 api 了
  </script>
</body>
</html>
```

## HTML cookie localStorage 和 sessionStorage 的区别
* cookie 的话 4kb，任意当前应用窗口，sett-cookie 请求头
* localStorage 实现的是本地缓存，以及是在所有的页面中都是具备的呐
* SessionStorage 只是存在于当前页面中的呐，关闭当前页面后直接消失不见了

## HTML script 的 async 和 defer 模式
* async 模式: 实现的是我们的javascript脚本和html+CSS 的文档解析是并行的，可能javascript的解析完成在html+css解析之前完成
* defer 模式: 实现的是javascript解析完毕总是在html+css解析完成之后完成的呐，打包工具中就是使用的该解析模式吧

## HTML 前端 SEO 优化
* `1.进行对应的TKD设置`
  * T: title 的设置，也就是我们网站的标题的设置，比如说掘金的: `代码不止，掘金不停`
  * K: KeyWards 的设置，就是每个网站的关键字的设置
  * D: Description 的设置，就是每个网站的描述的设置
  * 如何实现设置呐，主要是通过我们的HTML中的元数据`meta`来实现设置的吧
* `2.页面内容优化`
  * 就是将我们开发中使用的 div 或者说 span 这种通用性的标签使用语义化标签进行对应的替代，便于我们的爬虫检索
  * 使用 h 系列的标签，进行对关键字进行对应的强化操作吧，这样实现对应的内容强化目的
  * img 元素添加 alt 属性
* `3.引导链接`
  * 就是在网站的底部进行对产品描述信息进行对应的保留
* `4.SSR服务端渲染`
  * 就是使用了我们的在服务端进行了对应的HTML页面渲染以及事件绑定完成后才交付给浏览器进行对应的渲染，实现页面的解构
  * 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
* `5.SSG静态化渲染`
  * 将页面的渲染实现静态化
  * 优点
    * 编译打包时, 就会帮你处理, 纯静态文件，访问速度超快；
    * 对比SSR，不涉及到服务器负载方面问题；
    * 静态网页不宜遭到黑客攻击，安全性更高。
  * 缺点
    * 出现动态路由问题
* `6.预渲染优化`
  * 就是实现的是我们的在少数需要进行SEO优化的界面进行实现对应的解析，直接返回对应的HTML文档即可
  * 主要使用的就是: prerender-spa-plugin 插件
* `7.使用Phantomjs针对爬虫做处理`
  * 这里主要是和爬虫机制进行的一定的互联吧，我们的搜索引擎就是主要是使用了我们的爬虫的机制，从而实现将数据进行的对应的返回的呐

## HTML web 性能优化
### 什么是 web 性能
* `减少总体负载时间`
  * 实现尽可能的让文件足够的小，尽可能减少HTTP 请求次数，使用preload实现文件的加载
* `尽可能的让网站可用`
  * 就是使用合理的顺序进行加载我们的资源，以便用户可以实现尽快的实现网站的可用
  * 可以实现的就是在我们的用户在主要的产品使用的同时，任何其他的资源都可以在后台进行继续加载，这个也是我们的懒加载技术吧
* `流畅性和交互性`
  * 在我们的网站中实现动画的时候，尽可能使用CSS来实现完成，而不是JS来完成，同时使用CSS的话京可能实现使用到我们的硬件合成层优化

### 感知性能
* `首次绘制`
  * 在感知性能中我们需要带给用户的就是首次资源加载的速度的提高吧，该监控是不可见的，主要是背景颜色更新吧
* `首次有内容绘制 FCP【First Content Paint】`
  * 第一次重要内容渲染的效率，但是这些需要渲染的内容不一定全部是有意义的
* `首次有意义绘制 FMP【First Meaningful Paint】`
  * 就是在 FCP 基础上的首次有意义的内容的渲染效率吧
* `最大内容渲染 LCP【Largest Contentful Paint】`
  * 视口中可见的最大内容元素的渲染时间
---
* 实现的基本流程
  * `最小化初始加载`
    * 在首次进行渲染内容的时候，最小化的加载内容，也就是说将首次FMP内容先进行渲染，其他的内容在后台进行加载即可
      * 这样就可以实现的是: 原本下载的资源十分的大，但是用户的体验是无感的，一些不重要的内容的渲染和返回是在后台进行完善的呐
      * 同时我们的图片，音频，或者说其他类型资源可以尽可能的压缩，以及使用懒加载模式实现对应的性能优化吧
  * `防止页面的回流和重绘`
    * 尽可能的减少内容的回流和重绘，如果页面一直处于回流和重绘，是十分的影响我们的FCP性能指标的
  * `有意义的文件的优先加载`
    * 也就是将FMP的内容优先呈现给用户进行观察和享受吧

### 多媒体处理
* 在我们一个网站中最为重要的就是我们的多媒体资源的优化了，多媒体的话主要时包含两个部分吧: 图片，视频，音频
  * 实际上呐视频就是由不同帧率的图片构成的呐，由于多媒体资源的丰富性，所以说我们急需对其进行相应的处理吧
  * 对于多媒体性能的优化，主要是因为这些资源的获取需要消耗 `带宽`，`带宽`是需要花费钱的，这个就是为什么需要进行优化的主要原因吧
* 控制下载多媒体资源的优先级和顺序，提高 FMP 的感知性能
  * 使用 `<source>` 实现内部指定我们的资源的加载的顺序吧，`按从小到大的顺序排序视频源`
* 多媒体资源的最佳格式的使用: svg png jpg 资源的选择，资源的压缩
* 资源的懒加载和预加载处理，音频或者说视频使用`流媒体`的技术实现

### JavaScript 优化
* 处理JavaScript 的解析和执行，可以选择使用 defer 或者说 async 模式加载我们的 JS 资源
* 关键资源尽早加载，关键资源存储于我们的 head 标签中，因为我们的浏览器的加载顺序是自上而下的单线程的解析过程吧
* 使用预加载机制实现对应的功能，`link rel=preload href="..." as="script"`
* 推迟非关键的Js脚本的加载
* 页面动画效果尽可能使用CSS，而不是JS，canvas动画不得不使用JS，这个时候可以使用 `window.requestAnimationFrame` 来实现
* 分解长任务
  * 大部分的任务都是在我们的主线程进行运行的，其中包含 web worker 中的 js 
  * 但是呐我们的主线程一次只能运行一个任务，当一个任务执行时间超过 `50ms` 这个就是长任务了
  * 为了实现解决长任务的处理，这个时候可以将长任务分解为一个一个的小任务进行执行吧，也就是我们的分片执行
```javascript
// todo: main solution
async function main() {
  // 创建要运行的函数数组
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // 让步给挂起的用户输入
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // 从任务数组中取出第一个任务
      const task = tasks.shift();

      // 运行任务
      task();
    }
  }
}
```

### CSS 性能优化
* 动画效果的优化
  * 动画效果很大可能造成页面的回流和重绘，这一点尽可能的避免
  * 在GPU上的合成层进行我们的动画处理，开启合成层实现我们的动画
    * 3D动画的开发: `translateX\Y\Z\3D | rotateX\Y\Z\3D | scaleX\Y\Z\3D | skewX\Y\Z\3D`
    * `position: fixed;`
  * 使用 `will-change` 属性来指定将会在动画中发生变化的元素
* 字体资源的优化，这是网页中最重要的部分吧，字体是网站内容进行显示的最主要的原因吧