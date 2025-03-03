# Java_Basic 开发文档
## Java 第一个程序
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
* 这个就是我们的第一个小的 java 程序吧，主要的话就是一个 Hello World 的案例吧
* 我们的一个 java 程序的话主要的的话是需要进行编译的
  * javac fileName.java ---> fileName.class
  * java fileName  ---> 这个就是实现的的是运行我们的可执行的二进制的程序吧
* 一个是我们的编译工具，一个是我们的运行工具吧
* 主要的话还是实现的使用我们的 jvm 实现的运行原理吧

## Java 中的基础数据类型
* 整型
  * byte 字节类型  1字节
  * short 短整型  2字节
  * int 整型  4字节
  * long 长整型  8字节
* 浮点型
  * float 浮点型  4字节
  * double 双精度浮点型  8字节
* 字符型
  * char 字符型  1字节
  * 一个字符串型的字符型的话，占用的空间是 2 字节
  * 'a' -- 1字节  |  "a" -- 2字节
* 布尔类型
  * boolean 布尔类型，常用于我们的逻辑判断吧
```java
public class Main {
  public static void main(String[] args) {
    // 开始实现定义我们的数据类型
    // 整型数据类型
    byte myByte = 127;
    short myShort = 32767;
    int myInt = 2147483647;
    long myLong = 9223372036854775807L;
    System.out.println(myByte, myShort, myInt, myLong);
    
    // 浮点型
    float myFloat = 3.1415926F;
    double myDouble = 3.1415926;
    System.out.println(myFloat, myDouble);
    
    // 字符型
    char myChar = 'a';
    System.out.println(myChar);
    
    // 布尔类型
    boolean myBoolean = true;
    System.out.println(myBoolean);
  }
}
```

## Java 流程控制语句
* 流程控制语句就是我们的程序中需要实现的一些逻辑判断的语句
  * if 判断
  * else 语句
  * switch 语句

## Java Scanner 工具的使用
* Scanner 工具就是一个我们的用来确定用户输出的一个语句
  * 首先我们的一个 java 程序的话，主要的就是使用的是我们的先创建实例
  * 然后实现调用内部的 api 即可
  * 该工具类属于我们的工具类中的呐
```java
import java.utils.Scanner;

public class Main {
    public static void main(String[] args) {
        // 创建出实例
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("请输入你的名字");
        String name = scanner.nextLine();
        System.out.println("请输入你的年龄");
        int age = scanner.nextInt();
        System.out.println("请输入你的性别");
        char sex = scanner.next().charAt(0);
        System.out.println("请输入你的身高");
        double height = scanner.nextDouble();
        System.out.println("请输入你的体重");
        double weight = scanner.nextDouble();
        System.out.println(name, age, sex, height, weight);
    }    
}
```

## Java 中的数组
* 数组的定义方式
* 二维数据的定义
```java
public class Main {
  // 一位数组的定义形式: data_type[] array_name[] = new data_type[array_size];
  public static void main(String[] args) {
    // 开始实现定义我们的数组
    int[] arr_int = new int[10];
    for (int i = 0; i < arr_int.length; i++) {
      arr_int[i] = i;
    }
    
    int[] arr_int02 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for (int i = 0; i < arr_int02.length; i++) {
      System.out.println(arr_int02[i]);
    }
    
    int[][] arr_int03 = new int[3][3];
    for (int i = 0; i < arr_int03.length; i++) {
      for (int j = 0; j < arr_int03[i].length; j++) {
        arr_int03[i][j] = i * j;
      }
    }
  }
}
```

## Java Swing 组件
* 该组件主要是用来实现的是绘制一些移动端界面的api 工具
* 该组件主要使用的是 javax.swing 包下的一些组件
  * 主要包含的组件含有我们的
    * JLabel 标签组件
    * JButton 按钮组件
    * JTextField 文本框组件
    * JTextArea 文本域组件
    * JCheckBox 复选框组件
    * JRadioButton 单选框组件
    * JComboBox 下拉框组件
    * JList 列表组件
    * JScrollPane 滚动条组件
    * JPanel 面板组件
    * JFrame 窗口组件
  * toolkit 工具的集成
    * 该工具就是实现的是对我们的获取屏幕的 width 和 height
  * 布局设置
    * 可以使用我们的今典的边框布局: BorderLayout
    * 还可以使用我们的网格布局格式: GridLayout
  * 实现绘制我们的移动端界面的方法
    * 首先先创建我们的界面
    * 然后生成一个一个的画板
    * 在画板上面布置我们的画布
    * 最后就是实现我们的绘制方法
    * 最后就是实现的是我们的向视图中添加对应的事件即可
* 主要使用到的依赖包含有
  * java.awt.*
    * 主要实现的是提供给我们对应的事件的
  * java.swing.*
    * 主要的是为我们提供对应的组件进行使用的呐
```java
package com.item.view;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

// 开始实现构建我们的画布
public class MyView extends JFrame {
    public MyView() {
        // 开始实现获取屏幕宽度和高度
        int width = 800;
        int height = 600;
        int screenWidth = Toolkit.getDefaultToolkit().getScreenSize().width;
        int screenHeight = Toolkit.getDefaultToolkit().getScreenSize().height;
        int centerWidth = (screenWidth - width) / 2;
        int centerHeight = (screenHeight - height) / 2;


        // 开始实现获取图片资源
        Image iocImg = Toolkit.getDefaultToolkit().getImage("images/img.png");
        // 设置窗口标题
        this.setTitle("欢迎Swing-Demo案例");
        // 设置窗口显示位置
        // 设置窗口大小
        // x 是横坐标，y 是纵坐标
        // width 宽度，height 高度
        this.setBounds(centerWidth, centerHeight, width, height);
        // 设置方位布局
        this.setLayout(new BorderLayout());


        // 创建画布和创建 swing 组件
        JLabel label = new JLabel("服务端界面");
        Font font = new Font("楷体", Font.BOLD, 20);
        label.setFont(font);
        label.setForeground(Color.RED);
        JPanel jp1 = new JPanel();
        jp1.setBackground(Color.GRAY);
        jp1.add(label);


        JTextArea textArea = new JTextArea(25, 25);
        Font tfont = new Font("微软雅黑", Font.BOLD, 20);
        textArea.setFont(tfont);
        textArea.setForeground(Color.blue);
        textArea.setBackground(Color.PINK);
        textArea.setEditable(false);
        JScrollPane jp2 = new JScrollPane(textArea);  // 滚动条面板
        jp2.setBackground(Color.pink);
        jp2.setHorizontalScrollBar(null);


        JTextField textField = new JTextField(25);
        JButton button = new JButton("OK");
        button.setForeground(Color.black);
        button.setBackground(Color.white);
        StringBuilder sb = new StringBuilder();
        button.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                System.out.println("用户进行了点击");
                // 开始获取元素输入框的内容
                String content ="juwenzhang: " + textField.getText().trim() + "\n";
                sb.append(content);
                textArea.setText(sb.toString());
                textField.setText("");
            }
        });
        JPanel jp3 = new JPanel();
        jp3.setBackground(Color.GRAY);
        jp3.add(textField);
        jp3.add(button);


        // 开始实现贴纸于画板上，并且指定其在布局中的什么位置
        this.add(jp1, BorderLayout.NORTH);
        this.add(jp2, BorderLayout.CENTER);
        this.add(jp3, BorderLayout.SOUTH);


        // 设置界面图标
        this.setIconImage(iocImg);
        // 设置窗口可见
        this.setVisible(true);
        // 设置关闭窗口默认事件，关闭窗口的时候关闭资源
        this.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
    }
}
```

## Java 中的其他重要数据类型
* collection 包
  * ArrayList
  * LinkedList
  * Vector
  * Stack
  * HashMap
  * TreeMap
  * HashSet
  * TreeSet
  * EnumMap
  * EnumSet
  * ConcurrentHashMap
  * ConcurrentLinkedQueue
  * ConcurrentLinkedDeque
  * LinkedHashMap
  * LinkedHashSet
  * WeakHashMap
  * IdentityHashMap
* 这些数据类型都是可以使用的呐，只是一些 api 调用即可

## Java_Web 的开始
* 就是一个我们的当代的网络的开发的框架吧
* JDBC 的准备 + Mysql 操作的准备 + http 的准备

### maven 工具的集成
* maven 是一个我们的一个java 的包管理工具吧
  * 用来实现的是我们的统一的管理我们的项目的一个工具吧
* 以前的开发模式是在我们的项目中进行创建 lib 里面引入我们的 jar 包实现的开发
* 但是我们的 maven 就是实现的是使用我们的配置实现的管理项目的操作了
* 对于我们的大型项目的话就是实现的是使用我们的统一管理吧
* maven 为我们实现了一个统一的开发的目录，实现了开发的统一性吧
* 后期实现我们的导入其他的 maven 的项目，主要的就是导入对应的 pom.xml 即可
  * 方式很多种，但是最终还是想尽办法实现导入 pom.xml 为最终的实现目的吧

### maven 的安装使用
* https://maven.apache.org/
  * 方便的依赖管理
  * 标准化的项目管理
  * 统一的项目目录划分
  * maven 实现的是使用我们的插件化开发的
* pom.xml --> 项目对象模型pom --> 项目依赖管理模型
  * 依赖包的查找流程
    * 本地仓库 --》 私服 --》 中央仓库
* 流程
  * 解压 apache-maven
  * 配置本地仓库: conf/settings.yml localRepository
  * 配置镜像源: 使用阿里的私服镜像源
  * 配置环境变量 MAVEN_PATH 和 %MAVEN_PATH%\bin\
```xml
<localRepository>E:\maven\apache-maven-3.9.9\maven_local_repo</localRepository>
```
```xml
<mirror>
  <id>aliyun-maven</id>
  <mirrorOf>central</mirrorOf>
  <url>https://maven.aliyun.com/repository/public</url>
  <blocked>false</blocked>
</mirror>
```

### idea 的配置
* 首先实现的是在我们的全局配置中修改我们的 buildTool 构建工具吧
* 然后就是修改我们的 maven 的配置
* java compiler --> 也是需要进行修改的
* runner 同样进行修改吧
* 最后我们使用 idea 创建的项目就可以使用我们的 maven 进行创建了

### maven 坐标
* groupId 定义的是当前的maven 项目隶属的组织名称(域名反写即可 com.juwenzhang)
* artifactId 定义的是当前的maven 项目的名称(包名)
* version 定义的是当前的maven 项目的版本号(版本号)
  * SNAPSHOT 快照版本，项目处于我们的快照版本，还不稳定
  * RELEASE 正式版本，项目处于我们的正式版本，趋于稳定，因为后面可能还会更新和维护吧

### maven 中的依赖管理
* 就是我们的一个项目中实现使用的我们的 java 依赖包吧
  * pom.xml 配置 dependencies 配置多个 dependency 的依赖即可
    * 任然需要配置的是我们的三个字段吧
      * groupId
      * artifactId
      * version
    * 依赖官网: https://mvnrepository.com/  直接进行搜索配置即可
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.example</groupId>
        <artifactId>java_web_practice</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <groupId>com.juwenzhang</groupId>
    <artifactId>java_web_module01</artifactId>

    <properties>
        <maven.compiler.source>22</maven.compiler.source>
        <maven.compiler.target>22</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <!-- 依赖项的配置 -->
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>6.1.4</version>

            <exclusions>
                <exclusion>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
</project>
```

### maven 的生命周期
* maven 的生命周期就是我们的一个项目创建的时候，会按照我们的生命周期进行创建我们的项目
  * clean 清理我们的项目
  * install 安装我们的项目
  * package 打包我们的项目
  * test 测试我们的项目
  * validate 验证我们的项目
  * compile 编译我们的项目
  * test-compile 编译我们的测试项目

### 现在的开发模式
* 静态资源: 服务端上存储不会改变的数据，就是前端书写的一些东西吧
* 动态资源: 服务端上存储会改变的数据，就是前端书写的一些东西吧,spring
* B/S 架构: 浏览器和服务器进行交互，浏览器进行请求，服务器进行响应
* C/S 架构: 客户端和服务器进行交互，客户端进行请求，服务器进行响应，开发维护极其困难吧