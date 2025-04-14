# algorithm 文档

## algorithm 数据结构是什么呐？？🤔🤔
* 实际上现在的开发中基本上都是进行的是对我们的数据的增删改查吧，任何的数据都是通过我们的数据结构进行统一管理起来的呐
* 常见的数据结构含有
  * 数组 - `Array`
  * 栈 - `Stack`
  * 链表 - `LinkedList`
  * 图 - `Graph`
  * 散列表 - `HashTable`
  * 队列 - `Queue`
  * 树 - `Tree`
  * 堆 - `Heap`

## algorithm 栈结构
* 栈是一种特殊的线性表，它只允许在表的一端进行插入和删除操作，我们常说的栈就是这种数据结构，先进后出的特性吧
* 栈结构的话是可以通过我们的数组或者链表来实现的呐 `last in first out`

### 程序是如何进行执行的呐？？？
* 我们的程序的执行的话就涉及到了我们的栈结构的，其常用的称呼就是`函数调用栈`吧
* 来个具体的例子吧
  * A函数 中调用了 B函数， B函数中调用了 C函数， C函数中调用了 D函数， 那么这个函数调用栈就是 A -> B -> C -> D
  * 然后结合我们的栈结构的特性，那么就是先入栈，后出栈，A 就处于栈底， D 就处于栈顶
  * 那么当执行到 D 函数的时候， D 函数执行完毕之后，就会从栈顶出栈，然后执行 C 函数， 
  * C 函数执行完毕之后，就会从栈顶出栈， 然后执行 B 函数
  * B 函数执行完毕之后，就会从栈顶出栈，然后执行 A 函数
  * A 函数执行完毕之后，就会从栈顶出栈，那么整个函数调用栈就执行完毕了

### 栈的实现
* 实现思路
  * 首先我们的栈的话是可以基于数组或者链表实现的呐
```javascript
function MyStack() {
  this.items = []

  // 压入栈方法
  MyStack.prototype.push = function(ele) {
    this.items.push(ele)
  }

  // 弹出栈方法
  MyStack.prototype.pop = function() {
    return this.items.pop()
  }

  // 查看栈顶元素
  MyStack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }

  // 判断栈是否为空
  MyStack.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  // 获取栈中元素个数
  MyStack.prototype.size = function() {
    return this.items.length
  }

  // toString 方法
  MyStack.prototype.toString = function() {
    let resultString = ""
    for(const i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " "
    }
    return resultString
  }
}
```

### 栈实现十进制转二进制
* 我们来举个例子吧，我们想把十进制的 10 转换成二进制的 1010
* 对于我们来说的话十进制转为二进制就是通过将一个数字进行不断的除以 2 来实现转换的呐
```javascript
function decimalToBinary(decNumber) {
    const remStack = new MyStack();  // get our stack instance

    while(decNumber > 0) {
        // get the remainder and save it into our stack
        remStack.push(decNumber % 2);
        // update the decNumber
        decNumber = Math.floor(decNumber / 2);
    }

    // get our result, by popping the stack to get the remainders
    let binaryString = "";
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
```

## algorithm 队列结构
* 队列是一种特殊的线性表，它只允许在表的一端进行插入操作，另一端进行删除操作，我们常说的队列就是这种数据结构，先进先出的特性吧
* 实际的场景的话就含有我们的: `打印队列` 和 `线程队列` 吧
  * 线程队列的话实现的思路就是我们的: 一般一个程序的话为了考虑性能的原因，
  * 这个时候就需要进行的是我们的设置进程中的线程可以运行数的限制吧
  * 这个时候为了让线程进行排队，这个时候就可以使用我们的队列数据结构的吧
  * 先进先出的特性，但是使用队列的时候`一定要决定好我们的那一端是前端，那一端是后端，然后再进行我们的算法实现吧`
* 队列的实现的话还是可以通过我们的数组和链表实现的呐

### 简单实现
```javascript
function MyQueeu() {
  // properties
  this.items = []

  // methods
  // ele enter queue
  MyQueeu.prototype.enQueue = function(ele) {
    this.items.push(ele)
  }

  // delete queue ele
  MyQueeu.prototype.deQueue = function() {
    return this.items.shift()
  }
  
  // get front ele
  MyQueeu.prototype.front = function() {
    return this.items[0]
  }

  // queue isEmpty
  MyQueeu.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  // queue size
  MyQueeu.prototype.size = function() {
    return this.items.length
  }

  // queue toString
  MyQueeu.prototype.toString = function() {
    let resultString = ""
    for(let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " "
    }
    return resultString
  }
}
```

### 使用场景 -- 击鼓传花
```javascript
function passGame(nameList, num) {
    const que = new MyQueeu()  // get our queue instance
    
    for(const name of nameList) {
        que.enQueue(name)  // add name into our queue
    }
    
    while(que.size() > 1) {
        for(let i = 0; i < num - 1; i++) {
            // let this delete ele reinto our queue
            que.enQueue(que.deQueue())
        }
        // delete the ele that equal with num 
        que.deQueue()
    }
    
    // get winner
    const winner = que.deQueue()
    // return winner and its index
    return [winner, nameList.indexOf(winner) + 1]
}

console.log(passGame([11, 22, 33, 44, 55, 66, 77], 3))  // [44, 4]
```

## algorithm 优先级队列
* 我们的普通的队列的话，实现添加元素的时候，是直接添加到的我们的队列的后端，但是优先级队列的话是需要考虑优先级之后再进行加入元素的呐
* 即是说我们的元素进行添加的时候，首先先进行判断优先级，然后根据优先级比较之后进行将元素添加到对应的正确位置吧
* 实际场景
  * 登机顺序，急诊科排号等等都是使用我们的优先级队列来实现的呐

### 简单实现
* 实现的简单原理
  * 需要将我们的元素和其对应的优先级组合在一起
  * 添加元素的时候，将每个元素对应的优先级进行比较后，获取得到对应的正确位置后进行存放
```javascript
function PriorityQueue() {
    // create our priorityQueue ele class
    function QueueElement(ele, priority) {
        this.ele = ele
        this.priority = priority
    }

    // properties
    this.items = []

    // methods
    // ele into PriorityQueue method
    PriorityQueue.prototype.enQueue = function(element, priority) {
        const queueElement = new QueueElement(element, priority)  // create queueElment 

        // is this priorityQueue isEmpty, save ele into our priorityQueue
        if(this.items.length === 0) {
            this.items.push(queueElement)
        } else {
            let added = false  // create our flag to check our queueElement is added or not
            for(let i = 0; i < this.items.length; i++) {
                if(queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)  // insert ele into our priorityQueue
                    added = true
                    break
                }
            }
            // if this queueElement is not added, save it into our priorityQueue where the end
            if(!added) {
                this.items.push(queueElement)
            }
        }
    }

    // delete PriorityQueue ele
    PriorityQueue.prototype.deQueue = function() {
        return this.items.shift()
    }

    // get front ele
    PriorityQueue.prototype.front = function() {
        return this.items[0]
    }

    // PriorityQueue isEmpty
    PriorityQueue.prototype.isEmpty = function() {
        return this.items.length === 0
    }

    // PriorityQueue size
    PriorityQueue.prototype.size = function() {
        return this.items.length
    }

    // PriorityQueue toString
    PriorityQueue.prototype.toString = function() {
        let resultString = ""
        for(let i = 0; i < this.items.length; i++) {
            resultString += this.items[i].element + " " + this.items[i].priority + " "
        }
        return resultString
    }
}
```

## algorithm 链表结构
* 链表和数组是一样的，都是一个线性的数据结构
* 但是呐，数组的内存空间的话是连续的，链表的话就不是连续的存储空间，而是一个断断续续的存储空间吧
* 链表的中的数据的话是通过我们的`指针域和数据域`组合而成的吧，通过指针域实现的将每个元素实现联系起来的呐，从而达到我们线性表结构
  * 数组: `数组的访问元素和修改元素的性能是十分高的，但是插入和删除元素的性能十分低`
  * 链表: `链表的访问元素和修改元素的性能十分的低，但是插入和删除元素的性能十分的高`

## algorithm 单向链表结构
### 单向链表结构的实现
* 实现我们的链表结构的话，我们需要知道的就是数据结构样式，数据结构的话就是我们的 `数据域 + 指针域`
* 核心就是堆基本数据单元的组装吧，然后后续通过方法将我们的数据单元进行连接起来即可
```javascript
function SingleLinkedList() {
  // data ele
  function Node(data) {
    this.data = data
    this.next = null
  }

  // head ptr
  this.head = null
  // linkedList length
  this.length = 0

  // methods
  // append method
  SingleLinkedList.prototype.append = function(ele) {
    let new_node = new Node(ele)
    if (this.head === null) {
      this.head = new_node
    } else {
      let current_node = this.head
      // move to last node
      while(current_node.next) {
        current_node = current_node.next
      }
      current_node.next = new_node
    }
    this.length += 1
  }

  // insert method
  SingleLinkedList.prototype.insert = function(pos, ele) {
    // pos vadicate
    if (pos < 0 || pos > this.length) 
      throw new Error("pos lastofindex....");
    
    const new_node = new Node(ele)

    if (pos === 0) {
      new_node.next = this.head
      this.head = new_node
    } else {
      let index = 1
      let current_node = this.head
      while (index++ < pos) {
        current_node = current_node.next
      }
      new_node.next = current_node.next
      current_node.next = new_node
    }
    this.length += 1
  }

  // get method
  SingleLinkedList.prototype.get = function(pos) {
    if (pos < 0 || pos >= this.length) 
      throw new Error("pos lastofindex....");
    
    let current_node = this.head
    let index = 0
    while(index++ < pos) {
      current_node = current_node.next
    }
    return current_node
  }

  // indexOf method
  SingleLinkedList.prototype.indexOf = function(data) {
    let current_node = this.head
    let index = 0

    while(current_node) {
      if(current_node.data === data) {
        return index
      }
      current_node = current_node.next
      index += 1
    }
    return -1
  }

  // update method
  SingleLinkedList.prototype.update = function(pos, ele) {
    if (pos < 0 || pos >= this.length) 
      throw new Error("pos lastofindex....");

    let current_node = this.head
    let index = 0
    while(index++ < pos) {
      current_node = current_node.next
    }
    current_node.data = ele
  }

  // removeAt method
  SingleLinkedList.prototype.removeAt = function(pos) {
    if (pos < 0 || pos >= this.length) 
      throw new Error("pos lastofindex....");

    let pre_node = this.head
    if(pos === 0) {
      this.head = this.head.next
      return
    }
    let index = 1
    while(index++ < pos) {
      pre_node = pre_node.next
    }
    let del_node = pre_node.next
    pre_node = pre_node.next.next
    del_node = null
    this.length -= 1
  }

  // remove method
  SingleLinkedList.prototype.remove = function(ele) {
    this.removeAt(this.indexOf(ele))
  } 

  // isEmpty method
  SingleLinkedList.prototype.isEmpty = function() {
    return this.length === 0
  }

  // size method
  SingleLinkedList.prototype.size = function() {
    return this.length
  }

  // toString method
  SingleLinkedList.prototype.toString = function() {
    let current_node = this.head
    let listString = ""

    while(current_node) {
      listString += current_node.data.toString() + " "
      current_node = current_node.next
    }
    return listString
  }
}
```

## algorithm 双向链表结构
* 单向链表只能从我们的头指针遍历到尾部
* 但是我们的双向链表可以实现的是我们的双向的遍历吧，双向链表的数据结构为:
  * `pre指针 + data域 + next指针`
* 对于我们的编程语言来说，实现我们的数据结构和算法的话，最主要的就是构建出我们自身所需要的结构类型吧
  * `比如说我们的很多语言中并没有内置的数据结构，只有一个数组结构罢了，这个时候就需要使用我们的自定义数据结构来实现吧`
* 双向链表的缺点
  * 占用的内存空间更大以及实现难度更大

### 双向链表的实现
```javascript
function DoubleLinkedList() {
  // ele struct
  function Node(data) {
    this.data = data
    this.pre = null
    this.next = null
  }

  // pproperties
  this.head = null
  this.tail = null
  this.length = 0

  // methods
  DoubleLinkedList.prototype.append = function(data) {
    let new_node = new Node(data)
    if(this.length === 0) {
      this.head = new_node
    } else {
      let current_node = this.head
      while(current_node.next) {
        current_node = current_node.next
      }
      current_node.next = new_node
      new_node.pre = current_node
    }
    this.tail = new_node
    this.length += 1
  }

  DoubleLinkedList.prototype.insert = function(pos, data) {
    if(pos < 0 || pos > this.length) 
      throw new Error("index lastofIndexRange....");

    let new_node = new Node(data)

    if(this.length === 0) {
      this.head = new_node
      this.tail = new_node
    } else {
      if (pos === 0) {
        this.head.pre = new_node
        new_node.next = this.head
        this.head = new_node
      } else if(pos === this.length) {
        new_node.pre = this.tail
        this.tail.next = new_node
        this.tail = new_node
      } else {
        let current_node = this.head
        let index = 0
        while(index++ < pos) {
          current_node = current_node.next
        }
        new_node.next = current_node
        new_node.pre = current_node.pre
        current_node.pre.next = new_node
        current_node.pre = new_node
      }
    }
    this.length += 1
  }

  DoubleLinkedList.prototype.get = function(pos) {
    if(pos < 0 || pos >= this.length) 
      throw new Error("index lastofIndexRange....");    
    let current_node = this.head
    let index = 0
    while(index++ < pos) {
      current_node = current_node.next
    }
    return current_node.data
  }

  DoubleLinkedList.prototype.indexOf = function(data) {
    let index = 0
    let current_node = this.head
    while (current_node) {
      if (current_node.data === data) return index
      current_node = current_node.next
      index += 1
    }
    return -1
  }

  DoubleLinkedList.prototype.update = function(pos, new_data) {
    if(pos < 0 || pos >= this.length) 
      throw new Error("index lastofIndexRange....");  
    let index = 0
    let current_node = this.head
    while (index++ < pos) {
      current_node = current_node.next
    }
    current_node.data = new_data
  }

  DoubleLinkedList.prototype.removeAt = function(pos) {
    if(pos < 0 || pos >= this.length) 
      throw new Error("index lastofIndexRange....");  
    if (this.length === 1) {
      this.head.pre = null
      this.head.next = null
      this.head = null
      this.tail = null
    } else {
      if (pos === 0) {
        let del_node = this.head
        this.head.next.pre = null
        this.head = this.head.next
        del_node.next = null
        del_node.pre = null
      } else if (pos === this.length - 1) {
        this.tail.pre,next = null
        this.tail = this.tail.pre
      } else {
        let index = 0
        let current_node = this.head
        while (index++ < pos) {
          current_node = current_node.next
        }
        current_node.pre.next = current_node.next
        current_node.next.pre = current_node.pre
        current_node.pre = null
        current_node.next = null
      }
    }
    this.length -= 1
  }

  DoubleLinkedList.prototype.remove = function(data) {
    this.removeAt(this.indexOf(data))
  }

  DoubleLinkedList.prototype.isEmpty = function() {
    return this.length === 0
  }

  DoubleLinkedList.prototype.size = function() {
    return this.length
  }

  DoubleLinkedList.prototype.toString = function(isBack = true) {
    return isBack ? this.backwardString() : this.forwardString()
  }

  DoubleLinkedList.prototype.forwardString = function() {
    let current_node = this.tail
    let resultString = ""
    while(current_node) {
      resultString += current_node.data.toString() + " "
      current_node = current_node.pre
    }
    return resultString
  }

  DoubleLinkedList.prototype.backwardString = function() {
    let current_node = this.head
    let resultString = ""
    while(current_node) {
      resultString += current_node.data.toString() + " "
      current_node = current_node.next
    }
    return resultString
  }
}
```

## algorithm 集合结构
* 集合最常见的就是我们的哈希表吧
  * 集合的特点，`内部的元素无须且不重复`
  * 就是一个特殊的数组吧，js 里面对应的就是我们的 `Set 和 WeakSet`

### 集合简单实现
```javascript
function MySet() {
  // properties
  this.items = {}

  // methods
  MySet.prototype.add = function(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }

  MySet.prototype.has = function(value) {
    return this.items.hasOwnProperty(value)
  }

  MySet.prototype.remove = function(value) {
    if (!this.has(value)) return false
    delete this.items[value]
  }

  MySet.prototype.clear = function() {
    for(let key of Object.keys(this.items)) {
      delete this.items[key]
    }
  }

  MySet.prototype.size = function() {
    return Object.keys(this.items).length
  }

  MySet.prototype.values = function() {
    return Object.keys(this.items)
  }
}
```

### 集合的并集
* 集合并集就是返回一个包含所有集合的新的元素吧

![img20](/img_20.png)
```javascript
function getUnionSet(set, newSet) {
  const unionSet = new Set()

  for(let value of set) {
    unionSet.add(value)
  }
  for(let value of newSet) {
    if (unionSet.has(value)) continue
    else unionSet.add(value)
  }
  return unionSet
}
```

### 集合的交集
* 集合的交集就是返回多个集合共同具备的元素吧

![img21](/img_21.png)
```javascript
function getInterSectionSet(set, otherSet) {
  const new_set = new Set()
  for (const val of set) {
      // core 
    if (otherSet.has(val)) 
      new_set.add(val)
  }
  return new_set
}
```

### 集合的差集
* 集合的差集就是返回一个集合，该集合包含第一个集合，但是第二个集合没有的元素

![img22](/img_22.png)
```javascript
function getDifferenceSet(set, otherSet) {
    const new_set = new Set()
    for (const val of set) {
        // core
        if (!otherSet.has(val)) 
            new_set.add(val)
    }
    return new_set
}
```


### 集合的子集
* 集合的子集就是判断一个集合是否是另一个集合的子集

![img23](/img_23.png)
```javascript
function isSubset(set, otherSet) {
    for (const val of set) {
        // core
        if (!otherSet.has(val))
            return false
    }
    return true
}
```

## algorithm 哈希表结构
* 在不同的编程语言对其的称呼有一定的不同，但是本质的话是通过键值对的形式进行存储的我们的数据单元的呐
* JS 里面我们使用 `Map` 来实现哈希表，python 中就是 `dict` 字典，Java 中就是 `HashMap` 和 `TreeMap`
* 为什么需要了解哈希表呐？？
  * 哈希表本身提供了非常快的`插入-删除-查找`操作
  * 无论数据规模有多大，对于哈希表的`插入和删除`操作的时间复杂度都是常数级的
  * 哈希表的速度比树的速度还快，可以实现瞬间查找得到我们想要的元素吧
* 哈希表到底是什么呐？？
  * 哈希表的实现基于数组，但是在哈希表的实现过程中使用了哈希函数，通过`哈希函数`实现获取得到我们的 `HashCode`
  * 这个就是我们的 HashTable 的独特之处了吧，通过我们的 hashCode 实现迅速的获取得到我们需要查找的元素吧

### 认识哈希化
* 哈希化就是实现的是我们的将大数字转化为数组范围内的一种过程
* 哈希函数: 就是实现的是将单词转化为大数字，然后实现对应的大数字哈希化的操作，这个函数就是我们的哈希函数
* 哈希表: 就是实现的我们的哈希化，然后通过哈希化的结果，实现我们的哈希表

### 认识哈希冲突
* 也就是在我们的哈希化的过程中可能导致的是具备我们的哈希函数得出的数字是冲突的，这个时候就需要进行对应的解决
* 解决方案就包含两种
  * `链地址法`
  * `开放寻址法`

### 链地址法
* 也就是实现的是在我们的哈希表对应的位置上进行我们的使用链表使用我们的元素的链接起来即可吧
* 也就是说我们的哈希表中每个位置对应的是我们的一个`数组`或者说是`链表`吧
  * 选择链表更加方便吧，因为我们地插入含有我们的插入`前端`或者说`后端`吧
    * 对于链表删除和插入是十分方便的呐
    * 对于数组的话，我们的查找元素以及更新元素是更加方便的吧

### 开放寻址法
* 就是实现的是我们的那里有缺的就吧元素往那个位置插入即可吧
* 在实现查找空位的时候，我们可以使用的方法为:
  * `线性探测`
    * 就是通过我们的步长为1，一点点的来寻找我们的空白单元的呐，查找过程中，一定遇到了空白位置直接停止查找的呐
    * 删除的时候用 -1 来代替吧
  * `二次探测`
  * `再哈希法`

### 哈希函数的指标
> 霍纳法则
* 实现快速的计算
  * 快速的哈希函数的话主要是想解决的是我们的快速得到对应的 hashCode 即可吧
* 实现均匀的分布
  * 主要是实现的是对我们的hashCode进行压缩，然后实现我们的哈希表，哈希表实现对应的均匀分布吧

### 实现哈希函数
* 主要是通过的是我们的字符串的 charCodeAt 来实现的呐，该方法主要是获取字符的unicode编码的呐
* 然后通过我们的 37 来做为我们的压缩哈希码的哈希函数
```javascript
// 实现hash函数
// ==> hashCode ==> 压缩hashCode ==> 映射到数组范围
/**
 * 实现hash函数
 * @param str 需要进行哈希化的字符串
 * @param max 长度
 */
function hashFunc(str, max) {
    let hashCode = 0
    // 霍纳算法实现计算hashCode的值
    for (let i = 0; i < str.length; i++) {
        hashCode = 37/*一定是一个质数，一般是这个数字吧*/ * hashCode + str.charCodeAt(i)  //或者 charCodeAt(i)的unicode编码
    }
    // 压缩hashCode
    let index = hashCode % max
    return index
}
```

### 实现哈希表
* 实现的基本思路为:
  * 属性的定义
    * `this.storage` 是用于实现存储的数组
    * `this.count` 是用于实现哈希表存储的元素个数
    * `this.limit` 是用于实现哈希表存储的数组的长度
  * 实例方法的定义
    * `HashFunc(str, size)` 是用于实现哈希化的方法,内部使用霍纳法则实现吧
    * `put(key, value)` 该方法中具备了对应的插入和更新操作
    * `get(key)` 该方法中具备了对应的查找操作
    * `remove(key)` 该方法中具备了对应的删除操作
    * `resize(newLimit)` 该方法中具备了对应的哈希表扩容操作
* 一定要确保我们的数字为质数，这样我们的哈希化过程，就会更加均匀
```javascript
// 实现hashtable
function HashTable() {
  // define property
  this.storage = [] // 存储
  this.count = 0 // 长度，后面根据我们的装载因子来判断是否需要进行扩容，装载因子一般是为0.75吧
  this.limit = 7 // 长度
  this.loadFactor = 0.75 // 装载因子，后面根据我们的装载因子来判断是否需要进行扩容，装载因子一般是为0.75吧

  // define method
  /**
   * 实现hashFunc函数，实现对应的生成hashCode 的值吧
   * @param {string} str
   * @param {number} size
   * @returns {number}
   */
  HashTable.prototype.HashFunc = function (str, size) {
    let hashCode = 0
    // 1. 霍纳法则，计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    return hashCode % size
  }

  /**
   * 实现put方法，添加元素
   * @param {string} key
   * @param {string} value
   */
  HashTable.prototype.put = function (key, value) {
    // 基本的结构为: [[[key, value], [key, value]], [[key, value], [key, value]]]
    let index = this.HashFunc(key, this.limit)  // 生成对应的索引
    let bucket = this.storage[index] // 取出对应的bucket
    if (bucket === undefined) {  // 如果bucket不存在，就创建一个bucket
      bucket = []
      this.storage[index] = bucket
    }
    // 1. 判断是新增还是修改原来的值
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i] // 取出对应的元组
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    // 2. 进行新增元素即可
    bucket.push([key, value])
    this.count += 1
    // 3. 判断是否需要扩容
    if (this.count > this.limit * this.loadFactor) {
      this.expend() // 扩容
    }
  }

  /**
   * 实现get方法，获取元素
   * @param {string} key
   * @returns
   */
  HashTable.prototype.get = function (key) {
    let index = this.HashFunc(key, this.limit) // 获取对应的index
    let bucket = this.storage[index] // 获取对应的bucket
    if (bucket === undefined) return null // 如果bucket不存在，就返回null
    // 1. 遍历bucket，查找是否有对应的key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i] // 取出对应的元组
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null // 如果没有找到，就返回null
  }

  /**
   * 实现remove方法，删除元素
   * @param {string} key
   * @returns {string|null}
   */
  HashTable.prototype.remove = function (key) {
    let index = this.HashFunc(key, this.limit) // 获取对应的index
    let bucket = this.storage[index] // 获取对应的bucket
    if (bucket === undefined) return null // 如果bucket不存在，就返回null
    // 1. 遍历bucket，查找是否有对应的key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i] // 取出对应的元组
      if (tuple[0] === key) {
        bucket.splice(i, 1) // 删除对应的元组
        this.count -= 1 // 长度减1
        // 2. 判断是否需要缩容
        if (this.count < this.limit * (1 - this.loadFactor)) {
          this.shrink() // 缩容
        }
        return `成功删除${tuple}` // 返回对应的value
      }
    }
    return null // 如果没有找到，就返回null
  }

  /**
   * isEmpty 判断hashTable是否为空
   * @returns {boolean}
   */
  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  /**
   * size 获取hashTable的长度
   * @returns {number}
   */
  HashTable.prototype.size = function () {
    return this.count
  }

  /**
   * resize 重新调整hashTable的长度
   * @param {number} newLimit
   */
  HashTable.prototype.resize = function (newLimit) {
    // 1. 保存旧的storage
    let oldStorage = this.storage
    // 2. 重置所有的属性
    this.storage = []
    this.count = 0
    this.limit = newLimit
    // 3. 遍历oldStorage中的所有bucket
    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i] // 取出对应的bucket
      if (bucket === undefined) continue // 如果bucket不存在，就跳过
      // 4. 遍历bucket，取出所有的元组
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j] // 取出对应的元组
        this.put(tuple[0], tuple[1]) // 重新插入
      }
    }
  }

  /**
   * expend 扩容
   */
  HashTable.prototype.expend = function () {
    // 确保是质数
    let newLimit = Math.floor(this.limit * this.loadFactor + this.limit)
    while (!this.isPrime(newLimit)) {
      newLimit += 1 // 一直找到质数为止
    }
    this.resize(newLimit)
  }

  /**
   * shrink 缩容
   */
  HashTable.prototype.shrink = function () {
    let newLimit = Math.floor(this.limit * this.loadFactor)
    while (!this.isPrime(newLimit)) {
      newLimit -= 1 // 一直找到质数为止 
    }
    this.resize(newLimit)
  }

  /**
   * 判断是不是质数
   * @param {number} num
   * @returns {boolean}
   */
  HashTable.prototype.isPrime = function (num) {
    let temp = parseInt(Math.sqrt(num)) // 取平方根
    for (let i = 2; i <= temp; i++) { // 遍历
      if (num % i === 0) { // 如果能被整除，就不是质数
        return false
      }
    }
    return true // 如果不能被整除，就是质数    
  }
}
```

## algorithm 树结构
* 树结构的话一般都是包含我们的根的呐
  * 同时在根的基础上都是会分出一个一个的分支吧
  * 类似我们的一个公司的组织架构吧，就类似于我们的一个树结构吧

### 树结构优点
* 树结构的话也是一个用来保存我们数据的一种可选的方式吧
* 利用树结构的话，可以实现的是: 我们可以很方便的去查找我们的数据
  * 树结构的空间利用率是十分高的呐
  * 同时树结构可以按照特定的排序来实现存储我们的元素吧

### 树结构的术语
* `树 tree` 由`n>=0`的节点构成的有限集合
* `根 root` 是一个特殊的节点，没有父节点
* `子树 subtree` 是节点的一个分支
* `节点的度 degree` 是节点的子树数目
* `叶子节点 leaf node` 是没有子树的节点
* `高度 height` 是从根到叶子的最长路径的节点数
* `路径 path` 是从根节点到叶子节点的节点序列
* `路径长度 path length` 根节点到叶子节点的路径长度，`边的个数，不是节点的个数`
* `满树 full tree` 是所有节点的度都为`k`的树
* `二叉树 binary tree` 是由节点组成的树，其中每个节点最多有`2`个子节点
* `满二叉树 full binary tree` 是由节点组成的树，其中每个节点最多有`2`个子节点，并且所有的叶子节点都在同一层
* `父节点  parent node` 
* `子节点 child node`
* `兄弟节点 sibling node`
* `节点层次 level`

## algorithm 二叉树
* 就是每个节点后最多只有两个子节点吧，这个就是我们的二叉树了吧
* 二叉树定义
  * 二叉树可以为空，也就是没有任何的节点
  * 若不为空，二叉树只能你每个子节点最多两个子节点吧
* 二叉树的五种状态:
  * `空节点状态`
  * `单节点状态`
  * `只具备左子节点状态`
  * `只具备右子节点状态`
  * `具备左右子节点状态`

![](/img_37.png)

### 二叉树特性
* 每一层的子节点个数推导
  * 根节点的子节点: 第一层的子节点个数，也就是最多 `2` 个
  * 第二层的子节点个数: 第一层的子节点个数 * 2，也就是最多 `4` 个
  * 第三层的子节点个数: 第二层的子节点个数 * 2，也就是最多 `8` 个 
  * ……依次类推

![](/img_38.png)

### 完美二叉树 Perfect Binary Tree
* 完美二叉树就是二叉树的一种，它的特点是:
  * 每一个节点的子节点都是`2`个，且层之间是不缺失的

![](/img_39.png)

### 完全二叉树 Complete Binary Tree
* 完全二叉树就是二叉树的一种，它的特点是:
  * 也就是还是保持的是二叉树的特性，但是最后一层有缺失存在吧
  * `除了我们的叶子节点之外，其他的节点都是满的`

![](/img_40.png)

### 二叉树使用方案
* 使用数组来实现
  * 最终的实现方案还是通过我们的完美二叉树的补充来实现吧
  * 缺失的部分进行对应补充即可，但是具备空间的浪费

![](/img_41.png)

* 使用链表来实现
  * 这样的方式是最常见的吧
  * 同时大量的节省了我们的很多的空间占用吧

![](/img_42.png)

## algorithm 二叉搜索树
* 二叉搜索树 BST `binary search tree`

### 二叉搜索树特点
* 可以为空
* 如果不为空的话，性质为:
  * 非空左子树所有键值`小于`其根节点的键值
  * 非空右子树所有键值`大于`其根节点的键值
  * 左、右子树也分别为二叉搜索树

---
---
> * 举个例子
> 
> ![](/img_43.png)
> 
> * 如图所示，我们的查找过程只需要在节点之间进行比较3次即可寻找到我们的需要寻找的元素吧
> * 如果说我们使用单纯链表的数据结构，那么我们查找的复杂度就变成了`O(n)`
---
---

### 二叉搜索树实现