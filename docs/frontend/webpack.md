# webpack babel 文档
> 作为前端可以不看源码，但是这些工具的官方文档还是需要自己认认真真花费时间好好看看的
> 同时了解这些打包工具呀，代码质量检测工具呀，测试工具呀，对于自己后面成为一个 infra 有一个很好的帮助吧
> https://webpack.docschina.org/

## webpack 介绍
* webpack 是一个用于构建 JavaScript 应用程序的静态模块打包器
* 在内部进行处理的含有我们的: js代码，CSS代码，html代码，图片，视频等等静态资源的吧
* 同时在性能优化的时候对我们的打包也是有一定的要求的呐
* 在 webpack 内部含有我们的常见的一些 loader plugins entry output 等等配置吧

## webpack 常见 loader 
* 什么是 webpack loader 呐？？？
  * 我们的 loader 就是关于我们的对不同的文件进行解析的一些插件吧
  * 同时这些 loader 的话实现的就是进行我们的将我们书写的源码交给 loader 进行处理，然后最终将解析后的源码进行编译返回
  * 同时在我们的配置中的话 loader 的执行顺序是 `从右往左，从下往上的`，内部源码的处理是使用了我们的 Queue 队列来实现的呐
  * 同时我们在自定义 loader 的时候，每一个 loader 都是含有 source map meta 等属性传入 loader 的
```javascript
// 来一个简单的 loader 吧
function my_loader(source, map, meta) {
    console.log(source, map, meta)
    // 进行对 source 的一些编译处理
    return source  // 将处理后的 source 进行返回即可
}
```
* 那么常见的 loader 含有那些呐？？
  * babel
    * 一个用来实现编译我们的 js 代码的编译器，官网的介绍就是说 babel 是一个 javascript compiler
      * 主要的作用是 `ts->js` | `jsx->js` | `tsx->js`
      * 配置方案的话可以是: `babel-config.js`
        * 配置方式可以是在 webpack 中进行配置不同的`插件配置`，或者说结合 `预设+browserslist` 的配置方案
      * 该过程主要使用的 loader 是 `babel-loader`
        * 预设的话我们主要设置预设是: 
          * `babel-preset-env`  环境预设
          * `babel-preset-react`  react 预设
          * `babel-preset-typescript`  ts预设
  * file-loader
    * 主要是对我们的文件资源进行处理一个 loader
  * url-loader
    * 和file-loader功能相似，但是可以通过指定阈值来根据文件大小使用不同的处理方式
  * row-loader
    * 加载文件原始内容
  * image-webpack-loader
    * 进行的是压缩图片资源的 loader
  * style-loader | less-loader | stylus-loader | sass-loader | css-loader
    * 实现的是我们的对 css 进行处理的一些 loader 吧
    * 同时我们还可以借助于 postcss-loader 来实现吧，postcss 和 babel 是十分相似的呐
  * eslint-loader 
    * 针对的是我们对代码进行 eslint 的检测的 loader 吧
  * cache-loader
    * 实现的是对我们的 loader 进行缓存的 loader 吧

## webpack plugins
* plugins 的作用是 `对打包后的代码进行一些处理`，比如：
  * `definePlugin` webpack4 之前用于指定环境的插件，webpack5 之后，就是通过 `mode` 属性来进行配置了
  * `web-webpack-plugin` 为单页面应用输出 html 文件的插件吧，性能方面优于 html-webpack-plugin
  * `clean-webpack-plugin` 主要是决定我们的每次打包效果的，保证每次的打包效果都是最新的
  * `webpack-merge` 用于实现自定义定制化配置的使用用于 webpack 配置的合并的
    * webpack.common.config.js 共有的配置文件
    * webpack.dev.config.js 开发环境配置文件
    * webpack.prod.config.js 生产环境配置文件
  * `ignore-plugin` 指定打包忽略的文件
  * `terser-webpack-plugin` 实现的是压缩 es6 的代码（tree shaking）
    * `uglify-webpack-plugin` 实现的是压缩 es5 的代码
    * 需要进行注意的是我们的 js 的分包是通过 output 配置来实现的呐
  * `mini-css-extract-plugin` 实现的是将我们的 css 文件进行分离的，支持按需导入
    * `css-minimizar-webpack-plugin` 实现的是压缩我们的 css 代码
    * 先进行的是我们的分包处理，就是先使用我们的 mini-css-extract-plugin 进行分包的，
    * 然后使用我们的 css-minimizer-webpack-plugin 进行压缩的
  * `serviceworker-webpack-plugin` 为离线应用增强离线缓存功能的
  * `ModuleConcatenationPlugin` 开启 scope hoisting 的功能，也就是我们的代码块的代码进行合并的,减小代码体积
  * `copy-webpack-plugin` 实现的是对静态资源的复制的
  * `ParallelUglifyPlugin` 实现的是多进程压缩我们的代码的
  * `webpack-bundle-analyzer` 实现的是对我们的打包后的代码进行可视化的
* 比较好用的一些 plugins
  * `splitChunkPlugin` 实现的是我们的代码块的分包的
  * `webpack-merge` 实现的是我们的对 webpack 配置的合并的
  * `HotModuleReplacementPlugin` 实现的是我们的代码热更新的
  * `ignorePlugin` 指定打包忽略文件，加快构建速度的
  * `mini-css-extract-plugin` 实现的是我们的对 css 文件进行分离的
  * `terser-webpack-plugin` 实现更精细的代码压缩功能

## webpack loader 和 plugin 区别
* loader 相当于是一个我们的获取资源后对资源进行处理的函数，将处理后的资源进行返回，交给下一个loader或者webpack进行打包
  * 主要进行配置的地方是我们的 modules 中进行自定义不同文件的解析规则的吧
  * js解析: babel-loader + babel-preset-env + browserslist
  * css解析: postcss-loader + css-loader + style-loader + sass-loader + less-loader + stylus-loader + postcss-preset-env
  * 图片解析: file-loader + url-loader + image-webpack-loader
  * 静态资源解析: file-loader + url-loader + image-webpack-loader
  * 预设的作用是什么呐？？？
    * 在我们的 postcss 和 babel 中都是提到了预设的
    * 使用预设帮助我们解决关于下载 babel 和 postcss 的插件的问题，大量的下载让我们十分的难受
    * 同时使用我们的 postcss 和 babel 的预设的话可以实现的是我们的结合 browserslist 来进行配置的，控制我们项目的兼容性问题吧
* plugins 是一个内部源码中带有 apply(compiler) 的函数，基于 TabTable 这个事件来实现的呐
  * TabTable 中使用了大量的 hooks，这些 hooks 分为同步和异步的，在webpack 中的配置的话主要是 plugins 中进行配置的呐
* loader 主要是对代码进行兼容性的提高的；但是 plugins 的话主要用于我们的加快资源构建以及我们的首屏加载等等，影响的是我们的构建过程吧

## webpack 控制 loader 执行顺序
* loader 的执行顺序是按照从右到左的顺序执行的，从下到上的顺序执行的，但是我们是可以从一定程度上进行控制的呐
  * 实现方案
    * 通过我们的 enforce 强行控制 loader 执行顺序的
      * pre 表示在所有正常的 loader 之前执行
      * post 表示在所有正常的 loader 之后执行
    * loader 执行的两个重要阶段
      * pitching 阶段: loader按照 `后置（post）, 行内（inline）, 正常（normal），前置（pre）` 顺序调用
      * normal 阶段: loader按照 `前置（pre）, 正常（normal），行内（inline）,后置（post）` 顺序调用

## webpack loader 自定义
* loader 主要就是一个函数吧，其功能就是将我们的代码进行处理，处理后变为我们的浏览器可以识别的代码吧
  * 对于一些开源的好的 loader 内部的解析的话主要是使用的 抽象语法树实现的呐AST（abstract syntax tree）
* 同时书写我们的 loader 实现的是我们的单一功能原则吧，也就是说一个 loader 负责一个功能即可
  * loader 中常见的工具
    * loader-utils loader 开发辅助的工具
    * schema-utils 用于进行校验 loader 元数据配置的
* loader 是无状态的
  * 也就是说我们在 loader 不应该保存状态
* loader 三个参数
  * source 是我们loader 需要进行处理的源代码吧
  * map 是我们的 source-map 的配置
  * meta 是我们的 loader 元数据配置
* 正确上报 loader 异常信息
  * 使用的是我们的 logger.error
* loader 中的 this 是由 webpack 插件注入的
  * 来自于我们的 loader-runtime 和 loader-context 的
```javascript
const { marked } = require('marked');
const highlight = require('highlight.js');

function md_marked_loader(source) {
  marked.setOptions({
    highlight: function (code, lang) {
      const language = highlight.getLanguage(lang) ? lang : 'plaintext';
      return highlight.highlight(code, { language }).value;
    }
  })
  const htmlContent = marked(source);
  const innerContent = "`" + htmlContent + "`";
  return `const code = ${innerContent}; export default code`;
}

module.exports = md_marked_loader;
```

## webpack plugin 自定义
* plugin 主要是一个类，并且实现了 apply 方法，通过该 apply 方法执行 webpack 中的不同 compiler 的钩子，从而实现功能，主要使用的是我们的 tapable
* tapable 分类
  * 分为我们的同步和异步的 Hook
* 其他的类别
  * bail 当含有返回值的时候，就是不会执行后续的事件触发了
  * Loop 反返回值为 True 的时候，就会重复执行该事件，当返回值是 undefined 或者说没有返回值的时候，就直接进行退出事件
  * WaterFull 当返回值不是undefined的时候，回将本次的返回的结果作为下一次事件的第一个参数
  * Parallel 并行执行事件，会同时执行次事件处理回调结束，才执行下一次事件的处理回调，异步
  * Series 串行执行事件，会顺序执行事件处理回调，并且等待事件处理回调执行结束，才执行下一次事件的处理回调，异步的呐
* pnpm add tapable 
![img26](/img_26.png)
![img27](/img_27.png)
```javascript
// 自定义中间件
const { NodeSSH } = require("node-ssh")
const readline = require('readline');

class AutoUploadWebpackPlugin {
  // init function
  constructor(options = {}) {
    this.options = options;
    this.ssh = null;
    this.logger = null
  }
  
  // error handle function
  async errorHandle(fn) {
    try {
      return await fn();
    } catch (error) {
      this.logger.error(`Error during file upload process: ${error.message}`);
    }
  }
  
  // connect server function
  async connectServer() {
    this.ssh = new NodeSSH();
    if (this.options.username && this.options.password && this.options.host) {
      await this.ssh.connect({
        host: this.options.host,
        username: this.options.username,
        password: this.options.password
      })
    } else {
      const rl = readline.createInterface({
        input: process.stdin,  // 输入流
        output: process.stdout  // 输出流
      });

      const askQuestion = async (question) => {
        return new Promise((resolve) => {
          rl.question(question, (answer) => {
            resolve(answer);
          });
        });
      };

      try {
        // 串行提问
        this.options.host = await askQuestion("Please input your server-host: ");
        this.options.username = await askQuestion("Please input your server-username: ");
        this.options.password = await askQuestion("Please input your server-password: ");

        // 关闭 readline 接口
        rl.close();

        // 建立 SSH 连接
        await this.connectServer()
      } catch (error) {
        this.logger.error(`Error during SSH connection setup: ${error.message}`);
        rl.close();
      }
    }
  }

  async deleteFile(serverFilePath){
    try {
      await this.ssh.execCommand(`rm -rf ${serverFilePath}`); // 递归强制删除
      this.logger.info(`Deleted server files at path: ${serverFilePath}`);
    } catch (error) {
      this.logger.error(`Failed to delete server files at path: ${serverFilePath}. Error: ${error.message}`);
    }
  }

  async uploadFile(outputPath, serverFilePath){
    try {
      const status = await this.ssh.putDirectory(outputPath, serverFilePath, {
        recursive: true,  // 是否递归上传
        concurrency: 10,  // 并发上传数量
      });
      if (status) {
        this.logger.info("Files uploaded successfully.");
      } else {
        this.logger.error("File upload failed.");
      }
    } catch (error) {
      this.logger.error(`File upload failed with error: ${error.message}`);
    }
  }

  async closeConnection(){
    try {
      await this.ssh.dispose();
      this.logger.info("SSH connection closed successfully.");
    } catch (error) {
      this.logger.error(`Failed to close SSH connection: ${error.message}`);
    }
  }

  // realise apply instance method
  apply(compiler) {
    // await asset output into dist folder to upload our static files to server
    // sync use tap event
    // async use tapAsync event
    compiler.hooks.afterEmit.tapAsync("AutoUploadWebpackPlugin", async (compilation, callback) => {
      // get logger instance
      this.logger = compilation.getLogger("AutoUploadWebpackPlugin");

      // get our static output path
      const outputPath = compiler.options.output.path;

      try {
        // link our server by ssh
        await this.connectServer();

        // delete server have had static files
        await this.deleteFile(this.options?.serverFilePath);

        // upload our static files to server
        await this.uploadFile(outputPath, this.options.serverFilePath);

        // close ssh connection
        await this.closeConnection()

        // after emit, exec callback function
        callback()
      } catch (error) {
        this.logger.error(`Error during file upload process: ${error.message}`);
        callback(error); // 将错误传递给 Webpack
      }
    })
  }
}
// // options 配置项的话，我们的 serverPath 必传
// const autoUploadWebpackPlugin = new AutoUploadWebpackPlugin({
//   serverFilePath: "/home/wwwroot/default/webpack-auto-upload-plugin"
// })
// autoUploadWebpackPlugin.connectServer("", "")

module.exports = AutoUploadWebpackPlugin;
module.exports.AutoUploadWebpackPlugin = AutoUploadWebpackPlugin;
```
> nginx 多端口监听配置
> ![img28](/img_28.png)

## webpack 文件指纹
* 文件指纹的作用是：
  * 用于进行版本管理: 当发布版本时候，通过文件指纹来进行区分，修改的文件和未修改的文件
  * 用于实现缓存: 浏览器通过文件指纹是否改变来决定使用缓存文件还是请求新的文件吧，这个呐就是我们的 cdn 缓存了
    * cdn `content delivery network` 内容分发网络吧
    * 这一步的话最重要的一点就是手动的修改我们的 index.html 的文件吧，通过 webpack 引入我们的文件
    * 同时还需要进行的的配置 `webpack` 的 `output.publicPath` 
* 文件指纹的类型
  * Hash: 和整个项目的构建有关吧
  * ContentHash: 根据文件内容来确定指纹
  * ChunkHash: 根据 chunk 来确定指纹
  * name: 根据 chunk 的名字来确定指纹
  * id: 根据 chunk 的 id 来确定指纹
* 使用指纹
  * js文件使用: ChunkHash
  * css文件使用: ContentHash
  * 图片使用: hash 即可

## webpack babel 原理
* babel
  * babel 实现的是我们的将代码转化为我们自己想要的目标代码，从而实现我们的代码的兼容性提高吧，并且对于目标环境不支持的，可以自动化的 polyfill
  * 解析parse --> 转换transform --> 生成generator 的过程，可以看的开源代码是: the-tiny-transpiler
    * 解析: 生成对应的AST树
      * 进行代码分析，将代码分割为 token 流，在根据 token 生成 AST 树
    * 转换: 遍历AST树节点生成新的AST节点
    * 生成: 将新的AST节点生成代码

## webpack 文件监听原理
* 开启我们的文件监听后，webpack 会轮询访问文件的最后修改时间的，
* 当发现文件最后修改时间发生变化后，会先进行缓存起来，等到 aggregateTimeout 时间后，在进行统一执行吧
* 如何开启我们的文件监听呐？？
  * 在进行命令行构建的时候，使用我们的 `--watch` 选项，或者配置 webpack-config.js 中 `watch: true` `watchOptions`
* 轮询的使用
  * 首先这里的话就是涉及到了一个业务场景了，就是 http 和 socket 实现我们的即时通信
  * http协议是一个请求-响应模型，所以说对于我们的即时通信方面就有很多的不足，可以说 http协议就是一个短链接的吧，但是为了实现即时通信，http轮询就是一个实现方案了吧
  * socket协议的话是一个长连接的协议，TCP|UDP吧，所以对于我们的即时通信来说，使用 socket 协议的话，可以解决我们的长链接的问题，但是服务器需要解决高并发的问题吧

## webpack prefetch 和 preLoad
* preLoad 是告诉浏览器立即加载的资源
* preFetch 是告诉浏览器在空闲时加载的资源

## webpack source-map 
* source-map 实现的是将我们的打包后的源码进行映射回我们的源码中的一种策略吧，可以通过 devtool 配置来进行决定我们使用的模式吧
  * 但是呐，伴随着模式功能的增强，我们对应的代码构建速度也是回有所降低的呐
  * 指定我们的开发模式的时候，mode指定的话可以是 development production none
    * development 默认的是 eval
    * production 默认的是 false

## webpack HMR 热更新原理
* 如何开启我们的热更新呐？？？
* 这个功能的话主要是在我们的开发环境中进行配置的呐，也就是我们的webpack 服务器的开启吧
  * 主要的核心包是我们的 webpack-dev-server 的配置吧
  * webpack-dev-server 的话底层主要使用的是我们的 http-proxy-middleware 和 socket.io
* 原理
  * 使用 webpack-dev-server（WDS）托管到静态资源，同时以 RUNTIME 方式注入 HMR 客户端代码
  * 浏览器和本地服务器之间进行建立长连接 socket，这个也是为什么我们的本地文件进行修改后，客户端浏览器可以立马看到变化的原因吧，
    * 主要就是因为他是长连接的原因所在吧
  * webpack监听到文件变化后 增量构建发生变更的模块 并通过WebSocket发送hash事件
  * 浏览器接收到 hash事件后 请求 manifest资源文件 确认增量变更范围，浏览器加载发生变更的增量模块
> 总结就是webpack将静态资源托管在 WDS 上，而 WDS 又和浏览器通过 webSocket 建立联系，
> 而当webpack监听到文件变化时，就会向浏览器推送更新并携带新的hash 与之前的hash进行对比，
> 浏览器接收到hash事件后变化加载变更的增量模块并触发变更模块的 module.hot.accept回调执行变更逻辑。

## webpack TreeShaking 原理
* TreeShaking 是一种基于 EsModule 规范的一种技术吧，他会在运行过程中静态分析模块之间的导入导出问题，确定 ESM 模块中那些导出值未曾其他模块使用
* 并且实现将其删除，从而达到我们的代码的优化
* 首先我们得代码性能优化的话，需要满足我们的三个条件吧
  * 使用 ESM 规范编写代码
  * 配置 webpack 的性能优化选项 
    * optimization.usedExports = true
    * optimization.minimize = true
    * optimization.minimizer = []
    * 同时这个在我们的生产环境中配置，还可以使用我们的 TerserPlugin 来进行优化吧

## webpack 构建流程
* webpack 构建流程
  * 初始化参数: 从配置文件和 Shell 语句中读取和合并并计算出最终参数
  * 开始编译: 执行所有配置的插件的 apply 方法，包括内置的插件和自定义的插件
  * 确定入口: 根据配置中的 entry 找出所有的入口文件（可能是多入口文件）
  * 编译模块: 从入口文件开始，根据 loader 对模块进行转译
  * 完成模板编译: 在经过Loader翻译完所有模块后，得到了每个模块转译后的内容以及模块之间的依赖关系图（ModuleGraph）
  * 确定输出资源: 根据配置中的 output 选项，将模块内容输出为单个文件或者多个文件，同时还可能具有我们的 chunk
  * 输出完成: 将编译后的资源输出到文件系统，完成一次完整的编译
* 流程简化
  * 初始化阶段: 创建 Compiler, Compilation 登基础对象，并且初始化 plugin，寻得打包入口文件吧
  * 构建模块: 从入口文件开始，调用 loader 对模块进行转译，形成AST抽象语法树，构建出Webpack依赖图
  * 生成阶段: 根据模块依赖关系图，生成输出文件，输出到文件系统
* 资源转换角度
  * compiler.make 阶段
  * compilation.seal 阶段
  * compilation.processAssets 阶段

## webpack 性能优化
* `使用高版本的 nodejs 和 webpack`
* `采用多进程构建`: thread-loader  加快构建速度
* `懒加载`: dynamic-import-webpack: 按需导入吧
* `代码分割`: splitChunks
* `使用Tree Shaking`: 删除不必要的文件
* `使用 Scope Hoisting`: 减少函数声明提升的开销，减少的是构建产物的体积，优化性能
* `开启热更新`: 主要的是在开发环境中的吧
* `监控产物体积`
* `缩小文件检索范围`: resolves 配置 | exclude 配置 | include 配置
* `设置mode`
* `代码压缩`
  * terser-webpack-plugin 压缩es6代码
  * ParallelUglifyPlugin 并行压缩
  * css-minimizer-webpack-plugin 对CSS代码进行压缩
  * html-minimizer-webpack-plugin 对HTML代码进行压缩
  * image-minimizer-webpack-plugin 对图片进行压缩
  * gzip-webpack-plugin 对资源进行压缩
* `CDN缓存`
  * output.publicPath: 设置为CDN地址
  * Webpack.stylePublicPath: 设置CSS文件的CDN地址
  * css-loader.publicPath: 设置CSS文件中的图片路径
* `不同的环境之下利用不用的webpack文件`
  * webpack-merge
* `使用缓存构建`
  * cache: { type: 'filesystem' }
* `动态 polyfill`: 只是返回给用户需要的 polyfill

```javascript
//--webpack.config.js--
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 提取 html 插件
const miniCssExtractPlugin = require('mini-css-extract-plugin')  // 提取 css 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 清除 dist 目录，重新生成
const TerserPlugin = require('terser-webpack-plugin')  // 压缩代码，可以个性化配置
module.exports = {
  // 模式配置  
  mode: 'development',
  // 开发环境配置
  devtool: 'source-map',
  // 多入口配置
  entry: {  // 多入口配置  可以利用该特性实现我们的一个项目中含有 vue 组件和 react 组件
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    main: {
      import: './src/main.js',
      dependOn: 'shared',
    },
    react: {
      import: './src/react/main.js',
      dependOn: 'shared',
    },
    vue: {
      import: './src/vue/main.js',
      dependOn: 'shared',
    },
    angular: {
      import: './src/angular/main.js',
      dependOn: 'shared',
    },
    qiankun: {
      import: './src/qiankun/main.js',
      dependOn: 'shared',
    },
    garfish: {
      import: './src/garfish/main.js',
      dependOn: 'shared',
    },
    // 设置可能共享的包
    shared: ['axios', 'dayjs', 'lodash', 'moment', 'juwenzhang_utils'],
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // 默认是 false, 如果设置为 true 的话，那么打包的时候会自动删除我们的 dist 目录
    filename: 'js/[id_][name]_bundle.js',  // name 是上面的 entry 的 key 值，占位用的罢了
    // import() 中可以使用我们的魔法注释: import(/*webpackChunkName: 'about'*/'./router/about') 自定义 name 的值
    chunkFilename: 'js/[id]_[name]_[contenthash]_chunk.js',  // 将一个一个分出来的小包进行命名，针对的是懒加载出来的文件吧
    publicPath: 'https://juwenzhang.com/cdn/',  // 配置我们的 CDN 地址，github action 也是需要配置该选项的呐
  },
  // 配置直接使用 cdn 服务器的包
  externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      'antd': 'antd',
      'moment': 'moment',
      'lodash': '_',
      'axios': 'axios',
      'dayjs': 'dayjs',
      'element-plus': 'ElementPlus',
      'pinia': 'pinia',
      'vue-router-mock': 'vue-router-mock',
  },
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'css/[id]_[name].css',
      chunkFilename: 'css/[id]_[name]_chunk.css',  // 提取 css 的时候，针对的是我们的 chunk 文件，也就是我们的懒加载出来的文件吧
    }),
    new CleanWebpackPlugin({}),
    new TerserPlugin({
      extractComments: false,  // 压缩代码的时候，是否需要保留我们的注释
      parallel: true,  // 是否开启多进程压缩
      terserOptions: {
          compress: {
              drop_console: true,  // 删除我们的 console.log
              drop_debugger: true,  // 删除我们的 debugger
          }
      }
    })
  ],
  // 自定义解析规则
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        use: {
          loader: 'babel-loader',
          preset: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.(css|less|scss)$/,
        use: [
          {
            loader: 'postcss-loader',
            use: [
                MiniCssExtractPlugin.loader,  // 生产阶段使用该 loader
            ],
            preset: [
              'postcss-preset-env',
            ]
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              publicPath: 'fonts',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
            options: {
              renderer: {
                heading (text, level) {
                  return `<h${level}>${text}</h${level}>`
                },
                code (code, lang) {
                  return `<pre><code class="${lang}">${code}</code></pre>`
                },
                listitem (text) {
                  return `<li>${text}</li>`
                },
                link (href, title, text) {
                  return `<a href="${href}" title="${title}">${text}</a>`
                },
                image (href, title, text) {
                  return `<img src="${href}" alt="${text}" title="${title}" />`
                },
                strong (text) {
                  return `<strong>${text}</strong>`
                },
                blockquote (text) {
                  return `<blockquote>${text}</blockquote>`
                },
                hr () {
                  return '<hr />'
                },
                table (header, body) {
                  return ``
                }
              }
            }
          }
        ]
      }
    ]
  },
  // dev server 配置，背后使用的是 http-proxy-middleware
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true,
    host: 'localhost',
    port: 8080,
    open: true,
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,  // 为了避免服务端有对 host 进行校验吧，所以说这里直接进行换源即可
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // resolve 配置, 可以配置一些路径别名
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'wasm'],
  },
  // 优化配置
  optimization: {
    chunkIds: 'named',  // deterministic || hashed || natural || named || size
    splitChunks: {  // 分包优化，针对于异步的 import() 进行分包吧
      chunks: 'all',  // vendors async initial all
      // 定制化配置
      maxSize: 100000,  // 100kb
      minSize: 10000,  // 10kb
      minChunks: 1,  // 1次
      maxAsyncRequests: 5,  // 最多5个请求
      // 自定义拆包分组
      cacheGroups: {
        react: {
          test: /react/,
          filename: 'js/[name]_vendors.js',
        },
        reactDOM: {
          test: /react-dom/,
          filename: 'js/[name]_vendors.js',
        },
        reactRouter: {
          test: /react-router/,
          filename: 'js/[name]_vendors.js',
        },
        reactRouterDOM: {
          test: /react-router-dom/,
          filename: 'js/[name]_vendors.js',
        },
        antd: {
          test: /antd/,
          filename: 'js/[name]_vendors.js',
        },
        moment: {
          test: /moment/,
          filename: 'js/[name]_vendors.js',
        },
        lodash: {
          test: /lodash/,
          filename: 'js/[name]_vendors.js',
        },
        axios: {
          test: /axios/,
          filename: 'js/[name]_vendors.js',
        },
        other: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name]_vendors.js',
        }
      }
    },
    minimizer: [  // 压缩代码
      new TerserPlugin({
        extractComments: false,
      })
    ],
    runtimeChunk: {
      name: 'runtime'
      // name: entrypoint => `runtime~${entrypoint.name}`
    },
    // 预获取
    prefetch: {
    },
    // 预加载
    preload: {
    }
  }
}
```