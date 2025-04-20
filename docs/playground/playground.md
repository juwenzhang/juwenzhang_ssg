# 场景题问题

## FP 的理解
* FP 是我们的一个 `functional programming` 的缩写
  * 也就是我们的函数式编程吧
  * 就是所有的业务的处理都是通过封装函数来实现的吧
* 什么是FP
  * 函数头等公民
  * `纯函数 (pure function)`
    * 不存在副作用的函数，就是具备相同输入得到相同输出的函数
  * `不可变性 (immutability)`
    * 就是我们在函数中传递的参数是值传递还是引用传递，都是immutable的
  * `函数组合 (function composition)`
    * 就类似于oop中的继承的概念，就是将一些公共的逻辑进行抽离，然后进行组合使用
  * `高阶函数 (higher-order function)`
    * 就是函数的组合，就是将多个函数组合起来，实现一个更复杂的功能
  * `函数柯里化 (currying)`
    * 就是函数的组合，就是将多个函数组合起来，实现一个更复杂的功能
* FP 具备的优势
  * 编写代码相对容易
  * 细粒度的封装更加容易吧 --> vue 中 options api 最低是组件为一个单位，vue3就是一个函数为最低单位了吧
  * 代码更加容易实现阅读
  * 更好写单元测试吧 `unittest`
* FP 在开源中的支持
  * vue3 抛弃 options API 转向 composition API 就是一个函数式编程的一个点吧
  * react 中从推荐使用 class 组件到推荐使用 hooks 函数式组件也是一个点吧
  * redux 中间件的定义使用了 compose,pipe

## 浏览器事件循环
* 首先我们的 javascript 是一个单线程的编程语言
  * 但是呐随着现在业务逻辑的越来越复杂，单线程的处理机制就可能导致页面中的一些呈现效果出现一定的卡顿吧
  * 这也是最初的 javascript 是一个同步执行的语言的一个问题吧
* 这个时候就出现了事件循环机制吧
  * 时间循环实现的是让我们的页面不会出现特别的卡顿效果吧
  * 以及时间循环中的话主要是具备两个概念，一个是宏任务，一个是微任务，都是我们的异步执行队列吧
  * 但是现在的话是不具备宏任务的概念了吧
* 比方说 react 中的调度器的实现
  * 原本具备我们的 requestanimationframe 来实现动画的更新
  * 但是后来react官方决定使用自研调度器来实现，主要是通过数据量的探究发现，
    * requestanimationframe 和 setTimeout 是一样的，都是会有一定的延迟： 20ms 左右
    * 这个时候就开发一个自己的调度器，升华到了具体的 16ms 吧
  * 但是为了实现后期的优化的话，我们可以使用后面出现的 webworker 来实现解决对应的大量的客户端的计算问题吧

## 性能优化实现
* 背景
  * 浏览器的渲染机制可以先说吧
  * 首屏优化
    * 下载资源优化
      * 需要进行下载的资源的话，基本上都是通过我们的 link 和 script 来引入的，因为浏览器下载的是 index.html 文件
        * 这个时候开始进行对文档进行解析
      * 这个时候就需要做的优化点就是服务器静态资源文件的压缩
      * 压缩到了彻彻底底了，就需要进行产物构建的时候使用的 cdn 引入
      * 以及构建产物的时候，那些包不要进行打包构建到我们的文件中吧
    * 白屏优化
      * 主要的话也是由于客户端获取服务端资源引发的问题，此时也是需要进行压缩文件的呐
      * 以及此时的话对于前端书写代码来说的话
        * 原生而言的就是: 书写一些动画效果的话，使用我们的 CSS 来实现。尽量不通过 js 来完成
          * 开启合成层实现一些动画效果，这个就是我们的硬件优化吧
          * 代码中不要的数据尽量释放掉，虽然说我们的 js 是通过可达性来判断资源是否需要释放的
        * vue 而言的话
          * v-if 和 v-for 不要同时使用
          * v-if 和 v-show 的合理选择
          * 减少 data 中数据的定义
            * 这个呐就和我们的 vue 的响应式原理相关了
            * 创建的 data 越多，后期实现的 get 和 set 的次数就越多，导致内存的过多占用吧
        * react 优化
          * 使用 memo 来优化我们的组件，默认启用了内部的 componentShouldUpdate 来进行优化(PureComponent)
          * 使用我们的 useMemo 和 useCallback 来优化我们的组件
        * 框架中实现使用路由懒加载使用我们的资源加载
          * 按需获取资源的加载
    * SEO 优化
      * 首先我们的搜索引擎的话对于静态文件的亲和度比对 js 文件的亲和度更高的
      * 但是呐，我们的vue 和 react 的话是通过 javascript 来实现的是对应的资源的动态加载
      * 所以说这个时候实际上照成的框架本身生成的资源也是 js 的呐
      * 这个也是 SPA 应用所存在的缺点吧，是一次性将静态资源服务器中的资源一次性全部获取的呐
      * 这个时候的解决方案的话，就是使用 vue 或者说 react 的同构应用的方式来实现对应的功能了吧
        * 让真真内容的渲染交给服务器进行，这个就是 ssr 的实现 SEO 优化的一个点吧
        * ssr 也是小型企业最终选型方案吧
    * 性能优化对应的指标
      * LCP (Largest Contentful Paint)
      * FP (First Paint)
      * FMP (First Meaningful Paint)
      * FID (First Input Delay)
      * CLS (Cumulative Layout Shift)
      * TTI (Time to Interactive)
      * LH (Lighthouse)
      * ……
    * 资源优化
      * `字体优先加载`
      * `i18n 选择性引入`
      * `图片的压缩`
      * `图片的懒加载实现`
      * `静态资源的缓存实现`

## CSS 实现方案
* 通过预处理器 less sass stylus 来实现
* all in js 的实现方案: `styled-components` `module.css`
* 原子化实现方案
  * unocss 
  * tailwindcss

## 面试流程
* 交代背景
* 调研方案
* 方案落地
* 优化方案反思

## 1000w行表格如何实现渲染
* 首先这是一个大数据量的前端展示需求
* 数据量大的话，此时就需要进行解决渲染卡顿的解决
* 解决方案
  * DOM 渲染 -- 不推荐
  * 虚拟列表 -- 非最终实现方案
  * canvas table 实现
  * 可视化区绘制算法实现
  * canvas + wasm 技术实现基本的落地吧

## 大文件实现的思路
* 问题出现
  * `网络断开后，先前传递的内容小时` -- 断点续传
  * `传递过程中网络波动出现` -- 断开重连重传
  * `关机后，想续传文件` -- 切片上传
* 实现方案
  * `前端文件切片` -- 切片上传，实现的是我们的将大文件切成一个一个的小的数据内容
    * 这一段交给 webworker 来实现处理
    * 切割过程中使用 blob 将数据存储于 indexedDB 中方式断传
    * 下次上线后进行断点续传
    * webSocket 进行实时的前后端的通信以及请求序列的控制
  * 将切片传递给后端，但是这时候需要为文件命名，同时Promise.all确保切片位置的正确性
  * 后端接收到了切片内容，然后进行合并，同时将合并后的文件进行存储，fastDfs
* 大文件上传的整体设计
  * 组件设置
  * props 事件 状态
  * 拖拽上传，多文件上传
  * 通用化的不同文件上传的协议方案选择

## 如何修改 npm 包
* 对于稳定的库而言的话: 直接拉取下来即可
* patch 工具实现对应的操作，就是进行打补丁来实现的吧
  * patch package 来实现我们的操作吧 `npm i patch-package postinstall-postinstall`
  * 也就是关于我们的 `npm hooks`
* fork package 进行内部的修改吧
  * npm私服

## 超过 js 中的最大数字的时候如何处理
* 获取number最大数值
  * `Number.MAX_VALUE`
* 出现时机
  * 大数据计算
    * 金融行业
    * 科学计算
    * 数据分析
  * 格式展示
  * 用户输入出现吧
* 解决规范
  * 使用es6的`BigInt`
  * 使用外部库: `decimal.js big.js`
  * 转化为字符串进行处理
  * 使用数据格式化操作吧
  * 用户操作的时候的表单校验（根源解决问题方式吧）

## 当QPS达到峰值的处理实现
* QPS 就是前端应用请求达到峰值的时候，对服务器造成的额外的压力吧
* 方案
  * 实现后端接口主动限流
    * rate-limit -- nodeJs 中的实现
    * django-rest-framework -- 内部具备一个限流组件
  * 前端请求合并操作
    * 短时间内的请求进行合并为一次请求，从而实现降低服务端压力
    * 就是使用我们的 `debounce throttle` 来进行实现
  * 请求缓存实现
    * `swr` 针对于请求的一个缓存吧，react 中的实现方式
  * 任务队列的实现，解决并发的问题吧
    * 通过`滑动窗口`的算法来实现的吧

## H5 移动端适配问题解决方案
* 背景
  * 就是项目需要支持我们的 pc 和 移动端的实现方案
* 解决方案
  * 根据不同的端进行开发两套代码实现解决
  * 根据不同的端实现加载不同的CSS样式吧
  * `根据响应式来运行不同的运行规则（**常用**）`
  * 通过预处理器来实现吧
* 需要实现考虑的问题
  * 设置视窗
    * 设备的宽高缩放，通过元数据 meta 来实现吧
  * 掌握媒体查询 `media-query` 来实现
  * 使用 `flex` 弹性盒布局
  * 使用 `rem` `em` 来实现
  * 使用 `vw` `vh` 来实现
  * 设置图片响应式实现 picture 标签来实现的吧

## 实现前端水印效果
* 为了保证数据的安全性，这个时候就需要进行我们的水印功能的实现吧
  * 文档保护
  * 图片保护
  * 视频保护
* 明水印的实现（肉眼可以看见）
  * 通过 canvas 来进行实现
```CSS
/* 通过背景图来实现吧 */
.watermark {
    background: url('../assets/images/watermark.png')
}
```
```javascript
// 通过 js 来实现
const watermark = (imageSrc, text) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        ctx.font = '20px Arial'
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
        ctx.fillText(text, img.width / 2, img.height / 2)
        return canvas.toDataURL()
    }
    
}
```
```html
<!-- svg 实现 -->
<svg>${text}</svg>
```
```javascript
import { useEffect, useRef } from 'react';

const useWatermark = () => {
  const canvasRef = useRef(null);

  const addWatermark = (imageSrc, text, type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = '20px Arial';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText(text, img.width - 10, img.height - 10);
    };
    return canvas.toDataURL(type);
  };

  return { canvasRef, addWatermark };
};

export default useWatermark;
```
* 暗水印的实现（肉眼不可以看见）
  * 就是实现的是将我们的数据写入文件的二进制中去吧，后端实现吧
  * 但是暗水印会导致页面有点`脏`

## 资源加载失败的解决方案
* `图片加载问题`
  * 占位图的使用，alt属性的添加
  * 重试机制 （404，无权限）
  * 异常上报机制，就是图片中有两个重要的机制: `onerror` 和 `onload`
* `CSS 文件处理`
  * 404资源未加载得到吧
  * 通过内敛样式的书写，使用备用资源方案
  * 错误上报，onerror阶段实现处理的吧
* `JS文件错误处理`
  * 内敛脚本
  * 备用脚本处理
  * onerror进行错误上报处理
* `CDN错误`
  * 本地备份，cdn出错了，直接使用备用 cdn 即可
  * 动态切换处理，获取到 cdn 列表，然后进行切换
  * 错误上报
* `字体文件处理`
  * 使用降级字体的使用吧 apple字体，微软雅黑
  * webfont 处理
* `SSR错误`
  * 降级处理机制
  * SSR改用CSR渲染

## 前端截图实现
* 飞书文档在列表页进行查看，此时就需要进行前端截图
* 内容导出为 jpg 格式的实现
* 实现的方案是
  * canvas 的截图实现
  * puppeteer 的截图实现，无头浏览器的实现
  * html2canvas 的第三方库的实现
* 实现上传 cdn
* 具体的实现流程
  * 全页面截图 body
  * 局部截图 div
  * 特定区域截图 dom
  * 设置具体协议
    * 函数式的封装
    * 组件式的封装吧
```javascript
   document.addEventListener('DOMContentLoaded', () => {
       const contentElement = document.getElementById('content');
       const screenshotButton = document.getElementById('screenshotButton');

       screenshotButton.addEventListener('click', () => {
           html2canvas(contentElement).then(canvas => {
               // 将 canvas 转换为图片
               const imgData = canvas.toDataURL('image/png');
               const link = document.createElement('a');
               link.href = imgData;
               link.download = 'screenshot.png';
               link.click();
           });
       });
   });
```

## 大量请求并发控制
* 数据采集平台的实现，低代码编辑平台，有序相对稳定发送请求的实现
* 滑动窗口的实现来控制我们的流量监控吧
  * 请求队列的实现
  * 防抖或者节流
    * debounce: 节流
    * throttle: 防抖
  * 分页加载的实现
```javascript
class RequestQueue {
    constructor(maxConcurrentRequests) {
        this.maxConcurrentRequests = maxConcurrentRequests;
        this.currentRequests = 0;
        this.queue = [];
    }
    enqueue(request) {
        return new Promise((resolve, reject) => {
            this.queue.push({ request, resolve, reject })
            this.processQueue();
        })
    }
    processQueue() {
        if (this.currentRequests < this.maxConcurrentRequests && this.queue.length > 0) {
            const { request, resolve, reject } = this.queue.shift();
            this.currentRequests++;
            request()
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    this.currentRequests--;
                    this.processQueue();
                })
        }
    }
}
const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3',
    'https://api.example.com/data4',
    'https://api.example.com/data5',
    'https://api.example.com/data6',
    'https://api.example.com/data7',
    'https://api.example.com/data8',
]
const requestQueue = new RequestQueue(5);
function fetchData(url) {
    return fetch(url).then(res => res.json())
}
urls.forEach(url => {
    requestQueue.enqueue(() => fetchData(url))
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => console.log('请求完成'))
})
```
```javascript
function debounce(func, delay, immediate) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate && !timer) {
            func.apply(context, args);
        }
        timer = setTimeout(() => {
            func.apply(context, args);
            timer = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }, delay)
    }
}
```
```javascript
// 分页加载，无限滚动
class PaginationLoader {
    constructor(fetchData, pageSize) {
        this.fetchData = fetchData;
        this.pageSize = pageSize;
    }
    async loadPage(page) {
        const data = await this.fetchData(page, this.pageSize);
        return data;
    }
    async loadAll() {
        let page = 1;
        while (true) {
            const data = await this.loadPage(page);
            if (data.length === 0) {
                break;
            }
            yield data;
            page++;
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`加载第${page}页数据`);
        }
    }
    async loadAllWithDebounce(delay) {
        const debouncedLoadPage = debounce(this.loadPage, delay);
        let page = 1;
        while (true) {
            const data = await debouncedLoadPage(page);
            if (data.length === 0) {
                break;
            }
            yield data;
            page++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    async loadAllWithThrottle(delay) {
        const throttledLoadPage = throttle(this.loadPage, delay);
        let page = 1;
        while (true) {
            const data = await throttledLoadPage(page);
            if (data.length === 0) {
                break;
            }
            yield data;
            page++;
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`加载第${page}页数据`);
        }
    }
    async loadAllWithQueue(maxConcurrentRequests) {
        const requestQueue = new RequestQueue(maxConcurrentRequests);
        let page = 1;
        while (true) {
            const data = await requestQueue.enqueue(() => this.loadPage(page));
            if (data.length === 0) {
                break;
            }
            yield data;
            page++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
```

## 进度条的实现
* 如何获取得到进度
  * 获取的进度的方法
  * 发送请求的方式 fetch 或者说 ajax
* 如何实现绘制进度
  * DOM
  * SVG
* 主要是为了提高用户的体验吧，将加载的进度反馈给用户进行显示吧
```javascript
// progress.js
class ProgressBar {
    constructor(containerId, barId) {
        this.container = document.getElementById(containerId);
        this.bar = document.getElementById(barId);
        this.progress = 0;
    }

    show() {
        this.container.classList.remove('hidden');
    }

    hide() {
        this.container.classList.add('hidden');
    }

    setProgress(value) {
        if (value >= 0 && value <= 100) {
            this.progress = value;
            this.bar.style.width = `${this.progress}%`;
        }
    }

    increment(step = 1) {
        this.setProgress(this.progress + step);
    }

    reset() {
        this.setProgress(0);
    }
}

// 使用示例
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = new ProgressBar('progress-container', 'progress-bar');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    let intervalId;

    startButton.addEventListener('click', () => {
        progressBar.show();
        progressBar.reset();
        intervalId = setInterval(() => {
            progressBar.increment(5);
            if (progressBar.progress >= 100) {
                clearInterval(intervalId);
                progressBar.hide();
            }
        }, 100);
    });

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
        progressBar.hide();
    });
});

```