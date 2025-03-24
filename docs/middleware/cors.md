# CORS
> https://www.bilibili.com/video/BV1pT421k7yz/?spm_id_from=333.1387.favlist.content.click&vd_source=bb20c062393ff7c3113f7a3085b1acb1
> 这个是尚硅谷俞神的讲解，可以多刷几遍吧，还是很有意义的呐
> https://www.cors.com/ 官网阅读

## cors 浏览器同源策略
### 是什么呐？？？
* 浏览器为了保证资源的安全性而遵守的一种资源策略吧
* 在这个概念中我们需要注意的就是我们的源的定义: `源 = 协议 + 域名 + 端口号`
    * 只有当我们的一个源的: 协议 + 域名 + 端口号 全部一致才是`同源`，否则就是`非同源`
        * 源后面的路径是可以忽略的，是不在考虑中的
    * 举个例子
        * http://juwenzhang.com:8000/home  和 https://juwenzhang.com:8000/home 因为协议不同，所以说非同源
        * http://juwenzhang.com:8000/home  和 http://juwenzhang.com:8080/home 因为端口号不同，所以说非同源
        * http://www.juwenzhang.com/home  和 http://blog.juwenzhang.com/home 因为域名不同，所以说非同源
    * 对于我们的 http 协议的话默认端口是 22，对于 https 协议的话默认端口是 443

## 同源请求和非同源请求
### 什么是同源请求？？？
* 同源请求: 就是静态资源所处源和动态后端接口所处的源一致，这个就是我们的同源请求
  * 浏览器的源为: https://www.juwenzhang.com:8000/user/login
  * 动态后端接口的源为: https://www.juwenzhang.com:8000/api/v1/user/login
  * 由于两个所处的源相同，这个时候就是我们的同源请求策略了
* 定义就是: 我们的`客户端所处源`和`动态资源接口的目标源` 一致，这个就是我们的`同源请求策略`

### 什么是非同源请求？？
* 非同源请求: 就是静态资源所处源和动态后端接口所处的源不一致，这个就是我们的非同源请求
  * 浏览器（客户端）所出源为: https://www.juwenzhang.com:8000/user/login
  * 动态后端接口的源为: https://www.juwenzhang.com:8080/api/v1/user/login
  * 由于两个所处的源不一致，这个时候就是我们的非同源请求策略了
* 对于我们的非同源请求的话就会导致我们的 `跨域问题的出现吧`
  * 这个非同源也叫做: `异源` `跨域` 这个也是常问的一个面试点吧

### 浏览器对于跨域请求的限制
* DOM 访问限制，源A的脚本 是不能读取和操作 源B的DOM 
  * 这里主要出现的场景就是在我们的 iframe 中出现的
    * 如果我们的 iframe 引入的是同源的页面资源，那么就就可以在当前界面中获取得到 iframe 嵌入的 DOM 信息
    * 如果我们的 iframe 引入的是非同源的页面资源，那么就无法在当前界面中获取得到 iframe 嵌入的 DOM 信息
  * 上面的就是因为 iframe 触发的非同源 DOM 访问限制的情景了吧
* COOKIE 访问限制
  * 这个的原理和上面底原理是一致底呐
  * 获取当前页面底 cookie 就是通过: `document.cookie` 来实现获取的呐，原理上还是操作的是我们的 DOM 的
* AJAX 响应数据限制
  * 客户端的源A 是可以正常和 服务端源B 发送原本的请求，但是`只不过服务端的响应会被客户端进行拦截，从而无法获取得到服务端响应的数据吧`
  * 注意: 显示的是服务器的响应资源的获取，而不是客户端的请求资源的过程
> * 跨域只是出现在我们的浏览器端的，服务端是不存在跨域问题的呐
> * 即使出现了跨域问题，客户端任然可以进行请求，但是服务端响应的数据被客户端进行拦截，从而无法获取得到服务端响应的数据吧
> * link script img 等需要进行引入连接的标签，都是会造成跨域的，但是浏览器不做严格限制对这些标签的话

![img24](/img_24.png)

## cors 解决方案
### cors 概述
* cors（`cross-origin resource sharing）跨域资源共享`）
  * 是一个用于控制浏览器校验跨域请求的一套规范，服务器可以根据 cors 规范，添加特定的响应头来控制浏览器的校验吧
    * 服务器明确的指定拒绝跨域的请求，或者说不表示，这个时候浏览器就不通过
    * 服务器明确的指定允许跨域的请求，这个时候浏览器则通过
  * 服务器响应的设置来从而来控制我们的服务端的响应被浏览器校验成功吧

### cors 简单请求跨域
* 我们的客户端进行发送请求的时候，是会把客户端的源给携带上的，该字段就是: Origin 字段
  * 通过该字段的判定就可以实现后面的服务器的一些 cors 设置了
  * 服务器为了可以响应客户端请求的成功，这个时候就需要添加响应头设置: Access-Control-Allow-Origin 字段
    * 同时该字段的值是我们的: 客户端请求携带 Origin 字段的值
  * 比方说一个浏览器请求的时候，携带的 Origin 为: https://www.juwenzhang.com:8000/
    * 那么这个时候服务端的响应的时候就需要进行我们的添加响应头: `Access-Control-Allow-Origin: https://www.juwenzhang.com:8000/`
    * 或者说设置为 * ，这个就是允许所有的源进行发送请求并且做出响应吧
* 什么是简单请求呐？？
  * 请求方法为: get post head 
  * 请求头字段需要满足 cors 安全规范
  * 请求体的 Content-Type 为三种: `text/plain` `application/x-www-form-urlencoded` `multipart/form-data`
  * 满足上述条件的话，这个请求就是我们的简单请求

### cors 复杂请求跨域
* 不是简单请求的请求就是我们的复杂请求
* 复杂请求都是会发送`预检请求`的呐
  * 每一个复杂请求的话都是会把请求发送两次的呐，第一次是预检请求（preflight request），第二次才是真正的请求

### cors 预检请求
* 发送时机: 预检请求会在我们的实际请求前发出，这个是浏览器自动发出的
* 主要作用: 是用来向服务器确认是否该请求允许接下来的跨域请求
* 基本流程: 浏览器先进行发起依次 options 请求，通过了预检查，则继续发送后续的跨域请求
* 预检请求请求头内容: 
  * `Origin` 本次请求携带的源
  * `Access-Control-Request-Method` 本次请求发送的实际的 http 方法
  * `Access-Control-Request-Headers` 本次请求携带的自定义请求头
* 服务器解决复杂请求跨域的响应头配置
  * `Access-Control-Allow-Origin: request_origin`
  * `Access-Control-Allow-Methods: request_method`
  * `Access-Control-Allow-Headers: request_headers`
  * `Access-Control-Max-Age: max_age` 这个是可选的，表示预检请求的缓存时间

> * 复杂请求和简单请求的判定二
>   * 就是看我们的请求是否具备预检，如果有，那么就是复杂请求，否则就是简单请求吧，这也是进行判断的标准之一吧
> * 当然在我们的实际开发中服务端是提供了对应的解决跨域的中间件: cors 来解决跨域请求的配置的呐
>   * cors 中间件就会帮助我们配置关于手动配置跨域问题的字段设置吧

## JSONP 解决跨域请求
* 首先前面讲解了一点就是: link script img 等标签都是会触发跨域请求的呐
* 但是只不过浏览器对于其产生的跨域不做详细的处理，不限制其跨域，那么我们的 jsonp 就是通过的是该特性来解决的我们的跨域请求的呐
* 基本的流程
  * 第一步: 客户端中创建一个 script 标签，并将我们的 src 指定为包含跨域请求的 URL 源，同时准备对应的回调函数吧，该回调函数用于处理我们的响应数据的吧
  * 第二步: 服务端接收到请求后，将数据进行对应的封装响应给客户端
  * 第三步: 客户端收到响应数据后，会自动调用对应的回调函数，从而实现跨域请求的响应数据获取
* JSONP 只能够解决 get 请求产生的跨域吧
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, 
  initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script>
    function getStudentData() {
      // 创建 script 标签
      const script = document.createElement('script')
      // 防止 script 脚本重复侵入
      script.onload = function() {
          script.remove()
      }
      // 设置 src 跨越请求站点
      // ? 后面的参数只要是给服务器提供信息，服务器具体使用的回调函数是什么
      script.src = 'https://www.baidu.com/student?serverrunmethod=callback'
      // script 添加到页面中
      document.body.appendChild(script)
    }
    
    function callback(data) {
        console.log(data)
    }
  </script>
</body>
</html>
```

## 配置代理服务器解决跨域问题
* 就是通过的是我们的 http-proxy-middleware 来解决跨域请求的
* 代理服务器进行解决我们的跨域问题就是利用的是我们的: 服务器之间的不跨域的特性实现的呐
  * 通过我们的该代理配置让我们的代理的源向我们的服务端发送的请求呐
* 每个脚手架中的 devServer 都是使用了我们的 http-proxy-middleware 来实现的呐

> * 后面的就是使用我们的 nginx 或者说 cli 中的 devServer 进行解决我们的跨域问题了