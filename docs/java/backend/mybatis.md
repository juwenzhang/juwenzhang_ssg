## Java MyBatis 文档

### 介绍
* 是一个我们的 Java 中的一个用于简化 JDBC 操作的持久层框架
* 官网:http://www.mybatis.org/mybatis-3/
* 为什么是持久层呐？？
  * 主要是负责我们的将数据保存到数据库的一层代码罢了
  * JavaEE 三层架构: 表现层 ---> 业务层 ---> 持久层

### 入门使用
* 创建我们的表
* 创建模块，导入坐标
* 编写 mybatis.xml 配置文件
* 编写我们的 mapper.xml 文件 映射文件
* 编码操作开始
```xml
<!-- mybatis 依赖包 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.5</version>
        </dependency>

        <!-- mysql driver dependency -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.46</version>
        </dependency>
```
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="${driver}"/>
                <property name="url" value="${url}"/>
                <property name="username" value="${username}"/>
                <property name="password" value="${password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="org/mybatis/example/BlogMapper"/>
    </mappers>
</configuration>
```
* 基本的流程就是
  * 首先先创建一个总的 mybatis-config.xml 文件
  * 在该文件中配置一个一个的其他的数据库表的操作的 xml 文件，实现映射关系
  * 最后就是实现的是我们的在每个映射文件中进行我们的配置 java 类，该类是我们的返回的具体数据
  * 最后就是我们的测试类，进行我们的测试
    * mapper 进行我们的配置的呐
  * 同时需要我们的 mybatis 依赖和 mysql driver 依赖
    * 对于官网即可一些 xml 配置文件的话，我们需要进行的是将对应的 ${} 变化为我们自己的操作把
  * 测试代码的书写开始
```java
package com.juwenzhang;
import com.juwenzhang.ArticleData.ArticleData;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        // 实现加载我们的核心对象
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 获取我们的对应的工厂构建对象
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 开始我们的操作了
        List<ArticleData> articleData = sqlSession.selectList("test.selectAll");
        System.out.println(articleData);
    }
}
```
* 还是实现的是书写我们的原生的 sql 语句实现的我们的查询数据库中的数据吧

## Mapper 代理的开发管理
* 定义一个和 sql 路径对应的 sql 的 mapper 路径文件吧
* 创建一个对应的 mapper 接口，然后实现我们的接口，然后进行我们的操作
  * interface 实现的我们的书写吧
* java 代码和我们的配置文件一定要进行区分开吧
* 简单用用，简单配置即可