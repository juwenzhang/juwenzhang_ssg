# 前端面试

## HTML src 和 href 区别
* src 表示的是对外部资源的引入，但是该类文件的引入会阻塞网页的加载吧，比如说 script 中引入 js 脚本
* href 表示的是内部资源的引入，比如 css 文件，图片文件，html 文件等，href 不会阻塞网页的加载

## HTML 元素语义化理解
* 元素语义化就是实现的是对应的对用正确的标签用正确的事情吧，利于SEO优化吧
* 对机器的友好性，对开发者的友好性
```html
<header></header>
<nav></nav>
<section></section>
<main></main>
<article></article>
<aside></aside>
<footer></footer>
```

## HTML DOCTYPE 作用
* 就是实现的是告诉我们的浏览器使用如何的文档类型进行解析我们的文档吧

## HTML script defer 和 async 区别
* 都是实现的是为了解析js脚本的时候不会影响我们的渲染树的继续渲染吧
* defer 实现的是保证js脚本的解析一定在渲染树彻底形成之后解析完吧
  * 多个 defer 的解析一定是按需解析的呐
* async 是 js 脚本的解析和渲染树的形成是不一定的，相对不安全吧
  * 多个 async 的解析不一定是按需解析的呐

## HTML meta 元数据
* charset 的设置，设置 HTML 文档的编码类型设置
  * `<meta charset="UTF-8" />`
* keywords 关键字的设置
  * `<meta name="keywords" content="关键字1,关键字2,关键字3" />`
  * 利于进行我们的 SEO 优化吧
* description 设置
  * `<meta name="description" content="描述内容" />`
  * 利于我们的 SEO 优化吧
* refresh 设置，页面重定向和刷新
  * `<meta http-equiv="refresh" content="3;url=http://www.baidu.com" />`
* viewport 设置，移动端适配
  * `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />`
  * `width viewport` 一般设置为我们的设备宽度即可: device-width
  * `height viewport` 一般设置为我们的设备高度即可: device-height
  * `initial-scale` 初始化缩放比例，一般设置为1即可
  * `maximum-scale` 最大缩放比例，一般设置为1即可
  * `minimum-scale` 最小缩放比例，一般设置为1即可
  * `user-scalable` 是否允许用户缩放，一般设置为no即可
* 搜索引擎索引方式
  * `<meta name="robots" content="index,follow" />`
  * `index` 表示该页面可以被索引
  * `follow` 表示该页面可以被爬取
  * `noindex` 表示该页面不可以被索引
  * `nofollow` 表示该页面不可以被爬取
  * `all` 表示该页面可以被索引和爬取
  * `none` 表示该页面不可以被索引和爬取
* SEO优化主要就是 TKD 设置吧
  * T -- Title 标题设置
  * K -- Keywords 关键字设置
  * D -- Description 描述设置

## HTML5 新增标签
* 语义化标签
  * `header`
  * `nav`
  * `section`
  * `article`
  * `aside`
  * `footer`
* 媒体标签
  * `audio` 音频标签
    * `controls` 控制音频的播放暂停等，控制面板
    * `src` 音频的资源地址
    * `autoplay` 自动播放
    * `loop` 循环播放
  * `video` 视频标签
    * `controls` 控制视频的播放暂停等，控制面板
    * `src` 视频的资源地址
    * `autoplay` 自动播放
    * `loop` 循环播放
* 媒体标签中的其他设置
  * `width` 设置宽度
  * `height` 设置高度
  * `poster` 设置视频的封面图
  * 内部设置
    * `source` 设置音频和视频的资源地址，提高兼容性吧
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>获取音视频总时长</title>
</head>
<body>
    <!-- 音频元素 -->
    <audio id="myAudio" src="your-audio-file3" controls></audio>
    <!-- 视频元素 -->
    <video id="myVideo" src="your-video-file.mp4" controls></video>
    <script>
        // 获取音频元素
        const audio = document.getElementById('myAudio');
        // 获取视频元素
        const video = document.getElementById('myVideo');

        // 监听音频元数据加载完成事件
        audio.addEventListener('loadedmetadata', function () {
            // 获取音频总时长
            const audioDuration = audio.duration;  //ms
            console.log('音频总时长（秒）：', audioDuration);
        });
        // 监听视频元数据加载完成事件
        video.addEventListener('loadedmetadata', function () {
            // 获取视频总时长
            const videoDuration = video.duration;  //ms
            console.log('视频总时长（秒）：', videoDuration);
        });
        
        function getDuration(element) {
            if (element.tagName === 'AUDIO') {
                return element.duration;
            }
            if (element.tagName === 'VIDEO') {
                return element.duration;
            }
        }
    </script>
</body>
</html>
```

## HTML 表单
* **表单类型**
  * `email` 邮箱类型
  * `url` 链接类型
  * `number` 数字类型
  * `search` 搜索类型
  * `range` 范围类型，可以设置 max 和 min 值
  * `color` 颜色类型
  * `time` 时间类型,时分秒
  * `date` 日期类型,年月日
  * `datetime` 日期时间类型,年月日时分秒
  * `datetime-local` 日期时间类型,年月日时分秒
  * `week` 周类型,日
  * `month` 月份类型,月
* **表单属性**
  * `placeholder` 提示信息
  * `autofocus` 自动获取焦点
  * `autocomplete` 自动完成，自动补全，默认为 on
  * `required` 必填
  * `pattern` 正则表达式
  * `multiple` 多选
  * `disabled` 禁用
  * `readonly` 只读
  * `form` 表单提交
* **表单事件**
  * `oninput` 每当input里的输入框内容发生变化都会触发此事件
  * `onchange` 当input里的输入框内容发生变化，并且失去焦点之后才会触发此事件
  * `onfocus` 当input里的输入框获得焦点时触发此事件
  * `onblur` 当input里的输入框失去焦点时触发此事件
  * `onsubmit` 当form表单提交时触发此事件
  * `onreset` 当form表单重置时触发此事件
  * `onselect` 当input里的输入框内容被选中时触发此事件
  * `onclick` 当input里的输入框内容被点击时触发此事件
  * `oninvalid` 当input里的输入框内容无效时触发此事件

## HTML 进度条，度量器
* 进度条
  * `progress`标签: 用来表示任务的进度，max表示任务的进度，value表示当前进度
  * meter 属性 用来显示剩余容量和剩余库存
    * high 属性 表示最高值，默认为100
    * low 属性 表示最低值，默认为0
    * max 属性 表示最大值，默认为100
    * min 属性 表示最小值，默认为0
    * optimum 属性 表示最佳值，默认为50
    * value 属性 表示当前值
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Element Example</title>
    <style>
      /* 设置进度条背景 */
      progress {
          height: 5px;
          border-radius: 2px;
          width: 400px;
          background-color: #e0e0e0;
      }

      /* WebKit 内核浏览器 */
      progress::-webkit-progress-bar {
          background-color: #e0e0e0;
      }

      progress::-webkit-progress-value {
          background-color: #007BFF;
      }

      /* Firefox 浏览器 */
      progress::-moz-progress-bar {
          background-color: #007BFF;
      }
  </style>
</head>

<body>
    <!-- 定义一个 progress 元素，设置最大值为 100，当前值为 0 -->
    <progress id="myProgress" max="100" value="0" ></progress>
    <!-- 定义一个按钮，点击时触发 updateProgress 函数 -->
    <button onclick="updateProgress()">开始加载</button>

    <script>
        function updateProgress() {
            // 获取 progress 元素
            const progressBar = document.getElementById('myProgress');
            const allTime = 180
            let progress = 0;
            // 设置一个定时器，每 100 毫秒更新一次进度
            const interval = setInterval(() => {
                if (progress >= allTime) {
                    // 当进度达到 100% 时，清除定时器
                    clearInterval(interval);
                } else {
                    // 每次增加 10% 的进度
                    progress += 1;
                    // 更新 progress 元素的 value 属性
                    progressBar.value = progress;
                }
            }, 1000);
        }
    </script>
</body>
</html>
```

## HTML 设置元素是否可以拖放
* `draggable` 属性
  * `<img draggable="true"/>`

## HTML 其他元素
* canvas 
  * 用于实现的是 使用javascript在网页中进行绘制图像，画布是一个矩形区域
  * `<canvas width="400" height="400"></canvas>`
* svg 
  * 是一个矢量图的效果吧，放大不模糊吧

## HTML HTML img 中的 srcset 属性
* 用于实现的是在不同屏幕密度下，img 自动加载的图片吧
```html
<img src="1.jpg" srcset="1.jpg 1x, 2.jpg 2x, 3.jpg 3x" />

<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />

<!-- sizes="[media query] [length], [media query] [length] ... " -->
```

## HTML head标签作用
* 用于实现的是定义文档的头部信息吧，他是所有头部元素的容器，该元素中的元素可以是引用脚本，指示浏览器在哪里找到样式表，提供原信息的
* base, link, meta, script, style, title

## CSS 选择器优先级
* ID 选择器：1000 `#id`
* class 选择器：100 `#classname`
* 属性选择器：10 `a[selfProperty="value"]`
* 伪类选择器：1 `a:hover`
* 标签选择器: 0 `a`
* 伪元素选择器： 0 `a::before`
* 子选择器： 0 `a > b`
* 后代选择器： 0 `a b`
* 通配符选择器： 0 `*`

## CSS display 属性值以及作用
* `none` 隐藏元素，不占位，从文档中移除
* `block` 块级元素，占满一行，默认宽度为父元素宽度，高度为内容高度
* `inline` 行内元素，在一行内显示，默认宽度为内容宽度，高度为内容高度
* `inline-block` 行内块元素，在一行内显示，宽度为内容宽度，高度为内容高度，
* `flex` 弹性布局
* `grid` 网格布局
* `table` 表格布局
* `list-item` 列表项布局

## CSS display block inline-block inline 区别
* block：块级元素，占满一行，默认宽度为父元素宽度，高度为内容高度
* inline：行内元素，在一行内显示，默认宽度
* inline-block：行内块元素，在一行内显示，宽度为内容宽度，高度为内容高度

## CSS 隐藏元素方法
* `display: none` 隐藏元素，不占位，从文档中移除，渲染树中直接移除该元素
* `visibility: hidden` 元素在页面中任然占据空间，不影响绑定的事件
* `opacity: 0` 元素在页面中任然占据空间，不影响绑定的事件，透明度设置
* `position: absolute` 元素在页面中任然占据空间，不影响绑定的事件，绝对定位，设置位置
* `z-index负数` 在当前层级转移到更低的层级
* `clip/clip-path` 裁剪元素，设置裁剪路径，裁剪路径可以是矩形、圆形、椭圆、线段、贝塞尔曲线等
* `overflow: hidden` 隐藏元素内容，不占位，从文档中移除，渲染树中直接移除该元素
* `transform: scale(0, 0)` 缩小元素，让元素的占位达到最小，从而实现不占位

## CSS transition 和 animation
* transition 实现的是对应的过渡动画的效果吧
  * `transition: property duration timing-function delay;`
  * `transition: width 2s ease-in 1s;`
    * transition-property: width;
    * transition-duration: 2s;
    * transition-timing-function: ease-in;
    * transition-delay: 1s;
* animation 实现的是对应的动画帧效果吧
  * `animation: name duration timing-function delay iteration-count direction fill-mode play-state;`
  * `animation: slide-in 1s ease-in 1s 1 normal forwards running;`
    * name 动画帧的名称
    * duration 动画持续时间
    * timing-function 动画时间函数
    * delay 动画延迟时间
    * iteration-count 动画重复次数, infinite 为无限次
    * direction 动画方向, normal 为正常播放, reverse 为反向播放
    * fill-mode 动画结束状态, forwards 为动画结束状态为结束状态, backwards 为动画结束状态为开始状态, both 为动画结束状态为结束状态和开始状态
    * play-state 动画播放状态, running 为动画正在播放, paused 为动画暂停播放
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>控制 CSS 动画的执行和停止</title>
    <style>
        /* 定义动画关键帧 */
        @keyframes move {
            0% {
                left: 0;
            }
            100% {
                left: 300px;
            }
        }
        /* 定义动画元素样式 */
        .box {
            width: 50px;
            height: 50px;
            background-color: blue;
            position: relative;
            animation: move 3s linear infinite;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <button id="startButton">开始动画</button>
    <button id="stopButton">停止动画</button>
    <script>
        // 获取元素
        const box = document.querySelector('.box');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');
        // 停止动画的函数
        function stopAnimation() {
            box.style.animationPlayState = 'paused';
        }
        // 开始动画的函数
        function startAnimation() {
            box.style.animationPlayState = 'running';
        }
        // 为按钮添加点击事件监听器
        stopButton.addEventListener('click', stopAnimation);
        startButton.addEventListener('click', startAnimation);
    </script>
</body>
</html>
```

## CSS requestAnimationFrame 和 cancelAnimationFrame
* 实现动画的方案是很多种的呐
  * JavaScript 使用我们的 setTimeout 和 setInterval 来实现动画
  * CSS3 使用我们的 animation 和 transition 来实现
  * HTML5 使用 canvas 和 requestAnimationFrame 来实现动画
    * requestAnimationFrame 是一个浏览器提供的 API，就是一个请求动画帧吧
* window.requestAnimationFrame(callback) 实现的是告诉浏览器我们希望执行的动画是什么
  * 并且实现我们的在下一次重回之前调用指定的回调函数来实现更新动画吧
  * 内部传递一个回调函数，该函数在浏览器下一次重绘之前实现执行
  * 对于我们的动画的话可以使用一个 position: absolute 方法实现对应的开启新的层级，从而实现对应的合成层优化动画效果吧
  * 因为页面的重绘是十分消耗性能的呐
* 实现取消动画的实现的话使用的是我们的 window.cancelAnimationFrame(id) 来实现的呐
* 不同动画实现的是比较
  * requestAnimationFrame 
    * CPU 节能优化
    * 函数节流
    * 减少 DOM 操作
  * setTimeout
    * setTimeout 函数的回调函数是异步执行的，所以会存在一定的延迟
    * setTimeout的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>requestAnimationFrame 实现进度条效果</title>
    <style>
        .progress-container {
            width: 500px;
            height: 10px;
            border: 1px solid #ccc;
            margin-top: 50px;
            position: relative; /* 动画在合成层实现进行运行即可 */
        }

        .progress-bar {
            height: 100%;
            width: 0;
            background-color: #007BFF;
        }
    </style>
</head>
<body>
    <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
    </div>
    <script>
        const progressBar = document.getElementById('progressBar');
        let progress = 0;

        function updateProgress() {
            if (progress < 100) {
                progress++;
                progressBar.style.width = progress + '%';
                requestAnimationFrame(updateProgress);
            }
            else {
                cancelAnimationFrame(updateProgress); 
            }
        }
        // 开始动画
        requestAnimationFrame(updateProgress);
    </script>
</body>
</html>
```

## CSS 盒子模型的理解
* CSS3 包含了我们的两种盒子模型: 标准盒子模型和IE盒子模型
* 标准盒子模型
  * content-width + padding-left + padding-right + border-left + border-right + margin-left + margin-right = width (box-sizing: content-box)
* IE 盒子模型
  * width = content-width + padding + border (box-sizing: border-box)
* 如何修改我们的盒子模型呐
  * `box-sizing: content-box` 标准盒子模型
  * `box-sizing: border-box` IE 盒子模型

## CSS 使用translate改变位置的好处
* translate 是 transform 的一个属性值，改变我们的 transform 和 opacity 不会触发浏览器的重新布局 reflow 和 repaint，只会触发 compositions
* translate 实现的是我们的创建了一个 CPU 合成层，同时我们的 absolute 也是可以实现利用到合成层的呐
* 合成层的话可以实现的是我们的开启CPU硬件优化吧

## CSS sprite 技术
* sprite 是一个精灵图的概念吧
  * 该技术实现了减少了 http 请求资源次数，减少了服务器的压力，大大提高了页面性能
  * 减少了图片的字节，`多张图片的字节大小 < 多张图片在一张精灵图上的占用内存大小吧`，对于首屏渲染有一定的好处吧

## CSS margin 和 padding 的使用场景
* 需要在 border 外侧添加空白的话，且空白部分不需要背景色，使用 margin
* 需要在 border 内部添加空白的话，且空白部分不需要背景色，使用 padding

## CSS line-height 的使用场景
* line-height 是一个行高的效果吧，通过该属性可以实现的是让行内元素居中显示吧，设置于需要居中的元素上吧，结合 vertical-align: middle 来实现吧

## CSS 优化和提高性能
* CSS压缩: 减少CSS文件的体积
* CSS单一样式: 减少使用合成样式书写，使用单一样式书写，性能更高吧，margin的设置比margin-bottom的设置，性能更差吧

## CSS 预处理器和后处理器
* 预处理器:
  * less sass stylus 用来实现的是预编译我们的 less 和 scss 代码的呐，增加了 css 代码的复用性
* 后处理器: postCss 可以实现的是自动化的给CSS样式添加浏览器前缀，从而实现我们的提高兼容性

## CSS 单冒号和双冒号区别
* 单冒号`:` 用于我们的伪类的，双冒号`::`用于我们的伪元素的吧

## CSS 文本溢出问题解决
```CSS
.selector {
    overflow: hidden;            /* 溢出隐藏 */
    text-overflow: ellipsis;      /* 溢出用省略号显示 */
    white-space: nowrap;         /* 规定段落中的文本不进行换行 */
}
```

## CSS 媒体查询
* 根据我们的具体的媒体特性，实现显示不同的样式表现吧，会根据书写的媒体查询条件进行根据设备的变化动态的决定显示的样式吧 @media 来实现的呐
* 媒体查询后面可以插入多个或者说零个媒体查询条件吧 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>媒体查询示例</title>
    <style>
        /* 基本样式，适用于所有屏幕 */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            padding: 20px;
            text-align: center;
        }

        /* 小屏幕设备（宽度小于 600px） */
        @media (max-width: 600px) {
            .container {
                background-color: lightblue;
                font-size: 14px;
            }
        }

        /* 中等屏幕设备（宽度在 601px 到 900px 之间） */
        @media (min-width: 601px) and (max-width: 900px) {
            .container {
                background-color: lightgreen;
                font-size: 16px;
            }
        }

        /* 大屏幕设备（宽度大于 900px） */
        @media (min-width: 901px) {
            .container {
                background-color: lightcoral;
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>媒体查询示例</h1>
        <p>根据不同的屏幕宽度，这个容器的背景颜色和字体大小会发生变化。</>
    </div>
</body>
</html>
```

## CSS CSS工程化理解
* CSS工程化需要考虑的问题
  * `宏观设计`: CSS代码如何实现组织，如何拆分，模块结构如何设计
  * `编码优化`: 怎样书写出更好的CSS
  * `构建`: 如何处理CSS，实现打包最优解
  * `可维护性`: 如何让CSS代码可维护，可读性高，可维护性高
* 最佳实践
  * 预处理器选择: less sass stylus
  * 工程化插件: postcss
  * 打包工具选择: webpack vite rollup grunt gulp
* 预处理器是什么
  * 就是一个一个的轮子，在不同的打包构建工具中，就是我们使用的一些: loader ，实现的是将我们的代码进行转换，形成浏览器可以认识的代码吧
* 如何提高我们的CSS的可维护性呐
  * 使用层级结构实现样式的书写，该层级结构和我们的HTML标签一致的呐
  * 项目初始化阶段，使用我们的: `:root` 定义不同的全局使用的变量吧
  * 对于精灵图的实现，使用我们的在全局将精灵图中每个部分样式书写好，实现最终的按需使用，这个也是CSS原子化的实现方案(unocss , tailwindcss)

## CSS 浏览器判断
* 浏览器包含我们的: 滚动条部分，工具栏部分，可视区部分
  * window.innerHeight | window.innerWidth 获取可视区的高度 | 宽度
  * window.outerHeight | window.outerWidth 获取浏览器的高度 | 宽度
  * window.scrollX | window.scrollY 获取滚动条的偏移量
  * window.pageXOffset | window.pageYOffset 获取滚动条的偏移量
  * document.documentElement.clientHeight | document.documentElement.clientWidth 获取可视区的高度 | 宽度
  * document.documentElement.scrollHeight | document.documentElement.scrollWidth 获取滚动条的偏移量
  * document.documentElement.scrollTop | document.documentElement.scrollLeft 获取滚动条的偏移量

## CSS 清除浮动
* 给父元素设置 `height` 属性
* 在最后一个浮动元素后面设置一个空白 `div` ，同时设置 `clear: both`
* 包含浮动元素的父元素添加 `overflow: hidden` 或者 `overflow: auto`
* 使用伪类元素实现清除浮动: `:after` 和 `:before`

## CSS BFC概念
* `Black Formatting Context` 块格式化上下文
  * 是布局过程中生成块级盒子的区域，也是浮动元素和其他元素交互限定区域
  * BFC 就是一个独立的布局环境，就是一个块级元素容器，实现了每个容器和每个容器之间的布局格式，实现了布局的相互隔离吧
* BFC 的特征
  * 垂直方向上，自上而下排列，和文档流一样的呐
  * BFC响铃的两个容器之间 margin 会合并
  * 计算BFC高度的时候，需要计算浮动元素的高度
  * BFC是独立的容器，容器内的元素不会影响其他元素
* BFC作用
  * `解决 margin 的重叠问题`
  * `解决高度塌陷问题`
* 如何创建BFC呐
  * 元素设置浮动: `float: left` 或者 `float: right`
  * 元素采用定位: `position: absolute` 或者 `position: fixed`
  * 元素设置display: `inline-block` 
  * 元素设置 overflow: `overflow: hidden` 和 `overflow: auto`

## CSS margin 塌陷问题解决
* 兄弟元素之间
  * 底部元素变为行盒子: `display: inline-block`
  * 底部元素设置浮动: `float: left` 或者 `float: right`
  * 底部元素设置定位: `position: absolute` 或者 `position: fixed`
  * 主要就是通过设置BFC来实现的吧
* 父子元素实现
  * 父元素设置: `overflow: hidden` 或者 `overflow: auto`
  * 父元素设置透明边框: `border: 1px solid transparent`
  * 子元素变为行盒: `display: inline-block`
  * 子元素添加浮动和定位属性

## CSS 实现三角形
```CSS
div {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: orange blue red green; /* 其他位置变为 transport 透明即可，留一个方法伪有颜色即可吧 */
}
```

## CSS 实现扇形
```CSS
div{
    border: 100px solid transparent;
    width: 0;
    heigt: 0;
    border-radius: 100px;
    border-top-color: red;
}
```

## JavaScript 数据类型
* undefined null boolean number string object symbol bigint function array set weakSet map weakMap

## JavaScript 判断数据类型方法
* typeof: `console.log(typeof dataName)`
* instanceof: `console.log(dataName instanceof DataType)`
* constructor: `console.log(dataName.constructor === DataType)`
* Object.prototype.toString.call(dataName)

## JavaScript 判断数组
* `Array.isArray(dataName)`
* `Object.prototype.toString.call(dataName) === 'Array'`
* `Object.getPrototypeOf(dataName) === Array.prototype`
* `Array.prototype.isPrototypeOf(dataName)`
* `dataName instanceof Array`

## JavaScript 实现 instanceof
```javascript
function MyInstance(instance, constructor) {
    const proto = Object.getPrototypeOf(instance)
    const protoOfConstructor = constructor.prototype
    
    while(true) {
        // 达到原型链终端，直接结束寻找
        if(proto === null) {
            return false
        }
        // 原型链尚硅寻找得到，返回true
        if(proto === protoOfConstructor) {
            return true
        }
        // 往原型链下一层进行寻找吧
        proto = Object.getPrototypeOf(proto)
    }
}
```

## JavaScript 0.1 + 0.2 = 0.30000000000000004 问题解决
* 实现方案一: `console.log((0.1 + 0.2).toFixed(2) === 0.3)  true`
* 通过一个机器精度来实现，这个精度是: `Math.pow(2, -52)`，两数之差小于该机器精度，那么就是默认认为其是相等的
  * ES6 中提供了一个静态变量: `Number.EPSILON`
```javascript
function isEqual(a, b) {
    // return Math.abs(a - b) < Math.pow(2, -52)
    return Math.abs(a - b) < Number.EPSILON
}

console.log(isEqual(0.1 + 0.2, 0.3))
```

## JavaScript || 和 && 的返回值（React 中常用）
* `||` 条件判断结果是true，就返回第一个操作数的值，如果第一个操作数是false，就返回第二个操作数的值
* `&&` 条件判断结果是false，就返回第一个操作数的值，如果第一个操作数是true，就返回第二个操作数的值

## JavaScript Object.assign() 和 扩展运算符
* 两个都是浅拷贝
```javascript
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}}

// =========================================
let outObj = {
    inObj: {a: 1, b: 2}
}
let newObj = Object.assign({}, outObj)
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}}
```

## JavaScript var let const 区别
* 块级作用域: let const 具备块级作用域，var 不具备块级作用域
* 变量提升: 
  * var 存在变量提升，也就是说变量的访问可以在变量的定义之前访问得到，vo | go | ao
  * let const 不存在变量提升，也就是说变量的访问不可以在变量的定义之前访问得到, 词法环境
* 全局污染: var定义的变量会造成全局污染，let const不会造成全局污染
* 重复声明: var 可以重复声明，let const 不可以重复声明
* 暂时性死区: let const 存在暂时性死区，var 不存在暂时性死区
* 初始值设置: var和let可以没有初始值，const必须有初始值
* 可否修改: var, let可以修改， const不可以修改

## JavaScript const 定义变量是否可以改动
* const 定义的变量并不是变量的值不可改动，而是变量的指向的引用内存不可以改动
  * 对于基础的数据类型，其值就是保存其内存地址吧
  * 引用数据类型的话，变量的指向是数据的内存地址，而不是保存的值本身吧

## JavaScript new 一个箭头函数会发生什么？？？
* 箭头函数是es6 出现的呐，没有 prototype 属性吧，也没有指向自己的 this，更没有 arguments 参数，所以说不可以 new 一个箭头函数吧
* new 一个函数的时候，new 操作所作的是事情含有
  * 创建一个空对象
  * 将该新对象的 `__proto__` 指向`函数的 prototype 属性`
  * 构造函数的 this 指向该对象（也就是为该对象添加属性和方法）
  * 最后将该对象进行返回即可

## JavaScript 箭头函数 this 的指向问题
* 箭头函数本身是不具备 this 指向的呐，其 this 和自身所在的上下文有关
```javascript
const obj = {
    getArrow() {
        return () => {
            console.log(this)
        }
    }
}

// babel 转化后的代码为:
var obj = {
    getArrow: function getArrow() {
        var _this = this;
        return function () {
            console.log(_this === obj);
        }
    }
}
```

## JavaScript 实现new方法
* 首先实现了创建了一个新对象
* 设置新对象的隐式原型为构造函数的显示原型
* 将构造函数的 this 指向新对象，并执行构造函数的代码（设置对象的属性和方法吧）
* 判断函数的返回值类型，`如果是引用类型，就返回这个对象`，`如果是基本类型，就返回构造函数的 this`
```javascript
function ObjectFactory() {
    let newObject = null
    let constructor = Array.prototype.shift.call(arguments)  // arguments 是一个类数组对象，获取构造函数
    let res = null
    // 判断参数是否为一个函数
    if (typeof constructor !== 'function') {
        throw new Error('type error')
        return
    }
    // 创建一个空对象，同时该新对象指向构造函数的显式原型
    newObject = Object.create(constructor.prototype)
    // this 指向的修改，指向该新对象
    res = constructor.apply(newObject, arguments)
    let flag = res && (typeof res === 'object' || typeof res === 'function')
    return flag ? res : newObject
}

function Person(name, age) {}
let p = ObjectFactory(Person, 'zhangsan', 18)
```

## JavaScript 类数组对象转化为数组
* `Array.prototype.slice.call(类数组对象)`
* `Array.prototype.splice.call(类数组对象, 0)`
* `Array.prototype.concat.apply([], 类数组对象)`
* `Array.from(类数组对象)`
* `[...类数组对象]`

## JavaScript for...in 和 for...of 区别
* for...in 遍历的是对象的键名
* for...of 遍历的是对象的键值，核心就是内部有一个方法 Symbol.iterator
```javascript
//方法一：
var obj = {
    a:1,
    b:2,
    c:3
};

obj[Symbol.iterator] = function(){
	var keys = Object.keys(this);
	var count = 0;
	return {
		next(){
			if(count<keys.length){
				return {value: obj[keys[count++]],done:false};
			}else{
				return {value:undefined,done:true};
			}
		}
	}
};

for(var k of obj){
	console.log(k);
}


// 方法二
var obj = {
    a:1,
    b:2,
    c:3
};
obj[Symbol.iterator] = function*(){
    var keys = Object.keys(obj);
    for(var k of keys){
        yield [k,obj[k]]
    }
};

for(var [k,v] of obj){
    console.log(k,v);
}
```

## JavaScript 原型链终点
* 原型链终点是 `Object.prototype.__proto__ === null`

## JavaScript 闭包理解
* 闭包就是函数嵌套函数，外层函数的变量在里面函数中可以访问，内层函数的变量在外层函数中不可以可以访问
* 然后变量的查找规则就是根据作用域链来实现的吧
* 函数作用域问题
  * 全局作用域
  * 函数作用域
  * 块级作用域

## JavaScript call/apply/bind
* 这三个函数都是实现的是修改 this 指向的具体方法吧
  * apply 接收两个参数，一个是需要绑定的 this 指向，一个是需要传入的参数的数组`apply(this, [args])`
  * call 接收两个参数，一个是需要绑定的 this 指向，一个是需要传入的参数`call(this, args)`

## JavaScript 实现call/apply/bind方法
* 判断调用者对象是否为函数
* 判断传入的对象在上下文是否存在，如果不存在直接传入 window
* 处理传入的参数，截取第一个参数后的所有的所有的参数吧
* 将函数的 this 指向传入的对象，并执行函数
* 返回函数的返回值
```javascript
Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}
```
```javascript
Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    context = context || window
    context.fn = this
    let result = null
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
```
```javascript
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 获取参数
  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
    );
  };
};
```

## JavaScript Promise理解
* Promise实例具备三种状态
  * Pending 等待中
  * Fulfilled 已完成
  * Rejected 已失败
* Promise 两个过程
  * pending --> fulfilled
  * pending --> rejected

## Vue Computed 和 Watch 区别
* 对于 Computed
  * 支持缓存，只有依赖数据发生变化的时候，才会进行重新计算
  * 不支持异步，如果是异步的话，就无法实现监听数据的变化吧
  * computed 接收函数的时候，内部是具备一个 get 和 set 方法的，get 实现的是获取值，set实现的是更新值
* 对于 watch
  * 不支持缓存，数据变化时，就会触发对应的事件执行
  * 支持异步的操作机制
  * 监听的执行函数，接收两个值，第一个参数是最新的值，第二个参数是变化之前的值
  * 配置项
    * immediate: 是否立即执行，默认是 false,组件加载的时候立即执行吧
    * deep 深度监视，数据内部的元素发生变化的时候，在复杂的数据类型中使用
* computed 计算缓存，watch侦听器吧

## Vue Computed 和 Methods 区别
* computed 计算属性，只有当其依赖发生对应的变化的时候才会进行对应的重新计算吧
* methods 方法，每次调用的时候都会重新计算，每次调用都会重新计算，所以性能上会比较低

## Vue slot是什么
* slot 是 vue 中的内容分发机制吧，主要就是我们插槽吧
  * 默认插槽
  * 具名插槽: name 指定的吧
  * 作用域插槽: 作用域插槽，可以获取到对应的数据，然后进行对应的渲染

## Vue 保持组件状态的方法
* 组件卸载的时候的解决方案
  * 在组件会被卸载的时候，将最后的状态全部保存在 localStorage 和 sessionStorage 中缓存起来
  * 兼容性是十分好的呐，不依赖于其他的任何库
  * 但是呐，storage存储数据具备局限性以及每次进入页面的时候都需要从缓存中进行对应的读取操作吧
* 对于 single-spa 来说的话
  * 路由组件使用 keep-alive 实现保持其活跃状态吧
  * 处于 keep-alive 的组件便会新增两个生命周期: activated 和 deactivated
```vue
<template>
    <keepAlive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    <keepAlive>
</template>
<script>
  import { keepAlive } from 'vue'
</script>
```

## Vue vue中的事件修饰符
* .stop 就是原生的 e.stopPropagation() 阻止事件冒泡
* .prevent 就是原生的 e.preventDefault() 阻止默认事件
* .capture 就是事件捕获，默认是事件冒泡
* .once 就是只触发一次，默认是触发多次
* .self 就是只有当前元素触发才会执行，默认是触发所有元素

## Vue v-if v-show v-html
* `v-if` 是一个条件渲染，当条件为 true 的时候，才会渲染对应的内容，当条件为 false 的时候，对应的内容不会渲染，直接将对应部分直接从文档树中移除
* `v-show` 是一个条件渲染，当条件为 true 的时候，才会渲染对应的内容，当条件为 false 的时候，对应的内容会渲染，但是对应的内容会直接隐藏，不会从文档树中移除
* `v-html` 和原生的 innerHTML 效果一样的吧，在进行开发 ai 的对话面框中有一定的用处吧

## Vue v-model元素
* v-model 是一个语法糖的书写方式，原理是: v-on 和 v-bind 的结合吧
  * v-bind 绑定组件定义的状态吧，省略形式为: `:value=value`
  * v-on 绑定组件的 change | input 事件吧 `@input=handleChange | @change=handleChange`

## Vue SSR理解
* SSR 就是服务端渲染，对应的就是我们的CSR客户端渲染
  * 也就是在服务端实现对应的模板渲染后，再将HTML文档返回给客户端即可
  * 这样可以达到更好的SEO优化，首屏加载优化
  * 但是SSR对服务器的负载更大，需要额外的nodejs服务器，并且需要额外的服务器资源，同时可以调用的生命周期钩子有一定的限制

## Vue 生命周期
* beforeCreated
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed
* 对于 keep-alive 包裹的组件多了一个 activated 和 deactivated
* 生命周期的执行顺序是如何呐？？？
  * `加载渲染阶段`
    * 父组件 beforeCreate
    * 父组件 created
    * 父组件 beforeMount
    * 子组件 beforeCreate
    * 子组件 created
    * 子组件 beforeMount
    * 子组件 mounted
    * 父组件 mounted
  * `更新过程`
    * 父组件 beforeUpdate
    * 子组件 beforeUpdate
    * 子组件 updated
    * 父组件 updated
  * `销毁过程`
    * 父组件 beforeDestroy
    * 子组件 beforeDestroy
    * 子组件 destroyed
    * 父组件 destroyed

## Vue 路由懒加载实现方案
* 第一种: 通过 `() => import(/* webpackChunkName: "about" */ './views/About.vue')`
* 第二种: 通过: `require(['@/components/HelloWorld.vue'], resolve)`
* 第三种: 通过（仅限webpack）: `require.ensure([], () => r(require('./views/About.vue')), 'group-name')`

## Vue 路由模式
* hash 模式
  * 主要是通过 `window.location.hash` 来实现，内部有一个事件: `onhashchange`
```javascript
window.onhashchange = function(event){
	console.log(event.oldURL, event.newURL);
	let hash = location.hash.slice(1);
}
```
* history 模式
  * 通过 pushState 和 replaceState 来实现
  * 内部可以调用的方法含有: forward() back() go()
* 在进行路由跳转的时候我们可以做的事情含有
  * 先获取得到对应的路由实例
  * 通过路由实例进行跳转的时候考虑是否需要携带什么参数不
  * 然后就是传入对应的路由跳转地址吧
```javascript
// 方法1：
// <router-link :to="{ name: 'users', query: { uname: james }}">按钮</router-link>

// 方法2：
this.$router.push({ name: 'users', query:{ uname:james }})

// 方法3：
// <router-link :to="{ path: '/user', query: { uname:james }}">按钮</router-link>

// 方法4：
this.$router.push({ path: '/user', query:{ uname:james }})

// 方法5：
this.$router.push('/user?uname=' + jsmes)
```

## Vue 路由的生命周期
* `全局路由钩子`
  * router.beforeEach
  * router.afterEach
  * router.beforeResolve
* `组件内部钩子`
  * beforeRouterEnter
  * beforeRouterLeave
  * beforeRouterUpdate

## Vue 虚拟DOM
* 比较
  * 虚拟DOM: 生成VNODE + DOMDIFF算法 + 决定必要的DOM更新吧
  * 真实DOM: 生成原生的 HTML字符串 + 重建出对应的所有的DOM元素
* 虚拟DOM和真实DOM比较
  * 在首次进行渲染大量DOM的时候，由于多了一层虚拟DOM的计算，这个时候回比 innerHtml 差
  * 在进行对DOM进行操作以及更新的时候，操作会更好吧，只有必要的节点才会更新吧

## React 事件机制
* react 元素上进行绑定的事件，并非直接在真实DOM上进行的绑定吧，而是实现的是在document初监听了所有的事件吧
* 当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行
* `DOM --> 合成层事件 --> 事件处理函数`

> JSX 上写的事件并没有绑定在对应的真实 DOM 上，而是通过事件代理的方式，将所有的事件都统一绑定在了 document 上。
> 这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件
> 合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力

## React Component 和 PureComponent对比
* PureComponent 是一个纯组件，可以用来实现的优化React程序，有效的减少 render 函数的执行次数吧，从而提高组件性能吧
* React组件种的 state 和 props 发生变化的时候，会通过一个 shouldComponentUpdate 方法来判断是否需要重新渲染组件
  * React.PureComponent 中会通过浅比较 props 和 state 来判断是否需要重新渲染组件,自动化的执行该钩子函数: shouldComponentUpdate
  * 从而大大的提高了我们的页面性能吧，减少了很多的不必要的渲染浪费吧
> 使用pureComponent的好处：当组件更新时，如果组件的props或者state都没有改变，render函数就不会触发。省去虚拟DOM的生成和对比过程，
> 达到提升性能的目的。这是因为react自动做了一层浅比较。

## React 可以在 render 函数中获取 refs 不？？
* 不可以的，因为 render 函数中，是一个组件正在挂载的阶段，获取不到对应的元素实例吧

## React 如何避免render函数的重新执行
* shouldComponentUpdate + PureComponent
* React.memo 函数

## React 生命周期
* 挂载阶段（Mount）
* 更新阶段（Update）
* 卸载阶段（Unmount）

## 手写Object.create()
```javascript
// create 方法实现的是根据一个对象来创建一个新对象，并且新对象__proto__指向传入的对象
// 核心思路就是实现的是将窜入的对象作为原型进行使用吧，然后将创建好了的空对象进行返回即可
function create(proto) {
    function F() {}
    F.prototype = proto
    return new F()
}
Object.create = function(proto) {
    if (typeof proto !== 'object') {
        throw new TypeError('Object prototype may only be an Object or null')
    }
    if (proto === null) {
        return { __proto__: null }
    }
    return create(proto)
}
```

## 手写 instanceof 运算符
* instanceof 运算符用来判断一个对象是否是某个构造函数的实例
* 实现步骤为:
  * 首先获取得到类型的原型
  * 然后获取得到对象的原型
  * 然后再原型链上一直寻找即可
```javascript
function instanceOf(left, right) {
    let proto = Object.getPrototypeOf(left)  // 获取到对象的原型
    let prototype = right.prototype  // 获取到类型的原型
    while (true) {
        if (!proto) return false  // 如果原型为空，则返回false
        if (proto === prototype) return true  // 如果找到就返回true
        proto = Object.getPrototypeOf(proto)  // 否则就继续往下一层原型上进行寻找
    }
}
```

## 手写 new 操作符
* 实现思路
  * 首先创建一个空对象
  * 设置空对象的原型为构造函数的原型
  * 让函数的 this 指向这个空对象
  * 最后返回空对象即可
```javascript
function objectFactory() {
    let newObject = new Object()  // 创建一个空对象
    let constructor = [].shift.call(arguments)  // 获取到第一个参数，也就是构造函数
    if (typeof constructor !== 'function') {  // 如果第一个参数不是函数，则抛出异常
        throw "constructor is not a function"
    }
    newObject = Object.create(constructor.prototype)  // 设置空对象的原型为构造函数的原型
    let result = constructor.apply(newObject, arguments)  // 将函数的 this 指向这个空对象
    if (result && (typeof result === 'object' || typeof result === 'function')) {  // 如果函数返回的结果是一个对象，则返回这个对象
        return result
    } else {
        return newObject
    }
}
```

## 手写 Promise
* Promise 是一个类，Promise 有三种状态，pending、fulfilled、rejected
```javascript
// 使用我们的 Promise A+ 规范来实现即可
// 定义 promise 的初始状态
const PENDING = 'pending'
const RESOLVED  = 'resolved '
const REJECTED = 'rejected'

/**
 * Promise 类
 * @param fn 是promise的一个executor函数
 * @constructor
 */
function MyPromise(fn) {
    let self = this  // 存储 this
    this.state = PENDING  // 初始化状态为 pending
    this.value = null  // 存储后旭需要返回的结果即可
    this.resolveCallbacks = []  // 存储 then 方法中成功的回调
    this.rejectCallbacks = []  // 存储 then 方法中失败的回调，也是我们的 reject 回调
  
    function resolve(value) {  // 定义我们的 resolve 方法
        if (value instanceof MyPromise) {  // 如果传入的对象还是一个Promise对象
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED  // 设置状态为 fulfilled
                self.value = value  // 设置返回值
                self.resolveCallbacks.forEach(callback => {  // 遍历所有的成功回调，依次执行即可
                    callback(value)
                })
            }
        }, 0)
    }
    
    function reject(value) {
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = REJECTED
                self.value = value
                self.rejectCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        }, 0)
    }
    
    try {  // 执行传入的executor 函数
        fn(resolve, reject)
    } catch (e) {  // 如果执行过程中出错了，则直接调用 reject 即可
        reject(e)
    }
}

/**
 * 实现自定义Promise的then方法
 * @param onResolved  成功的的回调执行
 * @param onRejected  拒绝的回调执行
 */
MyPromise.prototype.then = function(onResolved, onRejected) {
    // 如果 then 方法中传入的参数不是函数，则默认返回当前值
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    // 如果 then 方法中传入的参数不是函数，则默认返回当前值
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    // 如果是等待状态,直接将函数加入队列即可
    if (this.state === PENDING) {
        this.resolveCallbacks.push(onResolved)
        this.rejectCallbacks.push(onRejected)
    }
    // 如果是已经确定的状态直接运行即可
    if (this.state === RESOLVED) {
        onResolved(this.value)
    }
    if (this.state === REJECTED) {
        onRejected(this.value)
    }
}
```

## 手写Promise.then方法
```javascript
// 在构造函数原型上添加方法
Promise.prototype.then = function(onResolved, onRejected) {
    const self = this  // 获取当前对象
    return new Promise((resolve, reject) => {
        let fulfilled = () => {
            try {
                let result = onResolved(self.value)  // 获取到成功回调的返回值
                if (result instanceof Promise) {
                    result.then(resolve, reject)  // 如果返回值是一个Promise对象，则调用then方法即可
                } else {
                    resolve(result)  // 否则直接调用 resolve 即可
                }
            } catch (err) {
                reject(err)
            }
        }
        
        let rejected = () => {
            try {
                let result = onRejected(self.value)
                if (result instanceof Promise) {
                    result.then(resolve, reject)
                } else {
                    reject(result)
                }
            } catch (err) {
                reject(err)
            }
        }
        
        // 讨论状态
        switch (self.state) {
            case PENDING:
                self.resolveCallbacks.push(fulfilled)
                self.rejectCallbacks.push(rejected)
                break
            case RESOLVED:
                fulfilled()
                break
            case REJECTED:
                rejected()
                break
        }
    })
}
```

## 手写Promise.all方法
* 接收一个Promise实例的数组或者说具有 iterator 接口的对象
* 返回新的 promise 对象
* 遍历传入的参数，用 Promise.resolve 将参数包裹一层
* 参数所有回调成功才是成功，返回值数组与参数顺序一致
* 参数有失败的回调，则返回失败，失败的回调返回值就是失败的回调
* Promise.all 可以用来做对应的并发请求机制吧
```javascript
/**
 * Promise.all 方法
 * @param { Array<Promise> } promises
 * @return { Promise }
 */
Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {  // 如果不是数组，则抛出异常
            throw new TypeError('arguments must be an array')  
        }
        let resolvedCount = 0  // 存储已经成功执行的数量
        let promisesNum = promises.length  // 获取传入的参数数量
        let resolvedValues = []  // 存储已经成功执行的结果
        for (let i = 0; i < promisesNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCount++  // 存储已经成功执行的数量
                resolvedValues[i] = value  // 存储已经成功执行的结果
                if (resolvedCount === promisesNum) {
                    resolve(resolvedValues)  // 如果已经全部执行完，则返回结果
                }
            }, reason => {
                return reject(reason)
            })
        }
    })
}
```

## 手写Promise.race方法
* 最先返回结果的Promise状态就是最终的状态
```javascript
/**
 * Promise.race 方法
 * @param promises promise实例数组
 * @return {Promise<unknown>}  
 */
Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            args[i].then(resolve, reject)
        }
    })
}
```

## 手写防抖函数
* 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时
```javascript
/**
 * 防抖函数
 * @param func 需要进行防抖的函数
 * @param delay 防抖函数执行的延迟时间
 */
function debounce(func, delay = 3000, immediate = false) {
    let timer = null
    let is_executed = false
    const _debounce = function(...args) {
        return new Promise((resolve, reject) => {
            try {
                let res = null
                if (timer) clearTimeout(timer)
                if (immediate && !is_executed) {
                    res = func.apply(this, args)
                    is_executed = true
                    resolve(res)
                    return
                }
                timer = setTimeout(() => {
                    res = func.apply(this, args)
                    timer = null
                    is_executed = false
                    resolve(res)
                }, delay)
            } catch (err) {
                reject(err)
            }
        })
    }
    _dubounce.cancel = function() {
        clearTimeout(timer)
        is_executed = false
        timer = null
    }
}
```

## 手写节流函数
* 节流函数是指规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
```javascript
/**
 * 节流函数
 * @param func 需要进行节流的函数
 * @param delay 节流的间隔
 */
function throttle(func, internal = 1000, isImmediate = false) {
    let startTime = 0
    let timer = null
    const _throttle = function(...args) {
        return new Promise((resolve, reject) => {
            try {
                let nowTime = new Date().getTime()
                if (isImmediate === false && startTime === 0) {
                    startTime = nowTime
                }
                if (nowTime - startTime >= internal) {
                    if (timer) clearTimeout(timer)
                    const res = func.apply(this, args)
                    startTime = nowTime
                    timer = null
                    resolve(res)
                }
                
                if (isImmediate && !timer) {
                    timer = setTimeout(() => {
                        const res = func.apply(this, args)
                        startTime = new Date().getTime()
                        timer = null
                        resolve(res)
                    }, internal)
                }
            } catch (err) {
                reject(err)
            }
        })
    }
    _throttle.cancel = function() {
        clearTimeout(timer)
        startTime = 0
        timer = null
    }
    return _throttle
}
```

## 手写类型判断函数
* 进行自定义我们的类型判断需要注意的就是对 null 和 object 类型的判断，同时返回的是字符串以及都是小写的哈
```javascript
/**
 * 类型判断函数
 * @param {any} value
 */
function typeOf(value) {
    if (value === null) {  // 如果是null，则返回null
        return value + ''  
    }
    if (typeof value === 'object') {  // 如果是对象，则返回object
        let valueClasses = Object.prototype.toString.call(value),
            type = valueClasses.split(" ")[1].split("")    
        type.pop()
        return type.join("").toLowerCase()
    } else {  // 如果是其他类型，则返回对应的类型
        return typeof value
    }
}
```

## 手写深call方法
* call 方法可以改变函数的 this 指向
* 基本的实现思路为:
  * 判断传入的对象是否是函数
  * 判断上下文是否存在
  * 处理传入的参数，获取第一个参数后的所有的参数
  * 将函数作为上下文对象的一个属性
  * 使用上下文对象调用该方法，并且将结果实现返回
  * 删除上下文对象的属性
  * 返回结果
```javascript
/**
 * 深call方法
 * @param context
 */
Function.prototype.myCall = function(context) {
    // 判断是否为函数
    if (typeof this !== 'function') {
        throw new TypeError('context must be an object')
    }
    // 获取参数
    let args = [...arguments].slice(1), result = null
    // 决定context 的值，方式不存在于上下文
    context = context || window
    // 将函数的 this 指向 context
    context.fn = this
    // 执行函数，存储结果
    result = context.fn(...args)
    delete context.fn
    return result
}

// 使用 demo
function foo() {
    console.log(this.name)
}
foo.myCall({name: 'foo'})
```

## 手写深apply方法
* 该方法的实现和call唯一的不同就是在于传参的异同吧
```javascript
Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('context must be an object')
    }
    let result = null
    context = context || window
    context.fn = this
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    }
    delete context.fn
    return result
}
```

## 手写深bind方法
* bind 的话参数的处理和我们的 apply 是一样的呐
```javascript
Function.prototype.myBind = function(context) {
    if (typeof context !== 'function') {
        throw new TypeError('context must be an object')
    }
    let args = [...arguments].slice(1), self = this
    return function F() {
        return self.apply(this instanceof F ? this : context, args.concat(...arguments))
    }
}
function foo() {}
foo.myBind(null)()
```

## 手写函数柯里化
* 柯里化是将一个多参数的函数转换成一个单参数的函数，并且返回一个接受余下参数的函数，直到执行原函数的参数个数。
```javascript
/**
 * 柯里化
 * @param {Function} fn
 */
function curry(fn, args) {
    let len = fn.length  // 获取函数的参数个数
    args = args || []
    return function() {
        let subArgs = [...args, ...arguments]  // 获取函数的参数
        // 判断参数的长度是否已经满足函数所需参数的长度
        if (subArgs.length >= len) {  // 
            return fn.apply(this, subArgs)    
        } else {
            // 递归调用，继续收集参数
            return curry.call(this, fn, subArgs)
        }
    }
}
function add(a, b, c) {}
let curryAdd = curry(add)
curryAdd(1)(2)(3)
```

## 手写Ajax请求
```javascript
/**
 * ajax请求
 * @param url 请求地址
 * @param success 请求成功的回调函数
 * @param fail 请求失败的回调函数
 * @param method 请求方法，默认为GET
 * @param data 请求参数，默认为空对象
 * @param query_params 请求参数，默认为空对象
 */
function ajax(url, success, fail, method = 'GET', data = {}, query_params = {}) {
    let xhr = new XMLHttpRequest()  // 创建XMLHttpRequest对象
    xhr.open(method, url + '?' + query_params)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 && xhr.status < 300) {
                success(xhr.responseText)
            } else {
                fail(xhr.status)
            }
        }
    }
    xhr.onerror = function() {
        fail(xhr.status)
    }
    switch (method) {
        case 'GET':
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send()
            break
        case 'POST':
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(data)
            break
        default:
            xhr.send()
            break
    }
}
```

## 手写Promise封装Ajax请求
```javascript
function Promise_Ajax(url, method = 'GET', data = {}, query_params = {}) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url + '?' + query_params)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 && xhr.status < 300) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.onerror = function() {
            reject(xhr.status)
        }
        switch (method) {
            case 'GET':
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send()
                break
            case 'POST':
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                xhr.send(data)
                break
            default:
                xhr.send()
                break
        }
    })
}
```

## 手写浅拷贝
* 通过 Object.assign() 方法实现浅拷贝
```javascript
function shallowCopy(obj) {
    return Object.assign({}, obj)
}
```
* 通过 扩展运算符来实现
```javascript
function shallowCopy(obj) {
    return {...obj}
}
```
* 通过数组方法实现
```javascript
function shallowCopy(obj) {
    return Array.prototype.slice(obj, 0)
}
```
* 其他实现
```javascript
function shallowCopy(obj) {
    if (!object || typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
```

## 手写深拷贝
* JSON.stringify() 方法可以将一个对象序列化成 JSON 字符串
* lodash 库来实现
* 手写实现
```javascript
function deepCopy(obj) {
    if (!obj || typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}
```

## 手写时间格式化工具
```javascript
function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (!date) return
    date = new Date(date)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    } else if (/(M+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getMonth() + 1).toString().padStart(2, '0'))
    } else if (/(d+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getDate().toString().padStart(2, '0'))
    } else if (/(h+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getHours().toString().padStart(2, '0'))
    } else if (/(m+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getMinutes().toString().padStart(2, '0'))
    } else if (/(s+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getSeconds().toString().padStart(2, '0'))
    }
    return fmt
}
```

## 手写不使用中间变量实现交换数字
```javascript
/**
 * 交换两个数字
 * @param a
 * @param b
 * @return {number[]}
 */
function swap(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return
    if (a === b) return
    a = a + b
    b = a - b
    a = a - b
    return [a, b]
}
```

## 手写实现数组乱序输出
```javascript
function shuffle(arr) {
    if (!Array.isArray(arr)) return
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
```

## 手写实现数组元素求和
```javascript
function flatSumArray(arr) {
    if (!Array.isArray(arr)) return
    return arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? pre + flatArray(cur) : pre + cur
    })
}
```

## 手写数组扁平化
```javascript
function flatArray(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res = Array.isArray(arr[i]) ? res.concat(flatArray(arr[i])) : res.concat(arr[i])
    }
    return res
}

function flatReduceArray(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatReduceArray(cur) : cur)
    })
}

function flatArr(arr) {
    return arr.flat(Infinity)
}
```

## 手写数组去重
```javascript
// set 实现
function SetArr(arr) {
    if (Array.isArray(arr)) return Array.from(new Set(arr))
    else throw new TypeError("arr is not a ArrayType")
}

// map 实现
function MapArr(arr) {
    let map = {}
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i])) {
            map[arr[i]] = 1
            res.push(arr[i])
        }
    }
}
```

## 手写filter方法
```javascript
/**
 * filter 实现
 * @param {Function} fn
 */
Array.prototype.filter = function(fn) {
    if (typeof fn !== 'function') throw new TypeError("fn is not a Function")
    const res = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) res.push(this[i])
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter((item, index, arr) => {
    return item > 5
})
```

## 手写map方法
```javascript
Array.prototype.map = function(fn) {
    if (typeof fn !== 'function') throw new TypeError("fn is not a Function")
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(fn(this[i], i, this))
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.map((item, index, arr) => {
    return item * 2
})
```

## 手写字符串repeat方法
```javascript
String.prototype.repeat = function(n) {
    if (typeof n !== 'number') throw new TypeError("n is not a number")
    if (n < 0) throw new RangeError("n is not a positive number")
    return new Array(n + 1).join(this)
}
'abc'.repeat(3)  // 'abcabcabc'
```

## 手写字符串反转
```javascript
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
'abc'.reverse()  // 'cba'
```

## 手写数字千分位分割
```javascript
/**
 * 数字千分位分割
 * @param n 需要处理的数字
 * @param separator 需要进行分割的分割符号
 * @param precision 按照如何的进度进行处理数字吧
 * @return {string|string}
 */
function thousandSeparator(n, separator = ',', precision = 3) {
    if (typeof n !== 'number') throw new TypeError("num is not a number");
    let num = n.toString();
    let decimals = '';
    // 判断是否小数
    if (num.indexOf('.') > -1) {
        [num, decimals] = num.split('.');
    }
    let len = num.length;
    if (len <= precision) { // 小于等于3位，直接返回
        return decimals ? num + '.' + decimals : num;
    } else {
        let temp = '';  // 临时变量,用于存储后面对整数部分的处理
        let remainder = len % precision;  // 余数，用于处理整数部分最后一组的情况
        if (remainder > 0) {
            temp = num.slice(0, remainder) + separator;
        }
        temp += num.slice(remainder).match(new RegExp(`\\d{${precision}}`, 'g')).join(separator);
        return decimals ? temp + '.' + decimals : temp;
    }
}
```

## 手写大数相加
```javascript
function bigNumberAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new TypeError("a and b is not a number");
    // 数字转化为字符串
    a = a.toString()
    b = b.toString()
    // 获取数字的长度
    let lenA = a.length; 
    let lenB = b.length;
    
    // 获取两个字符串的最大长度
    const len = Math.max(lenA, lenB);
    lenA < lenB ? a = a.padStart(len, '0') : b = b.padStart(len, '0');
    
    let res = '';  // 存储结果
    let carry = 0;  // 进位
    for (let i = len - 1; i >= 0; i--) {   
        let temp = carry + parseInt(a[i]) + parseInt(b[i]);
        if (temp >= 10) {
            carry = 1;
            res += (temp % 10).toString();
        }
        if (temp < 10) {
            res += temp.toString();
        }
    }
    if (carry) res += carry.toString();
    return res.split('').reverse().join('');
}
```

## 手写add(1)(2)(3)
```javascript
// 主要就是考察的是函数柯里化的实现吧
function add (...args) {
    //求和
    return args.reduce((a, b) => a + b, 0)
}
function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
              ...args,
              ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}
```

## 手写解析URL PARAMS 为对象
```javascript
function parseUrlParams (url) {
    const params = {}
    url.replace(/([^?=&]+)=([^?=&]+)/g, (_, key, value) => {
        params[key] = value
    })
    return params
}
```
```javascript
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}
```

## 手写循环打印红黄绿
```javascript
const task = (timer, light) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (light === 'red') {
              red()
            }
            else if (light === 'green') {
              green()
            }
            else if (light === 'yellow') {
              yellow()
            }
            resolve()
          }, timer)
        })
const step = () => {
  task(3000, 'red')
          .then(() => task(2000, 'green'))
          .then(() => task(2100, 'yellow'))
          .then(step)
}
step()

// ===========================================================
const colors = ['red', 'yellow', 'green'];
const durations = [2000, 1000, 3000]; // 每种颜色的切换时间（毫秒）
let currentIndex = 0;

function changeColor() {
  console.log(colors[currentIndex]);
  currentIndex = (currentIndex + 1) % colors.length;
  setTimeout(changeColor, durations[currentIndex]);
}

// 初始调用
setTimeout(changeColor, durations[currentIndex]);

// =============================================================
let colors = ['red', 'yellow', 'green'];
let currentColorIndex = 0;
let startTime = null;

function changeColor(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;

  // 每秒改变一次颜色
  if (elapsed >= 1000) {
    startTime = timestamp; // 重置开始时间
    currentColorIndex = (currentColorIndex + 1) % colors.length; // 更新颜色索引
    colorBox.style.backgroundColor = colors[currentColorIndex]; // 改变颜色
  }

  requestAnimationFrame(changeColor); // 请求下一帧
}

requestAnimationFrame(changeColor); // 开始动画
```

## 手写Promise实现异步加载
```javascript
const imageUrl = 'https://www.baidu.com/img/bd_logo1.png';
let imageAsyncLoad = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.url = url;  // 设置为最初的默认图片
        img.onload = () => {
            // 图片加载成功后，修改图片地址为加载成功的图片地址
            resolve(imageUrl);
        }
        img.onerror = () => {
            reject(new Error('图片加载失败'));
        }
    })
}
```
* 也就是实现对应的图片懒加载吧，这里可以进阶实现一下的呐
  * 首先获取我们的图片元素，通过属性选择器进行获取吧
  * 然后当图片进入视口的时候就开始我们的判断其是否显示吧
  * 当图片进入视口后，直接通过Promise来实现图片的加载吧
  * 当图片加载完成后直接替换对应的 img.src 属性值即可
```javascript
// 获取所有需要懒加载的图片
const images = document.querySelectorAll('img[data-src]');

// 判断元素是否进入视口
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 加载图片的 Promise
function loadImage(img) {
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('图片加载失败'));
        img.src = img.dataset.src;
    });
}

// 懒加载函数
function lazyLoad() {
    images.forEach(img => {
        if (isInViewport(img)) {
            loadImage(img)
                .then(img => {
                    img.removeAttribute('data-src');
                    console.log('图片加载成功:', img.src);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    });
}

// 监听滚动事件
window.addEventListener('scroll', lazyLoad);

// 页面加载时检查一次
document.addEventListener('DOMContentLoaded', lazyLoad);
```

## 手写订阅发布模式
```javascript
class EventEmitter {
    // 自定义容器
    handlers = {};
    
    // 添加事件方法，参数，事件名，事件方法
    addEventListener(eventName, handler) {
        // 创建每种事件对应的容器
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        // 将新的事件存储容器
        this.handlers[eventName].push(handler);
    }
    
    // 触发事件方法，参数，事件名，事件方法
    dispatchEvent(eventName, params) {
        if (!this.handlers[eventName]) {
            return new Error('事件不存在');
        }
        this.handlers[eventName].forEach(handler => {
            handler(...params);
        })
    }
    
    // 移除事件方法，参数，事件名，事件方法
    removeEventListener(eventName, handler) {
        if (!this.handlers[eventName]) {
            return new Error('事件不存在');
        }
        this.handlers[eventName] = this.handlers[eventName].filter(item => item !== handler);
    }
}
```

## 手写事件总线
```javascript
class EventBus {
    constructor() {
        this.events = {};  // 事件容器
        this.listeners = {};  // 监听器容器
        this.onceListeners = {};  // 单次监听器容器
        this.emit = this.emit.bind(this);  // 绑定this
        this.on = this.on.bind(this);  // 绑定this
        this.once = this.once.bind(this);  // 绑定this
        this.off = this.off.bind(this);  // 绑定this
        this.removeListener = this.removeListener.bind(this);  // 绑定this
        this.removeAllListeners = this.removeAllListeners.bind(this);  // 绑定this
        this.listenerCount = this.listenerCount.bind(this);  // 绑定this
        this.eventNames = this.eventNames.bind(this);  // 绑定this
        this.setMaxListeners = this.setMaxListeners.bind(this);  // 绑定this
        this.getMaxListeners = this.getMaxListeners.bind(this);  // 绑定this
    }
    // 触发事件
    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return new Error('事件不存在');
        }
        this.events[eventName].forEach(listener => {
            listener(...args);
        })
    }
    
    // 添加事件监听
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }
    
    // 添加单次事件监听
    once(eventName, listener) {
        if (!this.onceListeners[eventName]) {
            this.onceListeners[eventName] = [];
        }
        this.onceListeners[eventName].push(listener);
        this.events[eventName].push(() => {
            this.off(eventName, listener);
        })
    }
    
    // 移除事件监听
    off(eventName, listener) {
        if (!this.events[eventName]) {
            return new Error('事件不存在');
        }
        this.events[eventName] = this.events[eventName].filter(item => item !== listener);
        this.onceListeners[eventName] = this.onceListeners[eventName].filter(item => item !== listener);
        this.listeners[eventName] = this.listeners[eventName].filter(item => item !== listener);
        this.onceListeners[eventName] = this.onceListeners[eventName].filter(item => item !== listener);
    }
    
    // 移除所有事件监听
    removeAllListeners(eventName) {
        if (!this.events[eventName]) {
            return new Error('事件不存在');
        }
        this.events[eventName] = [];
    }
    
    // 获取监听器数量
    listenerCount(eventName) {
        if (!this.events[eventName]) {
            return 0;
        }
        return this.events[eventName].length;
    }
    
    // 获取事件名称
    eventNames() {
        return Object.keys(this.events);
    }
    
    // 设置最大监听器数量
    setMaxListeners(n) {
        this.maxListeners = n;
        return this;
    }
    
    // 获取最大监听器数量
    getMaxListeners() {
        return this.maxListeners;
    }
    
    // 移除监听器
    removeListener(eventName, listener) {
        if (!this.events[eventName]) {
            return new Error('事件不存在');
        }
        this.events[eventName] = this.events[eventName].filter(item => item !== listener);
    }
    
    static instance = null;
    static getInstance() {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
            return EventBus.instance;
        }
    }
    static removeInstance() {
        EventBus.instance = null;
        return EventBus.instance;
    }
}
```

## 手写查找文章最大频率单词
```javascript
function findMaxFrequencyWord(text) {
    if (!text) {  // 判断文本是否为空
        return
    }
    text = text.trim().toLowerCase();
    let wordList = text.match(/[a-z]+/g),
            visited = [],
            maxNum = 0,
            maxWord = '';
    text = "  " + wordList.join("  ") + "  "
    wordList.forEach(item => {
        if (!visited.includes(item)) {
            visited.push(item)
            let word = new RegExp("  " + item + "  ", "g"),
                    num = text.match(word).length;
            if (num > maxNum) {
                maxNum = num;
                maxWord = item;
            }
        }
    })
    return maxWord + "  " + maxNum;
}
```

## 手写async/await封装fetch请求
```javascript
class HttpRequestFetchUtil {
    constructor(baseUrl, timeout) {
        this.baseUrl = baseUrl;
        this.request = fetch;
        this.timeout = timeout;
    }
    async request(url, options) {
        try {
            let response = await Promise.race([
                this.request(url, options),
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject(new Error('请求超时'))
                        }, this.timeout)
                        return response
                    })
            ])
        } catch (error) {
            return error
        }
    }
    get(url, options) {
        return this.request(url, {
            method: 'GET',
            ...options
        })
    }
    post(url, options) {
        return this.request(url, {
            method: 'POST',
            ...options
        })
    }
    put(url, options) {
        return this.request(url, {
            method: 'PUT',
            ...options
        })
    }
}
```
```javascript
(async () => {
  class HttpRequestUtil {
    async get(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
    async post(url, data) {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      return result;
    }
    async put(url, data) {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
      const result = await res.json();
      return result;
    }
    async delete(url, data) {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
      const result = await res.json();
      return result;
    }
  }
  const httpRequestUtil = new HttpRequestUtil();
  const res = await httpRequestUtil.get('http://golderbrother.cn/');
  console.log(res);
})();
```

## 手写js-prototype继承
```javascript
function() {
  const Super = function() {};
  Super.prototype = Parent.prototype;
  Child.prototype = new Super();
  Child.prototype.constructor = Child;
}
```

## 手写双向绑定数据
```javascript
let obj = {}
let input = document.getElementById('input')
let span  = document.getElementById('span')

Object.defineProperty(obj, 'name', {
    configurable: true,
    enumerable: true,
    get() {
        return input.value
    },
    set(newValue) {
        input.value = newValue
        span.innerHTML = newValue
    }
})
input.addEventListener('input', function(e) {
    obj.name = e.target.value
})
```

## 手写前端路由
```javascript
// hash路由
class Route{
  constructor(){
    // 路由存储对象
    this.routes = {}
    // 当前hash
    this.currentHash = ''
    // 绑定this，避免监听时this指向改变
    this.freshRoute = this.freshRoute.bind(this)
    // 监听
    window.addEventListener('load', this.freshRoute, false)
    window.addEventListener('hashchange', this.freshRoute, false)
  }
  // 存储
  storeRoute (path, cb) {
    this.routes[path] = cb || function () {}
  }
  // 更新
  freshRoute () {
    this.currentHash = location.hash.slice(1) || '/'
    this.routes[this.currentHash]()
  }
}
```

## 手写判断字符串不重复最大长度
```javascript
const lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let i = -1
    let res = 0
    let n = s.length
    for (let j = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        res = Math.max(res, j - i)
        map.set(s[j], j)
    }
    return res
};

```

## 手写判断对象是否具备循环引用
```javascript
function isCircleObject(obj, parent) {
    const parentArr = parent || [obj];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                if (parentArr.includes(obj[key])) {
                    return true;
                }
            }
        }
        if (typeof obj[key] === 'object') {
            return isCircleObject(obj[key], [...parentArr, obj[key]]);
        }
    }
}

// ==================================================================
var findNumberIn2DArray = function(matrix, target) {
  if (matrix == null || matrix.length == 0) {
    return false;
  }
  let row = 0;
  let column = matrix[0].length - 1;
  while (row < matrix.length && column >= 0) {
    if (matrix[row][column] == target) {
      return true;
    } else if (matrix[row][column] > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
};
```