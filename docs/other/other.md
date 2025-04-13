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