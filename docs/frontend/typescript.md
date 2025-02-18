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

## 内置类型工具
