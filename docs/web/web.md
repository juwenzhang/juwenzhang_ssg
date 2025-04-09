# web 开发文档

## Vue 的生命周期以及每个生命周期做了什么？？
* vue2 的生命周期
  * `beforeCreate` 是`new Vue()`后触发的第一个钩子函数，在当前状态，data，computed，methods 等都不可被访问
  * `created` 在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取
  * `beforeMount` 在挂载开始之前被调用，相关的 render 函数首次被调用，也就是组件被挂载前的一个钩子函数
  * `mounted` 在挂载结束之后被调用，也就是组件挂载结束，真实DOM挂载完毕
  * `beforeUpdate` 在数据更新之前被调用，也就是在更新之前，也就是在数据更新前，可以获取到更新前的数据，但是不能修改数据
  * `updated` 在数据更新之后被调用，也就是在数据更新之后，可以获取到更新后的数据，但是不能修改数据
  * `beforeDestroy` 在实例销毁之前调用，可以在这个钩子函数中清除一些定时器，或者取消一些订阅等，也可以做一些资源释放的操作
  * `destroyed` 在实例销毁后调用，在实例销毁后，相关的事件监听和子实例也会被销毁
* vue3 的生命周期
  * `setup` 就是以前的 beforeCreate 和 created 钩子函数的总和吧
  * `onBeforeMount` 在挂载开始之前被调用，相关的 render 函数首次被调用，也就是组件被挂载前的一个钩子函数
  * `onMounted` 在组件挂载后调用，也就是组件挂载结束，真实DOM挂载完毕，vue3 中的 setup 语法糖
  * `onBeforeUpdate` 在数据更新之前被调用，也就是在更新之前，也就是在数据更新前，可以获取到更新前的数据，但是不能修改数据
  * `onUpdated` 在数据更新之后被调用，也就是在数据更新之后，可以获取到更新后的数据，但是不能修改数据
  * `onBeforeUnmount` 在实例销毁之前调用，可以在这个钩子函数中清除一些定时器，或者取消一些订阅等，也可以做一些资源释放的操作
  * `onUnmounted` 在实例销毁后调用，在实例销毁后，相关的事件监听和子实例也会被销毁
  * `onActivated` 在 KeepAlive 组件激活时调用，也就是组件被激活，也就是组件被重新挂载，但是不会触发 onMounted 钩子函数，但是会触发 onActivated 钩子函数
  * `onDeactivated` 在 KeepAlive 组件停用时调用，也就是组件被停用，也就是组件被卸载，但是不会触发 onUnmounted 钩子函数，但是会触发 onDeactivated 钩子函数
  * `onErrorCaptured` 在捕获一个来自子孙组件的错误时被调用，可以处理错误，并且可以阻止冒泡，但是不会触发 onError 钩子函数，但是会触发 onErrorCaptured 钩子函数
  * `onRenderTracked` 在组件渲染时调用，可以获取到渲染时的依赖关系，但是不会触发 onRenderTriggered 钩子函数，但是会触发 onRenderTracked 钩子函数
  * `onRenderTriggered` 在组件渲染时调用，可以获取到渲染时的依赖关系，但是不会触发 onRenderTracked 钩子函数，但是会触发 onRenderTriggered 钩子函数
  * `onServerPrefetch` 在服务器端渲染时调用，可以获取到服务器端渲染的数据，但是不会触发 onBeforeMount 钩子函数，但是会触发 onServerPrefetch 钩子函数

## Vue vue2 和 vue3 的响应式原理区别
* vue2 的响应式原理主要是通过我们的`Object.defineProperty` 来实现的
* vue3 的响应式原理主要是通过我们的`Proxy + Reflect` 来实现的

## Vue vue2 和 vue3 的区别
* 源码组织的差异性: 全面使用 ts 进行代码的重构
* 支持组合式API: 将整个开发中最低细粒度为组件，拆分到了最低细粒度为一个一个的函数，然后通过组合式API 来组合起来，这样代码的可读性会提高很多
* 响应式系统的提高性能: Vue3 使用了 proxy 进行的响应式系统的书写吧
* 编译优化: vue2 主要是使用标记静态根节点优化 diff，vue3 标记和提升所有静态根节点，diff算法的时候只需要对比动态节点内容
* 打包体积优化: 移除了不常用的一些 api
* Vue3 template 支持多个根标签
* Vue3 引入hooks 的概念，实现更加贴切于函数式编程范式

## Vue MVVM 模型
* MVVM就是我们的 model-view-view-model 模型吧，也就是说将我们的 MVC 中的 C - control 转变为了 ViewModel 模式吧

## Vue v-model 双向绑定
* v-model 本质上就是使用的是 value 和 input 方法实现的双向绑定，prop + event 实现的呐

## Vue diff算法
* vue2 diff 算法的核心是双端算法实现的
* vue3 diff 算法的核心是标记和提升算法实现的,ivi算法 + inferno算法
* diff算法核心思路为:
  * 同级比较，再比较子节点
  * 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
  * 比较都有子节点的情况(核心diff)
  * 递归比较子节点

## Vue 组件通信
* 组件通信的方式:
  * 父传子: 父组件通过 props 实现传递，子组件通过defineProps宏函数获取props，withDefineProps实现props的类默认值设置
  * 子传父: 子组件通过 defineEmits 宏函数获取 emit，通过 emit 实现子组件向父组件传递事件，通过 on 监听事件，通过 emit 实现子组件向父组件传递事件
  * 全局事件总线: 通过 provide 和 inject 实现全局事件总线
  * 状态管理库: pinia | vuex
  * 插槽slot: 通过 slot 实现组件通信，默认插槽，具名插槽，作用域插槽

## Vue 路由实现原理
* hash 路由的话，就是通过原生的 location.hash() 来实现的，`#`
* history 路由的话，就是通过原生的 history.pushState() 来实现的，`history.pushState() + history.replaceState()`

## Vue v-show 和 v-if 的区别
* v-show 是通过样式的 display 来实现的，只是再控制元素的显示和隐藏
* v-if 是通过移除和添加元素的方式实现的，所以 v-if 的时候，会触发组件的销毁和创建，对于常切换的使用 v-show 更好一点吧

## Vue nextTick 的作用
* vue2 阶段期间，nextTick 的异步和同步一直在更换；v3 阶段期间，nextTick 的异步和同步已经稳定了，并且已经和 Promise.then 一致了，都是异步的
* 主要的作用就是实现事件的延迟回调执行，也就是说一个事件的执行可以在合适的时机实现执行吧

## Vue SSR 是什么
* SSR Server-Side Rendering 服务端渲染
  * 实现的原理就是将我们的客户端的网页在服务端渲染成HTML后，将已经在服务端渲染好的HTML返回给客户端在进行展示
  * 这样的好处，浏览器就不会因为解析JS文件造成解析的阻塞了，从而提高我们的首屏加载速度，以及有助于SEO优化
  * 但是这样的话对于我们的服务端的要求就会十分的高，大部分的事情都是服务端在做了的吧，以及服务端支持的API相对较少

## Vue watch 和 computed 的区别
* watch 是对某个属性的监听，当属性发生变化的时候，会执行对应的回调函数
  * 主要是监听的是组件的状态 props 和 data 的变化
  * watch 支持异步
* computed 是对某个属性的计算，当属性发生变化的时候，会重新计算对应的属性值
  * 具备缓存，使用 computed 包裹的数据自动为响应式数据

## Vue v-for 和 v-if 的区别
* v-for 是对数组的循环，v-if 是对条件判断
* v-for 的优先级比 v-if 高，所以 v-for 会优先执行，而 v-if 会在 v-for 之后执行
* 两者可以一起用，但是不推荐

## Vue key作用
* key 主要是为了实现对虚拟DOM更加快速的更新吧，以及在很多的地方的判断是使用到了 key 属性进行对应的判断的呐

## Vue 代码优化
* 减少 data 中的数据，数据越多在源码中创建的 getter 和 setter 就越多，造成了很多的不必要的浪费吧
* v-if 和 v-for 不要连用
* SPA 页面采用 keep-alive 实现缓存
* 使用路由懒加载，异步组件的使用
* 第三方组件库的按需导入
* 媒体资源的懒加载处理

## React useState hooks
* useState 是一个用来存储函数式组件的一个hooks，其更新是异步的处理机制，和我们的类组件中的 this.setState 机制一样的呐
  * 特点是: 一个事件处理中如果具备多次更新State，所有的更新操作合并为一次，同时是异步代码，所以说更新在同步代码执行前运行的呐
  * 如果说是一处于一个宏函数内部的更新数据，此时保持使用同步的处理机制吧
  * `const [state, setState] = useState(initialState);`
* 使用注意事项
  * `setState(newState)` 直接传入的话，多次这样执行，最终只是运行一次，因为这样的操作不能够保证每次都是获取的是最新的值进行的更新吧
  * `setState(preState => preState + 1)` 这样的多次执行的话，可以实现确保每次获取得到的数据都是最新的，从而实现我们的多次操作更新吧
* hooks的出现让原本不具备状态的函数式组件可以像类组件一般保存属于自己的一些状态了
```typescript jsx
const MyComponent = () => {
    const [count, setCount] = useState(0);
    const btnClickhandler = () => {
        setCount(count + 1);
    }
    return (
            <div>
              <div>{count}</div>
              <button onClick={() => btnClickhandler}>点击</button>
            </div>
    )
}
```

## React useEffect hooks
* 是一个用于实现处理副作用的hook，在我们的函数式组件中是没有我们的生命周期的概念的
* 但是只不过可以通过 useEffect hook 来模拟我们的类组件中的生命周期吧，主要指代的生命周期是: componentDidMount 和 componentDidUnMount
* `useEffect(() => {...; return () => {...}}, [dependencies])`
```typescript jsx
const MyComponent = () => {
    useEffect(() => {
        console.log('componentDidMount');
        return () => {
            console.log('componentDidUnMount');
        }
    }, [])
}
```

## React useContext hooks
* 主要是用于实现的是处理我们的全局的数据的提供的呐
* 需要结合我们的 createContext 来使用，并且需要结合我们的 Provider 来使用
```typescript jsx
import { createContext, useContext } from 'react'
const MyComponent = () => {
    const { count, setCount } = useContext(MyContext);
    return (
        <div>
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}
```

## React useReducer hooks
* 主要是我们的状态管理库中的一个hook
* `const [state, dispatch] = useReducer(reducer, initialArg, init)`
* reducer 是一个函数，主要用来处理我们的状态的更新，并且返回一个新状态

## React useRef hooks
* 主要是用来获取组件的DOM节点的，并且可以获取到组件的DOM节点的属性值，并且可以修改组件的DOM节点的属性值
* `const ref = useRef(initialValue)`
```typescript jsx
const MyComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
            <div>
              <input ref={inputRef} onChange={() => {
                  console.log(inputRef.current?.value);
              }}/>
            </div>
    )
}
```

## React useSelector hooks
* 主要是用来获取我们的全局状态的
* `const state = useSelector((state: RootState) => state.count)`
```typescript jsx
const MyComponent = () => {
    const state = useSelector((state: RootState) => state.count);
    return (
        <div>{state}</div>
    )
}
```

## React useDispatch hooks
* 主要是用来获取我们的全局状态的修改的
* `const dispatch = useDispatch();`
```typescript jsx
const MyComponent = () => {
    const dispatch = useDispatch().then(res => {
        console.log(res);
    });
}
```

## React useCallback 和 useMemo hooks
* useMemo 主要是用于进行缓存计算结果的，其返回的是计算结果，当依赖发生变化的时候就会触发重新计算
  * 主要是用于缓存一些计算开销比较大的值，以避免在每次渲染时都重复计算
* useCallback 是用于缓存函数的，其本身返回的就是一个函数吧，当依赖项发生变化的时候，才会返回新的函数引用
  * 使用 useCallback 实现确保我们的依赖变化的时候才创建新的函数引用，一定要和 memo 或者说 PureComponent 结合起来使用吧 
```typescript jsx
const memoizedValue = useMemo(() => {
    return computeExpensiveValue(a, b);
}, [a, b])

const memoizedFn = useCallback(() => {
    doSomething(a, b);
}, [a, b])
```

## React useLayoutEffect hooks
* 都是当我们的DOM操作发生变化的时候，所有的DOM更新完成后同步执行
```typescript jsx
function Component() {
  useLayoutEffect(() => {
    // 直接与 DOM 交互
    console.log('DOM已更新');
  });

  return <div>内容</div>;
}
```

## React useId hooks
* 主要是用于生成一个唯一的ID，并且这个ID是可预测的，支持服务端渲染
```typescript jsx
import React, { useId } from 'react';

function InputComponent() {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>标签</label>
            <input id={id} type="text" />
        </div>
    );
}
```

## React useImperativeHandle hooks
* 主要是用于在子组件中暴露一些方法给父组件使用的
```typescript jsx
function ParentComponent() {
    const childRef = useRef(null);
    const handleClick = () => {
        childRef.current.doSomething();
    }
    return (
        <div>
            <ChildComponent ref={childRef} />
        </div>
    )
}

function ChildComponent(props, ref) {
    useImperativeHandle(ref, () => ({
        doSomething() {}
    }))
    return (
        <div>子组件</div>
    )
}
```

## React useTransition hooks
* 主要是用于实现我们的过渡动画的
* `const [isPending, startTransition] = useTransition();`
```typescript jsx
const MyComponent = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    return (
        <div>
          <button onClick={() => {
              startTransition(() => {
                  console.log('btn click');
                  setTimeout(() => {
                      console.log('btn click end');
                      setCount(count + 1);
                  })
              })
          }}>btn</button>
          <div>{count}</div>
        </div>
    )
}
```

## React useDeferredValue hooks
* 主要是用于实现我们的延迟更新的
```typescript jsx
import React, { useState, useDeferredValue } from 'react';

function DeferredValueComponent() {
    const [inputValue, setInputValue] = useState('');
    const deferredValue = useDeferredValue(inputValue);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>Immediate Value: {inputValue}</p>
            <p>Deferred Value: {deferredValue}</p>
            <HeavyComponent value={deferredValue} />
        </div>
    );
}

function HeavyComponent({ value }) {
    // 模拟某个开销较大的组件
    const items = Array.from({ length: 10000 }, (_, i) => `${value} - Item ${i}`);
    
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
```

## React JSX 和 JS 的区别
* JSX 是 JS 的扩展语法，它允许在 JS 中使用 HTML-like 的标记来定义组件的 UI。

## React 生命周期
* React 组件的生命周期主要是三个阶段: MOUNTING，RECEIVE_PROPS、UNMOUNTING。
* `组件挂载时`: 组件状态的初始化，读物 state 和 props 以及两个生命周期钩子的回调，只会在初始化时运行一次
  * componentWillMount() render()函数之前执行
    * 在该回调钩子里面进行修改 state 的值的时候不会触发 UI 界面的重新渲染，只会进行合并我们的 state 的值
  * componentDidMount() render()函数之后执行
* `组件更新时`: 主要是组件的 props 或者说 state 发生变化的时候触发的一些更新操作吧
  * 组件自身的 state 发生变化时:
    * `shouldComponentUpdate()` 函数首先执行，会接受需要更新的 props 和 state，内部通过返回 true 或者 false 来决定组件是否需要更新
    * `componentWillUpdate()` 函数执行，接受新的 props 和 state
    * `render()` 函数执行，返回新的 UI
    * `componentDidUpdate()` 函数执行，组件更新完毕
  * 组件外部 props 发生变化时:
    * `componentWillReceiveProps()` 函数执行，接受新的 props
    * `shouldComponentUpdate()` 函数执行，接受新的 props 和 state
    * `componentWillUpdate()` 函数执行，接受新的 props 和 state
    * `render()` 函数执行，返回新的 UI
    * `componentDidUpdate()` 函数执行，组件更新完毕
* `组件卸载时`
  * componentWillUnmount() 函数执行，组件即将卸载时执行

## React 事件机制和DOM事件机制区别
* react 中的事件是绑定在document上的
* 原生DOM的事件是绑定在 DOM 上的
* 因此执行顺序的话就是: 原生DOM事件 -> react事件，也就是原生 DOM 执行顺序优先于React事件的执行

## React redux 工作原理
* store --> component --> dispatch --> action --> reducer --> store

## React setState 函数
* 在 React 中，setState() 函数是一个异步的状态表现吧，这个就意味着我们的 setState 不会立刻改变 react 组件中的 state 值
* 多次 setState() 会被合并为一次，但是这个不是绝对的
  * 为什么会被合并为一次呐？？？
    * 如果说你使用的形式 `setState(newValue)` 通过这样的直接修改，那么多次修改的时候都是获取得到的上一次的值
    * 如果说你是通过`setState(preState => preState + 1)` 这样的活多次修改就不是合并操作了，因为每次执行都是获取得到了最新的值的呐

## React 如何实现UI降级
* React 通过 `React.lazy()` 和 `Suspense` 组件来实现 UI 降级。
* 有时间为了我们的错误捕获阶段实现UI降级，这个时候我们就需要使用到: `static getDerivedStateFromError()` 和 `componentDidCatch()` 来实现对应的操作了
```typescript jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // 实现 ui 降级的核心步骤
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // 你可以记录错误日志或者上报错误信息
        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>;
        } else {
            return this.props.children;
        }
    }
}
```

## React 实现 keep-alive 
* react-keep-alive 是通过我们的 React.createPortal() 来实现的呐
* react-keep-alive 主要提供了两个组件，一个是: `<KeepAlive />`，另一个是 `<Provider />`
* Provider 组件主要是实现的是我们的缓存数据的操作吧
* 同时和 vue 一样，对于 keepAlive 包裹的组件具备两个生命周期: `componentDidActivate` 和 `componentDidUnActivate`

## React|vue 为什么使用虚拟DOM
* 虚拟DOM 就是在我们的 js 和 真实DOM之间添加了一层缓存，通过 diff 算法避免了没有必要的DOM操作，从而提高了性能

## React|vue keys 的作用
* 向每个重复的元素添加关键字对于帮助React|vue跟踪元素与数据之间的关联非常重要。key 应该是唯一ID，最好是 UUID 或收集项中的其他唯一字符串

## React Fiber 架构
> https://juejin.cn/post/7403185402348306468
### Fiber 架构
* Fiber 架构的核心就是我们的 FiberNode，Fiber 的每一个node 节点吧，是一种虚拟DOM的实现方式吧
* Fiber 本质上就是一个一个的对象，使用的底层数据结构是链表结构
* 底层源码使用了双重缓冲的渲染优化技术，就是使用了两个 Fiber 树来管理状态，分别是`当前树 current tree` 和 `工作树 workInProgress tree`
  * 当前树主要是代表的是屏幕上当前显示的内容，工作树用于准备下一次渲染更新，用于实现平滑的更新操作吧
### Fiber 含义
> * Fiber 架构
> * 静态的数据结构
> * 动态的工作单元
> * 
* React16 之前的是 Reconciler 采用的是递归的形式执行的，这个时候就是递归调用栈实现的嗯，就是我们的 `stack reconciler`
* React16 之后的就是通过Fiber来实现的呐，后面的版本就是通过我们的: `Fiber reconciler` 基于 Fiber节点实现的，每个节点之间通过链表的形式连接的
  * 同时在后面的节点的连接之间引入了对应的分层架构的呐，并不是一个节点之间进行连接的，而是分层进行的层之间的连接
  * 也就是说每个层之间的节点通过的是双向的连接，但是层内的元素是单向的连接，该单向的连接和我们的UI呈现的方式一致

## React diff 算法
> https://juejin.cn/post/7407370502416891956
* diff 算法是React 和 vue 的核心吧，它决定了React在更新时如何高效地复用和更新 FiberNode 的
  * 在构建 `workInProgress Fiber Tree` 时会尝试复用 `current Fiber Tree` 中对应的 FiberNode 的数据，这个`决定是否复用的过程`就是 Diff 算法
  * Diff 算法最核心的就是节省了很多不必要的DOM节点的更新吧
* diff 算法特点
  * 分层比较，同级比较
    * 整个DOM树分为了多个层级，然后进行逐级比较 ==> 减少了时间复杂度吧
  * 元素类型对比
    * 不同类型的节点生成对应不同的树结构，如果元素发生变化，react会创建新树，销毁旧树
  * key属性
    * React 使用 key 属性来标识节点的唯一性，从而在比较时能够快速定位到需要更新的节点，提高 diff 算法效率
    * React 使用 key 属性来快速定位到需要更新的节点，从而提高 Diff 算法的性能
```typescript
function recordChildFibers(returnFiber: Fiber, currentFirstFiber: Fiber | null, newChild: Fiber | null) {
    // 处理对象类型的薪子元素
    if (typeof newChild === 'object' && newChild !== null) {
        switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
                // 处理单一的 react 元素
                return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstFiber, newChild))
            case REACT_PORTAL_TYPE:
                // 处理 react protal
                return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstFiber, newChild))
    
            case REACT_FRAGMENT_TYPE:
                // 处理 react fragment
                return placeSingleChild(reconcileSingleFragment(returnFiber, currentFirstFiber, newChild))
            case REACT_LAZY_TYPE:
                // 处理懒加载组件
                return placeSingleChild(reconcileSingleLazy(returnFiber, currentFirstFiber, newChild))
        }
        // 判断子元素是否时数组
        if (isArray(newChild)) {
          return reconcileChildrenArray(returnFiber, currentFirstFiber, newChild)
        }
        // 吐过子元素是一个可迭代对象
        if (isIterable(newChild)) {
          return reconcileChildrenIterator(returnFiber, currentFirstFiber, newChild)
        }
        // 如果新子元素是一个可迭代对象，协调迭代器中的每个子元素。
        if (isIterator(newChild)) {
          return reconcileChildrenIterator(returnFiber, currentFirstFiber, newChild)
        }
    }
    // 如果新子元素是一个非空字符串或数字，协调单个文本节点。
    if ((typeof newChild === 'string' && newChild !== '') || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, lanes));
    }
    
    // 如果子元素是 null 或者说 undefined，直接删除元素即可
    return deleteRemainingChildren(returnFiber, currentFirstChild);
}
```
* diff 算法优化思路
  * 减少不必要的节点之间的比较
  * 使用 key 属性，让 react 的 diff 算法更好的进行对应的状态跟踪
  * 实现节点的批量更新操作吧