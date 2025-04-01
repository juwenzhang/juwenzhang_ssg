# HTML 文档

## 什么是DOCTYPE？ 其作用是什么？？
* Doctype 是我们的 html5 的文档声明
* 其作用主要是告诉我们的浏览器使用怎样的格式解析我们的 HTML 文档吧

## 什么是html的元素语义化
* html元素语义化的话最主要的就是使用正确的标签做正确的事情，给我们的某块内容提供一些合适的标签，使得我们的页面具备良好的结构
* 为什么需要使用我们的元素语义化:
  * 在没有我们的CSS的干涉之下，能够呈现出页面的合理结构
  * 合理使用我们的标签可是提高SEO优化，这样就可以实现和搜索引擎之间简历良好的关系吧
  * 方便团队的维护，减少团队代码的差异性吧

## 前端界面的三层结构
* HTML structural layer
* CSS presentation layer
* javascript behavior layer

## H5 元素的型特性
* 语义化标签: article header footer nav 
* 视频标签: video 音频标签: audio
* 表单控件: calemdar date time email
* 本地离线缓存: localStorage 和 sessionStorage
* 拖拽释放的实现

## 页面中如何实现 canvas
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

## cookie localStorage 和 sessionStorage 的区别
* cookie 的话 4kb，任意当前应用窗口，sett-cookie 请求头
* localStorage 实现的是本地缓存，以及是在所有的页面中都是具备的呐
* SessionStorage 只是存在于当前页面中的呐，关闭当前页面后直接消失不见了

## script 的 async 和 defer 模式
* async 模式: 实现的是我们的javascript脚本和html+CSS 的文档解析是并行的，可能javascript的解析完成在html+css解析之前完成
* defer 模式: 实现的是javascript解析完毕总是在html+css解析完成之后完成的呐，打包工具中就是使用的该解析模式吧