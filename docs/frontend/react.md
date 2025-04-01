# React 文档
> https://github.com/juwenzhang/byte_react/

## react的理解，以及其具备特性
### react 是什么
* react是一个JS库，提供了UI层面的解决方案，单向数据流的组件化开发的前端库
* 组件之间可以进行相互通信和相互嵌套实现构成我们的页面吧
```javascript
// 定义一个类组件
class HelloWorld extends React.PureCmponent {
    constructor(props) {
        super()
        this.state = {}
    }
    render() {
        return (
            <>
                <div>hello world</div>
            </>
        )
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("app"))
```

### react 特性
* react开发主要使用了我们的 jsx 的语法
* react中进行开发的时候需要遵循单向数据流的管理
* react中使用了虚拟DOM，是react实现性能优化的一个方式吧，主要是使用的是diff算法，
  * 将需要进行更新的内容diff出来，然后才是进行的patch渲染更新界面
* react是一个声明式编程
* react使用组件化的开发模式

### react 声明式编程
* 声明式编程和命令式编程是对应，都是开发中主要使用的一种编程规范
  * 声明式编程: 关注点是我们需要做什么，而不是一件事情如何做，也就是说我们需要根据逻辑的计算来声明需要显示的组件
  * 命令式编程: 主要的关注点是实现的业务逻辑步骤，关注一件事情如何做
```javascript
// 命令式编程
// 创建地图
const map = new Map.map(document.getElementById("map"), {
    zoom: 4,
    center: {lat, lng}
})
// 创建标记
const marker = new Map.marker({
    position: {lat, lng}
})
// 标记在地图上添加标记
marker.setMap(map)
```
```javascript
// 声明式编程
<Map>
    <Marker></Marker>
</Map>
```

### react Component
* 就是在我们现在的组件化的开发中，我们页面中呈现出来的任何东西都是一个一个的组件吧
* 该组件可以是类组件也可以是函数式组件吧
  * 类组件具备状态的，当但是我们的函数式组件是无状态的组件吧
```javascript
// 定义函数式组件，内部的返回值就是需要渲染到页面中的内容
import { Memo } from "react"

const funcComponent = Memo(() => {
    return (
        <>
            this is functional component
        </>
    )
})
```
```javascript
// 定义类组件，内部需要继承React.PureComponent，然后通过render方法返回需要渲染到页面中的内容
// this.state 中就是定义一些关于组件的具备状态的属性吧
class ClassComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <>
                { this.state }
            </>
        )
    }
}
```
* 组件开发的好处: 可以实现我们的多次复用，方便代码的管理

### react 优势
* react 性能高效: 
  * react使用的是DOM，从而减少了对原生DOM之间的交互次数，所以react性能比原生DOM性能高
  * 具体实现的话是 react 内部的一套 diff 算法，通过 diff 算法实现前后变化的比对，然后进行更新patch需要变化了的部分，从而达到性能优化的效果
* react 编写代码十分灵活
  * react 可以和很多其他社区的框架进行开发中的自由结合实现使用吧
* react 跨浏览器的兼容
  * 主要是因为实现使用了我们的虚拟DOM，所以说我们的react项目代码可以在 IOS | Android | Windows | Mac 等等这些浏览器中
* react 声明式设计
  * 通过组件的开发思想，极大的提高了开发效率，只专注于呈现内容，对内部的具体逻辑放置于后运行考虑
* react 单向数据流原则
  * 就是对数据的管理方案吧，更加安全，更加的迅速

## react 类组件中state和props