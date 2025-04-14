# rollup 文档

## Rollup 介绍
* 是一个`库打包工具`
* 然后我们的 vite 的本身的话也是通过 rollup 来实现的的呐
* vite 底层核心原理就是我们的 rollup 来实现的吧
* Rollup 是实现的是Javascript 模块打包工具吧，可以实现的是帮助我们进行将编译小的代码到一个大的，复杂的代码中，比方说一个库或者说一个应用程序吧
  * Rollup 的打包的话主要是针对于我们的EsModule 的代码进行的打包吧
  * webpack 是通过各种各样的 loader 处理各种各样的文件，以及处理他们的依赖关系吧，更加的繁重吧
  * rollup 的话实现的是就是我们的对应的专注于对javascript进行打包的工具吧，更加的轻量级吧，当然也是可以实现我们的打包CSS Font Vue 等代码吧
  * 早期的 webpack 是默认不支持 tree shaking 的，但是 rollup 是可以实现支持 tree shaking 的呐
* webpack 和 rollup 的选择
  * 在实际的业务开发中，我们常用的是 webpack 来实现的呐
  * 但是对于我们的某个库的话，常用的就是我们的 rollup 来实现吧、
  * 当然现在的选型的打包工具是我们的 vite 了吧
  * 以及 babel 的转换可以选择我们的 swc 来进行替代吧

## Rollup 基本使用
* `npm init && npm install rollup` 
  * `npx rollup 需要打包文件名 -o 打包后输出文件名 -f 打包格式`
  * 打包格式含有
    * `cjs` commonjs规范的打包，node环境的打包吧
    * `es` esmodule的打包，浏览器环境
    * `iife` 立即执行函数的打包，浏览环境的打包
    * `umd` 通用模块的打包，统一格式的打包，常选择的吧
    * `amd` amd规范的打包

## Rollup 配置文件
* 通常是叫我们的 rollup.config.js 的配置文件吧
* 配置该文件之后我们的 rollup 的打包规则就是会自动地寻找该文件的配置来实现了吧
* 同时我们是可以将每个规则进行对应的配置的呐，然后在 package.json 中实现配置即可，这样就可以实现我们的发包了吧
  * `npx rollup -c` 默认寻找的是是 rollup.config.js 的配置吧
  * `npx rollup -c rollup.config.js | npx rollup --config rollup.config.js` 也可以指定打包使用的配置规则吧

## Rollup @rollup/plugin-commonjs插件
* `npm install @rollup/plugin-commonjs --save-dev`
* 实现的是解决我们的 `commonjs` 出现的问题的吧

## Rollup @rollup/plugin-node-resolve插件
* `npm install @rollup/plugin-node-resolve --save-dev`
* 实现的是解决我们的 `node_modules` 中的依赖的问题的

## Rollup @rollup/plugin-babel插件
* `npm install @babel/core @rollup/plugin-babel --save-dev`
* 实现的是解决我们的 `babel` 的问题
* `@babel/core` 是我们的`babel`的核心包，依赖于它的呐
* `@rollup/plugin-babel` 是我们的`babel`的插件
  * 进行我们的 babel.config.js 来进行配置即可吧

## Rollup @rollup/plugin-terser插件
* `npm install @rollup/plugin-terser --save-dev`
* 实现的是解决我们的`代码压缩`的问题的

## Rollup @rollup/plugin-replace插件
* `npm install @rollup/plugin-replace --save-dev`
* 实现的是解决我们的`代码替换`的问题的

## Rollup @rollup/plugin-alias插件
* `npm install @rollup/plugin-alias --save-dev`
* 实现的是解决我们的`代码别名`的问题的

## Rollup @rollup/plugin-json插件
* `npm install @rollup/plugin-json --save-dev`
* 实现的是解决我们的`json`的问题的

## Rollup @rollup/plugin-image插件
* `npm install @rollup/plugin-image --save-dev`
* 实现的是解决我们的`图片`的问题的

## Rollup @rollup/plugin-url插件
* `npm install @rollup/plugin-url --save-dev`
* 实现的是解决我们的`url`的问题的