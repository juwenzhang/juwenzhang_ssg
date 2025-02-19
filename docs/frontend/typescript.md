# TypeScript 文档
## 环境搭建
* npm install -g typescript
* tsc --init
* npm install -g ts-node
* npm install tslib @types/node

## 声明变量
```typescript
let myName: string = 'Tom';
let myAge: number = 25;
let myHobby: string[] = ['football', 'basketball'];
let myInfo: [string, number, string[]] = ['Tom', 25, ['football', 'basketball']];
```

## 数据类型
### TypeScript number 数据类型
* number 表示的就是数值型
```typescript
let myAge: number = 25;
```
### TypeScript string 数据类型
* string 表示的是字符串
```typescript
let myName: string = 'Tom';
```
### TypeScript boolean 数据类型
* boolean 表示的是布尔值
```typescript
let myIsMarried: boolean = false;
```
### TypeScript array 数据类型
* array 表示的是数组
```typescript
let myHobby: string[] = ['football', 'basketball'];
let nums: Array[number] = [1, 2, 3];
```
### TypeScript null 和 undefined
* null 和 undefined 表示的是空值
```typescript
let myNull: null = null;
let myUndefined: undefined = undefined;
```
### TypeScript object 数据类型
* object 表示的是对象
```typescript
let myInfo: object = {}
let infos: { name: string, age: number } = {
    name: 'Tom',
    age: 25
}
```
### TypeScript function 函数
```typescript
function func01(num1: number, num2: number): void {
    console.log(num1 + num2);
}

// 定义具有返回值类型的函数
function func02(num1: number, num2: number): number {
    return num1 + num2;
}

type obj = {
  time: number,
  text: string
}
// 开始实现我们的使用这个类型
function func03(_obj: obj): obj[] {
  let arr: obj[] = [];
  arr.push({
    time: _obj.time,
    text: _obj.text,
  })
  return arr
}
console.log(func03({
  time: 0,
  text: "hello world"
}))
```
### TypeScript 对象数据类型的使用
```typescript
type __obj = {
    name: string,
    age: number,
    id: string
}

// 开始实现使用我们的自定义数据类型了吧
const my_obj: __obj = {
    name: "John",
    age: 8,
    id: "JuWenZhang"
}

// 开始我们的对象类型和函数类型一起使用
function get_obj_info(obj:__obj) {
    console.log(obj.name, obj.id, obj.age)
}

get_obj_info(my_obj)  // 这个就是我们的对象类型和函数类型的结合实现使用了吧
// 后面有一个和我们的 type 十分类似的方法来结合实现使用的 interface 实现的
// Java 中也是具备我们的 interface 接口的定义的
// Golang 中也是具备我们的 interface 接口的定义的呐

type PointType = {
    x: number,
    y: number,
    z: number
}
// 开始定义一个函数获取我们的信息
const get_point_x = (point: PointType) => point.x
const get_point_y = (point: PointType) => point.y
const get_point_z = (point: PointType) => point.z
const get_all_info = (point: PointType): Array<number> => ([point.x, point.y, point.z])

// type 就是为了实现的是解决我们的 object 对象类型的一种自定数据类型，主要是自定义我们的对象类型
// 当然其他的数据类型也是可以的呐

type AgeType = number
// 开始使用我们的自定义数据类型了
const getAge = (age:AgeType):AgeType => age 


// 可选数据类型
type PointType3d = {
    x: number,
    y: number,
    z?: number
}
const get_x_info_3d = (point: PointType3d):number => point.x
```

### TypeScript any 数据类型
```typescript
// 开始实现使用我们的 any 数据类型了
let id: any = "cvfhidhis"
id = 1
let _id: string | number | undefined = 1
_id = "hello jwt id"
_id = undefined
let _unKnown:unknown = "hello jwt id"
_unKnown = 123  
if(typeof _unKnown === "string") {
    console.log(_unKnown.length)
}
```

### TypeScript void 数据类型
* 有过 C | CPP 语言基础的话，这个数据类型是是十分的清晰
* 就是用来实现的是指定我们的一个函数是没有返回值的，这个时候类型就是 void 类型了吧
```typescript
function foo():void {
    console.log("我是 foo 函数呐")
}
```

### TypeScript 元组数据类型 tuple
* 就是实现的定义的是我们的不可变的数组数据类型
```typescript
let _tup:any[] = [
    18,
    "juwenzhang",
    "nodeJs",
    "hello world"
]
for (let item of _tup) {
    console.log(item)
}

// 对象类型的保存
type DataType = {
    name:string,
    age:number,
    id: string | number | null
}
// 开始实现使用
const _data_type: DataType = {
    name="hello",
    age=18,
    id: null,
}

// 开始实现定义我们的多种数据的数组
const _arr:(string | number)[];

// 开始定义我们的元素
// 这个就是我们的元组数据类型的定义了吧
const _arr_tup:[
    string,
    number,
    boolean
] = [
    "hello world",
    18,
    true
]

// 这个就是我们的 ts 封装的 useState 吧
function useState<T>(Initialization: T): [T, (newValue: T) => void] {
    let stateValue = Initialization
    function setStateValue(newValue:T) {
        stateValue = newValue
    }
    return [stateValue, setStateValue]  // 这里就是返回的是我们的元组形式吧
}

const [value, setValue] = useState("hello world")
console.log(value)
setValue("hello react")
console.log(value)
```
## 进阶使用
### TypeScript 联合类型
* 就是实现的使用我们的运算符来实现重构出我们的新的数据类型的方法吧
  * 联合类型就是使用的是我们 **|** 进而达到的我们的联合类型吧
* 在其他的语言中就是 Union-Type 的数据类型吧
  * 有两个或者多个其他类型共同构成的
  * 表示的后面的数据类型可以是后面任何的类型吧
```typescript
function printId(id: string|number): string | number {
    return id
}

// 实现方案二
type IdType = number | string
function printId1(id: IdType): IdType {
    return id
}

// 实现方案三
const printId2 = (id: IdType):IdType => id

// 实现方案四
const printId3 = function (id: IdType):IdType {
    return id
}

console.log(printId3("hello world"))
```

### TypeScript type 类型别名的使用
* 主要的话就是实现的是我们的给类型添加类型别名的呐
  * 有一些项目中公用的类型的话，就是使用 type 来实现命名一个类型别名吧
  * 在整个项目中进行使用的呐
```typescript
import {isNumber, log} from "node:util";

type Id_Type = string | number | boolean;

// 开始使用我们的类型别名
let type_id : Id_Type = "hello world"
console.log(type_id)

type_id = 10
console.log(type_id)

type_id = true
console.log(type_id)

function getId(id: Id_Type): Id_Type {
    return id
}

const getId1 = (id: Id_Type):Id_Type => id


// 定义一个坐标类型吧
type Point_Type = {
    x: number,
    y: number,
    z?: number
}
const getAllInfo = (rect:Point_Type): void => {
    console.log(rect.x, rect.y, rect?.z)
} 
```
### TypeScript interface 接口的使用
* 就是实现的是我们的为类型起别名的
  * type 的话实现的为任何的类型起别名的，这个更加宽吧
    * type 是不允许两个相同的别名声明两次的
  * interface 的话就是实现的是对对象类型起的别的呐，类似于结构体吧
    * interface 可以多次声明一个类型的呐
    * 这个可以实现的是我们的很多的特性吧
  * 一般的话声明我们的 interface 使用更高吧
  * 非对象类型的声明直接使用我们的 type 即可
```typescript
interface Person {
    name: string;
    age: number;
    sex: string;
}

interface Person {
    id: string
}

interface Student extends Person {
    study: Function
}

class Person implements Student {
    // 开始对我们的接口进行实现，和 java 十分类似的呐
}

const persons: Person[] = [
    {
        name: "juwenzhang",
        age: 18,
        sex: "男",
        id: 1
    },
    {
        name: "76433",
        age: 19,
        sex: "男"
    }
]
console.log(persons)
```
### TypeScript 交叉类型
* 还是使用的是运算符构成的类型呐，同时满足即可
```typescript
// 开始实现我们的交叉类型吧
interface _Person {
    name: string;
    age: number;
}

interface _ICoder {
    name: string
    coding: <T>() => T 
}

// 交叉类型主要的话就是用在我们的自定义数据类型中的呐
type MixinType = _Person & _ICoder;
```
### TypeScript 类型断言 as
```typescript
// 开始实现使用我们的类型断言
// 就是在获取 DOM 的时候
const imgEl = document.querySelector('.img') as HTMLImageElement  // 这个就是类型断言吧

// 类型断言的话是实现的是两个类型之间具备一定的关系的呐
// 大范围 --> 小范围: 上面的例子: Element --> HTMLImageElement
// 小范围 --> 大范围
```

### TypeScript 非空类型断言 !.
* 这个和我们的可选链是十分相似的: ?.
```typescript
// 开始实现我们的非空类型断言
interface Person {
    name: string;
    age: number;
    friends?: {  // 可选属性 friends
        name: string;
        age: number;
    }
}

const info:Person = {
    id: "11", 
    sex: "男",
    name: "juwenzhang",
    age: 18
}

console.log(info.friends?.name)

info.friends!.age = 10
```
### TypeScript 枚举类型
```typescript
enum Direction {
    left = "left",
    right = "right",
    up = "up",
    down = "down"
}
console.log(Direction.left)
```
### TypeScript 字面量类型
```typescript
type Direction = "left" | "right" | "up" | "down";

function getDirection(direction: Direction) {
    switch (direction) {
        case "left":
            return "left";
        case "right":
            return "right";
        case "up":
            return "up";
        case "down":
            return "down";
    }
}

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
interface RequestConfig {
    data?: Object,
    headers?: Object,
    body?: Object,
}
function request(url: string, method: string): Promise<RequestConfig> {
    return new Promise((resolve, reject) => {})
}

const _info = {
    url: "",
    method: "post"
}
// 解决方案一: 如果后面的参数不转的话就会报错的呐
request(_info.url, _info.method as RequestMethod).then().catch()

// 解决方案二: 让我们的 info 为字面量类型
const __info: {url: string; method: "post"} = {
    url: "jsfdhsj",
    method: "post",
}
// 解决方案三: 使用我们的 as const 来实现吧
const _info1 = {
    url: "jsfdhsj",
    method: "post",
} as const
request(_info1.url, _info1.method)
```
### TypeScript 类型缩小操作
* typeof 类型缩小操作
* switch 平等缩小类型操作，针对于我们的字面量联合类型来实现的缩小吧
* instanceof 来实现判断
```typescript
function printId(id: string|number): void {
    if (typeof id === "string") {
        console.log(id.length)
    } else {
        console.log(id)
    }
}

type Direction = "left" | "right" | "up" | "down"
function userMoveTo(direction: Direction): void {
    switch(direction){
      case "left":
        console.log("left")
        break;
      case "right":
        console.log("right")
        break;
      case "down":
        console.log("down")
        break
      case "up":
        console.log("up")
        break
    }
}

function printData(date: String | Date): void {
    if (date instanceof Date) {
      console.log(date.getTime())
    } else {
      console.log(date)
    }
}
```

## 函数的类型
### TypeScript 函数本身类型
* JS 中我们的函数是一等公民
* 所以说 TS 中函数的类型又是什么呐？？？？
  * 就是我们的 Function 或者函数类型表达式来表示的是我们的函数类型吧
```typescript
function foo(num1:number, num2:number):number {
    return num1 + num2;
}

const bar:Function = (num1:number, num2:number):number => {
    return num1 + num2;
}

const foo_bar:Function = function(num1:number, num2:number):number {
    return num1 + num2;
}

// 函数类型表达式来表示我们的函数的类型
const bar_foo
    : (num1:number, num2: number) => number  // 这个就是函数类型表达式
    = function(num1:number, num2:number):number{
    return num1 + num2;
}

type FuncType = (num1:number, num2:number) => number
// 开始使用我们的函数类型表达式了
const func: FuncType = (num1:number, num2:number):number => {
    return num1 + num2;
}

// 开始实现书写一个我们的嵌套函数吧
// 由于我们的函数表达式过长了，这个时候就可以使用我们的 type 来实现一定的优化方案吧
// type 类型别名 type FuncType = (num1:number, num2:number) => number
function calc(calcFn:(num1:number, num2:number) => number): number {
    const num1 = 10
    const num2 = 120
    return calcFn(num1, num2)
}

// 开始实现我们的函数调用
console.log(calc(function(num01:number, num02:number){
    return num01 + num02
}))
```
* typescript 是不会对我们的函数类型内部参数个数进行检测的呐，哈哈

### TypeScript 中的函数 this 指向问题的解决
* 首先我们的函数的话实际上的话，this 的指向默认是any，但是这样的this 指向在我们的 Typescript 函数中是不允许的呐
* 所以说我们就需要使用工具来完成对应的转换才是可以的呐
  * ThisParameterType 工具的使用
    * 用来实现的是我们的用来提取一个函数类型中 this 参数的工具吧
```typescript
// ts 是可以根据上下文推导得出我们的 this 指向的呐

const per = {
    name: "juwenzhang",
    age: 18,
    sayHello: function() {
        console.log(this)  // 上下文推导，得出我们的 this 的
    }
}

// this 的隐式绑定
per.sayHello()  // { name: "juwenzhang", age: 18, [Function: sayHello] }

// 函数的默认执行
const sayHello = per.sayHello
sayHello()  // undefined

// 函数的执行的显示绑定
per.sayHello.call("hello world")  // hello world


// 开始实现我们的最原始的函数书写的 this 问题解决吧
function _Func() {
    console.log()
}

type Func_Type = typeof _Func  // 获取函数的类型
type Func_Type_This = ThisParameterType<Func_Type>
```

## 面向对象
### Typescript 初步进入面向对象
* TS 中的面向对象
* 成员修饰符 public protected private
```typescript
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

// 创建实例
const per = new Person("juwenzhang", 18)
console.log(per.name, per.age)
```
### Typescript 面向对象getters/setters
* TS 中的getters/setters
* 就是面向对象中私有属性进行外部可访问的时候直接使用这两个方法即可
```typescript
class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    // 提供setters/getters 方法让外部可以访问
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
}
const per = new Person("juwenzhang", 18)
console.log(per.name, per.age)
```
### Typescript readonly 的使用
```typescript
class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, readonly age: number) {
        this._name = name;
        this._age = age;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
}
```

### Typescript 面向对象继承
* 对于我们的继承的话，使用的最多的就是我们的菱形继承吧，这种的继承可以帮助我们实现的就是我们的继承关系的合理设计模型吧
* 同时这种的话在其他的语言中还具有我们的抽象类，或者说的抽象方法
  * 就是在我们的父类中不能直接实现我们的抽象方法，但是可以继承我们的抽象方法
  * abstract 修饰符
    * 抽象方法只能出现在我们的抽象类中
    * 同时抽象方法的话不要书写具体的实现吧
    * python 或者说 java 中都是由接口的概念的呐，都是通过我们的抽象类来实现的呐
    * 抽象类中抽象方法，子类必须实现的
```typescript
abstract class Shape {
    constructor(public readonly name: string) {
        this.name = name
        console.log(this.name)
    }
    abstract getArea():number
  
    getShapeName(): string {
        return this.name
    }
}

class Circle extends Shape{
    constructor(public readonly radius: number) {
        super("Circle")
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    constructor(public readonly width: number, public readonly height: number) {
        super("Rectangle")
        this.width = width
        this.height = height
    }
    getArea(): number {
        return this.width * this.height
    }
}

class Triangle extends Shape{
    constructor(public readonly base: number, public readonly height: number) {
        super("Triangle")
        this.base = base
        this.height = height
    }
    getArea(): number {
        return (this.base * this.height) / 2
    }
}

// 这个时候我们是可以实现的是我们的直接只用父类，就可以实现我们的继承的
// 同时也是可以实现编写我们的通用接口了
// 内部可以传递的实例的话可以是我们的父类，也可以传递父类的子类
function CalcArea(shape: Shape):number {
    return shape.getArea()
}

const circle = new Circle(10)
console.log(CalcArea(circle), circle.getShapeName())  // 314.1592653589793

const rectangle = new Rectangle(10, 20)
console.log(CalcArea(rectangle), rectangle.getShapeName())

const triangle = new Triangle(10, 20)
console.log(CalcArea(triangle), triangle.getShapeName())
```

## 泛型使用
* **一起来玩类型体操吧，比算法还好玩，呜呜呜！！！**
### TypeScript 泛型基本使用
```typescript
// 函数泛型
function foo<T, U>(name:T, age:U): [T, U] {
    return [name, age]
}
// 开始实现调用我们的函数，也就是在我们的函数调用的时候指定我么的参数类型吧，返回的就是我们的元组吧
// 这个时候我们的参数就实现了参数的类型化了
console.log(foo<string, number>("juwenzhang", 18))
```
### TypeScript 泛型实现useState
```typescript
// 开始实现封装我们的useState 使用泛型，需要使用的是我们的泛型约束 + 元组约束
function useState<T>(initialState: T): [T, (newState: T) => void] {
    let state = initialState
    function setState(newState: T) {
        if (state === newState) return  // 两次的状态一致的话，就直接返回了
        state = newState  // 修改我们的 state 的值，同时引起视图变化即可
    }
    return [state, setState]
}
const [count, setCount] = useState<number>(0)
console.log(count, setCount)
setCount(11)
```
### TypeScript 多个泛型参数
```typescript
function foo<T, U>(name:T, age:U): [T, U] {
    return [name, age]
}
const [name, age] = foo<string, number>("juwenzhang", 18)
console.log(name, age)
```
### TypeScript 泛型和interface
```typescript
interface Person<T, N> {
    name: T,
    age: N
}

const per: Person<string, number> = {
    name: "juwenzhang",
    age: 18
}

// 泛型默认数据类型使用
interface IPerson<T = string, N = number> {
    name: T,
    age: N
}

// 不指定数据类型就是使用的是默认的类型了
const iper: IPerson = {
    name: "juwenzhang",
    age: 18
}
```
### TypeScript 泛型类的使用
```typescript
class Person<T = string, N = number> {
    private _name: T;
    private _age: N;
    constructor(public name: T, public age: N) {
        this._name = name
        this._age = age
    }
    public get name(): T {
        return this._name
    }
    public set name(value: T) {
        this._name = value
    }
    public get age(): N {
        return this._age
    }
    public set age(value: N) {
        this._age = value
    }
}
const per = new Person("juwenzhang", 18)
console.log(per.name, per.age)

const per1 = new Person<number, number>(11, 11)
console.log(per1.name, per1.age)
```

### TypeScript 泛型继承
```typescript
interface ILength {
    length: number
}

// 这个时候只允许有length 属性的数据传入函数了
function getDataLength<T extends ILength>(data: T): number {
    return data.length
}
console.log(getDataLength<string>("juwenzhang"))
console.log(getDataLength<Array<number>>([1, 2, 3, 4, 5]))
console.log(getDataLength<{length: number}>({length: 10}))
```

### TypeScript 泛型keyof约束
* 就是说明的是对于对象而言的话，这个类型就是某个对象中的键的一部分了
```typescript
interface Person {
    name: string,
    age: number,
}

// 开始定义变狼
const person: Person = {
    name: "juwenzhang",
    age: 18
}

function getDataInfoByKey<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
console.log(getDataInfoByKey(person, "name"))
console.log(getDataInfoByKey(person, "age"))
// console.log(getDataInfoByKey(person, "sex")) 报错，因为这个属性不存在
```

### TypeScript 泛型和 Mapped 映射
```typescript
// 相当于就是实现的是对我们的对象的一种遍历拷贝把
type MapPerson<T> = {
    [key in keyof T]: T[key]  // 索引签名
    // 定义其他的类型    
}
// 定义我们的具体的类型约束
interface Person {
    name: string,
    age: number,
}
type NewPerson = MapPerson<Person>
const per: NewPerson = {  // { name: string, age: number }
    name: "juwenzhang",
    age: 18
}
```

### TypeScript 泛型和 Mapped 的修饰符
* readonly 和 ? 的实现使用把
```typescript
interface Person {
    name: string,
    age: number,
    sex: string
    height: number,
    address: string
}

// 开始实现使用我们的类型映射让所有的类型变为可选的以及只读的类型
type MapPerson<T> = {
    readonly [key in keyof T]?: T[key]  // 这样的写法本来就是默认具备了循环遍历的效果了的
}

type NewPerson = MapPerson<Person>  
// { readonly name?: string; 
//   readonly age?: number; 
//   readonly sex?: string; 
//   readonly height?: number; 
//   readonly address?: string; 
// }
```

### TypeScript 条件类型
* 用来实现的是我们额输入类型和输出类型之间的
* someTypes extends OtherTypes ? TrueType : FalseType
```typescript
type IDType = number | string

type ResType = number extends IDType ? true : false

// ts 类型体操了，哈哈哈
function sum<T extends number|string>(params1:T, params2:T): T extends number?number:string {
    return params1 + params2
}

console.log(sum(10, 12))  // 22
console.log(sum("github", "/juwenzhang"))  // github/juwenzhang
```

### TypeScript 条件类型推断 infer
* ReturnType 内置工具吧
```typescript
type CalcFnType = (num1:number, num2: number) => number  // 定义函数类型

type CalcFnReturnType = ReturnType<CalcFnType>  // 获取得到的就是函数类型的返回值了 number

function foo() {
    return "string"
}
type FooFnReturnType = ReturnType<typeof foo>  // string类型了

// 开始 ts 的类型体操了，手搓 ReturnType
// T extends (...args:any[])=>any 限制传入的是函数类型
// T extends (...args: any[]) => infer R? R:false 使用类型推断得出我们的具体类型
type MyReturnType<T extends (...args:any[])=>any>=T extends (...args:any[])=>infer R?R:false

// 实现推断出参数类型
type MyParameterType<T extends (...args:any[])=>any>=T extends (...args:infer A)=>any?any:A
```

### TypeScript 分发类型
```typescript
type toArray<T> = T extends any ? T[]:never

type NumberArray = toArray<number>  // number[]

type NumberAndStringArray = toArray<number|string>  // number[] | string[]
```

### TypeScript Partial 类型可选转换
```typescript
interface Person {
    name: string
    age: number
    sex: string
}

// 开始使用我们的额以前的转换，就是我们的 Map 来实现的了
type PersonOptional<T> = {
    [K in keyof T]?: T[K]
}
// 转换为只读可选
type PersonOptionalReadOnly<T> = {
    readonly [K in keyof T]?: T[k]
}

// 使用 Partial 工具来实现
type PersonOptional1 = Partial<Person>
```

### TypeScript Required 类型必选转换
```typescript
interface Person {
    name: string
    age: number
    sex: string
}

type PersonOptional = Partial<Person>

// 转化为必选
type PersonRequired = Required<PersonOptional>

// 自定义实现必选
type toRequiredType<T> = {
    [k in keyof T]: T[k]
}
// 自定义实现必选 + 只读
type toRequiredReadonlyType<T> = {
    readonly [k in keyof T]: T[k]
}
```

### TypeScript Record 键值对转换
```typescript
// Record<key, value>
// keyof 获取出来的是我们的联合类型，所以说使用我们的 in 的时候就是实现的是联合类型遍历吧
interface Person {
    name: string
    age: number
}
type IdType = number|string
type objType = Record<IdType, Person>

const obj: objType = {
    1: {
        name: "juwenzhang",
        age: 18
    }
}
```

### TypeScript Pick 选择类型
```typescript
interface Person {
    name: string
    age: number
    sex: boolean
}

type toPick = Pick<Person, "name"|"age">  // { name:string, age:number }

type MyPick<k, v extends keyof k> = {
    [m in keyof v]: k[m]
}
```

### TypeScript Omit 过滤类型
```typescript
interface Person {
    name: string
    age: number
    sex: boolean
}

type toOmit = Omit<Person, "sex"> // { name:string, age:number }

type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never: P]: T[P]
}
```

## 内置类型工具
### TypeScript 模块化开发一
* 我们的模块化开发含有我们的 commonjs 和 esModule 的模块化开发的呐
  * commonjs 的模块化开发的话主要是使用在我们的nodeJs的环境中使用的呐
  * esModule 的模块化开发的话主要是使用在我们的浏览器中使用的呐
* 我们的原生的 ts 进行编写代码的话是具备我们的不分离作用域问题的
  * 所以说就是因为这一点，我们的 ts 文件之间是互不分离的，都是在全局的呐
  * 为了解决这个，我们是可以在代码中添加 **export {}** 来实现生成我们的作用域问题吧
```typescript
export function getSumNum(a: number, b: number): number {
    return a + b
}
// 为了让编辑器认为这个是一个模块，我们需要的就是添加这一行代码了
export {}
```
### TypeScript 模块化开发二
* 但是在我们的 ts 中的模块化开发中的话，对于类型的导入的话尽量实现的是在前面添加前缀 type
  * 该字段实现的是我们的在编译成 javascript 代码的时候，我们的编译会自动忽略该类型的导入吧
  * 这个就是 type 关键字的意义了，主要是为我们的编译时期生效的呐，这也是一个小细节了吧
  * 添加 type 关键字的话可以实现的是让我们的 ts 编译成 js 的编译速度更加的快吧
  * 特别是针对于我们的 非 ts 编译器吧，babel 编译工具就可以实现的是编译的更快吧
    * 告诉对应的编译器的话实现的是，有那些玩意在编译的时候可以被安全的移除吧
```typescript
export function getSumNum(a: number, b: number): number {
    return a + b
}
export interface IPerson {
    name: string,
    age: number
    sex: string
}
```
```typescript
// 实现在其他的模块中进行另一个模块的内容
// 但是对于我们的类型导入的话推荐使用 type
import { getSumNum, type IPerson } from "./test"

// 开始实现使用我们的另一个模块了
console.log(getSumNum(1, 2))

const per: IPerson = {
    name: "juwenzhang",
    age: 18,
}
```

### TypeScript 类型查找
* 首先我们得使用 typescript 的话实现的是我们的有两个吧
  * 一个就是提供了给我们的默认的业务开发的 .ts 文件
  * 一个就是我们的类型声明文件 .d.ts 文件了，这个文件主要是用来实现的是我们的 ts 的类型声明吧
    * type declaration 文件 或者说是 类型定义 type definition 文件
```typescript
// 开发中的模块化开发中的类型声明文件 type.d.ts 文件，取代我么的 type.ts 文件
// 该类型的文件主要是用雷实现的是我们的项目的类型声明的呐
// 开始实现自定我们的类型了
type IPerson = {
    name: string,
    age: number,
    sex: string
}

interface InterfacePerson{
    name: string,
    age: number,
    sex: string
}

// 使用我们的映射泛型，实现我们的将一个类型转化为全部是可选的类型了
type MapPerson<T> = {
    [Property in keyof T]?: T[Property] 
}
type ChoicePerson = MapPerson<IPerson>
type ChioceInterfacePerson = MapPerson<InterfacePerson>

// 在我们的 .d.ts 文件中声明的一些类型的话直接在我们的全局中就可以实现使用了的
// 就不用导出，其他的文件中直接使用即可了
// 这样后我们会给迁居提供两种类型的验证了，一种是我们的不是可选连的类型验证
// 一种就是我们的可选链的类型验证了吧
```
* 通过上面的案例的话，我们的 typescript 的话类型声明是如何实现的呐？？？
  * 内置类型声明 --- document | HTMLElement | HTMLButtonElement 这些都是内置的类型声明
  * 外部定义类型声明
  * 自定义类型声明
* 自定的话，自定义格式可以是
  * `lib.[something].d.ts`
### TypeScript 内置声明环境
* 我们是可以通过配置我们 tsconfig.json 文件来实现我们的一些类型声明的呐
  * 主要是配置我们的 target 和 lib 选项卡吧

### TypeScript 工程化开发
* npm init 初始化项目，生成我们的 package.json 文件
* npm install webpack webpack-cli --save-dev 使用我们的 webpack 打包工具
  * 配置 webpack.config.js 文件
* 比如说下面的配置中的话使用到了我们的 path 文件的
  * 所以说这也是暗示了大家一个点的
    * 就是前端学习的路线吧
    * 有很多的人的话学习前端就是按照什么尚硅谷或者说黑马官网给的路线学习的前端，但是实际上呐这个是十分的不合理的
    * 因为他们的路线是那种先学习的 nodejs ，然后学习的我们的什么 vue 和 react
    * 但是说实话的话，现在的前端行业的话是 **重前端轻nodejs** 的
      * 但是我们的 webpack 和 vite 的配置中的话会使用到我们的 path 或者 fs 模块
      * 所以说只要先学习了这两个的 api 的使用后，就可以进行 vue 或者 react 的开发了
      * 毕竟我们的实际业务需求的话最主要的是我们的前端开发，nodejs 的服务器开发业务少之又少
      * 学了也是忘了，所以说就在空闲之余学习一下 nodejs 这才是合理的安排吧
  * 比如说在很多的大厂招聘信息里面的需要nodejs 的开发经验的话实际上不是叫你真真的具备该经验
    * 他的宗旨是为了你能够对后端更加的数据吧，这样后你对于前端的跨域请求就会有更加深刻的解决方案吧
    * 这就是为什么需要你具备 NodeJs 开发经验的原因所在吧
    * 一定要认清现实的，希望学习前端的其他开发者的话可以合理安排自己的学习路线吧
      * 不要盲目的跟从于什么黑马，什么尚硅谷，也不要轻信网络上的什么前端已死
      * 主要是自己的能力行的话，你永远也死不了的
      * ai 的出现也有人说前端真真的死了，但是实则不然，ai 的出现影响的是所有的行业，不仅仅是前端
      * 辩证的看待问题吧，在这里希望大家越来越优秀吧，坚持把这条充满荆棘的路走下去
      * 未来是光明的，心向光明，你的路才会越来越通畅吧
  * 但是进入公司后也不要懈怠呐
    * 比如说我们字节或者阿里的话都是员工的等级制度吧
    * 通过不断的打怪升级，你的等级也会越来越高
    * it 行业就是处于一个持续学习的行业，不懈怠，热爱技术，这颗心一致保持下去
    * 同时我也希望一点的是，通过看我博客学习的友友们，不要有程序员行业的歧视吧，都不容易的，都很艰辛的
```typescript
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",  // 指定开发模式为开发环境，部署上线的时候可以使用 production
    entry: "./src/index.ts",  // 指定项目的入口文件
    output: {
        path: path.resolve(__dirname, "dist"),  // 指定输出的路径 __diename 和 __filename 都是 nodejs 的内置变量
        filename: "bundle.js"  // 指定打包出来的 js 文件名
    },
    // 项目中包含的扩展名
    resolve: {
        extensions: [".ts", ".js", ".cjs", ".mjs", ".json", ".jsx", ".tsx"]
    },
    // 配置不同文件类型的解析规则，以及需要使用的 loader
    // less 解析 | css 解析 | sass 解析 | stylus 解析 | scss 解析 | ts 解析 | jsx 解析 | tsx 解析 | vue 解析 
    // webpack 默认是可以解析我们的 js 文件的，这个可以不用配置的，
    module: {
        rules: [
            // 配置项目的 ts 解析规则
            {
                test: /\.ts$/,
                loader: "ts-loader",  // npm install ts-loader --save-dev
            },
            // 配置 webpack 解析文件类型
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset/resource",  // webpack 新版本的解析方法，以前使用的 loader 解析的方式
            }, 
            
            // 配置解析 vue 文件
            {
                test: /\.vue$/,
                loader: "vue-loader",  // npm install vue-loader --save-dev
            },
            // 配置解析 jsx 和 tsx 文件
            {
                test: /\.(jsx|tsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"    
                            ]
                        }
                    }
                ]
            }    
        ]
    },
    // 配置项目中需要使用到的全局插件
    plugins: [  
        // npm install html-webpack-plugin --save-dev 帮助我们实现我们的 html 文件的打包
        new HTMLWebpackPlugin({
            template: "./src/index.html"  // webpack 和 vite 中 index.html 文件路径有一定的不同，这个注意区分
        })
    ],
  
    // 配置我们的开发服务器
    devServer: {  
        // npm install webpack-dev-server --save-dev
        port: 3000,
        open: true,  // 尽量不要暴露，false，但是随意吧
        hot: true,
        host: "localhost"
    },
  
    // 配置我们的代理服务器，解决我们的跨域请求的 cors 问题
    proxy: {
        "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
            pathRewrite: {}
        }
    }
}
```
* 配置我们的 tsconfig.json 文件
  * npm install typescript --save-dev
  * 该工具全局提供了一个 tsc 工具的呐
  * 通过该工具初始化项目的 tsconfig.json 文件吧
  * tsc --init
* 为什么需要配置我们的 tsconfig.json 文件呐？？
  * 是因为我们的项目中的 ts-loader 实现编译我们的 ts 文件的时候
  * ts-loader 是依赖于我们的 tsconfig.json 文件中的配置的规则实现的我们的解析的呐
* target 配置字段是十分的关键的
  * 该配置主要是实现的是配置我们的打包后版本信息是什么
  * 指定的版本也就是我们的 es 的不同的版本吧
  * 我的这个就是主要是配置的是我们的 es6 版本
* lib 配置字段
  * 配置的是指定我们的那些库是可以直接进行使用的呐
  * `lib:["DOM"]` 
* paths 配置字段
  * 也就是一个相对路径的配置，主要配置的是我们的 src 目录下的相对路径
  * 实现的就是我们的项目别名的配置吧，还是很有用的呐
* 这里还是来夸一下我们的开源社区吧
  * 就是因为有这些开源社区的贡献
  * 我们的现在的前端适配性的东西变得比以前轻松很多了
  * 没有我们的 babel | postcss | vue-loader 的社区存在，我们的前端开发会很难受的呐
  * 这也是为什么我主要做开源的原因之一吧
  * 这里我推荐两个我们团队开发的开发两个 react 的组件库吧
    * semi-design 和 arco-design 还是十分好用的呐
    * 由于我是才加入字节，所以说我还没来得及提供任何公用的组件吧
    * 但是我在这里还是推荐一下吧，当然不可否认的是我们的 ant-design 也是国内很好的很优秀的组件库
      * 特别是其源码的组织是十分好的呐，可以多学习学习吧
    * vue 的话可以使用一下 elementPlus ，对于 vue 组件库开发我还是了解的十分少的呐
      * 但是也是不可否认的是 vue 也是十分好的前端 ui 框架吧
  * 这里还是拓展一下吧
    * 就是我们的实际上的话前端的这几个开发框架的话都是在互相借鉴的呐
      * 尤雨溪知道吧，vue 框架的主要贡献者，实际上上的话他也是我们的 angular 开发团队的以前的成员呐
```json
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "es6",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"]
}
```
* 最后的话就是实现的是配置我们的 package.json 的呐
  * 主要是配置 package.json 的script 启动脚本文件的呐
    * 一般的话可以实现配置的启动脚本的话就是我们的 
      * dev 开发环境启动脚本
      * build 生产环境打包脚本
      * start 启动生产环境打包后的文件
      * test 测试环境启动脚本
      * 当然还是有很多的其他的配置，根据自己的项目自己选择性的来配置吧
        * 配置的话也主要是我们的 api 命令的调用吧
* 在使用 Typescript 进行项目开发的时候的话我们需要注意的是:
  * 有很多的包都是没有类型声明的呐
  * 这个时候就需要自定类型包了
  * `lib.[something].d.ts`
* 那我们如何声明一个类型包模块呢？？？
  * 我们就以 lodash 举例子吧
  * lodash 就没有默认的包含我们的类型声明文件的呐
```typescript
// 首先创建我们的 lib.lodash.d.ts 文件
// 注意该文件只是书写我们的声明的，不具体的实现我们的方法吧
// 这个声明的模块包的话，在全局中都是可以实现使用的呐
declare module "lodash" {  // 声明类型模块
    export function join<T>(...args: T[]): T 
    export function split<T>(...args: T[]): T
    export function concat<T>(...args: T[]): T
    export function cloneDeep<T>(...args: T[]): T
    export function clone<T>(...args: T[]): T
    export function isArray<T>(...args: T[]): T
    export function isObject<T>(...args: T[]): T
    export function isFunction<T>(...args: T[]): T
    export function isString<T>(...args: T[]): T
    export function isNumber<T>(...args: T[]): T
    export function isBoolean<T>(...args: T[]): T
    export function isNull<T>(...args: T[]): T
    export function isUndefined<T>(...args: T[]): T
    export function isRegExp<T>(...args: T[]): T
    export function isDate<T>(...args: T[]): T
    export function isError<T>(...args: T[]): T
    export function isSymbol<T>(...args: T[]): T
    export function isMap<T>(...args: T[]): T
    export function isSet<T>(...args: T[]): T
    export function isWeakMap<T>(...args: T[]): T
    export function isWeakSet<T>(...args: T[]): T
    export function isPlainObject<T>(...args: T[]): T
    export function isEmpty<T>(...args: T[]): T
    export function isEqual<T>(...args: T[]): T
    export function isEqualWith<T>(...args: T[]): T
    export function isMatch<T>(...args: T[]): T
    export function isMatchWith<T>(...args: T[]): T
    export function isNil<T>(...args: T[]): T
    export function isFinite<T>(...args: T[]): T
    export function isNaN<T>(...args: T[]): T
    export function isInteger<T>(...args: T[]): T
}
```

### Typescript 自定义声明文件
* 首先我们的整个项目中的话，我们是需要进行实现一些自自定义类型声明的呐，这个时候就可以实现我们的自定义声明了
```typescript
// types/self.d.ts
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    score: number;
    grade: string;
    getScore(): number;
    getName(): string;
    setName(name: string): void;
}

declare const JuWenZhang: Student;

// 注意任然不需要实现的呐
declare class ClassPerson {
    private name: string;
    private age: number;
    
    constructor(name: string, age: number)
    getName(): string
    setName(name: string): void
    getAge(): number
    setAge(age: number): void
}

// 声明文件模块
declare module "*.png"
declare module "*.pneg"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.svg"
declare module "*.css"
declare module "*.less"
declare module "*.scss"
declare module "*.json" 
declare module "*.ts"
declare module "*.tsx"
declare module "*.js"
declare module "*.jsx"
```
```typescript
// 其他文件中实现使用
// 具体的实现
JuWenZhang = {
    name: 'JuWenZhang',
    age: 18,
    score: 100,
    grade: 'A',
    getScore(): number {
        return this.score
    },
    getName(): string {
        return this.name
    },
    setName(name: string): void {
        this.name = name
    }
}

// 实现调用
console.log(JuWenZhang.getName())
```

## axios 细粒度封装（五颗星，哈哈哈）
* 有点小难，但是思想很顺畅的呐（封装了大约三个小时左右，吸收三个小时，尽力了，哥们！！！呜呜呜）
  * 实际上的话这样的封装的话，是JavaScript 比较不了了，JavaScript 的话不好这样封装的
  * 看不懂的话来问我即可: 3137536916@qq.com
  * 或者说掘金私聊我也是可以的呐: 76433橘子
* 由于代码大量使用了泛型，可能你们封装不来，我的建议是如果使用不来的话直接全员 any 类型也是可以的呐
  * 让我们的 TypeScript 变成我们的 AnyScript 也不是不可以的哈，哈哈哈！！！
  * 看懂了的可以自己尝试着封装我们的 fetch API 吧，使用 any 封装出来了也是很优秀的，这是真的
    * TS 中的类型模型的话实际上比很多的后端语言的数据模型还要大很多的
```typescript
// MyAxiosRequest.ts
import axios from "axios"
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"
import config from "./config.mjs";

// 接口可以抽到 types 文件中去，实现代码的抽离嘛，注意引入类型的时候，使用 type 关键字
// 提高 ts 编译工具的解析速度，懂？？？
// 主要是引入 MyAxiosRequestConfig 类型吧
// 引入实例: import type {MyAxiosRequestConfig} from "myAxiosType.ts"  export导出模式
//         import type MyAxiosRequestConfig from "myAxiosType"  export default 导出模式
interface MyInterceptors<T> {
    // 调用者手动传入的请求成功的拦截函数  
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    // 调用者手动传入的请求失败的拦截函数
    requestFailFn?: (err: any) => any
    // 调用者手动传入的响应成功的拦截函数
    responseSuccessFn?: (res: T) => T
    // 调用者手动传入的响应失败的拦截函数
    responseFailFn?: (err: any) => any  
}
// 对我们的 AxiosRequestConfig 进行扩展，实现允许调用者传入拦截器的
interface MyAxiosRequestConfig<T=AxiosResonse> extends AxiosRequestConfig {
    interceptors?: MyInterceptors
}

// 开始实现对 axios 请求的封装
class MyAxiosRequest {
    private instance: AxiosInstance
    constructor(config: MyAxiosRequestConfig) {
        this.instance = axios.create(config)
    
        // 配置请求全局拦截器
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            config.headers = {
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": localStorage.getItem("token") || "",
                "Accept": "application/json",
                // 下面的拦截是为了解决我们的 cors 的跨域问题，面试的时候这个肯定需要问的
                // 这个也就是我们的为什么需要拥有 nodejs 开发经验的原因之一吧
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "3600",
                // 还可以配置 cdn 缓存的字段哟，中高级程序员必会的，必考的一点，和后端的 SSO 单点登录一样的难点吧
                // 目前单点登录使用的团队就是 jd 团队了，jd 还实现开发了我们的 taro 微信小程序开发框架
                // 重邮红岩的重邮帮和蓝山的we重邮都是使用taro实现的呐
                "Cache-Control": "max-age=10"
            }  
            return config
        }, err => {
            return err  
        })
        // 配置响应全局拦截器
        this.instance.interceptors.response.use(res => {
            return res  
        }, err => {
            return err
        })
    
        // 局部拦截器的封装
        if (config?.interceptors) {
            this.instance.interceptors.request.use(
                config.interceptors?.requestSuccessFn,
                config.interceptors?.requestFailFn    
            )
            this.instance.interceptors.response.use(
                config.interceptors?.responseSuccessFn,
                config.interceptors?.responseFailFn    
            )
        }
    }

    // 封装网络请求方法
    request<T=any>(config: MyAxiosRequestConfig) {
        // 判断是否有我们的请求成功的拦截器
        if (config.interceptors?.requestSuccessFn) {
            config = config.interceptors.requestSuccessFn(config)  // 返回的 config 是经过拦截器处理过的
        }
        // 解决返回结果 res 是 unkown 数据类型的问题，给我们的 promise 一个类型
        return new Promise<T>((resolve, reject) => {
            // 发送网络请求, request 源码中是让我们传入了类型了的呐
            this.instance.request<any, T>(config).then(res => {
                // 判断是否具备请求成功的拦截器传入吧
                if (config.interceptors?.responseSuccessFn) {
                    res = config.interceptors.responseSuccessFn(res)
                }
                // 这里有很多的前端学习者都有的问题，就是为什么必须 .data，这个的话是 axios 内部源码的封装格式吧
                // api 接口真真返回给我们的数据真真在的是我们的 .data 中的呐
                resolve(res.data) 
            }).catch(err => {
                // 判断是否具备请求失败的拦截器传入吧
                if (config.interceptors?.responseFailFn) {
                    err = config.interceptors.responseFailFn(err)
                }
                reject(err)
            })
        })
    }

    get<T=any>(config: MyAxiosRequestConfig) {
        this.request<T>({ ...config, method: "get" })
    }

    post<T=any>(config: MyAxiosRequestConfig) {
        this.request<T>({ ...config, method: "post" })
    }

    put<T=any>(config: MyAxiosRequestConfig) {
        this.request<T>({ ...config, method: "put" })
    }

    delete<T=any>(config: MyAxiosRequestConfig) {
        this.request<T>({ ...config, method: "delete" })
    }
    
    options<T=any>(config: MyAxiosRequestConfig) {
        this.request<T>({ ...config, method: "options" })
    }
}
```
* 这样的 axios 的封装实现了我们的细粒度的控制拦截器了吧
  * 首先注意一点的是我们的 axios 拦截器是可以创建多个的
  * 越在后面进行添加的拦截器，越早执行吧，所以说就不用考虑多个拦截器的时候的问题
  * 所以说我们对拦截器的配置的话分为了两大类
    * 第一类就是在创建 axios 实例的时候进行拦截器的配置
      * 在创建实例的时候还可以进行更加细粒度的控制
    * 第二类是在调用我们的实例方法的时候进行拦截器的配置
    * 这种思想的话就和为什么出现 unocss 的方案的思想一致了，细粒度的开发
      * 开发者更加好控制代码的执行
* 拦截器细粒度的控制的话可以是我们的:
  * 在创建 axios 示例的时候拦截器的细粒度的控制
    * 有些接口可以有拦截器，有些接口可以没有拦截器
    * 有些接口可以拥有自己的拦截器
    * 这个就是创建 axios instance 的时候拦截器的细粒度的控制吧
  * 在进行调用我们的实例方法的时候拦截器的细粒度的控制
    * 如何传入了实例的时候的拦截器，我们就使用手动拦截的拦截器
    * 如果没有传入实例的时候的拦截器，我们就使用默认的拦截器
    * 这个就是我们的调用实例方法的时候的拦截器配置吧
## 编程世界拓展知识
* 主要是结合的是我当前遇到的问题下面列出来的吧
* 对于网络请求的话中高级程序员必备的知识就是:
  * 文件断点上传
  * 前端缓存策略
  * 实现SSO单点登录
  * 性能优化方面
  * 动态列表
  * 页面的数据加载处理
  * 后端分布式开发
  * 后端限流，认证，权限中间件的封装，还有很多很多
  * 反正网络交互方面是最多的，这一观点很重要吧
* 虽然听了这些后你们感觉是面试要问的
  * 但是对于我们来说只是八股文背背背
  * 对于中高级程序员的话是彻底理解，以及提供更多的创新解决方案吧
  * 虽然我只是一枚字节小小实习生，但是我尽力在我大学期间就向字节的2-2靠拢吧