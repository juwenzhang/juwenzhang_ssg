# JavaScript 文档

## JS 数组数据类型
* 首先对于我们的 javascript 来说的话，是一个函数优先的一个编程脚本语言，但是呐，在
* 本质上来说的话，也是一个基于面向对象的编程脚本语言的呐，最重要的就是原型链吧
* 

## JS 的数据类型
* number boolean string Object Array null undefined Symbol BigInt
* 获取数据类型的方法
  * `typeof` 关键字
  * `instanceof` 关键字
  * `Object.prototype.toString.call()`
* 判断数组类型的方法
  * `Object.prototype.toString.call(arr)`
  * `Object.getPrototypeOf(arr) === Array.prototype`
  * `Array.isArray(arr)`
  * `arr instanceOf Array`
  * `Array.prototype.isPrototypeOf(arr)`

## Event Loop 
> * https://juejin.cn/post/7108751200262029319?share_token=de110d40-1d5f-4171-a6b9-35e1d08870fd
* Event Loop 是我们常说的关于事件循环的一些玩意吧
* 在我们的 js 中的话事件循环主要是包含了三个部分吧
  * 同步代码的执行和异步代码的执行
  * 同时我们的`异步代码的话会被添加到我们的事件队列`中进行执行的呐
* 为什么需要进行探究该部分代码的执行呐？？
  * javascript 是一个单线程的语言，只有`等待一个任务执行完毕后才会执行下一个任务吧`
  * 但是因为我们的单线程的语言，导致了`页面渲染时候的发生对应的阻塞`，所以说这个时候就出现了我们的`同步和异步任务`
* 什么是同步任务和异步任务呐
  * 同步任务: 就是在我们的主线程中的任务，这些任务实现的一个一个的进行对应的执行吧
  * 异步任务: 异步任务的执行是不会添加到主线程中的呐，而是进入对应的任务队列中进行执行吧，分为我们的宏任务和微任务，对应的就是宏任务队列和微任务队列
* 宏任务有哪些呐？？
  * `浏览器事件`: click mouseover 事件等等
  * `定时器任务`: setTimeout setInterval
  * `页面渲染任务`: requestAnimationFrame
  * `事件回调`: I/O事件，鼠标事件，键盘事件等等
  * `网络请求任务`: fetch, XMLHttpRequest, WebSocket，WebRTC
  * `MessageChannel`
  * `script 标签中的代码`
* 微任务有哪些呐？？
  * Promise 的 `then/catch/finally` 回调函数
  * `Async/await` 的回调函数中的 await 语句执行完后的代码
  * `MutationObserver` 的回调函数
  * `process.nextTick` 回调函数
  * `queueMicrotask`
* `事件循环的执行流程`
  * 进入了我们的 script 标签后，就进入了我们的第一个事件
  * 遇到了我们的同步代码后就会立即执行吧
  * 遇到了宏任务后，该宏任务会被放入宏任务队列中吧
  * 遇到了微任务后，该微任务会被放入微任务队列中吧
  * 执行完所有的同步代码
  * 执行完微任务队列中所有微任务
  * 执行完宏任务队列中所有宏任务
  * 然后就是寻找下一个宏任务，进行以上的操作
### 注意点一 Promise
* Promise 对象本身就是一个对象，然后其内部的回调函数任然是同步代码，只有 then/catch/finally 回调函数才是微任务
```javascript
new Promise((resolve, reject) => {
    console.log(7777)  // 同步任务
    resolve()
}).then(res => {
    console.log(8888)  // 微任务队列中的微任务
})
console.log(9999)  // 同步任务

// 7777 9999 8888
```
### 注意点二: async/await函数
* await 后面的表达式是立即执行的，该语句之后的代码就是一个新的微任务，每一个 async 函数的话默认返回的是 Promise.resolve()
```javascript
console.log(1)  // 同步任务
async function async1() {
    await async2()  // async2 立即执行
    console.log(2)  // 微任务执行
}
async function async2() {
    console.log(3)
}
async1()

// 1 3 2
```

### 注意点三: script 标签
* script 标签本身就是一个宏任务吧，当一个html文档具备了多个script标签后，那么会当作宏任务进行后续代码的执行吧
```html
<script>
    console.log(1)
    setTimeout(() => {
        console.log(2)
    })
</script>
<script>
    console.log(3)
</script>

<!-- 1 3 2 -->
```
* 首先向宏任务队列中添加了两个 script 标签触发的事件，两个是宏任务，现后依次添加入宏任务队列中
* 但是第一个 script 标签中含有一个 setTimeout 事件，这个又是一个宏任务，又被添加到宏任务队列中
* 最后就实现了运行结果为: 1 3 2

### 综合代码题一:
```javascript
console.log(1)
async function async1() {
    await async2()
    console.log(2)
    await async3()
    console.log(3)
}
async function async2() {
    console.log(4)
}
async function async3() {
    console.log(5)
}
async1()
console.log(6)

// 1 4 6 2 5 3
```
* 首先我们的 console.log(1) 是一个我们的同步任务，所以说直接进行执行
* 然后后面调用了我们的 async1 函数，内部的第一个 `await async2()` 被直接运行，其后续的代码就是微任务了，被添加至微任务队列
* 该步执行完后，就执行我们的 console.log(6)
* 由于本次执行任务中没有宏任务，直接进行执行微任务即可
* 该微任务中含有一个同步代码和await 执行函数，同步代码执行执行，await后续的语句也直接进行运行，console.log(3) 最后作为新的微任务被加入微任务队列中了
* 故最终的执行顺序为: 1 4 6 2 5 3
* 分析执行顺序的话大致就是这样子的，没有十分困难的，哈哈哈

## Javascript 原型链探究
### 认识隐式原型
* 首先我们的JavaScript是一个面向对象的编程语言，所以说也是可以说我们的JavaScript中一切皆对象
* 对于每个JavaScript的对象而言的话，我们的每个对象都是具备一个属性: `[[propotype]]` 属性的呐
  * 获取一个对象的隐式原型的方法是含有
    * `Object.getPrototypeOf(obj)` 包准获取方法
    * `obj.__proto__` 非包准获取方法
```javascript
const obj = {}
console.log(Object.getPrototypeOf(obj) === obj.__proto__)  // true
```
* 一个普通对象实现查找属性的时候就是依据着原型链的这一条链路实现的寻找的呐，即是说本层是没有的，但是如果说整条链路中存在，那么就会进行寻找该属性吧
```javascript
const obj = {
    name: 'juwenzhang',
    age: 18
}
Object.getPrototypeOf(obj).message = "this is juwenzhang' github"
console.log(obj.message)  // 由于在原型链上可以查找到，所以说就可以获取得到对应属性吧
```
### 认识函数原型
* 首先上面说了，我们的JavaScript中一切即对象，所以我们的函数也是具备一个属性: `[[prototype]]`，这个也是我们的隐式原型吧
* 但是对于我们的函数来说的话具备一个显示原型的呐，`prototype` 属性，这个属性就是我们函数的构造函数，也就是我们函数的实例对象，同时实例方法也是在该属性上进行添加的呐
* 我们的一个函数可以作为构造函数来实现的，这个时候有一个规则吧，就是 构造函数的显示原型和实例对象的隐式原型指向相同吧
* new 操作符实现的具体细节
  * 首先创建一个新的对象，这个空对象就是我们的 `[[prototype]]`
  * 然后将该对象赋值给 this 的指向
  * 将函数的显示原型赋值给我们的隐式原型吧
  * 随后就是执行函数中的代码体了
  * 最后就是将这个对象进行返回吧
```javascript
function Func() {
    return this
}
const func = new Func()
console.log(Object.getPrototypeOf(func) === Func.prototype) // true
```
* 我们后续可以通过该方法进行实现我们的将方法添加到原型上吧，这样后就可以大大的节省我们的内存空间吧
* 同时构造函数的显式原型中的 constructor 属性就是指向的我们的 构造函数名吧
  * `console.log(Object.getPrototypeOf(Func).constructor === Func)`
  * `console.log(Func.prototype.constructor === Func)`
* 函数中具备的一些属性
  * `Func.name` 获取的是函数的名称
  * `Func.length` 表示函数定义时参数的数量（不包括可选参数和剩余参数）
  * `console.log(arguments.length)` 表示传递给函数的参数数量，因为 js 中的参数可以多传的呐

## call 和 apply 的实现
* 首先我们的 call 和 apply 最主要的就是函数的执行的时候绑定 this 指向，并且实现对应的函数的调用吧
  * 第一步实现绑定 this 的指向
  * 第二步实现函数的执行
  * 第三步实现函数的返回，delete
* call 和 apply 的区别的话就是
  * call 第一个参数是函数进行调用绑定的 this，后面的参数就是函数调用所需的参数吧
  * apply 第一个参数是函数进行调用绑定的 this，第二个参数是函数的参数，但是是一个数组
```javascript
Function.prototype.myCall = function(ctx) {
    ctx.fn = this
    const args = [...arguments].slice(1)  // 参数以数组的形式进行传递
    ctx.fn(...args)  // 参数一个一个的进行传递
    delete ctx.fn
}


Function.prototype.myApply = function(ctx) {
    ctx.fn = this
    const args = [...arguments].slice(1)
    ctx.fn(args)  // 参数以数组的形式进行传递
    delete ctx.fn
}

function foo(name) {
    console.log(this.name, name)
}
foo.myCall({}, name)
```