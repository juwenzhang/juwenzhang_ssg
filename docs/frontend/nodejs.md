# Node.js 文档

> * 官网阅读
>   * NodeJs 官网 https://nodejs.p2hp.com/
>     * Globals 板块阅读
>     * Modules 板块阅读
>     * Classes 板块阅读
>   * Express 官网 https://expressjs.com/zh-cn/
>   * Koa 官网 https://koajs.com/

## Node.js fs 模块的使用
* file System
  * 文件系统
* 对于一个我们的后端服务，都是会有对文件进行操作的系统集合，这个就是我们的 fs 模块吧
* fs 模块主要实现使用的场景就是我们的
  * 前端向后端进行传输文件的时候，后端通过 fs 模块实现对文件的保存以及处理
  * 同时后端实现我们的将处理后的文件以某种响应返回给前端进行使用，前端实现对应的回显
  * 这个就是我们的文件上传的功能吧
* 在文件上传的基本过程中我们需要考虑的东西含有
  * 在前后端交互中文件类型的数据以什么样的数据进行传输呐？？？
  * 在文件上传过程中，我们该如何优化文件上传的流程呐？？？
  * 这些点都是我们在进行对应的操作的时候需要考虑的一点吧
* 对于 NodeJs | Golang | Python 作为后端的话，主要的优势就是我们的异步操作吧
  * 通过我们的 Nodejs 的异步操作的形式含有两种: 回调函数的形式实现操作 | Promise 的形式实现操作吧
  * 所以说我们的 NodeJs 的 fs 模块也是为我们提供了三种类型的接口 API
    * 同步处理的 API 调用
    * 异步回调函数形式的 API 调用
    * 异步 Promise 形式的 API 调用

### 文件读取 API 的使用
* readFileSync(fileName, { options })  这个就是对应的同步执行的 api
* readFile(fileName, { options }, callback)  这个就是对应的异步回调函数执行的 api
* readFilePromise(fileName, { options })  这个就是对应的异步 Promise 执行的 api
```javascript
const fs = require('fs');

// 对于没有进行配置的时候，默认是按照二进制的形式进行读取的
// 这个时候就需要进行进制的转换才可以的呐
const res = fs.readFileSync('./test.txt', { 
    encoding: 'utf-8' 
});
console.log(res);
const res1 = fs.readFileSync("./test.txt")
console.log(res1.toString());

// 这种回调函数形式的调用方法的话很容易导致我们的回调地狱出现的呐
fs.readFile('./test.txt', { 
    encoding: 'utf-8' 
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// 这种 Promise 的形式调用的话，也是可以的
fs.promises.readFile("./test.txt", { 
    encoding: 'utf-8' 
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
fs.readFilePromise("./test.txt", { 
    encoding: 'utf-8' 
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```

### 文件描述符
* file description
  * 文件描述符
* 文件描述符就是我们的文件在操作系统中的标识符
* 用来实现的是可以实现控制接下里的文件操作类型究竟是什么呐
* 主要使用的 api 就是我们的 open(fileName, { options }, callback)
```javascript
const fs = require('fs');
fs.open('./test.txt', { 
    encoding: 'utf-8' 
}, (err, fd) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fd);
        // 实现获取得到文件信息
        fs.fstat(fd, (err, stats) => {
            if (err) {
                return
            }
            console.log(stats);
        })
    }
})
```
* 实现获取 **stats** 得到的信息含有
  * size 就是我们的文件的大小吧，字节的形式存在的呐
  * atimeMs 就是我们的最后访问的时间
  * mtimeMs 就是我们的最后修改的时间
  * ctimeMs 就是我们的最后创建的时间
  * birthtimeMs 就是我们的文件创建的时间
* 文件描述符实现的就是偏于操作系统底层的一个操作了
* 但是我们需要注意的是我们的通过 open 操作打开的文件的操作
  * 我们需要进行手动的关闭的呐: fs.close(fd, ?callback)
```javascript
const fs = require('fs');
fs.open('./test.txt', { 
    encoding: 'utf-8' 
}, (err, fd) => {
    if (err) {
        return
    }
    // 获取文件描述符信息
    fs.fstat(fd, (err, stats) => {
        if (err) {
            return
        }
        console.log(stats);
    })
    // 手动关闭打开了的文件
    fs.close(fd, (err) => {
        if (err) {
            return
        }
    })
})
```

### 文件写入 API 的使用
> 操作的话任然是我们的三种形式吧，同步操作 | 异步回调函数形式的 API 调用 | 异步 Promise 形式的 API 调用
* writeFileSync(fileName, data, { options })  这个就是对应的同步执行的 api
* writeFile(fileName, data, { options }, callback)  这个就是对应的异步回调函数执行的 api
* writeFilePromise(fileName, data, { options })  这个就是对应的异步 Promise 执行的 api
```javascript
const fs = require('fs');

// 同步 api 操作
fs.writeFileSync('./test.txt', 'hello world', { 
    encoding: 'utf-8' 
});   

// 回调异步操作
fs.writeFile('./test.txt', 'hello world', { 
    encoding: 'utf-8' 
}, (err) => {
    if (err) {
        console.log(err);
    }
})

// promise 异步操作第一种形式
fs.writeFilePromise('./test.txt', 'hello world', { 
    encoding: 'utf-8' 
}).then(() => {
    console.log('写入成功');
}).catch (err => {
    console.log(err);
})

// promise 异步操作第二种形式
fs.promises.writeFile("./test.txt", "hello world", { 
    encoding: 'utf-8' 
}).then(() => {
    console.log('写入成功');
}).catch(err => {
    console.log(err);
})
```
* 每个 api 中我们 options 的配置可以是:
  * encoding 执行操作过程中的编码格式, utf-8 | ascii | base64，默认的是 utf-8
  * flag 执行操作的标识符，w|w+ 表示写入，a|a+ 表示追加，r|r+ 表示读取

### 目录操作 API 的使用
* 创建目录 api
  * mkdirSync(dirName, { options })  这个就是对应的同步执行的 api
  * mkdir(dirName, { options }, callback)  这个就是对应的异步回调函数执行的 api
  * mkdirPromise(dirName, { options })  这个就是对应的异步 Promise 执行的 api
* 删除目录 api
  * rmdirSync(dirName, { options })  这个就是对应的同步执行的 api
  * rmdir(dirName, { options }, callback)  这个就是对应的异步回调函数执行的 api
  * rmdirPromise(dirName, { options })  这个就是对应的异步 Promise 执行的 api
* 读取目录 api
  * readdirSync(dirName, { options })  这个就是对应的同步执行的 api
  * readdir(dirName, { options }, callback)  这个就是对应的异步回调函数执行的 api
  * readdirPromise(dirName, { options })  这个就是对应的异步 Promise 执行的 api
* 重命名目录 api
  * renameSync(oldDirName, newDirName, { options })  这个就是对应的同步执行的 api
  * rename(oldDirName, newDirName, { options }, callback)  这个就是对应的异步回调函数执行的 api
  * renamePromise(oldDirName, newDirName, { options })  这个就是对应的异步 Promise 执行的 api
```javascript
const fs = require('fs');

fs.mkdirSync('./test', { 
    recursive: true,
    encoding: 'utf-8'
})

fs.mkdir('./test', { 
    recursive: true
}, (err) => {
    if (err) {
        console.log(err);
    }
})

fs.mkdirPromise('./test', { 
    recursive: true
}).then(res => {
    console.log(res);
}).catch (err => {
    console.log(err);
})

fs.promises.mkdir('./test', { 
    recursive: true
}).then(res => {
    console.log(res);
})

// ======================================
fs.rmdirSync('./test', { 
    recursive: true,
})
fs.rmdir('./test', { 
    recursive: true
}, (err) => {
    if (err) {}
})
fs.rmdirPromise('./test', { 
    recursive: true
}).then(res => {
    console.log(res);
})

// ======================================
fs.readdirSync('./test', { 
    encoding: 'utf-8',
    withFileTypes: true,
    recursive: true
})

fs.readdir('./test', { 
    encoding: 'utf-8'
}, (err, files) => {
    if (err) {
        return
    }
    console.log(files);
    files.forEach(file => {
        if (file.isDirectory()) {
            console.log(file.name);
            // 回调地狱了
            fs.readdir('./test/' + file.name, { 
                encoding: 'utf-8',
                withFileTypes: true,
            }, (err, files) => {
                if (err) {
                    return
                }
                files.forEach(file => {
                    console.log(file.name);
                })
            })
        }
        if (file.isFile()) {
            console.log(file.name);
        }
        if (file.isSymbolicLink()) {
            console.log(file.name);
        }
    })
})

function readdirPromise(dirName, options) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirName, options, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files)
        })
    })
}
readdirPromise("/", { 
    encoding: 'utf-8',
    withFileTypes: true,
}).then(res => {
    res.forEach(file => {
        if (file.isDirectory()) {
            console.log(file.name);
        }
        if (file.isFile()) {
            console.log(file.name)
        }
    })
})

function readdirRecursive(dirName, options) {
    fs.readdir(dirName, options, (err, files) => {
        if (err) {
            return
        }
        files.forEach(file => {
            if (file.isDirectory()) {
                readdirRecursive('./test/' + file.name, options)
            }
            if (file.isFile()) {
                console.log(file.name);
            }
        })
    })
}

fs.readdirPromise('./test', { 
    encoding: 'utf-8'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// ====================================================
fs.renameSync('./test', './test1', { 
    encoding: 'utf-8',
    flag: 'w'
})
fs.rename('./test', './test1', { 
    encoding: 'utf-8',
}, (err) => {
    if (err) {
        console.log(err);
    }
})
fs.renamePromise('./test', './test1', { 
    encoding: 'utf-8',
}).then(res => {
    console.log(res);
}).catch (err => {
    console.log(err);
})
```

## Node.js events 模块
* events 模块是 node.js 中最核心的模块，它提供了一种机制，用来实现事件驱动的应用程序
* events 就相当于是一个事件的发射器函数吧，主要是对我们的事件进行 emitter 的，发射事件的呐

### EventEmitter 类的使用
* emitter.on(EventName, callbackListener) 监听一个事件，当有这个事件触发的时候，就会执行对应的回调函数
* emitter.emit(EventName, ...args) 触发一个事件，当有这个事件触发的时候，就会执行对应的回调函数
* emitter.off(EventName, callbackListener) 移除一个事件，当有这个事件触发的时候，就会执行对应的回调函数
* emitter.once(EventName, callbackListener) 只监听一次一个事件，当有这个事件触发的时候，就会执行对应的回调函数，然后移除这个事件
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();  // 实现创建实例的操作

function HandleJuWenZhang(...args) {  // 事件回调的时候接收参数
    console.log('我是 juwenzhang 事件的 handle 函数', args);
}

// 监听事件
emitter.on('juwenzhang', HandleJuWenZhang)

// 触发事件
emitter.emit('juwenzhang', "橘子");  // 事件发送的时候传递参数

// 移除事件
emitter.off('juwenzhang', HandleJuWenZhang)
```
* 另外其他的 api
  * emitter.eventNames()  获取所有的事件名称数组
  * emitter.listenerCount(EventName)  获取事件的监听器数量，获取的是个数
  * emitter.getMaxListeners()  获取最大的监听器数量
  * emitter.setMaxListeners(maxListeners)  设置最大的监听器数量
  * emitter.listeners(EventName)  获取事件的监听器数组
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

function HandleJuWenZhang(...args) {
    console.log('我是 juwenzhang 事件的 handle 函数', args);
}
function HandleJuWenZhang2(...args) {
    console.log('我是 juwenzhang2 事件的 handle 函数', args);
}
emitter.on('juwenzhang', HandleJuWenZhang)
emitter.on('juwenzhang', HandleJuWenZhang2)
console.log(emitter.eventNames());  // [ 'juwenzhang' ]
console.log(emitter.listenerCount('juwenzhang'));  // 2
console.log(emitter.getMaxListeners());  // 10
console.log(emitter.listeners('juwenzhang'));  // 
// [ [Function: HandleJuWenZhang], [Function: HandleJuWenZhang2] ]
emitter.setMaxListeners(100);  // 设置最大的监听器数量为 100
console.log(emitter.getMaxListeners());  // 100
emitter.emit('juwenzhang', "橘子");  // 事件发送的时候传递参数
emitter.emit('juwenzhang', "橘子", "橘子");  // 事件发送的时候传递参数
```

## Node.js buffer 模块
* buffer 模块就是用来实现的处理我们的二进制数据的呐
* 在前后端的文件传输中，基本上的都是通过我们的二进制数据进行的传输的呐
  * 浏览器我们实现开发的内容:
    * 基本上都是我们的文本的展示吧
    * 但是有时候的话我们还需要进行我们的文件数据的展示吧
* 这个时候我们需要思考一点的是，我们的文件数据是如何展示以及在前后端中是如何传输的呐？？
  * 这个就是我们的底层需要考虑的事情了
  * 最重要的就是进行处理我们的二进制数据了
* 在前端开发中，二进制数据的处理是十分少的
* 但是在我们的后端开发中，二进制数据的处理就会十分的多了
* 在我们的 TCP 的传输数据过程中，又是利用的字节流 byte-stream 进行的传输了

### Buffer 底层实现原理
* Buffer 底层的实现原理就是利用的 C++ 来实现的，所以这个 Buffer 底层的实现原理就是利用的 C++ 来实现的
* 我们在使用 buffer 的时候向我们的内存申请空间大小的时候，都是实现使用的我们的固定的内存大小 8kb 的
* 同时在我们的源码中话使用了 fromStringFast 这个方法，这个方法就是将我们的字符串数据进行转换成我们的二进制数据

## Node.js stream 模块
### stream 的前言知识
* stream 主要的就是使用我们的流的形式实现我们的读写文件的操作吧
* 相当于就是我们的程序中的二进制数据的话会像流一样读取到我们的程序中的
* 像这样的一连串的字节，就是我们程序中的流
  * 对于我们的一些字节大小比较小的时候，我们是可以进行文件的直接读取，然后进行保存即可
  * 但是对于我们的一些比较大的文件上传的话，就不可能进行一次性的上传读取，我们需要进行的是我们的以流的形式进行我们的读取操作
  * 这个对于我们的性能优化方面具备重要的操作，也是面试必备的一个信息点吧
* 我们的流是可读可写的
  * 主要的利用就是在我们的文件上传中大量的使用吧
* 为什么我们需要进行使用流来读取我们的文件呐？？？
  * 以往的读取文件的操作的话，我们使用的是我们的 readFile 或者说 writeFile 来实现的呐
  * 但是这样的直接的实现我们的读写文件的方式，我们呐是十分的难以控制吧
  * 同时我们也是无法控制我们的读取过程中从什么位置开始进行读取，以及决定一次性读取多少个字节吧
  * 所以说我们就需要使用到流的概念实现我们的文件断点上传的功能吧，从而实现提高程序的性能，这个也是我们的性能优化的一点吧
* 同时在我们的 http 模块中的 request 和 response 中也是使用的是我们的流 stream 实现的
* Node.js 中主要的流含有那些呐？？
  * writable 这个就是我们的写入流    **fs.createWriteStream**
  * readable 这个就是我们的读取流    **fs.createReadStream**
  * duplex 这个就是我们的双向流      **net.Socket**
  * transform 这个就是我们的转换流   **zlib.createDeflate**
* NodeJs 中的所有的stream 都是继承自我们的 EventEmitter，都是 EventEmitter 的实例吧
  * 同时我们的 NodeJs 已经全面的使用了我们的 TypeScript 来实现了的
  * 所以说我们创建出来的流，都是可以直接执行我们的 EventEmitter 中的方法的呐

### stream 可读流 ReadAble
* 主要的话就是对我们的文件进行操作的两个常用的性能优化的操作吧
  * 在实现的是过程中主要可以实现的事件含有我们的
    * open 事件的监听
    * data 事件的监听
    * end 事件的监听
    * error 事件的监听
```javascript
const fs = require("fs");

const readStream = fs.createReadStream("./demo.md", {
  start: 1, // 指定需要进行读取的位置
  end: 100000000, // 指定读取结束的位置
  highWaterMark: 100,  // 设置的是每次的读取的个数吧，默认的是 64kb
});

// 绑定 open 事件监听器，文件打开时触发
readStream.on("open", (fd) => {
    console.log("文件已经打开了", fd)
})

// 绑定 data 事件监听器，每次读取到数据时触发
readStream.on("data", (chunk) => {
  console.log(chunk.toString());

  readStream.pause()  // 暂停

  setTimeout(() => {
    readStream.resume()  // 恢复读取
  }, 200)
});

// 绑定 end 事件监听器，文件读取完成时触发
readStream.on("end", () => {
  console.log("读取完成");
});

// 绑定 error 事件监听器，文件读取出错时触发
readStream.on("error", (err) => {
  console.error("读取文件时发生错误:", err);
});

// 绑定 close 事件监听器，文件关闭时触发
readStream.on("close", () => {
    console.log("文件已经关闭")
})
```

### stream 可写流 WriteAble
```javascript
const fs = require("fs");

// 创建我们的读写流
const readStream = fs.createReadStream("./C&C++帮助文档.chm", {
  start: 0,
  end: 10000000,
  highWaterMark: 100,
  flags: "r+"
})

// 创建我们的写入流
const writeStream = fs.createWriteStream("./C&C++帮助文档01.chm", {
  flags: "a+",
  start: 0,
  highWaterMark: 100,
})

readStream.on("open", (fd) => {
  console.log("文件已经被打开了", fd)
})

writeStream.on("open", (fd) => {
  console.log("文件已经被打开了", fd)
})

readStream.on("data", (data) => {
  console.log(data.toString())

  readStream.pause()
  writeStream.write(data, (err) => {
    console.log("写入失败", err)
  })

  setTimeout(() => {
    readStream.resume()
  }, 200)
})

readStream.on("end", ()  => {
  console.log("文件已经读取完毕")
})

readStream.on("close", () => {
  console.log("文件已经被关闭")
  writeStream.on("finish", () => {
    console.log(文件写入完成了)
  })
  writeStream.end()  // 实现的是关闭我们的写入，同时将我们的最后的内容实现写入
  writeStream.close()  // 写入完成
})

readStream.on("error", () => {
  console.log("文件在读取过程发生了错误")
})
```

### stream pipe 管道
* 这个就是我们的管道了吧
  * 实现的是直接通过我们的管道实现的我们的文件数据在读和写之间的传输数据吧
  * 该方法还是可以通过我们上面的案例实现的
    * 就是先实现创建两个流，分别是我们的读写流，一个是我们的可读流，一个是我们的写入流
    * 然后实现的写入模式改为 a+ 即可实现管道的方法了
  * 但是为了实现我们的读写程序的连续性，我们可以实现的是使用我们的 pipe 管道实现一些操作的呐
  * 可以实现的是让我们的操作变得更加的简单吧
```javascript
const fs = require("fs");

// 创建我们的读写流
const readStream = fs.createReadStream("./C&C++帮助文档.chm", {
  start: 0,
  end: 10000000,
  highWaterMark: 100,
  flags: "r+"
})

// 创建我们的写入流
const writeStream = fs.createWriteStream("./C&C++帮助文档01.chm", {
  flags: "a+",
  start: 0,
  highWaterMark: 100,
})

// 开始实现在我们的可读可写之间建立一个管道吧
readStream.pipe(writeStream)
```

## Node.js http 模块
* 目前的开源的 web 服务器含有我们的
  * nginx apache(静态) tomcat(动态，静态)

### http 模块简单使用
* 我们在 Node.js 中的 http 模块中，主要使用的是我们的 http.createServer 方法来创建我们的服务器的呐
```javascript
const http = require("http")

// 开始实现创建一个服务器
const server = http.createServer((request, response) => {
  // request 对象中包含了我们的客户端发送过来的所有的请求信息吧
  console.log(request.headers.cookie)

  // response 就是我们的服务端向客户端传输的数据吧，本身是一个写入流
  response.end("hello world")
}) 

// 设置服务器监听的端口
// 1024-65535 之间的端口设置吧
// listen(port, ?host, ?callback)
server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开创成功！！！")
})
```
* 实现开启我们的服务的时候可以实现使用我们的 **nodemon** 来实现使用吧
  * 因为我们该工具可以实现是自动监听我们的文件内容的变化，从而实现最终的自动重新运行我们的服务吧
  * nodemon file.js 实现启动我们的程序吧

### http request 对象
* request 对象是一个可读流，所以我们可以使用我们的 pipe 来实现我们的数据传输吧
#### request.methods 信息解析
* request 对象中包含了我们的客户端发送过来的所有的请求信息吧
* request.methods 就是对我们的客户端的请求方式进行的解析吧
```javascript
const http = require("http")

const server = http.createServer((request, response) => {
  console.log(request.url)  // 请求的路径信息
  console.log(request.method)  // 请求的方式类型
  console.log(request.headers)  // 请求头信息
  
  if (request.url === "/") {
    if(request.method.toString() === "GET") {
      response.end(JSON.stringify({
        status: 200,
        ok: true,
        method: "GET",
        data: {
          desc: "欢迎来到 node_server / 的 get 请求"
        }
      }))
    } 
    if (request.method.toString() === "POST") {
      response.end(JSON.stringify({
        status: 200,
        ok: true,
        method: "POST",
        data: {
          desc: "欢迎来到 node_server / post 请求"
        }
      }))
    }
  }
}) 

server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开创成功！！！")
})
```
#### request.url 信息的解析
* 进行解析的时候主要是实现的是我们的解析客户但传递过来的我们的路径查询参数的解析吧
  * 也就是我们的前后端交互中 query_params 的解析吧
  * 这个就是我们的 url 的解析吧
* 首先我们先来看 query_params 在 url 中的参数形式吧
  * /?name=juwenzhang&age=18
    * 处于我们 ? 之后的参数就是我们的客户端传递的查询参数了
    * 这个时候服务端为了实现我们的根据这些查询参数的信息进行对应的解析，我们就需要对url进行解析吧
    * 基本的思路就是获取得到我们的 url : 方法就是使用我们的 request.url 即可
    * 然后通过获取得到的 request.url 进行分割字符串: split("?") 获取到两个部分了
    * 然后通过我们的第二个部分进行分割字符串: split("&") 得到一个数组，数组元素形式的话是我们的: key=value
    * 然后通过我们的数组进行遍历，然后通过我们的 key=value 进行分割字符串: split("=")
    * 最后就是实现的是我们的进行根据得到的数据进行数据库查询即可了，最终将我们的查询得到的数据返回给客户端即可
    * 这个就是我们的 query 形式的参数服务端进行操作的形式了吧
  * 同时还是可以使用我们的内置的 url 方法来实现我们的查询参数的解析
    * 它实现的是直接返回一个我们的查询参数的对象吧
    * url.parse(request.url, true).query  实现的就是获取我们的查询参数的信息吧
```javascript
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);  // 请求的路径信息
  console.log(request.method);  // 请求的方式类型
  console.log(request.headers);  // 请求头信息

  // 手动解析查询字符串
  const urlString = request.url;
  const queryString = urlString.split("?")[1];
  let queryInfo = {};
  if (queryString) {
    const queryStringArray = queryString.split("&");
    queryStringArray.forEach(item => {
      const [key, value] = item.split("=");
      queryInfo[key] = value;
    });
  }
  // 上面的操作是可以通过 url.parse 直接一步完成的呐
  /*
  // 解析查询字符串
  const parsedUrl = url.parse(request.url, true);
  const queryInfo = parsedUrl.query;
  */

  if (request.url.split("?")[0] === "/") {
    if (request.method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        status: 200,
        ok: true,
        method: "GET",
        query: queryInfo,
        data: {
          desc: "欢迎来到 node_server / 的 get 请求"
        }
      }));
    } else if (request.method === "POST") {
      let body = '';
      request.on('data', chunk => {
        body += chunk.toString();
      });
      request.on('end', () => {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
          status: 200,
          ok: true,
          method: "POST",
          data: {
            desc: "欢迎来到 node_server / post 请求",
            body: body
          }
        }));
      });
    } else {
      response.writeHead(405, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        status: 405,
        ok: false,
        message: "Method Not Allowed"
      }));
    }
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      status: 404,
      ok: false,
      message: "Not Found"
    }));
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开启成功！！！");
});
```
* 后端实现对客户端的参数形式的校验的话含有一共四种四大类吧
  * 第一类: 就是我们的查询参数的形式进行一个校验吧: query_params
  * 第二类: 就是对我们的请求头的校验吧: headers
  * 第三类: 就是我们的请求体(body)的形式进行校验吧
    * 但是我们的 body 又是分为的两种
      * 第一种是我们的 formData 数据的形式
      * 第二种是我们的 json 数据的形式
  * 第四类: 就是对客户端的请求路径进行的校验
* 终究的话，主要的就是这几类吧
  * 在网络请求方面的话还是十分的简单容易的呐

#### request.body 信息的解析
* 首先的话就是在我们的 请求体中的数据的处理吧
* 主要的是通过我们的 request.on 的监听事件实现的我们的获取请求体的呐
* request 对象实际上和我们的 response 一样，都是一个可读流对象吧
  * 所以说为了获取得到我们的数据的话，我们需要实现的是类似于我们的 readStream 进行操作获取得到数据吧
  * 上面的案例中也是具备我们的操作的呐
```javascript
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);  // 请求的路径信息
  console.log(request.method);  // 请求的方式类型
  console.log(request.headers);  // 请求头信息

  // 手动解析查询字符串
  const urlString = request.url;
  const queryString = urlString.split("?")[1];
  let queryInfo = {};
  if (queryString) {
    const queryStringArray = queryString.split("&");
    queryStringArray.forEach(item => {
      const [key, value] = item.split("=");
      queryInfo[key] = value;
    });
  }
  // 上面的操作是可以通过 url.parse 直接一步完成的呐
  /*
  // 解析查询字符串
  const parsedUrl = url.parse(request.url, true);
  const queryInfo = parsedUrl.query;
  */

  if (request.url.split("?")[0] === "/") {
    if (request.method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        status: 200,
        ok: true,
        method: "GET",
        query: queryInfo,
        data: {
          desc: "欢迎来到 node_server / 的 get 请求"
        }
      }));
    } else if (request.method === "POST") {
      let body = '';
      // 开始实现获取得到我们的请求体数据吧
      request.on('data', chunk => {
        body += JSON.stringify(JSON.parse(chunk.toString()));
      });
      request.on('end', () => {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
          status: 200,
          ok: true,
          method: "POST",
          data: {
            desc: "欢迎来到 node_server / post 请求",
            body: body
          }
        }));
      });
    } else {
      response.writeHead(405, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        status: 405,
        ok: false,
        message: "Method Not Allowed"
      }));
    }
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      status: 404,
      ok: false,
      message: "Not Found"
    }));
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开启成功！！！");
});
```

#### request.headers 信息的解析
* 我们的 headers 中的数据一般校验含有
  * **Content-Type** 请求头的限制，实现的是指定我们的客户端的请求体数据类型
    * application/json  客户端传递给服务端的数据是json格式的
    * application/x-www-form-urlencoded  客户端传递给服务端的数据是formData格式的
    * multipart/form-data  客户端传递给服务端的数据是formData格式的
    * text/plain  客户端传递给服务端的数据是text格式的
    * text/html  客户端传递给服务端的数据是html格式的
    * application/xml  客户端传递给服务端的数据是xml格式的
  * **Content-length** 请求头的限制，实现的是我们的请求体数据的长度
  * **Accept-Encoding** 请求头的限制，实现的是客户端的请求头中允许我们的服务端返回什么压缩类型的数据
    * application/gzip  客户端允许我们的服务端返回gzip格式的数据
    * application/deflate  客户端允许我们的服务端返回deflate格式的数据
    * application/br  客户端允许我们的服务端返回br格式的数据
    * identity  客户端允许我们的服务端返回identity格式的数据
  * **Accept-Language** 请求头的限制，实现的是客户端的请求头中允许我们的服务端返回什么类型的语言
    * zh-CN  客户端允许我们的服务端返回中文格式的数据
    * en-US  客户端允许我们的服务端返回英文格式的数据
    * zh-TW  客户端允许我们的服务端返回繁体中文格式的数据
    * ja-JP  客户端允许我们的服务端返回日文格式的数据
    * ko-KR  客户端允许我们的服务端返回韩文格式的数据
    * fr-FR  客户端允许我们的服务端返回法语格式的数据
    * es-ES  客户端允许我们的服务端返回西班牙文格式的数据
    * de-DE  客户端允许我们的服务端返回德语格式的数据
  * **Accept** 请求头的限制，实现的是客户端的请求头中允许我们的服务端返回什么类型的数据
  * **Cookie** 字段用于在客户端和服务器之间传递会话信息或其他状态数据
    * sessionId=1234567890 
  * **User-Agent** 服务端用来实现判断客户端类型的一个请求头字段
  * **Referer** 服务器可以通过 Referer 字段了解用户是从哪个页面跳转过来的
  * **Host** 是 HTTP 请求头中的一个重要字段，用于指定请求的目标主机和端口。
  * **Connection** 决定的是我们的 请求是否是长连接 keep-alive 
  * **Authorization** 一般携带的就是我们前端的 token 的，后端根据该字段来实现判断用户是否具备权限
  * **Cache-Control** 用于控制缓存机制
    * no-cache  不缓存数据
    * cache-control  缓存数据

### http response 对象
* 我们的 response 对象是一个可写流对象的呐

#### request.write 响应内容
* 我们在响应内容时，需要使用 response.write() 方法来写内容，并且需要使用 response.end() 方法来结束响应
```javascript
const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
})
```

#### response.end(optionContent)
* 表示的是写入我们的内容，同时作为我们的响应内容实现返回的一个方法吧，同时结束本次的响应
```javascript
const http = require("http");
const server = http.createServer((request, response) => {
    response.end("Hello World");
})
```

#### response.writeHead(statusCode:number, headers:object)
* 表示的是响应头，并且可以设置响应头中的状态码，并且可以设置响应头中的响应头字段
```javascript
const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
})
```

#### response 响应状态码
* 也就是我们的 http 响应状态码吧
* 客户端通过这些状态码来实现判断我们的一些请求是否成功的状态的判定吧
  * response.writeHead(200, { "Content-Type": "text/plain" });
  * response.statusCode = 200;  这样也是可以的呐
* 对于我们的响应状态码的书写的话，一定需要注意我们的 restful api 的规范吧

#### response 响应返回头
* 就是实现的是设置服务端返回给我们的客户端的类型吧
  * response.setHeader("Content-Type", "text/plain");
  * response.writeHead(200, { "Content-Type": "text/plain" });  

### http 模块发送客户端请求
* 对于我们的 http 模块的话，是直接提供了我们的 get 请求了的
* 但是对于我们的 post 请求的话，是需要使用 http.request() 方法来发送请求的
  * 需要通过我们的配置项来实现我们的发送 post 请求吧
  * axios nodejs 中就是基于 http 模块来实现的
  * axios 浏览器中 就是 基于 XMLHttpRequest 来实现的
```javascript
const http = require("http");

http.get("http://127.0.0.1:8888", (response) => {
    response.on("data", (data) => {
        console.log(data.toString());
    })
})

const request = http.request({
  method: "POST",
  hostname: "127.0.0.1",
  port: 8888,
  // 路径参数
  path: "/",
  // 请求头参数
  headers: {
      "Content-Type": "application/json",
      "Content-Length": 13,
      "Connection": "keep-alive",
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit" +
              "/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      "Host": "127.0.0.1:8888",
      "Cookie": "sessionId=1234567890",
      "Authorization": "Bearer 1234567890",
      "Cache-Control": "no-cache",
      "Referer": "http://127.0.0.1:8888",
  },
  // 请求体json参数
  body: JSON.stringify({
      name: "juwenzhang",
      age: 18,
      sex: "男"
  }),
  // 请求查询参数
  params: {
    name: "juwenzhang",
    age: 18,
    sex: "男"
  },
  // 请求表单参数
  formData: {
    name: "juwenzhang",
    age: 18,
    sex: "男",
    file: fs.createReadStream("./index.html"),
    file2: fs.createReadStream("./index.html"),
  },
  timeout: 5000,
  agent: false,
  maxRedirects: 5,
}, (response) => {
    response.on("data", (data) => {
        console.log(data.toString());
    })
})
request.end();  // 必须进行调用吧
```

## Node.js File Upload
* 首先我们的文件上传的话是一个十分今典的话体吧
* 在服务端接收到文件的时候，使用的是我们的二进制数据进行的传输吧，formData
  * 但是为了我们的接收数据的可视化，我们需要进行: base64 编码
  * base64 编码，就是将二进制数据进行编码，变成一个字符串
    * request.setEncoding("base64");
    * request.setEncoding("binary");
  * 同时我们的文件上传的流程中我们需要实现使用的是我们的使用流的形式来实现读写我们的文件吧
    * createReadStream()
    * createWriteStream()
  * 我们操作系统在进行我们的文件传输的时候，默认是具备我们的文件断点的
    * 但是为了实现控制以及缓存图片资源的合理性，所以说我们就需要通过某种方式来实现有效的控制吧
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  console.log(request.url);  // 请求的路径信息
  console.log(request.method);  // 请求的方式类型
  console.log(request.headers);  // 请求头信息

  if (request.url === "/upload" && request.method === "POST") {
    const boundary = request.headers['content-type'].split('boundary=')[1];
    let body = '';

    request.on('data', chunk => {
      body += chunk.toString();
    });

    request.on('end', () => {
      // 解析 multipart/form-data 请求体
      const parts = body.split(`--${boundary}`);
      parts.shift(); // 移除第一个空部分
      parts.pop();   // 移除最后一个空部分

      parts.forEach(part => {
        const headerEndIndex = part.indexOf('\r\n\r\n');
        const header = part.substring(0, headerEndIndex);
        const body = part.substring(headerEndIndex + 4, part.length - 2); // 移除末尾的 \r\n

        if (header.includes('filename=')) {
          const filenameMatch = header.match(/filename="([^"]+)"/);
          const filename = filenameMatch ? filenameMatch[1] : 'default.txt';
          const filePath = path.join(__dirname, 'uploads', filename);

          // 确保 uploads 目录存在
          fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

          // 写入文件
          fs.writeFile(filePath, body, 'binary', (err) => {
            if (err) {
              response.writeHead(500, { "Content-Type": "application/json" });
              response.end(JSON.stringify({
                status: 500,
                ok: false,
                message: "文件上传失败"
              }));
            } else {
              response.writeHead(200, { "Content-Type": "application/json" });
              response.end(JSON.stringify({
                status: 200,
                ok: true,
                message: "文件上传成功",
                filename: filename
              }));
            }
          });
        }
      });
    });
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      status: 404,
      ok: false,
      message: "Not Found"
    }));
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开启成功！！！");
});
```
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  console.log(request.url);  // 请求的路径信息
  console.log(request.method);  // 请求的方式类型
  console.log(request.headers);  // 请求头信息

  if (request.url === "/upload" && request.method === "POST") {
    const boundary = request.headers['content-type'].split('boundary=')[1];
    let part = '';  // 存储当前正在处理的部分
    let filename = '';  // 文件名
    let filePath = '';  // 文件路径
    let writeStream = null;  // 文件写入流

    request.on('data', chunk => {
      part += chunk.toString();
      const boundaryStart = part.indexOf(`--${boundary}`);   // 找到当前部分的起始位置和结束位置
      const boundaryEnd = part.indexOf(`--${boundary}--`);   // 找到最后一个部分的结束位置

      if (boundaryStart !== -1 && boundaryEnd !== -1) {
        // 处理最后一个部分
        const lastPart = part.substring(boundaryStart + boundary.length + 4, boundaryEnd);
        handlePart(lastPart);
        part = '';
      } else if (boundaryStart !== -1) {
        // 处理中间部分
        const currentPart = part.substring(0, boundaryStart);
        handlePart(currentPart);
        part = part.substring(boundaryStart);
      }
    });

    request.on('end', () => {
      if (writeStream) {
        writeStream.end();
      }
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({
        status: 200,
        ok: true,
        message: "文件上传成功",
        filename: filename
      }));
    });

    function handlePart(part) {
      const headerEndIndex = part.indexOf('\r\n\r\n');
      const header = part.substring(0, headerEndIndex);
      const body = part.substring(headerEndIndex + 4, part.length - 2); // 移除末尾的 \r\n

      if (header.includes('filename=')) {
        const filenameMatch = header.match(/filename="([^"]+)"/);
        filename = filenameMatch ? filenameMatch[1] : 'default.txt';
        filePath = path.join(__dirname, 'uploads', filename);

        // 确保 uploads 目录存在
        fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

        // 创建写入流
        writeStream = fs.createWriteStream(filePath);
        writeStream.write(body, 'binary');
      } else {
        if (writeStream) {
          writeStream.write(body, 'binary');
        }
      }
    }
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      status: 404,
      ok: false,
      message: "Not Found"
    }));
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("服务器已经开启成功！！！");
});
```

## Express.js 框架初体验
* 首先我们的express 框架是一个基于 nodejs 的 web 服务器框架，它提供了一套完整的 API 来构建 web 应用程序。
* 实现我们的 express 开发的话，我们的方式含有两种
  * 第一种就是使用我们的内置的 cli 工具，搭建模板 express-generator
    * npm install express-generator --save-dev
    * npx express my_express_demo
  * 第二种就是自己从零搭建属于自己的开发脚手架，当然我们使用的是这种方案吧
* 开始从零搭建吧
  * npm init -y | npm init 实现对项目的初始化
  * npm install express --save 实现对 express 的安装
  * npm install nodemon --save-dev 实现对 nodemon 的安装，方便调试我们的项目吧
    * npx nodemon app.js
```javascript
const express = require("express")

// 创建 express 服务器实例
const app = express()

// 实际上的话和我们的 python 的web开发十分的相似吧，毕竟都是我们的 oop 的开发模式 
// python 的 flask | fastapi | sanic 也是类似的开发模式吧

// 创建一个 post 请求
app.post("/login", (request, response) => {
  response.end(JSON.stringify({
    status: 200,
    ok: true,
    desc: "登录成功",
    data: {

    }
  }))
})

// 创建一个 get 请求
app.get("/home", (request, response) => {
  response.end(JSON.stringify({
    status: 200,
    ok: true,
    desc: "欢迎来到首页",
    data: {

    }
  }))
})

// 创建服务器监听端口
app.listen(8080, () => {
  console.log("express web server has created sucessful")
})
```

## Express.js 中间件初识
* express 本身是一个 NodeJs 中的一个具备路由和中间键的一个 web 服务器框架吧
* 那什么是我们的中间件呐？？
  * 中间件本质上就是我们的一个一个的回调函数罢了
  * 该回调函数接收的参数含有三个
    * 请求对象 request 对象
    * 响应对象 response 对象
    * next函数 用来定义的是执行下一个中间件的函数吧
* 使用中间件的目的，就是我们的当前的请求如果说一直没有进行响应的话，我们的请求将会处于挂起状态，这个时候就需要使用 next()
  * 实现我们的调用下一个中间件的目的吧
* app.post|get|put|delete|("route", () => {}) 内部的回调函数就是我们的中间件吧
* app.use(() => {}) 回调函数也是中间件了
```javascript
const express = require("express")

// 创建 express 服务器实例
const app = express()

// 开始实现创建我们的中间件
// 内部的回调函数就是中间件吧
// app.post("route", (?request, ?response, ?next) => {})
app.post("/login", (request, response, next) => {
  // 打印接收到的参数
  console.log(request.method, request.url, request.headers, request.host, request.hostname)
  // 操作数据库
  // 进行逻辑判断
  // 操作本身的 request 和 response 对象

  // 结束响应周期
  // response.end("login sucessful")
  response.json({
    status: 200,
    ok: true,
    data: {
      desc: "login sucessful"
    }
  })

  // 通过 next 实现我们的执行下一个中间件
  next()
})

// 使用 app.use 实现我们的请求操作吧
// app.use((?request, ?response, ?next) => {})
app.use((request, response, next) => {

})

// 创建服务器监听端口
app.listen(8080, () => {
  console.log("express web server has created sucessful")
})
```

## Express.js 中间件多种使用
* Express 注册中间件的方法有
  * app.use 实现定义我们的中间件
  * routes.use 实现定义我们的中间件
  * app.get|post("route", () => {}) 实现注册中间件
* 中间件的本质就是我们的回调函数吧
  * 内部传入的参数含有
    * request 对象
    * response 对象
    * next 函数
* 中间件英文， middleware
```javascript
const express = require("express")

const app = express()

// use 实现注册中间件
// 通过 use 实现的中间件，在我们的任何的请求中都会匹配上的
// 所以说后面可以进行的是作为全局中间件进行使用吧
// 如果说定义了多个中间件后，我们的上一个中间件执行结束后，
// 下一个中间件是否进行执行，取决于上一个中间件中是否调用 next()
app.use((request, response, next) => {
  console.log(request.url, request.headers, request.body)
  // 可以在该中间件中结束我们的响应的呐
  next()  // 释放我们的下一个中间件的执行，在没有结束响应的情况下执行的吧
})


// 注册路由和中间件
// app.get|post...("route", middleware1, middleware2....)
app.post("/login", (request, response, next) => {
  // response.json({
  //   data: "login middleware"
  // })
  next()  // 释放该中间件，执行下一个中间件
}, (request, response, next) => {
  response.json({
    data: "login middleware2"
  })
})

// 定义错误处理中间件
// 这个时候具备我们的四个参数吧
// 这个时候，在我们的中间件中使用我们的 next 的时候，传入我们的错误，就可以进入该错误处理中间件中了
app.use((error, request, response, next) => {
    response.json({
      data: "error middleware",
      error: error,
      status: 500,
      ok: false,
      desc: "服务器内部错误",
      code: 500
    })
})

app.listen(8080, () => {
  console.log("express web server has created sucessful")
})
```

## koa.js 框架初体检
* 首先我们的 koa 是我们的下一代的 Nodejs 的 web 服务端框架
* 出现的原因主要是因为我们的 express 框架十分的笨重，所以说就出现了我们的 koa
* 同时我们的 koa 在处理异步操作方面更加的强大吧，同时我们的 koa 更加的轻量吧
  * 使用前的环境准备
    * npm install koa --save
```javascript
const Koa = require("koa")

const app = new Koa()  // 实例化 web 服务器对象


// 接收到的是两个对象
// 一个是我们的上下文对象 context ctx
// 在我们的该对象中包含了我们的 request 和 response 对象的呐
// 一个是我们的 next 函数的
app.use((context, next) => {
  console.log(context)
})

app.listen(8080, () => {
  console.log("koa node server create successful")
})
```
## koa.js context 参数解析
* context 对象中包含了我们的 request 和 response 对象的呐
* 所以说我们是可以通过 context 对象进行我们的服务端的很多的操作的呐
```javascript
const Koa = require("koa")

const app = new Koa()  

app.use((ctx, next) => {
  // 1.request 对象
  console.log(ctx.request)  // koa 的请求对象
  console.log(ctx.req)  // nodejs 的请求对象

  // 2.response 对象
  console.log(ctx.response)  // koa 的响应对象
  console.log(ctx.res)  // nodejs 的响应对象

  // 3.其他的属性参数
  console.log(ctx.url)
  console.log(ctx.query)
  console.log(ctx.params)
  console.log(ctx.body)
  console.log(ctx.accept)  // 还有很多的可以获取得到的参数呐

  ctx.res.end(JSON.stringify({
    "hello world": "hello juwenzhang"
  }))
  
  next() // 释放 our next，执行下一个中间件
})

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 中间件使用
* koa 中间件的使用和 express 中间件的使用有一定的差异性吧
* 中间件只能是我们的函数吧
* 如果我们需要区分请求的方法和路径，就需要进行手动的区分了
```javascript
const Koa = require("koa")

const app = new Koa()  

app.use((ctx, next) => {
  if(ctx.method === "POST") {
    if(ctx.path === "/login") {
      ctx.res.end("hello world")
    }
  }
})

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 路由使用
* koa.js 进行我们的每次的路由手动判断匹配的话，这是十分的难受的
* 这个时候我们就可以使用我们的 koa.js 的路由来实现方便的进行操作吧
  * npm install koa-router --save  早期的路由处理吧
  * npm install @koa/router --save  新的路由处理吧
```javascript
const Koa = require("koa")
const Router = require("koa-router")
const app = new Koa()  

// ===========================================================
const router = new Router()
// 开始实现使用我们的后端路由吧
// 可以注册我们的多种类型的路由吧，但是每个路由都是需要进行我们的注册后才可以进行使用的呐
router
  .get("/home", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "home page"
    }))
  })
  .post("/register", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "register page"
    }))
  })
  .post("/login", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "login page"
    }))
  })
// 注册使用路由  
app
  .use(router.routes())
  .use(router.allowedMethods())  
// ==================================================

const userRouter = new Router()
userRouter.get("/user", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "user get page"
    }))
}).post("/user/:id", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "user post page",
    }))
}).delete("/user/:id", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      page: "user delete page",
    }))
})
app.use(userRouter.routes()).use(userRouter.allowedMethods())

// ==============================================================
app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 路由五种参数形式
* koa.js 路由的参数形式一共含有五种的呐
```javascript
const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require("koa-bodyparser")

const app = new Koa()  
app.use(bodyParser())

// 定义路由对象
const userRouter = new Router({
  prefix: "/login"
})
/*
1. params 形式的传递参数 /:id
2. query 形式的传递参数 ?username=""&password="cnsduh"
3. json 请求体方式实现传递数据  application/json
4. formData 形式实现传递数据   x-www-form-urlencoded
5. formdata 形式实现传递数据
*/
// 开始实现定义我们的真真的路由
userRouter
  .get("/", (ctx, next) => {  // 路径参数形式一
    ctx.res.end(JSON.stringify({
      data: "welcome login page"
    }))
  })
  // 动态参数 params 的解析
  .get("/:id", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      data: ctx.params.id  // 获取动态的 params 形式的数据
    }))
  })
  // 查询字符串 query 的解析
  .get("/", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      data: ctx.query  // 获取查询 query 参数的形式的数据
    }))
  })
  // 请求体中的 json 数据解析: koa-bodyparser 进行我们的数据解析的呐
  // koa-multer 实现解析我们的表单数据 或者说使用 @koa/multer
  .post("/json", (ctx, next) => {
    ctx.res.end(JSON.stringify({
      data: ctx.request.body
    }))
  })


// 注册路由对象
app.use(userRouter.routes()).use(userRouter.allowedMethods())

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```
* 我们的 koa 的生态含有
  * | koa-router | @koa/router 路由
  * | koa-bodyparser  对请求体 json 数据的解析
  * | koa-multer | @koa/multer  对表单数据的解析
  * | koa-formidable | koa-formidable-uploads 
  * | koa-formidable-multipart-parser 
  * | koa-formidable-multipart-parser-async 
  * | koa-formidable-multipart-parser-async-v2 
  * | koa-formidable-multipart-parser-async
  * | koa-static 用于实现搭建静态资源的服务器

## koa.js 静态资源服务器
* koa.js 静态资源服务器的搭建
* 我们需要使用我们的 koa-static 这个中间件来完成我们的静态资源的服务器的搭建
* npm install koa-static --save
```javascript
const Koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")

const app = new Koa()  

app.use(static("./upload"))
const UploadRouter = new Router({
  prefix: "/upload"
})
app.use(UploadRouter.routes()).use(UploadRouter.allowedMethods())

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 响应数据
* koa 中支持我们的响应数据的方法的话可以是我们的 
  * 使用Nodejs 提供的 response 对象进行响应数据
    * ctx.res.end() 进行我们的响应数据
    * ctx.res.write() 进行我们的响应数据
    * ctx.res.writeHead() 进行我们的响应头
    * ctx.res.writeContinue() 进行我们的响应头
    * ctx.res.writeEnd() 进行我们的响应头
    * ctx.res.writeStatus() 进行我们的响应头
    * ctx.res.writeTrailers() 进行我们的响应头
    * ctx.res.writeUpgrade() 进行我们的响应头
  * 使用 koa 自带的响应数据的方式
    * ctx.body 实现响应数据
      * string 字符串数据
      * Buffer 二进制数据
      * stream 流数据
      * json 数据
      * Object 对象数据
      * Array 数组数据
      * null 数据
```javascript
const Koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const fs = require("fs")

const app = new Koa()  

app.use(static("./upload"))
const UploadRouter = new Router({
  prefix: "/upload"
})

UploadRouter.get("/", (ctx, next) => {
  // 1.字符串类型
  // ctx.body = "welcome upload page"

  // 2.Buffer 数据类型
  // ctx.body = Buffer.from("welcome upload page")

  // 3.stream 类型
  // const readStream = fs.createReadStream("./package.json")
  // ctx.type = "application/json"  // 指定返回的类型
  // ctx.body = readStream

  // 4.对象类型
  // ctx.status = 200
  // ctx.body = [
  //   {
  //     id: 0,
  //     data: "我是第一个"
  //   },
  //   {
  //     id: 1,
  //     data: "我是第二个"
  //   },
  //   {
  //     id: 2,
  //     data: "我是第三个"
  //   }
  // ]

  // 5.不响应数据
  ctx.body = null
})

app.use(UploadRouter.routes()).use(UploadRouter.allowedMethods())

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 错误处理
* 主要的就是使用我们的 next 函数进行的书写吧
```javascript
const Koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const fs = require("fs")

const app = new Koa()  

app.use(static("./upload"))
const UploadRouter = new Router({
  prefix: "/upload"
})

UploadRouter.get("/", (ctx, next) => {
  const isAuth = false
  // 数组对象类型
  if(isAuth) {
    ctx.status = 200
    ctx.body = {
      code: -1003,
      status: 200,
      data: [
          {
            id: 0,
            data: "我是第一个"
          },
          {
            id: 1,
            data: "我是第二个"
          },
          {
            id: 2,
            data: "我是第三个"
          }
        ]
      }
    } else {
      // app 是一个 EventEmitter
      // ctx.app.emit("eventType", ErrorCode, ctx)
      ctx.app.emit("error", -1003, ctx)
    }
})

// errorHandle
app.on("error", (code, ctx) => {
  const ErrCode = code
  let message = ""
  switch (ErrCode) {
    case -1003:
      meesage = "未授权"
      break
  }

  const body = {
    code: ErrCode,
    message
  }
  ctx.body = body
})

app
  .use(UploadRouter
    .routes()
  )
  .use(UploadRouter
    .allowedMethods()
  )

app.listen(8080, () => {
  console.log("koa node server has created successfully")
})
```

## koa.js 和 express.js 区别
* express.js 的很多功能，该框架都是实现了集成了的，但是 koa.js 是一个比较独立的框架，所以需要我们自己去实现一些功能或者使用第三方中间件吧
  * express.js 是一个全面俱全的框架，但是我们的 koa.js 是一个比较独立轻量级的框架吧
  * 和 python 中的 django 和 flask | fastApi 类似吧
  * 就相当于是一个插件化的开发和设计模式吧，架构设计方面有一定的不同
* express 和 koa 执行中间件的驱动方式有所区别
  * koa 的话对异步执行代码更加的友好吧 -- async 和 await 的支持
  * koa 官方都是具备我们的洋葱模型的呐

## koa.js 洋葱模型
```javascript
const Koa = require('koa');

//Applications
const app = new Koa();

// 中间件1
app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

// 中间件 2 
app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.listen(9000, '0.0.0.0', () => {
    console.log(`Server is starting`);
});
```
* 输出结果是: 1 3 4 2
* 我们的分析就是，在这个过程中，我们的中间件一共具备两个的
  * 第一个中间件执行过程中 console.log(1) 之后就是我们的 next() 函数的
  * 然后正好下面具备我们的一个中间件二，随即就是直接执行我们的中间件2的代码
  * 虽然中间件二中具备我们的 next() 但是由于不具备我们的新的下一个中间件存在
  * 所以说直接将中间件2执行完了即可，然后回归到了我们的第一个中间件执行的呐
* koa 中不管是是我们的同步中间件还是异步中间件，都是复合我们的洋葱模型的
* 但是 express 的话，只是同步满足，但是我们的异步是不满足的