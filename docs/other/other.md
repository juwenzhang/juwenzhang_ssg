# 前端其他知识汇总

## webWorker 简单使用
* webWorker 使用场景
  * 首先在我们的客户端对于一些复杂的计算工作是很不友好的呐，这样的大量的计算工作会默认卡死客户端的计算能力
  * 这个时候的解决方案就是让对应的核心计算过程作为一个任务单元在整个程序中执行的呐，从而避免客户端的卡顿
  * 为社么不选择异步来实现呐
    * 因为实际上异步的执行操作默认任然是在主线程上进行运行，这样任然会导致客户端的卡顿
* webWorker 使用注意事项
  * webWorker 加载的不是本地文件资源，而是一个网络上的资源，一般把需要做的任务存放在 public 木中即可
    * 因为我们的开发环境中，public 是可以直接访问的呐
  * webWorker 只是用来实现的是我们的计算，不能够实现操作我们的浏览器的DOM操作，DOM相关的操作只是在我们的主线程存在的
  * webWorker 中引入第三方或者说自定义的模块的话，一定需要使用 `importScripts(网咯js资源地址，可以跨域的呐)` 方法引入
* 所以说我们的 webWorker 的话，只是适用于一些关于纯 js 的计算，DOM的操作的一定不可以进行优化处理吧
  * 这里可以实现的是探究的面试问题的哈，可以的我们的为什么前端是一个单线程的问题引入吧，这里就可以进行一定的操作吧
```javascript
/* /public/work.js */
// 创建对应的 webWorker 执行的任务
importScripts("worker.js")
const arr = new Array(1000000)
for (let i = 0; i < arr.length; i++) {
    arr[i] = i    
}
const sum = arr.reduce((prev, cur) => {
    return prev + cur
}, 0)

// 计算结果计算完了后直接将结果返回到主线程中
self.postMessage(sum)

// 接收主线程传递过来的任务
self.onmessage = (e) => {
    console.log(e.data)
}
```
---
---
```javascript
// vue 和 react 组件中使用: 接收处理结果以及发送任务
const worker = new Worker(/*一定是一个网络资源*/'http://localhost:3000/worker.js')
// 接收结果
worker.onmessage = (e) => {
    console.log(e.data)
}
// 发送任务
/**
 * @param {Array} arr
 */
function workerEvent(arr) {
    return worker.postMessage(arr)
}

const btn = document.getElementById('btn')
btn.addEventListener("message", () => {
    workerEvent(arr)
})
btn.removeEventListener(workerEvent)
```

## webWorker 的使用场景
* 随着前端的 webGl 和 canvas 的引入，这个时候我们对于这些任务内部的一些执行操作就可以返回给我们的worker进行执行了吧
* 以及前端中发生的大量数据的计算，也是可以直接返回给 worker 进行操作的呐
* 比方说对于我们的图片的一些操作
  * 实现的一般思路都是: 先通过 Image 对象new一个出来
  * 然后在ui层面中进行对应的data-src属性的获取数据吧
  * 最后就是其他的操作
    * 获取得到图片的主要颜色
    * 实现图片的懒加载
    * 实现图片的压缩

## webSocket 初识
* 实现的就是我们的数据的实时响应的吧
* 如果说我们单纯的使用 http 请求响应模型的话，哦我们只能实现简单的 setInterval 来实现顶是的实现的实现吧
* 同时实现实时响应的话还可以通过我们的 http 轮询来实现对应的功能吧
* 主要使用的话就是通过:
  * 主要的流程就是通过我们的
    * 先进行建立连接
    * 然后进行数据的发送和接收
    * 最后进行关闭连接
* 基本的流程就是这样的吧
  * 原本我们实现使用的是 http 协议实现的关于前后端交互的一些流程
  * 但是为了实现数据的实时响应，这个时候就需要将我们的数据从 http 协议切换到 ws 协议
  * 实践的地方就在我们的大屏项目中的一些数据和后端的实时响应的业务实现吧
  * 实现的过程中遇到的一些问题的话就是通过重连实现对应的操作吧
    * restart 方法实现 socket ws 协议的重连吧，主要就是使用对应的定时器实现吧
```javascript
const ws = new WebSocket("ws://localhost:3000")
ws.onopen = () => {
    console.log("连接成功")
}
ws.onmessage = (e) => {
    console.log(e.data)
}
ws.onclose = () => {
    console.log("连接关闭")
}
ws.send("hello")
```

## 大文件上传
* 上传文件的话就是使用的是我们的 `input type=file` 的元素来实现的吧
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
  <input type="file" id="upload">
  
  <script>
    // 开始实现我们的大文件上传的元素
    const upload = document.getElementById('upload')
    
    //todo:处理文件分片函数: file.size 获取文件的大小，file.slice 实现对应的文件分片
    /**
     * 文件分片
     * @param file
     * @param chunkSize
     * @return {*[]}
     */
    function createFileChunk(file, chunkSize = 1024 * 1024/*片段默认为1M*/) {
        const fileChunkList = []  // 分片数据的容器
        for (let i = 0; i < file.size; i += chunkSize) {
            fileChunkList.push(file.slice(i, i + chunkSize))
        }
        return fileChunkList
    }
    
    //todo:根据文件内容创建文件标识hash值
    /**
     * 根据单个切片文件内容创建文件标识hash值
     * @param file
     * @return {Promise<unknown>}
     */
    function calculateFileHashName(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();  // 文件读取器
            fileReader.readAsArrayBuffer(file);  // 读取文件
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const hash = crypto.createHash('sha256');  // 创建 SHA-256 哈希对象
                hash.update(new Uint8Array(arrayBuffer));  // 更新哈希值
                const fileHash = hash.digest('hex');  // 获取最终的哈希值
                resolve(fileHash);
            };
            fileReader.onerror = (e) => {
                reject(e);
            };
        });
    }
    
    // todo:根据文件切片内容创建文件标识 hash 值
    /**
     * 根据多个切片文件内容创建文件标识 hash 值
     * @param file
     * @return {Promise<*>}
     */
    async function calculateFileHashFromChunks(fileChunkList) {
        const chunkHashes = [];
        for (const chunk of fileChunkList) {
            const chunkHash = await calculateFileHashName(chunk);
            chunkHashes.push(chunkHash);
        }
        // 将所有切片的哈希值组合起来，再计算一次哈希值
        const combinedHash = crypto.createHash('sha256');
        chunkHashes.forEach(chunkHash => combinedHash.update(chunkHash));
        const fileHash = combinedHash.digest('hex');
        return fileHash;
    }
    
    //todo: 调用api接口
    /**
     * 上传文件
     * @param fileChunkList
     * @param fileHash
     * @param url
     * @return {Promise<void>}
     */
    async function uploadFile(fileChunkList, fileHash, fileName, url) {
        //文件如何实现上传
        const chunkTask = []
        const formData = new FormData()
        fileChunkList.forEach((fileChunk, index) => {
            formData.append('fileChunk', fileChunk)
            formData.append('chunkName', `${fileHash}-${fileName}-${index}`)
            formData.append('fileHash', fileHash)
            formData.append('fileName', fileName)
            //开始上传文件
            const task = fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                // 进度条
                onUploadProgress: (progressEvent) => {
                    console.log(progressEvent)
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(percentCompleted)
                }
            })
            chunkTask.push(task)
        })
        //每个分段上传后如何告诉后端上传完成: 断点上传
        Promise.all(chunkTask).then(res => {
            console.log(res)
            return axios.request('http://localhost:3000/merge', {
                method: 'POST',
                body: JSON.stringify({
                    fileHash,
                    fileName: file.name
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }

    async function uploadFileEvent(e) {
        //todo:获取需要上传的文件
        const file = e.target.files[0] | upload.files[0]
        if (!file) return
        // todo:1.根据文件来实现定义分片数据
        const fileChunkList = createFileChunk(file)
        //todo:2.根据文件内容为文件命名，利用 hash 来实现
        const fileHash = await calculateFileHashFromChunks(fileChunkList)
        console.log(fileHash)
        //todo: 上传文件
        const data = await uploadFile(fileChunkList, fileHash, file.name, 'http://localhost:3000/upload')
        console.log(data)
    }
    upload.onchange = uploadFileEvent
  </script>
</body>
</html>
```

## 实现性能优化
* 首先就是我们的简历上一定要有性能优化的点即可

## 前端埋点和前端监控
* 前端埋点
  * 是在前端代码中插入特定的事件监听和数据采取逻辑，用于跟踪用户在网站或应用上的各种行为
    * 手动埋点
    * 自动埋点
    * 可视化埋点
  * 最出名的就是神策埋点吧
* 前端监控
  * 前端监控主要关注系统的性能和稳定性，通过采集页面加载时间、资源请求、错误日志等数据来实现
  * `性能监控`: 首屏加载时间，页面交互耗时，资源加载耗时
  * `错误监控`: 捕获javascript错误，网络请求失败，资源加载异常
  * `用户体验监控`: 收集白屏、卡顿等影响用户体验的问题
> 前端埋点和前端监控虽然经常被放在一起讨论，但它们在目标、数据类型、实现方式和核心关注点上存在明显区别。前端埋点主要用于收集用户行为数据,以支持用户行为分析、产品优化等；
> 而前端监控则侧重于监测系统的性能和稳定性，及时发现并解决性能瓶颈和代码异常

## 前端稳定性以及SDK埋点
* 当前前端准备项目: 埋点项目，跨端项目，基建项目，低代码平台项目
* 前端稳定性
  * `SDK开发`
    * 性能采集
    * 异常采集
    * 用户行为埋点
  * `数据上报协议`
  * `数据清洗和加工`
  * `数据可视化`
* SDK 实现细节
  * 性能，异常，用户行为指标设计
  * 上报逻辑: 图片，sendbeacon，ajax，fetch

## 前端性能指标
* `页面加载指标`
  * `FP` First Paint 首次加载
  * `FCP` First Contentful Paint 首次内容绘制
  * `FMP` First Meaningful Paint 首次有意义绘制
  * `LCP` Largest Contentful Paint 最大内容绘制
  * `TTFP` Time to First Byte，首次字节时间
  * `DCL` DOMContentLoaded，DOM 加载完成
* `交互指标`
  * `INP` Interaction to Next Paint，理想值为小于 200ms
  * `CLS` Cumulative Layout Shift，累计布局偏移，理想值为小于 0.1
  * `FID` First Input Delay，首次输入延迟，理想值为小于 100ms
* `其他指标`
  * DNS 域名解析耗时
  * TCP 连接耗时
  * 请求响应耗时
  * 下载资源耗时

## 如何计算上述的指标内容呐？？？
* `性能指标的采集`
  * 主要就是通过的是我们的 window.Performance API 来实现的呐
    * `计算页面加载指标`的话就是通过的是我们的 `PerformanceTiming` 来实现的呐
  * 还可以通过 web-vitals 来实现的呐，进行对应的二开实现最后的一些指标设计吧
* `异常指标的采集`
  * 代码运行异常
    * window.onerror 来实现我们的捕获代码运行异常吧
  * Promise异常
    * 原型链来实现的呐
  * 请求异常
  * 资源加载异常
```javascript
const { timing } = performance
// todo 计算页面的加载时间
const loadTiming = timing.loadEventEnd - timing.navigationStart
cosnole.log("页面加载时间为：", loadTiming, "ms")
// 代码降级的兼容写法
const getLoadingTime = () => {
    try {
        return performance.timing.loadEventEnd - performance.timing.navigationStart
    } catch (err) {
        return Date.now() - performance.timing.navigationStart
    }
}

//todo 代码异常监听
/**
 * @param type
 * @param message 错误信息
 * @param source 错误文件
 * @param lineno 错误行数
 * @param colno 错误列数
 * @param error 错误对象
 */
window.onerror = (message, source, lineno, colno, error) => {
    console.log("捕获到代码异常：", message, source, lineno, colno, error)
    return false //阻止默认的错误处理
}

// todo Promise异常监听
window.addEventListener('unhandledrejection', (event) => {
    console.log("捕获到Promise异常：", event.reason)
})

//todo 请求异常监听，主要是使用我们的原型链来实现吧
// todo 重写 then 方法
const originnalFetch = window.fetch
window.fetch = function (...args) {
    return originnalFetch(...args).then((response) => {
        if (!response.ok) {
            throw new Error("捕获到请求异常：", response)
        }
        return response
    })
}
```

## 用户行为埋点
* 无痕埋点
* 可视化埋点
* 自动埋点
* 手动埋点
```javascript
//todo 无痕埋点
// 也就是主要是使用我们的两个时间机制
// 冒泡机制: 从父元素到子元素
// 捕获机制: 从子元素到父元素
// 默认是冒泡机制，也就是说在我们的父元素上进行绑定的事件，在子元素中也是可以触发的呐，这个就是我们的事件冒泡机制
window.addEventListener('click', (event) => {
    console.log("捕获到无痕埋点：", event.target)
    const paths = event.path | event.composedPath()
    const xpath = paths.map((item) => item.tagName).join(' > ')  // button > div > body > html > body
    const className = paths.map(item => item.className.toLowerCase()).join("-")
    console.log(xpath, className)
})
//对于我们的埋点上报的话一般使用的是我们的 xhr 来实现的对应的上报系统的吧
//上报的一些监听的话主要是通过的是在 window 实现事件的绑定，从而进行对应的监听吧
```

> * https://juejin.cn/post/7218766396963717177?searchId=20250413161025505176AE133D7B2BB9B0 推荐阅读
> * https://juejin.cn/post/7482957797770756131 推荐阅读
> * 性能方面和稳定性方面的话主要是通过我们的: Performance API | PerformanceObserver | Performance Card | Lighthouse 来实现的呐
>   * RAIL 也是可以了解的
>     * 以前的前端性能测试指标吧
>     * R-responsive: 响应速度
>     * A-animated: 动画
>     * I-idle: 空闲
>     * L-load: 加载

## JWT 机制
* JWT(JSON Web Token)，即 JSON 令牌，是一种用于在网络应用间传递数据的开放标准（RFC 7519）。JWT 可以使用密钥或使用数字签名进行签名。
* 主要是应用于我们的一个前后端分离的形式吧，实现取代了我们的 session-cookie 机制的一种实现方式吧

### 传统的session认证机制
* 客户端通过携带 cookie 信息来实现我们的携带用户信息
* 服务器获取得到了具体的 cookie 信息后，我们就可以通过我们的 session 来获取到对应的用户信息
* 基本的实现形式的话就是
  * 客户端向服务器发送一个认证请求
  * 服务端进行该用户信息返回对应的 cookie_id
  * 随后的请求的话，客户端会自动地携带上该 cookie 信息吧
  * 实现服务器对客户端信息的识别吧
* 但是该用户信息是存储在我们的服务端的，具备服务器的内存消耗，带宽消耗大，不适合我们的集群开发吧
  * 主要是需要在我们的请求和API网官进行对应的处理吧

### jwt 认证机制
* 客户端向服务端发送一个认证请求
* 服务端根据客户端发送的一些信息，生成对应的 token 令牌
* 客户端获取得到了 token ，实现存储在本地
* 客户端在后续的每次请求的话都会携带上该 token 信息给服务端进行校验
* 检验通过直接服务端响应数据吧
* token 的话是存储于我们的客户端的，大大的减少了服务端的内存消耗
  * 同时 token 信息的话颁发token 的信息码是在服务端存储的
  * 真真的 token 令牌在我们的 客户端本地进行存储的呐
* token 服务端的颁发的话具备的算法具备
  * `对称加密`
  * `非对称加密`
  * `混合加密`
* 客户端进行存储 token 信息，这样就大大减少了服务器的带宽，适合做我们的服务器集群开发吧
* 客户端通过我们的 `localStorage` 或者 `sessionStorage` 来进行存储
* 客户端通过 `atob` 来进行解码，获取到对应的 token 信息

## JWT 基本结构
* JWT 由三部分组成
  * `header`
    * 存储令牌的类型 `JWT` 
    * 生成令牌所使用的签名算法 `HS256` | `RS256` 等等
    * 最后使用 Base64 的形式实现我们的 token 组织吧
  * `payload`
    * 用于实现的是存储用户的具体的信息的字符串，base64 编码
  * `signature`
    * 使用编码后的 header 和 payload 以及后端的一个`密钥`进行签名，然后进行base64编码
    * 进行签名的时候使用的是我们的 header 信息中指定的签名算法
    * 进行签名的目的是为了`确保token的完整性和真实性`
    * 密钥是`服务端`自己进行指定的，开源的话使用 openssl 来进行生成即可吧
* header 和 payload 中一定不要进行存储铭感信息吧
  * 一般实现的是传递一些非铭感的信息吧
* 生成的token形式的话是: `header.payload.signature`
```textmate
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0
.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
```
* 上面的例子就具备了我们的一些信息
  * 第一部分就是我们的 header 部分信息
  * 第二部分就是我们的 payload 部分信息
  * 第三部分就是我们的 signature 部分信息