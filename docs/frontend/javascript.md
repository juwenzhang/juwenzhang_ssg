# JavaScript 文档

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

## JavaScript Array数据类型
* 首先对于我们的 javascript 来说的话，是一个函数优先的一个编程脚本语言，但是呐，在
* 本质上来说的话，也是一个基于面向对象的编程脚本语言的呐，最重要的就是原型链吧
* 就是因为我们的原型链的存在，所以说这个时候就具备了我们的面向对象的两个重要的概念吧
* 一个就是类中的实例方法一个就是类中的静态方法（类方法）
  * 在 javascript 中的话，实例方法就是在原型上添加的方法，这个就是实例方法
  * 静态方法就是在类上添加的方法，这个就是静态方法
* 同时数组也是一个对象呐，这个时候就会出现我们的数组的方法
  * 数组的方法就是在数组的原型上添加的方法，这个就是数组的方法
  * 数组的静态方法就是在数组的类上添加的方法，这个就是数组的静态方法

### Array.prototype.push()
* push 方法就是实现的是向数组的末尾进行添加元素的方法呐，同时修改数组本身
* 自定义手写 push 方法的核心步骤
> * 获取得到数组的长度，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 进行循环遍历，将需要添加的元素依次添加到数组的末尾，同时修改数组的长度
> * 为了满足可以同时添加多个元素，此时需要使用 es6 的扩展运算符来实现吧
> * 返回数组的长度

```javascript
Array.prototype.MyPush = function (...args) {
  const len = this.length;  // 获取得到数组的长度
  for (let i = 0; i < args.length; i++) {
    this[len + i] = args[i];
  }
  return this.length;
}
// test code
const arr = [1, 2, 3];
arr.MyPush(4, 5, 6);
console.log(arr);  // [1, 2, 3, 4, 5, 6]
```

### Array.prototype.pop()
* pop 方法就是实现的是向数组的末尾进行删除元素的方法呐，同时修改数组本身,同时返回删除的元素
* 自定义手写 pop 方法的核心步骤
> * 获取得到数组的长度，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 如果数组的长度为0，那么就返回undefined
> * 获取得到数组的最后一个元素，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 删除数组的最后一个元素，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 修改数组的长度，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 返回删除的元素

```javascript
Array.prototype.MyPop = function () {
  const len = this.length;  // 获取得到数组的长度
  if (len === 0) return undefined;  // 如果数组的长度为0，那么就返回undefined
  
  const res = this[len - 1];  // 获取得到数组的最后一个元素
  delete this[len - 1];  // 删除数组的最后一个元素
  this.length--;  // 修改数组的长度
  return res;  // 返回删除的元素 
}
// test code
const arr = [1, 2, 3];
const deletedEle = arr.MyPop();
console.log(arr, deletedEle);  // [1, 2] 3
```

### Array.prototype.shift()
* shift 方法就是实现的是向数组的开头进行删除元素的方法呐，同时修改数组本身,同时返回删除的元素
* 自定义手写 shift 方法的核心步骤
> * 获取得到数组的长度，因为是在原型链上，所以说就是通过 this 就可以获取得到了
> * 如果数组的长度为0，那么就返回undefined
> * 提前存储数组第一个元素，通过 this 即可获得
> * 循环遍历数组，将数组的元素向前移动一位
> * 将数组的第一个元素进行删除，同时数组长度发生变化，同时将删除的元素进行返回即可

```javascript
Array.prototype.MyShift = function () {
  const len = this.length;  // 获取得到数组的长度
  if (len === 0) return undefined;  // 如果数组的长度为0，那么就返回undefined
  
  const res = this[0];  // 获取得到数组的第一个元素
  for (let i = 0; i < len - 1; i++) {  // 循环遍历数组
    this[i] = this[i + 1];  // 将数组的元素向前移动一位
  }
  delete this[len - 1];  // 删除数组的最后一个元素
  this.length--;  // 修改数组的长度
  return res;  // 返回删除的元素
}
```

### Array.prototype.unshift()
* unshift 方法就是实现的是向数组的开头进行添加元素的方法呐，同时修改数组本身
* 自定义手写 unshift 方法的核心步骤
> * 实现获取得到元素的长度
> * 将每个元素进行向后移动需要添加的元素长度的位数
> * 将需要添加元素依次添加到数组的开头
> * 修改数组的长度
> * 返回数组的长度

```javascript
Array.prototype.MyUnshift = function (...args) {
  const len = this.length;  // 获取得到数组的长度
  const argsLen = args.length;  // 获取得到需要添加的元素的长度
  for (let i = len - 1, j = argslen; i >= 0; i--, j--) {  // 循环遍历数组  
    this[i + j] = this[i];  // 将数组的元素向后移动一位
  }
  for (let i = 0; i < argsLen; i++) {  // 循环遍历数组
    this[i] = args[i];  // 将数组的元素向前移动一位
  } 
  this.length += args.length;  // 修改数组的长度
  return this.length;
}
```

### Array.prototype.splice()
* splice 方法就是实现的是向数组的指定位置进行添加或者删除元素的方法呐，同时修改数组本身
* 主要的使用形式为: splice(start, deleteCount, item1, item2, ...)
  * start: 开始位置的索引
  * deleteCount: 删除的元素的个数
  * item1, item2,...: 需要添加的元素
  * 处理 start 其他的都是可选的
```javascript
Array.prototype.MySplice = function (start, deleteCount, ...args) {
  const len = this.length  // 获取数组的长度
  const argsLen = args.length  // 获取需要添加的元素的长度
  const deleted = []  // 存储删除的元素
  if (start >= len) {  // 如果开始位置的索引大于数组的长度，那么就直接将需要添加的元素添加到数组的末尾
    for (let i = 0; i < argsLen; i++) {  // 循环遍历数组
      this[len + i] = args[i]  // 将数组的元素向前移动一位
    }
    this.length += argsLen  // 修改数组的长度
    return deleted  // 返回删除的元素
  }
  if (deleteCount > 0) {  // 如果删除的元素的个数大于0，那么就将删除的元素存储到 deleted 数组中
    for (let i = 0; i < deleteCount; i++) {  // 循环遍历数组
      deleted[i] = this[start + i]  
    }
  }
  for (let i = start + deleteCount, j = 0; i < len; i++, j++) {  // 循环遍历数组
    this[i - deleteCount] = this[i]  
  }
  for (let i = 0; i < argsLen; i++) {  // 循环遍历数组
    this[start + i] = args[i]  
  }
  this.length -= deleteCount  // 修改数组的长度
  this.length += argsLen  // 修改数组的长度
  return deleted  // 返回删除的元素
}
```

### Array.prototype.slice()
* slice 方法就是实现的是截取数组的方法呐，同时返回截取的数组
* 主要的使用形式为: slice(start, end)
  * start: 开始位置的索引
  * end: 结束位置的索引
  * 处理 start 和 end 都是可选的
```javascript
Array.prototype.MySlice = function (start, end) {
  const len = this.length  // 获取数组的长度
  const res = []  // 存储截取的元素
  if (start >= len) {  // 如果开始位置的索引大于数组的长度，那么就直接返回空数组
    return res  // 返回空数组
  } 
  if (end > len) {  // 如果结束位置的索引大于数组的长度，那么就将结束位置的索引设置为数组的长度
    end = len  // 将结束位置的索引设置为数组的长度
  }
  for (let i = start; i < end; i++) {  // 循环遍历数组
    res.push(this[i])  
  }
  return res  // 返回截取的元素
}
```

### Array.prototype.reverse()
* reverse 方法就是实现的是将数组进行反转的方法呐，同时修改数组本身
* 自定义手写 reverse 方法的核心步骤
```javascript
Array.prototype.MyReverse = function () {
  const len = this.length  // 获取数组的长度
  for (let i = 0; i < len / 2; i++) {  // 循环遍历数组
    const temp = this[i]  // 存储数组的元素
    this[i] = this[len - i - 1]  
    this[len - i - 1] = temp  
  }   
}
```

### Array.prototype.sort()
* sort 方法就是实现的是将数组进行排序的方法呐，同时修改数组本身
* 内部可以传递的参数含有两种
  * 1. 不传参，默认按照字符串的 Unicode 编码进行排序
  * 2. 传参，按照传递的函数进行排序
```javascript
Array.prototype.MySort = function (fn) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return this  // 如果数组的长度为0，那么就直接返回数组 
  if (typeof fn !== 'function') {  // 如果传递的参数不是函数，那么就按照字符串的 Unicode 编码进行排序
    this.sort((a, b) => {  // 循环遍历数组
      return a.toString().localeCompare(b.toString())  
    })
  } else {  // 如果传递的参数是函数，那么就按照传递的函数进行排序
    // 直接使用冒泡排序进行 sort 的排序吧，这个涉及我们的排序算法的知识了
    for (let i = 0; i < len - 1; i++) {  // 循环遍历数组，决定整体比较次数的呐 
      let isWrap = false
      for (let j = 0; j < len - 1 - i; j++) {  // 循环遍历数组
        // 两个元素进行比较，如果返回的值大于0，就直接进行交换元素吧
        if (fn(this[j], this[j + 1]) > 0) {  // 如果传递的函数返回的值大于0，那么就将数组的元素向前移动一位
          const temp = this[j]  // 存储数组的元素
          this[j] = this[j + 1]  
          this[j + 1] = temp  
          isWrap = true
        }
      }
      if (!isWrap) break  // 如果没有进行交换元素，那么就直接跳出循环吧
    }
  } 
}
```

### Array.prototype.concat()
* concat 方法就是实现的是将数组进行拼接的方法呐，同时返回拼接后的数组
* 主要的使用形式为: concat(item1, item2,...)
  * item1, item2,...: 需要拼接的元素
  * 处理 item1, item2,... 都是可选的
* 如果为了事务的严谨性的话，我们可以对数组中的数据类型进行对应的校验吧
```javascript
Array.prototype.MyConcat = function (...args) {
  const len = this.length  // 获取数组的长度
  const res = []  // 存储拼接后的元素
  for (let i = 0; i < len; i++) {  // 循环遍历原数组
    res.push(this[i])  
  } 
  for (let i = 0; i < args.length; i++) {  // 循环遍历需要拼接的元素
    if (Array.isArray(args[i])) {  // 如果需要拼接的元素是数组，那么就将数组的元素向前移动一位
      for (let j = 0; j < args[i].length; j++) {  // 循环遍历需要拼接的元素
        res.push(args[i][j])  
      }
    } else {  // 如果需要拼接的元素不是数组，那么就将数组的元素向前移动一位
      res.push(args[i])  
    }
  }
}
```

### Array.prototype.join()
* join 方法就是实现的是将数组进行拼接的方法呐，同时返回拼接后的字符串
* 主要的使用形式为: join(separator)
  * separator: 分隔符
  * 处理 separator 都是可选的
```javascript
Array.prototype.MyJoin = function (separator) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return ''  // 如果数组的长度为0，那么就直接返回空字符串
  if (typeof separator !== 'string') separator = ','  // 如果传递的参数不是字符串，那么就将分隔符设置为逗号
  let res = ''  // 存储拼接后的元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    res += this[i]  
    if (i !== len - 1) res += separator  
  } 
  return res  // 返回拼接后的元素
}
```

### Array.prototype.indexOf()
* indexOf 方法就是实现的是查找数组中指定元素的索引的方法呐，同时返回指定元素的索引
* 主要的使用形式为: indexOf(item, start)
  * item: 需要查找的元素
  * start: 开始查找的索引
  * 处理 item 和 start 都是可选的
```javascript
Array.prototype.MyIndexOf = function (item, start) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return -1  // 如果数组的长度为0，那么就直接返回-1
  if (start < 0) start = 0  // 如果开始查找的索引小于0，那么就将开始查找的索引设置为0
  for (let i = start; i < len; i++) {  // 循环遍历数组
    if (this[i] === item) return i  
  } 
}
```

### Array.prototype.lastIndexOf()
* lastIndexOf 方法就是实现的是查找数组中指定元素的索引的方法呐，同时返回指定元素的索引
* 主要的使用形式为: lastIndexOf(item, start)
  * item: 需要查找的元素
  * start: 开始查找的索引
  * 处理 item 和 start 都是可选的
```javascript
Array.prototype.MyLastIndexOf = function (item, start) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return -1  // 如果数组的长度为0，那么就直接返回-1
  if (start < 0) start = 0  // 如果开始查找的索引小于0，那么就将开始查找的索引设置为0
  for (let i = len - 1; i >= start; i--) {  // 循环遍历数组
    if (this[i] === item) return i  
  } 
}
```

### Array.prototype.includes()
* includes 方法就是实现的是查找数组中是否包含指定元素的方法呐，同时返回指定元素的索引
* 主要的使用形式为: includes(item, start)
  * item: 需要查找的元素
  * start: 开始查找的索引
  * 处理 item 和 start 都是可选的
```javascript
Array.prototype.MyIncludes = function (item, start) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return false  // 如果数组的长度为0，那么就直接返回false
  if (start < 0) start = 0  // 如果开始查找的索引小于0，那么就将开始查找的索引设置为0
  for (let i = start; i < len; i++) {  // 循环遍历数组
    if (this[i] === item) return i  
  } 
}
```

### Array.prototype.find()
* find 方法就是实现的是查找数组中指定元素的方法呐，同时返回指定元素
* 主要的使用形式为: find(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyFind = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return undefined  // 如果数组的长度为0，那么就直接返回undefined
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (callback.call(thisArg, this[i], i, this)) return this[i]  
  } 
}
```

### Array.prototype.findIndex()
* findIndex 方法就是实现的是查找数组中指定元素的索引的方法呐，同时返回指定元素的索引
* 主要的使用形式为: findIndex(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyFindIndex = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return -1  // 如果数组的长度为0，那么就直接返回-1
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (callback.call(thisArg, this[i], i, this)) return i  
  }  
}
```

### Array.prototype.findAll()
* findAll 方法就是实现的是查找数组中指定元素的方法呐，同时返回满足条件的所有元素
* 主要的使用形式为: findAll(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyFindAll = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return []  // 如果数组的长度为0，那么就直接返回[]
  const res = []  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (callback.call(thisArg, this[i], i, this)) res.push(this[i])  // 将数组的元素向前移动一位
  }
  return res  // 返回满足条件的所有元素 
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = arr.MyFindAll((item, index, arr) => {  // 循环遍历数组
  return item % 2 === 0  
})
```

### Array.prototype.forEach()
* forEach 方法就是实现的是遍历数组的方法呐，同时返回 undefined
* 主要的使用形式为: forEach(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyForEach = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return undefined  // 如果数组的长度为0，那么就直接返回undefined
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    callback.call(thisArg, this[i], i, this)  
  }  
}
const arr = [1, 2, 3]
arr.MyForEach((item, index, arr) => {  // 循环遍历数组
  console.log(item, index, arr)  // 将数组的元素向前移动一位
})
```

### Array.prototype.map()
* map 方法就是实现的是遍历数组的方法呐，同时返回一个新的数组
* 主要的使用形式为: map(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyMap = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return []  // 如果数组的长度为0，那么就直接返回[]
  const res = []  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    res.push(callback.call(thisArg, this[i], i, this)) 
  } 
  return res  // 返回满足条件的所有元素
}
const arr = [1, 2, 3]
const res = arr.MyMap((item, index, arr) => {  // 循环遍历数组
  // 内部的返回条件随意进行书写，可以实现和很多方法一样的效果吧
  return item * 2
})
```

### Array.prototype.filter()
* filter 方法就是实现的是遍历数组的方法呐，同时返回一个新的数组
* 主要的使用形式为: filter(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
```javascript
Array.prototype.MyFilter = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return []  // 如果数组的长度为0，那么就直接返回[]
  const res = []  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (callback.call(thisArg, this[i], i, this)) res.push(this[i])  // 将数组的元素向前移动一位
  }
  return res  // 返回满足条件的所有元素
}
const arr = [1, 2, 3]
const res = arr.MyFilter((item, index, arr) => {  // 循环遍历数组
  return item % 2 === 0  // 将数组的元素向前移动一位
})
```

### Array.prototype.reduce()
* reduce 方法就是实现的是遍历数组的方法呐，同时返回一个新的数组
* 主要的使用形式为: reduce(callback, initialValue)
  * callback: 回调函数
  * initialValue: 初始值
  * 处理 callback 和 initialValue 都是可选的
```javascript
Array.prototype.MyReduce = function (callback, initialValue) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return initialValue  // 如果数组的长度为0，那么就直接返回初始值
  let res = initialValue  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    res = callback.call(this, res, this[i], i, this) 
  }
  return res  // 返回满足条件的所有元素 
}
const arr = [1, 2, 3]
const res = arr.MyReduce((pre, cur, index, arr) => {  // 循环遍历数组
  return pre + cur
}, 0)
```

### Array.prototype.flat()
* flat 方法就是实现的是将数组进行扁平化的方法呐，同时返回一个新的数组
* 主要的使用形式为: flat(depth)
  * depth: 扁平化的深度
  * 处理 depth 都是可选的
```javascript
Array.prototype.MyFlat = function (depth) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return []  // 如果数组的长度为0，那么就直接返回[]
  const res = []  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (Array.isArray(this[i])) {  // 如果需要扁平化的元素是数组，那么就将数组的元素向前移动一位
      if (depth === 1) {  // 如果需要扁平化的深度为1，那么就将数组的元素向前移动一位
        res.push(...this[i])  // 将数组的元素向前移动一位
      } else {  // 如果需要扁平化的深度大于1，那么就将数组的元素向前移动一位
        res.push(...this[i].MyFlat(depth - 1))  // 将数组的元素向前移动一位
      }
    } else {  // 如果需要扁平化的元素不是数组，那么就将数组的元素向前移动一位
      res.push(this[i])  // 将数组的元素向前移动一位
    }
  } 
}
const arr = [1, 2, [3, 4, [5, 6]]]
const res = arr.MyFlat(2)
console.log(res)  // [1, 2, 3, 4, 5, 6]
```

### Array.prototype.flatMap()
* flatMap 方法就是实现的是将数组进行扁平化的方法呐，同时返回一个新的数组
* 实现的是先操作我们的 map 方法，然后再操作我们的 flat 方法
* 主要的使用形式为: flatMap(callback, thisArg)
  * callback: 回调函数
  * thisArg: 回调函数的 this 指向
  * 处理 callback 和 thisArg 都是可选的
* 相当于执行的就是对每一个元素先进性对应底额处理操作，然后进行对应的数组扁平化操作吧
```javascript
Array.prototype.MyFlatMap = function (callback, thisArg) {
  const len = this.length  // 获取数组的长度
  if (len === 0) return []  // 如果数组的长度为0，那么就直接返回[]
  const res = []  // 存储满足条件的所有元素
  for (let i = 0; i < len; i++) {  // 循环遍历数组
    if (Array.isArray(this[i])) {  // 如果需要扁平化的元素是数组，那么就将数组的元素向前移动一位
      res.push(...this[i].MyFlat(1))  // 将数组的元素向前移动一位
    } else {  // 如果需要扁平化的元素不是数组，那么就将数组的元素向前移动一位
      res.push(this[i])  // 将数组的元素向前移动一位
    }
  }
  return res  // 返回满足条件的所有元素 
}
```

```javascript
// 来一个实际的开发例子吧
const obj = {
  name: "juwenzhang",
  age: 20,
  school: "post od university in Chongqing"
}

const [ name, age, school ] = obj  // 解构赋值
/**
 * 上面的表达式是不是十分熟悉，就是 es6 的解构赋值
 * 但是细看的话，这不是数组的解构迈，为什么使用的是数组的解构赋值呐？
 * 因为我们的数组具备了 Symbol.iterator 方法的定义
 * 所以说我们的数组就可以进行使用 for...of 的操作
 * 那么我们的数组的解构赋值的本质就是内部调用了我们的 Symbol.iterator 方法  
 */
// 实现的方法就是在Object 构造函数上定义我们的 Symbol.iterator 方法
Object.prototype[Symbol.iterator] = function () {
  let index = 0  // 存储当前的索引
  const keys = Object.keys(this)  // 获取对象的键名
  const len = keys.length  // 获取对象的长度
  return {  // 返回一个迭代器
    next: function () {  // 迭代器的 next 方法
      if (index < len) {  // 如果当前的索引小于数组的长度，那么就返回对应的元素
        return {  // 返回对应的元素
          value: this[keys[index++]],  // 返回对应的元素
          done: false  // 返回对应的元素
        }
      } else {  // 如果当前的索引大于数组的长度，那么就返回对应的元素
        return {  // 返回对应的元素
          value: undefined,  // 返回对应的元素
          done: true  // 返回对应的元素
        }
      }
    }
  } 
}
```

## JavaScript Set 数据类型
> * set 数据结构是一个无序的但是元素不重复的数据结构吧
> * 对应的还有我们的 WeakSet 吧
### Set.prototype.add()
* add 方法就是实现的是向 set 数据结构中添加元素的方法呐，同时返回 set 数据结构
```javascript
const mySet = new Set()  
mySet.add(1)  // 向 set 数据结构中添加元素
mySet.add(2)  // 向 set 数据结构中添加元素
mySet.add(3)  // 向 set 数据结构中添加元素
mySet.add(4)  // 向 set 数据结构中添加元素
console.log(mySet)  // Set(4) { 1, 2, 3, 4 }
```

### Set.prototype.clear()
* clear 方法就是实现的是清空 set 数据结构中的元素的方法呐，同时返回 set 数据结构
```javascript
const mySet = new Set()  // 创建一个 set 数据结构
mySet.add(1)  // 向 set 数据结构中添加元素
mySet.add(2)  // 向 set 数据结构中添加元素
mySet.add(3)  // 向 set 数据结构中添加元素
mySet.add(4)  // 向 set 数据结构中添加元素
mySet.clear()  // 清空 set 数据结构中的元素
console.log(mySet)  // Set(0) {}
```

### Set.prototype.delete()
* delete 方法就是实现的是删除 set 数据结构中的元素的方法呐，同时返回 set 数据结构
```javascript
const mySet = new Set()  // 创建一个 set 数据结构
mySet.add(1)  // 向 set 数据结构中添加元素
mySet.add(2)  // 向 set 数据结构中添加元素
mySet.add(3)  // 向 set 数据结构中添加元素
mySet.add(4)  // 向 set 数据结构中添加元素
mySet.delete(1)  // 删除 set 数据结构中的元素
console.log(mySet)  // Set(3) { 2, 3, 4 }
```

### Set.prototype.has()
* has 方法就是实现的是判断 set 数据结构中是否包含指定元素的方法呐，同时返回 boolean 值
```javascript
const mySet = new Set()  // 创建一个 set 数据结构
mySet.add(1)  // 向 set 数据结构中添加元素
mySet.add(2)  // 向 set 数据结构中添加元素
mySet.add(3)  // 向 set 数据结构中添加元素
mySet.add(4)  // 向 set 数据结构中添加元素
console.log(mySet.has(1))  // true
console.log(mySet.has(5))  // false
```

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