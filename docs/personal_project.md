# 个人的校园以及个人项目经历

---
## 蓝山工作室1+7前端可视化项目的开发
* 项目介绍
  * 项目主要是使用的是前端 vue3 + 前端 webpack 打包工具 + 前端 typescript 完成的一个项目
    * 其中使用了 vue 中的生态有:
      * vue3 vue-router pinia echarts axios dataV elementPlus 前端大屏项目
      * 同时该项目写了两套代码，分别的是 pc 端，和移动端两套代码的合并
  * 项目后端使用的是 java 的 springBoot 来实现的开发
    * 当时是我们前端和工作室后端两人共同完成的该项目
* 项目收获
  * 在该项目完成的过程中，学习到了关于前端的 elementPlus + echarts + dataV 等前端大屏组件库的使用
  * 以及尝试了首次的 devOps 的开发模式吧
  * 同时接触到了除了 github | gitlab | gitea 等代码托管平台之外的其他的托管平台: e.coding.net 远程代码托管平台
* 最后收获
  * 在项目的最后获取了开发团队中最高金额，该项目是主要是完成重庆市教育局的要求的一个项目吧
  * 最后呐收获到了 2700 ，还是很开心的，毕竟是我大学的第一个项目吗，还是挺开心的呐，哈哈哈
* 项目地址: http://222.177.23.155:7001/#/login


---
## 蓝山团队共同集成的开发脚手架搭建
* 在蓝山期间实现了自己的多人合作的项目二，就是 taroBest 脚手架的开发
  * 该工具主要的实现的是我们的使用 taro 跨端开发框架脚手架的模拟吧
  * 在其中我主要是提供了两个模板，一个就是 vue3 默认的模板配置，一个就是 vue3-i18n 的模板配置
* 开发难点
  * 总所周知的是 taro 跨端开发框架的话，官网最初提供的是关于 react 的配置
  * 也是只 taro4.x 出来后才完善的 vue3 的配置文档，所以说当时就十分的难受吧
  * 而且社区也有一句话吧，就是 taro 选择 react ,uniApp 选择 vue3
  * 所以说当时通过查询文档资料还是解决了配置问题吧，还是在最后获取得到的成功了的
* 而且现在是十分庆幸的是 taro4.x 的推出，关于 vue3 的配置也是完善了许多，但是我当时提供的时候还只是 taro3.x 尽力了
  * 呜呜呜！！！

---
## 个人项目一
* vueWithVant
  * 主要使用的技术栈是我们的 vue3 + pinia + axios + vue-router + vant + less + vite + javascript
  * 通过该项目学习到了前端的适配性方案，学会了移动端的开发
  * 同时初次自己将项目部署到了自己的腾讯云服务器，使用了 nginx 
  * 但是由于后期的资金不足，服务器就被释放了，所以这个项目就暂时没有在 github 上面开源了
  * 但是还是可以的，后面想着使用 github-actions 进行持续化集成和持续化部署来实现我们的这个github-pages部署功能
    * 但是由于是自己的首次配置github 的工作流，所以说最终就是以失败告终了
    * 后面也是没有管他了，但是在开发这个项目的过程中，对自己项目的合理安排，文件的合理合理分类，有很多的组件都实现了自己的合理封装吧
    * 所以说还是挺不错的呐，成长还是十分大的
* 项目地址: https://github.com/juwenzhang/VueWithVant

---
## 个人项目二
* byte_react_airbnb
  * 主要使用的技术栈是我们的: 
    * react + javascript + react_router + antd + less + 
    * webpack + axios + redux + react_redux + react_router_dom
    * react-toolkit + material-ui + fakerJs + styled-components 
  * 在该项目中实现了对 axios 的二次封装，同时使用了我们的 flex 布局实现了很多的很好看的效果吧
    * 同时由于没有后端接口，通过查阅 github ，接触到了 fakerJs 这个库
    * 就使用该工具进行了数据的模拟，但是在项目中还是具备网络请求的功能的
    * 但是通过 try...catch 和 promise 的处理，让最终项目展示的数据来自自己的 fakerJs 的数据了
    * 这样就实现了训练了自己的网络请求，也实现了自己的异常处理的机制吧
  * 同时该项目也是在大量使用了媒体查询的
    * 对于移动端适配方面还是很不错
    * 同时项目自定义封装了大量的组件，提高了代码的可复用性以及可维护性，代码的组织还是十分的规范的呐
  * 同时该项目的 github-actions 也是配置成功了的
    * 同时项目虽然是个人开发，但是只不过的话，还是自定义模拟了 devOps 的开发规范
    * 开创了多个分支的开发模式吧
    * 同时也使用了 github-actions 的持续化部署功能
    * 真真体会到了现在的分工开发的经验吧
  * 项目地址: https://juwenzhang.github.io/byte_react_airbnb
   