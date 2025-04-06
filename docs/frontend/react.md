# React 文档
> https://github.com/juwenzhang/byte_react/

## React 是什么
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

## React 特性
* react开发主要使用了我们的 jsx 的语法
* react中进行开发的时候需要遵循单向数据流的管理
* react中使用了虚拟DOM，是react实现性能优化的一个方式吧，主要是使用的是diff算法，
  * 将需要进行更新的内容diff出来，然后才是进行的patch渲染更新界面
* react是一个声明式编程
* react使用组件化的开发模式

## React 声明式编程
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

## React Component
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

## React 优势
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

## React state 是什么
* state 是我们的组件中的会被进行更新的数据，数据的变化会引起我们的视图的重新渲染把
  * 通过 state 定义页面中可能发生变化的数据
  * 然后在类组件中进行使用 setState 方法进行更新
  * state 进行变化后就实现了页面视图的更新
```typescript jsx
class Button extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <button
                    onClick={() => this.handleClick()}
                >
                  {this.state.count}
                </button>
            </>
        )
    }
}
```

## React props 是什么呐
* props 就是进行组件中的接收父组件接收数据的一个参数吧，从而实现我们的组件通信
  * 组件通信可以传递的数据含有
    * js 支持的所有的数据类型
    * js 中定义的事件函数
    * react 中定义的其他组件，该方案可以用来作为 react 的插槽的实现吧
  * 注意我们的 props 的改变，我们的视图也会随之更新
    * 注意事项: vue 和 react 都是单向数据流，所以说通过组件通信传递的数据只能在我们的来源地进行对应的修改吧

## React 类组件
```typescript jsx
// todo: React 内部创建组件的过程
const instance = new React.createElement(props)
// todo: render 实现组件的渲染
ReactDOM.render(instance, document.getElementById('root'))


// todo: write our react component
class Button extends React.PureComponent {
    constructor(props) {
        super(props)
        // todo: define our component state
        this.state = {
            content: 'hello world',
        }
    }
    
    // todo: define our component render method
    render() {
        // todo: distribute our component data from this.state
        const { content } = this.state
        return (
            <>
                <div>{ content }</div>
            </>
        )
    }
}
```
> * react 中的类组件的话主要是基于我们的 es6 的 class 的特性来实现的呐
> * 为了保证我们的子类和父类的数据的一致性，这个时候，我们就需要使用 super 方法来实现调用父类中的 constructor 方法
> * super.constructor.call(this, props)

## React 类组件
* 通过使用 es6 的形式实现编写我们的组件，以及该类继承自我们的 `React.Component` 或者说 `React.PureComponent` 类
* 同时每一个类组件中都进行返回我们的一个 render 方法作为视图的渲染函数的，这个就是我们的 React 中的类组件
* 在类组件中我们实现保存了组件相关的数据信息的，所以说也是我们常说的一个 `具备状态的组件`
* state 定义该组件中管理的数据，this.props 获取外部传递的数据
```typescript jsx
import React from 'react'
import ReactDOM from 'react/react-dom'
class Button extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            content: 'hello world',
        }
    }
    
    render() {
        const { content } = this.state
        const { name } = this.props
        return (
            <>
                <div>{ content }-{ name }</div>
            </>
        )
    }
}
const element = <Button name="hello world" />
ReactDOM.render(element, document.getElementById('root'))
```

## React 函数组件
* 就是编写函数的形式实现我们的组件的方式吧，函数式组件是一个 `无状态组件`
* 同时我们的函数式组件是一个没有声明周期概念的组件吧，生命周期的概念只是出现在我们的类组件中的呐
* 函数式组件通过我们的 `props` 来获取我们的外部传递的数据，同时内部的返回值就是视图上展示的效果吧
```typescript jsx
import React from 'react'
import ReactDOM from 'react/react-dom'
function Button(props) {
    return (
        <>
            <div>{ props.name }</div>
        </>
    )
}
```

## React 二者区别
* `编写方式的区别`:
  * 一个使用的是 class 的样式进行的编写，一个是使用的是 function 的形式进行的编写
* `状态管理的区别`
  * 在我们的 hooks 出现之前，我们的函数式组件是无法实现状态管理的，但是 hooks 出现后，可以通过我们的 useState 来实现我们的状态管理
  * class 组件的话是一直以来都可以实现保管状态的呐，通过 this.state 以及通过 setState 来进行状态的更新
* `生命周期的区别`
  * 函数组件中并没有生命周期具体实现，但是呐我们在进行说一个组件经历的流程的时候可以认为组件具备生命周期的
    * 函数式组件中如果想要实现模拟生命周期的话，我们可以使用 `useEffect` 来进行模拟生命周期的
  * 类组件的话就具备喔们的生命周期了，可以通过内部对应的生命周期回调方法的定义，实现一些自动化的操作
    * 生命周期函数都是来自于我们的 `React.Component` 类中的生命周期函数，我们只是对方法进行重写罢了
  * **`useEffect` 等价于我们的 `componentDidMount` 生命周期钩子吧**
  * **`useEffect` 返回的函数，可以理解为 `componentWillUnmount` 生命周期钩子** 
* `调用方式的区别`
  * 函数式组件在使用的时候，直接调用对应的函数即可
  * 类组件在使用的时候，表观上是和函数式组件一样的，但是实际上内部是先通过实例化，然后调用内部的 render 实例方法来实现的呐
* `获取渲染的值区别`
  * 类组件中通过 `this.state` 或者说 `this.props` 中获取我们视图想要渲染的值的
  * 函数式组件中通过 `props` `useState` 中获取我们视图想要渲染的值的

## React 受控组件
* 受控组件就是受到我们的代码控制的组件，组件的状态全程响应外部数据
* 通过使用 `value` `onChange` 来进行实现，和 vue 的 v-model 十分相似
```typescript jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'hello world',
    }
  }

  render() {
    return (
      <>
        <input
          value={this.state.content}
          onChange={(value) => this.setState({content: value})}
        />
      </>      
    )
  }
}
```
## React 非受控组件
* 非受控组件就是不受我们的代码控制的组件，组件的状态不受外部数据控制，必要的时候，就是通过我们的 ref 实现获取内部的值得呐
```typescript jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleClick() {
        console.log(this.refs.input.value)
    }
    render() {
        return (
            <>
                <input ref="input" defaultValue={'hello world'}/>
                <button onClick={() => this.handleClick()}>获取</button>
            </>  
        )
    }
}
```
* 上面的开发方式很好用，比方说: 
  * 在父组件中实现调用子组件中的定义的一些实例方法的话我们就可以使用对应的 ref 获取得到组件内部的方法进行对应的调用吧
  * 在我们的 vue 中也是可以进行对应的操作的呐，也是通过 ref 来实现操作的，`ref + defineExpose + defineEmit` 开发思路的话是十分的好用的呐

## React 事件机制
* react 事件机制含有那些
  * `事件注册`，`事件合成`，`事件冒泡`，`事件派发`，`合成事件`
  * 合成事件就是实现的是模拟完成的原生的一套 DOM 的事件机制，这个时候我们的浏览器的兼容性问题就是不用怎么考虑的呐
```typescript jsx
// todo: react 合成事件的实现
const button = <MyButton onClick={() => console.log('clicked')}/>

// todo: react 获取原生DOM 事件的方式，就是在合成事件的触发时候传递一个参数，该参数就是原生的 DOM 事件对象
class MyButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)  // todo: 绑定 this 绑定 this 另一种方式: onClick={() => this.handleClick(event)}
    }
    handleClick(event, ...args) {
        console.log(event.nativeEvent, args[0])
        this.props.onClick(event)
        event.stopPropagation()
    }
    render() {
        return (
            <button onClick={this.handleClick(e, 111)}>Click Me</button>
        )
    }
}
```
* 合成事件和原生事件执行顺序
  * 原生事件: 子元素DOM事件监听执行
  * 原生事件: 父元素DOM事件监听执行
  * React合成事件: 子元素合成事件监听执行
  * React合成事件: 父元素合成事件监听执行
  * 原生事件: Document事件监听执行
* 也就是说明了一点
  * React 的所有的事件是先挂载在我们的 document 对象上的
  * 先实现触发真实的DOM事件，再出发React合成事件
  * 最后执行我们的document对象上的事件
* 阻止冒泡行为
  * 阻止合成事件间的冒泡: `event.stopPropagation()`
  * 阻止合成事件和document之间的冒泡: `event.nativeEvent.stopPropagation()`
  * 阻止合成事件和原生事件之间的冒泡: `event.nativeEvent.stopImmediatePropagation()`
  * 阻止原生事件和document之间的冒泡: `event.nativeEvent.stopImmediatePropagation()`
  * 阻止原生事件和document之间的冒泡: `event.stopPropagation()`

## React css 方案
* `less | sass | stylus | scss` 预处理器
* `styled-components | emotion | glamorous` 样式组件
* `tailwindcss | unocss` 原子化 css 方案
* `object-css` 对象式 css 方案
* `.module.css` 模块化 css 方案

## React 生命周期
* react 组件的生命周期来自于我们的 React.Component 类中的
* 具备的生命周期含有我们的
  * `创建阶段`
    * `constructor` : 初始化组件创建初期的状态 state，实现组件中函数 this 的绑定
    * `getDerivedStateFromProps` : 静态的方法，无法访问到组件的实例，执行实际在组件创建和 state props 更新的阶段，在 render 之前执行
      * 该方法可以实现的是控制我们的组件是否需要进行更新，如果返回了 null 则不会更新，如果返回了 state 则会更新，并且会返回新的 state
    * `render`: 用于渲染组件的方法
    * `componentDidMount`: 组件挂载完成之后，执行一次，执行之后，组件的更新和卸载阶段都会执行，render 之后进行执行
  * `更新阶段`
    * `getDerivedStateFromProps`: 我们的 state 和 props 更新的时候，该方法实现判断我们的组件是否需要更新
    * `shouldComponentUpdate`: 就是判断我们的组件是否需要发生更新，如果返回了 false 则不会更新，如果返回了 true 则会更新，并且会返回新的 state
    * `render` : 用于渲染组件的方法
    * `getSnapshotBeforeUpdate` : 获取的是组件更新前的一些信息的，比如滚动条的位置，或者组件的 DOM 节点等
    * `componentDidUpdate` : 组件更新完成之后，执行一次，执行之后，组件的更新和卸载阶段都会执行，render 之后进行执行
  * `卸载阶段`
    * `componentWillUnmount` : 组件卸载之前，执行一次，执行之后，组件的更新和卸载阶段都会执行，render 之后进行执行
      * 实现的是清理我们的在挂载阶段实现注册的一些事件回调吧

## React 组件通信
* 也就是我们的React中实现我们的多个组件之间的传递信息的，这个就是我们的组件通信，实现组件之间的交互行为吧
* 组件通信实现的话含有:
  * 父子组件通信
    * props 子组件实现通信数据的传递吧，这个就是我们父组件向子组件传递数据的基本的流程吧
    * 子组件向父组件传递数据的话: 父组件向传递一个函数，然后在子组件中调用父组件传递的函数，实现传递数据的功能
  * 兄弟组件通信
    * 兄弟组件的通信和我们的子组件向父组件传递数据的方式是一样的呐，思路差不多的吧，但是我们的父组件是两个组件的一个中间站吧
  * 跨代组件通信
    * 就是通过我们的 context（上下文信息吧） 实现的我们的额的跨级组件之间的通信，`useContext` `React.createContext` 来实现的呐
    * 然后通过我们的 `ContextName.Provider` 实现传递我们的上下文数据吧，后代组件直接通过 props 就可以实现获取得到数据了
  * 非关系组件通信
    * 就是使用我们的全局的状态管理库实现的我们的信息的通信吧: `redux` `mobx` `@reduxjs/toolkit`

## React hoc 组件
* Hoc 组件本身就是一个函数吧，然后实现的是输出的也是一个函数（`注意: react 中函数可以说是一个组件吧`）
* 比方说我们的一个react项目的根的部分，我们渲染 App 的时候需要进行包裹很多的东西，这个时候就可以使用我你们的 hoc 进行解耦吧
  * hoc 组件的简单理解就是我们的`接收一个组件，然后对传递的组件进行一定的处理，最后返回处理后的组件`即可
  * 这个和 python 中的装饰器函数的思想十分的相似吧，只是 python 中将装饰器函数的书写还提供了一个语法糖的书写形式罢了 `@defineWrapperFunction` 
```typescript jsx
// todo: define our hoc function
import React, { Suspense, memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppLoading from '@/base-ui/loading/app-loading';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import '@/assets/css/reset.less';
import { theme } from '@/assets/theme/theme';

const WithAppConfig = (WrappedComponent: React.ComponentType) => {
  const AppConfigHOC: React.FC = () => {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Provider store={store}>
              <Suspense fallback={<AppLoading />}>
                <WrappedComponent />
              </Suspense>
            </Provider>
          </HashRouter>
        </ThemeProvider>
      </React.StrictMode>
    );
  };

  return memo(AppConfigHOC);
};

export default WithAppConfig;


// todo: hoc function used in index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import WithAppConfig from '@/hocs/AppConfig';
import App from '@/App';

const root: ReactDOM.Root = ReactDOM.createRoot(
     document.getElementById('root') as HTMLElement,
);

const WrapperApp = WithAppConfig(App);

root.render(<WrapperApp />);
```
* 主要就是实现我们的对逻辑的进行的一定的公共逻辑的拆分吧
  * `权限控制` `日志记录` `数据校验` `异常处理` `统计上报`
```typescript jsx
import React from 'react'
function WithLocalData(WrappedComponent: React.ComponentType) {
    return class extends React.PureComponent {
        constructor(props: any) {
            super(props)
            this.state = {
                data: null
            }
        }
        componentDidMount() {
            let data = localStorage.getItem('data')
            if (data) {
                this.setState({
                    data: JSON.parse(data)
                })
            }
        }
        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />
        }
    }
}
export default WithLocalData

// todo: use our hoc function
function App(props: any) {
    return (
        <div>{ props.data }</div>
    )
}
const WithAppConfig = WithLocalData(App)
ReactDOM.render(<WithAppConfig />, document.getElementById('root'))
```

## React 过渡动画实现
* 通过我们的 `react-transition-group` 实现我们的动画吧
  * `enter enter-active enter-done` 组件进入，组件激活，组件完成时的样式自定义书写
  * `exit exit-active exit-done` 组件退出，组件激活，组件完成时的样式自定义书写
* 在内部的主要的三个组件
  * `CSSTransition` 过渡动画的实现
    * 样式名的定义为: markName 通过`classNames` 来进行定义，timeout 指定动画执行的时间
      * `in true` 的时候，表示的是我们的页面的进入
        * `markName-enter markName-enter-active markName-enter-done`
      * `in false` 的时候表示的是我们的页面的离开
        * `markName-exit markName-exit-active markName-exit-done`
  * `SwitchTransition` 切换动画的实现
    * 需要定义我们的 `mode` 模式吧
    * 这个组件是基于 `CSSTransition` 来实现的
    * `<SwitchTransition mode="out-in"><CSSTransition key={ isOn ? 'on' : 'off' }></CSSTransition></SwitchTransition>`
  * `TransitionGroup` 动画组的实现

## React 捕获错误
* 通过我们的 `react-error-boundary` 来实现我们的错误捕获吧，就是实现的捕获我们的边界错误的处理吧
* 错误边界出现的条件
  * `static getDerivedStateFromError(error: Error) {}`
  * `componentDidCatch(error: Error, errorInfo: ErrorInfo) {}`
```typescript jsx
import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = { 
            hasError: false 
        }
    }
    static getDerivedStateFromError(error: Error) {
        //todo: update state, ensure use sub ui component to render on next
        return { hasError: true }
    }
    
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        //todo: load our error info to our service
        logErrorToMyService(error, errorInfo)
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        } else {
            return this.props.children
        }
    }
}

//todo: demo use
class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <h1>hello world, I am a react root app component</h1>
            </ErrorBoundary>
        )
    }
}
```
* 这样的效果是取法获取得到我们的
  * 事件处理发生的错误
  * 异步代码发生的错误
  * 自身抛出错误
  * 这些错误只能够通过我们的 try...catch 来进行捕获错误的
* 我们是能够实现的是上报 ui 层面的错误的出现吧

## React refs 是什么
* `ref` 就是实现的的是方便我们实现对应的获取组件实例的方法吧
  * 可以指定的值含有: `字符串` `传入对象` `传入函数` `传入hook`
```typescript jsx
import React from 'react'
// todo: create our class component
class MyComponent extends React.Component {
    constructor(props: any) {
        super(props)
        this.inputRef = React.createRef()  // todo: create ref
        this.inputRef2 = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()  // todo: componentDidMount input auto focus
        console.log(this.inputRef2)
    }
    render() {
        return (
            <>
              <input type="text" ref={this.inputRef} />  {/* todo: use object ref */}
              <input type="text" ref={el => this.inputRef2 = el}/> {/* todo: use function ref */}
            </>
        )
    }
}

// todo: create our function component
function MyComponent() {
    const inputRef = React.useRef<HTMLInputElement>(null)  //todo: create ref
    React.useEffect(() => {
        inputRef.current?.focus()  // todo: useEffect input auto focus
    }, [])
    return (
        <>
            <input type='text' ref={inputRef}/>  {/* todo: use hook ref */}
        </>
    )
}
```
* DOM 元素焦点控制，内容选择
* DOM 元素内容设置以及媒体元素的播放
* 集成第三方DOM库

## React setState(useState)核心机制
* 我们的一个 react 组件中保存本组件内部的数据是通过我们的 state 来实现保存的
* 但是我们在实现进行事件处理的时候会通过 setState 来实现对应的数据的修改吧
* setState
  * 第一个参数是一个对象或者说回调函数
  * 第二个参数是是一个回调函数，可以实现的是`获取到更新后的数据`
* setState 的更新类型
  * 异步更新
    * 默认就是我们的异步更新，这个时候对应的函数实现会放入队列中，等待同步代码执行完后，才会执行对应队列中的回调函数
  * 同步更新
    * `setTimeout(() => { this.setState({ count: this.state.count + 1)}) }, 0)`
* 也就是说如果我们的 setState 的调用，
  * 调用外部`具备宏级任务`，那么就会变成`同步更新`，这个时候对应的函数实现会立即执行
  * 调用外部`不具备宏级任务`，那么就会变成`异步更新`
* 批量更新
  * 也就是说我们的一个事件处理中多次调用 setState 修改我们的 state 的值
  * 进行批量更新的时候，实现的是覆盖操作，不管如果都是只是执行一个 setState 修改 state 数据的呐(**这是传入是对象的修改形式**)
    * 如果说我们的实现的是传递的是函数的形式，那么就会执行函数的回调函数，这个时候就会变成`同步更新`，进行批量更新的时候，全部修改全部执行
  * 同时由于我们的 setState 是异步的，所以说 console.log 得出的是修改前的值吧
```typescript jsx
class MyCounter extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
            </>
        )
    }
}
```
```typescript jsx
class MyCounter extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // 实现批量更新
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)  //todo: 0
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)  //todo: 0 
    }
    render() {
        return (
            <>
                <div>{this.state.count}</div> {/* todo: after click once, the count is 1 */}
                <button onClick={() => this.increment()}>+</button>
            </>
        )
    }
}
```

## React render 方法
* 类组件中就是指定的是我们的 render 方法
* 函数组件就是指定的是我们的函数组件本身吧
  * `jsx --> babel --> AST --> 编译为js对象树结构 --> React.createElement --> virtualDOM --> ReactDOM.render(virtualDOM, dom)`
  * 后面的进行更新操作的时候，会在内部进行我们的 diff 算法的比较操作吧，通过 diff 算法得出需要更新的部分，最后就是执行 render()
* 区别比较
  * 类组件: setState render
  * 函数组件: useState useEffect 组件可能不会发生更新，是否更新取决于我们的数据是否发生了变化吧
```javascript
return (
    React.createElement(
        'div', {
            className: 'container',
        },
        React.createElement(
                {
                    Header,
                    props: {
                        title: 'react',
                    },
                    children: []
                },
                React.createElement(
                    'div', {
                            className: 'content',
                        }
                )
        )    
    )
)

// 最后的转化就是通过这样来实现的呐
```

## React realDOM 和 virtualDOM
* RealDOM DOM文档对象模型
* VirtualDOM 是一个JS对象，只是对我们的RealDOM的描述
  * 为什么我们操作的是VirtualDOM呐
    * 我们每次进行的对真实DOM的操作，每次都是会触发页面的重排和重绘的，可能发生回流
      * `重绘不一定会发生回流，但是回流一定会发生重绘`
    * 我们操作我们的VirtualDOM 可以尽可能的减少发生重排和回流发生的可能性吧，重排和重绘是十分消耗性能的呐
* 二者区别
  * 虚拟DOM不会触发重排和重绘，真实DOM会频繁的触发重排和重绘
  * 虚拟DOM的增删改会触发真实DOM的增删改，只是修改我们的变化了的部分；真实DOM完全增删改DOM，触发的重排和重绘的部分更大

## React jsx --> RealDOM
* `jsx => babel => React.createElement => virtualDOM Tree => ReactDOM.render(virtualDOM, dom) => RealDOM`
* jsx 是我们的一个 js 的扩展语法，也是 js 的语法糖吧
* react的节点类型
  * `原生标签节点`
  * `文本节点`
  * `函数组件`
  * `类组件`
* React.createElement 会根据不同类型的标签进行对应的解析
```typescript jsx
//todo: from react-dom/client source code
//todo: react source code
//todo: render methods
function render(vnode, container) {
    console.log('vnode', vnode)
    const node = createNode(vnode, container)
    container.appendChild(node)
}

//todo: react source code about createNode methods
//todo: aim to create a node that is real DOM
function createNode(vnode, container) {
    let node = null
    const { type, props } = vnode
    if (type === 'TEXT') {  // todo: settle our TEXT type Node
        node = document.createTextNode('')
    } else if (typeof type === 'string') {  // todo: settle our native type Node
        node = document.createElement(type)
    } else if (typeof type === 'function') {  // todo: settle our class or functional type Node
        node = type.isReactComponent(type)
            ? updateClassComponent(vnode, container)
            : updateFunctionComponent(vnode, container)    
    } else {  // todo: settle our Fragment type Node
        node = document.createDocumentFragment()
    }
    reconcileChildren(props.chilldren, node)
    updataNode(node, props)
    return node
}

// todo: reconcileChildren methods
// todo: aim to create our children, let childVirtualDOM to childRealDOM, and let the children into our parentRealDOM
function reconcileChildren(children, node) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        if (Array.isArray(child)) {
            for (let j = 0; j < child.length; j++) {
                render(child[j], node)
            }
        } else {
            render(child, node)
        }
    }
}

function updataNode(node, nextVal) {
    Object.keys(nextVal)
            .filter(key => key !== 'children')
            .forEach(key => {
                if (key.slice(0, 2) === 'on') {
                    let eventName = key.slice(2).toLocaleLowerCase()
                    node.addEventListener(eventName, nextVal[key])
                } else {
                    node[key] = nextVal[key]
                }
            })
}

function updateFunctionComponent(vnode, container) {
    const { type, props } = vnode
    const vvnode = type(props)
    return createNode(vvnode, container)
}

function updateClassComponent(vnode, container) {
    const { type, props } = vnode
    const instance = new type(props)
    const vvnode = instance.render()
    return createNode(vvnode, container)
}

export {
    render
}
```

## React 用户权限控制
* 1.通过我们的 ajax 请求服务器返回对应的 menuList 菜单实现对应的权限控制
* 2.通过 react-router-dom 中的 onEnter 实现的定义实现

## React 常用内置组件
* Fragment 组件
  * 实现的是虚拟DOM的占位符，不会生成真实的DOM节点，类似于我们的 template
* Portal 组件
  * 实现的是将我们的组件渲染到我们的指定的容器中，不会影响我们的组件的层级关系，不会影响我们的组件的层级关系，弹框或者说提示框的实现
* Context 组件
  * 就是实现的是我们的组件的跨层级通信

## React redux 的使用
* redux 包含的我们的几个部分
  * Store 一个全局的状态管理对象
  * Reducer 一个纯函数，根据组件的 state 和 props 生成对应的 state
  * Action 一个对象，描述我们的组件的 state 的变化，dispatch action
* 基本的使用流程为:
  * store 初始化数据
  * 组件中使用 store 定义的数据
  * 组件中通过 connect 方法来连接我们的组件和 store
  * 组件中通过 mapStateToProps 来映射我们的组件和 store 中的数据
  * 组件中通过 mapDispatchToProps 来映射我们的组件和 store 中的 action
  * 组件中通过 dispatch action 来修改 store 中的数据
  * 组件中 dispatch action 后，通过 reducer 来修改 store 中的数据