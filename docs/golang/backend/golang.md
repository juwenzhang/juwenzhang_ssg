# Golang 文档

## Golang 分析代码结构
```go
package main
import (
  "fmt"
)
func main() {
  /* hello world */
  fmt.Println("hello world")
}
```
* 程序结构的组成
  * 首先是我们的包名称声明 `package mian`
    * 我们的每一个 golang 的程序的运行都是需要含有一个 main package 的
    * 该文件是作为我们的程序的主要入口文件的吧
  * 导入包部分: `import ()` 的语法进行的我们的导入需要进行使用的依赖包的吧
  * 主函数 `func main()` 就是我们的一个程序的主要的执行的入口函数的吧，自动的执行的呐
* 执行 go 语言程序的步骤
  * `go run go_code_fileName.go`  实现的是先打包，然后进行对应的执行
  * `go build go_code_fileName.go`  实现的是将我们的程序打包成可执行的二进制文件吧

## Golang 数据类型
* 整型数据类型
  * uint
  * int
  * 分别就是我们的有符号和无符号的区别吧
* 浮点数据类型
  * float 
  * complex
* 其他的数字类型
  * byte
  * rnue
  * uintptr

## Golang 声明变量
* 第一种形式
  * 第一步声明变量: `var variable_name variable_type`
  * 第二部变量赋值: `variable_name = value`
  * 整合为: `var variable_name [vaiable_type] = value`
  * 具备我们的自动类型推导的呐
* 第二种形式
  * `variable_name := variable_value`  
```go
package main

import (
  "fmt"
)

func main() {
  // 第一种形式
  var num int
  num = 10
  fmt.Println(num)

  // 第二种形式
  var num1 = 20
  fmt.Println(num1)

  // 第三种形式
  num2 := 30
  fmt.Println(num2)
}
```

## Golang 函数
```go
package main

import (
  "fmt"
)

func sum(num1 int, num2 int) int {
  return num1 + num2
}

func getStr(str1 string, str2 string) (string, string) {
  return str2, str1
}

func main() {
  num1 := 10
  num2 := 20
  fmt.Println(sum(num1 + num2))
}
```

## Golang 数组
* 数组定义第一种形式
  * 先声明在赋值
  * `var nums [10]int`
  * `nums = [10]int{}`
* 第二种形式
  * `nums := [10]int{}`
```go
package main

import "fmt"

func main() {
   var i,j,k int
   // 声明数组的同时快速初始化数组
   balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

   /* 输出数组元素 */         ...
   for i = 0; i < 5; i++ {
      fmt.Printf("balance[%d] = %f\n", i, balance[i] )
   }
   
   balance2 := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
   /* 输出每个数组元素的值 */
   for j = 0; j < 5; j++ {
      fmt.Printf("balance2[%d] = %f\n", j, balance2[j] )
   }

   //  将索引为 1 和 3 的元素初始化
   balance3 := [5]float32{1:2.0,3:7.0}  
   for k = 0; k < 5; k++ {
      fmt.Printf("balance3[%d] = %f\n", k, balance3[k] )
   }
}
```

## Golang 指针
* 就是实现的是我们的进行获取一个数据的内存地址的呐
* 内存地址是什么呐: 获取一个确切的值的内存地址的操作，通过取值符实现的 `&`
* 在定义的时候是: `var variable_name *variable_type`
```go
package main

import "fmt"

func main() {
   var a int= 20   /* 声明实际变量 */
   var ip *int        /* 声明指针变量 */

   ip = &a  /* 指针变量的存储地址 */

   fmt.Printf("a 变量的地址是: %x\n", &a  )

   /* 指针变量的存储地址 */
   fmt.Printf("ip 变量储存的指针地址: %x\n", ip )

   /* 使用指针访问值 */
   fmt.Printf("*ip 变量的值: %d\n", *ip )
}
```
* golang 中还具备我们的空指针: nil
  * 在进行后续的判错的时候会大量使用的呐

## Golang 结构体
* 和其他语言的对象或者说 dict 类似的吧
* 基本形式为: `type variable_name struct {}`
```go
package main

import (
  "fmt"
)

type books struct {
  title string
  author string
  subject string
  book_id int
}

func main() {
  fmt.Println(books{"Golang", "juwenzhaqng", "Go", 11})

  fmt.Println(books{
    title: "Golang",
    author: "juwenzhang",
    subject: "Go",
    book_id: 11
  })

  book1 = books{}
  book1.title = "Golang 语言程序设计"
}
```

## Golang 切片
* 主要使用的是我们的 `make()` 函数创建的我们的切片吧
```go
var slice1 []type = make([]type, len)

slice1 := make([]type, len)
```
* 在 go 语言中，切片数据结构的功能比我们的数组更加的强大一些吧

## Golang 映射
```go
// 创建一个空的 Map
m := make(map[string]int)

// 创建一个初始容量为 10 的 Map
m := make(map[string]int, 10)

// map_variable := make(map[KeyType]ValueType, initialCapacity)
```

## Golang 接口Interface
```go
/* 定义接口 */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]
}

/* 定义结构体 */
type struct_name struct {
   /* variables */
}

/* 实现接口方法 */
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* 方法实现 */
}
...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* 方法实现*/
}
```
```go
package main

import (
        "fmt"
        "math"
)

// 定义接口
type Shape interface {
        Area() float64
        Perimeter() float64
}

// 定义一个结构体
type Circle struct {
        Radius float64
}

// Circle 实现 Shape 接口
func (c Circle) Area() float64 {
        return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
        return 2 * math.Pi * c.Radius
}

func main() {
        c := Circle{Radius: 5}
        var s Shape = c // 接口变量可以存储实现了接口的类型
        fmt.Println("Area:", s.Area())
        fmt.Println("Perimeter:", s.Perimeter())
}
```

## Golang 其他
* Goroutines 线程
* Channel 通信
* Scheduler 调度器

## Golang 依赖管理
* Golang 实现依赖管理的话主要是使用的是的 go.mod 文件实现的依赖管理的呐
  * `go mod init` 实现的是初始化 go 模块，生成 go.mod 项目管理配置文件
  * `go get` 实现的是获取一个第三方包的命令吧  
  * `go get -u` 实现的是将所有的依赖包进行更新到最新版本吧
  * `go mod tidy` 实现的是将我们的项目中没有使用的包进行删除
  * `go list` 查看当前所依赖的包有哪些