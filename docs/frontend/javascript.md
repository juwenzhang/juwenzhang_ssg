# JavaScript 文档

## JavaScript Array数组
### JavaScript 数组的尾插和尾删法
* push 就是我们的数组的尾插法
* pop 就是我们的数组的尾删法
```javascript
const arr = [1,2,3,4,5]

// 开始我们的尾插法
arr.push(6)
console.log(arr)

// 开始我们的尾删法
arr.pop()
console.log(arr)
```
---
### JavaScript 数组的头插和头删法
* unshift 就是我们的数组的头插法
* shift 就是我们的数组的头删法
```javascript
const arr = [1,2,3,4,5]

// 开始我们的头插法
arr.unshift(0)
console.log(arr)

// 开始我们的头删法
arr.shift()
console.log(arr)
```
---
### JavaScript splice 方法的使用
* splice 方法可以添加和删除数组元素
* splice(start, deleteCount, item1, item2, ...)
```javascript
const arr = [1,2,3,4,5]
arr.splice(2, 0, 6, 7, 8)  // 实现的插入6、7、8 到数组的第3个位置
```
---
### JavaScript 数组遍历
* for...in 遍历数组，遍历数组的索引
* for...of 遍历数组，遍历数组的元素
```javascript
const arr = [1,2,3,4,5]
for(let i in arr) {
    console.log(i)
}
for(let i of arr) {
    console.log(i)
}
for(let i in arr) {
    console.log(arr[i])
}
for(let i of arr) {
    console.log(i)
}
```
---
### JavaScript 数组slice方法
* slice 方法可以截取数组的一部分
```javascript
const arr = [1,2,3,4,5]
console.log(arr.slice(1,3))
```
---
### JavaScript 数组join方法
* join 方法可以连接数组的元素
```javascript
const arr = [1,2,3,4,5]
console.log(arr.join('-'))
```
---
### JavaScript 数组reverse方法
* reverse 方法可以反转数组的元素
```javascript
const arr = [1,2,3,4,5]
console.log(arr.reverse())
```
---
### JavaScript 数组concat方法
* concat 方法可以连接两个或者多个数组
```javascript
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]
console.log(arr1.concat(arr2, arr3))
```
---
### JavaScript 数组find方法
* find 方法可以查找数组中的元素
```javascript
const arr = [1,2,3,4,5]
console.log(arr.find(item => item === 3))

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]

const res = inventory.find((item, index) => {
    if(item.name==="apples") return item
})
```
---
### JavaScript 数组findIndex方法
* findIndex 方法可以查找数组中的元素下标
```javascript
const arr = [1,2,3,4,5]
console.log(arr.findIndex(item => item === 3))

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]

const res = inventory.findIndex((item, index) => {
    if(item.name==="apples") return index
})
```
---
### JavaScript 数组forEach方法
* forEach 方法可以遍历数组的元素
```javascript
const arr = [1,2,3,4,5]
arr.forEach(item => {
    console.log(item)
})

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]
inventory.forEach((item, index) => {
    console.log(item.name, index)
})
```
---
### JavaScript 数组map方法
* map 方法可以遍历数组的元素，并返回一个新数组
```javascript
const arr = [1,2,3,4,5]
const newArr = arr.map(item => {
    return item * 2
})

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]
const res = inventory.map((item, index) => {
    return item.quantity * 2
})
```
---
### JavaScript 数组filter方法
* filter 方法可以遍历数组的元素，并返回一个新数组
```javascript
const arr = [1,2,3,4,5]
const newArr = arr.filter(item => {
    return item > 2
})

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]
const res = inventory.filter((item, index) => {
    return item.quantity >= 2
})
```
---
### JavaScript 数组reduce方法
* reduce 就是可以实现的是我们的将数组中的 item 实现累操作
```javascript
const arr = [1,2,3,4,5]
const res = arr.reduce((pre, cur) => {
    return pre + cur
}, 0)

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
]
const res = inventory.reduce((pre, cur) => {
    return pre + cur.quantity
}, 0)
```
---
### JavaScript 数组sort方法
* sort 方法可以排序数组的元素
```javascript
const arr = [1,2,3,4,5]
arr.sort((a, b) => a - b)
arr.sort((a, b) => a + b)
```

### JavaScript 数组includes方法
* includes 方法可以判断数组中是否存在某个元素
```javascript
const arr = [1,2,3,4,5]
console.log(arr.includes(3))
```

### JavaScript 数组flat方法
* flat 方法可以扁平化数组
```javascript
const arr = [1,2,3,[4,5,6],[7,8,9]]
console.log(arr.flat(isFinite))  // 实现的是无线递归平展
```

### JavaScript 数组flatMap方法
* flatMap 方法可以扁平化数组，并返回一个新数组
```javascript
const arr = [1,2,3,[4,5,6],[7,8,9]]
console.log(arr.flatMap(item => item))
```

## JavaScript Map 对象
* Map 对象可以存储键值对，并且可以迭代
* vue3 响应式原理中，该数据结构和 reflect 和 proxy 联合实现了我们的数据响应式原理
```javascript
const map = new Map()  // 创建一个空的 Map 对象

map.set('name', '张三')  // 设置键值对

map.get('name')  // 获取键值对

map.has('name')  // 判断键值对是否存在

map.delete('name')  // 删除键值对

map.clear()  // 清空 Map 对象

for(let [key, value] of map) {  // 遍历 Map 对象
    console.log(key, value)  
}
```

## JavaScript WeakMap 对象
* WeakMap 对象可以存储键值对，并且只能存储对象，并且不能迭代
```javascript
const weakMap = new WeakMap()  // 创建一个空的 WeakMap 对象

weakMap.set(obj, 'name')  // 设置键值对

weakMap.get(obj)  // 获取键值对

weakMap.has(obj)  // 判断键值对是否存在

weakMap.delete(obj)
```

## JavaScript Set 对象
* Set 对象可以存储唯一值，并且可以迭代
```javascript
const set = new Set()  // 创建一个空的 Set 对象
set.add('name')  // 添加值
set.delete('name')  // 删除值
set.clear()  // 清空 Set 对象
for(let item of set) {  // 遍历 Set 对象
    console.log(item.name)
}
```

## JavaScript WeakSet 对象
* WeakSet 对象可以存储对象，并且不能迭代
```javascript
const weakSet = new WeakSet()
weakSet.add(obj)
weakSet.has(obj)
weakSet.delete(obj)
weakSet.clear()
```

## JavaScript Promise 对象
* Promise 对象可以解决异步回调的问题，并且可以链式调用
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
        reject('error')
    })
})
promise.then(res => {
    console.log(res)
}, err => {
    console.log(err)
})
```

## JavaScript Reflect 对象
* Reflect 对象可以获取对象的属性和方法，并且可以链式调用
```javascript
const reflect = new Reflect()
reflect.get(obj, 'name')  // 获取对象的属性和方法
reflect.set(obj, 'name', '张三')
reflect.deleteProperty(obj, 'name')  // 删除对象的属性和方法
reflect.has(obj, 'name')  // 判断对象的属性和方法是否存在
reflect.ownKeys(obj)  // 获取对象的属性和方法
reflect.apply(obj, 'name', [])  // 调用对象的方法
reflect.construct(obj, [])  // 构造对象

reflect.defineProperty(obj, 'name', {  // 定义对象的属性和方法的描述符
    value: '张三',
    writable: true,
    enumerable: true,
    configurable: true
})
reflect.getOwnPropertyDescriptor(obj, 'name')  // 获取对象的属性和方法的描述符
reflect.getPrototypeOf(obj)  // 获取对象的原型
reflect.isExtensible(obj)  // 判断对象的原型是否可扩展
reflect.preventExtensions(obj)  // 阻止对象的原型扩展
reflect.setPrototypeOf(obj, {})  // 设置对象的原型
reflect.getOwnPropertyDescriptors(obj)  // 获取对象的属性和方法的描述符
```

## JavaScript Proxy 对象
* Proxy 对象可以代理对象，并且可以拦截对象的操作
```javascript
const proxy = new Proxy(obj, {
    get(target, key, receiver) {  // 获取对象的属性和方法
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {  // 设置对象的属性和方法
        return Reflect.set(target, key, value, receiver)
    },
    deleteProperty(target, key) {  // 删除对象的属性和方法
        return Reflect.deleteProperty(target, key)
    },
    has(target, key) {  // 判断对象的属性和方法是否存在
        return Reflect.has(target, key)
    }
})
```

## JavaScript Date 对象
### JavaScript Date 对象的使用
* Date 对象可以获取当前时间，也可以设置当前时间
```javascript
const date1 = new Date()
console.log(date1)

const date2 = new Date('2021-01-01')
console.log(date2)

const date3 = new Date(2021, 0, 1)
console.log(date3)

console.log(date1.toISOString())  // 获取当前时间的 ISO 格式
console.log(date1.toLocaleString())  // 获取当前时间的本地格式
console.log(date1.toLocaleDateString())  // 获取当前时间的日期格式
console.log(date1.toLocaleTimeString())  // 获取当前时间的时间格式

console.log(date2.getDate())  // 获取当前时间的日期
console.log(date2.getDay())  // 获取当前时间的星期几
console.log(date2.getFullYear())  // 获取当前时间的年份
console.log(date2.getHours())  // 获取当前时间的小时
console.log(date2.getMilliseconds())  // 获取当前时间的毫秒
console.log(date2.getMinutes())  // 获取当前时间的分钟
console.log(date2.getMonth())  // 获取当前时间的月份
console.log(date2.getSeconds())  // 获取当前时间的秒
console.log(date2.getTime())  // 获取当前时间的时间戳

date2.setDate(1)  // 设置当前时间的日期
date2.setFullYear(2021)  // 设置当前时间的年份
date2.setHours(0)  // 设置当前时间的小时
date2.setMilliseconds(0)  // 设置当前时间的毫秒
date2.setMinutes(0)  // 设置当前时间的分钟
date2.setMonth(0)  // 设置当前时间的月份
date2.setSeconds(0)  // 设置当前时间的秒
date2.setTime(0)  // 设置当前时间的时间戳
```

## JavaScript Math 对象
### JavaScript Math 对象的使用
* Math 对象是数学处理函数的
```javascript
console.log(Math.abs(-1))  // 获取绝对值

console.log(Math.ceil(1.1))  // 向上取整
console.log(Math.floor(1.1))  // 向下取整
console.log(Math.max(1,2,3,4,5))  // 获取最大值
console.log(Math.min(1,2,3,4,5))  // 获取最小值
console.log(Math.random())  // 获取随机数 [0,1)
console.log(Math.round(1.1))  // 四舍五入
console.log(Math.sign(1))  // 获取符号
console.log(Math.sqrt(1))  // 获取平方根
console.log(Math.trunc(1.1))  // 获取整数部分
console.log(Math.pow(2, 3))  // 获取幂

console.log(Math.log(2))  // 获取对数
console.log(Math.log2(2))  // 获取对数
console.log(Math.log10(2))  // 获取对数
console.log(Math.sin(1))  // 获取正弦值
console.log(Math.cos(1))  // 获取余弦值
console.log(Math.tan(1))  // 获取正切值
```

## JavaScript RegExp 对象
### JavaScript RegExp 对象的使用
* RegExp 对象是正则表达式处理的函数
```javascript
const reg1 = /\d+/g  // 全局匹配数字
const reg2 = /\d+/  // 匹配数字
const reg3 = new RegExp('\d+', 'g')  // 创建正则表达式
console.log(reg1.test('123'))  // 测试匹配数字
console.log(reg2.test('123'))  // 测试匹配数字
console.log(reg3.test('123'))
console.log(reg1.exec('123'))  // 执行正则表达式
```

## JavaScript object 对象
* object 对象是 JavaScript 对象的
```javascript
const obj1 = {
    name: 'John',
    age: 18,
}
console.log(obj1.name)
console.log(obj1['name'])
console.log(obj1.hasOwnProperty('name'))  // 判断对象中是否存在某个属性
console.log(Object.keys(obj1))  // 获取对象中键
console.log(Object.values(obj1))  // 获取对象中值
console.log(Object.entries(obj1))  // 获取对象中键值对
console.log(Object.assign({}, obj1))  // 合并对象
console.log(Object.getOwnPropertyDescriptor(obj1, 'name'))  // 获取对象中属性描述符
console.log(Object.defineProperty(obj1, 'name', {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: true,
    get() {
        return this.name
    },
    set(value) {
        this.name = value
    }
}))  // 定义对象中属性描述符  vue2 的响应式原理

class Person {
    private name: string
    private age: number
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log(`${this.name} is ${this.age} years old`)
    }
    get name() {
        return this.name
    }
    set name(value) {
        this.name = value
    }
    get age() {
        return this.age
    }
    set age(value) {
        this.age = value
    }
}
class Student extends Person {
    private school: string
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }
    study() {}
    get school() {}
    set school(value) {}
}
```

## JavaScript Event 对象
* Event 对象是事件处理函数的
* 事件处理函数的参数是 event 对象
```javascript
document.addEventListener('click', (event) => {
    console.log(event.target)  // 获取事件触发的元素实例
    console.log(event.currentTarget)  // 获取添加事件的元素实例
    console.log(event.type)  // 获取事件类型
    console.log(event.timeStamp)  // 获取事件触发的时间戳
    console.log(event.clientX)  // 获取鼠标点击的位置
    console.log(event.pageX)  // 获取鼠标点击的位置
    console.log(event.screenX)  // 获取鼠标点击的位置
    console.log(event.ctrlKey)  // 获取是否按下了 Ctrl 键
    console.log(event.altKey)  // 获取是否按下了 Alt 键
    console.log(event.shiftKey)  // 获取是否按下了 Shift 键
})
```
### JavaScript Event 鼠标事件
* 鼠标事件是鼠标点击、移动、滚动等事件
```javascript
document.addEventListener('mousemove', (event) => {})  // 鼠标移动事件


document.addEventListener('mouseup', (event) => {})  // 鼠标抬起事件

document.addEventListener('mousedown', (event) => {})  // 鼠标按下事件

document.addEventListener('mouseenter', (event) => {})  // 鼠标进入事件

document.addEventListener('mouseleave', (event) => {})  // 鼠标离开事件
```
### JavaScript Event 键盘事件
* 键盘事件是键盘按下、抬起等事件
```javascript
document.addEventListener('keydown', (event) => {})  // 键盘按下事件

document.addEventListener('keyup', (event) => {})  // 键盘抬起事件

document.addEventListener('keypress', (event) => {})  // 键盘按下事件

document.addEventListener('contextmenu', (event) => {})  // 右键菜单事件

document.addEventListener('focus', (event) => {})  // 获取焦点事件

document.addEventListener('blur', (event) => {})  // 失去焦点事件

document.addEventListener('resize', (event) => {})  // 窗口大小改变事件

document.addEventListener('scroll', (event) => {})  // 滚动事件

document.addEventListener('load', (event) => {})  // 加载事件

document.addEventListener('unload', (event) => {})  // 卸载事件

document.addEventListener('beforeunload', (event) => {})  // 卸载事件

document.addEventListener('hashchange', (event) => {})  // 窗口地址改变事件

document.addEventListener('popstate', (event) => {})  // 窗口历史记录改变事件

document.addEventListener('DOMContentLoaded', (event) => {})  // 网页加载完成事件
```
### JavaScript Event 窗口事件
* 窗口事件是窗口大小改变、滚动、加载等事件
```javascript
window.addEventListener('resize', (event) => {
    console.log(window.innerWidth)  // 获取窗口宽度
})  // 窗口大小改变事件

window.addEventListener('scroll', (event) => {
    console.log(window.scrollX)  // 获取滚动条的 X 轴位置
    console.log(window.scrollY)  // 获取滚动条的 Y 轴位置
})
```
### JavaScript Event 拖拽事件
* 拖拽事件是拖拽元素、拖拽结束等事件
```javascript
document.addEventListener('dragstart', (event) => {
    console.log(event.dataTransfer.setData('text', '123'))  // 设置拖拽的数据
    console.log(event.dataTransfer.setData('text/plain', '123'))  // 设置拖拽的数据
    console.log(event.dataTransfer.setData('text/html', '123'))  // 设置拖拽的数据
    console.log(event.dataTransfer.setData('text/uri-list', '123'))  
    console.log(event.dataTransfer.setData('text/x-moz-url', '123'))
})  // 拖拽开始事件
```
### JavaScript Event 触摸事件
* 触摸事件是触摸屏幕、移动、抬起等事件
```javascript
document.addEventListener('touchstart', (event) => {
    console.log(event.touches[0].clientX)  // 获取触摸点的 X 轴位置
})  // 触摸开始事件
document.addEventListener('touchmove', (event) => {
    console.log(event.touches[0].clientX)
})  // 触摸移动事件
document.addEventListener('touchend', (event) => {})  // 触摸结束事件
document.addEventListener('touchcancel', (event) => {})  // 触摸取消事件
document.addEventListener('gesturestart', (event) => {})  // 触摸缩放事件
document.addEventListener('gesturechange', (event) => {})  // 触摸缩放事件
document.addEventListener('gestureend', (event) => {})  // 触摸缩放事件
```

## JavaScript document 对象
### JavaScript document 获取元素实例
* document 对象是整个网页的根节点，可以通过 document 对象获取网页中的元素实例
```javascript
const div1 = document.getElementById('div')
const div2 = document.querySelector('#div')
const div3 = document.querySelectorAll('#div')
const div4 = document.getElementsByClassName('div')
const div5 = document.getElementsByTagName('div')
const div6 = document.getElementsByName('div')
const div7 = document.getElementsBySelector('div')
const div8 = document.getElementsByAttribute('div')
```
### JavaScript document 获取元素内容
* document 对象是整个网页的根节点，可以通过 document 对象获取网页中的元素内容
```javascript
const div1 = document.querySelector('div').innerText  // 获取元素的文本内容
const div2 = document.querySelector('div').innerHTML  // 获取元素的 HTML 内容
const div3 = document.querySelector('div').textContent  // 获取元素的文本内容
const div4 = document.querySelector('div').outerHTML  // 获取元素的 HTML 内容
const div5 = document.querySelector('div').outerText  // 获取元素的文本内容
```

### JavaScript document Hidden 属性
* document 通过hidden 属性的设置控制元素的显示
```javascript
document.querySelector('div').hidden = true  // 隐藏元素
document.querySelector('div').hidden = false  // 显示元素
```

### JavaScript document style 属性
* document 对象是整个网页的根节点，可以通过 document 对象获取网页中的元素样式
```javascript
const div1 = document.querySelector('div').style.width  // 获取元素的宽度
const div2 = document.querySelector('div').style.height  // 获取元素的高度
const div3 = document.querySelector('div').style.backgroundColor  // 获取元素的背景颜色
const div4 = document.querySelector('div').style.color  // 获取元素的字体颜色
const div5 = document.querySelector('div').style.fontSize  // 获取元素的字体大小
const div6 = document.querySelector('div').style.fontWeight  // 获取元素的字体粗细
const div7 = document.querySelector('div').style.fontStyle  // 获取元素的字体样式
const div8 = document.querySelector('div').style.textAlign  // 获取元素的文本对齐方式
```

### JavaScript document ClassName属性
* 实现的就是获取我们的元素类名的
```javascript
const div1 = document.querySelector('div')

div1.className = 'div'  // 设置元素的类名
```

### JavaScript document ClassList属性
* 实现的就是获取我们的元素类名列表的的
* 内部的方法有: add remove contains toggle replace
```javascript
const div1 = document.querySelector('div')

div1.classList.add('div')  // 添加元素的类名
div1.classList.remove('div')  // 移除元素的类名
div1.classList.contains('div')  // 判断元素中是否存在某个类名
div1.classList.toggle('div')  // 切换元素的类名
```

### JavaScript document Attribute属性
* 就是实现的是控制我们的元素本身具备的属性的获取吧
```javascript
const div1 = document.querySelector('div')
console.log(div1.hasAttribute("class"))  // 判断元素中是否存在某个属性
console.log(div1.getAttribute("class"))  // 获取元素的某个属性
console.log(div1.setAttribute("class", "div"))  // 设置元素的某个属性
console.log(div1.removeAttribute("class"))  // 移除元素的某个属性
```

### JavaScript document Property属性
* 就是实现的是控制我们的元素本身具备的属性的获取吧
```javascript
const div1 = document.querySelector('div')

console.log(div1.className, div1.id, div1.title, 
    div1.lang, div1.dir, div1.accessKey, 
    div1.tabIndex, div1.draggable, 
    div1.contentEditable, div1.spellcheck, 
    div1.autocapitalize, div1.autocorrect, 
    div1.autosave, div1.inputMode, 
    div1.isContentEditable)
```

### JavaScript document Data-* 属性
* 实现的就是获取我们的元素自定义属性的
```javascript
const div1 = document.querySelector('div')

console.log(div1.dataset?.name, div1.dataset?.age)
```

### JavaScript document 创建元素实例
* 实现的就是创建我们的元素实例的
```javascript
const divEl = document.createElement("div")

document.querySelector("#div").append(divEl)  // 尾添加元素实例
document.querySelector("#div").prepend(divEl) // 前添加元素实例
document.querySelector("#div").before(divEl)   // 前添加元素实例
document.querySelector("#div").after(divEl)  // 后添加元素实例
document.querySelector("#div").replaceWith(divEl)  // 替换元素实例
```

### JavaScript document 删除元素实例
* 实现的就是删除我们的元素实例的
```javascript
document.querySelector("#div").remove()  // 删除元素本身实例
document.querySelector("#div").removeChild(divEl)  // 删除元素子节点实例
document.querySelector("#div").removeAttribute("class")  // 删除元素属性实例
```

### JavaScript document window事件
* 实现的就是控制我们的窗口事件的
```javascript
window.onload = function () {
    console.log('页面加载完成')
}

window.onresize = function () {
    console.log('页面大小改变')
}

window.onscroll = function () {
    console.log('页面滚动')
}

window.onbeforeunload = function () {
    console.log('页面关闭前')
}

window.onunload = function () {
    console.log('页面关闭')
}

const div = document.querySelector('#div')
console.log(div.scrollHeight)  // 获取元素内容的高度
console.log(div.scrollWidth)  // 获取元素内容的宽度
console.log(div.scrollTop)  // 获取元素滚动的距离
console.log(div.scrollLeft)  // 获取元素滚动的距离
console.log(div.clientWidth)  // 获取元素可见宽度
console.log(div.clientHeight)  // 获取元素可见高度
console.log(div.offsetWidth)  // 获取元素宽度
console.log(div.offsetHeight)  // 获取元素高度
console.log(div.offsetTop)  // 获取元素距离顶部的距离
console.log(div.offsetLeft)  // 获取元素距离左边的距离
console.log(div.getBoundingClientRect())  // 获取元素位置
```

## JavaScript bom 操作
* bom 是浏览器对象模型，提供了一些操作浏览器的方法，比如：窗口大小、滚动条位置、浏览器信息、cookie、本地存储等。
### JavaScript bom window对象
#### JavaScript bom location对象
* 实现的就是控制我们的窗口地址的
```javascript
window.location.href = 'https://www.baidu.com'  // 跳转到新的地址
window.location.replace('https://www.baidu.com')  // 跳转到新的地址
window.location.reload()  // 刷新页面
window.location.assign('https://www.baidu.com')  // 跳转到新的地址

console.log(window.location.href)  // 获取当前地址
console.log(window.location.protocol)  // 获取当前协议
console.log(window.location.host)  // 获取当前域名
console.log(window.location.hostname)  // 获取当前域名
console.log(window.location.pathname)  // 获取当前路径
console.log(window.location.search)  // 获取当前参数
console.log(window.location.hash)  // 获取当前锚点
console.log(window.location.origin)  // 获取当前域名

const urlSearchParams = new URLSearchParams(window.location.search)
for (const [key, value] of urlSearchParams) {  // 获取当前参数
    console.log(key, value)
}
```

#### JavaScript bom history对象
* 实现的就是控制我们的窗口历史记录的
```javascript
window.history.back()  // 后退
window.history.forward()  // 前进
window.history.go(-1)  // 后退
window.history.go(1)  // 前进
window.history.pushState({}, '', 'https://www.baidu.com')  // 添加历史记录
window.history.replaceState({}, '', 'https://www.baidu.com')  // 替换历史记录
window.history.state  // 获取当前历史记录
```

#### JavaScript bom navigator对象
* 实现的就是控制我们的浏览器信息的
```javascript
console.log(window.navigator.userAgent)  // 获取浏览器信息
console.log(window.navigator.platform)  // 获取浏览器平台
console.log(window.navigator.language)  // 获取浏览器语言
console.log(window.navigator.onLine)  // 获取浏览器是否在线
console.log(window.navigator.cookieEnabled)  // 获取浏览器是否允许cookie
console.log(window.navigator.appName)  // 获取浏览器名称
console.log(window.navigator.appVersion)  // 获取浏览器版本
console.log(window.navigator.appCodeName)  // 获取浏览器代码名称
console.log(window.navigator.product)  // 获取浏览器产品名称
```

#### JavaScript bom screen对象
* 实现的就是控制我们的屏幕信息的
```javascript
console.log(window.screen.width)  // 获取屏幕宽度
console.log(window.screen.height)  // 获取屏幕高度
console.log(window.screen.availWidth)  // 获取屏幕可用宽度
console.log(window.screen.availHeight)  // 获取屏幕可用高度
console.log(window.screen.colorDepth)  // 获取屏幕颜色深度
console.log(window.screen.pixelDepth)  // 获取屏幕像素深度
console.log(window.screen.orientation)  // 获取屏幕方向
console.log(window.screen.orientation.type)  // 获取屏幕方向类型
console.log(window.screen.orientation.angle)  // 获取屏幕方向角度
console.log(window.screen.orientation.lock('landscape'))  // 锁定屏幕方向
console.log(window.screen.orientation.unlock())  // 解锁屏幕方向
console.log(window.screen.orientation.onchange = function () {
    console.log('屏幕方向改变')
})
```

### JavaScript bom cookie对象
* 实现的就是控制我们的cookie信息的
```javascript
document.cookie = 'name=zhangsan'
document.cookie = 'age=18'
document.cookie = 'sex=man'
document.cookie = 'name=zhangsan; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/'
```

### JavaScript bom localStorage对象
* 实现的就是控制我们的本地存储信息的
* 持续化的存储，页面发生变化的时候任然存在的
```javascript
localStorage.setItem('name', 'zhangsan')
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear()
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i), localStorage.getItem(localStorage.key(i)))
}
localStorage.onstorage = function (e) {
    console.log(e.key, e.newValue)
}
```

### JavaScript bom sessionStorage对象
* 实现的就是控制我们的会话存储信息的
* 临时的存储，页面发生变化的时候会丢失
* 持续化的存储，页面发生变化的时候任然存在的
```javascript
sessionStorage.setItem('name', 'zhangsan')
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.clear()
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)))
}
sessionStorage.onstorage = function (e) {
    console.log(e.key, e.newValue)
}
```

### JavaScript bom scroll对象
* 实现的就是控制我们的滚动条的位置的
```javascript
window.scrollTo(0, 0)  // 滚动到顶部
window.scrollBy(0, 100)  // 滚动100px
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'  // 行为丝滑
})  // 滚动到顶部

window.onscroll = function () {
    console.log(window.scrollY)  // 获取滚动条位置
    if (window.scrollY > 100) {
        document.querySelector('.header').style.backgroundColor = 'red'
        document.querySelector('.header').style.color = 'white'
    }
}
window.onscroll = function () {
    console.log(window.scrollX)  // 获取滚动条位置
    if (window.scrollX > 100) {
        document.querySelector('.header').style.backgroundColor = 'red'
        document.querySelector('.header').style.color = 'white'
    }
}

const divEl = document.querySelector('.div')
console.log(divEl.scrollTop)  // 获取滚动条位置
console.log(divEl.scrollLeft)  // 获取滚动条位置
divEl.onscroll = function () {
    console.log(divEl.scrollTop)
    if (divEl.scrollTop > 100) {
        divEl.style.backgroundColor = 'red'
    }
}
console.log(divEl.scrollHeight)  // 获取滚动条高度
console.log(divEl.scrollWidth)  // 获取滚动条宽度
console.log(divEl.scrollTopMax)  // 获取滚动条最大高度
console.log(divEl.scrollLeftMax)  // 获取滚动条最大宽度
divEl.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})
```

### JavaScript bom client对象
* 实现的就是控制我们的客户端的信息的
```javascript
console.log(window.innerWidth)  // 获取窗口宽度
console.log(window.innerHeight)  // 获取窗口高度
console.log(window.outerWidth)  // 获取窗口宽度
console.log(window.outerHeight)  // 获取窗口高度

const divEl = document.querySelector('.div')
console.log(divEl.clientWidth)  // 获取元素宽度
console.log(divEl.clientHeight)  // 获取元素高度
```

### JavaScript bom offset对象
* 实现的就是控制我们的元素偏移量的
* 获取元素偏移量，就是获取元素距离文档的偏移量
```javascript
console.log(divEl.offsetWidth)  // 获取元素宽度
console.log(divEl.offsetHeight)  // 获取元素高度
console.log(divEl.offsetLeft)  // 获取元素距离文档的偏移量
console.log(divEl.offsetTop)  // 获取元素距离文档的偏移量
```

## JavaScript 网络编程
### JavaScript Ajax的使用
* 我们后面使用的网络请求库axios 对ajax 的封装
```javascript
// 开始我们的 ajax 请求
const xhr = new XMLHttpRequest()  // 创建一个 xhr 对象

xhr.open('GET', 'http://localhost:3000/users')  // 打开请求

xhr.send()  // 发送请求

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response)
        console.log(JSON.parse(xhr.response))
        console.log(xhr.getResponseHeader('Content-Type'))
        console.log(xhr.getAllResponseHeaders())
        console.log(xhr.responseText)
        console.log(xhr.responseXML)
    }
    if (xhr.readyState === 4 && xhr.status === 404) {
        console.log('请求失败')
        console.log(xhr.response)
        console.log(xhr.responseText)
    }
    if (xhr.readyState === 4 && xhr.status === 500) {
        console.log('服务器错误')
    }
    if (xhr.readyState === 4 && xhr.status === 401) {
        console.log('权限不足')
    }
    if (xhr.readyState === 4 && xhr.status === 403) {
        console.log('禁止访问')
    }
    if (xhr.readyState === 4 && xhr.status === 400) {
        console.log('请求参数错误')
    }
}

xhr.onload = function () {  // 请求成功
    console.log(xhr.response)
    console.log(JSON.parse(xhr.response))
}

xhr.onerror = function () {  // 请求失败
    console.log(xhr.response)
}

xhr.onprogress = function (e) {  // 请求进度
    console.log("请求正在进行中")
}

xhr.onloadstart = function (e) {  // 请求开始
    
}

xhr.onloadend = function (e) {  // 请求结束
    
}
```
```javascript
/**
 * 自定义封装网络请求
 * 实际上含有很多的好的封装的网络请求库，这里只是微微练习罢了
 * @param {string} url
 * @param {string} method
 * @param {Object} headers
 * @param {number} timeout
 * @param {Object} data
 * @param {"" | "arraybuffer" | "blob" | "document" | "json" | "text"} dataType
 * @param {boolean} is_async
 * @param {Function} success
 * @param {Function} failure
 */
function http_request_MyAjax({url, method = "GET", headers = {}, timeout = 3000, data = {},
  dataType = "json", is_async = true, success, failure} = {}) {

 // 返回我们的 Promise 来实现处理返回值结果
 return new Promise((resolve, reject) => {
     try {
        const xhr = new XMLHttpRequest()
        // 监听事件
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                success&& success(xhr.response)
                resolve({status: xhr.status, statusText: xhr.statusText, response: xhr.response})
            } else {
            failure&& failure({status: xhr.status, statusText: xhr.statusText}) 
                reject({status: xhr.status, statusText: xhr.statusText, response: xhr.response})
            }
        }
        // 配置信息
        xhr.responseType = dataType
        xhr.timeout = timeout
         // 监听网络超时
         xhr.ontimeout = function() {
        // 定时取消我们的网络请求
        const timer = setTimeout(function() {
            xhr.abort()
        }, 3000)
        reject({status: xhr.status, statusText: xhr.statusText, message: "请求超时 Timeout"})
        clearTimeout(timer)
     }

    // 区分 Get 和 Post 发送请求的方式
    if (method.toUpperCase() === "GET") {
    // for (const [key, value] of Object.entries(data)) {
    // url = url + "?" + key + "=" + value
    // }
    url += Object.keys(data).map(key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&")
    xhr.open(method, url, is_async)
    xhr.send()
    } else {
        xhr.open(method, url, is_async)
        if (headers) {
            Object.entries(headers).forEach(([key, value]) =>
                xhr.setRequestHeader(key, `${value}`))
        }
        xhr.send(JSON.stringify(data))
    }
     } catch (e) {
        reject(e)
     }
    })
}
```

### JavaScript fetch的使用
* fetch 是一个全局对象，我们可以通过它来发送网络请求
* fetch 支持我们的 promise 异步调用的
```javascript
fetch('http://localhost:3000/users').then(res => {
    return res.json()
}, () => {
    console.log('请求失败')
})

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {  // 请求头配置
        'Content-Type': 'application/json',  // json
        'Authorization': 'Bearer token',  // 认证配置
        'Accept': 'application/json',  // 接收数据格式指定
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': 'token',
    },
    body: JSON.stringify({  // 请求体配置
        name: '张三',
        age: 18,
        sex: '男',
        password: '123456'
    }),
    params: {  // 查询参数配置
        id: 1,
        name: '张三',
    },
    proxy: 'http://localhost:3000',  // 代理配置
    mode: 'cors',  // 跨域配置
    credentials: 'include',  // 凭证配置
    redirect: 'follow',  // 重定向配置
    referrer: 'no-referrer',  // 引用配置
    referrerPolicy: 'no-referrer',  // 引用策略配置
    cache: 'no-cache',  // 缓存配置
    keepalive: true,  // 保活配置
    signal: AbortSignal.timeout(3000),  // 信号配置
}).then(res => {
    return [res.json(), res.text()]
})
```