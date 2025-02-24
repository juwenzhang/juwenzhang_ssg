# 前端可视化文档

## 认识前端可视化
* 前端的可视化就是通过我们的将数据呈现于页面，以不同的形式展示给被人看的效果吧
  * 具体的包括我们的 canvas | svg | css3 | threeJs | echarts | d3 
  * 为什么出现我们的前端可视化呐
    * 这个和我们的历史背景相关吧
    * 随着大数据时代的出现，我们的前端可视化就出现了
    * 为了方便我们的领导者们可以通过我们的可视化实现数据的可视化，从而实现决策者的分析数据吧
  * 组件库的话具有: echarts | dataV | antV ...
    * 这些都是我们可以使用的可视化工具吧

## CSS3 实现前端可视化
* CSS3 实现我们的前端可视化就是通过我们的 transform | transition | animation 来实现我们的动画效果，

### css3 transform 前端可视化
* 在我们的形变中，可是使用的可视化就含有我们的
  * translate 平移效果的可视化
  * rotate 旋转效果的可视化
  * scale 缩放效果的可视化
  * skew 倾斜效果的可视化
* 同时在这些属性的基础之上还具备我们的一些更多的细节
  * transform-origin 属性，设置我们的元素发生变化时的原点设置吧
  * 同时呐上面的一些可视化函数都是具备对应的 3D 效果的函数的
    * translate3d | rotate3d | scale3d | skew3d
      * 这些函数的实现使用，都是可以从一定的程度上实现我们的硬件优化的呐
      * 所以说这个可以用来实现的时提高我们的前端的可视化的首屏渲染的吧
    * 当然还具备我们的对应某一个轴线的函数的
      * translate 对应的分量函数
        * translateX | translateY | translateZ
      * rotate 对应的分量函数
        * rotateX | rotateY | rotateZ
      * scale 对应的分量函数
        * scaleX | scaleY | scaleZ
* 为什么使用我们的 3D 属性可以实现我们的性能优化呐
  * 主要是因为我们开启了对应的 3D 效果后，我们的对应的效果的话就是开启了硬件的合成层
  * 从而实现的我们的优化吧
* **transform-style** 属性的使用
  * flat 就是实现的是表明我们的预留的是平铺2D 的效果
  * 设置在我们的父元素中的，这样后就是设置在我们的 3d 空间中了
  * preserve-3d 就是实现的是表明我们的预留的是3D 的效果
* **transform-origin**
  * 就是实现的是设置我们的图形变化中的原点设置
  * 因为每次的图形变化后，我们的变化原点都是会发生变化的呐
* **perspective**
  * transform 属性中的
    * 实现的就是我们的透视角度的呐
    * 在我们的父元素和子元素中的设置的时候出现的效果就有所不同了
    * 这个的话可以自己设置吧
    * transform: perspective(200px) tranlate3d(0,0,0) rotate3d(0,0,1,45deg) scale3d(1,1,1)
* **backface-visibility**
  * 就是设置的是我们的背面可见性的设置了
  * visible 就是实现我们的背面可见性设置的
  * hidden 就是实现的是隐藏我们的背面可见性设置的

### css3 transition 前端可视化

### css3 animation 前端可视化

#### 绘制正方体
* 思路分析
  * 首先具备我们的盒子，用来充当一个绘制的画布
  * 然后内部创建六个盒子
    * 每个盒子使用我们的定位来实现
    * 为什么使用定位呐？？
      * 是因为开启了定位后，实现脱离标准流
      * 这个时候我们的这些元素的话就不会影响标准流中的排版布局
      * 就不会因为动画的执行，导致页面的回流reload和重绘layout
        * 这个时候我们的动画执行的话，是在我们的新的层中执行的
        * 从而实现的是不影响标准流的整体布局了
        * 这个就是实现不重绘和不回流的性能优化了
      * 最终实现的我们的性能优化
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>绘制正方体</title>
    <style>
        /* 项目前的样式重置 */
        * {
            padding: 100px;
            margin: 0;
            box-sizing: border-box;
            font-size: 14px;
            color: #333;
        }    
        
        .box {
            width: 200px;
            height: 200px;
            position: relative;
            /* 预留开启 3d 效果 */
            transform-style: preserve-3d;
            /* 开始动画 */
            transform: rotateX(-33deg) rotateY(-45deg) scale(2, 2);
            background-color: red;
            
            /* 首先脱离标准流 */
            .box-item {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 200px;
            }
        }
        
        /* 顶部样式设计 */
        .top {
            background-color: rgba(255, 0, 0, .2);
            transform: rotateX(90deg) translateZ(100px);
        }
        
        /* 底部样式设计 */
        .bottom {
            background-color: rgba(0, 255, 0, .2);
            transform: rotateX(-90deg) translateZ(-100px);
        }
        
        /* 前面样式设计 */
        .front {
            background-color: rgba(0, 0, 255, .2);
            transform: rotate(0deg) translateZ(100px);
        }
        
        /* 后面样式设计 */
        .back {
            background-color: rgba(255, 255, 0, .2);
            transform: rotateX(180deg) translateZ(-100px);
        }
        
        /* 左侧样式设计 */
        .left {
            background-color: rgba(255, 0, 255, .2);
            transform: rotateY(90deg) translateZ(100px);
        }
        
        /* 右侧样式设计 */
        .right {
            background-color: rgba(0, 255, 255, .5);
            transform: rotateY(90deg) translateZ(-100px);
        }
    </style>
</head>
<body>
    <!--父元素: 动画执行舞台-->
    <div class="box">
        <!-- 子元素: 动画执行舞台 -->
        <div class="box-item top">1</div>
        <div class="box-item bottom">2</div>
        <div class="box-item front">3</div>
        <div class="box-item back">4</div>
        <div class="box-item left">5</div>
        <div class="box-item right">6</div>
    </div>
</body>
</html>
```

#### webpack logo 动画制作
* 思路分析
  * 还是使用我们的定位先实现脱离标准流
    * 内外两个正方形绘制
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    body {
      padding: 200px
    }
    .webpack-logo {
      width: 200px;
      height: 200px;
      position: relative;

      .logo-inner, .logo-outer {
        position: absolute;
        /* 实现我们的居中操作 */
        left: 50%;
        top: 50%;
        /* 开启动画 */
        transform-style: preserve-3d; /*开启动画*/
        transform: rotateX(-33.5deg) rotateY(-45deg);
        /* 帧动画实现我们的视图的旋转吧 */
        backface-visibility: visible;
        span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid #fff;
        }
      }

      /* 实现绘制内部logo */
      .logo-inner {
        width: 50px;
        height: 50px;
        margin: -25px 0 0 -25px;

        animation: innerLoop 3s ease-in-out infinite;

        span {
          background-color: rgb(150, 214, 222);
        }

        .top {
          transform: rotateX(90deg) translateZ(25px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(-25px);
        }

        .front {
          transform: rotate(0deg) translateZ(25px);
        }

        .back {
          transform: rotateX(-180deg) translateZ(-25px);
        }

        .right {
          transform: rotateY(90deg) translateZ(25px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(-25px);
        }
      }

      /* 实现绘制外部logo */

      .logo-outer {
        margin: -100px 0 0 -100px;
        width: 200px;
        height: 200px;

        animation: outerLoop 3s ease-in-out infinite;

        span {
          background-color: rgba(202, 237, 241, 0.5);
        }

        .top {
          transform: rotateX(90deg) translateZ(100px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(-100px);
        }

        .front {
          transform: rotate(0deg) translateZ(100px);
        }

        .back {
          transform: rotateX(-180deg) translateZ(-100px);
        }

        .right {
          transform: rotateY(90deg) translateZ(100px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(-100px);
        }
      }
    }

    /* 开始书写我们的帧动画 */
    @keyframes innerLoop {
      0% {
        transform: rotateX(-33.5deg) rotateY(-45deg)
      }

      50%, 100% {
        transform: rotateX(33.5deg) rotateY(90deg)
      }

      100% {
        transform: rotateX(-33.5deg) rotateY(-45deg)
      }
    }

    @keyframes outerLoop {
      0% {
        transform: rotateX(-33.5deg) rotateY(-45deg)
      }

      50%, 100% {
        transform: rotateX(33.5deg) rotateY(90deg)
      }

      100% {
        transform: rotateX(-33.5deg) rotateY(-45deg)
      }
    }
  </style>
</head>
<body>
<div class="webpack-logo">
  <div class="logo-inner">
    <span class="top"></span>
    <span class="bottom"></span>
    <span class="front"></span>
    <span class="back"></span>
    <span class="right"></span>
    <span class="left"></span>
  </div>

  <div class="logo-outer">
    <span class="top"></span>
    <span class="bottom"></span>
    <span class="front"></span>
    <span class="back"></span>
    <span class="right"></span>
    <span class="left"></span>
  </div>
</div>
</body>
</html>
```
* 对于我们的 CSS3 实现动画的话可以使用的就是
  * 合理的使用我们的 position 定位，实现优化首屏渲染
  * 使用我们的 transform-style: preserve-3d;
  * 使用我们的 transform-origin: center center center;
  * 使用我们的 backface-visibility: visible;
  * 使用我们的 transform 实现 2D 3D 的动画
  * 使用我们的 keyframes 实现我们的动画
  * 使用我们的 animation 实现我们的动画
  * 使用我们的 transition 实现我们的过渡动画
  * 使用我们的 opacity 实现我们的透明度动画
* 这个就是我们的 CSS3 实现动画的基本的原理吧
  * 主要是使用的 position 实现的我们的性能优化
    * 因为我们的 position 可以实现的是将我们的元素脱离标准流
    * 这个时候动画的实现就不会影响标准流的布局
    * 从而不会照成页面的重绘和回流吧，这个就是我们的前端性能优化之一吧
  * 对于我们的 transform 的话实现性能优化
    * 就是使用我们的 3D 函数
    * 3D 函数是可以开启我们的硬件CPU的优化的呐
    * 就是通过这些细节来实现的我们的一些性能优化吧
* 常见的我们的动画的效果的含有
  * 位移动画 | 缩放动画 | 旋转动画
  * 透明度动画 | 颜色动画 | 尺寸动画
  * 帧动画 | 过渡动画 | 滚动动画
  * 循环动画 | 延迟动画 
  * 播放动画 | 暂停动画 | 停止动画
* 对于我们的滚动的动画的话通常是通过 js 来实现的
  * 内部含有获取元素距离父元素的api
  * 通过对我们的 api 的调用
  * 就可以实现我们的实现滚动的动画的呐
* 前端的开发中主要的业务逻辑含有
  * 视频方面的业务逻辑，比如说: 抖音 | 快手 | 西瓜视频 | BiliBili
  * 音乐方面的业务逻辑，比如说: QQ音乐 | 网易云音乐
  * 上面的话都含有一个功能就是对歌词进行解析的功能的吧

## 前端首屏优化面试
> 隐含的就是问你的浏览器的渲染原理，所以说一定要把下面的尽量回答完整吧，说出自己的一些理解吧
* 如果面试遇见了这个问题后，我们不能说什么防止了回流和重绘
* 我们需要的是进行我们的回答出我们的浏览器的渲染原理
* 浏览器的核心就是我们的渲染层
* 浏览器渲染流程
  * 浏览器获取得到一个Html 文件的时候
  * 从上往下进行我们的解析文档
  * 遇到了 link 标签引入的 CSS 后
  * 就去服务器资源中进行下载返回 CSS 文件
  * 然后进行我们的 CSS 的解析
    * Html Parser + CSS Parser 解析
  * Html Tree 构成我们的 DOM Tree
  * CSS Tree 构成我们的 CSSOM Tree
  * 二者进行绑定 attachment 形成我们的 render Tree
* render Tree 的构建过程
  * 这里就有我们的 layout
  * layout 的过程就是我们的布局阶段
  * 这个时候我们的布局阶段会进行我们的盒模型计算
  * 布局形成了我们的 Render Tree 后就开始页面的 Painting 绘制
  * 最后就是呈现 Display 阶段
* 在我们的形成 Html Tree 的时候会含有我们的 DOM 的创建和初始化
  * DOM 的操作主要是在我们的 js 中存在的呐
  * DOM 的创建和初始化主要就是我们的 js 的操作
* 页面的优化的话就主要是按照这个流程防止页面的重绘和回流发生的可能性吧
  * 重绘: RePaint
  * 回流: ReFlow: 就是回到我们的 layout 阶段进行重新计算我们的值
    * 回流肯定出现重绘
    * 重绘不一定会发生回流吧
* JS Parser
  * 该部分就是对我们的 script 引入的js 文件进行解析的 js 引擎吧
  * 浏览器对页面的解析的话，遇到了 js 会发生阻塞的
  * 所以说这个时候就出现了我们的不同的 js 模式
    * defer 和 async 模式的呐
* https://juejin.cn/post/7434162412113723455  浏览器 的渲染原理
* https://juejin.cn/post/7434178908985901097  浏览器 js的解析原理

## 前端可视化 canvas
### 认识 canvas 
* 是我们的 h5 新增的元素
* canvas 为我们实现提供了很多的绘图的 api 
  * 从而实现我们的一些 2D 图形的绘制
  * 也是可以机型绘制我们的3D 图形的呐，但是主要是使用的是我们的 **webGL** 技术了
* canvas 的应用场景
  * 通过我们的 canvas 实现我们的动画 | 游戏画面 | 图片编辑 | 实时视频处理
* canvas 的优点
  * canvas 主要实现的是为我们提供的是我们的一些原生的 js api 的呐
  * 适合像素处理 | 动画渲染 | 大数据绘制
  * 图像密集型的游戏开发吧
* canvas 缺点
  * 内存占用很大很大
  * canvas 仅能通过我们的 javascript 脚本来进行的呐
  * canvas 的图形的话会有放大失真的情况出现的呐

### 初步使用 canvas
* canvas 是我们的一个元素标签，内部含有的属性是
  * canvas 标签上面的话含有两个属性的，width 和 height
  * 单位默认的是我们的 px 单位，初始化单位是: 300px * 150px
* 首先现获取得到页面中的 canvas 元素
* 然后通过 canvas.getContext("2d") 获取到我们2d的上下文 ctx
* 最后就是实现的是通过我们的 ctx 实现我们的在画布上实现绘制不同的图形即可吧
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- canvas的通用模板 -->
  <canvas id="canvas" width="300" height="150">
    <!-- 当浏览器不兼容 canvas 的时候的处理操作 -->
    当前你的浏览器不支持 canvas , 请升级 canvas
  </canvas>

  <script>
    // 开始操作 canvas
    window.onload = function() {
      // 1.获取 canvas 元素
      const canvas = document.querySelector("canvas")

      // 2.获取渲染图形的上下文ctx: 2d 或者说 3d
      if(!canvas.getContext) {
        return
      }
      let ctx = canvas.getContext("2d")
      
      // 绘制矩形
      ctx.fillRect(0, 0, 100, 50)  // 100 * 50
    }
  </script>
</body>
</html>
```

### canvas 中的 **Grid** 和 **坐标空间**
* 在我们的 html 中书写的 canvas 的话，默认的宽高就是 300px * 150px 的
  * 同时我们的 canvas 元素的话默认是由像素构成的，所以说是一个一个的网格构成的
  * canvas 默认是由一个一个的网格所覆盖的呐

### canvas 绘制矩形 Rectangle
* 绘制矩形主要就是通过的是我们的路径的方法进行的呐
* 路径主要是通过的是我们的线段进行连接成的呐
  * 主要是通过我们的设置的点实现的我们的绘制吧
* 不管是什么图形都是通过的是我们的连线线段形成的呐
* 我们的 canvas 中实现绘制矩形的 api 含有
  * fillRect(x, y, width, height)  绘制一个填充的矩形
  * strokeRect(x, y, width, height)  绘制一个带有边框的矩形
  * clearRect(x, y, width, height)  清除指定的矩形区域，清楚的区域是透明的
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- 开始在页面中实现书写我们的 canvas -->
  <canvas id="myCanvas"></canvas>

  <script>
    window.onload = function() {
      // 获取得到我们的画布
      const myCanvas = document.querySelector("#myCanvas")

      // 得到绘制的上下文
      if(!myCanvas.getContext) {
        return
      }
      const ctx = myCanvas.getContext("2d")
      
      // 绘制矩形开始
      ctx.fillRect(0, 0, 100, 100)
      ctx.strokeRect(100, 100, 10, 10)
      ctx.clearRect(10, 10, 20, 20)
      ctx.clearRect(70, 70, 20, 20)
      ctx.clearRect(10, 70, 20, 20)
      ctx.clearRect(70, 10, 20, 20)
      ctx.clearRect(40, 40, 20, 20)
    }
  </script>
</body>
</html>
```

### 认识 canvas 路径
* 一个图形的绘制的话主要的话都是由我们的路径构成的呐
  * 一个路径的话主要是实现的是我们的线段构成的呐
  * 路径由多个子路径构成吧
  * 一个我们的路径通常是闭合的呐 closePath
* 绘制一个具备路径的图形步骤
  * 首先创建路径的起始点，
    * **beginPath()**
  * 然后通过我们的绘图命令去画出路径 
    * **arc lineTo moveTo bezierCurveTo quadraticCurveTo**
  * 最后就是实现的是将我们的路径进行闭合吧（不是必须的呐）
    * **closePath**  
  * 一旦路径形成了，就可以通过描边和填充路径区域渲染图形吧
    * **fill() | stroke()**
    
#### 绘制直线的方法
* moveTo(x, y)
  * 这个只是我们的路径罢了
  * moveTo 只是实现的是我们的绘制出一些不连续的线段吧
* lineTo(x, y)
  * 实现的就是我们的绘制直线吧
  * 两个参数主要是表示的是我们的两个终点和结束点吧
  * 开始点和之前的路径是有关的呐，之前的路径结束点是接下来的开始点
  * 开始点是可以通过 moveTo() 来实现变化的呐
> ---
> 
> moveTo(x,y)：不绘制，只是将当前位置移动到新的目标坐标（x,y）。
> 
> lineTo(x,y)：不仅将当前位置移动到新的目标坐标（x,y），而且在两个坐标之间画一条直线。
> 
> ---
> 简而言之，上面两个函数的区别在于：moveTo就像是提起画笔，移动到新位置，而lineTo告诉canvas用画笔从纸上的旧坐标画条直线到新坐标。
> 需要注意的是，不管调用它们哪一个，都不会真正画出图形，因为还没有调用stroke或者fill函数。目前，我们只是在定义路径的位置，以便后面绘制时使用。
> 下面再来看一个特殊的路径函数叫作closePath。这个函数的行为和lineTo很像，唯一的差别在于closePath会将路径的起始坐标自动作为目标坐标。
> closePath还会通知canvas当前绘制的图形已经闭合或者形成了完全封闭的区域，这对将来的填充和描边都非常有用。
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>三角形的绘制</title>
</head>
<body>
  <canvas id="myCanvas"></canvas>

  <script>
    window.onload = function() {
      // 获取 canvas 元素吧
      const myCanvas = document.querySelector("#myCanvas")

      // 获取绘制上下文
      const ctx = myCanvas.getContext("2d")

      // 绘制图形开始
      // 开始路径
      ctx.beginPath(); 

      // 移动
      ctx.moveTo(10, 10);  
      ctx.lineTo(100, 10);
      ctx.lineTo(10, 50)
      
      // 闭合路径
      ctx.closePath()

      // 填充路径
      ctx.stroke()  // ctx.fill() 效果不一样的哟
    }
  </script>
</body>
</html>
```

---
#### 绘制圆弧的方法
* 主要的 api 就是我们的 
  * arc(x, y, radius, startAngle, endAngle, anticlockwise)
    * 