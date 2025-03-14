# Mysql 文档
> https://www.sjkjc.com/mysql/

## Operator DataBase Mysql
* 首先我们得常见的数据库含有我们的两大类
    * 关系型数据库 | 非关系型数据库
* 关系型数据库含有(sql)
    * **mysql | oracle | db2 | sql-server | postgresql**
    * 关系型数据库实际上的话就是我们的一个一个的二维表格吧
    * 表和表之间通过的是我们的 一对一 | 一对多 | 多对多 就构成了我们的数据库表之间的关系吧
    * 然后实现的就是进行我们的额 sql 语句进行对数据库的 **增删改查** 操作吧
* 非关系型数据库(nosql)
    * **mongodb | redis | elasticsearch | hbase | cassandra | neo4j | hbase**
    * 非关系型数据库的话是基于我们的 **key-value** 形式实现的我们的数据库吧
    * 非关系型数据库的话主要实现的就是进行我们的 collection 实现完成的呐

## Operator DataBase -Mysql Introduce
* 开始实现操作我们的 mysql 数据库
    * mysql --version 查看 mysql 的版本号
    * mysql -u root -p 进入我们的 mysql 数据库
    * show databases; 查看我们的数据库
    * use database_name; 进入我们需要使用的数据库
    * show tables; 查看我们的数据库中的表
    * desc table_name; 查看我们的数据库中的表结构
    * drop table table_name; 删除我们的表
    * drop database database_name; 删除我们的数据库
* 下载 mysql 的时候，我们需要注意的是
    * 配置环境的时候尽量配置我们的系统变量吧 ，供所有的用户使用
    * 安装了 mysql 后具备的几个默认的数据库
        * information_schema 用来实现的是维护其他的数据库的表，列，访问权限信息的
        * performance_schema 记录的是我们的资源性能相关的数据库
        * mysql 记录了我们的每个用户的信息吧，权限信息吧，同时还有一些日志文件吧
        * sys 记录的是我们的系统表，比如我们的系统表，我们的系统表，我们的系统表

## Operator DataBase -Create Database
* create database database_name; 创建我们的数据库
    * 一定要具备我们的分号吧，这个呐就是我们的创建数据库的操作吧
* use database_name; 进入我们的数据库
    * 为了我们的数据库的操作是在我们的当前数据库中进行执行的呐，所以说我们就需要使用该命令
    * 保证我们的数据库操作的正确性吧
* create table table_name( 字段 );  这个就是创建数据库表的命令了
* insert into table_name 字段名 values( 值 );  这个就是向我们的数据库表中插入数据的操作吧

## Operator DataBase -Create Table
* 首先我们得数据库表得话具备我们的 表名 + 字段名（字段类型）（字段约束）
```sql
create table table_name(
  id int primary key auto_increment,
  name varchar(255) not null,
  age int not null,
  sex varchar(255) not null,
  address varchar(255) not null,
  create_time datetime not null,
  update_time datetime not null
);
```
* 对于我们的建立表的时候，我们的主要的操作就是对于每一个字段的建立需要注意的是，格式为:
    * field type null key default extra; 六个部分的呐
        * field 就是我们的字段名命名
        * type 就是我们的字段类型
            * | int | varchar | text | datetime | timestamp | date
            * | time | year | tinyint | smallint | mediumint | bigint
            * | float | double | decimal | numeric | bit | binary
            * | varbinary | tinyblob | tinytext | blob | text | mediumblob
            * | mediumtext | longblob | longtext | enum | set | json
            * | geometry | point | linestring | polygon | multipoint
            * | multilinestring | multipolygon | geometrycollection
            * | geometrycollection
        * null 就是我们的字段是否为空:
            * null | not null
        * key 就是我们的字段是否是主键，或者说是外键
            * primary key | foreign key
        * default 就是我们的字段默认值
        * extra 就是我们的字段的额外信息
            * auto_increment | comment | charset | collate
    * 具体的每个部分的话，后面做详细讲解

## Operator DataBase -SQL Start
* sql 语句的全名 structured query language 结构化查询语言，简称 sql
    * 使用我们的 sql 语言编写的代码就是 sql 语句吧
    * sql 语句可以用来实现的是操作我们的关系型数据，所以说这个语句是一个通用的操作数据库的语言吧
* 书写 sql 语句的规范
    * sql 语句中的关键字的话一定要大写: CREATE DROP ALTER SELECT INSERT UPDATE DELETE
    * sql 语句末尾添加我们的 ; 表示这一条 sql 语句的执行完毕吧
    * 如果遇到了关键字作为了我们的关键字的话，我们就可以使用 `` 将字段名进行包裹起来吧

## Operator DataBase -SQL Category
* 首先我们得 sql 语句划分是具备很多种的，这个时候我们就需要进行对 sql 语句进行区分吧
    * **DDL (Data Definition Language)**
        * 数据定义语言
        * 可以通过我们的 DDL 语句实现我们的对 **数据库和表的创建，删除，修改** 的操作
    * **DML (Data Manipulation Language)**
        * 数据操作语言
        * 可以通过我们的 DML 语句实现我们的对 **数据的增删改** 的操作
    * **DQL (Data Query Language)**
        * 数据查询语言
        * 可以通过我们的 DQL 语句实现我们的对 **数据的查询** 的操作
    * **DCL (Data Control Language)**
        * 数据控制语句
        * 可以通过我们的 DCL 语句实现我们的对 **数据库的权限控制** 的操作

## Operator DataBase -SQL DDL
* DDL 语句主要实现的是对我们的数据库进行`数据库或者说操作表的语句`
* 这个就是我们的 DDL 语句吧
```sql
-- 实现对数据库的操作
-- 1.查询当前具备的所有的数据库
SHOW DATABASES;  -- 查询所有的数据库

-- 2.创建数据库
CREATE DATABASE database_name;

-- 3.删除数据库
DROP DATABASE database_name;

-- 4.切换数据库
USE database_name;

-- 5.查看当前正在使用的数据库
SELECT DATABASE();

-- 6.修改数据库
ALTER DATABASE database_name CHARACTER SET charset COLLATE collate;

-- 7.查看数据库的属性
SHOW CREATE DATABASE database_name;
```
```sql
-- 对数据库表的操作
-- 1.创建数据库表
CREATE TABLE table_name(
  field_name field_type field_constraint...;
);

-- 2.删除数据库表
DROP TABLE table_name;

-- 3.显示数据库表
SHOW TABLES;

-- 4.查看数据库表的结构
DESC table_name;

-- 5.查看数据库表的属性
SHOW CREATE TABLE table_name;

-- 6.修改数据库表的结构
ALTER TABLE table_name ADD COLUMN field_name field_type field_constraint...;

-- 7.修改数据库表的名称
ALTER TABLE table_name RENAME TO new_table_name;

-- 8.修改数据库表的字段名称
ALTER TABLE table_name CHANGE COLUMN old_field_name new_field_name field_type field_constraint...;

-- 9.修改数据库表的属性
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint...;

-- 10.修改数据库表的字段类型
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint...;

-- 11.修改数据库表的字段约束
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint...;

-- 12.修改数据库表的字段默认值
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint... DEFAULT default_value;

-- 13.修改数据库表的字段位置
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint... AFTER field_name;

-- 14.修改数据库表的字段备注
ALTER TABLE table_name MODIFY COLUMN field_name field_type field_constraint... COMMENT 'comment';
```
* 创建数据库表的时候，字段类型含有
    * <span style="color:red;font-weight:bold;">整数类型</span>
        * INTEGER | **INT** | **SMALLINT** | TINYINT | **MEDIUMINT** | **BIGINT**
        * UNSIGNED | UNSIGNED INTEGER | UNSIGNED INT | UNSIGNED MEDIUMINT
        * UNSIGNED BIGINT | UNSIGNED TINYINT | UNSIGNED SMALLINT | UNSIGNED YEAR
    * <span style="color:red;font-weight:bold;">浮点型</span>
        * **FLOAT** | **DOUBLE** | **DECIMAL** | **FIXED** | **DOUBLE PRECISION**
        * DECIMAL(M, D)  这个实现的是指定我们的动态的浮点型吧
    * <span style="color:red;font-weight:bold;">日期类型</span>
        * **DATE**       |  YYYY-MM-DD
        * **YEAR**       |  YYYY
        * **DATETIME**   |  YYYY-MM-DD HH:MM:SS
        * **TIMESTAMP**  |  YYYY-MM-DD HH:MM:SS
        * **TIME**       |  HH:MM:SS
    * <span style="color:red;font-weight:bold;">字符串类型</span>
        * **CHAR(M)**    | 固定长度的字符串
        * **VARCHAR(M)** | 动态的长度的字符串 0-65535 之间
        * **TEXT**       | 文本类型的字符串
        * **TINYTEXT**   | 小文本类型的字符串
        * **MEDIUMTEXT** | 中文本类型的字符串
        * **LONGTEXT**   | 长文本类型的字符串
        * **BINARY**     | 二进制字符串
        * **VARBINARY**  | 动态的二进制字符串
        * **BLOB**       | 二进制 large object 二进制大对象
* 创建数据库表的时候，表的约束限制
    * <span style="color:red;font-weight:bold;">主键约束</span>
        * PRIMARY KEY
        * 主键是数据库表中的唯一的一个索引，主键不能为空，并且不能重复，默认是 not null 的
            * 主键的话，默认具备的两个限制: **not null** 和 **unique**
        * 主键可以是多列索引 但是不能有重复的，PRIMARY KEY (id, name)，联合主键
        * 开发中我们主要设置为主键的字段尽量不要涉及我们的业务字段吧
    * <span style="color:red;font-weight:bold;">唯一约束</span>
        * 就是用于我们的设置一个用户名或者说一个注册的电话信息不可以进行重复吧
        * 这个就是我们的使用唯一约束的使用场景吧
            * UNIQUE
            * 用户注册电话号码，邮箱，用户名，唯一约束（除了QQ，微信，这两个平台这些是可以重复的呐）
    * <span style="color:red;font-weight:bold;">非空约束</span>
        * NOT NULL
        * 就是一些字段在创建的时候不可以为空吧
    * <span style="color:red;font-weight:bold;">默认值约束</span>
        * DEFAULT value
        * 这个就是我们的默认值约束
    * <span style="color:red;font-weight:bold;">自增长约束</span>
        * AUTO_INCREMENT
        * 主要是用于我们的 id 的自动增长的呐
```sql
create table if not exists user(
  id int auto_increment primary key, -- id 自增
  name varchar(20) not null default '' unique,  -- name 不能为空，并且默认为空
  age int not null default 0,  -- age 不能为空，并且默认为 0
  sex int not null default 0,  -- sex 不能为空，并且默认为 0
  phone varchar(20) not null default '' unique,  -- phone 不能为空，并且默认为空
  password varchar(11) not null default ''  -- password 不能为空，并且默认为空
);

-- 修改表的名称
ALTER TABLE user RENAME TO user_info;

-- 实现为表添加新的字段
ALTER TABLE user_info ADD COLUMN email varchar(20) not null default '';
ALTER TABLE user_info ADD COLUMN create_time datetime not null default CURRENT_TIMESTAMP;
ALTER TABLE user_info ADD COLUMN update_time datetime not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP;

-- 修改表的字段名称
ALTER TABLE user_info CHANGE COLUMN name nickname varchar(20) not null default '';
ALTER TABLE user_info CHANGE COLUMN age nickage int not null default 0;
ALTER TABLE user_info CHANGE COLUMN sex nicksex int not null default 0;
ALTER TABLE user_info CHANGE COLUMN phone nickphone varchar(20) not null default '';

-- 修改表的字段类型
ALTER TABLE user_info MODIFY COLUMN nickname varchar(20) not null default '';
ALTER TABLE user_info MODIFY COLUMN nickage int not null default 0;
ALTER TABLE user_info MODIFY COLUMN nicksex int not null default 0;
ALTER TABLE user_info MODIFY COLUMN id BIGINT auto_increment primary key;  -- 修改 id 为我们的 bigint 类型

-- 修改表的字段约束
ALTER TABLE user_info MODIFY COLUMN nickphone varchar(20) not null default '' unique;

-- 修改表的字段默认值
ALTER TABLE user_info MODIFY COLUMN nickphone varchar(20) not null default '' unique;

-- 修改表的字段位置
ALTER TABLE user_info MODIFY COLUMN nickphone varchar(20) not null default '' unique AFTER nicksex;
ALTER TABLE user_info MODIFY COLUMN nickphone varchar(20) not null default '' unique AFTER nickage;
ALTER TABLE user_info MODIFY COLUMN nickphone varchar(20) not null default '' unique AFTER nickname;

-- 删除某一个字段
ALTER TABLE user_info DROP COLUMN nickphone;
ALTER TABLE user_info DROP COLUMN nickage;
ALTER TABLE user_info DROP COLUMN nickname;
ALTER TABLE user_info DROP COLUMN nicksex;
ALTER TABLE user_info DROP COLUMN create_time;
ALTER TABLE user_info DROP COLUMN update_time;
ALTER TABLE user_info DROP COLUMN `password`;
ALTER TABLE user_info DROP COLUMN phone;
ALTER TABLE user_info DROP COLUMN email;
ALTER TABLE user_info DROP COLUMN sex;
ALTER TABLE user_info DROP COLUMN age;
ALTER TABLE user_info DROP COLUMN nick;
ALTER TABLE user_info DROP COLUMN id;

-- 查看表结构
DESC user_info;
SHOW CREATE TABLE user_info;

-- 删除表
DROP TABLE IF EXISTS user;
```

## Operator DataBase -SQL DML
* DML 语句主要实现的是对我们的表中的数据进行 `增删改` 的操作吧
* 当然在数据库的操作中，我们最开始的数据库的设计的合理性，这也是十分重要的呐
* 因为合理设计，便于后期操作数据库表的便利性
```sql
CREATE TABLE IF NOT EXISTS user(
  id int auto_increment primary key,
  name varchar(20) not null default '' unique,
  password varchar(11) not null default '',
  age int not null default 0,
  sex int not null default 0,  --0: 男，1:女
  phone varchar(20) not null default '' UNIQUE,
  -- 创建时间，更新时间
  create_time datetime not null default CURRENT_TIMESTAMP,
  update_time TIMESTAMP not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);

-- 添加数据操作
INSERT INTO user (name, phone, password) VALUES
  ('张三', '13800000000', '123456'),
  ('李四', '13800000001', '123456'),
  ('王五', '13800000002', '123456');
  
-- 删除数据操作
DELETE FROM user WHERE id = 1;
-- DELETE FROM user;  数据全他奶奶的删除，直接跑路不干了，老子，哈哈哈

-- 修改数据操作
UPDATE user SET name = '张三丰', phone = '13800000003', password = '123456' WHERE id = 2;  

-- 查询数据操作: 这个的话是我们的 DQL 语句了
SELECT * FROM user;  -- DQL 中的讲解有更多的查询语句的细节吧
```

## Operator DataBase -SQL DQL
### 基础 DQL 语句
* DQL 语句主要实现的是对我们的表中的数据进行 `查询` 的操作吧
* 主要进行操作的关键字就是我们的 `SELECT` | `select`
    * 主要使用的限制含有我们的:
        * `where` 实现的是条件查询，并且可以进行多个条件查询的组合
        * `like` 实现的是模糊查询，并且可以进行多个条件查询的组合
        * `having` 实现的是分组查询，并且可以进行多个条件查询的组合
        * `order by` 实现的是排序查询，并且可以进行多个条件查询的组合
        * `group by` 实现的是分组查询，并且可以进行多个条件查询的组合
        * `limit` 实现的是分页查询，并且可以进行多个条件查询的组合
        * `top` 实现的是分页查询，并且可以进行多个条件查询的组合
        * `offset` 实现的是分页查询，并且可以进行多个条件查询的组合
        * `union` 实现的是合并查询，并且可以进行多个条件查询的组合
        * `intersect` 实现的是交集查询，并且可以进行多个条件查询的组合
        * `except` 实现的是差集查询，并且可以进行多个条件查询的组合
        * `exists` 实现的是是否存在查询，并且可以进行多个条件查询的组合
        * `in` 实现的是在查询，并且可以进行多个条件查询的组合
```sql
-- 基本查询，查询所有的数据
SELECT * FROM user;

-- 查询指定的字段的数据 column
SELECT id, name, phone FROM user;

-- 查询到指定字段数据后指定别名 as 别名
SELECT id AS user_id, name AS user_name, phone AS user_phone FROM user;

-- where 条件查询
SELECT * FROM user WHERE id < 10;
SELECT name, password FROM user WHERE address = '北京';

-- where 条件查询 + 逻辑运算 AND | OR | NOT | BETWEEN ... AND ... | IN | LIKE
SELECT name, password FROM user WHERE address = '北京' AND age > 18;  -- 逻辑与
SELECT name, password FROM user WHERE address = '北京' OR age > 18;  -- 逻辑或
SELECT name, password FROM user WHERE NOT address = '北京' AND age > 18;  -- 逻辑非
SELECT name, password FROM user WHERE address = '北京' AND age > 18 AND sex = 0;  -- 逻辑与
SELECT name, password FROM user WHERE address = '北京' OR age > 18 OR sex = 0;  -- 逻辑或
SELECT name, password FROM user WHERE age between 18 and 30;  -- between ... and ...，，闭区间 [18, 30]
SELECT name, password FROM user WHERE age IN (18, 19, 20);  -- in (18, 19, 20)，枚举吧
SELECT * FROM node_database.`user` WHERE name IN ('juwenzhang', 'lizimei');
SELECT * FROM node_database.`user` WHERE name LIKE '%j%';  -- like '%j%'，模糊查询，% 表示任意字符，_ 表示一个字符

-- ORDER BY 排序查询
SELECT * FROM node_database.`user` ORDER BY id DESC;  -- id ASC: 升序，id DESC: 降序

-- LIMIT, OFFSET 分页查询
-- limit 是限制本次查询的数据量，offset 是本次查询的偏移量
SELECT * FROM node_database.`user` LIMIT 10;  -- 默认从 0 开始，一共查询 10 条数据
SELECT * FROM node_database.`user` LIMIT 10 OFFSET 20;  -- [20, 30] OFFSET 偏移查询
SELECT * FROM node_database.`user` LIMIT 10, 10;  -- 从第 10 条开始，一共查询 10 条数据 [10, 20]
```

### 集合 DQL 语句
* 我们的平时的开发中的话，表的结构是十分的复杂的呐
* 涉及到了很多的跨表的查询吧，所以，我们的 DQL 语句中，涉及到了集合查询
* 表和表之间的关系一般含有: 一对一 | 一对多 | 多对一 | 多对多 的关系吧
    * 但是最为复杂的就是我们的 多对多的关系了吧
    * 因为表和表之间的多对多的话，需要使用第三方表进行操作多对多之间的关系的呐
* 常见的聚合函数有
    * `COUNT`  --  统计数量
    * `AVG`  -- 统计平均值
    * `SUM`  -- 统计总和
    * `MAX`  -- 统计最大值
    * `MIN`  -- 统计最小值
    * `GROUP BY`  -- 分组查询
```sql
-- 查询满足条件的总数量
SELECT COUNT(*) AS count_age FROM node_database.`user` WHERE age > 18;

-- 查询满足条件的平均值
SELECT AVG(age) AS avg_age FROM node_database.`user` WHERE age > 18;

-- 查询满足条件的总和
SELECT SUM(age) AS sum_age FROM node_database.`user` WHERE age > 18;

-- 查询满足条件的最大值
SELECT MAX(age) AS max_age FROM node_database.`user` WHERE age > 18;

-- 查询满足条件的最小值
SELECT MIN(age) AS min_age FROM node_database.`user` WHERE age > 18;
```

### 分组 DQL 语句
* 分组查询，就是对我们的数据进行分组，然后进行聚合操作，并且进行分组查询的呐
```sql
-- 分组查询，并且进行聚合操作
SELECT COUNT(*) AS count_age, age FROM node_database.`user` GROUP BY age;

-- 分组查询，并且进行聚合操作，并且进行排序操作
SELECT COUNT(*) AS count_age, age FROM node_database.`user` GROUP BY age ORDER BY age DESC;

-- 分组查询，并且进行聚合操作，并且进行排序操作，并且进行分组查询的别名，排序约束
SELECT 
  COUNT(*) AS count_age, 
  SUM(age) AS sum_age, 
  MAX(age) AS max_age, 
  MIN(age) AS min_age, 
  AVG(age) AS avg_age,
  age AS user_age 
    FROM node_database.`user` 
      GROUP BY age 
      ORDER BY age DESC;
      
-- 分组查询，并且进行聚合操作，并且进行排序操作，并且进行分组查询的别名，HAVING 约束限制
-- HAVING 和我们的 GROUP BY 一般进行连用
-- 使用 HAVING 对分组查询出的数据进行过滤
-- 没有进行分组的，就是使用我们的 WHERE 进行数据过滤的呐
SELECT     
  COUNT(*) AS count_age, 
  SUM(age) AS sum_age, 
  MAX(age) AS max_age, 
  MIN(age) AS min_age, 
  AVG(age) AS avg_age,
  age AS user_age 
    FROM node_database.`user` 
      GROUP BY age 
      ORDER BY age DESC
      HAVING age > 18;  
```
### 多表 DQL 语句
* 多表查询，就是我们的表和表之间的关联查询，并且进行聚合操作，并且进行分组查询的呐
* 表和表之间的关系含有，我们的: 一对一 | 一对多 | 多对一 | 多对多 的关系吧
    * 这个也是我们的开发团队中的 产品需要注重学习的一个方向，数据库表的设计吧
    * 数据库表之间的设计的合理性，才可以便捷于我们的实际应用的开发吧
    * 在设计数据库表的时候，我们一定要考虑清楚数据表之间的关系图吧，这一点需要注重注意一下的呐
```sql
-- 歌曲列表
CREATE TABLE IF NOT EXISTS songs_list (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- id
  name VARCHAR(255) NOT NULL,  -- 歌曲名
  singer VARCHAR(255) NOT NULL,  -- 歌手
  album VARCHAR(255) NOT NULL,  -- 专辑
  time VARCHAR(255) NOT NULL,  -- 时间
);

-- 歌词详情表
CREATE TABLE IF NOT EXISTS songs_list_detail (
  song_id INT NOT NULL,  -- 歌曲 id
  song_name VARCHAR(255) NOT NULL,  -- 歌曲名
  song_singer VARCHAR(255) NOT NULL,  -- 歌手
  song_album VARCHAR(255) NOT NULL,  -- 专辑
  song_time VARCHAR(255) NOT NULL,  -- 时间
  FOREIGN KEY (song_id) REFERENCES songs_list(id) ON DELETE CASCADE ON UPDATE CASCADE -- 外键约束
);

-- 歌手详情表
CREATE TABLE IF NOT EXISTS singer_detail (
  singer_id INT NOT NULL,  -- 歌手 id
  singer_name VARCHAR(255) NOT NULL,  -- 歌手名
  singer_album VARCHAR(255) NOT NULL,  -- 专辑
  singer_time VARCHAR(255) NOT NULL,  -- 时间
  singer_introDuction TEXT NOT NULL,  -- 歌手介绍
  FOREIGN KEY (singer_id) REFERENCES songs_list(id) ON DELETE CASCADE ON UPDATE CASCADE -- 外键约束
);

CREATE TABLE IF NOT EXISTS singer_introduction_detail (
  singer_id INT NOT NULL,
  up INT NOT NULL,
  down INT NOT NULL,
  introDuction TEXT NOT NULL,
  FOREIGN KEY (singer_id) REFERENCES singer_detail(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 专辑详情表
CREATE TABLE IF NOT EXISTS album_detail (
  album_id INT NOT NULL,
  album_name VARCHAR(255) NOT NULL,
  album_singer VARCHAR(255) NOT NULL,
  album_time VARCHAR(255) NOT NULL,
  album_introDuction TEXT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES songs_list(id) ON DELETE CASCADE ON UPDATE CASCADE
);
```
* 我们在思考建表的途径中，我们也是需要考虑解决表的字段冗余的，虽然上面的多张表就十分的冗余
* 但是没得办法，我只是一个 web-font-end-infra，不是一个 web-back-end-infra，所以说就简单的举个例子了吧
* 在实际上的大厂中的话，我们的开发团队中也是具备数据库的开发人员的呐
    * 对于我们来说的话，我们主要需要进行思考的就是我们的拓展自己的技术栈，对每个方向的业务都有一定的了解
    * 为以后成为真真的架构师以及团队 leaders 做好准备吧
* 将多张表进行连接起来的话，我们是可以使用我们的外键约束的呐
    * `FOREIGN KEY (key) REFERENCES TABLE_NAME(key) ON ...`
* 添加外键时具备的外键约束
    * `ON` 就是通过该字段进行我们的外键约束设置的呐
    * `ON DELETE 约束条件设置 ON UPDATE 约束条件设置`
        * `RESTRICT` 默认的，如果关联的数据存在的话，就不允许进行删除和更新当前数据了
        * `NO ACTION` 和默认的一致八
        * `CASCADE` 在进行更新数据或者说删除时候会检查是否外键具备关联数据
            * 更新: 那么就会更新对应数据
            * 删除: 那么就会删除对应数据
            * 这个属性的设置，是可以实现我们数据操作的一致性的，所以说我们常使用他吧
        * `SET NULL` 在进行更新数据或者说删除时候会检查是否外键具备关联数据，对应关联的数据置为NULL
* 连表查询的话，我们可以进行的操作的思路是
    * 从多张表中查询数据，然后通过 where 进行过滤数据即可
    * 我们也可以使用我们的 inner join | left join | right join 来进行连接查询的
        * 先将我们的表连接起来，然后进行 ON 过滤数据即可
        * left join 就是在进行查表得时候以左边得表为主，查询出所有得数据，然后通过过滤条件进行过滤即可
        * right join 就是在进行查表得时候以右边得表为主，查询出所有得数据，然后通过过滤条件进行过滤即可
        * inner join 就是在进行查表得时候以两边得表为主，查询出所有得数据，然后通过过滤条件进行过滤即可
```sql
-- 多表查询，并且进行聚合操作，并且进行分组查询的呐
SELECT * FROM user, songs_list WHERE user.id = songs_list.id AND songs_list.id = 1 ORDER BY user.id DESC;
SELECT * FROM user INNER JOIN songs_list ON user.id = songs_list.id AND songs_list.id = 1 ORDER BY user.id DESC;
SELECT * FROM user LEFT JOIN songs_list ON user.id = songs_list.id AND songs_list.id = 1 ORDER BY user.id DESC;
SELECT * FROM user RIGHT JOIN songs_list ON user.id = songs_list.id AND songs_list.id = 1 ORDER BY user.id DESC;
```

## NodeJs Mysql2 操作Mysql数据库
* 在我们的 NodeJS 程序中我们可以实现实现使用的数据库含有我们的
    * mysql
    * mongodb
    * redis
    * elasticsearch
* 操作我们的 mysql 的话主要就是实现使用我们的 mysql2 的应用第三方包吧
* 后端进行查询数据库的操作是
    * 从数据库中进行获取得到的信息是一个一个的对象
    * 我们需要将这些对象进行封装，然后进行返回到前端的，主要的返回的数据是我们的 JSON 数据罢了
    * 一般的数据格式为我们的数组对象形式吧
    * mysql 查询语句中是可以使用内置的函数 JSON_OBJECT() | JSON_ARRAYAGG() 来进行封装数据到 JSON 格式中
```sql
-- 查询数据并且转化为 json 对象数据
SELECT 
  JSON_OBJECT('id', id, 'name', name, 'singer', singer, 'album', album, 'time', time) 
  AS data 
  FROM songs_list 
  WHERE id = 1;
  
-- 多对多转化为数组
SELECT *, 
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'song_id', songs_list_detail.song_id, 
      'song_name', songs_list_detail.song_name, 
      'song_singer', songs_list_detail.song_singer, 
      'song_album', songs_list_detail.song_album, 
      'song_time', songs_list_detail.song_time)
    ) AS 
  song_list FROM songs_list 
  LEFT JOIN songs_list_detail 
  ON songs_list.id = songs_list_detail.song_id 
  WHERE songs_list.id = 1
  LEFT JOIN singer_detail
  ON songs_list_detail.singer_id = singer_detail.singer_id
  WHERE songs_list.id = 1
  GROUP BY songs_list.id;  
```
* `mysql2基本查询语句`
```javascript
const mysql = require("mysql2")

// 实现连接数据库
const connection = mysql.createConnection({
  host: "localhost",  // 连接本地数据库
  port: 3306, // 连接数据库端口
  user: "root", // 用户名
  password: "451674",  // 密码
  database: "node_database"  // 指定使用的数据库
})

// 开始操作数据库
const statement = `
  SELECT 
    id AS user_id, 
    name AS user_name, 
    password AS user_password 
  FROM user ;`

/**
 * query 方法就是实现的是我们的进行查询吧
 * err 返回错误
 * values 返回查询结果集
 * fields 查询字段集合
 */
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log("数据查询失败")
    return
  }
  console.log(values, fields)
})
```
* `prepared statement`
    * 预处理语句的使用
    * 预处理语句可以实现的是我们的防止 sql 的注入吧
    * 底层的实现原理的话，会把我们的原本存在的一些 sql 语句进行优化后进行存储起来吧，底层做了一定的优化的操作吧
* `connection pools`
    * 就是我们的数据库连接池吧
    * 和一些偏向于线程操作的语言中的线程池差不多吧，这里不点名是什么语言，一直用的老套的操作
    * 连接池主要是解决的是我们的多个用户之间进行连接时候的冲突问题的解决吧
    * 主要使用的 api 就是我们的 `mysql.createPool` 吧
        * connectionLimit: 10 // 连接池中最大的连接数量
```javascript
const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "451674",
  database: "node_database",
  connectionLimit: 10
})

const statement = `
  SELECT 
    id AS user_id, 
    name AS user_name, 
    password AS user_password 
  FROM user ;`

pool.getConnection().then(connection => {
    connection.query("SELECT * FROM user").then(result => {
        console.log(result)
    })
})
```
* `promise 操作数据库`
    * promise 主要实现的是我们的异步的连接
    * 主要的话使用于我们的连接池吧
```javascript
const mysql = require("mysql2/promise")
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "451674",
  database: "node_database",
  connectionLimit: 10
})

const statement = `
  SELECT 
    id AS user_id, 
    name AS user_name, 
    password AS user_password 
  FROM user ;
`

pool.promise().execute(statement, [1000, 9]).then((res) => {
    console.log(res.values, res.fields)
}).catch(err => {
    console.log(err)
})
```