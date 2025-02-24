## Html 面试篇
### Html 面试
* 理解一个元素语义化就可以了，其他的不太怎么重要
* 无处不 div 和 span

## CSS 面试篇
### 前端首屏优化操作
* 该部分的话主要的就是对我们的页面的加载有一定的关系了
  * 内涵的就是问你关于我们的浏览器的渲染原理吧
  * 我们的浏览器的渲染原理的话可以的是
* 完成我们的动画的时候的性能优化
  * 使用的定位将元素脱标
  * 从而减少对页面加载过程中发生的重绘 reflow 的可能性
  * 定位的话可以生成渲染层，也是合成层，从而不影响标准流的渲染
  * 从而实现性能的优化，提高我们的前端首屏渲染优化吧
* 前端创建新的渲染层的方法（减少回流）
  * 有明确的定位属性（position: absolute）
  * 透明度的设置（opacity 小于 1）
  * css transform 属性的设置
  * backface-visibility 属性的设置
  * <span style="color:skyblue;font-weight:bold">opacity transform filter backdrop-filter</span>等等
    * 合成层的话主要的就是开启我们的 CPU 硬件优化吧
    * 合成层和渲染层开启的优化吧
    * 合成层的出现主要是在我们的 3D 效果中实现的呐
    * 渲染层的实现主要是通过我们的定位实现的呐
  * 但是注意的是创建新的合成层的话，不要滥用，因为这个是以消耗内存为代价实现的性能优化
* 同时还可以使用我们的 defer 和 async 模式的 script 的引入实现我们的
  * js 文件的引入吧
  * 这样也是可以实现一定的前端的首屏优化吧
  * 因为 js 文件的下载以及解析的话都是会影响页面的加载的呐
* https://juejin.cn/post/7434162412113723455  浏览器 的渲染原理
* https://juejin.cn/post/7434178908985901097  浏览器 js的解析原理

## JavaScript 面试篇
### 闭包和内存泄漏
* 什么是内存泄漏呐？？
  * 就是代码中有数据没有被回收，这个就是我们的内存泄漏吧
  * 在我们的 JavaScript 中的话只要数据被引用了，那么数据就不会被回收，这样就导致了内存泄漏
* 先来一个伪代码
```javascript
function createInstance() {
    const doms = new Array(10000).fill(0).map((_, index) => {
        const dom = document.createElement('div')
        dom.innerHTML = index
        return dom
    })
  
    // 副作用函数
    function effectFunc() {
        console.log(doms)
    }

    function instance() {
        doms.forEach((dom) => {
            dom.innerHTML = Number(dom.innerHTML)
        })
    }
    
    return instance
}

const instance = createInstance()
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    instance()
})
```
* 什么是程序中的垃圾呐？？
  * 就是取决于我们的程序中是否使用该数据，那么这个就是我们的代码中的垃圾了
  * 所以说在程序中，我们没有使用的数据尽量进行及时的释放掉吧
  * 如果程序中有垃圾没有被回收，这个就是我们的内存泄漏了
* 闭包和内存泄漏的关系
  * **函数 + 词法环境**就是我们的闭包 (es6的说法了)
    * 所以说我们的一个函数的话，实际上实现了关联了其本身所在的词法环境的，
    * **如果函数还存在的话，那么我们的词法环境以及词法环境中的数据就会一直存在，就不会被回收**
    * **同时词法环境是可以被多个函数共享的，所以说，即使是释放掉了一个函数，但是我们的词法环境可能任然存在**
    * 释放函数的操作，就是复制为 null
      * instance = null
* 上面伪代码的优化
```javascript
function createInstance() {
    const doms = new Array(10000).fill(0).map((_, index) => {
        const dom = document.createElement('div')
        dom.innerHTML = index
        return dom
    })

    // 副作用函数
    function effectFunc() {
        console.log(doms)
    }

    function instance() {
        doms.forEach((dom) => {
            dom.innerHTML = Number(dom.innerHTML)
        })
    }
    
    // 由于我们的 effectFunc 函数还是依赖于词法环境的，所以说即使是外面的 instance 引用释放掉了
    // 我们的 doms 数据还是无法被释放，这个时候就需要进行的是将其也十分掉吧
    effectFunc = null
    return instance
}

const instance = createInstance()
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    instance()
})
instance = null  // 释放我们的函数
```

## TypeScript 面试篇

## Vue 面试篇(vue >= 3)

## React 面试篇(react > 18)

## Angular 面试篇

## Solid 面试篇

## Svelte 面试篇

## Node 面试篇

## Deno 面试篇

## Nuxt 面试篇

## Next 面试篇

## Nest 面试篇

## Taro 面试篇

## Uniapp 面试篇

## Webpack 面试篇

## Vite 面试篇

## Rollup 面试篇

## Visible-end 面试篇

## 浏览器面试篇
> * 主要的就是我们的浏览器的渲染原理，以及我们的内存泄漏和 js 的解析原理
> * https://juejin.cn/post/7434162412113723455  浏览器 的渲染原理
> * https://juejin.cn/post/7434178908985901097  浏览器 js的解析原理

## 前端模块化开发篇
### commonjs 开发规范实质
* 我们的commonjs 的开发规范的话实际上主要研究的是
  * require 导入函数
  * exports 导出函数
  * 模块中的 this
  * module.exports 导出函数
* 首先我们先来一个require函数的伪代码吧
```javascript
function require(modulePath) {
    // 1.获取得到路径的绝对路径
    var moduleId = getModuleId(modulePath);
    
    // 2.判断导入是否存在缓存
    if (cache[moduleId]) {
        return cache[moduleId]
    }
    
    // 3.运行真真的代码的函数
    // 就是我们的 commonjs 开发规范可以使用的方法
    // __fileName 和 __dirName 就是我们的主要的两个可以实现使用的全局变量吧
    function exeRequiore(exports, require, module, __fileName, __dirName) {
        this.a = 1
        exports.b = 2
        exports = {
            c: 3
        }
        exports.e = 5
        this.f = 6
    }
    
    // 4.准备模块运行的辅助函数
    var module = {
        exports: {
            
        }
    }
    
    var exports = module.exports
    var __fileName = moduleId
    var __dirName = getDirName(__fileName)
    
    // 运行函数了
    exeRequiore.call(exports, exports, require, module, __fileName, __dirName)
    // 运行后直接进行缓存
    cache[moduleId] = module.exports
    // 最后就是实现我们的返回
    return module.exports
}
```
* 在我们的社区中的发展中的话，实际上每一个模块的运行的话都是基于我们的函数来实现的
  * 每一个模块文件的话都是我们的一个一个的可运行函数的呐
  * 这个的话和我们的以前的解决模块化开发的 IIFE 一致吧，函数是可以为我们的模块提供一个函数作用域
  * 这个也是为什么我们的模块化开发可以解决变量重名的原因之一吧
* commonjs 的开发规范中实际上的话导出的就是我们的 module.exports
  * exports 是一个导出函数 
```javascript
// 开始实现书写我们的第一个模块
this.a = 10
exports.b = 10
exports = {
    c: 3
}
module.exports = {
    d: 5
}
exports.e = 2
this.f = 10

console.log(this, exports, module.exports)
// this: { a:10, f:10 }
// exports: { c: 3, e: 2 }
// module.exports: { d: 5 }
console.log(arguments.length)  // 5 
```
* 这一点就告诉我们的一点的是，如果想要一个 js 文件之间的作用域不相互干扰
  * 就可以在一个 js 或者 ts 文件中添加 exports 即可
  * commonjs 中含有我们的两个全局可以使用的变量
    * __filename 就是我们的文件路径
    * __dirname  就是我们的目录路径吧
    * require 我们的导入模块函数
    * exports 我们的导出函数，本质上是一个对象的
    * module 我们的默认的导出对象，内部具备我们的 exports 属性的呐
  * 由于每一个模块就是一个一个的函数，所以说
    * 模块内具备 this
    * 模块内具备我们的 arguments，其length是为 5

## 性能优化面试篇
> * 对于我们的前端首屏渲染优化
> * 前端缓存 cdn 缓存优化
> * react 使用 useMemo 和 useCallback 实现优化
> * 浏览器原理优化
> * 算法优化

## 前后端交互面试篇

## 算法面试篇

## 开发小技巧篇