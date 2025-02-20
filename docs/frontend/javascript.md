# JavaScript 文档

## JavaScript 数组操作
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