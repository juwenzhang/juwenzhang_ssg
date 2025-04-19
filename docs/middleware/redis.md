# Redis 文档
> https://www.runoob.com/redis/
> 主要的学习连接，可能有点老了，但是还是可以看的，对于校招的话，但是技术的整体自我要求的话，一定要往更高处去

## Redis 介绍
* Redis 和 MySQL 不同的是
  * Redis 是一个内存存储型数据库，同时其存储形式是 key-value 的形式进行存储的，非关系型数据库
  * Mysql 是一个关系型结构化的存储数据的数据库吧
> Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存、分布式、可选持久性的
> 键值对(Key-Value)存储数据库，并提供多种语言的 API，
> Redis 通常被称为数据结构服务器，因为值（value）可以是字符串(String)、哈希(Hash)、列表(list)、集合(sets)和有序集合(sorted sets)等类型。

## Redis 特点
* `redis 的性能极高`
  * Redis 以其极高的性能而著称，能够支持每秒数十万次的读写操作24
  * Redis 能读的速度是 110000次/s，写的速度是 81000次/s
* `redis 丰富的数据类型`
  * 字符串、列表、集合、哈希表、有序集合
* `redis 原子化操作`
  * Redis 的所有操作都是原子性的，这意味着操作要么完全执行，要么完全不执行。这种特性对于确保数据的一致性和完整性至关重要，尤其是在高并发环境下处理事务时
* `reids 持久化存储`
  * Redis 支持数据的持久化，可以将内存中的数据保存到磁盘中，以便在系统重启后恢复数据
* `redis 支持发布订阅模式`
  * Redis 允许客户端之间通过消息传递进行通信。这使得 Redis 可以作为消息队列和实时数据传输的平台。
* `redis 主从复制`
  * Redis 支持主从复制，可以通过从节点来备份数据或分担读请求，提高数据的可用性和系统的伸缩性。
* `redis 单线程模型`
  * Redis 是单线程的，但它通过高效的事件驱动模型来处理并发请求，确保了高性能和低延迟。

## Redis 简单使用
```text
# 进入 redis 服务
redis-cli -h 127.0.0.1 -p 6379
# 基本的格式为: $ redis-cli -h host -p port -a password
redis-cli  # 默认是在 localhost:6379 上面的呐

# 设置键值对
set key value

# 获取键值
get key

# 删除键值对
del key

# 删除所有键值对
flushall

# 退出 redis 服务
quit
exit
```

## Redis 数据类型
> https://www.runoob.com/redis/redis-data-types.html
* 前面说了 Redis 是一个键值对的存储系统，同时可以支持的数据类型是十分多的呐
* 那么 redis 可以支持那些数据类型呐？？？🤔🤔🤔
  * `string` 字符串
    * `set key value` 设置键值对
    * `get key` 获取键值对
    * `strlen key` 获取键值对长度
    * `incr key` 自增
    * `decr key` 自减
    * `append key value` 追加字符串
    * `getrange key start end` 获取指定范围的字符串
    * `del key` 删除键值对
  * `hash` 哈希
    * `hset key field value`
    * `hget key field`
    * `hdel key field`
    * `hgetall key`
    * `hkeys key`
    * `hvals key`
    * `hlen key`
    * `hexists key field`
  * `list` 列表
  * `set` 集合
  * `zset[sorted set]` 有序集合
  * `stream` 流
  * `位图` Bitmaps
  * `超日志` HyperLogLog
  * `地理空间` Geospatial
  * `模块` Modules
  * `发布订阅` Pub/Sub

## Redis 事务
* 主要的命令就是
  * `multi` 开启事务
  * `exec` 执行事务
  * `discard` 放弃事务
  * `watch key` 监视一个或多个键，如果在事务执行之前，某个键已经被其他命令所改动，那么 Redis 将放弃执行事务
  * `unwatch key` 取消对一个或多个键的监视

## Redis 安全
* 主要的命令就是
* 设置redis服务密码
  * `config set requirepass your_password`
  * `auth your_password`