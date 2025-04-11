# Golang 文档

## Golang 依赖管理
* Golang 实现依赖管理的话主要是使用的是的 go.mod 文件实现的依赖管理的呐
  * `go mod init module_name` 实现的是初始化 go 模块，生成 go.mod 项目管理配置文件
  * `go get` 实现的是获取一个第三方包的命令吧
  * `go get -u` 实现的是将所有的依赖包进行更新到最新版本吧
  * `go mod tidy` 实现的是将我们的项目中没有使用的包进行删除
  * `go list` 查看当前所依赖的包有哪些
  * `go env -w GO111MODULE=on` 开启我们的模块模式
  * `go env -w GOPROXY=https://proxy.golang.com.cn,https://goproxy.cn,direct` 设置代理
