# 跨平台开发文档

## 了解跨平台开发
* 以前的移动端开发的话主要是我们的 ios 和 android 开发的，主要使用的语言是: object-c 和 kotilin
* 原生开发的优点
  * 对于我们的硬件支持是十分高得
  * 原生开发的话成本是十分高的，以及上线是需要进行审核的呐
  * 但是我们的开发成本是十分高的以及开发难度也是十分高的呐
* 跨平台开发
  * 就是实现的是一套代码多端运行的，但是这个代码需要经过编译成对应的平台代码
  * 但是硬件支持方面有很大的不足吧，但是开发周期以及版本发布是很快的呐，代码迭代也是十分快的呐
* 跨平台开发方案
  * `PhoneGap、Cordova`
  * `ReactNative、Weex` 基于Virtual DOM来实现我们的跨平台开发
  * `Flutter` 基于Dart语言来实现我们的跨平台开发
  * `uniapp、taro、微信小程序` 基于前端语言来实现我们的跨平台开发 
* 开发中的选择
  * 要求高性能的话就是选择我们的原生开发 kotilin object-c
  * 要求硬件支持以及性能要求不是很高的话 Flutter
  * 要求硬件支持低，易上手，版本易迭代 UniApp Taro

## uni-app 初识
* uni-app 是基于我们的 vue.js 来实现的一个跨平台开发框架
* 在内部可以实现支持的就是我们的跨: 小程序，ios，android 等平台的发布吧
* uni-app 是由我们的 DCloud 团队来维护的呐，这个也是我们的`流应用开发体系`的呐

## uni-app 初体验
* 创建uni-app项目方式
  * 通过`可视化界面`或者说 `Vue-Cli` 两种方式实现创建
  * 主要使用的集成开发工具是我们的: HbuilderX 的前端开发工具的呐，其对我们的 uni-app 进行了特别的强化吧
  * 运行 uni-app 程序的话也是通过我们的可视化界面完成的呐，`我的评价是这个IDE是我到现在用过最难用的了，没有之一`
  * 真机调试的话需要下载安装我们的 `mumu模拟器`，小程序调试的话需要安装我们的`微信开发者工具`
  * 然后实现对IDE进行我们配置，需要使用到我们的 `abd 调试桥`来实现在 `mumu` 模拟器中调试我们的 uniapp 项目
    * `~~HBuilderX\plugins\launcher-tools\tools\adbs` 添加到系统环境变量中去
    * `adb connect 127.0.0.1:7555` 实现连接模拟器
    * `adb devices` 显示当前可用的模拟器
  * 项目的目录结构划分
    * `main.js` 就是整个项目的入口文件
    * `pages` 下的就是我们的一个一个的页面
    * `App.vue` 就是我们的整个项目的入口文件，全局代码的书写吧
    * `pages.json` 整个项目的配置文件，主要是配置一些顶部栏的样式或者说页面的配置吧

![img36](/img_36.png)

## uni-app App.vue uni.css
* 这个就是我们的整个程序中的App组件
* 因为我们的小程序开发中具备的一些概念就是我们的: `App根组件`或者说是 `Page组件`
  * 同时在该文件中可以做一些关于App组件的生命周期的监听吧
  * 同时在根组件中可以实现的是进行书写一些全局的样式等等吧
* uni.css 就是定义一些全局的样式的文件配置吧
  * 该文件就是相当于书写的我们的 `:root` 的样式吧
  * 同时在我们的每个组件中的话都是具备对应的 `page` 样式名的，
  * 该名称主要是用于实现我们的样式的定义吧
* App.vue 和 uni.css
  * 在该文件中主要是定义一些全局的普通样式的吧
  * uni.css 中主要是实现的是我们的书写一些全局的变量名的吧，和 `:root` 是一样的呐

## uni-app getApp()
* 该方法实现的是在子页面中获取得到我们的全局的App实例的
* 为什么获取全局App实例呐？？
  * 主要的目的就是为了获取得到我们的全局App中定义的 globalData 数据的呐
```vue
<script setup>
  // todo: child-page code
  import { ref } from 'vue'
  const app = getApp()  // 实现获取得到全局的App 应用，从而实现获取得到全局定义的 globalData 数据
  const Appdata = app.globalData.message  // 通过 app 实例实现的是对应的操作的吧
  const title = ref("hello")
  const message = ref("world")

  const changeMessage = () => {
    message.value = message.value === "world" ? "hello world" : "world";
  }
</script>
```
```vue
<script>
    // todo: app-page code
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// 定义我们的全局数据
		globalData: {
			message: "hello world",
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
```

## uni-app getCurrentPages()
* 该方法实现的是获取当前页面的路由信息吧，是微信小程序开发原生中的一个内置的全局API吧
* 这个是页面中自带的一些 api 吧
```javascript
const pages = getCurrentPages();
console.log(pages.routes); // 获取当前页面的路由信息吧
```

## uni-app page.json
* 该文件主要是实现我们的页面的一些配置信息吧，该文件和我们的小程序开发中的 app.json 是十分相似的呐
  * 在小程序原生开发中具备的配置文件分为两类，一种是我们的全局配置的 `app.json`，一种是页面配置文件: `[page].json`
* 内部的配置主要是
  * pages 配置项目中具备的页面有哪些吧
  * globalStyle 配置全局的display的配置吧
```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "juwenzhang"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "tabBar": {

  },
  "uniIdRouter": {}
}
```

## uni-app manifest.json
* 主要就是我们的一些基本配置吧，但是对于我们的小程序的 AppId 需要进行额外获取得到吧
* 这个文件配置配置就可以了

## uni-app 中常用组件
* view 组件，类似于web开发中的 div
* text 组件，类似于web开发中的 span
* button 组件，类似于web开发中的 button
* image 组件，类似于web开发中的 img
* scroll-view 组件，类似于web开发中的 div, 但是这个组件是滚动的
* swiper 组件，类似于web开发中的 div, 但是这个组件是滚动的，就是我们的一个轮播图罢了
* swiper-item 组件，类似于web开发中的 div, 但是这个组件是滚动的，就是我们的一个轮播图中的元素罢了
* navigator 组件，类似于web开发中的 a 标签，但是这个组件是跳转的

## uni-app 一些样式技巧
* 将我们的一个样式转变为全局样式的实现形式为:
  * :global(.className) 那么我们的该样式就是全局可用的样式了，样式的上升获取
  * :deep(className) 这样就可以实现往下延申得到我们的深层样式选择器了，样式的穿透

## uni-app uni-ui 组件库
* uni-ui 是一个使用我们的UI组件库，一套全面使用Vue和flex布局实现的一个跨全端的UI框架吧
* 如果说需要进行对应的使用的话，我们需要做的就是实现引入我们的 uni_modules 来实现引入我们的依赖包吧
  * 简单的方式就是直接在我们的官网中点击引入即可，或者说使用我们的 npm 进行安装引入也是可以的呐
* 然后实现的在我们的 uni.scss 中进行重写我们的主题色吧，也就是我们的全局样式的重写吧

## uni-app 页面间通信
* 通过 url 查询字符串和EventChannel 进行通信
  * 主要就是通过我们的 navigator 组件来实现的呐，通过 url 后面添加我们的 query_params 实现我们的数据传输吧
  * 通过事件控制跳转实现传递参数: uni.switchTab() 或者说 uni.redirectTo() 或者 uni.navigateTo() 来实现的呐
    * 这些就是我们的一些路由吧
  * 在进行我们的事件回调的时候具备一定的回调函数的处理: res.EventChannel.emit() 来实现需要跳转的时候传递的数据的吧
  * 然后在跳转的页面中中通过生命周期 onLoad() 来获取到我们的传递过来的数据吧
* 通过事件总线实现操作
  * uni.$emit(eventName, params)  触发全局的自定义事件
  * uni.$on(eventName, callback)   监听全局自定义事件，最终被 uni.$emit() 触发的事件
  * uni.$off(eventName, callback)   移除全局自定义事件监听器
  * uni.$once(eventName, callback)   监听一个自定义事件，只能触发一次
* 通过全局数据 globalData 实现通信
* 使用本地数据缓存实现通信
* 使用Vuex 或者说 Pinia 状态管理库实现获取

## uni-app 生命周期函数
* 在原生的小程序中，我们的生命周期分为两种，一种是页面的生命周期，一种是应用的生命周期
  * onLoad() 页面加载的时候触发的函数
  * onShow() 页面显示的时候触发的函数
  * onReady() 页面加载完成之后触发的函数
  * onHide() 页面隐藏的时候触发的函数
  * onUnload() 页面卸载的时候触发的函数
  * onPullDownRefresh() 页面下拉刷新的时候触发的函数
  * onReachBottom() 页面触底时候触发的函数
  * onPageScroll() 页面滚动的时候触发的函数
  * onTabItemTap() 点击 tab 时触发的函数
  * onBackPress() 点击返回按钮时触发的函数
* 如果说是使用我们的 composition api 的话我们实现使用的就是我们的从 @dcloudio/uni-app 中导入对应的生命周期函数的呐

## uni-app 网络请求API
* uni.request(options) 来实现我们的对应的网络请求的吧
```javascript
const BASE_URL = 'https://www.baidu.com'
const TIMEOUT = 5000
class MyRequest {
    request(url, method = 'GET', data = {}, header = {}) {
        return new Promise((resolve, reject) => {
            uni.request({
                url: BASE_URL + url,
                method,
                data,
                header,
                success: (res) => {
                    resolve(res.data)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    }
    get(url, data = {}, header = {}) {
        return this.request(url, 'GET', data, header)
    }
    post(url, data = {}, header = {}) {
        return this.request(url, 'POST', data, header)
    }
    put(url, data = {}, header = {}) {
        return this.request(url, 'PUT', data, header)
    }
    delete(url, data = {}, header = {}) {
        return this.request(url, 'DELETE', data, header)
    }
    patch(url, data = {}, header = {}) {
        return this.request(url, 'PATCH', data, header)
    }
    head(url, data = {}, header = {}) {
        return this.request(url, 'HEAD', data, header)
    }
    options(url, data = {}, header = {}) {
        return this.request(url, 'OPTIONS', data, header)
    }
    trace(url, data = {}, header = {}) {
        return this.request(url, 'TRACE', data, header)
    }
}
```

## uni-app 网络请求问题解决
* 给我们的网络相关的API配置合法域名
* 微信小程序测试阶段: 不校验合法域名
* 运行在手机的时候，打开手机真机调试
* 请求投中的 content-type 设置为 application/json

## uni-app 数据缓存
* 主要是分为我们的同步和异步API
  * uni.setStorage(options)
  * uni.getStorage(options)
  * uni.removeStorage(options)
  * uni.clearStorage(options)
  * uni.getStorageSync(options)
  * uni.setStorageSync(options)
  * uni.removeStorageSync(options)
  * uni.clearStorageSync(options)

## uni-app 组件
* uni-app 实现编写组件的时候一定要符合我们的 easycom 规范

## uni-app Pinia 引入
* 和我们的web开发是差不多的吧，我们在 uni-app 中不需要进行手动的安装 pinia 的，但是使用 vue-cli 创建的需要通过 npm 安装的吧
* app.use(Pinia.createPinia()) 这个时候全局就实现使用了我们的 pinia 工具了吧

## uni-app 工程化项目
* 主要是使用我们的 uni cli 来实现的创建的吧，主要是使用的我们的 vue cli 来实现的吧
* **https://zh.uniapp.dcloud.io/quickstart-cli.html**

## uni-app 项目的发布流程
* 对于我们的发布小程序的话，我们需要的是: 注册一个小程序的 appId 和 appSecret，然后进行我们的小程序发布即可
  * 对于我们的 uniapp 而言的话，具备 DCloud 的APPID，也是具备小程序官方的APPID的
* 对于我们的 h5 的发布的话和以前的就是一样的呐，主要就是进行对应得打包构建出产物，然后进行部署上线即可吧，
  * 都是主要是修改我们的 manifest.json 配置即可，部署的时候结合我们的 nginx 配合使用吧
* 对于android的打包以及上线
  * 云打包: 可以`使用云端证书`来作为我们的APP的认证信息吧，DCloud 账号结合使用进行的吧，云端证书是自动生成的我们的证书的
    * 手动的生成我们的证书的话，就可以使用命令行工具来实现吧，主要需要我们的一个 android 的环境，需要含有 apk 配置吧
      * `apk` 就是我们的一个安卓应用了吧，也是可以使用 android-studio 手动生成证书的吧，证书就是我们额 `jks` 文件吧
      * mumu 模拟器的话调试的话就是安装我们的 apk 即可完成操作吧
  * 离线打包
    * 环境准备: android-studio HBuilderX SDK 

## Taro 初识
* taro 是我们的京东凹凸实验室出品的一个跨端开发框架吧
* taro 支持我们的使用 React/Vue/Preact 等框架实现我们的开发架构吧
* taro 可以实现支持我们的多端开发吧，和ReactNative 是一样的呐，都是十分火的一个跨端选择吧
* 在使用我们的 taro 的时候，还是先了解一下我们的 ReactNative 来实现对应的开发吧

## Taro 结构设计
* Taro 当前的架构主要是分为: `编译时` 和 `运行时`
* Taro 编译器的选择: Vscode 或者说 WebStorm 来实现对应的编译

## Taro 初使用
* `npm i -g @tarojs/cli`
* 这个时候我们的全局就具备我们的 taro 命令行工具了吧
* 创建 taro 项目的命令为: `taro init projectName | npx @tarojs/cli init projectName`
* 对于我们的 taro 和 uni-app 开发思想和我们的原生的微信小程序开发思想是一致的呐，通过 `app 应用`和 `page 页面开发` 和 `配置项`来实现的呐

## Taro webpack结构
* config 主要是存放我们的配置文件的呐
* src 主要是存放我们的代码文件，内部分为我们的 app 应用以及 pages页面应用
* project.config.json 主要是存放我们的项目配置文件，仅仅是微信小程序的配置文件

## Taro 开发规范
* Taro 的开发规范主要是分为我们的 `组件规范` 和 `页面规范`
* 组件大驼峰命名。并且需要进行导包
* 推荐使用flex布局进行对应的开发
* 相对而言的话我们的 taro 和 uniapp 相比，相对不行，但是开发思想都是一样的呐
  * 但是对于 vscode 和 webstorm 的开发者来说的话，taro 亲和度更高吧
  * 每个页面的配置文件的话含有: .config.js .jsx .scss 文件吧，和我们的原生小程序开发很类似的吧
  * 但是对于不同的平台的话，需要根据不同的平台配置对应的不同的配置文件吧: project.xxx.json 的配置，这个直接上官网即可
    * project.config.json 就是对应的微信小程序的配置文件吧