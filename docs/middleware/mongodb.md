# MongoDB 文档
> https://www.runoob.com/mongodb/

## MongoDB 概述
* 是一个十分流行的`文档型数据库`，它使用类似 JSON 的文档模型存储数据，这使得数据存储变得非常灵活
* MongoDB 是一个基于文档的 NoSQL 数据库
* MongoDB 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案
* MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的

## MongoDB ACID准则
* `A atomicity` 原子性
  * 事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚
* `C consistency` 一致性
  * 数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束
* `I isolation` 独立性
  * 并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响
* `D durability` 持久性
  * 持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。

## MongoDB 为什么使用NoSql数据库
* 用户的个人信息，社交网络，地理位置，用户生成的数据和用户操作日志已经成倍的增加。我们如果要对这些用户数据进行挖掘，那SQL数据库已经不适合这些应用了,
* NoSQL 数据库的发展却能很好的处理这些大的数据。

## MongoDB CAP理论
* CAP定理（CAP theorem）, 又被称作 布鲁尔定理（Brewer's theorem）, 它指出对于一个分布式计算系统来说，`不可能同时满足以下三点`:
  * C - Consistency 一致性
  * A - Availability 可用性
  * P - Partition tolerance 分区容错性
* 在分布式中最多只可以同时满足两点
  * CA - Consistency 一致性 和 Availability 可用性 -- `单点集群，扩展性不是很强`
  * CP - Consistency 一致性 和 Partition tolerance 分区容错性 -- `分区容忍性的系统，通常性能不是特别高`
  * AP - Availability 可用性 和 Partition tolerance 分区容错性 -- `分区容忍性的系统，通常可能对一致性要求低一些`

## MongoDB 简单使用
* `mongod` 启动 MongoDB 服务器
* `mongosh` 进入 MongoDB Shell
* 数据库database概念
  * `show dbs` 显示所有数据库
  * `use db_name` 创建或切换数据库

## MongoDB 用户管理
* `mongosh --host hostname --port port` 启动mongodb的命令行
* `use db_name` 进入db_name数据库
* `db.createUser({user:"username",pwd:"password",roles:["readWrite"]})` 创建用户
* `db.auth("username","password")` 验证用户
* `db..dropUser("username")` 删除用户

## MongoDB 数据库操作
* `show dbs` 显示所有数据库
* `use db_name` 创建或切换数据库
* `db` 显示当前数据库
* `db.dropDatabase()` 删除当前数据库

## MongoDB 集合操作
* `show collections` 显示所有集合
* `db.createCollection("collection_name")` 创建集合
* `db.collection_name.drop()` 删除集合
* `db.collection_name.insertOne({"key":"value"})` 插入一条数据
* `db.collection_name.insertMany([{"key":"value"},{"key":"value"}])` 插入多条数据
* `db.collection_name.find()` 查询所有数据
* `db.collection_name.find({"key":"value"})` 查询指定条件的数据
* `db.collection_name.updateOne({"key":"value"},{"$set":{"key":"value"}})` 更新数据
* `db.collection_name.deleteOne({"key":"value"})` 删除数据