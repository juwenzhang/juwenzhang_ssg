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

## Golang 数组的使用
* 定义的形式为:
  * `var array_name [array_length]array_type`
  * `array_name := [array_length]array_type{value1, value2, value3}`
    * 指定长度的定义形式
  * `array_name := [...]array_type{value1, value2, value3}`
    * 使用用`...` 运算符实现的是动态计算的形式
```go
func main() {
  var array [5]int;
  array = [5]int{1, 2, 3, 4, 5};
  
  arrayName := [...]int{1, 2, 3, 4, 5};
}
```

## Golang 切片
* 切片是动态数组，切片的声明形式为:
  * `slice := make([]array_type, array_length, array_capacity)`
  * `slice := make([]array_type, array_length_capacity)`
  * `slice := array_name[start:end]`
```go
func main() {
  slice := make([]int, 5, 10);
  slice = []int{1, 2, 3, 4, 5};
  
  sliceName := []int{1, 2, 3, 4, 5};
  sliceName = sliceName[1:3];
  sliceName = sliceName[:3];
  sliceName = sliceName[1:];
}
```

## Golang map数据结构
```go
func main() {
  mapName := make(map[string]int);
  mapName["key"] = 1;
  mapName["key"] += 1;
  
  for key, value := range mapName {
    fmt.Println(key, value);
  }
  
  map_name := map[string]int{
    "key1": 1,
    "key2": 2,
    "key3": 3,
  }
  for key, value := range map_name {
    fmt.Println(key, value);
  }
  
  newMapName := make(map[string]int, 10);  // 指定容量
  for key, value := range newMapName {
    fmt.Println(key, value);
  }
}
```

## Golang 分支语句的书写
```go
func main() {
  if true {
    //...
  } else if false {
    //...
  } else {
    //...
  }
  
  switch initData {
    case 1:
      //...
      break;
    case 2:
      //...
      break;
    default:
      //...
      break;    
  }
}
```

## Golang 循环语句的书写
```go
func main() {
  // 简单使用
  for i := 0; i < 10; i++ {
    fmt.Println(i);
  } 
  
  sum := 0
  for i, j, k := 0, 1, 2; (i < 10) && (j < 10) && (k < 10); i++, j++, k++ {
    sum += i + j + k
  } 
  fmt.Println(sum)
  
  for key, value := range map {
    fmt.Println(key, value)
  }
}
```

## Golang type 关键字
* 主要是使用的是我们的 type 关键字实现的呐，type 关键字是可以实现对应的自定义类型的声明的呐
* `type struct_name struct {}`
```go
package main

import "fmt"

// 实现自定义一些类型案例吧
type T1 int
type T2 T1

func main() {
  t1 := T1(1)
  t2 := T2(2)
  fmt.Println(t1, t2)
}
```

## Golang 结构体
* `type struct_name struct {}`
```go
package main 

type Address struct {
  City     string
  Country  string
  Province string
}

type Person struct {
  name      string
  age       int
  address   Address
}

//复合字面量的定义
type T struct {
  T1 int
  T2 string
  T3 Address
  T4 []int
  T5 map[string]int
  T6 Person
}

func main() {
  address := Address{
    City     : "北京",
    Country  : "中国",
    Province : "北京",
  }
  
  person := Person{
    name      : "张三",
    age       : 18,
    address   : address,
  }
  
  t := T{
    11,
    "hello",
    Address{
      City     : "北京",
      Country  : "中国",
      Province : "北京",
    },
    []int{1, 2, 3, 4, 5},
    map[string]int{
      "key1": 1,
      "key2": 2,
      "key3": 3,
    },
    Person{
      name      : "张三",
      age       : 18,
      address   : address,
    }
  }
  
  fmt.Println(person.name)
  fmt.Println(person.age)
  fmt.Println(person.address.City)
  fmt.Println(person.address.Country)
  fmt.Println(person.address.Province)
  fmt.Println(t.T1, t.T2, t.T3, t.T4, t.T5, t.T6)
}
```

## Golang interface 接口定义
* 接口定义的形式为:
  * `type interface_name interface{}`
* Golang 中接口的定义的话主要是实现的是我们的定义对象行为的方式把
  * 只是定义一个对象具备的一些指定的方法，但是不去实现把，具体的实现在后面进行对应的实现的一种格式的定义吧
  * 接口就是一种行为准则规范吧，没有其他的含义吧，根据的接口的定义，实现具体的一些方法吧

```go
package main
type Animal interface {
  Run() string
  Fly() string
}

type Dog struct {}
type Cat struct {}

func (dog *Dog) Run() string {
  return "dog run"
}

func (dog *Dog) Fly() string {
  return "dog fly"
}

func (cat *Cat) Run() string {
  return "cat run"
}
func (cat *Cat) Fly() string {
  return "cat fly"
}

func main() {
  var animal Animal
  animal = &Dog{}
  fmt.Println(animal.Run())
  fmt.Println(animal.Fly())
  
  cat := &Cat{}
  fmt.Println(cat.Run())
  fmt.Println(cat.Fly())
}
```

## Golang 方法的定义
* `func (struct_name struct_type) method_name(param_name param_type) return_type {}`
  * 首先第一部分的话 `struct_name struct_type` 是一个 receiver
    * 如果说我们的 struct_name 的类型为 struct_type 那么就是说我们的 receiver 是 struct_type 类型的
    * 如果说我们的 struct_name 的类型为 *struct_type 那么就是说我们的 receiver 是 *struct_type 类型的
    * 这样后我们的对应的数据类型是可以调用对应的 receiver 对应的方法的呐
* 也就是说我们的 receiver 的定义的话就是说明对应的类型上具备了对应的 receiver 上的方法的呐，可以直接进行调用
  * 该方法的定义的话 receiver 中的 struct_type 和 *struct_type 是等效的呐
  * 但是如果说我们想要修改实例的话，就需要使用我们的 *struct_type 来实现定义吧
```go
package main
type Person struct {
  Name    string "json:name"
  Age     int    "json:age"
  Address string "json:address"
}

//定义其receiver上的方法
func (person Person) SayHello() string {
  return "hello" + person.Name + person.Address + person.Age
}

func (person *Person) SetName(name string) string {
  person.Name = name
}

func main() {
  person := Person{
    Name    : "张三",
    Age     : 18,
    Address : "北京",
  }
  fmt.Println(person.SayHello())
  
  person.SetName("李四")
  fmt.Println(person.SayHello())
}
```

## Golang goroutine 并发编程
* 主要的形式为: `go func() {}()`
  * go 后面的运行函数的话本身就是一个函数，所以说最后需要进行主动运行的吧
  * 同时携程的话和其他的机制是差不多的吧，都是具备进程守护的呐，如果说我们不进行主动运行的话，那么在主进程中是无法实现运行的吧

```go
package main

// 定义一些需要进行并发处理的函数
func f1() {
  fmt.Println("f1")
}

func f2() {
  fmt.Println("f2")
}

func main() {
  go f1()
  go f2()
  go func() {
    fmt.Println("main")
  }()
  fmt.Println("main")
  time.Sleep(time.Second)  // 保证程序的运行
}
```

## Golang channel 通信机制
* 主要的形式为: `make(chan type)`
* channel 的定义的话主要是对应的是两个方向的，一个是发送的 channel，一个是接收的 channel
* channel 的定义的话主要分为两种类型:
  * 一个是我们的 -> channel，一个是我们的 <- channel
  * 同时使用我们的channel也是可以保证程序中的携程全部执行完的呐
```go
package main
func main() {
  ch := make(chan int)
  go func() {
    fmt.Println("goroutine")
  }()
  fmt.Println("main")
  <-ch  // 阻塞主线程，表示的通信的写入的操作
  time.Sleep(time.Second)
}
```

## Golang 防止协程抢占资源 Mutex
* 主要的话来自于我们的 sync 包中的 Mutex 的定义
* Mutex源码接口为
```go
type Locker interface {
  Lock()
  Unlock()
  TryLock() bool  // 后期加入的呐
}
```

```go
package main

import (
	"fmt"
	"sync"
)

func main() {
	// 创建一个变量count并初始化为0
	var count = 0

	// 互斥锁保护计数器
	var mu sync.Mutex

	// 使用WaitGroup等待10个goroutine完成
	var wg sync.WaitGroup // 创建WaitGroup wg，用于同步并发goroutine的执行

	// 设置WaitGroup等待的goroutine数为10
	wg.Add(2)

	// 循环10次，创建10个goroutine
	for i := 0; i < 2; i++ {

		// 使用go关键字开启一个并发的goroutine
		go func() {

			// 确保在当前goroutine执行完毕后调用wg.Done()，使得WaitGroup的计数减1
			defer wg.Done()

			// 对变量count执行1000次加1
			for j := 0; j < 1000; j++ { // 在当前goroutine中，循环1000次
				// 通过互斥锁mu保证每次只有一个goroutine能修改count
				mu.Lock()
				// -----------临界区开始-----------
				// 每次循环，将count增加1
				count++
				// -----------临界区结束-----------
				// 释放锁，使得其他goroutine能获取锁并修改count
				mu.Unlock()
			}
		}()
	}
	// 等待10个goroutine完成
	wg.Wait() // 阻塞，等待所有goroutine执行完成

	// 打印最终的count的值
	fmt.Println(count)
}
```

```go
package main

import (
    "fmt"
    "sync"
)

// 定义一个包含mutex和一个uint64类型字段的Counter类型
type Counter struct {
    sync.Mutex        // Mutex类型的匿名字段
    Count      uint64 // 计数
}

func main() {
    // 声明一个 Counter 类型的变量 counter
    var counter Counter

    // 声明一个 WaitGroup 类型的变量 wg，它用于等待一组 goroutine 的结束
    var wg sync.WaitGroup

    // 调用 WaitGroup 的 Add 方法，设置需要等待的 goroutine 的数量为10
    wg.Add(10)

    // 循环启动 10 个 goroutine
    for i := 0; i < 10; i++ {
        go func() { // 启动一个 goroutine
            // 当 goroutine 运行结束后，调用 WaitGroup 的 Done 方法，将等待的 goroutine 的数量减1
            defer wg.Done()

            // 内层循环1000次
            for j := 0; j < 1000; j++ {
                // 在修改 counter 的 Count 字段前，先对 counter 调用 Lock 方法，将 mutex 上锁，以避免并发问题
                counter.Lock()
                // 修改 counter 的 Count 字段，将其自增1
                counter.Count++
                // 在修改完成后，对 counter 调用 Unlock 方法，释放 mutex，允许其他 goroutine 进行修改
                counter.Unlock()
            }
        }()
    }

    // 调用 WaitGroup 的 Wait 方法，等待所有 goroutine 运行结束
    wg.Wait()

    fmt.Println(counter.Count)
}
```