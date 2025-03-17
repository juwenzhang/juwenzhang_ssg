# Design Mode 文档

## 设计模型总览🤔🤔
* `工厂模式`
  * 工厂角色: 负责实现创建所有实例的内部逻辑
  * 抽象产品: 负责创建所有实例的父类，负责所有实例的共有的公共接口吧
  * 具体产品: 是创建目标，所有的创建对象都充当这个具体类的实例吧
* `单例模式`
  * 就是保证的是一个类仅有一个实例，并且提供了一个访问它的全局访问点
  * 实现的方法就是先进行判断实例是否存在，如果存在就直接进行返回，如果不存在就创建后进行返回，这样就实现确保了一个类只有一个实例实例对象
* `策略模式`
  * 策略类（可变）: 策略类实现封装了具体的算法，并且负责具体的计算历程
  * 环境类（不可变）: 环境类是使用策略类来执行具体算法的，环境类不关心具体算法，只负责把请求委托给策略类
* `代理模式`
  * 代理模式: 为对象提供一个代用品和占位符，以便控制其访问
  * 使用的场景就是我们的图片的懒加载，先用我们的额 loading img 进行对应的占位，然后通过异步方式实现加载图片，等待图片加载好了直接进行替换即可
* `中介者模式`
  * 通过一个中介者对象，其他所有的相关对象都通过该中介者对象实现通信，而不是互相引用，当其中的一个对象发生变化的时候，只需要通知中介者对象即可
  * 通过该模式可以解除对象和对象之间的耦合关系
* `装饰器模式`
  * 在不改变对象自身的基础上，在程序运行期间给对象动态的添加方法
  * 就是在不改变原本的方法的基础之上，进行扩展其他的方法，从而实现最终的解决需求的目的

## 工厂模式（factory pattern）
### 是什么呐？？🤔🤔
* 工厂模式是我们的用来创建对象的一种最常见的设计模式，不暴露对象的具体逻辑，而是将逻辑封装在一个函数中，那么这个函数就是我们的一个工厂
* 工厂模式的出现就是为解决我们的代码的耦合度和代码的重复度的呐，降低调用者因为创建逻辑带来的逻辑错误吧
* 分类
  * `简单工厂模式（Simple Factory）`
  * `工厂方法模式（Factory Method）`
  * `抽象工厂模式（Abstract Factory）`

### 简单工厂模式
* 简单工厂模式也是我们的静态工厂模式，`用一个工厂对象创建同一类对象类的实例吧`
```typescript
function Factory(type: string) {
    function User(type: string, work: string) {
        this.type = type;
        this.work = work;
    }
    
    let work = []
    switch (type) {
        case 'A':
            work = ['work1', 'work2']
            return new User(type, work)
        case 'B':
            work = ['work3', 'work4']
            return new User(type, work)
        default:
            return null
    }
}
let A = new Factory('A')
console.log(A)
let B = new Factory('B')
console.log(B)
```

### 工厂方法模式
* 工厂方法模式也是我们的动态工厂模式，`用一个工厂对象创建同一类对象类的实例吧`
* 和上面的简单工厂是差不多的，但是方法是存放在我们的 `property` 上的
* 工厂方法模式中主要需要解决的问题就是我们的判断 this 是否属于工厂吧
```typescript
function Factory(type: string) {
    if(this instanceof Factory) {
        let a = new this[type]()
        return a
    } else {
        return new Factory(type)
    }
}

Factory.property = {
    A: function() {
        this.type = 'A'
        this.work = ['work1', 'work2']
    },
    B: function() {
        this.type = 'B'
        this.work = ['work3', 'work4']
    },
    C: function() {
        this.type = 'C'
        this.work = ['work5', 'work6']
    }
}

let A = new Factory('A')
console.log(A)
let B = new Factory('B')
console.log(B)
```

### 抽象工厂模式
* 在上面的我们的简单工厂模式和工厂方法模式都是直接生成的实例，但是抽象工厂就有所不同了，抽象工厂就不会直接生成我们的实例吧
* 区别所在的话，上面的两个，工厂方法模式和简单工厂模式都是侧重于生产产品的，但是抽象工厂是侧重于生成工厂的
* 实现抽象方法的四个重要步骤
  * 实现用于创建抽象类的函数
  * 抽象类
  * 具体类
  * 实例化具体类
```typescript
let AbstractFactory = function(subType: string, superType:string) {
    if(typeof AbstractFactory[superType] === 'function') {
        function F() {}
        F.prototype = new AbstractFactory[superType]()
      
        subType.constructor = F
        subType.prototype = new F()
    } else {
        throw new Error('抽象类不存在')
    }
}
```
* 最主要的就是使用的我们的原型链的机制吧，最终的实现效果就是保证我的原型链互不干扰吧
* https://juejin.cn/post/7436788341121105961#heading-3 可以阅读一下吧

## 单例模式（singleton pattern）
### 是什么呐？？🤔🤔
* 创建型模式，提供了一个创建对象的最佳方式，单例模式`保证一个类仅有一个实例，并提供一个访问它的全局访问点`
* 单例模式只会在全局作用域下创建一个实例，然后进行返回，所以这个实例是唯一的，在一个程序中所有地方都是可以进行共享这个实例的

### 实现准则
* 实现的核心就是通过一个变量来标志当前的类已经创建过的对象，如果下次获取得到当前的实例，那么就直接进行返回，而不进行创建
* event-bus 是一个最简单的单例模式吧，思想和单例模式十分的相似
* 开发中我们实现使用的模态框的实现也是使用的单例模式

### 具体实现
```typescript
function Sinfleton(name: string) {
    this.name = name
    this.instance = null
}

Sinfleton.prototype.getName = function() {
    console.log(this.name)
}
Sinfleton.getInstance = function(name: string) {
    if(!this.instance) {
        this.instance = new Sinfleton(name)
    }
    return this.instance
}
```
```typescript
function Sinfleton(name: string) {
    this.name = name
}
Singleton.prototype.getName = function() {
    console.log(this.name)
}
Singleton.getInstance = (function() {
    let instance = null
    return function(name: string) {
        if(!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
```
```typescript
function CreateSingleton(name: string) {
    this.name = name
    this.getName()
}
CreateSingleton.prototype.getName = function() {
    console.log(this.name)
}

const Singleton = (function() {
    let instance = null
    return function(name: string) {
        if(!instance) {
            instance = new CreateSingleton(name)
        }
        return instance
    }
})
```

## 策略模式（strategy pattern）
### 是什么呐？？🤔🤔
* 策略模式就是值得的是定义一系列算法，将他们进行封装起来，目的就是为了实现将算法和算法的使用分离开来的一种代码设计吧
  * 策略类: 策略类封装了具体的算法，并负责具体的计算过程
  * 环境类: 环境类是客户端调用者，它决定使用哪个策略类，并且对客户进行了隔离

### if 实现
```typescript
let calculate = function(price: number, type: string) {
    if(type === 'normal') {
        return price
    }
    if(type === 'reward') {
        return price * 0.8
    }
    if(type === 'vip') {
        return price * 0.6
    }
}
```

### obj 实现
```typescript
// 策略对象
import {register} from "node:module";

const obj = {
  normal: function (price: number) {
    return price
  },
  reward: function (price: number) {
    return price * 0.8
  },
  vip: function (price: number) {
    return price * 0.6
  }
}

// 环境类
const registerForm = document.getElementById('registerForm')
registerForm.onsubmit = function (e) {
    e.preventDefault()
    if (registerForm.userName.value === '') {
        alert('用户名不能为空')
        return
    }
    if (registerForm.password.value === '') {
        alert('密码不能为空')
        return
    }
    if (registerForm.password.value !== registerForm.password2.value) {
        alert('两次密码不一致')
        return
    }
}
```
```typescript
const streategy = {
    isNotEmpty<T>(object: T, message?: string) {
        if(object === '') {
            throw new Error(message || '不能为空')
        }
    },
    isMobile<T>(object: T, message?: string) {
        if(!/^1[3-9][0-9]{9}$/.test(object)) {
            throw new Error(message || '手机号码格式不正确')
        }
    },
    isEmail<T>(object: T, message?: string) {
        if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(object)) {
            throw new Error(message || '邮箱格式不正确')
        }
    },
    isIdCard<T>(object: T, message?: string) {
        if(!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(object)) {
            throw new Error(message || '身份证格式不正确')
        }
    },
    isNumber<T>(object: T, message?: string) {
        if(!/^[0-9]+$/.test(object)) {
            throw new Error(message || '数字格式不正确')
        }
    },
    isDate<T>(object: T, message?: string) {
        if(!/^(\d{4})-(\d{2})-(\d{2})$/.test(object)) {
            throw new Error(message || '日期格式不正确')
        }
    }
}
```

### 应用场景
* 策略模式使用了组合，委托等技术和思想，有效的避免了很多的 if 语句的嵌套吧
* 策略模式遵循的原则是开发-封闭原则，是代码更加容易理解和扩展吧
* 策略模式大大提高了代码的复用率

## 观察者模式（observe pattern）
### 是什么呐？？🤔🤔
* 观察者模式就是我们的对象间的一对一的依赖关系吧，当一个对象的状态发生变化的时候，所有的依赖于它的对象都会得到通知，并且自动更新
* 观察者模式属于一种行为型模式吧，行为型模式关注的是对象之间的通信吧，观察者模式就是观察者和被观察者之间的通信吧

### 被观察者的实现
```typescript
class Subject {
    constructor() {
        this.observerlist = []
    }
    addObserver(observer: Observer) {
        this.observerlist.push(observer)
    }
    removeObserver(observer: Observer) {
        this.observerlist.forEach((item, index) => {
            if(item === observer) {
                this.observerlist.splice(index, 1)
            }
        })
    }
    notify(message: string) {
        this.observerlist.forEach((item) => {
            item.notify(message)
        })
    }
}
```

### 观察者的实现
```typescript
class Observer {
    constructor(name: string, subject: Subject) { 
        this.name = name
        if (subject) {
            subject.addObserver(this)
        }
    }
    notify(message: string) {
        console.log(`${this.name}收到通知：${message}`)
    }
}
```

### 具体使用
```typescript
const subject = new Subject()
const observer1 = new Observer('juwenzhang', subject)
const observer2 = new Observer('76433', subject)

subject.addObserver(observer1)
subject.addObserver(observer2)
subject.notify('hello world * 1')
subject.removeObserver(observer1)
subject.notify('hello world * 2')
```

## 发布订阅模式（publish-subscribe pattern）
### 是什么呐？？🤔🤔
* 发布-订阅模式就是一种消息范式吧，消失的发送者就是发布者的身份，发布者不知道消息的接收者，而消息的接收者不知道发布者的身份

```typescript
// 发布订阅中心
class PubSub {
  constructor() {
    this.messages = {}
    this.listeners = {}
  }

  addPublisher(type: string, content: string) {
    const existContent = this.messages[type]
    if (!existContent) {
      this.messages[type] = []
    }
    this.messages[type].push(content)
  }

  addSubscriber(type: string, listener: Function) {
    const existListener = this.listeners[type]
    if (!existListener) {
      this.listeners[type] = []
    }
    this.listeners[type].push(listener)
  }

  notify(type: string) {
    const messages = this.messages[type]
    const subscribers = this.listeners[type] || []
    subscribers.forEach((subscriber: string, index: number) => {
      subscriber[index](content)
    })
  }
}

// 发布者
class Publisher {
    constructor(name: string, context: PubSub) {
        this.name = name
        this.context = context
    }
    
    publish(type: string, content: string) {
        this.context.addPublisher(type, content)
    }
}

// 订阅者
class Subcriber {
    constructor(name: string, context: PubSub) {
        this.name = name
        this.context = context
    }
    subscribe(type: string, listener: Function) {
        this.context.addSubscriber(type, listener)
    }
}
```

![img18](/img_18.png)

## 代理模式（proxy pattern）