# gulp 构建工具
> * 该工具是我们的一个自动化工具
> * 主要是用于编写一些一系列的自动化的任务，并且进行执行的工具吧
> * 在以前的时代中，我们的常用的一些自动化工具是 grunt

![img29](/img_29.png)

## gulp 是什么
* gulp 是一个 toolkit，主要是实现的是我们自动化的工程吧，同时帮助我们实现增强工作流吧
* 比如说 gulp 官网的一些介绍
  * gulp 可以实现自动化的将我们的 ts -> js
  * gulp 可以实现自动化的将我们的 png -> webp
  * gulp 可以实现自动化的将我们的 scss -> css
  * gulp 可以实现自动化的将我们的 markdown -> html

## gulp 和 webpack 
* gulp 核心理念
  * gulp 是一个 task runner，这一个特性的话和我们的 grunt 是一样的呐
  * 可以定义自己的一系列任务，等待任务被执行
  * 是一个基于文件流的构建流
  * 我们可以使用 gulp 的插件体系来实现完成某些特定任务吧
* webpack 的核心理念
  * webpack 是一个模块化的打包工具，module bundler
  * 可以使用各种各样的 loader 实现加载各种各样的文件
  * 可以使用 webpack 中的 plugins 完成某些特定的定制化的打包构建产物的呐
* 二者对比
  * gulp 相对于 webpack 更加的简单，易用，适合用于编写一些自动化的任务吧
  * 但是对于一个大型的任务体系来说的话，gulp并不适合，主要还是使用的是我们的 webpack 进行相应的构建吧，gulp默认不支持我们的模块化的呐
* gulp 的安装
  * `pnpm add gulp -D`
  * touch gulpfile.js -- gulp 的配置文件，类似于我们的 webpack.config.js

## 探究 Promise 吧
* 三大 promise 状态
  * `pending 状态`: 等待中
  * `fulfilled 状态`: 完成了
  * `rejected 状态`: 拒绝了
* new Promise(executor) 经历的变化
  * 当我们实现使用了该方法后，我们的 Promise 处于 pending 状态
  * 一旦我们的Promise 示例运行成功后，我们的 Promise 处于 fulfilled 状态: 可以主动返回Promise.resolve，也可以调用 executor 中的 fulfilled 回调
  * 一旦我们的Promise 示例运行失败后，我们的 Promise 处于 rejected 状态: 可以主动拒绝Promise.reject，也可以调用 executor 中的 rejected 回调
* Promise 的类方法
  * `Promise.resolve()` 
  * `Promise.reject()`
  * `Promise.race([promise1, promise2, promise3])` 最先返回结果的Promise对象决定最终状态时 fulfilled 还是 rejected
  * `Promise.all([promise1, promise2, promise3])` 所有的Promise对象都决定最终状态时 fulfilled 还是 rejected
  * `Promise.allSettled([promise1, promise2, promise3])` 所有的Promise对象都决定最终状态时 fulfilled 还是 rejected

## 探究执行顺序吧
```javascript
function task() {
    console.log("my_task1_front")
    const my_task = async () => {
        setTimeout(() => {
            console.log("my_task2")
        }, 1000)
        return Promise.resolve(undefined)
    }
    my_task().then((res) => {
        console.log("my_task1_micro")
        setTimeout(() => {
            console.log(res)
        }, 1000)
    }, (err) => {
        console.log(err)
    })
    console.log("my_task1_back")
}
task()
```
* 上面的代码的执行顺序是如何的呐？？？
![img32](/img_32.png)

* 首先判断我们的代码执行顺序的时候
  * 首先判断该代码是否由任何其他的差异化
  * 同步代码首先进行执行
  * 如果是队列函数中的代码的话
    * 宏任务队列中任务只有等待微任务队列中的所有任务执行结束后才开始执行的吧
* 上面的代码讲解
  * `console.log("my_task1_front")` 和 `console.log("my_task1_back")` 都是同步代码，所以说依次执行
  * 然后我们的两个计时器中的回调函数的话都是属于宏任务，故内部的代码的处于我们的宏任务队列中的呐
```javascript
function task() {
    console.log("my_task1_front")
    const my_task = async () => {
        setTimeout(() => {
            console.log("my_task2")
        }, 1000)
        return Promise.resolve(undefined)
    }
    my_task().then((res) => {
        console.log("my_task1_front_micro")
        setTimeout(() => {
            console.log(res)
            return Promise.resolve(undefined)
        }, 1000)
    }, (err) => {
        console.log(err)
    }).then((res) => {
        console.log("my_task1_back_micro")
    })
    console.log("my_task1_back")
}
task()
```
![img33](/img_33.png)
* 总结一些吧
  * 首先判断我们的执行顺序的问题的话，执行优先顺序是
    * `同步代码 > 微任务队列 > 宏任务队列`
    * 队列内部的代码执行顺序为: 先进先出吧
  * 微任务有哪些呐？？
    * Promise 的 then/catch/finally 回调函数
    * Async/await 的回调函数
    * MutationObserver 的回调函数
    * process.nextTick 回调函数
    * queueMicrotask
  * 宏任务有哪些呐？？
    * 浏览器事件: click mouseover 事件等等
    * 定时器任务: setTimeout setInterval
    * 页面渲染任务: requestAnimationFrame
    * 事件回调: I/O事件，鼠标事件，键盘事件等等
    * 网络请求任务: fetch, XMLHttpRequest, WebSocket，WebRTC
    * MessageChannel
    * script 标签中的代码

![img34](/img_34.png)

## 开始编写 gulp 简单任务
* 主要的话使用的是我们的 gulpfile.js 中实现编写我的 `run task` 吧
  * `npx gulp 任务` 就可以实现完成执行我们的任务了吧
  * `npx gulp --help` 查看 gulp 的帮助文档
```javascript
// 开始编写一些简单的 gulp 任务吧
const foo_run_task = (callback) => {
    console.log("foo_run_task")
    callback() // 表示该任务执行结束吧
}

// 只有导出的任务 gulp 才认识的呐，才知道执行的呐
module.exports = {
    foo_run_task,
}
```
* 然后执行我们的 `npx gulp foo_run_task`
* 同时我们的每一个 gulp 任务默认是一个异步的呐

![img30](/img_30.png)

## 编写 gulp 多任务
```javascript
// 开始编写一些简单的 gulp 任务吧
const foo_run_task = (callback) => {
    console.log("foo_run_task")
    callback() // 表示该任务执行结束吧
}

const foo_run_task_async = (callback) => {
    setTimeout(() => {
        console.log("foo_run_task_async")
        callback() // 表示该任务执行结束吧
    }, 1000)
}

// async 函数的话，默认返回的是我们的 return Promise.resolve(undefined)

// 只有导出的任务 gulp 才认识的呐，才知道执行的呐
module.exports = {
    foo_run_task,
    foo_run_task_async,
}
```
* gulp 的每个任务默认都是一个异步的 JavaScript 函数
  * 此函数可以接收一个 callback 回调函数，该回调函数的执行，表明了我们的当前任务的执行完毕吧
  * 活着说返回一个 stream, promise, event emitter, child process 或者 observable 的实例，gulp 会自动的等待这些异步任务执行完毕吧
* 同时我们的 gulp 任务的话分为两种
  * 公开任务 public tasks: 从我们的 gulpfile.js 中导出的就是一些公开任务
  * 私有任务 private tasks: 从我们的 gulpfile.js 中导出的函数，但是没有被导出的函数，就是我们的私有任务
* 命令行多任务执行
  * `npx gulp public_task1 public_task2...`
  
![img31](/img_31.png)

## gulp 文件操作
* 执行的就是通过我们的 gulp.src 和 gulp.dest 来操作我们的文件吧
* gulp.src 默认返回的是 ReadWriteStream 的流对象
```javascript
// demo use gulp.src() 和 gulp.dest() 来读取文件和写入文件吧
const { src, dest, watch } = require("gulp")
const { resolve } = require("path")
const babel = require("gulp-babel")
const terser = require("gulp-terser")
const copyFile = (callabck) => {
  return src(resolve(__dirname, "./src/**/*.js")) // 读取 src 目录下的所有 js 文件
          .pipe(babel()) // 使用 babel 来转换 js 的代码
          .pipe(terser({ mangle: { toplevel: true } })) // 使用 terser 来压缩 js 的代码并且丑化代码
          .pipe(dest(resolve(__dirname, "./dist"))) // 写入 dist 目录下
}
// 监听 src 目录下的所有 js 文件，当文件发生变化的时候，执行 copyFile 任务
watch(resolve(__dirname, "./src/**/*.js"), { ignoreInitial: false }, copyFile)
```

## gulp 在项目中的简单使用
* 实现打包 html 文件
  * gulp-htmlmin | gulp-inject
* 实现打包 css 文件
  * gulp-less | postcss
* 实现打包 js 文件
  * gulp-babel | gulp-terser | babel-preset-env 
* 开启本地服务器
  * browser-sync 或者说 gulp-connect
* 创建打包任务
* 创建开发任务
```javascript
const { src, dest, watch, series, parallel } = require('gulp');
const { resolve, relative } = require("path");
const fs = require('fs');
const htmlmin = require("gulp-htmlmin");
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const less = require('gulp-less');
const sass = require('gulp-sass')(require('sass'));
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();
const inject = require("gulp-inject");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// 创建 dist 目录的任务
const createDistDir = () => {
  const distPath = resolve(__dirname, "./dist");
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
  return Promise.resolve();
};

// 实现对 html 文件的压缩以及输出和打包 Task 任务
const htmlTask = () => {
  return src('./src/**/*.html')
    .on('error', function(err) { console.error(err); })
    .pipe(htmlmin({ collapseWhitespace: true }))
    .on('error', function(err) { console.error(err); })
    .pipe(dest(resolve(__dirname, "./dist")))
    .on('error', function(err) { console.error(err); })
    .pipe(connect.reload());
};

// 对CSS代码进行打包
const CssTask = () => {
  const processors = [
    autoprefixer(),
    cssnano() // 压缩 CSS
  ];
  return src(['./src/**/*.css', './src/**/*.less', './src/**/*.scss'])
    .on('error', function(err) { console.error(err); })
    .pipe(less().on('error', function (err) {
      console.error(err.message);
      this.emit('end');
    }))
    .on('error', function(err) { console.error(err); })
    .pipe(sass().on('error', sass.logError))
    .on('error', function(err) { console.error(err); })
    .pipe(postcss(processors))
    .on('error', function(err) { console.error(err); })
    .pipe(dest(resolve(__dirname, "./dist/css")))
    .on('error', function(err) { console.error(err); })
    .pipe(connect.reload());
};

// 实现对 JavaScript 代码的转换以及打包
const JsTask = () => {
  return src(['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'])
    .on('error', function(err) { console.error(err); })
    .pipe(babel())
    .on('error', function(err) { console.error(err); })
    .pipe(terser({ mangle: { toplevel: true } }))
    .on('error', function(err) { console.error(err); })
    .pipe(dest(resolve(__dirname, "./dist/js")))
    .on('error', function(err) { console.error(err); })
    .pipe(connect.reload());
};

// 将打包后的 css 和 js 文件实现注入到 html 文件中
const injectTask = () => {
  return src(resolve(__dirname, "./dist/**/*.html"))
    .on('error', function(err) { console.error(err); })
    .pipe(inject(src([
      "./dist/js/**/*.js", "./dist/css/**/*.css"
    ]), { relative: true }))
    .on('error', function(err) { console.error(err); })
    .pipe(dest(resolve(__dirname, './dist')))
    .on('error', function(err) { console.error(err); })
    .pipe(connect.reload());
};

// 构建任务
const buildTask = series(createDistDir, parallel(htmlTask, CssTask, JsTask), injectTask);

// 监听文件变化实现自动编译 Task 任务，开发环境的时候使用该任务
const watchTask = () => {
  watch("./src/**", buildTask)
};

const serverByGulpConnect = () => {
  connect.server({
    port: 8080,
    open: true,
    files: "./dist/*",
    server: {
      baseDir: './dist'
    },
    // livereload: true
  });
};

const serverByBrowserSync = () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: true,
    files: "./dist/*",
    port: 8080
  });
};

const serverByGulpConnectTask = series(buildTask, serverByGulpConnect, watchTask)
const serverByBrowserSyncTask = series(buildTask, serverByBrowserSync, watchTask)

module.exports = {
  htmlTask,
  CssTask,
  JsTask,
  watchTask,
  buildTask,
  default: series(buildTask, parallel(watchTask, serverByBrowserSync)),
  serverByGulpConnectTask,
  serverByBrowserSyncTask,
  injectTask
};
```