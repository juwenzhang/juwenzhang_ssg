# CSS 文档

## CSS 文本属性
* **text-decoration**
  * 就是我们的文本的装饰线
    * none 默认值，没有任何的属性
    * underline 下划线
    * overline 上划线
    * line-through 横穿线
* **text-transform**
  * 用来设置的是我们的文字大小写的转换吧
    * capitalize 实现的是我们的每个单词首字母大写
    * uppercase 每个单词中的字母都大写
    * lowercase 每个单词都小写
    * none 默认值
* **text-indent**
  * 设置的是文本中的首行文字的缩进效果
    * 一般的话和文字属性 font-size 连用，一般设置百分比吧
    * 是依据我们的文字的大小来实现决定的我们的缩进的呐
* **text-align**
  * 设置文本的对齐方式
    * left 默认靠左
    * center 居中显示
    * right 靠右排布
    * justify 实现的就是我们的两端对齐
* **letter-spacing**
  * 设置的是字母之间的距离
* **word-spacing**
  * 设置的是单词之间的距离

## CSS 字体属性
* **font-size**
  * 设置的是字体大小
  * 后面的话该属性和移动端适配有一定的相关性
* **font-family**
  * 设置网页中使用的字体
  * 后面可以自定义ui 给予的字体，通过 @font-face 实现我们的自定义字体使用吧
* **font-weight**
  * 设置的是字体粗细程度的
  * 可以是数值，也可以是几个关键字
  * normal | bold
* **font-style**
  * 设置的是我们的文本的样式
    * normal 默认的
    * italic 字体为斜体
    * oblique 斜体
* **line-height**
  * 设置的是我们的字垂直居中的属性
    * 直接指定父元素的高度即可
* **font** 混合写法
  * font-size 和 font-family 不可省略外，其他的都可以省略的
  * font-size 在 font-family 之前
  * font-size/line-height font-family 其他的随便写吧

## CSS display
* 通过该属性可以实现的是转换盒子的显示模式吧
  * display: block | inline | inline-block | flex | none | content

## CSS 隐藏元素方案
* display: none
  * 实现元素的不显示的时候，元素是不占位的
* visibility
  * 默认值是 visible ，隐藏的话就是使用 hidden
  * 是通过的是我们的元素是否可见实现的元素隐藏，还是占位的
* opacity 属性
  * 设置元素的透明度的呐
  * 通过设置透明度来实现的隐藏元素的，元素任然占据着空间的呐

## CSS 元素溢出解决方案 overflow
* visible 默认值
* hidden 超出元素盒子的部分自动隐藏
* auto 超出的部分使用滚动条形式展示
* scroll 滚动条展示

## CSS 盒子模型
* 盒子模型分类
  * 内容区域: content
  * 内边距: padding
  * 边框: border
  * 外边距: margin
* box-sizing 属性
  * content-box
    * 就是我们的设置宽高是内容区域的宽高
    * 设置的内边框，内边距，外边距都会把盒子撑大吧
    * 这个时候显示的是: width + border + padding
  * border-box
    * 这个时候我们的内容区域的宽高为: width - border - padding
* 盒子阴影
  * text-shadow 文字阴影
  * box-shadow 盒子阴影

## CSS 背景设置
* **background-color**
  * 实现的是我们的设置盒子背景色
* **background-image**
  * 设置的是背景图片，可以和 object-fit连用
* **background-repeat**
  * 设置的图片是否平铺
    * no-repeat
    * repeat-x
    * repeat-y
    * repeat
* **background-size**
  * 设置背景的尺寸的
    * contain
    * cover
    * 宽高值或者说百分比吧
* **background-position**
  * 设置的背景的位置的
  * left | center | right
  * top | center | bottom
* background-attachment
  * 设置的背景是否随着我们的浏览器视口的滚动而滚动
    * scroll  背景图相对于元素是静止的
    * local
    * fixed
* 混合属性书写
  * **background: b-color b-image b-position/b-size b-repeat b-attachment**

## CSS position 定位
* position 具备的几个属性
  * static 静态定位，
    * 这个就是标准流
  * relative 相对定位，
    * 通过相对定位可以发现，元素本身还是会占用页面中在标准流中的位置的空间的
    * 所以说我们有时间的话会使用该属性实现我们的控制父元素的相对移动，但是任然占有我们的位置的
  * absolute 绝对定位
    * 完全脱离标准流了的，相对于父元素类实现移动位置的呐
    * 相对定位（relative）就是实现的是对我们的元素进行在标准流中的位置的调整
    * 绝对定位（absolute）就是实现的是一个`container block`为子元素调整位置的
  * fixed 固定定位
    * 完全脱离标准流了的，元素不会随着视口的滚动而滚动吧
  * sticky 粘性定位
    * 相对定位和固定定位的结合体
  * z-index
    * 设置元素的层级吧
* 控制元素的整体显示
  * top
  * bottom
  * left
  * right

## CSS float 浮动流
* 脱离了标准流的
* float 具备的属性含有
  * left  就是左浮动
  * right  右浮动
  * none  没有浮动
* 清除浮动带来的影响
  * clear 实现我们的清除浮动吧
    * left
    * right
    * both
    * none

## CSS flex 弹性盒布局
### flex 布局的基本概念
* 就是我们的 flexible box 的缩写的
* 开启 flex 布局的方式是:
  * display: flex | inline-flex
  * flex 属性主要是实现的是设置我们的容器形元素开启 flex 布局的
  * inline-flex 属性主要是实现的是我们的行内级元素开启的 flex 布局
```css
.box {
    display: flex;
}

.box1 {
    display: inline-flex;
}
```
### flex 布局的特点
* 设置为我们的 flex 布局后的，子元素的 float clear vertical-align 属性都会失效的
* 但是我们的子元素的 position 定位还是可以生效的呐

### flex 基本的概念
* 采用 flex 布局的元素称之为我们的 flex 容器，内部的子元素自动的成为容器成员，成为 flex item 元素
* 容器默认的存在两个轴，一个是主轴，一个是副轴
  * 通过我们的 flex-direction 属性可以实现设置我们的主轴和副轴到底是水平还是竖直 

### flex 布局 容器属性
#### flex 布局 flex-direction 属性
* 就是实现的是我们的设置flex 布局的方向的呐
  * 属性值含有:
    * **row** 就是设置主轴是水平排布的呐
    * **column** 就是设置的是主轴是竖直排布的呐
    * **row-reverse**
    * **column-reverse**
  * 这些都是 flex 容器的属性，只能写在我们的父容器中，在父容器中决定子元素的的显示模式的
* flex 布局的话可以实现的是让我们的子元素的弹性盒子的展示
  * 移动端适配多使用他来实现的呐
  * flex 布局可以和我们的盒子属性 padding + margin + border + position 来实现我们的卡片效果的呐

#### flex 布局 flex-wrap 属性
* 就是决定的是我们的 flex 布局是否实现换行操作的
* 当我们的父元素中的盒子内的元素十分多的时候，就会造成元素的压缩，导致不可预期的展示效果
* 这个时候我们就可以使用我们的这个属性来设置 flex 盒子中的元素是否实现换行的
  * **nowrap** 不换行，默认的属性
  * **wrap** 换行

#### flex 布局 flex-flow 属性
* 就是对上面的两个属性的简写
  * `flex-flow: <flex-direction> <flex-wrap>`
  * **flex-flow: row wrap**

#### flex 布局 justify-content 属性
* 这个属性就是实现了决定了我们的 flex 布局中子元素在主轴方向的对齐方式
  * flex-start 左对齐，默认的呐
  * flex-end 右对齐
  * center 中对齐
  * space-between 左右两边对齐
  * space-around
  * space-evenly 均匀对齐

#### flex 布局 align-items 属性
* 定义的是子元素在副轴的对齐方式
  * flex-start 交叉轴的起点对齐
  * flex-end 交叉轴的终点对齐
  * center 交叉轴的中心对齐
  * baseline  项目的第一行文字的基线对齐，对于设置那种图片交错排列可以用用吧
  * stretch  默认值

#### flex 布局 align-content 属性
* 用于实现的是控制 flex 容器中的具备多行元素的对齐方式吧
* align-items 是控制的副轴上只有一行元素的布局设置吧
  * flex-start
  * flex-end
  * center
  * space-between
  * space-around
  * stretch
  * space-evenly

#### flex 布局 中的 gap 属性
* 用于在子元素之间添加间距， 它可以帮助你更轻松地管理布局中的间距，而无需手动设置 margin 或 padding
  * 使用在 flex 布局的父容器中的呐

#### flex 布局 中的 gap 属性
* 用于在子元素之间添加间距， 它可以帮助你更轻松地管理布局中的间距，而无需手动设置 margin 或 padding
  * 使用在 flex 布局的父容器中的呐

### flex 布局 项目属性
#### flex item 中的 order 属性
* 决定的子元素在 flex 容器中的显示顺序，数值越小越靠前

#### flex item 中的 flex 属性
* flex 属性定义子元素分配剩余空间，用flex来表示占多少份数，默认值为 0

#### flex item 中的 align-self 属性
* 实现的是覆盖 flex 容器中的 align-items 属性，实现单独控制某个子元素在交叉轴的显示模式
  * flex-start
  * flex-end
  * center
  * stretch
  * space-between

#### flex item 中的 flex-grow 属性
* 属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大
  * 如果 flex-grow 值为 1 ，就是实现的是等分剩余空间，如果有的话，否则就不是的呐

#### flex item 中的 flex-shrink 属性
* 属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小
  * 如果所有项目的flex-shrink属性都为 1，当空间不足时，都将等比例缩小

#### flex item 中的 flex-basis 属性
* 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）
  * flex-basis需要跟flex-grow和flex-shrink配合使用才能生效

## CSS grid 网格布局

### grid 布局的含义
* grid 布局，也是我们的前端的网格布局，实现的是将页面中的父元素划分为一个一个的小格子
* 然后通过这些小格子进行合并，制作出各种不同的网站效果的 CSS 属性吧
* 触发 grid 布局的方式
  * display: grid | inline-grid
    * grid 是将我们的块级元素设置为网格布局
    * inline-grid 将我们的行内块盒子设置为网格布局的
```css
.box {
    display: grid;
}

.box1 {
    display: inline-grid;
}
```
* 实现开启了我们的网格布局后，我们需要做的就是我们的将区域进行划分处理，
* 进行了划分后才可以实现显示我们的网格吧，才能实现网格的合并操作

### grid 布局和 flex 布局的区别
* 相同点: 都是有我们的容器和项目之分的
* 不同点: flex 布局是我们的一维布局方案，轴线布局，但是 grid布局是二维布局，有行列之分的

### grid 容器和内容
* 容器: 就是我们的采用 grid 布局的父元素盒子
* 内容: 就是我们的采用 grid 布局内部的内容的盒子
* 项目: 就是我们的采用了 grid 布局后每一个格子内部放置的元素
* grid 布局含有我们的 行和列的区分吧
* 还有网格线 | 单元格 | 间距的概念之分吧

### grid 容器属性
#### grid 容器触发 grid 布局 display
* display: grid | inline-grid

#### grid 容器数值划分行和列
* 行属性: grid-template-rows
  * 数值
  * 100px 100px 100px 的话，就表明划分为了我们的三行宽为 100px 的格子
* 列属性: grid-template-columns
  * 100px 100px 100px 的话，就是表名划分为了三列高为: 100px 的格子

```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
}
```

#### grid 容器百分比划分行和列
* 就是依据我们的百分比来实现我们划分容器的
  * 根据我们的父元素来实现的划分吧
  * 划分的时候注意是 + 起来为 1 的
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 20% 30% 50%;
    grid-template-columns: 100px 100px 100px;
}
```

#### grid 容器中的重复函数 repeat
* repeat 函数
  * num1 重复的次数
  * num2 需要重复的数值
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 20%);
}
```

#### grid 容器中自动填充 auto-fill
* 在重复函数中使用，根据重复的次数，进行自动的填充数量
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(auto-fill, 20%);  /* 5 列 */
}
```

#### grid 容器中的 auto 属性
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: auto 200px 100px;  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
}
```

#### grid 容器中的 fr 片段划分单位
* 就是为了实现的是简写我们的百分比的呐
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 1fr 2fr 3fr;  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
}
```

#### gird 布局中 minmax 划分
* minmax(num1, num2)
  * 如果条件允许使用最大值，否则最小值
  * num1 --- min
  * num2 --- max
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 100px 200px minmax(200px, 400px);  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
}
```

#### grid 布局调整间距
* 就是实现的是调整网格之间的间距吧
  * grid-row-gap
  * grid-column-gap
  * 但是可以使用我们的总和属性实现: **grid-gap: num1, num2**
    * 第一个代表的是行间距
    * 第二个代表的是列间距
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 100px 200px minmax(200px, 400px);  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
    grid-gap: 10px 20px;
}
```

### grid 项目属性
#### grid 添加项目属性 grid-auto-flow
* row 代表横向显示，默认的呐
* column 代表纵向显示
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 100px 200px minmax(200px, 400px);  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
    /* grid-auto-flow: row; */
    grid-auto-flow: column;
}
```

#### grid 项目的宽度和高度设置
* justify-items 对齐水平
* align-items 垂直对齐方式
* 复合属性: **place-items: align-items justify-items**
* justify-content
* align-content
```css
.box {
    width: 600px;
    height: 600px;
    display: grid;
    border: 5px solid #c45a5a;
    box-sizing: border-box;
    /* 开始设置网格具体的布局 */
    grid-template-rows: 100px 200px minmax(200px, 400px);  /* 就是我们的自适应属性吧 */
    grid-template-columns: 200px auto 100px;  /* 5 列 */
    /* grid-auto-flow: row; */
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
}
```

## CSS transform 形变
* `transform: transform-function || transform-property`
```css 
selector {
  position: relative;
  top: 50%;
  transform: translate(0, -50%)
}
```

## CSS transition 过渡动画
* 就是使用 transition 关键字实现的我们的过渡动画吧
* `transition: transition-property transition-duration transition-timing-function`
```css
/* 设置在父元素中的 */
```

## CSS animation 动画帧
* @keyframes 定义每一帧的动画效果
* 然后使用 animation 实现使用动画
```css
@keyframes box_animation {
     0% {
        transform: translate(0, 0)
    }
    
    25% {
        transform: translate(200px, 0);
        background-color: red;
     }
    50% {
        transform: translate(200px, 200px);
        background-color: yellow;
    }
    75% {
        transform: translate(0, 200px);
        background-color: green;
    }
    100% {
        transform: translate(0, 0);
        background-color: skyblue;
    }
}

.box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    /* 开始实现使用我们的动画的设置的执行 */
    animation-name: box_animation;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-delay: 1s;
  
    /* 设置动画执行次数 */ 
    /* animation-iteration-count: 6; */    
    animation-iteration-count: infinite; /* 无限动画 */ 
    animation-play-state: running;
}
```

## CSS vertical-align
* 实现的是设置盒子的对齐方式吧，原理是，该属性实现设置了我们的盒子的基准线吧
  * baseline
  * top
  * middle
  * bottom
  * sub
  * text-top

---
更多的关于 CSS 的样式学习的话请看:

**https://juejin.cn/post/7419908145399005211**
**https://developer.mozilla.org/zh-CN/docs/Web/CSS**

## 水平居中方案
* 行内元素居中: 父元素设置`text-align: center`
* 块级元素居中
  * 自身设置 `margin: var(number)px auto`
  * 父元素设置为`相对定位`，子元素设置`绝对定位`，子元素设置 `left: 50%`，子元素本身设置 `transform: translateX(-50%)`
* 还可以使用 flex 布局实现

## 垂直居中方案
* 行内元素垂直居中: 子元素设置 line-height 属性即可
* 多个行元素垂直居中: `display: table-cell` 和 `vertical-align: middle`
* 块级元素垂直居中: 通过定位 + transform 实现

## CSS 函数有哪些
* 属性: `attr()`
* 背景图片函数: `linear-gradient` `radial-gradient` `image-set()` `image()` `url()` `ellement()`
* 形变函数: translate scale rotate

## less sass css 区别
* 定义变量: css使用`--` less使用`@` sass使用`$`

## CSS Modules
